# scripts/analyze_corpus.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$jsonPath = Join-Path $PSScriptRoot "raw_corpus.json"
$item = Get-Item $jsonPath
Write-Host "raw_corpus.json size: $($item.Length) bytes"

$data = Get-Content $jsonPath -Raw | ConvertFrom-Json
Write-Host "Total lecture documents: $($data.Count)"

$term1 = $data | Where-Object { $_.term -eq "Dönem 1" }
$term2 = $data | Where-Object { $_.term -eq "Dönem 2" }

Write-Host "Term 1 files: $($term1.Count)"
Write-Host "Term 2 files: $($term2.Count)"

# Let's inspect some slide texts from various weeks to check grammar topics
Write-Host "`n=== Sample Topics from Term 1 ==="
foreach ($doc in $term1) {
    $firstText = if ($doc.slides.Count -gt 1) { $doc.slides[1].text } else { $doc.slides[0].text }
    $titleLine = ($firstText -split "`r`n|`n")[0]
    Write-Host "$($doc.file) ($($doc.slideCount) slides): $titleLine"
}

Write-Host "`n=== Sample Topics from Term 2 ==="
foreach ($doc in $term2) {
    $firstText = if ($doc.slides.Count -gt 1) { $doc.slides[1].text } else { $doc.slides[0].text }
    $titleLine = ($firstText -split "`r`n|`n")[0]
    Write-Host "$($doc.file) ($($doc.slideCount) slides): $titleLine"
}
