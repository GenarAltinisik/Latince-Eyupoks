$path = (Get-ChildItem -Path . -Filter "*Ders Sunumu 1.2.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

$fontRefs = [regex]::Matches($rawPdf, '/Font\s*<<([\s\S]*?)>>')
Write-Host "Font dicts count: $($fontRefs.Count)"
foreach ($fd in $fontRefs) {
    Write-Host "Font dict: $($fd.Groups[1].Value)"
}

$allFontNames = [regex]::Matches($rawPdf, '/([A-Za-z0-9_\-]+)\s+[\d\.]+\s+Tf')
Write-Host "All Tf font switches: $($allFontNames.Count)"
$uniqueTf = $allFontNames | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique
Write-Host "Unique font names used: $($uniqueTf -join ', ')"

$cmapMatches = [regex]::Matches($rawPdf, '\b(\d+)\s+0\s+obj\b[\s\S]*?/ToUnicode\s+(\d+)\s+0\s+R')
Write-Host "ToUnicode mappings count: $($cmapMatches.Count)"
foreach ($m in $cmapMatches) {
    Write-Host "Font Obj $($m.Groups[1].Value) -> ToUnicode Obj $($m.Groups[2].Value)"
}
