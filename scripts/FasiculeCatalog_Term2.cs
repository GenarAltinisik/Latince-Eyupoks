using System;
using System.Collections.Generic;

public static partial class FasiculeCatalog {

    public static void BuildTerm2Fasicules(
        List<BuildAuthoritativeFasicules.Fasicule> list,
        Func<string, List<string>> getSlideTexts,
        Dictionary<string, int> docSlideCountMap,
        Dictionary<string, BuildAuthoritativeFasicules.VocabItem> vocabMap
    ) {
        // ====================================================================
        // T2_W1_L1: Latince Gramer 2 - Ders Sunumu 1.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 1, 1, "Latince Gramer 2 - Ders Sunumu 1.1.pdf",
                "3. ÇEKİM İSİMLER TEKRAR VE KLASİK EDEBİ SENTAKS",
                "Homo sum, Terentius, Horatius ve Ecclesiastes Metinleri Eşliğinde Sentaks Çözümlemeleri",
                "Bu fasikülde 2. dönemin başlangıcında 3. grup isimlerin cümle içindeki sentaks kullanımlarını pekiştirecek, Terentius, Horatius ve Ecclesiastes'ten seçilmiş edebi cümleleri inceleyeceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Çekim İsimler Tekrar", "Terentius: Homo sum", "Horatius Şiirleri", "Ecclesiastes: Nihil sub sole novum", "Klasik Sentaks Çözümlemesi" });
            f.vocabKeys.AddRange(new[] { "homo", "sol", "novus", "carmen", "adulescentia", "virgo", "puer", "canto", "rex", "dux" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Çekim İsimlerin Sentakstaki Yeri ve Klasik Metinler",
                html = @"<p>3. çekim isimler, Roma edebiyatında ve felsefesinde insan doğasını, erdemi ve evreni anlatan en temel kelimeleri barındırır:</p>
<ul>
  <li><span class=""lat-word"">Homo sum: humānī nihil ā mē aliēnum putō.</span> (İnsanım: insana dair hiçbir şeyi kendime yabancı saymam. — Terentius)</li>
  <li><span class=""lat-word"">Nihil sub sōle novum.</span> (Güneşin altında yeni hiçbir şey yoktur. — Ecclesiastes)</li>
  <li><span class=""lat-word"">Carmina nova dē adulescentiā virginibus puerīsque nunc cantō.</span> (Genç kızlar ve oğlanlar için gençlik hakkında yeni şarkılar söylüyorum. — Horatius)</li>
</ul>",
                calloutType = "info",
                calloutTitle = "Edebi Alıntı Kuralı",
                calloutText = "Klasik yazarlardan alınan cümleler Latincede dilbilgisi kurallarının canlı edebiyattaki en kusursuz örnekleridir."
            });

            f.studyTips = "Homo sum cümlesindeki sum fiili yüklemdir; homo ise özne-yüklem (praedicativum) olarak yalın haldedir.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W1_L2: Latince Gramer 2 - Ders Sunumu 1.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 1, 2, "Latince Gramer 2 - Ders Sunumu 1.2.pdf",
                "3. ÇEKİM ALIŞTIRMALARI VE METİN OKUMA: SCINTILLA VE HORATIA",
                "Oxford Latin Course Metinleri, Günlük Yaşam Latinceleri ve İleri Düzey Cümleler",
                "Bu fasikülde Roma günlük yaşamını anlatan Oxford Latin Course metinleri eşliğinde Scintilla ve Horatia'nın hikayesini, edatlı kalıpları (in casa, ad tabernas) ve cümle tahlillerini öğreneceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Scintilla ve Horatia Metni", "Günlük Yaşam Latinceleri", "Yer ve Yön Bildiren Edatlar (in, ad)", "Zarf Kullanımları (mox, avide, postridie)", "Cümle Çözümlemeleri" });
            f.vocabKeys.AddRange(new[] { "casa", "laboro", "fessus", "intro", "ieiunus", "cena", "paratus", "ecce", "laetus", "avide", "festino", "postridie", "redeo", "taberna" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Roma'da Ev Yaşamı ve Latin Dili Yapısı",
                html = @"<p>Latince edebi metinlerin yanında günlük yaşam anlatımları, fiillerin hikaye zamanlarındaki ardışıklığını ve bağlaç kullanımını pekiştirmek için eşsizdir. Özellikle <em>Scintilla in casa laborat</em> metni, temel cümle yapısını ve sıfat uyumunu pekiştirir.</p>",
                calloutType = "rule",
                calloutTitle = "Zaman ve Durum Zarfları",
                calloutText = "mox (yakında, az sonra), postrīdiē (ertesi gün), avidē (iştahla, açgözlülükle) gibi zarflar cümlede fiilin durumunu ve zamanını niteleyerek çekim eki almadan kullanılırlar."
            });

            f.studyTips = "Metin okurken her fiilin öznesini metindeki isimlerle eşleştirerek okuyunuz.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W2_L1: Latince Gramer 2 - Ders Sunumu 2.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 2, 1, "Latince Gramer 2 - Ders Sunumu 2.1.pdf",
                "İŞARET ZAMİRLERİ VE SIFATLARI: HIC, ISTE, ILLE",
                "hic, haec, hoc (Bu); iste, ista, istud (Şu); ille, illa, illud (O) Tam Çekim Tabloları",
                "Bu fasikülde konuşana yakın olanı (hic), muhataba yakın olanı (iste) ve uzaktakini (ille) işaret eden üç temel işaret zamirinin/sıfatının üç cins ve iki sayıdaki tam çekim tablolarını göreceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "İşaret Zamirleri (Demonstrativa)", "hic, haec, hoc (Bu)", "iste, ista, istud (Şu)", "ille, illa, illud (O)", "Tekil Genetivus (-ius) ve Dativus (-i) Kuralı", "Zamir ve Sıfat Kullanımı" });
            f.vocabKeys.AddRange(new[] { "hic", "haec", "hoc", "iste", "ista", "istud", "ille", "illa", "illud", "virgo", "matrimonium", "duco", "scriptor", "plenus", "audeo", "timor" });

            // hic, haec, hoc
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Konuşana Yakın Olanı İşaret Eden: hic, haec, hoc (Bu / Bunlar)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 8 çekim tablosu:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "hic, haec, hoc (Bu)", "Slayt 8",
                    "hic", "haec", "hoc",
                    "—", "—", "—",
                    "huius", "huius", "huius",
                    "huic", "huic", "huic",
                    "hunc", "hanc", "hoc",
                    "hōc", "hāc", "hōc",
                    "bu", "bunun", "buna", "bunu", "bununla",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "hī, hae, haec (Bunlar)", "Slayt 8",
                    "hī", "hae", "haec",
                    "—", "—", "—",
                    "hōrum", "hārum", "hōrum",
                    "hīs", "hīs", "hīs",
                    "hōs", "hās", "haec",
                    "hīs", "hīs", "hīs",
                    "bunlar", "bunların", "bunlara", "bunları", "bunlarla",
                    "Pluralis"
                )
            });

            // iste, ista, istud
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Muhataba Yakın Olanı İşaret Eden: iste, ista, istud (Şu / Şunlar)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 10 çekim tablosu (bazen küçümseme anlamı da taşır):</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "iste, ista, istud (Şu)", "Slayt 10",
                    "iste", "ista", "istud",
                    "—", "—", "—",
                    "istīus", "istīus", "istīus",
                    "istī", "istī", "istī",
                    "istum", "istam", "istud",
                    "istō", "istā", "istō",
                    "şu", "şunun", "şuna", "şunu", "şununla",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "istī, istae, ista (Şunlar)", "Slayt 10",
                    "istī", "istae", "ista",
                    "—", "—", "—",
                    "istōrum", "istārum", "istōrum",
                    "istīs", "istīs", "istīs",
                    "istōs", "istās", "ista",
                    "istīs", "istīs", "istīs",
                    "şunlar", "şunların", "şunlara", "şunları", "şunlarla",
                    "Pluralis"
                )
            });

            // ille, illa, illud
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Uzakta Olanı İşaret Eden: ille, illa, illud (O / Onlar)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 12 çekim tablosu (bazen 'o ünlü, meşhur' anlamı taşır):</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "ille, illa, illud (O)", "Slayt 12",
                    "ille", "illa", "illud",
                    "—", "—", "—",
                    "illīus", "illīus", "illīus",
                    "illī", "illī", "illī",
                    "illum", "illam", "illud",
                    "illō", "illā", "illō",
                    "o", "onun", "ona", "onu", "onunla",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "illī, illae, illa (Onlar)", "Slayt 12",
                    "illī", "illae", "illa",
                    "—", "—", "—",
                    "illōrum", "illārum", "illōrum",
                    "illīs", "illīs", "illīs",
                    "illōs", "illās", "illa",
                    "illīs", "illīs", "illīs",
                    "onlar", "onların", "onlara", "onları", "onlarla",
                    "Pluralis"
                )
            });

            f.studyTips = "hic (bu), iste (senin yanındaki şu), ille (ötedeki o) mekânsal üçlü işaret sistemini kurar.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W2_L2: Latince Gramer 2 - Ders Sunumu 2.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 2, 2, "Latince Gramer 2 - Ders Sunumu 2.2.pdf",
                "UNUS NAUTA SIFATLARININ AYRINTILI ÇEKİM SİSTEMİ",
                "Zamir Sıfatları: Tekil ve Çoğul Çekimleri ve 9 Sıfatın Tam Tabloları",
                "Bu fasikülde 2. Dönemin başındaki UNUS NAUTA sıfatlarının (ūnus, nūllus, ūllus, sōlus, neuter, alius, uter, tōtus, alter) Tekil Genetivus (-īus) ve Dativus (-ī) kurallarını, tekil ve çoğul tüm tablolarını inceleyeceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "UNUS NAUTA Sıfatları", "Tekil ve Çoğul Çekimleri", "alius / alterius Ayrımı", "neuter ve uter Kullanımı", "Dokuz Sıfatın Tam Tablosu" });
            f.vocabKeys.AddRange(new[] { "unus", "nullus", "ullus", "solus", "neuter", "alius", "uter", "totus", "alter" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. UNUS NAUTA Sıfatlarının Ortak Çekim Formülü",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 5-7 özet kuralları:</p>
<ul>
  <li><strong>Tekil Genetivus:</strong> Her üç cinste de <strong>-īus</strong> (ūnīus, nūllīus, tōtīus).</li>
  <li><strong>Tekil Dativus:</strong> Her üç cinste de <strong>-ī</strong> (ūnī, nūllī, tōtī).</li>
  <li><strong>Cinssiz Tekil Nominativus / Accusativus:</strong> Genelde <em>-um</em>, sadece <em>alius</em> sıfatında <strong>aliud</strong>.</li>
  <li><strong>Çoğul Çekim:</strong> Tamamen 1. ve 2. sınıf sıfatlar gibidir (-ī, -ae, -a; -ōrum, -ārum, -ōrum).</li>
</ul>",
                tableHtml = TableTemplates.TriGenderTable(
                    "ūnus, ūna, ūnum (bir, tek)", "Slayt 8",
                    "ūnus", "ūna", "ūnum", "—", "—", "—",
                    "ūnīus", "ūnīus", "ūnīus", "ūnī", "ūnī", "ūnī",
                    "ūnum", "ūnam", "ūnum", "ūnō", "ūnā", "ūnō",
                    "bir", "birin", "bire", "biri", "birle", "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "tōtus, tōta, tōtum (bütün, tüm)", "Slayt 15",
                    "tōtus", "tōta", "tōtum", "—", "—", "—",
                    "tōtīus", "tōtīus", "tōtīus", "tōtī", "tōtī", "tōtī",
                    "tōtum", "tōtam", "tōtum", "tōtō", "tōtā", "tōtō",
                    "bütün", "bütünün", "bütüne", "bütünü", "bütünle", "Singularis"
                )
            });

            f.studyTips = "alius sıfatının Tekil Genetivus hali yerine alterius kullanıldığını unutmayınız.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W3_L1: Latince Gramer 2 - Ders Sunumu 3.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 3, 1, "Latince Gramer 2 - Ders Sunumu 3.1.pdf",
                "FİİLLERİN GEÇMİŞ ZAMANI (PERFECTUM INDICATIVUS ACTIVI)",
                "Perfectum Gövdesi Bulma, Şahıs Ekleri (-ī, -istī, -it...) ve Beş Çekim Grubunun Model Tabloları",
                "Bu fasikülde eylemin geçmişte tamamlandığını bildiren Perfectum zamanını (Di'li Geçmiş Zaman), 3. sözlük biçiminden Perfectum gövdesini bulmayı, evrensel Perfectum şahıs eklerini (-ī, -istī, -it, -imus, -istis, -ērunt) ve 5 çekim grubunun model tablolarını göreceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Perfectum Zamanı", "Perfectum Gövdesi Bulma", "Evrensel Perfectum Ekleri", "1. Grup: amāvī", "2. Grup: monuī", "3. Grup: lēgī", "4. Grup: audīvī", "5. Grup: cēpī", "Karşılaştırma Tablosu" });
            f.vocabKeys.AddRange(new[] { "amo", "moneo", "lego", "audio", "capio", "amavi", "monui", "legi", "audivi", "cepi", "invenio", "facio", "scribo", "mitto" });

            // Perfectum Kurali & 5 Gruplar
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Perfectum Zamanının Yapılışı ve Evrensel Şahıs Ekleri",
                html = @"<p><strong>Gövde Bulma (Slayt 14):</strong> Fiillerin sözlükteki 3. biçiminden sondaki <strong>-ī</strong> eki atılarak Perfectum gövdesi bulunur:<br>
