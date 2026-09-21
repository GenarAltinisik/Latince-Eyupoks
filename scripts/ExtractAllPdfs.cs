using System;
using System.IO;
using System.IO.Compression;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections.Generic;

public class ExtractAllPdfs {
    public class Slide {
        public int number;
        public string text;
    }

    public class FileDoc {
        public string file;
        public int term;
        public string relativePath;
        public int slideCount;
        public List<Slide> slides = new List<Slide>();
    }

    public class CMapInfo {
        public bool isTwoByte = false;
        public Dictionary<string, string> map = new Dictionary<string, string>();
    }

    public static string CodePointToString(long code) {
        try {
            if ((code >= 0 && code <= 0xD7FF) || (code >= 0xE000 && code <= 0xFFFF)) {
                return ((char)code).ToString();
            } else if (code > 0xFFFF && code <= 0x10FFFF) {
                return char.ConvertFromUtf32((int)code);
            }
        } catch { }
        return "";
    }

    public static CMapInfo ParseCMap(string cmapTxt) {
        CMapInfo info = new CMapInfo();
        Match csMatch = Regex.Match(cmapTxt, @"begincodespacerange([\s\S]*?)endcodespacerange");
        if (csMatch.Success && (csMatch.Groups[1].Value.Contains("<0000>") || csMatch.Groups[1].Value.Contains("<00 00>"))) {
            info.isTwoByte = true;
        }

        MatchCollection bfBlocks = Regex.Matches(cmapTxt, @"\d+\s+beginbfchar([\s\S]*?)endbfchar");
        foreach (Match block in bfBlocks) {
            MatchCollection pairs = Regex.Matches(block.Groups[1].Value, @"<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>");
            foreach (Match m in pairs) {
                try {
                    string cHex = m.Groups[1].Value.ToUpper();
                    if (cHex.Length == 4) info.isTwoByte = true;
                    string uHex = m.Groups[2].Value;
                    StringBuilder sb = new StringBuilder();
                    for (int k = 0; k < uHex.Length; k += 4) {
                        int chunkLen = Math.Min(4, uHex.Length - k);
                        string chunk = uHex.Substring(k, chunkLen);
                        if (chunk.Length == 2) chunk = "00" + chunk;
                        uint val = 0;
                        if (uint.TryParse(chunk, System.Globalization.NumberStyles.HexNumber, null, out val)) {
                            sb.Append(CodePointToString(val));
                        }
                    }
                    info.map[cHex] = sb.ToString();
                } catch { }
            }
        }

        MatchCollection bfrBlocks = Regex.Matches(cmapTxt, @"\d+\s+beginbfrange([\s\S]*?)endbfrange");
        foreach (Match block in bfrBlocks) {
            string inner = block.Groups[1].Value;
            MatchCollection bfranges = Regex.Matches(inner, @"<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>");
            foreach (Match m in bfranges) {
                try {
                    uint sCode = 0, eCode = 0, tCode = 0;
                    if (uint.TryParse(m.Groups[1].Value, System.Globalization.NumberStyles.HexNumber, null, out sCode) &&
                        uint.TryParse(m.Groups[2].Value, System.Globalization.NumberStyles.HexNumber, null, out eCode) &&
                        uint.TryParse(m.Groups[3].Value, System.Globalization.NumberStyles.HexNumber, null, out tCode)) {
                        int hexLen = m.Groups[1].Value.Length;
                        if (hexLen == 4) info.isTwoByte = true;
                        for (uint c = sCode; c <= eCode && (c - sCode) < 5000; c++) {
                            string cHex = c.ToString("X" + hexLen);
                            info.map[cHex] = CodePointToString(tCode + (c - sCode));
                        }
                    }
                } catch { }
            }

            MatchCollection bfrangeArrays = Regex.Matches(inner, @"<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>\s+\[([^\]]+)\]");
            foreach (Match m in bfrangeArrays) {
                try {
                    uint sCode = 0;
                    if (uint.TryParse(m.Groups[1].Value, System.Globalization.NumberStyles.HexNumber, null, out sCode)) {
                        int hexLen = m.Groups[1].Value.Length;
                        if (hexLen == 4) info.isTwoByte = true;
                        MatchCollection arrayHexes = Regex.Matches(m.Groups[3].Value, @"<([0-9A-Fa-f]+)>");
                        for (int i = 0; i < arrayHexes.Count; i++) {
                            string uHex = arrayHexes[i].Groups[1].Value;
                            uint val = 0;
                            if (uint.TryParse(uHex, System.Globalization.NumberStyles.HexNumber, null, out val)) {
                                string cHex = (sCode + (uint)i).ToString("X" + hexLen);
                                info.map[cHex] = CodePointToString(val);
                            }
                        }
                    }
                } catch { }
            }
        }

        return info;
    }

