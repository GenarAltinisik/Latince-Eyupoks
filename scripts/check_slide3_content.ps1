Add-Type -TypeDefinition (Get-Content "scripts\PdfExtractor.cs" -Raw) -ReferencedAssemblies System.IO.Compression

$path = (Get-ChildItem -Path . -Filter "*Gramer2.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

# Slide 3 is the 3rd content object:
$contents = [regex]::Matches($rawPdf, '/Contents\s*\[?\s*(\d+)\s+0\s+R')
$cNum = [int]$contents[2].Groups[1].Value
Write-Host "Slide 3 content obj: $cNum"

$content = [PdfExtractor]::GetStreamContent($bytes, $rawPdf, $cNum)
Write-Host "Length: $($content.Length)"
Write-Host "Content snippet:"
Write-Host ($content.Substring(0, [Math]::Min(1200, $content.Length)))
