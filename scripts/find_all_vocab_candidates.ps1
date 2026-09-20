# scripts/find_all_vocab_candidates.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$corpusPath = Join-Path $PSScriptRoot "raw_corpus.json"
$corpus = Get-Content $corpusPath -Raw | ConvertFrom-Json

$candidates = [System.Collections.Generic.List[string]]::new()

foreach ($doc in $corpus) {
    foreach ($slide in $doc.slides) {
        $lines = $slide.text -split "`r`n|`n"
        foreach ($l in $lines) {
            $tl = $l.Trim()
            if ($tl -match "\b(m\.|f\.|n\.|adj\.|v\.|adv\.|prep\.|conj\.|pron\.)\b" -or $tl -match ", -[\p{L}]+") {
                $candidates.Add($doc.file + " (S" + $slide.number + "): " + $tl)
            }
        }
    }
}

Write-Host "Total vocabulary line candidates found: $($candidates.Count)"
Write-Host "First 30 sample candidates:"
for ($i = 0; $i -lt [Math]::Min(30, $candidates.Count); $i++) {
    Write-Host ("  " + $candidates[$i])
}
