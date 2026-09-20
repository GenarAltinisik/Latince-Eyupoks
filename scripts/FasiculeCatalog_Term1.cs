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
                "Latincenin Dönemleri, Diftonglar, İsimlerin Üç Özelliği ve Declinatio I Çekim Tablosu",
                "Bu fasikülde Klasik Latin alfabesinin harf yapısını, sesli ve sessiz harflerin okunuş kurallarını, çiftseslileri (diphthongus), isimlerin hal (casus), sayı (numerus) ve cins (genus) niteliklerini ve 1. Grup İsimlerin (-a, -ae) çekim kurallarını öğreneceksiniz.",
                "Temel Seviye", "50 dakika", docSlideCountMap);

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
                title = "4. 1. Grup İsimler (Declinatio I: -a, -ae)",
                html = @"<p>Tekil Genetivus hali <strong>-ae</strong> ekiyle biten isimlerdir. Birkaç meslek ve özel istisna dışında bu gruptaki isimlerin tamamı <strong>Femininum (Dişil)</strong> cinstedir.</p>
<p>Gövde, Tekil Genetivus halindeki <em>-ae</em> ekinin atılmasıyla elde edilir: <span class=""lat-word"">causa</span> (Tekil Nom.) &gt; <span class=""lat-word"">causae</span> (Tekil Gen.) &gt; Gövde: <strong>caus-</strong>.</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr>
        <th>Casus (Hal)</th>
        <th>Singularis (Tekil)</th>
        <th>Pluralis (Çoğul)</th>
        <th>Türkçe Karşılığı</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Nominativus (Nom.)</strong></td><td class=""case-cell-latin"">caus-<strong>a</strong></td><td class=""case-cell-latin"">caus-<strong>ae</strong></td><td>neden / nedenler</td></tr>
      <tr><td><strong>Vocativus (Voc.)</strong></td><td class=""case-cell-latin"">caus-<strong>a</strong></td><td class=""case-cell-latin"">caus-<strong>ae</strong></td><td>ey neden / ey nedenler</td></tr>
      <tr><td><strong>Genetivus (Gen.)</strong></td><td class=""case-cell-latin"">caus-<strong>ae</strong></td><td class=""case-cell-latin"">caus-<strong>ārum</strong></td><td>nedenin / nedenlerin</td></tr>
      <tr><td><strong>Dativus (Dat.)</strong></td><td class=""case-cell-latin"">caus-<strong>ae</strong></td><td class=""case-cell-latin"">caus-<strong>īs</strong></td><td>nedene / nedenlere</td></tr>
      <tr><td><strong>Accusativus (Acc.)</strong></td><td class=""case-cell-latin"">caus-<strong>am</strong></td><td class=""case-cell-latin"">caus-<strong>ās</strong></td><td>nedeni / nedenleri</td></tr>
      <tr><td><strong>Ablativus (Abl.)</strong></td><td class=""case-cell-latin"">caus-<strong>ā</strong></td><td class=""case-cell-latin"">caus-<strong>īs</strong></td><td>nedenle, nedenden / nedenlerle</td></tr>
    </tbody>
  </table>
