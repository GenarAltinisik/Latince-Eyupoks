# scripts/verify_links.ps1
$html = Get-Content "index.html" -Raw
$regex = [regex]'(?:src|href)="([^"]+)"'
$matches = $regex.Matches($html)
$allGood = $true

foreach ($m in $matches) {
    $val = $m.Groups[1].Value
    if (-not $val.StartsWith("http") -and -not $val.StartsWith("#") -and -not $val.StartsWith("data:")) {
        $exists = Test-Path $val
        Write-Host "$val -> $exists"
        if (-not $exists) { $allGood = $false }
    }
}

if ($allGood) {
    Write-Host "ALL LOCAL ASSETS EXIST AND ARE CORRECTLY LINKED!" -ForegroundColor Green
} else {
    Write-Host "SOME ASSETS ARE MISSING!" -ForegroundColor Red
}
