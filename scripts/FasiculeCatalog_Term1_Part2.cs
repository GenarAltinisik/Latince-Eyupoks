using System;
using System.Collections.Generic;

public static partial class FasiculeCatalog {

    public static void BuildTerm1RemainingFasicules(
        List<BuildAuthoritativeFasicules.Fasicule> list,
        Func<string, List<string>> getSlideTexts,
        Dictionary<string, int> docSlideCountMap,
        Dictionary<string, BuildAuthoritativeFasicules.VocabItem> vocabMap
    ) {
        // ====================================================================
        // T1_W5_L1: LatinceGramer5.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 5, 1, "LatinceGramer5.1.pdf",
                "1. VE 2. DÖNEM MASTER SÖZLÜK VE KELİME DÜNYASI",
                "1. ve 2. Grup İsimler, 1. ve 2. Grup Fiiller, Zarflar, Edatlar ve Bağlaçlar",
                "Bu fasikülde Doç. Dr. Eyüp Çoraklı'nın 1. yarıyıl boyunca işlenen tüm kelime dağarcığını bir araya getirdiği Master Sözlük listesini, 1. ve 2. grup isimleri, 1. ve 2. grup fiilleri, zarf, edat ve bağlaçları sistematik morfolojik dökümüyle öğreneceksiniz.",
                "Temel Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "1. Grup İsimler Sözlüğü", "2. Grup İsimler Sözlüğü", "1. ve 2. Grup Fiiller Sözlüğü", "Zarflar, Edatlar ve Bağlaçlar", "Sözlük Maddesi Okuma Tekniği" });
            f.vocabKeys.AddRange(new[] { "agricola", "amica", "amicitia", "avaritia", "casa", "causa", "cura", "femina", "puella", "terra", "vita", "amicus", "bellum", "deus", "dominus", "donum", "equus", "filius", "liber", "magister", "otium", "periculum", "populus", "puer", "servus", "templum", "verbum", "vir", "amo", "cogito", "debeo", "do", "erro", "laudo", "moneo", "servo", "teneo", "valeo", "video", "voco" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 1. Grup İsimler (Declinatio I: -a, -ae) Kapsamlı Sözlük",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 3 ve 4 kelime listesi:</p>
<ul>
  <li><span class=""lat-word"">agricola, -ae, m.</span>: çiftçi (eril istisna)</li>
  <li><span class=""lat-word"">amīca, -ae, f.</span>: kız arkadaş, dost</li>
  <li><span class=""lat-word"">amīcitia, -ae, f.</span>: dostluk, arkadaşlık</li>
  <li><span class=""lat-word"">avāritia, -ae, f.</span>: açgözlülük, tamah</li>
  <li><span class=""lat-word"">barba, -ae, f.</span>: sakal</li>
  <li><span class=""lat-word"">benevolentia, -ae, f.</span>: iyilikseverlik, lütuf</li>
  <li><span class=""lat-word"">bēstia, -ae, f.</span>: vahşi hayvan, canavar</li>
  <li><span class=""lat-word"">casa, -ae, f.</span>: kulübe, kır evi</li>
  <li><span class=""lat-word"">catēna, -ae, f.</span>: zincir, pranga</li>
  <li><span class=""lat-word"">causa, -ae, f.</span>: neden, sebep; dava</li>
  <li><span class=""lat-word"">culīna, -ae, f.</span>: mutfak</li>
  <li><span class=""lat-word"">cūra, -ae, f.</span>: özen, kaygı, endişe</li>
  <li><span class=""lat-word"">dea, -ae, f.</span>: tanrıça (Dat/Abl. Pl: deābus)</li>
  <li><span class=""lat-word"">discipula, -ae, f.</span>: kız öğrenci</li>
  <li><span class=""lat-word"">domina, -ae, f.</span>: hanımefendi, sahibe</li>
  <li><span class=""lat-word"">fābula, -ae, f.</span>: masal, hikâye</li>
  <li><span class=""lat-word"">fēmina, -ae, f.</span>: kadın</li>
  <li><span class=""lat-word"">fīlia, -ae, f.</span>: kız evlat (Dat/Abl. Pl: fīliābus)</li>
  <li><span class=""lat-word"">glōria, -ae, f.</span>: şan, şöhret, onur</li>
  <li><span class=""lat-word"">īra, -ae, f.</span>: öfke, hiddet</li>
  <li><span class=""lat-word"">lingua, -ae, f.</span>: dil, lisan</li>
  <li><span class=""lat-word"">nauta, -ae, m.</span>: denizci (eril istisna)</li>
  <li><span class=""lat-word"">patria, -ae, f.</span>: vatan, yurt</li>
  <li><span class=""lat-word"">pecūnia, -ae, f.</span>: para, servet</li>
  <li><span class=""lat-word"">poēta, -ae, m.</span>: şair (eril istisna)</li>
  <li><span class=""lat-word"">puella, -ae, f.</span>: kız çocuk, genç kız</li>
  <li><span class=""lat-word"">sapientia, -ae, f.</span>: bilgelik, hikmet</li>
  <li><span class=""lat-word"">sententia, -ae, f.</span>: fikir, kanaat, cümle</li>
  <li><span class=""lat-word"">silva, -ae, f.</span>: orman</li>
  <li><span class=""lat-word"">terra, -ae, f.</span>: toprak, kara, diyar</li>
  <li><span class=""lat-word"">vīta, -ae, f.</span>: hayat, yaşam</li>
</ul>",
                calloutType = "info",
                calloutTitle = "1. Çekimde Cins Ayrımı",
                calloutText = "Doç. Dr. Eyüp Çoraklı'nın özellikle belirttiği üzere: agricola, nauta, poeta, auriga kelimeleri dişil takı almalarına karşın anlamca ERİLDİR (m.)."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 2. Grup İsimler (Declinatio II: -us, -er, -ir, -um) Kapsamlı Sözlük",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 6 ve 7 kelime listesi:</p>
<ul>
  <li><span class=""lat-word"">amīcus, -ī, m.</span>: dost, arkadaş | <span class=""lat-word"">argentum, -ī, n.</span>: gümüş</li>
  <li><span class=""lat-word"">auxilium, -iī, n.</span>: yardım | <span class=""lat-word"">bāsium, -iī, n.</span>: öpücük</li>
  <li><span class=""lat-word"">bellum, -ī, n.</span>: savaş | <span class=""lat-word"">caelum, -ī, n.</span>: gökyüzü</li>
  <li><span class=""lat-word"">castra, -ōrum, n. pl.</span>: askeri karargâh, ordugâh (yalnız çoğul)</li>
  <li><span class=""lat-word"">cibus, -ī, m.</span>: yiyecek, aş | <span class=""lat-word"">coquus, -ī, m.</span>: aşçı</li>
  <li><span class=""lat-word"">deus, -ī, m.</span>: tanrı (Pl: deī/diī/dī) | <span class=""lat-word"">dominus, -ī, m.</span>: sahip, efendi</li>
  <li><span class=""lat-word"">dōnum, -ī, n.</span>: armağan, hediye | <span class=""lat-word"">equus, -ī, m.</span>: at</li>
  <li><span class=""lat-word"">exitium, -iī, n.</span>: yıkım, felaket | <span class=""lat-word"">fīlius, -iī, m.</span>: oğul (Voc: fīlī)</li>
  <li><span class=""lat-word"">liber, librī, m.</span>: kitap | <span class=""lat-word"">līberī, -ōrum, m. pl.</span>: çocuklar</li>
  <li><span class=""lat-word"">locus, -ī, m.</span>: yer, mekân (Pl. n: loca; Pl. m: locī)</li>
  <li><span class=""lat-word"">magister, magistrī, m.</span>: öğretmen, hoca | <span class=""lat-word"">malum, -ī, n.</span>: kötülük</li>
  <li><span class=""lat-word"">negōtium, -iī, n.</span>: iş, meşguliyet | <span class=""lat-word"">numerus, -ī, m.</span>: sayı, miktar</li>
  <li><span class=""lat-word"">ōtium, -iī, n.</span>: boş vakit, huzur, dinlence | <span class=""lat-word"">perīculum, -ī, n.</span>: tehlike</li>
  <li><span class=""lat-word"">philosophus, -ī, m.</span>: filozof | <span class=""lat-word"">populus, -ī, m.</span>: halk</li>
  <li><span class=""lat-word"">puer, puerī, m.</span>: oğlan çocuk | <span class=""lat-word"">servus, -ī, m.</span>: erkek köle</li>
  <li><span class=""lat-word"">templum, -ī, n.</span>: tapınak | <span class=""lat-word"">verbum, -ī, n.</span>: söz, kelime</li>
  <li><span class=""lat-word"">vīnum, -ī, n.</span>: şarap | <span class=""lat-word"">vir, virī, m.</span>: erkek, er, adam</li>
</ul>"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 1. ve 2. Grup Fiiller, Zarflar, Edatlar ve Bağlaçlar",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 9, 10, 11, 13, 14:</p>
<p><strong>Fiiller:</strong> ămo (sevmek), cōgitō (düşünmek), dēbeō (borçlu olmak, zorunda olmak), dō (vermek), dŏceō (öğretmek), errō (yanılmak, hata yapmak), laudō (övmek), moneō (uyarmak), pāreō (görünür olmak, itaat etmek), pugnō (savaşmak), putō (sanmak, düşünmek), rogō (sormak), sānō (iyileştirmek), servō (korumak), cōnservō (muhafaza etmek), spectō (bakmak, izlemek), taceō (susmak), terreō (korkutmak), valeō (güçlü/sağlıklı olmak), videō (görmek), vocō (çağırmak), culpō (suçlamak), peccō (günah işlemek, hata yapmak), volō (uçmak), deportō (alıp götürmek), salūtō (selamlamak), habeō (sahip olmak), satiō (doyurmak, tatmin etmek), irrītō (kışkırtmak), teneō (tutmak), intrō (içeri girmek), iuvō/adiuvō (yardım etmek), cūrō (özen göstermek), vītō (kaçınmak).</p>
<p><strong>Zarf, Edat ve Bağlaçlar:</strong> -ne (soru eki), bis (iki kere), cito (hızlıca), et (ve), et...et (hem...hem de), hodiē (bugün), in (+ abl. içinde, -de; + acc. içine, -e), dē (+ abl. hakkında, -den), Ō (ey!), lentē (yavaşça), nōn (değil, hayır), omnīnō (tümüyle, tamamen), saepe (sık sık), semper (daima), sī (eğer), sed (ama, bilakis), quoque (de, dahi).</p>"
            });

            f.studyTips = "Bu master sözlük fasikülü, ilerleyen derslerde ve metin analizlerinde başvuracağınız temel başvuru kaynağınızdır.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W5_L2: LatinceGramer5.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 5, 2, "LatinceGramer5.2.pdf",
                "CÜMLE TAHLİLLERİ VE OKUMA PARÇASI: MAECENAS VE VERGILIUS",
                "Sentaks Uygulamaları, Deyimsel İfadeler (amabo te) ve Klasik Okuma Metni",
                "Bu fasikülde 1. ve 2. grup isim ve fiillerle kurulmuş özgün klasik Latince cümleleri, felsefi aforizmaları, amabo te ve bis das si cito das gibi atasözlerini ve Maecenas ile Vergilius okuma parçasını eksiksiz çözümlemeleriyle inceleyeceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Sentaks Tahlilleri", "Deyimler (amabo te)", "Atasözleri ve Deyişler", "Maecenas ve Vergilius Okuma Metni", "Felsefi Cümleler" });
            f.vocabKeys.AddRange(new[] { "stultus", "remedium", "mora", "caecus", "rumor", "venia", "clementia", "recuso", "turba", "ars", "creo", "immodicus", "insania" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Ders Slaytlarından Seçkin Atasözleri ve Deyimsel Yapılar",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 2-6 özgün aforizmalar:</p>
<ul>
  <li><span class=""lat-word"">Bis das, sī citō das.</span> = Eğer çabuk verirsen, iki kere verirsin (Hızlı yapılan yardım iki kat değerlidir).</li>
  <li><span class=""lat-word"">Remedium īrae est mora.</span> = Öfkenin çaresi ertelemektir / durup düşünmektir.</li>
  <li><span class=""lat-word"">Fortūna est caeca.</span> = Talih kördür.</li>
  <li><span class=""lat-word"">Sī valēs, valeō.</span> = (Mektup açılış kalıbı) Sen iyiysen ben de iyiyim.</li>
  <li><span class=""lat-word"">Amābō tē</span> = Lütfen, rica ederim (Kelimesi kelimesine: 'seni seveceğim').</li>
  <li><span class=""lat-word"">Philosophia est ars vītae.</span> = Felsefe bir yaşam sanatıdır.</li>
  <li><span class=""lat-word"">Immodica īra creat insāniam.</span> = Ölçüsüz öfke deliliğe yol açar.</li>
</ul>"
            });

            f.studyTips = "Atasözlerindeki söz dizimine dikkat ediniz; Latince vecizeler genellikle yüklemi sona alarak etkileyici bir ritim oluşturur.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W6_L1: LatinceGramer6.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 6, 1, "LatinceGramer6.1.pdf",
                "BİR KURAL: APPOSITIO (AÇIKLAYICI YAN İSİM) VE CATULLUS OKUMA METNİ",
                "Appositio Sentaks Kuralı, Catullus'un Lesbia Şiiri ve Açgözlülük Üzerine İki Okuma Metni",
                "Bu fasikülde Latince sentaksta çok önemli bir yeri olan Appositio kuralını (iki virgül arasında aynı halde açıklayıcı yan isim kullanımı), Catullus'un ünlü 'Puella mea me non amat' şiirsel metnini ve 'Agricola et nauta' okuma parçasını tüm detaylarıyla inceleyeceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Appositio Kuralı", "Catullus Okuma Parçası (Lesbia)", "Deyim: poenas dare", "in numero habere", "Açgözlülük Okuma Parçası" });
            f.vocabKeys.AddRange(new[] { "obduro", "basio", "appositio", "adversus", "copia", "egeo", "studeo", "satio", "secrete", "palam", "modus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Sentaks Kuralı: Appositio (Açıklayıcı Yan İsim)",
                html = @"<p><strong>Tanım (Slayt 5):</strong> Latince cümlelerde, bir ismi açıklamak üzere, söz konusu ismin yanına onunla eşleşen bir başka ismin konulması durumuna <strong>Appositio</strong> adı verilir. Bu tür yapılarda açıklayıcı kelime grubu, açıkladığı ismi bir sıfat gibi niteler; yani <em>onunla aynı hal, sayı ve cinste olur</em> ve genellikle iki virgül arasında yazılır:</p>
<ul>
  <li><span class=""lat-word"">Gāium, fīlium meum, in agrō videō.</span> = Gaius'u, <strong>oğlumu</strong>, tarlada görüyorum.</li>
  <li><span class=""lat-word"">Bonus Daphnis, amīcus meus, ōtium et vītam agricolae amat.</span> = İyi Daphnis, <strong>benim arkadaşım</strong>, bir çiftçinin yaşamını ve boş vaktini sever.</li>
  <li><span class=""lat-word"">Herculēs, Alcmēnae fīlius, ōlim in Graeciā habitābat.</span> = Hercules, <strong>Alcmena'nın oğlu</strong>, bir zamanlar Yunanistan'da yaşıyordu.</li>
  <li><span class=""lat-word"">Cīmōn, vir magnae fāmae, magnam benevolentiam habet.</span> = Cimon, <strong>büyük şöhreti olan o adam</strong>, büyük bir cömertliğe sahiptir.</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Appositio Hal Uyumu Kuralı",
                calloutText = "Appositio durumundaki isim, nitelediği ana isim hangi haldeyse (Nom, Acc, Gen, Dat, Abl) tamı tamına AYNI HALDE olmak zorundadır: Gaium (Acc) -> filium meum (Acc)."
            });

            f.studyTips = "Appositio ögeleri Türkçeye aktarılırken iki virgül arasında ya da 'olan' sıfat-fiiliyle bağlanarak çevrilir.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W6_L2: LatinceGramer6.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 6, 2, "LatinceGramer6.2.pdf",
                "TÜRKÇEDEN LATİNCEYE ÖRNEK CÜMLE ÇEVİRİLERİ",
                "Doç. Dr. Eyüp Çoraklı 36 Çeviri Alıştırması, Tersine Çeviri Tekniği ve Sentaks Analizi",
                "Bu fasikülde Doç. Dr. Eyüp Çoraklı'nın ders slaytlarında yer alan 36 adet Türkçe kaynaktan Latinceye aktarım alıştırmasını, Türkçeden Latinceye doğru sentaks kurma yöntemini ve kelimelerin morfolojik analizlerini interaktif formatta göreceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Türkçeden Latinceye Çeviri", "SOV Cümle Kuruluşu", "Tamlama Dizilimleri", "Hal Seçimi Alıştırmaları", "36 Model Çeviri" });
            f.vocabKeys.AddRange(new[] { "quis", "quid", "nihil", "debeo", "erro", "moneo", "servo", "amabo", "philosophia", "periculum", "fortuna", "oculus", "cras" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Türkçeden Latinceye Çeviri Yöntemi ve Sentaks Rehberi",
                html = @"<p>Türkçe bir cümleyi Latinceye aktarırken Doç. Dr. Eyüp Çoraklı'nın önerdiği aşamalı metot şudur:</p>
<ol>
  <li><strong>Yüklemi Bulunuz ve Zamanını / Şahsını Belirleyiniz:</strong> Türkçe cümlenin yüklemini bulun (örn. <em>görüyoruz</em> &gt; 1. Çoğul Şahıs Praesens &gt; <span class=""lat-word"">vidēmus</span>). Latince cümlenin sonuna yerleştiriniz.</li>
  <li><strong>Özneyi Tespit Ediniz:</strong> Özne açıkça verilmişse Nominativus halinde cümlenin başına alınız. Zamir ise (ben, sen vb.) özel bir vurgu yoksa fiilin şahıs ekinde eritiniz.</li>
  <li><strong>Nesneleri ve Tümleçleri Çözümleyiniz:</strong>
    <ul>
      <li>Neyi / Kimi? &gt; Accusativus (-am, -um, -as, -os).</li>
      <li>Kime / Neye? &gt; Dativus (-ae, -o, -is).</li>
      <li>Neyle / Nereden? &gt; Ablativus (-a, -o, -is veya edatla: in + abl, de + abl).</li>
      <li>Kimin? &gt; Genetivus (-ae, -i, -arum, -orum).</li>
    </ul>
  </li>
  <li><strong>Cümle Dizilimini (SOV) Oluşturunuz:</strong> Özne + Tümleçler + Nesne + Yüklem.</li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Tersine Çeviri Uyarısı",
                calloutText = "Aşağıdaki alıştırmalarda önce Türkçe cümleyi dikkatle okuyunuz, zihninizde veya bir kâğıda Latince karşılığını kurunuz, ardından Latincedeki kelimelerin üzerine tıklayarak morfolojik teyit yapınız."
            });

            f.studyTips = "Türkçeden Latinceye çeviri yaparken hal eklerini kelime kökleriyle tam uyumlu hale getirdiğinizden daima emin olunuz.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W9_L1: LatinceGramer9.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 9, 1, "LatinceGramer9.1.pdf",
                "3. GRUP FİİLLER (CONIUGATIO III): PRAESENS VE IMPERFECTUM",
                "Kısa -ere Bitimli Fiiller, Gövde Ünlüsü Değişimleri (e > i / u) ve -ēba- Zaman Eki",
                "Bu fasikülde mastarı kısa -ere ile biten 3. Grup fiilleri (lego, rego, vinco), şimdiki zamanda gövde ünlüsünün geçirdiği değişimleri (-i-, -u-), Imperfectum yapısını (-ēba-) ve 1, 2, 3. grupların mukayese tablolarını öğreneceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup Fiiller (-ere)", "Praesens Çekimi (e > i, u)", "lego, rego, vinco Çekimleri", "1, 2, 3. Grup Praesens Karşılaştırması", "Imperfectum (-ēbā-)", "1, 2, 3. Grup Imperfectum Karşılaştırması" });
            f.vocabKeys.AddRange(new[] { "lego", "rego", "vinco", "ago", "disco", "duco", "scribo", "gero", "traho", "curro", "cano", "cado", "bibo", "mitto", "perdo" });

            // 1. Praesens Lego, Rego, Vinco
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Grup Fiiller: Şimdiki Zaman (Praesens Indicativus Activi)",
                html = @"<p><strong>Önemli Kural (Slayt 4):</strong> 3. Grup fiillerin etken şimdiki zamanında 1. tekil şahısta gövde ünlüsü olan <em>-e</em> sesi düşer (leg-ō); 3. çoğul şahısta <em>-u-</em> sesine dönüşür (leg-unt); diğer tüm şahıslarda ise <em>-i-</em> sesine dönüşür (leg-i-s, leg-i-t, leg-i-mus, leg-i-tis).</p>",
                tableHtml = TableTemplates.VerbTable(
                    "lĕgo, -ĕre (3. Grup)",
                    "lego", "legere", "okumak", "Praesens Indicativus Activi",
                    "leg-ō", "legi-s", "legi-t", "legi-mus", "legi-tis", "legu-nt",
                    "okuyorum / okurum", "okuyorsun / okursun", "okuyor / okur",
                    "okuyoruz / okuruz", "okuyorsunuz / okursunuz", "okuyorlar / okurlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "rĕgo, -ĕre (3. Grup)",
                    "rego", "regere", "yönetmek", "Praesens Indicativus Activi",
                    "reg-ō", "regi-s", "regi-t", "regi-mus", "regi-tis", "regu-nt",
                    "yönetiyorum / yönetirim", "yönetiyorsun / yönetirsin", "yönetiyor / yönetir",
                    "yönetiyoruz / yönetiriz", "yönetiyorsunuz / yönetirsiniz", "yönetiyorlar / yönetirler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "vinco, -ĕre (3. Grup)",
                    "vinco", "vincere", "yenmek, mağlup etmek", "Praesens Indicativus Activi",
                    "vinc-ō", "vinci-s", "vinci-t", "vinci-mus", "vinci-tis", "vincu-nt",
                    "yeniyorum / yenerim", "yeniyorsun / yenersin", "yeniyor / yener",
                    "yeniyoruz / yeneriz", "yeniyorsunuz / yenersiniz", "yeniyorlar / yenerler"
                )
            });

            // 2. Praesens Comparison
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Karşılaştırma: 1, 2 ve 3. Grup Fiillerin Şimdiki Zaman Çekimi",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 8 karşılaştırma tablosu:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "1. Grup (laudo), 2. Grup (moneo), 3. Grup (vinco) Praesens Karşılaştırması",
                    "Slayt 8",
                    new[] { "Şahıs & Sayı", "1. Grup: laudō, -āre", "2. Grup: moneō, -ēre", "3. Grup: vinco, -ere" },
                    new[] {
                        new[] { "1. Sg. (Ben)", "laud-ō", "mone-ō", "vinc-ō" },
                        new[] { "2. Sg. (Sen)", "laudā-s", "monē-s", "vinci-s" },
                        new[] { "3. Sg. (O)", "lauda-t", "mone-t", "vinci-t" },
                        new[] { "1. Pl. (Biz)", "laudā-mus", "monē-mus", "vinci-mus" },
                        new[] { "2. Pl. (Siz)", "laudā-tis", "monē-tis", "vinci-tis" },
                        new[] { "3. Pl. (Onlar)", "lauda-nt", "mone-nt", "vincu-nt" }
                    }
                )
            });

            // 3. Imperfectum Lego, Rego, Vinco
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 3. Grup Fiiller: Şimdiki Zamanın Hikâyesi (Imperfectum Indicativus Activi)",
                html = @"<p><strong>Kural (Slayt 10):</strong> 3. Grup fiillerde Imperfectum yapılırken gövde ünlüsü olan <em>-e</em> düşer ve gövdeye <strong>-ēbā-</strong> eki getirilir: <em>leg-ēba-m, reg-ēba-m, vinc-ēba-m</em>.</p>",
                tableHtml = TableTemplates.VerbTable(
                    "lĕgo, -ĕre (3. Grup)",
                    "lego", "legere", "okumak", "Imperfectum Indicativus Activi",
                    "leg-ēba-m", "leg-ēbā-s", "leg-ēba-t", "leg-ēbā-mus", "leg-ēbā-tis", "leg-ēba-nt",
                    "okuyordum / okurdum", "okuyordun / okurdun", "okuyordu / okurdu",
                    "okuyorduk / okurduk", "okuyordunuz / okurdunuz", "okuyorlardı / okurlardı"
                ) + "<br>" + TableTemplates.VerbTable(
                    "rĕgo, -ĕre (3. Grup)",
                    "rego", "regere", "yönetmek", "Imperfectum Indicativus Activi",
                    "reg-ēba-m", "reg-ēbā-s", "reg-ēba-t", "reg-ēbā-mus", "reg-ēbā-tis", "reg-ēba-nt",
                    "yönetiyordum / yönetirdim", "yönetiyordun / yönetirdin", "yönetiyordu / yönetirdi",
                    "yönetiyorduk / yönetirdik", "yönetiyordunuz / yönetirdiniz", "yönetiyorlardı / yönetirlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "vinco, -ĕre (3. Grup)",
                    "vinco", "vincere", "yenmek", "Imperfectum Indicativus Activi",
                    "vinc-ēba-m", "vinc-ēbā-s", "vinc-ēba-t", "vinc-ēbā-mus", "vinc-ēbā-tis", "vinc-ēba-nt",
                    "yeniyordum / yenerdim", "yeniyordun / yenerdin", "yeniyordu / yenerdi",
                    "yeniyorduk / yenerdik", "yeniyordunuz / yenerdiniz", "yeniyorlardı / yenerlerdi"
                )
            });

            // 4. Imperfectum Comparison
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Karşılaştırma: 1, 2 ve 3. Grup Fiillerin Imperfectum Çekimi",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 14 karşılaştırma tablosu:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "1. Grup (laudo), 2. Grup (moneo), 3. Grup (vinco) Imperfectum Karşılaştırması",
                    "Slayt 14",
                    new[] { "Şahıs & Sayı", "1. Grup: laudō", "2. Grup: moneō", "3. Grup: vinco" },
                    new[] {
                        new[] { "1. Sg.", "laudā-ba-m", "monē-ba-m", "vinc-ēba-m" },
                        new[] { "2. Sg.", "laudā-bā-s", "monē-bā-s", "vinc-ēbā-s" },
                        new[] { "3. Sg.", "laudā-ba-t", "monē-ba-t", "vinc-ēba-t" },
                        new[] { "1. Pl.", "laudā-bā-mus", "monē-bā-mus", "vinc-ēbā-mus" },
                        new[] { "2. Pl.", "laudā-bā-tis", "monē-bā-tis", "vinc-ēbā-tis" },
                        new[] { "3. Pl.", "laudā-ba-nt", "monē-ba-nt", "vinc-ēba-nt" }
                    }
                )
            });

            f.studyTips = "3. grup fiillerde şimdiki zamanda -i- ve -u- ünlülerinin ortaya çıktığını, Imperfectum'da ise ekin -ēba- olduğunu unutmayınız.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W9_L2: LatinceGramer9.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 9, 2, "LatinceGramer9.2.pdf",
                "3. GRUP FİİLLER: GELECEK ZAMAN (FUTURUM I) VE EMİR KİPİ",
                "Futurum Eki (-a- / -e-), Düzenli ve Düzensiz Emirler (dic, duc, fac, fer) ve Karşılaştırmalar",
                "Bu fasikülde 3. grup fiillerin Gelecek Zamanını (-am, -es, -et... ekleriyle; asla -bo kullanılmaz!), emir kipini (rege, regite), kuralsız emir kipini (dīc, dūc, fac, fer) ve 1, 2, 3. grupların karşılaştırmalı tablolarını öğreneceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup Futurum I (-a-/-e-)", "rego, lego, vinco Futurum", "Gelecek Zaman Karşılaştırması", "3. Grup Emir Kipi (Imperativus)", "Düzensiz Emirler (dic, duc)", "Emir Kipi Karşılaştırması" });
            f.vocabKeys.AddRange(new[] { "rego", "lego", "vinco", "dico", "duco", "facio", "fero", "bellum", "officium", "consilium", "crustulum", "oculus" });

            // 1. Futurum Rego, Lego, Vinco
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Grup Fiiller: Gelecek Zaman (Futurum Indicativus Activi)",
                html = @"<p><strong>Çok Önemli Kural (Slayt 2):</strong> 3. Grup fiillerde gelecek zaman 1 ve 2. gruptaki gibi <em>-bo, -bis, -bit</em> ile YAPILMAZ! 1. tekil şahısta <strong>-a-</strong>, diğer tüm şahıslarda ise <strong>-ē-</strong> eki kullanılır: <em>-am, -ēs, -et, -ēmus, -ētis, -ent</em>.</p>",
                tableHtml = TableTemplates.VerbTable(
                    "rĕgo, -ĕre (3. Grup)",
                    "rego", "regere", "yönetmek", "Futurum Indicativus Activi",
                    "reg-a-m", "reg-ē-s", "reg-e-t", "reg-ē-mus", "reg-ē-tis", "reg-ē-nt",
                    "yöneteceğim", "yöneteceksin", "yönetecek",
                    "yöneteceğiz", "yöneteceksiniz", "yönetecekler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "lĕgo, -ĕre (3. Grup)",
                    "lego", "legere", "okumak", "Futurum Indicativus Activi",
                    "leg-a-m", "leg-ē-s", "leg-e-t", "leg-ē-mus", "leg-ē-tis", "leg-ē-nt",
                    "okuyacağım", "okuyacaksın", "okuyacak",
                    "okuyacağız", "okuyacaksınız", "okuyacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "vinco, -ĕre (3. Grup)",
                    "vinco", "vincere", "yenmek", "Futurum Indicativus Activi",
                    "vinc-a-m", "vinc-ē-s", "vinc-e-t", "vinc-ē-mus", "vinc-ē-tis", "vinc-e-nt",
                    "yeneceğim", "yeneceksin", "yenecek",
                    "yeneceğiz", "yeneceksiniz", "yenecekler"
                )
            });

            // 2. Futurum Comparison
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Karşılaştırma: 1, 2 ve 3. Grup Fiillerin Gelecek Zaman Çekimi",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 6 karşılaştırma tablosu:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "1. Grup (laudo), 2. Grup (moneo), 3. Grup (vinco) Futurum Karşılaştırması",
                    "Slayt 6",
                    new[] { "Şahıs & Sayı", "1. Grup (-bō, -bis)", "2. Grup (-bō, -bis)", "3. Grup (-am, -ēs)" },
                    new[] {
                        new[] { "1. Sg.", "laudā-b-ō", "monē-b-ō", "vinc-a-m" },
                        new[] { "2. Sg.", "laudā-bi-s", "monē-bi-s", "vinc-ē-s" },
                        new[] { "3. Sg.", "laudā-bi-t", "monē-bi-t", "vinc-e-t" },
                        new[] { "1. Pl.", "laudā-bi-mus", "monē-bi-mus", "vinc-ē-mus" },
                        new[] { "2. Pl.", "laudā-bi-tis", "monē-bi-tis", "vinc-ē-tis" },
                        new[] { "3. Pl.", "laudā-bu-nt", "monē-bu-nt", "vinc-e-nt" }
                    }
                )
            });

            // 3. Imperative & Irregulars
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 3. Grup Emir Kipi ve Düzensiz Emirler (dic, duc, fac, fer)",
                html = @"<p><strong>Düzenli Emir Kipi (Slayt 9):</strong> Tekil 2. Şahıs fiil gövdesiyle aynıdır: <em>rege!</em> (Yönet!), <em>vince!</em> (Yen!). Çoğulda ise <strong>-ite</strong> eki gelir: <em>regite!</em>, <em>vincite!</em>.<br><strong>Düzensiz Emirler (Slayt 11-12):</strong> Şu 4 fiil tekil emirde sonlarındaki -e sesini düşürür:<br>• dīcō &gt; <strong>dīc!</strong> (Söyle!) | dīcite! (Söyleyiniz!)<br>• dūcō &gt; <strong>dūc!</strong> (Liderlik et!) | dūcite! (Liderlik ediniz!)<br>• faciō &gt; <strong>fac!</strong> (Yap!) | facite! (Yapınız!)<br>• ferō &gt; <strong>fer!</strong> (Taşı, getir!) | ferte! (Taşıyınız!)</p>",
                tableHtml = TableTemplates.ImperativeTable(
                    "3. Grup Düzenli ve Düzensiz Emir Kipi Tablosu",
                    new[] {
                        new[] { "rĕgo, -ĕre", "yönetmek", "rege (Yönet!)", "regi-te (Yönetiniz!)", "nōlī regere", "nōlīte regere" },
                        new[] { "vinco, -ĕre", "yenmek", "vince (Yen!)", "vinci-te (Yeniniz!)", "nōlī vincere", "nōlīte vincere" },
                        new[] { "dīco, -ĕre", "söylemek (Düzensiz)", "dīc (Söyle!)", "dīci-te (Söyleyiniz!)", "nōlī dīcere", "nōlīte dīcere" },
                        new[] { "dūco, -ĕre", "liderlik etmek (Düzensiz)", "dūc (Liderlik et!)", "dūci-te (Liderlik ediniz!)", "nōlī dūcere", "nōlīte dūcere" }
                    },
                    "Klasik Latince tekerleme: 'dīc, dūc, fac, fer — emir kipinde -e'yi yer!'"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "1, 2 ve 3. Grup Emir Kipi Karşılaştırması (Slayt 10)",
                    "Slayt 10",
                    new[] { "Şahıs", "1. Grup: laudō", "2. Grup: moneō", "3. Grup: vinco" },
                    new[] {
                        new[] { "2. Sg. (Sen)", "laudā (Öv!)", "monē (Uyar!)", "vince (Yen!)" },
                        new[] { "2. Pl. (Siz)", "laudā-te (Övünüz!)", "monē-te (Uyarınız!)", "vinci-tē (Yeniniz!)" }
                    }
                )
            });

            f.studyTips = "3. grupta gelecek zaman 1. tekilde -am ile başlar: regam (yöneteceğim); 1. çekim fiillerle karıştırmamaya dikkat ediniz.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W10_L1: LatinceGramer10.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 10, 1, "LatinceGramer10.1.pdf",
                "DÜZENSİZ FİİLLER: ESSE (OLMAK) VE POSSE (-EBİLMEK)",
                "sum ve possum Fiillerinin Praesens, Imperfectum, Futurum Çekimleri ve Hakiki Dostluk Metni",
                "Bu fasikülde Latin dilinin iki temel direği olan esse (olmak) ve posse (muktedir olmak, -ebilmek) fiillerini, ses benzeşmesini (pot-sum > possum), üç temel zamandaki çekimlerini ve Hakiki Dostluk (Vera Amicitia) okuma parçasını öğreneceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "esse Fiili (sum, esse, fuī)", "posse Fiili (possum, posse, potuī)", "Ses Benzeşmesi (pot- + s- > pos-)", "sum & possum Praesens", "sum & possum Imperfectum", "sum & possum Futurum", "Hakiki Dostluk Okuma Metni" });
            f.vocabKeys.AddRange(new[] { "sum", "possum", "amicitia", "verus", "dignus", "praeclarus", "rarus", "stultus", "pecunia", "basium", "animus", "supero", "maneo", "adiuvo" });

            // esse: sum, eram, ero
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Düzensiz Fiiller 1: esse (olmak) — Üç Zaman Çekimi",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 2, 3, 4 tabloları:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "sum, esse (Praesens)", "sum", "esse", "olmak", "Praesens Indicativus Activi",
                    "sum", "es", "est", "sumus", "estis", "sunt",
                    "oluyorum / varım(dır)", "oluyorsun / varsın(dır)", "oluyor / var(dır)",
                    "oluyoruz / varız(dır)", "oluyorsunuz / varsınız(dır)", "oluyorlar / varlar(dır)"
                ) + "<br>" + TableTemplates.VerbTable(
                    "sum, esse (Imperfectum)", "sum", "esse", "olmak", "Imperfectum Indicativus Activi",
                    "eram", "erās", "erat", "erāmus", "erātis", "erant",
                    "oluyordum / vardım", "oluyordun / vardın", "oluyordu / vardı",
                    "oluyorduk / vardık", "oluyordunuz / vardınız", "oluyorlardı / vardılar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "sum, esse (Futurum)", "sum", "esse", "olmak", "Futurum Indicativus Activi",
                    "erō", "eris", "erit", "erimus", "eritis", "erunt",
                    "olacağım", "olacaksın", "olacak",
                    "olacağız", "olacaksınız", "olacaklar"
                )
            });

            // posse: possum, poteram, potero
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Düzensiz Fiiller 2: posse (-ebilmek) — Üç Zaman Çekimi",
                html = @"<p><strong>Kural (Slayt 5):</strong> <em>potis</em> (muktedir) kökü <strong>pot-</strong> ile <em>sum</em> fiilinin birleşimidir. Gövdedeki <em>-t-</em> sesi, <em>-s-</em> sesiyle başlayan takıların önünde <em>-s-</em> sesine dönüşür (pot-sum &gt; <strong>pos-sum</strong>). Slayt 6, 7, 8 tabloları:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "possum, posse (Praesens)", "possum", "posse", "-ebilmek, muktedir olmak", "Praesens Indicativus Activi",
                    "pos-sum", "pot-es", "pot-est", "pos-sumus", "pot-estis", "pos-sunt",
                    "muktedir oluyorum / -ebilirim", "muktedir oluyorsun / -ebilirsin", "muktedir oluyor / -ebilir",
                    "muktedir oluyoruz / -ebiliriz", "muktedir oluyorsunuz / -ebilirsiniz", "muktedir oluyorlar / -ebilirler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "possum, posse (Imperfectum)", "possum", "posse", "-ebilmek", "Imperfectum Indicativus Activi",
                    "pot-eram", "pot-erās", "pot-erat", "pot-erāmus", "pot-erātis", "pot-erant",
                    "muktedir oluyordum / -ebilirdim", "muktedir oluyordun / -ebilirdin", "muktedir oluyordu / -ebilirdi",
                    "muktedir oluyorduk / -ebilirdik", "muktedir oluyordunuz / -ebilirdiniz", "muktedir oluyorlardı / -ebilirlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "possum, posse (Futurum)", "possum", "posse", "-ebilmek", "Futurum Indicativus Activi",
                    "pot-erō", "pot-eris", "pot-erit", "pot-erimus", "pot-eritis", "pot-erunt",
                    "muktedir olacağım / -ebileceğim", "muktedir olacaksın / -ebileceksin", "muktedir olacak / -ebilecek",
                    "muktedir olacağız / -ebileceğiz", "muktedir olacaksınız / -ebileceksiniz", "muktedir olacaklar / -ebilecekler"
                )
            });

            f.studyTips = "possum fiili Türkçedeki yeterlilik fiili (-ebilmek) gibidir ve anlamını daima bir mastarla (Infinitivus) tamamlar.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W10_L2: LatinceGramer10.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 10, 2, "LatinceGramer10.2.pdf",
                "3. GRUP İSİMLER: SESSİZ GÖVDELİ İSİMLER (CONSONANT STEMS)",
                "Gövde Bulma, Cins İpuçları, Takılar ve 7 Model İsim (rex, lex, virtus, homo, flos, corpus, carmen)",
                "Bu fasikülde 3. Grup isimlerin gövde bulma formülünü, tekil Nominativus bitimlerine göre cins tespit etme kurallarını ve Doç. Dr. Eyüp Çoraklı'nın ders slaytlarında verdiği 7 sessiz gövdeli model ismin tam çekim tablolarını göreceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup İsimler (Declinatio III)", "Gövde Bulma (-is Takısı)", "Cins İpuçları (m, f, n)", "Sessiz Gövdeli Takılar Tablosu", "rex & lex Çekimi", "virtus & homo Çekimi", "flos Çekimi", "corpus & carmen (Nötr)" });
            f.vocabKeys.AddRange(new[] { "rex", "lex", "virtus", "homo", "flos", "corpus", "carmen", "consul", "pater", "mater", "amor", "soror", "libertas", "civitas", "nomen", "caput" });

            // Takilar Tablosu
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Grup İsimler: Cins İpuçları ve Sessiz Gövdeli Takılar Tablosu",
                html = @"<p><strong>Gövde Bulma Yöntemi (Slayt 10):</strong> 3. Grup isimlerde gövde, sözlükteki Tekil Genetivus halindeki <em>–is</em> takısının atılmasıyla bulunur:<br>
