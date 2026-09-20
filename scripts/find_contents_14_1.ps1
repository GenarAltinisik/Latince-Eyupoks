$path = (Get-ChildItem -Path . -Filter "*Gramer14.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

$idx = 0
while (($idx = $rawPdf.IndexOf("/Contents", $idx)) -ne -1) {
    Write-Host "--- /Contents at $idx ---"
    Write-Host ($rawPdf.Substring($idx, [Math]::Min(100, $rawPdf.Length - $idx)))
    $idx += 10
}
