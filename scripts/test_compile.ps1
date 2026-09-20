$csharpCode = Get-Content "c:\Users\ASUS\Desktop\Antigravity Projects\Latince Eyupoks\scripts\PdfExtractor.cs" -Raw
Add-Type -TypeDefinition $csharpCode -ReferencedAssemblies System.IO.Compression
