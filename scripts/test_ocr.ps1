try {
    [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
    $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new("tr"))
    if ($null -eq $engine) {
        $engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
    }
    Write-Host "Windows Native OCR Engine is available! Language: $($engine.RecognizerLanguage.LanguageTag)"
} catch {
    Write-Host "Windows Native OCR error: $_"
}
