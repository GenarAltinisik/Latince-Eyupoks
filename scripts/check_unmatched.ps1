# scripts/check_unmatched.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$corpus = Get-Content (Join-Path $PSScriptRoot "raw_corpus.json") -Raw | ConvertFrom-Json
$vocabJs = Get-Content (Join-Path (Get-Item $PSScriptRoot).Parent.FullName "data\eyup_vocabulary.js") -Raw
$vocabObj = [regex]::Matches($vocabJs, '"id":\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value }
$existingKeys = [System.Collections.Generic.HashSet[string]]::new([string[]]$vocabObj)

Write-Host "Existing keys in dictionary: $($existingKeys.Count)"

$unmatched = [System.Collections.Generic.List[string]]::new()
foreach ($doc in $corpus) {
    foreach ($slide in $doc.slides) {
        $lines = $slide.text -split "`r`n|`n"
        foreach ($l in $lines) {
            $tl = $l.Trim().Replace([char]8211, '-').Replace([char]8212, '-')
            if ($tl -match "\b(m\.|f\.|n\.|adj\.|v\.|adv\.|prep\.|conj\.|pron\.)\b" -or $tl -match ", -[\p{L}]+") {
                if ($tl -notmatch "hali|grubu|durumlar|cümleler|çekim|kural|örnek|zamanı") {
                    $firstWord = ($tl -split '[\s,]+')[0].ToLower()
                    if (-not $existingKeys.Contains($firstWord)) {
                        $unmatched.Add($doc.file + " (S" + $slide.number + "): " + $tl)
                    }
                }
            }
        }
    }
}

Write-Host "Unmatched candidate lines: $($unmatched.Count)"
Write-Host "Sample 35 unmatched lines:"
for ($i = 0; $i -lt [Math]::Min(35, $unmatched.Count); $i++) {
    Write-Host ("  " + $unmatched[$i])
}
