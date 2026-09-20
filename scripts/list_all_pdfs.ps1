# scripts/list_all_pdfs.ps1
$items = Get-ChildItem -Directory
foreach ($it in $items) {
    Write-Host "Dir: $($it.Name)"
    if ($it.Name -like "*Ey*p*") {
        Get-ChildItem -Path $it.FullName -Filter "*.pdf" -Recurse | ForEach-Object {
            Write-Host "$($_.Directory.Name) -> $($_.Name)"
        }
    }
}
