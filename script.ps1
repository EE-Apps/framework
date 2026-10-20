
$root = (Get-Location).Path.TrimEnd('\')
$excluded = @('node_modules', '.git', 'dist', 'build', 'next')
$extensions = '\.(html|css|js|jsx|ts|tsx|json)$'
$output = Join-Path $root 'united.txt'

Get-ChildItem -LiteralPath $root -Recurse -File |
    Where-Object {
        $relative = $_.FullName.Substring($root.Length).TrimStart('\')
        $parts = $relative -split '[\\/]'

        $_.Extension -match $extensions -and
        $relative -ne 'united.txt' -and
        -not ($parts | Where-Object { $_ -in $excluded })
    } |
    ForEach-Object {
        $relative = $_.FullName.Substring($root.Length).TrimStart('\')

        "=== FILE: $relative ==="
        Get-Content -LiteralPath $_.FullName -Raw
        "`n`n"
    } |
    Out-File -FilePath $output -Encoding utf8

Write-Host "Done: $output"