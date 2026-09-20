# scripts/run_builder.ps1
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$csCode = Get-Content (Join-Path $PSScriptRoot "BuildEyupData.cs") -Raw
Add-Type -TypeDefinition $csCode

$rootDir = (Get-Item $PSScriptRoot).Parent.FullName
$corpusPath = Join-Path $PSScriptRoot "raw_corpus.json"
$vocabPath = Join-Path $rootDir "data\eyup_vocabulary.js"
$curriculumPath = Join-Path $rootDir "data\eyup_curriculum.js"

[BuildEyupData]::Run($corpusPath, $vocabPath, $curriculumPath)
