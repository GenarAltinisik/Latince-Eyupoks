using System;
using System.IO;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        string js = File.ReadAllText(@"data\eyup_curriculum.js");
        var matches = Regex.Matches(js, @"""title""\s*:\s*""([^""]*Okuma Parçası[^""]*)""\s*,\s*""html""\s*:\s*""([^""]+)""", RegexOptions.Singleline);
        Console.WriteLine("Matches: " + matches.Count);
        foreach (Match m in matches)
        {
            Console.WriteLine("\n========================================================");
            Console.WriteLine("TITLE: " + m.Groups[1].Value);
            string html = m.Groups[2].Value.Replace("\\n", "\n").Replace("\\\"", "\"");
            Match mLat = Regex.Match(html, @"<div class=""reading-passage-latin"">(.*?)</div>", RegexOptions.Singleline);
            if (mLat.Success)
            {
                string latText = Regex.Replace(mLat.Groups[1].Value, @"<[^>]+>", " ");
                latText = Regex.Replace(latText, @"\s+", " ").Trim();
                Console.WriteLine("LATIN TEXT: " + (latText.Length > 250 ? latText.Substring(0, 250) + "..." : latText));
                if (latText.Length > 250)
                {
                    Console.WriteLine("END OF LATIN TEXT: ..." + latText.Substring(latText.Length - 100));
                }
            }
        }
    }
}
