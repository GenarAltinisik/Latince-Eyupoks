# scripts/test_app.ps1
$files = Get-ChildItem -Path . -Recurse -Include *.js, *.css, *.html | Where-Object { $_.FullName -notmatch '\\scripts\\' }
foreach ($f in $files) {
    Write-Host "$($f.FullName.Replace($PWD.Path, '')) -> $([math]::Round($f.Length / 1024, 1)) KB"
}
