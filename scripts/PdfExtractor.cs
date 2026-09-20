using System;
using System.IO;
using System.IO.Compression;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections.Generic;

public class PdfExtractor {
    public class Slide {
        public int Number;
        public string Text;
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

    public static Dictionary<string, string> ParseCMap(string cmapTxt) {
        Dictionary<string, string> map = new Dictionary<string, string>();

        // 1. Only parse inside beginbfchar ... endbfchar
        MatchCollection bfBlocks = Regex.Matches(cmapTxt, @"\d+\s+beginbfchar([\s\S]*?)endbfchar");
        foreach (Match block in bfBlocks) {
            MatchCollection pairs = Regex.Matches(block.Groups[1].Value, @"<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>");
            foreach (Match m in pairs) {
                try {
                    string cHex = m.Groups[1].Value.ToUpper();
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
                    map[cHex] = sb.ToString();
                } catch { }
            }
        }

        // 2. Only parse inside beginbfrange ... endbfrange
        MatchCollection bfrBlocks = Regex.Matches(cmapTxt, @"\d+\s+beginbfrange([\s\S]*?)endbfrange");
        foreach (Match block in bfrBlocks) {
            string inner = block.Groups[1].Value;

            // Target range: <start> <end> <target_start>
            MatchCollection bfranges = Regex.Matches(inner, @"<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>");
            foreach (Match m in bfranges) {
                try {
                    uint sCode = 0;
                    uint eCode = 0;
                    uint tCode = 0;
                    if (uint.TryParse(m.Groups[1].Value, System.Globalization.NumberStyles.HexNumber, null, out sCode) &&
                        uint.TryParse(m.Groups[2].Value, System.Globalization.NumberStyles.HexNumber, null, out eCode) &&
                        uint.TryParse(m.Groups[3].Value, System.Globalization.NumberStyles.HexNumber, null, out tCode)) {
                        int hexLen = m.Groups[1].Value.Length;
                        for (uint c = sCode; c <= eCode && (c - sCode) < 5000; c++) {
                            string cHex = c.ToString("X" + hexLen);
                            map[cHex] = CodePointToString(tCode + (c - sCode));
                        }
                    }
                } catch { }
            }

            // Target array: <start> <end> [ <u1> <u2> ... ]
            MatchCollection bfrangeArrays = Regex.Matches(inner, @"<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>\s+\[([^\]]+)\]");
            foreach (Match m in bfrangeArrays) {
                try {
                    uint sCode = 0;
                    if (uint.TryParse(m.Groups[1].Value, System.Globalization.NumberStyles.HexNumber, null, out sCode)) {
                        int hexLen = m.Groups[1].Value.Length;
                        MatchCollection arrayHexes = Regex.Matches(m.Groups[3].Value, @"<([0-9A-Fa-f]+)>");
                        for (int i = 0; i < arrayHexes.Count; i++) {
                            string uHex = arrayHexes[i].Groups[1].Value;
                            uint val = 0;
                            if (uint.TryParse(uHex, System.Globalization.NumberStyles.HexNumber, null, out val)) {
                                string cHex = (sCode + (uint)i).ToString("X" + hexLen);
                                map[cHex] = CodePointToString(val);
                            }
                        }
                    }
                } catch { }
            }
        }

        return map;
    }

