using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        string jsPath = @"data\eyup_vocabulary.js";
        string content = File.ReadAllText(jsPath);
        var matches = Regex.Matches(content, @"\{[^{}]*""id""\s*:\s*""([^""]+)""[^{}]*\}", RegexOptions.Singleline);
        Console.WriteLine("Total vocab items: " + matches.Count);

        var catCounts = new Dictionary<string, int>();
        var suspiciousItems = new List<string>();

        foreach (Match m in matches)
        {
            string obj = m.Value;
            string id = Regex.Match(obj, @"""id""\s*:\s*""([^""]+)""").Groups[1].Value;
            string lemma = Regex.Match(obj, @"""lemma""\s*:\s*""([^""]+)""").Groups[1].Value;
            string stem = Regex.Match(obj, @"""stem""\s*:\s*""([^""]+)""").Groups[1].Value;
            string pos = Regex.Match(obj, @"""pos""\s*:\s*""([^""]+)""").Groups[1].Value;
            string cat = Regex.Match(obj, @"""category""\s*:\s*""([^""]+)""").Groups[1].Value;

            if (!catCounts.ContainsKey(cat)) catCounts[cat] = 0;
            catCounts[cat]++;

            // Check if verb marked as noun
            if (Regex.IsMatch(stem, @"-(āre|ēre|ere|īre|ari|ārī|ērī|īrī)") && cat != "verb")
            {
                suspiciousItems.Add(string.Format("VERB MISMATCH: id={0}, lemma={1}, stem={2}, cat={3}", id, lemma, stem, cat));
            }
            // Check if adjective marked as noun
            else if (Regex.IsMatch(stem, @"-(a|a,|ae)\s+(-um|-a)") && cat.StartsWith("noun"))
            {
                suspiciousItems.Add(string.Format("ADJ MISMATCH: id={0}, lemma={1}, stem={2}, cat={3}", id, lemma, stem, cat));
            }
            // Check if noun marked as verb
            else if (cat == "verb" && !Regex.IsMatch(stem, @"-(āre|ēre|ere|īre|ari|ārī|ērī|īrī)") && stem != "-")
            {
                suspiciousItems.Add(string.Format("NOUN AS VERB?: id={0}, lemma={1}, stem={2}, cat={3}", id, lemma, stem, cat));
            }
        }

        Console.WriteLine("\nCategory Counts:");
        foreach (var kvp in catCounts)
        {
            Console.WriteLine(string.Format("  {0}: {1}", kvp.Key, kvp.Value));
        }

        Console.WriteLine(string.Format("\nSuspicious items count: {0}", suspiciousItems.Count));
        for (int i = 0; i < Math.Min(25, suspiciousItems.Count); i++)
        {
            Console.WriteLine("  " + suspiciousItems[i]);
        }
    }
}
