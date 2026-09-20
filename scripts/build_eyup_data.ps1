# scripts/build_eyup_data.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$corpusPath = Join-Path $PSScriptRoot "raw_corpus.json"
$corpus = Get-Content $corpusPath -Raw | ConvertFrom-Json

Write-Host "Processing corpus of $($corpus.Count) PDF documents..."

function Get-LessonInfo($file, $term) {
    $termNum = if ($term -match "1") { 1 } else { 2 }
    $week = 0
    $lecture = 0
    
    if ($file -match "Gramer(\d+)\.(\d+)") {
        $week = [int]$matches[1]
        $lecture = [int]$matches[2]
    } elseif ($file -match "Sunumu\s+(\d+)\.(\d+)") {
        $week = [int]$matches[1]
        $lecture = [int]$matches[2]
    }

    $id = "T" + $termNum + "_W" + $week + "_L" + $lecture
    $title = "Dönem " + $termNum + " • Hafta " + $week + " (Ders " + $lecture + ")"
    
    return [PSCustomObject]@{
        id = $id
        term = $termNum
        week = $week
        lecture = $lecture
        title = $title
        file = $file
    }
}

$vocabMap = [System.Collections.Generic.Dictionary[string, PSObject]]::new()
$lessonsList = [System.Collections.Generic.List[PSObject]]::new()

function Normalize-Key($str) {
    $c = ($str -replace '[\(\)\s\.\,\-]', '').ToLower()
    $c = $c -replace '[āă]', 'a' -replace '[ēĕ]', 'e' -replace '[īĭ]', 'i' -replace '[ōŏ]', 'o' -replace '[ūŭ]', 'u'
    return $c
}

function Determine-Category($pos, $stem, $lemma) {
    if ($pos -match "adj" -or $stem -match "-a,\s*-um" -or $stem -match "-is,\s*-e") { return "adjective" }
    if ($pos -match "v\." -or $pos -eq "v" -or $stem -match "-are" -or $stem -match "-ere" -or $stem -match "-ire") { return "verb" }
    if ($pos -match "adv") { return "adverb" }
    if ($pos -match "prep") { return "preposition" }
    if ($pos -match "conj") { return "conjunction" }
    if ($pos -match "pron") { return "pronoun" }
    
    # Nouns by declension
    if ($stem -match "-ae\b") { return "noun_1" }
    if ($stem -match "-[īi]\b" -or $stem -match "-ii\b") { return "noun_2" }
    if ($stem -match "-is\b" -or $stem -match "-\w+is\b") { return "noun_3" }
    if ($stem -match "-[ūu]s\b") { return "noun_4" }
    if ($stem -match "-[eē][īi]\b") { return "noun_5" }
    
    return "noun"
}

