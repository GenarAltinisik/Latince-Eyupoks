$testLine = "fama, -ae, f., ün, şöhret"
$rx = '^(?<lemma>[\p{L}\s\(\)\/]+?)(?:,\s*|\s+)(?<stem>-[^\,\;]+?|[\p{L}]+)\s*,\s*(?<pos>m\.|f\.|n\.|m\.\/f\.|adj\.|v\.|adv\.|prep\.|conj\.|pron\.|özel isim)\s*,?\s*(?<meaning>.*)$'

if ($testLine -match $rx) {
    Write-Host "Matched! Lemma: $($matches['lemma']), Stem: $($matches['stem']), POS: $($matches['pos']), Meaning: $($matches['meaning'])"
} else {
    Write-Host "Did not match!"
}