    public static string GetStreamContent(byte[] bytes, string rawPdf, int objNum) {
        Match m = Regex.Match(rawPdf, @"(?:\r?\n|^)" + objNum + @"\s+0\s+obj\b[\s\S]*?stream[\r\n]+");
        if (!m.Success) {
            m = Regex.Match(rawPdf, @"\b" + objNum + @"\s+0\s+obj\b[\s\S]*?stream[\r\n]+");
            if (!m.Success) return "";
        }

        int sStart = m.Index + m.Length;
        int eIdx = rawPdf.IndexOf("endstream", sStart);
        if (eIdx < sStart) return "";

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
                    return Encoding.UTF8.GetString(outMs.ToArray());
                }
            } catch {
                try {
                    using (MemoryStream ms = new MemoryStream(streamBytes))
                    using (DeflateStream ds = new DeflateStream(ms, CompressionMode.Decompress))
                    using (MemoryStream outMs = new MemoryStream()) {
                        ds.CopyTo(outMs);
                        return Encoding.UTF8.GetString(outMs.ToArray());
                    }
                } catch { }
            }
        }
        return Encoding.UTF8.GetString(streamBytes);
    }

    public static List<Slide> ExtractPdf(string pdfPath) {
        List<Slide> slides = new List<Slide>();
        byte[] bytes = File.ReadAllBytes(pdfPath);
        string rawPdf = Encoding.ASCII.GetString(bytes);

        // 1. Split objects accurately to find which Font Obj has which ToUnicode Obj
        Dictionary<int, int> fontObjToCMapObj = new Dictionary<int, int>();
        MatchCollection objMatches = Regex.Matches(rawPdf, @"(?:\r?\n|^)(\d+)\s+0\s+obj\b([\s\S]*?)endobj");
        foreach (Match obj in objMatches) {
            int num = int.Parse(obj.Groups[1].Value);
            string body = obj.Groups[2].Value;
            Match tuMatch = Regex.Match(body, @"/ToUnicode\s+(\d+)\s+0\s+R");
            if (tuMatch.Success) {
                fontObjToCMapObj[num] = int.Parse(tuMatch.Groups[1].Value);
            }
        }

        // 2. Parse CMaps
        Dictionary<int, Dictionary<string, string>> cmaps = new Dictionary<int, Dictionary<string, string>>();
        foreach (int cObj in fontObjToCMapObj.Values) {
            if (!cmaps.ContainsKey(cObj)) {
                string cmapTxt = GetStreamContent(bytes, rawPdf, cObj);
                if (!string.IsNullOrEmpty(cmapTxt)) {
                    cmaps[cObj] = ParseCMap(cmapTxt);
                }
            }
        }

        // 3. Find Font Name (e.g. /F1, /TT0, /C2_0) -> Font Object
        Dictionary<string, int> fontNameToFontObj = new Dictionary<string, int>();
        MatchCollection fontRefMatches = Regex.Matches(rawPdf, @"/([A-Za-z0-9_\-]+)\s+(\d+)\s+0\s+R");
        foreach (Match m in fontRefMatches) {
            string fn = m.Groups[1].Value;
            int fo = int.Parse(m.Groups[2].Value);
            if (fontObjToCMapObj.ContainsKey(fo)) {
                fontNameToFontObj[fn] = fo;
            }
        }

        // 4. Map Font Name directly to CMap
        Dictionary<string, Dictionary<string, string>> fontMaps = new Dictionary<string, Dictionary<string, string>>();
        foreach (var kv in fontNameToFontObj) {
            int fo = kv.Value;
            if (fontObjToCMapObj.ContainsKey(fo)) {
                int co = fontObjToCMapObj[fo];
                if (cmaps.ContainsKey(co)) {
                    fontMaps[kv.Key] = cmaps[co];
                }
            }
        }
        Dictionary<string, string> defaultMap = null;
        foreach (var m in cmaps.Values) { defaultMap = m; break; }

        // 5. Find all page content streams
        MatchCollection pageMatches = Regex.Matches(rawPdf, @"/Contents\s*\[?\s*(\d+)\s+0\s+R");
        HashSet<int> seenContents = new HashSet<int>();
        int slideNum = 0;

        foreach (Match pm in pageMatches) {
            int cNum = int.Parse(pm.Groups[1].Value);
            if (seenContents.Contains(cNum)) continue;
            seenContents.Add(cNum);

            string content = GetStreamContent(bytes, rawPdf, cNum);
            if (string.IsNullOrEmpty(content)) continue;

            StringBuilder sb = new StringBuilder();
            MatchCollection btBlocks = Regex.Matches(content, @"BT\b([\s\S]*?)ET");
            string currFont = "F1";

            foreach (Match bt in btBlocks) {
                string inner = bt.Groups[1].Value;
                string[] instructions = inner.Split(new[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);

                foreach (string inst in instructions) {
                    string trimmed = inst.Trim();
                    Match fm = Regex.Match(trimmed, @"/([A-Za-z0-9_\-]+)\s+[\d\.]+\s+Tf");
                    if (fm.Success) {
                        currFont = fm.Groups[1].Value;
                    }

                    if (trimmed.EndsWith("TJ") || trimmed.EndsWith("Tj")) {
                        Dictionary<string, string> map = fontMaps.ContainsKey(currFont) ? fontMaps[currFont] : defaultMap;
                        
                        // Check if map uses 4-digit hex keys (CID / 2-byte) or 2-digit hex keys
                        bool is4Digit = false;
                        if (map != null) {
                            foreach (string k in map.Keys) {
                                if (k.Length >= 4) { is4Digit = true; break; }
                                if (k.Length == 2) break;
                            }
                        }

                        MatchCollection hexParts = Regex.Matches(trimmed, @"<([0-9A-Fa-f]+)>");
                        foreach (Match hp in hexParts) {
                            string hex = hp.Groups[1].Value;
                            int step = is4Digit ? 4 : 2;
                            for (int i = 0; i < hex.Length; i += step) {
                                int chunkLen = Math.Min(step, hex.Length - i);
                                string c = hex.Substring(i, chunkLen).ToUpper();
                                if (map != null && map.ContainsKey(c)) {
                                    sb.Append(map[c]);
                                } else if (chunkLen == 2 && map != null && map.ContainsKey("00" + c)) {
                                    sb.Append(map["00" + c]);
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

            string cleanText = sb.ToString().Trim();
            if (!string.IsNullOrWhiteSpace(cleanText)) {
                slideNum++;
                slides.Add(new Slide { Number = slideNum, Text = cleanText });
            }
        }

        return slides;
    }
}
