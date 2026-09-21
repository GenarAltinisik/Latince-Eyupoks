using System;
using System.IO;
using System.Text;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class InspectTables {
    public static string FixMojibake(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        return s
            .Replace("DÃ¶nem", "Dönem")
            .Replace("dÃ¶nem", "dönem")
            .Replace("DÃ–NEM", "DÖNEM")
            .Replace("â€¢", "•")
            .Replace("â€“", "–")
            .Replace("â€”", "—")
            .Replace("â€™", "'")
            .Replace("â€œ", "“")
            .Replace("â€ ", "”")
            .Replace("â€˜", "‘")
            .Replace("â˜ž", "☞")
            .Replace("â˜›", "☛")
            .Replace("â¤—", "⤗")
            .Replace("âžž", "➾")
            .Replace("Ã‡", "Ç")
            .Replace("Ã§", "ç")
            .Replace("Äž", "Ğ")
            .Replace("ÄŸ", "ğ")
            .Replace("Ä°", "İ")
            .Replace("Ä±", "ı")
            .Replace("Ã–", "Ö")
            .Replace("Ã¶", "ö")
            .Replace("Åž", "Ş")
            .Replace("ÅŸ", "ş")
            .Replace("Ãœ", "Ü")
            .Replace("Ã¼", "ü")
            .Replace("Ã‚", "Â")
            .Replace("Ã¢", "â")
            .Replace("ÃŽ", "Î")
            .Replace("Ã®", "î")
            .Replace("Ã›", "Û")
            .Replace("Ã»", "û");
    }

    public static void Main(string[] args) {
        string corpusRaw = File.ReadAllText("scripts/raw_corpus.json", Encoding.UTF8);
        corpusRaw = FixMojibake(corpusRaw);

        string filter = args.Length > 0 ? args[0] : "";

        MatchCollection docs = Regex.Matches(corpusRaw, @"\{\s*""file"":\s*""([^""]+)""[\s\S]*?""slideCount"":\s*(\d+)[\s\S]*?""slides"":\s*\[([\s\S]*?)\]\s*\}");

        foreach (Match doc in docs) {
            string fn = doc.Groups[1].Value;
            if (!string.IsNullOrEmpty(filter) && !fn.ToLower().Contains(filter.ToLower())) {
                continue;
            }

            int sc = int.Parse(doc.Groups[2].Value);
            string slidesContent = doc.Groups[3].Value;

            Console.WriteLine("====================================================================");
            Console.WriteLine("FILE: " + fn + " (Total Slides: " + sc + ")");
            Console.WriteLine("====================================================================");

            MatchCollection sm = Regex.Matches(slidesContent, @"\{\s*""number"":\s*(\d+),\s*""text"":\s*""([^""]+)""");
            foreach (Match m in sm) {
                int sNum = int.Parse(m.Groups[1].Value);
                string text = m.Groups[2].Value.Replace("\\n", "\n").Replace("\\\"", "\"").Replace("\\\\", "\\").Replace("\\t", "\t");

                bool isTable = text.Contains("Singularis") || text.Contains("Pluralis") || text.Contains("Tekil") || text.Contains("Çoğul") ||
                               text.Contains("Nominativus") || text.Contains("Accusativus") || text.Contains("Genitivus") || text.Contains("Dativus") || text.Contains("Ablativus") ||
                               Regex.IsMatch(text, @"\b(Praesens|Imperfectum|Futurum|Perfectum|Plusquamperfectum)\b", RegexOptions.IgnoreCase) && 
                               (text.Contains("1.") || text.Contains("2.") || text.Contains("3."));

                if (isTable || text.Contains("ALIŞTIRMA") || text.Contains("CÜMLE") || text.Contains("OKUMA")) {
                    Console.WriteLine("--- SLIDE " + sNum + " ---");
                    Console.WriteLine(text.Trim());
                    Console.WriteLine();
                }
            }
        }
    }
}
