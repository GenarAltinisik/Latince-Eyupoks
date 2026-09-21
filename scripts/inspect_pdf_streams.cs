using System;
using System.IO;
using System.IO.Compression;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Text;

class Program
{
    static byte[] Decompress(byte[] data)
    {
        // Try skipping 2 bytes (zlib header 0x78 0x9c etc)
        try
        {
            using (var ms = new MemoryStream(data, 2, data.Length - 2))
            using (var ds = new DeflateStream(ms, CompressionMode.Decompress))
            using (var outMs = new MemoryStream())
            {
                byte[] buf = new byte[4096];
                int r;
                while ((r = ds.Read(buf, 0, buf.Length)) > 0)
                {
                    outMs.Write(buf, 0, r);
                }
                return outMs.ToArray();
            }
        }
        catch
        {
            return data;
        }
    }

    static void Main()
    {
        Console.OutputEncoding = Encoding.UTF8;
        string pdfPath = @"Eyüp Hoca 1. Sınıf Ders Notları\2. Dönem\Latince Gramer 2 - Ders Sunumu 1.2.pdf";
        byte[] pdfBytes = File.ReadAllBytes(pdfPath);
        string pdfStr = Encoding.Default.GetString(pdfBytes);

        // Find streams
        int idx = 0;
        int streamCount = 0;
        while ((idx = pdfStr.IndexOf("stream", idx)) != -1)
        {
            idx += 6;
            if (idx < pdfBytes.Length && (pdfBytes[idx] == '\r' || pdfBytes[idx] == '\n')) idx++;
            if (idx < pdfBytes.Length && pdfBytes[idx] == '\n') idx++;

            int endIdx = pdfStr.IndexOf("endstream", idx);
            if (endIdx == -1) break;

            int len = endIdx - idx;
            byte[] streamData = new byte[len];
            Array.Copy(pdfBytes, idx, streamData, 0, len);

            byte[] decomp = Decompress(streamData);
            string txt = Encoding.UTF8.GetString(decomp);

            if (txt.Contains("Tj") || txt.Contains("TJ"))
            {
                streamCount++;
                Console.WriteLine("=== STREAM " + streamCount + " ===");
                var matches = Regex.Matches(txt, @"\(([^()]*)\)\s*Tj|\[(.*?)\]\s*TJ", RegexOptions.Singleline);
                StringBuilder sb = new StringBuilder();
                foreach (Match m in matches)
                {
                    if (m.Groups[1].Success)
                    {
                        sb.Append(m.Groups[1].Value + " ");
                    }
                    else if (m.Groups[2].Success)
                    {
                        var inner = Regex.Matches(m.Groups[2].Value, @"\(([^()]*)\)");
                        foreach (Match im in inner) sb.Append(im.Groups[1].Value);
                        sb.Append(" ");
                    }
                }
                string full = Regex.Replace(sb.ToString(), @"\s+", " ").Trim();
                Console.WriteLine(full);
            }

            idx = endIdx + 9;
        }
    }
}
