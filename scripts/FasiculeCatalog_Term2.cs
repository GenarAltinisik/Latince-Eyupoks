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
                "3. ÇEKİM İSİMLER TEKRAR VE KLASİK SENTAKS",
                "Homo sum, Terentius, Horatius ve Ecclesiastes Metinleri Eşliğinde Sentaks Çözümlemeleri",
                "Bu fasikülde 2. dönemin başlangıcında 3. grup isimlerin cümle içindeki sentaks kullanımlarını pekiştirecek, Terentius, Horatius ve klasik Latin edebiyatından seçilmiş cümleleri inceleyeceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Çekim İsimler Tekrar", "Terentius: Homo sum", "Horatius Şiirleri", "Ecclesiastes: Nihil sub sole novum", "Klasik Sentaks Çözümlemesi" });
            f.vocabKeys.AddRange(new[] { "homo", "sol", "novus", "carmen", "adulescentia", "virgo", "puer", "canto", "rex", "dux" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Çekim İsimlerin Sentakstaki Yeri ve Klasik Metinler",
                html = @"<p>3. çekim isimler, Roma edebiyatında ve felsefesinde insan doğasını, erdemi ve toplumsal rolleri anlatan en temel kelimeleri barındırır:</p>
<ul>
  <li><span class=""lat-word"">Homo sum: humānī nihil ā mē aliēnum putō.</span> (İnsanım: insana dair hiçbir şeyi kendime yabancı saymam. — Terentius)</li>
  <li><span class=""lat-word"">Nihil sub sōle novum.</span> (Güneşin altında yeni hiçbir şey yoktur. — Ecclesiastes)</li>
  <li><span class=""lat-word"">Carmina nova de adulescentia virginibus puerisque nunc canto.</span> (Genç kızlar ve oğlanlar için gençlik hakkında yeni şarkılar söylüyorum. — Horatius)</li>
</ul>",
                calloutType = "info",
                calloutTitle = "Edebi Alıntı Kuralı",
                calloutText = "Klasik yazarlardan alınan cümleler Latincede dilbilgisi kurallarının canlı edebiyattaki en kusursuz örnekleridir. Her cümlenin yüklemini ve yükleme bağlı özne-tümleç ilişkilerini çözmek sentaks yeteneğinizi geliştirir."
            });

            f.studyTips = "Homo sum cümlesindeki sum fiili yüklemdir; homo ise özne-yüklem (praedicativum) olarak yalın haldedir.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W1_L2: Latince Gramer 2 - Ders Sunumu 1.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 1, 2, "Latince Gramer 2 - Ders Sunumu 1.2.pdf",
                "3. ÇEKİM ALIŞTIRMALARI VE METİN OKUMA (SCINTILLA & HORATIA)",
                "Oxford Latin Course Metinleri, Günlük Yaşam Latinceleri ve İleri Düzey Cümleler",
                "Bu fasikülde Roma günlük yaşamını anlatan Oxford Latin Course metinleri eşliğinde Scintilla ve Horatia'nın hikayesini, edatlı kalıpları (in casa, ad tabernas) ve cümle tahlillerini öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

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
                "İŞARET SIFATLARI VE ZAMİRLERİ 1: HIC, HAEC, HOC",
                "Konuşana Yakın Olanı İşaret Etme ('Bu'), Tam Çekim Tablosu ve Sıfat Olarak Kullanımı",
                "Bu fasikülde konuşanın yakınında bulunan nesne veya kişileri işaret eden hic, haec, hoc (bu) işaret zamirinin tam çekimini, isimlerle tamlama oluşturma kurallarını öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "İşaret Zamirleri (Pronomina Demonstrativa)", "hic, haec, hoc Çekimi", "Genetivus Singularis: huius", "Dativus Singularis: huic", "Sıfat ve Zamir Ayrımı" });
            f.vocabKeys.AddRange(new[] { "hic", "haec", "hoc", "liber", "totus", "littera", "graecus", "vir", "femina" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. hic, haec, hoc (Bu) Çekim Tablosu",
                html = @"<p><strong>hic, haec, hoc</strong> konuşana yakın olanı ('bu') gösterir. Tekil Genetivus hali her üç cinste de <strong>huius</strong>, Tekil Dativus hali ise <strong>huic</strong> şeklindedir:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>Masculinum (Eril)</th><th>Femininum (Dişil)</th><th>Neutrum (Nötr)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin""><strong>hic</strong></td><td class=""case-cell-latin""><strong>haec</strong></td><td class=""case-cell-latin""><strong>hoc</strong></td><td>bu</td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin""><strong>huius</strong></td><td class=""case-cell-latin""><strong>huius</strong></td><td class=""case-cell-latin""><strong>huius</strong></td><td>bunun</td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin""><strong>huic</strong></td><td class=""case-cell-latin""><strong>huic</strong></td><td class=""case-cell-latin""><strong>huic</strong></td><td>buna</td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin""><strong>hunc</strong></td><td class=""case-cell-latin""><strong>hanc</strong></td><td class=""case-cell-latin""><strong>hoc</strong></td><td>bunu</td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin""><strong>hōc</strong></td><td class=""case-cell-latin""><strong>hāc</strong></td><td class=""case-cell-latin""><strong>hōc</strong></td><td>bununla</td></tr>
      <tr><td><strong>Nom. Pl.</strong></td><td class=""case-cell-latin""><strong>hī</strong></td><td class=""case-cell-latin""><strong>hae</strong></td><td class=""case-cell-latin""><strong>haec</strong></td><td>bunlar</td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin""><strong>hōrum</strong></td><td class=""case-cell-latin""><strong>hārum</strong></td><td class=""case-cell-latin""><strong>hōrum</strong></td><td>bunların</td></tr>
      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=""case-cell-latin""><strong>hīs</strong></td><td class=""case-cell-latin""><strong>hīs</strong></td><td class=""case-cell-latin""><strong>hīs</strong></td><td>bunlara / bunlarla</td></tr>
      <tr><td><strong>Acc. Pl.</strong></td><td class=""case-cell-latin""><strong>hōs</strong></td><td class=""case-cell-latin""><strong>hās</strong></td><td class=""case-cell-latin""><strong>haec</strong></td><td>bunları</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "Pronominal Çekim Kuralı",
                calloutText = "Tüm işaret zamirlerinde Tekil Genetivus sonu -ius, Tekil Dativus sonu ise -ī / -ic ile biter. Bu kural zamir çekimlerinin (pronominal declinatio) en belirgin ortak özelliğidir."
            });

            f.studyTips = "hic liber = bu kitap (sıfat kullanımı); hic dicit = bu [adam] söylüyor (zamir kullanımı).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W2_L2: Latince Gramer 2 - Ders Sunumu 2.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 2, 2, "Latince Gramer 2 - Ders Sunumu 2.2.pdf",
                "DEVLET YÖNETİMİ VE CİVİTAS SENTAKSI",
                "Civitas bellum sine causa gerere non debet; gero, gerere Fiili ve Hukuk Sentaksı",
                "Bu fasikülde Roma devlet yapısını, cīvitās kavramını, savaş ve barış hukukunu konu alan alıştırma metinlerini ve gerō, gerere fiilinin deyimsel kullanımlarını öğreneceksiniz.",
                "Orta-İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "civitas ve Devlet Sentaksı", "bellum gerere (Savaş Yürütmek)", "propter ve sine Edatları", "Hukuk ve Felsefe Cümleleri", "Bilinmeyen Kelimeler Analizi" });
            f.vocabKeys.AddRange(new[] { "civitas", "gero", "bellum", "causa", "ira", "fortuna", "populus", "otium", "defendo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. bellum gerere ve Roma Hukuk Dili",
                html = @"<p>Latincede savaş yürütmek ve icra etmek için <strong>bellum gerere</strong> fiil kalıbı kullanılır:</p>
<ul>
  <li><span class=""lat-word"">Cīvitās bellum sine causā bonā aut propter īram gerere nōn dēbet.</span></li>
  <li><em>Devlet, haklı bir neden olmadıkça veya öfke yüzünden savaş yürütmemelidir / savaşa girmemelidir.</em></li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Deyimsel Kullanım: bellum gerere",
                calloutText = "gerō, gerere, gessī, gestum fiili taşımak, icra etmek, yönetmek anlamlarına gelir. bellum ile birleştiğinde 'savaşmak / savaş yürütmek' deyimini oluşturur."
            });

            f.studyTips = "gerere fiili 3. çekimdendir; gerere debet kalıbı zorunluluk bildiren bir tamamlayıcı mastar yapısıdır.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W3_L1: Latince Gramer 2 - Ders Sunumu 3.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 3, 1, "Latince Gramer 2 - Ders Sunumu 3.1.pdf",
                "3. ŞAHIS İŞARET ZAMİRİ: IS, EA, ID",
                "Latincede 3. Şahıs Zamiri ('O, Onlar'), Tam Çekim Tablosu ve Sıfat Kullanımı",
                "Bu fasikülde Latincede başlıbaşına bir 3. şahıs zamiri bulunmadığından onun yerine kullanılan is, ea, id (o / onlar) zamirini, tam çekimini ve iyelik hallerini (eius, eōrum) öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "is, ea, id Çekimi", "Tekil Genetivus: eius (Onun)", "Çoğul Genetivus: eorum / earum (Onların)", "3. Şahıs Zamiri Görevi", "İşaret Sıfatı Görevi" });
            f.vocabKeys.AddRange(new[] { "is", "ea", "id", "eius", "eorum", "earum", "video", "audio", "amicus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. is, ea, id Çekim Tablosu",
                html = @"<p><strong>is, ea, id</strong> hem 'o' zamiri hem de 'o / şu' sıfatı olarak kullanılır. Tekil Genetivus <strong>eius</strong> (onun), Çoğul Genetivus eril/nötr <strong>eōrum</strong>, dişil <strong>eārum</strong> (onların) şeklindedir:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>Masculinum</th><th>Femininum</th><th>Neutrum</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin""><strong>is</strong></td><td class=""case-cell-latin""><strong>ea</strong></td><td class=""case-cell-latin""><strong>id</strong></td><td>o</td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin""><strong>eius</strong></td><td class=""case-cell-latin""><strong>eius</strong></td><td class=""case-cell-latin""><strong>eius</strong></td><td>onun</td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin""><strong>eī</strong></td><td class=""case-cell-latin""><strong>eī</strong></td><td class=""case-cell-latin""><strong>eī</strong></td><td>ona</td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin""><strong>eum</strong></td><td class=""case-cell-latin""><strong>eam</strong></td><td class=""case-cell-latin""><strong>id</strong></td><td>onu</td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin""><strong>eō</strong></td><td class=""case-cell-latin""><strong>eā</strong></td><td class=""case-cell-latin""><strong>eō</strong></td><td>onunla</td></tr>
      <tr><td><strong>Nom. Pl.</strong></td><td class=""case-cell-latin""><strong>eī / iī</strong></td><td class=""case-cell-latin""><strong>eae</strong></td><td class=""case-cell-latin""><strong>ea</strong></td><td>onlar</td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin""><strong>eōrum</strong></td><td class=""case-cell-latin""><strong>eārum</strong></td><td class=""case-cell-latin""><strong>eōrum</strong></td><td>onların</td></tr>
      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=""case-cell-latin""><strong>eīs / iīs</strong></td><td class=""case-cell-latin""><strong>eīs / iīs</strong></td><td class=""case-cell-latin""><strong>eīs / iīs</strong></td><td>onlara / onlarla</td></tr>
      <tr><td><strong>Acc. Pl.</strong></td><td class=""case-cell-latin""><strong>eōs</strong></td><td class=""case-cell-latin""><strong>eās</strong></td><td class=""case-cell-latin""><strong>ea</strong></td><td>onları</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "eius vs suus Ayrımı",
                calloutText = "eius = özne dışındaki başka birinin mülkiyeti ('onun'); suus, sua, suum = cümlenin öznesinin bizzat kendi mülkiyeti ('kendi'). Bu ayrım Latincenin en hassas kurallarındandır!"
            });

            f.studyTips = "eius tekildir (onun); eorum eril/nötr çoğuldur (onların); earum dişil çoğuldur (onların).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W3_L2: Latince Gramer 2 - Ders Sunumu 3.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 3, 2, "Latince Gramer 2 - Ders Sunumu 3.2.pdf",
                "GEÇMİŞ ZAMANLAR SİSTEMİ (TEMPORA PERFECTA)",
                "Perfectum, Plusquamperfectum ve Futurum Exactum; Geçmiş Zaman Gövdesi ve Şahıs Ekleri",
                "Bu fasikülde Latince fiil sisteminin ikinci yarısını oluşturan Geçmiş Zamanlar Sistemini (Perfectum Sistemi), fiilin 3. temel parçasından geçmiş zaman gövdesinin bulunmasını ve üç geçmiş zamanın etken çekimlerini öğreneceksiniz.",
                "İleri Seviye", "60 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Geçmiş Zaman Gövdesi", "Perfectum Indicativus Activi", "Plusquamperfectum Activi (-eram...)", "Futurum Exactum Activi (-ero...)", "Özel Şahıs Ekleri (-ī, -istī, -it...)" });
            f.vocabKeys.AddRange(new[] { "laudavi", "monui", "rexi", "audivi", "cepi", "feci", "fui", "potui" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Perfectum Zamanı Şahıs Ekleri (Evrensel)",
                html = @"<p>Latincede <strong>Perfectum</strong> zamanının etken şahıs ekleri diğer zamanlardan TAMAMEN FARKLIDIR ve tüm fiiller için evrenseldir:</p>
<ul>
  <li>1. Tekil: <strong>-ī</strong> (ben ...-dim)</li>
  <li>2. Tekil: <strong>-istī</strong> (sen ...-din)</li>
  <li>3. Tekil: <strong>-it</strong> (o ...-di)</li>
  <li>1. Çoğul: <strong>-imus</strong> (biz ...-dik)</li>
  <li>2. Çoğul: <strong>-istis</strong> (siz ...-diniz)</li>
  <li>3. Çoğul: <strong>-ērunt / -ēre</strong> (onlar ...-diler)</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Geçmiş Zaman Gövdesinin Bulunması",
                calloutText = "Sözlükte 3. sırada verilen Perfectum 1. tekil şahıs biçiminden sonundaki -ī ekinin atılmasıyla geçmiş zaman gövdesi bulunur: laudāv-ī > laudāv-; monu-ī > monu-; rēx-ī > rēx-; audīv-ī > audīv-; fū-ī > fu-."
            });

            f.studyTips = "Plusquamperfectum eki -eram, -eras, -erat; Futurum Exactum eki ise -ero, -eris, -erit şeklindedir.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W4_L1: Latince Gramer 2 - Ders Sunumu 4.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 4, 1, "Latince Gramer 2 - Ders Sunumu 4.1.pdf",
                "DÖNÜŞLÜ ZAMİRLER (PRONOMINA REFLEXIVA)",
                "sui, sibi, se, se; 1. ve 2. Şahıs Dönüşlülüğü ve Kendim/Kendin/Kendisi Sentaksı",
                "Bu fasikülde eylemin öznenin kendisine döndüğü durumlarda kullanılan Dönüşlü Zamirleri (reflexiva), 1. ve 2. şahıslarda şahıs zamirlerinin dönüşlü kullanılmasını ve 3. şahıs özel dönüşlü zamirini (sui, sibi, se, se) öğreneceksiniz.",
                "Orta-İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Dönüşlü Zamirler (Reflexiva)", "1. Şahıs Dönüşlülük (me, mihi)", "2. Şahıs Dönüşlülük (te, tibi)", "3. Şahıs Dönüşlü Zamiri: sui, sibi, se, se", "Örnek Cümleler" });
            f.vocabKeys.AddRange(new[] { "se", "sibi", "sui", "voluptas", "adulescentia", "scribo", "cogito", "servo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Şahıs Dönüşlü Zamiri: suī, sibī, sē, sē",
                html = @"<p>3. şahıs dönüşlü zamiri öznenin kendisini gösterir; özneye hitap etmediği için <strong>Nominativus hali YOKTUR</strong>. Tekil ve çoğul çekimi aynıdır:</p>
<ul>
  <li>Genetivus: <strong>suī</strong> (kendisinin / kendilerinin)</li>
  <li>Dativus: <strong>sibī</strong> (kendisine / kendilerine)</li>
  <li>Accusativus: <strong>sē / sēsē</strong> (kendisini / kendilerini)</li>
  <li>Ablativus: <strong>sē / sēsē</strong> (kendisiyle / kendileriyle)</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Dönüşlülük Kuralı",
                calloutText = "Fēmina dē sē cōgitat = Kadın kendisi hakkında düşünüyor (sē = özne olan kadın).\nFēmina dē eā cōgitat = Kadın onun (başka bir kadının) hakkında düşünüyor (eā = başka biri)."
            });

            f.studyTips = "sē cōgitat (kendisini düşünüyor); sibi dicit (kendi kendine söylüyor).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W4_L2: Latince Gramer 2 - Ders Sunumu 4.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 4, 2, "Latince Gramer 2 - Ders Sunumu 4.2.pdf",
                "1. VE 2. GRUP SIFATLAR VE UYUM KURALLARI",
                "-us, -a, -um ve -er, -era, -erum Sıfatları; Üç Bitimlilik ve İsim-Sıfat Uyumu (Congruentia)",
                "Bu fasikülde 1. ve 2. sınıf isim çekimlerine paralel olarak çekimlenen üç bitimli sıfatları, eril -us ve -er bitimlerini, dişil -a ve nötr -um biçimlerini ve isim-sıfat uyumunun sentaks prensiplerini öğreneceksiniz.",
                "Orta Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "1. ve 2. Grup Sıfatlar", "Üç Bitimli Sıfatlar (-us, -a, -um)", "-er Bitimli Sıfatlar (pulcher, liber)", "Sıfat-İsim Uyumu (Casus, Numerus, Genus)", "Alıştırmalar" });
            f.vocabKeys.AddRange(new[] { "magnus", "bonus", "malus", "pulcher", "miser", "liber", "clarus", "verus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Üç Bitimli Sıfatların Çekim Sistemi",
                html = @"<p>1. ve 2. grup sıfatlar üç cinste de ayrı bir bitime sahiptir:</p>
<ul>
  <li><strong>Eril (Masculinum):</strong> 2. grup isimler gibi çekimlenir (-us / -er, -ī): <span class=""lat-word"">bonus</span>, <span class=""lat-word"">bonī</span>.</li>
  <li><strong>Dişil (Femininum):</strong> 1. grup isimler gibi çekimlenir (-a, -ae): <span class=""lat-word"">bona</span>, <span class=""lat-word"">bonae</span>.</li>
  <li><strong>Nötr (Neutrum):</strong> 2. grup nötr isimler gibi çekimlenir (-um, -ī): <span class=""lat-word"">bonum</span>, <span class=""lat-word"">bonī</span>.</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Uyum Kuralı",
                calloutText = "Sıfat, nitelediği ismin cinsine, sayısına ve haline eksiksiz uyar: agricola bonus (iyi çiftçi - agricola eril olduğu için bonus erildir!)."
            });

            f.studyTips = "agricola dişil gibi görünse de meslek adı olduğu için erildir; bu yüzden yanına bona değil bonus gelir!";
            list.Add(f);
        }

        // ====================================================================
        // T2_W5_L1: Latince Gramer 2 - Ders Sunumu 5.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 5, 1, "Latince Gramer 2 - Ders Sunumu 5.1.pdf",
                "3. GRUP SIFATLAR: TEK BİTİMLİ VE DÜZENSİZ SIFATLAR",
                "vetus (Gen. veteris), Tek Bitimliler (audāx, ingēns) ve İki Bitimli Sıfatlar",
                "Bu fasikülde 3. çekim isimlerin kurallarına göre çekimlenen 3. grup sıfatları, tek bitimli (Nom. tek harf: vetus, audax, potens) ve düzensiz sıfatları, tekil ablativus ve çoğul takılarını öğreneceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup Sıfatlar", "vetus, veteris Çekimi", "Tek Bitimli Sıfatlar (audax, ingens)", "Ablativus Singularis -ī ve -e Ayrımı", "Çoğul -ia ve -ium Kuralları" });
            f.vocabKeys.AddRange(new[] { "vetus", "audax", "ingens", "potens", "sapiens", "acer", "fortis", "dulcis" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. vetus, veteris (Eski, Kadim) Çekimi",
                html = @"<p><strong>vetus</strong> düzensiz bir 3. grup sıfattır; sessiz gövdeli isimler gibi Tekil Ablativus'ta <strong>-e</strong>, Çoğul Nötr Nom/Acc'de <strong>-a</strong> alır:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>Eril / Dişil Tekil</th><th>Nötr Tekil</th><th>Eril / Dişil Çoğul</th><th>Nötr Çoğul</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom.</strong></td><td class=""case-cell-latin"">vetus</td><td class=""case-cell-latin"">vetus</td><td class=""case-cell-latin"">veter-<strong>ēs</strong></td><td class=""case-cell-latin"">veter-<strong>a</strong></td></tr>
      <tr><td><strong>Gen.</strong></td><td class=""case-cell-latin"">veter-<strong>is</strong></td><td class=""case-cell-latin"">veter-<strong>is</strong></td><td class=""case-cell-latin"">veter-<strong>um</strong></td><td class=""case-cell-latin"">veter-<strong>um</strong></td></tr>
      <tr><td><strong>Dat.</strong></td><td class=""case-cell-latin"">veter-<strong>ī</strong></td><td class=""case-cell-latin"">veter-<strong>ī</strong></td><td class=""case-cell-latin"">veter-<strong>ibus</strong></td><td class=""case-cell-latin"">veter-<strong>ibus</strong></td></tr>
      <tr><td><strong>Acc.</strong></td><td class=""case-cell-latin"">veter-<strong>em</strong></td><td class=""case-cell-latin"">vetus</td><td class=""case-cell-latin"">veter-<strong>ēs</strong></td><td class=""case-cell-latin"">veter-<strong>a</strong></td></tr>
      <tr><td><strong>Abl.</strong></td><td class=""case-cell-latin"">veter-<strong>e</strong></td><td class=""case-cell-latin"">veter-<strong>e</strong></td><td class=""case-cell-latin"">veter-<strong>ibus</strong></td><td class=""case-cell-latin"">veter-<strong>ibus</strong></td></tr>
    </tbody>
  </table>
</div>"
            });

            f.studyTips = "Standart 3. grup sıfatlar tekil ablativus'ta -ī alırken, vetus istisnai olarak -e alır.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W5_L2: Latince Gramer 2 - Ders Sunumu 5.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 5, 2, "Latince Gramer 2 - Ders Sunumu 5.2.pdf",
                "CİCERO DOSTLUK ÜZERİNE (DE AMICITIA) METİN VE SENTAKS ÇALIŞMASI",
                "Nihil cum amicitia possum comparare; comparo, malo Fiilleri ve Felsefi Metin Tahlili",
                "Bu fasikülde Cicero'nun ünlü De Amicitia (Dostluk Üzerine) eserinden seçilmiş metin parçalarını, comparō fiilinin cum edatıyla kullanımını ve mālō düzensiz fiilinin sentaksını inceleyeceksiniz.",
                "İleri Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Cicero: De Amicitia", "Nihil cum amicitia comparare", "malo, malle (Yeğlemek)", "Karşılaştırma Yapıları (melius)", "Sentaks Tahlili" });
            f.vocabKeys.AddRange(new[] { "comparo", "malo", "amicitia", "melius", "corpus", "sanus", "deus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Cicero'nun Dostluk Felsefesi ve Cümle Çözümlemesi",
                html = @"<p><em>Nihil cum amīcitiā possum comparāre; dī hominibus nihil melius dant. Pecūniam aliī mālunt; aliī, corpora sāna...</em></p>
<p><strong>Çeviri:</strong> Hiçbir şeyi dostlukla kıyaslayamam; tanrılar insanlara daha iyi hiçbir şey vermezler. Kimi parayı yeğler, kimi sağlıklı bedenleri...</p>",
                calloutType = "info",
                calloutTitle = "Sentaks İpucu: comparo + cum",
                calloutText = "comparō fiili bir şeyi başka bir şeyle karşılaştırırken 'cum + ablativus' yapısını alır: comparare cum amicitia (dostluk ile kıyaslamak)."
            });

            f.studyTips = "aliī ... aliī kalıbı 'kimileri ... kimileri ise...' anlamına gelen çok yaygın bir Latin tezat kalıbıdır.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W6_L1: Latince Gramer 2 - Ders Sunumu 6.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 6, 1, "Latince Gramer 2 - Ders Sunumu 6.1.pdf",
                "DÜZENSİZ FİİLLER VE KIYASLAMA: MALO, NOLO, VOLO",
                "volō, nōlō, mālō Çekimleri; Kıyaslama Sıfatları ve Felsefe Cümleleri",
                "Bu fasikülde istemek (volō), istememek (nōlō) ve yeğlemek (mālō) düzensiz fiillerinin şimdiki zaman çekimlerini ve bu fiillerin nesne veya mastar alarak cümle oluşturma biçimlerini öğreneceksiniz.",
                "İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "volo, velle (İstemek)", "nolo, nolle (İstememek)", "malo, malle (Yeğlemek)", "Düzensiz Praesens Çekimleri", "Felsefi Sentaks" });
            f.vocabKeys.AddRange(new[] { "volo", "nolo", "malo", "amicitia", "comparo", "melius", "pecunia" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. volō, nōlō, mālō Praesens Çekim Tablosu",
                html = @"<p>Bu üç fiil birbiriyle doğrudan akrabadır: nōlō &lt; ne-volō; mālō &lt; magis-volō:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs</th><th>volō (istiyorum)</th><th>nōlō (istemiyorum)</th><th>mālō (yeğliyorum)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Sg.</strong></td><td class=""case-cell-latin""><strong>volō</strong></td><td class=""case-cell-latin""><strong>nōlō</strong></td><td class=""case-cell-latin""><strong>mālō</strong></td></tr>
      <tr><td><strong>2. Sg.</strong></td><td class=""case-cell-latin""><strong>vīs</strong></td><td class=""case-cell-latin""><strong>nōn vīs</strong></td><td class=""case-cell-latin""><strong>māvīs</strong></td></tr>
      <tr><td><strong>3. Sg.</strong></td><td class=""case-cell-latin""><strong>vult</strong></td><td class=""case-cell-latin""><strong>nōn vult</strong></td><td class=""case-cell-latin""><strong>māvult</strong></td></tr>
      <tr><td><strong>1. Pl.</strong></td><td class=""case-cell-latin""><strong>volumus</strong></td><td class=""case-cell-latin""><strong>nōlumus</strong></td><td class=""case-cell-latin""><strong>mālumus</strong></td></tr>
      <tr><td><strong>2. Pl.</strong></td><td class=""case-cell-latin""><strong>vultis</strong></td><td class=""case-cell-latin""><strong>nōn vultis</strong></td><td class=""case-cell-latin""><strong>māvultis</strong></td></tr>
      <tr><td><strong>3. Pl.</strong></td><td class=""case-cell-latin""><strong>volunt</strong></td><td class=""case-cell-latin""><strong>nōlunt</strong></td><td class=""case-cell-latin""><strong>mālunt</strong></td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "2. Tekil Şahıs İstisnası",
                calloutText = "volō fiilinin 2. tekil şahsı 'vīs' şeklindedir (vīs = istiyorsun). Soru ekiyle: vīsne? (İstiyor musun?)."
            });

            f.studyTips = "mālunt kelimesi mālō fiilinin 3. çoğul şahsıdır: Pecūniam aliī mālunt (Kimileri parayı yeğler).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W6_L2: Latince Gramer 2 - Ders Sunumu 6.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 6, 2, "Latince Gramer 2 - Ders Sunumu 6.2.pdf",
                "5. GRUP İSİMLER (DECLINATIO V: -ES, -EI)",
                "rēs ve diēs Çekimleri; rēs pūblica Kavramı ve Tam Çekim Tabloları",
                "Bu fasikülde Tekil Nominativus hali -ēs, Tekil Genetivus hali -eī ile biten 5. grup isimleri, rēs (şey, olay) ve diēs (gün) sözcüklerinin çekimlerini ve Latincedeki ünlü deyimlerini inceleyeceksiniz.",
                "Orta-İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "5. Grup İsimler (Declinatio V)", "res, rei f. Çekimi", "dies, diei m./f. Çekimi", "res publica (Devlet)", "fides ve spes", "Cümle Çözümlemeleri" });
            f.vocabKeys.AddRange(new[] { "res", "dies", "fides", "spes", "acies", "facies", "publicus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 5. Grup İsimler Tablosu (rēs ve diēs)",
                html = @"<p>5. gruptaki isimlerin tamamı (diēs hariç) <strong>Dişildir (Femininum)</strong>:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>rēs, reī f. (şey, mesele)</th><th>diēs, diēī m./f. (gün)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>ēs</strong></td><td class=""case-cell-latin"">di-<strong>ēs</strong></td><td>şey / gün</td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>eī</strong></td><td class=""case-cell-latin"">di-<strong>ēī</strong></td><td>şeyin / günün</td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>eī</strong></td><td class=""case-cell-latin"">di-<strong>ēī</strong></td><td>şeye / güne</td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>em</strong></td><td class=""case-cell-latin"">di-<strong>em</strong></td><td>şeyi / günü</td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>ē</strong></td><td class=""case-cell-latin"">di-<strong>ē</strong></td><td>şeyle / günde</td></tr>
      <tr><td><strong>Nom/Acc. Pl.</strong></td><td class=""case-cell-latin"">r-<strong>ēs</strong></td><td class=""case-cell-latin"">di-<strong>ēs</strong></td><td>şeyler / günler</td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin"">r-<strong>ērum</strong></td><td class=""case-cell-latin"">di-<strong>ērum</strong></td><td>şeylerin / günlerin</td></tr>
      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=""case-cell-latin"">r-<strong>ēbus</strong></td><td class=""case-cell-latin"">di-<strong>ēbus</strong></td><td>şeylere / günlerde</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "info",
                calloutTitle = "5. Çekim Kuralı",
                calloutText = "5. çekimde yalnızca rēs ve diēs çoğulda tam çekim tablosuna sahiptir; fidēs (sadakat) ve spēs (umut) gibi soyut isimlerin çoğul biçimleri neredeyse hiç kullanılmaz."
            });

            f.studyTips = "rēs pūblica = kamuya ait mesele, cumhuriyet, devlet anlamına gelen iki kelimelik bir tamlamadır.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W7_L1: Latince Gramer 2 - Ders Sunumu 7.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 7, 1, "Latince Gramer 2 - Ders Sunumu 7.1.pdf",
                "LATİN SAYI SİSTEMİ 1: SAYMA SAYILARI (CARDINALIA)",
                "Roma Rakamları, 1-1000 Arası Sayma Sayıları; ūnus, duo, trēs Çekimleri",
                "Bu fasikülde Roma rakamlarının yazılış sistemini, Cardinalia (sayma sayı sıfatları) yapısını ve Latincede çekimli olan ilk üç sayının (ūnus, duo, trēs) çekim tablolarını öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Roma Rakamları (I, V, X, L, C, D, M)", "Sayma Sayıları (Cardinalia)", "unus, una, unum Çekimi", "duo, duae, duo Çekimi", "tres, tria Çekimi", "100 ve 1000 Sayıları (centum, mille)" });
            f.vocabKeys.AddRange(new[] { "unus", "duo", "tres", "quattuor", "quinque", "decem", "centum", "mille" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Çekimli Sayılar: duo (iki) ve trēs (üç)",
                html = @"<p>Latincede 4'ten 100'e kadar olan sayılar çekimsizdir (quattuor, quīnque, decem). Yalnızca <strong>ūnus (1), duo (2), trēs (3)</strong> ve binin çoğulu olan <strong>mīlia (binler)</strong> çekimlenir:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>duo (Eril)</th><th>duae (Dişil)</th><th>duo (Nötr)</th><th>trēs (Eril/Dişil)</th><th>tria (Nötr)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom.</strong></td><td class=""case-cell-latin"">duo</td><td class=""case-cell-latin"">duae</td><td class=""case-cell-latin"">duo</td><td class=""case-cell-latin"">trēs</td><td class=""case-cell-latin"">tria</td></tr>
      <tr><td><strong>Gen.</strong></td><td class=""case-cell-latin"">duōrum</td><td class=""case-cell-latin"">duārum</td><td class=""case-cell-latin"">duōrum</td><td class=""case-cell-latin"">trium</td><td class=""case-cell-latin"">trium</td></tr>
      <tr><td><strong>Dat.</strong></td><td class=""case-cell-latin"">duōbus</td><td class=""case-cell-latin"">duābus</td><td class=""case-cell-latin"">duōbus</td><td class=""case-cell-latin"">tribus</td><td class=""case-cell-latin"">tribus</td></tr>
      <tr><td><strong>Acc.</strong></td><td class=""case-cell-latin"">duōs / duo</td><td class=""case-cell-latin"">duās</td><td class=""case-cell-latin"">duo</td><td class=""case-cell-latin"">trēs</td><td class=""case-cell-latin"">tria</td></tr>
      <tr><td><strong>Abl.</strong></td><td class=""case-cell-latin"">duōbus</td><td class=""case-cell-latin"">duābus</td><td class=""case-cell-latin"">duōbus</td><td class=""case-cell-latin"">tribus</td><td class=""case-cell-latin"">tribus</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "mille vs milia Ayrımı",
                calloutText = "mīlle tekildir ve çekimsiz bir sıfattır: mīlle mīlitēs (bin asker).\nmīlia çoğuldur, 3. çekim nötr bir isimdir ve ardından genetivus alır: tria mīlia mīlitum (üç bin asker, kelimesi kelimesine: askerlerin üç bini)."
            });

            f.studyTips = "Roma rakamlarında soldaki küçük sayı çıkarılır (IV = 4, IX = 9), sağdaki küçük sayı toplanır (VI = 6, XI = 11).";
            list.Add(f);
        }

        // Add Term 2 Part 2 (Weeks 7.2 to 14.2)
        BuildTerm2Part2Fasicules(list, getSlideTexts, docSlideCountMap, vocabMap);
    }
}
