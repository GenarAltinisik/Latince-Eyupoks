using System;
using System.IO;
using System.Text;
using System.Collections.Generic;
using System.Text.RegularExpressions;

public class BuildAuthoritativeFasicules {
    
    // Fix UTF-8 mojibake (double-encoding artifacts caused by ANSI readers)
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
            .Replace("â€", "”")
            .Replace("â€˜", "‘")
            .Replace("â˜ž", "☞")
            .Replace("â˜›", "☛")
            .Replace("â¤—", "⤗")
            .Replace("âž", "➾")
            .Replace("Ã‡", "Ç")
            .Replace("Ã§", "ç")
            .Replace("Ä", "Ğ")
            .Replace("ÄŸ", "ğ")
            .Replace("Ä°", "İ")
            .Replace("Ä±", "ı")
            .Replace("Ã–", "Ö")
            .Replace("Ã¶", "ö")
            .Replace("Å", "Ş")
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

    public class VocabItem {
        public string id;
        public string lemma;
        public string stem;
        public string pos;
        public string category;
        public string meaning_tr;
        public int term;
        public int week;
        public List<string> lessons = new List<string>();
    }

    public class FasiculeSection {
        public string title;
        public string html;
        public string calloutType; // rule, info, warning, etymology
        public string calloutTitle;
        public string calloutText;
        public string tableHtml;
    }

    public class SentenceItem {
        public string latin;
        public string tr;
        public string analysis;
    }

    public class Fasicule {
        public string id;
        public int term;
        public string termName;
        public string courseCode;
        public int week;
        public int lecture;
        public string academicSchedule;
        public string title;
        public string subtitle;
        public string summary;
        public string difficulty;
        public string estimatedDuration;
        public string sourceFile;
        public int slideCount;
        public List<string> topics = new List<string>();
        public List<FasiculeSection> sections = new List<FasiculeSection>();
        public List<SentenceItem> sentences = new List<SentenceItem>();
        public List<string> vocabKeys = new List<string>();
        public string studyTips;
    }

