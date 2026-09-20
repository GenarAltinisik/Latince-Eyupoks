Add-Type -TypeDefinition (Get-Content "scripts\PdfExtractor.cs" -Raw) -ReferencedAssemblies System.IO.Compression

$path = (Get-ChildItem -Path . -Filter "*Gramer2.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

foreach ($cObj in @(495, 500, 505)) {
    $cmapTxt = [PdfExtractor]::GetStreamContent($bytes, $rawPdf, $cObj)
    $map = [PdfExtractor]::ParseCMap($cmapTxt)
    $sampleKey = ($map.Keys | Select-Object -First 1)
    Write-Host "CMap $cObj has $($map.Count) entries. Sample key: '$sampleKey' (len $($sampleKey.Length)) -> '$($map[$sampleKey])'"
}
