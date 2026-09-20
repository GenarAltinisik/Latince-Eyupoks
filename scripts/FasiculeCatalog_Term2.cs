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
        // T2_W1_L1 & L2: Edilgen Çatı (Vox Passiva) Praesens Sistemi
        // ====================================================================
        {
            var f = CreateFasicule(2, 1, 1, "Latince Gramer 2 - Ders Sunumu 1.1.pdf",
                "EDİLGEN ÇATI 1: PRAESENS SİSTEMİ (VOX PASSIVA)",
                "Praesens, Imperfectum ve Futurum Passivi; Edilgen Şahıs Ekleri (-r, -ris, -tur, -mur, -minī, -ntur)",
                "Bu fasikülde 2. Dönemin (Bahar Yarıyılı) ilk konusu olan Edilgen Çatı (Vox Passiva) sistemine giriş yapacak, etken fiilleri edilgene dönüştürmeyi, evrensel edilgen şahıs eklerini ve 1-4. çekim fiillerin şimdiki zaman edilgen çekimlerini öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Edilgen Çatı (Vox Passiva)", "Edilgen Şahıs Ekleri (-r, -ris, -tur...)", "Praesens Passivi Çekimi", "1-4. Çekim Karşılaştırması" });
            f.vocabKeys.AddRange(new[] { "laudo", "moneo", "rego", "audio", "capio", "amo", "video" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Edilgen Çatının Mantığı ve Evrensel Edilgen Şahıs Ekleri",
                html = @"<p>Etken çatıda (Vox Activa) özne eylemi bizzat gerçekleştirirken, <strong>Edilgen Çatıda (Vox Passiva)</strong> özne eylemi yapan değil, eylemden doğrudan etkilenen durumundadır (örn: 'överim' &gt; 'övülürüm').</p>
<p>Latincede Praesens sisteminde (Praesens, Imperfectum, Futurum I) edilgen çatı yapmak için etken şahıs eklerinin yerine şu <strong>edilgen şahıs ekleri</strong> getirilir:</p>
<ul>
  <li>1. Tekil: <strong>-or / -r</strong> (ben - ...-ilirim)</li>
  <li>2. Tekil: <strong>-ris / -re</strong> (sen - ...-ilirsin)</li>
  <li>3. Tekil: <strong>-tur</strong> (o - ...-ilir)</li>
  <li>1. Çoğul: <strong>-mur</strong> (biz - ...-iliriz)</li>
  <li>2. Çoğul: <strong>-minī</strong> (siz - ...-ilirsiniz)</li>
  <li>3. Çoğul: <strong>-ntur</strong> (onlar - ...-ilirler)</li>
</ul>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs</th><th>1. Çekim: laudor (övülürüm)</th><th>2. Çekim: moneor (uyarılırım)</th><th>3. Çekim: regor (yönetilirim)</th><th>4. Çekim: audior (işitilirim)</th></tr>
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
</div>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Bonus rēx ab omnibus cīvibus laudātur.",
                tr = "İyi kral bütün yurttaşlar tarafından övülür.",
                analysis = "Bonus rēx (Nom. Sg. m. - Özne); ab omnibus cīvibus (Ablativus Auctoris - Bütün yurttaşlar tarafından); laudātur (3. Tekil Praesens Passivi - Övülür)."
            });

            f.studyTips = "Etken ve edilgen ekleri eşleştirerek ezberleyiniz: -ō/-or, -s/-ris, -t/-tur, -mus/-mur, -tis/-mini, -nt/-ntur.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W1_L2: Fail Tümleci (Ablativus Auctoris) ve Vasıta Tümleci
        // ====================================================================
        {
            var f = CreateFasicule(2, 1, 2, "Latince Gramer 2 - Ders Sunumu 1.2.pdf",
                "EDİLGEN ÇATI 2: FAİL TÜMLECİ VE VASITA TÜMLECİ",
                "Ablatīvus Auctōris (ā/ab + Abl.) ile Ablatīvus Instrumentī (Yalın Abl.) Ayrımı",
                "Bu fasikülde edilgen cümlelerde eylemi bizzat yapan canlı fail ile eylemin gerçekleşmesinde kullanılan cansız araç arasındaki sentaks farkını kavrayacaksınız.",
                "Orta Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Fail Tümleci (Ablativus Auctoris)", "Vasıta Tümleci (Ablativus Instrumenti)", "ā / ab Kullanım Kuralı", "İki Tümlecin Karşılaştırılması" });
            f.vocabKeys.AddRange(new[] { "ab", "auctor", "arma", "gladius", "vis", "miles", "dux" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Fail Tümleci (Ablatīvus Auctōris)",
                html = @"<p>Edilgen bir cümlede eylemi yapan kişi canlı bir varlık (insan veya tanrı) ise, bu fail <strong>ā / ab + Ablativus</strong> kalıbıyla ifade edilir:</p>
<ul>
  <li>Kelime sesli veya 'h' ile başlıyorsa <strong>ab</strong> kullanılır: <span class=""lat-word"">ab agricolā</span> (çiftçi tarafından), <span class=""lat-word"">ab hostibus</span> (düşmanlar tarafından).</li>
  <li>Kelime sessizle başlıyorsa <strong>ā</strong> veya <strong>ab</strong> kullanılır: <span class=""lat-word"">ā poētā</span> (şair tarafından).</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Vasıta Tümleci (Ablatīvus Instrumentī)",
                calloutText = "Eğer eylem bir insan tarafından değil, cansız bir nesne, silah veya araç ile yapılıyorsa, ASLA ā/ab edatı kullanılmaz! YALIN ABLATIVUS kullanılır:\nCanlı Fail: Mīles ab hoste vulnerātur. (Asker düşman tarafından yaralanır.)\nCansız Araç: Mīles gladiō vulnerātur. (Asker kılıçla / kılıç vasıtasıyla yaralanır.)"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Puer ab amīcō epistulā monēbātur.",
                tr = "Çocuk arkadaşı tarafından bir mektupla uyarılıyordu.",
                analysis = "ab amīcō (Canlı Fail - Arkadaşı tarafından); epistulā (Cansız Vasıta - Mektupla); monēbātur (3. Tekil Imperfectum Passivi - Uyarılıyordu)."
            });

            f.studyTips = "Sınavlarda 'tarafından' (ā/ab + abl.) ile 'ile/vasıtasıyla' (yalın abl.) ayrımı en sık sorulan sentaks sorularındandır.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W2: Perfectum Sistemi Edilgen Çatı
        // ====================================================================
        {
            var f = CreateFasicule(2, 2, 1, "Latince Gramer 2 - Ders Sunumu 2.1.pdf",
                "EDİLGEN ÇATI 3: PERFECTUM SİSTEMİ (PERFECTUM PASSIVI)",
                "Participium Perfecti Passivi + sum, eram, erō; Cins ve Sayı Uyumu Kuralları",
                "Bu fasikülde geçmiş zamanlarda edilgen çatı yapılışını (Perfectum, Plusquamperfectum ve Futurum Exactum Passivi), fiilin 4. temel parçası olan Participium Perfecti Passivi'yi ve özne ile sıfat gibi cins/sayı uyumunu öğreneceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Perfectum Passivi", "Participium Perfecti Passivi (PPP)", "Yardımcı Fiil (esse)", "Cins ve Sayı Uyumu", "Plusquamperfectum Passivi", "Futurum Exactum Passivi" });
            f.vocabKeys.AddRange(new[] { "laudo", "moneo", "facio", "vinco", "victus", "captus", "scriptus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Perfectum Passivi Formülü ve Mantığı",
                html = @"<p>Latincede Perfectum sisteminde tek kelimelik edilgen şahıs eki YOKTUR. Bunun yerine <strong>bileşik yapı (perifrastik zaman)</strong> kullanılır:</p>
<div style=""text-align: center; margin: 1rem 0; font-family: var(--font-serif); font-size: 1.15rem; color: var(--primary); font-weight: bold;"">
  Participium Perfecti Passivi (-us, -a, -um) + esse (sum, es, est...)
</div>
<p><strong>Cins ve Sayı Uyumu Kuralı:</strong> Participium kısmı 1. ve 2. sınıf bir sıfat (bonus, -a, -um) gibi çekimlendiği için cümlenin <strong>öznesinin cinsi ve sayısıyla</strong> tam uyum sağlar:</p>
<ul>
  <li>Eril tekil özne: <span class=""lat-word"">Vir laudātus est.</span> (Adam övüldü / övülmüştür.)</li>
  <li>Dişil tekil özne: <span class=""lat-word"">Fēmina laudāta est.</span> (Kadın övüldü / övülmüştür.)</li>
  <li>Nötr tekil özne: <span class=""lat-word"">Bellum gestum est.</span> (Savaş yürütüldü.)</li>
  <li>Eril çoğul özne: <span class=""lat-word"">Virī laudātī sunt.</span> (Adamlar övüldüler.)</li>
  <li>Dişil çoğul özne: <span class=""lat-word"">Fēminae laudātae sunt.</span> (Kadınlar övüldüler.)</li>
  <li>Nötr çoğul özne: <span class=""lat-word"">Bella gesta sunt.</span> (Savaşlar yürütüldü.)</li>
</ul>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Zaman</th><th>Yardımcı Fiil</th><th>Örnek (Eril Tekil)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Perfectum Passivi</strong></td><td>sum, es, est, sumus, estis, sunt</td><td class=""case-cell-latin"">laudātus <strong>est</strong></td><td>övüldü / övülmüştür</td></tr>
      <tr><td><strong>Plusquamperfectum Passivi</strong></td><td>eram, erās, erat, erāmus, erātis, erant</td><td class=""case-cell-latin"">laudātus <strong>erat</strong></td><td>övülmüştü</td></tr>
      <tr><td><strong>Futurum Exactum Passivi</strong></td><td>erō, eris, erit, erimus, eritis, erunt</td><td class=""case-cell-latin"">laudātus <strong>erit</strong></td><td>övülmüş olacak</td></tr>
    </tbody>
  </table>
</div>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Urbs Rōma ā mīlitibus dēfēnsa est.",
                tr = "Roma kenti askerler tarafından savunuldu.",
                analysis = "Urbs Rōma (Dişil tekil özne); dēfēnsa est (Dişil tekil uyumlu Perfectum Passivi - Savunuldu)."
            });

            f.studyTips = "Özne dişilse sıfatın sonunun -a/-ae, nötrse -um/-a olduğunu unutmayınız. Bu uyum Türkçe çeviride özneden fiile kurulan köprüdür.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W3: Deponent Fiiller (Verba Deponentia)
        // ====================================================================
        {
            var f = CreateFasicule(2, 3, 1, "Latince Gramer 2 - Ders Sunumu 3.1.pdf",
                "DEPONENT FİİLLER (VERBA DEPONENTIA)",
                "Biçimce Edilgen, Anlamca Etken Fiiller: hortor, sequor, loquor ve Yarı Deponentler",
                "Bu fasikülde biçimsel olarak edilgen çekim eklerini alan ancak anlam bakımından tamamen etken olan Deponent fiilleri, sözlük yazılışlarını ve yarı deponent (semideponentia) fiilleri öğreneceksiniz.",
                "İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Deponent Fiiller", "Biçimce Edilgen / Anlamca Etken", "Dört Çekimde Deponent Örnekleri", "hortor, sequor, loquor, patior", "Yarı Deponent Fiiller (audeo, gaudeo, soleo)" });
            f.vocabKeys.AddRange(new[] { "hortor", "sequor", "loquor", "proficiscor", "morior", "patior", "audeo", "gaudeo", "soleo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Deponent Fiil Nedir? (dēpōnere: Bırakmak, Terk Etmek)",
                html = @"<p><em>Deponent</em> terimi Latince <strong>dēpōnere</strong> (bir kenara bırakmak, terk etmek) fiilinden gelir. Bu fiiller <strong>etken biçimlerini bir kenara bırakmış</strong>, ancak etken anlamlarını korumuş fiillerdir.</p>
<p>Kısacası: <strong>BİÇİMCE EDİLGEN, ANLAMCA ETKENDİR!</strong></p>
<p>Sözlüklerde mastarları <em>-ārī, -ērī, -ī, -īrī</em> ile biter:</p>
<ul>
  <li>1. Çekim: <span class=""lat-word"">hortor</span>, <span class=""lat-word"">hortārī</span>, <span class=""lat-word"">hortātus sum</span> (teşvik etmek)</li>
  <li>2. Çekim: <span class=""lat-word"">vereor</span>, <span class=""lat-word"">verērī</span>, <span class=""lat-word"">veritus sum</span> (korkmak, çekinmek)</li>
  <li>3. Çekim: <span class=""lat-word"">sequor</span>, <span class=""lat-word"">sequī</span>, <span class=""lat-word"">secūtus sum</span> (takip etmek)</li>
  <li>3. Çekim: <span class=""lat-word"">loquor</span>, <span class=""lat-word"">loquī</span>, <span class=""lat-word"">locūtus sum</span> (konuşmak)</li>
  <li>4. Çekim: <span class=""lat-word"">partior</span>, <span class=""lat-word"">partīrī</span>, <span class=""lat-word"">partītus sum</span> (paylaşmak)</li>
</ul>",
                calloutType = "warning",
                calloutTitle = "Çok Önemli Sentaks Kuralı",
                calloutText = "Deponent fiiller biçimce edilgen görünseler de anlamca etken oldukları için CÜMLEDE DÜZ NESNE (Accusativus) ALABİLİRLER!\nÖrnek: Mīlitēs ducem sequuntur = Askerler komutanı takip ediyorlar (ducem: Accusativus nesne!)."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Yarı Deponent Fiiller (Verba Sēmidēpōnentia)",
                html = @"<p>Latincede 4 meşhur fiil vardır ki, Praesens sisteminde normal <strong>etken</strong> biçimlere sahipken, Perfectum sisteminde <strong>deponent (edilgen biçimli)</strong> olurlar:</p>
<ol>
  <li><span class=""lat-word"">audeō</span>, <span class=""lat-word"">audēre</span>, <span class=""lat-word"">ausus sum</span> (cesaret etmek)</li>
  <li><span class=""lat-word"">gaudeō</span>, <span class=""lat-word"">gaudēre</span>, <span class=""lat-word"">gāvīsus sum</span> (sevinmek)</li>
  <li><span class=""lat-word"">soleō</span>, <span class=""lat-word"">solēre</span>, <span class=""lat-word"">solitus sum</span> (âdet edinmek, alışık olmak)</li>
  <li><span class=""lat-word"">fīdō</span>, <span class=""lat-word"">fīdere</span>, <span class=""lat-word"">fīsus sum</span> (güvenmek)</li>
</ol>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Aude sapiens esse!",
                tr = "Bilge olmaya cesaret et! (Horatius)",
                analysis = "Aude (audeo fiilinin tekil emri - Cesaret et!); sapiens (Nom. Sg. - Bilge); esse (Mastar - Olmaya)."
            });

            f.studyTips = "Deponent fiilleri Türkçeye çevirirken asla edilgen (-il/-in) çevirmeyiniz; daima etken çeviriniz: loquitur = konuşuluyor DEĞİL, konuşuyor!";
            list.Add(f);
        }

        // ====================================================================
        // T2_W4: 3. Sınıf Sıfatlar (Adiectiva Declinatio III)
        // ====================================================================
        {
            var f = CreateFasicule(2, 4, 1, "Latince Gramer 2 - Ders Sunumu 4.1.pdf",
                "3. SINIF SIFATLAR (ADIECTIVA DECLINATIO III)",
                "Üç Bitimli (ācer), İki Bitimli (fortis) ve Tek Bitimli (ingēns) Sıfatlar",
                "Bu fasikülde 3. çekim isimlerin takılarını kullanan sıfatları, Nominativus bitim sayılarına göre sınıflandırmayı (üç, iki ve tek bitimli sıfatlar) ve ablativus tekil -ī, çoğul nötr -ia kurallarını öğreneceksiniz.",
                "İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Sınıf Sıfatlar", "Üç Bitimli Sıfatlar (ācer, ācris, ācre)", "İki Bitimli Sıfatlar (fortis, forte)", "Tek Bitimli Sıfatlar (ingēns, ingentis)", "Ablativus -ī ve Çoğul -ia Kuralı" });
            f.vocabKeys.AddRange(new[] { "acer", "fortis", "brevis", "omnis", "gravis", "dulcis", "ingens", "felix", "sapiens", "vetus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Sınıf Sıfatların Üç Grubu",
                html = @"<ol>
  <li><strong>Üç Bitimli Sıfatlar:</strong> Eril, dişil ve nötr için ayrı Nominativus biçimi vardır (-er, -is, -e):
    <ul>
      <li><span class=""lat-word"">ācer</span> (m.), <span class=""lat-word"">ācris</span> (f.), <span class=""lat-word"">ācre</span> (n.) - keskin, şiddetli</li>
      <li><span class=""lat-word"">celer</span> (m.), <span class=""lat-word"">celeris</span> (f.), <span class=""lat-word"">celere</span> (n.) - hızlı</li>
    </ul>
  </li>
  <li><strong>İki Bitimli Sıfatlar:</strong> Eril ve dişil ortak tekil Nominativus (-is), nötr ise (-e) ile biter:
    <ul>
      <li><span class=""lat-word"">fortis</span> (m./f.), <span class=""lat-word"">forte</span> (n.) - cesur, güçlü</li>
      <li><span class=""lat-word"">brevis</span> (m./f.), <span class=""lat-word"">breve</span> (n.) - kısa</li>
      <li><span class=""lat-word"">omnis</span> (m./f.), <span class=""lat-word"">omne</span> (n.) - bütün, her</li>
      <li><span class=""lat-word"">dulcis</span> (m./f.), <span class=""lat-word"">dulce</span> (n.) - tatlı, hoş</li>
    </ul>
  </li>
  <li><strong>Tek Bitimli Sıfatlar:</strong> Her üç cins için de tekil Nominativus ortaktır:
    <ul>
      <li><span class=""lat-word"">ingēns</span>, <span class=""lat-word"">ingentis</span> (m./f./n.) - devasa, muazzam</li>
      <li><span class=""lat-word"">fēlīx</span>, <span class=""lat-word"">fēlīcis</span> (m./f./n.) - mutlu, şanslı</li>
      <li><span class=""lat-word"">sapiēns</span>, <span class=""lat-word"">sapientis</span> (m./f./n.) - bilge, akıllı</li>
    </ul>
  </li>
</ol>",
                calloutType = "rule",
                calloutTitle = "3. Sınıf Sıfatların Özel Çekim Takıları",
                calloutText = "İsimlerden farklı olarak, 3. sınıf sıfatların TAMAMI -i gövdelidir:\n1) Tekil Ablativus her üç cinste de -ī ile biter (fortī, brevī, ingentī).\n2) Nötr Çoğul Nom/Voc/Acc -ia ile biter (fortia, brevia, ingentia).\n3) Çoğul Genetivus -ium ile biter (fortium, brevium, ingentium)."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Fortī virō vīta brevis sed glōria perpetua est.",
                tr = "Cesur adama (için) hayat kısadır, ama şan ebedidir.",
                analysis = "Fortī virō (Dat. Sg. m. - Cesur adama); vīta brevis (Nom. Sg. f. - Kısa hayat); glōria perpetua (Ebedi şan)."
            });

            f.studyTips = "3. sınıf bir sıfat 1. veya 2. çekim bir ismi nitelediğinde ekler farklı görünse bile cins ve hal aynıdır: agricola fortis (Nom. Sg. Eril), agricolae forti (Dat. Sg. Eril).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W7: Sayılar (Numeralia)
        // ====================================================================
        {
            var f = CreateFasicule(2, 7, 1, "Latince Gramer 2 - Ders Sunumu 7.1.pdf",
                "LATİNCEDE SAYILAR (NUMERALIA): SAYMA VE SIRA SAYILARI",
                "Cardinalia (ūnus, duo, trēs, mīlia), Ordinalia, Distributiva ve Kısım Genetivus'u",
                "Bu fasikülde Latincedeki sayma sayılarını, ilk üç sayının (1, 2, 3) ve mīlia (binler) kelimesinin çekimini, sıra ve üleştirme sayılarını ve Kısım Genetivus'u (Genetivus Partitivus) sentaksını öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Sayma Sayıları (Cardinalia)", "ūnus, duo, trēs Çekimi", "mīlle ve mīlia Ayrımı", "Sıra Sayıları (Ordinalia)", "Kısım Genetivus'u (Genetivus Partitivus)" });
            f.vocabKeys.AddRange(new[] { "unus", "duo", "tres", "quattuor", "quinque", "decem", "centum", "mille", "primus", "secundus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Çekimi Olan Sayma Sayıları (1, 2, 3 ve 1000)",
                html = @"<p>Latincede 4'ten 100'e kadar olan sayma sayıları çekimsizdir (değişmez: quattuor, quīnque, decem, centum...). Ancak <strong>1, 2, 3 ve 1000'in çoğulu (mīlia)</strong> çekimlenir:</p>
<ul>
  <li><strong>ūnus, ūna, ūnum:</strong> Tekil Genetivus <em>ūnīus</em>, Dativus <em>ūnī</em> (özel zamir çekimi).</li>
  <li><strong>duo, duae, duo (İki):</strong> Eril/Nötr Dat/Abl: <em>duōbus</em>, Dişil Dat/Abl: <em>duābus</em>.</li>
  <li><strong>trēs, tria (Üç):</strong> 3. sınıf sıfat gibi çekimlenir (Nom: trēs, n. tria; Gen: trium; Dat/Abl: tribus).</li>
  <li><strong>mīlle (Tekil 1000):</strong> Çekimsiz bir sıfattır: <span class=""lat-word"">mīlle mīlitēs</span> (bin asker).</li>
  <li><strong>mīlia (Çoğul Binler):</strong> 3. çekim nötr bir isimdir ve ardından daima Kısım Genetivus'u alır: <span class=""lat-word"">duo mīlia mīlitum</span> (iki bin asker / askerlerin iki bini).</li>
</ul>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Duo mīlia hostium in urbem veniēbant.",
                tr = "Düşmanların iki bini (iki bin düşman) kente geliyordu.",
                analysis = "Duo mīlia (Nom. Pl. n. - İki bin); hostium (Gen. Pl. - Düşmanların / Kısım Genetivusu); veniēbant (Imperfectum 3. Çoğul)."
            });

            f.studyTips = "Tekil mille sıfattır (mille viri), çoğul milia ise isimdir ve yanına tamlayan alır (duo milia virorum).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W8: İlgi Zamiri (qui, quae, quod)
        // ====================================================================
        {
            var f = CreateFasicule(2, 8, 1, "Latince Gramer 2 - Ders Sunumu 8.1.pdf",
                "İLGİ ZAMİRİ VE YAN CÜMLELER (PRONOMEN RELATIVUM)",
                "quī, quae, quod Çekimi, Öncül (Antecedēns) ile Uyum ve İlgi Cümleleri",
                "Bu fasikülde Türkçedeki '-en/-an, -dığı/-diği' sıfat-fiil yan cümlelerinin karşılığı olan İlgi Zamirini (qui, quae, quod), çekim tablosunu ve öncül kelimeyle kurduğu cins/sayı/hal ilişkisini öğreneceksiniz.",
                "İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "İlgi Zamiri (qui, quae, quod)", "İlgi Zamiri Çekim Tablosu", "Öncül (Antecedens) Kuralı", "İlgi Cümlecikleri (Sententiae Relativae)" });
            f.vocabKeys.AddRange(new[] { "qui", "quae", "quod", "cuius", "cui", "quem", "quam", "quo", "quibus", "quorum" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. İlgi Zamirinin Çekim Tablosu",
                html = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>Masculinum (Eril)</th><th>Femininum (Dişil)</th><th>Neutrum (Nötr)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin""><strong>quī</strong></td><td class=""case-cell-latin""><strong>quae</strong></td><td class=""case-cell-latin""><strong>quod</strong></td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin""><strong>cuius</strong></td><td class=""case-cell-latin""><strong>cuius</strong></td><td class=""case-cell-latin""><strong>cuius</strong></td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin""><strong>cui</strong></td><td class=""case-cell-latin""><strong>cui</strong></td><td class=""case-cell-latin""><strong>cui</strong></td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin""><strong>quem</strong></td><td class=""case-cell-latin""><strong>quam</strong></td><td class=""case-cell-latin""><strong>quod</strong></td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin""><strong>quō</strong></td><td class=""case-cell-latin""><strong>quā</strong></td><td class=""case-cell-latin""><strong>quō</strong></td></tr>
      <tr><td><strong>Nom. Pl.</strong></td><td class=""case-cell-latin""><strong>quī</strong></td><td class=""case-cell-latin""><strong>quae</strong></td><td class=""case-cell-latin""><strong>quae</strong></td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin""><strong>quōrum</strong></td><td class=""case-cell-latin""><strong>quārum</strong></td><td class=""case-cell-latin""><strong>quōrum</strong></td></tr>
      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=""case-cell-latin""><strong>quibus</strong></td><td class=""case-cell-latin""><strong>quibus</strong></td><td class=""case-cell-latin""><strong>quibus</strong></td></tr>
      <tr><td><strong>Acc. Pl.</strong></td><td class=""case-cell-latin""><strong>quōs</strong></td><td class=""case-cell-latin""><strong>quās</strong></td><td class=""case-cell-latin""><strong>quae</strong></td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "İlgi Zamirinin Altın Kuralı",
                calloutText = "İlgi zamiri, nitelediği öncül kelimeyle (antecedens) CİNS (Genus) ve SAYI (Numerus) bakımından uyuşur; ancak HALİNİ (Casus) KENDİ İÇİNDE BULUNDUĞU YAN CÜMLENİN sentaks görevinden alır!"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Vir quem vidēs amīcus meus est.",
                tr = "Gördüğün adam benim arkadaşımdır.",
                analysis = "Vir (Öncül: Nom. Sg. Eril); quem (İlgi zamiri: Vir eril tekil olduğu için eril tekil; ama yan cümlede 'görüyorsun' fiilinin nesnesi olduğu için Accusativus halindedir: quem)."
            });

            f.studyTips = "Tekil Genetivus biçiminin 'cuius', Dativus biçiminin ise 'cui' olduğunu ezberleyiniz.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W11: Participium Sistemi
        // ====================================================================
        {
            var f = CreateFasicule(2, 11, 1, "Latince Gramer 2 - Ders Sunumu 11.1.pdf",
                "PARTICIPIUM SİSTEMİ (ORTAÇLAR)",
                "Participium Praesentis Activi, Perfecti Passivi ve Futuri Activi",
                "Bu fasikülde fiilden sıfat ve zarf türeten üç temel ortaç yapısını (Participium Praesentis, Perfecti ve Futuri), yapılışlarını ve cümledeki sentaks işlevlerini öğreneceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Participium Nedir?", "Participium Praesentis Activi (-ns, -ntis)", "Participium Perfecti Passivi (-tus, -ta, -tum)", "Participium Futuri Activi (-tūrus, -a, -um)", "Sıfat ve Zarf İşlevleri" });
            f.vocabKeys.AddRange(new[] { "amans", "audiens", "laudatus", "monitus", "venturus", "moriturus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Latincede Üç Temel Participium",
                html = @"<ol>
  <li><strong>Participium Praesentis Activi (Etken Şimdiki Zaman Ortacı: -ns, -ntis):</strong> Türkçedeki <em>'-en/-an'</em> veya <em>'-erek/-arak, -iken'</em> ekidir. Praesens gövdesine getirilir ve 3. sınıf tek bitimli sıfat gibi çekimlenir:
    <ul>
      <li><span class=""lat-word"">amāns</span>, <span class=""lat-word"">amantis</span> (seven / severken)</li>
      <li><span class=""lat-word"">audiēns</span>, <span class=""lat-word"">audientis</span> (işiten / işitirken)</li>
    </ul>
  </li>
  <li><strong>Participium Perfecti Passivi (Edilgen Geçmiş Zaman Ortacı: -tus, -ta, -tum):</strong> Türkçedeki <em>'-miş, -ilmiş'</em> ekidir. 1-2. sınıf sıfat gibi çekimlenir:
    <ul>
      <li><span class=""lat-word"">laudātus</span>, <span class=""lat-word"">laudāta</span>, <span class=""lat-word"">laudātum</span> (övülmüş)</li>
      <li><span class=""lat-word"">captus</span>, <span class=""lat-word"">capta</span>, <span class=""lat-word"">captum</span> (yakalanmış, ele geçirilmiş)</li>
    </ul>
  </li>
  <li><strong>Participium Futuri Activi (Etken Gelecek Zaman Ortacı: -tūrus, -tūra, -tūrum):</strong> Türkçedeki <em>'-ecek olan, -mek üzere olan'</em> ekidir:
    <ul>
      <li><span class=""lat-word"">laudātūrus</span> (övecek olan / övmek üzere olan)</li>
      <li><span class=""lat-word"">moritūrus</span> (ölecek olan)</li>
    </ul>
  </li>
</ol>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Avē Caesar, moritūrī tē salūtant!",
                tr = "Selam Sezar, ölmek üzere olanlar seni selamlıyor!",
                analysis = "Moritūrī (morior fiilinin Participium Futuri Activi çoğulu - Ölmek üzere olanlar); tē (Acc. - Seni); salūtant (Selamlıyorlar)."
            });

            f.studyTips = "Participium Praesentis Activi'nin tekil Ablativus halinde, eğer sıfat gibi kullanılıyorsa '-ī', eğer zarf gibi (zaman belirterek) kullanılıyorsa '-e' aldığını unutmayınız.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W12: Ablativus Absolutus
        // ====================================================================
        {
            var f = CreateFasicule(2, 12, 1, "Latince Gramer 2 - Ders Sunumu 12.1.pdf",
                "BAĞIMSIZ ABLATIVUS (ABLATĪVUS ABSOLŪTUS)",
                "İsim + Participium Yapısı; Zaman, Neden, Karşıtlık ve Koşul Anlamları",
                "Bu fasikülde klasik Latin edebiyatının en zarif ve en yaygın sentaks yapısı olan Ablatīvus Absolūtus'u (Bağımsız Ablativus), cümledeki ana ögelerden bağımsız kuruluşunu ve Türkçeye zengin çeviri tekniklerini öğreneceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Ablativus Absolutus Mantığı", "İsim + PPP Yapısı", "İsim + PPA Yapısı", "Zaman, Neden, Karşıtlık Anlamları", "Participium'suz Yapılar (Caesare consule)" });
            f.vocabKeys.AddRange(new[] { "absolutus", "consul", "rego", "victus", "imperium", "pax" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Ablatīvus Absolūtus Nedir?",
                html = @"<p><em>Absolūtus</em> kelimesi <strong>absolvere</strong> (çözmek, serbest bırakmak) fiilinden gelir ve 'bağımsız, ana cümlenin ögelerinden serbest kalmış' demektir.</p>
<p>Temel kural: Bir <strong>Ablativus halindeki İsim/Zamir</strong> ile onunla uyumlu <strong>Ablativus halindeki bir Participium</strong> birleşerek bağımsız bir yan cümle oluşturur. Bu yan cümlenin öznesi ana cümlenin öznesi veya nesnesiyle AYNI DEĞİLDİR.</p>
<p>Türkçeye şu 4 ana anlamda aktarılır:</p>
<ol>
  <li><strong>Zaman (-dığı zaman, -ince, -dikten sonra):</strong> <span class=""lat-word"">Urbe captā</span>, hostēs fūgērunt. = Kent ele geçirildikten sonra düşmanlar kaçtı.</li>
  <li><strong>Neden (-dığı için, -den dolayı):</strong> <span class=""lat-word"">Duce vulnerātō</span>, mīlitēs terrēbantur. = Komutan yaralandığı için askerler korkuyordu.</li>
  <li><strong>Karşıtlık (-e rağmen, -diği halde):</strong> <span class=""lat-word"">Multīs repugnantibus</span>, pāx facta est. = Pek çok kişi karşı çıktığı halde barış yapıldı.</li>
  <li><strong>Koşul (-se/-sa, şartıyla):</strong> <span class=""lat-word"">Deō iuvante</span>, vincēmus. = Tanrı yardım ederse zafer kazanacağız.</li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Participium Bulunmayan İstisnai Yapı",
                calloutText = "Latincede 'olmak' (esse) fiilinin şimdiki zaman participium'u (PPA) bulunmadığı için, iki isim veya bir isim ile sıfat doğrudan Ablativus halinde yan yana gelerek bu yapıyı kurar:\nCaesare consule = Caesar konsül iken (Caesar konsül olduğu sırada)\nRomulo rege = Romulus kral iken\nte duce = Sen önderken / Senin önderliğinde."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Caesare duce, Rōmānī Gallōs vīcērunt.",
                tr = "Caesar'ın önderliğinde Romalılar Gallialıları yendiler.",
                analysis = "Caesare duce (Ablativus Absolutus - Caesar önder iken); Rōmānī (Nom. Pl. - Romalılar); Gallōs (Acc. Pl. - Gallialıları); vīcērunt (Perfectum - Yendiler)."
            });

            f.studyTips = "Ablativus Absolutus yapısını tercüme ederken önce zaman (-dikten sonra) anlamını deneyiniz; cümle akışına göre neden veya karşıtlık anlamını tercih ediniz.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W13: Accusativus cum Infinitivo (AcI)
        // ====================================================================
        {
            var f = CreateFasicule(2, 13, 1, "Latince Gramer 2 - Ders Sunumu 13.1.pdf",
                "DOLAYLI ANLATIM VE ACCUSATIVUS CUM INFINITIVO (AcI)",
                "Düşünce, Söyleme ve Algı Fiilleriyle Kurulan Dolaylı Tümce Yapısı",
                "Bu fasikülde Latincedeki dolaylı anlatımın (Oratio Obliqua) kalbi olan Accusativus cum Infinitivo (AcI) yapısını, Infinitivus zamanlarını ve Türkçedeki '-dığını söylemek/düşünmek' yapılarına aktarımını öğreneceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Accusativus cum Infinitivo (AcI)", "Dolaylı Anlatım", "Algılama ve Söyleme Fiilleri", "Infinitivus Zamanları (Praesens, Perfectum, Futurum)", "Zaman Uyumu" });
            f.vocabKeys.AddRange(new[] { "dico", "scio", "credo", "audio", "video", "spero", "puto" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. AcI Yapısının Kuruluşu ve Formülü",
                html = @"<p>Latincede söyleme (dīcere), bilme (scīre), inanma (crēdere), duyma (audīre) ve görme (vidēre) gibi algı ve ifade fiillerinden sonra gelen nesne cümlecikleri <strong>Accusativus cum Infinitivo (AcI)</strong> kalıbıyla kurulur:</p>
<div style=""text-align: center; margin: 1rem 0; font-family: var(--font-serif); font-size: 1.15rem; color: var(--primary); font-weight: bold;"">
  Temel Cümle Yüklemi + [Özne: Accusativus] + [Yüklem: Infinitivus]
</div>
<ul>
  <li>Doğrudan Cümle: <span class=""lat-word"">Amīcus venit.</span> (Arkadaş geliyor.)</li>
  <li>Dolaylı Cümle (AcI): <span class=""lat-word"">Sciō amīcum venīre.</span> = Arkadaşın geldiğini biliyorum.</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Infinitivus Zamanlarının Göreceli Anlamı",
                calloutText = "AcI içindeki Infinitivus zamanı mutlak değil, ana fiile GÖRECELİ zaman bildirir:\n1) Infinitivus Praesentis: Ana fiille EŞZAMANLILIK bildirir (geldiğini / gelmekte olduğunu).\n2) Infinitivus Perfecti: Ana fiilden ÖNCEKİ zamanı bildirir (gelmiş olduğunu / geldiğini).\n3) Infinitivus Futuri: Ana fiilden SONRAKİ (gelecek) zamanı bildirir (geleceğini)."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Crēdō deōs vītam nostram regere.",
                tr = "Tanrıların yaşamımızı yönettiğine inanıyorum.",
                analysis = "Crēdō (İnanıyorum); deōs (AcI Öznesi - Tanrıların); vītam nostram (Nesne - Yaşamımızı); regere (AcI Yüklemi - Yönettiğine)."
            });

            f.studyTips = "AcI yapısını Türkçeye aktarırken Accusativus öznesini Türkçede '-in/-in' (ilgi) haline, Infinitivus yüklemini ise '-dığını/-diğini' sıfat-fiiline dönüştürünüz.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W14: Modus Coniunctivus ve 2. Dönem Sentezi
        // ====================================================================
        {
            var f = CreateFasicule(2, 14, 1, "Latince Gramer 2 - Ders Sunumu 14.1.pdf",
                "DİLEK-İSTEK KİPİ (MODUS CONIUNCTIVUS) VE GENEL DEĞERLENDİRME",
                "Praesens ve Imperfectum Coniunctivi, Ut/Nē ile Amaç Cümleleri ve 2. Dönem Sentezi",
                "Bu fasikülde Latincede sübjektif yargıları, arzuları, dilekleri ve amaçları ifade eden Modus Coniunctivus kipini, temel ve yan cümlelerdeki kullanımlarını ve 2. Dönemin genel gramer sentezini tamamlayacaksınız.",
                "İleri Seviye", "60 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Modus Coniunctivus", "Praesens Coniunctivi", "Imperfectum Coniunctivi", "Ut / Ne Amaç Cümleleri (Finales)", "2. Dönem Genel Sentezi" });
            f.vocabKeys.AddRange(new[] { "ut", "ne", "volo", "nolo", "malo", "fero", "eo", "fio" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Modus Coniunctivus (Dilek / İstek Kipi)",
                html = @"<p>Indicativus nesnel gerçekleri bildirirken, <strong>Coniunctivus</strong> zihinsel tasarıları, olasılıkları, dilekleri ve amaçları anlatır:</p>
<ul>
  <li><strong>Praesens Coniunctivi:</strong> 1. çekimde -ā- sesi -ē- sesine döner (laudem, laudes, laudet...); diğer çekimlerde ise -ā- eklenir (moneam, regam, audiam).</li>
  <li><strong>Imperfectum Coniunctivi:</strong> Fiilin etken mastarının (Infinitivus) sonuna doğrudan şahıs eklerinin (-m, -s, -t, -mus, -tis, -nt) getirilmesiyle son derece kolay bir şekilde yapılır:
    <ul>
      <li><span class=""lat-word"">laudārem</span>, <span class=""lat-word"">laudārēs</span>, <span class=""lat-word"">laudāret</span>...</li>
      <li><span class=""lat-word"">essem</span>, <span class=""lat-word"">essēs</span>, <span class=""lat-word"">esset</span>... (esse fiilinin imperf. coniunctivus'u)</li>
    </ul>
  </li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Ut / Nē ile Amaç Cümlecikleri (Sententiae Finālēs)",
                calloutText = "Amaç bildiren yan cümleler ut (için, diye - olumlu) veya nē (etmesin diye, -memesi için - olumsuz) bağlacı ve Coniunctivus yüklemle kurulur:\nVenit ut urbem videat = Kenti görmek için geliyor.\nVēnēre ut amīcōs adiuvārent = Arkadaşlara yardım etmek için geldiler."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Gaudeāmus igitur, iuvenēs dum sumus!",
                tr = "Öyleyse neşelenelim, henüz genç iken! (Ünlü öğrenci marşı)",
                analysis = "Gaudeāmus (gaudeo fiilinin 1. Çoğul Praesens Coniunctivi'si - Neşelenelim / Sevinelim!); igitur (Öyleyse); dum sumus (İken / Olduğumuz sürece)."
            });

            f.studyTips = "Imperfectum Coniunctivus'u tespit etmenin en pratik yolu mastarın (-re) ardından şahıs ekinin gelip gelmediğine bakmaktır: laudare-m, monere-t, regere-nt.";
            list.Add(f);
        }
    }
}