• <span class=""lat-word"">amō, amāre, amāvī</span> &gt; gövde: <strong>amāv-</strong><br>
• <span class=""lat-word"">moneō, monēre, monuī</span> &gt; gövde: <strong>monu-</strong><br>
• <span class=""lat-word"">legō, legere, lēgī</span> &gt; gövde: <strong>lēg-</strong><br>
• <span class=""lat-word"">audiō, audīre, audīvī</span> &gt; gövde: <strong>audīv-</strong><br>
• <span class=""lat-word"">capiō, capere, cēpī</span> &gt; gövde: <strong>cēp-</strong></p>
<p><strong>Evrensel Perfectum Şahıs Ekleri:</strong><br>
Tekil: 1. Sg: <strong>-ī</strong> | 2. Sg: <strong>-istī</strong> | 3. Sg: <strong>-it</strong><br>
Çoğul: 1. Pl: <strong>-imus</strong> | 2. Pl: <strong>-istis</strong> | 3. Pl: <strong>-ērunt (veya -ēre)</strong></p>",
                calloutType = "rule",
                calloutTitle = "Evrensel Kural",
                calloutText = "İstisnasız BÜTÜN Latince fiiller (düzensiz esse ve posse dahil!) Perfectum zamanında bu şahıs eklerini alırlar."
            });

            // 5 Models
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Beş Çekim Grubunda Perfectum Indicativus Activi Tabloları",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 16-20 tabloları:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "amāvī (1. Grup Perfectum)", "amo", "amāre", "sevmek", "Perfectum Indicativus Activi",
                    "amāv-ī", "amāv-istī", "amāv-it", "amāv-imus", "amāv-istis", "amāv-ērunt",
                    "sevdim / sevmişim", "sevdin / sevmişsin", "sevdi / sevmiş",
                    "sevdik / sevmişiz", "sevdiniz / sevmişsiniz", "sevdiler / sevmişler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "monuī (2. Grup Perfectum)", "moneo", "monēre", "uyarmak", "Perfectum Indicativus Activi",
                    "monu-ī", "monu-istī", "monu-it", "monu-imus", "monu-istis", "monu-ērunt",
                    "uyardım / uyarmışım", "uyardın / uyarmışsın", "uyardı / uyarmış",
                    "uyardık / uyarmışız", "uyardınız / uyarmışsınız", "uyardılar / uyarmışlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "lēgī (3. Grup Perfectum)", "lego", "legere", "okumak", "Perfectum Indicativus Activi",
                    "lēg-ī", "lēg-istī", "lēg-it", "lēg-imus", "lēg-istis", "lēg-ērunt",
                    "okudum / okumuşum", "okudun / okumuşsun", "okudu / okumuş",
                    "okuduk / okumuşuz", "okudunuz / okumuşsunuz", "okudular / okumuşlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "audīvī (4. Grup Perfectum)", "audio", "audīre", "işitmek", "Perfectum Indicativus Activi",
                    "audīv-ī", "audīv-istī", "audīv-it", "audīv-imus", "audīv-istis", "audīv-ērunt",
                    "işittim / işitmişim", "işittin / işitmişsin", "işitti / işitmiş",
                    "işittik / işitmişiz", "işittiniz / işitmişsiniz", "işittiler / işitmişler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "cēpī (5. Grup Perfectum)", "capio", "capere", "almak", "Perfectum Indicativus Activi",
                    "cēp-ī", "cēp-istī", "cēp-it", "cēp-imus", "cēp-istis", "cēp-ērunt",
                    "aldım / almışım", "aldın / almışsın", "aldı / almış",
                    "aldık / almışız", "aldınız / almışsınız", "aldılar / almışlar"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Beş Çekim Grubunun Perfectum Karşılaştırması (Slayt 21)", "Slayt 21",
                    new[] { "Şahıs", "1. Gr. amāvī", "2. Gr. monuī", "3. Gr. lēgī", "4. Gr. audīvī", "5. Gr. cēpī" },
                    new[] {
                        new[] { "1. Sg.", "amāv-ī", "monu-ī", "lēg-ī", "audīv-ī", "cēp-ī" },
                        new[] { "2. Sg.", "amāv-istī", "monu-istī", "lēg-istī", "audīv-istī", "cēp-istī" },
                        new[] { "3. Sg.", "amāv-it", "monu-it", "lēg-it", "audīv-it", "cēp-it" },
                        new[] { "1. Pl.", "amāv-imus", "monu-imus", "lēg-imus", "audīv-imus", "cēp-imus" },
                        new[] { "2. Pl.", "amāv-istis", "monu-istis", "lēg-istis", "audīv-istis", "cēp-istis" },
                        new[] { "3. Pl.", "amāv-ērunt", "monu-ērunt", "lēg-ērunt", "audīv-ērunt", "cēp-ērunt" }
                    }
                )
            });

            f.studyTips = "Perfectum ekleri (-ī, -istī, -it, -imus, -istis, -ērunt) bütün Latince fiiller için tektir; gövdeyi bulup bu ekleri eklemeniz yeterlidir.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W3_L2: Latince Gramer 2 - Ders Sunumu 3.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 3, 2, "Latince Gramer 2 - Ders Sunumu 3.2.pdf",
                "BİTMİŞ ZAMANLAR: PLUSQUAMPERFECTUM VE FUTURUM EXACTUM",
                "Geçmişin Hikâyesi (-eram) ve Gelecekte Bitmiş Zaman (-ero); Düzensiz sum ve possum Çekimleri",
                "Bu fasikülde Perfectum gövdesi üzerine kurulan Plusquamperfectum (-eram, -eras...) ve Futurum Exactum (-ero, -eris...) zamanlarını, 5 çekim grubundaki çekimlerini, düzensiz sum (fueram, fuero) ve possum (potueram, potuero) paradigmalarını göreceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Plusquamperfectum Activi (-eram)", "Futurum Exactum Activi (-ero)", "Beş Grubun Plusquamperfectum Çekimi", "Beş Grubun Futurum Exactum Çekimi", "sum Fiili (fueram, fuero)", "possum Fiili (potueram, potuero)" });
            f.vocabKeys.AddRange(new[] { "amāveram", "monueram", "lēgeram", "audīveram", "cēperam", "amāverō", "monuerō", "lēgerō", "audīverō", "cēperō", "fueram", "fuero", "potueram", "potuero" });

            // Plusquamperfectum
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Plusquamperfectum Indicativus Activi (-mişti / -diydi)",
                html = @"<p><strong>Kural (Slayt 3-10):</strong> Perfectum Gövdesi + <strong>-eram, -erās, -erat, -erāmus, -erātis, -erant</strong> (yani <em>esse</em> fiilinin Imperfectum çekimi):</p>",
                tableHtml = TableTemplates.VerbTable(
                    "amāveram (1. Grup Plusquamperfectum)", "amo", "amāre", "sevmek", "Plusquamperfectum Indicativus Activi",
                    "amāv-eram", "amāv-erās", "amāv-erat", "amāv-erāmus", "amāv-erātis", "amāv-erant",
                    "sevmiştim / sevdiydim", "sevmiştin / sevdiydin", "sevmişti / sevdiydi",
                    "sevmiştik / sevdiydik", "sevmiştiniz / sevdiydiniz", "sevmişlerdi / sevdiydiler"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Beş Çekim Grubunun Plusquamperfectum Karşılaştırması (Slayt 10)", "Slayt 10",
                    new[] { "Şahıs", "1. Gr. amāveram", "2. Gr. monueram", "3. Gr. lēgeram", "4. Gr. audīveram", "5. Gr. cēperam" },
                    new[] {
                        new[] { "1. Sg.", "amāv-eram", "monu-eram", "lēg-eram", "audīv-eram", "cēp-eram" },
                        new[] { "2. Sg.", "amāv-erās", "monu-erās", "lēg-erās", "audīv-erās", "cēp-erās" },
                        new[] { "3. Sg.", "amāv-erat", "monu-erat", "lēg-erat", "audīv-erat", "cēp-erat" },
                        new[] { "1. Pl.", "amāv-erāmus", "monu-erāmus", "lēg-erāmus", "audīv-erāmus", "cēp-erāmus" },
                        new[] { "2. Pl.", "amāv-erātis", "monu-erātis", "lēg-erātis", "audīv-erātis", "cēp-erātis" },
                        new[] { "3. Pl.", "amāv-erant", "monu-erant", "lēg-erant", "audīv-erant", "cēp-erant" }
                    }
                )
            });

            // Futurum Exactum
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Futurum Exactum Indicativus Activi (-miş olacağım)",
                html = @"<p><strong>Kural (Slayt 16-23):</strong> Perfectum Gövdesi + <strong>-erō, -eris, -erit, -erimus, -eritis, -erint</strong> (3. çoğul şahısta <em>-erint</em> olduğuna dikkat ediniz):</p>",
                tableHtml = TableTemplates.VerbTable(
                    "amāverō (1. Grup Futurum Exactum)", "amo", "amāre", "sevmek", "Futurum Exactum Activi",
                    "amāv-erō", "amāv-eris", "amāv-erit", "amāv-erimus", "amāv-eritis", "amāv-erint",
                    "sevmiş olacağım", "sevmiş olacaksın", "sevmiş olacak",
                    "sevmiş olacağız", "sevmiş olacaksınız", "sevmiş olacaklar"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Beş Çekim Grubunun Futurum Exactum Karşılaştırması (Slayt 22)", "Slayt 22",
                    new[] { "Şahıs", "1. Gr. amāverō", "2. Gr. monuerō", "3. Gr. lēgerō", "4. Gr. audīverō", "5. Gr. cēperō" },
                    new[] {
                        new[] { "1. Sg.", "amāv-erō", "monu-erō", "lēg-erō", "audīv-erō", "cēp-erō" },
                        new[] { "2. Sg.", "amāv-eris", "monu-eris", "lēg-eris", "audīv-eris", "cēp-eris" },
                        new[] { "3. Sg.", "amāv-erit", "monu-erit", "lēg-erit", "audīv-erit", "cēp-erit" },
                        new[] { "1. Pl.", "amāv-erimus", "monu-erimus", "lēg-erimus", "audīv-erimus", "cēp-erimus" },
                        new[] { "2. Pl.", "amāv-eritis", "monu-eritis", "lēg-eritis", "audīv-eritis", "cēp-eritis" },
                        new[] { "3. Pl.", "amāv-erint", "monu-erint", "lēg-erint", "audīv-erint", "cēp-erint" }
                    }
                )
            });

            // Düzensiz Fiillerin Bitmiş Zamanları: sum & possum
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Düzensiz Fiiller: sum ve possum Bitmiş Zaman Çekimleri",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 29-34 tabloları:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "fueram (sum - Plusquamperfectum)", "sum", "esse", "olmak", "Plusquamperfectum Activi",
                    "fu-eram", "fu-erās", "fu-erat", "fu-erāmus", "fu-erātis", "fu-erant",
                    "olmuştum / idiydim", "olmuştun / idiydin", "olmuştu / idiydi",
                    "olmuştuk / idiydik", "olmuştunuz / idiydiniz", "olmuşlardı / idiydiler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "fuero (sum - Futurum Exactum)", "sum", "esse", "olmak", "Futurum Exactum Activi",
                    "fu-erō", "fu-eris", "fu-erit", "fu-erimus", "fu-eritis", "fu-erint",
                    "olmuş olacağım", "olmuş olacaksın", "olmuş olacak",
                    "olmuş olacağız", "olmuş olacaksınız", "olmuş olacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "potueram (possum - Plusquamperfectum)", "possum", "posse", "-ebilmek", "Plusquamperfectum Activi",
                    "potu-eram", "potu-erās", "potu-erat", "potu-erāmus", "potu-erātis", "potu-erant",
                    "-ebilmiştim", "-ebilmiştin", "-ebilmişti",
                    "-ebilmiştik", "-ebilmiştiniz", "-ebilmişlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "potuero (possum - Futurum Exactum)", "possum", "posse", "-ebilmek", "Futurum Exactum Activi",
                    "potu-erō", "potu-eris", "potu-erit", "potu-erimus", "potu-eritis", "potu-erint",
                    "-ebilmiş olacağım", "-ebilmiş olacaksın", "-ebilmiş olacak",
                    "-ebilmiş olacağız", "-ebilmiş olacaksınız", "-ebilmiş olacaklar"
                )
            });

            f.studyTips = "Futurum Exactum 3. çoğul şahsının -erint olduğuna dikkat ediniz; Futurum I'deki erunt ile karışmamalıdır.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W4_L1: Latince Gramer 2 - Ders Sunumu 4.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 4, 1, "Latince Gramer 2 - Ders Sunumu 4.1.pdf",
                "DÖNÜŞLÜ ZAMİRLER VE PEKİŞTİRME ZAMİRİ: IPSE, IPSA, IPSUM",
                "sui, sibi, se, se; suus, sua, suum (Kendi); ipse (Bizzat Kendisi) ve idem (Aynı)",
                "Bu fasikülde özneye dönük eylemleri anlatan Dönüşlü Zamirleri (meī, tuī, suī), dönüşlü mülkiyet sıfatını (suus, sua, suum), pekiştirme zamirini (ipse, ipsa, ipsum) ve belirleme zamirini (īdem, eadem, idem) tüm tablolarıyla göreceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Dönüşlü Zamirler (Reflexiva)", "3. Şahıs Dönüşlüsü: suī, sibi, sē, sē", "Dönüşlü Sıfat: suus, sua, suum", "Pekiştirme Zamiri: ipse, ipsa, ipsum", "Belirleme Zamiri: īdem, eadem, idem" });
            f.vocabKeys.AddRange(new[] { "sui", "sibi", "se", "suus", "sua", "suum", "ipse", "ipsa", "ipsum", "idem", "eadem", "iungo", "alo", "animus" });

            // Reflexives
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Dönüşlü Şahıs Zamirleri (Pronomina Reflexiva)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 3, 4, 7, 10 tabloları:</p>
<p>Dönüşlü zamir cümlenin öznesini gösterdiği için <strong>Nominativus (Yalın) hali bulunmaz!</strong></p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Dönüşlü Şahıs Zamirleri Tablosu", "Slayt 10",
                    new[] { "Casus", "1. Şahıs (Kendim)", "2. Şahıs (Kendin)", "3. Şahıs (Kendi / Kendisi)" },
                    new[] {
                        new[] { "Genetivus", "meī (kendimin)", "tuī (kendinin)", "suī (kendisinin)" },
                        new[] { "Dativus", "mihi (kendime)", "tibi (kendine)", "sibi (kendisine)" },
                        new[] { "Accusativus", "mē (kendimi)", "tē (kendini)", "sē / sēsē (kendisini)" },
                        new[] { "Ablativus", "mē (kendimle)", "tē (kendinle)", "sē / sēsē (kendisiyle)" }
                    },
                    "3. şahıs dönüşlü zamiri tekil ve çoğul özneler için ORTAKTIR: Consules se iungebant (Konsüller kendilerini birleştiriyorlardı)."
                )
            });

            // ipse, ipsa, ipsum
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Pekiştirme Zamiri: ipse, ipsa, ipsum (Bizzat Kendisi)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 19 tablosu:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "ipse, ipsa, ipsum (Bizzat Kendisi)", "Slayt 19",
                    "ipse", "ipsa", "ipsum", "—", "—", "—",
                    "ipsīus", "ipsīus", "ipsīus", "ipsī", "ipsī", "ipsī",
                    "ipsum", "ipsam", "ipsum", "ipsō", "ipsā", "ipsō",
                    "bizzat kendisi", "bizzat kendisinin", "bizzat kendisine", "bizzat kendisini", "bizzat kendisiyle", "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "ipsī, ipsae, ipsa (Bizzat Kendileri)", "Slayt 19",
                    "ipsī", "ipsae", "ipsa", "—", "—", "—",
                    "ipsōrum", "ipsārum", "ipsōrum", "ipsīs", "ipsīs", "ipsīs",
                    "ipsōs", "ipsās", "ipsa", "ipsīs", "ipsīs", "ipsīs",
                    "bizzat kendileri", "bizzat kendilerinin", "bizzat kendilerine", "bizzat kendilerini", "bizzat kendileriyle", "Pluralis"
                )
            });

            f.studyTips = "suus (kendi) ile eius (onun) farkına dikkat ediniz: Cicero filium suum amat (Cicero kendi oğlunu sever); Cicero filium eius amat (Cicero onun oğlunu sever).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W4_L2: Latince Gramer 2 - Ders Sunumu 4.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 4, 2, "Latince Gramer 2 - Ders Sunumu 4.2.pdf",
                "3. GRUP SIFATLAR (ADIECTIVA DECLINATIO III)",
                "3 Bitimli (acer), 2 Bitimli (fortis) ve 1 Bitimli (ingens, felix) Sıfatların Çekimleri",
                "Bu fasikülde 3. grup isimlerin -i gövdeli ekleriyle çekimlenen 3. Grup Sıfatları, Tekil Nominativus sonlanışlarına göre 3 bitimli (ācer, ācris, ācre), 2 bitimli (fortis, forte) ve 1 bitimli (ingēns, fēlīx) kategorilerini ve tam çekim tablolarını göreceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup Sıfatlar", "3 Bitimli Sıfatlar (acer, acris, acre)", "2 Bitimli Sıfatlar (fortis, forte)", "1 Bitimli Sıfatlar (ingens, felix)", "Tekil Ablativus (-i) Kuralı", "Çoğul Nötr (-ia) ve Çoğul Gen. (-ium)" });
            f.vocabKeys.AddRange(new[] { "acer", "acris", "acre", "fortis", "forte", "ingens", "felix", "omnis", "gravis", "brevis", "difficilis", "facilis" });

            // 3 terminations: acer
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3 Bitimli Sıfatlar: ācer, ācris, ācre (keskin, şiddetli)",
                html = @"<p><strong>Kural (Slayt 6-10):</strong> Eril, Dişil ve Nötr için tekil Nominativus'ta 3 ayrı biçim bulunur. Tekil Ablativus daima <strong>-ī</strong>, Çoğul Nötr daima <strong>-ia</strong>, Çoğul Genetivus daima <strong>-ium</strong> ile biter:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "ācer, ācris, ācre (keskin, şiddetli)", "Slayt 10",
                    "ācer", "ācris", "ācre", "ācer", "ācris", "ācre",
                    "ācris", "ācris", "ācris", "ācrī", "ācrī", "ācrī",
                    "ācrem", "ācrem", "ācre", "ācrī", "ācrī", "ācrī",
                    "keskin", "keskinin", "keskine", "keskini", "keskinle", "Singularis"
                )
            });

            // 2 terminations: fortis
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 2 Bitimli Sıfatlar: fortis, forte (cesur, güçlü)",
                html = @"<p><strong>Kural (Slayt 11-12):</strong> Eril ve Dişil için ortak tekil Nom: <em>fortis</em>; Nötr için tekil Nom: <em>forte</em>:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "fortis, forte (cesur, güçlü)", "Slayt 12",
                    "fortis", "fortis", "forte", "fortis", "fortis", "forte",
                    "fortis", "fortis", "fortis", "fortī", "fortī", "fortī",
                    "fortem", "fortem", "forte", "fortī", "fortī", "fortī",
                    "cesur", "cesurun", "cesura", "cesuru", "cesurla", "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "fortēs, fortia (cesurlar)", "Slayt 12",
                    "fortēs", "fortēs", "fortia", "fortēs", "fortēs", "fortia",
                    "fortium", "fortium", "fortium", "fortibus", "fortibus", "fortibus",
                    "fortēs", "fortēs", "fortia", "fortibus", "fortibus", "fortibus",
                    "cesurlar", "cesurların", "cesurlara", "cesurları", "cesurlarla", "Pluralis"
                )
            });

            // 1 termination: ingens
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 1 Bitimli Sıfatlar: ingēns, ingentis (devasa, muazzam)",
                html = @"<p><strong>Kural (Slayt 13-15):</strong> Her üç cins için Tekil Nominativus ortaktır: <em>ingēns</em>. Gövde Tekil Genetivus'tan bulunur (ingent-):</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "ingēns, ingentis (devasa)", "Slayt 14",
                    "ingēns", "ingēns", "ingēns", "ingēns", "ingēns", "ingēns",
                    "ingentis", "ingentis", "ingentis", "ingentī", "ingentī", "ingentī",
                    "ingentem", "ingentem", "ingēns", "ingentī", "ingentī", "ingentī",
                    "devasa", "devasanın", "devasaya", "devasayı", "devasayla", "Singularis"
                )
            });

            f.studyTips = "3. grup sıfatların Tekil Ablativus halinin isimlerden farklı olarak daima -i ile bittiğini unutmayınız: cive (isim) ama forti cive (sıfat tamlaması).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W5_L1: Latince Gramer 2 - Ders Sunumu 5.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 5, 1, "Latince Gramer 2 - Ders Sunumu 5.1.pdf",
                "3. GRUP DÜZENSİZ SIFATLAR VE DERECELENDİRME (COMPARATIO)",
                "Sıfatlarda Üç Derece: Positivus, Comparativus (-ior, -ius) ve Superlativus (-issimus)",
                "Bu fasikülde 3. gruptaki düzensiz sıfatları, sıfatların derecelendirilmesini (üstünlük derecesi -ior / -ius ve en üstünlük derecesi -issimus, -a, -um) ve mukayese sentaksını (quam + aynı hal veya doğrudan Ablativus Comparationis) öğreneceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Sıfatlarda Derecelendirme", "Positivus (Yalın)", "Comparativus (-ior, -ius)", "Superlativus (-issimus, -illimus, -errimus)", "Ablativus Comparationis", "Düzensiz Derecelendirmeler (bonus > melior > optimus)" });
            f.vocabKeys.AddRange(new[] { "melior", "optimus", "peior", "pessimus", "maior", "maximus", "minor", "minimus", "plures", "plurimi" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Sıfatların Derecelendirilmesi ve Düzensiz Sıfatlar Tablosu",
                html = @"<p>Latincede sıfatlar 3 dereceye sahiptir:</p>
<ol>
  <li><strong>Gradus Positivus:</strong> Sıfatın yalın hali (bonus = iyi; fortis = cesur).</li>
  <li><strong>Gradus Comparativus:</strong> Üstünlük derecesi ('daha ...'); gövdeye Eril/Dişil için <strong>-ior</strong>, Nötr için <strong>-ius</strong> eklenir: <em>fort-ior, fort-ius</em> (daha cesur). Çekimi 3. grup sessiz gövdeli isimler gibidir.</li>
  <li><strong>Gradus Superlativus:</strong> En üstünlük derecesi ('en ... / pek çok ...'); gövdeye <strong>-issimus, -a, -um</strong> eklenir: <em>fort-issimus</em> (en cesur). 1. ve 2. sınıf sıfatlar gibi çekimlenir.</li>
</ol>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Düzensiz Derecelendirilen Temel Sıfatlar Tablosu", "Slayt 2-3",
                    new[] { "Positivus (Yalın)", "Comparativus (Daha...)", "Superlativus (En...)", "Türkçe Anlamı" },
                    new[] {
                        new[] { "bonus, -a, -um", "melior, melius", "optimus, -a, -um", "iyi / daha iyi / en iyi" },
                        new[] { "malus, -a, -um", "pēior, pēius", "pessimus, -a, -um", "kötü / daha kötü / en kötü" },
                        new[] { "magnus, -a, -um", "māior, māius", "maximus, -a, -um", "büyük / daha büyük / en büyük" },
                        new[] { "parvus, -a, -um", "minor, minus", "minimus, -a, -um", "küçük / daha küçük / en küçük" },
                        new[] { "multus, -a, -um", "plūs (plūrēs, plūra)", "plūrimus, -a, -um", "çok / daha çok / en çok" }
                    }
                )
            });

            f.studyTips = "Karşılaştırma yapılırken 'quam' edatı kullanıldığında iki öge aynı halde olur: Amicam meam magis quam oculos meos amo.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W5_L2: Latince Gramer 2 - Ders Sunumu 5.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 5, 2, "Latince Gramer 2 - Ders Sunumu 5.2.pdf",
                "DERECELENDİRİLMİŞ SIFATLARLA CÜMLE ALIŞTIRMALARI",
                "Sentaks Uygulamaları, Klasik Karşılaştırma Cümleleri ve Metin Tahlilleri",
                "Bu fasikülde derecelendirilmiş sıfatların cümle içindeki kullanımlarını, edebi ve felsefi alıntıları ve sentaks çözümlemelerini inceleyeceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Comparativus Cümle Kuruluşu", "Superlativus Sentaksı", "Ablativus ile Mukayese", "Örnek Çözümlemeler" });
            f.vocabKeys.AddRange(new[] { "melior", "peior", "maior", "minor", "optimus", "pessimus", "sapientia" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Karşılaştırma Sentaksı Rehberi",
                html = @"<p>Latincede Comparativus iki şekilde bağlanır:</p>
<ul>
  <li><strong>1. quam Bağlacı ile:</strong> İki isim aynı halde bulunur: <em>Tū es fortior quam frāter tuus.</em> (Sen kardeşinden daha cesursun.)</li>
  <li><strong>2. Ablatīvus Comparātiōnis ile:</strong> 'quam' kullanılmaz, kıyaslanan ikinci öge doğrudan Ablativus haline konur: <em>Tū es fortior frātre tuō.</em></li>
</ul>"
            });

            f.studyTips = "Ablativus comparationis yapısı yalnızca ilk öge Nominativus veya Accusativus halinde olduğunda tercih edilir.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W6_L1: Latince Gramer 2 - Ders Sunumu 6.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 6, 1, "Latince Gramer 2 - Ders Sunumu 6.1.pdf",
                "4. GRUP İSİMLER (DECLINATIO IV: -US, -ŪS VE -Ū, -ŪS)",
                "Eril/Dişil (portus, fructus, manus), Nötr (cornu, genu) ve İstisnalar (domus, Iesus)",
                "Bu fasikülde Tekil Genetivus hali uzun -ūs ile biten 4. Grup isimleri, eril/dişil model çekimlerini (portus, fructus, manus), cinssiz model çekimlerini (cornū, genū) ve hem 4. hem 2. çekime göre çekimlenen meşhur domus (ev) istisnasını göreceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "4. Grup İsimler (Declinatio IV)", "Eril/Dişil İsimler (-us, -ūs)", "Cinssiz İsimler (-ū, -ūs)", "portus, fructus, manus Çekimleri", "cornu ve genu (Nötr)", "domus İstisnası (2. ve 4. Çekim Karması)", "Iesus Çekimi" });
            f.vocabKeys.AddRange(new[] { "portus", "fructus", "manus", "cornu", "genu", "domus", "Iesus", "senatus", "cursus", "exercitus", "metus", "spiritus" });

            // Takilar Tablosu
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 4. Grup İsimlerin Çekim Takıları Tablosu",
                html = @"<p><strong>Genel Kural (Slayt 5-7):</strong> Tekil Genetivus hali uzun <strong>–ūs</strong> ile biter. Eril ve dişillerin Tekil Nom. hali <em>-us</em>, cinssizlerin Tekil Nom. hali ise <em>-ū</em> ile biter:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "4. Grup İsimlerin Çekim Takıları (Slayt 7)", "Slayt 7",
                    new[] { "Casus (Hal)", "Masculinum / Femininum (Tekil)", "Masculinum / Femininum (Çoğul)", "Neutrum (Tekil)", "Neutrum (Çoğul)" },
                    new[] {
                        new[] { "Nom.", "-us", "-ūs", "-ū", "-ua" },
                        new[] { "Voc.", "-us", "-ūs", "-ū", "-ua" },
                        new[] { "Gen.", "-ūs", "-uum", "-ūs", "-uum" },
                        new[] { "Dat.", "-uī / -ū", "-ibus", "-ū", "-ibus" },
                        new[] { "Acc.", "-um", "-ūs", "-ū", "-ua" },
                        new[] { "Abl.", "-ū", "-ibus", "-ū", "-ibus" }
                    }
                )
            });

            // Models: portus, fructus, manus, cornu, genu
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 4. Grup Model Çekimler: portus, fructus, manus, cornū, genū",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 8-12 tabloları:</p>",
                tableHtml = TableTemplates.NounTable(
                    "portus, -ūs, m. (liman)", "portus", "portūs", "m.", "liman",
                    "portus", "portus", "portūs", "portuī", "portum", "portū",
                    "portūs", "portūs", "portuum", "portibus", "portūs", "portibus",
                    "liman", "limanlar", "ey liman", "ey limanlar", "limanın", "limanların",
                    "limana / için", "limanlara / için", "limanı", "limanları", "limanla / limandan", "limanlarla / limanlardan"
                ) + "<br>" + TableTemplates.NounTable(
                    "manus, -ūs, f. (el) [DİŞİL İSTİSNA]", "manus", "manūs", "f.", "el",
                    "manus", "manus", "manūs", "manuī", "manum", "manū",
                    "manūs", "manūs", "manuum", "manibus", "manūs", "manibus",
                    "el", "eller", "ey el", "ey eller", "elin", "ellerin",
                    "ele / için", "ellere / için", "eli", "elleri", "elle / elden", "ellerle / ellerden",
                    "4. grupta olmasına rağmen DİŞİLDİR (f.)."
                ) + "<br>" + TableTemplates.NounTable(
                    "cornū, -ūs, n. (boynuz)", "cornū", "cornūs", "n.", "boynuz; ordu kanadı",
                    "cornū", "cornū", "cornūs", "cornū", "cornū", "cornū",
                    "cornua", "cornua", "cornuum", "cornibus", "cornua", "cornibus",
                    "boynuz", "boynuzlar", "ey boynuz", "ey boynuzlar", "boynuzun", "boynuzların",
                    "boynuza / için", "boynuzlara / için", "boynuzu", "boynuzları", "boynuzla / boynuzdan", "boynuzlarla / boynuzlardan"
                )
            });

            // domus & Iesus
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 4. Grup İstisnalar: domus (ev) ve Iēsus (İsa)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 16 ve 18 tabloları:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "domus, -ūs, f. (ev) Karma Çekim Tablosu", "Slayt 16",
                    new[] { "Casus", "4. Grup Tekil", "2. Grup Tekil", "4. Grup Çoğul", "2. Grup Çoğul", "Türkçe Anlamı" },
                    new[] {
                        new[] { "Nom.", "domus", "domus", "domūs", "domūs", "ev / evler" },
                        new[] { "Voc.", "domus", "domus", "domūs", "domūs", "ey ev / ey evler" },
                        new[] { "Gen.", "domūs", "domī (Loc: evde)", "domuum", "domōrum", "evin / evlerin" },
                        new[] { "Dat.", "domuī", "domō", "domibus", "—", "eve / evlere" },
                        new[] { "Acc.", "domum (eve doğru)", "domum", "domūs", "domōs", "evi / evleri" },
                        new[] { "Abl.", "domū", "domō (evden)", "domibus", "domibus", "evle / evlerle" }
                    },
                    "domus hem 4. grup hem de 2. grup eklerini karma olarak kullanır."
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Iēsus, Iēsū, m. (İsa) Çekim Tablosu", "Slayt 18",
                    new[] { "Casus", "Singularis (Tekil)", "Türkçe Anlamı" },
                    new[] {
                        new[] { "Nom.", "Iēsus", "İsa" },
                        new[] { "Voc.", "Iēsū", "ey İsa" },
                        new[] { "Gen.", "Iēsū", "İsa'nın" },
                        new[] { "Dat.", "Iēsū", "İsa'ya / için" },
                        new[] { "Acc.", "Iēsum", "İsa'yı" },
                        new[] { "Abl.", "Iēsū", "İsa'dan / İsa'yla" }
                    }
                )
            });

            f.studyTips = "domus kelimesinin tekil Locativus hali domī (evde), tekil Accusativus hali ise edatsız yönelme bildiren domum (eve) kalıplarıdır.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W6_L2: Latince Gramer 2 - Ders Sunumu 6.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 6, 2, "Latince Gramer 2 - Ders Sunumu 6.2.pdf",
                "5. GRUP İSİMLER (DECLINATIO V: -ĒS, -ĒĪ / -EĪ)",
                "res, spes, fides, dies Çekimleri ve Latincede Beş İsmin Tam Sentezi",
                "Bu fasikülde Tekil Genetivus hali -ēī veya -eī ile biten 5. Grup isimleri (Declinatio V), tamamına yakını dişil olan bu grubun anahtar kelimelerini (rēs, spēs, fidēs, diēs) ve tüm çekim paradigmalarını göreceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "5. Grup İsimler (Declinatio V)", "rēs, reī (şey, olay, durum)", "spēs, speī (umut)", "fidēs, fideī (inanç, sadakat)", "diēs, diēī (gün)", "Beş Çekim Grubunun Sentezi" });
            f.vocabKeys.AddRange(new[] { "res", "spes", "fides", "dies", "acies", "facies", "species", "respublica" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 5. Grup İsimlerin Çekim Kuralları ve Model Tablolar",
                html = @"<p><strong>Genel Kural (Slayt 2-3):</strong> Tekil Nominativus <em>-ēs</em>, Tekil Genetivus ise <em>-ēī</em> (sesliden sonra: di-ēī) veya <em>-eī</em> (sessizden sonra: r-eī, sp-eī, fid-eī) ile biter. <em>diēs</em> hariç tamamı dişildir:</p>",
                tableHtml = TableTemplates.NounTable(
                    "rēs, reī, f. (şey, olay, durum, madde)", "rēs", "reī", "f.", "şey, olay, durum, konu",
                    "rēs", "rēs", "reī", "reī", "rem", "rē",
                    "rēs", "rēs", "rērum", "rēbus", "rēs", "rēbus",
                    "şey / olay", "şeyler / olaylar", "ey şey", "ey şeyler", "şeyin / olayın", "şeylerin / olayların",
                    "şeye / için", "şeylere / için", "şeyi", "şeyleri", "şeyle / durumla", "şeylerle / durumlarla",
                    "Latincede en geniş kullanım alanına sahip kelimelerden biridir (rēs pūblica = cumhuriyet/devlet)."
                ) + "<br>" + TableTemplates.NounTable(
                    "spēs, speī, f. (umut)", "spēs", "speī", "f.", "umut",
                    "spēs", "spēs", "speī", "speī", "spem", "spē",
                    "spēs", "spēs", "spērum", "spēbus", "spēs", "spēbus",
                    "umut", "umutlar", "ey umut", "ey umutlar", "umudun", "umutların",
                    "umuda / için", "umutlara / için", "umudu", "umutları", "umutla / umuttan", "umutlarla / umutlardan"
                ) + "<br>" + TableTemplates.NounTable(
                    "fidēs, fideī, f. (inanç, sadakat, güven)", "fidēs", "fideī", "f.", "inanç, sadakat, güven",
                    "fidēs", "fidēs", "fideī", "fideī", "fidem", "fidē",
                    "—", "—", "—", "—", "—", "—",
                    "inanç / sadakat", "—", "ey sadakat", "—", "inancın / sadakatin", "—",
                    "inanca / için", "—", "inancı / güveni", "—", "inançla / sadakatle", "—",
                    "Soyut bir kavram olduğundan çoğul biçimleri kullanılmaz."
                ) + "<br>" + TableTemplates.NounTable(
                    "diēs, diēī, m./f. (gün)", "diēs", "diēī", "m./f.", "gün (tarih olarak f., genel gün m.)",
                    "diēs", "diēs", "diēī", "diēī", "diem", "diē",
                    "diēs", "diēs", "diērum", "diēbus", "diēs", "diēbus",
                    "gün", "günler", "ey gün", "ey günler", "günün", "günlerin",
                    "güne / için", "günlere / için", "günü", "günleri", "günle / günden", "günlerle / günlerden"
                )
            });

            f.studyTips = "5. çekim isimlerin Çoğul Genetivus takısının -ērum olduğunu unutmayınız (rērum, diērum).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W7_L1: Latince Gramer 2 - Ders Sunumu 7.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 7, 1, "Latince Gramer 2 - Ders Sunumu 7.1.pdf",
                "LATİN SAYI SİSTEMİ 1: SAYMA SAYILARI (CARDINALIA)",
                "Çekimli Sayılar: ūnus, duo, trēs, mīlia ve Sayı Sıfatlarının Sentaksı",
                "Bu fasikülde Latincedeki sayma sayılarını (Numeralia Cardinalia), çekimli olan ilk üç sayıyı (ūnus, duo, trēs), bin sayısının çoğulu olan mīlia'yı ve sayı tamlamalarının sentaks kurallarını tüm paradigmalarıyla öğreneceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Sayma Sayıları (Cardinalia)", "ūnus, ūna, ūnum Çekimi", "duo, duae, duo Çekimi", "trēs, tria Çekimi", "mīlle ve mīlia Çekimi", "Çekimsiz Sayılar (quattuor... centum)" });
            f.vocabKeys.AddRange(new[] { "unus", "duo", "tres", "quattuor", "quinque", "sex", "septem", "octo", "novem", "decem", "centum", "mille", "milia" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Çekimli Sayma Sayıları: ūnus, duo, trēs, mīlia",
                html = @"<p><strong>Genel Kural (Slayt 7-10):</strong> Latincede 4'ten 100'e kadar olan sayılar çekimsizdir (quattuor, quīnque, decem, centum asla ek almaz). Yalnızca <strong>1 (ūnus), 2 (duo), 3 (trēs)</strong> ve <strong>1000'in çoğulu (mīlia)</strong> çekimlenir:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "duo, duae, duo (iki)", "Slayt 8",
                    "duo", "duae", "duo", "—", "—", "—",
                    "duōrum", "duārum", "duōrum", "duōbus", "duābus", "duōbus",
                    "duōs / duo", "duās", "duo", "duōbus", "duābus", "duōbus",
                    "iki", "ikinin", "ikiye", "ikiyi", "ikiyle", "Pluralis"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "trēs, tria (üç) [3. Grup Sıfat Gibi Çekimlenir]", "Slayt 9",
                    new[] { "Casus", "Masculinum / Femininum", "Neutrum", "Türkçe Anlamı" },
                    new[] {
                        new[] { "Nom.", "trēs", "tria", "üç" },
                        new[] { "Voc.", "trēs", "tria", "ey üç" },
                        new[] { "Gen.", "trium", "trium", "üçün" },
                        new[] { "Dat.", "tribus", "tribus", "üçe" },
                        new[] { "Acc.", "trēs / trīs", "tria", "üçü" },
                        new[] { "Abl.", "tribus", "tribus", "üçle" }
                    }
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "mīlia, mīlium, n. pl. (binler) [3. Grup Nötr İsim Gibi Çekimlenir]", "Slayt 10",
                    new[] { "Casus", "Pluralis (Çoğul)", "Türkçe Anlamı" },
                    new[] {
                        new[] { "Nom.", "mīlia", "binler / bin" },
                        new[] { "Voc.", "mīlia", "ey binler" },
                        new[] { "Gen.", "mīlium", "binlerin" },
                        new[] { "Dat.", "mīlibus", "binlere" },
                        new[] { "Acc.", "mīlia", "binleri" },
                        new[] { "Abl.", "mīlibus", "binlerle" }
                    },
                    "mille tekil olarak çekimsiz bir sıfattır (mille viri = bin adam). Çoğulda ise mīlia bir isimdir ve kendisinden sonra Genetivus ister: duo mīlia virōrum (iki bin adam / kelimesi kelimesine: adamların iki bini)."
                )
            });

            f.studyTips = "mīlia kelimesinin kendisinden sonra Genetivus partitivus (bütünleyen genetivus) aldığını unutmayınız: tria milia passuum (üç bin adım = 3 Roma mili).";
            list.Add(f);
        }

        // Add Weeks 8 to 14
        BuildTerm2Part2Fasicules(list, getSlideTexts, docSlideCountMap, vocabMap);
    }
}
