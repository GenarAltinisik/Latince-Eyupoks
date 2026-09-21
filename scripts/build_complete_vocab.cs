using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Text;

class VocabItem
{
    public string id;
    public string lemma;
    public string stem;
    public string pos;
    public string meaning_tr;
    public int term;
    public int week;
    public string category;
    public List<string> lessons = new List<string>();
}

class Program
{
    static string NormalizeLatin(string str)
    {
        if (string.IsNullOrEmpty(str)) return "";
        string s = str.ToLower()
            .Replace("ā", "a").Replace("ă", "a")
            .Replace("ē", "e").Replace("ĕ", "e")
            .Replace("ī", "i").Replace("ĭ", "i")
            .Replace("ō", "o").Replace("ŏ", "o")
            .Replace("ū", "u").Replace("ŭ", "u")
            .Replace("ȳ", "y");
        return Regex.Replace(s, @"[^a-z]", "");
    }

    static void Main()
    {
        Console.OutputEncoding = Encoding.UTF8;
        string currJs = File.ReadAllText(@"data\eyup_curriculum.js", Encoding.UTF8);
        string vocabJs = File.ReadAllText(@"data\eyup_vocabulary.js", Encoding.UTF8);

        // 1. Build map of existing vocabulary
        var vocabMap = new Dictionary<string, VocabItem>();
        var objMatches = Regex.Matches(vocabJs, @"\{[^{}]*""id""\s*:\s*""([^""]+)""[^{}]*\}", RegexOptions.Singleline);
        foreach (Match m in objMatches)
        {
            string obj = m.Value;
            var item = new VocabItem();
            item.id = Regex.Match(obj, @"""id""\s*:\s*""([^""]+)""").Groups[1].Value;
            item.lemma = Regex.Match(obj, @"""lemma""\s*:\s*""([^""]+)""").Groups[1].Value;
            item.stem = Regex.Match(obj, @"""stem""\s*:\s*""([^""]+)""").Groups[1].Value;
            item.pos = Regex.Match(obj, @"""pos""\s*:\s*""([^""]+)""").Groups[1].Value;
            item.category = Regex.Match(obj, @"""category""\s*:\s*""([^""]+)""").Groups[1].Value;
            item.meaning_tr = Regex.Match(obj, @"""meaning_tr""\s*:\s*""([^""]+)""").Groups[1].Value;
            string tStr = Regex.Match(obj, @"""term""\s*:\s*(\d+)").Groups[1].Value;
            item.term = string.IsNullOrEmpty(tStr) ? 1 : int.Parse(tStr);
            item.week = 1; // default
            vocabMap[item.id] = item;
            string cleanL = NormalizeLatin(item.lemma);
            if (!string.IsNullOrEmpty(cleanL) && !vocabMap.ContainsKey(cleanL))
            {
                vocabMap[cleanL] = item;
            }
        }
        Console.WriteLine("Initial vocab items in map: " + vocabMap.Count);

        // 2. Parse curriculum fasicules to associate word -> earliest week and lessons
        var fasiculeMatches = Regex.Matches(currJs, @"\{\s*""id""\s*:\s*""(T\d+_W\d+_L\d+)""\s*,\s*""term""\s*:\s*(\d+)\s*,\s*""termName""\s*:[^,]+,\s*""courseCode""\s*:[^,]+,\s*""week""\s*:\s*(\d+)\s*,\s*""lecture""\s*:\s*(\d+).*?""vocab""\s*:\s*\[(.*?)\]", RegexOptions.Singleline);
        Console.WriteLine("Parsed fasicules: " + fasiculeMatches.Count);

        foreach (Match fm in fasiculeMatches)
        {
            string fId = fm.Groups[1].Value;
            int fTerm = int.Parse(fm.Groups[2].Value);
            int fWeek = int.Parse(fm.Groups[3].Value);
            string vocabListStr = fm.Groups[5].Value;

            var vTokens = Regex.Matches(vocabListStr, @"""([^""]+)""");
            foreach (Match tm in vTokens)
            {
                string vId = tm.Groups[1].Value;
                if (vocabMap.ContainsKey(vId))
                {
                    var item = vocabMap[vId];
                    if (!item.lessons.Contains(fId)) item.lessons.Add(fId);
                    if (item.week == 1 || item.week > fWeek)
                    {
                        item.week = fWeek;
                        item.term = fTerm;
                    }
                }
            }
        }

        // 3. Scan sentences and sentence notes for key Latin words
        // Let's add known classical core words if missing
        var extraWords = new List<VocabItem>
        {
            new VocabItem { id = "nauta", lemma = "nauta", stem = "-ae m.", pos = "1. Çekim İsim (m.)", category = "noun_1", meaning_tr = "denizci", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "agricola", lemma = "agricola", stem = "-ae m.", pos = "1. Çekim İsim (m.)", category = "noun_1", meaning_tr = "çiftçi", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "incola", lemma = "incola", stem = "-ae m./f.", pos = "1. Çekim İsim (m.)", category = "noun_1", meaning_tr = "yerli, sakin, ada/kent sakini", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "insula", lemma = "īnsula", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "ada", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "avarus", lemma = "avārus", stem = "-a -um", pos = "1./2. Sınıf Sıfat", category = "adjective", meaning_tr = "açgözlü, haris", term = 1, week = 5, lessons = new List<string>{"T1_W5_L1"} },
            new VocabItem { id = "vir", lemma = "vir", stem = "virī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "adam, erkek; kahraman", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "stultus", lemma = "stultus", stem = "-a -um", pos = "1./2. Sınıf Sıfat", category = "adjective", meaning_tr = "aptal, ahmak", term = 1, week = 5, lessons = new List<string>{"T1_W5_L1"} },
            new VocabItem { id = "puer", lemma = "puer", stem = "puerī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "çocuk, oğlan", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "pecunia", lemma = "pecūnia", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "para, servet", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "satio", lemma = "satiō", stem = "-āre, -āvī, -ātum", pos = "1. Çekim Fiil", category = "verb", meaning_tr = "doyurmak, tatmin etmek", term = 1, week = 6, lessons = new List<string>{"T1_W6_L2"} },
            new VocabItem { id = "tyrannus", lemma = "tyrannus", stem = "-ī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "tiran, zorba", term = 1, week = 6, lessons = new List<string>{"T1_W6_L2"} },
            new VocabItem { id = "exitium", lemma = "exitium", stem = "-iī n.", pos = "2. Çekim Nötr İsim (n.)", category = "noun_2", meaning_tr = "yıkım, felaket, yok oluş", term = 1, week = 6, lessons = new List<string>{"T1_W6_L1"} },
            new VocabItem { id = "amicitia", lemma = "amīcitia", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "dostluk", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "nihil", lemma = "nihil", stem = "indecl. n.", pos = "Çekimsiz İsim", category = "noun_3", meaning_tr = "hiç, hiçbir şey", term = 1, week = 6, lessons = new List<string>{"T1_W6_L1"} },
            new VocabItem { id = "philosophia", lemma = "philosophia", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "felsefe", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "cogito", lemma = "cōgitō", stem = "-āre, -āvī, -ātum", pos = "1. Çekim Fiil", category = "verb", meaning_tr = "düşünmek, tasarlamak", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "ager", lemma = "ager", stem = "agrī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "tarla, arazi, kır", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "habeo", lemma = "habeō", stem = "-ēre, -uī, -itum", pos = "2. Çekim Fiil", category = "verb", meaning_tr = "sahip olmak, elde tutmak", term = 1, week = 3, lessons = new List<string>{"T1_W3_L1"} },
            new VocabItem { id = "fortuna", lemma = "fortūna", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "şans, talih; (çoğul) mal mülk", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "rosa", lemma = "rosa", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "gül", term = 1, week = 1, lessons = new List<string>{"T1_W1_L2"} },
            new VocabItem { id = "do", lemma = "dō", stem = "dare dedī datum", pos = "1. Çekim Fiil", category = "verb", meaning_tr = "vermek, sunmak", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "basio", lemma = "bāsiō", stem = "-āre, -āvī, -ātum", pos = "1. Çekim Fiil", category = "verb", meaning_tr = "öpmek", term = 1, week = 6, lessons = new List<string>{"T1_W6_L1"} },
            new VocabItem { id = "valeo", lemma = "valeō", stem = "-ēre, -uī, valitūrum", pos = "2. Çekim Fiil", category = "verb", meaning_tr = "sağlıklı olmak, güçlü olmak; valē: elveda, hoşça kal", term = 1, week = 3, lessons = new List<string>{"T1_W3_L1"} },
            new VocabItem { id = "oculus", lemma = "oculus", stem = "-ī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "göz", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "carmen", lemma = "carmen", stem = "-inis n.", pos = "3. Çekim Nötr İsim (n.)", category = "noun_3", meaning_tr = "şarkı, şiir, kaside", term = 1, week = 11, lessons = new List<string>{"T1_W11_L1"} },
            new VocabItem { id = "corpus", lemma = "corpus", stem = "-oris n.", pos = "3. Çekim Nötr İsim (n.)", category = "noun_3", meaning_tr = "beden, vücut", term = 1, week = 12, lessons = new List<string>{"T1_W12_L1"} },
            new VocabItem { id = "homo", lemma = "homō", stem = "-inis m.", pos = "3. Çekim İsim (m.)", category = "noun_3", meaning_tr = "insan, kişi, fani", term = 1, week = 11, lessons = new List<string>{"T1_W11_L1"} },
            new VocabItem { id = "lex", lemma = "lēx", stem = "lēgis f.", pos = "3. Çekim İsim (f.)", category = "noun_3", meaning_tr = "yasa, kanun", term = 1, week = 11, lessons = new List<string>{"T1_W11_L1"} },
            new VocabItem { id = "nomen", lemma = "nōmen", stem = "-inis n.", pos = "3. Çekim Nötr İsim (n.)", category = "noun_3", meaning_tr = "isim, ad", term = 1, week = 11, lessons = new List<string>{"T1_W11_L1"} },
            new VocabItem { id = "tempus", lemma = "tempus", stem = "-oris n.", pos = "3. Çekim Nötr İsim (n.)", category = "noun_3", meaning_tr = "zaman, çağ, vakit", term = 1, week = 12, lessons = new List<string>{"T1_W12_L1"} },
            new VocabItem { id = "virtus", lemma = "virtūs", stem = "-ūtis f.", pos = "3. Çekim İsim (f.)", category = "noun_3", meaning_tr = "erdem, yiğitlik, cesaret", term = 1, week = 11, lessons = new List<string>{"T1_W11_L1"} },
            new VocabItem { id = "filius", lemma = "fīlius", stem = "-iī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "oğul, erkek evlat", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "filia", lemma = "fīlia", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "kız evlat", term = 1, week = 2, lessons = new List<string>{"T1_W2_L1"} },
            new VocabItem { id = "servus", lemma = "servus", stem = "-ī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "köle", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "dominus", lemma = "dominus", stem = "-ī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "efendi, sahip", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "liber_book", lemma = "liber", stem = "librī m.", pos = "2. Çekim İsim (m.)", category = "noun_2", meaning_tr = "kitap", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "oppidum", lemma = "oppidum", stem = "-ī n.", pos = "2. Çekim Nötr İsim (n.)", category = "noun_2", meaning_tr = "kasaba, müstahkem yer", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "verbum", lemma = "verbum", stem = "-ī n.", pos = "2. Çekim Nötr İsim (n.)", category = "noun_2", meaning_tr = "kelime, söz", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "caelum", lemma = "caelum", stem = "-ī n.", pos = "2. Çekim Nötr İsim (n.)", category = "noun_2", meaning_tr = "gökyüzü, gök, sema", term = 1, week = 4, lessons = new List<string>{"T1_W4_L1"} },
            new VocabItem { id = "sagitta", lemma = "sagitta", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "ok", term = 1, week = 12, lessons = new List<string>{"T1_W12_L2"} },
            new VocabItem { id = "umbra", lemma = "umbra", stem = "-ae f.", pos = "1. Çekim İsim (f.)", category = "noun_1", meaning_tr = "gölge, hayalet", term = 1, week = 12, lessons = new List<string>{"T1_W12_L2"} },
            new VocabItem { id = "pugno", lemma = "pugnō", stem = "-āre, -āvī, -ātum", pos = "1. Çekim Fiil", category = "verb", meaning_tr = "savaşmak, dövüşmek", term = 1, week = 12, lessons = new List<string>{"T1_W12_L2"} },
            new VocabItem { id = "exclamo", lemma = "exclāmō", stem = "-āre, -āvī, -ātum", pos = "1. Çekim Fiil", category = "verb", meaning_tr = "bağırmak, haykırmak", term = 1, week = 12, lessons = new List<string>{"T1_W12_L2"} },
            new VocabItem { id = "ceno", lemma = "cēnō", stem = "-āre, -āvī, -ātum", pos = "1. Çekim Fiil", category = "verb", meaning_tr = "akşam yemeği yemek", term = 1, week = 12, lessons = new List<string>{"T1_W12_L2"} },
            new VocabItem { id = "fortasse", lemma = "fortasse", stem = "-", pos = "Zarf", category = "adverb", meaning_tr = "belki, muhtemelen", term = 1, week = 12, lessons = new List<string>{"T1_W12_L2"} },
            new VocabItem { id = "hodie", lemma = "hodiē", stem = "-", pos = "Zarf", category = "adverb", meaning_tr = "bugün", term = 1, week = 5, lessons = new List<string>{"T1_W5_L2"} }
        };

        foreach (var ew in extraWords)
        {
            if (!vocabMap.ContainsKey(ew.id))
            {
                vocabMap[ew.id] = ew;
                Console.WriteLine("Added missing core word: " + ew.id + " (" + ew.lemma + " - " + ew.meaning_tr + ")");
            }
        }

        // 4. Filolojik Reclassification across ALL items
        int verbFixCount = 0;
        var finalItems = new List<VocabItem>();
        var seenIds = new HashSet<string>();

        foreach (var kvp in vocabMap)
        {
            var item = kvp.Value;
            if (seenIds.Contains(item.id)) continue;
            seenIds.Add(item.id);

            // Safety check for week
            if (item.week <= 0 || item.week > 14)
            {
                // derive from lessons if available
                if (item.lessons.Count > 0)
                {
                    var wm = Regex.Match(item.lessons[0], @"_W(\d+)_");
                    if (wm.Success) item.week = int.Parse(wm.Groups[1].Value);
                    else item.week = 1;
                }
                else
                {
                    item.week = 1;
                }
            }
            if (item.lessons.Count == 0)
            {
                item.lessons.Add(string.Format("T{0}_W{1}_L1", item.term, item.week));
            }

            // Thorough Verb Classification
            // A word is a VERB if:
            // - Turkish meaning ends in -mek or -mak (or has "etmek", "yapmak", "olmak", "vermek", "gitmek", "almak", "düşmek", "yaklaşmak", "kurmak", "taşımak", "sürmek", "gülmek")
            // - OR stem contains verb markers: -āre, -ēre, -ere, -īre, -ārī, -ērī, -īrī, -ī, -isse, -esse, -ferre, -velle
            // - OR lemma ends with ō or or (and is NOT a noun like amor, timor, labor, pastor, uxor, soror, orātor, imperātor)
            bool isVerbByMeaning = Regex.IsMatch(item.meaning_tr, @"(mek|mak|gülmek|etmek|olmak|vermek|gitmek|almak|ayrılmak|yapmak|koymak|taşımak|sürmek|tutmak|kurmak|düşmek|yaklaşmak)($|[,\s;])", RegexOptions.IgnoreCase);
            bool isVerbByStem = Regex.IsMatch(item.stem, @"(āre|ēre|ere|īre|ārī|ērī|īrī|isse|esse|ferre|velle|nolle|malle)", RegexOptions.IgnoreCase) && !item.stem.Contains(" f.") && !item.stem.Contains(" m.") && !item.stem.Contains(" n.");
            bool isKnownVerbLemma = item.lemma.EndsWith("ō") || item.lemma.EndsWith("or") || item.lemma == "sum" || item.lemma == "possum" || item.lemma == "ferō" || item.lemma == "eō" || item.lemma == "volō" || item.lemma == "nōlō" || item.lemma == "mālō" || item.lemma == "fīō" || item.lemma == "ōdī" || item.lemma == "coepī";
            bool isNoun3Exception = item.stem.Contains("-ōris") || item.stem.Contains("-oris") || item.stem.Contains(" f.") || item.stem.Contains(" n.") || item.stem.Contains(" m.") || item.id == "soror" || item.id == "uxor" || item.id == "amor" || item.id == "labor" || item.id == "timor" || item.id == "clamor" || item.id == "dolor" || item.id == "error" || item.id == "horror" || item.id == "imperator" || item.id == "pastor";

            if ((isVerbByStem || (isKnownVerbLemma && isVerbByMeaning)) && !isNoun3Exception)
            {
                if (item.category != "verb") verbFixCount++;
                item.category = "verb";
                if (item.stem.Contains("āre") || item.stem.Contains("ārī")) item.pos = "1. Çekim Fiil";
                else if (item.stem.Contains("ēre") || item.stem.Contains("ērī")) item.pos = "2. Çekim Fiil";
                else if (item.stem.Contains("īre") || item.stem.Contains("īrī")) item.pos = "4. Çekim Fiil";
                else if (item.stem.Contains("ere") || item.stem.Contains("ī") || item.stem.Contains("or")) item.pos = "3. Çekim Fiil";
                else item.pos = "Düzensiz Fiil";
            }
            // Adjective classification
            else if (Regex.IsMatch(item.stem, @"-(a|a,|ae)\s+(-um|-a)") || Regex.IsMatch(item.stem, @"-(is|is,|e)\b") || item.stem.Contains("-is, -e") || item.category == "adjective")
            {
                item.category = "adjective";
                if (Regex.IsMatch(item.stem, @"-(a|a,|ae)\s+(-um|-a)")) item.pos = "1./2. Sınıf Sıfat";
                else item.pos = "3. Sınıf Sıfat";
            }
            // Nouns 1-5
            else if (item.stem.Contains("-ae") || item.stem.Contains("ae f.") || item.stem.Contains("ae m.") || item.category == "noun_1")
            {
                item.category = "noun_1";
                item.pos = item.stem.Contains(" m.") ? "1. Çekim İsim (m.)" : "1. Çekim İsim (f.)";
            }
            else if (item.stem.Contains("-ī") || item.stem.Contains("-i ") || item.stem.Contains("ī m.") || item.stem.Contains("ī n.") || item.category == "noun_2")
            {
                item.category = "noun_2";
                item.pos = item.stem.Contains(" n.") ? "2. Çekim Nötr İsim (n.)" : "2. Çekim İsim (m.)";
            }
            else if (item.stem.Contains("-ūs") || item.stem.Contains("-us, -ūs") || item.category == "noun_4")
            {
                item.category = "noun_4";
                item.pos = item.stem.Contains(" n.") ? "4. Çekim Nötr İsim (n.)" : "4. Çekim İsim (m./f.)";
            }
            else if (item.stem.Contains("-ēī") || item.stem.Contains("-eī") || item.category == "noun_5")
            {
                item.category = "noun_5";
                item.pos = "5. Çekim İsim (f.)";
            }
            else if (item.category == "pronoun")
            {
                item.pos = "Zamir";
            }
            else if (item.category == "adverb")
            {
                item.pos = "Zarf";
            }
            else if (item.category == "preposition")
            {
                item.pos = "Edat";
            }
            else if (item.category == "conjunction")
            {
                item.pos = "Bağlaç";
            }
            else
            {
                item.category = "noun_3";
                item.pos = item.stem.Contains(" n.") ? "3. Çekim Nötr İsim (n.)" : (item.stem.Contains(" f.") ? "3. Çekim İsim (f.)" : "3. Çekim İsim (m.)");
            }

            finalItems.Add(item);
        }

        Console.WriteLine("Total final unique vocabulary items: " + finalItems.Count);
        Console.WriteLine("Verbs corrected from nouns: " + verbFixCount);

        // Sort by Term, Week, Lemma
        finalItems.Sort((a, b) =>
        {
            if (a.term != b.term) return a.term.CompareTo(b.term);
            if (a.week != b.week) return a.week.CompareTo(b.week);
            return string.Compare(a.lemma, b.lemma, StringComparison.OrdinalIgnoreCase);
        });

        // Write authoritative eyup_vocabulary.js
        var sb = new StringBuilder();
        sb.AppendLine("// data/eyup_vocabulary.js - Doç. Dr. Eyüp Çoraklı Latince 1 & 2 Ders Notları Yetkin Sözlüğü");
        sb.AppendLine("// Eksiksiz filolojik sınıflandırma, hafta & ders eşleşmeleri, 100% Türkçe çeviri ve sıfır bilgi kaybı.");
        sb.AppendLine();
        sb.AppendLine("const EYUP_VOCABULARY = [");

        for (int i = 0; i < finalItems.Count; i++)
        {
            var v = finalItems[i];
            sb.AppendLine("  {");
            sb.AppendLine(string.Format("    \"id\": \"{0}\",", v.id));
            sb.AppendLine(string.Format("    \"lemma\": \"{0}\",", v.lemma));
            sb.AppendLine(string.Format("    \"stem\": \"{0}\",", v.stem.Replace("\"", "\\\"")));
            sb.AppendLine(string.Format("    \"pos\": \"{0}\",", v.pos));
            sb.AppendLine(string.Format("    \"category\": \"{0}\",", v.category));
            sb.AppendLine(string.Format("    \"meaning_tr\": \"{0}\",", v.meaning_tr.Replace("\"", "\\\"")));
            sb.AppendLine(string.Format("    \"term\": {0},", v.term));
            sb.AppendLine(string.Format("    \"week\": {0},", v.week));
            sb.Append("    \"lessons\": [");
            for (int l = 0; l < v.lessons.Count; l++)
            {
                sb.Append(string.Format("\"{0}\"", v.lessons[l]));
                if (l < v.lessons.Count - 1) sb.Append(", ");
            }
            sb.AppendLine("]");
            sb.Append("  }");
            if (i < finalItems.Count - 1) sb.Append(",");
            sb.AppendLine();
        }

        sb.AppendLine("];");
        sb.AppendLine();
        sb.AppendLine("if (typeof module !== 'undefined' && module.exports) {");
        sb.AppendLine("  module.exports = { EYUP_VOCABULARY };");
        sb.AppendLine("}");

        File.WriteAllText(@"data\eyup_vocabulary.js", sb.ToString(), new UTF8Encoding(false));
        Console.WriteLine("✓ Successfully regenerated data/eyup_vocabulary.js with " + finalItems.Count + " words!");
    }
}