    static void Main(string[] args) {
        Console.OutputEncoding = Encoding.UTF8;
        Console.WriteLine("Starting Authoritative Fasicule Compiler...");

        // 1. Clean & Fix eyup_vocabulary.js
        string vocabPath = "data/eyup_vocabulary.js";
        string vocabRaw = File.ReadAllText(vocabPath, Encoding.UTF8);
        string fixedVocab = FixMojibake(vocabRaw);
        File.WriteAllText(vocabPath, fixedVocab, new UTF8Encoding(false));
        Console.WriteLine("Cleaned and saved UTF-8 data/eyup_vocabulary.js");

        // Parse vocabulary items for cross-referencing
        Dictionary<string, VocabItem> vocabMap = new Dictionary<string, VocabItem>();
        MatchCollection vMatches = Regex.Matches(fixedVocab, @"\{\s*""id"":\s*""([^""]+)""[\s\S]*?""lemma"":\s*""([^""]+)""[\s\S]*?""stem"":\s*""([^""]+)""[\s\S]*?""pos"":\s*""([^""]*)""[\s\S]*?""category"":\s*""([^""]*)""[\s\S]*?""meaning_tr"":\s*""([^""]*)""[\s\S]*?""term"":\s*(\d+)[\s\S]*?""week"":\s*(\d+)");
        foreach (Match vm in vMatches) {
            VocabItem vi = new VocabItem {
                id = vm.Groups[1].Value,
                lemma = vm.Groups[2].Value,
                stem = vm.Groups[3].Value,
                pos = vm.Groups[4].Value,
                category = vm.Groups[5].Value,
                meaning_tr = vm.Groups[6].Value,
                term = int.Parse(vm.Groups[7].Value),
                week = int.Parse(vm.Groups[8].Value)
            };
            vocabMap[vi.id.ToLower()] = vi;
            vocabMap[vi.lemma.ToLower()] = vi;
        }
        Console.WriteLine("Loaded " + vocabMap.Count + " vocabulary lookup keys.");

        // 2. Load raw_corpus.json
        string rawCorpusPath = "scripts/raw_corpus.json";
        string corpusRaw = FixMojibake(File.ReadAllText(rawCorpusPath, Encoding.UTF8));

        // 3. Build Fasicules
        List<Fasicule> fasicules = GenerateCuratedFasicules(vocabMap, corpusRaw);

        // Sort by term, week, lecture
        fasicules.Sort((a, b) => {
            if (a.term != b.term) return a.term.CompareTo(b.term);
            if (a.week != b.week) return a.week.CompareTo(b.week);
            return a.lecture.CompareTo(b.lecture);
        });

        // Convert to JSON
        StringBuilder jsonSb = new StringBuilder();
        jsonSb.AppendLine("// Latince Eyupoks - Doç. Dr. Eyüp Çoraklı Latince 1 & 2 Kapsamlı Ders Fasikülleri");
        jsonSb.AppendLine("// İstanbul Üniversitesi Edebiyat Fakültesi Klasik Filoloji");
        jsonSb.AppendLine("// Geliştirici: Genar Altınışık | %100 Temiz UTF-8");
        jsonSb.AppendLine("const EYUP_CURRICULUM = [");

        for (int i = 0; i < fasicules.Count; i++) {
            Fasicule f = fasicules[i];
            jsonSb.Append(SerializeFasiculeToJson(f));
            if (i < fasicules.Count - 1) jsonSb.Append(",");
            jsonSb.AppendLine();
        }

        jsonSb.AppendLine("];");
        jsonSb.AppendLine();
        jsonSb.AppendLine("if (typeof module !== 'undefined') module.exports = { EYUP_CURRICULUM };");

        string outPath = "data/eyup_curriculum.js";
        File.WriteAllText(outPath, jsonSb.ToString(), new UTF8Encoding(false));
        Console.WriteLine("SUCCESS! Generated " + fasicules.Count + " comprehensive fasicules into " + outPath);
    }

    public static string EscapeJson(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        return s
            .Replace("\\", "\\\\")
            .Replace("\"", "\\\"")
            .Replace("\r", "")
            .Replace("\n", "\\n")
            .Replace("\t", "\\t");
    }

