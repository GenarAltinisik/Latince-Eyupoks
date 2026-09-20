$path = (Get-ChildItem -Path . -Filter "*Gramer2.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

# Split by "endobj" and find exact obj containing /ToUnicode
$objMatches = [regex]::Matches($rawPdf, '(?:\r?\n|^)(\d+)\s+0\s+obj\b([\s\S]*?)endobj')
Write-Host "Total PDF objects: $($objMatches.Count)"

$fontToCmap = @{}
foreach ($obj in $objMatches) {
    $num = [int]$obj.Groups[1].Value
    $body = $obj.Groups[2].Value
    $m = [regex]::Match($body, '/ToUnicode\s+(\d+)\s+0\s+R')
    if ($m.Success) {
        $cObj = [int]$m.Groups[1].Value
        $fontToCmap[$num] = $cObj
        Write-Host "Exact Font Obj $num -> ToUnicode $cObj"
    }
}