</div>",
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
                "FİİLLER (VERBA): ŞAHIS, ZAMAN VE ŞİMDİKİ ZAMAN (PRAESENS)",
                "Fiilin Beş Özelliği, 4 Çekim Grubu ve Praesens Indicativus Activi Çekim Sistemi",
                "Bu fasikülde Latince fiil sisteminin omurgasını oluşturan beş temel kategoriyi (şahıs, sayı, zaman, kip, çatı), fiillerin sözlük yazılışını, fiil gövdesinin bulunmasını ve 1. ile 2. Çekim fiillerin Etken Şimdiki Zaman (Praesens Indicativus Activi) çekimlerini öğreneceksiniz.",
                "Temel Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Fiilin Beş Özelliği", "Dört Çekim Grubu (Coniugatio)", "Şahıs Ekleri (Personae)", "Praesens Gövdesi", "1. Çekim (-are)", "2. Çekim (-ēre)", "Model Çekimler: laudo, moneo" });
            f.vocabKeys.AddRange(new[] { "laudo", "moneo", "amo", "cogito", "debeo", "do", "erro", "habeo", "servo", "valeo", "voco" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Fiilin Beş Temel Özelliği (Forma Verbi)",
                html = @"<p>Latincede çekimlenmiş her bir fiil şu beş gramatikal bilgiyi aynı anda bünyesinde taşır:</p>
<ol>
  <li><strong>Persona (Şahıs):</strong> 1. Şahıs (ben / biz), 2. Şahıs (sen / siz), 3. Şahıs (o / onlar).</li>
  <li><strong>Numerus (Sayı):</strong> Singularis (Tekil) ve Pluralis (Çoğul).</li>
  <li><strong>Tempus (Zaman):</strong> Latincede 6 temel zaman bulunur. Praesens (Şimdiki/Geniş Zaman), Imperfectum (Şimdiki Zamanın Hikayesi), Futurum I (Gelecek Zaman), Perfectum (Geçmiş Zaman), Plusquamperfectum (Önceki Geçmiş Zaman), Futurum Exactum (Gelecek Bitmiş Zaman).</li>
  <li><strong>Modus (Kip):</strong> Indicativus (Haber Kipi - gerçeği bildirir), Imperativus (Emir Kipi), Coniunctivus (Dilek-İstek Kipi).</li>
  <li><strong>Vox (Çatı):</strong> Vox Activa (Etken Çatı - özne işi yapar) ve Vox Passiva (Edilgen Çatı - özne işten etkilenir).</li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Evrensel Etken Şahıs Ekleri (Praesens Sistemi)",
                calloutText = "Latincede tüm düzenli fiillerin etken şimdiki zaman şahıs ekleri şunlardır:\nTekil: 1. Şahıs -ō / -m (ben), 2. Şahıs -s (sen), 3. Şahıs -t (o)\nÇoğul: 1. Şahıs -mus (biz), 2. Şahıs -tis (siz), 3. Şahıs -nt (onlar)"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Dört Çekim Grubu ve Fiil Gövdesinin Bulunması",
                html = @"<p>Latincede fiiller mastar (Infinitivus) sonlanışlarına göre <strong>4 ayrı çekim grubuna (coniugatio)</strong> ayrılır:</p>
<ul>
  <li><strong>1. Çekim Grubu (-āre):</strong> Mastarı <em>-āre</em> ile biter: <span class=""lat-word"">laudō</span>, <span class=""lat-word"">laudāre</span> (övmek). Praesens gövdesi: <strong>laudā-</strong>.</li>
  <li><strong>2. Çekim Grubu (-ēre):</strong> Mastarı uzun <em>-ēre</em> ile biter: <span class=""lat-word"">moneō</span>, <span class=""lat-word"">monēre</span> (uyarmak). Praesens gövdesi: <strong>monē-</strong>.</li>
  <li><strong>3. Çekim Grubu (-ere):</strong> Mastarı kısa <em>-ere</em> ile biter: <span class=""lat-word"">regō</span>, <span class=""lat-word"">regere</span> (yönetmek).</li>
  <li><strong>4. Çekim Grubu (-īre):</strong> Mastarı uzun <em>-īre</em> ile biter: <span class=""lat-word"">audiō</span>, <span class=""lat-word"">audīre</span> (işitmek).</li>
</ul>
<p><strong>Praesens Gövdesinin Bulunması:</strong> Mastar halindeki <em>-re</em> ekinin atılmasıyla fiilin şimdiki zaman gövdesi elde edilir.</p>",
                calloutType = "info",
                calloutTitle = "1. Çekimde 1. Tekil Şahıs Kuralı",
                calloutText = "1. çekim fiillerde gövdedeki -ā- sesi ile 1. tekil şahıs eki olan -ō yan yana geldiğinde -ā- sesi erir (kontraksiyon): lauda-ō > laudō olur. Ancak diğer tüm şahıslarda kökteki -ā- muhafaza edilir: lauda-s, lauda-t, lauda-mus, lauda-tis, lauda-nt."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Praesens Indicativus Activi (Haber Kipi, Etken Çatı, Şimdiki Zaman)",
                html = @"<p>Hem Türkçedeki <em>Şimdiki Zamanı (-iyor)</em> hem de <em>Geniş Zamanı (-er/-ir)</em> ifade eder.</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr>
        <th>Şahıs & Sayı</th>
        <th>1. Çekim: laudō, -āre (övmek)</th>
        <th>2. Çekim: moneō, -ēre (uyarmak)</th>
        <th>Türkçe Anlamı</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Singularis (Ben)</strong></td><td class=""case-cell-latin"">laud-<strong>ō</strong></td><td class=""case-cell-latin"">mon-<strong>eō</strong></td><td>övüyorum / överim</td></tr>
      <tr><td><strong>2. Singularis (Sen)</strong></td><td class=""case-cell-latin"">laud-<strong>ās</strong></td><td class=""case-cell-latin"">mon-<strong>ēs</strong></td><td>övüyorsun / översin</td></tr>
      <tr><td><strong>3. Singularis (O)</strong></td><td class=""case-cell-latin"">laud-<strong>at</strong></td><td class=""case-cell-latin"">mon-<strong>et</strong></td><td>övüyor / över</td></tr>
      <tr><td><strong>1. Pluralis (Biz)</strong></td><td class=""case-cell-latin"">laud-<strong>āmus</strong></td><td class=""case-cell-latin"">mon-<strong>ēmus</strong></td><td>övüyoruz / överiz</td></tr>
      <tr><td><strong>2. Pluralis (Siz)</strong></td><td class=""case-cell-latin"">laud-<strong>ātis</strong></td><td class=""case-cell-latin"">mon-<strong>ētis</strong></td><td>övüyorsunuz / översiniz</td></tr>
      <tr><td><strong>3. Pluralis (Onlar)</strong></td><td class=""case-cell-latin"">laud-<strong>ant</strong></td><td class=""case-cell-latin"">mon-<strong>ent</strong></td><td>övüyorlar / överler</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "warning",
                calloutTitle = "Latincede Özne Zamirlerinin Kullanımı",
                calloutText = "Fiilin sonundaki şahıs ekleri özneyi doğrudan açıkça belirlediği için, Latincede ego (ben), tu (sen) gibi şahıs zamirleri cümlede yalnızca özel bir vurgu veya tezat gerektiğinde kullanılır. Normalde kullanılmaz."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Puellae agricolam laudant.",
                tr = "Kızlar çiftçiyi övüyorlar.",
                analysis = "Puellae (Nom. Pl. f. - Özne); agricolam (agricola, -ae m., Acc. Sg. - Belirtili Nesne); laudant (3. Çoğul Praesens Activi - Yüklem)."
            });
            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Patriam amamus et conservamus.",
                tr = "Vatanı seviyoruz ve koruyoruz.",
                analysis = "Patriam (Acc. Sg. f. - Vatanı); amamus (1. Çoğul - Seviyoruz); et (Bağlaç - ve); conservamus (1. Çoğul - Koruyoruz)."
            });

            f.studyTips = "Fiil çekimlerini ezberlerken şahıs eklerini (-ō, -s, -t, -mus, -tis, -nt) bir melodi gibi ritmik olarak tekrarlamak kalıcılığı sağlar.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W2_L2: LatinceGramer2.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 2, 2, "LatinceGramer2.2.pdf",
                "EMİR KİPİ (IMPERATIVUS), OLUMSUZ EMİR VE CÜMLE KURULUŞU",
                "Imperativus Praesentis Activi, Nōlī / Nōlīte Yapısı ve Latince Temel Cümle Dizilimi",
                "Bu fasikülde 1. ve 2. çekim fiillerde emir kipi oluşturmayı, tekil ve çoğul muhataplara hitap etmeyi, olumsuz emir kalıplarını ve Latince standart cümle öge dizilimini (Özne - Nesne - Yüklem) kavrayacaksınız.",
                "Temel Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Emir Kipi (Imperativus)", "Tekil Emir", "Çoğul Emir (-te)", "Olumsuz Emir (Noli / Nolite)", "Cümle Yapısı (SOV)" });
            f.vocabKeys.AddRange(new[] { "laudo", "moneo", "do", "voco", "conservo", "erro", "sententia", "culpa" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Şimdiki Zaman Emir Kipi (Modus Imperativus Praesentis Activi)",
                html = @"<p>Latincede emir kipi 2. şahsa (sen ve siz) yönelik olarak verilir:</p>
<ul>
  <li><strong>Tekil Emir (2. Tekil Şahıs - Sen):</strong> Fiilin Praesens gövdesi eksiz olarak yalın halde kullanılır:
    <ul>
      <li><span class=""lat-word"">laudāre</span> &gt; Gövde: <strong>laudā!</strong> (Öv!)</li>
      <li><span class=""lat-word"">monēre</span> &gt; Gövde: <strong>monē!</strong> (Uyar!)</li>
      <li><span class=""lat-word"">amāre</span> &gt; Gövde: <strong>amā!</strong> (Sev!)</li>
    </ul>
  </li>
  <li><strong>Çoğul Emir (2. Çoğul Şahıs - Siz):</strong> Fiilin Praesens gövdesine <strong>-te</strong> eki getirilir:
    <ul>
      <li><span class=""lat-word"">laudā</span> + <strong>te</strong> &gt; <strong>laudāte!</strong> (Övünüz!)</li>
      <li><span class=""lat-word"">monē</span> + <strong>te</strong> &gt; <strong>monēte!</strong> (Uyarınız!)</li>
      <li><span class=""lat-word"">amā</span> + <strong>te</strong> &gt; <strong>amāte!</strong> (Seviniz!)</li>
    </ul>
  </li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Olumsuz Emir (Prohibitio)",
                calloutText = "Latincede doğrudan fiilin önüne 'non' konularak emir verilmez (*non lauda denmez!). Olumsuz emir vermek için 'istememek' fiilinin emri olan nōlī (tekil) veya nōlīte (çoğul) ile fiilin mastarı (Infinitivus) birleştirilir:\nNōlī laudāre! = Övme! (Tekil)\nNōlīte laudāre! = Övmeyiniz! (Çoğul)"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Latince Cümle Dizilimi (Sentaks)",
                html = @"<p>Klasik Latincede standart cümle öge dizilimi <strong>SOV (Özne - Tümleç/Nesne - Yüklem)</strong> düzenindedir:</p>
<ol>
  <li>Cümlenin başında genellikle <strong>Özne (Nominativus)</strong> yer alır.</li>
  <li>Ortada <strong>Tümleçler (Dativus, Ablativus)</strong> ve <strong>Nesne (Accusativus)</strong> bulunur.</li>
  <li>Cümlenin sonunda ise daima <strong>Yüklem (Fiil)</strong> yer alır.</li>
</ol>
<p>Ancak Latince bükümlü (çekimli) bir dil olduğundan, kelimelerin cümledeki rolleri konumlarına göre değil sonlarındaki hal eklerine göre belirlenir. Bu sayede vurgu amacıyla sözcük sırası esnetilebilir.</p>",
                calloutType = "info",
                calloutTitle = "Tamlama Dizilimi",
                calloutText = "İsim tamlamalarında tamlayan (Genetivus) genellikle tamlanandan sonra gelir: vita agricolae (çiftçinin yaşamı). Sıfat tamlamalarında da niteleme sıfatı çoğunlukla ismin ardına konur: puella pulchra (güzel kız)."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Monē me, amābō tē, sī errō.",
                tr = "Eğer yanılıyorsam uyar beni lütfen!",
                analysis = "Monē (2. Tekil Emir - Uyar); me (Acc. - Beni); amābō tē (Kalıp ifade: 'Lütfen, rica ederim', kelimesi kelimesine 'seni seveceğim'); sī (Bağlaç - Eğer); errō (1. Tekil Praesens - Yanılıyorum)."
            });
            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Nōlīte dāre culpam puellīs.",
                tr = "Kızlara suç yüklemeyiniz!",
                analysis = "Nōlīte dāre (Olumsuz çoğul emir - Vermeyiniz); culpam (Acc. Sg. - Suçu); puellīs (Dat. Pl. - Kızlara)."
            });

            f.studyTips = "Emir kipi oluştururken tekilde sadece fiil gövdesini (-a veya -e), çoğulda ise sonuna '-te' ekini hatırlamanız yeterlidir.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W3_L1: LatinceGramer3.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 3, 1, "LatinceGramer3.1.pdf",
                "2. GRUP İSİMLER (DECLINATIO II: -US, -I VE -UM, -I)",
                "Eril ve Nötr İsimler, Gövde Bulma, servus ve bellum Çekim Tabloları",
                "Bu fasikülde Tekil Genetivus hali -ī ile biten 2. Grup isimleri, bu gruptaki eril (-us) ve cinssiz/nötr (-um) kelimeleri, nötr isimlerin evrensel kurallarını ve tam çekim tablolarını inceleyeceksiniz.",
                "Temel Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "2. Grup İsimler (Declinatio II)", "Eril İsimler (-us, -i)", "Nötr İsimler (-um, -i)", "Nötr Kuralı", "servus Çekimi", "bellum Çekimi" });
            f.vocabKeys.AddRange(new[] { "servus", "deus", "dominus", "populus", "amicus", "filius", "equus", "bellum", "verbum", "consilium", "donum", "periculum", "otium", "officium" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 2. Grup İsimlerin Genel Özellikleri",
                html = @"<p>Tekil Genetivus hali <strong>-ī</strong> ekiyle biten isimler 2. Grup (Declinatio II) isimleridir. Bu gruptaki isimler ağırlıklı olarak iki ana bitime sahiptir:</p>
<ul>
  <li><strong>Tekil Nominativus -us ile bitenler:</strong> Genellikle <strong>Masculinum (Eril)</strong> cinstedir: <span class=""lat-word"">servus</span>, <span class=""lat-word"">servī</span>, m. (köle).</li>
  <li><strong>Tekil Nominativus -um ile bitenler:</strong> İstisnasız <strong>Neutrum (Nötr / Cinssiz)</strong> cinstedir: <span class=""lat-word"">bellum</span>, <span class=""lat-word"">bellī</span>, n. (savaş).</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Latincede Evrensel Nötr (Neutrum) Kuralı",
                calloutText = "Tüm çekim gruplarındaki nötr isimler için iki değişmez kural vardır:\n1) Nominativus, Vocativus ve Accusativus halleri tekilde birbiriyle aynı, çoğulda da birbiriyle aynıdır.\n2) Çoğul Nominativus, Vocativus ve Accusativus halleri daima kısa -a ile biter!"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 2. Çekim Eril Model: servus, -ī, m. (köle)",
                html = @"<p>Gövde, Tekil Genetivus'tan <em>-ī</em> takısının atılmasıyla bulunur: <span class=""lat-word"">servī</span> &gt; Gövde: <strong>serv-</strong>.</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus (Hal)</th><th>Singularis (Tekil)</th><th>Pluralis (Çoğul)</th><th>Türkçe Karşılığı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nominativus (Nom.)</strong></td><td class=""case-cell-latin"">serv-<strong>us</strong></td><td class=""case-cell-latin"">serv-<strong>ī</strong></td><td>köle / köleler</td></tr>
      <tr><td><strong>Vocativus (Voc.)</strong></td><td class=""case-cell-latin"">serv-<strong>e</strong></td><td class=""case-cell-latin"">serv-<strong>ī</strong></td><td>ey köle / ey köleler</td></tr>
      <tr><td><strong>Genetivus (Gen.)</strong></td><td class=""case-cell-latin"">serv-<strong>ī</strong></td><td class=""case-cell-latin"">serv-<strong>ōrum</strong></td><td>kölenin / kölelerin</td></tr>
      <tr><td><strong>Dativus (Dat.)</strong></td><td class=""case-cell-latin"">serv-<strong>ō</strong></td><td class=""case-cell-latin"">serv-<strong>īs</strong></td><td>köleye / kölelere</td></tr>
      <tr><td><strong>Accusativus (Acc.)</strong></td><td class=""case-cell-latin"">serv-<strong>um</strong></td><td class=""case-cell-latin"">serv-<strong>ōs</strong></td><td>köleyi / köleleri</td></tr>
      <tr><td><strong>Ablativus (Abl.)</strong></td><td class=""case-cell-latin"">serv-<strong>ō</strong></td><td class=""case-cell-latin"">serv-<strong>īs</strong></td><td>köleyle, köleden / kölelerle</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "warning",
                calloutTitle = "Vocativus Tekil İstisnası!",
                calloutText = "Latincede genel kural olarak Vocativus hali Nominativus ile aynıdır. Ancak 2. çekim -us ile biten eril isimlerde TEKİL VOCATIVUS hali -e ile biter: servus > serve (ey köle), Marcus > Marce. Eğer kelime -ius ile bitiyorsa tekil Vocativus -i olur: filius > fili (ey oğul), Vergilius > Vergili."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 2. Çekim Nötr Model: bellum, -ī, n. (savaş)",
                html = @"<p>Gövde: <strong>bell-</strong>.</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus (Hal)</th><th>Singularis (Tekil)</th><th>Pluralis (Çoğul)</th><th>Türkçe Karşılığı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nominativus (Nom.)</strong></td><td class=""case-cell-latin"">bell-<strong>um</strong></td><td class=""case-cell-latin"">bell-<strong>a</strong></td><td>savaş / savaşlar</td></tr>
      <tr><td><strong>Vocativus (Voc.)</strong></td><td class=""case-cell-latin"">bell-<strong>um</strong></td><td class=""case-cell-latin"">bell-<strong>a</strong></td><td>ey savaş / ey savaşlar</td></tr>
      <tr><td><strong>Genetivus (Gen.)</strong></td><td class=""case-cell-latin"">bell-<strong>ī</strong></td><td class=""case-cell-latin"">bell-<strong>ōrum</strong></td><td>savaşın / savaşların</td></tr>
      <tr><td><strong>Dativus (Dat.)</strong></td><td class=""case-cell-latin"">bell-<strong>ō</strong></td><td class=""case-cell-latin"">bell-<strong>īs</strong></td><td>savaşa / savaşlara</td></tr>
      <tr><td><strong>Accusativus (Acc.)</strong></td><td class=""case-cell-latin"">bell-<strong>um</strong></td><td class=""case-cell-latin"">bell-<strong>a</strong></td><td>savaşı / savaşları</td></tr>
      <tr><td><strong>Ablativus (Abl.)</strong></td><td class=""case-cell-latin"">bell-<strong>ō</strong></td><td class=""case-cell-latin"">bell-<strong>īs</strong></td><td>savaşla, savaştan / savaşlarla</td></tr>
    </tbody>
  </table>
</div>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Dominus servō bonō dōnum dat.",
                tr = "Efendi iyi köleye hediye verir.",
                analysis = "Dominus (2. Çekim Eril, Nom. Sg. - Özne); servō bonō (Dat. Sg. - İyi köleye); dōnum (2. Çekim Nötr, Acc. Sg. - Belirtisiz Nesne); dat (do fiili, 3. Tekil Praesens)."
            });
            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Bella perīcula magna habent.",
                tr = "Savaşlar büyük tehlikelere sahiptir (büyük tehlikeler içerir).",
                analysis = "Bella (Nom. Pl. n. - Savaşlar); perīcula magna (Acc. Pl. n. - Büyük tehlikeleri); habent (3. Çoğul Praesens - Sahiptirler)."
            });

            f.studyTips = "Nötr isimlerde çoğul Nom, Voc, Acc takısının daima '-a' olduğunu unutmayınız. Bu '-a' dişil tekille karıştırılmamalıdır.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W3_L2: LatinceGramer3.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 3, 2, "LatinceGramer3.2.pdf",
                "2. GRUP İSİMLERDE İSTİSNALAR: -ER VE -IR İLE BİTENLER",
                "ager ve puer Ayrımı, 'e' Harfinin Düşmesi, vir Çekimi ve Vocativus Özellikleri",
                "Bu fasikülde 2. grupta yer alan ancak Nominativus hali -us yerine -er veya -ir ile biten kelimeleri, çekim esnasında 'e' sesini koruyanlar ile düşürenler arasındaki farkı ve vir (erkek/adam) kelimesini öğreneceksiniz.",
                "Orta Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "-er ile Biten İsimler", "'e' Düşürenler (ager, agri)", "'e' Koruyanlar (puer, pueri)", "vir, viri Çekimi", "Vocativus Kuralları" });
            f.vocabKeys.AddRange(new[] { "ager", "puer", "vir", "magister", "liberi", "liber" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. -er ile Biten İsimlerde 'e' Harfinin Düşmesi Kuralı",
                html = @"<p>2. grupta Nominativus tekil hali <em>-er</em> ile biten eril isimler çekimlenirken iki farklı davranış sergiler:</p>
<ol>
  <li><strong>'e' Harfini Düşürenler (Senkop):</strong> Tekil Genetivus ve diğer hallerde gövdedeki 'e' harfi düşer. Sözlük yazımına bakarak anlaşılır:
    <ul>
      <li><span class=""lat-word"">ager</span>, <span class=""lat-word"">agrī</span>, m. (tarla) &gt; Gövde: <strong>agr-</strong> (Nom: ager, Voc: ager, Gen: agrī, Dat: agrō, Acc: agrum, Abl: agrō).</li>
      <li><span class=""lat-word"">magister</span>, <span class=""lat-word"">magistrī</span>, m. (öğretmen) &gt; Gövde: <strong>magistr-</strong>.</li>
      <li><span class=""lat-word"">liber</span>, <span class=""lat-word"">librī</span>, m. (kitap) &gt; Gövde: <strong>libr-</strong>.</li>
    </ul>
  </li>
  <li><strong>'e' Harfini Koruyanlar:</strong> Gövdedeki 'e' harfi tüm çekim boyunca muhafaza edilir:
    <ul>
      <li><span class=""lat-word"">puer</span>, <span class=""lat-word"">puerī</span>, m. (oğlan çocuk) &gt; Gövde: <strong>puer-</strong> (Nom: puer, Voc: puer, Gen: puerī, Dat: puerō, Acc: puerum, Abl: puerō).</li>
      <li><span class=""lat-word"">līberī</span>, <span class=""lat-word"">līberōrum</span>, m. pl. (çocuklar / hür kimseler).</li>
    </ul>
  </li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Vocativus Kuralı",
                calloutText = "-er ile biten isimlerde Vocativus Singularis daima Nominativus ile aynıdır: ager > ager! puer > puer! vir > vir! (Asla -e takısı almazlar)."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. vir, virī, m. (erkek, adam, kahraman) Çekimi",
                html = @"<p>2. grupta Nominativus hali <strong>-ir</strong> ile biten tek düzenli kelimedir. Gövde: <strong>vir-</strong>.</p>
<p>Nom: <span class=""lat-word"">vir</span> | Voc: <span class=""lat-word"">vir</span> | Gen: <span class=""lat-word"">virī</span> | Dat: <span class=""lat-word"">virō</span> | Acc: <span class=""lat-word"">virum</span> | Abl: <span class=""lat-word"">virō</span><br>
Çoğul: Nom: <span class=""lat-word"">virī</span> | Voc: <span class=""lat-word"">virī</span> | Gen: <span class=""lat-word"">virōrum</span> | Dat: <span class=""lat-word"">virīs</span> | Acc: <span class=""lat-word"">virōs</span> | Abl: <span class=""lat-word"">virīs</span>.</p>",
                calloutType = "info",
                calloutTitle = "fīlius ve meus Vocativus İstisnası",
                calloutText = "fīlius kelimesinin Vocativus hali fīlī, meus iyelik sıfatının eril tekil Vocativus hali ise mī şeklindedir:\nMī fīlī! = Ey oğlum!"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Magister puerōs in agrō monet.",
                tr = "Öğretmen tarlada çocukları uyarır.",
                analysis = "Magister (Nom. Sg. - Öğretmen); puerōs (Acc. Pl. - Çocukları); in agrō (in + Abl. - Tarlada); monet (3. Tekil Praesens - Uyarır)."
            });

            f.studyTips = "-er bitimli bir ismin 'e' düşürüp düşürmediğini anlamanın tek yolu sözlükteki Genetivus biçimine bakmaktır: ager, agri (düşürür); puer, pueri (düşürmez).";
            list.Add(f);
        }

        // ====================================================================
        // T1_W4_L1: LatinceGramer4.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 4, 1, "LatinceGramer4.1.pdf",
                "1. VE 2. SINIF SIFATLAR VE İSİM-SIFAT UYUMU",
                "bonus, -a, -um Tipi Sıfatlar, Üç Cins Çekimi ve Tam Uyumluluk Yasası",
                "Bu fasikülde 1. ve 2. çekim isimlerin eklerini kullanarak çekimlenen sıfatları (Adiectiva Declinatio I & II), sıfatların niteledikleri isimlerle olan Casus, Numerus ve Genus uyumunu ve isimleşmiş sıfatları (substantivum) öğreneceksiniz.",
                "Temel Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "1. ve 2. Sınıf Sıfatlar", "bonus, -a, -um Modeli", "İsim-Sıfat Uyumu (Üçlü Kural)", "İsimleşmiş Sıfatlar" });
            f.vocabKeys.AddRange(new[] { "bonus", "magnus", "malus", "parvus", "verus", "multus", "pauci", "antiquus", "clarus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Sıfatların Yapısı ve Çekim Mantığı",
                html = @"<p>Latincede sıfatlar, niteledikleri ismin cinsine göre üç farklı biçim alır:</p>
<ul>
  <li><strong>Eril bir ismi nitelerken:</strong> 2. Grup Eril isimler (-us / -er) gibi çekimlenir.</li>
  <li><strong>Dişil bir ismi nitelerken:</strong> 1. Grup Dişil isimler (-a) gibi çekimlenir.</li>
  <li><strong>Nötr bir ismi nitelerken:</strong> 2. Grup Nötr isimler (-um) gibi çekimlenir.</li>
</ul>
<p>Bu nedenle sözlüklerde <em>bonus, -a, -um</em> (iyi); <em>magnus, -a, -um</em> (büyük); <em>malus, -a, -um</em> (kötü) şeklinde yazılırlar.</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>Masculinum (Eril)</th><th>Femininum (Dişil)</th><th>Neutrum (Nötr)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin"">bon-<strong>us</strong></td><td class=""case-cell-latin"">bon-<strong>a</strong></td><td class=""case-cell-latin"">bon-<strong>um</strong></td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin"">bon-<strong>ī</strong></td><td class=""case-cell-latin"">bon-<strong>ae</strong></td><td class=""case-cell-latin"">bon-<strong>ī</strong></td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin"">bon-<strong>ō</strong></td><td class=""case-cell-latin"">bon-<strong>ae</strong></td><td class=""case-cell-latin"">bon-<strong>ō</strong></td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin"">bon-<strong>um</strong></td><td class=""case-cell-latin"">bon-<strong>am</strong></td><td class=""case-cell-latin"">bon-<strong>um</strong></td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin"">bon-<strong>ō</strong></td><td class=""case-cell-latin"">bon-<strong>ā</strong></td><td class=""case-cell-latin"">bon-<strong>ō</strong></td></tr>
      <tr><td><strong>Nom. Pl.</strong></td><td class=""case-cell-latin"">bon-<strong>ī</strong></td><td class=""case-cell-latin"">bon-<strong>ae</strong></td><td class=""case-cell-latin"">bon-<strong>a</strong></td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin"">bon-<strong>ōrum</strong></td><td class=""case-cell-latin"">bon-<strong>ārum</strong></td><td class=""case-cell-latin"">bon-<strong>ōrum</strong></td></tr>
      <tr><td><strong>Acc. Pl.</strong></td><td class=""case-cell-latin"">bon-<strong>ōs</strong></td><td class=""case-cell-latin"">bon-<strong>ās</strong></td><td class=""case-cell-latin"">bon-<strong>a</strong></td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "İsim-Sıfat Tam Uyum Yasası",
                calloutText = "Bir sıfat nitelediği isimle her zaman ve istisnasız CASUS, NUMERUS ve GENUS bakımından uyuşmak zorundadır!\nÖnemli: Bu kural eklerin AYNI olacağı anlamına GELMEZ; cinsin ve halin aynı olacağı anlamına gelir!\nÖrnek: agricola (çiftçi) ismi 1. çekimdedir ama cinsiyeti ERİLDİR. Bu yüzden 'iyi çiftçi' derken agricola bona denmez, agricola bonus denir!"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. İsimleşmiş Sıfatlar (Substantiva)",
                html = @"<p>Latincede sıfatlar yanlarında bir isim olmadan tek başlarına kullanıldıklarında isim işlevi kazanırlar:</p>
<ul>
  <li><strong>Eril Çoğul Sıfatlar:</strong> '... İnsanlar / Kişiler' anlamına gelir: <span class=""lat-word"">bonī</span> (iyi insanlar / iyiler), <span class=""lat-word"">paucī</span> (az sayıda insan), <span class=""lat-word"">multī</span> (pek çok insan).</li>
  <li><strong>Nötr Çoğul Sıfatlar:</strong> '... Şeyler' anlamına gelir: <span class=""lat-word"">multa</span> (çok şey / pek çok şey), <span class=""lat-word"">mala</span> (kötülükler / kötü şeyler), <span class=""lat-word"">vēra</span> (gerçekler / doğru şeyler).</li>
</ul>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Bonī virī patriam amant.",
                tr = "İyi insanlar vatanı severler.",
                analysis = "Bonī virī (Nom. Pl. m. - İyi insanlar); patriam (Acc. Sg. f. - Vatanı); amant (3. Çoğul Praesens - Severler)."
            });
            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Multa perīcula nautam terrent.",
                tr = "Pek çok tehlike denizciyi korkutur.",
                analysis = "Multa perīcula (Nom. Pl. n. - Pek çok tehlike); nautam (Acc. Sg. m. - Denizciyi); terrent (terreo fiili, 3. Çoğul Praesens - Korkuturlar)."
            });

            f.studyTips = "İsim-sıfat uyumunda ismin çekim grubuna değil, cinsiyetine (genus) dikkat ediniz: poeta bonus, nauta peritus, agricola strenuus.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W4_L2: LatinceGramer4.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 4, 2, "LatinceGramer4.2.pdf",
                "-ER İLE BİTEN SIFATLAR VE İYELİK SIFATLARI",
                "pulcher ve liber Tipi Sıfatlar, İyelik Sıfatları (meus, tuus, noster, vester) ve Okuma Parçası",
                "Bu fasikülde eril Nominativus hali -er ile biten sıfatları (pulcher, pulchra, pulchrum vs liber, libera, liberum), Latince iyelik sıfatlarını ve Doç. Dr. Eyüp Çoraklı'nın ders notlarındaki okuma parçasını inceleyeceksiniz.",
                "Orta Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "-er ile Biten Sıfatlar", "pulcher (e düşüren)", "liber (e koruyan)", "İyelik Sıfatları", "Okuma Parçası Tahlili" });
            f.vocabKeys.AddRange(new[] { "pulcher", "liber", "miser", "noster", "vester", "meus", "tuus", "suus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. -er ile Biten Sıfatlarda 'e' Harfinin Düşmesi",
                html = @"<p>Tıpkı 2. çekim isimlerde olduğu gibi, eril Nominativus hali <em>-er</em> ile biten sıfatlar da ikiye ayrılır:</p>
<ol>
  <li><strong>'e' Harfini Düşürenler:</strong> Dişil (-a) ve nötr (-um) hallerinde 'e' düşer:
    <ul>
      <li><span class=""lat-word"">pulcher</span>, <span class=""lat-word"">pulchra</span>, <span class=""lat-word"">pulchrum</span> (güzel)</li>
      <li><span class=""lat-word"">noster</span>, <span class=""lat-word"">nostra</span>, <span class=""lat-word"">nostrum</span> (bizim / bize ait)</li>
      <li><span class=""lat-word"">vester</span>, <span class=""lat-word"">vestra</span>, <span class=""lat-word"">vestrum</span> (sizin / size ait)</li>
    </ul>
  </li>
  <li><strong>'e' Harfini Koruyanlar:</strong> Gövdedeki 'e' tüm cinslerde korunur:
    <ul>
      <li><span class=""lat-word"">līber</span>, <span class=""lat-word"">lībera</span>, <span class=""lat-word"">līberum</span> (özgür, hür)</li>
      <li><span class=""lat-word"">miser</span>, <span class=""lat-word"">misera</span>, <span class=""lat-word"">miserum</span> (zavallı, talihsiz)</li>
    </ul>
  </li>
</ol>",
                calloutType = "info",
                calloutTitle = "İyelik Sıfatları (Adiectiva Possessiva)",
                calloutText = "meus, -a, -um (benim)\ntuus, -a, -um (senin)\nsuus, -a, -um (kendi / kendisinin)\nnoster, nostra, nostrum (bizim)\nvester, vestra, vestrum (sizin)\nBu kelimeler zamir değil, sıfattır; dolayısıyla niteledikleri ismin cinsi, sayısı ve haliyle tam uyum sağlarlar: patria nostra (vatanımız - dişil), amicus meus (arkadaşım - eril)."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Okuma Parçası: Hakiki Dostluk Üzerine",
                html = @"<div class=""latin-quote-block"">
Paucī virī vērōs amīcōs habent, et paucī sunt dignī. Amīcitia vēra est praeclāra et omnia praeclāra sunt rāra. Multī virī stultī dē pecūniā semper cōgitant, paucī dē amīcīs; sed errant: possumus valēre sine multā pecūniā, sed sine amīcitiā nōn valēmus, et vīta est nihil.
</div>
<div class=""latin-translation-line"">
↳ <em>Pek az kişi hakiki dostlara sahiptir ve pek az kişi buna layıktır. Hakiki dostluk muhteşem bir şeydir; bütün muhteşem şeyler de nadirdir. Pek çok aptal adam daima para hakkında düşünür, pek azı ise dostları hakkında; ama yanılırlar: Çok fazla para olmadan da iyi durumda olabiliriz, ama dostluk olmadan iyi olamayız; ve hayat hiçtir (hiçbir değer ifade etmez).</em>
</div>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Officium līberōs virōs semper vocābat.",
                tr = "Görev her zaman özgür adamları çağırırdı.",
                analysis = "Officium (Nom. Sg. n. - Görev); līberōs virōs (Acc. Pl. m. - Özgür adamları); semper (Zarf - Her zaman); vocābat (3. Tekil Imperfectum - Çağırırdı)."
            });

            f.studyTips = "İyelik sıfatlarında 'bizim' (noster) ve 'sizin' (vester) kelimelerinin dişil ve nötrde 'e' düşürdüğünü (nostra, vestra) unutmayınız.";
            list.Add(f);
        }

        // We continue adding the remaining lessons of Term 1 up to Week 14
        BuildTerm1RemainingFasicules(list, getSlideTexts, docSlideCountMap, vocabMap);
    }
}
