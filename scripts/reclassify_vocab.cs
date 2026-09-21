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

        // Pattern for JSON object in eyup_vocabulary
        var matches = Regex.Matches(content, @"\{[^{}]*""id""\s*:\s*""([^""]+)""[^{}]*\}", RegexOptions.Singleline);
        Console.WriteLine("Total items: " + matches.Count);

        int updatedCount = 0;
        var newCatCounts = new Dictionary<string, int>();

        var updatedObjects = new List<string>();

        foreach (Match m in matches)
        {
            string obj = m.Value;
            string id = Regex.Match(obj, @"""id""\s*:\s*""([^""]+)""").Groups[1].Value;
            string lemma = Regex.Match(obj, @"""lemma""\s*:\s*""([^""]+)""").Groups[1].Value;
            string stem = Regex.Match(obj, @"""stem""\s*:\s*""([^""]+)""").Groups[1].Value;
            string pos = Regex.Match(obj, @"""pos""\s*:\s*""([^""]+)""").Groups[1].Value;
            string cat = Regex.Match(obj, @"""category""\s*:\s*""([^""]+)""").Groups[1].Value;
            string meaning = Regex.Match(obj, @"""meaning_tr""\s*:\s*""([^""]+)""").Groups[1].Value;
            string termStr = Regex.Match(obj, @"""term""\s*:\s*(\d+)").Groups[1].Value;

            string origCat = cat;
            string origPos = pos;

            // 1. Pronoun check
            if (cat == "pronoun" || pos.Contains("Zamir") ||
                id == "ego" || id == "tu" || id == "nos" || id == "vos" || id == "is" || id == "hic" || id == "ille" || id == "iste" || id == "qui" || id == "quis" || id == "aliquis" || id == "quidam" || id == "ipse" || id == "idem" || id == "sui")
            {
                cat = "pronoun";
                pos = "Zamir";
            }
            // 2. Preposition check
            else if (cat == "preposition" || pos.Contains("Edat") ||
                id == "in" || id == "ad" || id == "ab" || id == "ex" || id == "cum" || id == "per" || id == "post" || id == "ante" || id == "inter" || id == "sub" || id == "de" || id == "pro" || id == "sine" || id == "contra" || id == "apud" || id == "trans" || id == "ob" || id == "propter")
            {
                cat = "preposition";
                pos = "Edat";
            }
            // 3. Conjunction check
            else if (cat == "conjunction" || pos.Contains("Bağlaç") ||
                id == "et" || id == "sed" || id == "aut" || id == "autem" || id == "atque" || id == "ac" || id == "nec" || id == "neque" || id == "nam" || id == "enim" || id == "quia" || id == "quod" || id == "cum_conj" || id == "si" || id == "nisi" || id == "quamquam" || id == "itaque" || id == "igitur" || id == "at" || id == "vero")
            {
                cat = "conjunction";
                pos = "Bağlaç";
            }
            // 4. Adverb check
            else if (cat == "adverb" || pos.Contains("Zarf") ||
                id == "non" || id == "nunc" || id == "tunc" || id == "semper" || id == "saepe" || id == "iam" || id == "tam" || id == "ita" || id == "sic" || id == "bene" || id == "male" || id == "longe" || id == "multum" || id == "hic_adv" || id == "ibi" || id == "inde" || id == "unde" || id == "cur" || id == "quando" || id == "quomodo" || id == "quo" || id == "facile")
            {
                cat = "adverb";
                pos = "Zarf";
            }
            // 5. Verb check
            else if (Regex.IsMatch(stem, @"-(āre|ēre|ere|īre|ari|ārī|ērī|īrī)") ||
                     stem.Contains("esse") || stem.Contains("ferre") || stem.Contains("velle") || stem.Contains("nolle") || stem.Contains("malle") ||
                     id == "sum" || id == "possum" || id == "fero" || id == "eo" || id == "volo" || id == "nolo" || id == "malo" || id == "fio" ||
                     (cat == "verb" && stem == "-"))
            {
                cat = "verb";
                if (stem.Contains("-āre") || stem.Contains("-ārī")) pos = "1. Çekim Fiil";
                else if (stem.Contains("-ēre") || stem.Contains("-ērī")) pos = "2. Çekim Fiil";
                else if (stem.Contains("-īre") || stem.Contains("-īrī")) pos = "4. Çekim Fiil";
                else if (stem.Contains("-ere") || stem.Contains("-ī")) pos = "3. Çekim Fiil";
                else pos = "Düzensiz Fiil";
            }
            // 6. Adjective check
            else if (Regex.IsMatch(stem, @"^-(a|a,|ae)\s+(-um|-a)") ||
                     Regex.IsMatch(stem, @"^-(is|is,|e)\b") ||
                     stem.Contains("-is, -e") ||
                     stem.Contains("-ns") ||
                     stem.Contains("-entis") ||
                     stem.Contains("-ntis") ||
                     stem.Contains("-cis") ||
                     stem.Contains("-ior, -ius") ||
                     (cat == "adjective" && !stem.Contains(" m.") && !stem.Contains(" f.") && !stem.Contains(" n.")))
            {
                cat = "adjective";
                if (Regex.IsMatch(stem, @"^-(a|a,|ae)\s+(-um|-a)")) pos = "1./2. Sınıf Sıfat";
                else pos = "3. Sınıf Sıfat";
            }
            // 7. Nouns 1-5
            else if (stem.Contains("-ae") || stem.Contains("ae f.") || stem.Contains("ae m.") || (cat == "noun_1" && !stem.Contains("-ī") && !stem.Contains("-is")))
            {
                cat = "noun_1";
                pos = stem.Contains(" m.") ? "1. Çekim İsim (m.)" : "1. Çekim İsim (f.)";
            }
            else if (stem.Contains("-ī") || stem.Contains("-i ") || stem.Contains(" -ī") || stem.Contains("ī m.") || stem.Contains("ī n.") || (cat == "noun_2" && !stem.Contains("-is")))
            {
                cat = "noun_2";
                pos = stem.Contains(" n.") ? "2. Çekim Nötr İsim (n.)" : "2. Çekim İsim (m.)";
            }
            else if (stem.Contains("-ūs") || stem.Contains("-us, -ūs") || stem.Contains("-u, -ūs") || (cat == "noun_4"))
            {
                cat = "noun_4";
                pos = stem.Contains(" n.") ? "4. Çekim Nötr İsim (n.)" : "4. Çekim İsim (m./f.)";
            }
            else if (stem.Contains("-ēī") || stem.Contains("-eī") || stem.Contains("reī") || stem.Contains("diei") || (cat == "noun_5"))
            {
                cat = "noun_5";
                pos = "5. Çekim İsim (f.)";
            }
            else
            {
                // Default to 3rd declension noun for other nouns (rēx, rēgis; cīvis, cīvis; corpus, corporis; etc.)
                cat = "noun_3";
                pos = stem.Contains(" n.") ? "3. Çekim Nötr İsim (n.)" : (stem.Contains(" f.") ? "3. Çekim İsim (f.)" : "3. Çekim İsim (m.)");
            }

            if (cat != origCat || pos != origPos)
            {
                updatedCount++;
            }

            if (!newCatCounts.ContainsKey(cat)) newCatCounts[cat] = 0;
            newCatCounts[cat]++;

            // Build updated JSON object
            string updatedObj = string.Format(
@"  {{
    ""id"": ""{0}"",
    ""lemma"": ""{1}"",
    ""stem"": ""{2}"",
    ""pos"": ""{3}"",
    ""meaning_tr"": ""{4}"",
    ""term"": {5},
    ""category"": ""{6}""
  }}", id, lemma, stem.Replace("\"", "\\\""), pos, meaning.Replace("\"", "\\\""), termStr, cat);

            updatedObjects.Add(updatedObj);
        }

        Console.WriteLine(string.Format("Reclassified/refined: {0} words", updatedCount));
        Console.WriteLine("\nNew Category Breakdown:");
        foreach (var kvp in newCatCounts)
        {
            Console.WriteLine(string.Format("  {0}: {1}", kvp.Key, kvp.Value));
        }

        // Write updated eyup_vocabulary.js
        string outJs = "// data/eyup_vocabulary.js - Doç. Dr. Eyüp Çoraklı Latince 1 & 2 Ders Notları Yetkin Sözlüğü\n" +
                       "// Toplam 995 kelime: tam filolojik sınıflandırma (İsim 1-5, Fiil 1-4/Düzensiz, Sıfat 1-3, Zamir, Zarf, Edat, Bağlaç)\n\n" +
                       "const EYUP_VOCABULARY = [\n" +
                       string.Join(",\n", updatedObjects.ToArray()) +
                       "\n];\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { EYUP_VOCABULARY };\n}\n";

        File.WriteAllText(jsPath, outJs, System.Text.Encoding.UTF8);
        Console.WriteLine("Successfully wrote updated " + jsPath);
    }
}
