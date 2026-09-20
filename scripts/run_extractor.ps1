# scripts/run_extractor.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$csharpCode = Get-Content (Join-Path $PSScriptRoot "PdfExtractor.cs") -Raw
Add-Type -TypeDefinition $csharpCode -ReferencedAssemblies System.IO.Compression

$rootDir = (Get-Item $PSScriptRoot).Parent.FullName
$allPdfs = Get-ChildItem -Path $rootDir -Filter "*.pdf" -Recurse | Sort-Object FullName

Write-Host "Found $($allPdfs.Count) PDFs to extract..."
$stopwatch = [System.Diagnostics.Stopwatch]::StartNew()

$corpus = [System.Collections.Generic.List[PSObject]]::new()
$totalSlides = 0

foreach ($pdf in $allPdfs) {
    $term = if ($pdf.Directory.Name -match "1") { "Dönem 1" } else { "Dönem 2" }
    $slides = [PdfExtractor]::ExtractPdf($pdf.FullName)
    $totalSlides += $slides.Count
    
    $slideList = [System.Collections.Generic.List[PSObject]]::new()
    foreach ($s in $slides) {
        $slideList.Add([PSCustomObject]@{
            number = $s.Number
            text = $s.Text
        })
    }
    
    $corpus.Add([PSCustomObject]@{
        file = $pdf.Name
        term = $term
        relativePath = "$($pdf.Directory.Name)/$($pdf.Name)"
        slideCount = $slides.Count
        slides = $slideList
    })
    Write-Host "Extracted: $($pdf.Name) ($($slides.Count) slides)"
}

$stopwatch.Stop()
Write-Host "`nExtraction finished in $($stopwatch.ElapsedMilliseconds) ms!"
Write-Host "Total PDFs: $($corpus.Count), Total Slides: $totalSlides"

# Save corpus JSON
$jsonOut = $corpus | ConvertTo-Json -Depth 6
$outPath = Join-Path $PSScriptRoot "raw_corpus.json"
[System.IO.File]::WriteAllText($outPath, $jsonOut, [System.Text.Encoding]::UTF8)
Write-Host "Saved corpus to $outPath"
