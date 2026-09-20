// Latince Eyupoks - Doç. Dr. Eyüp Çoraklı Latince 1 & 2 Kapsamlı Ders Fasikülleri
// İstanbul Üniversitesi Edebiyat Fakültesi Klasik Filoloji
// Geliştirici: Genar Altınışık | %100 Temiz UTF-8
const EYUP_CURRICULUM = [
  {
    "id": "T1_W1_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 1,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 1. Hafta (2. Ders)",
    "title": "LATİN ALFABESİ, FONETİK VE 1. GRUP İSİMLER (-A, -AE)",
    "subtitle": "Latincenin Dönemleri, Diftonglar, İsimlerin Üç Özelliği ve Declinatio I Çekim Tablosu",
    "summary": "Bu fasikülde Klasik Latin alfabesinin harf yapısını, sesli ve sessiz harflerin okunuş kurallarını, çiftseslileri (diphthongus), isimlerin hal (casus), sayı (numerus) ve cins (genus) niteliklerini ve 1. Grup İsimlerin (-a, -ae) çekim kurallarını öğreneceksiniz.",
    "difficulty": "Temel Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer1.2.pdf",
    "slideCount": 19,
    "topics": ["Latincenin Dönemleri", "Latin Alfabesi", "Sesliler ve Diftonglar", "Casus (6 Hal)", "Numerus ve Genus", "1. Grup İsimler (Declinatio I)", "Kural Dışı Durumlar"],
    "vocab": ["causa", "fama", "iustitia", "gloria", "vita", "anima", "femina", "puella", "historia", "casa", "terra", "ira", "cura", "fabula", "aqua", "via", "pagina", "natura", "patientia", "laetitia", "audacia", "lingua", "sententia", "silva", "insula", "agricola", "nauta", "poeta", "auriga"],
    "sections": [
      {
        "title": "1. Latincenin Tarihsel Dönemleri ve Latin Alfabesi",
        "html": "<p>Latince, Hint-Avrupa dil ailesinin İtalik koluna mensup antik bir dildir. Roma'nın kuruluşu ve yayılmasıyla birlikte Akdeniz havzasının ve tüm Batı dünyasının ortak kültür, hukuk, felsefe ve bilim dili haline gelmiştir.</p>\n<p>Latince tarihsel süreçte şu evrelerden geçmiştir:</p>\n<ul>\n  <li><strong>Arkaik Latince:</strong> İÖ 4. yüzyıl sonu – İÖ 2. yüzyıl başı. Bu dönemde 21 harfli arkaik Latin alfabesi kullanılmıştır.</li>\n  <li><strong>Klasik Latince:</strong> İÖ 1. yüzyıl – İS 1. yüzyıl (Cicero, Caesar, Vergilius, Horatius, Ovidius dönemi). Yunancadan geçen kelimelerin (özellikle felsefe ve mitoloji terimleri) transkripsiyonu için <strong>Y</strong> ve <strong>Z</strong> harfleri eklenerek alfabe 23 harfe çıkarılmıştır.</li>\n  <li><strong>Geç Dönem & Ortaçağ Latincesi:</strong> Kilise ve üniversite dili olarak varlığını sürdürmüştür.</li>\n</ul>",
        "calloutType": "info",
        "calloutTitle": "23 Harfli Klasik Latin Alfabesi",
        "calloutText": "A B C D E F G H I K L M N O P Q R S T V X (ardından Yunancadan giren Y ve Z). Latincede başlangıçta 'W' ve 'J' harfleri bulunmazdı. 'I' harfi hem ünlü (i) hem de ünsüz (y) sesini, 'V' harfi ise hem ünlü (u) hem de ünsüz (v/w) sesini temsil etmekteydi.",
        "tableHtml": ""
      },
      {
        "title": "2. Harflerin Okunuşu ve Çiftsesliler (Diphthongus)",
        "html": "<p>Latincede 5 temel sesli harf bulunur: <strong>A, E, I, O, U</strong>. Ayrıca Yunancadan geçen kelimelerde <em>Y</em> harfi ü sesi verir (örn. <span class=\"lat-word\">lyra</span>).</p>\n<p>İki sesli harfin tek bir hecede birleşerek oluşturduğu çiftsesliler (diftonglar) şu şekildedir:</p>\n<ul>\n  <li><strong>ae</strong> [ay]: örn. <span class=\"lat-word\">carae</span>, <span class=\"lat-word\">puellae</span></li>\n  <li><strong>au</strong> [av]: örn. <span class=\"lat-word\">laudo</span>, <span class=\"lat-word\">aurum</span></li>\n  <li><strong>oe</strong> [oy]: örn. <span class=\"lat-word\">coepit</span>, <span class=\"lat-word\">poena</span></li>\n  <li><strong>ei</strong> [ey]: örn. <span class=\"lat-word\">deinde</span></li>\n  <li><strong>eu</strong> [ev]: örn. <span class=\"lat-word\">seu</span>, <span class=\"lat-word\">Europa</span></li>\n  <li><strong>ui</strong> [uy]: örn. <span class=\"lat-word\">huius</span>, <span class=\"lat-word\">cuius</span></li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Klasik Telaffuz Kuralı",
        "calloutText": "Klasik Latincede 'C' harfi ardından gelen sesli ne olursa olsun her zaman sert 'K' sesiyle okunur: Cicero [kikero], Caesar [kaysar]. Benzer şekilde 'G' harfi daima sert 'G' sesi verir.",
        "tableHtml": ""
      },
      {
        "title": "3. Dil Yapısı: İsimlerin Üç Temel Özelliği (Casus, Numerus, Genus)",
        "html": "<p>Latincede bir ismin cümlede yüklendiği anlam ve görev <strong>üç temel parametreye</strong> bağlıdır:</p>\n<ol>\n  <li><strong>Casus (Hal):</strong> Latincede 6 temel hal bulunur. Doç. Dr. Eyüp Çoraklı'nın öğretiminde şu sıralama esas alınır:\n    <ul>\n      <li><strong>1. Nominativus (nom.):</strong> Yalın hal / Özne hali. 'Kim?' ve 'Ne?' sorularını yanıtlar.</li>\n      <li><strong>2. Vocativus (voc.):</strong> Seslenme / Hitap hali. Bir kişiye veya nesneye seslenirken ('Ey...') kullanılır.</li>\n      <li><strong>3. Genetivus (gen.):</strong> İyelik / Tamlayan hali (-in hali). Aidiyet, mülkiyet ve isim tamlaması bildirir.</li>\n      <li><strong>4. Dativus (dat.):</strong> Yönelme hali (-e hali). 'Kime?' ve 'Neye?' sorularını yanıtlar; dolaylı tümleçtir.</li>\n      <li><strong>5. Accusativus (acc.):</strong> Belirtme hali (-i hali). Fiilin doğrudan etkilediği nesnedir; 'Kimi?' ve 'Neyi?' sorularına karşılık gelir.</li>\n      <li><strong>6. Ablativus (abl.):</strong> Ayrılma / Çıkma / Vasıta hali (-den hali ve ne ile?). Sebep, araç, yer ve zaman bildirir.</li>\n    </ul>\n    <em>Ayrıca şehir isimleri ve bazı özel kelimelerde bulunma (-de hali) bildiren <strong>Locativus</strong> hali de mevcuttur (örn. Romae: Roma'da).</em>\n  </li>\n  <li><strong>Numerus (Sayı):</strong> Singularis (Tekil) ve Pluralis (Çoğul).</li>\n  <li><strong>Genus (Cins):</strong> Masculinum (Eril - m.), Femininum (Dişil - f.) ve Neutrum (Cinssiz/Nötr - n.).</li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "İsimlerin Sözlük Yazılış Formülü",
        "calloutText": "Sözlüklerde bir isim daima 'Tekil Nominativus, Tekil Genetivus Sonu, Cins' şeklinde yazılır: rosa, -ae, f. (gül); servus, -i, m. (köle); bellum, -i, n. (savaş). İkinci sıradaki tekil genetivus eki, ismin hangi çekim grubuna ait olduğunu ve gövdesini gösterir!",
        "tableHtml": ""
      },
      {
        "title": "4. 1. Grup İsimler (Declinatio I: -a, -ae)",
        "html": "<p>Tekil Genetivus hali <strong>-ae</strong> ekiyle biten isimlerdir. Birkaç meslek ve özel istisna dışında bu gruptaki isimlerin tamamı <strong>Femininum (Dişil)</strong> cinstedir.</p>\n<p>Gövde, Tekil Genetivus halindeki <em>-ae</em> ekinin atılmasıyla elde edilir: <span class=\"lat-word\">causa</span> (Tekil Nom.) &gt; <span class=\"lat-word\">causae</span> (Tekil Gen.) &gt; Gövde: <strong>caus-</strong>.</p>",
        "calloutType": "warning",
        "calloutTitle": "1. Çekimdeki Kural Dışı Durumlar ve Eril İsimler",
        "calloutText": "1) Anlamca erkek mesleklerini belirten şu kelimeler -a ile bitmelerine rağmen ERİLDİR (m.): agricola (çiftçi), nauta (denizci), poeta (şair), auriga (atlı araba sürücüsü), pirata (korsan), advena (yabancı), accola (komşu), incola (yerli, m./f.).\n2) dea (tanrıça) ve filia (kız evlat) kelimelerinin Çoğul Dativus ve Ablativus halleri, 2. çekimdeki erkek karşılıklarıyla (deis, filiis) karışmaması için deabus ve filiabus şeklinde biter.\n3) familia kelimesi tekil genetivus halinde familias olarak da kullanılır: pater familias (aile babası).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nominativus (Nom.)</strong></td><td class=\"case-cell-latin\">caus-<strong>a</strong></td><td class=\"case-cell-latin\">caus-<strong>ae</strong></td><td>neden / nedenler</td></tr>\n      <tr><td><strong>Vocativus (Voc.)</strong></td><td class=\"case-cell-latin\">caus-<strong>a</strong></td><td class=\"case-cell-latin\">caus-<strong>ae</strong></td><td>ey neden / ey nedenler</td></tr>\n      <tr><td><strong>Genetivus (Gen.)</strong></td><td class=\"case-cell-latin\">caus-<strong>ae</strong></td><td class=\"case-cell-latin\">caus-<strong>ārum</strong></td><td>nedenin / nedenlerin</td></tr>\n      <tr><td><strong>Dativus (Dat.)</strong></td><td class=\"case-cell-latin\">caus-<strong>ae</strong></td><td class=\"case-cell-latin\">caus-<strong>īs</strong></td><td>nedene / nedenlere</td></tr>\n      <tr><td><strong>Accusativus (Acc.)</strong></td><td class=\"case-cell-latin\">caus-<strong>am</strong></td><td class=\"case-cell-latin\">caus-<strong>ās</strong></td><td>nedeni / nedenleri</td></tr>\n      <tr><td><strong>Ablativus (Abl.)</strong></td><td class=\"case-cell-latin\">caus-<strong>ā</strong></td><td class=\"case-cell-latin\">caus-<strong>īs</strong></td><td>nedenle, nedenden / nedenlerle</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Poeta vitam agricolae laudat.",
        "tr": "Şair çiftçinin yaşamını över.",
        "analysis": "Poeta (1. Çekim Eril, Nom. Sg. - Özne); vitam (vita, -ae f., Acc. Sg. - Belirtili Nesne); agricolae (agricola, -ae m., Gen. Sg. - Tamlayan); laudat (laudo fiili, 3. Tekil Şahıs Praesens - Yüklem)."
      },
      {
        "latin": "Incolae insulae nautis causam gloriae narrant.",
        "tr": "Adanın yerlileri denizcilere şanın sebebini anlatırlar.",
        "analysis": "Incolae (Nom. Pl. - Özne); insulae (Gen. Sg. - Adanın); nautis (Dat. Pl. - Denizcilere); causam (Acc. Sg. - Sebebi); gloriae (Gen. Sg. - Şanın); narrant (3. Çoğul Şahıs Praesens)."
      }
    ],
    "studyTips": "1. çekim isimlerin Tekil Nominativus (-a) ile Tekil Ablativus (-ā) arasındaki tek fark Ablativus'taki 'a' sesinin uzun olmasıdır. Bu durum vezin ve anlam ayrımında hayati önem taşır."
  },
  {
    "id": "T1_W2_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 2,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 2. Hafta (1. Ders)",
    "title": "FİİLLER (VERBA): ŞAHIS, ZAMAN VE ŞİMDİKİ ZAMAN (PRAESENS)",
    "subtitle": "Fiilin Beş Özelliği, 4 Çekim Grubu ve Praesens Indicativus Activi Çekim Sistemi",
    "summary": "Bu fasikülde Latince fiil sisteminin omurgasını oluşturan beş temel kategoriyi (şahıs, sayı, zaman, kip, çatı), fiillerin sözlük yazılışını, fiil gövdesinin bulunmasını ve 1. ile 2. Çekim fiillerin Etken Şimdiki Zaman (Praesens Indicativus Activi) çekimlerini öğreneceksiniz.",
    "difficulty": "Temel Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer2.1.pdf",
    "slideCount": 19,
    "topics": ["Fiilin Beş Özelliği", "Dört Çekim Grubu (Coniugatio)", "Şahıs Ekleri (Personae)", "Praesens Gövdesi", "1. Çekim (-are)", "2. Çekim (-ēre)", "Model Çekimler: laudo, moneo"],
    "vocab": ["laudo", "moneo", "amo", "cogito", "debeo", "do", "erro", "habeo", "servo", "valeo", "voco"],
    "sections": [
      {
        "title": "1. Fiilin Beş Temel Özelliği (Forma Verbi)",
        "html": "<p>Latincede çekimlenmiş her bir fiil şu beş gramatikal bilgiyi aynı anda bünyesinde taşır:</p>\n<ol>\n  <li><strong>Persona (Şahıs):</strong> 1. Şahıs (ben / biz), 2. Şahıs (sen / siz), 3. Şahıs (o / onlar).</li>\n  <li><strong>Numerus (Sayı):</strong> Singularis (Tekil) ve Pluralis (Çoğul).</li>\n  <li><strong>Tempus (Zaman):</strong> Latincede 6 temel zaman bulunur. Praesens (Şimdiki/Geniş Zaman), Imperfectum (Şimdiki Zamanın Hikayesi), Futurum I (Gelecek Zaman), Perfectum (Geçmiş Zaman), Plusquamperfectum (Önceki Geçmiş Zaman), Futurum Exactum (Gelecek Bitmiş Zaman).</li>\n  <li><strong>Modus (Kip):</strong> Indicativus (Haber Kipi - gerçeği bildirir), Imperativus (Emir Kipi), Coniunctivus (Dilek-İstek Kipi).</li>\n  <li><strong>Vox (Çatı):</strong> Vox Activa (Etken Çatı - özne işi yapar) ve Vox Passiva (Edilgen Çatı - özne işten etkilenir).</li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Evrensel Etken Şahıs Ekleri (Praesens Sistemi)",
        "calloutText": "Latincede tüm düzenli fiillerin etken şimdiki zaman şahıs ekleri şunlardır:\nTekil: 1. Şahıs -ō / -m (ben), 2. Şahıs -s (sen), 3. Şahıs -t (o)\nÇoğul: 1. Şahıs -mus (biz), 2. Şahıs -tis (siz), 3. Şahıs -nt (onlar)",
        "tableHtml": ""
      },
      {
        "title": "2. Dört Çekim Grubu ve Fiil Gövdesinin Bulunması",
        "html": "<p>Latincede fiiller mastar (Infinitivus) sonlanışlarına göre <strong>4 ayrı çekim grubuna (coniugatio)</strong> ayrılır:</p>\n<ul>\n  <li><strong>1. Çekim Grubu (-āre):</strong> Mastarı <em>-āre</em> ile biter: <span class=\"lat-word\">laudō</span>, <span class=\"lat-word\">laudāre</span> (övmek). Praesens gövdesi: <strong>laudā-</strong>.</li>\n  <li><strong>2. Çekim Grubu (-ēre):</strong> Mastarı uzun <em>-ēre</em> ile biter: <span class=\"lat-word\">moneō</span>, <span class=\"lat-word\">monēre</span> (uyarmak). Praesens gövdesi: <strong>monē-</strong>.</li>\n  <li><strong>3. Çekim Grubu (-ere):</strong> Mastarı kısa <em>-ere</em> ile biter: <span class=\"lat-word\">regō</span>, <span class=\"lat-word\">regere</span> (yönetmek).</li>\n  <li><strong>4. Çekim Grubu (-īre):</strong> Mastarı uzun <em>-īre</em> ile biter: <span class=\"lat-word\">audiō</span>, <span class=\"lat-word\">audīre</span> (işitmek).</li>\n</ul>\n<p><strong>Praesens Gövdesinin Bulunması:</strong> Mastar halindeki <em>-re</em> ekinin atılmasıyla fiilin şimdiki zaman gövdesi elde edilir.</p>",
        "calloutType": "info",
        "calloutTitle": "1. Çekimde 1. Tekil Şahıs Kuralı",
        "calloutText": "1. çekim fiillerde gövdedeki -ā- sesi ile 1. tekil şahıs eki olan -ō yan yana geldiğinde -ā- sesi erir (kontraksiyon): lauda-ō > laudō olur. Ancak diğer tüm şahıslarda kökteki -ā- muhafaza edilir: lauda-s, lauda-t, lauda-mus, lauda-tis, lauda-nt.",
        "tableHtml": ""
      },
      {
        "title": "3. Praesens Indicativus Activi (Haber Kipi, Etken Çatı, Şimdiki Zaman)",
        "html": "<p>Hem Türkçedeki <em>Şimdiki Zamanı (-iyor)</em> hem de <em>Geniş Zamanı (-er/-ir)</em> ifade eder.</p>",
        "calloutType": "warning",
        "calloutTitle": "Latincede Özne Zamirlerinin Kullanımı",
        "calloutText": "Fiilin sonundaki şahıs ekleri özneyi doğrudan açıkça belirlediği için, Latincede ego (ben), tu (sen) gibi şahıs zamirleri cümlede yalnızca özel bir vurgu veya tezat gerektiğinde kullanılır. Normalde kullanılmaz.",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs & Sayı</th>\n        <th>1. Çekim: laudō, -āre (övmek)</th>\n        <th>2. Çekim: moneō, -ēre (uyarmak)</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Singularis (Ben)</strong></td><td class=\"case-cell-latin\">laud-<strong>ō</strong></td><td class=\"case-cell-latin\">mon-<strong>eō</strong></td><td>övüyorum / överim</td></tr>\n      <tr><td><strong>2. Singularis (Sen)</strong></td><td class=\"case-cell-latin\">laud-<strong>ās</strong></td><td class=\"case-cell-latin\">mon-<strong>ēs</strong></td><td>övüyorsun / översin</td></tr>\n      <tr><td><strong>3. Singularis (O)</strong></td><td class=\"case-cell-latin\">laud-<strong>at</strong></td><td class=\"case-cell-latin\">mon-<strong>et</strong></td><td>övüyor / över</td></tr>\n      <tr><td><strong>1. Pluralis (Biz)</strong></td><td class=\"case-cell-latin\">laud-<strong>āmus</strong></td><td class=\"case-cell-latin\">mon-<strong>ēmus</strong></td><td>övüyoruz / överiz</td></tr>\n      <tr><td><strong>2. Pluralis (Siz)</strong></td><td class=\"case-cell-latin\">laud-<strong>ātis</strong></td><td class=\"case-cell-latin\">mon-<strong>ētis</strong></td><td>övüyorsunuz / översiniz</td></tr>\n      <tr><td><strong>3. Pluralis (Onlar)</strong></td><td class=\"case-cell-latin\">laud-<strong>ant</strong></td><td class=\"case-cell-latin\">mon-<strong>ent</strong></td><td>övüyorlar / överler</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Puellae agricolam laudant.",
        "tr": "Kızlar çiftçiyi övüyorlar.",
        "analysis": "Puellae (Nom. Pl. f. - Özne); agricolam (agricola, -ae m., Acc. Sg. - Belirtili Nesne); laudant (3. Çoğul Praesens Activi - Yüklem)."
      },
      {
        "latin": "Patriam amamus et conservamus.",
        "tr": "Vatanı seviyoruz ve koruyoruz.",
        "analysis": "Patriam (Acc. Sg. f. - Vatanı); amamus (1. Çoğul - Seviyoruz); et (Bağlaç - ve); conservamus (1. Çoğul - Koruyoruz)."
      }
    ],
    "studyTips": "Fiil çekimlerini ezberlerken şahıs eklerini (-ō, -s, -t, -mus, -tis, -nt) bir melodi gibi ritmik olarak tekrarlamak kalıcılığı sağlar."
  },
  {
    "id": "T1_W2_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 2,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 2. Hafta (2. Ders)",
    "title": "EMİR KİPİ (IMPERATIVUS), OLUMSUZ EMİR VE CÜMLE KURULUŞU",
    "subtitle": "Imperativus Praesentis Activi, Nōlī / Nōlīte Yapısı ve Latince Temel Cümle Dizilimi",
    "summary": "Bu fasikülde 1. ve 2. çekim fiillerde emir kipi oluşturmayı, tekil ve çoğul muhataplara hitap etmeyi, olumsuz emir kalıplarını ve Latince standart cümle öge dizilimini (Özne - Nesne - Yüklem) kavrayacaksınız.",
    "difficulty": "Temel Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "LatinceGramer2.2.pdf",
    "slideCount": 20,
    "topics": ["Emir Kipi (Imperativus)", "Tekil Emir", "Çoğul Emir (-te)", "Olumsuz Emir (Noli / Nolite)", "Cümle Yapısı (SOV)"],
    "vocab": ["laudo", "moneo", "do", "voco", "conservo", "erro", "sententia", "culpa"],
    "sections": [
      {
        "title": "1. Şimdiki Zaman Emir Kipi (Modus Imperativus Praesentis Activi)",
        "html": "<p>Latincede emir kipi 2. şahsa (sen ve siz) yönelik olarak verilir:</p>\n<ul>\n  <li><strong>Tekil Emir (2. Tekil Şahıs - Sen):</strong> Fiilin Praesens gövdesi eksiz olarak yalın halde kullanılır:\n    <ul>\n      <li><span class=\"lat-word\">laudāre</span> &gt; Gövde: <strong>laudā!</strong> (Öv!)</li>\n      <li><span class=\"lat-word\">monēre</span> &gt; Gövde: <strong>monē!</strong> (Uyar!)</li>\n      <li><span class=\"lat-word\">amāre</span> &gt; Gövde: <strong>amā!</strong> (Sev!)</li>\n    </ul>\n  </li>\n  <li><strong>Çoğul Emir (2. Çoğul Şahıs - Siz):</strong> Fiilin Praesens gövdesine <strong>-te</strong> eki getirilir:\n    <ul>\n      <li><span class=\"lat-word\">laudā</span> + <strong>te</strong> &gt; <strong>laudāte!</strong> (Övünüz!)</li>\n      <li><span class=\"lat-word\">monē</span> + <strong>te</strong> &gt; <strong>monēte!</strong> (Uyarınız!)</li>\n      <li><span class=\"lat-word\">amā</span> + <strong>te</strong> &gt; <strong>amāte!</strong> (Seviniz!)</li>\n    </ul>\n  </li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Olumsuz Emir (Prohibitio)",
        "calloutText": "Latincede doğrudan fiilin önüne 'non' konularak emir verilmez (*non lauda denmez!). Olumsuz emir vermek için 'istememek' fiilinin emri olan nōlī (tekil) veya nōlīte (çoğul) ile fiilin mastarı (Infinitivus) birleştirilir:\nNōlī laudāre! = Övme! (Tekil)\nNōlīte laudāre! = Övmeyiniz! (Çoğul)",
        "tableHtml": ""
      },
      {
        "title": "2. Latince Cümle Dizilimi (Sentaks)",
        "html": "<p>Klasik Latincede standart cümle öge dizilimi <strong>SOV (Özne - Tümleç/Nesne - Yüklem)</strong> düzenindedir:</p>\n<ol>\n  <li>Cümlenin başında genellikle <strong>Özne (Nominativus)</strong> yer alır.</li>\n  <li>Ortada <strong>Tümleçler (Dativus, Ablativus)</strong> ve <strong>Nesne (Accusativus)</strong> bulunur.</li>\n  <li>Cümlenin sonunda ise daima <strong>Yüklem (Fiil)</strong> yer alır.</li>\n</ol>\n<p>Ancak Latince bükümlü (çekimli) bir dil olduğundan, kelimelerin cümledeki rolleri konumlarına göre değil sonlarındaki hal eklerine göre belirlenir. Bu sayede vurgu amacıyla sözcük sırası esnetilebilir.</p>",
        "calloutType": "info",
        "calloutTitle": "Tamlama Dizilimi",
        "calloutText": "İsim tamlamalarında tamlayan (Genetivus) genellikle tamlanandan sonra gelir: vita agricolae (çiftçinin yaşamı). Sıfat tamlamalarında da niteleme sıfatı çoğunlukla ismin ardına konur: puella pulchra (güzel kız).",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Monē me, amābō tē, sī errō.",
        "tr": "Eğer yanılıyorsam uyar beni lütfen!",
        "analysis": "Monē (2. Tekil Emir - Uyar); me (Acc. - Beni); amābō tē (Kalıp ifade: 'Lütfen, rica ederim', kelimesi kelimesine 'seni seveceğim'); sī (Bağlaç - Eğer); errō (1. Tekil Praesens - Yanılıyorum)."
      },
      {
        "latin": "Nōlīte dāre culpam puellīs.",
        "tr": "Kızlara suç yüklemeyiniz!",
        "analysis": "Nōlīte dāre (Olumsuz çoğul emir - Vermeyiniz); culpam (Acc. Sg. - Suçu); puellīs (Dat. Pl. - Kızlara)."
      }
    ],
    "studyTips": "Emir kipi oluştururken tekilde sadece fiil gövdesini (-a veya -e), çoğulda ise sonuna '-te' ekini hatırlamanız yeterlidir."
  },
  {
    "id": "T1_W3_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 3,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 3. Hafta (1. Ders)",
    "title": "2. GRUP İSİMLER (DECLINATIO II: -US, -I VE -UM, -I)",
    "subtitle": "Eril ve Nötr İsimler, Gövde Bulma, servus ve bellum Çekim Tabloları",
    "summary": "Bu fasikülde Tekil Genetivus hali -ī ile biten 2. Grup isimleri, bu gruptaki eril (-us) ve cinssiz/nötr (-um) kelimeleri, nötr isimlerin evrensel kurallarını ve tam çekim tablolarını inceleyeceksiniz.",
    "difficulty": "Temel Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer3.1.pdf",
    "slideCount": 23,
    "topics": ["2. Grup İsimler (Declinatio II)", "Eril İsimler (-us, -i)", "Nötr İsimler (-um, -i)", "Nötr Kuralı", "servus Çekimi", "bellum Çekimi"],
    "vocab": ["servus", "deus", "dominus", "populus", "amicus", "filius", "equus", "bellum", "verbum", "consilium", "donum", "periculum", "otium", "officium"],
    "sections": [
      {
        "title": "1. 2. Grup İsimlerin Genel Özellikleri",
        "html": "<p>Tekil Genetivus hali <strong>-ī</strong> ekiyle biten isimler 2. Grup (Declinatio II) isimleridir. Bu gruptaki isimler ağırlıklı olarak iki ana bitime sahiptir:</p>\n<ul>\n  <li><strong>Tekil Nominativus -us ile bitenler:</strong> Genellikle <strong>Masculinum (Eril)</strong> cinstedir: <span class=\"lat-word\">servus</span>, <span class=\"lat-word\">servī</span>, m. (köle).</li>\n  <li><strong>Tekil Nominativus -um ile bitenler:</strong> İstisnasız <strong>Neutrum (Nötr / Cinssiz)</strong> cinstedir: <span class=\"lat-word\">bellum</span>, <span class=\"lat-word\">bellī</span>, n. (savaş).</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Latincede Evrensel Nötr (Neutrum) Kuralı",
        "calloutText": "Tüm çekim gruplarındaki nötr isimler için iki değişmez kural vardır:\n1) Nominativus, Vocativus ve Accusativus halleri tekilde birbiriyle aynı, çoğulda da birbiriyle aynıdır.\n2) Çoğul Nominativus, Vocativus ve Accusativus halleri daima kısa -a ile biter!",
        "tableHtml": ""
      },
      {
        "title": "2. 2. Çekim Eril Model: servus, -ī, m. (köle)",
        "html": "<p>Gövde, Tekil Genetivus'tan <em>-ī</em> takısının atılmasıyla bulunur: <span class=\"lat-word\">servī</span> &gt; Gövde: <strong>serv-</strong>.</p>",
        "calloutType": "warning",
        "calloutTitle": "Vocativus Tekil İstisnası!",
        "calloutText": "Latincede genel kural olarak Vocativus hali Nominativus ile aynıdır. Ancak 2. çekim -us ile biten eril isimlerde TEKİL VOCATIVUS hali -e ile biter: servus > serve (ey köle), Marcus > Marce. Eğer kelime -ius ile bitiyorsa tekil Vocativus -i olur: filius > fili (ey oğul), Vergilius > Vergili.",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus (Hal)</th><th>Singularis (Tekil)</th><th>Pluralis (Çoğul)</th><th>Türkçe Karşılığı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nominativus (Nom.)</strong></td><td class=\"case-cell-latin\">serv-<strong>us</strong></td><td class=\"case-cell-latin\">serv-<strong>ī</strong></td><td>köle / köleler</td></tr>\n      <tr><td><strong>Vocativus (Voc.)</strong></td><td class=\"case-cell-latin\">serv-<strong>e</strong></td><td class=\"case-cell-latin\">serv-<strong>ī</strong></td><td>ey köle / ey köleler</td></tr>\n      <tr><td><strong>Genetivus (Gen.)</strong></td><td class=\"case-cell-latin\">serv-<strong>ī</strong></td><td class=\"case-cell-latin\">serv-<strong>ōrum</strong></td><td>kölenin / kölelerin</td></tr>\n      <tr><td><strong>Dativus (Dat.)</strong></td><td class=\"case-cell-latin\">serv-<strong>ō</strong></td><td class=\"case-cell-latin\">serv-<strong>īs</strong></td><td>köleye / kölelere</td></tr>\n      <tr><td><strong>Accusativus (Acc.)</strong></td><td class=\"case-cell-latin\">serv-<strong>um</strong></td><td class=\"case-cell-latin\">serv-<strong>ōs</strong></td><td>köleyi / köleleri</td></tr>\n      <tr><td><strong>Ablativus (Abl.)</strong></td><td class=\"case-cell-latin\">serv-<strong>ō</strong></td><td class=\"case-cell-latin\">serv-<strong>īs</strong></td><td>köleyle, köleden / kölelerle</td></tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "title": "3. 2. Çekim Nötr Model: bellum, -ī, n. (savaş)",
        "html": "<p>Gövde: <strong>bell-</strong>.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus (Hal)</th><th>Singularis (Tekil)</th><th>Pluralis (Çoğul)</th><th>Türkçe Karşılığı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nominativus (Nom.)</strong></td><td class=\"case-cell-latin\">bell-<strong>um</strong></td><td class=\"case-cell-latin\">bell-<strong>a</strong></td><td>savaş / savaşlar</td></tr>\n      <tr><td><strong>Vocativus (Voc.)</strong></td><td class=\"case-cell-latin\">bell-<strong>um</strong></td><td class=\"case-cell-latin\">bell-<strong>a</strong></td><td>ey savaş / ey savaşlar</td></tr>\n      <tr><td><strong>Genetivus (Gen.)</strong></td><td class=\"case-cell-latin\">bell-<strong>ī</strong></td><td class=\"case-cell-latin\">bell-<strong>ōrum</strong></td><td>savaşın / savaşların</td></tr>\n      <tr><td><strong>Dativus (Dat.)</strong></td><td class=\"case-cell-latin\">bell-<strong>ō</strong></td><td class=\"case-cell-latin\">bell-<strong>īs</strong></td><td>savaşa / savaşlara</td></tr>\n      <tr><td><strong>Accusativus (Acc.)</strong></td><td class=\"case-cell-latin\">bell-<strong>um</strong></td><td class=\"case-cell-latin\">bell-<strong>a</strong></td><td>savaşı / savaşları</td></tr>\n      <tr><td><strong>Ablativus (Abl.)</strong></td><td class=\"case-cell-latin\">bell-<strong>ō</strong></td><td class=\"case-cell-latin\">bell-<strong>īs</strong></td><td>savaşla, savaştan / savaşlarla</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Dominus servō bonō dōnum dat.",
        "tr": "Efendi iyi köleye hediye verir.",
        "analysis": "Dominus (2. Çekim Eril, Nom. Sg. - Özne); servō bonō (Dat. Sg. - İyi köleye); dōnum (2. Çekim Nötr, Acc. Sg. - Belirtisiz Nesne); dat (do fiili, 3. Tekil Praesens)."
      },
      {
        "latin": "Bella perīcula magna habent.",
        "tr": "Savaşlar büyük tehlikelere sahiptir (büyük tehlikeler içerir).",
        "analysis": "Bella (Nom. Pl. n. - Savaşlar); perīcula magna (Acc. Pl. n. - Büyük tehlikeleri); habent (3. Çoğul Praesens - Sahiptirler)."
      }
    ],
    "studyTips": "Nötr isimlerde çoğul Nom, Voc, Acc takısının daima '-a' olduğunu unutmayınız. Bu '-a' dişil tekille karıştırılmamalıdır."
  },
  {
    "id": "T1_W3_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 3,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 3. Hafta (2. Ders)",
    "title": "2. GRUP İSİMLERDE İSTİSNALAR: -ER VE -IR İLE BİTENLER",
    "subtitle": "ager ve puer Ayrımı, 'e' Harfinin Düşmesi, vir Çekimi ve Vocativus Özellikleri",
    "summary": "Bu fasikülde 2. grupta yer alan ancak Nominativus hali -us yerine -er veya -ir ile biten kelimeleri, çekim esnasında 'e' sesini koruyanlar ile düşürenler arasındaki farkı ve vir (erkek/adam) kelimesini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "LatinceGramer3.2.pdf",
    "slideCount": 24,
    "topics": ["-er ile Biten İsimler", "'e' Düşürenler (ager, agri)", "'e' Koruyanlar (puer, pueri)", "vir, viri Çekimi", "Vocativus Kuralları"],
    "vocab": ["ager", "puer", "vir", "magister", "liberi", "liber"],
    "sections": [
      {
        "title": "1. -er ile Biten İsimlerde 'e' Harfinin Düşmesi Kuralı",
        "html": "<p>2. grupta Nominativus tekil hali <em>-er</em> ile biten eril isimler çekimlenirken iki farklı davranış sergiler:</p>\n<ol>\n  <li><strong>'e' Harfini Düşürenler (Senkop):</strong> Tekil Genetivus ve diğer hallerde gövdedeki 'e' harfi düşer. Sözlük yazımına bakarak anlaşılır:\n    <ul>\n      <li><span class=\"lat-word\">ager</span>, <span class=\"lat-word\">agrī</span>, m. (tarla) &gt; Gövde: <strong>agr-</strong> (Nom: ager, Voc: ager, Gen: agrī, Dat: agrō, Acc: agrum, Abl: agrō).</li>\n      <li><span class=\"lat-word\">magister</span>, <span class=\"lat-word\">magistrī</span>, m. (öğretmen) &gt; Gövde: <strong>magistr-</strong>.</li>\n      <li><span class=\"lat-word\">liber</span>, <span class=\"lat-word\">librī</span>, m. (kitap) &gt; Gövde: <strong>libr-</strong>.</li>\n    </ul>\n  </li>\n  <li><strong>'e' Harfini Koruyanlar:</strong> Gövdedeki 'e' harfi tüm çekim boyunca muhafaza edilir:\n    <ul>\n      <li><span class=\"lat-word\">puer</span>, <span class=\"lat-word\">puerī</span>, m. (oğlan çocuk) &gt; Gövde: <strong>puer-</strong> (Nom: puer, Voc: puer, Gen: puerī, Dat: puerō, Acc: puerum, Abl: puerō).</li>\n      <li><span class=\"lat-word\">līberī</span>, <span class=\"lat-word\">līberōrum</span>, m. pl. (çocuklar / hür kimseler).</li>\n    </ul>\n  </li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Vocativus Kuralı",
        "calloutText": "-er ile biten isimlerde Vocativus Singularis daima Nominativus ile aynıdır: ager > ager! puer > puer! vir > vir! (Asla -e takısı almazlar).",
        "tableHtml": ""
      },
      {
        "title": "2. vir, virī, m. (erkek, adam, kahraman) Çekimi",
        "html": "<p>2. grupta Nominativus hali <strong>-ir</strong> ile biten tek düzenli kelimedir. Gövde: <strong>vir-</strong>.</p>\n<p>Nom: <span class=\"lat-word\">vir</span> | Voc: <span class=\"lat-word\">vir</span> | Gen: <span class=\"lat-word\">virī</span> | Dat: <span class=\"lat-word\">virō</span> | Acc: <span class=\"lat-word\">virum</span> | Abl: <span class=\"lat-word\">virō</span><br>\nÇoğul: Nom: <span class=\"lat-word\">virī</span> | Voc: <span class=\"lat-word\">virī</span> | Gen: <span class=\"lat-word\">virōrum</span> | Dat: <span class=\"lat-word\">virīs</span> | Acc: <span class=\"lat-word\">virōs</span> | Abl: <span class=\"lat-word\">virīs</span>.</p>",
        "calloutType": "info",
        "calloutTitle": "fīlius ve meus Vocativus İstisnası",
        "calloutText": "fīlius kelimesinin Vocativus hali fīlī, meus iyelik sıfatının eril tekil Vocativus hali ise mī şeklindedir:\nMī fīlī! = Ey oğlum!",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Magister puerōs in agrō monet.",
        "tr": "Öğretmen tarlada çocukları uyarır.",
        "analysis": "Magister (Nom. Sg. - Öğretmen); puerōs (Acc. Pl. - Çocukları); in agrō (in + Abl. - Tarlada); monet (3. Tekil Praesens - Uyarır)."
      }
    ],
    "studyTips": "-er bitimli bir ismin 'e' düşürüp düşürmediğini anlamanın tek yolu sözlükteki Genetivus biçimine bakmaktır: ager, agri (düşürür); puer, pueri (düşürmez)."
  },
  {
    "id": "T1_W4_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 4,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 4. Hafta (1. Ders)",
    "title": "1. VE 2. SINIF SIFATLAR VE İSİM-SIFAT UYUMU",
    "subtitle": "bonus, -a, -um Tipi Sıfatlar, Üç Cins Çekimi ve Tam Uyumluluk Yasası",
    "summary": "Bu fasikülde 1. ve 2. çekim isimlerin eklerini kullanarak çekimlenen sıfatları (Adiectiva Declinatio I & II), sıfatların niteledikleri isimlerle olan Casus, Numerus ve Genus uyumunu ve isimleşmiş sıfatları (substantivum) öğreneceksiniz.",
    "difficulty": "Temel Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer4.1.pdf",
    "slideCount": 20,
    "topics": ["1. ve 2. Sınıf Sıfatlar", "bonus, -a, -um Modeli", "İsim-Sıfat Uyumu (Üçlü Kural)", "İsimleşmiş Sıfatlar"],
    "vocab": ["bonus", "magnus", "malus", "parvus", "verus", "multus", "pauci", "antiquus", "clarus"],
    "sections": [
      {
        "title": "1. Sıfatların Yapısı ve Çekim Mantığı",
        "html": "<p>Latincede sıfatlar, niteledikleri ismin cinsine göre üç farklı biçim alır:</p>\n<ul>\n  <li><strong>Eril bir ismi nitelerken:</strong> 2. Grup Eril isimler (-us / -er) gibi çekimlenir.</li>\n  <li><strong>Dişil bir ismi nitelerken:</strong> 1. Grup Dişil isimler (-a) gibi çekimlenir.</li>\n  <li><strong>Nötr bir ismi nitelerken:</strong> 2. Grup Nötr isimler (-um) gibi çekimlenir.</li>\n</ul>\n<p>Bu nedenle sözlüklerde <em>bonus, -a, -um</em> (iyi); <em>magnus, -a, -um</em> (büyük); <em>malus, -a, -um</em> (kötü) şeklinde yazılırlar.</p>",
        "calloutType": "rule",
        "calloutTitle": "İsim-Sıfat Tam Uyum Yasası",
        "calloutText": "Bir sıfat nitelediği isimle her zaman ve istisnasız CASUS, NUMERUS ve GENUS bakımından uyuşmak zorundadır!\nÖnemli: Bu kural eklerin AYNI olacağı anlamına GELMEZ; cinsin ve halin aynı olacağı anlamına gelir!\nÖrnek: agricola (çiftçi) ismi 1. çekimdedir ama cinsiyeti ERİLDİR. Bu yüzden 'iyi çiftçi' derken agricola bona denmez, agricola bonus denir!",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>Masculinum (Eril)</th><th>Femininum (Dişil)</th><th>Neutrum (Nötr)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\">bon-<strong>us</strong></td><td class=\"case-cell-latin\">bon-<strong>a</strong></td><td class=\"case-cell-latin\">bon-<strong>um</strong></td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\">bon-<strong>ī</strong></td><td class=\"case-cell-latin\">bon-<strong>ae</strong></td><td class=\"case-cell-latin\">bon-<strong>ī</strong></td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\">bon-<strong>ō</strong></td><td class=\"case-cell-latin\">bon-<strong>ae</strong></td><td class=\"case-cell-latin\">bon-<strong>ō</strong></td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\">bon-<strong>um</strong></td><td class=\"case-cell-latin\">bon-<strong>am</strong></td><td class=\"case-cell-latin\">bon-<strong>um</strong></td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\">bon-<strong>ō</strong></td><td class=\"case-cell-latin\">bon-<strong>ā</strong></td><td class=\"case-cell-latin\">bon-<strong>ō</strong></td></tr>\n      <tr><td><strong>Nom. Pl.</strong></td><td class=\"case-cell-latin\">bon-<strong>ī</strong></td><td class=\"case-cell-latin\">bon-<strong>ae</strong></td><td class=\"case-cell-latin\">bon-<strong>a</strong></td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\">bon-<strong>ōrum</strong></td><td class=\"case-cell-latin\">bon-<strong>ārum</strong></td><td class=\"case-cell-latin\">bon-<strong>ōrum</strong></td></tr>\n      <tr><td><strong>Acc. Pl.</strong></td><td class=\"case-cell-latin\">bon-<strong>ōs</strong></td><td class=\"case-cell-latin\">bon-<strong>ās</strong></td><td class=\"case-cell-latin\">bon-<strong>a</strong></td></tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "title": "2. İsimleşmiş Sıfatlar (Substantiva)",
        "html": "<p>Latincede sıfatlar yanlarında bir isim olmadan tek başlarına kullanıldıklarında isim işlevi kazanırlar:</p>\n<ul>\n  <li><strong>Eril Çoğul Sıfatlar:</strong> '... İnsanlar / Kişiler' anlamına gelir: <span class=\"lat-word\">bonī</span> (iyi insanlar / iyiler), <span class=\"lat-word\">paucī</span> (az sayıda insan), <span class=\"lat-word\">multī</span> (pek çok insan).</li>\n  <li><strong>Nötr Çoğul Sıfatlar:</strong> '... Şeyler' anlamına gelir: <span class=\"lat-word\">multa</span> (çok şey / pek çok şey), <span class=\"lat-word\">mala</span> (kötülükler / kötü şeyler), <span class=\"lat-word\">vēra</span> (gerçekler / doğru şeyler).</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Bonī virī patriam amant.",
        "tr": "İyi insanlar vatanı severler.",
        "analysis": "Bonī virī (Nom. Pl. m. - İyi insanlar); patriam (Acc. Sg. f. - Vatanı); amant (3. Çoğul Praesens - Severler)."
      },
      {
        "latin": "Multa perīcula nautam terrent.",
        "tr": "Pek çok tehlike denizciyi korkutur.",
        "analysis": "Multa perīcula (Nom. Pl. n. - Pek çok tehlike); nautam (Acc. Sg. m. - Denizciyi); terrent (terreo fiili, 3. Çoğul Praesens - Korkuturlar)."
      }
    ],
    "studyTips": "İsim-sıfat uyumunda ismin çekim grubuna değil, cinsiyetine (genus) dikkat ediniz: poeta bonus, nauta peritus, agricola strenuus."
  },
  {
    "id": "T1_W4_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 4,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 4. Hafta (2. Ders)",
    "title": "-ER İLE BİTEN SIFATLAR VE İYELİK SIFATLARI",
    "subtitle": "pulcher ve liber Tipi Sıfatlar, İyelik Sıfatları (meus, tuus, noster, vester) ve Okuma Parçası",
    "summary": "Bu fasikülde eril Nominativus hali -er ile biten sıfatları (pulcher, pulchra, pulchrum vs liber, libera, liberum), Latince iyelik sıfatlarını ve Doç. Dr. Eyüp Çoraklı'nın ders notlarındaki okuma parçasını inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "LatinceGramer4.2.pdf",
    "slideCount": 24,
    "topics": ["-er ile Biten Sıfatlar", "pulcher (e düşüren)", "liber (e koruyan)", "İyelik Sıfatları", "Okuma Parçası Tahlili"],
    "vocab": ["pulcher", "liber", "miser", "noster", "vester", "meus", "tuus", "suus"],
    "sections": [
      {
        "title": "1. -er ile Biten Sıfatlarda 'e' Harfinin Düşmesi",
        "html": "<p>Tıpkı 2. çekim isimlerde olduğu gibi, eril Nominativus hali <em>-er</em> ile biten sıfatlar da ikiye ayrılır:</p>\n<ol>\n  <li><strong>'e' Harfini Düşürenler:</strong> Dişil (-a) ve nötr (-um) hallerinde 'e' düşer:\n    <ul>\n      <li><span class=\"lat-word\">pulcher</span>, <span class=\"lat-word\">pulchra</span>, <span class=\"lat-word\">pulchrum</span> (güzel)</li>\n      <li><span class=\"lat-word\">noster</span>, <span class=\"lat-word\">nostra</span>, <span class=\"lat-word\">nostrum</span> (bizim / bize ait)</li>\n      <li><span class=\"lat-word\">vester</span>, <span class=\"lat-word\">vestra</span>, <span class=\"lat-word\">vestrum</span> (sizin / size ait)</li>\n    </ul>\n  </li>\n  <li><strong>'e' Harfini Koruyanlar:</strong> Gövdedeki 'e' tüm cinslerde korunur:\n    <ul>\n      <li><span class=\"lat-word\">līber</span>, <span class=\"lat-word\">lībera</span>, <span class=\"lat-word\">līberum</span> (özgür, hür)</li>\n      <li><span class=\"lat-word\">miser</span>, <span class=\"lat-word\">misera</span>, <span class=\"lat-word\">miserum</span> (zavallı, talihsiz)</li>\n    </ul>\n  </li>\n</ol>",
        "calloutType": "info",
        "calloutTitle": "İyelik Sıfatları (Adiectiva Possessiva)",
        "calloutText": "meus, -a, -um (benim)\ntuus, -a, -um (senin)\nsuus, -a, -um (kendi / kendisinin)\nnoster, nostra, nostrum (bizim)\nvester, vestra, vestrum (sizin)\nBu kelimeler zamir değil, sıfattır; dolayısıyla niteledikleri ismin cinsi, sayısı ve haliyle tam uyum sağlarlar: patria nostra (vatanımız - dişil), amicus meus (arkadaşım - eril).",
        "tableHtml": ""
      },
      {
        "title": "2. Okuma Parçası: Hakiki Dostluk Üzerine",
        "html": "<div class=\"latin-quote-block\">\nPaucī virī vērōs amīcōs habent, et paucī sunt dignī. Amīcitia vēra est praeclāra et omnia praeclāra sunt rāra. Multī virī stultī dē pecūniā semper cōgitant, paucī dē amīcīs; sed errant: possumus valēre sine multā pecūniā, sed sine amīcitiā nōn valēmus, et vīta est nihil.\n</div>\n<div class=\"latin-translation-line\">\n↳ <em>Pek az kişi hakiki dostlara sahiptir ve pek az kişi buna layıktır. Hakiki dostluk muhteşem bir şeydir; bütün muhteşem şeyler de nadirdir. Pek çok aptal adam daima para hakkında düşünür, pek azı ise dostları hakkında; ama yanılırlar: Çok fazla para olmadan da iyi durumda olabiliriz, ama dostluk olmadan iyi olamayız; ve hayat hiçtir (hiçbir değer ifade etmez).</em>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Officium līberōs virōs semper vocābat.",
        "tr": "Görev her zaman özgür adamları çağırırdı.",
        "analysis": "Officium (Nom. Sg. n. - Görev); līberōs virōs (Acc. Pl. m. - Özgür adamları); semper (Zarf - Her zaman); vocābat (3. Tekil Imperfectum - Çağırırdı)."
      }
    ],
    "studyTips": "İyelik sıfatlarında 'bizim' (noster) ve 'sizin' (vester) kelimelerinin dişil ve nötrde 'e' düşürdüğünü (nostra, vestra) unutmayınız."
  },
  {
    "id": "T1_W5_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 5,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 5. Hafta (1. Ders)",
    "title": "ŞİMDİKİ ZAMANIN HİKÂYESİ (IMPERFECTUM)",
    "subtitle": "Modus Indicativus Vox Activa Imperfectum: -bam, -bās, -bat Ekleri ve Geçmişte Süreklilik",
    "summary": "Bu fasikülde geçmişte devam eden, alışkanlık bildiren veya tekrarlanan eylemleri ifade eden Şimdiki Zamanın Hikâyesini (Imperfectum), fiil gövdesine getirilen -ba- zaman ekini ve 1. ile 2. çekim fiillerdeki çekimlerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "LatinceGramer5.1.pdf",
    "slideCount": 14,
    "topics": ["Imperfectum Zamanı", "Zaman Eki (-ba-)", "Geçmişte Süreklilik ve Alışkanlık", "laudābam Çekimi", "monēbam Çekimi"],
    "vocab": ["laudo", "moneo", "saepe", "heri", "supero", "maneo", "adiuvo"],
    "sections": [
      {
        "title": "1. Imperfectum Zamanının Anlamı ve İşlevi",
        "html": "<p>Latincede <strong>Imperfectum</strong> zamanı, geçmişte tamamlanmamış, bir süre devam etmiş, alışkanlık haline gelmiş veya kesintiye uğramış eylemleri anlatır. Türkçeye genellikle <em>'-yordu'</em> veya <em>'-ardı/-erdi'</em> şeklinde aktarılır:</p>\n<ul>\n  <li><span class=\"lat-word\">Nautam monēbam.</span> = Denizciyi uyarıyordum.</li>\n  <li><span class=\"lat-word\">Nautam saepe monēbam.</span> = Denizciyi sık sık uyarırdım (alışkanlık).</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Imperfectum Oluşturma Formülü",
        "calloutText": "Praesens Gövdesi + -ba- (Zaman Eki) + Şahıs Ekleri (-m, -s, -t, -mus, -tis, -nt)\nDikkat: 1. tekil şahısta -ō yerine -m eki kullanılır: lauda-ba-m.",
        "tableHtml": ""
      },
      {
        "title": "2. Imperfectum Çekim Tablosu (1. ve 2. Çekim)",
        "html": "<p>1. çekimde gövdedeki -ā-, 2. çekimde ise -ē- sesi korunur:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs</th><th>1. Çekim: laudāre (övmek)</th><th>2. Çekim: monēre (uyarmak)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bam</strong></td><td class=\"case-cell-latin\">monē-<strong>bam</strong></td><td>övüyordum / överdim</td></tr>\n      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bās</strong></td><td class=\"case-cell-latin\">monē-<strong>bās</strong></td><td>övüyordun / överdin</td></tr>\n      <tr><td><strong>3. Sg. (O)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bat</strong></td><td class=\"case-cell-latin\">monē-<strong>bat</strong></td><td>övüyordu / överdi</td></tr>\n      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bāmus</strong></td><td class=\"case-cell-latin\">monē-<strong>bāmus</strong></td><td>övüyorduk / överdik</td></tr>\n      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bātis</strong></td><td class=\"case-cell-latin\">monē-<strong>bātis</strong></td><td>övüyordunuz / överdiniz</td></tr>\n      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bant</strong></td><td class=\"case-cell-latin\">monē-<strong>bant</strong></td><td>övüyorlardı / överlerdi</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Poētae vītam agricolae laudābant.",
        "tr": "Şairler çiftçinin yaşamını övüyorlardı.",
        "analysis": "Poētae (Nom. Pl. m. - Şairler); vītam (Acc. Sg. f. - Yaşamı); agricolae (Gen. Sg. m. - Çiftçinin); laudābant (3. Çoğul Imperfectum - Övüyorlardı)."
      },
      {
        "latin": "Magister puerōs in agrīs vocābat.",
        "tr": "Öğretmen çocukları tarlalarda çağırıyordu.",
        "analysis": "Magister (Nom. Sg. - Öğretmen); puerōs (Acc. Pl. - Çocukları); vocābat (3. Tekil Imperfectum)."
      }
    ],
    "studyTips": "Imperfectum eklerinin ortasındaki '-ba-' hecesi Türkçedeki '-ba-şlıyordu' çağrışımıyla kolayca akılda tutulabilir."
  },
  {
    "id": "T1_W5_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 5,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 5. Hafta (2. Ders)",
    "title": "GELECEK ZAMAN (FUTURUM I - 1. VE 2. ÇEKİM)",
    "subtitle": "Modus Indicativus Vox Activa Futurum: -bō, -bis, -bit Ekleri ve Soru Kalıpları",
    "summary": "Bu fasikülde 1. ve 2. çekim fiillerde Gelecek Zaman (Futurum I) yapılışını, şahıs eklerindeki bağlayıcı ünlü değişimlerini (-i-, -u-) ve Latincede soru cümlelerinin kuruluşunu inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "LatinceGramer5.2.pdf",
    "slideCount": 11,
    "topics": ["Gelecek Zaman (Futurum I)", "1. ve 2. Çekimde -bo/-bis/-bit", "Bağlayıcı Ünlüler", "laudābō Çekimi", "Soru Edatları (-ne, nonne, num)"],
    "vocab": ["cras", "propter", "culpa", "remedium", "supero", "valeo"],
    "sections": [
      {
        "title": "1. 1. ve 2. Çekimde Futurum I Yapılışı",
        "html": "<p>1. ve 2. çekim fiillerde gelecek zaman, Praesens gövdesine <strong>-b-</strong> gelecek zaman sesinin ve sırasıyla <em>-ō, -is, -it, -imus, -itis, -unt</em> şahıs eklerinin getirilmesiyle yapılır:</p>",
        "calloutType": "warning",
        "calloutTitle": "Önemli Kural Uyarısı",
        "calloutText": "-bō, -bis, -bit ekleri YALNIZCA 1. ve 2. çekim fiiller için geçerlidir! 3. ve 4. çekim fiillerde gelecek zaman bambaşka bir kuralla (-am, -es, -et) yapılacaktır.",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs</th><th>1. Çekim: laudāre (övmek)</th><th>2. Çekim: monēre (uyarmak)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bō</strong></td><td class=\"case-cell-latin\">monē-<strong>bō</strong></td><td>öveceğim</td></tr>\n      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bis</strong></td><td class=\"case-cell-latin\">monē-<strong>bis</strong></td><td>öveceksin</td></tr>\n      <tr><td><strong>3. Sg. (O)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bit</strong></td><td class=\"case-cell-latin\">monē-<strong>bit</strong></td><td>övecek</td></tr>\n      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bimus</strong></td><td class=\"case-cell-latin\">monē-<strong>bimus</strong></td><td>öveceğiz</td></tr>\n      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bitis</strong></td><td class=\"case-cell-latin\">monē-<strong>bitis</strong></td><td>öveceksiniz</td></tr>\n      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=\"case-cell-latin\">laudā-<strong>bunt</strong></td><td class=\"case-cell-latin\">monē-<strong>bunt</strong></td><td>övecekler</td></tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "title": "2. Latincede Soru Cümleleri",
        "html": "<p>Latincede soru sormak için cümlenin ilk kelimesine bitişik yazılan soru eki kullanılır:</p>\n<ul>\n  <li><strong>-ne (Enklitik Soru Eki):</strong> Cümlenin en önemli kelimesine eklenir; tarafsız bir 'mı/mi?' sorusudur: <span class=\"lat-word\">Habēbimusne multōs virōs?</span> (Pek çok adama sahip olacak mıyız?).</li>\n  <li><strong>nōnne:</strong> 'Değil mi?' anlamında, olumlu yanıt beklenen sorularda kullanılır.</li>\n  <li><strong>num:</strong> Olumsuz yanıt beklenen sorularda kullanılır ('Acaba ... mı? Yoksa değil mi?').</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Perīcula bellī nōn sunt parva, sed patria tua tē vocābit.",
        "tr": "Savaşın tehlikeleri küçük değildir, ama senin vatanın seni çağıracaktır.",
        "analysis": "Perīcula bellī (Nom. Pl. n. - Savaşın tehlikeleri); nōn sunt parva (Küçük değildir); sed (Fakat); patria tua (Nom. Sg. f. - Senin vatanın); tē (Acc. - Seni); vocābit (3. Tekil Futurum - Çağıracaktır)."
      },
      {
        "latin": "Propter culpās malōrum patria nostra nōn valēbit.",
        "tr": "Kötülerin suçları yüzünden vatanımız güçlü olmayacaktır.",
        "analysis": "Propter culpās (propter + Acc. - Suçları yüzünden); malōrum (Gen. Pl. - Kötülerin); valēbit (3. Tekil Futurum - Güçlü olacaktır)."
      }
    ],
    "studyTips": "3. çoğul şahısta ekin '-bunt' olduğuna dikkat ediniz (Imperfectum'daki '-bant' ile karıştırılmamalıdır)."
  },
  {
    "id": "T1_W6_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 6,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 6. Hafta (1. Ders)",
    "title": "DÜZENSİZ FİİLLER 1: ESSE (OLMAK)",
    "subtitle": "sum, esse, fuī, futūrum: Praesens, Imperfectum ve Futurum Çekimleri",
    "summary": "Bu fasikülde Latin dilinin en temel ve en sık kullanılan yardımcı fiili olan 'olmak' (esse) fiilini, kök değişimlerini ve üç temel zamandaki çekimlerini kavrayacaksınız.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer6.1.pdf",
    "slideCount": 12,
    "topics": ["Düzensiz Fiiller", "esse Fiili", "sum, esse, fui, futurum", "Praesens (sum, es, est...)", "Imperfectum (eram, eras...)", "Futurum (ero, eris...)"],
    "vocab": ["sum", "otium", "exitium", "basium", "animus", "dignus", "stultus"],
    "sections": [
      {
        "title": "1. esse (Olmak) Fiilinin Temel Parçaları",
        "html": "<p>Latince sözlüklerde <em>esse</em> fiili şu şekilde yer alır: <strong>sum, esse, fuī, futūrum</strong> (olmak, var olmak). Hint-Avrupa kökenli iki ayrı kökten türediği için kök değişimleri gösterir (es- ve fu- kökleri).</p>",
        "calloutType": "rule",
        "calloutTitle": "Yüklem İsim Tamlayanı (Praedicativum)",
        "calloutText": "esse fiili geçişsiz bir bağ fiildir (kopula). Bu nedenle hiçbir zaman nesne (Accusativus) almaz! 'A, B'dir' derken her iki isim de Nominativus halinde bulunur: Vita est supplicium (Hayat bir cezadır).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs</th><th>Praesens (Şimdiki/Geniş)</th><th>Imperfectum (Hikâye)</th><th>Futurum I (Gelecek)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=\"case-cell-latin\"><strong>sum</strong> (oluyorum / varım)</td><td class=\"case-cell-latin\"><strong>eram</strong> (oluyordum / vardım)</td><td class=\"case-cell-latin\"><strong>erō</strong> (olacağım)</td></tr>\n      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=\"case-cell-latin\"><strong>es</strong> (oluyorsun / varsın)</td><td class=\"case-cell-latin\"><strong>erās</strong> (oluyordun / vardın)</td><td class=\"case-cell-latin\"><strong>eris</strong> (olacaksın)</td></tr>\n      <tr><td><strong>3. Sg. (O)</strong></td><td class=\"case-cell-latin\"><strong>est</strong> (oluyor / var / -dir)</td><td class=\"case-cell-latin\"><strong>erat</strong> (oluyordu / vardı)</td><td class=\"case-cell-latin\"><strong>erit</strong> (olacak)</td></tr>\n      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=\"case-cell-latin\"><strong>sumus</strong> (oluyoruz / varız)</td><td class=\"case-cell-latin\"><strong>erāmus</strong> (oluyorduk / vardık)</td><td class=\"case-cell-latin\"><strong>erimus</strong> (olacağız)</td></tr>\n      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=\"case-cell-latin\"><strong>estis</strong> (oluyorsunuz / varsınız)</td><td class=\"case-cell-latin\"><strong>erātis</strong> (oluyordunuz / vardınız)</td><td class=\"case-cell-latin\"><strong>eritis</strong> (olacaksınız)</td></tr>\n      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=\"case-cell-latin\"><strong>sunt</strong> (oluyorlar / varlar / -dirler)</td><td class=\"case-cell-latin\"><strong>erant</strong> (oluyorlardı / vardılar)</td><td class=\"case-cell-latin\"><strong>erunt</strong> (olacaklar)</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Vīta est nihil sine amīcitiā.",
        "tr": "Dostluk olmadan hayat bir hiçtir.",
        "analysis": "Vīta (Nom. Sg. f. - Hayat); est (3. Tekil Praesens - -dir); nihil (Nom. n. - Hiç); sine amīcitiā (sine + Abl. - Dostluk olmadan)."
      },
      {
        "latin": "Malī sunt in nostrō numerō et dē exitiō bonōrum cōgitant.",
        "tr": "Aramızda kötüler var ve iyi insanların yıkımını tasarlıyorlar.",
        "analysis": "Malī (Nom. Pl. m. - Kötü insanlar); sunt (Var / Vardırlar); in nostrō numerō (Aramızda / Sayımız içinde); cōgitant (Düşünüyorlar)."
      }
    ],
    "studyTips": "Imperfectum ve Futurum çekimlerinde gövdenin er- olduğunu fark ediniz: eram, eras, erat / ero, eris, erit."
  },
  {
    "id": "T1_W6_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 6,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 6. Hafta (2. Ders)",
    "title": "DÜZENSİZ FİİLLER 2: POSSE (-EBİLMEK) VE ESSE KALIPLARI",
    "subtitle": "possum, posse, potuī: Bileşik Fiil Yapısı, Esse + Gen. ve Esse + Dat. Kalıpları",
    "summary": "Bu fasikülde 'potis' (muktedir) sıfatı ile 'esse' fiilinin birleşiminden doğan posse fiilini, ses benzeşmesi kurallarını, Latince mülkiyet bildiren özel sentaks kalıplarını öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer6.2.pdf",
    "slideCount": 13,
    "topics": ["posse Fiili", "Ses Benzeşmesi (pot- + s- > pos-)", "possum Çekimi", "Esse + Genetivus (Aitlik)", "Esse + Dativus (Sahiplik)"],
    "vocab": ["possum", "remaneo", "conservo", "invidia", "sustineo", "angustus", "sanus", "otium"],
    "sections": [
      {
        "title": "1. posse Fiilinin Yapısı ve Ses Benzeşmesi (Assimilatio)",
        "html": "<p><em>Posse</em> fiili, 'muktedir, gücü yeten' anlamına gelen <strong>potis</strong> sıfat kökü (<strong>pot-</strong>) ile <strong>esse</strong> fiilinin birleşiminden oluşmuştur.</p>\n<p><strong>Benzeşme Kuralı:</strong> Gövdedeki <em>-t-</em> sesi, <em>-s-</em> sesiyle başlayan takılar önünde <em>-s-</em> sesine dönüşür: <strong>pot-sum &gt; pos-sum</strong>.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs</th><th>Praesens (Şimdiki Zaman)</th><th>Imperfectum (Hikâye)</th><th>Futurum I (Gelecek)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg.</strong></td><td class=\"case-cell-latin\"><strong>pos-sum</strong> (-ebilirim)</td><td class=\"case-cell-latin\"><strong>pot-eram</strong> (-ebilirdim)</td><td class=\"case-cell-latin\"><strong>pot-erō</strong> (-ebileceğim)</td></tr>\n      <tr><td><strong>2. Sg.</strong></td><td class=\"case-cell-latin\"><strong>pot-es</strong> (-ebilirsin)</td><td class=\"case-cell-latin\"><strong>pot-erās</strong> (-ebilirdin)</td><td class=\"case-cell-latin\"><strong>pot-eris</strong> (-ebileceksin)</td></tr>\n      <tr><td><strong>3. Sg.</strong></td><td class=\"case-cell-latin\"><strong>pot-est</strong> (-ebilir)</td><td class=\"case-cell-latin\"><strong>pot-erat</strong> (-ebilirdi)</td><td class=\"case-cell-latin\"><strong>pot-erit</strong> (-ebilecek)</td></tr>\n      <tr><td><strong>1. Pl.</strong></td><td class=\"case-cell-latin\"><strong>pos-sumus</strong> (-ebiliriz)</td><td class=\"case-cell-latin\"><strong>pot-erāmus</strong> (-ebilirdik)</td><td class=\"case-cell-latin\"><strong>pot-erimus</strong> (-ebileceğiz)</td></tr>\n      <tr><td><strong>2. Pl.</strong></td><td class=\"case-cell-latin\"><strong>pot-estis</strong> (-ebilirsiniz)</td><td class=\"case-cell-latin\"><strong>pot-erātis</strong> (-ebilirdiniz)</td><td class=\"case-cell-latin\"><strong>pot-eritis</strong> (-ebileceksiniz)</td></tr>\n      <tr><td><strong>3. Pl.</strong></td><td class=\"case-cell-latin\"><strong>pos-sunt</strong> (-ebilirler)</td><td class=\"case-cell-latin\"><strong>pot-erant</strong> (-ebilirlerdi)</td><td class=\"case-cell-latin\"><strong>pot-erunt</strong> (-ebilecekler)</td></tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "title": "2. Esse ile Kurulan Özel Sahiplik / Aidiyet Kalıpları",
        "html": "<ol>\n  <li><strong>ESSE + GENETIVUS (Aidiyet Bildirir):</strong> Bir nesnenin kime ait olduğunu veya kime yakıştığını ifade eder:\n    <ul>\n      <li><span class=\"lat-word\">Equus est agricolae.</span> = At çiftçinindir (çiftçiye aittir).</li>\n      <li><span class=\"lat-word\">Casa est Rōmānōrum.</span> = Ev Romalılara aittir.</li>\n      <li><span class=\"lat-word\">Culpa erit puerī.</span> = Suç çocuğun olacaktır.</li>\n    </ul>\n  </li>\n  <li><strong>ESSE + DATIVUS (Sahiplik Bildirir - Dativus Possessivus):</strong> Türkçedeki '...-ın ...-ı var' kalıbının Latince karşılığıdır:\n    <ul>\n      <li><span class=\"lat-word\">Sunt dōna servō.</span> = Kölenin hediyeleri var (Hediyeler köle içindir).</li>\n      <li><span class=\"lat-word\">Librī erunt puerō.</span> = Çocuğun kitapları olacak.</li>\n      <li><span class=\"lat-word\">Agrī erant agricolae.</span> = Çiftçinin tarlaları vardı.</li>\n    </ul>\n  </li>\n</ol>",
        "calloutType": "info",
        "calloutTitle": "Dativus Possessivus Çeviri Tekniği",
        "calloutText": "Mihi est liber cümlesi kelimesi kelimesine 'Bana bir kitap vardır' demektir, ancak Türkçeye daima 'Benim bir kitabım var' şeklinde aktarılmalıdır.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Amīcī nostrī poterant superāre multa perīcula.",
        "tr": "Bizim arkadaşlarımız pek çok tehlikenin üstesinden gelebiliyordu.",
        "analysis": "Amīcī nostrī (Nom. Pl. - Arkadaşlarımız); poterant (3. Çoğul Imperfectum - Gelebiliyordu); superāre (Mastar - Üstesinden gelmek); multa perīcula (Acc. Pl. - Pek çok tehlikeyi)."
      }
    ],
    "studyTips": "possum fiili anlamını daima bir mastarla (Infinitivus) tamamlar: possum videre (görebilirim), possum superare (alt edebilirim)."
  },
  {
    "id": "T1_W9_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 9,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 9. Hafta (1. Ders)",
    "title": "3. GRUP İSİMLER 1: SESSİZ GÖVDELİ İSİMLER (CONSONANT STEMS)",
    "subtitle": "Declinatio III: Tekil Genetivus -is Takısı, Gövde Bulma Yöntemi, rex ve lex Çekimleri",
    "summary": "Bu fasikülde Latincede en geniş ve en zengin kelime grubunu oluşturan 3. Grup isimlerin temel mantığını, gövdeleri bir sessiz harfle biten isimleri, Eril/Dişil ile Nötr arasındaki takı farklarını ve tam çekimlerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer9.1.pdf",
    "slideCount": 15,
    "topics": ["3. Grup İsimler (Declinatio III)", "Sessiz Gövdeli İsimler", "Gövde Bulma Yöntemi", "Takılar Tablosu", "rex, regis (m.) Çekimi", "lex, legis (f.) Çekimi"],
    "vocab": ["rex", "lex", "virtus", "homo", "flos", "corpus", "carmen", "miles", "dux", "pax"],
    "sections": [
      {
        "title": "1. 3. Grup İsimlerin Tanımı ve Gövde Bulma Yöntemi",
        "html": "<p>Tekil Genetivus hali <strong>–is</strong> takısıyla biten isimler 3. Grup (Declinatio III) isimleridir. Bu isimlerin Tekil Nominativus halleri sabit bir kalıba sahip değildir; <em>-s, -x, -r, -l, -n, -o, -c, -t</em> gibi pek çok farklı harfle bitebilir.</p>\n<p><strong>Gövde Bulma Yöntemi:</strong> 3. Grup isimlerde gövde, sözlükte verilen <strong>Tekil Genetivus halindeki –is takısının atılmasıyla</strong> bulunur:</p>\n<ul>\n  <li><span class=\"lat-word\">mīles</span> &gt; Gen: <span class=\"lat-word\">mīlit-is</span> &gt; Gövde: <strong>mīlit-</strong> (asker)</li>\n  <li><span class=\"lat-word\">lēx</span> &gt; Gen: <span class=\"lat-word\">lēg-is</span> &gt; Gövde: <strong>lēg-</strong> (yasa)</li>\n  <li><span class=\"lat-word\">corpus</span> &gt; Gen: <span class=\"lat-word\">corpor-is</span> &gt; Gövde: <strong>corpor-</strong> (beden)</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "3. Çekim Sessiz Gövdeli Takılar Tablosu",
        "calloutText": "MASCULINUM & FEMININUM:\nNom: — | Voc: — | Gen: -is | Dat: -ī | Acc: -em | Abl: -e\nÇoğul: Nom: -ēs | Voc: -ēs | Gen: -um | Dat: -ibus | Acc: -ēs | Abl: -ibus\n\nNEUTRUM (NÖTR):\nNom: — | Voc: — | Gen: -is | Dat: -ī | Acc: — | Abl: -e\nÇoğul: Nom: -a | Voc: -a | Gen: -um | Dat: -ibus | Acc: -a | Abl: -ibus",
        "tableHtml": ""
      },
      {
        "title": "2. Model Çekimler: rex, rēgis, m. (kral) ve lēx, lēgis, f. (yasa)",
        "html": "<p>rēx &lt; rēg-s (gövde: <strong>rēg-</strong>) | lēx &lt; lēg-s (gövde: <strong>lēg-</strong>):</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus (Hal)</th><th>rēx, rēgis m. (kral) Tekil / Çoğul</th><th>lēx, lēgis f. (yasa) Tekil / Çoğul</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nominativus (Nom.)</strong></td><td class=\"case-cell-latin\">rēx / rēg-<strong>ēs</strong></td><td class=\"case-cell-latin\">lēx / lēg-<strong>ēs</strong></td><td>kral / krallar</td></tr>\n      <tr><td><strong>Vocativus (Voc.)</strong></td><td class=\"case-cell-latin\">rēx / rēg-<strong>ēs</strong></td><td class=\"case-cell-latin\">lēx / lēg-<strong>ēs</strong></td><td>ey kral / ey krallar</td></tr>\n      <tr><td><strong>Genetivus (Gen.)</strong></td><td class=\"case-cell-latin\">rēg-<strong>is</strong> / rēg-<strong>um</strong></td><td class=\"case-cell-latin\">lēg-<strong>is</strong> / lēg-<strong>um</strong></td><td>kralın / kralların</td></tr>\n      <tr><td><strong>Dativus (Dat.)</strong></td><td class=\"case-cell-latin\">rēg-<strong>ī</strong> / rēg-<strong>ibus</strong></td><td class=\"case-cell-latin\">lēg-<strong>ī</strong> / lēg-<strong>ibus</strong></td><td>krala / krallara</td></tr>\n      <tr><td><strong>Accusativus (Acc.)</strong></td><td class=\"case-cell-latin\">rēg-<strong>em</strong> / rēg-<strong>ēs</strong></td><td class=\"case-cell-latin\">lēg-<strong>em</strong> / lēg-<strong>ēs</strong></td><td>kralı / kralları</td></tr>\n      <tr><td><strong>Ablativus (Abl.)</strong></td><td class=\"case-cell-latin\">rēg-<strong>e</strong> / rēg-<strong>ibus</strong></td><td class=\"case-cell-latin\">lēg-<strong>e</strong> / lēg-<strong>ibus</strong></td><td>kralla / krallarla</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Bonus rēx lēgibus novīs civitātem regit.",
        "tr": "İyi kral yeni yasalarla devleti yönetir.",
        "analysis": "Bonus rēx (Nom. Sg. m. - İyi kral); lēgibus novīs (Abl. Pl. f. - Yeni yasalarla); civitātem (Acc. Sg. f. - Devleti); regit (rego fiili, 3. Tekil Praesens - Yönetir)."
      }
    ],
    "studyTips": "3. grup bir kelime öğrenirken ASLA sadece Nominativus halini ezberlemeyiniz; daima Genetivus haliyle birlikte ezberleyiniz (örn. 'miles, militis')."
  },
  {
    "id": "T1_W9_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 9,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 9. Hafta (2. Ders)",
    "title": "3. GRUP İSİMLER 2: NÖTR İSİMLER VE CİNS İPUÇLARI",
    "subtitle": "corpus ve carmen Çekimleri, Cins Belirleme Kuralları ve İstisnalar",
    "summary": "Bu fasikülde 3. gruptaki nötr isimleri (corpus, corporis; carmen, carminis), hece sayısı artan kelimeleri ve tekil Nominativus bitimlerine göre cins tayini yapma kurallarını inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer9.2.pdf",
    "slideCount": 17,
    "topics": ["3. Grup Nötr İsimler", "corpus, corporis (n.)", "carmen, carminis (n.)", "Cins Belirleme İpuçları (Eril, Dişil, Nötr)", "İstisna Kelimeler"],
    "vocab": ["corpus", "carmen", "homo", "flos", "tempus", "vulnus", "caput", "nomen", "flumen"],
    "sections": [
      {
        "title": "1. 3. Grup Nötr İsimler: corpus (beden) ve carmen (şarkı)",
        "html": "<p>Nötr kuralı gereğince Tekil Nom, Voc ve Acc birbirine eşittir; Çoğul Nom, Voc ve Acc ise <strong>-a</strong> ile biter:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>corpus, -oris n. (beden)</th><th>carmen, -inis n. (şarkı)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\">corpus</td><td class=\"case-cell-latin\">carmen</td><td>beden / şarkı</td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\">corpor-<strong>is</strong></td><td class=\"case-cell-latin\">carmin-<strong>is</strong></td><td>bedenin / şarkının</td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\">corpor-<strong>ī</strong></td><td class=\"case-cell-latin\">carmin-<strong>ī</strong></td><td>bedene / şarkıya</td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\">corpus</td><td class=\"case-cell-latin\">carmen</td><td>bedeni / şarkıyı</td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\">corpor-<strong>e</strong></td><td class=\"case-cell-latin\">carmin-<strong>e</strong></td><td>bedenle / şarkıyla</td></tr>\n      <tr><td><strong>Nom. Pl.</strong></td><td class=\"case-cell-latin\">corpor-<strong>a</strong></td><td class=\"case-cell-latin\">carmin-<strong>a</strong></td><td>bedenler / şarkılar</td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\">corpor-<strong>um</strong></td><td class=\"case-cell-latin\">carmin-<strong>um</strong></td><td>bedenlerin / şarkıların</td></tr>\n      <tr><td><strong>Acc. Pl.</strong></td><td class=\"case-cell-latin\">corpor-<strong>a</strong></td><td class=\"case-cell-latin\">carmin-<strong>a</strong></td><td>bedenleri / şarkıları</td></tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "title": "2. Eyüp Hoca'nın 3. Grup İsimlerde Cins Belirleme İpuçları",
        "html": "<ol>\n  <li><strong>Genelde Eril (Masculinum) Olanlar:</strong> Tekil Nom. hali <em>-o, -or, -os, -er, -ex, -es</em> ile bitenler (örn: leo, leonis: aslan; rector, rectoris: yönetici; flos, floris: çiçek). <em>İstisnalar: arbor (ağaç - f.), os, oris (ağız - n.).</em></li>\n  <li><strong>Genelde Dişil (Femininum) Olanlar:</strong> Tekil Nom. hali <em>-as, -is, -es, -x, -s, -do, -go, -io</em> ile bitenler (örn: libertas, -atis: özgürlük; nox, noctis: gece; ratio, -onis: akıl; virgo, -inis: genç kız). <em>İstisnalar: dux (komutan - m.), mons (dağ - m.), dens (diş - m.), pons (köprü - m.).</em></li>\n  <li><strong>Genelde Nötr (Neutrum) Olanlar:</strong> Tekil Nom. hali <em>-us, -en, -al, -ar, -e, -c, -t, -ur</em> ile bitenler (örn: corpus: beden; flumen: nehir; animal: hayvan; caput: baş, kafa).</li>\n</ol>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Hominēs dē glōriā et tempore cōgitant.",
        "tr": "İnsanlar şan ve zaman hakkında düşünürler.",
        "analysis": "Hominēs (homo, hominis m., Nom. Pl. - İnsanlar); cōgitant (Düşünürler)."
      }
    ],
    "studyTips": "-us ile biten bir 3. çekim ismin (corpus, tempus, vulnus) 2. çekim eril isimlerle karıştırılmaması için Genetivus tekiline (-oris, -eris) bakınız."
  },
  {
    "id": "T1_W11_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 11,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 11. Hafta (1. Ders)",
    "title": "3. GRUP İSİMLER 3: -I GÖVDELİ VE DÜZENSİZ İSİMLER",
    "subtitle": "Declinatio III i-Stems: urbs, ars, animal, mare; Düzensiz İsimler (vīs, bōs, sūs, Iuppiter)",
    "summary": "Bu fasikülde Çoğul Genetivus takısı -ium ile biten -i gövdeli isimleri, nötr isimlerdeki Tekil Ablativus -ī ve Çoğul Nom/Acc -ia kurallarını ve Latincedeki ünlü düzensiz isimleri öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "LatinceGramer11.1.pdf",
    "slideCount": 23,
    "topics": ["-i Gövdeli İsimler", "Çoğul Genetivus (-ium)", "urbs, urbis ve ars, artis", "animal ve mare", "Düzensiz İsimler: vis, bos, sus, Iuppiter"],
    "vocab": ["urbs", "ars", "mons", "animal", "mare", "vis", "bos", "sus", "iuppiter", "civis", "hostis", "navis"],
    "sections": [
      {
        "title": "1. -i Gövdeli İsimlerin Ayırt Edici Kuralları",
        "html": "<p>3. gruptaki <strong>-i gövdeli isimler</strong>, sessiz gövdelilerden şu üç temel noktada ayrılır:</p>\n<ul>\n  <li><strong>Çoğul Genetivus Takısı:</strong> Sessiz gövdelilerdeki <em>-um</em> yerine <strong>-ium</strong> takısı gelir: <span class=\"lat-word\">urbium</span> (kentlerin), <span class=\"lat-word\">artium</span> (sanatların), <span class=\"lat-word\">montium</span> (dağların).</li>\n  <li><strong>Nötr İsimlerde Tekil Ablativus Takısı:</strong> <em>-e</em> yerine uzun <strong>-ī</strong> takısı gelir: <span class=\"lat-word\">animalī</span> (hayvanla), <span class=\"lat-word\">marī</span> (denizle).</li>\n  <li><strong>Nötr İsimlerde Çoğul Nom, Voc, Acc Takısı:</strong> <em>-a</em> yerine <strong>-ia</strong> takısı gelir: <span class=\"lat-word\">animalia</span> (hayvanlar), <span class=\"lat-word\">maria</span> (denizler).</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Hece ve Çift Sessiz Testi",
        "calloutText": "Bir ismin -i gövdeli olup olmadığını anlamak için Eyüp Hoca'nın iki altın kuralı:\n1) Eşit Heceliler (Parisyllaba): Tekil Nom ve Gen hece sayısı eşitse -i gövdelidir (cīvis, cīvis: 2 hece; hostis, hostis: 2 hece).\n2) Çift Sessiz Kuralı: Tekil Gen hali Nom halinden 1 hece fazla olsa bile, -is takısından önce BİRDEN FAZLA SESSİZ varsa -i gövdelidir: urb-s > urb-is (-rb- çift sessiz); nox > noct-is (-ct- çift sessiz); mons > mont-is (-nt- çift sessiz).",
        "tableHtml": ""
      },
      {
        "title": "2. Düzensiz Çekimi Olan Özel İsimler (Nōmina Anōmala)",
        "html": "<ol>\n  <li><strong>vīs, vīs, f. (güç, kuvvet, şiddet):</strong> Tekilde Nom: <span class=\"lat-word\">vīs</span>, Acc: <span class=\"lat-word\">vim</span>, Abl: <span class=\"lat-word\">vī</span>. Tekil Gen ve Dat neredeyse hiç kullanılmaz (yerine <em>rōboris, rōborī</em> kullanılır). Çoğulda ise tam çekimlidir: Nom/Voc/Acc: <span class=\"lat-word\">vīrēs</span>, Gen: <span class=\"lat-word\">vīrium</span>, Dat/Abl: <span class=\"lat-word\">vīribus</span>.</li>\n  <li><strong>Iuppiter, Iovis, m. (Baş Tanrı Jüpiter):</strong> Nom/Voc: <span class=\"lat-word\">Iuppiter</span>, Gen: <span class=\"lat-word\">Iovis</span>, Dat: <span class=\"lat-word\">Iovī</span>, Acc: <span class=\"lat-word\">Iovem</span>, Abl: <span class=\"lat-word\">Iove</span>.</li>\n  <li><strong>bōs, bovis, m./f. (öküz / inek):</strong> Gen. Pl: <span class=\"lat-word\">boum</span>, Dat/Abl. Pl: <span class=\"lat-word\">bōbus</span> / <span class=\"lat-word\">būbus</span>.</li>\n</ol>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Rōmānī magnam urbem vī et armīs dēfendēbant.",
        "tr": "Romalılar büyük kenti güçle ve silahlarla savunuyorlardı.",
        "analysis": "Rōmānī (Nom. Pl. - Romalılar); magnam urbem (Acc. Sg. f. - Büyük kenti); vī et armīs (Abl. - Güçle ve silahlarla); dēfendēbant (Imperfectum - Savunuyorlardı)."
      }
    ],
    "studyTips": "vīs kelimesinin çoğul halleri (vīrēs, vīrium, vīribus: güçler) ile vir kelimesinin çoğul hallerini (virī, virōrum, virīs: adamlar) birbirine karıştırmayınız!"
  },
  {
    "id": "T1_W12_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 12,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 12. Hafta (2. Ders)",
    "title": "3. VE 4. ÇEKİM FİİLLER (CONIUGATIO III & IV)",
    "subtitle": "regō, audīo ve capiō; Praesens, Imperfectum ve Futurum I (-am, -ēs, -et Kuralı)",
    "summary": "Bu fasikülde 3. çekim (kısa -ere), 4. çekim (-īre) ve 3-io (karışık çekim) fiilleri, bu fiillerin gelecek zamanındaki devrimsel takı değişimini ve çekim tablolarını inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer12.2.pdf",
    "slideCount": 26,
    "topics": ["3. Çekim Fiiller (-ere)", "4. Çekim Fiiller (-īre)", "3-io Karışık Çekim (capiō)", "Futurum I: -am, -ēs, -et Kuralı", "Karşılaştırmalı Çekim Tablosu"],
    "vocab": ["rego", "duco", "scribo", "audio", "venio", "capio", "facio"],
    "sections": [
      {
        "title": "1. 3. ve 4. Çekimde Gelecek Zaman (Futurum I) Kuralı",
        "html": "<p>1. ve 2. çekim fiiller gelecek zamanda <em>-bō, -bis, -bit</em> takılarını alırken, <strong>3. ve 4. çekim fiiller ASLA -b- SESİ ALMAZLAR!</strong></p>\n<p>Bunun yerine 1. tekil şahısta <strong>-am</strong>, diğer şahıslarda ise <strong>-ē-</strong> sesli harfini alırlar:</p>\n<ul>\n  <li>1. Tekil: <strong>-am</strong> (örn. <span class=\"lat-word\">regam</span>: yöneteceğim; <span class=\"lat-word\">audiam</span>: işiteceğim)</li>\n  <li>2. Tekil: <strong>-ēs</strong> (örn. <span class=\"lat-word\">regēs</span>: yöneteceksin; <span class=\"lat-word\">audiēs</span>: işiteceksin)</li>\n  <li>3. Tekil: <strong>-et</strong> (örn. <span class=\"lat-word\">reget</span>: yönetecek; <span class=\"lat-word\">audiet</span>: işitecek)</li>\n  <li>1. Çoğul: <strong>-ēmus</strong> (örn. <span class=\"lat-word\">regēmus</span>: yöneteceğiz; <span class=\"lat-word\">audiēmus</span>: işiteceğiz)</li>\n  <li>2. Çoğul: <strong>-ētis</strong> (örn. <span class=\"lat-word\">regētis</span>: yöneteceksiniz; <span class=\"lat-word\">audiētis</span>: işiteceksiniz)</li>\n  <li>3. Çoğul: <strong>-ent</strong> (örn. <span class=\"lat-word\">regent</span>: yönetecekler; <span class=\"lat-word\">audient</span>: işitecekler)</li>\n</ul>",
        "calloutType": "warning",
        "calloutTitle": "Çok Önemli Karşılaştırma",
        "calloutText": "laudat (Praesens) -> laudabit (Futurum) [1. Çekim]\nreget (Futurum!) -> regit (Praesens) [3. Çekim]\n3. çekimde -et eki GELECEK ZAMAN ekidir!",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Cīvēs bonum ducem audient et urbem regent.",
        "tr": "Yurttaşlar iyi komutanı dinleyecekler ve kenti yönetecekler.",
        "analysis": "Cīvēs (Nom. Pl. - Yurttaşlar); audient (4. Çekim Futurum 3. Çoğul - Dinleyecekler); regent (3. Çekim Futurum 3. Çoğul - Yönetecekler)."
      }
    ],
    "studyTips": "Gelecek zamanda 1-2. çekim için '-b-', 3-4. çekim için '-e-' kuralını ezberleyiniz."
  },
  {
    "id": "T1_W13_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 13,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 13. Hafta (1. Ders)",
    "title": "ZAMİRLER 1: KİŞİ VE DÖNÜŞLÜLÜK ZAMİRLERİ",
    "subtitle": "ego, tū, nōs, vōs, suī: Çekimleri, Dativus ve Genetivus Ayrımı",
    "summary": "Bu fasikülde 1. ve 2. şahıs kişi zamirlerini, dönüşlülük zamirini (sē/suī) ve cümlede vurgu ile sentaks rollerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "LatinceGramer13.1.pdf",
    "slideCount": 24,
    "topics": ["Kişi Zamirleri (ego, tu)", "Çoğul Zamirler (nos, vos)", "Genetivus Ayrımı (nostri/nostrum)", "Dönüşlülük Zamiri (sē, sui)"],
    "vocab": ["ego", "tu", "nos", "vos", "sui", "se", "mihi", "tibi", "nobis", "vobis"],
    "sections": [
      {
        "title": "1. Kişi Zamirleri Çekim Tablosu",
        "html": "<p>Latincede kişi zamirlerinin çekimi oldukça özeldir:</p>",
        "calloutType": "info",
        "calloutTitle": "cum ile Bitişik Yazılma Kuralı",
        "calloutText": "cum (ile) edatı bu zamirlerle birlikte kullanıldığında kelimenin sonuna bitişik yazılır: mēcum (benimle), tēcum (seninle), nōbīscum (bizimle), vōbīscum (sizinle), sēcum (kendisiyle).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>1. Şahıs: ego (ben)</th><th>2. Şahıs: tū (sen)</th><th>1. Çoğul: nōs (biz)</th><th>2. Çoğul: vōs (siz)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom.</strong></td><td class=\"case-cell-latin\"><strong>ego</strong></td><td class=\"case-cell-latin\"><strong>tū</strong></td><td class=\"case-cell-latin\"><strong>nōs</strong></td><td class=\"case-cell-latin\"><strong>vōs</strong></td></tr>\n      <tr><td><strong>Gen.</strong></td><td class=\"case-cell-latin\">meī</td><td class=\"case-cell-latin\">tuī</td><td class=\"case-cell-latin\">nostrī / nostrum</td><td class=\"case-cell-latin\">vestrī / vestrum</td></tr>\n      <tr><td><strong>Dat.</strong></td><td class=\"case-cell-latin\"><strong>mihi</strong></td><td class=\"case-cell-latin\"><strong>tibi</strong></td><td class=\"case-cell-latin\"><strong>nōbīs</strong></td><td class=\"case-cell-latin\"><strong>vōbīs</strong></td></tr>\n      <tr><td><strong>Acc.</strong></td><td class=\"case-cell-latin\"><strong>mē</strong></td><td class=\"case-cell-latin\"><strong>tē</strong></td><td class=\"case-cell-latin\"><strong>nōs</strong></td><td class=\"case-cell-latin\"><strong>vōs</strong></td></tr>\n      <tr><td><strong>Abl.</strong></td><td class=\"case-cell-latin\"><strong>mē</strong></td><td class=\"case-cell-latin\"><strong>tē</strong></td><td class=\"case-cell-latin\"><strong>nōbīs</strong></td><td class=\"case-cell-latin\"><strong>vōbīs</strong></td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Salvē, mea bella puella, dā mihi multa bāsia!",
        "tr": "Selam, güzel sevgilim, bana pek çok öpücük ver!",
        "analysis": "Dā (Emir - Ver); mihi (Dat. - Bana); multa bāsia (Acc. Pl. - Pek çok öpücüğü)."
      }
    ],
    "studyTips": "nostrī nesnel genetivus (bizi/bize duyulan sevgi), nostrum ise parça/kısım genetivusu (bizden birkaçı) için kullanılır."
  },
  {
    "id": "T1_W14_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 14,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 14. Hafta (1. Ders)",
    "title": "4. VE 5. GRUP İSİMLER (DECLINATIO IV & V)",
    "subtitle": "fructus, manus, cornū (-ūs) ve rēs, diēs, fidēs (-ēī) Çekimleri",
    "summary": "Bu fasikülde Tekil Genetivus hali -ūs ile biten 4. Grup isimleri ve -ēī ile biten 5. Grup isimleri, istisnalarını ve önemli deyimleri öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer14.1.pdf",
    "slideCount": 35,
    "topics": ["4. Grup İsimler (-us, -us / -u, -us)", "fructus ve cornu Çekimi", "domus İstisnası", "5. Grup İsimler (-es, -ei)", "res ve dies Çekimleri"],
    "vocab": ["fructus", "manus", "cornu", "exercitus", "senatus", "domus", "res", "dies", "fides", "spes"],
    "sections": [
      {
        "title": "1. 4. Grup İsimler (Declinatio IV: -ūs)",
        "html": "<p>Tekil Genetivus hali <strong>-ūs</strong> ile biten isimlerdir. Eril ve dişiller <em>-us</em> (fructus, manus), nötrler ise <em>-ū</em> (cornū) ile biter:</p>",
        "calloutType": "warning",
        "calloutTitle": "manus ve domus Cinsiyeti",
        "calloutText": "manus (el) ve domus (ev) kelimeleri -us ile bitmelerine rağmen DİŞİLDİR (f.).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>fructus, -ūs m. (meyve)</th><th>cornū, -ūs n. (boynuz/kanat)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\">fruct-<strong>us</strong></td><td class=\"case-cell-latin\">corn-<strong>ū</strong></td><td>meyve / boynuz</td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\">fruct-<strong>ūs</strong></td><td class=\"case-cell-latin\">corn-<strong>ūs</strong></td><td>meyvenin / boynuzun</td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\">fruct-<strong>uī</strong></td><td class=\"case-cell-latin\">corn-<strong>ū</strong></td><td>meyveye / boynuza</td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\">fruct-<strong>um</strong></td><td class=\"case-cell-latin\">corn-<strong>ū</strong></td><td>meyveyi / boynuzu</td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\">fruct-<strong>ū</strong></td><td class=\"case-cell-latin\">corn-<strong>ū</strong></td><td>meyveyle / boynuzla</td></tr>\n      <tr><td><strong>Nom. Pl.</strong></td><td class=\"case-cell-latin\">fruct-<strong>ūs</strong></td><td class=\"case-cell-latin\">corn-<strong>ua</strong></td><td>meyveler / boynuzlar</td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\">fruct-<strong>uum</strong></td><td class=\"case-cell-latin\">corn-<strong>uum</strong></td><td>meyvelerin / boynuzların</td></tr>\n      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=\"case-cell-latin\">fruct-<strong>ibus</strong></td><td class=\"case-cell-latin\">corn-<strong>ibus</strong></td><td>meyvelere / boynuzlara</td></tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "title": "2. 5. Grup İsimler (Declinatio V: -ēī / -eī)",
        "html": "<p>Tekil Genetivus hali <strong>-ēī</strong> ile biten isimlerdir. Tamamı (diēs kelimesi hariç) <strong>Dişildir (Femininum)</strong>:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>rēs, reī f. (şey, olay, mesele)</th><th>diēs, diēī m./f. (gün)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>ēs</strong></td><td class=\"case-cell-latin\">di-<strong>ēs</strong></td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>eī</strong></td><td class=\"case-cell-latin\">di-<strong>ēī</strong></td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>eī</strong></td><td class=\"case-cell-latin\">di-<strong>ēī</strong></td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>em</strong></td><td class=\"case-cell-latin\">di-<strong>em</strong></td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>ē</strong></td><td class=\"case-cell-latin\">di-<strong>ē</strong></td></tr>\n      <tr><td><strong>Nom/Acc. Pl.</strong></td><td class=\"case-cell-latin\">r-<strong>ēs</strong></td><td class=\"case-cell-latin\">di-<strong>ēs</strong></td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\">r-<strong>ērum</strong></td><td class=\"case-cell-latin\">di-<strong>ērum</strong></td></tr>\n      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=\"case-cell-latin\">r-<strong>ēbus</strong></td><td class=\"case-cell-latin\">di-<strong>ēbus</strong></td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Rēs pūblica est patrimōnium populī.",
        "tr": "Cumhuriyet (kamusal varlık / devlet) halkın mirasıdır.",
        "analysis": "Rēs pūblica (Nom. Sg. f. - Devlet); est (3. Tekil Praesens); patrimōnium (Nötr - Miras); populī (Gen. Sg. m. - Halkın)."
      }
    ],
    "studyTips": "5. çekimde yalnızca rēs ve diēs kelimeleri çoğulda tam çekime sahiptir; diğer 5. çekim kelimelerin çoğul halleri neredeyse hiç kullanılmaz."
  },
  {
    "id": "T2_W1_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 1,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 1. Hafta (1. Ders)",
    "title": "EDİLGEN ÇATI 1: PRAESENS SİSTEMİ (VOX PASSIVA)",
    "subtitle": "Praesens, Imperfectum ve Futurum Passivi; Edilgen Şahıs Ekleri (-r, -ris, -tur, -mur, -minī, -ntur)",
    "summary": "Bu fasikülde 2. Dönemin (Bahar Yarıyılı) ilk konusu olan Edilgen Çatı (Vox Passiva) sistemine giriş yapacak, etken fiilleri edilgene dönüştürmeyi, evrensel edilgen şahıs eklerini ve 1-4. çekim fiillerin şimdiki zaman edilgen çekimlerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 1.1.pdf",
    "slideCount": 10,
    "topics": ["Edilgen Çatı (Vox Passiva)", "Edilgen Şahıs Ekleri (-r, -ris, -tur...)", "Praesens Passivi Çekimi", "1-4. Çekim Karşılaştırması"],
    "vocab": ["laudo", "moneo", "rego", "audio", "capio", "amo", "video"],
    "sections": [
      {
        "title": "1. Edilgen Çatının Mantığı ve Evrensel Edilgen Şahıs Ekleri",
        "html": "<p>Etken çatıda (Vox Activa) özne eylemi bizzat gerçekleştirirken, <strong>Edilgen Çatıda (Vox Passiva)</strong> özne eylemi yapan değil, eylemden doğrudan etkilenen durumundadır (örn: 'överim' &gt; 'övülürüm').</p>\n<p>Latincede Praesens sisteminde (Praesens, Imperfectum, Futurum I) edilgen çatı yapmak için etken şahıs eklerinin yerine şu <strong>edilgen şahıs ekleri</strong> getirilir:</p>\n<ul>\n  <li>1. Tekil: <strong>-or / -r</strong> (ben - ...-ilirim)</li>\n  <li>2. Tekil: <strong>-ris / -re</strong> (sen - ...-ilirsin)</li>\n  <li>3. Tekil: <strong>-tur</strong> (o - ...-ilir)</li>\n  <li>1. Çoğul: <strong>-mur</strong> (biz - ...-iliriz)</li>\n  <li>2. Çoğul: <strong>-minī</strong> (siz - ...-ilirsiniz)</li>\n  <li>3. Çoğul: <strong>-ntur</strong> (onlar - ...-ilirler)</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs</th><th>1. Çekim: laudor (övülürüm)</th><th>2. Çekim: moneor (uyarılırım)</th><th>3. Çekim: regor (yönetilirim)</th><th>4. Çekim: audior (işitilirim)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg.</strong></td><td class=\"case-cell-latin\">laud-<strong>or</strong></td><td class=\"case-cell-latin\">mon-<strong>eor</strong></td><td class=\"case-cell-latin\">reg-<strong>or</strong></td><td class=\"case-cell-latin\">aud-<strong>ior</strong></td></tr>\n      <tr><td><strong>2. Sg.</strong></td><td class=\"case-cell-latin\">laud-<strong>āris</strong></td><td class=\"case-cell-latin\">mon-<strong>ēris</strong></td><td class=\"case-cell-latin\">reg-<strong>eris</strong></td><td class=\"case-cell-latin\">aud-<strong>īris</strong></td></tr>\n      <tr><td><strong>3. Sg.</strong></td><td class=\"case-cell-latin\">laud-<strong>ātur</strong></td><td class=\"case-cell-latin\">mon-<strong>ētur</strong></td><td class=\"case-cell-latin\">reg-<strong>itur</strong></td><td class=\"case-cell-latin\">aud-<strong>ītur</strong></td></tr>\n      <tr><td><strong>1. Pl.</strong></td><td class=\"case-cell-latin\">laud-<strong>āmur</strong></td><td class=\"case-cell-latin\">mon-<strong>ēmur</strong></td><td class=\"case-cell-latin\">reg-<strong>imur</strong></td><td class=\"case-cell-latin\">aud-<strong>īmur</strong></td></tr>\n      <tr><td><strong>2. Pl.</strong></td><td class=\"case-cell-latin\">laud-<strong>āminī</strong></td><td class=\"case-cell-latin\">mon-<strong>ēminī</strong></td><td class=\"case-cell-latin\">reg-<strong>iminī</strong></td><td class=\"case-cell-latin\">aud-<strong>īminī</strong></td></tr>\n      <tr><td><strong>3. Pl.</strong></td><td class=\"case-cell-latin\">laud-<strong>antur</strong></td><td class=\"case-cell-latin\">mon-<strong>entur</strong></td><td class=\"case-cell-latin\">reg-<strong>untur</strong></td><td class=\"case-cell-latin\">aud-<strong>iuntur</strong></td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Bonus rēx ab omnibus cīvibus laudātur.",
        "tr": "İyi kral bütün yurttaşlar tarafından övülür.",
        "analysis": "Bonus rēx (Nom. Sg. m. - Özne); ab omnibus cīvibus (Ablativus Auctoris - Bütün yurttaşlar tarafından); laudātur (3. Tekil Praesens Passivi - Övülür)."
      }
    ],
    "studyTips": "Etken ve edilgen ekleri eşleştirerek ezberleyiniz: -ō/-or, -s/-ris, -t/-tur, -mus/-mur, -tis/-mini, -nt/-ntur."
  },
  {
    "id": "T2_W1_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 1,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 1. Hafta (2. Ders)",
    "title": "EDİLGEN ÇATI 2: FAİL TÜMLECİ VE VASITA TÜMLECİ",
    "subtitle": "Ablatīvus Auctōris (ā/ab + Abl.) ile Ablatīvus Instrumentī (Yalın Abl.) Ayrımı",
    "summary": "Bu fasikülde edilgen cümlelerde eylemi bizzat yapan canlı fail ile eylemin gerçekleşmesinde kullanılan cansız araç arasındaki sentaks farkını kavrayacaksınız.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 1.2.pdf",
    "slideCount": 15,
    "topics": ["Fail Tümleci (Ablativus Auctoris)", "Vasıta Tümleci (Ablativus Instrumenti)", "ā / ab Kullanım Kuralı", "İki Tümlecin Karşılaştırılması"],
    "vocab": ["ab", "auctor", "arma", "gladius", "vis", "miles", "dux"],
    "sections": [
      {
        "title": "1. Fail Tümleci (Ablatīvus Auctōris)",
        "html": "<p>Edilgen bir cümlede eylemi yapan kişi canlı bir varlık (insan veya tanrı) ise, bu fail <strong>ā / ab + Ablativus</strong> kalıbıyla ifade edilir:</p>\n<ul>\n  <li>Kelime sesli veya 'h' ile başlıyorsa <strong>ab</strong> kullanılır: <span class=\"lat-word\">ab agricolā</span> (çiftçi tarafından), <span class=\"lat-word\">ab hostibus</span> (düşmanlar tarafından).</li>\n  <li>Kelime sessizle başlıyorsa <strong>ā</strong> veya <strong>ab</strong> kullanılır: <span class=\"lat-word\">ā poētā</span> (şair tarafından).</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Vasıta Tümleci (Ablatīvus Instrumentī)",
        "calloutText": "Eğer eylem bir insan tarafından değil, cansız bir nesne, silah veya araç ile yapılıyorsa, ASLA ā/ab edatı kullanılmaz! YALIN ABLATIVUS kullanılır:\nCanlı Fail: Mīles ab hoste vulnerātur. (Asker düşman tarafından yaralanır.)\nCansız Araç: Mīles gladiō vulnerātur. (Asker kılıçla / kılıç vasıtasıyla yaralanır.)",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Puer ab amīcō epistulā monēbātur.",
        "tr": "Çocuk arkadaşı tarafından bir mektupla uyarılıyordu.",
        "analysis": "ab amīcō (Canlı Fail - Arkadaşı tarafından); epistulā (Cansız Vasıta - Mektupla); monēbātur (3. Tekil Imperfectum Passivi - Uyarılıyordu)."
      }
    ],
    "studyTips": "Sınavlarda 'tarafından' (ā/ab + abl.) ile 'ile/vasıtasıyla' (yalın abl.) ayrımı en sık sorulan sentaks sorularındandır."
  },
  {
    "id": "T2_W2_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 2,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 2. Hafta (1. Ders)",
    "title": "EDİLGEN ÇATI 3: PERFECTUM SİSTEMİ (PERFECTUM PASSIVI)",
    "subtitle": "Participium Perfecti Passivi + sum, eram, erō; Cins ve Sayı Uyumu Kuralları",
    "summary": "Bu fasikülde geçmiş zamanlarda edilgen çatı yapılışını (Perfectum, Plusquamperfectum ve Futurum Exactum Passivi), fiilin 4. temel parçası olan Participium Perfecti Passivi'yi ve özne ile sıfat gibi cins/sayı uyumunu öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 2.1.pdf",
    "slideCount": 18,
    "topics": ["Perfectum Passivi", "Participium Perfecti Passivi (PPP)", "Yardımcı Fiil (esse)", "Cins ve Sayı Uyumu", "Plusquamperfectum Passivi", "Futurum Exactum Passivi"],
    "vocab": ["laudo", "moneo", "facio", "vinco", "victus", "captus", "scriptus"],
    "sections": [
      {
        "title": "1. Perfectum Passivi Formülü ve Mantığı",
        "html": "<p>Latincede Perfectum sisteminde tek kelimelik edilgen şahıs eki YOKTUR. Bunun yerine <strong>bileşik yapı (perifrastik zaman)</strong> kullanılır:</p>\n<div style=\"text-align: center; margin: 1rem 0; font-family: var(--font-serif); font-size: 1.15rem; color: var(--primary); font-weight: bold;\">\n  Participium Perfecti Passivi (-us, -a, -um) + esse (sum, es, est...)\n</div>\n<p><strong>Cins ve Sayı Uyumu Kuralı:</strong> Participium kısmı 1. ve 2. sınıf bir sıfat (bonus, -a, -um) gibi çekimlendiği için cümlenin <strong>öznesinin cinsi ve sayısıyla</strong> tam uyum sağlar:</p>\n<ul>\n  <li>Eril tekil özne: <span class=\"lat-word\">Vir laudātus est.</span> (Adam övüldü / övülmüştür.)</li>\n  <li>Dişil tekil özne: <span class=\"lat-word\">Fēmina laudāta est.</span> (Kadın övüldü / övülmüştür.)</li>\n  <li>Nötr tekil özne: <span class=\"lat-word\">Bellum gestum est.</span> (Savaş yürütüldü.)</li>\n  <li>Eril çoğul özne: <span class=\"lat-word\">Virī laudātī sunt.</span> (Adamlar övüldüler.)</li>\n  <li>Dişil çoğul özne: <span class=\"lat-word\">Fēminae laudātae sunt.</span> (Kadınlar övüldüler.)</li>\n  <li>Nötr çoğul özne: <span class=\"lat-word\">Bella gesta sunt.</span> (Savaşlar yürütüldü.)</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Zaman</th><th>Yardımcı Fiil</th><th>Örnek (Eril Tekil)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Perfectum Passivi</strong></td><td>sum, es, est, sumus, estis, sunt</td><td class=\"case-cell-latin\">laudātus <strong>est</strong></td><td>övüldü / övülmüştür</td></tr>\n      <tr><td><strong>Plusquamperfectum Passivi</strong></td><td>eram, erās, erat, erāmus, erātis, erant</td><td class=\"case-cell-latin\">laudātus <strong>erat</strong></td><td>övülmüştü</td></tr>\n      <tr><td><strong>Futurum Exactum Passivi</strong></td><td>erō, eris, erit, erimus, eritis, erunt</td><td class=\"case-cell-latin\">laudātus <strong>erit</strong></td><td>övülmüş olacak</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Urbs Rōma ā mīlitibus dēfēnsa est.",
        "tr": "Roma kenti askerler tarafından savunuldu.",
        "analysis": "Urbs Rōma (Dişil tekil özne); dēfēnsa est (Dişil tekil uyumlu Perfectum Passivi - Savunuldu)."
      }
    ],
    "studyTips": "Özne dişilse sıfatın sonunun -a/-ae, nötrse -um/-a olduğunu unutmayınız. Bu uyum Türkçe çeviride özneden fiile kurulan köprüdür."
  },
  {
    "id": "T2_W3_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 3,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 3. Hafta (1. Ders)",
    "title": "DEPONENT FİİLLER (VERBA DEPONENTIA)",
    "subtitle": "Biçimce Edilgen, Anlamca Etken Fiiller: hortor, sequor, loquor ve Yarı Deponentler",
    "summary": "Bu fasikülde biçimsel olarak edilgen çekim eklerini alan ancak anlam bakımından tamamen etken olan Deponent fiilleri, sözlük yazılışlarını ve yarı deponent (semideponentia) fiilleri öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 3.1.pdf",
    "slideCount": 23,
    "topics": ["Deponent Fiiller", "Biçimce Edilgen / Anlamca Etken", "Dört Çekimde Deponent Örnekleri", "hortor, sequor, loquor, patior", "Yarı Deponent Fiiller (audeo, gaudeo, soleo)"],
    "vocab": ["hortor", "sequor", "loquor", "proficiscor", "morior", "patior", "audeo", "gaudeo", "soleo"],
    "sections": [
      {
        "title": "1. Deponent Fiil Nedir? (dēpōnere: Bırakmak, Terk Etmek)",
        "html": "<p><em>Deponent</em> terimi Latince <strong>dēpōnere</strong> (bir kenara bırakmak, terk etmek) fiilinden gelir. Bu fiiller <strong>etken biçimlerini bir kenara bırakmış</strong>, ancak etken anlamlarını korumuş fiillerdir.</p>\n<p>Kısacası: <strong>BİÇİMCE EDİLGEN, ANLAMCA ETKENDİR!</strong></p>\n<p>Sözlüklerde mastarları <em>-ārī, -ērī, -ī, -īrī</em> ile biter:</p>\n<ul>\n  <li>1. Çekim: <span class=\"lat-word\">hortor</span>, <span class=\"lat-word\">hortārī</span>, <span class=\"lat-word\">hortātus sum</span> (teşvik etmek)</li>\n  <li>2. Çekim: <span class=\"lat-word\">vereor</span>, <span class=\"lat-word\">verērī</span>, <span class=\"lat-word\">veritus sum</span> (korkmak, çekinmek)</li>\n  <li>3. Çekim: <span class=\"lat-word\">sequor</span>, <span class=\"lat-word\">sequī</span>, <span class=\"lat-word\">secūtus sum</span> (takip etmek)</li>\n  <li>3. Çekim: <span class=\"lat-word\">loquor</span>, <span class=\"lat-word\">loquī</span>, <span class=\"lat-word\">locūtus sum</span> (konuşmak)</li>\n  <li>4. Çekim: <span class=\"lat-word\">partior</span>, <span class=\"lat-word\">partīrī</span>, <span class=\"lat-word\">partītus sum</span> (paylaşmak)</li>\n</ul>",
        "calloutType": "warning",
        "calloutTitle": "Çok Önemli Sentaks Kuralı",
        "calloutText": "Deponent fiiller biçimce edilgen görünseler de anlamca etken oldukları için CÜMLEDE DÜZ NESNE (Accusativus) ALABİLİRLER!\nÖrnek: Mīlitēs ducem sequuntur = Askerler komutanı takip ediyorlar (ducem: Accusativus nesne!).",
        "tableHtml": ""
      },
      {
        "title": "2. Yarı Deponent Fiiller (Verba Sēmidēpōnentia)",
        "html": "<p>Latincede 4 meşhur fiil vardır ki, Praesens sisteminde normal <strong>etken</strong> biçimlere sahipken, Perfectum sisteminde <strong>deponent (edilgen biçimli)</strong> olurlar:</p>\n<ol>\n  <li><span class=\"lat-word\">audeō</span>, <span class=\"lat-word\">audēre</span>, <span class=\"lat-word\">ausus sum</span> (cesaret etmek)</li>\n  <li><span class=\"lat-word\">gaudeō</span>, <span class=\"lat-word\">gaudēre</span>, <span class=\"lat-word\">gāvīsus sum</span> (sevinmek)</li>\n  <li><span class=\"lat-word\">soleō</span>, <span class=\"lat-word\">solēre</span>, <span class=\"lat-word\">solitus sum</span> (âdet edinmek, alışık olmak)</li>\n  <li><span class=\"lat-word\">fīdō</span>, <span class=\"lat-word\">fīdere</span>, <span class=\"lat-word\">fīsus sum</span> (güvenmek)</li>\n</ol>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Aude sapiens esse!",
        "tr": "Bilge olmaya cesaret et! (Horatius)",
        "analysis": "Aude (audeo fiilinin tekil emri - Cesaret et!); sapiens (Nom. Sg. - Bilge); esse (Mastar - Olmaya)."
      }
    ],
    "studyTips": "Deponent fiilleri Türkçeye çevirirken asla edilgen (-il/-in) çevirmeyiniz; daima etken çeviriniz: loquitur = konuşuluyor DEĞİL, konuşuyor!"
  },
  {
    "id": "T2_W4_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 4,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 4. Hafta (1. Ders)",
    "title": "3. SINIF SIFATLAR (ADIECTIVA DECLINATIO III)",
    "subtitle": "Üç Bitimli (ācer), İki Bitimli (fortis) ve Tek Bitimli (ingēns) Sıfatlar",
    "summary": "Bu fasikülde 3. çekim isimlerin takılarını kullanan sıfatları, Nominativus bitim sayılarına göre sınıflandırmayı (üç, iki ve tek bitimli sıfatlar) ve ablativus tekil -ī, çoğul nötr -ia kurallarını öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 4.1.pdf",
    "slideCount": 23,
    "topics": ["3. Sınıf Sıfatlar", "Üç Bitimli Sıfatlar (ācer, ācris, ācre)", "İki Bitimli Sıfatlar (fortis, forte)", "Tek Bitimli Sıfatlar (ingēns, ingentis)", "Ablativus -ī ve Çoğul -ia Kuralı"],
    "vocab": ["acer", "fortis", "brevis", "omnis", "gravis", "dulcis", "ingens", "felix", "sapiens", "vetus"],
    "sections": [
      {
        "title": "1. 3. Sınıf Sıfatların Üç Grubu",
        "html": "<ol>\n  <li><strong>Üç Bitimli Sıfatlar:</strong> Eril, dişil ve nötr için ayrı Nominativus biçimi vardır (-er, -is, -e):\n    <ul>\n      <li><span class=\"lat-word\">ācer</span> (m.), <span class=\"lat-word\">ācris</span> (f.), <span class=\"lat-word\">ācre</span> (n.) - keskin, şiddetli</li>\n      <li><span class=\"lat-word\">celer</span> (m.), <span class=\"lat-word\">celeris</span> (f.), <span class=\"lat-word\">celere</span> (n.) - hızlı</li>\n    </ul>\n  </li>\n  <li><strong>İki Bitimli Sıfatlar:</strong> Eril ve dişil ortak tekil Nominativus (-is), nötr ise (-e) ile biter:\n    <ul>\n      <li><span class=\"lat-word\">fortis</span> (m./f.), <span class=\"lat-word\">forte</span> (n.) - cesur, güçlü</li>\n      <li><span class=\"lat-word\">brevis</span> (m./f.), <span class=\"lat-word\">breve</span> (n.) - kısa</li>\n      <li><span class=\"lat-word\">omnis</span> (m./f.), <span class=\"lat-word\">omne</span> (n.) - bütün, her</li>\n      <li><span class=\"lat-word\">dulcis</span> (m./f.), <span class=\"lat-word\">dulce</span> (n.) - tatlı, hoş</li>\n    </ul>\n  </li>\n  <li><strong>Tek Bitimli Sıfatlar:</strong> Her üç cins için de tekil Nominativus ortaktır:\n    <ul>\n      <li><span class=\"lat-word\">ingēns</span>, <span class=\"lat-word\">ingentis</span> (m./f./n.) - devasa, muazzam</li>\n      <li><span class=\"lat-word\">fēlīx</span>, <span class=\"lat-word\">fēlīcis</span> (m./f./n.) - mutlu, şanslı</li>\n      <li><span class=\"lat-word\">sapiēns</span>, <span class=\"lat-word\">sapientis</span> (m./f./n.) - bilge, akıllı</li>\n    </ul>\n  </li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "3. Sınıf Sıfatların Özel Çekim Takıları",
        "calloutText": "İsimlerden farklı olarak, 3. sınıf sıfatların TAMAMI -i gövdelidir:\n1) Tekil Ablativus her üç cinste de -ī ile biter (fortī, brevī, ingentī).\n2) Nötr Çoğul Nom/Voc/Acc -ia ile biter (fortia, brevia, ingentia).\n3) Çoğul Genetivus -ium ile biter (fortium, brevium, ingentium).",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Fortī virō vīta brevis sed glōria perpetua est.",
        "tr": "Cesur adama (için) hayat kısadır, ama şan ebedidir.",
        "analysis": "Fortī virō (Dat. Sg. m. - Cesur adama); vīta brevis (Nom. Sg. f. - Kısa hayat); glōria perpetua (Ebedi şan)."
      }
    ],
    "studyTips": "3. sınıf bir sıfat 1. veya 2. çekim bir ismi nitelediğinde ekler farklı görünse bile cins ve hal aynıdır: agricola fortis (Nom. Sg. Eril), agricolae forti (Dat. Sg. Eril)."
  },
  {
    "id": "T2_W7_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 7,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 7. Hafta (1. Ders)",
    "title": "LATİNCEDE SAYILAR (NUMERALIA): SAYMA VE SIRA SAYILARI",
    "subtitle": "Cardinalia (ūnus, duo, trēs, mīlia), Ordinalia, Distributiva ve Kısım Genetivus'u",
    "summary": "Bu fasikülde Latincedeki sayma sayılarını, ilk üç sayının (1, 2, 3) ve mīlia (binler) kelimesinin çekimini, sıra ve üleştirme sayılarını ve Kısım Genetivus'u (Genetivus Partitivus) sentaksını öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 7.1.pdf",
    "slideCount": 12,
    "topics": ["Sayma Sayıları (Cardinalia)", "ūnus, duo, trēs Çekimi", "mīlle ve mīlia Ayrımı", "Sıra Sayıları (Ordinalia)", "Kısım Genetivus'u (Genetivus Partitivus)"],
    "vocab": ["unus", "duo", "tres", "quattuor", "quinque", "decem", "centum", "mille", "primus", "secundus"],
    "sections": [
      {
        "title": "1. Çekimi Olan Sayma Sayıları (1, 2, 3 ve 1000)",
        "html": "<p>Latincede 4'ten 100'e kadar olan sayma sayıları çekimsizdir (değişmez: quattuor, quīnque, decem, centum...). Ancak <strong>1, 2, 3 ve 1000'in çoğulu (mīlia)</strong> çekimlenir:</p>\n<ul>\n  <li><strong>ūnus, ūna, ūnum:</strong> Tekil Genetivus <em>ūnīus</em>, Dativus <em>ūnī</em> (özel zamir çekimi).</li>\n  <li><strong>duo, duae, duo (İki):</strong> Eril/Nötr Dat/Abl: <em>duōbus</em>, Dişil Dat/Abl: <em>duābus</em>.</li>\n  <li><strong>trēs, tria (Üç):</strong> 3. sınıf sıfat gibi çekimlenir (Nom: trēs, n. tria; Gen: trium; Dat/Abl: tribus).</li>\n  <li><strong>mīlle (Tekil 1000):</strong> Çekimsiz bir sıfattır: <span class=\"lat-word\">mīlle mīlitēs</span> (bin asker).</li>\n  <li><strong>mīlia (Çoğul Binler):</strong> 3. çekim nötr bir isimdir ve ardından daima Kısım Genetivus'u alır: <span class=\"lat-word\">duo mīlia mīlitum</span> (iki bin asker / askerlerin iki bini).</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Duo mīlia hostium in urbem veniēbant.",
        "tr": "Düşmanların iki bini (iki bin düşman) kente geliyordu.",
        "analysis": "Duo mīlia (Nom. Pl. n. - İki bin); hostium (Gen. Pl. - Düşmanların / Kısım Genetivusu); veniēbant (Imperfectum 3. Çoğul)."
      }
    ],
    "studyTips": "Tekil mille sıfattır (mille viri), çoğul milia ise isimdir ve yanına tamlayan alır (duo milia virorum)."
  },
  {
    "id": "T2_W8_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 8,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 8. Hafta (1. Ders)",
    "title": "İLGİ ZAMİRİ VE YAN CÜMLELER (PRONOMEN RELATIVUM)",
    "subtitle": "quī, quae, quod Çekimi, Öncül (Antecedēns) ile Uyum ve İlgi Cümleleri",
    "summary": "Bu fasikülde Türkçedeki '-en/-an, -dığı/-diği' sıfat-fiil yan cümlelerinin karşılığı olan İlgi Zamirini (qui, quae, quod), çekim tablosunu ve öncül kelimeyle kurduğu cins/sayı/hal ilişkisini öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 8.1.pdf",
    "slideCount": 13,
    "topics": ["İlgi Zamiri (qui, quae, quod)", "İlgi Zamiri Çekim Tablosu", "Öncül (Antecedens) Kuralı", "İlgi Cümlecikleri (Sententiae Relativae)"],
    "vocab": ["qui", "quae", "quod", "cuius", "cui", "quem", "quam", "quo", "quibus", "quorum"],
    "sections": [
      {
        "title": "1. İlgi Zamirinin Çekim Tablosu",
        "html": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>Masculinum (Eril)</th><th>Femininum (Dişil)</th><th>Neutrum (Nötr)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\"><strong>quī</strong></td><td class=\"case-cell-latin\"><strong>quae</strong></td><td class=\"case-cell-latin\"><strong>quod</strong></td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\"><strong>cuius</strong></td><td class=\"case-cell-latin\"><strong>cuius</strong></td><td class=\"case-cell-latin\"><strong>cuius</strong></td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\"><strong>cui</strong></td><td class=\"case-cell-latin\"><strong>cui</strong></td><td class=\"case-cell-latin\"><strong>cui</strong></td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\"><strong>quem</strong></td><td class=\"case-cell-latin\"><strong>quam</strong></td><td class=\"case-cell-latin\"><strong>quod</strong></td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\"><strong>quō</strong></td><td class=\"case-cell-latin\"><strong>quā</strong></td><td class=\"case-cell-latin\"><strong>quō</strong></td></tr>\n      <tr><td><strong>Nom. Pl.</strong></td><td class=\"case-cell-latin\"><strong>quī</strong></td><td class=\"case-cell-latin\"><strong>quae</strong></td><td class=\"case-cell-latin\"><strong>quae</strong></td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\"><strong>quōrum</strong></td><td class=\"case-cell-latin\"><strong>quārum</strong></td><td class=\"case-cell-latin\"><strong>quōrum</strong></td></tr>\n      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=\"case-cell-latin\"><strong>quibus</strong></td><td class=\"case-cell-latin\"><strong>quibus</strong></td><td class=\"case-cell-latin\"><strong>quibus</strong></td></tr>\n      <tr><td><strong>Acc. Pl.</strong></td><td class=\"case-cell-latin\"><strong>quōs</strong></td><td class=\"case-cell-latin\"><strong>quās</strong></td><td class=\"case-cell-latin\"><strong>quae</strong></td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "rule",
        "calloutTitle": "İlgi Zamirinin Altın Kuralı",
        "calloutText": "İlgi zamiri, nitelediği öncül kelimeyle (antecedens) CİNS (Genus) ve SAYI (Numerus) bakımından uyuşur; ancak HALİNİ (Casus) KENDİ İÇİNDE BULUNDUĞU YAN CÜMLENİN sentaks görevinden alır!",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Vir quem vidēs amīcus meus est.",
        "tr": "Gördüğün adam benim arkadaşımdır.",
        "analysis": "Vir (Öncül: Nom. Sg. Eril); quem (İlgi zamiri: Vir eril tekil olduğu için eril tekil; ama yan cümlede 'görüyorsun' fiilinin nesnesi olduğu için Accusativus halindedir: quem)."
      }
    ],
    "studyTips": "Tekil Genetivus biçiminin 'cuius', Dativus biçiminin ise 'cui' olduğunu ezberleyiniz."
  },
  {
    "id": "T2_W11_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 11,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 11. Hafta (1. Ders)",
    "title": "PARTICIPIUM SİSTEMİ (ORTAÇLAR)",
    "subtitle": "Participium Praesentis Activi, Perfecti Passivi ve Futuri Activi",
    "summary": "Bu fasikülde fiilden sıfat ve zarf türeten üç temel ortaç yapısını (Participium Praesentis, Perfecti ve Futuri), yapılışlarını ve cümledeki sentaks işlevlerini öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 11.1.pdf",
    "slideCount": 29,
    "topics": ["Participium Nedir?", "Participium Praesentis Activi (-ns, -ntis)", "Participium Perfecti Passivi (-tus, -ta, -tum)", "Participium Futuri Activi (-tūrus, -a, -um)", "Sıfat ve Zarf İşlevleri"],
    "vocab": ["amans", "audiens", "laudatus", "monitus", "venturus", "moriturus"],
    "sections": [
      {
        "title": "1. Latincede Üç Temel Participium",
        "html": "<ol>\n  <li><strong>Participium Praesentis Activi (Etken Şimdiki Zaman Ortacı: -ns, -ntis):</strong> Türkçedeki <em>'-en/-an'</em> veya <em>'-erek/-arak, -iken'</em> ekidir. Praesens gövdesine getirilir ve 3. sınıf tek bitimli sıfat gibi çekimlenir:\n    <ul>\n      <li><span class=\"lat-word\">amāns</span>, <span class=\"lat-word\">amantis</span> (seven / severken)</li>\n      <li><span class=\"lat-word\">audiēns</span>, <span class=\"lat-word\">audientis</span> (işiten / işitirken)</li>\n    </ul>\n  </li>\n  <li><strong>Participium Perfecti Passivi (Edilgen Geçmiş Zaman Ortacı: -tus, -ta, -tum):</strong> Türkçedeki <em>'-miş, -ilmiş'</em> ekidir. 1-2. sınıf sıfat gibi çekimlenir:\n    <ul>\n      <li><span class=\"lat-word\">laudātus</span>, <span class=\"lat-word\">laudāta</span>, <span class=\"lat-word\">laudātum</span> (övülmüş)</li>\n      <li><span class=\"lat-word\">captus</span>, <span class=\"lat-word\">capta</span>, <span class=\"lat-word\">captum</span> (yakalanmış, ele geçirilmiş)</li>\n    </ul>\n  </li>\n  <li><strong>Participium Futuri Activi (Etken Gelecek Zaman Ortacı: -tūrus, -tūra, -tūrum):</strong> Türkçedeki <em>'-ecek olan, -mek üzere olan'</em> ekidir:\n    <ul>\n      <li><span class=\"lat-word\">laudātūrus</span> (övecek olan / övmek üzere olan)</li>\n      <li><span class=\"lat-word\">moritūrus</span> (ölecek olan)</li>\n    </ul>\n  </li>\n</ol>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Avē Caesar, moritūrī tē salūtant!",
        "tr": "Selam Sezar, ölmek üzere olanlar seni selamlıyor!",
        "analysis": "Moritūrī (morior fiilinin Participium Futuri Activi çoğulu - Ölmek üzere olanlar); tē (Acc. - Seni); salūtant (Selamlıyorlar)."
      }
    ],
    "studyTips": "Participium Praesentis Activi'nin tekil Ablativus halinde, eğer sıfat gibi kullanılıyorsa '-ī', eğer zarf gibi (zaman belirterek) kullanılıyorsa '-e' aldığını unutmayınız."
  },
  {
    "id": "T2_W12_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 12,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 12. Hafta (1. Ders)",
    "title": "BAĞIMSIZ ABLATIVUS (ABLATĪVUS ABSOLŪTUS)",
    "subtitle": "İsim + Participium Yapısı; Zaman, Neden, Karşıtlık ve Koşul Anlamları",
    "summary": "Bu fasikülde klasik Latin edebiyatının en zarif ve en yaygın sentaks yapısı olan Ablatīvus Absolūtus'u (Bağımsız Ablativus), cümledeki ana ögelerden bağımsız kuruluşunu ve Türkçeye zengin çeviri tekniklerini öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 12.1.pdf",
    "slideCount": 34,
    "topics": ["Ablativus Absolutus Mantığı", "İsim + PPP Yapısı", "İsim + PPA Yapısı", "Zaman, Neden, Karşıtlık Anlamları", "Participium'suz Yapılar (Caesare consule)"],
    "vocab": ["absolutus", "consul", "rego", "victus", "imperium", "pax"],
    "sections": [
      {
        "title": "1. Ablatīvus Absolūtus Nedir?",
        "html": "<p><em>Absolūtus</em> kelimesi <strong>absolvere</strong> (çözmek, serbest bırakmak) fiilinden gelir ve 'bağımsız, ana cümlenin ögelerinden serbest kalmış' demektir.</p>\n<p>Temel kural: Bir <strong>Ablativus halindeki İsim/Zamir</strong> ile onunla uyumlu <strong>Ablativus halindeki bir Participium</strong> birleşerek bağımsız bir yan cümle oluşturur. Bu yan cümlenin öznesi ana cümlenin öznesi veya nesnesiyle AYNI DEĞİLDİR.</p>\n<p>Türkçeye şu 4 ana anlamda aktarılır:</p>\n<ol>\n  <li><strong>Zaman (-dığı zaman, -ince, -dikten sonra):</strong> <span class=\"lat-word\">Urbe captā</span>, hostēs fūgērunt. = Kent ele geçirildikten sonra düşmanlar kaçtı.</li>\n  <li><strong>Neden (-dığı için, -den dolayı):</strong> <span class=\"lat-word\">Duce vulnerātō</span>, mīlitēs terrēbantur. = Komutan yaralandığı için askerler korkuyordu.</li>\n  <li><strong>Karşıtlık (-e rağmen, -diği halde):</strong> <span class=\"lat-word\">Multīs repugnantibus</span>, pāx facta est. = Pek çok kişi karşı çıktığı halde barış yapıldı.</li>\n  <li><strong>Koşul (-se/-sa, şartıyla):</strong> <span class=\"lat-word\">Deō iuvante</span>, vincēmus. = Tanrı yardım ederse zafer kazanacağız.</li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Participium Bulunmayan İstisnai Yapı",
        "calloutText": "Latincede 'olmak' (esse) fiilinin şimdiki zaman participium'u (PPA) bulunmadığı için, iki isim veya bir isim ile sıfat doğrudan Ablativus halinde yan yana gelerek bu yapıyı kurar:\nCaesare consule = Caesar konsül iken (Caesar konsül olduğu sırada)\nRomulo rege = Romulus kral iken\nte duce = Sen önderken / Senin önderliğinde.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Caesare duce, Rōmānī Gallōs vīcērunt.",
        "tr": "Caesar'ın önderliğinde Romalılar Gallialıları yendiler.",
        "analysis": "Caesare duce (Ablativus Absolutus - Caesar önder iken); Rōmānī (Nom. Pl. - Romalılar); Gallōs (Acc. Pl. - Gallialıları); vīcērunt (Perfectum - Yendiler)."
      }
    ],
    "studyTips": "Ablativus Absolutus yapısını tercüme ederken önce zaman (-dikten sonra) anlamını deneyiniz; cümle akışına göre neden veya karşıtlık anlamını tercih ediniz."
  },
  {
    "id": "T2_W13_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 13,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 13. Hafta (1. Ders)",
    "title": "DOLAYLI ANLATIM VE ACCUSATIVUS CUM INFINITIVO (AcI)",
    "subtitle": "Düşünce, Söyleme ve Algı Fiilleriyle Kurulan Dolaylı Tümce Yapısı",
    "summary": "Bu fasikülde Latincedeki dolaylı anlatımın (Oratio Obliqua) kalbi olan Accusativus cum Infinitivo (AcI) yapısını, Infinitivus zamanlarını ve Türkçedeki '-dığını söylemek/düşünmek' yapılarına aktarımını öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 13.1.pdf",
    "slideCount": 19,
    "topics": ["Accusativus cum Infinitivo (AcI)", "Dolaylı Anlatım", "Algılama ve Söyleme Fiilleri", "Infinitivus Zamanları (Praesens, Perfectum, Futurum)", "Zaman Uyumu"],
    "vocab": ["dico", "scio", "credo", "audio", "video", "spero", "puto"],
    "sections": [
      {
        "title": "1. AcI Yapısının Kuruluşu ve Formülü",
        "html": "<p>Latincede söyleme (dīcere), bilme (scīre), inanma (crēdere), duyma (audīre) ve görme (vidēre) gibi algı ve ifade fiillerinden sonra gelen nesne cümlecikleri <strong>Accusativus cum Infinitivo (AcI)</strong> kalıbıyla kurulur:</p>\n<div style=\"text-align: center; margin: 1rem 0; font-family: var(--font-serif); font-size: 1.15rem; color: var(--primary); font-weight: bold;\">\n  Temel Cümle Yüklemi + [Özne: Accusativus] + [Yüklem: Infinitivus]\n</div>\n<ul>\n  <li>Doğrudan Cümle: <span class=\"lat-word\">Amīcus venit.</span> (Arkadaş geliyor.)</li>\n  <li>Dolaylı Cümle (AcI): <span class=\"lat-word\">Sciō amīcum venīre.</span> = Arkadaşın geldiğini biliyorum.</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Infinitivus Zamanlarının Göreceli Anlamı",
        "calloutText": "AcI içindeki Infinitivus zamanı mutlak değil, ana fiile GÖRECELİ zaman bildirir:\n1) Infinitivus Praesentis: Ana fiille EŞZAMANLILIK bildirir (geldiğini / gelmekte olduğunu).\n2) Infinitivus Perfecti: Ana fiilden ÖNCEKİ zamanı bildirir (gelmiş olduğunu / geldiğini).\n3) Infinitivus Futuri: Ana fiilden SONRAKİ (gelecek) zamanı bildirir (geleceğini).",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Crēdō deōs vītam nostram regere.",
        "tr": "Tanrıların yaşamımızı yönettiğine inanıyorum.",
        "analysis": "Crēdō (İnanıyorum); deōs (AcI Öznesi - Tanrıların); vītam nostram (Nesne - Yaşamımızı); regere (AcI Yüklemi - Yönettiğine)."
      }
    ],
    "studyTips": "AcI yapısını Türkçeye aktarırken Accusativus öznesini Türkçede '-in/-in' (ilgi) haline, Infinitivus yüklemini ise '-dığını/-diğini' sıfat-fiiline dönüştürünüz."
  },
  {
    "id": "T2_W14_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 14,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 14. Hafta (1. Ders)",
    "title": "DİLEK-İSTEK KİPİ (MODUS CONIUNCTIVUS) VE GENEL DEĞERLENDİRME",
    "subtitle": "Praesens ve Imperfectum Coniunctivi, Ut/Nē ile Amaç Cümleleri ve 2. Dönem Sentezi",
    "summary": "Bu fasikülde Latincede sübjektif yargıları, arzuları, dilekleri ve amaçları ifade eden Modus Coniunctivus kipini, temel ve yan cümlelerdeki kullanımlarını ve 2. Dönemin genel gramer sentezini tamamlayacaksınız.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "60 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 14.1.pdf",
    "slideCount": 28,
    "topics": ["Modus Coniunctivus", "Praesens Coniunctivi", "Imperfectum Coniunctivi", "Ut / Ne Amaç Cümleleri (Finales)", "2. Dönem Genel Sentezi"],
    "vocab": ["ut", "ne", "volo", "nolo", "malo", "fero", "eo", "fio"],
    "sections": [
      {
        "title": "1. Modus Coniunctivus (Dilek / İstek Kipi)",
        "html": "<p>Indicativus nesnel gerçekleri bildirirken, <strong>Coniunctivus</strong> zihinsel tasarıları, olasılıkları, dilekleri ve amaçları anlatır:</p>\n<ul>\n  <li><strong>Praesens Coniunctivi:</strong> 1. çekimde -ā- sesi -ē- sesine döner (laudem, laudes, laudet...); diğer çekimlerde ise -ā- eklenir (moneam, regam, audiam).</li>\n  <li><strong>Imperfectum Coniunctivi:</strong> Fiilin etken mastarının (Infinitivus) sonuna doğrudan şahıs eklerinin (-m, -s, -t, -mus, -tis, -nt) getirilmesiyle son derece kolay bir şekilde yapılır:\n    <ul>\n      <li><span class=\"lat-word\">laudārem</span>, <span class=\"lat-word\">laudārēs</span>, <span class=\"lat-word\">laudāret</span>...</li>\n      <li><span class=\"lat-word\">essem</span>, <span class=\"lat-word\">essēs</span>, <span class=\"lat-word\">esset</span>... (esse fiilinin imperf. coniunctivus'u)</li>\n    </ul>\n  </li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Ut / Nē ile Amaç Cümlecikleri (Sententiae Finālēs)",
        "calloutText": "Amaç bildiren yan cümleler ut (için, diye - olumlu) veya nē (etmesin diye, -memesi için - olumsuz) bağlacı ve Coniunctivus yüklemle kurulur:\nVenit ut urbem videat = Kenti görmek için geliyor.\nVēnēre ut amīcōs adiuvārent = Arkadaşlara yardım etmek için geldiler.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Gaudeāmus igitur, iuvenēs dum sumus!",
        "tr": "Öyleyse neşelenelim, henüz genç iken! (Ünlü öğrenci marşı)",
        "analysis": "Gaudeāmus (gaudeo fiilinin 1. Çoğul Praesens Coniunctivi'si - Neşelenelim / Sevinelim!); igitur (Öyleyse); dum sumus (İken / Olduğumuz sürece)."
      }
    ],
    "studyTips": "Imperfectum Coniunctivus'u tespit etmenin en pratik yolu mastarın (-re) ardından şahıs ekinin gelip gelmediğine bakmaktır: laudare-m, monere-t, regere-nt."
  }
];

if (typeof module !== 'undefined') module.exports = { EYUP_CURRICULUM };