• <span class=""lat-word"">mīles &gt; mīlit-is</span> &gt; gövde: <strong>mīlit-</strong> (asker)<br>
• <span class=""lat-word"">lēx &gt; lēg-is</span> &gt; gövde: <strong>lēg-</strong> (yasa)<br>
• <span class=""lat-word"">corpus &gt; corpor-is</span> &gt; gövde: <strong>corpor-</strong> (beden)</p>
<p><strong>Cins İpuçları (Slayt 6-9):</strong><br>
• <em>Eril:</em> -o, -or, -os, -er, -ex, -es ile bitenler genelde erildir.<br>
• <em>Dişil:</em> -as, -aus, -us, -is, -es, -x, -s, -do, -go, -io ile bitenler genelde dişildir.<br>
• <em>Nötr:</em> -us, -en, -al, -ar, -re, -le, -a, -e, -c, -ut, -ur ile bitenler genelde nötrdür.</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "3. Grup İsimlerin Çekim Takıları: Sessiz Gövdeliler (Slayt 12)",
                    "Slayt 12",
                    new[] { "Casus (Hal)", "Masculinum / Femininum (Tekil)", "Masculinum / Femininum (Çoğul)", "Neutrum (Tekil)", "Neutrum (Çoğul)" },
                    new[] {
                        new[] { "Nominativus", "—", "-ēs", "—", "-a" },
                        new[] { "Vocativus", "—", "-ēs", "—", "-a" },
                        new[] { "Genetivus", "-is", "-um", "-is", "-um" },
                        new[] { "Dativus", "-ī", "-ibus", "-ī", "-ibus" },
                        new[] { "Accusativus", "-em", "-ēs", "—", "-a" },
                        new[] { "Ablativus", "-e", "-ibus", "-e", "-ibus" }
                    },
                    "Eril ve Dişil isimlerin Tekil Nom ve Voc halleri çok çeşitlidir ve birbiriyle aynıdır. Nötr isimlerde ise Nom, Voc ve Acc halleri tekilde birbiriyle aynı, çoğulda ise daima kısa -a ile biter."
                )
            });

            // 7 Model Noun Tables
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Model Çekimler 1: rex, rēgis (m.) ve lēx, lēgis (f.)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 13 ve 14 tabloları:</p>",
                tableHtml = TableTemplates.NounTable(
                    "rēx, rēgis, m. (kral) [gövde: rēg-]",
                    "rēx", "rēgis", "m.", "kral",
                    "rēx", "rēx", "rēg-is", "rēg-ī", "rēg-em", "rēg-e",
                    "rēg-ēs", "rēg-ēs", "rēg-um", "rēg-ibus", "rēg-ēs", "rēg-ibus",
                    "kral", "krallar", "ey kral", "ey krallar", "kralın", "kralların",
                    "krala / için", "krallara / için", "kralı", "kralları", "kralla / kraldan", "krallarla / krallardan"
                ) + "<br>" + TableTemplates.NounTable(
                    "lēx, lēgis, f. (yasa) [gövde: lēg-]",
                    "lēx", "lēgis", "f.", "yasa",
                    "lēx", "lēx", "lēg-is", "lēg-ī", "lēg-em", "lēg-e",
                    "lēg-ēs", "lēg-ēs", "lēg-um", "lēg-ibus", "lēg-ēs", "lēg-ibus",
                    "yasa", "yasalar", "ey yasa", "ey yasalar", "yasanın", "yasaların",
                    "yasaya / için", "yasalara / için", "yasayı", "yasaları", "yasayla / yasadan", "yasalarla / yasalardan"
                )
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Model Çekimler 2: virtūs, virtūtis (f.) ve homō, hominis (m.)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 15 ve 16 tabloları:</p>",
                tableHtml = TableTemplates.NounTable(
                    "virtūs, virtūtis, f. (erdem) [gövde: virtūt-]",
                    "virtūs", "virtūtis", "f.", "erdem, yiğitlik",
                    "virtūs", "virtūs", "virtūt-is", "virtūt-ī", "virtūt-em", "virtūt-e",
                    "virtūt-ēs", "virtūt-ēs", "virtūt-um", "virtūt-ibus", "virtūt-ēs", "virtūt-ibus",
                    "erdem", "erdemler", "ey erdem", "ey erdemler", "erdemin", "erdemlerin",
                    "erdeme / için", "erdemlere / için", "erdemi", "erdemleri", "erdemle / erdemden", "erdemlerle / erdemlerden"
                ) + "<br>" + TableTemplates.NounTable(
                    "homō, hominis, m. (insan) [gövde: homin-]",
                    "homō", "hominis", "m.", "insan",
                    "homō", "homō", "homin-is", "homin-ī", "homin-em", "homin-e",
                    "homin-ēs", "homin-ēs", "homin-um", "homin-ibus", "homin-ēs", "homin-ibus",
                    "insan", "insanlar", "ey insan", "ey insanlar", "insanın", "insanların",
                    "insana / için", "insanlara / için", "insanı", "insanları", "insanla / insandan", "insanlarla / insanlardan"
                )
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Model Çekimler 3: flōs, flōris (m.), corpus (n.) ve carmen (n.)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 17, 18 ve 19 tabloları:</p>",
                tableHtml = TableTemplates.NounTable(
                    "flōs, flōris, m. (çiçek) [gövde: flōr-]",
                    "flōs", "flōris", "m.", "çiçek",
                    "flōs", "flōs", "flōr-is", "flōr-ī", "flōr-em", "flōr-e",
                    "flōr-ēs", "flōr-ēs", "flōr-um", "flōr-ibus", "flōr-ēs", "flōr-ibus",
                    "çiçek", "çiçekler", "ey çiçek", "ey çiçekler", "çiçeğin", "çiçeklerin",
                    "çiçeğe / için", "çiçeklere / için", "çiçeği", "çiçekleri", "çiçekle / çiçekten", "çiçeklerle / çiçeklerden"
                ) + "<br>" + TableTemplates.NounTable(
                    "corpus, corporis, n. (beden) [gövde: corpor-]",
                    "corpus", "corporis", "n.", "beden, vücut",
                    "corpus", "corpus", "corpor-is", "corpor-ī", "corpus", "corpor-e",
                    "corpor-a", "corpor-a", "corpor-um", "corpor-ibus", "corpor-a", "corpor-ibus",
                    "beden", "bedenler", "ey beden", "ey bedenler", "bedenin", "bedenlerin",
                    "bedene / için", "bedenlere / için", "bedeni", "bedenleri", "bedenle / bedenden", "bedenlerle / bedenlerden"
                ) + "<br>" + TableTemplates.NounTable(
                    "carmen, carminis, n. (şarkı, şiir) [gövde: carmin-]",
                    "carmen", "carminis", "n.", "şarkı, şiir, ezgi",
                    "carmen", "carmen", "carmin-is", "carmin-ī", "carmen", "carmin-e",
                    "carmin-a", "carmin-a", "carmin-um", "carmin-ibus", "carmin-a", "carmin-ibus",
                    "şarkı", "şarkılar", "ey şarkı", "ey şarkılar", "şarkının", "şarkıların",
                    "şarkıya / için", "şarkılara / için", "şarkıyı", "şarkıları", "şarkıyla / şarkıdan", "şarkılarla / şarkılardan"
                )
            });

            f.studyTips = "3. grup kelimelerin gövdesi daima Tekil Genetivus'tan (-is atılarak) elde edilir; ezberinizi bu kural üzerine kurunuz.";
            list.Add(f);
        }

        // Add Weeks 11, 12, 13, 14
        BuildTerm1AdvancedFasicules(list, getSlideTexts, docSlideCountMap, vocabMap);
    }
}
