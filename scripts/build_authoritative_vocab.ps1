# scripts/build_authoritative_vocab.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$corpusPath = Join-Path $PSScriptRoot "raw_corpus.json"
$corpus = Get-Content $corpusPath -Raw | ConvertFrom-Json

# Load latin_core_tr.csv lookup
$trCsvPath = Join-Path $PSScriptRoot "latin_core_tr.csv"
$trLines = Get-Content $trCsvPath -Raw | ConvertFrom-Csv
$lookupTr = @{}
foreach ($row in $trLines) {
    # Extract first word from Headword
    $firstWord = ($row.Headword -replace '[\(\)\s\.\,\-\*].*$', '').ToLower()
    $cleanKey = ($firstWord -replace '[āă]', 'a' -replace '[ēĕ]', 'e' -replace '[īĭ]', 'i' -replace '[ōŏ]', 'o' -replace '[ūŭ]', 'u').Trim()
    if ($cleanKey.Length -gt 0 -and -not $lookupTr.ContainsKey($cleanKey)) {
        $lookupTr[$cleanKey] = [PSCustomObject]@{
            definition = $row.Definition
            pos = $row.'Part of Speech'
            group = $row.'Semantic Group'
        }
    }
}
Write-Host "Loaded $($lookupTr.Count) reference words from latin_core_tr.csv"

# Fallback dictionary for common grammar words listed in tables
$manualDict = @{
    "basium" = "öpücük, buse"
    "exitium" = "yıkım, felaket, yok oluş"
    "culpa" = "suç, kusur, kabahat"
    "supero" = "aşmak, alt etmek, galip gelmek"
    "libertas" = "özgürlük, hürriyet"
    "ratio" = "hesap; akıl, muhakeme; yöntem, tarz"
    "valetudo" = "sağlık, sağlık durumu, sıhhat"
    "schema" = "şekil, biçim, şema"
    "consul" = "konsül (Roma'nın en üst yöneticisi)"
    "pater" = "baba, ata"
    "mater" = "anne, valide"
    "frater" = "erkek kardeş"
    "soror" = "kız kardeş"
    "amor" = "sevgi, aşk"
    "dolor" = "acı, keder, sızı"
    "arbor" = "ağaç"
    "lumen" = "ışık, göz nuru; aydınlık"
    "flumen" = "nehir, akarsu, ırmak"
    "nomen" = "ad, isim; ün"
    "civitas" = "devlet, yurttaş topluluğu, kent"
    "iuvenis" = "genç adam, delikanlı"
    "senex" = "yaşlı adam, ihtiyar"
    "caput" = "baş, kafa; hayat; başkent"
    "mors" = "ölüm"
    "hostis" = "düşman (kamusal düşman)"
    "civis" = "yurttaş, vatandaş"
    "mons" = "dağ"
    "pons" = "köprü"
    "gens" = "kavim, soy, boy, sülale"
    "nox" = "gece"
    "pars" = "parça, kısım, taraf"
    "urbs" = "kent, şehir (özl. Roma)"
    "mare" = "deniz"
    "animal" = "canlı, hayvan"
    "exemplar" = "örnek, numune"
    "vis" = "güç, kuvvet, şiddet"
    "vires" = "fiziksel kuvvet, güçler"
    "ignis" = "ateş"
    "navis" = "gemi, tekne"
    "avis" = "kuş"
    "vulpes" = "tilki"
    "canis" = "köpek"
    "panis" = "ekmek"
    "auris" = "kulak"
    "finis" = "sınır, son, uç; amaç"
    "fines" = "ülke sınırları, topraklar"
    "vallis" = "vadi"
    "collis" = "tepe"
    "orbis" = "çember, daire; orbis terrarum: dünya"
    "testis" = "tanık, şahit"
    "vestis" = "giysi, elbise"
    "aetas" = "çağ, yaş, ömür, devir"
    "veritas" = "hakikat, gerçeklik"
    "virtus" = "cesaret, erdem, yiğitlik"
    "voluptas" = "haz, zevk"
    "pax" = "barış"
    "lex" = "yasa, kanun"
    "vox" = "ses, söz"
    "dux" = "önder, komutan, rehber"
    "rex" = "kral, hükümdar"
    "iudex" = "yargıç, hâkim"
    "miles" = "asker"
    "eques" = "süvari, atlı"
    "pedes" = "piyade, yaya"
    "laus" = "övgü, şan"
    "fraus" = "hile, aldatma; suç"
    "corpus" = "beden, gövde, vücut"
    "tempus" = "zaman; uygun an, fırsat"
    "opus" = "iş, yapıt, eser"
    "genus" = "soy, ırk; cins, tür"
    "vulnus" = "yara"
    "scelus" = "alçaklık, suç, cinayet"
    "sidus" = "yıldız, burç, takımyıldız"
    "pectus" = "göğüs, yürek, bağır"
    "nemus" = "koruluk, kutsal orman"
    "onus" = "yük, ağırlık"
    "foedus" = "antlaşma, ittifak"
    "litus" = "kıyı, kumsal, sahil"
    "os" = "ağız; yüz; kemik"
    "rus" = "kır, köy"
    "ius" = "hukuk, hak, adalet"
    "fructus" = "meyve, ürün; yarar, fayda"
    "manus" = "el; birlik, çete"
    "cornu" = "boynuz; ordu kanadı"
    "genu" = "diz"
    "exercitus" = "ordu"
    "senatus" = "senato"
    "domus" = "ev, yurt, aile"
    "dies" = "gün, gündüz"
    "res" = "şey, nesne, durum, olay; res publica: devlet, cumhuriyet"
    "spes" = "umut, beklenti"
    "fides" = "inanç, güven, sadakat"
    "acies" = "keskin kenar; savaş hattı, ordu düzeni"
    "facies" = "yüz, çehre, dış görünüş"
    "effigies" = "suret, tasvir, heykel"
    "glacies" = "buz"
}

