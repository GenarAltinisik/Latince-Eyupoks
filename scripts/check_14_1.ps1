$path = (Get-ChildItem -Path . -Filter "*Gramer14.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

Write-Host "Length of 14.1: $($rawPdf.Length)"
$cmapMatches = [regex]::Matches($rawPdf, "/ToUnicode")
Write-Host "ToUnicode in 14.1: $($cmapMatches.Count)"
$encodingMatches = [regex]::Matches($rawPdf, "/Encoding\s+/([A-Za-z0-9_\-]+)")
foreach ($em in $encodingMatches) {
    Write-Host "Encoding: $($em.Value)"
}
$fontMatches = [regex]::Matches($rawPdf, "/BaseFont\s+/([A-Za-z0-9_\-]+)")
foreach ($fm in $fontMatches) {
    Write-Host "BaseFont: $($fm.Value)"
}

# Let's inspect object 2 or first content stream
$contents = [regex]::Matches($rawPdf, "/Contents\s+(\d+)\s+0\s+R")
Write-Host "Contents matches: $($contents.Count)"
if ($contents.Count -gt 0) {
    $cObj = [int]$contents[0].Groups[1].Value
    Write-Host "First content obj: $cObj"
    $cTxt = [PdfExtractor]::GetStreamContent($bytes, $rawPdf, $cObj)
    Write-Host "Content length: $($cTxt.Length)"
    Write-Host "Snippet: $($cTxt.Substring(0, [Math]::Min(300, $cTxt.Length)))"
}