    public static byte[] GetStreamBytes(byte[] bytes, string rawIso, int objNum) {
        Match m = Regex.Match(rawIso, @"(?:\r?\n|^)" + objNum + @"\s+0\s+obj\b[\s\S]*?stream[\r\n]+");
        if (!m.Success) {
            m = Regex.Match(rawIso, @"\b" + objNum + @"\s+0\s+obj\b[\s\S]*?stream[\r\n]+");
            if (!m.Success) return new byte[0];
        }

        int sStart = m.Index + m.Length;
        int eIdx = rawIso.IndexOf("endstream", sStart);
        if (eIdx < sStart) return new byte[0];

        int len = eIdx - sStart;
        while (len > 0 && (bytes[sStart + len - 1] == 10 || bytes[sStart + len - 1] == 13)) len--;

        byte[] streamBytes = new byte[len];
        Array.Copy(bytes, sStart, streamBytes, 0, len);

        if (streamBytes.Length > 2 && streamBytes[0] == 0x78) {
            try {
                using (MemoryStream ms = new MemoryStream(streamBytes, 2, len - 6))
                using (DeflateStream ds = new DeflateStream(ms, CompressionMode.Decompress))
                using (MemoryStream outMs = new MemoryStream()) {
                    ds.CopyTo(outMs);
                    return outMs.ToArray();
                }
            } catch {
                try {
                    using (MemoryStream ms = new MemoryStream(streamBytes))
                    using (DeflateStream ds = new DeflateStream(ms, CompressionMode.Decompress))
                    using (MemoryStream outMs = new MemoryStream()) {
                        ds.CopyTo(outMs);
                        return outMs.ToArray();
                    }
                } catch { }
            }
        }
        return streamBytes;
    }

