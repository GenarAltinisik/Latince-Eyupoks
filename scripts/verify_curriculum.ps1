$txt = [System.IO.File]::ReadAllText('data\eyup_curriculum.js', [System.Text.Encoding]::UTF8)
$idx1 = $txt.IndexOf('[')
$idx2 = $txt.LastIndexOf(']')
$json = $txt.Substring($idx1, $idx2 - $idx1 + 1)
$obj = ConvertFrom-Json -InputObject $json

Write-Host "Total Fasicules: $($obj.Count)"
Write-Host "First Fasicule: $($obj[0].academicSchedule) - $($obj[0].title)"
Write-Host "Last Fasicule: $($obj[-1].academicSchedule) - $($obj[-1].title)"

# Check vocabulary JSON
$vocabTxt = [System.IO.File]::ReadAllText('data\eyup_vocabulary.js', [System.Text.Encoding]::UTF8)
$vIdx1 = $vocabTxt.IndexOf('[')
$vIdx2 = $vocabTxt.LastIndexOf(']')
$vJson = $vocabTxt.Substring($vIdx1, $vIdx2 - $vIdx1 + 1)
$vObj = ConvertFrom-Json -InputObject $vJson
Write-Host "Total Vocab Items: $($vObj.Count)"

# Check scripts referenced in index.html
$html = [System.IO.File]::ReadAllText('index.html', [System.Text.Encoding]::UTF8)
$pattern = 'src=["'']([^"'']+)["'']'
$matches = [System.Text.RegularExpressions.Regex]::Matches($html, $pattern)
foreach ($m in $matches) {
    $src = $m.Groups[1].Value
    if (Test-Path $src) {
        Write-Host "Script OK: $src"
    } else {
        Write-Host "Script MISSING: $src" -ForegroundColor Red
    }
}

# Check stylesheets referenced in index.html
$cssPattern = 'href=["'']([^"'']+\.css)["'']'
$cssMatches = [System.Text.RegularExpressions.Regex]::Matches($html, $cssPattern)
foreach ($cm in $cssMatches) {
    $href = $cm.Groups[1].Value
    if (Test-Path $href) {
        Write-Host "CSS OK: $href"
    } else {
        Write-Host "CSS MISSING: $href" -ForegroundColor Red
    }
}
