$path = (Get-ChildItem -Path . -Filter "*Gramer2.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

foreach ($objNum in @(496, 501, 506)) {
    $idx = $rawPdf.IndexOf("$objNum 0 obj")
    Write-Host "--- Obj $objNum ---"
    Write-Host ($rawPdf.Substring($idx, [Math]::Min(300, $rawPdf.Length - $idx)))
}
