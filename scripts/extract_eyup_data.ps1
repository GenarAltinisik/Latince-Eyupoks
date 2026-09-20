# scripts/extract_eyup_data.ps1
# Complete PDF Text & Vocabulary Extractor for Eyüp Hoca 1. Sınıf Ders Notları

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Add-Type -AssemblyName System.IO.Compression

function Get-PdfSlideTexts($pdfPath) {
    $bytes = [System.IO.File]::ReadAllBytes($pdfPath)
    $rawPdf = [System.Text.Encoding]::ASCII.GetString($bytes)

    # 1. Parse all font objects and their ToUnicode CMaps
    $fontObjToCMapObj = @{}
    $cmapMatches = [regex]::Matches($rawPdf, "\b(\d+)\s+0\s+obj\b[\s\S]*?/ToUnicode\s+(\d+)\s+0\s+R")
    foreach ($m in $cmapMatches) {
        $fObj = [int]$m.Groups[1].Value
        $cObj = [int]$m.Groups[2].Value
        $fontObjToCMapObj[$fObj] = $cObj
    }

    # Find font name to font object mappings
    $fontNameToFontObj = @{}
    $fontDictMatches = [regex]::Matches($rawPdf, '/([A-Za-z0-9_\-]+)\s+(\d+)\s+0\s+R')
    foreach ($m in $fontDictMatches) {
        $fn = $m.Groups[1].Value
        $fo = [int]$m.Groups[2].Value
        if ($fn.StartsWith("F") -and $fontObjToCMapObj.ContainsKey($fo)) {
            $fontNameToFontObj[$fn] = $fo
        }
    }

    # Extract and parse all needed CMaps
    $cmaps = @{}
    foreach ($cObj in ($fontObjToCMapObj.Values | Select-Object -Unique)) {
        $m = [regex]::Match($rawPdf, "\b$cObj\s+0\s+obj\b[\s\S]*?stream[\r\n]+")
        if (-not $m.Success) { continue }
        $sStart = $m.Index + $m.Length
        $eIdx = $rawPdf.IndexOf("endstream", $sStart)
        if ($eIdx -lt $sStart) { continue }
        $len = $eIdx - $sStart
        while ($len -gt 0 -and ($bytes[$sStart + $len - 1] -eq 10 -or $bytes[$sStart + $len - 1] -eq 13)) { $len-- }

        $streamBytes = New-Object byte[] $len
        [Array]::Copy($bytes, $sStart, $streamBytes, 0, $len)

        try {
            $ms = New-Object System.IO.MemoryStream ($streamBytes, 2, ($len - 6))
            $ds = New-Object System.IO.Compression.DeflateStream ($ms, [System.IO.Compression.CompressionMode]::Decompress)
            $outMs = New-Object System.IO.MemoryStream
            $ds.CopyTo($outMs)
            $cmapTxt = [System.Text.Encoding]::UTF8.GetString($outMs.ToArray())
        } catch {
            $cmapTxt = [System.Text.Encoding]::UTF8.GetString($streamBytes)
        }

        $map = @{}
        # bfchar
        $bfchars = [regex]::Matches($cmapTxt, "<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>")
        foreach ($bfc in $bfchars) {
            $cHex = $bfc.Groups[1].Value.ToUpper()
            $uHex = $bfc.Groups[2].Value
            while ($uHex.Length % 4 -ne 0) { $uHex = "0" + $uHex }
            $uChar = ""
            for ($k = 0; $k -lt $uHex.Length; $k += 4) {
                $code = [Convert]::ToInt32($uHex.Substring($k, 4), 16)
                $uChar += [char]$code
            }
            $map[$cHex] = $uChar
        }

        # bfrange
        $bfranges = [regex]::Matches($cmapTxt, "<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>")
        foreach ($bfr in $bfranges) {
            $sCode = [Convert]::ToInt32($bfr.Groups[1].Value, 16)
            $eCode = [Convert]::ToInt32($bfr.Groups[2].Value, 16)
            $tCode = [Convert]::ToInt32($bfr.Groups[3].Value, 16)
            for ($c = $sCode; $c -le $eCode; $c++) {
                $cHex = $c.ToString("X" + $bfr.Groups[1].Value.Length)
                $map[$cHex] = [char]($tCode + ($c - $sCode))
            }
        }
        $cmaps[$cObj] = $map
    }

    # Map font name directly to its parsed CMap
    $fontMaps = @{}
    foreach ($fn in $fontNameToFontObj.Keys) {
        $fo = $fontNameToFontObj[$fn]
        if ($fontObjToCMapObj.ContainsKey($fo)) {
            $co = $fontObjToCMapObj[$fo]
            if ($cmaps.ContainsKey($co)) {
                $fontMaps[$fn] = $cmaps[$co]
            }
        }
    }
    $defaultMap = $null
    foreach ($m in $cmaps.Values) { $defaultMap = $m; break }

    # 2. Extract Pages
    $pageMatches = [regex]::Matches($rawPdf, '/Contents\s+(\d+)\s+0\s+R')
    $slides = [System.Collections.Generic.List[string]]::new()
    $seenContents = [System.Collections.Generic.HashSet[int]]::new()

    foreach ($pm in $pageMatches) {
        $cNum = [int]$pm.Groups[1].Value
        if ($seenContents.Contains($cNum)) { continue }
        $seenContents.Add($cNum)

        $m = [regex]::Match($rawPdf, "\b$cNum\s+0\s+obj\b[\s\S]*?stream[\r\n]+")
        if (-not $m.Success) { continue }
        $sStart = $m.Index + $m.Length
        $eIdx = $rawPdf.IndexOf("endstream", $sStart)
        if ($eIdx -lt $sStart) { continue }
        $len = $eIdx - $sStart
        while ($len -gt 0 -and ($bytes[$sStart + $len - 1] -eq 10 -or $bytes[$sStart + $len - 1] -eq 13)) { $len-- }

        $streamBytes = New-Object byte[] $len
        [Array]::Copy($bytes, $sStart, $streamBytes, 0, $len)

        try {
            $ms = New-Object System.IO.MemoryStream ($streamBytes, 2, ($len - 6))
            $ds = New-Object System.IO.Compression.DeflateStream ($ms, [System.IO.Compression.CompressionMode]::Decompress)
            $outMs = New-Object System.IO.MemoryStream
            $ds.CopyTo($outMs)
            $content = [System.Text.Encoding]::UTF8.GetString($outMs.ToArray())
        } catch {
            try {
                $content = [System.Text.Encoding]::UTF8.GetString($streamBytes)
            } catch {
                continue
            }
        }

        # Parse text from content stream
        $sb = New-Object System.Text.StringBuilder
        $btMatches = [regex]::Matches($content, "BT\b([\s\S]*?)ET")
        $currFont = "F1"

        foreach ($bt in $btMatches) {
            $inner = $bt.Groups[1].Value
            $instructions = $inner.Split("`n`r".ToCharArray(), [System.StringSplitOptions]::RemoveEmptyEntries)
            foreach ($inst in $instructions) {
                $trimmed = $inst.Trim()
                $fm = [regex]::Match($trimmed, "/(F\d+)\s+[\d\.]+\s+Tf")
                if ($fm.Success) {
                    $currFont = $fm.Groups[1].Value
                }

                if ($trimmed.EndsWith("TJ") -or $trimmed.EndsWith("Tj")) {
                    $map = if ($fontMaps.ContainsKey($currFont)) { $fontMaps[$currFont] } else { $defaultMap }
                    $hexParts = [regex]::Matches($trimmed, "<([0-9A-Fa-f]+)>")
                    foreach ($hp in $hexParts) {
                        $hex = $hp.Groups[1].Value
                        for ($i = 0; $i -lt $hex.Length; $i += 2) {
                            $c = $hex.Substring($i, 2).ToUpper()
                            if ($map -and $map.ContainsKey($c)) {
                                [void]$sb.Append($map[$c])
                            }
                        }
                    }
                    [void]$sb.Append(" ")
                } elseif ($trimmed.EndsWith("T*") -or [regex]::IsMatch($trimmed, '-?\d+(\.\d+)?\s+-\d+(\.\d+)?\s+T[dD]')) {
                    [void]$sb.AppendLine()
                }
            }
            [void]$sb.AppendLine()
        }

        $cleanSlide = $sb.ToString().Trim()
        if (-not [string]::IsNullOrWhiteSpace($cleanSlide)) {
            $slides.Add($cleanSlide)
        }
    }

    return $slides
}

