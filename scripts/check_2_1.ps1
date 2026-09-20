Add-Type -TypeDefinition (Get-Content "scripts\PdfExtractor.cs" -Raw) -ReferencedAssemblies System.IO.Compression

$path = (Get-ChildItem -Path . -Filter "*Gramer2.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

Write-Host "File: Gramer2.1.pdf ($($bytes.Length) bytes)"
$cmapMatches = [regex]::Matches($rawPdf, '\b(\d+)\s+0\s+obj\b[\s\S]*?/ToUnicode\s+(\d+)\s+0\s+R')
Write-Host "Font Obj -> ToUnicode count: $($cmapMatches.Count)"
foreach ($m in $cmapMatches) {
    Write-Host "  Font $($m.Groups[1].Value) -> ToUnicode $($m.Groups[2].Value)"
}

if ($cmapMatches.Count -gt 0) {
    $cObj = [int]$cmapMatches[0].Groups[2].Value
    $cmapTxt = [PdfExtractor]::GetStreamContent($bytes, $rawPdf, $cObj)
    Write-Host "ToUnicode $cObj snippet:"
    Write-Host ($cmapTxt.Substring(0, [Math]::Min(500, $cmapTxt.Length)))
}

$contents = [regex]::Matches($rawPdf, '/Contents\s*\[?\s*(\d+)\s+0\s+R')
Write-Host "Contents matches: $($contents.Count)"
if ($contents.Count -gt 1) {
    $cNum = [int]$contents[1].Groups[1].Value
    $content = [PdfExtractor]::GetStreamContent($bytes, $rawPdf, $cNum)
    Write-Host "Content of obj $cNum (length $($content.Length)) snippet:"
    Write-Host ($content.Substring(0, [Math]::Min(600, $content.Length)))
}
