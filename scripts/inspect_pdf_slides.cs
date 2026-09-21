using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        string pdfPath = @"Eyüp Hoca 1. Sınıf Ders Notları\2. Dönem\Latince Gramer 2 - Ders Sunumu 1.2.pdf";
        if (!File.Exists(pdfPath))
        {
            Console.WriteLine("File not found: " + pdfPath);
            return;
        }

        byte[] bytes = File.ReadAllBytes(pdfPath);
        string pdfContent = System.Text.Encoding.Default.GetString(bytes);

        var pageMatches = Regex.Matches(pdfContent, @"/Type\s*/Page\b");
        Console.WriteLine("Total pages in PDF: " + pageMatches.Count);

        var streamMatches = Regex.Matches(pdfContent, @"stream[\r\n]+(.*?)[\r\n]+endstream", RegexOptions.Singleline);
        Console.WriteLine("Total streams: " + streamMatches.Count);

        int slideIdx = 1;
        foreach (Match sm in streamMatches)
        {
            string s = sm.Groups[1].Value;
            // look for text blocks
            var tjMatches = Regex.Matches(s, @"\(([^()]*)\)\s*Tj");
            if (tjMatches.Count > 0)
            {
                Console.WriteLine("\n--- SLIDE " + slideIdx + " ---");
                foreach (Match tm in tjMatches)
                {
                    string t = tm.Groups[1].Value;
                    if (!string.IsNullOrWhiteSpace(t))
                    {
                        Console.Write(t + " ");
                    }
                }
                Console.WriteLine();
                slideIdx++;
            }
        }
    }
}
