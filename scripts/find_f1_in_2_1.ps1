$path = (Get-ChildItem -Path . -Filter "*Gramer2.1.pdf" -Recurse)[0].FullName
$bytes = [System.IO.File]::ReadAllBytes($path)
$rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

$idx = 0
while (($idx = $rawPdf.IndexOf("/F1", $idx)) -ne -1) {
    Write-Host "--- /F1 at $idx ---"
    $start = [Math]::Max(0, $idx - 30)
    $len = [Math]::Min(150, $rawPdf.Length - $start)
    Write-Host ($rawPdf.Substring($start, $len))
    $idx += 5
}
