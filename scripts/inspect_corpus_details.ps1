# scripts/inspect_corpus_details.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$jsonPath = Join-Path $PSScriptRoot "raw_corpus.json"
$data = Get-Content $jsonPath -Raw | ConvertFrom-Json

Write-Host "Total files in corpus: $($data.Count)"

$filesWithSlides = 0
$totalSlides = 0

foreach ($d in $data) {
    $nonEmpty = ($d.slides | Where-Object { $_.text.Trim().Length -gt 0 }).Count
    $totalSlides += $nonEmpty
    if ($nonEmpty -gt 0) { $filesWithSlides++ }
    Write-Host "$($d.file): $nonEmpty / $($d.slideCount) slides non-empty"
}

Write-Host "`nFiles with extracted slides: $filesWithSlides / $($data.Count)"
Write-Host "Total valid slides extracted: $totalSlides"

# Let's inspect 3 random slides from Term 1 and 3 from Term 2
Write-Host "`n=== Sample Slide: Term 1, Week 2 (LatinceGramer2.1) ==="
$g2 = $data | Where-Object { $_.file -eq "LatinceGramer2.1.pdf" }
if ($g2 -and $g2.slides.Count -gt 2) {
    Write-Host "Slide 3 text:"
    Write-Host $g2.slides[2].text
}

Write-Host "`n=== Sample Slide: Term 1, Week 4 (LatinceGramer4.1) ==="
$g4 = $data | Where-Object { $_.file -eq "LatinceGramer4.1.pdf" }
if ($g4 -and $g4.slides.Count -gt 2) {
    Write-Host "Slide 3 text:"
    Write-Host $g4.slides[2].text
}

Write-Host "`n=== Sample Slide: Term 1, Week 10 (LatinceGramer10.1) ==="
$g10 = $data | Where-Object { $_.file -eq "LatinceGramer10.1.pdf" }
if ($g10 -and $g10.slides.Count -gt 2) {
    Write-Host "Slide 3 text:"
    Write-Host $g10.slides[2].text
}
