using System;
using System.Collections.Generic;

public static partial class FasiculeCatalog {

    public static void BuildTerm1Fasicules(
        List<BuildAuthoritativeFasicules.Fasicule> list,
        Func<string, List<string>> getSlideTexts,
        Dictionary<string, int> docSlideCountMap,
        Dictionary<string, BuildAuthoritativeFasicules.VocabItem> vocabMap
    ) {
        // ====================================================================
        // T1_W1_L2: LatinceGramer1.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 1, 2, "LatinceGramer1.2.pdf",
                "LATİN ALFABESİ, FONETİK VE 1. GRUP İSİMLER (-A, -AE)",
                "Latincenin Tarihsel Evreleri, Diftonglar, İsimlerin 3 Özelliği ve Declinatio I Çekim Tablosu",
                "Bu fasikülde Klasik Latin alfabesinin harf yapısını, sesli ve sessiz harflerin okunuş kurallarını, çiftseslileri (diphthongus), isimlerin hal (casus), sayı (numerus) ve cins (genus) niteliklerini ve 1. Grup İsimlerin (-a, -ae) çekim kurallarını öğreneceksiniz.",
                "Temel Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Latincenin Dönemleri", "Latin Alfabesi", "Sesliler ve Diftonglar", "Casus (6 Hal)", "Numerus ve Genus", "1. Grup İsimler (Declinatio I)", "Kural Dışı Durumlar" });
            f.vocabKeys.AddRange(new[] { "causa", "fama", "iustitia", "gloria", "vita", "anima", "femina", "puella", "historia", "casa", "terra", "ira", "cura", "fabula", "aqua", "via", "pagina", "natura", "patientia", "laetitia", "audacia", "lingua", "sententia", "silva", "insula", "agricola", "nauta", "poeta", "auriga" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Latincenin Tarihsel Dönemleri ve Latin Alfabesi",
                html = @"<p>Latince, Hint-Avrupa dil ailesinin İtalik koluna mensup antik bir dildir. Roma'nın kuruluşu ve yayılmasıyla birlikte Akdeniz havzasının ve tüm Batı dünyasının ortak kültür, hukuk, felsefe ve bilim dili haline gelmiştir.</p>
<p>Latince tarihsel süreçte şu evrelerden geçmiştir:</p>
<ul>
  <li><strong>Arkaik Latince:</strong> İÖ 4. yüzyıl sonu – İÖ 2. yüzyıl başı. Bu dönemde 21 harfli arkaik Latin alfabesi kullanılmıştır.</li>
  <li><strong>Klasik Latince:</strong> İÖ 1. yüzyıl – İS 1. yüzyıl (Cicero, Caesar, Vergilius, Horatius, Ovidius dönemi). Yunancadan geçen kelimelerin (özellikle felsefe ve mitoloji terimleri) transkripsiyonu için <strong>Y</strong> ve <strong>Z</strong> harfleri eklenerek alfabe 23 harfe çıkarılmıştır.</li>
  <li><strong>Geç Dönem & Ortaçağ Latincesi:</strong> Kilise ve üniversite dili olarak varlığını sürdürmüştür.</li>
</ul>",
                calloutType = "info",
                calloutTitle = "23 Harfli Klasik Latin Alfabesi",
                calloutText = "A B C D E F G H I K L M N O P Q R S T V X (ardından Yunancadan giren Y ve Z). Latincede başlangıçta 'W' ve 'J' harfleri bulunmazdı. 'I' harfi hem ünlü (i) hem de ünsüz (y) sesini, 'V' harfi ise hem ünlü (u) hem de ünsüz (v/w) sesini temsil etmekteydi."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Harflerin Okunuşu ve Çiftsesliler (Diphthongus)",
                html = @"<p>Latincede 5 temel sesli harf bulunur: <strong>A, E, I, O, U</strong>. Ayrıca Yunancadan geçen kelimelerde <em>Y</em> harfi ü sesi verir (örn. <span class=""lat-word"">lyra</span>).</p>
<p>İki sesli harfin tek bir hecede birleşerek oluşturduğu çiftsesliler (diftonglar) şu şekildedir:</p>
<ul>
  <li><strong>ae</strong> [ay]: örn. <span class=""lat-word"">carae</span>, <span class=""lat-word"">puellae</span></li>
  <li><strong>au</strong> [av]: örn. <span class=""lat-word"">laudo</span>, <span class=""lat-word"">aurum</span></li>
  <li><strong>oe</strong> [oy]: örn. <span class=""lat-word"">coepit</span>, <span class=""lat-word"">poena</span></li>
  <li><strong>ei</strong> [ey]: örn. <span class=""lat-word"">deinde</span></li>
  <li><strong>eu</strong> [ev]: örn. <span class=""lat-word"">seu</span>, <span class=""lat-word"">Europa</span></li>
  <li><strong>ui</strong> [uy]: örn. <span class=""lat-word"">huius</span>, <span class=""lat-word"">cuius</span></li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Klasik Telaffuz Kuralı",
                calloutText = "Klasik Latincede 'C' harfi ardından gelen sesli ne olursa olsun her zaman sert 'K' sesiyle okunur: Cicero [kikero], Caesar [kaysar]. Benzer şekilde 'G' harfi daima sert 'G' sesi verir."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Dil Yapısı: İsimlerin Üç Temel Özelliği (Casus, Numerus, Genus)",
                html = @"<p>Latincede bir ismin cümlede yüklendiği anlam ve görev <strong>üç temel parametreye</strong> bağlıdır:</p>
<ol>
  <li><strong>Casus (Hal):</strong> Latincede 6 temel hal bulunur. Doç. Dr. Eyüp Çoraklı'nın öğretiminde şu sıralama esas alınır:
    <ul>
      <li><strong>1. Nominativus (nom.):</strong> Yalın hal / Özne hali. 'Kim?' ve 'Ne?' sorularını yanıtlar.</li>
      <li><strong>2. Vocativus (voc.):</strong> Seslenme / Hitap hali. Bir kişiye veya nesneye seslenirken ('Ey...') kullanılır.</li>
      <li><strong>3. Genetivus (gen.):</strong> İyelik / Tamlayan hali (-in hali). Aidiyet, mülkiyet ve isim tamlaması bildirir.</li>
      <li><strong>4. Dativus (dat.):</strong> Yönelme hali (-e hali). 'Kime?' ve 'Neye?' sorularını yanıtlar; dolaylı tümleçtir.</li>
      <li><strong>5. Accusativus (acc.):</strong> Belirtme hali (-i hali). Fiilin doğrudan etkilediği nesnedir; 'Kimi?' ve 'Neyi?' sorularına karşılık gelir.</li>
      <li><strong>6. Ablativus (abl.):</strong> Ayrılma / Çıkma / Vasıta hali (-den hali ve ne ile?). Sebep, araç, yer ve zaman bildirir.</li>
    </ul>
    <em>Ayrıca şehir isimleri ve bazı özel kelimelerde bulunma (-de hali) bildiren <strong>Locativus</strong> hali de mevcuttur (örn. Romae: Roma'da).</em>
  </li>
  <li><strong>Numerus (Sayı):</strong> Singularis (Tekil) ve Pluralis (Çoğul).</li>
  <li><strong>Genus (Cins):</strong> Masculinum (Eril - m.), Femininum (Dişil - f.) ve Neutrum (Cinssiz/Nötr - n.).</li>
</ol>",
                calloutType = "rule",
                calloutTitle = "İsimlerin Sözlük Yazılış Formülü",
                calloutText = "Sözlüklerde bir isim daima 'Tekil Nominativus, Tekil Genetivus Sonu, Cins' şeklinde yazılır: rosa, -ae, f. (gül); servus, -i, m. (köle); bellum, -i, n. (savaş). İkinci sıradaki tekil genetivus eki, ismin hangi çekim grubuna ait olduğunu ve gövdesini gösterir!"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. 1. Grup İsimler (Declinatio I: -a, -ae) Model Çekimi",
                html = @"<p>Tekil Genetivus hali <strong>-ae</strong> ekiyle biten isimlerdir. Birkaç meslek ve özel istisna dışında bu gruptaki isimlerin tamamı <strong>Femininum (Dişil)</strong> cinstedir.</p>
<p>Gövde, Tekil Genetivus halindeki <em>-ae</em> ekinin atılmasıyla elde edilir: <span class=""lat-word"">causa</span> (Tekil Nom.) &gt; <span class=""lat-word"">causae</span> (Tekil Gen.) &gt; Gövde: <strong>caus-</strong>.</p>",
                tableHtml = TableTemplates.NounTable(
                    "causa (Declinatio I)",
                    "causa", "causae", "f.", "neden, sebep",
                    "causa", "causa", "causae", "causae", "causam", "causā",
                    "causae", "causae", "causārum", "causīs", "causās", "causīs",
                    "neden", "nedenler",
                    "ey neden", "ey nedenler",
                    "nedenin", "nedenlerin",
                    "nedene / neden için", "nedenlere / nedenler için",
                    "nedeni", "nedenleri",
                    "nedenle, nedenden", "nedenlerle, nedenlerden",
                    "Tekil Ablativus ekindeki -ā sesi uzundur; Tekil Nominativus ve Vocativus ekindeki -a ise kısadır."
                ),
                calloutType = "warning",
                calloutTitle = "1. Çekimdeki Kural Dışı Durumlar ve Eril İsimler",
                calloutText = "1) Anlamca erkek mesleklerini belirten şu kelimeler -a ile bitmelerine rağmen ERİLDİR (m.): agricola (çiftçi), nauta (denizci), poeta (şair), auriga (atlı araba sürücüsü), pirata (korsan), advena (yabancı), accola (komşu), incola (yerli, m./f.).\n2) dea (tanrıça) ve filia (kız evlat) kelimelerinin Çoğul Dativus ve Ablativus halleri, 2. çekimdeki erkek karşılıklarıyla (deis, filiis) karışmaması için deabus ve filiabus şeklinde biter.\n3) familia kelimesi tekil genetivus halinde familias olarak da kullanılır: pater familias (aile babası)."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Poeta vitam agricolae laudat.",
                tr = "Şair çiftçinin yaşamını över.",
                analysis = "Poeta (1. Çekim Eril, Nom. Sg. - Özne); vitam (vita, -ae f., Acc. Sg. - Belirtili Nesne); agricolae (agricola, -ae m., Gen. Sg. - Tamlayan); laudat (laudo fiili, 3. Tekil Şahıs Praesens - Yüklem)."
            });
            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Incolae insulae nautis causam gloriae narrant.",
                tr = "Adanın yerlileri denizcilere şanın sebebini anlatırlar.",
                analysis = "Incolae (Nom. Pl. - Özne); insulae (Gen. Sg. - Adanın); nautis (Dat. Pl. - Denizcilere); causam (Acc. Sg. - Sebebi); gloriae (Gen. Sg. - Şanın); narrant (3. Çoğul Şahıs Praesens)."
            });

            f.studyTips = "1. çekim isimlerin Tekil Nominativus (-a) ile Tekil Ablativus (-ā) arasındaki tek fark Ablativus'taki 'a' sesinin uzun olmasıdır. Bu durum vezin ve anlam ayrımında hayati önem taşır.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W2_L1: LatinceGramer2.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 2, 1, "LatinceGramer2.1.pdf",
                "FİİLLER (VERBA): SAYI, ZAMAN VE ŞİMDİKİ ZAMAN (PRAESENS)",
                "Fiilin Beş Özelliği, 4 Çekim Grubu, Praesens Gövdesi ve 1-2. Grup Model Çekimleri",
                "Bu fasikülde Latince fiil sisteminin omurgasını oluşturan beş temel kategoriyi (şahıs, sayı, zaman, kip, çatı), fiillerin sözlük yazılışını, fiil gövdesinin bulunmasını ve 1. ile 2. Çekim fiillerin Etken Şimdiki Zaman (Praesens Indicativus Activi) çekimlerini (amo, laudo, moneo, teneo) eksiksiz öğreneceksiniz.",
                "Temel Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Fiilin Beş Özelliği", "Dört Çekim Grubu (Coniugatio)", "Şahıs Ekleri (Personae)", "Praesens Gövdesi", "1. Çekim: amo ve laudo", "2. Çekim: moneo ve teneo", "Zamanların Karşılaştırılması" });
            f.vocabKeys.AddRange(new[] { "laudo", "moneo", "amo", "cogito", "debeo", "do", "erro", "habeo", "servo", "valeo", "voco", "teneo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Fiilin Beş Temel Özelliği (Forma Verbi) & Altı Zaman",
                html = @"<p>Latincede çekimlenmiş her bir fiil şu beş gramatikal bilgiyi aynı anda bünyesinde taşır:</p>
<ol>
  <li><strong>Persona (Şahıs):</strong> 1. Şahıs (ben / biz), 2. Şahıs (sen / siz), 3. Şahıs (o / onlar).</li>
  <li><strong>Numerus (Sayı):</strong> Singularis (Tekil - ben, sen, o) ve Pluralis (Çoğul - biz, siz, onlar).</li>
  <li><strong>Tempus (Zaman):</strong> Latincede 6 zaman mevcuttur:
    <ul>
      <li>1. <em>Praesens:</em> Şimdiki Zaman / Geniş Zaman (seviyorum / severim).</li>
      <li>2. <em>Imperfectum:</em> Şimdiki Zamanın Hikayesi (seviyordum / severdim).</li>
      <li>3. <em>Futurum (Simplex):</em> Gelecek Zaman (seveceğim).</li>
      <li>4. <em>Perfectum:</em> Geçmiş Zaman (sevdim / sevmişim).</li>
      <li>5. <em>Plusquamperfectum:</em> Geçmiş Zamanın Hikayesi (sevmiştim / sevdiydim).</li>
      <li>6. <em>Futurum Exactum (Futurum II):</em> Gelecekte Bitmiş Zaman (sevmiş olacağım).</li>
    </ul>
  </li>
  <li><strong>Modus (Kip):</strong> Indicativus (Haber Kipi), Imperativus (Emir Kipi), Coniunctivus (İstek-Dilek Kipi).</li>
  <li><strong>Vox (Çatı):</strong> Vox Activa (Etken Çatı) ve Vox Passiva (Edilgen Çatı).</li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Evrensel Etken Şahıs Ekleri (Praesens Sistemi)",
                calloutText = "Latincede tüm fiillerin etken şimdiki zaman şahıs ekleri şunlardır:\nTekil: 1. Şahıs -ō / -m (ben), 2. Şahıs -s (sen), 3. Şahıs -t (o)\nÇoğul: 1. Şahıs -mus (biz), 2. Şahıs -tis (siz), 3. Şahıs -nt (onlar)"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Fiillerin Sözlük Yazılışı ve Dört Çekim Grubu",
                html = @"<p>Latince sözlüklerde fiiller verilirken mastar değil, Haber Kipi Etken Çatı Şimdiki Zaman Tekil 1. Şahıs biçimi madde başı yapılır:</p>
<ul>
  <li><strong>1. Grup (-āre):</strong> <span class=""lat-word"">ămo</span>, <span class=""lat-word"">-āre</span>, <span class=""lat-word"">-āvi</span>, <span class=""lat-word"">-ātum</span>, 1, v., sevmek (Gövde: <strong>amā-</strong>)</li>
  <li><strong>2. Grup (-ēre):</strong> <span class=""lat-word"">mŏnĕo</span>, <span class=""lat-word"">-ēre</span>, <span class=""lat-word"">ŭi</span>, <span class=""lat-word"">ĭtum</span>, 2, v., uyarmak (Gövde: <strong>monē-</strong>)</li>
  <li><strong>3. Grup (-ere):</strong> <span class=""lat-word"">lĕgo</span>, <span class=""lat-word"">-ere</span>, <span class=""lat-word"">lēgi</span>, <span class=""lat-word"">lectum</span>, 3, v., okumak (Gövde: <strong>legĕ-</strong>)</li>
  <li><strong>4. Grup (-īre):</strong> <span class=""lat-word"">audĭo</span>, <span class=""lat-word"">-īre</span>, <span class=""lat-word"">īvi</span>, <span class=""lat-word"">ītum</span>, 4, v., işitmek (Gövde: <strong>audī-</strong>)</li>
</ul>
<p><strong>Praesens Gövdesinin Bulunması:</strong> Mastarın sonundaki <em>-re</em> takısı atılarak bulunur: <em>amā-re &gt; amā-</em>; <em>monē-re &gt; monē-</em>.</p>",
                calloutType = "info",
                calloutTitle = "1. Çekimde 1. Tekil Şahıs Kuralı",
                calloutText = "1. çekim fiillerde gövdedeki -ā- sesi ile 1. tekil şahıs eki olan -ō yan yana geldiğinde -ā- sesi erir (kontraksiyon): ama-ō > amō, lauda-ō > laudō olur. Ancak diğer tüm şahıslarda kökteki -ā- muhafaza edilir."
            });

            // 1. Group: amo
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 1. Grup Model Fiil: ămo, -āre (sevmek)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 13 çekim tablosu:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "ămo, -āre (1. Grup)",
                    "ămo", "amāre", "sevmek", "Praesens Indicativus Activi",
                    "am-ō", "amā-s", "ama-t", "amā-mus", "amā-tis", "ama-nt",
                    "seviyorum / severim", "seviyorsun / seversin", "seviyor / sever",
                    "seviyoruz / severiz", "seviyorsunuz / seversiniz", "seviyorlar / severler"
                )
            });

            // 1. Group: laudo
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. 1. Grup Model Fiil: laudō, -āre (övmek, yüceltmek)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 14 çekim tablosu:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "laudō, -āre (1. Grup)",
                    "laudo", "laudāre", "övmek, yüceltmek", "Praesens Indicativus Activi",
                    "laud-ō", "laudā-s", "lauda-t", "laudā-mus", "laudā-tis", "lauda-nt",
                    "övüyorum / överim", "övüyorsun / översin", "övüyor / över",
                    "övüyoruz / överiz", "övüyorsunuz / översiniz", "övüyorlar / överler"
                )
            });

            // 2. Group: moneo
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "5. 2. Grup Model Fiil: mŏnĕo, -ēre (uyarmak)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 17 çekim tablosu:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "mŏnĕo, -ēre (2. Grup)",
                    "moneo", "monēre", "uyarmak", "Praesens Indicativus Activi",
                    "mone-ō", "monē-s", "mone-t", "monē-mus", "monē-tis", "mone-nt",
                    "uyarıyorum / uyarırım", "uyarıyorsun / uyarırsın", "uyarıyor / uyarır",
                    "uyarıyoruz / uyarırız", "uyarıyorsunuz / uyarırsınız", "uyarıyorlar / uyarırlar"
                )
            });

            // 2. Group: teneo
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "6. 2. Grup Model Fiil: teneō, -ēre (tutmak)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 18 çekim tablosu:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "teneō, -ēre (2. Grup)",
                    "teneo", "tenēre", "tutmak", "Praesens Indicativus Activi",
                    "tene-ō", "tenē-s", "tene-t", "tenē-mus", "tenē-tis", "tene-nt",
                    "tutuyorum / tutarım", "tutuyorsun / tutarsın", "tutuyor / tutar",
                    "tutuyoruz / tutarız", "tutuyorsunuz / tutarsınız", "tutuyorlar / tutarlar"
                )
            });

            f.studyTips = "Fiil çekimlerini ezberlerken şahıs eklerini (-ō, -s, -t, -mus, -tis, -nt) bir melodi gibi ritmik olarak tekrarlamak kalıcılığı sağlar.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W2_L2: LatinceGramer2.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 2, 2, "LatinceGramer2.2.pdf",
                "1. VE 2. GRUP FİİLLER: IMPERFECTUM, FUTURUM VE IMPERATIVUS",
                "Şimdiki Zamanın Hikâyesi (-bam), Gelecek Zaman (-bo) ve Emir Kipi Çekimleri",
                "Bu fasikülde 1. ve 2. çekim fiillerin Imperfectum (-ba-) ve Futurum I (-bi-) zamanlarını (amo, laudo, moneo, teneo çekimleriyle), emir kipini (Imperativus Praesentis) ve nōlī/nōlīte olumsuz emir kalıbını eksiksiz tüm paradigmalarıyla göreceksiniz.",
                "Temel Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Imperfectum (-ba- Eki)", "Futurum I (-bi- Eki)", "Imperativus Praesentis", "Olumsuz Emir (Prohibitio)", "amo & laudo Çekimleri", "moneo & teneo Çekimleri" });
            f.vocabKeys.AddRange(new[] { "amo", "laudo", "moneo", "teneo", "do", "voco", "conservo", "erro" });

            // Imperfectum Amo & Laudo
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 1. Grup Fiiller: Imperfectum (ămō & laudō)",
                html = @"<p><strong>Kural (Slayt 3):</strong> Praesens Gövdesi + <em>-bā-</em> + Şahıs Ekleri (-m, -s, -t, -mus, -tis, -nt). <em>Not:</em> -ā ünlüsü -m, -t ve -nt ünsüzlerinden önce kısalır.</p>",
                tableHtml = TableTemplates.VerbTable(
                    "ămō, -āre (1. Grup)",
                    "amo", "amāre", "sevmek", "Imperfectum Indicativus Activi",
                    "amā-ba-m", "amā-bā-s", "amā-ba-t", "amā-bā-mus", "amā-bā-tis", "amā-ba-nt",
                    "seviyordum / severdim", "seviyordun / severdin", "seviyordu / severdi",
                    "seviyorduk / severdik", "seviyordunuz / severdiniz", "seviyorlardı / severlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "laudō, -āre (1. Grup)",
                    "laudo", "laudāre", "övmek", "Imperfectum Indicativus Activi",
                    "laudā-ba-m", "laudā-bā-s", "laudā-ba-t", "laudā-bā-mus", "laudā-bā-tis", "laudā-ba-nt",
                    "övüyordum / överdim", "övüyordun / överdin", "övüyordu / överdi",
                    "övüyorduk / överdik", "övüyordunuz / överdiniz", "övüyorlardı / överlerdi"
                )
            });

            // Imperfectum Moneo & Teneo
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 2. Grup Fiiller: Imperfectum (mŏnĕo & teneō)",
                html = @"<p><strong>Kural (Slayt 7):</strong> Praesens Gövdesi (-ē ile biter) + <em>-bā-</em> + Şahıs Ekleri (-m, -s, -t, -mus, -tis, -nt).</p>",
                tableHtml = TableTemplates.VerbTable(
                    "mŏnĕo, -ēre (2. Grup)",
                    "moneo", "monēre", "uyarmak", "Imperfectum Indicativus Activi",
                    "monē-ba-m", "monē-bā-s", "monē-ba-t", "monē-bā-mus", "monē-bā-tis", "monē-ba-nt",
                    "uyarıyordum / uyarırdım", "uyarıyordun / uyarırdın", "uyarıyordu / uyarırdı",
                    "uyarıyorduk / uyarırdık", "uyarıyordunuz / uyarırdınız", "uyarıyorlardı / uyarırlardı"
                ) + "<br>" + TableTemplates.VerbTable(
                    "teneō, -ēre (2. Grup)",
                    "teneo", "tenēre", "tutmak", "Imperfectum Indicativus Activi",
                    "tenē-ba-m", "tenē-bā-s", "tenē-ba-t", "tenē-bā-mus", "tenē-bā-tis", "tenē-ba-nt",
                    "tutuyordum / tutardım", "tutuyordun / tutardın", "tutuyordu / tutardı",
                    "tutuyorduk / tutardık", "tutuyordunuz / tutardınız", "tutuyorlardı / tutarlardı"
                )
            });

            // Futurum I Amo & Laudo
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 1. Grup Fiiller: Futurum I (ămō & laudō)",
                html = @"<p><strong>Kural (Slayt 11):</strong> Praesens Gövdesi + <em>-bi-</em> + Şahıs Ekleri (-ō, -s, -t, -mus, -tis, -nt).<br><em>Not:</em> 1. tekil şahısta -i ünlüsü düşer (-bō); 3. çoğul şahısta -i ünlüsü -u ünlüsüne dönüşür (-bunt).</p>",
                tableHtml = TableTemplates.VerbTable(
                    "ămō, -āre (1. Grup)",
                    "amo", "amāre", "sevmek", "Futurum Indicativus Activi",
                    "amā-b-ō", "amā-bi-s", "amā-bi-t", "amā-bi-mus", "amā-bi-tis", "amā-bu-nt",
                    "seveceğim", "seveceksin", "sevecek",
                    "seveceğiz", "seveceksiniz", "sevecekler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "laudō, -āre (1. Grup)",
                    "laudo", "laudāre", "övmek", "Futurum Indicativus Activi",
                    "laudā-b-ō", "laudā-bi-s", "laudā-bi-t", "laudā-bi-mus", "laudā-bi-tis", "laudā-bu-nt",
                    "öveceğim", "öveceksin", "övecek",
                    "öveceğiz", "öveceksiniz", "övecekler"
                )
            });

            // Futurum I Moneo & Teneo
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. 2. Grup Fiiller: Futurum I (mŏnĕo & teneō)",
                html = @"<p><strong>Kural (Slayt 15):</strong> Praesens Gövdesi + <em>-bi-</em> + Şahıs Ekleri (-ō, -s, -t, -mus, -tis, -nt).</p>",
                tableHtml = TableTemplates.VerbTable(
                    "mŏnĕo, -ēre (2. Grup)",
                    "moneo", "monēre", "uyarmak", "Futurum Indicativus Activi",
                    "monē-b-ō", "monē-bi-s", "monē-bi-t", "monē-bi-mus", "monē-bi-tis", "monē-bu-nt",
                    "uyaracağım", "uyaracaksın", "uyaracak",
                    "uyaracağız", "uyaracaksınız", "uyaracaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "teneō, -ēre (2. Grup)",
                    "teneo", "tenēre", "tutmak", "Futurum Indicativus Activi",
                    "tenē-b-ō", "tenē-bi-s", "tenē-bi-t", "tenē-bi-mus", "tenē-bi-tis", "tenē-bu-nt",
                    "tutacağım", "tutacaksın", "tutacak",
                    "tutacağız", "tutacaksınız", "tutacaklar"
                )
            });

            // Imperativus
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "5. 1. ve 2. Grup Fiiller: Emir Kipi (Imperativus Praesens)",
                html = @"<p><strong>Kural (Slayt 19):</strong> 1 ve 2. Grup Fiillerin Emir Kipi Tekil 2. Şahıslarının çekimi, söz konusu fiillerin Şimdiki Zaman Gövdeleriyle aynıdır. Çoğul 2. Şahısta ise gövdeye <em>-te</em> eki gelir.</p>",
                tableHtml = TableTemplates.ImperativeTable(
                    "1 ve 2. Grup Fiiller Emir Kipi Tablosu",
                    new[] {
                        new[] { "ămo, -āre", "sevmek", "amā (Sev!)", "amā-te (Seviniz!)", "nōlī amāre (Sevme!)", "nōlīte amāre (Sevmeyiniz!)" },
                        new[] { "laudō, -āre", "övmek", "laudā (Öv!)", "laudā-te (Övünüz!)", "nōlī laudāre (Övme!)", "nōlīte laudāre (Övmeyiniz!)" },
                        new[] { "mŏnĕo, -ēre", "uyarmak", "monē (Uyar!)", "monē-te (Uyarınız!)", "nōlī monēre (Uyar!)", "nōlīte monēre (Uyarmayınız!)" },
                        new[] { "teneō, -ēre", "tutmak", "tenē (Tut!)", "tenē-te (Tutunuz!)", "nōlī tenēre (Tutma!)", "nōlīte tenēre (Tutmayınız!)" }
                    },
                    "Olumsuz emir (Prohibitio) nōlī / nōlīte + Infinitivus (Mastar) yapısıyla kurulur."
                )
            });

            f.studyTips = "Imperfectum ekindeki '-ba-' ve Futurum ekindeki '-b-' heceleri fiilin zamanını tanımanın en kesin anahtarlarıdır.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W3_L1: LatinceGramer3.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 3, 1, "LatinceGramer3.1.pdf",
                "2. GRUP İSİMLER (DECLINATIO II: -US, -ER, -IR, -UM)",
                "Eril ve Nötr Çekimler, 'e' Düşüren ve Koruyan İsimler ve Mukayese Tabloları",
                "Bu fasikülde Tekil Genetivus hali -ī ile biten 2. Grup isimleri, bu gruptaki eril (-us, -er, -ir) ve nötr (-um) kelimeleri, Eyüp Hoca'nın ders slaytlarında verdiği 9 model ismin (populus, puer, vir, lucifer, magister, ager, liber, bellum, templum, consilium) ve 3 mukayese tablosunun tamamını göreceksiniz.",
                "Temel Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "2. Grup İsimler (Declinatio II)", "Eril İsimler (-us)", "-er ile Bitenler ('e' Koruyan ve Düşüren)", "vir, viri (-ir)", "Nötr İsimler (-um)", "Evrensel Nötr Kuralı", "Üçlü Karşılaştırma" });
            f.vocabKeys.AddRange(new[] { "populus", "puer", "vir", "lucifer", "magister", "ager", "liber", "bellum", "templum", "consilium", "amicus" });

            // 1. populus
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. -us ile Biten Eril İsim: populus, -ī, m. (halk)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 7 çekim tablosu:</p>",
                tableHtml = TableTemplates.NounTable(
                    "populus (2. Grup Eril)",
                    "populus", "populī", "m.", "halk",
                    "populus", "popule", "populī", "populō", "populum", "populō",
                    "populī", "populī", "populōrum", "populīs", "populōs", "populīs",
                    "halk", "halklar",
                    "ey halk", "ey halklar",
                    "halkın", "halkların",
                    "halka / halk için", "halklara / halklar için",
                    "halkı", "halkları",
                    "halkla / halktan", "halklarla / halklardan",
                    "Tekil Vocativus hali -e ile biter: popule!"
                )
            });

            // 2. puer & vir & lucifer ('e' koruyanlar)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. -er ve -ir ile Biten, 'e' Sesini Koruyan Eril İsimler",
                html = @"<p><strong>Kural (Slayt 8-11):</strong> Tekil Nominativus hali <em>-er</em> veya <em>-ir</em> ile biter. Tekil Vocativus hali Nominativus ile aynıdır (puer! vir!). Gövdedeki 'e' sesi çekim boyunca korunur.</p>",
                tableHtml = TableTemplates.NounTable(
                    "puer (2. Grup Eril - 'e' Koruyan)",
                    "puer", "puerī", "m.", "erkek çocuk, oğlan",
                    "puer", "puer", "puerī", "puerō", "puerum", "puerō",
                    "puerī", "puerī", "puerōrum", "puerīs", "puerōs", "puerīs",
                    "erkek çocuk", "erkek çocuklar",
                    "ey çocuk", "ey çocuklar",
                    "çocuğun", "çocukların",
                    "çocuğa", "çocuklara",
                    "çocuğu", "çocukları",
                    "çocukla / çocuktan", "çocuklarla / çocuklardan"
                ) + "<br>" + TableTemplates.NounTable(
                    "vir (2. Grup Eril - -ir)",
                    "vir", "virī", "m.", "erkek, adam",
                    "vir", "vir", "virī", "virō", "virum", "virō",
                    "virī", "virī", "virōrum", "virīs", "virōs", "virīs",
                    "adam", "adamlar",
                    "ey adam", "ey adamlar",
                    "adamın", "adamların",
                    "adama", "adamlara",
                    "adamı", "adamları",
                    "adamla / adamdan", "adamlarla / adamlardan"
                ) + "<br>" + TableTemplates.NounTable(
                    "lucifer (2. Grup Eril - 'e' Koruyan)",
                    "lucifer", "luciferī", "m.", "sabah yıldızı",
                    "lucifer", "lucifer", "luciferī", "luciferō", "luciferum", "luciferō",
                    "luciferī", "luciferī", "luciferōrum", "luciferīs", "luciferōs", "luciferīs",
                    "sabah yıldızı", "sabah yıldızları",
                    "ey sabah yıldızı", "ey sabah yıldızları",
                    "sabah yıldızının", "sabah yıldızlarının",
                    "sabah yıldızına", "sabah yıldızlarına",
                    "sabah yıldızını", "sabah yıldızlarını",
                    "sabah yıldızıyla", "sabah yıldızlarıyla"
                )
            });

            // 3. magister & ager & liber ('e' düşürenler)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. -er ile Biten, Gövdelerindeki 'e' Sesi Düşen Eril İsimler",
                html = @"<p><strong>Kural (Slayt 12-14):</strong> Tekil Nominativus ve Vocativus dışında, Tekil Genetivus'tan itibaren gövdedeki 'e' sesi düşer (magister &gt; magistrī &gt; gövde: <strong>magistr-</strong>; ager &gt; agrī &gt; gövde: <strong>agr-</strong>; liber &gt; librī &gt; gövde: <strong>libr-</strong>).</p>",
                tableHtml = TableTemplates.NounTable(
                    "magister (2. Grup Eril - 'e' Düşen)",
                    "magister", "magistrī", "m.", "öğretmen",
                    "magister", "magister", "magistrī", "magistrō", "magistrum", "magistrō",
                    "magistrī", "magistrī", "magistrōrum", "magistrīs", "magistrōs", "magistrīs",
                    "öğretmen", "öğretmenler",
                    "ey öğretmen", "ey öğretmenler",
                    "öğretmenin", "öğretmenlerin",
                    "öğretmene", "öğretmenlere",
                    "öğretmeni", "öğretmenleri",
                    "öğretmenle", "öğretmenlerle"
                ) + "<br>" + TableTemplates.NounTable(
                    "ager (2. Grup Eril - 'e' Düşen)",
                    "ager", "agrī", "m.", "tarla",
                    "ager", "ager", "agrī", "agrō", "agrum", "agrō",
                    "agrī", "agrī", "agrōrum", "agrīs", "agrōs", "agrīs",
                    "tarla", "tarlalar",
                    "ey tarla", "ey tarlalar",
                    "tarlanın", "tarlaların",
                    "tarlaya", "tarlalara",
                    "tarlayı", "tarlaları",
                    "tarlayla", "tarlalarla"
                ) + "<br>" + TableTemplates.NounTable(
                    "liber (2. Grup Eril - 'e' Düşen)",
                    "liber", "librī", "m.", "kitap",
                    "liber", "liber", "librī", "librō", "librum", "librō",
                    "librī", "librī", "librōrum", "librīs", "librōs", "librīs",
                    "kitap", "kitaplar",
                    "ey kitap", "ey kitaplar",
                    "kitabın", "kitapların",
                    "kitaba", "kitaplara",
                    "kitabı", "kitapları",
                    "kitapla", "kitaplarla"
                )
            });

            // 4. Comparison puer vs liber
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Karşılaştırma: -e Sesi Düşen ve Düşmeyen Eril İsimler",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 15 karşılaştırma tablosu:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "2. Grup İsimler: puer (-e koruyan) vs liber (-e düşen)",
                    "Slayt 15",
                    new[] { "Casus (Hal)", "Sg. (-e düşmeyen)", "Sg. (-e düşen)", "Pl. (-e düşmeyen)", "Pl. (-e düşen)" },
                    new[] {
                        new[] { "Nominativus", "puer", "liber", "puer-ī", "libr-ī" },
                        new[] { "Vocativus", "puer", "liber", "puer-ī", "libr-ī" },
                        new[] { "Genetivus", "puer-ī", "libr-ī", "puer-ōrum", "libr-ōrum" },
                        new[] { "Dativus", "puer-ō", "libr-ō", "puer-īs", "libr-īs" },
                        new[] { "Accusativus", "puer-um", "libr-um", "puer-ōs", "libr-ōs" },
                        new[] { "Ablativus", "puer-ō", "libr-ō", "puer-īs", "libr-īs" }
                    }
                )
            });

            // 5. Neutrum bellum, templum, consilium
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "5. 2. Grup Cinssiz (Neutrum) İsimler: bellum, templum, consilium",
                html = @"<p><strong>Evrensel Nötr Kuralı (Slayt 16-19):</strong> Tekil Nom, Voc, Acc takısı <em>-um</em>; Çoğul Nom, Voc, Acc takısı ise daima kısa <em>-a</em> ile biter!</p>",
                tableHtml = TableTemplates.NounTable(
                    "bellum (2. Grup Nötr)",
                    "bellum", "bellī", "n.", "savaş",
                    "bell-um", "bell-um", "bell-ī", "bell-ō", "bell-um", "bell-ō",
                    "bell-a", "bell-a", "bell-ōrum", "bell-īs", "bell-a", "bell-īs",
                    "savaş", "savaşlar",
                    "ey savaş", "ey savaşlar",
                    "savaşın", "savaşların",
                    "savaşa / savaş için", "savaşlara / savaşlar için",
                    "savaşı", "savaşları",
                    "savaşla / savaştan", "savaşlarla / savaşlardan"
                ) + "<br>" + TableTemplates.NounTable(
                    "templum (2. Grup Nötr)",
                    "templum", "templī", "n.", "tapınak",
                    "templ-um", "templ-um", "templ-ī", "templ-ō", "templ-um", "templ-ō",
                    "templ-a", "templ-a", "templ-ōrum", "templ-īs", "templ-a", "templ-īs",
                    "tapınak", "tapınaklar",
                    "ey tapınak", "ey tapınaklar",
                    "tapınağın", "tapınakların",
                    "tapınağa / için", "tapınaklara / için",
                    "tapınağı", "tapınakları",
                    "tapınakla / tapınaktan", "tapınaklarla / tapınaklardan"
                ) + "<br>" + TableTemplates.NounTable(
                    "consilium (2. Grup Nötr)",
                    "consilium", "consiliī", "n.", "karar, plan, tasarı",
                    "consili-um", "consili-um", "consili-ī", "consili-ō", "consili-um", "consili-ō",
                    "consili-a", "consili-a", "consili-ōrum", "consili-īs", "consili-a", "consili-īs",
                    "karar / tasarı", "kararlar / tasarılar",
                    "ey karar", "ey kararlar",
                    "kararın", "kararların",
                    "karara", "kararlara",
                    "kararı", "kararları",
                    "kararla", "kararlarla"
                )
            });

            // 6. Comparisons 2 & 3
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "6. 2. Grup İsimlerin Büyük Mukayese Tabloları",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 20 ve 21 karşılaştırma tabloları:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Karşılaştırma: amicus (-us Eril) vs templum (-um Nötr)",
                    "Slayt 20",
                    new[] { "Casus", "Sg. (-us)", "Sg. (-um)", "Pl. (-us)", "Pl. (-um)" },
                    new[] {
                        new[] { "Nominativus", "amic-us", "templ-um", "amic-ī", "templ-a" },
                        new[] { "Vocativus", "amic-e", "templ-um", "amic-ī", "templ-a" },
                        new[] { "Genetivus", "amic-ī", "templ-ī", "amic-ōrum", "templ-ōrum" },
                        new[] { "Dativus", "amic-ō", "templ-ō", "amic-īs", "templ-īs" },
                        new[] { "Accusativus", "amic-um", "templ-um", "amic-ōs", "templ-a" },
                        new[] { "Ablativus", "amic-ō", "templ-ō", "amic-īs", "templ-īs" }
                    }
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Karşılaştırma: amicus (-us) vs puer (-er) vs templum (-um)",
                    "Slayt 21",
                    new[] { "Casus", "Sg. (-us)", "Sg. (-er)", "Sg. (-um)", "Pl. (-us)", "Pl. (-er)", "Pl. (-um)" },
                    new[] {
                        new[] { "Nom.", "amic-us", "puer", "templ-um", "amic-ī", "puer-ī", "templ-a" },
                        new[] { "Voc.", "amic-e", "puer", "templ-um", "amic-ī", "puer-ī", "templ-a" },
                        new[] { "Gen.", "amic-ī", "puer-ī", "templ-ī", "amic-ōrum", "puer-ōrum", "templ-ōrum" },
                        new[] { "Dat.", "amic-ō", "puer-ō", "templ-ō", "amic-īs", "puer-īs", "templ-īs" },
                        new[] { "Acc.", "amic-um", "puer-um", "templ-um", "amic-ōs", "puer-ōs", "templ-a" },
                        new[] { "Abl.", "amic-ō", "puer-ō", "templ-ō", "amic-īs", "puer-īs", "templ-īs" }
                    }
                )
            });

            f.studyTips = "Nötr isimlerde çoğul Nom, Voc, Acc takısının daima '-a' olduğunu unutmayınız. Bu '-a' dişil tekille karıştırılmamalıdır.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W3_L2: LatinceGramer3.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 3, 2, "LatinceGramer3.2.pdf",
                "2. VE 1. GRUP İSİMLERDE İSTİSNALAR VE ÖZEL ÇEKİMLER",
                "filius, deus, liber Çekimleri, 1. Grup Tekrarı, Eril İsimler (poeta) ve Grekçe İsimler (Aeneas)",
                "Bu fasikülde 2. gruptaki özel isimleri (filius Vocativus istisnası, deus düzensiz çoğul biçimleri), 1. gruptaki eril meslek isimlerini (poeta) ve Grekçe çekim kalıntılarını (Aeneas) tüm ders slaytı tablolarıyla öğreneceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "filius Çekimi (Voc. fili)", "deus Çekimi (di / dis)", "liber, libri Tekrar", "1. Grup Tekrar (causa)", "1. Grup Eril İsimler (poeta)", "Grekçe İsimler (Aeneas)" });
            f.vocabKeys.AddRange(new[] { "filius", "deus", "liber", "causa", "poeta", "Aeneas" });

            // filius & deus
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 2. Grup İstisnalar: filius ve deus",
                html = @"<p><strong>filius (Slayt 4):</strong> Tekil Vocativus hali <em>fili</em>, Tekil Genetivus hali <em>filii</em> veya <em>fili</em> olur.<br><strong>deus (Slayt 6):</strong> Tekil Vocativus <em>deus</em>; Çoğul Nom/Voc <em>deī / diī / dī</em>; Çoğul Dat/Abl <em>deīs / diīs / dīs</em> olur.</p>",
                tableHtml = TableTemplates.NounTable(
                    "fīlius, -ī, m. (oğul, evlat)",
                    "fīlius", "fīliī", "m.", "oğul, evlat",
                    "fīli-us", "fīl-ī", "fīli-ī / fīl-ī", "fīli-ō", "fīli-um", "fīli-ō",
                    "fīli-ī", "fīli-ī", "fīli-ōrum", "fīli-īs", "fīli-ōs", "fīli-īs",
                    "oğul", "oğullar",
                    "ey oğul", "ey oğullar",
                    "oğulun", "oğulların",
                    "oğula", "oğullara",
                    "oğulu", "oğulları",
                    "oğulla", "oğullarla",
                    "Tekil Vocativus fili!"
                ) + "<br>" + TableTemplates.NounTable(
                    "deus, -ī, m. (tanrı)",
                    "deus", "deī", "m.", "tanrı",
                    "deus", "deus", "deī", "deō", "deum", "deō",
                    "deī / diī / dī", "deī / diī / dī", "deōrum", "deīs / diīs / dīs", "deōs", "deīs / diīs / dīs",
                    "tanrı", "tanrılar",
                    "ey tanrı", "ey tanrılar",
                    "tanrının", "tanrıların",
                    "tanrıya", "tanrılara",
                    "tanrıyı", "tanrıları",
                    "tanrıyla", "tanrılarla",
                    "Çoğul biçimlerdeki ikincil ve üçüncül alternatiflere dikkat ediniz."
                )
            });

            // 1. Group Review & Poeta & Aeneas
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 1. Grup İstisnalar: Eril İsimler (poeta) ve Grekçe İsimler (Aeneas)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 15 ve 19 tabloları:</p>",
                tableHtml = TableTemplates.NounTable(
                    "poēta, -ae, m. (1. Grup Eril İsim)",
                    "poēta", "poētae", "m.", "şair",
                    "poēt-a", "poēt-a", "poēt-ae", "poēt-ae", "poēt-am", "poēt-ā",
                    "poēt-ae", "poēt-ae", "poēt-ārum", "poēt-īs", "poēt-ās", "poēt-īs",
                    "şair", "şairler",
                    "ey şair", "ey şairler",
                    "şairin", "şairlerin",
                    "şaire", "şairlere",
                    "şairi", "şairleri",
                    "şairle", "şairlerle",
                    "1. grupta olmasına rağmen anlamı gereği ERİLDİR (m.)."
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Aenēās, -ae, m. (Grekçe Çekimli İsim)",
                    "Slayt 19",
                    new[] { "Casus (Hal)", "Singularis (Tekil)" },
                    new[] {
                        new[] { "Nominativus (Nom.)", "Aenēās (Grek Nom.) / Aenēa" },
                        new[] { "Vocativus (Voc.)", "Aenēa" },
                        new[] { "Genetivus (Gen.)", "Aenēae" },
                        new[] { "Dativus (Dat.)", "Aenēae" },
                        new[] { "Accusativus (Acc.)", "Aenēān (Grek Acc.) / Aenēam" },
                        new[] { "Ablativus (Abl.)", "Aenēā" }
                    },
                    "Grekçe kökenli isimler Klasik Latincede Grekçe -as ve -an takılarını sıklıkla korurlar."
                )
            });

            f.studyTips = "filius kelimesinin Vocativus hali fili, deus kelimesinin Vocativus hali deus şeklindedir; bunları standart kurallardan ayıran özel yapılardır.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W4_L1: LatinceGramer4.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 4, 1, "LatinceGramer4.1.pdf",
                "1. VE 2. SINIF SIFATLAR VE İSİM-SIFAT TAMLAMALARI",
                "bonus, miser, niger Modelleri, Sıfat Tamlaması ve İsim Tamlaması Çekimi",
                "Bu fasikülde 1. ve 2. sınıf sıfatların üç cins çekimini (-us, -a, -um; -er, -era, -erum; -er, -ra, -rum), isim-sıfat tamlamalarının (epistula longa) ve iki isimden oluşan tamlamaların (philosophi liber) tüm hallerdeki çekimini göreceksiniz.",
                "Temel Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "1. ve 2. Sınıf Sıfatlar", "bonus, bona, bonum", "miser, misera, miserum", "niger, nigra, nigrum", "Sıfat Tamlaması Çekimi", "İsim Tamlaması Çekimi" });
            f.vocabKeys.AddRange(new[] { "bonus", "miser", "niger", "epistula", "longus", "philosophus", "liber" });

            // bonus, bona, bonum
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Eril Nominativus'u -us ile Biten Sıfatlar: bonus, bona, bonum",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 5 çekim tablosu:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "bonus, bona, bonum (iyi)", "Slayt 5",
                    "bon-us", "bon-a", "bon-um",
                    "bon-e", "bon-a", "bon-um",
                    "bon-ī", "bon-ae", "bon-ī",
                    "bon-ō", "bon-ae", "bon-ō",
                    "bon-um", "bon-am", "bon-um",
                    "bon-ō", "bon-ā", "bon-ō",
                    "iyi", "iyinin", "iyiye", "iyiyi", "iyiyle",
                    "Singularis (Tekil)"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "bonus, bona, bonum (iyi)", "Slayt 5",
                    "bon-ī", "bon-ae", "bon-a",
                    "bon-ī", "bon-ae", "bon-a",
                    "bon-ōrum", "bon-ārum", "bon-ōrum",
                    "bon-īs", "bon-īs", "bon-īs",
                    "bon-ōs", "bon-ās", "bon-a",
                    "bon-īs", "bon-īs", "bon-īs",
                    "iyiler", "iyilerin", "iyilere", "iyileri", "iyilerle",
                    "Pluralis (Çoğul)"
                )
            });

            // miser & niger
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Eril Nominativus'u -er ile Biten Sıfatlar: miser & niger",
                html = @"<p><strong>Slayt 6-7:</strong> Gövdelerindeki -e sesini koruyanlar (miser, misera, miserum) ve düşürenler (niger, nigra, nigrum):</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "miser, misera, miserum ('e' Koruyan - zavallı)", "Slayt 6",
                    "miser", "miser-a", "miser-um",
                    "miser", "miser-a", "miser-um",
                    "miser-ī", "miser-ae", "miser-ī",
                    "miser-ō", "miser-ae", "miser-ō",
                    "miser-um", "miser-am", "miser-um",
                    "miser-ō", "miser-ā", "miser-ō",
                    "zavallı", "zavallının", "zavallıya", "zavallıyı", "zavallıyla",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "niger, nigra, nigrum ('e' Düşüren - siyah)", "Slayt 7",
                    "niger", "nigr-a", "nigr-um",
                    "niger", "nigr-a", "nigr-um",
                    "nigr-ī", "nigr-ae", "nigr-ī",
                    "nigr-ō", "nigr-ae", "nigr-ō",
                    "nigr-um", "nigr-am", "nigr-um",
                    "nigr-ō", "nigr-ā", "nigr-ō",
                    "siyah", "siyahın", "siyaha", "siyahı", "siyahla",
                    "Singularis"
                )
            });

            // Tamlama Cekimleri: epistula longa & philosophi liber
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Tamlama Çekimleri: Sıfat Tamlaması ve İsim Tamlaması",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 9, 17 ve 18 tabloları:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Sıfat Tamlaması Çekimi: epistula longa (uzun mektup)",
                    "Slayt 9",
                    new[] { "Casus (Hal)", "Singularis (Tekil)", "Pluralis (Çoğul)", "Türkçe Anlamı" },
                    new[] {
                        new[] { "Nom.", "epistula longa", "epistulae longae", "uzun mektup / uzun mektuplar" },
                        new[] { "Voc.", "epistula longa", "epistulae longae", "ey uzun mektup / ey uzun mektuplar" },
                        new[] { "Gen.", "epistulae longae", "epistulārum longārum", "uzun mektubun / uzun mektupların" },
                        new[] { "Dat.", "epistulae longae", "epistulīs longīs", "uzun mektuba / uzun mektuplara" },
                        new[] { "Acc.", "epistulam longam", "epistulās longās", "uzun mektubu / uzun mektupları" },
                        new[] { "Abl.", "epistulā longā", "epistulīs longīs", "uzun mektupla / uzun mektuplarla" }
                    }
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "İsim Tamlaması Çekimi: philosophi liber vs philosophorum liber",
                    "Slayt 17-18",
                    new[] { "Casus", "Tekil Tamlayan (filozofun kitabı)", "Çoğul Tamlayan (filozofların kitabı)" },
                    new[] {
                        new[] { "Nom.", "philosophī liber", "philosophōrum liber" },
                        new[] { "Voc.", "philosophī liber", "philosophōrum liber" },
                        new[] { "Gen.", "philosophī librī", "philosophōrum librī" },
                        new[] { "Dat.", "philosophī librō", "philosophōrum librō" },
                        new[] { "Acc.", "philosophī librum", "philosophōrum librum" },
                        new[] { "Abl.", "philosophī librō", "philosophōrum librō" }
                    },
                    "İsim tamlamasında tamlayan (Genetivus) halini korurken, tamlanan isim cümlenin gerektirdiği hale göre çekimlenir."
                )
            });

            f.studyTips = "Bir sıfat tamlamasında sıfatın ismin arkasına gelmesi kuraldır; ancak özel bir vurgu veya edebi anlatımda başa geçebilir.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W4_L2: LatinceGramer4.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 4, 2, "LatinceGramer4.2.pdf",
                "DÜZENSİZ SIFATLAR (UNUS NAUTA) VE ESSE (OLMAK) FİİLİ",
                "Zamir Değeri Taşıyan Dokuz Sıfatın Çekimi, esse Praesens Çekimi ve Örnek Cümleler",
                "Bu fasikülde Tekil Genetivus hali -īus ve Tekil Dativus hali -ī ile biten meşhur UNUS NAUTA düzensiz sıfatlarını (unus, nullus, ullus, solus, neuter, alius, uter, totus, alter) ve düzensiz esse (olmak) fiilinin Şimdiki Zaman (Praesens) çekimini tüm tablolarıyla öğreneceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "UNUS NAUTA Sıfatları", "Tekil Genetivus (-īus) & Dativus (-ī)", "unus, nullus, ullus, solus", "neuter, alius, uter, totus, alter", "esse (sum) Fiili", "Örnek Cümle Analizleri" });
            f.vocabKeys.AddRange(new[] { "unus", "nullus", "ullus", "solus", "neuter", "alius", "uter", "totus", "alter", "sum" });

            // UNUS NAUTA 1: unus, nullus, ullus, solus
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. UNUS NAUTA Sıfatları (1. Kısım: ūnus, nūllus, ūllus, sōlus)",
                html = @"<p><strong>Genel Kural:</strong> Bu sıfatların Tekil Genetivus halleri her üç cinste de <strong>-īus</strong>, Tekil Dativus halleri ise her üç cinste de <strong>-ī</strong> ile biter. Diğer halleri 1. ve 2. sınıf sıfatlar gibidir. Çoğullarında hiçbir düzensizlik yoktur.</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "ūnus, ūna, ūnum (bir, tek)", "Slayt 7",
                    "ūnus", "ūna", "ūnum",
                    "—", "—", "—",
                    "ūnīus", "ūnīus", "ūnīus",
                    "ūnī", "ūnī", "ūnī",
                    "ūnum", "ūnam", "ūnum",
                    "ūnō", "ūnā", "ūnō",
                    "bir / tek", "birin", "bire", "biri", "birle",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "nūllus, nūlla, nūllum (hiçbir)", "Slayt 8",
                    "nūllus", "nūlla", "nūllum",
                    "—", "—", "—",
                    "nūllīus", "nūllīus", "nūllīus",
                    "nūllī", "nūllī", "nūllī",
                    "nūllum", "nūllam", "nūllum",
                    "nūllō", "nūllā", "nūllō",
                    "hiçbir", "hiçbirinin", "hiçbirine", "hiçbirini", "hiçbiriyle",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "ūllus, ūlla, ūllum (herhangi bir, hiç)", "Slayt 9",
                    "ūllus", "ūlla", "ūllum",
                    "—", "—", "—",
                    "ūllīus", "ūllīus", "ūllīus",
                    "ūllī", "ūllī", "ūllī",
                    "ūllum", "ūllam", "ūllum",
                    "ūllō", "ūllā", "ūllō",
                    "herhangi bir", "herhangi birinin", "herhangi birine", "herhangi birini", "herhangi biriyle",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "sōlus, sōla, sōlum (yalnız, tek)", "Slayt 10",
                    "sōlus", "sōla", "sōlum",
                    "—", "—", "—",
                    "sōlīus", "sōlīus", "sōlīus",
                    "sōlī", "sōlī", "sōlī",
                    "sōlum", "sōlam", "sōlum",
                    "sōlō", "sōlā", "sōlō",
                    "yalnız / bir tek", "yalnızın", "yıldıza", "yalnızı", "yalnızla",
                    "Singularis"
                )
            });

            // UNUS NAUTA 2: neuter, alius, uter, totus, alter
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. UNUS NAUTA Sıfatları (2. Kısım: neuter, alius, uter, tōtus, alter)",
                html = @"<p><strong>Özel Durumlar (Slayt 11-15):</strong><br>• <em>alius</em> cinssiz tekil hali <strong>aliud</strong> biçimindedir. Tekil Genetivus için genellikle <em>alterīus</em> kullanılır.<br>• <em>neuter</em> ve <em>uter</em> kelimeleri iki şey arasındaki seçimi belirtir.</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "neuter, neutra, neutrum (ne biri ne diğeri)", "Slayt 11",
                    "neuter", "neutra", "neutrum",
                    "—", "—", "—",
                    "neutrīus", "neutrīus", "neutrīus",
                    "neutrī", "neutrī", "neutrī",
                    "neutrum", "neutram", "neutrum",
                    "neutrō", "neutrā", "neutrō",
                    "ikisi de değil", "ikisinin de değil", "ikisine de değil", "ikisini de değil", "ikisiyle de değil",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "alius, alia, aliud (başka, öteki)", "Slayt 12",
                    "alius", "alia", "aliud",
                    "—", "—", "—",
                    "alterīus", "alterīus", "alterīus",
                    "aliī", "aliī", "aliī",
                    "alium", "aliam", "aliud",
                    "aliō", "aliā", "aliō",
                    "başka / diğer", "başkasının", "başkasına", "başkasını", "başkasıyla",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "uter, utra, utrum (ikiden hangisi/biri)", "Slayt 13",
                    "uter", "utra", "utrum",
                    "—", "—", "—",
                    "utrīus", "utrīus", "utrīus",
                    "utrī", "utrī", "utrī",
                    "utrum", "utram", "utrum",
                    "utrō", "utrā", "utrō",
                    "ikisinden biri", "ikisinden birinin", "ikisinden birine", "ikisinden birini", "ikisinden biriyle",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "tōtus, tōta, tōtum (bütün, tüm)", "Slayt 14",
                    "tōtus", "tōta", "tōtum",
                    "—", "—", "—",
                    "tōtīus", "tōtīus", "tōtīus",
                    "tōtī", "tōtī", "tōtī",
                    "tōtum", "tōtam", "tōtum",
                    "tōtō", "tōtā", "tōtō",
                    "bütün / tüm", "bütünün", "bütüne", "bütünü", "bütünle",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "alter, altera, alterum (öteki, diğeri)", "Slayt 15",
                    "alter", "altera", "alterum",
                    "—", "—", "—",
                    "alterīus", "alterīus", "alterīus",
                    "alterī", "alterī", "alterī",
                    "alterum", "alteram", "alterum",
                    "alterō", "alterā", "alterō",
                    "öteki / diğer", "ötekinin", "ötekine", "ötekini", "ötekiyle",
                    "Singularis"
                )
            });

            // ESSE Fiili
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Düzensiz Fiil: sum, esse, fuī, futūrum (olmak)",
                html = @"<p><strong>Modus Indicativus, Vox Activa, Praesens (Slayt 18):</strong> Düzensiz çekimli olan esse fiilinin şimdiki zaman çekimi Türkçedeki '-dir/-dır' ek eylemine ve 'var olmak' anlamına karşılık gelir:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "sum, esse (olmak)",
                    "sum", "esse", "olmak, bulunmak, var olmak", "Praesens Indicativus Activi",
                    "sum", "es", "est", "sumus", "estis", "sunt",
                    "oluyorum / varım(dır)", "oluyorsun / varsın(dır)", "oluyor / var(dır)",
                    "oluyoruz / varız(dır)", "oluyorsunuz / varsınız(dır)", "oluyorlar / varlar(dır)"
                ),
                calloutType = "rule",
                calloutTitle = "İsim Cümlelerinde Yüklem Uyumu",
                calloutText = "esse fiiliyle kurulan cümlelerde özne ile yüklem (predicativum) hal bakımından daima aynı halde (Nominativus) olur: Vergilius est poeta (Vergilius bir şairdir). Dona sunt magna (Hediyeler büyüktür)."
            });

            f.studyTips = "UNUS NAUTA kısaltmasını ezberleyiniz: Unus, Nullus, Ullus, Solus, Neuter, Alius, Uter, Totus, Alter.";
            list.Add(f);
        }

        // Build remaining Term 1 fasicules (Weeks 5 to 14)
        BuildTerm1RemainingFasicules(list, getSlideTexts, docSlideCountMap, vocabMap);
    }
}
