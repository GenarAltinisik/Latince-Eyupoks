// Latince Eyupoks - Doç. Dr. Eyüp Çoraklı Latince 1 & 2 Kapsamlı Ders Fasikülleri
// İstanbul Üniversitesi Edebiyat Fakültesi Klasik Filoloji
// Geliştirici: Genar Altınışık | %100 Temiz UTF-8 | Traşlama Yok
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
        "analysis": "Poeta (1. Çekim Eril, Nom. Sg. - Özne); vitam (vita, -ae f., Acc. Sg. - Belirtili Nesne); agricolae (agricola, -ae m., Gen. Sg. - Tamlayan); laudat (laudo fiili, 3. Tekil Şahıs Praesens - Yüklem).",
        "notes": "Poeta (1. Çekim Eril, Nom. Sg. - Özne); vitam (vita, -ae f., Acc. Sg. - Belirtili Nesne); agricolae (agricola, -ae m., Gen. Sg. - Tamlayan); laudat (laudo fiili, 3. Tekil Şahıs Praesens - Yüklem)."
      },
      {
        "latin": "Incolae insulae nautis causam gloriae narrant.",
        "tr": "Adanın yerlileri denizcilere şanın sebebini anlatırlar.",
        "analysis": "Incolae (Nom. Pl. - Özne); insulae (Gen. Sg. - Adanın); nautis (Dat. Pl. - Denizcilere); causam (Acc. Sg. - Sebebi); gloriae (Gen. Sg. - Şanın); narrant (3. Çoğul Şahıs Praesens).",
        "notes": "Incolae (Nom. Pl. - Özne); insulae (Gen. Sg. - Adanın); nautis (Dat. Pl. - Denizcilere); causam (Acc. Sg. - Sebebi); gloriae (Gen. Sg. - Şanın); narrant (3. Çoğul Şahıs Praesens)."
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
    "vocab": ["laudo", "moneo", "amo", "cogito", "debeo", "do", "erro", "habeo", "servo", "valeo", "voco", "et"],
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
        "analysis": "Puellae (Nom. Pl. f. - Özne); agricolam (agricola, -ae m., Acc. Sg. - Belirtili Nesne); laudant (3. Çoğul Praesens Activi - Yüklem).",
        "notes": "Puellae (Nom. Pl. f. - Özne); agricolam (agricola, -ae m., Acc. Sg. - Belirtili Nesne); laudant (3. Çoğul Praesens Activi - Yüklem)."
      },
      {
        "latin": "Patriam amamus et conservamus.",
        "tr": "Vatanı seviyoruz ve koruyoruz.",
        "analysis": "Patriam (Acc. Sg. f. - Vatanı); amamus (1. Çoğul - Seviyoruz); et (Bağlaç - ve); conservamus (1. Çoğul - Koruyoruz).",
        "notes": "Patriam (Acc. Sg. f. - Vatanı); amamus (1. Çoğul - Seviyoruz); et (Bağlaç - ve); conservamus (1. Çoğul - Koruyoruz)."
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
    "vocab": ["laudo", "moneo", "do", "voco", "conservo", "erro", "sententia", "culpa", "si", "nihil", "saepe", "labor"],
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
        "analysis": "Monē (2. Tekil Emir - Uyar); me (Acc. - Beni); amābō tē (Kalıp ifade: 'Lütfen, rica ederim', kelimesi kelimesine 'seni seveceğim'); sī (Bağlaç - Eğer); errō (1. Tekil Praesens - Yanılıyorum).",
        "notes": "Monē (2. Tekil Emir - Uyar); me (Acc. - Beni); amābō tē (Kalıp ifade: 'Lütfen, rica ederim', kelimesi kelimesine 'seni seveceğim'); sī (Bağlaç - Eğer); errō (1. Tekil Praesens - Yanılıyorum)."
      },
      {
        "latin": "Nōlīte dāre culpam puellīs.",
        "tr": "Kızlara suç yüklemeyiniz!",
        "analysis": "Nōlīte dāre (Olumsuz çoğul emir - Vermeyiniz); culpam (Acc. Sg. - Suçu); puellīs (Dat. Pl. - Kızlara).",
        "notes": "Nōlīte dāre (Olumsuz çoğul emir - Vermeyiniz); culpam (Acc. Sg. - Suçu); puellīs (Dat. Pl. - Kızlara)."
      },
      {
        "latin": "Nihil me terret.",
        "tr": "Hiçbir şey beni korkutmuyor.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
      },
      {
        "latin": "Apollo me saepe servat.",
        "tr": "Apollo beni sık sık korur.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
      },
      {
        "latin": "Saepe nihil cogitas.",
        "tr": "Sık sık hiçbir şey düşünmüyorsun.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
      },
      {
        "latin": "Festina lente.",
        "tr": "Yavaşça acele et.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
      },
      {
        "latin": "Mone me, si erro.",
        "tr": "Hata yaparsam beni uyar.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
      },
      {
        "latin": "Labor me vocat.",
        "tr": "İş beni çağırıyor.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
      },
      {
        "latin": "Nihil videmus.",
        "tr": "Hiçbir şey görmüyoruz.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
      },
      {
        "latin": "Salve, discipula!",
        "tr": "Selam sana, kız öğrenci!",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
      },
      {
        "latin": "Salvete, discipulae!",
        "tr": "Selam size, kız öğrenciler!",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması"
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
    "vocab": ["servus", "deus", "dominus", "populus", "amicus", "filius", "equus", "bellum", "verbum", "consilium", "donum", "periculum", "otium", "officium", "servo"],
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
        "analysis": "Dominus (2. Çekim Eril, Nom. Sg. - Özne); servō bonō (Dat. Sg. - İyi köleye); dōnum (2. Çekim Nötr, Acc. Sg. - Belirtisiz Nesne); dat (do fiili, 3. Tekil Praesens).",
        "notes": "Dominus (2. Çekim Eril, Nom. Sg. - Özne); servō bonō (Dat. Sg. - İyi köleye); dōnum (2. Çekim Nötr, Acc. Sg. - Belirtisiz Nesne); dat (do fiili, 3. Tekil Praesens)."
      },
      {
        "latin": "Bella perīcula magna habent.",
        "tr": "Savaşlar büyük tehlikelere sahiptir (büyük tehlikeler içerir).",
        "analysis": "Bella (Nom. Pl. n. - Savaşlar); perīcula magna (Acc. Pl. n. - Büyük tehlikeleri); habent (3. Çoğul Praesens - Sahiptirler).",
        "notes": "Bella (Nom. Pl. n. - Savaşlar); perīcula magna (Acc. Pl. n. - Büyük tehlikeleri); habent (3. Çoğul Praesens - Sahiptirler)."
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
    "vocab": ["ager", "puer", "vir", "magister", "liberi", "liber", "in", "hodie", "semper", "fortuna"],
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
        "analysis": "Magister (Nom. Sg. - Öğretmen); puerōs (Acc. Pl. - Çocukları); in agrō (in + Abl. - Tarlada); monet (3. Tekil Praesens - Uyarır).",
        "notes": "Magister (Nom. Sg. - Öğretmen); puerōs (Acc. Pl. - Çocukları); in agrō (in + Abl. - Tarlada); monet (3. Tekil Praesens - Uyarır)."
      },
      {
        "latin": "Filium nautae in agris videmus.",
        "tr": "Gemicinin oğlunu tarlalarda görüyoruz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Pueri puellas hodie vocant.",
        "tr": "Çocuklar kızları bugün çağırıyorlar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sapientiam semper laudat.",
        "tr": "Her zaman bilgeliği yüceltir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Fortuna viros amat.",
        "tr": "Talih yiğitleri sever.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Agricola filiabus pecuniam dat.",
        "tr": "Çiftçi kız çocuklarına para verir.",
        "analysis": "",
        "notes": ""
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
        "analysis": "Bonī virī (Nom. Pl. m. - İyi insanlar); patriam (Acc. Sg. f. - Vatanı); amant (3. Çoğul Praesens - Severler).",
        "notes": "Bonī virī (Nom. Pl. m. - İyi insanlar); patriam (Acc. Sg. f. - Vatanı); amant (3. Çoğul Praesens - Severler)."
      },
      {
        "latin": "Multa perīcula nautam terrent.",
        "tr": "Pek çok tehlike denizciyi korkutur.",
        "analysis": "Multa perīcula (Nom. Pl. n. - Pek çok tehlike); nautam (Acc. Sg. m. - Denizciyi); terrent (terreo fiili, 3. Çoğul Praesens - Korkuturlar).",
        "notes": "Multa perīcula (Nom. Pl. n. - Pek çok tehlike); nautam (Acc. Sg. m. - Denizciyi); terrent (terreo fiili, 3. Çoğul Praesens - Korkuturlar)."
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
    "vocab": ["pulcher", "liber", "miser", "noster", "vester", "meus", "tuus", "suus", "officium", "semper", "amicus", "poeta", "magnus", "fama", "puer", "et", "puella", "donum", "clarus", "in", "non", "sed", "quoque"],
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
        "analysis": "Officium (Nom. Sg. n. - Görev); līberōs virōs (Acc. Pl. m. - Özgür adamları); semper (Zarf - Her zaman); vocābat (3. Tekil Imperfectum - Çağırırdı).",
        "notes": "Officium (Nom. Sg. n. - Görev); līberōs virōs (Acc. Pl. m. - Özgür adamları); semper (Zarf - Her zaman); vocābat (3. Tekil Imperfectum - Çağırırdı)."
      },
      {
        "latin": "Vergilius est amicus Augusti.",
        "tr": "Vergilius Augustus’un dostudur.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vergilius est poeta.",
        "tr": "Vergilius bir şairdir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vergilius est magnus.",
        "tr": "Vergilius büyüktür (büyük bir insandır.)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Fama Vergilii est magna.",
        "tr": "Vergilius’un şöhreti büyüktür.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ") Amicae sunt bonae.",
        "tr": "Kız arkadaşlar iyidir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Pueri debent esse boni.",
        "tr": "Çocuklar iyi olmalıdır. (Çocukların iyi olması gerekir.)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Puer et puella sunt boni.",
        "tr": "Erkek ve kız çocuklar iyidir(ler).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Donum est magnum.",
        "tr": "Hediye büyüktür.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Dona sunt magna.",
        "tr": "Hediyeler büyüktür(ler).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sumus Romani.",
        "tr": "Biz Romalıyız. (Romalı erkekleriz.)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sumus Romanae.",
        "tr": "Biz Romalıyız. (Romalı kadınlarız.)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Servi sunt miseri.",
        "tr": "Köleler zavallıdır(lar).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Poeta est clarus.",
        "tr": "Şair meşhurdur.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Roma in Italia est.",
        "tr": "Roma İtalya’dadır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Italia in Europa est.",
        "tr": "İtalya, Avrupa’dadır. (İtalya Avrupa’da bulunur/yer alır.)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Gallia non in Africa est. Syria non est in Europa, sed in Asia.",
        "tr": "Gallia Afrika’da değildir. Syria, Avrupa’da değildir, ama/aksine Asya’dadır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Germania non in Asia, sed in Europa est.",
        "tr": "Germania Asya’da değil, aksine Avrupa’dadır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Britannia quoque in Europa est. Britannia",
        "tr": "da Avrupa’dadır. (Britannia da Avrupa’da bulunur/yer alır.)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "- Est",
        "tr": "Eski kapı büyük değildir, ama güzeldir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Gallia in Europa?",
        "tr": "- Gallia Avrupa’da mıdır",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "? - Gallia in Europa est.",
        "tr": "- Gallia Avrupa’dadır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Roma in Gallia?",
        "tr": "- Roma Gallia’da mıdır",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "? - Roma in Gallia non est.",
        "tr": "- Roma Gallia’da değildir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Hispania et Italia et Graecia in Europa sunt.",
        "tr": "İspanya, İtalya ve Yunanistan Avrupa’dadır.",
        "analysis": "",
        "notes": ""
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
    "vocab": ["laudo", "moneo", "saepe", "heri", "supero", "maneo", "adiuvo", "magister", "in"],
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
        "analysis": "Poētae (Nom. Pl. m. - Şairler); vītam (Acc. Sg. f. - Yaşamı); agricolae (Gen. Sg. m. - Çiftçinin); laudābant (3. Çoğul Imperfectum - Övüyorlardı).",
        "notes": "Poētae (Nom. Pl. m. - Şairler); vītam (Acc. Sg. f. - Yaşamı); agricolae (Gen. Sg. m. - Çiftçinin); laudābant (3. Çoğul Imperfectum - Övüyorlardı)."
      },
      {
        "latin": "Magister puerōs in agrīs vocābat.",
        "tr": "Öğretmen çocukları tarlalarda çağırıyordu.",
        "analysis": "Magister (Nom. Sg. - Öğretmen); puerōs (Acc. Pl. - Çocukları); vocābat (3. Tekil Imperfectum).",
        "notes": "Magister (Nom. Sg. - Öğretmen); puerōs (Acc. Pl. - Çocukları); vocābat (3. Tekil Imperfectum)."
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
    "vocab": ["cras", "propter", "culpa", "remedium", "supero", "valeo", "non", "sed", "patria", "saepe", "pauci", "de", "numerus", "mora", "bonus", "amicus", "meus", "otium", "et", "vir", "fortuna", "si", "erro", "nihil", "fama", "sententia", "do", "ars", "ira", "hodie", "debeo"],
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
      },
      {
        "title": "Okuma Parçası: Maecenas ve Vergilius'un Daveti",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Maecenas ve Vergilius'un Daveti</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Edebi Çevre:</strong> Quintus Horatius Flaccus & Gaius Maecenas Dost Meclisi (Roma, İÖ 35)</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Maecenas\" role=\"button\" tabindex=\"0\">Maecenas</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"Vergilius\" role=\"button\" tabindex=\"0\">Vergilius</span> <span class=\"lat-word\" data-word=\"me\" role=\"button\" tabindex=\"0\">me</span> <span class=\"lat-word\" data-word=\"hodie\" role=\"button\" tabindex=\"0\">hodie</span> <span class=\"lat-word\" data-word=\"vocant\" role=\"button\" tabindex=\"0\">vocant</span>. <span class=\"lat-word\" data-word=\"Quid\" role=\"button\" tabindex=\"0\">Quid</span> <span class=\"lat-word\" data-word=\"cogitare\" role=\"button\" tabindex=\"0\">cogitare</span> <span class=\"lat-word\" data-word=\"debeo\" role=\"button\" tabindex=\"0\">debeo</span>? <span class=\"lat-word\" data-word=\"Quid\" role=\"button\" tabindex=\"0\">Quid</span> <span class=\"lat-word\" data-word=\"debeo\" role=\"button\" tabindex=\"0\">debeo</span> <span class=\"lat-word\" data-word=\"respondere\" role=\"button\" tabindex=\"0\">respondere</span>? <span class=\"lat-word\" data-word=\"Si\" role=\"button\" tabindex=\"0\">Si</span> <span class=\"lat-word\" data-word=\"erro\" role=\"button\" tabindex=\"0\">erro</span>, <span class=\"lat-word\" data-word=\"me\" role=\"button\" tabindex=\"0\">me</span> <span class=\"lat-word\" data-word=\"saepe\" role=\"button\" tabindex=\"0\">saepe</span> <span class=\"lat-word\" data-word=\"monent\" role=\"button\" tabindex=\"0\">monent</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"culpant\" role=\"button\" tabindex=\"0\">culpant</span>; <span class=\"lat-word\" data-word=\"si\" role=\"button\" tabindex=\"0\">si</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"erro\" role=\"button\" tabindex=\"0\">erro</span>, <span class=\"lat-word\" data-word=\"me\" role=\"button\" tabindex=\"0\">me</span> <span class=\"lat-word\" data-word=\"laudant\" role=\"button\" tabindex=\"0\">laudant</span>. <span class=\"lat-word\" data-word=\"Quid\" role=\"button\" tabindex=\"0\">Quid</span> <span class=\"lat-word\" data-word=\"hodie\" role=\"button\" tabindex=\"0\">hodie</span> <span class=\"lat-word\" data-word=\"cogitare\" role=\"button\" tabindex=\"0\">cogitare</span> <span class=\"lat-word\" data-word=\"debeo\" role=\"button\" tabindex=\"0\">debeo</span>?\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Maecenas ile Vergilius bugün beni davet ediyorlar. Ne düşünmem gerekir? Ne yanıt vermem gerekir? Eğer hata yaparsam beni sürekli uyarırlar (ikaz ederler) ve suçlarlar; eğer hata yapmazsam, beni överler. Bugün ne düşünmem gerekir? (Bugün ne düşünmek zorundayım.)</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Perīcula bellī nōn sunt parva, sed patria tua tē vocābit.",
        "tr": "Savaşın tehlikeleri küçük değildir, ama senin vatanın seni çağıracaktır.",
        "analysis": "Perīcula bellī (Nom. Pl. n. - Savaşın tehlikeleri); nōn sunt parva (Küçük değildir); sed (Fakat); patria tua (Nom. Sg. f. - Senin vatanın); tē (Acc. - Seni); vocābit (3. Tekil Futurum - Çağıracaktır).",
        "notes": "Perīcula bellī (Nom. Pl. n. - Savaşın tehlikeleri); nōn sunt parva (Küçük değildir); sed (Fakat); patria tua (Nom. Sg. f. - Senin vatanın); tē (Acc. - Seni); vocābit (3. Tekil Futurum - Çağıracaktır)."
      },
      {
        "latin": "Propter culpās malōrum patria nostra nōn valēbit.",
        "tr": "Kötülerin suçları yüzünden vatanımız güçlü olmayacaktır.",
        "analysis": "Propter culpās (propter + Acc. - Suçları yüzünden); malōrum (Gen. Pl. - Kötülerin); valēbit (3. Tekil Futurum - Güçlü olacaktır).",
        "notes": "Propter culpās (propter + Acc. - Suçları yüzünden); malōrum (Gen. Pl. - Kötülerin); valēbit (3. Tekil Futurum - Güçlü olacaktır)."
      },
      {
        "latin": "Bonas saepe laudant.",
        "tr": "İyileri (iyi kadınları) sürekli överler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multi sunt stulti.",
        "tr": "Çoğu insan aptaldır. (Çoğu erkek aptaldır.)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Pueri mala non amant.",
        "tr": "Çocuklar kötü şeyleri sevmezler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Pauci de periculo cogitant.",
        "tr": "Çok az kişi (çok az insan) tehlike hakkında düşünüyor.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Infinitus est numerus stultorum.",
        "tr": "Aptalların sayısı sınırsızdır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Remedium irae est mora.",
        "tr": "Öfkenin çaresi ertelemektir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Bonus Daphnis, amicus meus, otium et vitam agricolae amat.",
        "tr": "İyi Daphnis, benim arkadaşım, bir çiftçinin yaşamını ve boş vaktini sever.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Salve, O amice, vir bonus es.",
        "tr": "Selam ey dostum, sen iyi bir insansın.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Fortuna est caeca. Otium est bonum, sed otium multorum est parvum.",
        "tr": "Talih kördür. Boş vakit iyidir, ama çoğu insanın boş vakti kısadır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Mone me, amabo te, si erro. Saepe peccamus.",
        "tr": "Eğer hata yapıyorsam, lütfen",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "beni uyar!",
        "tr": "Sık sık hata yaparız (yapıyoruz).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Laudas me, culpant me.",
        "tr": "Sen beni övüyorsun, onlar ise suçluyorlar. amabo te, (deyim olarak) lütfen",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Quid debemus cogitare? Conservate me!. Beni koruyunuz! (Koruyun beni!) Me non amat. Rumor volat. Beni sevmez (sevmiyor).",
        "tr": "Dedikodu çabucak yayılır.",
        "analysis": "Ne düşünmeliyiz? (Ne düşünmemiz gerekir? Ne düşünmek zorundayız?); conservo, are, korumak, muhafa etmek, kurtarmak; rumor: dedikodu, söylenti",
        "notes": "Ne düşünmeliyiz? (Ne düşünmemiz gerekir? Ne düşünmek zorundayız?); conservo, are, korumak, muhafa etmek, kurtarmak; rumor: dedikodu, söylenti"
      },
      {
        "latin": "- Salvete! Quid videtis?",
        "tr": "- Selam sizlere! Ne görüyorsunuz?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "- Nihil videmus.",
        "tr": "- Hiçbir şey görmüyoruz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Bis das, si cito das.",
        "tr": "Eğer çabuk verirsen, iki kere verirsin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Si vales, valeo.",
        "tr": "Eğer sen iyi olursan (iyiysen), ben de iyi olurum. soru kelimesi",
        "analysis": "quid, ne? (",
        "notes": "quid, ne? ("
      },
      {
        "latin": "Salve, Ō patria! Fama et sententia volant. Selam sana ey vatan!",
        "tr": "Şöhret ve söz çabuk yayılır. Da veniam puellae, amabo te. Kız çocuğuna merhamet göster, lütfen.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Clementia tua multas vitas servat. Multam pecuniam deportat.",
        "tr": "Senin hoşgörün pek çok yaşamı kurtarıyor. Bir sürü / bolca para taşıyor.",
        "analysis": "venia, -ae, f., merhamet, iyilik; patria, -ae, f., vatan; tuus, -a, -um, sana ait, senin; clementia, -ae, f., hoşgörü; fama, -ae, f., ün, şöhret; servo, are, korumak, kurtarmak",
        "notes": "venia, -ae, f., merhamet, iyilik; patria, -ae, f., vatan; tuus, -a, -um, sana ait, senin; clementia, -ae, f., hoşgörü; fama, -ae, f., ün, şöhret; servo, are, korumak, kurtarmak"
      },
      {
        "latin": "Fortunam et vitam antiquae patriae saepe laudas, sed recusas.",
        "tr": "Eski vatanın talihini ve yaşantısını sıklıkla övüyorsun, ama (dönmeyi) reddediyorsun.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Me vitare turbam iubes.",
        "tr": "Bana kalabalıktan kaçınmamı emrediyorsun.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Me philsophiae do.",
        "tr": "Kendimi felsefeye adıyorum.",
        "analysis": "recuso, -are, reddetmek; turba, -ae, f., kalabalık; antiquus, -a, -um, eski, kadim; me: ben (acc. halde); vito, -are, kaçınmak, sakınmak; iubeo, -ere, emretmek",
        "notes": "recuso, -are, reddetmek; turba, -ae, f., kalabalık; antiquus, -a, -um, eski, kadim; me: ben (acc. halde); vito, -are, kaçınmak, sakınmak; iubeo, -ere, emretmek"
      },
      {
        "latin": "Philosophia est ars vitae.",
        "tr": "Felsefe bir yaşam sanatıdır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sanam formam vitae conservate.",
        "tr": "Sağlıklı yaşam biçimini koruyunuz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Immodica ira creat insaniam.",
        "tr": "Ölçüsüz öfke/hiddet deliliğe yol açar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Quid cogitas? - debemus iram vitare.",
        "tr": "Ne düşünüyorsun? Öfkeden kaçınmalıyız.",
        "analysis": "insania, -ae, f., delilik; forma, -ae, f., biçim, şekil; immodicus, -a, -um, aşırı, ölçüsüz; ars: sanat; creo, -are, yaratmak, meydana getirmek, neden olmak",
        "notes": "insania, -ae, f., delilik; forma, -ae, f., biçim, şekil; immodicus, -a, -um, aşırı, ölçüsüz; ars: sanat; creo, -are, yaratmak, meydana getirmek, neden olmak"
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
    "vocab": ["sum", "otium", "exitium", "basium", "animus", "dignus", "stultus", "vita", "nihil", "sine", "in", "et", "de", "poena", "non", "video", "bonus", "amicus", "meus", "filia", "semper", "si", "ira", "saepe", "fortuna", "pauci", "copia", "pecunia", "puella", "poeta", "sed", "valeo"],
    "sections": [
      {
        "title": "1. esse (Olmak) Fiilinin Temel Parçaları",
        "html": "<p>Latince sözlüklerde <em>esse</em> fiili şu şekilde yer alır: <strong>sum, esse, fuī, futūrum</strong> (olmak, var olmak). Hint-Avrupa kökenli iki ayrı kökten türediği için kök değişimleri gösterir (es- ve fu- kökleri).</p>",
        "calloutType": "rule",
        "calloutTitle": "Yüklem İsim Tamlayanı (Praedicativum)",
        "calloutText": "esse fiili geçişsiz bir bağ fiildir (kopula). Bu nedenle hiçbir zaman nesne (Accusativus) almaz! 'A, B'dir' derken her iki isim de Nominativus halinde bulunur: Vita est supplicium (Hayat bir cezadır).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs</th><th>Praesens (Şimdiki/Geniş)</th><th>Imperfectum (Hikâye)</th><th>Futurum I (Gelecek)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=\"case-cell-latin\"><strong>sum</strong> (oluyorum / varım)</td><td class=\"case-cell-latin\"><strong>eram</strong> (oluyordum / vardım)</td><td class=\"case-cell-latin\"><strong>erō</strong> (olacağım)</td></tr>\n      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=\"case-cell-latin\"><strong>es</strong> (oluyorsun / varsın)</td><td class=\"case-cell-latin\"><strong>erās</strong> (oluyordun / vardın)</td><td class=\"case-cell-latin\"><strong>eris</strong> (olacaksın)</td></tr>\n      <tr><td><strong>3. Sg. (O)</strong></td><td class=\"case-cell-latin\"><strong>est</strong> (oluyor / var / -dir)</td><td class=\"case-cell-latin\"><strong>erat</strong> (oluyordu / vardı)</td><td class=\"case-cell-latin\"><strong>erit</strong> (olacak)</td></tr>\n      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=\"case-cell-latin\"><strong>sumus</strong> (oluyoruz / varız)</td><td class=\"case-cell-latin\"><strong>erāmus</strong> (oluyorduk / vardık)</td><td class=\"case-cell-latin\"><strong>erimus</strong> (olacağız)</td></tr>\n      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=\"case-cell-latin\"><strong>estis</strong> (oluyorsunuz / varsınız)</td><td class=\"case-cell-latin\"><strong>erātis</strong> (oluyordunuz / vardınız)</td><td class=\"case-cell-latin\"><strong>eritis</strong> (olacaksınız)</td></tr>\n      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=\"case-cell-latin\"><strong>sunt</strong> (oluyorlar / varlar / -dirler)</td><td class=\"case-cell-latin\"><strong>erant</strong> (oluyorlardı / vardılar)</td><td class=\"case-cell-latin\"><strong>erunt</strong> (olacaklar)</td></tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "title": "Okuma Parçası 1: Catullus'un Sevgilisine Vedası (Vale, Puella!)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası 1: Catullus'un Sevgilisine Vedası (Vale, Puella!)</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Kaynak Metin:</strong> Gaius Valerius Catullus, <em>Carmen VIII</em> (Miser Catulle, desinas ineptire)</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Puella\" role=\"button\" tabindex=\"0\">Puella</span> <span class=\"lat-word\" data-word=\"mea\" role=\"button\" tabindex=\"0\">mea</span> <span class=\"lat-word\" data-word=\"me\" role=\"button\" tabindex=\"0\">me</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"amat\" role=\"button\" tabindex=\"0\">amat</span>. <span class=\"lat-word\" data-word=\"Vale\" role=\"button\" tabindex=\"0\">Vale</span>, <span class=\"lat-word\" data-word=\"puella\" role=\"button\" tabindex=\"0\">puella</span>! <span class=\"lat-word\" data-word=\"Catullus\" role=\"button\" tabindex=\"0\">Catullus</span> <span class=\"lat-word\" data-word=\"obdurat\" role=\"button\" tabindex=\"0\">obdurat</span>: <span class=\"lat-word\" data-word=\"poeta\" role=\"button\" tabindex=\"0\">poeta</span> <span class=\"lat-word\" data-word=\"puellam\" role=\"button\" tabindex=\"0\">puellam</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"amat\" role=\"button\" tabindex=\"0\">amat</span>, <span class=\"lat-word\" data-word=\"formam\" role=\"button\" tabindex=\"0\">formam</span> <span class=\"lat-word\" data-word=\"puellae\" role=\"button\" tabindex=\"0\">puellae</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"laudat\" role=\"button\" tabindex=\"0\">laudat</span>, <span class=\"lat-word\" data-word=\"puellae\" role=\"button\" tabindex=\"0\">puellae</span> <span class=\"lat-word\" data-word=\"rosas\" role=\"button\" tabindex=\"0\">rosas</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"dat\" role=\"button\" tabindex=\"0\">dat</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"puellam\" role=\"button\" tabindex=\"0\">puellam</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"basiat\" role=\"button\" tabindex=\"0\">basiat</span>! <span class=\"lat-word\" data-word=\"Ira\" role=\"button\" tabindex=\"0\">Ira</span> <span class=\"lat-word\" data-word=\"mea\" role=\"button\" tabindex=\"0\">mea</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"magna\" role=\"button\" tabindex=\"0\">magna</span>! <span class=\"lat-word\" data-word=\"Obduro\" role=\"button\" tabindex=\"0\">Obduro</span>, <span class=\"lat-word\" data-word=\"mea\" role=\"button\" tabindex=\"0\">mea</span> <span class=\"lat-word\" data-word=\"puella\" role=\"button\" tabindex=\"0\">puella</span> – <span class=\"lat-word\" data-word=\"sed\" role=\"button\" tabindex=\"0\">sed</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"te\" role=\"button\" tabindex=\"0\">te</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"valeo\" role=\"button\" tabindex=\"0\">valeo</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Sevgilim beni sevmiyor. Hoşçakal ey sevgili! Catullus dayanıyor: şair sevgilisini sevmiyor, sevgilisinin güzelliğini övmüyor, sevgilisine güller vermiyor ve sevgilisini öpmüyor. Öfkem büyüktür. Dayanıyorum sevgilim, ama sensiz iyi değilim. obduro, -are, sağlam durmak, dayanmak, direnmek basio, -are, öpmek, öpücük vermek meus, -a, um, adj., benim, bana ait</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası 2: Çiftçi, Denizci ve Felsefe",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası 2: Çiftçi, Denizci ve Felsefe</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Edebi Tür:</strong> Klasik Roma Felsefi Diyaloğu & Fabl Anlatımı</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Agricola\" role=\"button\" tabindex=\"0\">Agricola</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"vitam\" role=\"button\" tabindex=\"0\">vitam</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"fortunam\" role=\"button\" tabindex=\"0\">fortunam</span> <span class=\"lat-word\" data-word=\"nautae\" role=\"button\" tabindex=\"0\">nautae</span> <span class=\"lat-word\" data-word=\"saepe\" role=\"button\" tabindex=\"0\">saepe</span> <span class=\"lat-word\" data-word=\"laudat\" role=\"button\" tabindex=\"0\">laudat</span>; <span class=\"lat-word\" data-word=\"nauta\" role=\"button\" tabindex=\"0\">nauta</span> <span class=\"lat-word\" data-word=\"magnam\" role=\"button\" tabindex=\"0\">magnam</span> <span class=\"lat-word\" data-word=\"fortunam\" role=\"button\" tabindex=\"0\">fortunam</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"vitam\" role=\"button\" tabindex=\"0\">vitam</span> <span class=\"lat-word\" data-word=\"poetae\" role=\"button\" tabindex=\"0\">poetae</span> <span class=\"lat-word\" data-word=\"saepe\" role=\"button\" tabindex=\"0\">saepe</span> <span class=\"lat-word\" data-word=\"laudat\" role=\"button\" tabindex=\"0\">laudat</span>; <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"poeta\" role=\"button\" tabindex=\"0\">poeta</span> <span class=\"lat-word\" data-word=\"vitam\" role=\"button\" tabindex=\"0\">vitam</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"agros\" role=\"button\" tabindex=\"0\">agros</span> <span class=\"lat-word\" data-word=\"agricolae\" role=\"button\" tabindex=\"0\">agricolae</span> <span class=\"lat-word\" data-word=\"laudat\" role=\"button\" tabindex=\"0\">laudat</span>. <span class=\"lat-word\" data-word=\"Sine\" role=\"button\" tabindex=\"0\">Sine</span> <span class=\"lat-word\" data-word=\"philosophia\" role=\"button\" tabindex=\"0\">philosophia</span> <span class=\"lat-word\" data-word=\"avari\" role=\"button\" tabindex=\"0\">avari</span> <span class=\"lat-word\" data-word=\"viri\" role=\"button\" tabindex=\"0\">viri</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span> <span class=\"lat-word\" data-word=\"pecunia\" role=\"button\" tabindex=\"0\">pecunia</span> <span class=\"lat-word\" data-word=\"semper\" role=\"button\" tabindex=\"0\">semper</span> <span class=\"lat-word\" data-word=\"cogitant\" role=\"button\" tabindex=\"0\">cogitant</span>: <span class=\"lat-word\" data-word=\"multum\" role=\"button\" tabindex=\"0\">multum</span> <span class=\"lat-word\" data-word=\"pecuniam\" role=\"button\" tabindex=\"0\">pecuniam</span> <span class=\"lat-word\" data-word=\"habent\" role=\"button\" tabindex=\"0\">habent</span>, <span class=\"lat-word\" data-word=\"sed\" role=\"button\" tabindex=\"0\">sed</span> <span class=\"lat-word\" data-word=\"pecunia\" role=\"button\" tabindex=\"0\">pecunia</span> <span class=\"lat-word\" data-word=\"multa\" role=\"button\" tabindex=\"0\">multa</span> <span class=\"lat-word\" data-word=\"virum\" role=\"button\" tabindex=\"0\">virum</span> <span class=\"lat-word\" data-word=\"avarum\" role=\"button\" tabindex=\"0\">avarum</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"satiat\" role=\"button\" tabindex=\"0\">satiat</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Çiftçi, denizcinin hem yaşamını hem de talihini sık sık över / övmektedir; denizci, şairin büyük talihini ve yaşamını ikide birde över; şair de çiftçinin yaşamını ve tarlalarını över. Felsefe olmadan, açgözlü adamlar sürekli / hep para hakkında düşünür: çok / bir sürü paraları vardır, ama çok para açgözlü adamı doyurmaz / tatmin etmez.</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Vīta est nihil sine amīcitiā.",
        "tr": "Dostluk olmadan hayat bir hiçtir.",
        "analysis": "Vīta (Nom. Sg. f. - Hayat); est (3. Tekil Praesens - -dir); nihil (Nom. n. - Hiç); sine amīcitiā (sine + Abl. - Dostluk olmadan).",
        "notes": "Vīta (Nom. Sg. f. - Hayat); est (3. Tekil Praesens - -dir); nihil (Nom. n. - Hiç); sine amīcitiā (sine + Abl. - Dostluk olmadan)."
      },
      {
        "latin": "Malī sunt in nostrō numerō et dē exitiō bonōrum cōgitant.",
        "tr": "Aramızda kötüler var ve iyi insanların yıkımını tasarlıyorlar.",
        "analysis": "Malī (Nom. Pl. m. - Kötü insanlar); sunt (Var / Vardırlar); in nostrō numerō (Aramızda / Sayımız içinde); cōgitant (Düşünüyorlar).",
        "notes": "Malī (Nom. Pl. m. - Kötü insanlar); sunt (Var / Vardırlar); in nostrō numerō (Aramızda / Sayımız içinde); cōgitant (Düşünüyorlar)."
      },
      {
        "latin": "Nulla avaritia sine poena est.",
        "tr": "Hiçbir açgözlülük cezasız kalmaz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Me saevis catenis onerat.",
        "tr": "Beni sert / acı veren zincirlere vuruyor.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Rotam fortunae non timent.",
        "tr": "Feleğin çarkından / çemberinden korkmazlar.",
        "analysis": "avaritia, -ae, f., açgözlülük, doyumsuzluk; catena, -ae, f., zincir, pranga; sine, prep., (+ abl.) –meksizin, -siz, -sız; saevus, -a, -um, acımasız; onero, -are, yük bindirmek, zulmetmek, eziyet etmek; timeo, -ere, korkmak",
        "notes": "avaritia, -ae, f., açgözlülük, doyumsuzluk; catena, -ae, f., zincir, pranga; sine, prep., (+ abl.) –meksizin, -siz, -sız; saevus, -a, -um, acımasız; onero, -are, yük bindirmek, zulmetmek, eziyet etmek; timeo, -ere, korkmak"
      },
      {
        "latin": "filium meum, in agro video. Gaius’u,",
        "tr": "oğlumu, tarlada görüyorum.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Bonus Daphnis, amicus meus, otium et vitam agricolae amat.",
        "tr": "İyi Daphnis, benim arkadaşım, bir çiftçinin yaşamını ve boş vaktini sever.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Filium nautae in agris videmus.",
        "tr": "Romalı denizcinin oğlunu tarlalarda görüyoruz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sapientiam amicarum, Ō filia mea, semper laudat.",
        "tr": "Ey kızım, (o kişi) senin kız arkadaşlarının bilgeliğini her zaman över.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multi viri et feminae philosophiam antiquam conservant.",
        "tr": "Pek çok adam ve kadın eski/kadim felsefeyi sürdürüyor/muhafaza ediyor.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Si ira valet, Ō mi filii, saepe erramus et poenas damus.",
        "tr": "Eğer öfke güçlü olursa / güçlenirse, ey oğlum, çok sık hata yaparız ve bedelini öderiz. çekmek, bedelini ödemek",
        "analysis": "poenas dare: cezasını",
        "notes": "poenas dare: cezasını"
      },
      {
        "latin": "Fortuna viros magnos amat.",
        "tr": "Talih büyük / güçlü adamları sever.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Debetis, amici, de populo Romano cogitare.",
        "tr": "Dostlar, Roma halkı hakkında düşünmeniz gerekir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Maecenas, amicus Augusti, me in numero amicorum habet.",
        "tr": "Maecenas, Augustus’un dostu, dostlarının arasında beni de sayar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Libellus meus et sententiae meae vitas virorum monent.",
        "tr": "Küçük kitabım ve düşüncelerim insanların yaşamları için tavsiye verir.",
        "analysis": "de: (+ abl.) hakkında,",
        "notes": "de: (+ abl.) hakkında,"
      },
      {
        "latin": "Pauci viri sapientiae student.",
        "tr": "Pek az kişi bilgelik için çaba harcar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Semper avarus eget.",
        "tr": "Açgözlü kişi daima yoksunluk duyar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Fortuna adversa virum magnae sapientiae non terret.",
        "tr": "Kötü talih, büyük bilgelik / sağduyu sahibi adamı korkutmaz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Nulla copia pecuniae avarum virum satiat.",
        "tr": "Hiçbir para bolluğu açgözlü adamı doyurmaz. az, biraz, birkaç;",
        "analysis": "paucus, -a, -um,",
        "notes": "paucus, -a, -um,"
      },
      {
        "latin": "dat.)",
        "tr": ", yoksun olmak, ihtiyaç duymak bolluk, çokluk doyurmak, tatmin etmek",
        "analysis": "egeo, -ere; copia, -ae, f.,; satio, -are,",
        "notes": "egeo, -ere; copia, -ae, f.,; satio, -are,"
      },
      {
        "latin": "Pecunia avarum irritat, non satiat.",
        "tr": "Para açgözlüyü (açgözlü adamı) tahrik eder, ama tatmin etmez.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Secrete amicos admone, lauda palam!",
        "tr": "Dostlarını gizlice uyar, açıktan açığa öv!",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Modum tenere debemus.",
        "tr": "Ölçüyü yakalamak zorundayız.",
        "analysis": "secrete, adv.,",
        "notes": "secrete, adv.,"
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
    "vocab": ["possum", "remaneo", "conservo", "invidia", "sustineo", "angustus", "sanus", "otium", "nihil", "non", "si", "erro", "saepe", "sine", "et", "patria", "porta", "vita", "hodie", "in", "semper", "sapientia", "fortuna", "pecunia", "bellum", "insula", "fama", "amicus", "meus", "de", "sed", "mora", "puer"],
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
        "analysis": "Amīcī nostrī (Nom. Pl. - Arkadaşlarımız); poterant (3. Çoğul Imperfectum - Gelebiliyordu); superāre (Mastar - Üstesinden gelmek); multa perīcula (Acc. Pl. - Pek çok tehlikeyi).",
        "notes": "Amīcī nostrī (Nom. Pl. - Arkadaşlarımız); poterant (3. Çoğul Imperfectum - Gelebiliyordu); superāre (Mastar - Üstesinden gelmek); multa perīcula (Acc. Pl. - Pek çok tehlikeyi)."
      },
      {
        "latin": "Quid videt.",
        "tr": "Ne görüyor? Hiçbir şey vermiyorlar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Nihil dant.",
        "tr": "Beni övmemelisin. / Beni övmen gerekmiyor.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Non debes laudare me.",
        "tr": "Beni övmemelisin / Beni övmek zorunda değilsin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Si erro, me saepe monet.",
        "tr": "Eğer bir hata yaparsam, genellikle beni uyarır. Eğer beni seviyorsan, beni kurtar lütfen!",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Si me amas, serva me, amabo te.",
        "tr": "Güzel kızlar iyi şairin hayatını kurtarıyorlar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Puellae pulchrae vitam poetae boni servant.",
        "tr": "Güzel kızlar iyi şairin hayatını kurtarırlar / korurlar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sine philosophia saepe erramus et poenas damus.",
        "tr": "Felsefe olmadan çoğunlukla başıboş dolaşırız ve bedelini öderiz. Eğer vatanın güçlüyse, denzicileri hiçbir şey korkutmaz ve büyük talihini övmen",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "gerekir! Si patria tua valet, nihil nautas terret et magnam fortunam tuam laudare debes.",
        "tr": "Eğer vatanın esenlik içindeyse, hiçbir şey denizcileri korkutmaz ve sen kendi büyük talihini övmelisin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Poenas irae saepe damus.",
        "tr": "Öfkenin cezasını genelde öderiz. Eski kapı büyük ve uzundur.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Porta antiqua magna et longa est.",
        "tr": "Birkaç arkadaş olmadan yaşam sağlıklı değildir (sağlıklı olmaz).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sine paucis amicis vita non valet.",
        "tr": "Birkaç dost olmadan hayatın bir kıymeti yoktur / hayat iyi değildir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Hodie multam famam habes in patria tua.",
        "tr": "Ülkende bugün çok fazla üne sahipsin. Ey dostum, senin kızlarının yaşamlarında büyük bir talih görüyoruz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "In vitis filiarum tuarum, O amice, magnam fortunam videmus.",
        "tr": "Kızlarıma ve oğullarıma her zaman güller verirler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Filiis filiabusque meis rosas semper dant.",
        "tr": "Oğullarıma ve kızlarıma her zaman güller verirler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "In magno periculo es.",
        "tr": "Büyük bir tehlike içindesin. Oğlumun düşünceleri genelde aptalcadır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sententiae filii mei saepe stultae sunt.",
        "tr": "Büyük adamların ve kadınların oğulları ve kızları her zaman büyük olmaz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Filii filiaeque virorum feminarumque magnorum non semper magni sunt.",
        "tr": "Büyük adamların ve büyük kadınların oğulları ve kızları her zaman büyük olmazlar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sine sapientia fortuna bona nautarum nihil est.",
        "tr": "Denizcilerin iyi talihi bilgelik olmadan bir hiçtir. Para açgözlü adamı tatmin eder mi?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Satiatne pecunia virum avarum?",
        "tr": "Savaş ve yıkım yurdunda hep kalacak mı?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Manebuntne semper bellum et exitium in patria tua?",
        "tr": "Vatanında savaş ve yıkım her zaman sürecek mi / kalacak mı?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "In Graecia multae insulae sunt parvae et magnae.",
        "tr": "Yunanistan’da küçük ve büyük pek çok ada vardır (mevcuttur / bulunur). Epikuros’un düşünceleri doğrudur.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Epicuri sententiae verae sunt.",
        "tr": "Tullia’yı, Marcus Tullius’un kızını görüyoruz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Tulliam, Marci Tulli filiam, videmus.",
        "tr": "Marcus Tullius'un kızı Tullia'yı görüyoruz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "In insula Creta habitabat.",
        "tr": "Girit adasında yaşıyordu. Talih olmadan şöhret bir hiçtir (hiçbir işe yaramaz).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Fama est nihil sine fortuna.",
        "tr": "Paranla benim yaşamımı kurtarıyorsun (ayakta tutuyorsun).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vitam meam pecunia tua sonservas.",
        "tr": "Hayatımı kendi paranla koruyorsun / kurtarıyorsun.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vita paucis viris famam dat, O filii.",
        "tr": "Yaşam pek az kişiye şöhret verir, ey oğlum. Arkadaşım her zaman felsefe hakkında düşünür.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Amicus meus de philosophia semper cogitat.",
        "tr": "Büyük adamlar genelde pek az dosta sahiptir (büyük adamların dostu az olur).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Viri magni paucos amicos saepe habent.",
        "tr": "Büyük adamların genellikle pek az dostu olur.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Philosophiam, sapientiam magnorum virorum, semper laudare debetis.",
        "tr": "Felsefeyi, büyük insanların bilgeliğini, her zaman yüceltmeniz gerekir. Şairin kızlarının gözleri güzeldir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Oculi puellae poetae dunt belli.",
        "tr": "Eski kapı büyük değildir, ama güzeldir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Porta antiqua non est magna, sed bella est.",
        "tr": "Eski kapı büyük değildir, ama güzeldir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Si oculi tui hodie sunt sani, bellos agros meos sine mora videre debes.",
        "tr": "Bugün gözlerin sağlıklıysa, benim güzel tarlalarımı gecikmeksizin görmek zorundasın. İnsana özgü pek çok kusura sahibiz ve her zaman sahip olacağız.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multas culpas humanas habemus et semper habebimus.",
        "tr": "Oğlan ve kız yarın gezip dolaşacak.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Pella et puer cras errabunt.",
        "tr": "Kız ve oğlan yarın yanılacaklar / başıboş dolaşacaklar.",
        "analysis": "",
        "notes": ""
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
    "vocab": ["rex", "lex", "virtus", "homo", "flos", "corpus", "carmen", "miles", "dux", "pax", "bonus"],
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
        "analysis": "Bonus rēx (Nom. Sg. m. - İyi kral); lēgibus novīs (Abl. Pl. f. - Yeni yasalarla); civitātem (Acc. Sg. f. - Devleti); regit (rego fiili, 3. Tekil Praesens - Yönetir).",
        "notes": "Bonus rēx (Nom. Sg. m. - İyi kral); lēgibus novīs (Abl. Pl. f. - Yeni yasalarla); civitātem (Acc. Sg. f. - Devleti); regit (rego fiili, 3. Tekil Praesens - Yönetir)."
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
    "vocab": ["corpus", "carmen", "homo", "flos", "tempus", "vulnus", "caput", "nomen", "flumen", "et", "officium", "de", "hodie", "si", "saepe", "non", "sine", "malo", "mora", "poeta", "vir", "bonus", "fama", "nihil", "magis", "quam", "amo"],
    "sections": [
      {
        "title": "1. 3. Grup Nötr İsimler: corpus (beden) ve carmen (şarkı)",
        "html": "<p>Nötr kuralı gereğince Tekil Nom, Voc ve Acc birbirine eşittir; Çoğul Nom, Voc ve Acc ise <strong>-a</strong> ile biter:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>corpus, -oris n. (beden)</th><th>carmen, -inis n. (şarkı)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\">corpus</td><td class=\"case-cell-latin\">carmen</td><td>beden / şarkı</td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\">corpor-<strong>is</strong></td><td class=\"case-cell-latin\">carmin-<strong>is</strong></td><td>bedenin / şarkının</td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\">corpor-<strong>ī</strong></td><td class=\"case-cell-latin\">carmin-<strong>ī</strong></td><td>bedene / şarkıya</td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\">corpus</td><td class=\"case-cell-latin\">carmen</td><td>bedeni / şarkıyı</td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\">corpor-<strong>e</strong></td><td class=\"case-cell-latin\">carmin-<strong>e</strong></td><td>bedenle / şarkıyla</td></tr>\n      <tr><td><strong>Nom. Pl.</strong></td><td class=\"case-cell-latin\">corpor-<strong>a</strong></td><td class=\"case-cell-latin\">carmin-<strong>a</strong></td><td>bedenler / şarkılar</td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\">corpor-<strong>um</strong></td><td class=\"case-cell-latin\">carmin-<strong>um</strong></td><td>bedenlerin / şarkıların</td></tr>\n      <tr><td><strong>Acc. Pl.</strong></td><td class=\"case-cell-latin\">corpor-<strong>a</strong></td><td class=\"case-cell-latin\">carmin-<strong>a</strong></td><td>bedenleri / şarkıları</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Bella sunt mala et multa pericula habent.",
        "tr": "Savaşlar kötüdür ve pek çok tehlike barındırır.",
        "analysis": "Bella (Nom. Pl. n. - Savaşlar); sunt (3. Çoğul Praesens); mala (Nom. Pl. n. - Kötüdür); et (Bağlaç); multa pericula (Acc. Pl. n. - Pek çok tehlikeyi); habent (3. Çoğul - Taşır, barındırır).",
        "notes": "Bella (Nom. Pl. n. - Savaşlar); sunt (3. Çoğul Praesens); mala (Nom. Pl. n. - Kötüdür); et (Bağlaç); multa pericula (Acc. Pl. n. - Pek çok tehlikeyi); habent (3. Çoğul - Taşır, barındırır)."
      },
      {
        "latin": "Officium nautam de otio hodie vocat.",
        "tr": "Görev / vazife bugün denizciyi inzivasından çağırıyor.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Si multam pecuniam habetis, saepe non estis sine curis.",
        "tr": "Eğer çok paranız varsa, genelde başınız dertten kurtulmaz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Puellae magistram de consilio malo sine mora monent.",
        "tr": "Kızlar öğretmeni kötü karar hakkında hiç gecikmeden uyarıyorlar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "O magne poeta, sumus veri amici; me iuva, amabo te.",
        "tr": "Ey büyük şair, bizler gerçek dostuz; bana yardım et lütfen!",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Feminae agricolae portam vident.",
        "tr": "Kadınlar çiftçinin kapısını görüyorlar.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "In magno periculo es.",
        "tr": "Büyük bir tehlike içindesin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Si pericula sunt vera, infortunatus es.",
        "tr": "Eğer tehlikeler gerçekse, talihsizsindir!",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Salve, O amice, vir bonus es.",
        "tr": "Selam, ey dostum, sen iyi bir insansın.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Non bella est fama filii tui.",
        "tr": "Oğlunun şöhreti iyi değildir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Errare est humanum.",
        "tr": "Hata yapmak insani bir şeydir (insana özgüdür).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Nihil est omnino beatum.",
        "tr": "Hiçbir şey tümüyle talihli değildir. bütünüyle, tamamen mutlu, talihli",
        "analysis": "omnino, adv.; beatus, -a, -um, adj.,",
        "notes": "omnino, adv.; beatus, -a, -um, adj.,"
      },
      {
        "latin": "Magistri parvis pueris crustula et dona saepe dant.",
        "tr": "Öğretmenler küçük çocuklara sık sık kurabiyeler ve hediyeler",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "verirler. Amicam meam magis quam oculos meos amo.",
        "tr": "Kız arkadaşımı gözlerimden daha çok seviyorum. daha fazla, daha çok",
        "analysis": "magis, adv.,; crustulum, -i, n.,",
        "notes": "magis, adv.,; crustulum, -i, n.,"
      }
    ],
    "studyTips": "3. grup nötr isimlerde çoğul -a takısı (corpora, carmina) Türkçedeki -ler/-lar çoğul eki gibidir."
  },
  {
    "id": "T1_W10_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 10,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 10. Hafta (1. Ders)",
    "title": "DÜZENSİZ FİİLLER 1: ESSE (OLMAK) - PRAESENS VE IMPERFECTUM",
    "subtitle": "sum, es, est... / eram, eras, erat... Çekimleri ve Catullus ile Cicero Okuma Metinleri",
    "summary": "Bu fasikülde Latincede en temel yardımcı fiil olan esse (olmak) fiilinin şimdiki zaman (praesens) ve şimdiki zamanın hikayesi (imperfectum) çekimlerini, isim cümlelerinde yüklem olma işlevini ve klasik edebiyattan Catullus ile Cicero metinlerini inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer10.1.pdf",
    "slideCount": 15,
    "topics": ["esse Fiili (sum, esse, fuī)", "Praesens Indicativus (sum, es, est...)", "Imperfectum Indicativus (eram, erās, erat...)", "Yüklem İsim (Praedicativum)", "Catullus ve Cicero Okuma Parçaları"],
    "vocab": ["sum", "possum", "amicitia", "verus", "dignus", "praeclarus", "rarus", "stultus", "pecunia", "basium", "mille", "in", "et", "de", "ego", "saepe", "magister", "officium", "semper", "non", "sed", "patria", "propter", "mora", "pauci", "cura", "culpa", "otium", "vir", "sine", "vita", "nihil"],
    "sections": [
      {
        "title": "1. esse (Olmak) Fiilinin Praesens ve Imperfectum Çekimleri",
        "html": "<p>Latincede <strong>esse</strong> fiili düzensizdir. Şimdiki zamanda kök <em>es- / s-</em> biçiminde değişirken, geçmiş hikaye zamanında (Imperfectum) <em>erā-</em> kökü üzerine kurulur:</p>",
        "calloutType": "rule",
        "calloutTitle": "Yüklem İsmin Hali Kuralı",
        "calloutText": "esse fiili bir nesne (Accusativus) almaz! Cümledeki özneyi yüklem durumundaki bir isim veya sıfatla birbirine bağlar (bağ-fiil / copula). Bu nedenle esse fiiliyle birlikte kullanılan isim veya sıfat daima ÖZNE GİBİ NOMINATIVUS haldedir (Praedicativum): Vergilius est poeta (Vergilius şairdir).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs & Sayı</th><th>Praesens (Şimdiki Zaman)</th><th>Imperfectum (Geçmiş Hikaye)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=\"case-cell-latin\"><strong>sum</strong></td><td class=\"case-cell-latin\"><strong>eram</strong></td><td>-im (öğrenciyim) / idim (öğrenciydim)</td></tr>\n      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=\"case-cell-latin\"><strong>es</strong></td><td class=\"case-cell-latin\"><strong>erās</strong></td><td>-sin / idin</td></tr>\n      <tr><td><strong>3. Sg. (O)</strong></td><td class=\"case-cell-latin\"><strong>est</strong></td><td class=\"case-cell-latin\"><strong>erat</strong></td><td>-dir / idi</td></tr>\n      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=\"case-cell-latin\"><strong>sumus</strong></td><td class=\"case-cell-latin\"><strong>erāmus</strong></td><td>-iz / idik</td></tr>\n      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=\"case-cell-latin\"><strong>estis</strong></td><td class=\"case-cell-latin\"><strong>erātis</strong></td><td>-siniz / idiniz</td></tr>\n      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=\"case-cell-latin\"><strong>sunt</strong></td><td class=\"case-cell-latin\"><strong>erant</strong></td><td>-dirler / idiler</td></tr>\n    </tbody>\n  </table>\n</div>"
      },
      {
        "title": "Okuma Parçası: Hakiki Dostluk Üzerine (De Amicitia)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Hakiki Dostluk Üzerine (De Amicitia)</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Kaynak Metin:</strong> Marcus Tullius Cicero, <em>Laelius de Amicitia</em> (Dostluk Üzerine Diyalog)</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Pauci\" role=\"button\" tabindex=\"0\">Pauci</span> <span class=\"lat-word\" data-word=\"viri\" role=\"button\" tabindex=\"0\">viri</span> <span class=\"lat-word\" data-word=\"veros\" role=\"button\" tabindex=\"0\">veros</span> <span class=\"lat-word\" data-word=\"amicos\" role=\"button\" tabindex=\"0\">amicos</span> <span class=\"lat-word\" data-word=\"habent\" role=\"button\" tabindex=\"0\">habent</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"pauci\" role=\"button\" tabindex=\"0\">pauci</span> <span class=\"lat-word\" data-word=\"sunt\" role=\"button\" tabindex=\"0\">sunt</span> <span class=\"lat-word\" data-word=\"digni\" role=\"button\" tabindex=\"0\">digni</span>. <span class=\"lat-word\" data-word=\"Amicitia\" role=\"button\" tabindex=\"0\">Amicitia</span> <span class=\"lat-word\" data-word=\"vera\" role=\"button\" tabindex=\"0\">vera</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"praeclara\" role=\"button\" tabindex=\"0\">praeclara</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"omnia\" role=\"button\" tabindex=\"0\">omnia</span> <span class=\"lat-word\" data-word=\"praeclara\" role=\"button\" tabindex=\"0\">praeclara</span> <span class=\"lat-word\" data-word=\"sunt\" role=\"button\" tabindex=\"0\">sunt</span> <span class=\"lat-word\" data-word=\"rara\" role=\"button\" tabindex=\"0\">rara</span>. <span class=\"lat-word\" data-word=\"Multi\" role=\"button\" tabindex=\"0\">Multi</span> <span class=\"lat-word\" data-word=\"viri\" role=\"button\" tabindex=\"0\">viri</span> <span class=\"lat-word\" data-word=\"stulti\" role=\"button\" tabindex=\"0\">stulti</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span> <span class=\"lat-word\" data-word=\"pecunia\" role=\"button\" tabindex=\"0\">pecunia</span> <span class=\"lat-word\" data-word=\"semper\" role=\"button\" tabindex=\"0\">semper</span> <span class=\"lat-word\" data-word=\"cogitant\" role=\"button\" tabindex=\"0\">cogitant</span>, <span class=\"lat-word\" data-word=\"pauci\" role=\"button\" tabindex=\"0\">pauci</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span> <span class=\"lat-word\" data-word=\"amicis\" role=\"button\" tabindex=\"0\">amicis</span>; <span class=\"lat-word\" data-word=\"sed\" role=\"button\" tabindex=\"0\">sed</span> <span class=\"lat-word\" data-word=\"errant\" role=\"button\" tabindex=\"0\">errant</span>: <span class=\"lat-word\" data-word=\"possumus\" role=\"button\" tabindex=\"0\">possumus</span> <span class=\"lat-word\" data-word=\"valere\" role=\"button\" tabindex=\"0\">valere</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"multa\" role=\"button\" tabindex=\"0\">multa</span> <span class=\"lat-word\" data-word=\"pecunia\" role=\"button\" tabindex=\"0\">pecunia</span>, <span class=\"lat-word\" data-word=\"sed\" role=\"button\" tabindex=\"0\">sed</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"amicitia\" role=\"button\" tabindex=\"0\">amicitia</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"valemus\" role=\"button\" tabindex=\"0\">valemus</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"vita\" role=\"button\" tabindex=\"0\">vita</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"nihil\" role=\"button\" tabindex=\"0\">nihil</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Pek az kişi hakiki dostlara sahiptir ve pek az kişi buna layıktır. Hakiki dostluk muhteşem bir şeydir; bütün muhteşem şeyler de nadirdir (nadir bulunur). Pek çok aptal adam para hakkında düşünür; pek azı ise dostları hakkında; ama yanılırlar: çok fazla para olmadan da iyi durumda olabiliriz; ama dostluk olmadan iyi olmayız; ve hayat hiçtir (hiçbir değer ifade etmez).</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Mali sunt in nostro numero et de exitio bonorum virorum cogitant. Bonos",
        "tr": "Salve, mea bella puella, da mihi multa basia, amabo te! Selam, güzel sevgilim, bana bir sürü öpücük ver lütfen!",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "adiuvate, conservate populum Romanum.",
        "tr": "Aramızda kötüler var ve iyi insanların yıkımını tasarlıyorlar. İyi insanlara / iyilere yardım ediniz; Roma halkını koruyunuz. öpücük",
        "analysis": "basium, -ii, n.,",
        "notes": "basium, -ii, n.,"
      },
      {
        "latin": "mihi, ego (ben) zamirinin dat. hali in numero esse,",
        "tr": "arasında sayılmak, arasında olmak",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Nautam monebam. Nautam saepe monebam.",
        "tr": "Denziciyi uyarıyordum. Denizciyi sık sık uyarırdım.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Poetae vitam agricolae laudabant.",
        "tr": "Şairler çiftçinin yaşamını övüyorlardı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Magister pueros vocabat.",
        "tr": "Öğretmen öğrencileri çağırıyordu.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Officium liberos viros semper vocabat.",
        "tr": "Görev her zaman özgür adamları çağırırdı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Habebimusne multos viros et feminas magnorum animorum?",
        "tr": "Çok cesur pek çok erkek ve kadına sahip olacak mıyız?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Pericula belli non sunt parva, sed patria tua te vocabit et agricolae adiuvabunt.",
        "tr": "Savaşın tehlikeleri az değildir, ama senin vatanın seni çağıracak ve çiftçiler yardım edecek.",
        "analysis": "animus, -i, m.,",
        "notes": "animus, -i, m.,"
      },
      {
        "latin": "ruh, zihin animi, -orum, pl.,",
        "tr": "cesaret, yüreklilik",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Propter culpas malorum patria nostra non valebit.",
        "tr": "Kötülerin / kötü insanların suçları nedeniyle vatanımız güçlü olmayacak.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Mora animos nostros superabat et remedium non habebamus.",
        "tr": "Gecikme cesaretimizi alt ediyordu / kırıyordu ve çaremiz yoktu?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multi in agris heri manebant et Romanos iuvabant.",
        "tr": "Pek çok kişi dün tarlalarda kalıyordu ve Romalılara yardım ediyordu.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Pauci viri de cura animi cogitabant.",
        "tr": "Pek az kişi ruha duyulan özen hakkında düşünüyordu.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Propter iram in culpa estis et cras poenas dabitis.",
        "tr": "Öfkeniz yüzünden suçlusunuz ve yarın bedelini ödeyeceksiniz?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Verum otium non habes, vir stulte.",
        "tr": "Gerçek huzura sahip değilsin, ey budala adam!",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "sum ve eram çekimlerini ritmik olarak ezberleyiniz: sum, es, est, sumus, estis, sunt; eram, eras, erat, eramus, eratis, erant."
  },
  {
    "id": "T1_W10_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 10,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 10. Hafta (2. Ders)",
    "title": "3. GRUP İSİMLERDE GENEL SÖZLÜK YAPISI VE ALIŞTIRMALAR",
    "subtitle": "3. Çekim Gövde Çeşitliliği (-x, -s, -r, -l, -n, -c, -t) ve Nominativus Çözümleme",
    "summary": "Bu fasikülde 3. grup isimlerin sözlükteki yer alış biçimlerini, Nominativus halindeki çeşitliliği, Tekil Genetivus halinden kök ve gövde çıkarma tekniklerini ve zengin örnek cümle çözümlemelerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "LatinceGramer10.2.pdf",
    "slideCount": 20,
    "topics": ["3. Grup Sözlük Maddeleri", "Nominativus Sonlanışları (-x, -s, -r, -l, -n)", "Gövde ve Hâl Eşleştirmesi", "Sentaks Alıştırmaları"],
    "vocab": ["civis", "urbs", "homo", "mater", "pater", "frater", "miles", "nomen", "corpus"],
    "sections": [
      {
        "title": "1. 3. Çekim İsimlerin Çeşitli Nominativus Biçimleri",
        "html": "<p>3. çekim isimlerde tekil Nominativus hali sabit bir ek almaz; gövdenin sonundaki harfe bağlı olarak farklı şekillerde karşımıza çıkar:</p>\n<ul>\n  <li><strong>-x ile bitenler:</strong> Gövdedeki <em>-c</em> veya <em>-g</em> sessizinin Nominativus eki olan <em>-s</em> ile kaynaşmasıdır: <span class=\"lat-word\">dūc-s</span> &gt; <span class=\"lat-word\">dux</span>, <span class=\"lat-word\">rēg-s</span> &gt; <span class=\"lat-word\">rēx</span>.</li>\n  <li><strong>-s ile biten dişiller:</strong> Gövdedeki dental (dişsil) seslerin (<em>-d, -t</em>) düşmesiyle oluşur: <span class=\"lat-word\">virtūt-s</span> &gt; <span class=\"lat-word\">virtūs</span>, <span class=\"lat-word\">laud-s</span> &gt; <span class=\"lat-word\">laus</span>.</li>\n  <li><strong>-r ve -l ile bitenler:</strong> Ek almadan doğrudan kök biçimiyle kullanılır: <span class=\"lat-word\">frāter</span>, <span class=\"lat-word\">sōl</span>, <span class=\"lat-word\">cōnsul</span>.</li>\n  <li><strong>-ō ile bitenler:</strong> Gövdedeki <em>-on-</em> sesinden <em>-n</em> harfinin düşmesiyle oluşur: <span class=\"lat-word\">homō</span> (Gen: <span class=\"lat-word\">hominis</span>), <span class=\"lat-word\">legiō</span> (Gen: <span class=\"lat-word\">legiōnis</span>).</li>\n</ul>",
        "calloutType": "info",
        "calloutTitle": "3. Çekim Sözlük İpucu",
        "calloutText": "Sözlükte 3. grup bir kelime ararken kökü değil, Tekil Nominativus biçimini aramanız gerekir. Ancak cümlenin içinde çekimli bir biçimle karşılaştığınızda (örn. militibus), önce -ibus ekini atıp milit- gövdesini bulmalı, ardından bu gövdenin Nominativus'unun miles olduğunu hatırlamalısınız.",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "3. çekim isimlerde gövde sonu sessiz harflerini gruplara ayırarak (velar, dental, labial, likit, nazal) çalışmak kuralları kalıcı kılar."
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
    "vocab": ["urbs", "ars", "mons", "animal", "mare", "vis", "bos", "sus", "iuppiter", "civis", "hostis", "navis", "nihil", "sine", "culpa", "si", "poeta", "et", "amicus", "meus", "non", "equus", "servo", "vero"],
    "sections": [
      {
        "title": "1. -i Gövdeli İsimlerin Ayırt Edici Kuralları",
        "html": "<p>3. gruptaki <strong>-i gövdeli isimler</strong>, sessiz gövdelilerden şu üç temel noktada ayrılır:</p>\n<ul>\n  <li><strong>Çoğul Genetivus Takısı:</strong> Sessiz gövdelilerdeki <em>-um</em> yerine <strong>-ium</strong> takısı gelir: <span class=\"lat-word\">urbium</span> (kentlerin), <span class=\"lat-word\">artium</span> (sanatların), <span class=\"lat-word\">montium</span> (dağların).</li>\n  <li><strong>Nötr -i Gövdeliler (mare, animal, exemplar):</strong>\n    <ul>\n      <li>Tekil Ablativus takısı <em>-e</em> değil, <strong>-ī</strong> olur: <span class=\"lat-word\">marī</span> (deniz ile/denizde).</li>\n      <li>Çoğul Nom/Voc/Acc takısı <em>-a</em> değil, <strong>-ia</strong> olur: <span class=\"lat-word\">maria</span> (denizler), <span class=\"lat-word\">animālia</span> (hayvanlar).</li>\n    </ul>\n  </li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Bir İsmin -i Gövdeli Olduğunu Nasıl Anlarız?",
        "calloutText": "Şu iki kuraldan birine uyan isimler -i gövdelidir:\n1. Eşit Heceliler Kuralı (Parisyllaba): Tekil Nom ve Gen hece sayıları eşittir: cīvis, cīvis (2 hece); nāvis, nāvis (2 hece).\n2. İki Sessiz Kuralı: Tekil Nom tek hecelidir ve Genetivus ekinden önceki kök iki sessiz harfle biter: urbs, urb-is (r+b); ars, art-is (r+t); mōns, mont-is (n+t).",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Nihil est sine culpa; sumus boni, si paucas habemus.",
        "tr": "Hiçbir şey kusursuz değildir; eğer birkaç kusurumuz varsa, iyi insanlarızdır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Poeta amicae multas rosas, dona pulchra et basia dabat.",
        "tr": "Şair sevgilisine pek çok gül, güzel hediyeler ve öpücükler veriyordu.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Amici nostri poterant superare multa pericula.",
        "tr": "Bizim arkadaşlarımız pek çok tehlikenin üstesinden gelebiliyordu.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Amicus meus non potest remanere.",
        "tr": "Benim arkadaşım geride kalamaz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Debes conservare pecuniam tuam.",
        "tr": "Paranı muhafaza etmek zorundasın.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "ESSE + GEN. KALIBI (sahiplik bildirir) Equus est agricolae. Casa est Romanorum.",
        "tr": "At çiftçinindir / çiftçiye aittir. Ev Romalılara aittir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Nautae erant pecuniae. Culpa erit pueri. Paralar denizciye aitti / denizcinindi",
        "tr": "Suç çocuğun olacak.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "ESSE + DAT. KALIBI (sahiplik bildirir) Sunt dona servo. Libri erunt puero.",
        "tr": "Hediyeler köleye aittir (köle içindir). Kitaplar çocuğun olacak.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Agri erant agricolae. Plato amicus est vero.",
        "tr": "Tarlalar çiftçiye aitti. Platon hakikate dosttur.",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "urbs, ars, nox, mors gibi kökü çift sessizle biten kelimelerin çoğul genetivus'ta daima -ium aldığını unutmayınız."
  },
  {
    "id": "T1_W11_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 11,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 11. Hafta (2. Ders)",
    "title": "3. GRUP İSİMLERLE SIFAT TAMLAMALARI VE SENTAKS ALIŞTIRMALARI",
    "subtitle": "flumen longum, urbes magnae, patres miseri Kalıpları ve Cümle Çözümlemeleri",
    "summary": "Bu fasikülde 3. grup isimlerle 1. ve 2. grup sıfatların bir arada kullanıldığı sıfat tamlamalarını, hal ve cins uyumlarını, flūmen longum ve urbēs magnae kalıplarını ve yoğun cümle alıştırmalarını inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer11.2.pdf",
    "slideCount": 11,
    "topics": ["Sıfat-İsim Uyumu (Congruentia)", "Farklı Çekim Gruplarından Tamlamalar", "flumen longum", "urbes magnae", "patres miseri", "Cümle Alıştırmaları"],
    "vocab": ["flumen", "longus", "urbs", "magnus", "pater", "miser", "mater", "romanus", "miles", "clarus", "dux", "homo", "non", "igitur", "animus", "culpa", "et", "cura", "propter", "vita", "supplicium", "sanus", "semper", "gloria", "fama", "si", "quando", "satis", "tum", "vir", "bonus", "bellum"],
    "sections": [
      {
        "title": "1. Farklı Çekim Gruplarından İsim ve Sıfat Tamlamaları",
        "html": "<p>Latincede sıfat, nitelediği isimle <strong>üç parametrede (Casus, Numerus, Genus)</strong> tam uyum sağlamak zorundadır. Ancak isim ile sıfat <em>farklı çekim gruplarına</em> mensup olabilir; bu durumda eklerin harf yapısı farklı görünse de gramatikal hal, sayı ve cins eşittir:</p>\n<ul>\n  <li><span class=\"lat-word\">flūmen</span> (3. Çekim Nötr Nom. Sg.) + <span class=\"lat-word\">longum</span> (2. Çekim Nötr Nom. Sg.) = <strong>flūmen longum</strong> (uzun nehir)</li>\n  <li><span class=\"lat-word\">urbēs</span> (3. Çekim Dişil Nom. Pl.) + <span class=\"lat-word\">magnae</span> (1. Çekim Dişil Nom. Pl.) = <strong>urbēs magnae</strong> (büyük şehirler)</li>\n  <li><span class=\"lat-word\">patrēs</span> (3. Çekim Eril Nom. Pl.) + <span class=\"lat-word\">miserī</span> (2. Çekim Eril Nom. Pl.) = <strong>patrēs miserī</strong> (zavallı babalar)</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Tamlama Kuralı",
        "calloutText": "İsim 3. çekimden, sıfat 1. veya 2. çekimden olsa bile hal, sayı ve cins kuralları harfiyen eşleşir. Ekin harflerinin birebir aynı olması gerekmez; görevleri aynı olmalıdır!",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "flumen longum",
        "tr": "3. GRUP İSİMLERLE İLGİLİ ÖRNEK İFADELER",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "urbes magnae uzun nehir",
        "tr": "büyük şehirler",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "stultorum regum urbes parvae",
        "tr": "aptal kralların küçük şehirler",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "malum consulem bono imperatori",
        "tr": "kötü konsülü iyi imparator için",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "miseri matres Romanae",
        "tr": "zavallı babalar Romalı anneler",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "militum clarorum matris Romanae",
        "tr": "meşhur askerlerin Romalı annenin",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "moribus priscis irati senis Graeci",
        "tr": "eski / köklü âdetlerle Yunanlı öfkeli ihtiyarın",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "tempora perpetua",
        "tr": "3. GRUP İSİMLERLE İLGİLİ ÖRNEK İFADELER",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "amatores infortunati",
        "tr": "kesintisiz zamanlar talihsiz âşıklar",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "temporis antiqui dux peritus",
        "tr": "eski zamanın",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "becerikli komutan laborum infinitorum virtutem veram",
        "tr": "sınırsız emeklerin",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "leges novae Romanae",
        "tr": "3. GRUP İSİMLERLE İLGİLİ ÖRNEK İFADELER",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "homo iratus",
        "tr": "Roma’ya ait yeni yasalar öfkeli insan",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "leges novas Romanas hominum Punicorum",
        "tr": "Roma’ya ait yeni yasaları Kartacalı insanların",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "nomina bella amore caeco",
        "tr": "hoş isimler kör bir aşkla",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Invidiam populi Romani cras non sustinebis.",
        "tr": "Roma halkına duyduğun nefreti yarın sürdürmeyeceksin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Periculumne igitur heri remanebat.",
        "tr": "Öyleyse dün tehlike mi devam ediyordu? kıskançlık, nefret dün sürdürmek, devam ettirmek öyleyse, o halde, o zaman yarın devam etmek, sürmek",
        "analysis": "invidia, -ae, f.,; heri, adv.,; sustineo, -ere, -tinui,; igitur, conj.,; cras, adv.,; remaneo, -ere,",
        "notes": "invidia, -ae, f.,; heri, adv.,; sustineo, -ere, -tinui,; igitur, conj.,; cras, adv.,; remaneo, -ere,"
      },
      {
        "latin": "Angustus animus pecuniam amat.",
        "tr": "Bayağı ruh parayı sever.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Culpa est mea, O amici.",
        "tr": "Dostlar, suç benimdir (ben suçluyum).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Supera animos et iram tuam.",
        "tr": "Kibrine ve öfkene hâkim ol! dar; adi, bayağı ruh, zihin, (pl.) cesaret; kibir; gazap",
        "analysis": "angustus, -a, um, adj.,; animus, i, m.,",
        "notes": "angustus, -a, um, adj.,; animus, i, m.,"
      },
      {
        "latin": "Amabo te, cura filiam meam.",
        "tr": "Da veniam filio et filiabus nostris. Oğlumuza ve kızlarımıza merhamet göster! Kızıma göz kulak ol, lütfen!",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Propter adulescentiam, filii mei, mala vitae non videbatis.",
        "tr": "Ey oğullarım, gençliğinizden ötürü yaşamın kötülüklerini fark etmiyordunuz. merhamet, lütuf bakmak, ilgi göstermek, göz kulak olmak gençlik, toyluk",
        "analysis": "venia, -ae, f.,; curo, -are,; adulescentia, -ae, f.,",
        "notes": "venia, -ae, f.,; curo, -are,; adulescentia, -ae, f.,"
      },
      {
        "latin": "Vita humana est supplicium.",
        "tr": "İnsan hayatı bir cezadır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Satisne sanus es.",
        "tr": "Yeterince aklın başında mı?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Semper gloria et fama tua manebunt.",
        "tr": "Şanın ve şöhretin daima varlığını sürdürecek. ceza, eziyet, işkence",
        "analysis": "supplicium, -ii, n.,; satis, adv.,",
        "notes": "supplicium, -ii, n.,; satis, adv.,"
      },
      {
        "latin": "yeterli, yeterince",
        "tr": "sağlıklı, aklı başında",
        "analysis": "sanus, -a, um, adj.,",
        "notes": "sanus, -a, um, adj.,"
      },
      {
        "latin": "Si quando satis pecuniae habebo, tum me consilio et philosophiae dabo.",
        "tr": "Eğer bir gün yeterince param olursa, o zaman kendimi düşünceye ve felsefeye adayacağım.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vir bonus et peritus aspera verba poetarum culpabit.",
        "tr": "İyi ve becerikli adam, şairrin kaba sözlerini kınayacak. sert, kaba, haşin suçlamak, kusur bulmak, kınamak, eleştirmek ne zaman?, -dığı zaman, bir gün, günün birinde",
        "analysis": "asper, aspera, asperum, adj.,; culpo, -are,; quando, adv.,",
        "notes": "asper, aspera, asperum, adj.,; culpo, -are,; quando, adv.,"
      },
      {
        "latin": "bellum convivam Caecilianus habet!",
        "tr": "Bizim Caecilianus, domuz olmadan sofraya oturmuyormuş, demek güzel bir sofra arkadaşı var Caecilianus’un!",
        "analysis": "Non cenat sine apro noster, Tite, Caecilianus:",
        "notes": "Non cenat sine apro noster, Tite, Caecilianus:"
      },
      {
        "latin": "(Martialis, 7.59) domuz",
        "tr": "yemek yemek, sofraya oturmak sofra arkadaşı, misafir",
        "analysis": "aper, -i, m.,; ceno, -are,; conviva, -ae, m. / f.,",
        "notes": "aper, -i, m.,; ceno, -are,; conviva, -ae, m. / f.,"
      }
    ],
    "studyTips": "urbes magnae tamlamasında urbes -es alırken magnae -ae alır; çünkü urbs 3. çekim, magna 1. çekimdir ama ikisi de çoğul dişil nominativustur."
  },
  {
    "id": "T1_W12_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 12,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 12. Hafta (1. Ders)",
    "title": "4. GRUP FİİLLER (-ĪRE) VE 3. GRUP -IŌ FİİLLERİ",
    "subtitle": "audiō (4. Çekim) ve capiō / faciō (3. Çekim -iō) Fiillerinin Praesens ve Imperfectum Çekimleri",
    "summary": "Bu fasikülde mastarı -īre ile biten 4. grup fiilleri (audiō, audīre), mastarı -ere olup 1. tekil şahsı -iō ile biten 3. grup karma fiilleri (capiō, capere; faciō, facere) ve bunların zaman çekimlerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer12.1.pdf",
    "slideCount": 23,
    "topics": ["4. Grup Fiiller (-īre)", "audio, audire Çekimi", "3. Grup -iō Fiilleri (capiō, faciō)", "Praesens ve Imperfectum Çekimleri", "Emir Kipi"],
    "vocab": ["audio", "venio", "sentio", "scio", "capio", "facio", "iacio", "fugio"],
    "sections": [
      {
        "title": "1. 4. Grup Fiiller: audiō, audīre (İşitmek, Dinlemek)",
        "html": "<p>Mastar sonlanışı <strong>-īre</strong> olan fiillerdir. Praesens gövdesi <strong>audī-</strong>:</p>",
        "calloutType": "info",
        "calloutTitle": "3. Grup -iō Fiilleri (Karma Fiiller)",
        "calloutText": "capiō (yakalamak) ve faciō (yapmak) fiilleri mastarda -ere almalarına karşın, Praesens 1. tekil şahısta (capiō) ve Imperfectum'da (capiēbam) 4. çekim fiiller gibi davranırlar!",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs & Sayı</th><th>Praesens (Şimdiki Zaman)</th><th>Imperfectum (-iēbam)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg.</strong></td><td class=\"case-cell-latin\">aud-<strong>iō</strong></td><td class=\"case-cell-latin\">aud-<strong>iēbam</strong></td><td>işitiyorum / işitiyordum</td></tr>\n      <tr><td><strong>2. Sg.</strong></td><td class=\"case-cell-latin\">aud-<strong>īs</strong></td><td class=\"case-cell-latin\">aud-<strong>iēbās</strong></td><td>işitiyorsun / işitiyordun</td></tr>\n      <tr><td><strong>3. Sg.</strong></td><td class=\"case-cell-latin\">aud-<strong>it</strong></td><td class=\"case-cell-latin\">aud-<strong>iēbat</strong></td><td>işitiyor / işitiyordu</td></tr>\n      <tr><td><strong>1. Pl.</strong></td><td class=\"case-cell-latin\">aud-<strong>īmus</strong></td><td class=\"case-cell-latin\">aud-<strong>iēbāmus</strong></td><td>işitiyoruz / işitiyorduk</td></tr>\n      <tr><td><strong>2. Pl.</strong></td><td class=\"case-cell-latin\">aud-<strong>ītis</strong></td><td class=\"case-cell-latin\">aud-<strong>iēbātis</strong></td><td>işitiyorsunuz / işitiyordunuz</td></tr>\n      <tr><td><strong>3. Pl.</strong></td><td class=\"case-cell-latin\">aud-<strong>iunt</strong></td><td class=\"case-cell-latin\">aud-<strong>iēbant</strong></td><td>işitiyorlar / işitiyorlardı</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
    ],
    "studyTips": "audiunt ve capiunt biçimlerindeki -i- sesini unutmayınız; 3. çoğul şahısta -unt eki -i- kaynaştırma ünlüsüyle birleşir."
  },
  {
    "id": "T1_W12_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 12,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 12. Hafta (2. Ders)",
    "title": "3. GRUP İSİMLER: SIVI VE GENİZSİL GÖVDELER (LIQUID & NASAL STEMS)",
    "subtitle": "-l, -r, -n ile Biten Gövdeler, Rotasizm (s > r Ses Değişimi), mōs ve sōl Çekimleri",
    "summary": "Bu fasikülde gövdeleri sıvı (l, r) ve genizsil (m, n) sessizlerle biten 3. grup isimleri, Latincedeki ünlü ses olayı Rotasizmi (ünlüler arasındaki s sesinin r sesine dönüşmesi) ve cōnsul, mōs, amor çekimlerini inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer12.2.pdf",
    "slideCount": 26,
    "topics": ["Sıvı Gövdeler (-l, -r)", "Genizsil Gövdeler (-n)", "Rotasizm Kuralı (s > r)", "mos, moris", "amor, amoris", "sol, solis"],
    "vocab": ["mos", "amor", "sol", "consul", "labor", "soror", "uxor", "virgo", "ordo", "exercitus", "noster", "magnus", "et", "propter", "caelum", "non", "tum", "umbra", "igitur", "rex", "cum", "hodie", "apud"],
    "sections": [
      {
        "title": "1. Rotasizm (Rhotacismus) ve -r Gövdeli İsimler",
        "html": "<p>Latincede iki ünlü harf arasında kalan <strong>-s-</strong> sesi tarihsel süreçte ötümlüleşerek <strong>-r-</strong> sesine dönüşmüştür. Bu fonetik kurala <strong>Rotasizm</strong> denir:</p>\n<ul>\n  <li>Nom: <span class=\"lat-word\">mōs</span> &gt; Gen: <em>*mōs-is</em> &gt; <strong>mōr-is</strong> (adet, gelenek)</li>\n  <li>Nom: <span class=\"lat-word\">flōs</span> &gt; Gen: <em>*flōs-is</em> &gt; <strong>flōr-is</strong> (çiçek)</li>\n  <li>Nom: <span class=\"lat-word\">corpus</span> &gt; Gen: <em>*compos-is</em> &gt; <strong>corpor-is</strong> (beden)</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Rotasizm Kuralı",
        "calloutText": "Eğer bir kelimenin Nominativus'u -s ile bitiyor ve Genetivus'unda bu harf -r- oluyorsa (mos, moris; flos, floris), bu durum Latincedeki düzenli rotasizm kuralının sonucudur.",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Thermopylai ve Kral Leonidas (Thermopylae, İÖ 480)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Thermopylai ve Kral Leonidas</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Tarihi Bağlam:</strong> Thermopylai Muharebesi, İÖ 480 (Pers Savaşları & Kral Leonidas)</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    “<span class=\"lat-word\" data-word=\"Exercitus\" role=\"button\" tabindex=\"0\">Exercitus</span> <span class=\"lat-word\" data-word=\"noster\" role=\"button\" tabindex=\"0\">noster</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"magnus\" role=\"button\" tabindex=\"0\">magnus</span>,” <span class=\"lat-word\" data-word=\"Persicus\" role=\"button\" tabindex=\"0\">Persicus</span> <span class=\"lat-word\" data-word=\"inquit\" role=\"button\" tabindex=\"0\">inquit</span>, “<span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"propter\" role=\"button\" tabindex=\"0\">propter</span> <span class=\"lat-word\" data-word=\"numerum\" role=\"button\" tabindex=\"0\">numerum</span> <span class=\"lat-word\" data-word=\"sagittarum\" role=\"button\" tabindex=\"0\">sagittarum</span> <span class=\"lat-word\" data-word=\"nostrarum\" role=\"button\" tabindex=\"0\">nostrarum</span> <span class=\"lat-word\" data-word=\"caelum\" role=\"button\" tabindex=\"0\">caelum</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"videbitis\" role=\"button\" tabindex=\"0\">videbitis</span>!” <span class=\"lat-word\" data-word=\"Tum\" role=\"button\" tabindex=\"0\">Tum</span> <span class=\"lat-word\" data-word=\"Lacedaemonius\" role=\"button\" tabindex=\"0\">Lacedaemonius</span> <span class=\"lat-word\" data-word=\"respondet\" role=\"button\" tabindex=\"0\">respondet</span>: “<span class=\"lat-word\" data-word=\"In\" role=\"button\" tabindex=\"0\">In</span> <span class=\"lat-word\" data-word=\"umbra\" role=\"button\" tabindex=\"0\">umbra</span>, <span class=\"lat-word\" data-word=\"igitur\" role=\"button\" tabindex=\"0\">igitur</span>, <span class=\"lat-word\" data-word=\"pugnabimus\" role=\"button\" tabindex=\"0\">pugnabimus</span>!” <span class=\"lat-word\" data-word=\"Et\" role=\"button\" tabindex=\"0\">Et</span> <span class=\"lat-word\" data-word=\"Leonidas\" role=\"button\" tabindex=\"0\">Leonidas</span>, <span class=\"lat-word\" data-word=\"rex\" role=\"button\" tabindex=\"0\">rex</span> <span class=\"lat-word\" data-word=\"Lacedaemoniorum\" role=\"button\" tabindex=\"0\">Lacedaemoniorum</span>, <span class=\"lat-word\" data-word=\"exclamat\" role=\"button\" tabindex=\"0\">exclamat</span>: “<span class=\"lat-word\" data-word=\"Pugnate\" role=\"button\" tabindex=\"0\">Pugnate</span> <span class=\"lat-word\" data-word=\"cum\" role=\"button\" tabindex=\"0\">cum</span> <span class=\"lat-word\" data-word=\"animis\" role=\"button\" tabindex=\"0\">animis</span>, <span class=\"lat-word\" data-word=\"Lacedaemonii\" role=\"button\" tabindex=\"0\">Lacedaemonii</span>, <span class=\"lat-word\" data-word=\"hodie\" role=\"button\" tabindex=\"0\">hodie</span> <span class=\"lat-word\" data-word=\"apud\" role=\"button\" tabindex=\"0\">apud</span> <span class=\"lat-word\" data-word=\"inferos\" role=\"button\" tabindex=\"0\">inferos</span> <span class=\"lat-word\" data-word=\"fortasse\" role=\"button\" tabindex=\"0\">fortasse</span> <span class=\"lat-word\" data-word=\"cenabimus\" role=\"button\" tabindex=\"0\">cenabimus</span>!”\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">“Ordumuz büyüktür,” dedi Persli, “ve oklarımızın çokluğu nedeniyle gökyüzünü göremeyeceksiniz!” Bunun üzerine bir Lakedaimonialı “Öyleyse gölgede savaşacağız!” diye yanıtladı. Lakedaimonialıların kralı Leonidas da şöyle haykırdı: “Cesurca savaşın ey Lakedaimonialılar, bugün yemeğimizi muhtemelen ölüler diyarında yiyeceğiz!”</p>\n  </div>\n  <div class=\"reading-passage-notes\">\n    <div class=\"notes-label\">🔍 Metin İçi Sözlük & Gramer Notları:</div>\n    <p class=\"notes-text\">exercitus, ordu, Persicus, -a, -um, adj., Persli inquit, (eksik çekimli bir fiil), söyler, der, dedi sagitta, -ae, f., ok Lacedaemonius, -a, -um, adj., Lakedaimonialı umbra, -ae, f., gölge pugno, -are, savaşmak exclamo, -are, bağırmak, haykırmak cum (+ abl.), ile, ile birlikte apud (+ acc.), arasında inferi, -orum, (pl.), ölüler, yeraltı dünyasının sâkinleri (inferus, -a, -um, aşağısı) fortasse, belki, muhtemelen</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "mōs mâiōrum (ataların geleneği) Roma kültür ve hukukunun en temel kavramlarından biridir."
  },
  {
    "id": "T1_W13_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 13,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 13. Hafta (1. Ders)",
    "title": "3. GRUP NÖTR İSİMLER VE İSTİSNAİ ÇEKİMLER",
    "subtitle": "mare, maris ve animal, animālis Çekimleri, Ablativus Singularis -ī Kuralı",
    "summary": "Bu fasikülde tekil Nominativus biçimi -e, -al, -ar ile biten 3. grup nötr isimlerin özel çekim kurallarını, Tekil Ablativus -ī, Çoğul Nom/Acc -ia ve Çoğul Gen -ium takılarını öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "LatinceGramer13.1.pdf",
    "slideCount": 24,
    "topics": ["3. Grup Nötr -i Gövdeliler", "mare, maris Çekimi", "animal, animalis Çekimi", "Tekil Ablativus -ī", "Çoğul -ia ve -ium"],
    "vocab": ["mare", "animal", "exemplar", "vectigal", "auris", "navis", "ego", "sum", "tu", "non", "pater", "nos", "ad", "vos", "cum", "eo", "ibi", "deus"],
    "sections": [
      {
        "title": "1. 3. Grup Nötr -i Gövdeliler Tablosu (mare ve animal)",
        "html": "<p>Nötr -i gövdeli isimlerde üç temel kural geçerlidir: <strong>Tekil Abl. -ī, Çoğul Nom/Acc -ia, Çoğul Gen. -ium</strong>:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>mare, maris n. (deniz)</th><th>animal, animālis n. (canlı, hayvan)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\">mare</td><td class=\"case-cell-latin\">animal</td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\">mar-<strong>is</strong></td><td class=\"case-cell-latin\">animāl-<strong>is</strong></td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\">mar-<strong>ī</strong></td><td class=\"case-cell-latin\">animāl-<strong>ī</strong></td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\">mare</td><td class=\"case-cell-latin\">animal</td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\">mar-<strong>ī</strong></td><td class=\"case-cell-latin\">animāl-<strong>ī</strong></td></tr>\n      <tr><td><strong>Nom/Acc. Pl.</strong></td><td class=\"case-cell-latin\">mar-<strong>ia</strong></td><td class=\"case-cell-latin\">animāl-<strong>ia</strong></td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\">mar-<strong>ium</strong></td><td class=\"case-cell-latin\">animāl-<strong>ium</strong></td></tr>\n      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=\"case-cell-latin\">mar-<strong>ibus</strong></td><td class=\"case-cell-latin\">animāl-<strong>ibus</strong></td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Ego sum Romanus. Tu es non pater.",
        "tr": "Ben Romalıyım. Sen baba değilsin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ego tibi libros dabo.",
        "tr": "ŞAHIS ZAMİRLERİNİN KULLANIMI",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ego vobis libros dabo.",
        "tr": "Ben sana kitapları vereceğim. Ben size kitapları vereceğim.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Tu ei libros dabis. Tu eis libros dabis.",
        "tr": "Sen ona kitapları vereceksin. Sen onlara kitapları vereceksin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Tu me non capies. Tu nos non capies.",
        "tr": "Sen beni yakalamayacaksın. Sen bizi yakalamayacaksın.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ei id ad nos mittent.",
        "tr": "ŞAHIS ZAMİRLERİNİN KULLANIMI Onlar (o erkekler) onu (o şeyi) bize gönderecekler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vos eos non capietis.",
        "tr": "Siz onları (o erkekleri) yakalamayacaksınız.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vos eas non capietis.",
        "tr": "Siz onları (o kadınları) yakalamayacaksınız.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vos ea non capietis.",
        "tr": "Siz onları (o şeyleri) yakalamayacaksınız.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Eae ea ad te mittent.",
        "tr": "Onlar (o kadınlar) onları (o şeyleri) sana gönderecekler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Eis pecuniam dabo.",
        "tr": "Onlara para vereceğim.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ego eis pecuniam dabo, quid tu dabis? Ben",
        "tr": "onlara para vereceğim,",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "mecum benimle nobiscum bizimle tecum seninle vobiscum sizinle cum eo / ea onunla cum eis onlarla Eos nobiscum ibi invenies.",
        "tr": "Onları orada bizimle birlikte bulacaksın.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Deus vobiscum.",
        "tr": "Tanrı sizinledir.",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "mare ve animal kelimelerinde Ablativus tekil daima -ī ile biter: in marī (denizde)."
  },
  {
    "id": "T1_W13_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 13,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 13. Hafta (2. Ders)",
    "title": "DÜZENSİZ FİİLLER 2: POSSUM (YAPABİLMEK) VE TAMAMLAYICI MASTAR SENTAKSI",
    "subtitle": "possum Fiilinin Çekimi (pot-sum > possum), Tamamlayıcı Mastar (Infinitivus Prolativus) ve Cümle Analizleri",
    "summary": "Bu fasikülde potis (gücü yeten) sıfatı ile sum fiilinin birleşmesiyle oluşan possum (yapabilmek, -ebilmek) fiilinin çekim kurallarını, tamamlayıcı mastar (Infinitivus) sentaksını ve 20 slaytlık zengin cümle çözümlemelerini öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "LatinceGramer13.2.pdf",
    "slideCount": 21,
    "topics": ["possum Fiili", "pot- + sum Kaynaşma Kuralları", "Praesens ve Imperfectum Çekimleri", "Tamamlayıcı Mastar (Infinitivus)", "Cümle Çözümlemeleri"],
    "vocab": ["possum", "oculus", "quare", "igitur", "poena", "moneo", "remedium", "tolerare", "non", "sine", "pecunia", "et", "de", "parvus", "numerus", "ibi", "magister", "mora", "saepe", "quando", "satis", "propter", "gloria", "semper", "pauci", "ubi", "fama", "tum", "in", "populus", "sed", "nunc", "otium", "nec", "ne"],
    "sections": [
      {
        "title": "1. possum (Yapabilmek) Fiilinin Çekim Sistemi",
        "html": "<p><strong>possum, posse, potuī</strong> fiili, <em>pot-</em> ön eki ile <em>sum</em> fiilinin birleşiminden türemiştir. s harfiyle başlayan çekimlerde t sesi s sesine dönüşür (benzeşme / asimilasyon):</p>\n<ul>\n  <li>pot- + sum &gt; <strong>possum</strong> (yapabilirim)</li>\n  <li>pot- + es &gt; <strong>potes</strong> (yapabilirsin)</li>\n  <li>pot- + est &gt; <strong>potest</strong> (yapabilir)</li>\n  <li>pot- + sumus &gt; <strong>possumus</strong> (yapabiliriz)</li>\n  <li>pot- + estis &gt; <strong>potestis</strong> (yapabilirsiniz)</li>\n  <li>pot- + sunt &gt; <strong>possunt</strong> (yapabilirler)</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Tamamlayıcı Mastar (Infinitivus Prolativus)",
        "calloutText": "possum fiili anlamını kendi başına tamamlayamaz; eylemin ne olduğunu bildirmek için daima bir mastarla birlikte kullanılır: videre non possum (göremiyorum), superare poteramus (üstesinden gelebiliyorduk).",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Roma Halkının Cesareti ve Boş Vakit (De Populo Romano)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Roma Halkının Cesareti ve Boş Vakit (De Populo Romano)</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Kaynak Metin:</strong> Titus Livius & Antik Roma Tarihyazımı (Ab Urbe Condita)</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Populus\" role=\"button\" tabindex=\"0\">Populus</span> <span class=\"lat-word\" data-word=\"Romanus\" role=\"button\" tabindex=\"0\">Romanus</span> <span class=\"lat-word\" data-word=\"magnos\" role=\"button\" tabindex=\"0\">magnos</span> <span class=\"lat-word\" data-word=\"animos\" role=\"button\" tabindex=\"0\">animos</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"paucas\" role=\"button\" tabindex=\"0\">paucas</span> <span class=\"lat-word\" data-word=\"culpas\" role=\"button\" tabindex=\"0\">culpas</span> <span class=\"lat-word\" data-word=\"habebat\" role=\"button\" tabindex=\"0\">habebat</span>. <span class=\"lat-word\" data-word=\"De\" role=\"button\" tabindex=\"0\">De</span> <span class=\"lat-word\" data-word=\"officiis\" role=\"button\" tabindex=\"0\">officiis</span> <span class=\"lat-word\" data-word=\"nostris\" role=\"button\" tabindex=\"0\">nostris</span> <span class=\"lat-word\" data-word=\"cogitabamus\" role=\"button\" tabindex=\"0\">cogitabamus</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"gloriam\" role=\"button\" tabindex=\"0\">gloriam</span> <span class=\"lat-word\" data-word=\"belli\" role=\"button\" tabindex=\"0\">belli</span> <span class=\"lat-word\" data-word=\"semper\" role=\"button\" tabindex=\"0\">semper</span> <span class=\"lat-word\" data-word=\"laudabamus\" role=\"button\" tabindex=\"0\">laudabamus</span>. <span class=\"lat-word\" data-word=\"Sed\" role=\"button\" tabindex=\"0\">Sed</span> <span class=\"lat-word\" data-word=\"nunc\" role=\"button\" tabindex=\"0\">nunc</span> <span class=\"lat-word\" data-word=\"multum\" role=\"button\" tabindex=\"0\">multum</span> <span class=\"lat-word\" data-word=\"otium\" role=\"button\" tabindex=\"0\">otium</span> <span class=\"lat-word\" data-word=\"habemus\" role=\"button\" tabindex=\"0\">habemus</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"multi\" role=\"button\" tabindex=\"0\">multi</span> <span class=\"lat-word\" data-word=\"sunt\" role=\"button\" tabindex=\"0\">sunt</span> <span class=\"lat-word\" data-word=\"avari\" role=\"button\" tabindex=\"0\">avari</span>. <span class=\"lat-word\" data-word=\"Nec\" role=\"button\" tabindex=\"0\">Nec</span> <span class=\"lat-word\" data-word=\"vitia\" role=\"button\" tabindex=\"0\">vitia</span> <span class=\"lat-word\" data-word=\"nostra\" role=\"button\" tabindex=\"0\">nostra</span> <span class=\"lat-word\" data-word=\"nec\" role=\"button\" tabindex=\"0\">nec</span> <span class=\"lat-word\" data-word=\"remedia\" role=\"button\" tabindex=\"0\">remedia</span> <span class=\"lat-word\" data-word=\"tolerare\" role=\"button\" tabindex=\"0\">tolerare</span> <span class=\"lat-word\" data-word=\"possumus\" role=\"button\" tabindex=\"0\">possumus</span>. <span class=\"lat-word\" data-word=\"nec\" role=\"button\" tabindex=\"0\">nec</span> … <span class=\"lat-word\" data-word=\"nec\" role=\"button\" tabindex=\"0\">nec</span> …, <span class=\"lat-word\" data-word=\"conj\" role=\"button\" tabindex=\"0\">conj</span>., <span class=\"lat-word\" data-word=\"ne\" role=\"button\" tabindex=\"0\">ne</span> … <span class=\"lat-word\" data-word=\"ne\" role=\"button\" tabindex=\"0\">ne</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span>…\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Roma halkı büyük cesarete ve pek az kusura sahipti. Görevlerimiz hakkında düşünüyorduk ve savaşın şöhretini (savaşın getirdiği şöhreti) her zaman övüyorduk. Ama şimdi pek çok boş vaktimiz var, üstelik pek çok kişi de açgözlü. Ne kusurlarmıza tahammül edebiliyoruz ne de çarelerine.</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Oculi nostri non valebant, quare agros bellos videre non poteramus.",
        "tr": "Gözlerimiz sağlıklı değildi, o nedenle güzel tarlaları göremiyorduk.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sine multa pecunia et multis donis tyrannus satiare populum Romanum non poterit.",
        "tr": "Tiran, çok para ve pek çok hediye olmadan Roma halkını memnun edemeyecek. bundan dolayı, dolayısıyla doyurmak, tatmin etmek, memnun etmek tiran, zorba",
        "analysis": "quare, adv.,; satio, -are,; tyrannus, -i, m.,",
        "notes": "quare, adv.,; satio, -are,; tyrannus, -i, m.,"
      },
      {
        "latin": "Non poterant, igitur, te de poena amicorum tuorum heri monere.",
        "tr": "Bu nedenle dün seni arkadaşlarının cezası hakkında uyaramıyorlardı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Parvus numerus Graecorum cras ibi remanere poterit.",
        "tr": "Yarın orada birkaç / az sayıda Yunanlı kalabilecek.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Magister pueros malos sine mora vocabit.",
        "tr": "Öğretmen kötü çocukları hiç gecikmeden çağıracak.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Filiae vestrae de libris magni poetae saepe cogitabant.",
        "tr": "Kızlarınız büyük şairin kitapları hakkında sık sık düşünüyorlardı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Quando satis sapientiae habebimus?",
        "tr": "Ne zaman yeterince bilgeliğe sahip olacağız?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multi libri antiqui propter sapientiam consiliumque erant magni.",
        "tr": "Pek çok eski kitap bilgeliği ve sağduyusu nedeniyle önemliydi.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Gloria bonorum librorum semper manebit.",
        "tr": "İyi kitapların şanı her zaman varlığını sürdürecektir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Possuntne pecunia otiumque curas vitae humanae superare?",
        "tr": "Para ve huzur insan yaşamının kaygılarını alt edebilir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "mi? Vitia vera, igitur, tyranni semper non videre possumus.",
        "tr": "Bu nedenle bir tiranın gerçek kusurlarını her zaman göremeyiz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Pauci viri liberi tyrannum tolerare poterunt.",
        "tr": "TÜRKÇEDEN LATİNCEYE Birkaç özgür adam bir tirana tahammül edebilecek.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multi Romani magnos libros Graecorum antiquorum laudabant.",
        "tr": "TÜRKÇEDEN LATİNCEYE Pek çok Romalı eski Yunanlıların büyük kitaplarını överdi.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ubi fama gloriaque perpetuae esse possunt?",
        "tr": "TÜRKÇEDEN LATİNCEYE Şan ve şöhret nerede ebediyen var olabilir?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Dionysius tum erat tyrannus Syracusanorum.",
        "tr": "özel isim, Syracusae tiranı Syracusaelı o zaman, o zamanlar tiran",
        "analysis": "Dionysius, -ii, m.,; Syracusanus, -a, -um, adj.,; tum, adv.,; tyrannus, -i, m.,",
        "notes": "Dionysius, -ii, m.,; Syracusanus, -a, -um, adj.,; tum, adv.,; tyrannus, -i, m.,"
      },
      {
        "latin": "Optasne meam vitam fortunamque gustare?",
        "tr": "istemek, arzualamak tatmak, tadına varmak",
        "analysis": "opto, -are, -avi, -atum, 1, v.,; gusto, -are, -avi, -atum, 1, v.,",
        "notes": "opto, -are, -avi, -atum, 1, v.,; gusto, -are, -avi, -atum, 1, v.,"
      },
      {
        "latin": "Possumusne, Ō di, in malis insidiis et magno exitio esse salvi? possum, posse, potui,",
        "tr": "-ebilmek, gücü olmak, muktedir olmak",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "insidiae, -arum, pl., pusu, tuzak",
        "tr": "iyi, emniyette, güvende, sağ salim yıkım, felaket",
        "analysis": "salvus, -a, -um, adj.,; exitium, -ii, n.,",
        "notes": "salvus, -a, -um, adj.,; exitium, -ii, n.,"
      },
      {
        "latin": "Possumusne, Ō di, in malis insidiis et magno exitio esse salvi?",
        "tr": "Ey tanrılar, adi tuzaklar ve büyük yıkımlar içinde emniyette olabilir miyiz?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "possum, posse, potui,",
        "tr": "-ebilmek, gücü olmak, muktedir olmak",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Propter curam meam in perpetuo periculo non eritis.",
        "tr": "devamlı, sürekli, kesintisiz ilgi, özen, ihtimam; gayret, emek -den dolayı, yüzünden, sebebinden, sayesinde tehlike",
        "analysis": "perpetuus, -a, -um, adj.,; cura, ae, f.,; propter, prep., (+ acc.),; periculum, -i, n.,",
        "notes": "perpetuus, -a, -um, adj.,; cura, ae, f.,; propter, prep., (+ acc.),; periculum, -i, n.,"
      }
    ],
    "studyTips": "pot- kökünün ardından s gelirse s olur (possum), ünlü gelirse t kalır (potes, potest)."
  },
  {
    "id": "T1_W14_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 14,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 14. Hafta (1. Ders)",
    "title": "1. DÖNEM KAPSAMLI SENTAKS VE CÜMLE ÇÖZÜMLEMELERİ 1",
    "subtitle": "1., 2. ve 3. Çekim İsimler, Fiil Çekimleri ve Karmaşık Cümle Sentaksı",
    "summary": "Bu fasikülde 1. dönemin bütün gramer konularını birleştiren, 34 slayttan oluşan kapsamlı örnek cümle serisini, Kartaca savaşları bağlamındaki tarihi metinleri, sıfat ve isim tamlamalarını ve cümle çözümleme metotlarını inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "60 dakika",
    "sourceFile": "LatinceGramer14.1.pdf",
    "slideCount": 35,
    "topics": ["1. Dönem Genel Sentaks", "İsim Tamlamaları ve Sıfat Uyumu", "Edatlı Kalıplar (propter, sine, in)", "Tarihsel Örnekler (Punicum bellum)", "Genişletilmiş Cümle Çözümlemeleri"],
    "vocab": ["vitium", "culpo", "delecto", "fortuna", "punicus", "secundus", "varius", "plenus", "statua", "sanus", "caelum", "tolero", "infirmus", "propter", "et", "nihil", "in", "patria", "nunc", "sine", "animus", "non", "si", "ubi", "ibi", "populus", "liber", "amo", "nec", "possum", "quare", "de", "tum", "mora", "malo", "rex", "igitur", "quando", "satis", "civitas"],
    "sections": [
      {
        "title": "1. Dönem Sonu Sentaks Analiz Rehberi",
        "html": "<p>Latince karmaşık bir cümleyi analiz ederken şu adımlar izlenir:</p>\n<ol>\n  <li><strong>Yüklemi (Fiili) Bulun:</strong> Cümlenin genellikle en sonunda yer alır. Şahsını ve zamanını belirleyin.</li>\n  <li><strong>Özne Arayın (Nominativus):</strong> Yüklemin şahsına ve sayısına uygun bir Nominativus isim var mı? Yoksa özne fiilin içindedir.</li>\n  <li><strong>Doğrudan Nesneyi Arayın (Accusativus):</strong> Geçişli bir fiil ise neyi/kimi etkilediğini bulun.</li>\n  <li><strong>Dolaylı Tümleç ve Belirteçleri Çözün:</strong> Dativus (-e hali), Ablativus (araç, zaman, mekan) ve edatlı yapıları (propter + acc., sine + abl., in + abl.) tespit edin.</li>\n</ol>",
        "calloutType": "info",
        "calloutTitle": "Sentaks Çözümleme İlkesi",
        "calloutText": "Latincede sözcük sırasına değil, sözcüklerin sonlarındaki hal ve çekim takılarına bakarak cümlenin ögeleri belirlenir.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Propter vitia tua multi te culpant et nihil te in patria tua delectare nunc potest.",
        "tr": "suç, kabahat, kusur hoşnut etmek, memnun etmek suçlamak, itham etmek şimdi, şu anda, artık",
        "analysis": "vitium, -ii, n.,; delecto, -are, avi, -atum, 1, v.,; culpo, -are, -avi, -atum, 1., v.,; nunc, adv.,",
        "notes": "vitium, -ii, n.,; delecto, -are, avi, -atum, 1, v.,; culpo, -are, -avi, -atum, 1., v.,; nunc, adv.,"
      },
      {
        "latin": "Fortuna Punici belli secundi varia erat.",
        "tr": "şans, talih, baht; durum, koşul, gidişat Kartacalı, Kartaca’ya ait / dair değişken ikinci",
        "analysis": "fortuna, -ae, f.,; Punicus, -a, -um, adj.,; varius, -a, -um, adj.,; secundus, -a, um, adj.,",
        "notes": "fortuna, -ae, f.,; Punicus, -a, -um, adj.,; varius, -a, -um, adj.,; secundus, -a, um, adj.,"
      },
      {
        "latin": "Patria Romanorum erat plena Graecorum librorum statuarumque pulchrarum. heykel, yontu, tasvir",
        "tr": "dolu, çok, çok fazla, -bakımından zengin (+ gen.)",
        "analysis": "statua, -ae, f.,; plenus, -a, -um, adj.,; liber, libri, m.,",
        "notes": "statua, -ae, f.,; plenus, -a, -um, adj.,; liber, libri, m.,"
      },
      {
        "latin": "Patria Romanorum erat plena Graecorum librorum statuarumque pulchrarum.",
        "tr": "Romalıların vatanı Yunanlıların kitapları ve güzel heykelleriyle doluydu.",
        "analysis": "statua, -ae, f.,",
        "notes": "statua, -ae, f.,"
      },
      {
        "latin": "heykel, yontu, tasvir",
        "tr": "dolu, çok, çok fazla, -bakımından zengin (+ gen.)",
        "analysis": "plenus, -a, -um, adj.,; liber, libri, m.,",
        "notes": "plenus, -a, -um, adj.,; liber, libri, m.,"
      },
      {
        "latin": "Sine dis et deabus in caelo animus non potest sanus esse.",
        "tr": "Gökteki tanrılar ve tanrıçalar olmadan ruh sağlıklı olamaz.",
        "analysis": "sine, prep.,",
        "notes": "sine, prep.,"
      },
      {
        "latin": "Si animus infirmus est, non poterit bonam fortunam tolerare.",
        "tr": "katlanmak, tahammül etmek güçsüz, zayıf",
        "analysis": "tolero, -are, -avi, -atum, 1, v.,; infirmus, -a, -um, adj.,",
        "notes": "tolero, -are, -avi, -atum, 1, v.,; infirmus, -a, -um, adj.,"
      },
      {
        "latin": "Ubi leges valent, ibi populus liber potest valere.",
        "tr": "güçlü olmak",
        "analysis": "valeo, -ere, -ui, -itum, 1, v.,; lex, -legis, f.,",
        "notes": "valeo, -ere, -ui, -itum, 1, v.,; lex, -legis, f.,"
      },
      {
        "latin": "yasa, kanun nerede orada",
        "tr": "özgür",
        "analysis": "ubi, adv.,; ibi, adv.,; liber, -era, -erum, adj.,",
        "notes": "ubi, adv.,; ibi, adv.,; liber, -era, -erum, adj.,"
      },
      {
        "latin": "Non amo te, Sabidi, nec possum dicere quare.",
        "tr": "özel isim, ve değil",
        "analysis": "Hoc tantum possum dicere: non amo te.; Sabidius, -ii, m.,; nec, conj.,  = et non; hoc, pron.,",
        "notes": "Hoc tantum possum dicere: non amo te.; Sabidius, -ii, m.,; nec, conj.,  = et non; hoc, pron.,"
      },
      {
        "latin": "Secundas litteras discipulae heri videbas et de verbis tum cogitabas.",
        "tr": "ikinci; uygun, elverişli, harf mektup; edebiyat",
        "analysis": "secundus, -a, -um,; littera, -ae, f.; litterae, -arum, f., pl.,",
        "notes": "secundus, -a, -um,; littera, -ae, f.; litterae, -arum, f., pl.,"
      },
      {
        "latin": "Feminae sine mora civitatem de insidiis et exitio malo monebunt.",
        "tr": "devlet, yurttaş topluluğu",
        "analysis": "civitas, -atis, f.,",
        "notes": "civitas, -atis, f.,"
      },
      {
        "latin": "Rex et regina igitur cras non audebunt ibi remanere. kral",
        "tr": "kraliçe cesaret etmek, cüret etmek",
        "analysis": "rex, regis, m.,; regina, -ae, f.,; audeo, audere, ausus sum, 2, v.,",
        "notes": "rex, regis, m.,; regina, -ae, f.,; audeo, audere, ausus sum, 2, v.,"
      },
      {
        "latin": "Rex et regina igitur cras non audebunt ibi remanere.",
        "tr": "Kral ve kraliçe bu nedenle yarın burada kalmaya cesaret etmeyecek.",
        "analysis": "rex, regis, m.,",
        "notes": "rex, regis, m.,"
      },
      {
        "latin": "Mores Graecorum non erant sine culpis vitiisque.",
        "tr": "alışkanlık, huy âdet, karakter, ahlak cesaret etmek, cüret etmek",
        "analysis": "mos, moris, m.,; mores, morum, m, pl.,; audeo, audere, ausus sum, 2, v.,",
        "notes": "mos, moris, m.,; mores, morum, m, pl.,; audeo, audere, ausus sum, 2, v.,"
      },
      {
        "latin": "Quando homines satis virtutis habebunt?",
        "tr": "ne zaman? cesaret; erdem",
        "analysis": "quando, adv.,; virtus, -tutis, f.,",
        "notes": "quando, adv.,; virtus, -tutis, f.,"
      },
      {
        "latin": "Corpora vestra sunt sana et animi sunt pleni sapientiae.",
        "tr": "beden, vücut sağlıklı dolu, ile dolu (+ gen.)",
        "analysis": "corpus, -oris, n.,; sanus, -a, -um, adj.,; plenus, -a, -um, adj.,",
        "notes": "corpus, -oris, n.,; sanus, -a, -um, adj.,; plenus, -a, -um, adj.,"
      },
      {
        "latin": "Filiae amici tui ibi heri cenabant.",
        "tr": "Arkadaşının kızları dün orada akşam yemeği yiyordu. al”am ÇemeRi ÇemelW",
        "analysis": "ceno, -are, í, v.,",
        "notes": "ceno, -are, í, v.,"
      },
      {
        "latin": "Propter mores humanos pacem veram non habebimus.",
        "tr": "arış doğru, gerçek, hakiki",
        "analysis": "pax, pacis, f., b; verus, -a, -um, adj.,",
        "notes": "pax, pacis, f., b; verus, -a, -um, adj.,"
      },
      {
        "latin": "Sine moribus sanis pacem non habere possumus.",
        "tr": "Sağlıklı bir karakterimiz yoksa barışa sahip olamayız.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Poteritne civitas pericula temporum nostrorum superare?",
        "tr": "zaman; fırsat, imkân",
        "analysis": "tempus, temporis, n.,",
        "notes": "tempus, temporis, n.,"
      }
    ],
    "studyTips": "Cümle çözerken her kelimenin üzerine casus (hal) ve görevini (özne, nesne, yüklem) not alarak ilerleyiniz."
  },
  {
    "id": "T1_W14_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 14,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 14. Hafta (2. Ders)",
    "title": "1. DÖNEM KAPSAMLI SENTAKS VE CÜMLE ÇÖZÜMLEMELERİ 2",
    "subtitle": "Edatlı Tamlamalar (propter, post, cum, sine), İyelik ve Niteleme Sentaksı, Dönem Sonu Genel Değerlendirme",
    "summary": "Bu fasikülde 1. dönemin son dersi olarak edatların yönetimindeki hal yapılarını (Accusativus ve Ablativus alan edatlar), post bellum ve cum amicis kalıplarını, Klasik Latin yazarlarından seçilmiş 20 slaytlık örnek cümleleri ve dönem sonu sentaks sentezini inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "60 dakika",
    "sourceFile": "LatinceGramer14.2.pdf",
    "slideCount": 21,
    "topics": ["Edatların Halleri (Accusativus & Ablativus)", "post, propter, ante (+ acc.)", "cum, sine, de, ab, ex (+ abl.)", "1. Dönem Genel Sentezi", "Final Sınavına Hazırlık Cümleleri"],
    "vocab": ["post", "pax", "liber", "remedium", "bellum", "cura", "periculum", "animus", "amicitia", "de", "et", "virtus", "multus", "labor", "vir", "honestus", "in", "insula", "semper", "saepe", "ubi", "magister", "quare", "fama", "do"],
    "sections": [
      {
        "title": "1. Latincede Edatların (Praepositiones) Yönettiği Haller",
        "html": "<p>Latincede edatlar tek başlarına kullanılmazlar; daima ardından gelen bir ismin halini yönetirler:</p>\n<ul>\n  <li><strong>Accusativus Alan Edatlar (Yönelme / Süreç):</strong>\n    <ul>\n      <li><span class=\"lat-word\">ad</span> (+ acc.): -e doğru, yanına</li>\n      <li><span class=\"lat-word\">post</span> (+ acc.): sonra, ardından (<span class=\"lat-word\">post bellum</span> = savaştan sonra)</li>\n      <li><span class=\"lat-word\">propter</span> (+ acc.): yüzünden, nedeniyle (<span class=\"lat-word\">propter culpam</span>)</li>\n      <li><span class=\"lat-word\">ante</span> (+ acc.): önce, önünde</li>\n      <li><span class=\"lat-word\">per</span> (+ acc.): boyunca, vasıtasıyla</li>\n    </ul>\n  </li>\n  <li><strong>Ablativus Alan Edatlar (Çıkma / Birliktelik / Yer):</strong>\n    <ul>\n      <li><span class=\"lat-word\">cum</span> (+ abl.): ile, birlikte (<span class=\"lat-word\">cum amīcīs</span> = arkadaşlarla)</li>\n      <li><span class=\"lat-word\">sine</span> (+ abl.): -sız, -siz (<span class=\"lat-word\">sine morā</span> = gecikmeksizin)</li>\n      <li><span class=\"lat-word\">dē</span> (+ abl.): hakkında, -den aşağı (<span class=\"lat-word\">dē bellō</span>)</li>\n      <li><span class=\"lat-word\">ā / ab</span> (+ abl.): -den, tarafından (<span class=\"lat-word\">ab agricolā</span>)</li>\n      <li><span class=\"lat-word\">ē / ex</span> (+ abl.): -den dışarı, içinden</li>\n    </ul>\n  </li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "in ve sub Edatlarının Çift Hali",
        "calloutText": "in ve sub edatları hareket bildiriyorsa (-e doğru, içine) Accusativus alır; durum veya bulunma bildiriyorsa (-de, içinde) Ablativus alır:\nin urbem intrat = şehre giriyor (hareket > acc.)\nin urbe manet = şehirde kalıyor (bulunma > abl.)",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Catullus'un Cornelius'a İthafı (Catullus 1)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Catullus'un Cornelius'a İthafı (Catullus 1)</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Kaynak Metin:</strong> Gaius Valerius Catullus, <em>Carmen I</em> (Cui dono lepidum novum libellum)</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Cornelio\" role=\"button\" tabindex=\"0\">Cornelio</span>, <span class=\"lat-word\" data-word=\"viro\" role=\"button\" tabindex=\"0\">viro</span> <span class=\"lat-word\" data-word=\"magno\" role=\"button\" tabindex=\"0\">magno</span> <span class=\"lat-word\" data-word=\"sapientiae\" role=\"button\" tabindex=\"0\">sapientiae</span>, <span class=\"lat-word\" data-word=\"dabo\" role=\"button\" tabindex=\"0\">dabo</span> <span class=\"lat-word\" data-word=\"pulchrum\" role=\"button\" tabindex=\"0\">pulchrum</span> <span class=\"lat-word\" data-word=\"librum\" role=\"button\" tabindex=\"0\">librum</span> <span class=\"lat-word\" data-word=\"novum\" role=\"button\" tabindex=\"0\">novum</span>. <span class=\"lat-word\" data-word=\"Corneli\" role=\"button\" tabindex=\"0\">Corneli</span>, <span class=\"lat-word\" data-word=\"mi\" role=\"button\" tabindex=\"0\">mi</span> <span class=\"lat-word\" data-word=\"amice\" role=\"button\" tabindex=\"0\">amice</span>, <span class=\"lat-word\" data-word=\"libros\" role=\"button\" tabindex=\"0\">libros</span> <span class=\"lat-word\" data-word=\"meos\" role=\"button\" tabindex=\"0\">meos</span> <span class=\"lat-word\" data-word=\"semper\" role=\"button\" tabindex=\"0\">semper</span> <span class=\"lat-word\" data-word=\"laudabas\" role=\"button\" tabindex=\"0\">laudabas</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"es\" role=\"button\" tabindex=\"0\">es</span> <span class=\"lat-word\" data-word=\"magister\" role=\"button\" tabindex=\"0\">magister</span> <span class=\"lat-word\" data-word=\"doctus\" role=\"button\" tabindex=\"0\">doctus</span> <span class=\"lat-word\" data-word=\"litterarum\" role=\"button\" tabindex=\"0\">litterarum</span>! <span class=\"lat-word\" data-word=\"Quare\" role=\"button\" tabindex=\"0\">Quare</span> <span class=\"lat-word\" data-word=\"habe\" role=\"button\" tabindex=\"0\">habe</span> <span class=\"lat-word\" data-word=\"novum\" role=\"button\" tabindex=\"0\">novum</span> <span class=\"lat-word\" data-word=\"laborem\" role=\"button\" tabindex=\"0\">laborem</span> <span class=\"lat-word\" data-word=\"meum\" role=\"button\" tabindex=\"0\">meum</span>: <span class=\"lat-word\" data-word=\"fama\" role=\"button\" tabindex=\"0\">fama</span> <span class=\"lat-word\" data-word=\"libri\" role=\"button\" tabindex=\"0\">libri</span>, (<span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"tua\" role=\"button\" tabindex=\"0\">tua</span> <span class=\"lat-word\" data-word=\"fama\" role=\"button\" tabindex=\"0\">fama</span>) <span class=\"lat-word\" data-word=\"erit\" role=\"button\" tabindex=\"0\">erit</span> <span class=\"lat-word\" data-word=\"perpetua\" role=\"button\" tabindex=\"0\">perpetua</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Büyük bir bilgeliğe sahip olan Cornelius’a yeni güzel kitabımı adıyorum. Cornelius, ey dostum, benim kitaplarımı her zaman övüyordun ve sen bilgili bir edebiyat öğretmenisin. Bu nedenle benim yeni eserimi de elinde bulundur: Kitabımın ünü (senin de ünün) ebedi olacak.</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Post bellum multos libros de pace et remediis belli videbant.",
        "tr": "sonra, ardından (+ acc.)",
        "analysis": "post, prep.,",
        "notes": "post, prep.,"
      },
      {
        "latin": "sonra, ardfndanW",
        "tr": "Kötü zamanlardan sonra gerçek erdem ve çok fazla çaba devlete yardım edecek.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Post tempora mala vera virtus et multus labor civitatem iuvabunt.",
        "tr": "Kötü zamanlardan sonra gerçek erdem ve çok fazla çaba devlete yardım edecek.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Officia sapientiamque oculis animi possumus videre.",
        "tr": "göz",
        "analysis": "oculus, -i, m.,",
        "notes": "oculus, -i, m.,"
      },
      {
        "latin": "Romani erant viri liberi. Marcus Tullius, vir honestus, in Italia habitabat.",
        "tr": ", onurlu, erdemli",
        "analysis": "honestus, -a, -um, adj.",
        "notes": "honestus, -a, -um, adj."
      },
      {
        "latin": "Romani erant viri liberi.",
        "tr": "Romalılar özgür adamlardı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Marcus Tullius, vir honestus, in Italia habitabat.",
        "tr": "Onurlu bir adam olan Marcus Tullius İtalya’da yaşıyordu., onurlu, erdemli",
        "analysis": "honestus, -a, -um, adj.",
        "notes": "honestus, -a, -um, adj."
      },
      {
        "latin": "Viros bonos et honestos laudamus. Fidi sunt amici vestri.",
        "tr": ", sadık, sadakatli, güvenilir",
        "analysis": "fidus, -a, -um, adj.",
        "notes": "fidus, -a, -um, adj."
      },
      {
        "latin": "Viros bonos et honestos laudamus.",
        "tr": "İyi ve onurlu adamları övüyoruz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Fidi sunt amici vestri.",
        "tr": "Sizin arkadaşlarınız sadakatlidir., sadık, sadakatli, güvenilir",
        "analysis": "fidus, -a, -um, adj.",
        "notes": "fidus, -a, -um, adj."
      },
      {
        "latin": "Liberi mei in schola manent. Multae et pulchrae feminae in oppido nostro habitant., okul",
        "tr": "çocuklar",
        "analysis": "schola, -ae, f.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "notes": "schola, -ae, f.; liberi, -orum, m., pl.,; oppidum, -i, n.,"
      },
      {
        "latin": "Liberi mei in schola manent.",
        "tr": "Benim çocuklarım okulda bekliyorlardı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multae et pulchrae feminae in oppido nostro habitant.",
        "tr": "Pek çok güzel kadın bizim kasabamızda yaşıyor.",
        "analysis": "schola, -ae, f.",
        "notes": "schola, -ae, f."
      },
      {
        "latin": "Multos et fidos socios habetis. Britannia est magna insula.",
        "tr": ", yoldaş, müttefik çocuklar",
        "analysis": "socius, -i (-ii), m.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "notes": "socius, -i (-ii), m.; liberi, -orum, m., pl.,; oppidum, -i, n.,"
      },
      {
        "latin": "Multos et fidos socios habetis.",
        "tr": "Pek çok sadık müttefike sahipsiniz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Britannia est magna insula.",
        "tr": "Britanya büyük bir adadır., yoldaş, müttefik çocuklar",
        "analysis": "socius, -i (-ii), m.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "notes": "socius, -i (-ii), m.; liberi, -orum, m., pl.,; oppidum, -i, n.,"
      },
      {
        "latin": "Multas feminas pulchras in oppido vestro videbitis.",
        "tr": "Kasabanızda pek çok güzel kadın göreceksiniz. İyi insanları ve onurlu kadınları her zaman öveceğiz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Bonos viros et feminas honestas semper laudabimus.",
        "tr": "İyi erkekleri ve onurlu kadınları her zaman öveceğiz.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Spectantne nautae saepe lunam et stellas?",
        "tr": "Denizciler sıklıkla yıldızlara ve aya bakar mı? Çiftçinin güzel hediyeleri neredeydi?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ubi erant dona puchra agricolae?, ay",
        "tr": "yıldız-",
        "analysis": "luna, -ae, f.; stella, -ae, f.,",
        "notes": "luna, -ae, f.; stella, -ae, f.,"
      }
    ],
    "studyTips": "1. dönemin 23 derslik yolculuğunu tamamladınız! Artık 1., 2. ve 3. grup isimleri, 1., 2. ve 4. çekim fiilleri, praesens ve imperfectum zamanlarını, esse ve possum düzensiz fiillerini ve klasik Latince cümle çözümleme tekniklerini yetkinlikle uygulayabilirsiniz."
  },
  {
    "id": "T2_W1_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 1,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 1. Hafta (1. Ders)",
    "title": "3. ÇEKİM İSİMLER TEKRAR VE KLASİK SENTAKS",
    "subtitle": "Homo sum, Terentius, Horatius ve Ecclesiastes Metinleri Eşliğinde Sentaks Çözümlemeleri",
    "summary": "Bu fasikülde 2. dönemin başlangıcında 3. grup isimlerin cümle içindeki sentaks kullanımlarını pekiştirecek, Terentius, Horatius ve klasik Latin edebiyatından seçilmiş cümleleri inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 1.1.pdf",
    "slideCount": 11,
    "topics": ["3. Çekim İsimler Tekrar", "Terentius: Homo sum", "Horatius Şiirleri", "Ecclesiastes: Nihil sub sole novum", "Klasik Sentaks Çözümlemesi"],
    "vocab": ["homo", "sol", "novus", "carmen", "adulescentia", "virgo", "puer", "canto", "rex", "dux", "sum", "nihil", "sub", "de", "nunc", "amor", "odi", "virtus", "pecco", "tempus", "princeps", "durus", "audeo", "bonus", "propter", "et", "populus", "saepe", "in", "semper", "otium", "sine", "mors", "honor", "porta", "nomen", "ad", "civitas", "non", "vita", "libertas", "labor", "mortalis", "sed", "mox", "ecce", "puella"],
    "sections": [
      {
        "title": "1. 3. Çekim İsimlerin Sentakstaki Yeri ve Klasik Metinler",
        "html": "<p>3. çekim isimler, Roma edebiyatında ve felsefesinde insan doğasını, erdemi ve toplumsal rolleri anlatan en temel kelimeleri barındırır:</p>\n<ul>\n  <li><span class=\"lat-word\">Homo sum: humānī nihil ā mē aliēnum putō.</span> (İnsanım: insana dair hiçbir şeyi kendime yabancı saymam. — Terentius)</li>\n  <li><span class=\"lat-word\">Nihil sub sōle novum.</span> (Güneşin altında yeni hiçbir şey yoktur. — Ecclesiastes)</li>\n  <li><span class=\"lat-word\">Carmina nova de adulescentia virginibus puerisque nunc canto.</span> (Genç kızlar ve oğlanlar için gençlik hakkında yeni şarkılar söylüyorum. — Horatius)</li>\n</ul>",
        "calloutType": "info",
        "calloutTitle": "Edebi Alıntı Kuralı",
        "calloutText": "Klasik yazarlardan alınan cümleler Latincede dilbilgisi kurallarının canlı edebiyattaki en kusursuz örnekleridir. Her cümlenin yüklemini ve yükleme bağlı özne-tümleç ilişkilerini çözmek sentaks yeteneğinizi geliştirir.",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Scintilla ve Horatia (Oxford Latin Course)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Scintilla ve Horatia (Oxford Latin Course)</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Pedagojik Kaynak:</strong> Oxford Latin Course, Bölüm 1 (Venusium'da Günlük Yaşam)</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"casa\" role=\"button\" tabindex=\"0\">casa</span> <span class=\"lat-word\" data-word=\"laborat\" role=\"button\" tabindex=\"0\">laborat</span>; <span class=\"lat-word\" data-word=\"fessa\" role=\"button\" tabindex=\"0\">fessa</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>. <span class=\"lat-word\" data-word=\"Horatia\" role=\"button\" tabindex=\"0\">Horatia</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"casam\" role=\"button\" tabindex=\"0\">casam</span> <span class=\"lat-word\" data-word=\"intrat\" role=\"button\" tabindex=\"0\">intrat</span>; <span class=\"lat-word\" data-word=\"ieiuna\" role=\"button\" tabindex=\"0\">ieiuna</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>. <span class=\"lat-word\" data-word=\"Sed\" role=\"button\" tabindex=\"0\">Sed</span> <span class=\"lat-word\" data-word=\"cena\" role=\"button\" tabindex=\"0\">cena</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"parata\" role=\"button\" tabindex=\"0\">parata</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>. <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"festinat\" role=\"button\" tabindex=\"0\">festinat</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"mox\" role=\"button\" tabindex=\"0\">mox</span> <span class=\"lat-word\" data-word=\"cena\" role=\"button\" tabindex=\"0\">cena</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"parata\" role=\"button\" tabindex=\"0\">parata</span>. “<span class=\"lat-word\" data-word=\"Ecce\" role=\"button\" tabindex=\"0\">Ecce</span>!” <span class=\"lat-word\" data-word=\"inquit\" role=\"button\" tabindex=\"0\">inquit</span>, “ <span class=\"lat-word\" data-word=\"cena\" role=\"button\" tabindex=\"0\">cena</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"parata\" role=\"button\" tabindex=\"0\">parata</span>. ” <span class=\"lat-word\" data-word=\"Puella\" role=\"button\" tabindex=\"0\">Puella</span> <span class=\"lat-word\" data-word=\"laeta\" role=\"button\" tabindex=\"0\">laeta</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>; <span class=\"lat-word\" data-word=\"ad\" role=\"button\" tabindex=\"0\">ad</span> <span class=\"lat-word\" data-word=\"mensam\" role=\"button\" tabindex=\"0\">mensam</span> <span class=\"lat-word\" data-word=\"festinat\" role=\"button\" tabindex=\"0\">festinat</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"avide\" role=\"button\" tabindex=\"0\">avide</span> <span class=\"lat-word\" data-word=\"cenat\" role=\"button\" tabindex=\"0\">cenat</span>. <span class=\"lat-word\" data-word=\"Postridie\" role=\"button\" tabindex=\"0\">Postridie</span> <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"ad\" role=\"button\" tabindex=\"0\">ad</span> <span class=\"lat-word\" data-word=\"tabernas\" role=\"button\" tabindex=\"0\">tabernas</span> <span class=\"lat-word\" data-word=\"ambulat\" role=\"button\" tabindex=\"0\">ambulat</span>. <span class=\"lat-word\" data-word=\"Horatia\" role=\"button\" tabindex=\"0\">Horatia</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"casa\" role=\"button\" tabindex=\"0\">casa</span> <span class=\"lat-word\" data-word=\"laborat\" role=\"button\" tabindex=\"0\">laborat</span>. <span class=\"lat-word\" data-word=\"Mox\" role=\"button\" tabindex=\"0\">Mox</span> <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"redit\" role=\"button\" tabindex=\"0\">redit</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"casam\" role=\"button\" tabindex=\"0\">casam</span> <span class=\"lat-word\" data-word=\"intrat\" role=\"button\" tabindex=\"0\">intrat</span>. <span class=\"lat-word\" data-word=\"Ecce\" role=\"button\" tabindex=\"0\">Ecce</span>, <span class=\"lat-word\" data-word=\"parata\" role=\"button\" tabindex=\"0\">parata</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"cena\" role=\"button\" tabindex=\"0\">cena</span>. <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"laeta\" role=\"button\" tabindex=\"0\">laeta</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Scintilla evde çalışıyor, bitkin durumdadır. Horatia eve girer; açtır. Ama yemek hazır değildir. Scintilla hızla seğirtir ve kısa süre içinde yemek hazır olur. “İşte bak!” der, “Yemek hazır.” Kız mutludur, masaya yaklaşır ve iştahla yemeği yer. Ertesi gün Scintilla yürüyerek dükkanlara gider. Horatia evde çalışır. Çok geçmeden Scintilla geri döner ve eve girer. Yemek hazırdır. Scintilla mutlu olur.</p>\n  </div>\n  <div class=\"reading-passage-notes\">\n    <div class=\"notes-label\">🔍 Metin İçi Sözlük & Gramer Notları:</div>\n    <p class=\"notes-text\">casa, - ae, - f., ev in, praep., (+ abl.), - de, - da; (+ acc.) - e doğru fessus, - a, - um., adj., yorgun, bitkin intro, - are, - avi, gitmek; içeri girmek ieiunus, - a, - um., adj., aç cena, - ae, - f., akşam yemeği ad, praep., (+ acc.) - e doğru, yanına paratus, - a, - um., adj., hazır ecce, adv., bak, işte laetus, - a, - um., adj., mutlu, neşeli avide, adv., aç gözlüce, iştahla festino, - are, - avi, hızla ilerlemek, acele etmek postridie, adv., ertesi gün redeo, redire, geri dönmek taberna, - ae, f., dükkan</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Homo sum. ( Terentius ) Nihil sub sole novum. ( Ecclesiastes ) Carmina nova de adulescentia virginibus puerisque nunc canto. ( Horatius )",
        "tr": "insan",
        "analysis": "homo, hominis, m.,",
        "notes": "homo, hominis, m.,"
      },
      {
        "latin": "carmen, inis",
        "tr": "şarkı",
        "analysis": ", n.,",
        "notes": ", n.,"
      },
      {
        "latin": "canto, - are,",
        "tr": "şarkı söylemek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "adulescentia, -",
        "tr": "gençlik",
        "analysis": "ae, f.,",
        "notes": "ae, f.,"
      },
      {
        "latin": "Homo sum. ( Terentius )",
        "tr": "İnsanım",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Nihil sub sole novum. ( Ecclesiastes )",
        "tr": "Güneş altında",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Carmina nova de adulescentia virginibus puerisque nunc canto. ( Horatius )",
        "tr": "Genç kızlar ve",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "mores, morum",
        "tr": "âdet",
        "analysis": ", m., pl.,",
        "notes": ", m., pl.,"
      },
      {
        "latin": ", karakter amor, - oris",
        "tr": "aşk",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": "odi, odisse, nefret",
        "tr": "etmek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "( eksik",
        "tr": "çekimli",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "fiil ) virtus, - tutis",
        "tr": "erdem",
        "analysis": "f.,",
        "notes": "f.,"
      },
      {
        "latin": "pecco, - are,",
        "tr": "suç işlemek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "tempus, oris",
        "tr": "zaman",
        "analysis": ", n.,",
        "notes": ", n.,"
      },
      {
        "latin": "princeps, - ipis lider,",
        "tr": "yönetici",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": "durus, - a, - sert, zor,",
        "tr": "katı",
        "analysis": "um, adj.,",
        "notes": "um, adj.,"
      },
      {
        "latin": "audeo, -",
        "tr": "cesaret etmek",
        "analysis": "ere, v., 2,",
        "notes": "ere, v., 2,"
      },
      {
        "latin": "Sub principe duro temporibusque malis audes esse bonus. ( Martialis ) Sert",
        "tr": "bir yöneticinin",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "zamanlarda iyi",
        "tr": "bir insan",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "ediyorsun. Boni propter amorem virtutis peccare oderunt. ( Horatius )",
        "tr": "İyi",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "insanlar erdeme",
        "tr": "duydukları aşktan dolayı suç işlemekten",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "nefret ederler. Laudas fortunam et mores antiquae plebis. ( Horatius ) Eski",
        "tr": "halkın",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Populus stultus viris indignis honores saepe dat. ( Horatius ) Nomina stultorum in parietibus et portis semper videmus. ( Cicero ) Otium sine litteris mors est. ( Seneca ) honor, - oris onur; makam indignus, - a, -",
        "tr": "değersiz",
        "analysis": ", f.,; um, adj.,",
        "notes": ", f.,; um, adj.,"
      },
      {
        "latin": ", adi; hak etmeyen, liyakatsiz paries, - etis bina",
        "tr": "duvarı",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": "porta, -",
        "tr": "Eski kapı büyük değildir, ama güzeldir.",
        "analysis": "ae, f.,",
        "notes": "ae, f.,"
      },
      {
        "latin": "nomen, - inis isim, ad virtus, - tutis",
        "tr": "erdem",
        "analysis": ", n.,; f.,",
        "notes": ", n.,; f.,"
      },
      {
        "latin": "Populus stultus viris indignis honores saepe dat. ( Horatius ) Aptal halk, liyakatsiz insanlara onurlar / makamlar",
        "tr": "bahşeder",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Nomina stultorum in parietibus et portis semper videmus. ( Cicero )",
        "tr": "Aptalların adını her zaman",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Otium sine litteris mors est. ( Seneca ) Edebiyatla",
        "tr": "geçirilmeyen boş",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multae nationes servitutem tolerare possunt; nostra civitas non potest. Praeclara est recuperatio libertatis. ( Cicero ) Nihil sine magno labore vita mortalibus dat. ( Horatius ) natio, - onis ulus, halk praeclarus, - a, -",
        "tr": "olağanüstü",
        "analysis": ", f.,; um, adj.,",
        "notes": ", f.,; um, adj.,"
      },
      {
        "latin": "servitus, - tutis",
        "tr": "kölelik",
        "analysis": ", f.,",
        "notes": ", f.,"
      },
      {
        "latin": "civitas, - atis devlet recuperatio, - onis geri kazanma libertas, - atis",
        "tr": "özgürlük",
        "analysis": ", f.,; , f.,; f.,",
        "notes": ", f.,; , f.,; f.,"
      },
      {
        "latin": "labor, oris",
        "tr": "iş",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": "mortalis, -",
        "tr": "ölümlü",
        "analysis": "is., m./f.,",
        "notes": "is., m./f.,"
      },
      {
        "latin": "Multae nationes servitutem tolerare possunt; nostra civitas non potest. Praeclara est recuperatio libertatis. ( Cicero ) Pek",
        "tr": "çok",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "devletimiz katlanamaz.",
        "tr": "Özgürlüğün",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Nihil sine magno labore vita mortalibus dat. ( Horatius )",
        "tr": "Çok emek",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "Homo sum cümlesindeki sum fiili yüklemdir; homo ise özne-yüklem (praedicativum) olarak yalın haldedir."
  },
  {
    "id": "T2_W1_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 1,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 1. Hafta (2. Ders)",
    "title": "3. ÇEKİM ALIŞTIRMALARI VE METİN OKUMA (SCINTILLA & HORATIA)",
    "subtitle": "Oxford Latin Course Metinleri, Günlük Yaşam Latinceleri ve İleri Düzey Cümleler",
    "summary": "Bu fasikülde Roma günlük yaşamını anlatan Oxford Latin Course metinleri eşliğinde Scintilla ve Horatia'nın hikayesini, edatlı kalıpları (in casa, ad tabernas) ve cümle tahlillerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 1.2.pdf",
    "slideCount": 16,
    "topics": ["Scintilla ve Horatia Metni", "Günlük Yaşam Latinceleri", "Yer ve Yön Bildiren Edatlar (in, ad)", "Zarf Kullanımları (mox, avide, postridie)", "Cümle Çözümlemeleri"],
    "vocab": ["casa", "laboro", "fessus", "intro", "ieiunus", "cena", "paratus", "ecce", "laetus", "avide", "festino", "postridie", "redeo", "taberna", "perpetuus", "pax", "civitas", "salvus", "liber", "frater", "ago", "meus", "in", "semper", "nunc", "quare", "soror", "terra", "uxor", "ex", "iter", "possum", "numquam", "periculum", "sine", "error", "mora", "ad", "copia", "perdo", "amor", "non", "sed", "laus", "traho", "et", "mox", "puella", "propter", "gero", "bellum", "defendo", "tum", "autem", "tamen", "de"],
    "sections": [
      {
        "title": "1. Roma'da Ev Yaşamı ve Latin Dili Yapısı",
        "html": "<p>Latince edebi metinlerin yanında günlük yaşam anlatımları, fiillerin hikaye zamanlarındaki ardışıklığını ve bağlaç kullanımını pekiştirmek için eşsizdir. Özellikle <em>Scintilla in casa laborat</em> metni, temel cümle yapısını ve sıfat uyumunu pekiştirir.</p>",
        "calloutType": "rule",
        "calloutTitle": "Zaman ve Durum Zarfları",
        "calloutText": "mox (yakında, az sonra), postrīdiē (ertesi gün), avidē (iştahla, açgözlülükle) gibi zarflar cümlede fiilin durumunu ve zamanını niteleyerek çekim eki almadan kullanılırlar.",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Savaş, Barış ve Merhamet (Cicero, De Officiis)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Savaş, Barış ve Merhamet (Cicero, De Officiis)</h4>\n    <div class=\"reading-passage-meta\">📍 <strong>Kaynak Metin:</strong> Marcus Tullius Cicero, <em>De Officiis</em> (Ödevler Üzerine), I.34-35</div>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Civitas\" role=\"button\" tabindex=\"0\">Civitas</span> <span class=\"lat-word\" data-word=\"bellum\" role=\"button\" tabindex=\"0\">bellum</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"causa\" role=\"button\" tabindex=\"0\">causa</span> <span class=\"lat-word\" data-word=\"bona\" role=\"button\" tabindex=\"0\">bona</span> <span class=\"lat-word\" data-word=\"aut\" role=\"button\" tabindex=\"0\">aut</span> <span class=\"lat-word\" data-word=\"propter\" role=\"button\" tabindex=\"0\">propter</span> <span class=\"lat-word\" data-word=\"iram\" role=\"button\" tabindex=\"0\">iram</span> <span class=\"lat-word\" data-word=\"gerere\" role=\"button\" tabindex=\"0\">gerere</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"debet\" role=\"button\" tabindex=\"0\">debet</span>. <span class=\"lat-word\" data-word=\"Si\" role=\"button\" tabindex=\"0\">Si</span> <span class=\"lat-word\" data-word=\"fortunas\" role=\"button\" tabindex=\"0\">fortunas</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"agros\" role=\"button\" tabindex=\"0\">agros</span> <span class=\"lat-word\" data-word=\"vitasque\" role=\"button\" tabindex=\"0\">vitasque</span> <span class=\"lat-word\" data-word=\"populi\" role=\"button\" tabindex=\"0\">populi</span> <span class=\"lat-word\" data-word=\"nostri\" role=\"button\" tabindex=\"0\">nostri</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"bello\" role=\"button\" tabindex=\"0\">bello</span> <span class=\"lat-word\" data-word=\"defendere\" role=\"button\" tabindex=\"0\">defendere</span> <span class=\"lat-word\" data-word=\"poterimus\" role=\"button\" tabindex=\"0\">poterimus</span>, <span class=\"lat-word\" data-word=\"tum\" role=\"button\" tabindex=\"0\">tum</span> <span class=\"lat-word\" data-word=\"pacem\" role=\"button\" tabindex=\"0\">pacem</span> <span class=\"lat-word\" data-word=\"conservare\" role=\"button\" tabindex=\"0\">conservare</span> <span class=\"lat-word\" data-word=\"debebimus\" role=\"button\" tabindex=\"0\">debebimus</span>; <span class=\"lat-word\" data-word=\"si\" role=\"button\" tabindex=\"0\">si</span> <span class=\"lat-word\" data-word=\"autem\" role=\"button\" tabindex=\"0\">autem</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"poterimus\" role=\"button\" tabindex=\"0\">poterimus</span> <span class=\"lat-word\" data-word=\"esse\" role=\"button\" tabindex=\"0\">esse</span> <span class=\"lat-word\" data-word=\"salvi\" role=\"button\" tabindex=\"0\">salvi</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"servare\" role=\"button\" tabindex=\"0\">servare</span> <span class=\"lat-word\" data-word=\"patriam\" role=\"button\" tabindex=\"0\">patriam</span> <span class=\"lat-word\" data-word=\"libertatemque\" role=\"button\" tabindex=\"0\">libertatemque</span> <span class=\"lat-word\" data-word=\"nostram\" role=\"button\" tabindex=\"0\">nostram</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"bello\" role=\"button\" tabindex=\"0\">bello</span>, <span class=\"lat-word\" data-word=\"bellum\" role=\"button\" tabindex=\"0\">bellum</span> <span class=\"lat-word\" data-word=\"erit\" role=\"button\" tabindex=\"0\">erit</span> <span class=\"lat-word\" data-word=\"necessarium\" role=\"button\" tabindex=\"0\">necessarium</span>. <span class=\"lat-word\" data-word=\"Semper\" role=\"button\" tabindex=\"0\">Semper</span> <span class=\"lat-word\" data-word=\"debemus\" role=\"button\" tabindex=\"0\">debemus</span> <span class=\"lat-word\" data-word=\"demonstrare\" role=\"button\" tabindex=\"0\">demonstrare</span>, <span class=\"lat-word\" data-word=\"tamen\" role=\"button\" tabindex=\"0\">tamen</span> <span class=\"lat-word\" data-word=\"magnum\" role=\"button\" tabindex=\"0\">magnum</span> <span class=\"lat-word\" data-word=\"officium\" role=\"button\" tabindex=\"0\">officium</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"bello\" role=\"button\" tabindex=\"0\">bello</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"magnam\" role=\"button\" tabindex=\"0\">magnam</span> <span class=\"lat-word\" data-word=\"clementiam\" role=\"button\" tabindex=\"0\">clementiam</span> <span class=\"lat-word\" data-word=\"post\" role=\"button\" tabindex=\"0\">post</span> <span class=\"lat-word\" data-word=\"victoriam\" role=\"button\" tabindex=\"0\">victoriam</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Devlet, haklı bir gerekçe olmaksızın veya öfke yüzünden savaşmamalıdır. Eğer halkımızın mülkünü, tarlalarını ve yaşamlarını savaşsız savunabileceksek, o vakit barışı korumalıyız; ancak eğer savaş olmaksızın emniyette olamayacak ve vatanımızı ile özgürlüğümüzü koruyamayacaksak, savaş zorunlu olacaktır. Yine de savaşta her zaman büyük bir ödev bilinci, zaferden sonra ise büyük bir merhamet göstermeliyiz.</p>\n  </div>\n  <div class=\"reading-passage-notes\">\n    <div class=\"notes-label\">🔍 Metin İçi Sözlük & Gramer Notları:</div>\n    <p class=\"notes-text\">propter (+ acc.): nedeniyle, yüzünden; bellum gerere: savaşmak, harp yürütmek; defendo, -ere: savunmak, korumak; tum: o zaman, o vakit; autem: ancak, öte yandan; necessarius, -a, -um: zorunlu, gerekli; tamen: buna rağmen, yine de; clementia, -ae f.: merhamet, hoşgörü; fortunae, -arum f. pl.: mal mülk, servet.</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "perpetuus, - a, -",
        "tr": "devamlı",
        "analysis": "um, adj.,",
        "notes": "um, adj.,"
      },
      {
        "latin": "pax, - pacis",
        "tr": "barış",
        "analysis": ", f.,",
        "notes": ", f.,"
      },
      {
        "latin": "civitas, - atis devlet salvus, - a, - zarar",
        "tr": "görmemiş",
        "analysis": ", f.,; um., adj.,",
        "notes": ", f.,; um., adj.,"
      },
      {
        "latin": ", emniyette liber, - a, -",
        "tr": "özgür",
        "analysis": "um, adj.,",
        "notes": "um, adj.,"
      },
      {
        "latin": "frater, fratris erkek",
        "tr": "kardeş",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": "ago, agere",
        "tr": "götürmek",
        "analysis": ", v. 3,",
        "notes": ", v. 3,"
      },
      {
        "latin": "emniyette olabiliriz? Frater meus vitam in otio semper aget. ( Terentius ) Erkek",
        "tr": "kardeşim her zaman hayatını boş",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Tempora nostra nunc sunt mala, vitia nostra magna. Quare soror mea uxori tuae litteras scribit? Tyrannus populum stultum e terra vestra ducet. quare",
        "tr": "niçin",
        "analysis": ", adv.,",
        "notes": ", adv.,"
      },
      {
        "latin": "? soror, - oris",
        "tr": "kızkardeş",
        "analysis": ", f.,",
        "notes": ", f.,"
      },
      {
        "latin": "uxor, - oris",
        "tr": "eş",
        "analysis": ", f.,",
        "notes": ", f.,"
      },
      {
        "latin": ", zevce terra, - toprak;",
        "tr": "ülke",
        "analysis": "ae, f.,",
        "notes": "ae, f.,"
      },
      {
        "latin": "Tempora nostra nunc sunt mala, vitia nostra magna.",
        "tr": "Şimdi zamanımız kötü",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Quare soror mea uxori tuae litteras scribit?",
        "tr": "Benim kız kardeşim niçin senin eşine mektup yazıyor",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Tyrannus populum stultum e terra vestra ducet.",
        "tr": "Tiran akılsız halkı sizin ülkenizden götürecek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Catullus Marco Tullio Ciceroni magnas gratias agit. ( Catullus ) Ex meis erroribus hominibus rectum iter demonstrare possum. ( Seneca ) Numquam periculum sine periculo vincemus. ( Publilius Syrus ) Cicero, - onis Cicero gratias agere, (+ dat.),",
        "tr": "teşekkür etmek",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": "error, - oris hata,",
        "tr": "yanılgı",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": "demonstro, - are,",
        "tr": "göstermek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "periculum, - i tehllike numquam asla,",
        "tr": "hiçbir zaman",
        "analysis": ", n.,; , adv.,",
        "notes": ", n.,; , adv.,"
      },
      {
        "latin": "Catullus Marco Tullio Ciceroni magnas gratias agit. ( Catullus ) Catullus, Marcus Tullius",
        "tr": "Cicero’ya teşekkür ediyor",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Ex meis erroribus hominibus rectum iter demonstrare possum. ( Seneca )",
        "tr": "Hatalarımdan hareketle",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Numquam periculum sine periculo vincemus. ( Publilius Syrus ) Tehlikeye",
        "tr": "düşmeden",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "asla tehlikenin",
        "tr": "üstesinden gelmeyeceğiz",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Nova pericula populo Romano exponam sine mora. ( Cicero ) Agamemnon magnas copias e terra Graeca ad Troiam ducet. ( Seneca ) O amici, libertatem perdimus. ( Laberius ) copia, -",
        "tr": "çokluk",
        "analysis": "ae, f.,",
        "notes": "ae, f.,"
      },
      {
        "latin": ", bolluk expono, - ere,",
        "tr": "açıklamak",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "copiae, - arum, pl., askeri birlikler perdo, - ere,",
        "tr": "yok, etmek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Nova pericula populo Romano exponam sine mora. ( Cicero )",
        "tr": "Hiç",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "gecikmeden Roma",
        "tr": "halkına",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "yeni tehlikeleri",
        "tr": "göstereceğim",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Agamemnon magnas copias e terra Graeca ad Troiam ducet. ( Seneca ) Agamemnon,",
        "tr": "büyük",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "askeri birlikleri Yunan",
        "tr": "diyarından Troia’ya götürecek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". O amici, libertatem perdimus. ( Laberius ) Ey dostlar,",
        "tr": "özgürlüğü yok ediyoruz",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Amor laudis homines trahit. ( Cicero ) Inter multas curas laboresque carmina scribere non possum. ( Horatius ) Non vitae, sed scholae discimus. ( Seneca ) laus, laudis",
        "tr": "övgü",
        "analysis": ", f.,",
        "notes": ", f.,"
      },
      {
        "latin": ", methiye traho, - ere,",
        "tr": "çekmek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Amor laudis homines trahit. ( Cicero )",
        "tr": "Övgü aşkı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "cezbeder. Inter multas curas laboresque carmina scribere non possum. ( Horatius ) Pek",
        "tr": "çok endişe ve çalışma arasında şiirler",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "yazamam. Non vitae, sed scholae discimus. ( Seneca )",
        "tr": "Yaşam için değil",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "Metin okurken her fiilin öznesini metindeki isimlerle eşleştirerek okuyunuz."
  },
  {
    "id": "T2_W2_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 2,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 2. Hafta (1. Ders)",
    "title": "İŞARET SIFATLARI VE ZAMİRLERİ 1: HIC, HAEC, HOC",
    "subtitle": "Konuşana Yakın Olanı İşaret Etme ('Bu'), Tam Çekim Tablosu ve Sıfat Olarak Kullanımı",
    "summary": "Bu fasikülde konuşanın yakınında bulunan nesne veya kişileri işaret eden hic, haec, hoc (bu) işaret zamirinin tam çekimini, isimlerle tamlama oluşturma kurallarını öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 2.1.pdf",
    "slideCount": 19,
    "topics": ["İşaret Zamirleri (Pronomina Demonstrativa)", "hic, haec, hoc Çekimi", "Genetivus Singularis: huius", "Dativus Singularis: huic", "Sıfat ve Zamir Ayrımı"],
    "vocab": ["hic", "haec", "hoc", "liber", "totus", "littera", "graecus", "vir", "femina", "semper", "de", "nunc", "et", "enim"],
    "sections": [
      {
        "title": "1. hic, haec, hoc (Bu) Çekim Tablosu",
        "html": "<p><strong>hic, haec, hoc</strong> konuşana yakın olanı ('bu') gösterir. Tekil Genetivus hali her üç cinste de <strong>huius</strong>, Tekil Dativus hali ise <strong>huic</strong> şeklindedir:</p>",
        "calloutType": "rule",
        "calloutTitle": "Pronominal Çekim Kuralı",
        "calloutText": "Tüm işaret zamirlerinde Tekil Genetivus sonu -ius, Tekil Dativus sonu ise -ī / -ic ile biter. Bu kural zamir çekimlerinin (pronominal declinatio) en belirgin ortak özelliğidir.",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>Masculinum (Eril)</th><th>Femininum (Dişil)</th><th>Neutrum (Nötr)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\"><strong>hic</strong></td><td class=\"case-cell-latin\"><strong>haec</strong></td><td class=\"case-cell-latin\"><strong>hoc</strong></td><td>bu</td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\"><strong>huius</strong></td><td class=\"case-cell-latin\"><strong>huius</strong></td><td class=\"case-cell-latin\"><strong>huius</strong></td><td>bunun</td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\"><strong>huic</strong></td><td class=\"case-cell-latin\"><strong>huic</strong></td><td class=\"case-cell-latin\"><strong>huic</strong></td><td>buna</td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\"><strong>hunc</strong></td><td class=\"case-cell-latin\"><strong>hanc</strong></td><td class=\"case-cell-latin\"><strong>hoc</strong></td><td>bunu</td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\"><strong>hōc</strong></td><td class=\"case-cell-latin\"><strong>hāc</strong></td><td class=\"case-cell-latin\"><strong>hōc</strong></td><td>bununla</td></tr>\n      <tr><td><strong>Nom. Pl.</strong></td><td class=\"case-cell-latin\"><strong>hī</strong></td><td class=\"case-cell-latin\"><strong>hae</strong></td><td class=\"case-cell-latin\"><strong>haec</strong></td><td>bunlar</td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\"><strong>hōrum</strong></td><td class=\"case-cell-latin\"><strong>hārum</strong></td><td class=\"case-cell-latin\"><strong>hōrum</strong></td><td>bunların</td></tr>\n      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=\"case-cell-latin\"><strong>hīs</strong></td><td class=\"case-cell-latin\"><strong>hīs</strong></td><td class=\"case-cell-latin\"><strong>hīs</strong></td><td>bunlara / bunlarla</td></tr>\n      <tr><td><strong>Acc. Pl.</strong></td><td class=\"case-cell-latin\"><strong>hōs</strong></td><td class=\"case-cell-latin\"><strong>hās</strong></td><td class=\"case-cell-latin\"><strong>haec</strong></td><td>bunları</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Hic totus liber litteras Romanas semper laudat. Bu",
        "tr": "bütün",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "kitap Roma",
        "tr": "edebiyatını her zaman över",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "illis deabus heri gratias agebant. Bunlar ( bu adamlar )",
        "tr": "dün",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Illud de vitiis istius reginae nunc scribam, et ista poenas dabit.",
        "tr": "Şu kraliçenin kusurları hakkında şimdi",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Virtutem enim illius viri amamus.",
        "tr": "Çünkü",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "hic liber = bu kitap (sıfat kullanımı); hic dicit = bu [adam] söylüyor (zamir kullanımı)."
  },
  {
    "id": "T2_W2_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 2,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 2. Hafta (2. Ders)",
    "title": "DEVLET YÖNETİMİ VE CİVİTAS SENTAKSI",
    "subtitle": "Civitas bellum sine causa gerere non debet; gero, gerere Fiili ve Hukuk Sentaksı",
    "summary": "Bu fasikülde Roma devlet yapısını, cīvitās kavramını, savaş ve barış hukukunu konu alan alıştırma metinlerini ve gerō, gerere fiilinin deyimsel kullanımlarını öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 2.2.pdf",
    "slideCount": 22,
    "topics": ["civitas ve Devlet Sentaksı", "bellum gerere (Savaş Yürütmek)", "propter ve sine Edatları", "Hukuk ve Felsefe Cümleleri", "Bilinmeyen Kelimeler Analizi"],
    "vocab": ["civitas", "gero", "bellum", "causa", "ira", "fortuna", "populus", "otium", "defendo", "laus", "labor", "numquam", "nimis", "pax", "in", "patria", "post", "dum", "ibi", "nihil"],
    "sections": [
      {
        "title": "1. bellum gerere ve Roma Hukuk Dili",
        "html": "<p>Latincede savaş yürütmek ve icra etmek için <strong>bellum gerere</strong> fiil kalıbı kullanılır:</p>\n<ul>\n  <li><span class=\"lat-word\">Cīvitās bellum sine causā bonā aut propter īram gerere nōn dēbet.</span></li>\n  <li><em>Devlet, haklı bir neden olmadıkça veya öfke yüzünden savaş yürütmemelidir / savaşa girmemelidir.</em></li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Deyimsel Kullanım: bellum gerere",
        "calloutText": "gerō, gerere, gessī, gestum fiili taşımak, icra etmek, yönetmek anlamlarına gelir. bellum ile birleştiğinde 'savaşmak / savaş yürütmek' deyimini oluşturur.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Potestne laus ullius terrae esse perpetua? Labor unius numquam poterit has copias vincere.",
        "tr": "Herhangi bir diyarın övgüsü ebedi olabilir mi? Tek bir kişinin çalışması bu birlikleri asla alt edemeyecektir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Potestne laus ullius terrae esse perpetua? Herhangi",
        "tr": "bir ülkenin övgüsü",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ") daimi olabilir mi? Labor unius numquam poterit has copias vincere.",
        "tr": "Bir kişinin çabası",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "bu askeri birlikleri",
        "tr": "hiçbir zaman alt",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Mores istius scriptoris erant nimis mali. nimis / nimium",
        "tr": "çok",
        "analysis": ", adv.,",
        "notes": ", adv.,"
      },
      {
        "latin": "scriptor, - oris",
        "tr": "yazıcı",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": "Mores istius scriptoris erant nimis mali.",
        "tr": "Şu yazarın ahlakı çok kötüydü",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". nimis / nimium",
        "tr": "çok",
        "analysis": ", adv.,",
        "notes": ", adv.,"
      },
      {
        "latin": "Valebitne pax in patria nostra post hanc victoriam? Dum illi ibi remanent, alii nihil agunt, alii discunt.",
        "tr": "Bu zaferden sonra vatanımızda barış hüküm sürecek mi? Onlar orada kalırken, kimileri hiçbir şey yapmıyor, kimileri ise öğreniyor.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Valebitne pax in patria nostra post hanc victoriam? Bu zaferden sonra",
        "tr": "vatanımızda barış güçlenecek",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "mi? Dum illi ibi remanent, alii nihil agunt, alii discunt. Onlar orada",
        "tr": "kalıyorlarken",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "gerere fiili 3. çekimdendir; gerere debet kalıbı zorunluluk bildiren bir tamamlayıcı mastar yapısıdır."
  },
  {
    "id": "T2_W3_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 3,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 3. Hafta (1. Ders)",
    "title": "3. ŞAHIS İŞARET ZAMİRİ: IS, EA, ID",
    "subtitle": "Latincede 3. Şahıs Zamiri ('O, Onlar'), Tam Çekim Tablosu ve Sıfat Kullanımı",
    "summary": "Bu fasikülde Latincede başlıbaşına bir 3. şahıs zamiri bulunmadığından onun yerine kullanılan is, ea, id (o / onlar) zamirini, tam çekimini ve iyelik hallerini (eius, eōrum) öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 3.1.pdf",
    "slideCount": 26,
    "topics": ["is, ea, id Çekimi", "Tekil Genetivus: eius (Onun)", "Çoğul Genetivus: eorum / earum (Onların)", "3. Şahıs Zamiri Görevi", "İşaret Sıfatı Görevi"],
    "vocab": ["is", "ea", "id", "eius", "eorum", "earum", "video", "audio", "amicus", "hic", "in", "ad", "cum", "propter", "ego", "facio", "tu", "facies"],
    "sections": [
      {
        "title": "1. is, ea, id Çekim Tablosu",
        "html": "<p><strong>is, ea, id</strong> hem 'o' zamiri hem de 'o / şu' sıfatı olarak kullanılır. Tekil Genetivus <strong>eius</strong> (onun), Çoğul Genetivus eril/nötr <strong>eōrum</strong>, dişil <strong>eārum</strong> (onların) şeklindedir:</p>",
        "calloutType": "rule",
        "calloutTitle": "eius vs suus Ayrımı",
        "calloutText": "eius = özne dışındaki başka birinin mülkiyeti ('onun'); suus, sua, suum = cümlenin öznesinin bizzat kendi mülkiyeti ('kendi'). Bu ayrım Latincenin en hassas kurallarındandır!",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>Masculinum</th><th>Femininum</th><th>Neutrum</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\"><strong>is</strong></td><td class=\"case-cell-latin\"><strong>ea</strong></td><td class=\"case-cell-latin\"><strong>id</strong></td><td>o</td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\"><strong>eius</strong></td><td class=\"case-cell-latin\"><strong>eius</strong></td><td class=\"case-cell-latin\"><strong>eius</strong></td><td>onun</td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\"><strong>eī</strong></td><td class=\"case-cell-latin\"><strong>eī</strong></td><td class=\"case-cell-latin\"><strong>eī</strong></td><td>ona</td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\"><strong>eum</strong></td><td class=\"case-cell-latin\"><strong>eam</strong></td><td class=\"case-cell-latin\"><strong>id</strong></td><td>onu</td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\"><strong>eō</strong></td><td class=\"case-cell-latin\"><strong>eā</strong></td><td class=\"case-cell-latin\"><strong>eō</strong></td><td>onunla</td></tr>\n      <tr><td><strong>Nom. Pl.</strong></td><td class=\"case-cell-latin\"><strong>eī / iī</strong></td><td class=\"case-cell-latin\"><strong>eae</strong></td><td class=\"case-cell-latin\"><strong>ea</strong></td><td>onlar</td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\"><strong>eōrum</strong></td><td class=\"case-cell-latin\"><strong>eārum</strong></td><td class=\"case-cell-latin\"><strong>eōrum</strong></td><td>onların</td></tr>\n      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=\"case-cell-latin\"><strong>eīs / iīs</strong></td><td class=\"case-cell-latin\"><strong>eīs / iīs</strong></td><td class=\"case-cell-latin\"><strong>eīs / iīs</strong></td><td>onlara / onlarla</td></tr>\n      <tr><td><strong>Acc. Pl.</strong></td><td class=\"case-cell-latin\"><strong>eōs</strong></td><td class=\"case-cell-latin\"><strong>eās</strong></td><td class=\"case-cell-latin\"><strong>ea</strong></td><td>onları</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "? Hic illam virginem in matrimonium ducet. ( Terentius ) Bu",
        "tr": "adam",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Eum ad eam cum alio agricola heri mittebant. Propter amicitiam ego hoc facio. Quid tu facies, mi amice? Vosne easdem litteras ad eum mittere cras audebitis?",
        "tr": "Onu dün başka bir çiftçiyle birlikte kadına gönderiyorlardı. Dostluk yüzünden ben bunu yapıyorum. Sen ne yapacaksın ey dostum? Siz yarın ona aynı mektubu göndermeye cesaret edebilecek misiniz?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Eum ad eam cum alio agricola heri mittebant.",
        "tr": "Onu dün başka bir çiftçiyle birlikte kadına gönderiyorlardı. Dostluk yüzünden ben bunu yapıyorum. Sen ne yapacaksın ey dostum? Siz yarın ona aynı mektubu göndermeye cesaret edebilecek misiniz?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ") ona (o",
        "tr": "kśųınś",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "? Propter amicitiam ego hoc facio. Quid tu facies, mi amice? Dostluk",
        "tr": "yüzünden",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ", ey dostum? Vosne easdem litteras ad eum mittere cras audebitis?",
        "tr": "Aynı mŷktuplśrı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "ona (o adama )",
        "tr": "yśrın",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "siz mi",
        "tr": "göndermeye cüret",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "eius tekildir (onun); eorum eril/nötr çoğuldur (onların); earum dişil çoğuldur (onların)."
  },
  {
    "id": "T2_W3_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 3,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 3. Hafta (2. Ders)",
    "title": "GEÇMİŞ ZAMANLAR SİSTEMİ (TEMPORA PERFECTA)",
    "subtitle": "Perfectum, Plusquamperfectum ve Futurum Exactum; Geçmiş Zaman Gövdesi ve Şahıs Ekleri",
    "summary": "Bu fasikülde Latince fiil sisteminin ikinci yarısını oluşturan Geçmiş Zamanlar Sistemini (Perfectum Sistemi), fiilin 3. temel parçasından geçmiş zaman gövdesinin bulunmasını ve üç geçmiş zamanın etken çekimlerini öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "60 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 3.2.pdf",
    "slideCount": 40,
    "topics": ["Geçmiş Zaman Gövdesi", "Perfectum Indicativus Activi", "Plusquamperfectum Activi (-eram...)", "Futurum Exactum Activi (-ero...)", "Özel Şahıs Ekleri (-ī, -istī, -it...)"],
    "vocab": ["laudavi", "monui", "rexi", "audivi", "cepi", "feci", "fui", "potui", "solus", "do", "poena", "sed", "periculum", "semper", "enim", "de", "et", "orbis", "nullus", "locus", "in", "terra", "non", "solum", "iste", "magister", "etiam", "ratio"],
    "sections": [
      {
        "title": "1. Perfectum Zamanı Şahıs Ekleri (Evrensel)",
        "html": "<p>Latincede <strong>Perfectum</strong> zamanının etken şahıs ekleri diğer zamanlardan TAMAMEN FARKLIDIR ve tüm fiiller için evrenseldir:</p>\n<ul>\n  <li>1. Tekil: <strong>-ī</strong> (ben ...-dim)</li>\n  <li>2. Tekil: <strong>-istī</strong> (sen ...-din)</li>\n  <li>3. Tekil: <strong>-it</strong> (o ...-di)</li>\n  <li>1. Çoğul: <strong>-imus</strong> (biz ...-dik)</li>\n  <li>2. Çoğul: <strong>-istis</strong> (siz ...-diniz)</li>\n  <li>3. Çoğul: <strong>-ērunt / -ēre</strong> (onlar ...-diler)</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Geçmiş Zaman Gövdesinin Bulunması",
        "calloutText": "Sözlükte 3. sırada verilen Perfectum 1. tekil şahıs biçiminden sonundaki -ī ekinin atılmasıyla geçmiş zaman gövdesi bulunur: laudāv-ī > laudāv-; monu-ī > monu-; rēx-ī > rēx-; audīv-ī > audīv-; fū-ī > fu-.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Solus hunc iuvare potes. ( Terentius ) Huic consilio palmam do. ( Terentius ) palma, -",
        "tr": "avuç",
        "analysis": "ae, f.,",
        "notes": "ae, f.,"
      },
      {
        "latin": ", aya; hurma",
        "tr": "ağacı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "; hurma",
        "tr": "dalından çelenk",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "palmam zafer",
        "tr": "çelengi vermek",
        "analysis": "dare:",
        "notes": "dare:"
      },
      {
        "latin": "Solus hunc iuvare potes. ( Terentius ) YųlnǗz sen (=",
        "tr": "bir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "tek sen ) buna ( bu adama ) yųrƋǗm edebilirsin Huic consilio palmam do. ( Terentius ) Bu",
        "tr": "ƋüşünƁƏyƏ",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Poena istius unius hunc morbum civitatis relevabit, sed periculum semper remanebit. ( Cicero ) Hi enim de exitio huius civitatis et totius orbis terrarum cogitant. ( Cicero ) relevo, relevare, relevavi",
        "tr": "yükseltmek",
        "analysis": ", v.,",
        "notes": ", v.,"
      },
      {
        "latin": ", orbis, orbis",
        "tr": "çember",
        "analysis": ", m.,",
        "notes": ", m.,"
      },
      {
        "latin": ", daire, halka, disk orbis terrarum",
        "tr": "dünya",
        "analysis": ":",
        "notes": ":"
      },
      {
        "latin": "Poena istius unius hunc morbum civitatis relevabit, sed periculum semper remanebit. ( Cicero )",
        "tr": "Bir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "ƁƏzųsǗ devletin bu ǋųstųlǗǃǗnǗ hafifletecek",
        "tr": ", ama tehlike",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Hi enim de exitio huius civitatis et totius orbis terrarum cogitant. ( Cicero ) Bunlar bu devletin",
        "tr": "ve tüm ƋünyųnǗn yǗkǗlǗşǗ",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Est nullus locus utri homini in hac terra. ( Martialis ) Non solum eventus hoc docet, - iste est magister stultorum! – sed etiam ratio. ( Livius ) non solum... sed etiam",
        "tr": "yalnızca",
        "analysis": ":",
        "notes": ":"
      },
      {
        "latin": "zamanda eventus herhangi",
        "tr": "bir",
        "analysis": ":",
        "notes": ":"
      },
      {
        "latin": "eylemin sonucu,",
        "tr": "akıbet",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Est nullus locus utri homini in hac terra. ( Martialis )",
        "tr": "İkǎ",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "insandan birinin bu",
        "tr": "ülkede hiçbir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Non solum eventus hoc docet, - iste est magister stultorum! – sed etiam ratio. ( Livius ) YųlnǗzƁų ųkǗƀƏt",
        "tr": "öǃrƏtmƏz",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "! - ųynǗ zamanda ųkǗl",
        "tr": "da öǃrƏtǎr",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "Plusquamperfectum eki -eram, -eras, -erat; Futurum Exactum eki ise -ero, -eris, -erit şeklindedir."
  },
  {
    "id": "T2_W4_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 4,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 4. Hafta (1. Ders)",
    "title": "DÖNÜŞLÜ ZAMİRLER (PRONOMINA REFLEXIVA)",
    "subtitle": "sui, sibi, se, se; 1. ve 2. Şahıs Dönüşlülüğü ve Kendim/Kendin/Kendisi Sentaksı",
    "summary": "Bu fasikülde eylemin öznenin kendisine döndüğü durumlarda kullanılan Dönüşlü Zamirleri (reflexiva), 1. ve 2. şahıslarda şahıs zamirlerinin dönüşlü kullanılmasını ve 3. şahıs özel dönüşlü zamirini (sui, sibi, se, se) öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 4.1.pdf",
    "slideCount": 24,
    "topics": ["Dönüşlü Zamirler (Reflexiva)", "1. Şahıs Dönüşlülük (me, mihi)", "2. Şahıs Dönüşlülük (te, tibi)", "3. Şahıs Dönüşlü Zamiri: sui, sibi, se, se", "Örnek Cümleler"],
    "vocab": ["se", "sibi", "sui", "voluptas", "adulescentia", "scribo", "cogito", "servo", "de", "ad", "forum", "volo", "semper", "vos", "tum", "non", "autem", "nos", "cum", "propter", "saepe"],
    "sections": [
      {
        "title": "1. 3. Şahıs Dönüşlü Zamiri: suī, sibī, sē, sē",
        "html": "<p>3. şahıs dönüşlü zamiri öznenin kendisini gösterir; özneye hitap etmediği için <strong>Nominativus hali YOKTUR</strong>. Tekil ve çoğul çekimi aynıdır:</p>\n<ul>\n  <li>Genetivus: <strong>suī</strong> (kendisinin / kendilerinin)</li>\n  <li>Dativus: <strong>sibī</strong> (kendisine / kendilerine)</li>\n  <li>Accusativus: <strong>sē / sēsē</strong> (kendisini / kendilerini)</li>\n  <li>Ablativus: <strong>sē / sēsē</strong> (kendisiyle / kendileriyle)</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Dönüşlülük Kuralı",
        "calloutText": "Fēmina dē sē cōgitat = Kadın kendisi hakkında düşünüyor (sē = özne olan kadın).\nFēmina dē eā cōgitat = Kadın onun (başka bir kadının) hakkında düşünüyor (eā = başka biri).",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "de se cogitabat.",
        "tr": "Kadın kendisi hakkında düşünüyordu",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Viri de se cogitabant. Erkekler kendileri",
        "tr": "hakkında düşünüyorlardı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Venerunt mecum ad forum. Benimle birlikte forum’a",
        "tr": "geldiler",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Volo vivere vobiscum. Sizinle birlikte",
        "tr": "yaşamak",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "istiyorum. Se semper laudaverant.",
        "tr": "Her zaman",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Cato heri se occidit. Cato",
        "tr": "dün",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Vos nobis de voluptatibus adulescentiae tum scripsistis. Siz",
        "tr": "o zaman bize gençliğin",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Rationes alterius filiae heri non fuerunt eaedem.",
        "tr": "Diğer kızın",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "( iki",
        "tr": "kızdan diğerinin",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "( erkek",
        "tr": "ya da kadın",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Illi autem ad nos cum medica eius nuper venerunt.",
        "tr": "Ancak",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "hekimiyle birlikte bize",
        "tr": "geldiler",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Illi adulescentes ad nos propter amicitiam saepe veniebant. O",
        "tr": "gençler",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "sē cōgitat (kendisini düşünüyor); sibi dicit (kendi kendine söylüyor)."
  },
  {
    "id": "T2_W4_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 4,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 4. Hafta (2. Ders)",
    "title": "1. VE 2. GRUP SIFATLAR VE UYUM KURALLARI",
    "subtitle": "-us, -a, -um ve -er, -era, -erum Sıfatları; Üç Bitimlilik ve İsim-Sıfat Uyumu (Congruentia)",
    "summary": "Bu fasikülde 1. ve 2. sınıf isim çekimlerine paralel olarak çekimlenen üç bitimli sıfatları, eril -us ve -er bitimlerini, dişil -a ve nötr -um biçimlerini ve isim-sıfat uyumunun sentaks prensiplerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 4.2.pdf",
    "slideCount": 19,
    "topics": ["1. ve 2. Grup Sıfatlar", "Üç Bitimli Sıfatlar (-us, -a, -um)", "-er Bitimli Sıfatlar (pulcher, liber)", "Sıfat-İsim Uyumu (Casus, Numerus, Genus)", "Alıştırmalar"],
    "vocab": ["magnus", "bonus", "malus", "pulcher", "miser", "liber", "clarus", "verus"],
    "sections": [
      {
        "title": "1. Üç Bitimli Sıfatların Çekim Sistemi",
        "html": "<p>1. ve 2. grup sıfatlar üç cinste de ayrı bir bitime sahiptir:</p>\n<ul>\n  <li><strong>Eril (Masculinum):</strong> 2. grup isimler gibi çekimlenir (-us / -er, -ī): <span class=\"lat-word\">bonus</span>, <span class=\"lat-word\">bonī</span>.</li>\n  <li><strong>Dişil (Femininum):</strong> 1. grup isimler gibi çekimlenir (-a, -ae): <span class=\"lat-word\">bona</span>, <span class=\"lat-word\">bonae</span>.</li>\n  <li><strong>Nötr (Neutrum):</strong> 2. grup nötr isimler gibi çekimlenir (-um, -ī): <span class=\"lat-word\">bonum</span>, <span class=\"lat-word\">bonī</span>.</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Uyum Kuralı",
        "calloutText": "Sıfat, nitelediği ismin cinsine, sayısına ve haline eksiksiz uyar: agricola bonus (iyi çiftçi - agricola eril olduğu için bonus erildir!).",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "agricola dişil gibi görünse de meslek adı olduğu için erildir; bu yüzden yanına bona değil bonus gelir!"
  },
  {
    "id": "T2_W5_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 5,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 5. Hafta (1. Ders)",
    "title": "3. GRUP SIFATLAR: TEK BİTİMLİ VE DÜZENSİZ SIFATLAR",
    "subtitle": "vetus (Gen. veteris), Tek Bitimliler (audāx, ingēns) ve İki Bitimli Sıfatlar",
    "summary": "Bu fasikülde 3. çekim isimlerin kurallarına göre çekimlenen 3. grup sıfatları, tek bitimli (Nom. tek harf: vetus, audax, potens) ve düzensiz sıfatları, tekil ablativus ve çoğul takılarını öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 5.1.pdf",
    "slideCount": 19,
    "topics": ["3. Grup Sıfatlar", "vetus, veteris Çekimi", "Tek Bitimli Sıfatlar (audax, ingens)", "Ablativus Singularis -ī ve -e Ayrımı", "Çoğul -ia ve -ium Kuralları"],
    "vocab": ["vetus", "audax", "ingens", "potens", "sapiens", "acer", "fortis", "dulcis", "in", "post", "sine", "femina", "dum", "bene", "via", "non", "nemo", "diu", "nam", "rex", "malus", "enim", "numquam", "et", "ante", "hic", "de", "ille", "alius", "alter", "solum", "sed", "etiam", "officium", "semper", "cum", "incipio"],
    "sections": [
      {
        "title": "1. vetus, veteris (Eski, Kadim) Çekimi",
        "html": "<p><strong>vetus</strong> düzensiz bir 3. grup sıfattır; sessiz gövdeli isimler gibi Tekil Ablativus'ta <strong>-e</strong>, Çoğul Nötr Nom/Acc'de <strong>-a</strong> alır:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>Eril / Dişil Tekil</th><th>Nötr Tekil</th><th>Eril / Dişil Çoğul</th><th>Nötr Çoğul</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom.</strong></td><td class=\"case-cell-latin\">vetus</td><td class=\"case-cell-latin\">vetus</td><td class=\"case-cell-latin\">veter-<strong>ēs</strong></td><td class=\"case-cell-latin\">veter-<strong>a</strong></td></tr>\n      <tr><td><strong>Gen.</strong></td><td class=\"case-cell-latin\">veter-<strong>is</strong></td><td class=\"case-cell-latin\">veter-<strong>is</strong></td><td class=\"case-cell-latin\">veter-<strong>um</strong></td><td class=\"case-cell-latin\">veter-<strong>um</strong></td></tr>\n      <tr><td><strong>Dat.</strong></td><td class=\"case-cell-latin\">veter-<strong>ī</strong></td><td class=\"case-cell-latin\">veter-<strong>ī</strong></td><td class=\"case-cell-latin\">veter-<strong>ibus</strong></td><td class=\"case-cell-latin\">veter-<strong>ibus</strong></td></tr>\n      <tr><td><strong>Acc.</strong></td><td class=\"case-cell-latin\">veter-<strong>em</strong></td><td class=\"case-cell-latin\">vetus</td><td class=\"case-cell-latin\">veter-<strong>ēs</strong></td><td class=\"case-cell-latin\">veter-<strong>a</strong></td></tr>\n      <tr><td><strong>Abl.</strong></td><td class=\"case-cell-latin\">veter-<strong>e</strong></td><td class=\"case-cell-latin\">veter-<strong>e</strong></td><td class=\"case-cell-latin\">veter-<strong>ibus</strong></td><td class=\"case-cell-latin\">veter-<strong>ibus</strong></td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Eundem timorem in isto consule sensimus.",
        "tr": "Aynı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "hissettik. Post paucas horas Caesar Asiam cepit.",
        "tr": "Birkaç",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "saat sonra Caesar",
        "tr": "Asya’yı zapetti",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Potuistisne bonam vitam sine ulla libertate agere? Herhangi",
        "tr": "bir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "olmadan iyi",
        "tr": "bir yaşam sürebildiniz",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "mi? Illa femina beata sola magnam cupiditatem pacis sensit.",
        "tr": "Bir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "tek o kutlu",
        "tr": "kadın barış için büyük bir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "arzu duydu. Vixit, dum vixit, bene. ( Terentius )",
        "tr": "Yaşarken",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ", sert, keskin;",
        "tr": "haşin",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "In hac via Cicero medicum eius vidit, non suum. Cicero bu yolda",
        "tr": "onun",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Nemo filiam acerbam consulis ipsius diu diligere potuit. Uzunca",
        "tr": "bir süre",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "kimse bizzat",
        "tr": "konsülün haşin kızını sevemedi",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ille bonam senectutem habuit, nam bene vixerat. O",
        "tr": "adam",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Rex malus enim me ipsum capere numquam potuit.",
        "tr": "Doğrusu kötü",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "kral bizzat beni asla eline",
        "tr": "geçiremedi",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Di animos creant et eos in corpora hominum e caelo mittunt.",
        "tr": "Tanrılar ruhları yaratırlar ve gökyüzünden insanların",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Fortes viri et feminae ante aetatem nostram vivebant. Cesur erkekler",
        "tr": "ve kadınlar bizim zamanımızdan önce yaşıyorlardı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Hic de senectute scribebat, ille de amore; et alius de libertate. Alter Graecus remedium huius morbi inveniet.",
        "tr": "Bu adam yaşlılık hakkında yazıyordu, şu adam aşk hakkında; bir başkası ise özgürlük hakkında. Diğer Yunanlı bu hastalığın devasını bulacaktır.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Hic de senectute scribebat, ille de amore; et alius de libertate. Bu (",
        "tr": "adam",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ", o (",
        "tr": "Beni övmemelisin / Beni övmek zorunda değilsin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Alter Graecus remedium huius morbi inveniet.",
        "tr": "Diğer Yunanlı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Carmina illius scriptoris sunt plena non solum veritatis sed etiam virtutis. Cupiditatem pecuniae gloriaeque fugite! ( Cicero )",
        "tr": "Şu yazarın şiirleri sadece hakikatle değil, aynı zamanda erdemle de doludur. Para ve şöhret hırsından kaçınınız! (Cicero)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Carmina illius scriptoris sunt plena non solum veritatis sed etiam virtutis. O",
        "tr": "yazarın şarkıları yalnızca",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "zamanda erdemle de",
        "tr": "doludur",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Cupiditatem pecuniae gloriaeque fugite! ( Cicero ) Para",
        "tr": "ve şöhret",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Officium meum faciam. ( Terentius )",
        "tr": "İşimi yapacağım",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Semper magno cum timore incipio dicere. ( Cicero )",
        "tr": "Her zaman büyük bir",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "Standart 3. grup sıfatlar tekil ablativus'ta -ī alırken, vetus istisnai olarak -e alır."
  },
  {
    "id": "T2_W5_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 5,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 5. Hafta (2. Ders)",
    "title": "CİCERO DOSTLUK ÜZERİNE (DE AMICITIA) METİN VE SENTAKS ÇALIŞMASI",
    "subtitle": "Nihil cum amicitia possum comparare; comparo, malo Fiilleri ve Felsefi Metin Tahlili",
    "summary": "Bu fasikülde Cicero'nun ünlü De Amicitia (Dostluk Üzerine) eserinden seçilmiş metin parçalarını, comparō fiilinin cum edatıyla kullanımını ve mālō düzensiz fiilinin sentaksını inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "45 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 5.2.pdf",
    "slideCount": 3,
    "topics": ["Cicero: De Amicitia", "Nihil cum amicitia comparare", "malo, malle (Yeğlemek)", "Karşılaştırma Yapıları (melius)", "Sentaks Tahlili"],
    "vocab": ["comparo", "malo", "amicitia", "melius", "corpus", "sanus", "deus"],
    "sections": [
      {
        "title": "1. Cicero'nun Dostluk Felsefesi ve Cümle Çözümlemesi",
        "html": "<p><em>Nihil cum amīcitiā possum comparāre; dī hominibus nihil melius dant. Pecūniam aliī mālunt; aliī, corpora sāna...</em></p>\n<p><strong>Çeviri:</strong> Hiçbir şeyi dostlukla kıyaslayamam; tanrılar insanlara daha iyi hiçbir şey vermezler. Kimi parayı yeğler, kimi sağlıklı bedenleri...</p>",
        "calloutType": "info",
        "calloutTitle": "Sentaks İpucu: comparo + cum",
        "calloutText": "comparō fiili bir şeyi başka bir şeyle karşılaştırırken 'cum + ablativus' yapısını alır: comparare cum amicitia (dostluk ile kıyaslamak).",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "aliī ... aliī kalıbı 'kimileri ... kimileri ise...' anlamına gelen çok yaygın bir Latin tezat kalıbıdır."
  },
  {
    "id": "T2_W6_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 6,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 6. Hafta (1. Ders)",
    "title": "DÜZENSİZ FİİLLER VE KIYASLAMA: MALO, NOLO, VOLO",
    "subtitle": "volō, nōlō, mālō Çekimleri; Kıyaslama Sıfatları ve Felsefe Cümleleri",
    "summary": "Bu fasikülde istemek (volō), istememek (nōlō) ve yeğlemek (mālō) düzensiz fiillerinin şimdiki zaman çekimlerini ve bu fiillerin nesne veya mastar alarak cümle oluşturma biçimlerini öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 6.1.pdf",
    "slideCount": 18,
    "topics": ["volo, velle (İstemek)", "nolo, nolle (İstememek)", "malo, malle (Yeğlemek)", "Düzensiz Praesens Çekimleri", "Felsefi Sentaks"],
    "vocab": ["volo", "nolo", "malo", "amicitia", "comparo", "melius", "pecunia"],
    "sections": [
      {
        "title": "1. volō, nōlō, mālō Praesens Çekim Tablosu",
        "html": "<p>Bu üç fiil birbiriyle doğrudan akrabadır: nōlō &lt; ne-volō; mālō &lt; magis-volō:</p>",
        "calloutType": "rule",
        "calloutTitle": "2. Tekil Şahıs İstisnası",
        "calloutText": "volō fiilinin 2. tekil şahsı 'vīs' şeklindedir (vīs = istiyorsun). Soru ekiyle: vīsne? (İstiyor musun?).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs</th><th>volō (istiyorum)</th><th>nōlō (istemiyorum)</th><th>mālō (yeğliyorum)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg.</strong></td><td class=\"case-cell-latin\"><strong>volō</strong></td><td class=\"case-cell-latin\"><strong>nōlō</strong></td><td class=\"case-cell-latin\"><strong>mālō</strong></td></tr>\n      <tr><td><strong>2. Sg.</strong></td><td class=\"case-cell-latin\"><strong>vīs</strong></td><td class=\"case-cell-latin\"><strong>nōn vīs</strong></td><td class=\"case-cell-latin\"><strong>māvīs</strong></td></tr>\n      <tr><td><strong>3. Sg.</strong></td><td class=\"case-cell-latin\"><strong>vult</strong></td><td class=\"case-cell-latin\"><strong>nōn vult</strong></td><td class=\"case-cell-latin\"><strong>māvult</strong></td></tr>\n      <tr><td><strong>1. Pl.</strong></td><td class=\"case-cell-latin\"><strong>volumus</strong></td><td class=\"case-cell-latin\"><strong>nōlumus</strong></td><td class=\"case-cell-latin\"><strong>mālumus</strong></td></tr>\n      <tr><td><strong>2. Pl.</strong></td><td class=\"case-cell-latin\"><strong>vultis</strong></td><td class=\"case-cell-latin\"><strong>nōn vultis</strong></td><td class=\"case-cell-latin\"><strong>māvultis</strong></td></tr>\n      <tr><td><strong>3. Pl.</strong></td><td class=\"case-cell-latin\"><strong>volunt</strong></td><td class=\"case-cell-latin\"><strong>nōlunt</strong></td><td class=\"case-cell-latin\"><strong>mālunt</strong></td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
    ],
    "studyTips": "mālunt kelimesi mālō fiilinin 3. çoğul şahsıdır: Pecūniam aliī mālunt (Kimileri parayı yeğler)."
  },
  {
    "id": "T2_W6_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 6,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 6. Hafta (2. Ders)",
    "title": "5. GRUP İSİMLER (DECLINATIO V: -ES, -EI)",
    "subtitle": "rēs ve diēs Çekimleri; rēs pūblica Kavramı ve Tam Çekim Tabloları",
    "summary": "Bu fasikülde Tekil Nominativus hali -ēs, Tekil Genetivus hali -eī ile biten 5. grup isimleri, rēs (şey, olay) ve diēs (gün) sözcüklerinin çekimlerini ve Latincedeki ünlü deyimlerini inceleyeceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 6.2.pdf",
    "slideCount": 20,
    "topics": ["5. Grup İsimler (Declinatio V)", "res, rei f. Çekimi", "dies, diei m./f. Çekimi", "res publica (Devlet)", "fides ve spes", "Cümle Çözümlemeleri"],
    "vocab": ["res", "dies", "fides", "spes", "acies", "facies", "publicus", "post", "et", "nemo", "sed", "quisque", "ante", "cum"],
    "sections": [
      {
        "title": "1. 5. Grup İsimler Tablosu (rēs ve diēs)",
        "html": "<p>5. gruptaki isimlerin tamamı (diēs hariç) <strong>Dişildir (Femininum)</strong>:</p>",
        "calloutType": "info",
        "calloutTitle": "5. Çekim Kuralı",
        "calloutText": "5. çekimde yalnızca rēs ve diēs çoğulda tam çekim tablosuna sahiptir; fidēs (sadakat) ve spēs (umut) gibi soyut isimlerin çoğul biçimleri neredeyse hiç kullanılmaz.",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>rēs, reī f. (şey, mesele)</th><th>diēs, diēī m./f. (gün)</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>ēs</strong></td><td class=\"case-cell-latin\">di-<strong>ēs</strong></td><td>şey / gün</td></tr>\n      <tr><td><strong>Gen. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>eī</strong></td><td class=\"case-cell-latin\">di-<strong>ēī</strong></td><td>şeyin / günün</td></tr>\n      <tr><td><strong>Dat. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>eī</strong></td><td class=\"case-cell-latin\">di-<strong>ēī</strong></td><td>şeye / güne</td></tr>\n      <tr><td><strong>Acc. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>em</strong></td><td class=\"case-cell-latin\">di-<strong>em</strong></td><td>şeyi / günü</td></tr>\n      <tr><td><strong>Abl. Sg.</strong></td><td class=\"case-cell-latin\">r-<strong>ē</strong></td><td class=\"case-cell-latin\">di-<strong>ē</strong></td><td>şeyle / günde</td></tr>\n      <tr><td><strong>Nom/Acc. Pl.</strong></td><td class=\"case-cell-latin\">r-<strong>ēs</strong></td><td class=\"case-cell-latin\">di-<strong>ēs</strong></td><td>şeyler / günler</td></tr>\n      <tr><td><strong>Gen. Pl.</strong></td><td class=\"case-cell-latin\">r-<strong>ērum</strong></td><td class=\"case-cell-latin\">di-<strong>ērum</strong></td><td>şeylerin / günlerin</td></tr>\n      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=\"case-cell-latin\">r-<strong>ēbus</strong></td><td class=\"case-cell-latin\">di-<strong>ēbus</strong></td><td>şeylere / günlerde</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Cornua cervum a periculis defendunt. Boynuzlar",
        "tr": "geyiği",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "tehlikelerden korurlar. Demosthenes multos versus uno spiritu pronuntiabat. Demosthenes pek",
        "tr": "çok",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "dizeyi tek",
        "tr": "bir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Magnam partem illarum urbium post multos annos vi et consilio capiebat. O kentlerin",
        "tr": "büyük bir kısmını",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "planla ele",
        "tr": "geçiriyordu",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Nemo vitia sua videt, sed quisque illa alterius. Kimse",
        "tr": "kendi kusularını görmez, ama başkasının kusurlarını görür",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ante Caesaris ipsius oculos trans viam cucurrimus et cum amicis fugimus. Bizzat",
        "tr": "Caesarın gözleri önünde",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "rēs pūblica = kamuya ait mesele, cumhuriyet, devlet anlamına gelen iki kelimelik bir tamlamadır."
  },
  {
    "id": "T2_W7_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 7,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 7. Hafta (1. Ders)",
    "title": "LATİN SAYI SİSTEMİ 1: SAYMA SAYILARI (CARDINALIA)",
    "subtitle": "Roma Rakamları, 1-1000 Arası Sayma Sayıları; ūnus, duo, trēs Çekimleri",
    "summary": "Bu fasikülde Roma rakamlarının yazılış sistemini, Cardinalia (sayma sayı sıfatları) yapısını ve Latincede çekimli olan ilk üç sayının (ūnus, duo, trēs) çekim tablolarını öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 7.1.pdf",
    "slideCount": 16,
    "topics": ["Roma Rakamları (I, V, X, L, C, D, M)", "Sayma Sayıları (Cardinalia)", "unus, una, unum Çekimi", "duo, duae, duo Çekimi", "tres, tria Çekimi", "100 ve 1000 Sayıları (centum, mille)"],
    "vocab": ["unus", "duo", "tres", "quattuor", "quinque", "decem", "centum", "mille"],
    "sections": [
      {
        "title": "1. Çekimli Sayılar: duo (iki) ve trēs (üç)",
        "html": "<p>Latincede 4'ten 100'e kadar olan sayılar çekimsizdir (quattuor, quīnque, decem). Yalnızca <strong>ūnus (1), duo (2), trēs (3)</strong> ve binin çoğulu olan <strong>mīlia (binler)</strong> çekimlenir:</p>",
        "calloutType": "rule",
        "calloutTitle": "mille vs milia Ayrımı",
        "calloutText": "mīlle tekildir ve çekimsiz bir sıfattır: mīlle mīlitēs (bin asker).\nmīlia çoğuldur, 3. çekim nötr bir isimdir ve ardından genetivus alır: tria mīlia mīlitum (üç bin asker, kelimesi kelimesine: askerlerin üç bini).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>duo (Eril)</th><th>duae (Dişil)</th><th>duo (Nötr)</th><th>trēs (Eril/Dişil)</th><th>tria (Nötr)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nom.</strong></td><td class=\"case-cell-latin\">duo</td><td class=\"case-cell-latin\">duae</td><td class=\"case-cell-latin\">duo</td><td class=\"case-cell-latin\">trēs</td><td class=\"case-cell-latin\">tria</td></tr>\n      <tr><td><strong>Gen.</strong></td><td class=\"case-cell-latin\">duōrum</td><td class=\"case-cell-latin\">duārum</td><td class=\"case-cell-latin\">duōrum</td><td class=\"case-cell-latin\">trium</td><td class=\"case-cell-latin\">trium</td></tr>\n      <tr><td><strong>Dat.</strong></td><td class=\"case-cell-latin\">duōbus</td><td class=\"case-cell-latin\">duābus</td><td class=\"case-cell-latin\">duōbus</td><td class=\"case-cell-latin\">tribus</td><td class=\"case-cell-latin\">tribus</td></tr>\n      <tr><td><strong>Acc.</strong></td><td class=\"case-cell-latin\">duōs / duo</td><td class=\"case-cell-latin\">duās</td><td class=\"case-cell-latin\">duo</td><td class=\"case-cell-latin\">trēs</td><td class=\"case-cell-latin\">tria</td></tr>\n      <tr><td><strong>Abl.</strong></td><td class=\"case-cell-latin\">duōbus</td><td class=\"case-cell-latin\">duābus</td><td class=\"case-cell-latin\">duōbus</td><td class=\"case-cell-latin\">tribus</td><td class=\"case-cell-latin\">tribus</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
    ],
    "studyTips": "Roma rakamlarında soldaki küçük sayı çıkarılır (IV = 4, IX = 9), sağdaki küçük sayı toplanır (VI = 6, XI = 11)."
  },
  {
    "id": "T2_W7_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 7,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 7. Hafta (2. Ders)",
    "title": "LATİN SAYI SİSTEMİ 2: SIRA VE ÜLEŞTİRME SAYILARI",
    "subtitle": "Ordinalia (prīmus, secundus...), Distributiva (singulī, bīnī...) ve Sayı Zarfları (semel, bis, ter)",
    "summary": "Bu fasikülde sıra sayı sıfatlarını (Ordinalia), 'kaçar kaçar' sorusunu yanıtlayan üleştirme sayılarını (Distributiva) ve eylemin kaç kez yapıldığını bildiren sayı zarflarını (Adverbia Numeralia) öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 7.2.pdf",
    "slideCount": 26,
    "topics": ["Sıra Sayıları (Ordinalia)", "Üleştirme Sayıları (Distributiva: singuli, bini...)", "Sayı Zarfları (semel, bis, ter...)", "Roma Takvimi ve Sayı Sentaksı"],
    "vocab": ["primus", "secundus", "tertius", "singuli", "bini", "trini", "semel", "bis", "ter"],
    "sections": [
      {
        "title": "1. Sıra ve Üleştirme Sayıları Karşılaştırma Tablosu",
        "html": "<p>Latincede sayılar işlevlerine göre 4 ana gruba ayrılır:</p>\n<ol>\n  <li><strong>Sayma Sayıları (Cardinalia):</strong> Kaç? sorusuna yanıt verir (ūnus, duo, trēs).</li>\n  <li><strong>Sıra Sayıları (Ordinalia):</strong> Kaçıncı? sorusuna yanıt verir; 1. ve 2. sınıf sıfatlar gibi çekimlenir: <span class=\"lat-word\">prīmus</span> (birinci), <span class=\"lat-word\">secundus</span> (ikinci), <span class=\"lat-word\">tertius</span> (üçüncü).</li>\n  <li><strong>Üleştirme Sayıları (Distributiva):</strong> Kaçar? sorusuna yanıt verir; çoğul çekimlenir: <span class=\"lat-word\">singulī</span> (birer), <span class=\"lat-word\">bīnī</span> (ikişer), <span class=\"lat-word\">ternī</span> (üçer).</li>\n  <li><strong>Sayı Zarfları (Adverbia Numeralia):</strong> Kaç kez? sorusuna yanıt verir: <span class=\"lat-word\">semel</span> (bir kez), <span class=\"lat-word\">bis</span> (iki kez), <span class=\"lat-word\">ter</span> (üç kez).</li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Ünlü Deyiş",
        "calloutText": "Bis dat, quī citō dat = Çabuk veren, iki kez vermiş sayılır.",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "Sıra sayıları daima 1. ve 2. sınıf sıfatlar (-us, -a, -um) gibi çekimlenir."
  },
  {
    "id": "T2_W8_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 8,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 8. Hafta (1. Ders)",
    "title": "3. ÇEKİM İSİMLERLE ZENGİNLEŞTİRİLMİŞ METİN VE SENTAKS",
    "subtitle": "Hodie multae nubes in caelo sunt; Lucretius ve Doğa Felsefesi Metinleri",
    "summary": "Bu fasikülde gökyüzü olaylarını, doğa felsefesini ve Lucretius metinlerini konu alan 3. çekim isim alıştırmalarını (nūbēs, animal, homō, terra) ve zengin cümle tahlillerini inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 8.1.pdf",
    "slideCount": 16,
    "topics": ["nubes, nubis f. Çekimi", "Lucretius: De Rerum Natura", "Doğa ve Felsefe Cümleleri", "İsim Tamlamaları ve İyelik", "Cümle Çözümlemeleri"],
    "vocab": ["nubes", "caelum", "signum", "ira", "acerbus", "deus", "terra", "animal", "creo", "hodie", "in", "et", "olim", "semper", "idem", "sine", "autem", "pax", "ex", "cum", "post", "non", "solum", "sed", "etiam", "pro", "patria", "sub", "ille", "diu"],
    "sections": [
      {
        "title": "1. Roma Edebiyatında Doğa ve Felsefe Sentaksı",
        "html": "<p><em>Hodiē multae nūbēs in caelō sunt signum īrae acerbae deōrum.</em></p>\n<p><strong>Çeviri:</strong> Bugün gökyüzündeki pek çok bulut, tanrıların acı öfkesinin işaretidir.</p>\n<p><em>Terra ipsa hominēs et animālia ōlim creāvit. (Lucretius)</em></p>\n<p><strong>Çeviri:</strong> Toprağın / yeryüzünün bizzat kendisi vaktiyle insanları ve hayvanları yarattı.</p>",
        "calloutType": "info",
        "calloutTitle": "Sentaks Notu: ipsa",
        "calloutText": "ipse, ipsa, ipsum pekiştirme zamiridir; burada terra ile birleşerek 'yeryüzünün bizzat kendisi' vurgusunu sağlar.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Hodie multae nubes in caelo sunt signum irae acerbae deorum.",
        "tr": "Bugün gökyüzündeki",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ", vaktiyle, eskiden; gelecekte",
        "tr": "bir gün",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Terra ipsa homines et animalia olim creavit. ( Lucretius )",
        "tr": "Bir zamanlar",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "bizzat toprak",
        "tr": "insanları ve hayvanları yarattı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Pan servat oves et magistros fortunatos ovium. ( Vergilius ) Pan",
        "tr": "koyunları ve koyunların talihli yöneticilerini",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ", esse semper idem. Illum timorem in hoc viro uno invenimus. Sine labore autem nulla pax in civitatem eorum veniet.",
        "tr": "Öyleyse daima kendin olmaya cesaret et. O korkuyu yalnız bu adamda bulduk. Emek olmadan ise onların devletine hiçbir barış gelmeyecektir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ", esse semper idem.",
        "tr": "Öyleyse her zaman aynı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "olmaya (",
        "tr": "aynı kişi",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "et! Illum timorem in hoc viro uno invenimus. O korkuyu",
        "tr": "bir",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "tek bu adamda buluyoruz. Sine labore autem nulla pax in civitatem eorum veniet.",
        "tr": "Ancak çaba",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ex illis terris in hunc locum cum amicis vestris venite. Post paucas horas sororem illius invenire poteramus.",
        "tr": "O topraklardan bu yere arkadaşlarınızla birlikte geliniz. Birkaç saat sonra onun kız kardeşini bulabiliyorduk.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ex illis terris in hunc locum cum amicis vestris venite. O topraklardan bu yere",
        "tr": "arkadaşlarınızla",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "birlikte geliniz! Post paucas horas sororem illius invenire poteramus.",
        "tr": "Birkaç",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "saat sonra",
        "tr": "onun kız kardeşini bulabiliyorduk",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Illi non solum pecuniam sed etiam vitam pro patria profuderunt. ( Cicero ) Onlar",
        "tr": "yalnızca paralarını değil",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Reges Romam a principio habuerunt, libertatem Lucius Brutus Romanis dedit. ( Tacitus ) Krallar",
        "tr": "baştan",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "ellerinde tuttular; Lucius Brutus",
        "tr": "Romalılara özgürlüğü verdi",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Sub Caesare autem libertatem perdidimus. ( Laberius )",
        "tr": "Caesar’ın yönetimi altında",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "kaybettik. Non ille diu vixit, sed diu fuit. ( Seneca ) O",
        "tr": "adam",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "nūbēs kelimesi -i gövdelidir; çoğul genetivus hali nūbium şeklindedir."
  },
  {
    "id": "T2_W8_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 8,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 8. Hafta (2. Ders)",
    "title": "İYELİK YAPILARI VE ZAMİR SENTAKSI",
    "subtitle": "Tu autem filiam beatam eius nunc amas; eius, eorum ve Seneca Metinleri",
    "summary": "Bu fasikülde 3. şahıs iyelik yapısını (eius / eōrum), meclis ve mektup dilinde zamirlerin kullanımını, Seneca'nın ahlak mektuplarından seçilen cümleleri ve 19 slaytlık zengin cümle alıştırmalarını öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 8.2.pdf",
    "slideCount": 19,
    "topics": ["eius ve eorum İyelik Yapıları", "Seneca Ahlak Mektupları", "Doğru Yolu Göstermek (rectum iter)", "Hatalardan Ders Çıkarmak", "Zamir ve Sıfat Uyumları"],
    "vocab": ["filia", "beatus", "labor", "gratia", "ago", "veritas", "error", "rectus", "iter", "demonstro", "tu", "autem", "nunc", "post", "in", "eo", "ex", "possum", "dum", "inter", "non", "nemo", "duo", "porta", "per", "cum", "hodie", "nihil", "aut", "virtus", "idem", "nomen", "femina", "ante", "totus", "populus", "de"],
    "sections": [
      {
        "title": "1. Seneca'dan Yaşam Bilgeliği Sentaksı",
        "html": "<p><em>Ex meīs errōribus hominibus rēctum iter dēmōnstrāre possum. (Seneca)</em></p>\n<p><strong>Çeviri:</strong> Kendi yanılgılarımdan / hatalarımdan yola çıkarak insanlara doğru yolu gösterebilirim.</p>\n<p><em>Post labōrem eius grātiās magnās eī agēmus.</em></p>\n<p><strong>Çeviri:</strong> Onun emeğinin / çalışmasının ardından ona büyük teşekkürler edeceğiz (şükranlarımızı sunacağız).</p>",
        "calloutType": "rule",
        "calloutTitle": "gratias agere Deyimi",
        "calloutText": "grātiās agere = birine teşekkür etmek demektir. Kime teşekkür ediliyorsa Dativus haldedir: eī grātiās agere (ona teşekkür etmek).",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Tu autem filiam beatam eius nunc amas. Post laborem eius gratias magnas ei agemus. Tune veritatem in eo libro demonstras.",
        "tr": "Sen ise onun mutlu kızını şimdi seviyorsun. Onun çalışmasından sonra ona büyük teşekkürler edeceğiz. Sen o kitapta hakikati gösteriyor musun?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Tu autem filiam beatam eius nunc amas.",
        "tr": "Sen ise onun mutlu kızını şimdi seviyorsun. Onun çalışmasından sonra ona büyük teşekkürler edeceğiz. Sen o kitapta hakikati gösteriyor musun?",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "/ kutlu /",
        "tr": "talihli kızını",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "seviyorsun. Post laborem eius gratias magnas ei agemus.",
        "tr": "Onun çalışmasından",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "sonra ona",
        "tr": "büyük",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "). Tune veritatem in eo libro demonstras? O kitaptaki hakikati sen mi",
        "tr": "gösteriyorsun",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ", - den",
        "tr": "dolayı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ex meis erroribus hominibus rectum iter demonstrare possum. ( Seneca )",
        "tr": "Kendi hatalarımdan",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Homines, dum docent, discunt. ( Seneca )",
        "tr": "İnsanlar öğretirken öğrenirler",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Illae quinque feminae inter ea animalia mortem non timebant. Nemo eandem partem Asiae uno anno vincet. Duo ex filiis a porta per agros cum patre suo currebant.",
        "tr": "O beş kadın bu hayvanların arasında ölümden korkmuyordu. Hiç kimse Asya'nın aynı parçasını bir yılda fethedemez. Oğullardan ikisi kapıdan tarlaların arasından babalarıyla birlikte koşuyordu.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Illae quinque feminae inter ea animalia mortem non timebant. O",
        "tr": "beş kadın",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "o hayvanlar",
        "tr": "arasında ölümden korkmuyordu",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Nemo eandem partem Asiae uno anno vincet.",
        "tr": "O beş kadın bu hayvanların arasında ölümden korkmuyordu. Hiç kimse Asya'nın aynı parçasını bir yılda fethedemez. Oğullardan ikisi kapıdan tarlaların arasından babalarıyla birlikte koşuyordu.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "yenmeyecek. Duo ex filiis a porta per agros cum patre suo currebant.",
        "tr": "Oğullardan",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "itibaren tarlalar boyunca",
        "tr": "babalarıyla",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Quid discipulae hodie discere debent?",
        "tr": "Öğrencilerin bugün ne öğrenmesi gerekiyor",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "zorundalar?) Fratres mei nihil cum ratione heri gerebant. Erkek",
        "tr": "kardeşlerim dün aklı başında hiçbir şey yapmıyorlardı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Non omnes eadem amant aut easdem cupiditates studiaque habent. ( Horatius ) Virtus tua me amicum tibi facit. ( Horatius ) Omnes idem sentiunt. ( Cicero )",
        "tr": "Herkes aynı şeyleri sevmez ya da aynı arzulara ve uğraşlara sahip değildir. (Horatius) Senin erdemin beni sana dost kılar. (Horatius) Herkes aynı şeyi düşünüyor. (Cicero)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Non omnes eadem amant aut easdem cupiditates studiaque habent. ( Horatius ) Herkes",
        "tr": "aynı şeyleri",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "sevmez veya herkes",
        "tr": "aynı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "heveslere sahip olmaz. Virtus tua me amicum tibi facit. ( Horatius )",
        "tr": "Senin",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Omnes idem sentiunt. ( Cicero ) Herkes",
        "tr": "aynı şeyi hissediyor",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Neuter medicus nomen Ciceronis audiverat. Femina ante illam horam litteras suas miserat. Totus populus Romanus libertatem amisit.",
        "tr": "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Neuter medicus nomen Ciceronis audiverat.",
        "tr": "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "hekim (= iki hekimden",
        "tr": "hiçbiri = ne o ne de",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "bu hekim ) Cicero’nun",
        "tr": "adını işitmemişti",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Femina ante illam horam litteras suas miserat.",
        "tr": "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "o saatten",
        "tr": "önce kendi mektuplarını göndermişti",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": ". Totus populus Romanus libertatem amisit.",
        "tr": "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Monuitne nuper eos de viribus illarum urbium in Asia? Asya’daki o kentlerin",
        "tr": "insanları hakkında",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "son zamanlarda",
        "tr": "onları uyardı mı",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "? Nomina multarum urbium nostrarum ab nominibus urbium antiquarum traximus. Bize ait pek",
        "tr": "çok",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "eski kentlerin",
        "tr": "adlarından aldık",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "iter (yol, yolculuk) nötr bir 3. çekim isimdir; tekil accusativus hali yine iter'dir (rectum iter)."
  },
  {
    "id": "T2_W11_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 11,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 11. Hafta (1. Ders)",
    "title": "EDİLGEN ÇATI 1 (VOX PASSIVA): ŞİMDİKİ ZAMAN GÖVDESİ VE ŞAHIS EKLERİ",
    "subtitle": "Vox Passiva Tanımı, 1-4. Çekim Gövdeleri ve Evrensel Edilgen Ekler (-r, -ris, -tur, -mur, -minī, -ntur)",
    "summary": "Bu fasikülde Latince fiil sisteminde en köklü dönüşümlerden biri olan Edilgen Çatıyı (Vox Passiva), öznenin eylemden etkilenme mantığını, şimdiki zaman gövdesine getirilen evrensel edilgen şahıs eklerini öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 11.1.pdf",
    "slideCount": 30,
    "topics": ["Edilgen Çatı (Vox Passiva)", "Şimdiki Zaman Gövdesi", "Edilgen Şahıs Ekleri (-r, -ris, -tur...)", "1-4. Çekim Fiiller", "Örnek Çekimler"],
    "vocab": ["laudor", "moneor", "regor", "audior", "capior", "amor", "conservor"],
    "sections": [
      {
        "title": "1. Edilgen Çatının Temel Mantığı",
        "html": "<p>Latincede <strong>Vox Passiva</strong>, özneye bir şey yapıldığını bildirir. Etken şahıs ekleri (-ō, -s, -t, -mus, -tis, -nt) yerine şu <strong>edilgen ekler</strong> kullanılır:</p>\n<ul>\n  <li>1. Tekil: <strong>-r / -or</strong> (övülü-r-üm)</li>\n  <li>2. Tekil: <strong>-ris / -re</strong> (övülü-r-sün)</li>\n  <li>3. Tekil: <strong>-tur</strong> (övülü-r)</li>\n  <li>1. Çoğul: <strong>-mur</strong> (övülü-r-üz)</li>\n  <li>2. Çoğul: <strong>-minī</strong> (övülü-r-sünüz)</li>\n  <li>3. Çoğul: <strong>-ntur</strong> (övülü-r-ler)</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "1. Çekim 1. Tekil Şahıs Kuralı",
        "calloutText": "1. çekimde kökteki -ā- ile 1. tekil şahıs eki -or kaynaştığında -ā- erir: lauda-or > laudor.",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "Edilgen eklerde -tur daima 3. tekil, -ntur daima 3. çoğuldur; Türkçedeki -il/-in çatı ekleri gibi düşününüz."
  },
  {
    "id": "T2_W12_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 12,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 12. Hafta (1. Ders)",
    "title": "EDİLGEN ÇATI 2: EDİLGEN ŞİMDİKİ ZAMAN (PRAESENS PASSIVI)",
    "subtitle": "Dört Çekim Grubunda Praesens Passivi Çekim Tabloları ve Mastar Biçimleri (-ārī, -ērī, -ī, -īrī)",
    "summary": "Bu fasikülde 1., 2., 3. ve 4. çekim fiillerin Şimdiki Zaman Edilgen (Praesens Indicativus Passivi) çekimlerini, edilgen mastar (Infinitivus Passivi) yapılışını ve sentaks analizlerini öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 12.1.pdf",
    "slideCount": 35,
    "topics": ["Praesens Passivi", "Dört Çekim Karşılaştırması", "Edilgen Mastar (-ari, -eri, -i, -iri)", "Cümle Çözümlemeleri"],
    "vocab": ["laudo", "moneo", "rego", "audio", "capio", "vinco", "duco"],
    "sections": [
      {
        "title": "1. Dört Çekim Grubunda Praesens Passivi Tablosu",
        "html": "<p>Praesens sisteminde her dört çekim grubu da aynı şahıs eklerini alır; ancak gövde ünlüleri farklılaşır:</p>",
        "calloutType": "warning",
        "calloutTitle": "3. Çekimde Edilgen Mastar İstisnası",
        "calloutText": "1., 2. ve 4. çekimlerde edilgen mastar sonundaki -e harfinin -ī olmasıyla yapılır (laudārī, monērī, audīrī). ANCAK 3. çekimde -ere eki tamamen düşer ve doğrudan gövdeye -ī gelir: regere > regī (yönetilmek); dūcere > dūcī (götürülmek).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Şahıs</th><th>1. Çekim (-āre)</th><th>2. Çekim (-ēre)</th><th>3. Çekim (-ere)</th><th>4. Çekim (-īre)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>1. Sg.</strong></td><td class=\"case-cell-latin\">laud-<strong>or</strong></td><td class=\"case-cell-latin\">mon-<strong>eor</strong></td><td class=\"case-cell-latin\">reg-<strong>or</strong></td><td class=\"case-cell-latin\">aud-<strong>ior</strong></td></tr>\n      <tr><td><strong>2. Sg.</strong></td><td class=\"case-cell-latin\">laud-<strong>āris</strong></td><td class=\"case-cell-latin\">mon-<strong>ēris</strong></td><td class=\"case-cell-latin\">reg-<strong>eris</strong></td><td class=\"case-cell-latin\">aud-<strong>īris</strong></td></tr>\n      <tr><td><strong>3. Sg.</strong></td><td class=\"case-cell-latin\">laud-<strong>ātur</strong></td><td class=\"case-cell-latin\">mon-<strong>ētur</strong></td><td class=\"case-cell-latin\">reg-<strong>itur</strong></td><td class=\"case-cell-latin\">aud-<strong>ītur</strong></td></tr>\n      <tr><td><strong>1. Pl.</strong></td><td class=\"case-cell-latin\">laud-<strong>āmur</strong></td><td class=\"case-cell-latin\">mon-<strong>ēmur</strong></td><td class=\"case-cell-latin\">reg-<strong>imur</strong></td><td class=\"case-cell-latin\">aud-<strong>īmur</strong></td></tr>\n      <tr><td><strong>2. Pl.</strong></td><td class=\"case-cell-latin\">laud-<strong>āminī</strong></td><td class=\"case-cell-latin\">mon-<strong>ēminī</strong></td><td class=\"case-cell-latin\">reg-<strong>iminī</strong></td><td class=\"case-cell-latin\">aud-<strong>īminī</strong></td></tr>\n      <tr><td><strong>3. Pl.</strong></td><td class=\"case-cell-latin\">laud-<strong>antur</strong></td><td class=\"case-cell-latin\">mon-<strong>entur</strong></td><td class=\"case-cell-latin\">reg-<strong>untur</strong></td><td class=\"case-cell-latin\">aud-<strong>iuntur</strong></td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
    ],
    "studyTips": "3. çekim fiillerde 2. tekil şahıs regeris (sen yönetilirsin) biçiminde ara ses -e- olur, regiris olmaz."
  },
  {
    "id": "T2_W12_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 12,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 12. Hafta (2. Ders)",
    "title": "EDİLGEN ÇATI 3: EDİLGEN GELECEK VE HİKÂYE ZAMANI",
    "subtitle": "Futurum I Passivi ve Imperfectum Passivi; 1-4. Çekim Çekim Tabloları",
    "summary": "Bu fasikülde eylemin gelecekte veya geçmişte edilgen olarak gerçekleştiği durumları (Imperfectum Passivi: -bar, -bāris... ve Futurum I Passivi: -bor, -beris... / -ar, -ēris...) öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "50 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 12.2.pdf",
    "slideCount": 36,
    "topics": ["Imperfectum Passivi (-bar, -bāris, -bātur...)", "Futurum I Passivi (1. ve 2. Çekim: -bor, -beris...)", "Futurum I Passivi (3. ve 4. Çekim: -ar, -ēris...)", "Karşılaştırmalı Tablolar"],
    "vocab": ["laudor", "moneor", "remedio", "deleo", "pax", "salvus", "civis"],
    "sections": [
      {
        "title": "1. Imperfectum ve Futurum Passivi Tablosu (1. ve 2. Çekim)",
        "html": "<p>1. ve 2. çekimde zaman ekleri aynen korunur, yalnızca sonlarına edilgen şahıs ekleri getirilir:</p>\n<ul>\n  <li>Imperfectum Passivi: laudā-<strong>bar</strong>, laudā-<strong>bāris</strong>, laudā-<strong>bātur</strong>, laudā-<strong>bāmur</strong>, laudā-<strong>bāminī</strong>, laudā-<strong>bantur</strong></li>\n  <li>Futurum I Passivi: laudā-<strong>bor</strong>, laudā-<strong>beris</strong>, laudā-<strong>bitur</strong>, laudā-<strong>bimur</strong>, laudā-<strong>biminī</strong>, laudā-<strong>buntur</strong></li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Futurum 2. Tekil Şahıs Kuralı",
        "calloutText": "1. ve 2. çekim Futurum I Passivi 2. tekil şahsında ara ses -i- değil -e- olur: laudā-beris (övüleceksin), monē-beris (uyarılacaksın).",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "3. ve 4. çekim fiillerin geleceğinde -bo/-bis yoktur; -ar, -ēris, -ētur ekleri kullanılır: regar, regēris, regētur."
  },
  {
    "id": "T2_W13_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 13,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 13. Hafta (1. Ders)",
    "title": "EDİLGEN CÜMLE SENTAKSI: FAİL VE VASITA AYRIMI",
    "subtitle": "Ablatīvus Auctōris (ā/ab + Abl.) ve Ablatīvus Instrumentī (Yalın Abl.); 20 Slaytlık Cümle Serisi",
    "summary": "Bu fasikülde edilgen çatıda canlı fail (ā/ab + Ablativus) ile cansız araç (yalın Ablativus) ayrımını pekiştirecek, 'Beata memoria amicitiarum dulcium numquam delebitur' cümlesiyle başlayan 20 slaytlık zengin cümle serisini inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "55 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 13.1.pdf",
    "slideCount": 21,
    "topics": ["Ablativus Auctoris (Fail)", "Ablativus Instrumenti (Vasıta)", "delebitur (Silinecektir)", "amicitia dulcis Sentaksı", "20 Slaytlık Cümle Serisi"],
    "vocab": ["beatus", "memoria", "amicitia", "dulcis", "numquam", "deleo", "femina", "caecus", "ars", "intellego", "etiam", "nimis", "quoque", "et", "semper", "de", "non", "cum", "primus", "rex", "in", "mare", "nam", "poeta", "ex", "ad", "familia", "atque", "quattuor", "at", "causa", "iam", "bene"],
    "sections": [
      {
        "title": "1. Edilgen Cümle Sentaksının Zirvesi",
        "html": "<p><em>Beāta memoria amīcitiārum dulcium numquam dēlēbitur.</em></p>\n<p><strong>Çeviri:</strong> Tatlı / güzel dostlukların mutlu anısı asla silinmeyecektir.</p>\n<p><em>Illī virī ā mīlitibus gladiīs vulnerātī sunt.</em></p>\n<p><strong>Çeviri:</strong> O adamlar askerler tarafından (ā mīlitibus - fail) kılıçlarla (gladiīs - vasıta) yaralandılar.</p>",
        "calloutType": "rule",
        "calloutTitle": "Fail ve Vasıta Birlikte Kullanımı",
        "calloutText": "Aynı cümlede hem eylemi yapan şahıs (ā/ab + abl.) hem de eylemin aracı (yalın abl.) bir arada kusursuz bir uyum içinde bulunabilir.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Beata memoria amicitiarum dulcium numquam",
        "tr": "delebitur",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Multi morte etiam facili nimis",
        "tr": "terrentur",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Illa femina caeca omnia genera artium quoque intellexit et ab amicis iucundis semper",
        "tr": "laudabatur",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "- de, -",
        "tr": "Beni övmemelisin / Beni övmek zorunda değilsin.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Mentes nostrae memoria potenti illorum duorum factorum cito",
        "tr": "moventur",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Caesar non poterat suas copias cum celeribus copiis regis iungere. Caesar",
        "tr": "kendi birliklerini kralın hızlı birlikleriyle birleştiremiyordu (birleştirmeyi başaramıyordu).",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Primus rex divitias in mare iecit, nam magnam iram et vim turbae timuit.",
        "tr": "İlk kral servetini denize attı, çünkü kalabalığın gücünden ve büyük öfkesinden korktu.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Senes in gente nostra ab filiis numquam",
        "tr": "neglegebantur",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Omnia genera servitutis nobis",
        "tr": "videntur",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ille poeta in tertio libello saturarum scripsit de hominibus avaris.",
        "tr": "O şair, satura’larının üçüncü kitabında aç gözlü insanlar hakkında yazdı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Tecum novem ex aliis miseris ad Caesarem cras trahent. Tecum novem ex aliis miseris ad Caesarem cras",
        "tr": "Yarın seninle birlikte diğer zavallılardan dokuzunu Caesar'a sürükleyecekler. Yarın seninle birlikte diğer zavallılardan dokuzu Caesar'a sürüklenecekler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Tecum novem ex aliis miseris ad Caesarem cras trahent.",
        "tr": "Diğer zavallı kişilerden dokuzunu seninle birlikte yarın",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Tecum novem ex aliis miseris ad Caesarem cras",
        "tr": "Yarın seninle birlikte diğer zavallılardan dokuzunu Caesar'a sürükleyecekler. Yarın seninle birlikte diğer zavallılardan dokuzu Caesar'a sürüklenecekler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "In familia eorum erant duae filiae atque quattuor filii.",
        "tr": "Onların ailesinde iki kız evlat ve dört erkek evlat vardı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "At senectutis bonae causa iam bene vivere debemus.",
        "tr": "İyi bir yaşlılık için şu an iyi bir şekilde yaşamamız gerekir.",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "dēlēbitur fiili dēleō fiilinin 3. tekil Futurum I Passivi biçimidir (silinecektir)."
  },
  {
    "id": "T2_W13_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 13,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 13. Hafta (2. Ders)",
    "title": "EDİLGEN GEÇMİŞ ZAMANLAR (PERFECTUM PASSIVI)",
    "subtitle": "Supinum ve Participium Perfectum Passivi; sum, eram, erō ile Birleşik Çekim Sistemi",
    "summary": "Bu fasikülde fiillerin 4. ana unsuru olan Supinum'dan türetilen Geçmiş Zaman Edilgen Sıfat-Fiilini (Participium Perfectum Passivi - PPP), esse yardımcı fiiliyle kurulan Perfectum Passivi, Plusquamperfectum Passivi ve Futurum Exactum Passivi sistemlerini öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "60 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 13.2.pdf",
    "slideCount": 40,
    "topics": ["Supinum Gövdesi (-tum / -sum)", "Participium Perfectum Passivi (PPP: -tus, -ta, -tum)", "Perfectum Passivi (-tus est)", "Plusquamperfectum Passivi (-tus erat)", "Futurum Exactum Passivi (-tus erit)"],
    "vocab": ["laudatus", "monitus", "rectus", "auditus", "captus", "factus", "victus", "missus"],
    "sections": [
      {
        "title": "1. Edilgen Geçmiş Zamanların Birleşik Yapısı",
        "html": "<p>Latincede geçmiş zamanlarda edilgen çekim <strong>Participium Perfectum Passivi + esse</strong> formülüyle yapılır:</p>",
        "calloutType": "rule",
        "calloutTitle": "Özne ile Cins ve Sayı Uyumu",
        "calloutText": "Özne tekil dişil ise: Puella laudāta est.\nÖzne çoğul dişil ise: Puellae laudātae sunt.\nÖzne çoğul nötr ise: Bella gesta sunt.",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Zaman</th><th>Yardımcı Fiil</th><th>Eril Tekil / Çoğul</th><th>Türkçe Anlamı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Perfectum Passivi</strong></td><td>sum, es, est, sumus, estis, sunt</td><td class=\"case-cell-latin\">laudātus est / laudātī sunt</td><td>övüldü / övüldüler</td></tr>\n      <tr><td><strong>Plusquamperfectum Passivi</strong></td><td>eram, erās, erat, erāmus, erātis, erant</td><td class=\"case-cell-latin\">laudātus erat / laudātī erant</td><td>övülmüştü / övülmüşlerdi</td></tr>\n      <tr><td><strong>Futurum Exactum Passivi</strong></td><td>erō, eris, erit, erimus, eritis, erunt</td><td class=\"case-cell-latin\">laudātus erit / laudātī erunt</td><td>övülmüş olacak / olacaklar</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
    ],
    "studyTips": "PPP kısmı bir sıfat gibi öznenin cinsine (eril/dişil/nötr) ve sayısına (tekil/çoğul) harfiyen uyar."
  },
  {
    "id": "T2_W14_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 14,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 14. Hafta (1. Ders)",
    "title": "EDİLGEN CÜMLE YAPISI VE 2. DÖNEM KAPSAMLI DEĞERLENDİRME",
    "subtitle": "Puer monitus est, Puellae laudatae sunt; Bütün Edilgen ve Etken Yapıların Sentezi",
    "summary": "Bu fasikülde 2. dönemin edat, zamir, sıfat ve edilgen çatı konularının tamamını kapsayan sentaks çözümlemelerini, 'Puellae propter facta bona a matribus patribusque laudatae sunt' gibi karmaşık klasik dönem cümlelerini inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "60 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 14.1.pdf",
    "slideCount": 30,
    "topics": ["Edilgen Cümle Analizleri", "Anne ve Babalar Tarafından Övülen Kızlar", "Adulescens ve Patientia Sentaksı", "2. Dönem Kapsamlı Değerlendirme"],
    "vocab": ["mater", "pater", "factum", "adulescens", "patientia", "gratias", "intellego", "carus", "propter", "bene", "et", "pro"],
    "sections": [
      {
        "title": "1. Kapsamlı Edilgen Cümle Sentaks Çözümlemesi",
        "html": "<p><em>Puellae propter facta bona ā mātribus patribusque laudātae sunt.</em></p>\n<p><strong>Sentaks Analizi:</strong></p>\n<ul>\n  <li><strong>Puellae:</strong> Nom. Pl. f. &gt; Cümlenin öznesi (Kızlar).</li>\n  <li><strong>propter facta bona:</strong> propter (+ acc.) edatı ile facta bona nötr çoğul accusativus &gt; Sebep zarf tümleci (İyi eylemlerinden ötürü).</li>\n  <li><strong>ā mātribus patribusque:</strong> ā (+ abl.) edatı ile mātribus ve patribus 3. çekim ablativus &gt; Canlı fail tümleci (Anneleri ve babaları tarafından).</li>\n  <li><strong>laudātae sunt:</strong> laudo fiili Perfectum Passivi 3. çoğul dişil &gt; Yüklem (Övüldüler).</li>\n</ul>",
        "calloutType": "info",
        "calloutTitle": "Kusursuz Sentaks Uyumu",
        "calloutText": "Özne olan puellae çoğul dişil olduğu için, yüklemin sıfat-fiil parçası olan laudātae da çoğul dişil biçimini almıştır.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Puellae propter facta bona a matribus patribusque laudatae sunt.",
        "tr": "Kızlar iyi eylemleri yüzünden anneleri ve babaları tarafından övüldüler.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Mater filium bene intellexit, et adulescens ei pro patientia gratias egit.",
        "tr": "Anne oğlunu iyi anladı ve delikanlı sabrı için ona teşekkür etti.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Casa vicini nostri habuit paucas fenestras.",
        "tr": "Komşumuzun evi birkaç pencereye sahipti.",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "-que eki kelimenin sonuna eklenerek 've' anlamı katar: patribusque = et patribus."
  },
  {
    "id": "T2_W14_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 14,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 14. Hafta (2. Ders)",
    "title": "SORU ZAMİRLERİ (QUIS, QUID) VE FİNAL ÇEVİRİLERİ",
    "subtitle": "Pronomina Interrogativa: quis, quid; Soru Cümlesi Yapımı ve 1. Sınıf Müfredat Sonu Genel Sentezi",
    "summary": "Bu fasikülde 1. sınıf Latince müfredatının son konusu olan Soru Zamirlerini (quis? = kim?, quid? = ne?), soru sıfatlarıyla ayrımını, tekil ve çoğul çekim tablolarını ve 32 slaytlık dönem sonu final çevirilerini inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "estimatedDuration": "60 dakika",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 14.2.pdf",
    "slideCount": 32,
    "topics": ["Soru Zamirleri (Pronomina Interrogativa)", "quis? (Kim?), quid? (Ne?)", "cuius? (Kimin?), cui? (Kime?)", "Soru Sıfatı (qui, quae, quod)", "Final Sınavı Çeviri Cümleleri"],
    "vocab": ["quis", "quid", "cuius", "cui", "quem", "quo", "solus", "carus", "solum", "bene", "deus", "caelum", "et", "nec", "cum", "nam", "semper", "ex", "sapiens", "in", "homo", "animus", "ipse", "teneo"],
    "sections": [
      {
        "title": "1. Soru Zamiri (quis, quid) Çekim Tablosu",
        "html": "<p>Latincede <strong>quis?</strong> 'kim?' sorusunu, <strong>quid?</strong> ise 'ne?' sorusunu karşılar:</p>",
        "calloutType": "rule",
        "calloutTitle": "Soru Zamiri vs Soru Sıfatı Ayrımı",
        "calloutText": "Tek başına kullanıldığında soru zamiridir: Quis dicit? (Kim söylüyor?)\nBir ismin önüne geldiğinde soru sıfatı olur: Quī vir dicit? (Hangi adam söylüyor?)",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Casus</th><th>Eril / Dişil (Kim?)</th><th>Neutrum (Ne?)</th><th>Türkçe Karşılığı</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>Nominativus</strong></td><td class=\"case-cell-latin\"><strong>quis?</strong></td><td class=\"case-cell-latin\"><strong>quid?</strong></td><td>kim? / ne?</td></tr>\n      <tr><td><strong>Genetivus</strong></td><td class=\"case-cell-latin\"><strong>cuius?</strong></td><td class=\"case-cell-latin\"><strong>cuius?</strong></td><td>kimin? / neyin?</td></tr>\n      <tr><td><strong>Dativus</strong></td><td class=\"case-cell-latin\"><strong>cui?</strong></td><td class=\"case-cell-latin\"><strong>cui?</strong></td><td>kime? / neye?</td></tr>\n      <tr><td><strong>Accusativus</strong></td><td class=\"case-cell-latin\"><strong>quem?</strong></td><td class=\"case-cell-latin\"><strong>quid?</strong></td><td>kimi? / neyi?</td></tr>\n      <tr><td><strong>Ablativus</strong></td><td class=\"case-cell-latin\"><strong>quō?</strong></td><td class=\"case-cell-latin\"><strong>quō?</strong></td><td>kiminle? / ne ile?</td></tr>\n    </tbody>\n  </table>\n</div>"
      }
    ],
    "sentences": [
      {
        "latin": "Id solum est carum mihi. ( Terentius ) Bene est mihi quod tibi bene est. ( Plinius )",
        "tr": "Benim için değerli olan sadece budur. (Terentius) Sen iyi durumda olduğun için ben de iyiyim. (Plinius)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Id solum est carum mihi. ( Terentius )",
        "tr": "Bir tek o şey benim için değerlidir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Bene est mihi quod tibi bene est. (Plinius)",
        "tr": "Senin için iyi olan şey, benim için de iyidir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "In principio Deus creavit caelum et terram; et Deus creavit hominem. ( Genesis )",
        "tr": "Başlangıçta Tanrı yeri ve göğü yarattı; ve Tanrı insanı yarattı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Consules se nec tecum nec cum illis aliis iungebant. Hi Ciceronem ipsum secum iunxerunt, nam eum semper dilexerant.",
        "tr": "Konsüller ne seninle ne de şu diğerleriyle birleştiler. Bunlar bizzat Cicero'yu kendileriyle birleştirdiler, çünkü onu her zaman çok sevmişlerdi.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Consules se nec tecum nec cum illis aliis iungebant.",
        "tr": "Konsüller kendilerini ne seninle ne de başka kişilerle birleştiriyorlardı.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Hi Ciceronem ipsum secum iunxerunt, nam eum semper dilexerant. Bu adamlar bizzat Cicero ’ yu",
        "tr": "kendileriyle birleştirdiler, çünkü ona her zaman değer vermişlerdi.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Ex vitio alterius sapiens emendat suum. ( Publilius Syrus )",
        "tr": "Bilge, başkasının kusurundan hareketle kendi kusurunu düzeltir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Recede in te ipsum. ( Seneca )",
        "tr": "Kendine (kendi içine) çekil!",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Homo doctus in se semper divitias habet. ( Phaedrus )",
        "tr": "Bilgili insan servete her zaman kendi içinde sahiptir.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Animus se ipse alit. ( Seneca ) Zihin bizzat kendisini besler.",
        "tr": "Zihin bizzat kendisini besler. (Seneca)",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Auribus teneo lupum. ( Terentius )",
        "tr": "Kurdu kulaklarından tutuyorum.",
        "analysis": "",
        "notes": ""
      },
      {
        "latin": "Parva formica onera magna ore trahit. ( Horatius )",
        "tr": "Küçük karınca koca yükü ağzıyla çekip götürdü.",
        "analysis": "",
        "notes": ""
      }
    ],
    "studyTips": "Tebrikler! Doç. Dr. Eyüp Çoraklı'nın 1. ve 2. Dönem Latince Gramer müfredatının 46 derslik tam dijital fasikül serisini başarıyla tamamladınız! Artık klasik Latin edebiyatının metinlerini, felsefi ve tarihi kaynaklarını aslından okuyabilecek ve çözümleyebilecek sağlam bir filolojik temele sahipsiniz."
  }
];

if (typeof module !== 'undefined') module.exports = { EYUP_CURRICULUM };
