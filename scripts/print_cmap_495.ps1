Add-Type -TypeDefinition (Get-Content "scripts\PdfExtractor.cs" -Raw) -ReferencedAssemblies System.IO.Compression

$path = (Get-ChildItem -Path . -Filter "*Gramer2.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

$cmapTxt = [PdfExtractor]::GetStreamContent($bytes, $rawPdf, 495)
Write-Host $cmapTxt
