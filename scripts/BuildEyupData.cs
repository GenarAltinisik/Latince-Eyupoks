using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections.Generic;

public class BuildEyupData {
    public class VocabItem {
        public string id;
        public string lemma;
        public string stem;
        public string pos;
        public string category;
        public string meaning_tr;
        public List<string> lessons = new List<string>();
        public int term;
        public int week;
    }

    public class SentenceItem {
        public string latin;
        public string tr;
        public int slide;
    }

    public class SlideSummary {
        public int number;
        public string content;
    }

    public class LessonItem {
        public string id;
        public int term;
        public int week;
        public int lecture;
        public string title;
        public string file;
        public int slideCount;
        public int vocabCount;
        public List<string> vocab = new List<string>();
        public List<SentenceItem> sentences = new List<SentenceItem>();
        public List<SlideSummary> slides = new List<SlideSummary>();
    }

    public static string NormalizeKey(string lemma) {
        string s = Regex.Replace(lemma, @"[\(\)\s\.\,\-\*]", "").ToLower();
        s = s.Replace("\u0101", "a").Replace("\u0103", "a")
             .Replace("\u0113", "e").Replace("\u0115", "e")
             .Replace("\u012B", "i").Replace("\u012D", "i")
             .Replace("\u014D", "o").Replace("\u014F", "o")
             .Replace("\u016B", "u").Replace("\u016D", "u");
        return s;
    }

    public static string DetermineCategory(string pos, string stem) {
        string p = pos.ToLower();
        string st = stem.ToLower();
        if (p.Contains("adj") || st.Contains("-a,") || st.Contains("-is,")) return "adjective";
        if (p.Contains("v.") || p == "v" || st.Contains("-are") || st.Contains("-ere") || st.Contains("-ire")) return "verb";
        if (p.Contains("adv")) return "adverb";
        if (p.Contains("prep")) return "preposition";
        if (p.Contains("conj")) return "conjunction";
        if (p.Contains("pron")) return "pronoun";

        if (st.Contains("-ae")) return "noun_1";
        if (st.Contains("-i") || st.Contains("-ii")) return "noun_2";
        if (st.Contains("-is")) return "noun_3";
        if (st.Contains("-us")) return "noun_4";
        if (st.Contains("-ei")) return "noun_5";

        return "noun";
    }

