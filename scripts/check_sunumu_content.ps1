$path = (Get-ChildItem -Path . -Filter "*Ders Sunumu 1.2.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

$pageMatches = [regex]::Matches($rawPdf, '/Contents\s*\[?\s*(\d+)\s+0\s+R')
Write-Host "Page contents count: $($pageMatches.Count)"
foreach ($pm in $pageMatches) {
    $cObj = [int]$pm.Groups[1].Value
    $content = [PdfExtractor]::GetStreamContent($bytes, $rawPdf, $cObj)
    Write-Host "Obj $cObj content length: $($content.Length)"
    if ($content.Length -gt 0) {
        # find BT ... ET
        $bts = [regex]::Matches($content, 'BT\b([\s\S]*?)ET')
        Write-Host "  BT blocks: $($bts.Count)"
        if ($bts.Count -gt 0) {
            Write-Host "  Sample BT snippet: $($bts[0].Value.Substring(0, [Math]::Min(200, $bts[0].Value.Length)))"
        }
    }
}
