using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

public class PrintSlides {
    public static void Main(string[] args) {
        string corpusRaw = File.ReadAllText("scripts/raw_corpus.json", Encoding.UTF8);
        corpusRaw = InspectTables.FixMojibake(corpusRaw);

        string target = args.Length > 0 ? args[0] : "5.1";
        int startSlide = args.Length > 1 ? int.Parse(args[1]) : 1;
        int endSlide = args.Length > 2 ? int.Parse(args[2]) : 9999;

        MatchCollection docs = Regex.Matches(corpusRaw, @"\{\s*""file"":\s*""([^""]+)""[\s\S]*?""slideCount"":\s*(\d+)[\s\S]*?""slides"":\s*\[([\s\S]*?)\]\s*\}");
        foreach (Match doc in docs) {
            string fn = doc.Groups[1].Value;
            if (!fn.Contains(target)) continue;

            Console.WriteLine("=== FILE: " + fn + " ===");
            MatchCollection sm = Regex.Matches(doc.Groups[3].Value, @"\{\s*""number"":\s*(\d+),\s*""text"":\s*""([^""]+)""");
            foreach (Match m in sm) {
                int sNum = int.Parse(m.Groups[1].Value);
                if (sNum < startSlide || sNum > endSlide) continue;
                string text = m.Groups[2].Value.Replace("\\n", "\n").Replace("\\\"", "\"").Replace("\\\\", "\\").Trim();
                Console.WriteLine("--- Slide " + sNum + " ---");
                Console.WriteLine(text);
                Console.WriteLine();
            }
        }
    }
}