# Resolve files relatively using current working directory
$rootDir = (Get-Location).Path
$allPdfs = Get-ChildItem -Path $rootDir -Filter "*.pdf" -Recurse | Sort-Object FullName

Write-Host "Found $($allPdfs.Count) PDFs to process in $rootDir..."

$corpus = [System.Collections.Generic.List[PSObject]]::new()

$count = 0
foreach ($pdf in $allPdfs) {
    $count++
    $term = if ($pdf.Directory.Name -match "1") { "Dönem 1" } else { "Dönem 2" }
    Write-Host "[$count/$($allPdfs.Count)] Processing: $($pdf.Name) ($term)..."
    
    $slides = Get-PdfSlideTexts $pdf.FullName
    Write-Host "   -> Extracted $($slides.Count) slides."
    
    $corpus.Add([PSCustomObject]@{
        file = $pdf.Name
        term = $term
        relativePath = "$($pdf.Directory.Name)/$($pdf.Name)"
        slideCount = $slides.Count
        slides = $slides
    })
}

# Save raw extracted corpus to JSON
$jsonOut = $corpus | ConvertTo-Json -Depth 5
$outPath = Join-Path $rootDir "scripts\raw_corpus.json"
[System.IO.File]::WriteAllText($outPath, $jsonOut, [System.Text.Encoding]::UTF8)
Write-Host "`nSUCCESS! Extracted all $($corpus.Count) PDFs into $outPath."
