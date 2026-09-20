# scripts/extract_vocab_proper.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$corpus = Get-Content (Join-Path $PSScriptRoot "raw_corpus.json") -Raw | ConvertFrom-Json
Write-Host "Loaded $($corpus.Count) documents from raw_corpus.json"

$vocabMap = @{}
$lessons = @()

function Clean-Key($k) {
    $s = ($k -replace '[\(\)\s\.\,\-\*]', '').ToLower()
    return $s
}

function Get-Category($p, $s) {
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

$regexList = @(
    '^(?<lemma>[\p{L}\s\(\)\/]+?)(?:,\s*|\s+)(?<stem>-[^\,\;]+?|[\p{L}]+)\s*,\s*(?<pos>m\.|f\.|n\.|m\.\/f\.|adj\.|v\.|adv\.|prep\.|conj\.|pron\.|özel isim)\s*,?\s*(?<meaning>.*)$',
    '^(?<lemma>[\p{L}\s\(\)]+?)\s*,\s*(?<stem>[\p{L}\s,\-\d]+?)\s*,\s*(?<pos>\d*\,?\s*v\.)\s*,?\s*(?<meaning>.*)$',
    '^(?<lemma>[\p{L}\s\(\)]+?)\s*,\s*(?<pos>adv\.|prep\.|conj\.|pron\.)\s*,?\s*(?<meaning>.*)$',
    '^(?<lemma>[\p{L}\s\(\)]+?)\s*,\s*(?<stem>-[a-z]+|\w+is|\w+i)\s*,\s*(?<pos>m\.|f\.|n\.)\s*,?\s*(?<meaning>.*)$'
)

$totalCandidates = 0
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

            foreach ($rx in $regexList) {
                if ($tl -match $rx) {
                    $l = $matches['lemma'].Trim().Trim('*').Trim()
                    $s = if ($matches['stem']) { $matches['stem'].Trim() } else { "-" }
                    $p = if ($matches['pos']) { $matches['pos'].Trim() } else { "" }
                    $m = $matches['meaning'].Trim()

                    if ($l.Length -gt 1 -and $l -notmatch "^\d+$" -and $m.Length -gt 0) {
                        $key = Clean-Key $l
                        if ($key.Length -gt 1) {
                            $totalCandidates++
                            $cat = Get-Category $p $s
                            if (-not $vocabMap.ContainsKey($key)) {
                                $vocabMap[$key] = [PSCustomObject]@{
                                    id = $key
                                    lemma = $l
                                    stem = $s
                                    pos = $p
                                    category = $cat
                                    meaning_tr = $m
                                    term = $termNum
                                    week = $week
                                    lessons = [System.Collections.Generic.List[string]]::new()
                                }
                            }
                            if (-not $vocabMap[$key].lessons.Contains($lessonId)) {
                                $vocabMap[$key].lessons.Add($lessonId)
                            }
                            break
                        }
                    }
                }
            }
        }
    }
}

Write-Host "Total extracted unique words: $($vocabMap.Count) (from $totalCandidates occurrences)"

$vocabList = $vocabMap.Values | Sort-Object term, week, lemma
$vJson = $vocabList | ConvertTo-Json -Depth 5
$vJs = "// Latince Eyupoks - Eyüp Hoca Kelime Dağarcığı (Toplam: " + $vocabList.Count + " Kelime)`r`n" +
       "const EYUP_VOCABULARY = " + $vJson + ";`r`n`r`n" +
       "if (typeof module !== 'undefined') module.exports = { EYUP_VOCABULARY };"

$vPath = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "data\eyup_vocabulary.js"
[System.IO.File]::WriteAllText($vPath, $vJs, [System.Text.Encoding]::UTF8)
Write-Host "Wrote $vPath with $($vocabList.Count) unique words."
