using System;
using System.Collections.Generic;

public static partial class FasiculeCatalog {

    public static void BuildTerm2Part2Fasicules(
        List<BuildAuthoritativeFasicules.Fasicule> list,
        Func<string, List<string>> getSlideTexts,
        Dictionary<string, int> docSlideCountMap,
        Dictionary<string, BuildAuthoritativeFasicules.VocabItem> vocabMap
    ) {
        // ====================================================================
        // T2_W7_L2: Latince Gramer 2 - Ders Sunumu 7.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 7, 2, "Latince Gramer 2 - Ders Sunumu 7.2.pdf",
                "LATİN SAYI SİSTEMİ 2: SIRA VE ÜLEŞTİRME SAYILARI",
                "Ordinalia (prīmus, secundus...), Distributiva (singulī, bīnī...) ve Sayı Zarfları (semel, bis, ter)",
                "Bu fasikülde sıra sayı sıfatlarını (Ordinalia), 'kaçar kaçar' sorusunu yanıtlayan üleştirme sayılarını (Distributiva) ve eylemin kaç kez yapıldığını bildiren sayı zarflarını (Adverbia Numeralia) öğreneceksiniz.",
                "Orta-İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Sıra Sayıları (Ordinalia)", "Üleştirme Sayıları (Distributiva: singuli, bini...)", "Sayı Zarfları (semel, bis, ter...)", "Roma Takvimi ve Sayı Sentaksı" });
            f.vocabKeys.AddRange(new[] { "primus", "secundus", "tertius", "singuli", "bini", "trini", "semel", "bis", "ter" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Sıra ve Üleştirme Sayıları Karşılaştırma Tablosu",
                html = @"<p>Latincede sayılar işlevlerine göre 4 ana gruba ayrılır:</p>
<ol>
  <li><strong>Sayma Sayıları (Cardinalia):</strong> Kaç? sorusuna yanıt verir (ūnus, duo, trēs).</li>
  <li><strong>Sıra Sayıları (Ordinalia):</strong> Kaçıncı? sorusuna yanıt verir; 1. ve 2. sınıf sıfatlar gibi çekimlenir: <span class=""lat-word"">prīmus</span> (birinci), <span class=""lat-word"">secundus</span> (ikinci), <span class=""lat-word"">tertius</span> (üçüncü).</li>
  <li><strong>Üleştirme Sayıları (Distributiva):</strong> Kaçar? sorusuna yanıt verir; çoğul çekimlenir: <span class=""lat-word"">singulī</span> (birer), <span class=""lat-word"">bīnī</span> (ikişer), <span class=""lat-word"">ternī</span> (üçer).</li>
  <li><strong>Sayı Zarfları (Adverbia Numeralia):</strong> Kaç kez? sorusuna yanıt verir: <span class=""lat-word"">semel</span> (bir kez), <span class=""lat-word"">bis</span> (iki kez), <span class=""lat-word"">ter</span> (üç kez).</li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Ünlü Deyiş",
                calloutText = "Bis dat, quī citō dat = Çabuk veren, iki kez vermiş sayılır."
            });

            f.studyTips = "Sıra sayıları daima 1. ve 2. sınıf sıfatlar (-us, -a, -um) gibi çekimlenir.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W8_L1: Latince Gramer 2 - Ders Sunumu 8.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 8, 1, "Latince Gramer 2 - Ders Sunumu 8.1.pdf",
                "3. ÇEKİM İSİMLERLE ZENGİNLEŞTİRİLMİŞ METİN VE SENTAKS",
                "Hodie multae nubes in caelo sunt; Lucretius ve Doğa Felsefesi Metinleri",
                "Bu fasikülde gökyüzü olaylarını, doğa felsefesini ve Lucretius metinlerini konu alan 3. çekim isim alıştırmalarını (nūbēs, animal, homō, terra) ve zengin cümle tahlillerini inceleyeceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "nubes, nubis f. Çekimi", "Lucretius: De Rerum Natura", "Doğa ve Felsefe Cümleleri", "İsim Tamlamaları ve İyelik", "Cümle Çözümlemeleri" });
            f.vocabKeys.AddRange(new[] { "nubes", "caelum", "signum", "ira", "acerbus", "deus", "terra", "animal", "creo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Roma Edebiyatında Doğa ve Felsefe Sentaksı",
                html = @"<p><em>Hodiē multae nūbēs in caelō sunt signum īrae acerbae deōrum.</em></p>
<p><strong>Çeviri:</strong> Bugün gökyüzündeki pek çok bulut, tanrıların acı öfkesinin işaretidir.</p>
<p><em>Terra ipsa hominēs et animālia ōlim creāvit. (Lucretius)</em></p>
<p><strong>Çeviri:</strong> Toprağın / yeryüzünün bizzat kendisi vaktiyle insanları ve hayvanları yarattı.</p>",
                calloutType = "info",
                calloutTitle = "Sentaks Notu: ipsa",
                calloutText = "ipse, ipsa, ipsum pekiştirme zamiridir; burada terra ile birleşerek 'yeryüzünün bizzat kendisi' vurgusunu sağlar."
            });

            f.studyTips = "nūbēs kelimesi -i gövdelidir; çoğul genetivus hali nūbium şeklindedir.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W8_L2: Latince Gramer 2 - Ders Sunumu 8.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 8, 2, "Latince Gramer 2 - Ders Sunumu 8.2.pdf",
                "İYELİK YAPILARI VE ZAMİR SENTAKSI",
                "Tu autem filiam beatam eius nunc amas; eius, eorum ve Seneca Metinleri",
                "Bu fasikülde 3. şahıs iyelik yapısını (eius / eōrum), meclis ve mektup dilinde zamirlerin kullanımını, Seneca'nın ahlak mektuplarından seçilen cümleleri ve 19 slaytlık zengin cümle alıştırmalarını öğreneceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "eius ve eorum İyelik Yapıları", "Seneca Ahlak Mektupları", "Doğru Yolu Göstermek (rectum iter)", "Hatalardan Ders Çıkarmak", "Zamir ve Sıfat Uyumları" });
            f.vocabKeys.AddRange(new[] { "filia", "beatus", "labor", "gratia", "ago", "veritas", "error", "rectus", "iter", "demonstro" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Seneca'dan Yaşam Bilgeliği Sentaksı",
                html = @"<p><em>Ex meīs errōribus hominibus rēctum iter dēmōnstrāre possum. (Seneca)</em></p>
<p><strong>Çeviri:</strong> Kendi yanılgılarımdan / hatalarımdan yola çıkarak insanlara doğru yolu gösterebilirim.</p>
<p><em>Post labōrem eius grātiās magnās eī agēmus.</em></p>
<p><strong>Çeviri:</strong> Onun emeğinin / çalışmasının ardından ona büyük teşekkürler edeceğiz (şükranlarımızı sunacağız).</p>",
                calloutType = "rule",
                calloutTitle = "gratias agere Deyimi",
                calloutText = "grātiās agere = birine teşekkür etmek demektir. Kime teşekkür ediliyorsa Dativus haldedir: eī grātiās agere (ona teşekkür etmek)."
            });

            f.studyTips = "iter (yol, yolculuk) nötr bir 3. çekim isimdir; tekil accusativus hali yine iter'dir (rectum iter).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W11_L1: Latince Gramer 2 - Ders Sunumu 11.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 11, 1, "Latince Gramer 2 - Ders Sunumu 11.1.pdf",
                "EDİLGEN ÇATI 1 (VOX PASSIVA): ŞİMDİKİ ZAMAN GÖVDESİ VE ŞAHIS EKLERİ",
                "Vox Passiva Tanımı, 1-4. Çekim Gövdeleri ve Evrensel Edilgen Ekler (-r, -ris, -tur, -mur, -minī, -ntur)",
                "Bu fasikülde Latince fiil sisteminde en köklü dönüşümlerden biri olan Edilgen Çatıyı (Vox Passiva), öznenin eylemden etkilenme mantığını, şimdiki zaman gövdesine getirilen evrensel edilgen şahıs eklerini öğreneceksiniz.",
                "Orta-İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Edilgen Çatı (Vox Passiva)", "Şimdiki Zaman Gövdesi", "Edilgen Şahıs Ekleri (-r, -ris, -tur...)", "1-4. Çekim Fiiller", "Örnek Çekimler" });
            f.vocabKeys.AddRange(new[] { "laudor", "moneor", "regor", "audior", "capior", "amor", "conservor" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Edilgen Çatının Temel Mantığı",
                html = @"<p>Latincede <strong>Vox Passiva</strong>, özneye bir şey yapıldığını bildirir. Etken şahıs ekleri (-ō, -s, -t, -mus, -tis, -nt) yerine şu <strong>edilgen ekler</strong> kullanılır:</p>
<ul>
  <li>1. Tekil: <strong>-r / -or</strong> (övülü-r-üm)</li>
  <li>2. Tekil: <strong>-ris / -re</strong> (övülü-r-sün)</li>
  <li>3. Tekil: <strong>-tur</strong> (övülü-r)</li>
  <li>1. Çoğul: <strong>-mur</strong> (övülü-r-üz)</li>
  <li>2. Çoğul: <strong>-minī</strong> (övülü-r-sünüz)</li>
  <li>3. Çoğul: <strong>-ntur</strong> (övülü-r-ler)</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "1. Çekim 1. Tekil Şahıs Kuralı",
                calloutText = "1. çekimde kökteki -ā- ile 1. tekil şahıs eki -or kaynaştığında -ā- erir: lauda-or > laudor."
            });

            f.studyTips = "Edilgen eklerde -tur daima 3. tekil, -ntur daima 3. çoğuldur; Türkçedeki -il/-in çatı ekleri gibi düşününüz.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W12_L1: Latince Gramer 2 - Ders Sunumu 12.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 12, 1, "Latince Gramer 2 - Ders Sunumu 12.1.pdf",
                "EDİLGEN ÇATI 2: EDİLGEN ŞİMDİKİ ZAMAN (PRAESENS PASSIVI)",
                "Dört Çekim Grubunda Praesens Passivi Çekim Tabloları ve Mastar Biçimleri (-ārī, -ērī, -ī, -īrī)",
                "Bu fasikülde 1., 2., 3. ve 4. çekim fiillerin Şimdiki Zaman Edilgen (Praesens Indicativus Passivi) çekimlerini, edilgen mastar (Infinitivus Passivi) yapılışını ve sentaks analizlerini öğreneceksiniz.",
                "Orta-İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Praesens Passivi", "Dört Çekim Karşılaştırması", "Edilgen Mastar (-ari, -eri, -i, -iri)", "Cümle Çözümlemeleri" });
            f.vocabKeys.AddRange(new[] { "laudo", "moneo", "rego", "audio", "capio", "vinco", "duco" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Dört Çekim Grubunda Praesens Passivi Tablosu",
                html = @"<p>Praesens sisteminde her dört çekim grubu da aynı şahıs eklerini alır; ancak gövde ünlüleri farklılaşır:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs</th><th>1. Çekim (-āre)</th><th>2. Çekim (-ēre)</th><th>3. Çekim (-ere)</th><th>4. Çekim (-īre)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Sg.</strong></td><td class=""case-cell-latin"">laud-<strong>or</strong></td><td class=""case-cell-latin"">mon-<strong>eor</strong></td><td class=""case-cell-latin"">reg-<strong>or</strong></td><td class=""case-cell-latin"">aud-<strong>ior</strong></td></tr>
      <tr><td><strong>2. Sg.</strong></td><td class=""case-cell-latin"">laud-<strong>āris</strong></td><td class=""case-cell-latin"">mon-<strong>ēris</strong></td><td class=""case-cell-latin"">reg-<strong>eris</strong></td><td class=""case-cell-latin"">aud-<strong>īris</strong></td></tr>
      <tr><td><strong>3. Sg.</strong></td><td class=""case-cell-latin"">laud-<strong>ātur</strong></td><td class=""case-cell-latin"">mon-<strong>ētur</strong></td><td class=""case-cell-latin"">reg-<strong>itur</strong></td><td class=""case-cell-latin"">aud-<strong>ītur</strong></td></tr>
      <tr><td><strong>1. Pl.</strong></td><td class=""case-cell-latin"">laud-<strong>āmur</strong></td><td class=""case-cell-latin"">mon-<strong>ēmur</strong></td><td class=""case-cell-latin"">reg-<strong>imur</strong></td><td class=""case-cell-latin"">aud-<strong>īmur</strong></td></tr>
      <tr><td><strong>2. Pl.</strong></td><td class=""case-cell-latin"">laud-<strong>āminī</strong></td><td class=""case-cell-latin"">mon-<strong>ēminī</strong></td><td class=""case-cell-latin"">reg-<strong>iminī</strong></td><td class=""case-cell-latin"">aud-<strong>īminī</strong></td></tr>
      <tr><td><strong>3. Pl.</strong></td><td class=""case-cell-latin"">laud-<strong>antur</strong></td><td class=""case-cell-latin"">mon-<strong>entur</strong></td><td class=""case-cell-latin"">reg-<strong>untur</strong></td><td class=""case-cell-latin"">aud-<strong>iuntur</strong></td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "warning",
                calloutTitle = "3. Çekimde Edilgen Mastar İstisnası",
                calloutText = "1., 2. ve 4. çekimlerde edilgen mastar sonundaki -e harfinin -ī olmasıyla yapılır (laudārī, monērī, audīrī). ANCAK 3. çekimde -ere eki tamamen düşer ve doğrudan gövdeye -ī gelir: regere > regī (yönetilmek); dūcere > dūcī (götürülmek)."
            });

            f.studyTips = "3. çekim fiillerde 2. tekil şahıs regeris (sen yönetilirsin) biçiminde ara ses -e- olur, regiris olmaz.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W12_L2: Latince Gramer 2 - Ders Sunumu 12.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 12, 2, "Latince Gramer 2 - Ders Sunumu 12.2.pdf",
                "EDİLGEN ÇATI 3: EDİLGEN GELECEK VE HİKÂYE ZAMANI",
                "Futurum I Passivi ve Imperfectum Passivi; 1-4. Çekim Çekim Tabloları",
                "Bu fasikülde eylemin gelecekte veya geçmişte edilgen olarak gerçekleştiği durumları (Imperfectum Passivi: -bar, -bāris... ve Futurum I Passivi: -bor, -beris... / -ar, -ēris...) öğreneceksiniz.",
                "İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Imperfectum Passivi (-bar, -bāris, -bātur...)", "Futurum I Passivi (1. ve 2. Çekim: -bor, -beris...)", "Futurum I Passivi (3. ve 4. Çekim: -ar, -ēris...)", "Karşılaştırmalı Tablolar" });
            f.vocabKeys.AddRange(new[] { "laudor", "moneor", "remedio", "deleo", "pax", "salvus", "civis" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Imperfectum ve Futurum Passivi Tablosu (1. ve 2. Çekim)",
                html = @"<p>1. ve 2. çekimde zaman ekleri aynen korunur, yalnızca sonlarına edilgen şahıs ekleri getirilir:</p>
<ul>
  <li>Imperfectum Passivi: laudā-<strong>bar</strong>, laudā-<strong>bāris</strong>, laudā-<strong>bātur</strong>, laudā-<strong>bāmur</strong>, laudā-<strong>bāminī</strong>, laudā-<strong>bantur</strong></li>
  <li>Futurum I Passivi: laudā-<strong>bor</strong>, laudā-<strong>beris</strong>, laudā-<strong>bitur</strong>, laudā-<strong>bimur</strong>, laudā-<strong>biminī</strong>, laudā-<strong>buntur</strong></li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Futurum 2. Tekil Şahıs Kuralı",
                calloutText = "1. ve 2. çekim Futurum I Passivi 2. tekil şahsında ara ses -i- değil -e- olur: laudā-beris (övüleceksin), monē-beris (uyarılacaksın)."
            });

            f.studyTips = "3. ve 4. çekim fiillerin geleceğinde -bo/-bis yoktur; -ar, -ēris, -ētur ekleri kullanılır: regar, regēris, regētur.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W13_L1: Latince Gramer 2 - Ders Sunumu 13.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 13, 1, "Latince Gramer 2 - Ders Sunumu 13.1.pdf",
                "EDİLGEN CÜMLE SENTAKSI: FAİL VE VASITA AYRIMI",
                "Ablatīvus Auctōris (ā/ab + Abl.) ve Ablatīvus Instrumentī (Yalın Abl.); 20 Slaytlık Cümle Serisi",
                "Bu fasikülde edilgen çatıda canlı fail (ā/ab + Ablativus) ile cansız araç (yalın Ablativus) ayrımını pekiştirecek, 'Beata memoria amicitiarum dulcium numquam delebitur' cümlesiyle başlayan 20 slaytlık zengin cümle serisini inceleyeceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Ablativus Auctoris (Fail)", "Ablativus Instrumenti (Vasıta)", "delebitur (Silinecektir)", "amicitia dulcis Sentaksı", "20 Slaytlık Cümle Serisi" });
            f.vocabKeys.AddRange(new[] { "beatus", "memoria", "amicitia", "dulcis", "numquam", "deleo", "femina", "caecus", "ars", "intellego" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Edilgen Cümle Sentaksının Zirvesi",
                html = @"<p><em>Beāta memoria amīcitiārum dulcium numquam dēlēbitur.</em></p>
<p><strong>Çeviri:</strong> Tatlı / güzel dostlukların mutlu anısı asla silinmeyecektir.</p>
<p><em>Illī virī ā mīlitibus gladiīs vulnerātī sunt.</em></p>
<p><strong>Çeviri:</strong> O adamlar askerler tarafından (ā mīlitibus - fail) kılıçlarla (gladiīs - vasıta) yaralandılar.</p>",
                calloutType = "rule",
                calloutTitle = "Fail ve Vasıta Birlikte Kullanımı",
                calloutText = "Aynı cümlede hem eylemi yapan şahıs (ā/ab + abl.) hem de eylemin aracı (yalın abl.) bir arada kusursuz bir uyum içinde bulunabilir."
            });

            f.studyTips = "dēlēbitur fiili dēleō fiilinin 3. tekil Futurum I Passivi biçimidir (silinecektir).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W13_L2: Latince Gramer 2 - Ders Sunumu 13.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 13, 2, "Latince Gramer 2 - Ders Sunumu 13.2.pdf",
                "EDİLGEN GEÇMİŞ ZAMANLAR (PERFECTUM PASSIVI)",
                "Supinum ve Participium Perfectum Passivi; sum, eram, erō ile Birleşik Çekim Sistemi",
                "Bu fasikülde fiillerin 4. ana unsuru olan Supinum'dan türetilen Geçmiş Zaman Edilgen Sıfat-Fiilini (Participium Perfectum Passivi - PPP), esse yardımcı fiiliyle kurulan Perfectum Passivi, Plusquamperfectum Passivi ve Futurum Exactum Passivi sistemlerini öğreneceksiniz.",
                "İleri Seviye", "60 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Supinum Gövdesi (-tum / -sum)", "Participium Perfectum Passivi (PPP: -tus, -ta, -tum)", "Perfectum Passivi (-tus est)", "Plusquamperfectum Passivi (-tus erat)", "Futurum Exactum Passivi (-tus erit)" });
            f.vocabKeys.AddRange(new[] { "laudatus", "monitus", "rectus", "auditus", "captus", "factus", "victus", "missus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Edilgen Geçmiş Zamanların Birleşik Yapısı",
                html = @"<p>Latincede geçmiş zamanlarda edilgen çekim <strong>Participium Perfectum Passivi + esse</strong> formülüyle yapılır:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Zaman</th><th>Yardımcı Fiil</th><th>Eril Tekil / Çoğul</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Perfectum Passivi</strong></td><td>sum, es, est, sumus, estis, sunt</td><td class=""case-cell-latin"">laudātus est / laudātī sunt</td><td>övüldü / övüldüler</td></tr>
      <tr><td><strong>Plusquamperfectum Passivi</strong></td><td>eram, erās, erat, erāmus, erātis, erant</td><td class=""case-cell-latin"">laudātus erat / laudātī erant</td><td>övülmüştü / övülmüşlerdi</td></tr>
      <tr><td><strong>Futurum Exactum Passivi</strong></td><td>erō, eris, erit, erimus, eritis, erunt</td><td class=""case-cell-latin"">laudātus erit / laudātī erunt</td><td>övülmüş olacak / olacaklar</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "Özne ile Cins ve Sayı Uyumu",
                calloutText = "Özne tekil dişil ise: Puella laudāta est.\nÖzne çoğul dişil ise: Puellae laudātae sunt.\nÖzne çoğul nötr ise: Bella gesta sunt."
            });

            f.studyTips = "PPP kısmı bir sıfat gibi öznenin cinsine (eril/dişil/nötr) ve sayısına (tekil/çoğul) harfiyen uyar.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W14_L1: Latince Gramer 2 - Ders Sunumu 14.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 14, 1, "Latince Gramer 2 - Ders Sunumu 14.1.pdf",
                "EDİLGEN CÜMLE YAPISI VE 2. DÖNEM KAPSAMLI DEĞERLENDİRME",
                "Puer monitus est, Puellae laudatae sunt; Bütün Edilgen ve Etken Yapıların Sentezi",
                "Bu fasikülde 2. dönemin edat, zamir, sıfat ve edilgen çatı konularının tamamını kapsayan sentaks çözümlemelerini, 'Puellae propter facta bona a matribus patribusque laudatae sunt' gibi karmaşık klasik dönem cümlelerini inceleyeceksiniz.",
                "İleri Seviye", "60 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Edilgen Cümle Analizleri", "Anne ve Babalar Tarafından Övülen Kızlar", "Adulescens ve Patientia Sentaksı", "2. Dönem Kapsamlı Değerlendirme" });
            f.vocabKeys.AddRange(new[] { "mater", "pater", "factum", "adulescens", "patientia", "gratias", "intellego", "carus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Kapsamlı Edilgen Cümle Sentaks Çözümlemesi",
                html = @"<p><em>Puellae propter facta bona ā mātribus patribusque laudātae sunt.</em></p>
<p><strong>Sentaks Analizi:</strong></p>
<ul>
  <li><strong>Puellae:</strong> Nom. Pl. f. &gt; Cümlenin öznesi (Kızlar).</li>
  <li><strong>propter facta bona:</strong> propter (+ acc.) edatı ile facta bona nötr çoğul accusativus &gt; Sebep zarf tümleci (İyi eylemlerinden ötürü).</li>
  <li><strong>ā mātribus patribusque:</strong> ā (+ abl.) edatı ile mātribus ve patribus 3. çekim ablativus &gt; Canlı fail tümleci (Anneleri ve babaları tarafından).</li>
  <li><strong>laudātae sunt:</strong> laudo fiili Perfectum Passivi 3. çoğul dişil &gt; Yüklem (Övüldüler).</li>
</ul>",
                calloutType = "info",
                calloutTitle = "Kusursuz Sentaks Uyumu",
                calloutText = "Özne olan puellae çoğul dişil olduğu için, yüklemin sıfat-fiil parçası olan laudātae da çoğul dişil biçimini almıştır."
            });

            f.studyTips = "-que eki kelimenin sonuna eklenerek 've' anlamı katar: patribusque = et patribus.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W14_L2: Latince Gramer 2 - Ders Sunumu 14.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 14, 2, "Latince Gramer 2 - Ders Sunumu 14.2.pdf",
                "SORU ZAMİRLERİ (QUIS, QUID) VE FİNAL ÇEVİRİLERİ",
                "Pronomina Interrogativa: quis, quid; Soru Cümlesi Yapımı ve 1. Sınıf Müfredat Sonu Genel Sentezi",
                "Bu fasikülde 1. sınıf Latince müfredatının son konusu olan Soru Zamirlerini (quis? = kim?, quid? = ne?), soru sıfatlarıyla ayrımını, tekil ve çoğul çekim tablolarını ve 32 slaytlık dönem sonu final çevirilerini inceleyeceksiniz.",
                "İleri Seviye", "60 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Soru Zamirleri (Pronomina Interrogativa)", "quis? (Kim?), quid? (Ne?)", "cuius? (Kimin?), cui? (Kime?)", "Soru Sıfatı (qui, quae, quod)", "Final Sınavı Çeviri Cümleleri" });
            f.vocabKeys.AddRange(new[] { "quis", "quid", "cuius", "cui", "quem", "quo", "solus", "carus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Soru Zamiri (quis, quid) Çekim Tablosu",
                html = @"<p>Latincede <strong>quis?</strong> 'kim?' sorusunu, <strong>quid?</strong> ise 'ne?' sorusunu karşılar:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>Eril / Dişil (Kim?)</th><th>Neutrum (Ne?)</th><th>Türkçe Karşılığı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nominativus</strong></td><td class=""case-cell-latin""><strong>quis?</strong></td><td class=""case-cell-latin""><strong>quid?</strong></td><td>kim? / ne?</td></tr>
      <tr><td><strong>Genetivus</strong></td><td class=""case-cell-latin""><strong>cuius?</strong></td><td class=""case-cell-latin""><strong>cuius?</strong></td><td>kimin? / neyin?</td></tr>
      <tr><td><strong>Dativus</strong></td><td class=""case-cell-latin""><strong>cui?</strong></td><td class=""case-cell-latin""><strong>cui?</strong></td><td>kime? / neye?</td></tr>
      <tr><td><strong>Accusativus</strong></td><td class=""case-cell-latin""><strong>quem?</strong></td><td class=""case-cell-latin""><strong>quid?</strong></td><td>kimi? / neyi?</td></tr>
      <tr><td><strong>Ablativus</strong></td><td class=""case-cell-latin""><strong>quō?</strong></td><td class=""case-cell-latin""><strong>quō?</strong></td><td>kiminle? / ne ile?</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "Soru Zamiri vs Soru Sıfatı Ayrımı",
                calloutText = "Tek başına kullanıldığında soru zamiridir: Quis dicit? (Kim söylüyor?)\nBir ismin önüne geldiğinde soru sıfatı olur: Quī vir dicit? (Hangi adam söylüyor?)"
            });

            f.studyTips = "Tebrikler! Doç. Dr. Eyüp Çoraklı'nın 1. ve 2. Dönem Latince Gramer müfredatının 46 derslik tam dijital fasikül serisini başarıyla tamamladınız! Artık klasik Latin edebiyatının metinlerini, felsefi ve tarihi kaynaklarını aslından okuyabilecek ve çözümleyebilecek sağlam bir filolojik temele sahipsiniz.";
            list.Add(f);
        }
    }
}