    public static void Run(string corpusPath, string outVocabPath, string outCurriculumPath) {
        string json = File.ReadAllText(corpusPath, Encoding.UTF8);

        // We can parse documents using regex or simple deserializer
        // Match each document block: {"file": "...", "term": "...", "relativePath": "...", "slideCount": ..., "slides": [...]}
        MatchCollection docMatches = Regex.Matches(json, @"\{\s*""file"":\s*""([^""]+)""[\s\S]*?""term"":\s*""([^""]+)""[\s\S]*?""slides"":\s*\[([\s\S]*?)\]\s*\}");

        Dictionary<string, VocabItem> vocabMap = new Dictionary<string, VocabItem>();
        List<LessonItem> lessons = new List<LessonItem>();

        foreach (Match dm in docMatches) {
            string file = dm.Groups[1].Value;
            string termStr = dm.Groups[2].Value;
            string slidesJson = dm.Groups[3].Value;

            int termNum = termStr.Contains("1") ? 1 : 2;
            int week = 0;
            int lecture = 0;

            Match wm = Regex.Match(file, @"(\d+)\.(\d+)");
            if (wm.Success) {
                week = int.Parse(wm.Groups[1].Value);
                lecture = int.Parse(wm.Groups[2].Value);
            }

            string lessonId = "T" + termNum + "_W" + week + "_L" + lecture;
            string lessonTitle = "D\u00F6nem " + termNum + " \u2022 Hafta " + week + " (Ders " + lecture + ")";

            LessonItem lesson = new LessonItem {
                id = lessonId,
                term = termNum,
                week = week,
                lecture = lecture,
                title = lessonTitle,
                file = file
            };

            // Extract slides
            MatchCollection slideMatches = Regex.Matches(slidesJson, @"\{\s*""number"":\s*(\d+),\s*""text"":\s*""([\s\S]*?)""\s*\}");
            lesson.slideCount = slideMatches.Count;

            foreach (Match sm in slideMatches) {
                int sNum = int.Parse(sm.Groups[1].Value);
                string sText = Regex.Unescape(sm.Groups[2].Value);

                lesson.slides.Add(new SlideSummary { number = sNum, content = sText });

                string[] lines = sText.Split(new[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);
                List<string> cleanLines = new List<string>();
                foreach (string l in lines) {
                    string tl = l.Trim().Replace('\u2013', '-').Replace('\u2014', '-');
                    if (tl.Length > 0) cleanLines.Add(tl);
                }

                // Line by line vocab extraction
                for (int i = 0; i < cleanLines.Count; i++) {
                    string line = cleanLines[i];
                    bool matched = false;
                    string rawLemma = "";
                    string stem = "";
                    string pos = "";
                    string meaning = "";

                    // Pattern 1: lemma, -stem, pos, meaning OR lemma -stem, pos, meaning
                    Match vm = Regex.Match(line, @"^([\p{L}\s\(\)\/]+?)(?:,|\s+)(-[^\,\;]+?|[\p{L}]+)\s*,\s*(m\.|f\.|n\.|m\.\/f\.|adj\.|v\.|adv\.|prep\.|conj\.|pron\.|özel isim)\s*,?\s*(.*)$");
                    if (vm.Success) {
                        rawLemma = vm.Groups[1].Value.Trim();
                        stem = vm.Groups[2].Value.Trim();
                        pos = vm.Groups[3].Value.Trim();
                        meaning = vm.Groups[4].Value.Trim();
                        matched = true;
                    } else {
                        // Pattern 2: verb principal parts: laudo, -are, avi, -atum, 1, v., ...
                        Match vm2 = Regex.Match(line, @"^([\p{L}\s\(\)]+?)\s*,\s*([\p{L}\s,\-\d]+?)\s*,\s*(\d*\,?\s*v\.)\s*,?\s*(.*)$");
                        if (vm2.Success) {
                            rawLemma = vm2.Groups[1].Value.Trim();
                            stem = vm2.Groups[2].Value.Trim();
                            pos = "v.";
                            meaning = vm2.Groups[4].Value.Trim();
                            matched = true;
                        } else {
                            // Pattern 3: adv / prep / conj / pron: nunc, adv., ...
                            Match vm3 = Regex.Match(line, @"^([\p{L}\s\(\)]+?)\s*,\s*(adv\.|prep\.|conj\.|pron\.)\s*,?\s*(.*)$");
                            if (vm3.Success) {
                                rawLemma = vm3.Groups[1].Value.Trim();
                                stem = "-";
                                pos = vm3.Groups[2].Value.Trim();
                                meaning = vm3.Groups[3].Value.Trim();
                                matched = true;
                            }
                        }
                    }

                    if (matched && rawLemma.Length > 1 && !Regex.IsMatch(rawLemma, @"^\d+$") && meaning.Length > 0) {
                        string cleanLemma = Regex.Replace(rawLemma, @"^\*\s*", "").Trim();
                        if (cleanLemma.Contains("hali") || cleanLemma.Contains("durumlar") || cleanLemma.Contains("c\u00FCmleler") || cleanLemma.Length > 40) continue;

                        string key = NormalizeKey(cleanLemma);
                        if (key.Length > 1) {
                            string cat = DetermineCategory(pos, stem);
                            if (!vocabMap.ContainsKey(key)) {
                                vocabMap[key] = new VocabItem {
                                    id = key,
                                    lemma = cleanLemma,
                                    stem = stem,
                                    pos = pos,
                                    category = cat,
                                    meaning_tr = meaning,
                                    term = termNum,
                                    week = week
                                };
                            }
                            if (!vocabMap[key].lessons.Contains(lessonId)) {
                                vocabMap[key].lessons.Add(lessonId);
                            }
                            if (!lesson.vocab.Contains(key)) {
                                lesson.vocab.Add(key);
                            }
                        }
                    }
                }

                // Extract example sentences
                if (sText.Contains("\u00D6RNEK C\u00DCMLELER") || sText.Contains("\u00D6rnek C\u00FCmleler")) {
                    for (int k = 0; k < cleanLines.Count; k++) {
                        string cl = cleanLines[k];
                        if (cl.Contains("\u00D6RNEK C\u00DCMLELER") || cl.Contains("\u00D6rnek C\u00FCmleler")) continue;
                        if (Regex.IsMatch(cl, @"\b(m\.|f\.|n\.|adj\.|v\.|adv\.|prep\.|conj\.)\b")) continue;

                        if (Regex.IsMatch(cl, @"[\p{L}]+\s+[\p{L}]+") && (Regex.IsMatch(cl, @"\b(est|sunt|erat|erant|non|et|in|ad|cum|te|me|se|qui|quae|quod|potest|habent|fuit)\b") || cl.EndsWith("."))) {
                            string latSent = cl;
                            string trSent = "";
                            if (k + 1 < cleanLines.Count) {
                                string next = cleanLines[k + 1];
                                if (!Regex.IsMatch(next, @"\b(m\.|f\.|n\.|adj\.|v\.|adv\.|prep\.|conj\.)\b") && Regex.IsMatch(next, @"[\u00E7\u011F\u0131\u00F6\u015F\u00FC\u00C7\u011E\u0130\u00D6\u015E\u00DC]|ydi|m\u0131\u015Ft\u0131|olur|vard\u0131|edemez|etmek")) {
                                    trSent = next;
                                }
                            }
                            lesson.sentences.Add(new SentenceItem { latin = latSent, tr = trSent, slide = sNum });
                        }
                    }
                }
            }

            lesson.vocabCount = lesson.vocab.Count;
            lessons.Add(lesson);
        }

        // Build JSON output strings
        StringBuilder vSb = new StringBuilder();
        vSb.AppendLine("// Latince Eyupoks - Eyüp Hoca Kelime Veritabanı");
        vSb.AppendLine("const EYUP_VOCABULARY = [");
        int vi = 0;
        foreach (var kv in vocabMap) {
            VocabItem v = kv.Value;
            vSb.Append("  {");
            vSb.AppendFormat("\"id\": \"{0}\", \"lemma\": \"{1}\", \"stem\": \"{2}\", \"pos\": \"{3}\", \"category\": \"{4}\", \"meaning_tr\": \"{5}\", \"term\": {6}, \"week\": {7}, \"lessons\": [{8}]",
                EscapeJson(v.id), EscapeJson(v.lemma), EscapeJson(v.stem), EscapeJson(v.pos), EscapeJson(v.category), EscapeJson(v.meaning_tr), v.term, v.week, string.Join(",", v.lessons.ConvertAll(x => "\"" + x + "\"").ToArray()));
            vSb.Append("}");
            if (++vi < vocabMap.Count) vSb.Append(",");
            vSb.AppendLine();
        }
        vSb.AppendLine("];");
        vSb.AppendLine("if (typeof module !== 'undefined') module.exports = { EYUP_VOCABULARY };");
        File.WriteAllText(outVocabPath, vSb.ToString(), Encoding.UTF8);

        // Curriculum
        StringBuilder cSb = new StringBuilder();
        cSb.AppendLine("// Latince Eyupoks - Eyüp Hoca Müfredat & Ders Anlatımları");
        cSb.AppendLine("const EYUP_CURRICULUM = [");
        for (int li = 0; li < lessons.Count; li++) {
            LessonItem l = lessons[li];
            cSb.Append("  {");
            cSb.AppendFormat("\"id\": \"{0}\", \"term\": {1}, \"week\": {2}, \"lecture\": {3}, \"title\": \"{4}\", \"file\": \"{5}\", \"slideCount\": {6}, \"vocabCount\": {7}, \"vocab\": [{8}], \"sentences\": [",
                EscapeJson(l.id), l.term, l.week, l.lecture, EscapeJson(l.title), EscapeJson(l.file), l.slideCount, l.vocabCount, string.Join(",", l.vocab.ConvertAll(x => "\"" + x + "\"").ToArray()));
            
            for (int si = 0; si < l.sentences.Count; si++) {
                SentenceItem sent = l.sentences[si];
                cSb.AppendFormat("{{\"latin\": \"{0}\", \"tr\": \"{1}\", \"slide\": {2}}}", EscapeJson(sent.latin), EscapeJson(sent.tr), sent.slide);
                if (si < l.sentences.Count - 1) cSb.Append(",");
            }
            cSb.Append("], \"slides\": [");

            for (int sli = 0; sli < l.slides.Count; sli++) {
                SlideSummary sl = l.slides[sli];
                cSb.AppendFormat("{{\"number\": {0}, \"content\": \"{1}\"}}", sl.number, EscapeJson(sl.content));
                if (sli < l.slides.Count - 1) cSb.Append(",");
            }
            cSb.Append("]}");
            if (li < lessons.Count - 1) cSb.Append(",");
            cSb.AppendLine();
        }
        cSb.AppendLine("];");
        cSb.AppendLine("if (typeof module !== 'undefined') module.exports = { EYUP_CURRICULUM };");
        File.WriteAllText(outCurriculumPath, cSb.ToString(), Encoding.UTF8);

        Console.WriteLine("Successfully created: " + outVocabPath + " (" + vocabMap.Count + " vocabulary entries)");
        Console.WriteLine("Successfully created: " + outCurriculumPath + " (" + lessons.Count + " lessons)");
    }

    private static string EscapeJson(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        return s.Replace("\\", "\\\\").Replace("\"", "\\\"").Replace("\r", "").Replace("\n", "\\n").Replace("\t", " ");
    }
}
