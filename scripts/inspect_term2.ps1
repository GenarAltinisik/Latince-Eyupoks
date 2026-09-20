# scripts/inspect_term2.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$jsonPath = Join-Path $PSScriptRoot "raw_corpus.json"
$data = Get-Content $jsonPath -Raw | ConvertFrom-Json

$term2 = $data | Where-Object { $_.term -eq "Dönem 2" }

Write-Host "=== Sample Term 2 Slides ==="
foreach ($doc in $term2 | Select-Object -First 5) {
    Write-Host "`n--- Document: $($doc.file) ---"
    if ($doc.slides.Count -gt 1) {
        Write-Host "Slide 2 text:"
        Write-Host $doc.slides[1].text
    }
}
