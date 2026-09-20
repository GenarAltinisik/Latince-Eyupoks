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
                "ŞİMDİKİ ZAMANIN HİKÂYESİ (IMPERFECTUM)",
                "Modus Indicativus Vox Activa Imperfectum: -bam, -bās, -bat Ekleri ve Geçmişte Süreklilik",
                "Bu fasikülde geçmişte devam eden, alışkanlık bildiren veya tekrarlanan eylemleri ifade eden Şimdiki Zamanın Hikâyesini (Imperfectum), fiil gövdesine getirilen -ba- zaman ekini ve 1. ile 2. çekim fiillerdeki çekimlerini öğreneceksiniz.",
                "Orta Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Imperfectum Zamanı", "Zaman Eki (-ba-)", "Geçmişte Süreklilik ve Alışkanlık", "laudābam Çekimi", "monēbam Çekimi" });
            f.vocabKeys.AddRange(new[] { "laudo", "moneo", "saepe", "heri", "supero", "maneo", "adiuvo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Imperfectum Zamanının Anlamı ve İşlevi",
                html = @"<p>Latincede <strong>Imperfectum</strong> zamanı, geçmişte tamamlanmamış, bir süre devam etmiş, alışkanlık haline gelmiş veya kesintiye uğramış eylemleri anlatır. Türkçeye genellikle <em>'-yordu'</em> veya <em>'-ardı/-erdi'</em> şeklinde aktarılır:</p>
<ul>
  <li><span class=""lat-word"">Nautam monēbam.</span> = Denizciyi uyarıyordum.</li>
  <li><span class=""lat-word"">Nautam saepe monēbam.</span> = Denizciyi sık sık uyarırdım (alışkanlık).</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Imperfectum Oluşturma Formülü",
                calloutText = "Praesens Gövdesi + -ba- (Zaman Eki) + Şahıs Ekleri (-m, -s, -t, -mus, -tis, -nt)\nDikkat: 1. tekil şahısta -ō yerine -m eki kullanılır: lauda-ba-m."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Imperfectum Çekim Tablosu (1. ve 2. Çekim)",
                html = @"<p>1. çekimde gövdedeki -ā-, 2. çekimde ise -ē- sesi korunur:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs</th><th>1. Çekim: laudāre (övmek)</th><th>2. Çekim: monēre (uyarmak)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=""case-cell-latin"">laudā-<strong>bam</strong></td><td class=""case-cell-latin"">monē-<strong>bam</strong></td><td>övüyordum / överdim</td></tr>
      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=""case-cell-latin"">laudā-<strong>bās</strong></td><td class=""case-cell-latin"">monē-<strong>bās</strong></td><td>övüyordun / överdin</td></tr>
      <tr><td><strong>3. Sg. (O)</strong></td><td class=""case-cell-latin"">laudā-<strong>bat</strong></td><td class=""case-cell-latin"">monē-<strong>bat</strong></td><td>övüyordu / överdi</td></tr>
      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=""case-cell-latin"">laudā-<strong>bāmus</strong></td><td class=""case-cell-latin"">monē-<strong>bāmus</strong></td><td>övüyorduk / överdik</td></tr>
      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=""case-cell-latin"">laudā-<strong>bātis</strong></td><td class=""case-cell-latin"">monē-<strong>bātis</strong></td><td>övüyordunuz / överdiniz</td></tr>
      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=""case-cell-latin"">laudā-<strong>bant</strong></td><td class=""case-cell-latin"">monē-<strong>bant</strong></td><td>övüyorlardı / överlerdi</td></tr>
    </tbody>
  </table>
</div>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Poētae vītam agricolae laudābant.",
                tr = "Şairler çiftçinin yaşamını övüyorlardı.",
                analysis = "Poētae (Nom. Pl. m. - Şairler); vītam (Acc. Sg. f. - Yaşamı); agricolae (Gen. Sg. m. - Çiftçinin); laudābant (3. Çoğul Imperfectum - Övüyorlardı)."
            });
            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Magister puerōs in agrīs vocābat.",
                tr = "Öğretmen çocukları tarlalarda çağırıyordu.",
                analysis = "Magister (Nom. Sg. - Öğretmen); puerōs (Acc. Pl. - Çocukları); vocābat (3. Tekil Imperfectum)."
            });

            f.studyTips = "Imperfectum eklerinin ortasındaki '-ba-' hecesi Türkçedeki '-ba-şlıyordu' çağrışımıyla kolayca akılda tutulabilir.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W5_L2: LatinceGramer5.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 5, 2, "LatinceGramer5.2.pdf",
                "GELECEK ZAMAN (FUTURUM I - 1. VE 2. ÇEKİM)",
                "Modus Indicativus Vox Activa Futurum: -bō, -bis, -bit Ekleri ve Soru Kalıpları",
                "Bu fasikülde 1. ve 2. çekim fiillerde Gelecek Zaman (Futurum I) yapılışını, şahıs eklerindeki bağlayıcı ünlü değişimlerini (-i-, -u-) ve Latincede soru cümlelerinin kuruluşunu inceleyeceksiniz.",
                "Orta Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Gelecek Zaman (Futurum I)", "1. ve 2. Çekimde -bo/-bis/-bit", "Bağlayıcı Ünlüler", "laudābō Çekimi", "Soru Edatları (-ne, nonne, num)" });
            f.vocabKeys.AddRange(new[] { "cras", "propter", "culpa", "remedium", "supero", "valeo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 1. ve 2. Çekimde Futurum I Yapılışı",
                html = @"<p>1. ve 2. çekim fiillerde gelecek zaman, Praesens gövdesine <strong>-b-</strong> gelecek zaman sesinin ve sırasıyla <em>-ō, -is, -it, -imus, -itis, -unt</em> şahıs eklerinin getirilmesiyle yapılır:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs</th><th>1. Çekim: laudāre (övmek)</th><th>2. Çekim: monēre (uyarmak)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=""case-cell-latin"">laudā-<strong>bō</strong></td><td class=""case-cell-latin"">monē-<strong>bō</strong></td><td>öveceğim</td></tr>
      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=""case-cell-latin"">laudā-<strong>bis</strong></td><td class=""case-cell-latin"">monē-<strong>bis</strong></td><td>öveceksin</td></tr>
      <tr><td><strong>3. Sg. (O)</strong></td><td class=""case-cell-latin"">laudā-<strong>bit</strong></td><td class=""case-cell-latin"">monē-<strong>bit</strong></td><td>övecek</td></tr>
      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=""case-cell-latin"">laudā-<strong>bimus</strong></td><td class=""case-cell-latin"">monē-<strong>bimus</strong></td><td>öveceğiz</td></tr>
      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=""case-cell-latin"">laudā-<strong>bitis</strong></td><td class=""case-cell-latin"">monē-<strong>bitis</strong></td><td>öveceksiniz</td></tr>
      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=""case-cell-latin"">laudā-<strong>bunt</strong></td><td class=""case-cell-latin"">monē-<strong>bunt</strong></td><td>övecekler</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "warning",
                calloutTitle = "Önemli Kural Uyarısı",
                calloutText = "-bō, -bis, -bit ekleri YALNIZCA 1. ve 2. çekim fiiller için geçerlidir! 3. ve 4. çekim fiillerde gelecek zaman bambaşka bir kuralla (-am, -es, -et) yapılacaktır."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Latincede Soru Cümleleri",
                html = @"<p>Latincede soru sormak için cümlenin ilk kelimesine bitişik yazılan soru eki kullanılır:</p>
<ul>
  <li><strong>-ne (Enklitik Soru Eki):</strong> Cümlenin en önemli kelimesine eklenir; tarafsız bir 'mı/mi?' sorusudur: <span class=""lat-word"">Habēbimusne multōs virōs?</span> (Pek çok adama sahip olacak mıyız?).</li>
  <li><strong>nōnne:</strong> 'Değil mi?' anlamında, olumlu yanıt beklenen sorularda kullanılır.</li>
  <li><strong>num:</strong> Olumsuz yanıt beklenen sorularda kullanılır ('Acaba ... mı? Yoksa değil mi?').</li>
</ul>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Perīcula bellī nōn sunt parva, sed patria tua tē vocābit.",
                tr = "Savaşın tehlikeleri küçük değildir, ama senin vatanın seni çağıracaktır.",
                analysis = "Perīcula bellī (Nom. Pl. n. - Savaşın tehlikeleri); nōn sunt parva (Küçük değildir); sed (Fakat); patria tua (Nom. Sg. f. - Senin vatanın); tē (Acc. - Seni); vocābit (3. Tekil Futurum - Çağıracaktır)."
            });
            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Propter culpās malōrum patria nostra nōn valēbit.",
                tr = "Kötülerin suçları yüzünden vatanımız güçlü olmayacaktır.",
                analysis = "Propter culpās (propter + Acc. - Suçları yüzünden); malōrum (Gen. Pl. - Kötülerin); valēbit (3. Tekil Futurum - Güçlü olacaktır)."
            });

            f.studyTips = "3. çoğul şahısta ekin '-bunt' olduğuna dikkat ediniz (Imperfectum'daki '-bant' ile karıştırılmamalıdır).";
            list.Add(f);
        }

        // ====================================================================
        // T1_W6_L1: LatinceGramer6.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 6, 1, "LatinceGramer6.1.pdf",
                "DÜZENSİZ FİİLLER 1: ESSE (OLMAK)",
                "sum, esse, fuī, futūrum: Praesens, Imperfectum ve Futurum Çekimleri",
                "Bu fasikülde Latin dilinin en temel ve en sık kullanılan yardımcı fiili olan 'olmak' (esse) fiilini, kök değişimlerini ve üç temel zamandaki çekimlerini kavrayacaksınız.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Düzensiz Fiiller", "esse Fiili", "sum, esse, fui, futurum", "Praesens (sum, es, est...)", "Imperfectum (eram, eras...)", "Futurum (ero, eris...)" });
            f.vocabKeys.AddRange(new[] { "sum", "otium", "exitium", "basium", "animus", "dignus", "stultus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. esse (Olmak) Fiilinin Temel Parçaları",
                html = @"<p>Latince sözlüklerde <em>esse</em> fiili şu şekilde yer alır: <strong>sum, esse, fuī, futūrum</strong> (olmak, var olmak). Hint-Avrupa kökenli iki ayrı kökten türediği için kök değişimleri gösterir (es- ve fu- kökleri).</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs</th><th>Praesens (Şimdiki/Geniş)</th><th>Imperfectum (Hikâye)</th><th>Futurum I (Gelecek)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=""case-cell-latin""><strong>sum</strong> (oluyorum / varım)</td><td class=""case-cell-latin""><strong>eram</strong> (oluyordum / vardım)</td><td class=""case-cell-latin""><strong>erō</strong> (olacağım)</td></tr>
      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=""case-cell-latin""><strong>es</strong> (oluyorsun / varsın)</td><td class=""case-cell-latin""><strong>erās</strong> (oluyordun / vardın)</td><td class=""case-cell-latin""><strong>eris</strong> (olacaksın)</td></tr>
      <tr><td><strong>3. Sg. (O)</strong></td><td class=""case-cell-latin""><strong>est</strong> (oluyor / var / -dir)</td><td class=""case-cell-latin""><strong>erat</strong> (oluyordu / vardı)</td><td class=""case-cell-latin""><strong>erit</strong> (olacak)</td></tr>
      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=""case-cell-latin""><strong>sumus</strong> (oluyoruz / varız)</td><td class=""case-cell-latin""><strong>erāmus</strong> (oluyorduk / vardık)</td><td class=""case-cell-latin""><strong>erimus</strong> (olacağız)</td></tr>
      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=""case-cell-latin""><strong>estis</strong> (oluyorsunuz / varsınız)</td><td class=""case-cell-latin""><strong>erātis</strong> (oluyordunuz / vardınız)</td><td class=""case-cell-latin""><strong>eritis</strong> (olacaksınız)</td></tr>
      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=""case-cell-latin""><strong>sunt</strong> (oluyorlar / varlar / -dirler)</td><td class=""case-cell-latin""><strong>erant</strong> (oluyorlardı / vardılar)</td><td class=""case-cell-latin""><strong>erunt</strong> (olacaklar)</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "Yüklem İsim Tamlayanı (Praedicativum)",
                calloutText = "esse fiili geçişsiz bir bağ fiildir (kopula). Bu nedenle hiçbir zaman nesne (Accusativus) almaz! 'A, B'dir' derken her iki isim de Nominativus halinde bulunur: Vita est supplicium (Hayat bir cezadır)."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Vīta est nihil sine amīcitiā.",
                tr = "Dostluk olmadan hayat bir hiçtir.",
                analysis = "Vīta (Nom. Sg. f. - Hayat); est (3. Tekil Praesens - -dir); nihil (Nom. n. - Hiç); sine amīcitiā (sine + Abl. - Dostluk olmadan)."
            });
            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Malī sunt in nostrō numerō et dē exitiō bonōrum cōgitant.",
                tr = "Aramızda kötüler var ve iyi insanların yıkımını tasarlıyorlar.",
                analysis = "Malī (Nom. Pl. m. - Kötü insanlar); sunt (Var / Vardırlar); in nostrō numerō (Aramızda / Sayımız içinde); cōgitant (Düşünüyorlar)."
            });

            f.studyTips = "Imperfectum ve Futurum çekimlerinde gövdenin er- olduğunu fark ediniz: eram, eras, erat / ero, eris, erit.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W6_L2: LatinceGramer6.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 6, 2, "LatinceGramer6.2.pdf",
                "DÜZENSİZ FİİLLER 2: POSSE (-EBİLMEK) VE ESSE KALIPLARI",
                "possum, posse, potuī: Bileşik Fiil Yapısı, Esse + Gen. ve Esse + Dat. Kalıpları",
                "Bu fasikülde 'potis' (muktedir) sıfatı ile 'esse' fiilinin birleşiminden doğan posse fiilini, ses benzeşmesi kurallarını, Latince mülkiyet bildiren özel sentaks kalıplarını öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "posse Fiili", "Ses Benzeşmesi (pot- + s- > pos-)", "possum Çekimi", "Esse + Genetivus (Aitlik)", "Esse + Dativus (Sahiplik)" });
            f.vocabKeys.AddRange(new[] { "possum", "remaneo", "conservo", "invidia", "sustineo", "angustus", "sanus", "otium" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. posse Fiilinin Yapısı ve Ses Benzeşmesi (Assimilatio)",
                html = @"<p><em>Posse</em> fiili, 'muktedir, gücü yeten' anlamına gelen <strong>potis</strong> sıfat kökü (<strong>pot-</strong>) ile <strong>esse</strong> fiilinin birleşiminden oluşmuştur.</p>
<p><strong>Benzeşme Kuralı:</strong> Gövdedeki <em>-t-</em> sesi, <em>-s-</em> sesiyle başlayan takılar önünde <em>-s-</em> sesine dönüşür: <strong>pot-sum &gt; pos-sum</strong>.</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs</th><th>Praesens (Şimdiki Zaman)</th><th>Imperfectum (Hikâye)</th><th>Futurum I (Gelecek)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Sg.</strong></td><td class=""case-cell-latin""><strong>pos-sum</strong> (-ebilirim)</td><td class=""case-cell-latin""><strong>pot-eram</strong> (-ebilirdim)</td><td class=""case-cell-latin""><strong>pot-erō</strong> (-ebileceğim)</td></tr>
      <tr><td><strong>2. Sg.</strong></td><td class=""case-cell-latin""><strong>pot-es</strong> (-ebilirsin)</td><td class=""case-cell-latin""><strong>pot-erās</strong> (-ebilirdin)</td><td class=""case-cell-latin""><strong>pot-eris</strong> (-ebileceksin)</td></tr>
      <tr><td><strong>3. Sg.</strong></td><td class=""case-cell-latin""><strong>pot-est</strong> (-ebilir)</td><td class=""case-cell-latin""><strong>pot-erat</strong> (-ebilirdi)</td><td class=""case-cell-latin""><strong>pot-erit</strong> (-ebilecek)</td></tr>
      <tr><td><strong>1. Pl.</strong></td><td class=""case-cell-latin""><strong>pos-sumus</strong> (-ebiliriz)</td><td class=""case-cell-latin""><strong>pot-erāmus</strong> (-ebilirdik)</td><td class=""case-cell-latin""><strong>pot-erimus</strong> (-ebileceğiz)</td></tr>
      <tr><td><strong>2. Pl.</strong></td><td class=""case-cell-latin""><strong>pot-estis</strong> (-ebilirsiniz)</td><td class=""case-cell-latin""><strong>pot-erātis</strong> (-ebilirdiniz)</td><td class=""case-cell-latin""><strong>pot-eritis</strong> (-ebileceksiniz)</td></tr>
      <tr><td><strong>3. Pl.</strong></td><td class=""case-cell-latin""><strong>pos-sunt</strong> (-ebilirler)</td><td class=""case-cell-latin""><strong>pot-erant</strong> (-ebilirlerdi)</td><td class=""case-cell-latin""><strong>pot-erunt</strong> (-ebilecekler)</td></tr>
    </tbody>
  </table>
</div>"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Esse ile Kurulan Özel Sahiplik / Aidiyet Kalıpları",
                html = @"<ol>
  <li><strong>ESSE + GENETIVUS (Aidiyet Bildirir):</strong> Bir nesnenin kime ait olduğunu veya kime yakıştığını ifade eder:
    <ul>
      <li><span class=""lat-word"">Equus est agricolae.</span> = At çiftçinindir (çiftçiye aittir).</li>
      <li><span class=""lat-word"">Casa est Rōmānōrum.</span> = Ev Romalılara aittir.</li>
      <li><span class=""lat-word"">Culpa erit puerī.</span> = Suç çocuğun olacaktır.</li>
    </ul>
  </li>
  <li><strong>ESSE + DATIVUS (Sahiplik Bildirir - Dativus Possessivus):</strong> Türkçedeki '...-ın ...-ı var' kalıbının Latince karşılığıdır:
    <ul>
      <li><span class=""lat-word"">Sunt dōna servō.</span> = Kölenin hediyeleri var (Hediyeler köle içindir).</li>
      <li><span class=""lat-word"">Librī erunt puerō.</span> = Çocuğun kitapları olacak.</li>
      <li><span class=""lat-word"">Agrī erant agricolae.</span> = Çiftçinin tarlaları vardı.</li>
    </ul>
  </li>
</ol>",
                calloutType = "info",
                calloutTitle = "Dativus Possessivus Çeviri Tekniği",
                calloutText = "Mihi est liber cümlesi kelimesi kelimesine 'Bana bir kitap vardır' demektir, ancak Türkçeye daima 'Benim bir kitabım var' şeklinde aktarılmalıdır."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Amīcī nostrī poterant superāre multa perīcula.",
                tr = "Bizim arkadaşlarımız pek çok tehlikenin üstesinden gelebiliyordu.",
                analysis = "Amīcī nostrī (Nom. Pl. - Arkadaşlarımız); poterant (3. Çoğul Imperfectum - Gelebiliyordu); superāre (Mastar - Üstesinden gelmek); multa perīcula (Acc. Pl. - Pek çok tehlikeyi)."
            });

            f.studyTips = "possum fiili anlamını daima bir mastarla (Infinitivus) tamamlar: possum videre (görebilirim), possum superare (alt edebilirim).";
            list.Add(f);
        }

        // Add Weeks 9, 10, 11, 12, 13, 14
        BuildTerm1AdvancedFasicules(list, getSlideTexts, docSlideCountMap, vocabMap);
    }
}