    public static string DecodePdfLiteral(string raw) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < raw.Length; i++) {
            if (raw[i] == '\\' && i + 1 < raw.Length) {
                char next = raw[i + 1];
                if (next == 'n') { sb.Append('\n'); i++; }
                else if (next == 'r') { sb.Append('\r'); i++; }
                else if (next == 't') { sb.Append('\t'); i++; }
                else if (next == 'b') { sb.Append('\b'); i++; }
                else if (next == 'f') { sb.Append('\f'); i++; }
                else if (next == '(' || next == ')' || next == '\\') { sb.Append(next); i++; }
                else if (char.IsDigit(next)) {
                    int octLen = 1;
                    while (octLen < 3 && i + 1 + octLen < raw.Length && char.IsDigit(raw[i + 1 + octLen])) octLen++;
                    string octStr = raw.Substring(i + 1, octLen);
                    int octVal = Convert.ToInt32(octStr, 8);
                    sb.Append(Encoding.GetEncoding("windows-1254").GetString(new byte[] { (byte)octVal }));
                    i += octLen;
                } else {
                    sb.Append(next);
                    i++;
                }
            } else {
                byte b = (byte)raw[i];
                sb.Append(Encoding.GetEncoding("windows-1254").GetString(new byte[] { b }));
            }
        }
        return sb.ToString();
    }

    public static FileDoc ProcessPdf(string pdfPath, int term) {
        FileDoc doc = new FileDoc();
        doc.file = Path.GetFileName(pdfPath);
        doc.term = term;
        doc.relativePath = term + ". Dönem/" + doc.file;

        byte[] bytes = File.ReadAllBytes(pdfPath);
        string rawIso = Encoding.GetEncoding("ISO-8859-1").GetString(bytes);

        // Parse CMaps
        Dictionary<int, int> fontObjToCMapObj = new Dictionary<int, int>();
        MatchCollection objMatches = Regex.Matches(rawIso, @"(?:\r?\n|^)(\d+)\s+0\s+obj\b([\s\S]*?)endobj");
        foreach (Match obj in objMatches) {
            int num = int.Parse(obj.Groups[1].Value);
            string body = obj.Groups[2].Value;
            Match tuMatch = Regex.Match(body, @"/ToUnicode\s+(\d+)\s+0\s+R");
            if (tuMatch.Success) fontObjToCMapObj[num] = int.Parse(tuMatch.Groups[1].Value);
        }

        Dictionary<int, CMapInfo> cmaps = new Dictionary<int, CMapInfo>();
        foreach (int cObj in fontObjToCMapObj.Values) {
            if (!cmaps.ContainsKey(cObj)) {
                byte[] cBytes = GetStreamBytes(bytes, rawIso, cObj);
                if (cBytes.Length > 0) {
                    cmaps[cObj] = ParseCMap(Encoding.UTF8.GetString(cBytes));
                }
            }
        }

        Dictionary<string, CMapInfo> fontMaps = new Dictionary<string, CMapInfo>();
        MatchCollection fontRefMatches = Regex.Matches(rawIso, @"/([A-Za-z0-9_\-]+)\s+(\d+)\s+0\s+R");
        foreach (Match m in fontRefMatches) {
            string fn = m.Groups[1].Value;
            int fo = int.Parse(m.Groups[2].Value);
            if (fontObjToCMapObj.ContainsKey(fo)) {
                int co = fontObjToCMapObj[fo];
                if (cmaps.ContainsKey(co)) fontMaps[fn] = cmaps[co];
            }
        }

        MatchCollection pageMatches = Regex.Matches(rawIso, @"/Contents\s*\[?\s*(\d+)\s+0\s+R");
        HashSet<int> seenContents = new HashSet<int>();
        int sNum = 0;

        foreach (Match pm in pageMatches) {
            int cNum = int.Parse(pm.Groups[1].Value);
            if (seenContents.Contains(cNum)) continue;
            seenContents.Add(cNum);

            byte[] cBytes = GetStreamBytes(bytes, rawIso, cNum);
            if (cBytes.Length == 0) continue;
            string streamIso = Encoding.GetEncoding("ISO-8859-1").GetString(cBytes);

            StringBuilder sb = new StringBuilder();
            MatchCollection btBlocks = Regex.Matches(streamIso, @"BT\b([\s\S]*?)ET");
            string currFont = "F1";

            foreach (Match bt in btBlocks) {
                string[] lines = bt.Groups[1].Value.Split(new[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);
                foreach (string inst in lines) {
                    string trimmed = inst.Trim();
                    Match fm = Regex.Match(trimmed, @"/([A-Za-z0-9_\-]+)\s+[\d\.]+\s+Tf");
                    if (fm.Success) currFont = fm.Groups[1].Value;

                    if (trimmed.EndsWith("TJ") || trimmed.EndsWith("Tj")) {
                        CMapInfo info = fontMaps.ContainsKey(currFont) ? fontMaps[currFont] : null;

                        MatchCollection parts = Regex.Matches(trimmed, @"<([0-9A-Fa-f]+)>|\((((?>\\.)|[^()\\])*)\)|(-?\d+(?:\.\d+)?)");
                        foreach (Match part in parts) {
                            if (part.Groups[1].Success) {
                                string hex = part.Groups[1].Value;
                                int step = (info != null && info.isTwoByte) ? 4 : 2;
                                for (int k = 0; k < hex.Length; k += step) {
                                    int chunkLen = Math.Min(step, hex.Length - k);
                                    string c = hex.Substring(k, chunkLen).ToUpper();
                                    if (info != null && info.map.ContainsKey(c)) {
                                        sb.Append(info.map[c]);
                                    } else if (chunkLen == 2 && info != null && info.map.ContainsKey("00" + c)) {
                                        sb.Append(info.map["00" + c]);
                                    } else if (chunkLen == 4 && c.StartsWith("00") && info != null && info.map.ContainsKey(c.Substring(2))) {
                                        sb.Append(info.map[c.Substring(2)]);
                                    } else {
                                        uint val = 0;
                                        if (uint.TryParse(c, System.Globalization.NumberStyles.HexNumber, null, out val)) {
                                            sb.Append(Encoding.GetEncoding("windows-1254").GetString(new byte[] { (byte)val }));
                                        }
                                    }
                                }
                            } else if (part.Groups[2].Success) {
                                string lit = part.Groups[2].Value;
                                sb.Append(DecodePdfLiteral(lit));
                            } else if (part.Groups[4].Success) {
                                double kern = 0;
                                if (double.TryParse(part.Groups[4].Value, System.Globalization.NumberStyles.Float, System.Globalization.CultureInfo.InvariantCulture, out kern)) {
                                    if (kern <= -150) {
                                        sb.Append(" ");
                                    }
                                }
                            }
                        }
                        sb.Append(" ");
                    } else if (trimmed.EndsWith("T*") || Regex.IsMatch(trimmed, @"-?\d+(\.\d+)?\s+-\d+(\.\d+)?\s+T[dD]")) {
                        sb.AppendLine();
                    }
                }
                sb.AppendLine();
            }

            string clean = sb.ToString().Trim();
            if (!string.IsNullOrWhiteSpace(clean)) {
                sNum++;
                doc.slides.Add(new Slide { number = sNum, text = clean });
            }
        }

        doc.slideCount = doc.slides.Count;
        return doc;
    }

    public static string EscapeJson(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        return s.Replace("\\", "\\\\").Replace("\"", "\\\"").Replace("\r", "").Replace("\n", "\\n").Replace("\t", "\\t");
    }

    public static void Main(string[] args) {
        Console.OutputEncoding = Encoding.UTF8;
        string rootDir = Directory.GetCurrentDirectory();
        string term1Dir = Path.Combine(rootDir, @"Eyüp Hoca 1. Sınıf Ders Notları\1. Dönem");
        string term2Dir = Path.Combine(rootDir, @"Eyüp Hoca 1. Sınıf Ders Notları\2. Dönem");

        List<FileDoc> allDocs = new List<FileDoc>();

        if (Directory.Exists(term1Dir)) {
            foreach (string file in Directory.GetFiles(term1Dir, "*.pdf")) {
                Console.WriteLine("Processing 1. Dönem: " + Path.GetFileName(file));
                allDocs.Add(ProcessPdf(file, 1));
            }
        }

        if (Directory.Exists(term2Dir)) {
            foreach (string file in Directory.GetFiles(term2Dir, "*.pdf")) {
                Console.WriteLine("Processing 2. Dönem: " + Path.GetFileName(file));
                allDocs.Add(ProcessPdf(file, 2));
            }
        }

        StringBuilder sb = new StringBuilder();
        sb.AppendLine("[");
        for (int i = 0; i < allDocs.Count; i++) {
            FileDoc doc = allDocs[i];
            sb.AppendLine("  {");
            sb.AppendLine(string.Format("    \"file\": \"{0}\",", EscapeJson(doc.file)));
            sb.AppendLine(string.Format("    \"term\": {0},", doc.term));
            sb.AppendLine(string.Format("    \"relativePath\": \"{0}\",", EscapeJson(doc.relativePath)));
            sb.AppendLine(string.Format("    \"slideCount\": {0},", doc.slideCount));
            sb.AppendLine("    \"slides\": [");
            for (int j = 0; j < doc.slides.Count; j++) {
                Slide s = doc.slides[j];
                sb.AppendLine("      {");
                sb.AppendLine(string.Format("        \"number\": {0},", s.number));
                sb.AppendLine(string.Format("        \"text\": \"{0}\"", EscapeJson(s.text)));
                sb.Append("      }");
                if (j < doc.slides.Count - 1) sb.Append(",");
                sb.AppendLine();
            }
            sb.AppendLine("    ]");
            sb.Append("  }");
            if (i < allDocs.Count - 1) sb.Append(",");
            sb.AppendLine();
        }
        sb.AppendLine("]");

        string outFile = Path.Combine(rootDir, "scripts", "raw_corpus.json");
        File.WriteAllText(outFile, sb.ToString(), Encoding.UTF8);
        Console.WriteLine("Saved raw corpus to: " + outFile);
    }
}