function Clean-Key($k) {
    $s = ($k -replace '[\(\)\s\.\,\-\*]', '').ToLower()
    return $s
}

function Determine-Category($p, $s) {
    $pos = $p.ToLower()
    $stem = $s.ToLower()
    if ($pos -match "adj" -or $stem -match "-a,\s*-um" -or $stem -match "-is,\s*-e") { return "adjective" }
    if ($pos -match "v\." -or $pos -eq "v" -or $stem -match "-are" -or $stem -match "-ere" -or $stem -match "-ire") { return "verb" }
    if ($pos -match "adv") { return "adverb" }
    if ($pos -match "prep") { return "preposition" }
    if ($pos -match "conj") { return "conjunction" }
    if ($pos -match "pron") { return "pronoun" }
    
    if ($stem -match "-ae\b") { return "noun_1" }
    if ($stem -match "-i\b" -or $stem -match "-ii\b") { return "noun_2" }
    if ($stem -match "-is\b" -or $stem -match "-\w+is\b") { return "noun_3" }
    if ($stem -match "-us\b") { return "noun_4" }
    if ($stem -match "-ei\b") { return "noun_5" }
    return "noun"
}

$vocabMap = @{}

foreach ($doc in $corpus) {
    $termNum = if ($doc.term -match "1") { 1 } else { 2 }
    $week = 0
    $lecture = 0
    if ($doc.file -match "(\d+)\.(\d+)") {
        $week = [int]$matches[1]
        $lecture = [int]$matches[2]
    }
    $lessonId = "T" + $termNum + "_W" + $week + "_L" + $lecture

    foreach ($slide in $doc.slides) {
        $lines = $slide.text -split "`r`n|`n"
        foreach ($line in $lines) {
            $tl = $line.Trim().Replace([char]8211, '-').Replace([char]8212, '-')
            if ($tl.Length -lt 4 -or $tl.Length -gt 150) { continue }
            if ($tl -match "hali|grubu|durumlar|cümleler|çekim|kural|örnek|zamanı") { continue }

            $matched = $false
            $lemma = ""
            $stem = ""
            $pos = ""
            $meaning = ""

            # Pattern 1: Standard dictionary line with meaning
            if ($tl -match '^(?<lemma>[\p{L}\s\(\)\/]+?)(?:,\s*|\s+)(?<stem>-[^\,\;]+?|[\p{L}]+)\s*,\s*(?<pos>m\.|f\.|n\.|m\.\/f\.|adj\.|v\.|adv\.|prep\.|conj\.|pron\.|özel isim)\s*,?\s*(?<meaning>.*)$') {
                $lemma = $matches['lemma'].Trim().Trim('*')
                $stem = $matches['stem'].Trim()
                $pos = $matches['pos'].Trim()
                $meaning = $matches['meaning'].Trim()
                $matched = $true
            }
            # Pattern 2: Verb with principal parts: laudo, -are, avi, -atum, 1, v., övmek
            elseif ($tl -match '^(?<lemma>[\p{L}\s\(\)]+?)\s*,\s*(?<stem>[\p{L}\s,\-\d]+?)\s*,\s*(?<pos>\d*\,?\s*v\.)\s*,?\s*(?<meaning>.*)$') {
                $lemma = $matches['lemma'].Trim().Trim('*')
                $stem = $matches['stem'].Trim()
                $pos = "v."
                $meaning = $matches['meaning'].Trim()
                $matched = $true
            }
            # Pattern 3: Word without meaning at end of line (e.g. "consul, -is, m.," or "exitium, -ii, n.,")
            elseif ($tl -match '^(?<lemma>[\p{L}\s\(\)]+?)(?:,\s*|\s+)(?<stem>-[^\,\;]+?|[\p{L}]+)\s*,\s*(?<pos>m\.|f\.|n\.|m\.\/f\.|adj\.|v\.)\s*,?\s*$') {
                $lemma = $matches['lemma'].Trim().Trim('*')
                $stem = $matches['stem'].Trim()
                $pos = $matches['pos'].Trim()
                $meaning = ""
                $matched = $true
            }
            # Pattern 4: Simple pos (nunc, adv., şimdi)
            elseif ($tl -match '^(?<lemma>[\p{L}\s\(\)]+?)\s*,\s*(?<pos>adv\.|prep\.|conj\.|pron\.)\s*,?\s*(?<meaning>.*)$') {
                $lemma = $matches['lemma'].Trim().Trim('*')
                $stem = "-"
                $pos = $matches['pos'].Trim()
                $meaning = $matches['meaning'].Trim()
                $matched = $true
            }

            if ($matched) {
                # Handle variants like conlega (collega) -> primary: conlega, alt: collega
                $primaryLemma = ($lemma -replace '\([^\)]*\)', '').Trim()
                if ($primaryLemma.Length -lt 2 -or $primaryLemma -match "^\d+$") { continue }

                $key = Clean-Key $primaryLemma
                if ($key.Length -gt 1) {
                    # If meaning is empty, look up in reference sources
                    if ([string]::IsNullOrWhiteSpace($meaning)) {
                        if ($manualDict.ContainsKey($key)) {
                            $meaning = $manualDict[$key]
                        } elseif ($lookupTr.ContainsKey($key)) {
                            $meaning = $lookupTr[$key].definition
                        }
                    }

                    if (-not [string]::IsNullOrWhiteSpace($meaning)) {
                        $cat = Determine-Category $pos $stem
                        if (-not $vocabMap.ContainsKey($key)) {
                            $vocabMap[$key] = [PSCustomObject]@{
                                id = $key
                                lemma = $primaryLemma
                                stem = $stem
                                pos = $pos
                                category = $cat
                                meaning_tr = $meaning
                                term = $termNum
                                week = $week
                                lessons = [System.Collections.Generic.List[string]]::new()
                            }
                        }
                        if (-not $vocabMap[$key].lessons.Contains($lessonId)) {
                            $vocabMap[$key].lessons.Add($lessonId)
                        }
                    }
                }
            }
        }
    }
}

Write-Host "Total authoritative unique vocabulary entries: $($vocabMap.Count)"

# Save authoritative eyup_vocabulary.js
$vocabList = $vocabMap.Values | Sort-Object term, week, lemma
$vJson = $vocabList | ConvertTo-Json -Depth 5
$vJs = "// Latince Eyupoks - Doç. Dr. Eyüp Çoraklı Latince 1 & 2 Ders Kelime Dağarcığı (Toplam: $($vocabList.Count) Kelime)`r`n" +
       "const EYUP_VOCABULARY = $vJson;`r`n`r`n" +
       "if (typeof module !== 'undefined') module.exports = { EYUP_VOCABULARY };"

$vPath = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "data\eyup_vocabulary.js"
[System.IO.File]::WriteAllText($vPath, $vJs, [System.Text.Encoding]::UTF8)
Write-Host "Saved authoritative vocabulary: $vPath ($($vocabList.Count) words)"