    public static string SerializeFasiculeToJson(Fasicule f) {
        StringBuilder sb = new StringBuilder();
        sb.Append("  {\n");
        sb.Append("    \"id\": \"" + EscapeJson(f.id) + "\",\n");
        sb.Append("    \"term\": " + f.term + ",\n");
        sb.Append("    \"termName\": \"" + EscapeJson(f.termName) + "\",\n");
        sb.Append("    \"courseCode\": \"" + EscapeJson(f.courseCode) + "\",\n");
        sb.Append("    \"week\": " + f.week + ",\n");
        sb.Append("    \"lecture\": " + f.lecture + ",\n");
        sb.Append("    \"academicSchedule\": \"" + EscapeJson(f.academicSchedule) + "\",\n");
        sb.Append("    \"title\": \"" + EscapeJson(f.title) + "\",\n");
        sb.Append("    \"subtitle\": \"" + EscapeJson(f.subtitle) + "\",\n");
        sb.Append("    \"summary\": \"" + EscapeJson(f.summary) + "\",\n");
        sb.Append("    \"difficulty\": \"" + EscapeJson(f.difficulty) + "\",\n");
        sb.Append("    \"estimatedDuration\": \"" + EscapeJson(f.estimatedDuration) + "\",\n");
        sb.Append("    \"sourceFile\": \"" + EscapeJson(f.sourceFile) + "\",\n");
        sb.Append("    \"slideCount\": " + f.slideCount + ",\n");
        
        // topics
        sb.Append("    \"topics\": [");
        for (int k = 0; k < f.topics.Count; k++) {
            sb.Append("\"" + EscapeJson(f.topics[k]) + "\"");
            if (k < f.topics.Count - 1) sb.Append(", ");
        }
        sb.Append("],\n");

        // vocabKeys
        sb.Append("    \"vocab\": [");
        for (int k = 0; k < f.vocabKeys.Count; k++) {
            sb.Append("\"" + EscapeJson(f.vocabKeys[k]) + "\"");
            if (k < f.vocabKeys.Count - 1) sb.Append(", ");
        }
        sb.Append("],\n");

        // sections
        sb.Append("    \"sections\": [\n");
        for (int k = 0; k < f.sections.Count; k++) {
            FasiculeSection sec = f.sections[k];
            sb.Append("      {\n");
            sb.Append("        \"title\": \"" + EscapeJson(sec.title) + "\",\n");
            sb.Append("        \"html\": \"" + EscapeJson(sec.html) + "\",\n");
            sb.Append("        \"calloutType\": \"" + EscapeJson(sec.calloutType) + "\",\n");
            sb.Append("        \"calloutTitle\": \"" + EscapeJson(sec.calloutTitle) + "\",\n");
            sb.Append("        \"calloutText\": \"" + EscapeJson(sec.calloutText) + "\",\n");
            sb.Append("        \"tableHtml\": \"" + EscapeJson(sec.tableHtml) + "\"\n");
            sb.Append("      }" + (k < f.sections.Count - 1 ? "," : "") + "\n");
        }
        sb.Append("    ],\n");

        // sentences
        sb.Append("    \"sentences\": [\n");
        for (int k = 0; k < f.sentences.Count; k++) {
            SentenceItem st = f.sentences[k];
            sb.Append("      {\n");
            sb.Append("        \"latin\": \"" + EscapeJson(st.latin) + "\",\n");
            sb.Append("        \"tr\": \"" + EscapeJson(st.tr) + "\",\n");
            sb.Append("        \"analysis\": \"" + EscapeJson(st.analysis) + "\"\n");
            sb.Append("      }" + (k < f.sentences.Count - 1 ? "," : "") + "\n");
        }
        sb.Append("    ],\n");

        sb.Append("    \"studyTips\": \"" + EscapeJson(f.studyTips) + "\"\n");
        sb.Append("  }");
        return sb.ToString();
    }

    public static List<Fasicule> GenerateCuratedFasicules(Dictionary<string, VocabItem> vocabMap, string corpusRaw) {
        List<Fasicule> list = new List<Fasicule>();

        // Load document blocks from corpusRaw
        MatchCollection docs = Regex.Matches(corpusRaw, @"\{\s*""file"":\s*""([^""]+)""[\s\S]*?""slideCount"":\s*(\d+)[\s\S]*?""slides"":\s*\[([\s\S]*?)\]\s*\}");
        Dictionary<string, string> docSlidesMap = new Dictionary<string, string>();
        Dictionary<string, int> docSlideCountMap = new Dictionary<string, int>();

        foreach (Match doc in docs) {
            string fn = doc.Groups[1].Value;
            docSlidesMap[fn] = doc.Groups[3].Value;
            docSlideCountMap[fn] = int.Parse(doc.Groups[2].Value);
        }

        // Helper to get slide texts
        Func<string, List<string>> getSlideTexts = (fn) => {
            List<string> res = new List<string>();
            if (docSlidesMap.ContainsKey(fn)) {
                MatchCollection sm = Regex.Matches(docSlidesMap[fn], @"\{\s*""number"":\s*(\d+),\s*""text"":\s*""([^""]+)""");
                foreach (Match m in sm) {
                    res.Add(Regex.Unescape(m.Groups[2].Value));
                }
            }
            return res;
        };

        // We will generate comprehensive fasicules for all 46 presentations
        // Let's create a curated catalog generator that constructs the textbook fasicules
        list.AddRange(FasiculeCatalog.BuildAllFasicules(getSlideTexts, docSlideCountMap, vocabMap));

        return list;
    }
}
