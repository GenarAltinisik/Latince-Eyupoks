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
        public string notes;
        public string direction;
        public string author;
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
        public string sourceFile;
        public int slideCount;
        public List<string> topics = new List<string>();
        public List<FasiculeSection> sections = new List<FasiculeSection>();
        public List<SentenceItem> sentences = new List<SentenceItem>();
        public List<string> vocabKeys = new List<string>();
        public string studyTips;
    }

    public class SentenceData {
        public string Latin;
        public string Turkish;
        public string Notes;
        public int Slide;
        public string Direction;
        public string Author;
    }

    public class ReadingData {
        public string Title;
        public string Latin;
        public string Turkish;
        public string Notes;
        public int Slide;
    }

    public static bool IsTurkish(string s) {
        if (string.IsNullOrEmpty(s)) return false;
        if (Regex.IsMatch(s, @"[çÇğĞıİöÖşŞüÜâîûÂÎÛ]")) return true;
        string lower = " " + s.ToLower().Replace(",", " ").Replace(".", " ").Replace(";", " ").Replace(":", " ").Replace("?", " ").Replace("!", " ") + " ";
        if (Regex.IsMatch(lower, @"\b(ve|bir|için|değil|ama|çok|ile|kadar|olarak|ancak|olan|zaman|zamanlar|adam|insan|dost|etmek|olmak|etme|eden|ederek|ediyoruz|ediyordu|seviyoruz|okuyordu|hareketle|kelimesi|soru|cevap|alıştırma|anlamına|gelir|demektir|hakkında|karşı|göre|üzere|yok|var|benim|senin|onun|bizim|sizin|onların|tarafından|nedeniyle|yüzünden|gibi|ya|da|hem|ne|daha|en|ise|bunu|şunu|onu|kendi|kendisi|kendini|kendisine|kendine|mutlu|talihli|tehlike|ikinci|harf|mektup|edebiyat|cesaret|erdem|onurlu|erdemli|katip|yazar|tiran|zorba|doyurmak|tatmin|memnun|vermek|veriyorum|vereceksin|bulabiliyorduk|sevemedi|zapetti|korur|gelmeyecek|verdi|kaybetti)\b")) return true;
        if (Regex.IsMatch(lower, @"(mak|mek|yor|yordu|yordun|yorduk|yordular|dılar|diler|tılar|tiler|muştur|miştir|muştur|müştür|dır|dir|dur|dür|tır|tir|tur|tür)\s*$")) return true;
        return false;
    }

    public static Dictionary<string, string> CanonicalTranslations = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase) {
        { "Non debes laudare me.", "Beni övmemelisin / Beni övmek zorunda değilsin." },
        { "Puellae pulchrae vitam poetae boni servant.", "Güzel kızlar iyi şairin hayatını kurtarırlar / korurlar." },
        { "Si patria tua valet, nihil nautas terret et magnam fortunam tuam laudare debes.", "Eğer vatanın esenlik içindeyse, hiçbir şey denizcileri korkutmaz ve sen kendi büyük talihini övmelisin." },
        { "Sine paucis amicis vita non valet.", "Birkaç dost olmadan hayatın bir kıymeti yoktur / hayat iyi değildir." },
        { "Filiis filiabusque meis rosas semper dant.", "Oğullarıma ve kızlarıma her zaman güller verirler." },
        { "Filii filiaeque virorum feminarumque magnorum non semper magni sunt.", "Büyük adamların ve büyük kadınların oğulları ve kızları her zaman büyük olmazlar." },
        { "Manebuntne semper bellum et exitium in patria tua?", "Vatanında savaş ve yıkım her zaman sürecek mi / kalacak mı?" },
        { "Tulliam, Marci Tulli filiam, videmus.", "Marcus Tullius'un kızı Tullia'yı görüyoruz." },
        { "Vitam meam pecunia tua conservas.", "Hayatımı kendi paranla koruyorsun / kurtarıyorsun." },
        { "Vitam meam pecunia tua sonservas.", "Hayatımı kendi paranla koruyorsun / kurtarıyorsun." },
        { "Viri magni paucos amicos saepe habent.", "Büyük adamların genellikle pek az dostu olur." },
        { "Porta antiqua non est magna, sed bella est.", "Eski kapı büyük değildir, ama güzeldir." },
        { "Puella et puer cras errabunt.", "Kız ve oğlan yarın yanılacaklar / başıboş dolaşacaklar." },
        { "Pella et puer cras errabunt.", "Kız ve oğlan yarın yanılacaklar / başıboş dolaşacaklar." },
        { "Quando homines satis virtutis habebunt?", "İnsanlar ne zaman yeteri kadar erdeme sahip olacaklar?" },
        { "Romani erant viri liberi. Marcus Tullius, vir honestus, in Italia habitabat.", "Romalılar özgür adamlardı. Dürüst bir adam olan Marcus Tullius İtalya'da yaşıyordu." },
        { "Bonos viros et feminas honestas semper laudabimus.", "İyi erkekleri ve onurlu kadınları her zaman öveceğiz." },
        { "Potestne laus ullius terrae esse perpetua? Labor unius numquam poterit has copias vincere.", "Herhangi bir diyarın övgüsü ebedi olabilir mi? Tek bir kişinin çalışması bu birlikleri asla alt edemeyecektir." },
        { "Valebitne pax in patria nostra post hanc victoriam? Dum illi ibi remanent, alii nihil agunt, alii discunt.", "Bu zaferden sonra vatanımızda barış hüküm sürecek mi? Onlar orada kalırken, kimileri hiçbir şey yapmıyor, kimileri ise öğreniyor." },
        { "Ubi illas nunc videre possum? Hic illam virginem in matrimonium ducet.", "Onları şimdi nerede görebilirim? (Terentius) Bu adam o genç kızla evlenecektir. (Terentius)" },
        { "Eum ad eam cum alio agricola heri mittebant. Propter amicitiam ego hoc facio. Quid tu facies, mi amice? Vosne easdem litteras ad eum mittere cras audebitis?", "Onu dün başka bir çiftçiyle birlikte kadına gönderiyorlardı. Dostluk yüzünden ben bunu yapıyorum. Sen ne yapacaksın ey dostum? Siz yarın ona aynı mektubu göndermeye cesaret edebilecek misiniz?" },
        { "Hic de senectute scribebat, ille de amore; et alius de libertate. Alter Graecus remedium huius morbi inveniet.", "Bu adam yaşlılık hakkında yazıyordu, şu adam aşk hakkında; bir başkası ise özgürlük hakkında. Diğer Yunanlı bu hastalığın devasını bulacaktır." },
        { "Carmina illius scriptoris sunt plena non solum veritatis sed etiam virtutis. Cupiditatem pecuniae gloriaeque fugite!", "Şu yazarın şiirleri sadece hakikatle değil, aynı zamanda erdemle de doludur. Para ve şöhret hırsından kaçınınız! (Cicero)" },
        { "Aude, igitur, esse semper idem. Illum timorem in hoc viro uno invenimus. Sine labore autem nulla pax in civitatem eorum veniet.", "Öyleyse daima kendin olmaya cesaret et. O korkuyu yalnız bu adamda bulduk. Emek olmadan ise onların devletine hiçbir barış gelmeyecektir." },
        { "Ex illis terris in hunc locum cum amicis vestris venite. Post paucas horas sororem illius invenire poteramus.", "O topraklardan bu yere arkadaşlarınızla birlikte geliniz. Birkaç saat sonra onun kız kardeşini bulabiliyorduk." },
        { "Tu autem filiam beatam eius nunc amas. Post laborem eius gratias magnas ei agemus. Tune veritatem in eo libro demonstras?", "Sen ise onun mutlu kızını şimdi seviyorsun. Onun çalışmasından sonra ona büyük teşekkürler edeceğiz. Sen o kitapta hakikati gösteriyor musun?" },
        { "Illae quinque feminae inter ea animalia mortem non timebant. Nemo eandem partem Asiae uno anno vincet. Duo ex filiis a porta per agros cum patre suo currebant.", "O beş kadın bu hayvanların arasında ölümden korkmuyordu. Hiç kimse Asya'nın aynı parçasını bir yılda fethedemez. Oğullardan ikisi kapıdan tarlaların arasından babalarıyla birlikte koşuyordu." },
        { "Non omnes eadem amant aut easdem cupiditates studiaque habent. Virtus tua me amicum tibi facit. Omnes idem sentiunt.", "Herkes aynı şeyleri sevmez ya da aynı arzulara ve uğraşlara sahip değildir. (Horatius) Senin erdemin beni sana dost kılar. (Horatius) Herkes aynı şeyi düşünüyor. (Cicero)" },
        { "Neuter medicus nomen Ciceronis audiverat. Femina ante illam horam litteras suas miserat. Totus populus Romanus libertatem amisit.", "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti." },
        { "Senes in gente nostra ab filiis numquam neglegebantur.", "Bizim kabilemizde / halkımızda yaşlılar oğulları tarafından asla ihmal edilmezlerdi." },
        { "Tecum novem ex aliis miseris ad Caesarem cras trahent. Tecum novem ex aliis miseris ad Caesarem cras trahentur.", "Yarın seninle birlikte diğer zavallılardan dokuzunu Caesar'a sürükleyecekler. Yarın seninle birlikte diğer zavallılardan dokuzu Caesar'a sürüklenecekler." },
        { "Id solum est carum mihi. Bene est mihi quod tibi bene est.", "Benim için değerli olan sadece budur. (Terentius) Sen iyi durumda olduğun için ben de iyiyim. (Plinius)" },
        { "Quid hi de te sentiunt? In principio Deus creavit caelum et terram; et Deus creavit hominem.", "Bunlar senin hakkında ne düşünüyorlar? (Cicero) Başlangıçta Tanrı göğü ve yeri yarattı; ve Tanrı insanı yarattı. (Genesis)" },
        { "Consules se nec tecum nec cum illis aliis iungebant. Hi Ciceronem ipsum secum iunxerunt, nam eum semper dilexerant.", "Konsüller ne seninle ne de şu diğerleriyle birleştiler. Bunlar bizzat Cicero'yu kendileriyle birleştirdiler, çünkü onu her zaman çok sevmişlerdi." },
        { "Animus se ipse alit.", "Zihin bizzat kendisini besler. (Seneca)" },
        { "Non omnes eadem amant aut easdem cupiditates studiaque habent. ( Horatius ) Virtus tua me amicum tibi facit. ( Horatius ) Omnes idem sentiunt. ( Cicero )", "Herkes aynı şeyleri sevmez ya da aynı arzulara ve uğraşlara sahip değildir. (Horatius) Senin erdemin beni sana dost kılar. (Horatius) Herkes aynı şeyi düşünüyor. (Cicero)" },
        { "Id solum est carum mihi. ( Terentius ) Bene est mihi quod tibi bene est. ( Plinius )", "Benim için değerli olan sadece budur. (Terentius) Sen iyi durumda olduğun için ben de iyiyim. (Plinius)" }
    };

    public static bool IsVocabLine(string s) {
        if (string.IsNullOrEmpty(s)) return false;
        if (Regex.IsMatch(s, @",\s*-?(?:ae|i|is|us|a|um|are|ere|ire|ari|eri|iri)\b")) return true;
        if (Regex.IsMatch(s, @"\b(?:adj|adv|prep|praep|conj|pron|v|n|m|f)\b\s*\.?", RegexOptions.IgnoreCase)) return true;
        if (Regex.IsMatch(s, @"\b[fmn]\.\s*,")) return true;
        if (s.Contains(":") && s.Length < 60) return true;
        if (s.Contains("? (") || s.Contains("?( ")) return true;
        return false;
    }

    public static bool IsValidLatinSentence(string s) {
        if (string.IsNullOrWhiteSpace(s)) return false;
        string clean = s.Trim();
        if (clean.StartsWith("☛") || clean.StartsWith("‰") || clean.StartsWith("•")) return false;
        if (clean.Contains("☛") || clean.Contains("abl.") || clean.Contains("acc.") || clean.Contains("mukayese") || clean.Contains("erdemi") || clean.Contains("emel")) return false;
        if (IsVocabLine(clean) || IsVocabSlide(clean)) return false;
        if (IsTurkish(clean)) return false;

        // Split into words
        string[] words = clean.Split(new[] { ' ', '.', ',', '!', '?' }, StringSplitOptions.RemoveEmptyEntries);
        if (words.Length < 2 && !clean.StartsWith("Salve", StringComparison.OrdinalIgnoreCase) && !clean.StartsWith("Vale", StringComparison.OrdinalIgnoreCase)) return false;

        // Ensure not an isolated Turkish word
        if (words.Length == 1 || (words.Length == 2 && words[1].StartsWith("("))) {
            if (IsTurkish(words[0])) return false;
        }

        return true;
    }

    public static bool IsVocabSlide(string text) {
        int hints = 0;
        if (text.Contains("adj.") || text.Contains("adj .")) hints++;
        if (text.Contains("adv.") || text.Contains("adv .")) hints++;
        if (text.Contains("praep.") || text.Contains("prep.")) hints++;
        if (text.Contains("conj.") || text.Contains("conj .")) hints++;
        if (Regex.IsMatch(text, @"-\s*ae\b|-\s*i\b|-\s*is\b|-\s*us\b")) hints++;
        if (Regex.IsMatch(text, @"\b[fmn]\.\s*,")) hints++;
        if (Regex.IsMatch(text, @"\bv\.\s*,\s*\d|\bv\.\s*\d")) hints++;
        return hints >= 2;
    }

    public static string CleanLatin(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        string clean = Regex.Replace(s, @"\s+", " ").Trim();
        clean = clean.Replace(" ,", ",").Replace(" .", ".").Replace(" ;", ";").Replace(" !", "!").Replace(" ?", "?");
        return clean;
    }

    public static string CleanTurkish(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        string clean = Regex.Replace(s, @"\s+", " ").Trim();
        clean = clean.Replace(" ,", ",").Replace(" .", ".").Replace(" ;", ";").Replace(" !", "!").Replace(" ?", "?");
        return clean;
    }

    // Wrap words in <span class="lat-word" data-word="...">...</span>
    public static string WrapInteractiveLatin(string text) {
        if (string.IsNullOrEmpty(text)) return "";
        return Regex.Replace(text, @"([\p{L}\u0100-\u017F]+)", "<span class=\"lat-word\" data-word=\"$1\" role=\"button\" tabindex=\"0\">$1</span>");
    }

    public static void ParseFileSlides(
        string fileName, 
        List<Tuple<int, string>> slides, 
        out List<SentenceData> sentences, 
        out List<ReadingData> readings
    ) {
        List<SentenceData> sList = new List<SentenceData>();
        List<ReadingData> rList = new List<ReadingData>();

        for (int i = 0; i < slides.Count; i++) {
            int sNum = slides[i].Item1;
            string text = slides[i].Item2;

            // 1. Reading Passages
            if (text.Contains("OKUMA PARÇASI") || text.Contains("Okuma Parçası") || text.Contains("Civitas bellum sine causa")) {
                string textWithoutHeader = Regex.Replace(text, @"OKUMA PARÇASI|Okuma Parçası|ALIŞTIRMA", "").Trim();
                
                // Case A: Next slide is vocab and slide after is Turkish translation
                if (i + 2 < slides.Count && 
                    (slides[i + 1].Item2.Contains("OKUMA PARÇASI") || slides[i + 1].Item2.Contains("Okuma Parçası")) &&
                    IsVocabSlide(slides[i + 1].Item2) &&
                    (slides[i + 2].Item2.Contains("OKUMA PARÇASI") || slides[i + 2].Item2.Contains("Okuma Parçası") || !IsVocabSlide(slides[i + 2].Item2))) {
                    
                    string lat = CleanLatin(textWithoutHeader);
                    string notes = CleanTurkish(Regex.Replace(slides[i + 1].Item2, @"OKUMA PARÇASI|Okuma Parçası", "").Trim());
                    string tr = CleanTurkish(Regex.Replace(slides[i + 2].Item2, @"OKUMA PARÇASI|Okuma Parçası", "").Trim());
                    
                    rList.Add(new ReadingData {
                        Title = GetReadingTitle(fileName, sNum),
                        Latin = lat,
                        Notes = notes,
                        Turkish = tr,
                        Slide = sNum
                    });
                    i += 2;
                    continue;
                }

                // Case B: Slide i is Latin, Slide i+1 is Turkish (or notes)
                if (i + 1 < slides.Count && (slides[i + 1].Item2.Contains("OKUMA PARÇASI") || slides[i + 1].Item2.Contains("Okuma Parçası"))) {
                    string nextClean = CleanTurkish(Regex.Replace(slides[i + 1].Item2, @"OKUMA PARÇASI|Okuma Parçası", "").Trim());
                    if (IsVocabSlide(slides[i + 1].Item2)) {
                        rList.Add(new ReadingData {
                            Title = GetReadingTitle(fileName, sNum),
                            Latin = CleanLatin(textWithoutHeader),
                            Notes = nextClean,
                            Turkish = "",
                            Slide = sNum
                        });
                    } else {
                        rList.Add(new ReadingData {
                            Title = GetReadingTitle(fileName, sNum),
                            Latin = CleanLatin(textWithoutHeader),
                            Notes = "",
                            Turkish = nextClean,
                            Slide = sNum
                        });
                    }
                    i++;
                    continue;
                }

                // Case C: Single slide with both Latin & Turkish or standalone
                string[] parts = text.Split(new[] { "OKUMA PARÇASI", "Okuma Parçası" }, StringSplitOptions.RemoveEmptyEntries);
                if (parts.Length > 0 && !string.IsNullOrWhiteSpace(parts[0])) {
                    rList.Add(new ReadingData {
                        Title = GetReadingTitle(fileName, sNum),
                        Latin = CleanLatin(parts[0]),
                        Notes = "",
                        Turkish = parts.Length > 1 ? CleanTurkish(parts[1]) : "",
                        Slide = sNum
                    });
                }
                continue;
            }

            // 2. Sentence and Exercise Slides
            if (!text.Contains("ÖRNEK CÜMLELER") && !text.Contains("Basit Cümleler") && 
                !text.Contains("TÜRKÇEDEN LATİNCEYE") && !text.Contains("⤗")) {
                continue;
            }


            // In-Slide Sentence Parsing with Smart Turkish vs Latin Detection
            string cleanBody = Regex.Replace(text, @"ÖRNEK CÜMLELER\s*\d*|Örnek Cümleler\s*\d*|Basit Cümleler\s*\d*|TÜRKÇEDEN LATİNCEYE ÖRNEK CÜMLE ÇEVİRİLERİ|TÜRKÇEDEN LATİNCEYE|Türkçeden Latinceye|ALIŞTIRMA\s*\d*", "").Trim();
            string[] linesRaw = cleanBody.Split(new[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries);

            List<string> filteredLines = new List<string>();
            foreach (var rl in linesRaw) {
                string t = rl.Trim();
                if (t != "•" && !string.IsNullOrEmpty(t)) {
                    if (t.StartsWith("⤗") || t.StartsWith("↳")) {
                        string after = t.TrimStart('⤗', '↳', ' ').Trim();
                        if (!string.IsNullOrEmpty(after)) filteredLines.Add(after);
                    } else {
                        filteredLines.Add(t);
                    }
                }
            }

            bool isTrToLatSlide = text.Contains("TÜRKÇEDEN LATİNCEYE") || text.Contains("Türkçeden Latinceye");

            // Handle Turkish to Latin translation slides specifically
            if (isTrToLatSlide) {
                for (int k = 0; k < filteredLines.Count; k++) {
                    string l = filteredLines[k];
                    if (IsVocabLine(l)) continue;
                    
                    if (IsTurkish(l) && k + 1 < filteredLines.Count) {
                        string nextL = filteredLines[k + 1];
                        if (!IsTurkish(nextL) && IsValidLatinSentence(nextL)) {
                            sList.Add(new SentenceData {
                                Latin = CleanLatin(nextL),
                                Turkish = CleanTurkish(l),
                                Direction = "tr_to_lat",
                                Notes = "Türkçeden Latinceye Çeviri Alıştırması",
                                Slide = sNum
                            });
                            k++; // Skip target
                            continue;
                        }
                    }
                }
                continue;
            }

            // Regular Latin to Turkish Sentence Parsing
            string currentLat = "";
            string currentTr = "";
            List<string> currNotes = new List<string>();

            Action pushPair = () => {
                if (!string.IsNullOrEmpty(currentLat)) {
                    string cLat = CleanLatin(currentLat);
                    string cTr = CleanTurkish(currentTr);
                    
                    // Extract author badge if present
                    string authorFound = "";
                    Match mAuth = Regex.Match(cLat, @"\((?:[^\)]*(?:Cicero|Horatius|Terentius|Plinius|Catullus|Vergilius|Genesis|Seneca|Ovidius|Livius|Caesar)[^\)]*)\)", RegexOptions.IgnoreCase);
                    if (mAuth.Success) {
                        authorFound = mAuth.Value.Trim('(', ')', ' ');
                        cLat = CleanLatin(cLat.Replace(mAuth.Value, ""));
                    }

                    if (IsValidLatinSentence(cLat)) {
                        // Check canonical translations if cTr is missing or too short
                        if (string.IsNullOrEmpty(cTr) || cTr.Length <= 10) {
                            string normLat = NormalizeKey(cLat);
                            foreach (var kvp in CanonicalTranslations) {
                                if (normLat.Contains(NormalizeKey(kvp.Key)) || NormalizeKey(kvp.Key).Contains(normLat)) {
                                    cTr = kvp.Value;
                                    break;
                                }
                            }
                        }

                        // Check if multi-sentence block (introductory slide 1)
                        if (cLat.Contains("Nihil me terret") && cLat.Contains("Apollo me saepe servat")) {
                            string[] introLats = new[] {
                                "Nihil me terret.", "Apollo me saepe servat.", "Saepe nihil cogitas.",
                                "Festina lente.", "Mone me, si erro.", "Labor me vocat.",
                                "Nihil videmus.", "Salve, discipula!", "Salvete, discipulae!"
                            };
                            string[] introTrs = new[] {
                                "Hiçbir şey beni korkutmuyor.", "Apollo beni sık sık korur.", "Sık sık hiçbir şey düşünmüyorsun.",
                                "Yavaşça acele et.", "Hata yaparsam beni uyar.", "İş beni çağırıyor.",
                                "Hiçbir şey görmüyoruz.", "Selam sana, kız öğrenci!", "Selam size, kız öğrenciler!"
                            };
                            for (int idx = 0; idx < introLats.Length; idx++) {
                                sList.Add(new SentenceData {
                                    Latin = introLats[idx],
                                    Turkish = introTrs[idx],
                                    Direction = "lat_to_tr",
                                    Notes = "Giriş Alıştırması",
                                    Slide = sNum
                                });
                            }
                        } else {
                            sList.Add(new SentenceData {
                                Latin = cLat,
                                Turkish = cTr,
                                Direction = "lat_to_tr",
                                Author = authorFound,
                                Notes = string.Join("; ", currNotes),
                                Slide = sNum
                            });
                        }
                    }
                    currentLat = "";
                    currentTr = "";
                    currNotes.Clear();
                }
            };

            for (int k = 0; k < filteredLines.Count; k++) {
                string l = filteredLines[k];
                if (IsVocabLine(l)) {
                    currNotes.Add(l);
                    continue;
                }

                bool isTr = IsTurkish(l);
                if (!isTr) {
                    // Latin line
                    if (!string.IsNullOrEmpty(currentLat) && !string.IsNullOrEmpty(currentTr)) {
                        pushPair();
                        currentLat = l;
                    } else if (!string.IsNullOrEmpty(currentLat) && string.IsNullOrEmpty(currentTr)) {
                        currentLat += " " + l;
                    } else {
                        currentLat = l;
                    }
                } else {
                    // Turkish line
                    if (string.IsNullOrEmpty(currentTr)) {
                        currentTr = l;
                    } else {
                        currentTr += " " + l;
                    }
                }
            }
            pushPair();
        }

        sentences = sList;
        readings = rList;
    }

    public static string GetReadingTitle(string fileName, int slideNum) {
        if (fileName.Contains("10.1")) return "Okuma Parçası: Hakiki Dostluk Üzerine (De Amicitia)";
        if (fileName.Contains("12.2")) return "Okuma Parçası: Thermopylai ve Kral Leonidas (Thermopylae, İÖ 480)";
        if (fileName.Contains("13.2")) return "Okuma Parçası: Roma Halkının Cesareti ve Boş Vakit (De Populo Romano)";
        if (fileName.Contains("14.2")) return "Okuma Parçası: Catullus'un Cornelius'a İthafı (Catullus 1)";
        if (fileName.Contains("5.2")) return "Okuma Parçası: Maecenas ve Vergilius'un Daveti";
        if (fileName.Contains("6.1")) {
            if (slideNum <= 6) return "Okuma Parçası 1: Catullus'un Sevgilisine Vedası (Vale, Puella!)";
            return "Okuma Parçası 2: Çiftçi, Denizci ve Felsefe";
        }
        if (fileName.Contains("1.1.pdf") || fileName.Contains("1.2.pdf")) {
            if (slideNum <= 12) return "Okuma Parçası: Scintilla ve Horatia (Oxford Latin Course)";
            return "Okuma Parçası: Savaş, Barış ve Merhamet (Cicero, De Officiis)";
        }
        return "Okuma Parçası (Slayt " + slideNum + ")";
    }

    public static string NormalizeKey(string s) {
        if (string.IsNullOrEmpty(s)) return "";
        string lower = s.ToLower();
        return Regex.Replace(lower, @"[^\p{L}]", "");
    }

    static void Main(string[] args) {
        Console.OutputEncoding = Encoding.UTF8;
        Console.WriteLine("====================================================================");
        Console.WriteLine("Starting Authoritative Fasicule Compiler for Latince Eyupoks");
        Console.WriteLine("Doç. Dr. Eyüp Çoraklı 1. ve 2. Dönem Tam Dijital Müfredat Sistemi");
        Console.WriteLine("====================================================================");

        // 1. Clean & Fix eyup_vocabulary.js
        string vocabPath = "data/eyup_vocabulary.js";
        string vocabRaw = File.ReadAllText(vocabPath, Encoding.UTF8);
        string fixedVocab = FixMojibake(vocabRaw);
        File.WriteAllText(vocabPath, fixedVocab, new UTF8Encoding(false));
        Console.WriteLine("✓ Cleaned and saved UTF-8 data/eyup_vocabulary.js");

        // Parse vocabulary items with fast single-object regex (no backtracking hangs)
        Dictionary<string, VocabItem> vocabMap = new Dictionary<string, VocabItem>();
        MatchCollection objMatches = Regex.Matches(fixedVocab, @"\{([^{}]+)\}");
        foreach (Match om in objMatches) {
            string block = om.Groups[1].Value;
            Match mId = Regex.Match(block, @"""id"":\s*""([^""]+)""");
            Match mLemma = Regex.Match(block, @"""lemma"":\s*""([^""]+)""");
            Match mStem = Regex.Match(block, @"""stem"":\s*""([^""]*)""");
            Match mPos = Regex.Match(block, @"""pos"":\s*""([^""]*)""");
            Match mCat = Regex.Match(block, @"""category"":\s*""([^""]*)""");
            Match mTr = Regex.Match(block, @"""meaning_tr"":\s*""([^""]*)""");
            Match mTerm = Regex.Match(block, @"""term"":\s*(\d+)");
            Match mWeek = Regex.Match(block, @"""week"":\s*(\d+)");

            if (mId.Success && mLemma.Success) {
                VocabItem vi = new VocabItem {
                    id = mId.Groups[1].Value,
                    lemma = mLemma.Groups[1].Value,
                    stem = mStem.Success ? mStem.Groups[1].Value : "",
                    pos = mPos.Success ? mPos.Groups[1].Value : "",
                    category = mCat.Success ? mCat.Groups[1].Value : "",
                    meaning_tr = mTr.Success ? mTr.Groups[1].Value : "",
                    term = mTerm.Success ? int.Parse(mTerm.Groups[1].Value) : 1,
                    week = mWeek.Success ? int.Parse(mWeek.Groups[1].Value) : 1
                };
                vocabMap[vi.id.ToLower()] = vi;
                vocabMap[vi.lemma.ToLower()] = vi;
                vocabMap[NormalizeKey(vi.lemma)] = vi;
            }
        }
        Console.WriteLine("✓ Loaded " + vocabMap.Count + " vocabulary lookup keys from authoritative lexicon.");

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

        // 4. Convert to JSON
        StringBuilder jsonSb = new StringBuilder();
        jsonSb.AppendLine("// Latince Eyupoks - Doç. Dr. Eyüp Çoraklı Latince 1 & 2 Kapsamlı Ders Fasikülleri");
        jsonSb.AppendLine("// İstanbul Üniversitesi Edebiyat Fakültesi Klasik Filoloji");
        jsonSb.AppendLine("// Geliştirici: Genar Altınışık | %100 Temiz UTF-8 | Traşlama Yok");
        jsonSb.AppendLine("const EYUP_CURRICULUM = [");

        int totalSentencesInCurriculum = 0;
        int totalSectionsInCurriculum = 0;

        for (int i = 0; i < fasicules.Count; i++) {
            Fasicule f = fasicules[i];
            totalSentencesInCurriculum += f.sentences.Count;
            totalSectionsInCurriculum += f.sections.Count;
            jsonSb.Append(SerializeFasiculeToJson(f));
            if (i < fasicules.Count - 1) jsonSb.Append(",");
            jsonSb.AppendLine();
        }

        jsonSb.AppendLine("];");
        jsonSb.AppendLine();
        jsonSb.AppendLine("if (typeof module !== 'undefined') module.exports = { EYUP_CURRICULUM };");

        string outPath = "data/eyup_curriculum.js";
        File.WriteAllText(outPath, jsonSb.ToString(), new UTF8Encoding(false));
        Console.WriteLine("====================================================================");
        Console.WriteLine("SUCCESS! Generated " + fasicules.Count + " comprehensive fasicules into " + outPath);
        Console.WriteLine("Total Curriculum Sentences: " + totalSentencesInCurriculum);
        Console.WriteLine("Total Curriculum Sections: " + totalSectionsInCurriculum);
        Console.WriteLine("====================================================================");
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
            string notesVal = !string.IsNullOrEmpty(st.notes) ? st.notes : st.analysis;
            sb.Append("      {\n");
            sb.Append("        \"latin\": \"" + EscapeJson(st.latin) + "\",\n");
            sb.Append("        \"tr\": \"" + EscapeJson(st.tr) + "\",\n");
            sb.Append("        \"analysis\": \"" + EscapeJson(st.analysis) + "\",\n");
            sb.Append("        \"notes\": \"" + EscapeJson(notesVal) + "\"");
            if (!string.IsNullOrEmpty(st.direction)) {
                sb.Append(",\n        \"direction\": \"" + EscapeJson(st.direction) + "\"");
            }
            if (!string.IsNullOrEmpty(st.author)) {
                sb.Append(",\n        \"author\": \"" + EscapeJson(st.author) + "\"");
            }
            sb.Append("\n      }" + (k < f.sentences.Count - 1 ? "," : "") + "\n");
        }
        sb.Append("    ],\n");

        sb.Append("    \"studyTips\": \"" + EscapeJson(f.studyTips) + "\"\n");
        sb.Append("  }");
        return sb.ToString();
    }

    public static List<Fasicule> GenerateCuratedFasicules(Dictionary<string, VocabItem> vocabMap, string corpusRaw) {
        // Load document blocks from corpusRaw
        MatchCollection docs = Regex.Matches(corpusRaw, @"\{\s*""file"":\s*""([^""]+)""[\s\S]*?""slideCount"":\s*(\d+)[\s\S]*?""slides"":\s*\[([\s\S]*?)\]\s*\}");
        Dictionary<string, string> docSlidesMap = new Dictionary<string, string>();
        Dictionary<string, int> docSlideCountMap = new Dictionary<string, int>();
        Dictionary<string, List<Tuple<int, string>>> parsedDocSlides = new Dictionary<string, List<Tuple<int, string>>>();

        foreach (Match doc in docs) {
            string fn = doc.Groups[1].Value;
            docSlidesMap[fn] = doc.Groups[3].Value;
            docSlideCountMap[fn] = int.Parse(doc.Groups[2].Value);

            List<Tuple<int, string>> slides = new List<Tuple<int, string>>();
            MatchCollection sm = Regex.Matches(docSlidesMap[fn], @"\{\s*""number"":\s*(\d+),\s*""text"":\s*""([^""]+)""");
            foreach (Match m in sm) {
                int sNum = int.Parse(m.Groups[1].Value);
                string text = m.Groups[2].Value.Replace("\\n", "\n").Replace("\\\"", "\"").Replace("\\\\", "\\").Replace("\\t", "\t");
                slides.Add(Tuple.Create(sNum, text));
            }
            parsedDocSlides[fn] = slides;
        }

        // Helper to get slide texts
        Func<string, List<string>> getSlideTexts = (fn) => {
            List<string> res = new List<string>();
            if (parsedDocSlides.ContainsKey(fn)) {
                foreach (var tuple in parsedDocSlides[fn]) {
                    res.Add(tuple.Item2);
                }
            }
            return res;
        };

        // 1. Build foundational catalog containing all 46 fasicules
        List<Fasicule> list = FasiculeCatalog.BuildAllFasicules(getSlideTexts, docSlideCountMap, vocabMap);
        Console.WriteLine("✓ Built " + list.Count + " base fasicules from catalog.");

        // 2. Enrich each fasicule with extracted slide sentences & readings
        int injectedSentences = 0;
        int injectedReadings = 0;

        foreach (Fasicule f in list) {
            if (!parsedDocSlides.ContainsKey(f.sourceFile)) continue;

            List<Tuple<int, string>> slides = parsedDocSlides[f.sourceFile];
            List<SentenceData> extractedSentences;
            List<ReadingData> extractedReadings;
            ParseFileSlides(f.sourceFile, slides, out extractedSentences, out extractedReadings);

            // A. Inject sentences (merging with existing sentences, avoid duplicates)
            Dictionary<string, SentenceItem> existingMap = new Dictionary<string, SentenceItem>(StringComparer.OrdinalIgnoreCase);
            foreach (var st in f.sentences) {
                string norm = NormalizeKey(st.latin);
                if (!string.IsNullOrEmpty(norm)) existingMap[norm] = st;
            }

            foreach (var es in extractedSentences) {
                string norm = NormalizeKey(es.Latin);
                if (string.IsNullOrEmpty(norm)) continue;

                if (!existingMap.ContainsKey(norm)) {
                    var newItem = new SentenceItem {
                        latin = es.Latin,
                        tr = es.Turkish,
                        analysis = es.Notes,
                        notes = es.Notes,
                        direction = es.Direction,
                        author = es.Author
                    };
                    f.sentences.Add(newItem);
                    existingMap[norm] = newItem;
                    injectedSentences++;
                } else {
                    // Update translation if existing was empty
                    var existing = existingMap[norm];
                    if (string.IsNullOrEmpty(existing.tr) && !string.IsNullOrEmpty(es.Turkish)) {
                        existing.tr = es.Turkish;
                    }
                    if (string.IsNullOrEmpty(existing.analysis) && !string.IsNullOrEmpty(es.Notes)) {
                        existing.analysis = es.Notes;
                        existing.notes = es.Notes;
                    }
                    if (string.IsNullOrEmpty(existing.direction) && !string.IsNullOrEmpty(es.Direction)) {
                        existing.direction = es.Direction;
                    }
                    if (string.IsNullOrEmpty(existing.author) && !string.IsNullOrEmpty(es.Author)) {
                        existing.author = es.Author;
                    }
                }
            }

            // B. Inject reading passages as dedicated interactive sections
            foreach (var rd in extractedReadings) {
                if (string.IsNullOrWhiteSpace(rd.Latin)) continue;

                if (string.IsNullOrWhiteSpace(rd.Turkish)) {
                    if (rd.Latin.Contains("Scintilla in casa")) {
                        rd.Turkish = "Scintilla evde çalışıyor, bitkin durumdadır. Horatia eve girer; açtır. Ama yemek hazır değildir. Scintilla hızla seğirtir ve kısa süre içinde yemek hazır olur. “İşte bak!” der, “Yemek hazır.” Kız mutludur, masaya yaklaşır ve iştahla yemeği yer. Ertesi gün Scintilla yürüyerek dükkanlara gider. Horatia evde çalışır. Çok geçmeden Scintilla geri döner ve eve girer. Yemek hazırdır. Scintilla mutlu olur.";
                    } else if (rd.Latin.Contains("Civitas bellum")) {
                        rd.Turkish = "Bir devlet iyi bir gerekçe olmadan ya da öfke yüzünden savaş yürütmemelidir. Eğer halkımızın servetini, tarlalarını ve hayatlarını savaş olmadan savunabilirsek, o zaman barışı korumalıyız; ancak eğer savaş olmadan güvende olamazsak ve vatanımızı ve özgürlüğümüzü koruyamazsak, savaş zorunlu olacaktır. Yine de savaşta büyük bir vazife bilinci ve zaferden sonra büyük bir merhamet göstermeliyiz.";
                    }
                }

                string sample = rd.Latin.Length > 25 ? rd.Latin.Substring(0, 25) : rd.Latin;
                bool alreadyHasReading = false;
                foreach (var sec in f.sections) {
                    if (sec.html.Contains(sample) || sec.title.Contains(rd.Title)) {
                        alreadyHasReading = true;
                        break;
                    }
                }

                if (!alreadyHasReading) {
                    string wrappedLatin = WrapInteractiveLatin(rd.Latin);
                    StringBuilder rdHtml = new StringBuilder();
                    rdHtml.AppendLine("<div class=\"reading-passage-block\">");
                    rdHtml.AppendLine("  <div class=\"reading-passage-header\">");
                    rdHtml.AppendLine("    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>");
                    rdHtml.AppendLine("    <h4 class=\"reading-title\">" + rd.Title + "</h4>");
                    rdHtml.AppendLine("  </div>");
                    rdHtml.AppendLine("  <div class=\"reading-passage-latin\">");
                    rdHtml.AppendLine("    " + wrappedLatin);
                    rdHtml.AppendLine("  </div>");
                    if (!string.IsNullOrWhiteSpace(rd.Turkish)) {
                        rdHtml.AppendLine("  <div class=\"reading-passage-tr\">");
                        rdHtml.AppendLine("    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>");
                        rdHtml.AppendLine("    <p class=\"tr-text\">" + rd.Turkish + "</p>");
                        rdHtml.AppendLine("  </div>");
                    }
                    if (!string.IsNullOrWhiteSpace(rd.Notes)) {
                        rdHtml.AppendLine("  <div class=\"reading-passage-notes\">");
                        rdHtml.AppendLine("    <div class=\"notes-label\">🔍 Metin İçi Sözlük & Gramer Notları:</div>");
                        rdHtml.AppendLine("    <p class=\"notes-text\">" + rd.Notes + "</p>");
                        rdHtml.AppendLine("  </div>");
                    }
                    rdHtml.AppendLine("</div>");

                    f.sections.Add(new FasiculeSection {
                        title = rd.Title,
                        html = rdHtml.ToString(),
                        calloutType = "info",
                        calloutTitle = "Metin Çözümleme Yöntemi",
                        calloutText = "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz."
                    });
                    injectedReadings++;
                }
            }

            // C. Vocabulary cross-referencing: scan sentences and readings to ensure all words are indexed
            HashSet<string> currentVocab = new HashSet<string>(f.vocabKeys, StringComparer.OrdinalIgnoreCase);
            StringBuilder allLatinText = new StringBuilder();
            foreach (var st in f.sentences) allLatinText.Append(" ").Append(st.latin);
            foreach (var rd in extractedReadings) allLatinText.Append(" ").Append(rd.Latin);

            MatchCollection wordTokens = Regex.Matches(allLatinText.ToString(), @"[\p{L}]+");
            foreach (Match wt in wordTokens) {
                string wClean = NormalizeKey(wt.Value);
                if (vocabMap.ContainsKey(wClean)) {
                    string vId = vocabMap[wClean].id;
                    if (!currentVocab.Contains(vId)) {
                        currentVocab.Add(vId);
                        f.vocabKeys.Add(vId);
                    }
                }
            }
        }

        Console.WriteLine("✓ Injected " + injectedSentences + " additional sentences from slides.");
        Console.WriteLine("✓ Injected " + injectedReadings + " interactive reading passages.");

        return list;
    }
}
