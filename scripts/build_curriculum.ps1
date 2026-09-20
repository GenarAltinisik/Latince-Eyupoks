# scripts/build_curriculum.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$corpusPath = Join-Path $PSScriptRoot "raw_corpus.json"
$corpus = Get-Content $corpusPath -Raw | ConvertFrom-Json

$vocabPath = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "data\eyup_vocabulary.js"
$vocabContent = Get-Content $vocabPath -Raw
$jsonOnly = [regex]::Match($vocabContent, '\[[\s\S]*\]').Value
$vocabObj = $jsonOnly | ConvertFrom-Json

$vocabIds = [System.Collections.Generic.HashSet[string]]::new()
foreach ($v in $vocabObj) { [void]$vocabIds.Add($v.id) }

Write-Host "Loaded $($vocabObj.Count) vocabulary entries for curriculum indexing."

function Clean-Key($k) {
    return ($k -replace '[\(\)\s\.\,\-\*]', '').ToLower()
}

$lessons = [System.Collections.Generic.List[PSObject]]::new()

foreach ($doc in $corpus) {
    $termNum = if ($doc.term -match "1") { 1 } else { 2 }
    $week = 0
    $lecture = 0
    if ($doc.file -match "(\d+)\.(\d+)") {
        $week = [int]$matches[1]
        $lecture = [int]$matches[2]
    }
    $lessonId = "T" + $termNum + "_W" + $week + "_L" + $lecture

    $topics = [System.Collections.Generic.List[string]]::new()
    $lessonVocab = [System.Collections.Generic.List[string]]::new()
    $lessonSentences = [System.Collections.Generic.List[PSObject]]::new()
    $slidesList = [System.Collections.Generic.List[PSObject]]::new()

    foreach ($slide in $doc.slides) {
        $lines = $slide.text -split "`r`n|`n"
        $firstLine = ""
        foreach ($l in $lines) {
            $tl = $l.Trim()
            if ($tl.Length -gt 2 -and -not ($tl -match "^\d+$") -and $tl -ne "LINGUA LATINA") {
                $firstLine = $tl
                break
            }
        }
        if ($firstLine.Length -gt 2 -and $firstLine.Length -lt 60 -and -not $topics.Contains($firstLine)) {
            $topics.Add($firstLine)
        }

        # Check for vocabulary items present on this slide
        foreach ($l in $lines) {
            $words = $l -split '[\s,\.\;\:\(\)\-]+'
            foreach ($w in $words) {
                $ck = Clean-Key $w
                if ($vocabIds.Contains($ck) -and -not $lessonVocab.Contains($ck)) {
                    $lessonVocab.Add($ck)
                }
            }
        }

        # Check for sentences
        if ($slide.text -match "ÖRNEK CÜMLELER" -or $slide.text -match "Örnek Cümleler") {
            $cleanLines = [System.Collections.Generic.List[string]]::new()
            foreach ($l in $lines) {
                $tl = $l.Trim()
                if ($tl.Length -gt 0 -and $tl -notmatch "ÖRNEK CÜMLELER|Örnek Cümleler" -and $tl -notmatch "\b(m\.|f\.|n\.|adj\.|v\.|adv\.|prep\.|conj\.)\b") {
                    $cleanLines.Add($tl)
                }
            }
            for ($k = 0; $k -lt $cleanLines.Count; $k++) {
                $cl = $cleanLines[$k]
                if ($cl -match "\p{L}+\s+\p{L}+" -and ($cl -match "\b(est|sunt|erat|erant|non|et|in|ad|cum|te|me|se|qui|quae|quod|potest|habent|fuit|delectare|monebunt|audebunt|cenabant)\b" -or $cl.EndsWith("."))) {
                    $tr = if ($k + 1 -lt $cleanLines.Count) { $cleanLines[$k + 1] } else { "" }
                    $lessonSentences.Add([PSCustomObject]@{
                        latin = $cl
                        tr = $tr
                        slide = $slide.number
                    })
                }
            }
        }

        $slidesList.Add([PSCustomObject]@{
            number = $slide.number
            header = $firstLine
            content = $slide.text
        })
    }

    $topTopics = $topics | Select-Object -First 3
    $topicStr = if ($topTopics.Count -gt 0) { " - " + ($topTopics -join ', ') } else { "" }
    $title = "Dönem " + $termNum + " • Hafta " + $week + " (Ders " + $lecture + ")" + $topicStr

    $lessons.Add([PSCustomObject]@{
        id = $lessonId
        term = $termNum
        week = $week
        lecture = $lecture
        title = $title
        file = $doc.file
        slideCount = $doc.slideCount
        vocabCount = $lessonVocab.Count
        vocab = $lessonVocab
        sentences = $lessonSentences
        slides = $slidesList
    })
}

$sortedLessons = $lessons | Sort-Object term, week, lecture
$curriculumJson = $sortedLessons | ConvertTo-Json -Depth 6
$curriculumJs = "// Latince Eyupoks - Doç. Dr. Eyüp Çoraklı 1. ve 2. Dönem Müfredat ve Ders Anlatımları`r`n" +
                "const EYUP_CURRICULUM = " + $curriculumJson + ";`r`n`r`n" +
                "if (typeof module !== 'undefined') module.exports = { EYUP_CURRICULUM };"

$cPath = Join-Path (Get-Item $PSScriptRoot).Parent.FullName "data\eyup_curriculum.js"
[System.IO.File]::WriteAllText($cPath, $curriculumJs, [System.Text.Encoding]::UTF8)
Write-Host "SUCCESS! Saved curriculum: $cPath with $($sortedLessons.Count) lessons!"