foreach ($doc in $corpus) {
    $info = Get-LessonInfo $doc.file $doc.term
    $lessonWords = [System.Collections.Generic.List[string]]::new()
    $lessonSentences = [System.Collections.Generic.List[PSObject]]::new()
    $slideSummaries = [System.Collections.Generic.List[PSObject]]::new()

    for ($i = 0; $i -lt $doc.slides.Count; $i++) {
        $slide = $doc.slides[$i]
        $text = $slide.text
        $lines = $text -split "`r`n|`n"
        
        $cleanLines = [System.Collections.Generic.List[string]]::new()
        foreach ($l in $lines) {
            $tl = $l.Trim().Replace([char]8211, '-').Replace([char]8212, '-')
            if ($tl.Length -gt 0) { $cleanLines.Add($tl) }
        }

        foreach ($line in $cleanLines) {
            $matched = $false
            $rawLemma = ""
            $stem = ""
            $pos = ""
            $meaning = ""

            # Pattern 1: Standard dictionary line: "fama, -ae, f., ün, şöhret" or "auriga -ae, m., atlı araba sürücüsü"
            if ($line -match '^([\p{L}\s\(\)\/]+?)(?:,|\s+)(-[^\,\;]+?|[a-zāēīōū]+)\s*,\s*(m\.|f\.|n\.|m\.\/f\.|adj\.|v\.|adv\.|prep\.|conj\.|pron\.|özel isim)\s*,?\s*(.*)$') {
                $rawLemma = $matches[1].Trim()
                $stem = $matches[2].Trim()
                $pos = $matches[3].Trim()
                $meaning = $matches[4].Trim()
                $matched = $true
            }
            # Pattern 2: Verb with principal parts: "laudo, -are, avi, -atum, 1, v., övmek" or "audeo, audere, ausus sum, 2, v., cesaret etmek"
            elseif ($line -match '^([\p{L}\s\(\)]+?)\s*,\s*([\p{L}\s,\-\d]+?)\s*,\s*(\d*\,?\s*v\.)\s*,?\s*(.*)$') {
                $rawLemma = $matches[1].Trim()
                $stem = $matches[2].Trim()
                $pos = "v."
                $meaning = $matches[4].Trim()
                $matched = $true
            }
            # Pattern 3: Simple word with pos: "nunc, adv., şimdi, şu anda" or "sine, prep., -meksizin (+ abl.)"
            elseif ($line -match '^([\p{L}\s\(\)]+?)\s*,\s*(adv\.|prep\.|conj\.|pron\.)\s*,?\s*(.*)$') {
                $rawLemma = $matches[1].Trim()
                $stem = "-"
                $pos = $matches[2].Trim()
                $meaning = $matches[3].Trim()
                $matched = $true
            }
            # Pattern 4: Noun without explicit pos tag: "deus, -i, m., tanrı"
            elseif ($line -match '^([\p{L}\s\(\)]+?)\s*,\s*(-[a-zāēīōū]+|\w+is|\w+i)\s*,\s*(tanrı|hayat|savaş|kral|köle|yol|şehir|orman|çocuk|kadın|akıl|insan|adalet|umut)\b(.*)$') {
                $rawLemma = $matches[1].Trim()
                $stem = $matches[2].Trim()
                $pos = "n."
                $meaning = ($matches[3] + $matches[4]).Trim()
                $matched = $true
            }

            if ($matched -and $rawLemma.Length -gt 1 -and -not ($rawLemma -match "^\d+$") -and $meaning.Length -gt 0) {
                # Clean up lemma
                $cleanLemma = $rawLemma -replace '^\*\s*', ''
                if ($cleanLemma -match "hali|grubu|durumlar|cümleler|çekim|kural" -or $cleanLemma.Length -gt 40) { continue }
                
                $key = Normalize-Key $cleanLemma
                if ($key.Length -gt 1) {
                    $cat = Determine-Category $pos $stem $cleanLemma
                    
                    if (-not $vocabMap.ContainsKey($key)) {
                        $vocabMap[$key] = [PSCustomObject]@{
                            id = $key
                            lemma = $cleanLemma
                            stem = $stem
                            pos = $pos
                            category = $cat
                            meaning_tr = $meaning
                            lessons = [System.Collections.Generic.List[string]]::new()
                            term = $info.term
                            week = $info.week
                        }
                    }
                    if (-not $vocabMap[$key].lessons.Contains($info.id)) {
                        $vocabMap[$key].lessons.Add($info.id)
                    }
                    if (-not $lessonWords.Contains($key)) {
                        $lessonWords.Add($key)
                    }
                }
            }
        }

        # Extract Example Sentences
        if ($text -match "ÖRNEK CÜMLELER" -or $text -match "Örnek Cümleler") {
            for ($k = 0; $k -lt $cleanLines.Count; $k++) {
                $cl = $cleanLines[$k]
                if ($cl -match "ÖRNEK CÜMLELER" -or $cl -match "Örnek Cümleler") { continue }
                if ($cl -match "\b(m\.|f\.|n\.|adj\.|v\.|adv\.|prep\.|conj\.)\b") { continue }
                
                # Check if it looks like a Latin sentence
                if ($cl -match "[\p{L}]+\s+[\p{L}]+" -and ($cl -match "\b(est|sunt|erat|erant|non|et|in|ad|cum|te|me|se|qui|quae|quod|potest|habent|fuit|fuerant)\b" -or $cl.EndsWith("."))) {
                    $latSent = $cl
                    $trSent = ""
                    if ($k + 1 -lt $cleanLines.Count) {
                        $nextLine = $cleanLines[$k + 1]
                        if (-not ($nextLine -match "\b(m\.|f\.|n\.|adj\.|v\.|adv\.|prep\.|conj\.)\b") -and $nextLine -match "[çğıöşüÇĞİÖŞÜ]|ydi|mıştı|olur|vardı|olamaz|edemez|etmek|görüyor|uyaracak") {
                            $trSent = $nextLine
                        }
                    }
                    $lessonSentences.Add([PSCustomObject]@{
                        latin = $latSent
                        tr = $trSent
                        slide = $slide.number
                    })
                }
            }
        }

        $slideSummaries.Add([PSCustomObject]@{
            number = $slide.number
            content = $text
        })
    }

    $lessonsList.Add([PSCustomObject]@{
        id = $info.id
        term = $info.term
        week = $info.week
        lecture = $info.lecture
        title = $info.title
        file = $info.file
        slideCount = $doc.slideCount
        vocabCount = $lessonWords.Count
        vocab = $lessonWords
        sentences = $lessonSentences
        slides = $slideSummaries
    })
}

Write-Host "Total unique vocabulary items found: $($vocabMap.Count)"
Write-Host "Total lessons processed: $($lessonsList.Count)"

# Save to data/eyup_vocabulary.js
$vocabList = $vocabMap.Values | Sort-Object term, week, lemma
$vocabJs = "const EYUP_VOCABULARY = " + ($vocabList | ConvertTo-Json -Depth 5) + ";`n`nif (typeof module !== 'undefined') module.exports = { EYUP_VOCABULARY };"
$vocabPath = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "data\eyup_vocabulary.js"
[System.IO.File]::WriteAllText($vocabPath, $vocabJs, [System.Text.Encoding]::UTF8)
Write-Host "Saved $vocabPath ($($vocabList.Count) words)"

# Save to data/eyup_curriculum.js
$sortedLessons = $lessonsList | Sort-Object term, week, lecture
$curriculumJs = "const EYUP_CURRICULUM = " + ($sortedLessons | ConvertTo-Json -Depth 6) + ";`n`nif (typeof module !== 'undefined') module.exports = { EYUP_CURRICULUM };"
$curriculumPath = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "data\eyup_curriculum.js"
[System.IO.File]::WriteAllText($curriculumPath, $curriculumJs, [System.Text.Encoding]::UTF8)
Write-Host "Saved $curriculumPath ($($sortedLessons.Count) lessons)"
