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
    "subtitle": "Latincenin Tarihsel Evreleri, Diftonglar, İsimlerin 3 Özelliği ve Declinatio I Çekim Tablosu",
    "summary": "Bu fasikülde Klasik Latin alfabesinin harf yapısını, sesli ve sessiz harflerin okunuş kurallarını, çiftseslileri (diphthongus), isimlerin hal (casus), sayı (numerus) ve cins (genus) niteliklerini ve 1. Grup İsimlerin (-a, -ae) çekim kurallarını öğreneceksiniz.",
    "difficulty": "Temel Seviye",
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
        "title": "4. 1. Grup İsimler (Declinatio I: -a, -ae) Model Çekimi",
        "html": "<p>Tekil Genetivus hali <strong>-ae</strong> ekiyle biten isimlerdir. Birkaç meslek ve özel istisna dışında bu gruptaki isimlerin tamamı <strong>Femininum (Dişil)</strong> cinstedir.</p>\n<p>Gövde, Tekil Genetivus halindeki <em>-ae</em> ekinin atılmasıyla elde edilir: <span class=\"lat-word\">causa</span> (Tekil Nom.) &gt; <span class=\"lat-word\">causae</span> (Tekil Gen.) &gt; Gövde: <strong>caus-</strong>.</p>",
        "calloutType": "warning",
        "calloutTitle": "1. Çekimdeki Kural Dışı Durumlar ve Eril İsimler",
        "calloutText": "1) Anlamca erkek mesleklerini belirten şu kelimeler -a ile bitmelerine rağmen ERİLDİR (m.): agricola (çiftçi), nauta (denizci), poeta (şair), auriga (atlı araba sürücüsü), pirata (korsan), advena (yabancı), accola (komşu), incola (yerli, m./f.).\n2) dea (tanrıça) ve filia (kız evlat) kelimelerinin Çoğul Dativus ve Ablativus halleri, 2. çekimdeki erkek karşılıklarıyla (deis, filiis) karışmaması için deabus ve filiabus şeklinde biter.\n3) familia kelimesi tekil genetivus halinde familias olarak da kullanılır: pater familias (aile babası).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">causa (Declinatio I)</strong>\n    <span class=\"table-sub\">(causa, causae, f. — neden, sebep)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">causa</td>\n        <td class=\"case-cell-latin\">causae</td>\n        <td class=\"case-cell-tr\">neden / nedenler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">causa</td>\n        <td class=\"case-cell-latin\">causae</td>\n        <td class=\"case-cell-tr\">ey neden / ey nedenler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">causae</td>\n        <td class=\"case-cell-latin\">causārum</td>\n        <td class=\"case-cell-tr\">nedenin / nedenlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">causae</td>\n        <td class=\"case-cell-latin\">causīs</td>\n        <td class=\"case-cell-tr\">nedene / neden için / nedenlere / nedenler için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">causam</td>\n        <td class=\"case-cell-latin\">causās</td>\n        <td class=\"case-cell-tr\">nedeni / nedenleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">causā</td>\n        <td class=\"case-cell-latin\">causīs</td>\n        <td class=\"case-cell-tr\">nedenle, nedenden / nedenlerle, nedenlerden</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Tekil Ablativus ekindeki -ā sesi uzundur; Tekil Nominativus ve Vocativus ekindeki -a ise kısadır.</div>\n</div>\n"
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
    "title": "FİİLLER (VERBA): SAYI, ZAMAN VE ŞİMDİKİ ZAMAN (PRAESENS)",
    "subtitle": "Fiilin Beş Özelliği, 4 Çekim Grubu, Praesens Gövdesi ve 1-2. Grup Model Çekimleri",
    "summary": "Bu fasikülde Latince fiil sisteminin omurgasını oluşturan beş temel kategoriyi (şahıs, sayı, zaman, kip, çatı), fiillerin sözlük yazılışını, fiil gövdesinin bulunmasını ve 1. ile 2. Çekim fiillerin Etken Şimdiki Zaman (Praesens Indicativus Activi) çekimlerini (amo, laudo, moneo, teneo) eksiksiz öğreneceksiniz.",
    "difficulty": "Temel Seviye",
    "sourceFile": "LatinceGramer2.1.pdf",
    "slideCount": 19,
    "topics": ["Fiilin Beş Özelliği", "Dört Çekim Grubu (Coniugatio)", "Şahıs Ekleri (Personae)", "Praesens Gövdesi", "1. Çekim: amo ve laudo", "2. Çekim: moneo ve teneo", "Zamanların Karşılaştırılması"],
    "vocab": ["laudo", "moneo", "amo", "cogito", "debeo", "do", "erro", "habeo", "servo", "valeo", "voco", "teneo"],
    "sections": [
      {
        "title": "1. Fiilin Beş Temel Özelliği (Forma Verbi) & Altı Zaman",
        "html": "<p>Latincede çekimlenmiş her bir fiil şu beş gramatikal bilgiyi aynı anda bünyesinde taşır:</p>\n<ol>\n  <li><strong>Persona (Şahıs):</strong> 1. Şahıs (ben / biz), 2. Şahıs (sen / siz), 3. Şahıs (o / onlar).</li>\n  <li><strong>Numerus (Sayı):</strong> Singularis (Tekil - ben, sen, o) ve Pluralis (Çoğul - biz, siz, onlar).</li>\n  <li><strong>Tempus (Zaman):</strong> Latincede 6 zaman mevcuttur:\n    <ul>\n      <li>1. <em>Praesens:</em> Şimdiki Zaman / Geniş Zaman (seviyorum / severim).</li>\n      <li>2. <em>Imperfectum:</em> Şimdiki Zamanın Hikayesi (seviyordum / severdim).</li>\n      <li>3. <em>Futurum (Simplex):</em> Gelecek Zaman (seveceğim).</li>\n      <li>4. <em>Perfectum:</em> Geçmiş Zaman (sevdim / sevmişim).</li>\n      <li>5. <em>Plusquamperfectum:</em> Geçmiş Zamanın Hikayesi (sevmiştim / sevdiydim).</li>\n      <li>6. <em>Futurum Exactum (Futurum II):</em> Gelecekte Bitmiş Zaman (sevmiş olacağım).</li>\n    </ul>\n  </li>\n  <li><strong>Modus (Kip):</strong> Indicativus (Haber Kipi), Imperativus (Emir Kipi), Coniunctivus (İstek-Dilek Kipi).</li>\n  <li><strong>Vox (Çatı):</strong> Vox Activa (Etken Çatı) ve Vox Passiva (Edilgen Çatı).</li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Evrensel Etken Şahıs Ekleri (Praesens Sistemi)",
        "calloutText": "Latincede tüm fiillerin etken şimdiki zaman şahıs ekleri şunlardır:\nTekil: 1. Şahıs -ō / -m (ben), 2. Şahıs -s (sen), 3. Şahıs -t (o)\nÇoğul: 1. Şahıs -mus (biz), 2. Şahıs -tis (siz), 3. Şahıs -nt (onlar)",
        "tableHtml": ""
      },
      {
        "title": "2. Fiillerin Sözlük Yazılışı ve Dört Çekim Grubu",
        "html": "<p>Latince sözlüklerde fiiller verilirken mastar değil, Haber Kipi Etken Çatı Şimdiki Zaman Tekil 1. Şahıs biçimi madde başı yapılır:</p>\n<ul>\n  <li><strong>1. Grup (-āre):</strong> <span class=\"lat-word\">ămo</span>, <span class=\"lat-word\">-āre</span>, <span class=\"lat-word\">-āvi</span>, <span class=\"lat-word\">-ātum</span>, 1, v., sevmek (Gövde: <strong>amā-</strong>)</li>\n  <li><strong>2. Grup (-ēre):</strong> <span class=\"lat-word\">mŏnĕo</span>, <span class=\"lat-word\">-ēre</span>, <span class=\"lat-word\">ŭi</span>, <span class=\"lat-word\">ĭtum</span>, 2, v., uyarmak (Gövde: <strong>monē-</strong>)</li>\n  <li><strong>3. Grup (-ere):</strong> <span class=\"lat-word\">lĕgo</span>, <span class=\"lat-word\">-ere</span>, <span class=\"lat-word\">lēgi</span>, <span class=\"lat-word\">lectum</span>, 3, v., okumak (Gövde: <strong>legĕ-</strong>)</li>\n  <li><strong>4. Grup (-īre):</strong> <span class=\"lat-word\">audĭo</span>, <span class=\"lat-word\">-īre</span>, <span class=\"lat-word\">īvi</span>, <span class=\"lat-word\">ītum</span>, 4, v., işitmek (Gövde: <strong>audī-</strong>)</li>\n</ul>\n<p><strong>Praesens Gövdesinin Bulunması:</strong> Mastarın sonundaki <em>-re</em> takısı atılarak bulunur: <em>amā-re &gt; amā-</em>; <em>monē-re &gt; monē-</em>.</p>",
        "calloutType": "info",
        "calloutTitle": "1. Çekimde 1. Tekil Şahıs Kuralı",
        "calloutText": "1. çekim fiillerde gövdedeki -ā- sesi ile 1. tekil şahıs eki olan -ō yan yana geldiğinde -ā- sesi erir (kontraksiyon): ama-ō > amō, lauda-ō > laudō olur. Ancak diğer tüm şahıslarda kökteki -ā- muhafaza edilir.",
        "tableHtml": ""
      },
      {
        "title": "3. 1. Grup Model Fiil: ămo, -āre (sevmek)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 13 çekim tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ămo, -āre (1. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(ămo, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">am-ō</td>\n        <td class=\"case-cell-tr\">seviyorum / severim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amā-s</td>\n        <td class=\"case-cell-tr\">seviyorsun / seversin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">ama-t</td>\n        <td class=\"case-cell-tr\">seviyor / sever</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amā-mus</td>\n        <td class=\"case-cell-tr\">seviyoruz / severiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amā-tis</td>\n        <td class=\"case-cell-tr\">seviyorsunuz / seversiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">ama-nt</td>\n        <td class=\"case-cell-tr\">seviyorlar / severler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. 1. Grup Model Fiil: laudō, -āre (övmek, yüceltmek)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 14 çekim tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">laudō, -āre (1. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(laudo, laudāre — övmek, yüceltmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">laud-ō</td>\n        <td class=\"case-cell-tr\">övüyorum / överim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudā-s</td>\n        <td class=\"case-cell-tr\">övüyorsun / översin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">lauda-t</td>\n        <td class=\"case-cell-tr\">övüyor / över</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-mus</td>\n        <td class=\"case-cell-tr\">övüyoruz / överiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-tis</td>\n        <td class=\"case-cell-tr\">övüyorsunuz / översiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">lauda-nt</td>\n        <td class=\"case-cell-tr\">övüyorlar / överler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "5. 2. Grup Model Fiil: mŏnĕo, -ēre (uyarmak)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 17 çekim tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">mŏnĕo, -ēre (2. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(moneo, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">mone-ō</td>\n        <td class=\"case-cell-tr\">uyarıyorum / uyarırım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monē-s</td>\n        <td class=\"case-cell-tr\">uyarıyorsun / uyarırsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">mone-t</td>\n        <td class=\"case-cell-tr\">uyarıyor / uyarır</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monē-mus</td>\n        <td class=\"case-cell-tr\">uyarıyoruz / uyarırız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monē-tis</td>\n        <td class=\"case-cell-tr\">uyarıyorsunuz / uyarırsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">mone-nt</td>\n        <td class=\"case-cell-tr\">uyarıyorlar / uyarırlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "6. 2. Grup Model Fiil: teneō, -ēre (tutmak)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 18 çekim tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">teneō, -ēre (2. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(teneo, tenēre — tutmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">tene-ō</td>\n        <td class=\"case-cell-tr\">tutuyorum / tutarım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">tenē-s</td>\n        <td class=\"case-cell-tr\">tutuyorsun / tutarsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">tene-t</td>\n        <td class=\"case-cell-tr\">tutuyor / tutar</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">tenē-mus</td>\n        <td class=\"case-cell-tr\">tutuyoruz / tutarız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">tenē-tis</td>\n        <td class=\"case-cell-tr\">tutuyorsunuz / tutarsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">tene-nt</td>\n        <td class=\"case-cell-tr\">tutuyorlar / tutarlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
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
    "title": "1. VE 2. GRUP FİİLLER: IMPERFECTUM, FUTURUM VE IMPERATIVUS",
    "subtitle": "Şimdiki Zamanın Hikâyesi (-bam), Gelecek Zaman (-bo) ve Emir Kipi Çekimleri",
    "summary": "Bu fasikülde 1. ve 2. çekim fiillerin Imperfectum (-ba-) ve Futurum I (-bi-) zamanlarını (amo, laudo, moneo, teneo çekimleriyle), emir kipini (Imperativus Praesentis) ve nōlī/nōlīte olumsuz emir kalıbını eksiksiz tüm paradigmalarıyla göreceksiniz.",
    "difficulty": "Temel Seviye",
    "sourceFile": "LatinceGramer2.2.pdf",
    "slideCount": 20,
    "topics": ["Imperfectum (-ba- Eki)", "Futurum I (-bi- Eki)", "Imperativus Praesentis", "Olumsuz Emir (Prohibitio)", "amo & laudo Çekimleri", "moneo & teneo Çekimleri"],
    "vocab": ["amo", "laudo", "moneo", "teneo", "do", "voco", "conservo", "erro", "nihil", "saepe", "si", "labor"],
    "sections": [
      {
        "title": "1. 1. Grup Fiiller: Imperfectum (ămō & laudō)",
        "html": "<p><strong>Kural (Slayt 3):</strong> Praesens Gövdesi + <em>-bā-</em> + Şahıs Ekleri (-m, -s, -t, -mus, -tis, -nt). <em>Not:</em> -ā ünlüsü -m, -t ve -nt ünsüzlerinden önce kısalır.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ămō, -āre (1. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(amo, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">amā-ba-m</td>\n        <td class=\"case-cell-tr\">seviyordum / severdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amā-bā-s</td>\n        <td class=\"case-cell-tr\">seviyordun / severdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">amā-ba-t</td>\n        <td class=\"case-cell-tr\">seviyordu / severdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amā-bā-mus</td>\n        <td class=\"case-cell-tr\">seviyorduk / severdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amā-bā-tis</td>\n        <td class=\"case-cell-tr\">seviyordunuz / severdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">amā-ba-nt</td>\n        <td class=\"case-cell-tr\">seviyorlardı / severlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">laudō, -āre (1. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(laudo, laudāre — övmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-m</td>\n        <td class=\"case-cell-tr\">övüyordum / överdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-s</td>\n        <td class=\"case-cell-tr\">övüyordun / överdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-t</td>\n        <td class=\"case-cell-tr\">övüyordu / överdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-mus</td>\n        <td class=\"case-cell-tr\">övüyorduk / överdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-tis</td>\n        <td class=\"case-cell-tr\">övüyordunuz / överdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-nt</td>\n        <td class=\"case-cell-tr\">övüyorlardı / överlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. 2. Grup Fiiller: Imperfectum (mŏnĕo & teneō)",
        "html": "<p><strong>Kural (Slayt 7):</strong> Praesens Gövdesi (-ē ile biter) + <em>-bā-</em> + Şahıs Ekleri (-m, -s, -t, -mus, -tis, -nt).</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">mŏnĕo, -ēre (2. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(moneo, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">monē-ba-m</td>\n        <td class=\"case-cell-tr\">uyarıyordum / uyarırdım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monē-bā-s</td>\n        <td class=\"case-cell-tr\">uyarıyordun / uyarırdın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monē-ba-t</td>\n        <td class=\"case-cell-tr\">uyarıyordu / uyarırdı</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monē-bā-mus</td>\n        <td class=\"case-cell-tr\">uyarıyorduk / uyarırdık</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monē-bā-tis</td>\n        <td class=\"case-cell-tr\">uyarıyordunuz / uyarırdınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monē-ba-nt</td>\n        <td class=\"case-cell-tr\">uyarıyorlardı / uyarırlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">teneō, -ēre (2. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(teneo, tenēre — tutmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">tenē-ba-m</td>\n        <td class=\"case-cell-tr\">tutuyordum / tutardım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">tenē-bā-s</td>\n        <td class=\"case-cell-tr\">tutuyordun / tutardın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">tenē-ba-t</td>\n        <td class=\"case-cell-tr\">tutuyordu / tutardı</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">tenē-bā-mus</td>\n        <td class=\"case-cell-tr\">tutuyorduk / tutardık</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">tenē-bā-tis</td>\n        <td class=\"case-cell-tr\">tutuyordunuz / tutardınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">tenē-ba-nt</td>\n        <td class=\"case-cell-tr\">tutuyorlardı / tutarlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. 1. Grup Fiiller: Futurum I (ămō & laudō)",
        "html": "<p><strong>Kural (Slayt 11):</strong> Praesens Gövdesi + <em>-bi-</em> + Şahıs Ekleri (-ō, -s, -t, -mus, -tis, -nt).<br><em>Not:</em> 1. tekil şahısta -i ünlüsü düşer (-bō); 3. çoğul şahısta -i ünlüsü -u ünlüsüne dönüşür (-bunt).</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ămō, -āre (1. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(amo, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">amā-b-ō</td>\n        <td class=\"case-cell-tr\">seveceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amā-bi-s</td>\n        <td class=\"case-cell-tr\">seveceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">amā-bi-t</td>\n        <td class=\"case-cell-tr\">sevecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amā-bi-mus</td>\n        <td class=\"case-cell-tr\">seveceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amā-bi-tis</td>\n        <td class=\"case-cell-tr\">seveceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">amā-bu-nt</td>\n        <td class=\"case-cell-tr\">sevecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">laudō, -āre (1. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(laudo, laudāre — övmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">laudā-b-ō</td>\n        <td class=\"case-cell-tr\">öveceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-s</td>\n        <td class=\"case-cell-tr\">öveceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-t</td>\n        <td class=\"case-cell-tr\">övecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-mus</td>\n        <td class=\"case-cell-tr\">öveceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-tis</td>\n        <td class=\"case-cell-tr\">öveceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">laudā-bu-nt</td>\n        <td class=\"case-cell-tr\">övecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. 2. Grup Fiiller: Futurum I (mŏnĕo & teneō)",
        "html": "<p><strong>Kural (Slayt 15):</strong> Praesens Gövdesi + <em>-bi-</em> + Şahıs Ekleri (-ō, -s, -t, -mus, -tis, -nt).</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">mŏnĕo, -ēre (2. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(moneo, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">monē-b-ō</td>\n        <td class=\"case-cell-tr\">uyaracağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monē-bi-s</td>\n        <td class=\"case-cell-tr\">uyaracaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monē-bi-t</td>\n        <td class=\"case-cell-tr\">uyaracak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monē-bi-mus</td>\n        <td class=\"case-cell-tr\">uyaracağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monē-bi-tis</td>\n        <td class=\"case-cell-tr\">uyaracaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monē-bu-nt</td>\n        <td class=\"case-cell-tr\">uyaracaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">teneō, -ēre (2. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(teneo, tenēre — tutmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">tenē-b-ō</td>\n        <td class=\"case-cell-tr\">tutacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">tenē-bi-s</td>\n        <td class=\"case-cell-tr\">tutacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">tenē-bi-t</td>\n        <td class=\"case-cell-tr\">tutacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">tenē-bi-mus</td>\n        <td class=\"case-cell-tr\">tutacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">tenē-bi-tis</td>\n        <td class=\"case-cell-tr\">tutacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">tenē-bu-nt</td>\n        <td class=\"case-cell-tr\">tutacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "5. 1. ve 2. Grup Fiiller: Emir Kipi (Imperativus Praesens)",
        "html": "<p><strong>Kural (Slayt 19):</strong> 1 ve 2. Grup Fiillerin Emir Kipi Tekil 2. Şahıslarının çekimi, söz konusu fiillerin Şimdiki Zaman Gövdeleriyle aynıdır. Çoğul 2. Şahısta ise gövdeye <em>-te</em> eki gelir.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">EMİR KİPİ (IMPERATIVUS) TABLOSU</span>\n    <strong class=\"table-title\">1 ve 2. Grup Fiiller Emir Kipi Tablosu</strong>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Fiil & Anlam</th>\n        <th>2. Tekil (Sen)</th>\n        <th>2. Çoğul (Siz)</th>\n        <th>Olumsuz Tekil (Sen)</th>\n        <th>Olumsuz Çoğul (Siz)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>ămo, -āre</strong><br><small class=\"case-cell-tr\">sevmek</small></td>\n        <td class=\"case-cell-latin\">amā (Sev!)</td>\n        <td class=\"case-cell-latin\">amā-te (Seviniz!)</td>\n        <td class=\"case-cell-latin\">nōlī amāre (Sevme!)</td>\n        <td class=\"case-cell-latin\">nōlīte amāre (Sevmeyiniz!)</td>\n      </tr>\n      <tr>\n        <td><strong>laudō, -āre</strong><br><small class=\"case-cell-tr\">övmek</small></td>\n        <td class=\"case-cell-latin\">laudā (Öv!)</td>\n        <td class=\"case-cell-latin\">laudā-te (Övünüz!)</td>\n        <td class=\"case-cell-latin\">nōlī laudāre (Övme!)</td>\n        <td class=\"case-cell-latin\">nōlīte laudāre (Övmeyiniz!)</td>\n      </tr>\n      <tr>\n        <td><strong>mŏnĕo, -ēre</strong><br><small class=\"case-cell-tr\">uyarmak</small></td>\n        <td class=\"case-cell-latin\">monē (Uyar!)</td>\n        <td class=\"case-cell-latin\">monē-te (Uyarınız!)</td>\n        <td class=\"case-cell-latin\">nōlī monēre (Uyar!)</td>\n        <td class=\"case-cell-latin\">nōlīte monēre (Uyarmayınız!)</td>\n      </tr>\n      <tr>\n        <td><strong>teneō, -ēre</strong><br><small class=\"case-cell-tr\">tutmak</small></td>\n        <td class=\"case-cell-latin\">tenē (Tut!)</td>\n        <td class=\"case-cell-latin\">tenē-te (Tutunuz!)</td>\n        <td class=\"case-cell-latin\">nōlī tenēre (Tutma!)</td>\n        <td class=\"case-cell-latin\">nōlīte tenēre (Tutmayınız!)</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Olumsuz emir (Prohibitio) nōlī / nōlīte + Infinitivus (Mastar) yapısıyla kurulur.</div>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Nihil me terret.",
        "tr": "Hiçbir şey beni korkutmuyor.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Apollo me saepe servat.",
        "tr": "Apollo beni sık sık korur.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Saepe nihil cogitas.",
        "tr": "Sık sık hiçbir şey düşünmüyorsun.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Festina lente.",
        "tr": "Yavaşça acele et.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Mone me, si erro.",
        "tr": "Hata yaparsam beni uyar.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Labor me vocat.",
        "tr": "İş beni çağırıyor.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Nihil videmus.",
        "tr": "Hiçbir şey görmüyoruz.",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Salve, discipula!",
        "tr": "Selam sana, kız öğrenci!",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Salvete, discipulae!",
        "tr": "Selam size, kız öğrenciler!",
        "analysis": "Giriş Alıştırması",
        "notes": "Giriş Alıştırması",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "Imperfectum ekindeki '-ba-' ve Futurum ekindeki '-b-' heceleri fiilin zamanını tanımanın en kesin anahtarlarıdır."
  },
  {
    "id": "T1_W3_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 3,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 3. Hafta (1. Ders)",
    "title": "2. GRUP İSİMLER (DECLINATIO II: -US, -ER, -IR, -UM)",
    "subtitle": "Eril ve Nötr Çekimler, 'e' Düşüren ve Koruyan İsimler ve Mukayese Tabloları",
    "summary": "Bu fasikülde Tekil Genetivus hali -ī ile biten 2. Grup isimleri, bu gruptaki eril (-us, -er, -ir) ve nötr (-um) kelimeleri, Eyüp Hoca'nın ders slaytlarında verdiği 9 model ismin (populus, puer, vir, lucifer, magister, ager, liber, bellum, templum, consilium) ve 3 mukayese tablosunun tamamını göreceksiniz.",
    "difficulty": "Temel Seviye",
    "sourceFile": "LatinceGramer3.1.pdf",
    "slideCount": 23,
    "topics": ["2. Grup İsimler (Declinatio II)", "Eril İsimler (-us)", "-er ile Bitenler ('e' Koruyan ve Düşüren)", "vir, viri (-ir)", "Nötr İsimler (-um)", "Evrensel Nötr Kuralı", "Üçlü Karşılaştırma"],
    "vocab": ["populus", "puer", "vir", "lucifer", "magister", "ager", "liber", "bellum", "templum", "consilium", "amicus"],
    "sections": [
      {
        "title": "1. -us ile Biten Eril İsim: populus, -ī, m. (halk)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 7 çekim tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">populus (2. Grup Eril)</strong>\n    <span class=\"table-sub\">(populus, populī, m. — halk)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">populus</td>\n        <td class=\"case-cell-latin\">populī</td>\n        <td class=\"case-cell-tr\">halk / halklar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">popule</td>\n        <td class=\"case-cell-latin\">populī</td>\n        <td class=\"case-cell-tr\">ey halk / ey halklar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">populī</td>\n        <td class=\"case-cell-latin\">populōrum</td>\n        <td class=\"case-cell-tr\">halkın / halkların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">populō</td>\n        <td class=\"case-cell-latin\">populīs</td>\n        <td class=\"case-cell-tr\">halka / halk için / halklara / halklar için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">populum</td>\n        <td class=\"case-cell-latin\">populōs</td>\n        <td class=\"case-cell-tr\">halkı / halkları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">populō</td>\n        <td class=\"case-cell-latin\">populīs</td>\n        <td class=\"case-cell-tr\">halkla / halktan / halklarla / halklardan</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Tekil Vocativus hali -e ile biter: popule!</div>\n</div>\n"
      },
      {
        "title": "2. -er ve -ir ile Biten, 'e' Sesini Koruyan Eril İsimler",
        "html": "<p><strong>Kural (Slayt 8-11):</strong> Tekil Nominativus hali <em>-er</em> veya <em>-ir</em> ile biter. Tekil Vocativus hali Nominativus ile aynıdır (puer! vir!). Gövdedeki 'e' sesi çekim boyunca korunur.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">puer (2. Grup Eril - 'e' Koruyan)</strong>\n    <span class=\"table-sub\">(puer, puerī, m. — erkek çocuk, oğlan)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">puer</td>\n        <td class=\"case-cell-latin\">puerī</td>\n        <td class=\"case-cell-tr\">erkek çocuk / erkek çocuklar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">puer</td>\n        <td class=\"case-cell-latin\">puerī</td>\n        <td class=\"case-cell-tr\">ey çocuk / ey çocuklar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">puerī</td>\n        <td class=\"case-cell-latin\">puerōrum</td>\n        <td class=\"case-cell-tr\">çocuğun / çocukların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">puerō</td>\n        <td class=\"case-cell-latin\">puerīs</td>\n        <td class=\"case-cell-tr\">çocuğa / çocuklara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">puerum</td>\n        <td class=\"case-cell-latin\">puerōs</td>\n        <td class=\"case-cell-tr\">çocuğu / çocukları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">puerō</td>\n        <td class=\"case-cell-latin\">puerīs</td>\n        <td class=\"case-cell-tr\">çocukla / çocuktan / çocuklarla / çocuklardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">vir (2. Grup Eril - -ir)</strong>\n    <span class=\"table-sub\">(vir, virī, m. — erkek, adam)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">vir</td>\n        <td class=\"case-cell-latin\">virī</td>\n        <td class=\"case-cell-tr\">adam / adamlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">vir</td>\n        <td class=\"case-cell-latin\">virī</td>\n        <td class=\"case-cell-tr\">ey adam / ey adamlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">virī</td>\n        <td class=\"case-cell-latin\">virōrum</td>\n        <td class=\"case-cell-tr\">adamın / adamların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">virō</td>\n        <td class=\"case-cell-latin\">virīs</td>\n        <td class=\"case-cell-tr\">adama / adamlara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">virum</td>\n        <td class=\"case-cell-latin\">virōs</td>\n        <td class=\"case-cell-tr\">adamı / adamları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">virō</td>\n        <td class=\"case-cell-latin\">virīs</td>\n        <td class=\"case-cell-tr\">adamla / adamdan / adamlarla / adamlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">lucifer (2. Grup Eril - 'e' Koruyan)</strong>\n    <span class=\"table-sub\">(lucifer, luciferī, m. — sabah yıldızı)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">lucifer</td>\n        <td class=\"case-cell-latin\">luciferī</td>\n        <td class=\"case-cell-tr\">sabah yıldızı / sabah yıldızları</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">lucifer</td>\n        <td class=\"case-cell-latin\">luciferī</td>\n        <td class=\"case-cell-tr\">ey sabah yıldızı / ey sabah yıldızları</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">luciferī</td>\n        <td class=\"case-cell-latin\">luciferōrum</td>\n        <td class=\"case-cell-tr\">sabah yıldızının / sabah yıldızlarının</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">luciferō</td>\n        <td class=\"case-cell-latin\">luciferīs</td>\n        <td class=\"case-cell-tr\">sabah yıldızına / sabah yıldızlarına</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">luciferum</td>\n        <td class=\"case-cell-latin\">luciferōs</td>\n        <td class=\"case-cell-tr\">sabah yıldızını / sabah yıldızlarını</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">luciferō</td>\n        <td class=\"case-cell-latin\">luciferīs</td>\n        <td class=\"case-cell-tr\">sabah yıldızıyla / sabah yıldızlarıyla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. -er ile Biten, Gövdelerindeki 'e' Sesi Düşen Eril İsimler",
        "html": "<p><strong>Kural (Slayt 12-14):</strong> Tekil Nominativus ve Vocativus dışında, Tekil Genetivus'tan itibaren gövdedeki 'e' sesi düşer (magister &gt; magistrī &gt; gövde: <strong>magistr-</strong>; ager &gt; agrī &gt; gövde: <strong>agr-</strong>; liber &gt; librī &gt; gövde: <strong>libr-</strong>).</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">magister (2. Grup Eril - 'e' Düşen)</strong>\n    <span class=\"table-sub\">(magister, magistrī, m. — öğretmen)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">magister</td>\n        <td class=\"case-cell-latin\">magistrī</td>\n        <td class=\"case-cell-tr\">öğretmen / öğretmenler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">magister</td>\n        <td class=\"case-cell-latin\">magistrī</td>\n        <td class=\"case-cell-tr\">ey öğretmen / ey öğretmenler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">magistrī</td>\n        <td class=\"case-cell-latin\">magistrōrum</td>\n        <td class=\"case-cell-tr\">öğretmenin / öğretmenlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">magistrō</td>\n        <td class=\"case-cell-latin\">magistrīs</td>\n        <td class=\"case-cell-tr\">öğretmene / öğretmenlere</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">magistrum</td>\n        <td class=\"case-cell-latin\">magistrōs</td>\n        <td class=\"case-cell-tr\">öğretmeni / öğretmenleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">magistrō</td>\n        <td class=\"case-cell-latin\">magistrīs</td>\n        <td class=\"case-cell-tr\">öğretmenle / öğretmenlerle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ager (2. Grup Eril - 'e' Düşen)</strong>\n    <span class=\"table-sub\">(ager, agrī, m. — tarla)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">ager</td>\n        <td class=\"case-cell-latin\">agrī</td>\n        <td class=\"case-cell-tr\">tarla / tarlalar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">ager</td>\n        <td class=\"case-cell-latin\">agrī</td>\n        <td class=\"case-cell-tr\">ey tarla / ey tarlalar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">agrī</td>\n        <td class=\"case-cell-latin\">agrōrum</td>\n        <td class=\"case-cell-tr\">tarlanın / tarlaların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">agrō</td>\n        <td class=\"case-cell-latin\">agrīs</td>\n        <td class=\"case-cell-tr\">tarlaya / tarlalara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">agrum</td>\n        <td class=\"case-cell-latin\">agrōs</td>\n        <td class=\"case-cell-tr\">tarlayı / tarlaları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">agrō</td>\n        <td class=\"case-cell-latin\">agrīs</td>\n        <td class=\"case-cell-tr\">tarlayla / tarlalarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">liber (2. Grup Eril - 'e' Düşen)</strong>\n    <span class=\"table-sub\">(liber, librī, m. — kitap)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">liber</td>\n        <td class=\"case-cell-latin\">librī</td>\n        <td class=\"case-cell-tr\">kitap / kitaplar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">liber</td>\n        <td class=\"case-cell-latin\">librī</td>\n        <td class=\"case-cell-tr\">ey kitap / ey kitaplar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">librī</td>\n        <td class=\"case-cell-latin\">librōrum</td>\n        <td class=\"case-cell-tr\">kitabın / kitapların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">librō</td>\n        <td class=\"case-cell-latin\">librīs</td>\n        <td class=\"case-cell-tr\">kitaba / kitaplara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">librum</td>\n        <td class=\"case-cell-latin\">librōs</td>\n        <td class=\"case-cell-tr\">kitabı / kitapları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">librō</td>\n        <td class=\"case-cell-latin\">librīs</td>\n        <td class=\"case-cell-tr\">kitapla / kitaplarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. Karşılaştırma: -e Sesi Düşen ve Düşmeyen Eril İsimler",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 15 karşılaştırma tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">2. Grup İsimler: puer (-e koruyan) vs liber (-e düşen)</strong>\n    <span class=\"table-sub\">(Slayt 15)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Sg. (-e düşmeyen)</th>\n        <th>Sg. (-e düşen)</th>\n        <th>Pl. (-e düşmeyen)</th>\n        <th>Pl. (-e düşen)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">puer</td>\n        <td class=\"case-cell-latin\">liber</td>\n        <td class=\"case-cell-latin\">puer-ī</td>\n        <td class=\"case-cell-latin\">libr-ī</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">puer</td>\n        <td class=\"case-cell-latin\">liber</td>\n        <td class=\"case-cell-latin\">puer-ī</td>\n        <td class=\"case-cell-latin\">libr-ī</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">puer-ī</td>\n        <td class=\"case-cell-latin\">libr-ī</td>\n        <td class=\"case-cell-latin\">puer-ōrum</td>\n        <td class=\"case-cell-latin\">libr-ōrum</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">puer-ō</td>\n        <td class=\"case-cell-latin\">libr-ō</td>\n        <td class=\"case-cell-latin\">puer-īs</td>\n        <td class=\"case-cell-latin\">libr-īs</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">puer-um</td>\n        <td class=\"case-cell-latin\">libr-um</td>\n        <td class=\"case-cell-latin\">puer-ōs</td>\n        <td class=\"case-cell-latin\">libr-ōs</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">puer-ō</td>\n        <td class=\"case-cell-latin\">libr-ō</td>\n        <td class=\"case-cell-latin\">puer-īs</td>\n        <td class=\"case-cell-latin\">libr-īs</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "5. 2. Grup Cinssiz (Neutrum) İsimler: bellum, templum, consilium",
        "html": "<p><strong>Evrensel Nötr Kuralı (Slayt 16-19):</strong> Tekil Nom, Voc, Acc takısı <em>-um</em>; Çoğul Nom, Voc, Acc takısı ise daima kısa <em>-a</em> ile biter!</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">bellum (2. Grup Nötr)</strong>\n    <span class=\"table-sub\">(bellum, bellī, n. — savaş)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">bell-um</td>\n        <td class=\"case-cell-latin\">bell-a</td>\n        <td class=\"case-cell-tr\">savaş / savaşlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">bell-um</td>\n        <td class=\"case-cell-latin\">bell-a</td>\n        <td class=\"case-cell-tr\">ey savaş / ey savaşlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">bell-ī</td>\n        <td class=\"case-cell-latin\">bell-ōrum</td>\n        <td class=\"case-cell-tr\">savaşın / savaşların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">bell-ō</td>\n        <td class=\"case-cell-latin\">bell-īs</td>\n        <td class=\"case-cell-tr\">savaşa / savaş için / savaşlara / savaşlar için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">bell-um</td>\n        <td class=\"case-cell-latin\">bell-a</td>\n        <td class=\"case-cell-tr\">savaşı / savaşları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">bell-ō</td>\n        <td class=\"case-cell-latin\">bell-īs</td>\n        <td class=\"case-cell-tr\">savaşla / savaştan / savaşlarla / savaşlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">templum (2. Grup Nötr)</strong>\n    <span class=\"table-sub\">(templum, templī, n. — tapınak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n        <td class=\"case-cell-tr\">tapınak / tapınaklar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n        <td class=\"case-cell-tr\">ey tapınak / ey tapınaklar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">templ-ī</td>\n        <td class=\"case-cell-latin\">templ-ōrum</td>\n        <td class=\"case-cell-tr\">tapınağın / tapınakların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">templ-ō</td>\n        <td class=\"case-cell-latin\">templ-īs</td>\n        <td class=\"case-cell-tr\">tapınağa / için / tapınaklara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n        <td class=\"case-cell-tr\">tapınağı / tapınakları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">templ-ō</td>\n        <td class=\"case-cell-latin\">templ-īs</td>\n        <td class=\"case-cell-tr\">tapınakla / tapınaktan / tapınaklarla / tapınaklardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">consilium (2. Grup Nötr)</strong>\n    <span class=\"table-sub\">(consilium, consiliī, n. — karar, plan, tasarı)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">consili-um</td>\n        <td class=\"case-cell-latin\">consili-a</td>\n        <td class=\"case-cell-tr\">karar / tasarı / kararlar / tasarılar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">consili-um</td>\n        <td class=\"case-cell-latin\">consili-a</td>\n        <td class=\"case-cell-tr\">ey karar / ey kararlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">consili-ī</td>\n        <td class=\"case-cell-latin\">consili-ōrum</td>\n        <td class=\"case-cell-tr\">kararın / kararların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">consili-ō</td>\n        <td class=\"case-cell-latin\">consili-īs</td>\n        <td class=\"case-cell-tr\">karara / kararlara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">consili-um</td>\n        <td class=\"case-cell-latin\">consili-a</td>\n        <td class=\"case-cell-tr\">kararı / kararları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">consili-ō</td>\n        <td class=\"case-cell-latin\">consili-īs</td>\n        <td class=\"case-cell-tr\">kararla / kararlarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "6. 2. Grup İsimlerin Büyük Mukayese Tabloları",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 20 ve 21 karşılaştırma tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Karşılaştırma: amicus (-us Eril) vs templum (-um Nötr)</strong>\n    <span class=\"table-sub\">(Slayt 20)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus</th>\n        <th>Sg. (-us)</th>\n        <th>Sg. (-um)</th>\n        <th>Pl. (-us)</th>\n        <th>Pl. (-um)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">amic-us</td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">amic-ī</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">amic-e</td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">amic-ī</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">amic-ī</td>\n        <td class=\"case-cell-latin\">templ-ī</td>\n        <td class=\"case-cell-latin\">amic-ōrum</td>\n        <td class=\"case-cell-latin\">templ-ōrum</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">amic-ō</td>\n        <td class=\"case-cell-latin\">templ-ō</td>\n        <td class=\"case-cell-latin\">amic-īs</td>\n        <td class=\"case-cell-latin\">templ-īs</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">amic-um</td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">amic-ōs</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">amic-ō</td>\n        <td class=\"case-cell-latin\">templ-ō</td>\n        <td class=\"case-cell-latin\">amic-īs</td>\n        <td class=\"case-cell-latin\">templ-īs</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Karşılaştırma: amicus (-us) vs puer (-er) vs templum (-um)</strong>\n    <span class=\"table-sub\">(Slayt 21)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus</th>\n        <th>Sg. (-us)</th>\n        <th>Sg. (-er)</th>\n        <th>Sg. (-um)</th>\n        <th>Pl. (-us)</th>\n        <th>Pl. (-er)</th>\n        <th>Pl. (-um)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom.</strong></td>\n        <td class=\"case-cell-latin\">amic-us</td>\n        <td class=\"case-cell-latin\">puer</td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">amic-ī</td>\n        <td class=\"case-cell-latin\">puer-ī</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n      </tr>\n      <tr>\n        <td><strong>Voc.</strong></td>\n        <td class=\"case-cell-latin\">amic-e</td>\n        <td class=\"case-cell-latin\">puer</td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">amic-ī</td>\n        <td class=\"case-cell-latin\">puer-ī</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n      </tr>\n      <tr>\n        <td><strong>Gen.</strong></td>\n        <td class=\"case-cell-latin\">amic-ī</td>\n        <td class=\"case-cell-latin\">puer-ī</td>\n        <td class=\"case-cell-latin\">templ-ī</td>\n        <td class=\"case-cell-latin\">amic-ōrum</td>\n        <td class=\"case-cell-latin\">puer-ōrum</td>\n        <td class=\"case-cell-latin\">templ-ōrum</td>\n      </tr>\n      <tr>\n        <td><strong>Dat.</strong></td>\n        <td class=\"case-cell-latin\">amic-ō</td>\n        <td class=\"case-cell-latin\">puer-ō</td>\n        <td class=\"case-cell-latin\">templ-ō</td>\n        <td class=\"case-cell-latin\">amic-īs</td>\n        <td class=\"case-cell-latin\">puer-īs</td>\n        <td class=\"case-cell-latin\">templ-īs</td>\n      </tr>\n      <tr>\n        <td><strong>Acc.</strong></td>\n        <td class=\"case-cell-latin\">amic-um</td>\n        <td class=\"case-cell-latin\">puer-um</td>\n        <td class=\"case-cell-latin\">templ-um</td>\n        <td class=\"case-cell-latin\">amic-ōs</td>\n        <td class=\"case-cell-latin\">puer-ōs</td>\n        <td class=\"case-cell-latin\">templ-a</td>\n      </tr>\n      <tr>\n        <td><strong>Abl.</strong></td>\n        <td class=\"case-cell-latin\">amic-ō</td>\n        <td class=\"case-cell-latin\">puer-ō</td>\n        <td class=\"case-cell-latin\">templ-ō</td>\n        <td class=\"case-cell-latin\">amic-īs</td>\n        <td class=\"case-cell-latin\">puer-īs</td>\n        <td class=\"case-cell-latin\">templ-īs</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
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
    "title": "2. VE 1. GRUP İSİMLERDE İSTİSNALAR VE ÖZEL ÇEKİMLER",
    "subtitle": "filius, deus, liber Çekimleri, 1. Grup Tekrarı, Eril İsimler (poeta) ve Grekçe İsimler (Aeneas)",
    "summary": "Bu fasikülde 2. gruptaki özel isimleri (filius Vocativus istisnası, deus düzensiz çoğul biçimleri), 1. gruptaki eril meslek isimlerini (poeta) ve Grekçe çekim kalıntılarını (Aeneas) tüm ders slaytı tablolarıyla öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer3.2.pdf",
    "slideCount": 24,
    "topics": ["filius Çekimi (Voc. fili)", "deus Çekimi (di / dis)", "liber, libri Tekrar", "1. Grup Tekrar (causa)", "1. Grup Eril İsimler (poeta)", "Grekçe İsimler (Aeneas)"],
    "vocab": ["filius", "deus", "liber", "causa", "poeta", "Aeneas", "in", "hodie", "semper", "fortuna", "agricola"],
    "sections": [
      {
        "title": "1. 2. Grup İstisnalar: filius ve deus",
        "html": "<p><strong>filius (Slayt 4):</strong> Tekil Vocativus hali <em>fili</em>, Tekil Genetivus hali <em>filii</em> veya <em>fili</em> olur.<br><strong>deus (Slayt 6):</strong> Tekil Vocativus <em>deus</em>; Çoğul Nom/Voc <em>deī / diī / dī</em>; Çoğul Dat/Abl <em>deīs / diīs / dīs</em> olur.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">fīlius, -ī, m. (oğul, evlat)</strong>\n    <span class=\"table-sub\">(fīlius, fīliī, m. — oğul, evlat)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">fīli-us</td>\n        <td class=\"case-cell-latin\">fīli-ī</td>\n        <td class=\"case-cell-tr\">oğul / oğullar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">fīl-ī</td>\n        <td class=\"case-cell-latin\">fīli-ī</td>\n        <td class=\"case-cell-tr\">ey oğul / ey oğullar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">fīli-ī / fīl-ī</td>\n        <td class=\"case-cell-latin\">fīli-ōrum</td>\n        <td class=\"case-cell-tr\">oğulun / oğulların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">fīli-ō</td>\n        <td class=\"case-cell-latin\">fīli-īs</td>\n        <td class=\"case-cell-tr\">oğula / oğullara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">fīli-um</td>\n        <td class=\"case-cell-latin\">fīli-ōs</td>\n        <td class=\"case-cell-tr\">oğulu / oğulları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">fīli-ō</td>\n        <td class=\"case-cell-latin\">fīli-īs</td>\n        <td class=\"case-cell-tr\">oğulla / oğullarla</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Tekil Vocativus fili!</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">deus, -ī, m. (tanrı)</strong>\n    <span class=\"table-sub\">(deus, deī, m. — tanrı)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">deus</td>\n        <td class=\"case-cell-latin\">deī / diī / dī</td>\n        <td class=\"case-cell-tr\">tanrı / tanrılar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">deus</td>\n        <td class=\"case-cell-latin\">deī / diī / dī</td>\n        <td class=\"case-cell-tr\">ey tanrı / ey tanrılar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">deī</td>\n        <td class=\"case-cell-latin\">deōrum</td>\n        <td class=\"case-cell-tr\">tanrının / tanrıların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">deō</td>\n        <td class=\"case-cell-latin\">deīs / diīs / dīs</td>\n        <td class=\"case-cell-tr\">tanrıya / tanrılara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">deum</td>\n        <td class=\"case-cell-latin\">deōs</td>\n        <td class=\"case-cell-tr\">tanrıyı / tanrıları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">deō</td>\n        <td class=\"case-cell-latin\">deīs / diīs / dīs</td>\n        <td class=\"case-cell-tr\">tanrıyla / tanrılarla</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Çoğul biçimlerdeki ikincil ve üçüncül alternatiflere dikkat ediniz.</div>\n</div>\n"
      },
      {
        "title": "2. 1. Grup İstisnalar: Eril İsimler (poeta) ve Grekçe İsimler (Aeneas)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 15 ve 19 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">poēta, -ae, m. (1. Grup Eril İsim)</strong>\n    <span class=\"table-sub\">(poēta, poētae, m. — şair)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">poēt-a</td>\n        <td class=\"case-cell-latin\">poēt-ae</td>\n        <td class=\"case-cell-tr\">şair / şairler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">poēt-a</td>\n        <td class=\"case-cell-latin\">poēt-ae</td>\n        <td class=\"case-cell-tr\">ey şair / ey şairler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">poēt-ae</td>\n        <td class=\"case-cell-latin\">poēt-ārum</td>\n        <td class=\"case-cell-tr\">şairin / şairlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">poēt-ae</td>\n        <td class=\"case-cell-latin\">poēt-īs</td>\n        <td class=\"case-cell-tr\">şaire / şairlere</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">poēt-am</td>\n        <td class=\"case-cell-latin\">poēt-ās</td>\n        <td class=\"case-cell-tr\">şairi / şairleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">poēt-ā</td>\n        <td class=\"case-cell-latin\">poēt-īs</td>\n        <td class=\"case-cell-tr\">şairle / şairlerle</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> 1. grupta olmasına rağmen anlamı gereği ERİLDİR (m.).</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Aenēās, -ae, m. (Grekçe Çekimli İsim)</strong>\n    <span class=\"table-sub\">(Slayt 19)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">Aenēās (Grek Nom.) / Aenēa</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">Aenēa</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">Aenēae</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">Aenēae</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">Aenēān (Grek Acc.) / Aenēam</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">Aenēā</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Grekçe kökenli isimler Klasik Latincede Grekçe -as ve -an takılarını sıklıkla korurlar.</div>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Filium nautae in agris videmus.",
        "tr": "Gemicinin oğlunu tarlalarda görüyoruz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pueri puellas hodie vocant.",
        "tr": "Çocuklar kızları bugün çağırıyorlar.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sapientiam semper laudat.",
        "tr": "Her zaman bilgeliği yüceltir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Fortuna viros amat.",
        "tr": "Talih yiğitleri sever.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Agricola filiabus pecuniam dat.",
        "tr": "Çiftçi kız çocuklarına para verir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "filius kelimesinin Vocativus hali fili, deus kelimesinin Vocativus hali deus şeklindedir; bunları standart kurallardan ayıran özel yapılardır."
  },
  {
    "id": "T1_W4_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 4,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 4. Hafta (1. Ders)",
    "title": "1. VE 2. SINIF SIFATLAR VE İSİM-SIFAT TAMLAMALARI",
    "subtitle": "bonus, miser, niger Modelleri, Sıfat Tamlaması ve İsim Tamlaması Çekimi",
    "summary": "Bu fasikülde 1. ve 2. sınıf sıfatların üç cins çekimini (-us, -a, -um; -er, -era, -erum; -er, -ra, -rum), isim-sıfat tamlamalarının (epistula longa) ve iki isimden oluşan tamlamaların (philosophi liber) tüm hallerdeki çekimini göreceksiniz.",
    "difficulty": "Temel Seviye",
    "sourceFile": "LatinceGramer4.1.pdf",
    "slideCount": 20,
    "topics": ["1. ve 2. Sınıf Sıfatlar", "bonus, bona, bonum", "miser, misera, miserum", "niger, nigra, nigrum", "Sıfat Tamlaması Çekimi", "İsim Tamlaması Çekimi"],
    "vocab": ["bonus", "miser", "niger", "epistula", "longus", "philosophus", "liber"],
    "sections": [
      {
        "title": "1. Eril Nominativus'u -us ile Biten Sıfatlar: bonus, bona, bonum",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 5 çekim tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">bonus, bona, bonum (iyi) (Singularis (Tekil))</strong>\n    <span class=\"table-sub\">(Slayt 5)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">bon-us</td>\n        <td class=\"case-cell-latin\">bon-a</td>\n        <td class=\"case-cell-latin\">bon-um</td>\n        <td class=\"case-cell-tr\">iyi</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">bon-e</td>\n        <td class=\"case-cell-latin\">bon-a</td>\n        <td class=\"case-cell-latin\">bon-um</td>\n        <td class=\"case-cell-tr\">Ey iyi</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">bon-ī</td>\n        <td class=\"case-cell-latin\">bon-ae</td>\n        <td class=\"case-cell-latin\">bon-ī</td>\n        <td class=\"case-cell-tr\">iyinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">bon-ō</td>\n        <td class=\"case-cell-latin\">bon-ae</td>\n        <td class=\"case-cell-latin\">bon-ō</td>\n        <td class=\"case-cell-tr\">iyiye</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">bon-um</td>\n        <td class=\"case-cell-latin\">bon-am</td>\n        <td class=\"case-cell-latin\">bon-um</td>\n        <td class=\"case-cell-tr\">iyiyi</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">bon-ō</td>\n        <td class=\"case-cell-latin\">bon-ā</td>\n        <td class=\"case-cell-latin\">bon-ō</td>\n        <td class=\"case-cell-tr\">iyiyle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">bonus, bona, bonum (iyi) (Pluralis (Çoğul))</strong>\n    <span class=\"table-sub\">(Slayt 5)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">bon-ī</td>\n        <td class=\"case-cell-latin\">bon-ae</td>\n        <td class=\"case-cell-latin\">bon-a</td>\n        <td class=\"case-cell-tr\">iyiler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">bon-ī</td>\n        <td class=\"case-cell-latin\">bon-ae</td>\n        <td class=\"case-cell-latin\">bon-a</td>\n        <td class=\"case-cell-tr\">Ey iyiler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">bon-ōrum</td>\n        <td class=\"case-cell-latin\">bon-ārum</td>\n        <td class=\"case-cell-latin\">bon-ōrum</td>\n        <td class=\"case-cell-tr\">iyilerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">bon-īs</td>\n        <td class=\"case-cell-latin\">bon-īs</td>\n        <td class=\"case-cell-latin\">bon-īs</td>\n        <td class=\"case-cell-tr\">iyilere</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">bon-ōs</td>\n        <td class=\"case-cell-latin\">bon-ās</td>\n        <td class=\"case-cell-latin\">bon-a</td>\n        <td class=\"case-cell-tr\">iyileri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">bon-īs</td>\n        <td class=\"case-cell-latin\">bon-īs</td>\n        <td class=\"case-cell-latin\">bon-īs</td>\n        <td class=\"case-cell-tr\">iyilerle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Eril Nominativus'u -er ile Biten Sıfatlar: miser & niger",
        "html": "<p><strong>Slayt 6-7:</strong> Gövdelerindeki -e sesini koruyanlar (miser, misera, miserum) ve düşürenler (niger, nigra, nigrum):</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">miser, misera, miserum ('e' Koruyan - zavallı) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 6)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">miser</td>\n        <td class=\"case-cell-latin\">miser-a</td>\n        <td class=\"case-cell-latin\">miser-um</td>\n        <td class=\"case-cell-tr\">zavallı</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">miser</td>\n        <td class=\"case-cell-latin\">miser-a</td>\n        <td class=\"case-cell-latin\">miser-um</td>\n        <td class=\"case-cell-tr\">Ey zavallı</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">miser-ī</td>\n        <td class=\"case-cell-latin\">miser-ae</td>\n        <td class=\"case-cell-latin\">miser-ī</td>\n        <td class=\"case-cell-tr\">zavallının</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">miser-ō</td>\n        <td class=\"case-cell-latin\">miser-ae</td>\n        <td class=\"case-cell-latin\">miser-ō</td>\n        <td class=\"case-cell-tr\">zavallıya</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">miser-um</td>\n        <td class=\"case-cell-latin\">miser-am</td>\n        <td class=\"case-cell-latin\">miser-um</td>\n        <td class=\"case-cell-tr\">zavallıyı</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">miser-ō</td>\n        <td class=\"case-cell-latin\">miser-ā</td>\n        <td class=\"case-cell-latin\">miser-ō</td>\n        <td class=\"case-cell-tr\">zavallıyla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">niger, nigra, nigrum ('e' Düşüren - siyah) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 7)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">niger</td>\n        <td class=\"case-cell-latin\">nigr-a</td>\n        <td class=\"case-cell-latin\">nigr-um</td>\n        <td class=\"case-cell-tr\">siyah</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">niger</td>\n        <td class=\"case-cell-latin\">nigr-a</td>\n        <td class=\"case-cell-latin\">nigr-um</td>\n        <td class=\"case-cell-tr\">Ey siyah</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">nigr-ī</td>\n        <td class=\"case-cell-latin\">nigr-ae</td>\n        <td class=\"case-cell-latin\">nigr-ī</td>\n        <td class=\"case-cell-tr\">siyahın</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">nigr-ō</td>\n        <td class=\"case-cell-latin\">nigr-ae</td>\n        <td class=\"case-cell-latin\">nigr-ō</td>\n        <td class=\"case-cell-tr\">siyaha</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">nigr-um</td>\n        <td class=\"case-cell-latin\">nigr-am</td>\n        <td class=\"case-cell-latin\">nigr-um</td>\n        <td class=\"case-cell-tr\">siyahı</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">nigr-ō</td>\n        <td class=\"case-cell-latin\">nigr-ā</td>\n        <td class=\"case-cell-latin\">nigr-ō</td>\n        <td class=\"case-cell-tr\">siyahla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Tamlama Çekimleri: Sıfat Tamlaması ve İsim Tamlaması",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 9, 17 ve 18 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Sıfat Tamlaması Çekimi: epistula longa (uzun mektup)</strong>\n    <span class=\"table-sub\">(Slayt 9)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom.</strong></td>\n        <td class=\"case-cell-latin\">epistula longa</td>\n        <td class=\"case-cell-latin\">epistulae longae</td>\n        <td class=\"case-cell-tr\">uzun mektup / uzun mektuplar</td>\n      </tr>\n      <tr>\n        <td><strong>Voc.</strong></td>\n        <td class=\"case-cell-latin\">epistula longa</td>\n        <td class=\"case-cell-latin\">epistulae longae</td>\n        <td class=\"case-cell-tr\">ey uzun mektup / ey uzun mektuplar</td>\n      </tr>\n      <tr>\n        <td><strong>Gen.</strong></td>\n        <td class=\"case-cell-latin\">epistulae longae</td>\n        <td class=\"case-cell-latin\">epistulārum longārum</td>\n        <td class=\"case-cell-tr\">uzun mektubun / uzun mektupların</td>\n      </tr>\n      <tr>\n        <td><strong>Dat.</strong></td>\n        <td class=\"case-cell-latin\">epistulae longae</td>\n        <td class=\"case-cell-latin\">epistulīs longīs</td>\n        <td class=\"case-cell-tr\">uzun mektuba / uzun mektuplara</td>\n      </tr>\n      <tr>\n        <td><strong>Acc.</strong></td>\n        <td class=\"case-cell-latin\">epistulam longam</td>\n        <td class=\"case-cell-latin\">epistulās longās</td>\n        <td class=\"case-cell-tr\">uzun mektubu / uzun mektupları</td>\n      </tr>\n      <tr>\n        <td><strong>Abl.</strong></td>\n        <td class=\"case-cell-latin\">epistulā longā</td>\n        <td class=\"case-cell-latin\">epistulīs longīs</td>\n        <td class=\"case-cell-tr\">uzun mektupla / uzun mektuplarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">İsim Tamlaması Çekimi: philosophi liber vs philosophorum liber</strong>\n    <span class=\"table-sub\">(Slayt 17-18)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus</th>\n        <th>Tekil Tamlayan (filozofun kitabı)</th>\n        <th>Çoğul Tamlayan (filozofların kitabı)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom.</strong></td>\n        <td class=\"case-cell-latin\">philosophī liber</td>\n        <td class=\"case-cell-latin\">philosophōrum liber</td>\n      </tr>\n      <tr>\n        <td><strong>Voc.</strong></td>\n        <td class=\"case-cell-latin\">philosophī liber</td>\n        <td class=\"case-cell-latin\">philosophōrum liber</td>\n      </tr>\n      <tr>\n        <td><strong>Gen.</strong></td>\n        <td class=\"case-cell-latin\">philosophī librī</td>\n        <td class=\"case-cell-latin\">philosophōrum librī</td>\n      </tr>\n      <tr>\n        <td><strong>Dat.</strong></td>\n        <td class=\"case-cell-latin\">philosophī librō</td>\n        <td class=\"case-cell-latin\">philosophōrum librō</td>\n      </tr>\n      <tr>\n        <td><strong>Acc.</strong></td>\n        <td class=\"case-cell-latin\">philosophī librum</td>\n        <td class=\"case-cell-latin\">philosophōrum librum</td>\n      </tr>\n      <tr>\n        <td><strong>Abl.</strong></td>\n        <td class=\"case-cell-latin\">philosophī librō</td>\n        <td class=\"case-cell-latin\">philosophōrum librō</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> İsim tamlamasında tamlayan (Genetivus) halini korurken, tamlanan isim cümlenin gerektirdiği hale göre çekimlenir.</div>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "Bir sıfat tamlamasında sıfatın ismin arkasına gelmesi kuraldır; ancak özel bir vurgu veya edebi anlatımda başa geçebilir."
  },
  {
    "id": "T1_W4_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 4,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 4. Hafta (2. Ders)",
    "title": "DÜZENSİZ SIFATLAR (UNUS NAUTA) VE ESSE (OLMAK) FİİLİ",
    "subtitle": "Zamir Değeri Taşıyan Dokuz Sıfatın Çekimi, esse Praesens Çekimi ve Örnek Cümleler",
    "summary": "Bu fasikülde Tekil Genetivus hali -īus ve Tekil Dativus hali -ī ile biten meşhur UNUS NAUTA düzensiz sıfatlarını (unus, nullus, ullus, solus, neuter, alius, uter, totus, alter) ve düzensiz esse (olmak) fiilinin Şimdiki Zaman (Praesens) çekimini tüm tablolarıyla öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer4.2.pdf",
    "slideCount": 24,
    "topics": ["UNUS NAUTA Sıfatları", "Tekil Genetivus (-īus) & Dativus (-ī)", "unus, nullus, ullus, solus", "neuter, alius, uter, totus, alter", "esse (sum) Fiili", "Örnek Cümle Analizleri"],
    "vocab": ["unus", "nullus", "ullus", "solus", "neuter", "alius", "uter", "totus", "alter", "sum", "amicus", "poeta", "magnus", "fama", "puer", "et", "puella", "donum", "clarus", "in", "non", "sed", "quoque"],
    "sections": [
      {
        "title": "1. UNUS NAUTA Sıfatları (1. Kısım: ūnus, nūllus, ūllus, sōlus)",
        "html": "<p><strong>Genel Kural:</strong> Bu sıfatların Tekil Genetivus halleri her üç cinste de <strong>-īus</strong>, Tekil Dativus halleri ise her üç cinste de <strong>-ī</strong> ile biter. Diğer halleri 1. ve 2. sınıf sıfatlar gibidir. Çoğullarında hiçbir düzensizlik yoktur.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ūnus, ūna, ūnum (bir, tek) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 7)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ūnus</td>\n        <td class=\"case-cell-latin\">ūna</td>\n        <td class=\"case-cell-latin\">ūnum</td>\n        <td class=\"case-cell-tr\">bir / tek</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey bir / tek</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">ūnīus</td>\n        <td class=\"case-cell-latin\">ūnīus</td>\n        <td class=\"case-cell-latin\">ūnīus</td>\n        <td class=\"case-cell-tr\">birin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">ūnī</td>\n        <td class=\"case-cell-latin\">ūnī</td>\n        <td class=\"case-cell-latin\">ūnī</td>\n        <td class=\"case-cell-tr\">bire</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">ūnum</td>\n        <td class=\"case-cell-latin\">ūnam</td>\n        <td class=\"case-cell-latin\">ūnum</td>\n        <td class=\"case-cell-tr\">biri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">ūnō</td>\n        <td class=\"case-cell-latin\">ūnā</td>\n        <td class=\"case-cell-latin\">ūnō</td>\n        <td class=\"case-cell-tr\">birle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">nūllus, nūlla, nūllum (hiçbir) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 8)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">nūllus</td>\n        <td class=\"case-cell-latin\">nūlla</td>\n        <td class=\"case-cell-latin\">nūllum</td>\n        <td class=\"case-cell-tr\">hiçbir</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey hiçbir</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">nūllīus</td>\n        <td class=\"case-cell-latin\">nūllīus</td>\n        <td class=\"case-cell-latin\">nūllīus</td>\n        <td class=\"case-cell-tr\">hiçbirinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">nūllī</td>\n        <td class=\"case-cell-latin\">nūllī</td>\n        <td class=\"case-cell-latin\">nūllī</td>\n        <td class=\"case-cell-tr\">hiçbirine</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">nūllum</td>\n        <td class=\"case-cell-latin\">nūllam</td>\n        <td class=\"case-cell-latin\">nūllum</td>\n        <td class=\"case-cell-tr\">hiçbirini</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">nūllō</td>\n        <td class=\"case-cell-latin\">nūllā</td>\n        <td class=\"case-cell-latin\">nūllō</td>\n        <td class=\"case-cell-tr\">hiçbiriyle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ūllus, ūlla, ūllum (herhangi bir, hiç) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 9)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ūllus</td>\n        <td class=\"case-cell-latin\">ūlla</td>\n        <td class=\"case-cell-latin\">ūllum</td>\n        <td class=\"case-cell-tr\">herhangi bir</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey herhangi bir</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">ūllīus</td>\n        <td class=\"case-cell-latin\">ūllīus</td>\n        <td class=\"case-cell-latin\">ūllīus</td>\n        <td class=\"case-cell-tr\">herhangi birinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">ūllī</td>\n        <td class=\"case-cell-latin\">ūllī</td>\n        <td class=\"case-cell-latin\">ūllī</td>\n        <td class=\"case-cell-tr\">herhangi birine</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">ūllum</td>\n        <td class=\"case-cell-latin\">ūllam</td>\n        <td class=\"case-cell-latin\">ūllum</td>\n        <td class=\"case-cell-tr\">herhangi birini</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">ūllō</td>\n        <td class=\"case-cell-latin\">ūllā</td>\n        <td class=\"case-cell-latin\">ūllō</td>\n        <td class=\"case-cell-tr\">herhangi biriyle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">sōlus, sōla, sōlum (yalnız, tek) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 10)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">sōlus</td>\n        <td class=\"case-cell-latin\">sōla</td>\n        <td class=\"case-cell-latin\">sōlum</td>\n        <td class=\"case-cell-tr\">yalnız / bir tek</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey yalnız / bir tek</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">sōlīus</td>\n        <td class=\"case-cell-latin\">sōlīus</td>\n        <td class=\"case-cell-latin\">sōlīus</td>\n        <td class=\"case-cell-tr\">yalnızın</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">sōlī</td>\n        <td class=\"case-cell-latin\">sōlī</td>\n        <td class=\"case-cell-latin\">sōlī</td>\n        <td class=\"case-cell-tr\">yıldıza</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">sōlum</td>\n        <td class=\"case-cell-latin\">sōlam</td>\n        <td class=\"case-cell-latin\">sōlum</td>\n        <td class=\"case-cell-tr\">yalnızı</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">sōlō</td>\n        <td class=\"case-cell-latin\">sōlā</td>\n        <td class=\"case-cell-latin\">sōlō</td>\n        <td class=\"case-cell-tr\">yalnızla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. UNUS NAUTA Sıfatları (2. Kısım: neuter, alius, uter, tōtus, alter)",
        "html": "<p><strong>Özel Durumlar (Slayt 11-15):</strong><br>• <em>alius</em> cinssiz tekil hali <strong>aliud</strong> biçimindedir. Tekil Genetivus için genellikle <em>alterīus</em> kullanılır.<br>• <em>neuter</em> ve <em>uter</em> kelimeleri iki şey arasındaki seçimi belirtir.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">neuter, neutra, neutrum (ne biri ne diğeri) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 11)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">neuter</td>\n        <td class=\"case-cell-latin\">neutra</td>\n        <td class=\"case-cell-latin\">neutrum</td>\n        <td class=\"case-cell-tr\">ikisi de değil</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey ikisi de değil</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">neutrīus</td>\n        <td class=\"case-cell-latin\">neutrīus</td>\n        <td class=\"case-cell-latin\">neutrīus</td>\n        <td class=\"case-cell-tr\">ikisinin de değil</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">neutrī</td>\n        <td class=\"case-cell-latin\">neutrī</td>\n        <td class=\"case-cell-latin\">neutrī</td>\n        <td class=\"case-cell-tr\">ikisine de değil</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">neutrum</td>\n        <td class=\"case-cell-latin\">neutram</td>\n        <td class=\"case-cell-latin\">neutrum</td>\n        <td class=\"case-cell-tr\">ikisini de değil</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">neutrō</td>\n        <td class=\"case-cell-latin\">neutrā</td>\n        <td class=\"case-cell-latin\">neutrō</td>\n        <td class=\"case-cell-tr\">ikisiyle de değil</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">alius, alia, aliud (başka, öteki) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 12)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">alius</td>\n        <td class=\"case-cell-latin\">alia</td>\n        <td class=\"case-cell-latin\">aliud</td>\n        <td class=\"case-cell-tr\">başka / diğer</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey başka / diğer</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">alterīus</td>\n        <td class=\"case-cell-latin\">alterīus</td>\n        <td class=\"case-cell-latin\">alterīus</td>\n        <td class=\"case-cell-tr\">başkasının</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">aliī</td>\n        <td class=\"case-cell-latin\">aliī</td>\n        <td class=\"case-cell-latin\">aliī</td>\n        <td class=\"case-cell-tr\">başkasına</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">alium</td>\n        <td class=\"case-cell-latin\">aliam</td>\n        <td class=\"case-cell-latin\">aliud</td>\n        <td class=\"case-cell-tr\">başkasını</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">aliō</td>\n        <td class=\"case-cell-latin\">aliā</td>\n        <td class=\"case-cell-latin\">aliō</td>\n        <td class=\"case-cell-tr\">başkasıyla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">uter, utra, utrum (ikiden hangisi/biri) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 13)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">uter</td>\n        <td class=\"case-cell-latin\">utra</td>\n        <td class=\"case-cell-latin\">utrum</td>\n        <td class=\"case-cell-tr\">ikisinden biri</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey ikisinden biri</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">utrīus</td>\n        <td class=\"case-cell-latin\">utrīus</td>\n        <td class=\"case-cell-latin\">utrīus</td>\n        <td class=\"case-cell-tr\">ikisinden birinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">utrī</td>\n        <td class=\"case-cell-latin\">utrī</td>\n        <td class=\"case-cell-latin\">utrī</td>\n        <td class=\"case-cell-tr\">ikisinden birine</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">utrum</td>\n        <td class=\"case-cell-latin\">utram</td>\n        <td class=\"case-cell-latin\">utrum</td>\n        <td class=\"case-cell-tr\">ikisinden birini</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">utrō</td>\n        <td class=\"case-cell-latin\">utrā</td>\n        <td class=\"case-cell-latin\">utrō</td>\n        <td class=\"case-cell-tr\">ikisinden biriyle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">tōtus, tōta, tōtum (bütün, tüm) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 14)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">tōtus</td>\n        <td class=\"case-cell-latin\">tōta</td>\n        <td class=\"case-cell-latin\">tōtum</td>\n        <td class=\"case-cell-tr\">bütün / tüm</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey bütün / tüm</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">tōtīus</td>\n        <td class=\"case-cell-latin\">tōtīus</td>\n        <td class=\"case-cell-latin\">tōtīus</td>\n        <td class=\"case-cell-tr\">bütünün</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">tōtī</td>\n        <td class=\"case-cell-latin\">tōtī</td>\n        <td class=\"case-cell-latin\">tōtī</td>\n        <td class=\"case-cell-tr\">bütüne</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">tōtum</td>\n        <td class=\"case-cell-latin\">tōtam</td>\n        <td class=\"case-cell-latin\">tōtum</td>\n        <td class=\"case-cell-tr\">bütünü</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">tōtō</td>\n        <td class=\"case-cell-latin\">tōtā</td>\n        <td class=\"case-cell-latin\">tōtō</td>\n        <td class=\"case-cell-tr\">bütünle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">alter, altera, alterum (öteki, diğeri) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 15)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">alter</td>\n        <td class=\"case-cell-latin\">altera</td>\n        <td class=\"case-cell-latin\">alterum</td>\n        <td class=\"case-cell-tr\">öteki / diğer</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey öteki / diğer</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">alterīus</td>\n        <td class=\"case-cell-latin\">alterīus</td>\n        <td class=\"case-cell-latin\">alterīus</td>\n        <td class=\"case-cell-tr\">ötekinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">alterī</td>\n        <td class=\"case-cell-latin\">alterī</td>\n        <td class=\"case-cell-latin\">alterī</td>\n        <td class=\"case-cell-tr\">ötekine</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">alterum</td>\n        <td class=\"case-cell-latin\">alteram</td>\n        <td class=\"case-cell-latin\">alterum</td>\n        <td class=\"case-cell-tr\">ötekini</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">alterō</td>\n        <td class=\"case-cell-latin\">alterā</td>\n        <td class=\"case-cell-latin\">alterō</td>\n        <td class=\"case-cell-tr\">ötekiyle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Düzensiz Fiil: sum, esse, fuī, futūrum (olmak)",
        "html": "<p><strong>Modus Indicativus, Vox Activa, Praesens (Slayt 18):</strong> Düzensiz çekimli olan esse fiilinin şimdiki zaman çekimi Türkçedeki '-dir/-dır' ek eylemine ve 'var olmak' anlamına karşılık gelir:</p>",
        "calloutType": "rule",
        "calloutTitle": "İsim Cümlelerinde Yüklem Uyumu",
        "calloutText": "esse fiiliyle kurulan cümlelerde özne ile yüklem (predicativum) hal bakımından daima aynı halde (Nominativus) olur: Vergilius est poeta (Vergilius bir şairdir). Dona sunt magna (Hediyeler büyüktür).",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">sum, esse (olmak) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(sum, esse — olmak, bulunmak, var olmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">sum</td>\n        <td class=\"case-cell-tr\">oluyorum / varım(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">es</td>\n        <td class=\"case-cell-tr\">oluyorsun / varsın(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">est</td>\n        <td class=\"case-cell-tr\">oluyor / var(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">sumus</td>\n        <td class=\"case-cell-tr\">oluyoruz / varız(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">estis</td>\n        <td class=\"case-cell-tr\">oluyorsunuz / varsınız(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">sunt</td>\n        <td class=\"case-cell-tr\">oluyorlar / varlar(dır)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Vergilius est amicus Augusti.",
        "tr": "Vergilius Augustus’un dostudur.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Vergilius est poeta.",
        "tr": "Vergilius bir şairdir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Vergilius est magnus.",
        "tr": "Vergilius büyüktür (büyük bir insandır.)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Fama Vergilii est magna.",
        "tr": "Vergilius’un şöhreti büyüktür.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ") Amicae sunt bonae.",
        "tr": "Kız arkadaşlar iyidir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pueri debent esse boni.",
        "tr": "Çocuklar iyi olmalıdır. (Çocukların iyi olması gerekir.)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Puer et puella sunt boni.",
        "tr": "Erkek ve kız çocuklar iyidir(ler).",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Donum est magnum.",
        "tr": "Hediye büyüktür.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Dona sunt magna.",
        "tr": "Hediyeler büyüktür(ler).",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sumus Romani.",
        "tr": "Biz Romalıyız. (Romalı erkekleriz.)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sumus Romanae.",
        "tr": "Biz Romalıyız. (Romalı kadınlarız.)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Servi sunt miseri.",
        "tr": "Köleler zavallıdır(lar).",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Poeta est clarus.",
        "tr": "Şair meşhurdur.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Roma in Italia est.",
        "tr": "Roma İtalya’dadır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Italia in Europa est.",
        "tr": "İtalya, Avrupa’dadır. (İtalya Avrupa’da bulunur/yer alır.)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Gallia non in Africa est. Syria non est in Europa, sed in Asia.",
        "tr": "Gallia Afrika’da değildir. Syria, Avrupa’da değildir, ama/aksine Asya’dadır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Germania non in Asia, sed in Europa est.",
        "tr": "Germania Asya’da değil, aksine Avrupa’dadır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Britannia quoque in Europa est. Britannia",
        "tr": "da Avrupa’dadır. (Britannia da Avrupa’da bulunur/yer alır.)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "- Est",
        "tr": "Eski kapı büyük değildir, ama güzeldir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Gallia in Europa?",
        "tr": "- Gallia Avrupa’da mıdır",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "? - Gallia in Europa est.",
        "tr": "- Gallia Avrupa’dadır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Roma in Gallia?",
        "tr": "- Roma Gallia’da mıdır",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "? - Roma in Gallia non est.",
        "tr": "- Roma Gallia’da değildir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Hispania et Italia et Graecia in Europa sunt.",
        "tr": "İspanya, İtalya ve Yunanistan Avrupa’dadır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "UNUS NAUTA kısaltmasını ezberleyiniz: Unus, Nullus, Ullus, Solus, Neuter, Alius, Uter, Totus, Alter."
  },
  {
    "id": "T1_W5_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 5,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 5. Hafta (1. Ders)",
    "title": "1. VE 2. DÖNEM MASTER SÖZLÜK VE KELİME DÜNYASI",
    "subtitle": "1. ve 2. Grup İsimler, 1. ve 2. Grup Fiiller, Zarflar, Edatlar ve Bağlaçlar",
    "summary": "Bu fasikülde Doç. Dr. Eyüp Çoraklı'nın 1. yarıyıl boyunca işlenen tüm kelime dağarcığını bir araya getirdiği Master Sözlük listesini, 1. ve 2. grup isimleri, 1. ve 2. grup fiilleri, zarf, edat ve bağlaçları sistematik morfolojik dökümüyle öğreneceksiniz.",
    "difficulty": "Temel Seviye",
    "sourceFile": "LatinceGramer5.1.pdf",
    "slideCount": 14,
    "topics": ["1. Grup İsimler Sözlüğü", "2. Grup İsimler Sözlüğü", "1. ve 2. Grup Fiiller Sözlüğü", "Zarflar, Edatlar ve Bağlaçlar", "Sözlük Maddesi Okuma Tekniği"],
    "vocab": ["agricola", "amica", "amicitia", "avaritia", "casa", "causa", "cura", "femina", "puella", "terra", "vita", "amicus", "bellum", "deus", "dominus", "donum", "equus", "filius", "liber", "magister", "otium", "periculum", "populus", "puer", "servus", "templum", "verbum", "vir", "amo", "cogito", "debeo", "do", "erro", "laudo", "moneo", "servo", "teneo", "valeo", "video", "voco"],
    "sections": [
      {
        "title": "1. 1. Grup İsimler (Declinatio I: -a, -ae) Kapsamlı Sözlük",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 3 ve 4 kelime listesi:</p>\n<ul>\n  <li><span class=\"lat-word\">agricola, -ae, m.</span>: çiftçi (eril istisna)</li>\n  <li><span class=\"lat-word\">amīca, -ae, f.</span>: kız arkadaş, dost</li>\n  <li><span class=\"lat-word\">amīcitia, -ae, f.</span>: dostluk, arkadaşlık</li>\n  <li><span class=\"lat-word\">avāritia, -ae, f.</span>: açgözlülük, tamah</li>\n  <li><span class=\"lat-word\">barba, -ae, f.</span>: sakal</li>\n  <li><span class=\"lat-word\">benevolentia, -ae, f.</span>: iyilikseverlik, lütuf</li>\n  <li><span class=\"lat-word\">bēstia, -ae, f.</span>: vahşi hayvan, canavar</li>\n  <li><span class=\"lat-word\">casa, -ae, f.</span>: kulübe, kır evi</li>\n  <li><span class=\"lat-word\">catēna, -ae, f.</span>: zincir, pranga</li>\n  <li><span class=\"lat-word\">causa, -ae, f.</span>: neden, sebep; dava</li>\n  <li><span class=\"lat-word\">culīna, -ae, f.</span>: mutfak</li>\n  <li><span class=\"lat-word\">cūra, -ae, f.</span>: özen, kaygı, endişe</li>\n  <li><span class=\"lat-word\">dea, -ae, f.</span>: tanrıça (Dat/Abl. Pl: deābus)</li>\n  <li><span class=\"lat-word\">discipula, -ae, f.</span>: kız öğrenci</li>\n  <li><span class=\"lat-word\">domina, -ae, f.</span>: hanımefendi, sahibe</li>\n  <li><span class=\"lat-word\">fābula, -ae, f.</span>: masal, hikâye</li>\n  <li><span class=\"lat-word\">fēmina, -ae, f.</span>: kadın</li>\n  <li><span class=\"lat-word\">fīlia, -ae, f.</span>: kız evlat (Dat/Abl. Pl: fīliābus)</li>\n  <li><span class=\"lat-word\">glōria, -ae, f.</span>: şan, şöhret, onur</li>\n  <li><span class=\"lat-word\">īra, -ae, f.</span>: öfke, hiddet</li>\n  <li><span class=\"lat-word\">lingua, -ae, f.</span>: dil, lisan</li>\n  <li><span class=\"lat-word\">nauta, -ae, m.</span>: denizci (eril istisna)</li>\n  <li><span class=\"lat-word\">patria, -ae, f.</span>: vatan, yurt</li>\n  <li><span class=\"lat-word\">pecūnia, -ae, f.</span>: para, servet</li>\n  <li><span class=\"lat-word\">poēta, -ae, m.</span>: şair (eril istisna)</li>\n  <li><span class=\"lat-word\">puella, -ae, f.</span>: kız çocuk, genç kız</li>\n  <li><span class=\"lat-word\">sapientia, -ae, f.</span>: bilgelik, hikmet</li>\n  <li><span class=\"lat-word\">sententia, -ae, f.</span>: fikir, kanaat, cümle</li>\n  <li><span class=\"lat-word\">silva, -ae, f.</span>: orman</li>\n  <li><span class=\"lat-word\">terra, -ae, f.</span>: toprak, kara, diyar</li>\n  <li><span class=\"lat-word\">vīta, -ae, f.</span>: hayat, yaşam</li>\n</ul>",
        "calloutType": "info",
        "calloutTitle": "1. Çekimde Cins Ayrımı",
        "calloutText": "Doç. Dr. Eyüp Çoraklı'nın özellikle belirttiği üzere: agricola, nauta, poeta, auriga kelimeleri dişil takı almalarına karşın anlamca ERİLDİR (m.).",
        "tableHtml": ""
      },
      {
        "title": "2. 2. Grup İsimler (Declinatio II: -us, -er, -ir, -um) Kapsamlı Sözlük",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 6 ve 7 kelime listesi:</p>\n<ul>\n  <li><span class=\"lat-word\">amīcus, -ī, m.</span>: dost, arkadaş | <span class=\"lat-word\">argentum, -ī, n.</span>: gümüş</li>\n  <li><span class=\"lat-word\">auxilium, -iī, n.</span>: yardım | <span class=\"lat-word\">bāsium, -iī, n.</span>: öpücük</li>\n  <li><span class=\"lat-word\">bellum, -ī, n.</span>: savaş | <span class=\"lat-word\">caelum, -ī, n.</span>: gökyüzü</li>\n  <li><span class=\"lat-word\">castra, -ōrum, n. pl.</span>: askeri karargâh, ordugâh (yalnız çoğul)</li>\n  <li><span class=\"lat-word\">cibus, -ī, m.</span>: yiyecek, aş | <span class=\"lat-word\">coquus, -ī, m.</span>: aşçı</li>\n  <li><span class=\"lat-word\">deus, -ī, m.</span>: tanrı (Pl: deī/diī/dī) | <span class=\"lat-word\">dominus, -ī, m.</span>: sahip, efendi</li>\n  <li><span class=\"lat-word\">dōnum, -ī, n.</span>: armağan, hediye | <span class=\"lat-word\">equus, -ī, m.</span>: at</li>\n  <li><span class=\"lat-word\">exitium, -iī, n.</span>: yıkım, felaket | <span class=\"lat-word\">fīlius, -iī, m.</span>: oğul (Voc: fīlī)</li>\n  <li><span class=\"lat-word\">liber, librī, m.</span>: kitap | <span class=\"lat-word\">līberī, -ōrum, m. pl.</span>: çocuklar</li>\n  <li><span class=\"lat-word\">locus, -ī, m.</span>: yer, mekân (Pl. n: loca; Pl. m: locī)</li>\n  <li><span class=\"lat-word\">magister, magistrī, m.</span>: öğretmen, hoca | <span class=\"lat-word\">malum, -ī, n.</span>: kötülük</li>\n  <li><span class=\"lat-word\">negōtium, -iī, n.</span>: iş, meşguliyet | <span class=\"lat-word\">numerus, -ī, m.</span>: sayı, miktar</li>\n  <li><span class=\"lat-word\">ōtium, -iī, n.</span>: boş vakit, huzur, dinlence | <span class=\"lat-word\">perīculum, -ī, n.</span>: tehlike</li>\n  <li><span class=\"lat-word\">philosophus, -ī, m.</span>: filozof | <span class=\"lat-word\">populus, -ī, m.</span>: halk</li>\n  <li><span class=\"lat-word\">puer, puerī, m.</span>: oğlan çocuk | <span class=\"lat-word\">servus, -ī, m.</span>: erkek köle</li>\n  <li><span class=\"lat-word\">templum, -ī, n.</span>: tapınak | <span class=\"lat-word\">verbum, -ī, n.</span>: söz, kelime</li>\n  <li><span class=\"lat-word\">vīnum, -ī, n.</span>: şarap | <span class=\"lat-word\">vir, virī, m.</span>: erkek, er, adam</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "3. 1. ve 2. Grup Fiiller, Zarflar, Edatlar ve Bağlaçlar",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 9, 10, 11, 13, 14:</p>\n<p><strong>Fiiller:</strong> ămo (sevmek), cōgitō (düşünmek), dēbeō (borçlu olmak, zorunda olmak), dō (vermek), dŏceō (öğretmek), errō (yanılmak, hata yapmak), laudō (övmek), moneō (uyarmak), pāreō (görünür olmak, itaat etmek), pugnō (savaşmak), putō (sanmak, düşünmek), rogō (sormak), sānō (iyileştirmek), servō (korumak), cōnservō (muhafaza etmek), spectō (bakmak, izlemek), taceō (susmak), terreō (korkutmak), valeō (güçlü/sağlıklı olmak), videō (görmek), vocō (çağırmak), culpō (suçlamak), peccō (günah işlemek, hata yapmak), volō (uçmak), deportō (alıp götürmek), salūtō (selamlamak), habeō (sahip olmak), satiō (doyurmak, tatmin etmek), irrītō (kışkırtmak), teneō (tutmak), intrō (içeri girmek), iuvō/adiuvō (yardım etmek), cūrō (özen göstermek), vītō (kaçınmak).</p>\n<p><strong>Zarf, Edat ve Bağlaçlar:</strong> -ne (soru eki), bis (iki kere), cito (hızlıca), et (ve), et...et (hem...hem de), hodiē (bugün), in (+ abl. içinde, -de; + acc. içine, -e), dē (+ abl. hakkında, -den), Ō (ey!), lentē (yavaşça), nōn (değil, hayır), omnīnō (tümüyle, tamamen), saepe (sık sık), semper (daima), sī (eğer), sed (ama, bilakis), quoque (de, dahi).</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "Bu master sözlük fasikülü, ilerleyen derslerde ve metin analizlerinde başvuracağınız temel başvuru kaynağınızdır."
  },
  {
    "id": "T1_W5_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 5,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 5. Hafta (2. Ders)",
    "title": "CÜMLE TAHLİLLERİ VE OKUMA PARÇASI: MAECENAS VE VERGILIUS",
    "subtitle": "Sentaks Uygulamaları, Deyimsel İfadeler (amabo te) ve Klasik Okuma Metni",
    "summary": "Bu fasikülde 1. ve 2. grup isim ve fiillerle kurulmuş özgün klasik Latince cümleleri, felsefi aforizmaları, amabo te ve bis das si cito das gibi atasözlerini ve Maecenas ile Vergilius okuma parçasını eksiksiz çözümlemeleriyle inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer5.2.pdf",
    "slideCount": 11,
    "topics": ["Sentaks Tahlilleri", "Deyimler (amabo te)", "Atasözleri ve Deyişler", "Maecenas ve Vergilius Okuma Metni", "Felsefi Cümleler"],
    "vocab": ["stultus", "remedium", "mora", "caecus", "rumor", "venia", "clementia", "recuso", "turba", "ars", "creo", "immodicus", "insania", "saepe", "non", "pauci", "de", "numerus", "remedio", "bonus", "amicus", "meus", "otium", "et", "vir", "fortuna", "sed", "si", "erro", "quid", "nihil", "bis", "valeo", "patria", "fama", "sententia", "do", "philosophia", "ira", "hodie", "debeo"],
    "sections": [
      {
        "title": "1. Ders Slaytlarından Seçkin Atasözleri ve Deyimsel Yapılar",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 2-6 özgün aforizmalar:</p>\n<ul>\n  <li><span class=\"lat-word\">Bis das, sī citō das.</span> = Eğer çabuk verirsen, iki kere verirsin (Hızlı yapılan yardım iki kat değerlidir).</li>\n  <li><span class=\"lat-word\">Remedium īrae est mora.</span> = Öfkenin çaresi ertelemektir / durup düşünmektir.</li>\n  <li><span class=\"lat-word\">Fortūna est caeca.</span> = Talih kördür.</li>\n  <li><span class=\"lat-word\">Sī valēs, valeō.</span> = (Mektup açılış kalıbı) Sen iyiysen ben de iyiyim.</li>\n  <li><span class=\"lat-word\">Amābō tē</span> = Lütfen, rica ederim (Kelimesi kelimesine: 'seni seveceğim').</li>\n  <li><span class=\"lat-word\">Philosophia est ars vītae.</span> = Felsefe bir yaşam sanatıdır.</li>\n  <li><span class=\"lat-word\">Immodica īra creat insāniam.</span> = Ölçüsüz öfke deliliğe yol açar.</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Maecenas ve Vergilius'un Daveti",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Maecenas ve Vergilius'un Daveti</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Maecenas\" role=\"button\" tabindex=\"0\">Maecenas</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"Vergilius\" role=\"button\" tabindex=\"0\">Vergilius</span> <span class=\"lat-word\" data-word=\"me\" role=\"button\" tabindex=\"0\">me</span> <span class=\"lat-word\" data-word=\"hodie\" role=\"button\" tabindex=\"0\">hodie</span> <span class=\"lat-word\" data-word=\"vocant\" role=\"button\" tabindex=\"0\">vocant</span>. <span class=\"lat-word\" data-word=\"Quid\" role=\"button\" tabindex=\"0\">Quid</span> <span class=\"lat-word\" data-word=\"cogitare\" role=\"button\" tabindex=\"0\">cogitare</span> <span class=\"lat-word\" data-word=\"debeo\" role=\"button\" tabindex=\"0\">debeo</span>? <span class=\"lat-word\" data-word=\"Quid\" role=\"button\" tabindex=\"0\">Quid</span> <span class=\"lat-word\" data-word=\"debeo\" role=\"button\" tabindex=\"0\">debeo</span> <span class=\"lat-word\" data-word=\"respondere\" role=\"button\" tabindex=\"0\">respondere</span>? <span class=\"lat-word\" data-word=\"Si\" role=\"button\" tabindex=\"0\">Si</span> <span class=\"lat-word\" data-word=\"erro\" role=\"button\" tabindex=\"0\">erro</span>, <span class=\"lat-word\" data-word=\"me\" role=\"button\" tabindex=\"0\">me</span> <span class=\"lat-word\" data-word=\"saepe\" role=\"button\" tabindex=\"0\">saepe</span> <span class=\"lat-word\" data-word=\"monent\" role=\"button\" tabindex=\"0\">monent</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"culpant\" role=\"button\" tabindex=\"0\">culpant</span>; <span class=\"lat-word\" data-word=\"si\" role=\"button\" tabindex=\"0\">si</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"erro\" role=\"button\" tabindex=\"0\">erro</span>, <span class=\"lat-word\" data-word=\"me\" role=\"button\" tabindex=\"0\">me</span> <span class=\"lat-word\" data-word=\"laudant\" role=\"button\" tabindex=\"0\">laudant</span>. <span class=\"lat-word\" data-word=\"Quid\" role=\"button\" tabindex=\"0\">Quid</span> <span class=\"lat-word\" data-word=\"hodie\" role=\"button\" tabindex=\"0\">hodie</span> <span class=\"lat-word\" data-word=\"cogitare\" role=\"button\" tabindex=\"0\">cogitare</span> <span class=\"lat-word\" data-word=\"debeo\" role=\"button\" tabindex=\"0\">debeo</span>?\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Maecenas ile Vergilius bugün beni davet ediyorlar. Ne düşünmem gerekir? Ne yanıt vermem gerekir? Eğer hata yaparsam beni sürekli uyarırlar (ikaz ederler) ve suçlarlar; eğer hata yapmazsam, beni överler. Bugün ne düşünmem gerekir? (Bugün ne düşünmek zorundayım.)</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Bonas saepe laudant.",
        "tr": "İyileri (iyi kadınları) sürekli överler.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multi sunt stulti.",
        "tr": "Çoğu insan aptaldır. (Çoğu erkek aptaldır.)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pueri mala non amant.",
        "tr": "Çocuklar kötü şeyleri sevmezler.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pauci de periculo cogitant.",
        "tr": "Çok az kişi (çok az insan) tehlike hakkında düşünüyor.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Infinitus est numerus stultorum.",
        "tr": "Aptalların sayısı sınırsızdır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Remedium irae est mora.",
        "tr": "Öfkenin çaresi ertelemektir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Bonus Daphnis, amicus meus, otium et vitam agricolae amat.",
        "tr": "İyi Daphnis, benim arkadaşım, bir çiftçinin yaşamını ve boş vaktini sever.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Salve, O amice, vir bonus es.",
        "tr": "Selam ey dostum, sen iyi bir insansın.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Fortuna est caeca. Otium est bonum, sed otium multorum est parvum.",
        "tr": "Talih kördür. Boş vakit iyidir, ama çoğu insanın boş vakti kısadır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Mone me, amabo te, si erro. Saepe peccamus.",
        "tr": "Eğer hata yapıyorsam, lütfen",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "beni uyar!",
        "tr": "Sık sık hata yaparız (yapıyoruz).",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Laudas me, culpant me.",
        "tr": "Sen beni övüyorsun, onlar ise suçluyorlar. amabo te, (deyim olarak) lütfen",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Quid debemus cogitare? Conservate me!. Beni koruyunuz! (Koruyun beni!) Me non amat. Rumor volat. Beni sevmez (sevmiyor).",
        "tr": "Dedikodu çabucak yayılır.",
        "analysis": "Ne düşünmeliyiz? (Ne düşünmemiz gerekir? Ne düşünmek zorundayız?); conservo, are, korumak, muhafa etmek, kurtarmak; rumor: dedikodu, söylenti",
        "notes": "Ne düşünmeliyiz? (Ne düşünmemiz gerekir? Ne düşünmek zorundayız?); conservo, are, korumak, muhafa etmek, kurtarmak; rumor: dedikodu, söylenti",
        "direction": "lat_to_tr"
      },
      {
        "latin": "- Salvete! Quid videtis?",
        "tr": "- Selam sizlere! Ne görüyorsunuz?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "- Nihil videmus.",
        "tr": "- Hiçbir şey görmüyoruz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Bis das, si cito das.",
        "tr": "Eğer çabuk verirsen, iki kere verirsin.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Si vales, valeo.",
        "tr": "Eğer sen iyi olursan (iyiysen), ben de iyi olurum. soru kelimesi",
        "analysis": "quid, ne? (",
        "notes": "quid, ne? (",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Salve, Ō patria! Fama et sententia volant. Selam sana ey vatan!",
        "tr": "Şöhret ve söz çabuk yayılır. Da veniam puellae, amabo te. Kız çocuğuna merhamet göster, lütfen.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Clementia tua multas vitas servat. Multam pecuniam deportat.",
        "tr": "Senin hoşgörün pek çok yaşamı kurtarıyor. Bir sürü / bolca para taşıyor.",
        "analysis": "venia, -ae, f., merhamet, iyilik; patria, -ae, f., vatan; tuus, -a, -um, sana ait, senin; clementia, -ae, f., hoşgörü; fama, -ae, f., ün, şöhret; servo, are, korumak, kurtarmak",
        "notes": "venia, -ae, f., merhamet, iyilik; patria, -ae, f., vatan; tuus, -a, -um, sana ait, senin; clementia, -ae, f., hoşgörü; fama, -ae, f., ün, şöhret; servo, are, korumak, kurtarmak",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Fortunam et vitam antiquae patriae saepe laudas, sed recusas.",
        "tr": "Eski vatanın talihini ve yaşantısını sıklıkla övüyorsun, ama (dönmeyi) reddediyorsun.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Me vitare turbam iubes.",
        "tr": "Bana kalabalıktan kaçınmamı emrediyorsun.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Me philsophiae do.",
        "tr": "Kendimi felsefeye adıyorum.",
        "analysis": "recuso, -are, reddetmek; turba, -ae, f., kalabalık; antiquus, -a, -um, eski, kadim; me: ben (acc. halde); vito, -are, kaçınmak, sakınmak; iubeo, -ere, emretmek",
        "notes": "recuso, -are, reddetmek; turba, -ae, f., kalabalık; antiquus, -a, -um, eski, kadim; me: ben (acc. halde); vito, -are, kaçınmak, sakınmak; iubeo, -ere, emretmek",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Philosophia est ars vitae.",
        "tr": "Felsefe bir yaşam sanatıdır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sanam formam vitae conservate.",
        "tr": "Sağlıklı yaşam biçimini koruyunuz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Immodica ira creat insaniam.",
        "tr": "Ölçüsüz öfke/hiddet deliliğe yol açar.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Quid cogitas? - debemus iram vitare.",
        "tr": "Ne düşünüyorsun? Öfkeden kaçınmalıyız.",
        "analysis": "insania, -ae, f., delilik; forma, -ae, f., biçim, şekil; immodicus, -a, -um, aşırı, ölçüsüz; ars: sanat; creo, -are, yaratmak, meydana getirmek, neden olmak",
        "notes": "insania, -ae, f., delilik; forma, -ae, f., biçim, şekil; immodicus, -a, -um, aşırı, ölçüsüz; ars: sanat; creo, -are, yaratmak, meydana getirmek, neden olmak",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "Atasözlerindeki söz dizimine dikkat ediniz; Latince vecizeler genellikle yüklemi sona alarak etkileyici bir ritim oluşturur."
  },
  {
    "id": "T1_W6_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 6,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 6. Hafta (1. Ders)",
    "title": "BİR KURAL: APPOSITIO (AÇIKLAYICI YAN İSİM) VE CATULLUS OKUMA METNİ",
    "subtitle": "Appositio Sentaks Kuralı, Catullus'un Lesbia Şiiri ve Açgözlülük Üzerine İki Okuma Metni",
    "summary": "Bu fasikülde Latince sentaksta çok önemli bir yeri olan Appositio kuralını (iki virgül arasında aynı halde açıklayıcı yan isim kullanımı), Catullus'un ünlü 'Puella mea me non amat' şiirsel metnini ve 'Agricola et nauta' okuma parçasını tüm detaylarıyla inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer6.1.pdf",
    "slideCount": 12,
    "topics": ["Appositio Kuralı", "Catullus Okuma Parçası (Lesbia)", "Deyim: poenas dare", "in numero habere", "Açgözlülük Okuma Parçası"],
    "vocab": ["obduro", "basio", "appositio", "adversus", "copia", "egeo", "studeo", "satio", "secrete", "palam", "modus", "sine", "poena", "non", "in", "video", "bonus", "amicus", "meus", "otium", "et", "filia", "semper", "si", "ira", "saepe", "fortuna", "de", "pauci", "avarus", "pecunia", "puella", "poeta", "sed", "valeo", "agricola", "nauta", "philosophia"],
    "sections": [
      {
        "title": "1. Sentaks Kuralı: Appositio (Açıklayıcı Yan İsim)",
        "html": "<p><strong>Tanım (Slayt 5):</strong> Latince cümlelerde, bir ismi açıklamak üzere, söz konusu ismin yanına onunla eşleşen bir başka ismin konulması durumuna <strong>Appositio</strong> adı verilir. Bu tür yapılarda açıklayıcı kelime grubu, açıkladığı ismi bir sıfat gibi niteler; yani <em>onunla aynı hal, sayı ve cinste olur</em> ve genellikle iki virgül arasında yazılır:</p>\n<ul>\n  <li><span class=\"lat-word\">Gāium, fīlium meum, in agrō videō.</span> = Gaius'u, <strong>oğlumu</strong>, tarlada görüyorum.</li>\n  <li><span class=\"lat-word\">Bonus Daphnis, amīcus meus, ōtium et vītam agricolae amat.</span> = İyi Daphnis, <strong>benim arkadaşım</strong>, bir çiftçinin yaşamını ve boş vaktini sever.</li>\n  <li><span class=\"lat-word\">Herculēs, Alcmēnae fīlius, ōlim in Graeciā habitābat.</span> = Hercules, <strong>Alcmena'nın oğlu</strong>, bir zamanlar Yunanistan'da yaşıyordu.</li>\n  <li><span class=\"lat-word\">Cīmōn, vir magnae fāmae, magnam benevolentiam habet.</span> = Cimon, <strong>büyük şöhreti olan o adam</strong>, büyük bir cömertliğe sahiptir.</li>\n</ul>",
        "calloutType": "rule",
        "calloutTitle": "Appositio Hal Uyumu Kuralı",
        "calloutText": "Appositio durumundaki isim, nitelediği ana isim hangi haldeyse (Nom, Acc, Gen, Dat, Abl) tamı tamına AYNI HALDE olmak zorundadır: Gaium (Acc) -> filium meum (Acc).",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası 1: Catullus'un Sevgilisine Vedası (Vale, Puella!)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası 1: Catullus'un Sevgilisine Vedası (Vale, Puella!)</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Puella\" role=\"button\" tabindex=\"0\">Puella</span> <span class=\"lat-word\" data-word=\"mea\" role=\"button\" tabindex=\"0\">mea</span> <span class=\"lat-word\" data-word=\"me\" role=\"button\" tabindex=\"0\">me</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"amat\" role=\"button\" tabindex=\"0\">amat</span>. <span class=\"lat-word\" data-word=\"Vale\" role=\"button\" tabindex=\"0\">Vale</span>, <span class=\"lat-word\" data-word=\"puella\" role=\"button\" tabindex=\"0\">puella</span>! <span class=\"lat-word\" data-word=\"Catullus\" role=\"button\" tabindex=\"0\">Catullus</span> <span class=\"lat-word\" data-word=\"obdurat\" role=\"button\" tabindex=\"0\">obdurat</span>: <span class=\"lat-word\" data-word=\"poeta\" role=\"button\" tabindex=\"0\">poeta</span> <span class=\"lat-word\" data-word=\"puellam\" role=\"button\" tabindex=\"0\">puellam</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"amat\" role=\"button\" tabindex=\"0\">amat</span>, <span class=\"lat-word\" data-word=\"formam\" role=\"button\" tabindex=\"0\">formam</span> <span class=\"lat-word\" data-word=\"puellae\" role=\"button\" tabindex=\"0\">puellae</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"laudat\" role=\"button\" tabindex=\"0\">laudat</span>, <span class=\"lat-word\" data-word=\"puellae\" role=\"button\" tabindex=\"0\">puellae</span> <span class=\"lat-word\" data-word=\"rosas\" role=\"button\" tabindex=\"0\">rosas</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"dat\" role=\"button\" tabindex=\"0\">dat</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"puellam\" role=\"button\" tabindex=\"0\">puellam</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"basiat\" role=\"button\" tabindex=\"0\">basiat</span>! <span class=\"lat-word\" data-word=\"Ira\" role=\"button\" tabindex=\"0\">Ira</span> <span class=\"lat-word\" data-word=\"mea\" role=\"button\" tabindex=\"0\">mea</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"magna\" role=\"button\" tabindex=\"0\">magna</span>! <span class=\"lat-word\" data-word=\"Obduro\" role=\"button\" tabindex=\"0\">Obduro</span>, <span class=\"lat-word\" data-word=\"mea\" role=\"button\" tabindex=\"0\">mea</span> <span class=\"lat-word\" data-word=\"puella\" role=\"button\" tabindex=\"0\">puella</span> – <span class=\"lat-word\" data-word=\"sed\" role=\"button\" tabindex=\"0\">sed</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"te\" role=\"button\" tabindex=\"0\">te</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"valeo\" role=\"button\" tabindex=\"0\">valeo</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Sevgilim beni sevmiyor. Hoşçakal ey sevgili! Catullus dayanıyor: şair sevgilisini sevmiyor, sevgilisinin güzelliğini övmüyor, sevgilisine güller vermiyor ve sevgilisini öpmüyor. Öfkem büyüktür. Dayanıyorum sevgilim, ama sensiz iyi değilim. obduro, -are, sağlam durmak, dayanmak, direnmek basio, -are, öpmek, öpücük vermek meus, -a, um, adj., benim, bana ait</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası 2: Çiftçi, Denizci ve Felsefe",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası 2: Çiftçi, Denizci ve Felsefe</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Agricola\" role=\"button\" tabindex=\"0\">Agricola</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"vitam\" role=\"button\" tabindex=\"0\">vitam</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"fortunam\" role=\"button\" tabindex=\"0\">fortunam</span> <span class=\"lat-word\" data-word=\"nautae\" role=\"button\" tabindex=\"0\">nautae</span> <span class=\"lat-word\" data-word=\"saepe\" role=\"button\" tabindex=\"0\">saepe</span> <span class=\"lat-word\" data-word=\"laudat\" role=\"button\" tabindex=\"0\">laudat</span>; <span class=\"lat-word\" data-word=\"nauta\" role=\"button\" tabindex=\"0\">nauta</span> <span class=\"lat-word\" data-word=\"magnam\" role=\"button\" tabindex=\"0\">magnam</span> <span class=\"lat-word\" data-word=\"fortunam\" role=\"button\" tabindex=\"0\">fortunam</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"vitam\" role=\"button\" tabindex=\"0\">vitam</span> <span class=\"lat-word\" data-word=\"poetae\" role=\"button\" tabindex=\"0\">poetae</span> <span class=\"lat-word\" data-word=\"saepe\" role=\"button\" tabindex=\"0\">saepe</span> <span class=\"lat-word\" data-word=\"laudat\" role=\"button\" tabindex=\"0\">laudat</span>; <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"poeta\" role=\"button\" tabindex=\"0\">poeta</span> <span class=\"lat-word\" data-word=\"vitam\" role=\"button\" tabindex=\"0\">vitam</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"agros\" role=\"button\" tabindex=\"0\">agros</span> <span class=\"lat-word\" data-word=\"agricolae\" role=\"button\" tabindex=\"0\">agricolae</span> <span class=\"lat-word\" data-word=\"laudat\" role=\"button\" tabindex=\"0\">laudat</span>. <span class=\"lat-word\" data-word=\"Sine\" role=\"button\" tabindex=\"0\">Sine</span> <span class=\"lat-word\" data-word=\"philosophia\" role=\"button\" tabindex=\"0\">philosophia</span> <span class=\"lat-word\" data-word=\"avari\" role=\"button\" tabindex=\"0\">avari</span> <span class=\"lat-word\" data-word=\"viri\" role=\"button\" tabindex=\"0\">viri</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span> <span class=\"lat-word\" data-word=\"pecunia\" role=\"button\" tabindex=\"0\">pecunia</span> <span class=\"lat-word\" data-word=\"semper\" role=\"button\" tabindex=\"0\">semper</span> <span class=\"lat-word\" data-word=\"cogitant\" role=\"button\" tabindex=\"0\">cogitant</span>: <span class=\"lat-word\" data-word=\"multum\" role=\"button\" tabindex=\"0\">multum</span> <span class=\"lat-word\" data-word=\"pecuniam\" role=\"button\" tabindex=\"0\">pecuniam</span> <span class=\"lat-word\" data-word=\"habent\" role=\"button\" tabindex=\"0\">habent</span>, <span class=\"lat-word\" data-word=\"sed\" role=\"button\" tabindex=\"0\">sed</span> <span class=\"lat-word\" data-word=\"pecunia\" role=\"button\" tabindex=\"0\">pecunia</span> <span class=\"lat-word\" data-word=\"multa\" role=\"button\" tabindex=\"0\">multa</span> <span class=\"lat-word\" data-word=\"virum\" role=\"button\" tabindex=\"0\">virum</span> <span class=\"lat-word\" data-word=\"avarum\" role=\"button\" tabindex=\"0\">avarum</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"satiat\" role=\"button\" tabindex=\"0\">satiat</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Çiftçi, denizcinin hem yaşamını hem de talihini sık sık över / övmektedir; denizci, şairin büyük talihini ve yaşamını ikide birde över; şair de çiftçinin yaşamını ve tarlalarını över. Felsefe olmadan, açgözlü adamlar sürekli / hep para hakkında düşünür: çok / bir sürü paraları vardır, ama çok para açgözlü adamı doyurmaz / tatmin etmez.</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Nulla avaritia sine poena est.",
        "tr": "Hiçbir açgözlülük cezasız kalmaz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Me saevis catenis onerat.",
        "tr": "Beni sert / acı veren zincirlere vuruyor.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Rotam fortunae non timent.",
        "tr": "Feleğin çarkından / çemberinden korkmazlar.",
        "analysis": "avaritia, -ae, f., açgözlülük, doyumsuzluk; catena, -ae, f., zincir, pranga; sine, prep., (+ abl.) –meksizin, -siz, -sız; saevus, -a, -um, acımasız; onero, -are, yük bindirmek, zulmetmek, eziyet etmek; timeo, -ere, korkmak",
        "notes": "avaritia, -ae, f., açgözlülük, doyumsuzluk; catena, -ae, f., zincir, pranga; sine, prep., (+ abl.) –meksizin, -siz, -sız; saevus, -a, -um, acımasız; onero, -are, yük bindirmek, zulmetmek, eziyet etmek; timeo, -ere, korkmak",
        "direction": "lat_to_tr"
      },
      {
        "latin": "filium meum, in agro video. Gaius’u,",
        "tr": "oğlumu, tarlada görüyorum.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Bonus Daphnis, amicus meus, otium et vitam agricolae amat.",
        "tr": "İyi Daphnis, benim arkadaşım, bir çiftçinin yaşamını ve boş vaktini sever.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Filium nautae in agris videmus.",
        "tr": "Romalı denizcinin oğlunu tarlalarda görüyoruz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sapientiam amicarum, Ō filia mea, semper laudat.",
        "tr": "Ey kızım, (o kişi) senin kız arkadaşlarının bilgeliğini her zaman över.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multi viri et feminae philosophiam antiquam conservant.",
        "tr": "Pek çok adam ve kadın eski/kadim felsefeyi sürdürüyor/muhafaza ediyor.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Si ira valet, Ō mi filii, saepe erramus et poenas damus.",
        "tr": "Eğer öfke güçlü olursa / güçlenirse, ey oğlum, çok sık hata yaparız ve bedelini öderiz. çekmek, bedelini ödemek",
        "analysis": "poenas dare: cezasını",
        "notes": "poenas dare: cezasını",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Fortuna viros magnos amat.",
        "tr": "Talih büyük / güçlü adamları sever.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Debetis, amici, de populo Romano cogitare.",
        "tr": "Dostlar, Roma halkı hakkında düşünmeniz gerekir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Maecenas, amicus Augusti, me in numero amicorum habet.",
        "tr": "Maecenas, Augustus’un dostu, dostlarının arasında beni de sayar.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Libellus meus et sententiae meae vitas virorum monent.",
        "tr": "Küçük kitabım ve düşüncelerim insanların yaşamları için tavsiye verir.",
        "analysis": "de: (+ abl.) hakkında,",
        "notes": "de: (+ abl.) hakkında,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pauci viri sapientiae student.",
        "tr": "Pek az kişi bilgelik için çaba harcar.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Semper avarus eget.",
        "tr": "Açgözlü kişi daima yoksunluk duyar.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Fortuna adversa virum magnae sapientiae non terret.",
        "tr": "Kötü talih, büyük bilgelik / sağduyu sahibi adamı korkutmaz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Nulla copia pecuniae avarum virum satiat.",
        "tr": "Hiçbir para bolluğu açgözlü adamı doyurmaz. az, biraz, birkaç;",
        "analysis": "paucus, -a, -um,",
        "notes": "paucus, -a, -um,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "dat.)",
        "tr": ", yoksun olmak, ihtiyaç duymak bolluk, çokluk doyurmak, tatmin etmek",
        "analysis": "egeo, -ere; copia, -ae, f.,; satio, -are,",
        "notes": "egeo, -ere; copia, -ae, f.,; satio, -are,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pecunia avarum irritat, non satiat.",
        "tr": "Para açgözlüyü (açgözlü adamı) tahrik eder, ama tatmin etmez.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Secrete amicos admone, lauda palam!",
        "tr": "Dostlarını gizlice uyar, açıktan açığa öv!",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Modum tenere debemus.",
        "tr": "Ölçüyü yakalamak zorundayız.",
        "analysis": "secrete, adv.,",
        "notes": "secrete, adv.,",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "Appositio ögeleri Türkçeye aktarılırken iki virgül arasında ya da 'olan' sıfat-fiiliyle bağlanarak çevrilir."
  },
  {
    "id": "T1_W6_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 6,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 6. Hafta (2. Ders)",
    "title": "TÜRKÇEDEN LATİNCEYE ÖRNEK CÜMLE ÇEVİRİLERİ",
    "subtitle": "Doç. Dr. Eyüp Çoraklı 36 Çeviri Alıştırması, Tersine Çeviri Tekniği ve Sentaks Analizi",
    "summary": "Bu fasikülde Doç. Dr. Eyüp Çoraklı'nın ders slaytlarında yer alan 36 adet Türkçe kaynaktan Latinceye aktarım alıştırmasını, Türkçeden Latinceye doğru sentaks kurma yöntemini ve kelimelerin morfolojik analizlerini interaktif formatta göreceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "LatinceGramer6.2.pdf",
    "slideCount": 13,
    "topics": ["Türkçeden Latinceye Çeviri", "SOV Cümle Kuruluşu", "Tamlama Dizilimleri", "Hal Seçimi Alıştırmaları", "36 Model Çeviri"],
    "vocab": ["quis", "quid", "nihil", "debeo", "erro", "moneo", "servo", "amabo", "philosophia", "periculum", "fortuna", "oculus", "cras", "non", "si", "saepe", "sine", "et", "porta", "vita", "hodie", "in", "patria", "semper", "sapientia", "pecunia", "bellum", "exitium", "insula", "fama", "amicus", "meus", "de", "sed", "mora", "puer"],
    "sections": [
      {
        "title": "1. Türkçeden Latinceye Çeviri Yöntemi ve Sentaks Rehberi",
        "html": "<p>Türkçe bir cümleyi Latinceye aktarırken Doç. Dr. Eyüp Çoraklı'nın önerdiği aşamalı metot şudur:</p>\n<ol>\n  <li><strong>Yüklemi Bulunuz ve Zamanını / Şahsını Belirleyiniz:</strong> Türkçe cümlenin yüklemini bulun (örn. <em>görüyoruz</em> &gt; 1. Çoğul Şahıs Praesens &gt; <span class=\"lat-word\">vidēmus</span>). Latince cümlenin sonuna yerleştiriniz.</li>\n  <li><strong>Özneyi Tespit Ediniz:</strong> Özne açıkça verilmişse Nominativus halinde cümlenin başına alınız. Zamir ise (ben, sen vb.) özel bir vurgu yoksa fiilin şahıs ekinde eritiniz.</li>\n  <li><strong>Nesneleri ve Tümleçleri Çözümleyiniz:</strong>\n    <ul>\n      <li>Neyi / Kimi? &gt; Accusativus (-am, -um, -as, -os).</li>\n      <li>Kime / Neye? &gt; Dativus (-ae, -o, -is).</li>\n      <li>Neyle / Nereden? &gt; Ablativus (-a, -o, -is veya edatla: in + abl, de + abl).</li>\n      <li>Kimin? &gt; Genetivus (-ae, -i, -arum, -orum).</li>\n    </ul>\n  </li>\n  <li><strong>Cümle Dizilimini (SOV) Oluşturunuz:</strong> Özne + Tümleçler + Nesne + Yüklem.</li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Tersine Çeviri Uyarısı",
        "calloutText": "Aşağıdaki alıştırmalarda önce Türkçe cümleyi dikkatle okuyunuz, zihninizde veya bir kâğıda Latince karşılığını kurunuz, ardından Latincedeki kelimelerin üzerine tıklayarak morfolojik teyit yapınız.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Quid videt.",
        "tr": "Ne görüyor?",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Nihil dant.",
        "tr": "Hiçbir şey vermiyorlar.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Non debes laudare me.",
        "tr": "Beni övmemelisin. / Beni övmen gerekmiyor.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Si erro, me saepe monet.",
        "tr": "Eğer bir hata yaparsam, genellikle beni uyarır.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Si me amas, serva me, amabo te.",
        "tr": "Eğer beni seviyorsan, beni kurtar lütfen!",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Puellae pulchrae vitam poetae boni servant.",
        "tr": "Güzel kızlar iyi şairin hayatını kurtarıyorlar.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Sine philosophia saepe erramus et poenas damus.",
        "tr": "Felsefe olmadan çoğunlukla başıboş dolaşırız ve bedelini öderiz.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Poenas irae saepe damus.",
        "tr": "Öfkenin cezasını genelde öderiz.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Porta antiqua magna et longa est.",
        "tr": "Eski kapı büyük ve uzundur.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Sine paucis amicis vita non valet.",
        "tr": "Birkaç arkadaş olmadan yaşam sağlıklı değildir (sağlıklı olmaz).",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Hodie multam famam habes in patria tua.",
        "tr": "Ülkende bugün çok fazla üne sahipsin.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "In vitis filiarum tuarum, O amice, magnam fortunam videmus.",
        "tr": "Ey dostum, senin kızlarının yaşamlarında büyük bir talih görüyoruz.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Filiis filiabusque meis rosas semper dant.",
        "tr": "Kızlarıma ve oğullarıma her zaman güller verirler.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "In magno periculo es.",
        "tr": "Büyük bir tehlike içindesin.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Sententiae filii mei saepe stultae sunt.",
        "tr": "Oğlumun düşünceleri genelde aptalcadır.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Filii filiaeque virorum feminarumque magnorum non semper magni",
        "tr": "Büyük adamların ve kadınların oğulları ve kızları her zaman büyük olmaz.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Sine sapientia fortuna bona nautarum nihil est.",
        "tr": "Denizcilerin iyi talihi bilgelik olmadan bir hiçtir.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Satiatne pecunia virum avarum?",
        "tr": "Para açgözlü adamı tatmin eder mi?",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Manebuntne semper bellum et exitium in patria tua?",
        "tr": "Savaş ve yıkım yurdunda hep kalacak mı?",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "In Graecia multae insulae sunt parvae et magnae.",
        "tr": "Yunanistan’da küçük ve büyük pek çok ada vardır (mevcuttur / bulunur).",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Epicuri sententiae verae sunt.",
        "tr": "Epikuros’un düşünceleri doğrudur.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Tulliam, Marci Tulli filiam, videmus.",
        "tr": "Tullia’yı, Marcus Tullius’un kızını görüyoruz.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "In insula Creta habitabat.",
        "tr": "Girit adasında yaşıyordu.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Fama est nihil sine fortuna.",
        "tr": "Talih olmadan şöhret bir hiçtir (hiçbir işe yaramaz).",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Vitam meam pecunia tua sonservas.",
        "tr": "Paranla benim yaşamımı kurtarıyorsun (ayakta tutuyorsun).",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Vita paucis viris famam dat, O filii.",
        "tr": "Yaşam pek az kişiye şöhret verir, ey oğlum.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Amicus meus de philosophia semper cogitat.",
        "tr": "Arkadaşım her zaman felsefe hakkında düşünür.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Viri magni paucos amicos saepe habent.",
        "tr": "Büyük adamlar genelde pek az dosta sahiptir (büyük adamların dostu az olur).",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Philosophiam, sapientiam magnorum virorum, semper laudare debetis.",
        "tr": "Felsefeyi, büyük insanların bilgeliğini, her zaman yüceltmeniz gerekir.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Oculi puellae poetae dunt belli.",
        "tr": "Şairin kızlarının gözleri güzeldir.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Porta antiqua non est magna, sed bella est.",
        "tr": "Eski kapı büyük değildir, ama güzeldir.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Si oculi tui hodie sunt sani, bellos agros meos sine mora videre debes.",
        "tr": "Bugün gözlerin sağlıklıysa, benim güzel tarlalarımı gecikmeksizin görmek zorundasın.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Multas culpas humanas habemus et semper habebimus.",
        "tr": "İnsana özgü pek çok kusura sahibiz ve her zaman sahip olacağız.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Pella et puer cras errabunt.",
        "tr": "Oğlan ve kız yarın gezip dolaşacak.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      }
    ],
    "studyTips": "Türkçeden Latinceye çeviri yaparken hal eklerini kelime kökleriyle tam uyumlu hale getirdiğinizden daima emin olunuz."
  },
  {
    "id": "T1_W9_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 9,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 9. Hafta (1. Ders)",
    "title": "3. GRUP FİİLLER (CONIUGATIO III): PRAESENS VE IMPERFECTUM",
    "subtitle": "Kısa -ere Bitimli Fiiller, Gövde Ünlüsü Değişimleri (e > i / u) ve -ēba- Zaman Eki",
    "summary": "Bu fasikülde mastarı kısa -ere ile biten 3. Grup fiilleri (lego, rego, vinco), şimdiki zamanda gövde ünlüsünün geçirdiği değişimleri (-i-, -u-), Imperfectum yapısını (-ēba-) ve 1, 2, 3. grupların mukayese tablolarını öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer9.1.pdf",
    "slideCount": 15,
    "topics": ["3. Grup Fiiller (-ere)", "Praesens Çekimi (e > i, u)", "lego, rego, vinco Çekimleri", "1, 2, 3. Grup Praesens Karşılaştırması", "Imperfectum (-ēbā-)", "1, 2, 3. Grup Imperfectum Karşılaştırması"],
    "vocab": ["lego", "rego", "vinco", "ago", "disco", "duco", "scribo", "gero", "traho", "curro", "cano", "cado", "bibo", "mitto", "perdo"],
    "sections": [
      {
        "title": "1. 3. Grup Fiiller: Şimdiki Zaman (Praesens Indicativus Activi)",
        "html": "<p><strong>Önemli Kural (Slayt 4):</strong> 3. Grup fiillerin etken şimdiki zamanında 1. tekil şahısta gövde ünlüsü olan <em>-e</em> sesi düşer (leg-ō); 3. çoğul şahısta <em>-u-</em> sesine dönüşür (leg-unt); diğer tüm şahıslarda ise <em>-i-</em> sesine dönüşür (leg-i-s, leg-i-t, leg-i-mus, leg-i-tis).</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">lĕgo, -ĕre (3. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(lego, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">leg-ō</td>\n        <td class=\"case-cell-tr\">okuyorum / okurum</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">legi-s</td>\n        <td class=\"case-cell-tr\">okuyorsun / okursun</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">legi-t</td>\n        <td class=\"case-cell-tr\">okuyor / okur</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">legi-mus</td>\n        <td class=\"case-cell-tr\">okuyoruz / okuruz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">legi-tis</td>\n        <td class=\"case-cell-tr\">okuyorsunuz / okursunuz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">legu-nt</td>\n        <td class=\"case-cell-tr\">okuyorlar / okurlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">rĕgo, -ĕre (3. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(rego, regere — yönetmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">reg-ō</td>\n        <td class=\"case-cell-tr\">yönetiyorum / yönetirim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">regi-s</td>\n        <td class=\"case-cell-tr\">yönetiyorsun / yönetirsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">regi-t</td>\n        <td class=\"case-cell-tr\">yönetiyor / yönetir</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">regi-mus</td>\n        <td class=\"case-cell-tr\">yönetiyoruz / yönetiriz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">regi-tis</td>\n        <td class=\"case-cell-tr\">yönetiyorsunuz / yönetirsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">regu-nt</td>\n        <td class=\"case-cell-tr\">yönetiyorlar / yönetirler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">vinco, -ĕre (3. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(vinco, vincere — yenmek, mağlup etmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ō</td>\n        <td class=\"case-cell-tr\">yeniyorum / yenerim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">vinci-s</td>\n        <td class=\"case-cell-tr\">yeniyorsun / yenersin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">vinci-t</td>\n        <td class=\"case-cell-tr\">yeniyor / yener</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">vinci-mus</td>\n        <td class=\"case-cell-tr\">yeniyoruz / yeneriz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">vinci-tis</td>\n        <td class=\"case-cell-tr\">yeniyorsunuz / yenersiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">vincu-nt</td>\n        <td class=\"case-cell-tr\">yeniyorlar / yenerler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Karşılaştırma: 1, 2 ve 3. Grup Fiillerin Şimdiki Zaman Çekimi",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 8 karşılaştırma tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">1. Grup (laudo), 2. Grup (moneo), 3. Grup (vinco) Praesens Karşılaştırması</strong>\n    <span class=\"table-sub\">(Slayt 8)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs & Sayı</th>\n        <th>1. Grup: laudō, -āre</th>\n        <th>2. Grup: moneō, -ēre</th>\n        <th>3. Grup: vinco, -ere</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg. (Ben)</strong></td>\n        <td class=\"case-cell-latin\">laud-ō</td>\n        <td class=\"case-cell-latin\">mone-ō</td>\n        <td class=\"case-cell-latin\">vinc-ō</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg. (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudā-s</td>\n        <td class=\"case-cell-latin\">monē-s</td>\n        <td class=\"case-cell-latin\">vinci-s</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg. (O)</strong></td>\n        <td class=\"case-cell-latin\">lauda-t</td>\n        <td class=\"case-cell-latin\">mone-t</td>\n        <td class=\"case-cell-latin\">vinci-t</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl. (Biz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-mus</td>\n        <td class=\"case-cell-latin\">monē-mus</td>\n        <td class=\"case-cell-latin\">vinci-mus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl. (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-tis</td>\n        <td class=\"case-cell-latin\">monē-tis</td>\n        <td class=\"case-cell-latin\">vinci-tis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl. (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">lauda-nt</td>\n        <td class=\"case-cell-latin\">mone-nt</td>\n        <td class=\"case-cell-latin\">vincu-nt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. 3. Grup Fiiller: Şimdiki Zamanın Hikâyesi (Imperfectum Indicativus Activi)",
        "html": "<p><strong>Kural (Slayt 10):</strong> 3. Grup fiillerde Imperfectum yapılırken gövde ünlüsü olan <em>-e</em> düşer ve gövdeye <strong>-ēbā-</strong> eki getirilir: <em>leg-ēba-m, reg-ēba-m, vinc-ēba-m</em>.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">lĕgo, -ĕre (3. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(lego, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">leg-ēba-m</td>\n        <td class=\"case-cell-tr\">okuyordum / okurdum</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">leg-ēbā-s</td>\n        <td class=\"case-cell-tr\">okuyordun / okurdun</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">leg-ēba-t</td>\n        <td class=\"case-cell-tr\">okuyordu / okurdu</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">leg-ēbā-mus</td>\n        <td class=\"case-cell-tr\">okuyorduk / okurduk</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">leg-ēbā-tis</td>\n        <td class=\"case-cell-tr\">okuyordunuz / okurdunuz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">leg-ēba-nt</td>\n        <td class=\"case-cell-tr\">okuyorlardı / okurlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">rĕgo, -ĕre (3. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(rego, regere — yönetmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">reg-ēba-m</td>\n        <td class=\"case-cell-tr\">yönetiyordum / yönetirdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">reg-ēbā-s</td>\n        <td class=\"case-cell-tr\">yönetiyordun / yönetirdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">reg-ēba-t</td>\n        <td class=\"case-cell-tr\">yönetiyordu / yönetirdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">reg-ēbā-mus</td>\n        <td class=\"case-cell-tr\">yönetiyorduk / yönetirdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">reg-ēbā-tis</td>\n        <td class=\"case-cell-tr\">yönetiyordunuz / yönetirdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">reg-ēba-nt</td>\n        <td class=\"case-cell-tr\">yönetiyorlardı / yönetirlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">vinco, -ĕre (3. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(vinco, vincere — yenmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ēba-m</td>\n        <td class=\"case-cell-tr\">yeniyordum / yenerdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ēbā-s</td>\n        <td class=\"case-cell-tr\">yeniyordun / yenerdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ēba-t</td>\n        <td class=\"case-cell-tr\">yeniyordu / yenerdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ēbā-mus</td>\n        <td class=\"case-cell-tr\">yeniyorduk / yenerdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ēbā-tis</td>\n        <td class=\"case-cell-tr\">yeniyordunuz / yenerdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ēba-nt</td>\n        <td class=\"case-cell-tr\">yeniyorlardı / yenerlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. Karşılaştırma: 1, 2 ve 3. Grup Fiillerin Imperfectum Çekimi",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 14 karşılaştırma tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">1. Grup (laudo), 2. Grup (moneo), 3. Grup (vinco) Imperfectum Karşılaştırması</strong>\n    <span class=\"table-sub\">(Slayt 14)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs & Sayı</th>\n        <th>1. Grup: laudō</th>\n        <th>2. Grup: moneō</th>\n        <th>3. Grup: vinco</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-m</td>\n        <td class=\"case-cell-latin\">monē-ba-m</td>\n        <td class=\"case-cell-latin\">vinc-ēba-m</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-s</td>\n        <td class=\"case-cell-latin\">monē-bā-s</td>\n        <td class=\"case-cell-latin\">vinc-ēbā-s</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-t</td>\n        <td class=\"case-cell-latin\">monē-ba-t</td>\n        <td class=\"case-cell-latin\">vinc-ēba-t</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-mus</td>\n        <td class=\"case-cell-latin\">monē-bā-mus</td>\n        <td class=\"case-cell-latin\">vinc-ēbā-mus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-tis</td>\n        <td class=\"case-cell-latin\">monē-bā-tis</td>\n        <td class=\"case-cell-latin\">vinc-ēbā-tis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-nt</td>\n        <td class=\"case-cell-latin\">monē-ba-nt</td>\n        <td class=\"case-cell-latin\">vinc-ēba-nt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "3. grup fiillerde şimdiki zamanda -i- ve -u- ünlülerinin ortaya çıktığını, Imperfectum'da ise ekin -ēba- olduğunu unutmayınız."
  },
  {
    "id": "T1_W9_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 9,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 9. Hafta (2. Ders)",
    "title": "3. GRUP FİİLLER: GELECEK ZAMAN (FUTURUM I) VE EMİR KİPİ",
    "subtitle": "Futurum Eki (-a- / -e-), Düzenli ve Düzensiz Emirler (dic, duc, fac, fer) ve Karşılaştırmalar",
    "summary": "Bu fasikülde 3. grup fiillerin Gelecek Zamanını (-am, -es, -et... ekleriyle; asla -bo kullanılmaz!), emir kipini (rege, regite), kuralsız emir kipini (dīc, dūc, fac, fer) ve 1, 2, 3. grupların karşılaştırmalı tablolarını öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer9.2.pdf",
    "slideCount": 17,
    "topics": ["3. Grup Futurum I (-a-/-e-)", "rego, lego, vinco Futurum", "Gelecek Zaman Karşılaştırması", "3. Grup Emir Kipi (Imperativus)", "Düzensiz Emirler (dic, duc)", "Emir Kipi Karşılaştırması"],
    "vocab": ["rego", "lego", "vinco", "dico", "duco", "facio", "fero", "bellum", "officium", "consilium", "crustulum", "oculus", "et", "de", "hodie", "si", "saepe", "non", "sine", "malo", "mora", "poeta", "vir", "bonus", "fama", "nihil", "magis", "quam", "amo"],
    "sections": [
      {
        "title": "1. 3. Grup Fiiller: Gelecek Zaman (Futurum Indicativus Activi)",
        "html": "<p><strong>Çok Önemli Kural (Slayt 2):</strong> 3. Grup fiillerde gelecek zaman 1 ve 2. gruptaki gibi <em>-bo, -bis, -bit</em> ile YAPILMAZ! 1. tekil şahısta <strong>-a-</strong>, diğer tüm şahıslarda ise <strong>-ē-</strong> eki kullanılır: <em>-am, -ēs, -et, -ēmus, -ētis, -ent</em>.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">rĕgo, -ĕre (3. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(rego, regere — yönetmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">reg-a-m</td>\n        <td class=\"case-cell-tr\">yöneteceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">reg-ē-s</td>\n        <td class=\"case-cell-tr\">yöneteceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">reg-e-t</td>\n        <td class=\"case-cell-tr\">yönetecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">reg-ē-mus</td>\n        <td class=\"case-cell-tr\">yöneteceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">reg-ē-tis</td>\n        <td class=\"case-cell-tr\">yöneteceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">reg-ē-nt</td>\n        <td class=\"case-cell-tr\">yönetecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">lĕgo, -ĕre (3. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(lego, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">leg-a-m</td>\n        <td class=\"case-cell-tr\">okuyacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">leg-ē-s</td>\n        <td class=\"case-cell-tr\">okuyacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">leg-e-t</td>\n        <td class=\"case-cell-tr\">okuyacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">leg-ē-mus</td>\n        <td class=\"case-cell-tr\">okuyacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">leg-ē-tis</td>\n        <td class=\"case-cell-tr\">okuyacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">leg-ē-nt</td>\n        <td class=\"case-cell-tr\">okuyacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">vinco, -ĕre (3. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(vinco, vincere — yenmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">vinc-a-m</td>\n        <td class=\"case-cell-tr\">yeneceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ē-s</td>\n        <td class=\"case-cell-tr\">yeneceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">vinc-e-t</td>\n        <td class=\"case-cell-tr\">yenecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ē-mus</td>\n        <td class=\"case-cell-tr\">yeneceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">vinc-ē-tis</td>\n        <td class=\"case-cell-tr\">yeneceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">vinc-e-nt</td>\n        <td class=\"case-cell-tr\">yenecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Karşılaştırma: 1, 2 ve 3. Grup Fiillerin Gelecek Zaman Çekimi",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 6 karşılaştırma tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">1. Grup (laudo), 2. Grup (moneo), 3. Grup (vinco) Futurum Karşılaştırması</strong>\n    <span class=\"table-sub\">(Slayt 6)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs & Sayı</th>\n        <th>1. Grup (-bō, -bis)</th>\n        <th>2. Grup (-bō, -bis)</th>\n        <th>3. Grup (-am, -ēs)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-b-ō</td>\n        <td class=\"case-cell-latin\">monē-b-ō</td>\n        <td class=\"case-cell-latin\">vinc-a-m</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-s</td>\n        <td class=\"case-cell-latin\">monē-bi-s</td>\n        <td class=\"case-cell-latin\">vinc-ē-s</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-t</td>\n        <td class=\"case-cell-latin\">monē-bi-t</td>\n        <td class=\"case-cell-latin\">vinc-e-t</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-mus</td>\n        <td class=\"case-cell-latin\">monē-bi-mus</td>\n        <td class=\"case-cell-latin\">vinc-ē-mus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-tis</td>\n        <td class=\"case-cell-latin\">monē-bi-tis</td>\n        <td class=\"case-cell-latin\">vinc-ē-tis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bu-nt</td>\n        <td class=\"case-cell-latin\">monē-bu-nt</td>\n        <td class=\"case-cell-latin\">vinc-e-nt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. 3. Grup Emir Kipi ve Düzensiz Emirler (dic, duc, fac, fer)",
        "html": "<p><strong>Düzenli Emir Kipi (Slayt 9):</strong> Tekil 2. Şahıs fiil gövdesiyle aynıdır: <em>rege!</em> (Yönet!), <em>vince!</em> (Yen!). Çoğulda ise <strong>-ite</strong> eki gelir: <em>regite!</em>, <em>vincite!</em>.<br><strong>Düzensiz Emirler (Slayt 11-12):</strong> Şu 4 fiil tekil emirde sonlarındaki -e sesini düşürür:<br>• dīcō &gt; <strong>dīc!</strong> (Söyle!) | dīcite! (Söyleyiniz!)<br>• dūcō &gt; <strong>dūc!</strong> (Liderlik et!) | dūcite! (Liderlik ediniz!)<br>• faciō &gt; <strong>fac!</strong> (Yap!) | facite! (Yapınız!)<br>• ferō &gt; <strong>fer!</strong> (Taşı, getir!) | ferte! (Taşıyınız!)</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">EMİR KİPİ (IMPERATIVUS) TABLOSU</span>\n    <strong class=\"table-title\">3. Grup Düzenli ve Düzensiz Emir Kipi Tablosu</strong>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Fiil & Anlam</th>\n        <th>2. Tekil (Sen)</th>\n        <th>2. Çoğul (Siz)</th>\n        <th>Olumsuz Tekil (Sen)</th>\n        <th>Olumsuz Çoğul (Siz)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>rĕgo, -ĕre</strong><br><small class=\"case-cell-tr\">yönetmek</small></td>\n        <td class=\"case-cell-latin\">rege (Yönet!)</td>\n        <td class=\"case-cell-latin\">regi-te (Yönetiniz!)</td>\n        <td class=\"case-cell-latin\">nōlī regere</td>\n        <td class=\"case-cell-latin\">nōlīte regere</td>\n      </tr>\n      <tr>\n        <td><strong>vinco, -ĕre</strong><br><small class=\"case-cell-tr\">yenmek</small></td>\n        <td class=\"case-cell-latin\">vince (Yen!)</td>\n        <td class=\"case-cell-latin\">vinci-te (Yeniniz!)</td>\n        <td class=\"case-cell-latin\">nōlī vincere</td>\n        <td class=\"case-cell-latin\">nōlīte vincere</td>\n      </tr>\n      <tr>\n        <td><strong>dīco, -ĕre</strong><br><small class=\"case-cell-tr\">söylemek (Düzensiz)</small></td>\n        <td class=\"case-cell-latin\">dīc (Söyle!)</td>\n        <td class=\"case-cell-latin\">dīci-te (Söyleyiniz!)</td>\n        <td class=\"case-cell-latin\">nōlī dīcere</td>\n        <td class=\"case-cell-latin\">nōlīte dīcere</td>\n      </tr>\n      <tr>\n        <td><strong>dūco, -ĕre</strong><br><small class=\"case-cell-tr\">liderlik etmek (Düzensiz)</small></td>\n        <td class=\"case-cell-latin\">dūc (Liderlik et!)</td>\n        <td class=\"case-cell-latin\">dūci-te (Liderlik ediniz!)</td>\n        <td class=\"case-cell-latin\">nōlī dūcere</td>\n        <td class=\"case-cell-latin\">nōlīte dūcere</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Klasik Latince tekerleme: 'dīc, dūc, fac, fer — emir kipinde -e'yi yer!'</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">1, 2 ve 3. Grup Emir Kipi Karşılaştırması (Slayt 10)</strong>\n    <span class=\"table-sub\">(Slayt 10)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grup: laudō</th>\n        <th>2. Grup: moneō</th>\n        <th>3. Grup: vinco</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>2. Sg. (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudā (Öv!)</td>\n        <td class=\"case-cell-latin\">monē (Uyar!)</td>\n        <td class=\"case-cell-latin\">vince (Yen!)</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl. (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-te (Övünüz!)</td>\n        <td class=\"case-cell-latin\">monē-te (Uyarınız!)</td>\n        <td class=\"case-cell-latin\">vinci-tē (Yeniniz!)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Bella sunt mala et multa pericula habent.",
        "tr": "Savaşlar kötüdür ve bir sürü tehlikeleri vardır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Officium nautam de otio hodie vocat.",
        "tr": "Görev / vazife bugün denizciyi inzivasından çağırıyor.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Si multam pecuniam habetis, saepe non estis sine curis.",
        "tr": "Eğer çok paranız varsa, genelde başınız dertten kurtulmaz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Puellae magistram de consilio malo sine mora monent.",
        "tr": "Kızlar öğretmeni kötü karar hakkında hiç gecikmeden uyarıyorlar.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "O magne poeta, sumus veri amici; me iuva, amabo te.",
        "tr": "Ey büyük şair, bizler gerçek dostuz; bana yardım et lütfen!",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Feminae agricolae portam vident.",
        "tr": "Kadınlar çiftçinin kapısını görüyorlar.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "In magno periculo es.",
        "tr": "Büyük bir tehlike içindesin.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Si pericula sunt vera, infortunatus es.",
        "tr": "Eğer tehlikeler gerçekse, talihsizsindir!",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Salve, O amice, vir bonus es.",
        "tr": "Selam, ey dostum, sen iyi bir insansın.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Non bella est fama filii tui.",
        "tr": "Oğlunun şöhreti iyi değildir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Errare est humanum.",
        "tr": "Hata yapmak insani bir şeydir (insana özgüdür).",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Nihil est omnino beatum.",
        "tr": "Hiçbir şey tümüyle talihli değildir. bütünüyle, tamamen mutlu, talihli",
        "analysis": "omnino, adv.; beatus, -a, -um, adj.,",
        "notes": "omnino, adv.; beatus, -a, -um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Magistri parvis pueris crustula et dona saepe dant.",
        "tr": "Öğretmenler küçük çocuklara sık sık kurabiyeler ve hediyeler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "verirler. Amicam meam magis quam oculos meos amo.",
        "tr": "Kız arkadaşımı gözlerimden daha çok seviyorum. daha fazla, daha çok",
        "analysis": "magis, adv.,; crustulum, -i, n.,",
        "notes": "magis, adv.,; crustulum, -i, n.,",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "3. grupta gelecek zaman 1. tekilde -am ile başlar: regam (yöneteceğim); 1. çekim fiillerle karıştırmamaya dikkat ediniz."
  },
  {
    "id": "T1_W10_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 10,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 10. Hafta (1. Ders)",
    "title": "DÜZENSİZ FİİLLER: ESSE (OLMAK) VE POSSE (-EBİLMEK)",
    "subtitle": "sum ve possum Fiillerinin Praesens, Imperfectum, Futurum Çekimleri ve Hakiki Dostluk Metni",
    "summary": "Bu fasikülde Latin dilinin iki temel direği olan esse (olmak) ve posse (muktedir olmak, -ebilmek) fiillerini, ses benzeşmesini (pot-sum > possum), üç temel zamandaki çekimlerini ve Hakiki Dostluk (Vera Amicitia) okuma parçasını öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer10.1.pdf",
    "slideCount": 15,
    "topics": ["esse Fiili (sum, esse, fuī)", "posse Fiili (possum, posse, potuī)", "Ses Benzeşmesi (pot- + s- > pos-)", "sum & possum Praesens", "sum & possum Imperfectum", "sum & possum Futurum", "Hakiki Dostluk Okuma Metni"],
    "vocab": ["sum", "possum", "amicitia", "verus", "dignus", "praeclarus", "rarus", "stultus", "pecunia", "basium", "animus", "supero", "maneo", "adiuvo", "in", "et", "de", "ego", "saepe", "magister", "officium", "semper", "non", "sed", "patria", "propter", "mora", "remedio", "heri", "pauci", "cura", "culpa", "cras", "otium", "vir", "sine", "vita", "nihil"],
    "sections": [
      {
        "title": "1. Düzensiz Fiiller 1: esse (olmak) — Üç Zaman Çekimi",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 2, 3, 4 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">sum, esse (Praesens) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(sum, esse — olmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">sum</td>\n        <td class=\"case-cell-tr\">oluyorum / varım(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">es</td>\n        <td class=\"case-cell-tr\">oluyorsun / varsın(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">est</td>\n        <td class=\"case-cell-tr\">oluyor / var(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">sumus</td>\n        <td class=\"case-cell-tr\">oluyoruz / varız(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">estis</td>\n        <td class=\"case-cell-tr\">oluyorsunuz / varsınız(dır)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">sunt</td>\n        <td class=\"case-cell-tr\">oluyorlar / varlar(dır)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">sum, esse (Imperfectum) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(sum, esse — olmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">eram</td>\n        <td class=\"case-cell-tr\">oluyordum / vardım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">erās</td>\n        <td class=\"case-cell-tr\">oluyordun / vardın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">erat</td>\n        <td class=\"case-cell-tr\">oluyordu / vardı</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">erāmus</td>\n        <td class=\"case-cell-tr\">oluyorduk / vardık</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">erātis</td>\n        <td class=\"case-cell-tr\">oluyordunuz / vardınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">erant</td>\n        <td class=\"case-cell-tr\">oluyorlardı / vardılar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">sum, esse (Futurum) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(sum, esse — olmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">erō</td>\n        <td class=\"case-cell-tr\">olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">eris</td>\n        <td class=\"case-cell-tr\">olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">erit</td>\n        <td class=\"case-cell-tr\">olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">erimus</td>\n        <td class=\"case-cell-tr\">olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">eritis</td>\n        <td class=\"case-cell-tr\">olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">erunt</td>\n        <td class=\"case-cell-tr\">olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Düzensiz Fiiller 2: posse (-ebilmek) — Üç Zaman Çekimi",
        "html": "<p><strong>Kural (Slayt 5):</strong> <em>potis</em> (muktedir) kökü <strong>pot-</strong> ile <em>sum</em> fiilinin birleşimidir. Gövdedeki <em>-t-</em> sesi, <em>-s-</em> sesiyle başlayan takıların önünde <em>-s-</em> sesine dönüşür (pot-sum &gt; <strong>pos-sum</strong>). Slayt 6, 7, 8 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">possum, posse (Praesens) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(possum, posse — -ebilmek, muktedir olmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">pos-sum</td>\n        <td class=\"case-cell-tr\">muktedir oluyorum / -ebilirim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">pot-es</td>\n        <td class=\"case-cell-tr\">muktedir oluyorsun / -ebilirsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">pot-est</td>\n        <td class=\"case-cell-tr\">muktedir oluyor / -ebilir</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">pos-sumus</td>\n        <td class=\"case-cell-tr\">muktedir oluyoruz / -ebiliriz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">pot-estis</td>\n        <td class=\"case-cell-tr\">muktedir oluyorsunuz / -ebilirsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">pos-sunt</td>\n        <td class=\"case-cell-tr\">muktedir oluyorlar / -ebilirler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">possum, posse (Imperfectum) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(possum, posse — -ebilmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">pot-eram</td>\n        <td class=\"case-cell-tr\">muktedir oluyordum / -ebilirdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">pot-erās</td>\n        <td class=\"case-cell-tr\">muktedir oluyordun / -ebilirdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">pot-erat</td>\n        <td class=\"case-cell-tr\">muktedir oluyordu / -ebilirdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">pot-erāmus</td>\n        <td class=\"case-cell-tr\">muktedir oluyorduk / -ebilirdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">pot-erātis</td>\n        <td class=\"case-cell-tr\">muktedir oluyordunuz / -ebilirdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">pot-erant</td>\n        <td class=\"case-cell-tr\">muktedir oluyorlardı / -ebilirlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">possum, posse (Futurum) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(possum, posse — -ebilmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">pot-erō</td>\n        <td class=\"case-cell-tr\">muktedir olacağım / -ebileceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">pot-eris</td>\n        <td class=\"case-cell-tr\">muktedir olacaksın / -ebileceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">pot-erit</td>\n        <td class=\"case-cell-tr\">muktedir olacak / -ebilecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">pot-erimus</td>\n        <td class=\"case-cell-tr\">muktedir olacağız / -ebileceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">pot-eritis</td>\n        <td class=\"case-cell-tr\">muktedir olacaksınız / -ebileceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">pot-erunt</td>\n        <td class=\"case-cell-tr\">muktedir olacaklar / -ebilecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "Okuma Parçası: Hakiki Dostluk Üzerine (De Amicitia)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Hakiki Dostluk Üzerine (De Amicitia)</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Pauci\" role=\"button\" tabindex=\"0\">Pauci</span> <span class=\"lat-word\" data-word=\"viri\" role=\"button\" tabindex=\"0\">viri</span> <span class=\"lat-word\" data-word=\"veros\" role=\"button\" tabindex=\"0\">veros</span> <span class=\"lat-word\" data-word=\"amicos\" role=\"button\" tabindex=\"0\">amicos</span> <span class=\"lat-word\" data-word=\"habent\" role=\"button\" tabindex=\"0\">habent</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"pauci\" role=\"button\" tabindex=\"0\">pauci</span> <span class=\"lat-word\" data-word=\"sunt\" role=\"button\" tabindex=\"0\">sunt</span> <span class=\"lat-word\" data-word=\"digni\" role=\"button\" tabindex=\"0\">digni</span>. <span class=\"lat-word\" data-word=\"Amicitia\" role=\"button\" tabindex=\"0\">Amicitia</span> <span class=\"lat-word\" data-word=\"vera\" role=\"button\" tabindex=\"0\">vera</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"praeclara\" role=\"button\" tabindex=\"0\">praeclara</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"omnia\" role=\"button\" tabindex=\"0\">omnia</span> <span class=\"lat-word\" data-word=\"praeclara\" role=\"button\" tabindex=\"0\">praeclara</span> <span class=\"lat-word\" data-word=\"sunt\" role=\"button\" tabindex=\"0\">sunt</span> <span class=\"lat-word\" data-word=\"rara\" role=\"button\" tabindex=\"0\">rara</span>. <span class=\"lat-word\" data-word=\"Multi\" role=\"button\" tabindex=\"0\">Multi</span> <span class=\"lat-word\" data-word=\"viri\" role=\"button\" tabindex=\"0\">viri</span> <span class=\"lat-word\" data-word=\"stulti\" role=\"button\" tabindex=\"0\">stulti</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span> <span class=\"lat-word\" data-word=\"pecunia\" role=\"button\" tabindex=\"0\">pecunia</span> <span class=\"lat-word\" data-word=\"semper\" role=\"button\" tabindex=\"0\">semper</span> <span class=\"lat-word\" data-word=\"cogitant\" role=\"button\" tabindex=\"0\">cogitant</span>, <span class=\"lat-word\" data-word=\"pauci\" role=\"button\" tabindex=\"0\">pauci</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span> <span class=\"lat-word\" data-word=\"amicis\" role=\"button\" tabindex=\"0\">amicis</span>; <span class=\"lat-word\" data-word=\"sed\" role=\"button\" tabindex=\"0\">sed</span> <span class=\"lat-word\" data-word=\"errant\" role=\"button\" tabindex=\"0\">errant</span>: <span class=\"lat-word\" data-word=\"possumus\" role=\"button\" tabindex=\"0\">possumus</span> <span class=\"lat-word\" data-word=\"valere\" role=\"button\" tabindex=\"0\">valere</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"multa\" role=\"button\" tabindex=\"0\">multa</span> <span class=\"lat-word\" data-word=\"pecunia\" role=\"button\" tabindex=\"0\">pecunia</span>, <span class=\"lat-word\" data-word=\"sed\" role=\"button\" tabindex=\"0\">sed</span> <span class=\"lat-word\" data-word=\"sine\" role=\"button\" tabindex=\"0\">sine</span> <span class=\"lat-word\" data-word=\"amicitia\" role=\"button\" tabindex=\"0\">amicitia</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"valemus\" role=\"button\" tabindex=\"0\">valemus</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"vita\" role=\"button\" tabindex=\"0\">vita</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"nihil\" role=\"button\" tabindex=\"0\">nihil</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Pek az kişi hakiki dostlara sahiptir ve pek az kişi buna layıktır. Hakiki dostluk muhteşem bir şeydir; bütün muhteşem şeyler de nadirdir (nadir bulunur). Pek çok aptal adam para hakkında düşünür; pek azı ise dostları hakkında; ama yanılırlar: çok fazla para olmadan da iyi durumda olabiliriz; ama dostluk olmadan iyi olmayız; ve hayat hiçtir (hiçbir değer ifade etmez).</p>\n  </div>\n</div>\n",
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
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "adiuvate, conservate populum Romanum.",
        "tr": "Aramızda kötüler var ve iyi insanların yıkımını tasarlıyorlar. İyi insanlara / iyilere yardım ediniz; Roma halkını koruyunuz. öpücük",
        "analysis": "basium, -ii, n.,",
        "notes": "basium, -ii, n.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "mihi, ego (ben) zamirinin dat. hali in numero esse,",
        "tr": "arasında sayılmak, arasında olmak",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Nautam monebam. Nautam saepe monebam.",
        "tr": "Denziciyi uyarıyordum. Denizciyi sık sık uyarırdım.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Poetae vitam agricolae laudabant.",
        "tr": "Şairler çiftçinin yaşamını övüyorlardı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Magister pueros vocabat.",
        "tr": "Öğretmen öğrencileri çağırıyordu.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Officium liberos viros semper vocabat.",
        "tr": "Görev her zaman özgür adamları çağırırdı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Habebimusne multos viros et feminas magnorum animorum?",
        "tr": "Çok cesur pek çok erkek ve kadına sahip olacak mıyız?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pericula belli non sunt parva, sed patria tua te vocabit et agricolae adiuvabunt.",
        "tr": "Savaşın tehlikeleri az değildir, ama senin vatanın seni çağıracak ve çiftçiler yardım edecek.",
        "analysis": "animus, -i, m.,",
        "notes": "animus, -i, m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "ruh, zihin animi, -orum, pl.,",
        "tr": "cesaret, yüreklilik",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Propter culpas malorum patria nostra non valebit.",
        "tr": "Kötülerin / kötü insanların suçları nedeniyle vatanımız güçlü olmayacak.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Mora animos nostros superabat et remedium non habebamus.",
        "tr": "Gecikme cesaretimizi alt ediyordu / kırıyordu ve çaremiz yoktu?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multi in agris heri manebant et Romanos iuvabant.",
        "tr": "Pek çok kişi dün tarlalarda kalıyordu ve Romalılara yardım ediyordu.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pauci viri de cura animi cogitabant.",
        "tr": "Pek az kişi ruha duyulan özen hakkında düşünüyordu.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Propter iram in culpa estis et cras poenas dabitis.",
        "tr": "Öfkeniz yüzünden suçlusunuz ve yarın bedelini ödeyeceksiniz?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Verum otium non habes, vir stulte.",
        "tr": "Gerçek huzura sahip değilsin, ey budala adam!",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "possum fiili Türkçedeki yeterlilik fiili (-ebilmek) gibidir ve anlamını daima bir mastarla (Infinitivus) tamamlar."
  },
  {
    "id": "T1_W10_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 10,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 10. Hafta (2. Ders)",
    "title": "3. GRUP İSİMLER: SESSİZ GÖVDELİ İSİMLER (CONSONANT STEMS)",
    "subtitle": "Gövde Bulma, Cins İpuçları, Takılar ve 7 Model İsim (rex, lex, virtus, homo, flos, corpus, carmen)",
    "summary": "Bu fasikülde 3. Grup isimlerin gövde bulma formülünü, tekil Nominativus bitimlerine göre cins tespit etme kurallarını ve Doç. Dr. Eyüp Çoraklı'nın ders slaytlarında verdiği 7 sessiz gövdeli model ismin tam çekim tablolarını göreceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer10.2.pdf",
    "slideCount": 20,
    "topics": ["3. Grup İsimler (Declinatio III)", "Gövde Bulma (-is Takısı)", "Cins İpuçları (m, f, n)", "Sessiz Gövdeli Takılar Tablosu", "rex & lex Çekimi", "virtus & homo Çekimi", "flos Çekimi", "corpus & carmen (Nötr)"],
    "vocab": ["rex", "lex", "virtus", "homo", "flos", "corpus", "carmen", "consul", "pater", "mater", "amor", "soror", "libertas", "civitas", "nomen", "caput"],
    "sections": [
      {
        "title": "1. 3. Grup İsimler: Cins İpuçları ve Sessiz Gövdeli Takılar Tablosu",
        "html": "<p><strong>Gövde Bulma Yöntemi (Slayt 10):</strong> 3. Grup isimlerde gövde, sözlükteki Tekil Genetivus halindeki <em>–is</em> takısının atılmasıyla bulunur:<br>\n• <span class=\"lat-word\">mīles &gt; mīlit-is</span> &gt; gövde: <strong>mīlit-</strong> (asker)<br>\n• <span class=\"lat-word\">lēx &gt; lēg-is</span> &gt; gövde: <strong>lēg-</strong> (yasa)<br>\n• <span class=\"lat-word\">corpus &gt; corpor-is</span> &gt; gövde: <strong>corpor-</strong> (beden)</p>\n<p><strong>Cins İpuçları (Slayt 6-9):</strong><br>\n• <em>Eril:</em> -o, -or, -os, -er, -ex, -es ile bitenler genelde erildir.<br>\n• <em>Dişil:</em> -as, -aus, -us, -is, -es, -x, -s, -do, -go, -io ile bitenler genelde dişildir.<br>\n• <em>Nötr:</em> -us, -en, -al, -ar, -re, -le, -a, -e, -c, -ut, -ur ile bitenler genelde nötrdür.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">3. Grup İsimlerin Çekim Takıları: Sessiz Gövdeliler (Slayt 12)</strong>\n    <span class=\"table-sub\">(Slayt 12)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum / Femininum (Tekil)</th>\n        <th>Masculinum / Femininum (Çoğul)</th>\n        <th>Neutrum (Tekil)</th>\n        <th>Neutrum (Çoğul)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">-ēs</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">-a</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">-ēs</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">-a</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">-is</td>\n        <td class=\"case-cell-latin\">-um</td>\n        <td class=\"case-cell-latin\">-is</td>\n        <td class=\"case-cell-latin\">-um</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">-ī</td>\n        <td class=\"case-cell-latin\">-ibus</td>\n        <td class=\"case-cell-latin\">-ī</td>\n        <td class=\"case-cell-latin\">-ibus</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">-em</td>\n        <td class=\"case-cell-latin\">-ēs</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">-a</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">-e</td>\n        <td class=\"case-cell-latin\">-ibus</td>\n        <td class=\"case-cell-latin\">-e</td>\n        <td class=\"case-cell-latin\">-ibus</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Eril ve Dişil isimlerin Tekil Nom ve Voc halleri çok çeşitlidir ve birbiriyle aynıdır. Nötr isimlerde ise Nom, Voc ve Acc halleri tekilde birbiriyle aynı, çoğulda ise daima kısa -a ile biter.</div>\n</div>\n"
      },
      {
        "title": "2. Model Çekimler 1: rex, rēgis (m.) ve lēx, lēgis (f.)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 13 ve 14 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">rēx, rēgis, m. (kral) [gövde: rēg-]</strong>\n    <span class=\"table-sub\">(rēx, rēgis, m. — kral)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">rēx</td>\n        <td class=\"case-cell-latin\">rēg-ēs</td>\n        <td class=\"case-cell-tr\">kral / krallar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">rēx</td>\n        <td class=\"case-cell-latin\">rēg-ēs</td>\n        <td class=\"case-cell-tr\">ey kral / ey krallar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">rēg-is</td>\n        <td class=\"case-cell-latin\">rēg-um</td>\n        <td class=\"case-cell-tr\">kralın / kralların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">rēg-ī</td>\n        <td class=\"case-cell-latin\">rēg-ibus</td>\n        <td class=\"case-cell-tr\">krala / için / krallara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">rēg-em</td>\n        <td class=\"case-cell-latin\">rēg-ēs</td>\n        <td class=\"case-cell-tr\">kralı / kralları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">rēg-e</td>\n        <td class=\"case-cell-latin\">rēg-ibus</td>\n        <td class=\"case-cell-tr\">kralla / kraldan / krallarla / krallardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">lēx, lēgis, f. (yasa) [gövde: lēg-]</strong>\n    <span class=\"table-sub\">(lēx, lēgis, f. — yasa)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">lēx</td>\n        <td class=\"case-cell-latin\">lēg-ēs</td>\n        <td class=\"case-cell-tr\">yasa / yasalar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">lēx</td>\n        <td class=\"case-cell-latin\">lēg-ēs</td>\n        <td class=\"case-cell-tr\">ey yasa / ey yasalar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">lēg-is</td>\n        <td class=\"case-cell-latin\">lēg-um</td>\n        <td class=\"case-cell-tr\">yasanın / yasaların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">lēg-ī</td>\n        <td class=\"case-cell-latin\">lēg-ibus</td>\n        <td class=\"case-cell-tr\">yasaya / için / yasalara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">lēg-em</td>\n        <td class=\"case-cell-latin\">lēg-ēs</td>\n        <td class=\"case-cell-tr\">yasayı / yasaları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">lēg-e</td>\n        <td class=\"case-cell-latin\">lēg-ibus</td>\n        <td class=\"case-cell-tr\">yasayla / yasadan / yasalarla / yasalardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Model Çekimler 2: virtūs, virtūtis (f.) ve homō, hominis (m.)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 15 ve 16 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">virtūs, virtūtis, f. (erdem) [gövde: virtūt-]</strong>\n    <span class=\"table-sub\">(virtūs, virtūtis, f. — erdem, yiğitlik)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">virtūs</td>\n        <td class=\"case-cell-latin\">virtūt-ēs</td>\n        <td class=\"case-cell-tr\">erdem / erdemler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">virtūs</td>\n        <td class=\"case-cell-latin\">virtūt-ēs</td>\n        <td class=\"case-cell-tr\">ey erdem / ey erdemler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">virtūt-is</td>\n        <td class=\"case-cell-latin\">virtūt-um</td>\n        <td class=\"case-cell-tr\">erdemin / erdemlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">virtūt-ī</td>\n        <td class=\"case-cell-latin\">virtūt-ibus</td>\n        <td class=\"case-cell-tr\">erdeme / için / erdemlere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">virtūt-em</td>\n        <td class=\"case-cell-latin\">virtūt-ēs</td>\n        <td class=\"case-cell-tr\">erdemi / erdemleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">virtūt-e</td>\n        <td class=\"case-cell-latin\">virtūt-ibus</td>\n        <td class=\"case-cell-tr\">erdemle / erdemden / erdemlerle / erdemlerden</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">homō, hominis, m. (insan) [gövde: homin-]</strong>\n    <span class=\"table-sub\">(homō, hominis, m. — insan)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">homō</td>\n        <td class=\"case-cell-latin\">homin-ēs</td>\n        <td class=\"case-cell-tr\">insan / insanlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">homō</td>\n        <td class=\"case-cell-latin\">homin-ēs</td>\n        <td class=\"case-cell-tr\">ey insan / ey insanlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">homin-is</td>\n        <td class=\"case-cell-latin\">homin-um</td>\n        <td class=\"case-cell-tr\">insanın / insanların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">homin-ī</td>\n        <td class=\"case-cell-latin\">homin-ibus</td>\n        <td class=\"case-cell-tr\">insana / için / insanlara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">homin-em</td>\n        <td class=\"case-cell-latin\">homin-ēs</td>\n        <td class=\"case-cell-tr\">insanı / insanları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">homin-e</td>\n        <td class=\"case-cell-latin\">homin-ibus</td>\n        <td class=\"case-cell-tr\">insanla / insandan / insanlarla / insanlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. Model Çekimler 3: flōs, flōris (m.), corpus (n.) ve carmen (n.)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 17, 18 ve 19 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">flōs, flōris, m. (çiçek) [gövde: flōr-]</strong>\n    <span class=\"table-sub\">(flōs, flōris, m. — çiçek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">flōs</td>\n        <td class=\"case-cell-latin\">flōr-ēs</td>\n        <td class=\"case-cell-tr\">çiçek / çiçekler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">flōs</td>\n        <td class=\"case-cell-latin\">flōr-ēs</td>\n        <td class=\"case-cell-tr\">ey çiçek / ey çiçekler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">flōr-is</td>\n        <td class=\"case-cell-latin\">flōr-um</td>\n        <td class=\"case-cell-tr\">çiçeğin / çiçeklerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">flōr-ī</td>\n        <td class=\"case-cell-latin\">flōr-ibus</td>\n        <td class=\"case-cell-tr\">çiçeğe / için / çiçeklere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">flōr-em</td>\n        <td class=\"case-cell-latin\">flōr-ēs</td>\n        <td class=\"case-cell-tr\">çiçeği / çiçekleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">flōr-e</td>\n        <td class=\"case-cell-latin\">flōr-ibus</td>\n        <td class=\"case-cell-tr\">çiçekle / çiçekten / çiçeklerle / çiçeklerden</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">corpus, corporis, n. (beden) [gövde: corpor-]</strong>\n    <span class=\"table-sub\">(corpus, corporis, n. — beden, vücut)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">corpus</td>\n        <td class=\"case-cell-latin\">corpor-a</td>\n        <td class=\"case-cell-tr\">beden / bedenler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">corpus</td>\n        <td class=\"case-cell-latin\">corpor-a</td>\n        <td class=\"case-cell-tr\">ey beden / ey bedenler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">corpor-is</td>\n        <td class=\"case-cell-latin\">corpor-um</td>\n        <td class=\"case-cell-tr\">bedenin / bedenlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">corpor-ī</td>\n        <td class=\"case-cell-latin\">corpor-ibus</td>\n        <td class=\"case-cell-tr\">bedene / için / bedenlere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">corpus</td>\n        <td class=\"case-cell-latin\">corpor-a</td>\n        <td class=\"case-cell-tr\">bedeni / bedenleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">corpor-e</td>\n        <td class=\"case-cell-latin\">corpor-ibus</td>\n        <td class=\"case-cell-tr\">bedenle / bedenden / bedenlerle / bedenlerden</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">carmen, carminis, n. (şarkı, şiir) [gövde: carmin-]</strong>\n    <span class=\"table-sub\">(carmen, carminis, n. — şarkı, şiir, ezgi)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">carmen</td>\n        <td class=\"case-cell-latin\">carmin-a</td>\n        <td class=\"case-cell-tr\">şarkı / şarkılar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">carmen</td>\n        <td class=\"case-cell-latin\">carmin-a</td>\n        <td class=\"case-cell-tr\">ey şarkı / ey şarkılar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">carmin-is</td>\n        <td class=\"case-cell-latin\">carmin-um</td>\n        <td class=\"case-cell-tr\">şarkının / şarkıların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">carmin-ī</td>\n        <td class=\"case-cell-latin\">carmin-ibus</td>\n        <td class=\"case-cell-tr\">şarkıya / için / şarkılara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">carmen</td>\n        <td class=\"case-cell-latin\">carmin-a</td>\n        <td class=\"case-cell-tr\">şarkıyı / şarkıları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">carmin-e</td>\n        <td class=\"case-cell-latin\">carmin-ibus</td>\n        <td class=\"case-cell-tr\">şarkıyla / şarkıdan / şarkılarla / şarkılardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "3. grup kelimelerin gövdesi daima Tekil Genetivus'tan (-is atılarak) elde edilir; ezberinizi bu kural üzerine kurunuz."
  },
  {
    "id": "T1_W11_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 11,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 11. Hafta (1. Ders)",
    "title": "3. GRUP İSİMLER: -İ GÖVDELİ İSİMLER VE DÜZENSİZ ÇEKİMLER",
    "subtitle": "i-Stems (civis, urbs, ars, animal, mare), Düzensiz İsimler (vis, bos, sus, Iuppiter) ve Ayırt Etme Kuralları",
    "summary": "Bu fasikülde 3. Grup isimlerin gövdeleri -i seslisiyle biten alt kümesini (-ium çoğul genetivus), tekil ablativus'u -i ile biten cinssiz isimleri, düzensiz isimleri (vis, bos, sus, Iuppiter), sessiz ve -i gövdeli isimleri ayırt etme formüllerini ve esse + Gen. / esse + Dat. sahiplik kalıplarını göreceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer11.1.pdf",
    "slideCount": 23,
    "topics": ["3. Grup -i Gövdeli İsimler", "civis, urbs, ars Çekimleri", "animal ve mare (Nötr)", "Düzensiz İsimler (vis, bos, sus, Iuppiter)", "Gövde Ayırt Etme Kuralları", "esse + Genitivus ve Dativus"],
    "vocab": ["civis", "urbs", "ars", "animal", "mare", "vis", "bos", "sus", "Iuppiter", "nox", "mors", "hostis", "gens", "pons", "fons", "dens", "arx", "nihil", "sine", "culpa", "si", "poeta", "et", "amicus", "meus", "non", "equus", "casa", "servo", "vero"],
    "sections": [
      {
        "title": "1. 3. Grup -i Gövdeli Eril/Dişil İsimler: cīvis, urbs, ars",
        "html": "<p><strong>Temel Özellik (Slayt 2-5):</strong> Bu gruptaki isimlerin Çoğul Genetivus halleri <strong>–ium</strong> şeklinde biter. Tekil Ablativus hali ise genellikle <em>-e</em> (bazen <em>-ī</em>) olur:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">cīvis, cīvis, m./f. (yurttaş, vatandaş)</strong>\n    <span class=\"table-sub\">(cīvis, cīvis, m./f. — yurttaş, vatandaş)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">cīvis</td>\n        <td class=\"case-cell-latin\">cīvēs</td>\n        <td class=\"case-cell-tr\">yurttaş / yurttaşlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">cīvis</td>\n        <td class=\"case-cell-latin\">cīvēs</td>\n        <td class=\"case-cell-tr\">ey yurttaş / ey yurttaşlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">cīvis</td>\n        <td class=\"case-cell-latin\">cīvium</td>\n        <td class=\"case-cell-tr\">yurttaşın / yurttaşların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">cīvī</td>\n        <td class=\"case-cell-latin\">cīvibus</td>\n        <td class=\"case-cell-tr\">yurttaşa / için / yurttaşlara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">cīvem</td>\n        <td class=\"case-cell-latin\">cīvēs</td>\n        <td class=\"case-cell-tr\">yurttaşı / yurttaşları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">cīve (cīvī)</td>\n        <td class=\"case-cell-latin\">cīvibus</td>\n        <td class=\"case-cell-tr\">yurttaşla / yurttaştan / yurttaşlarla / yurttaşlardan</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Çoğul Genetivus -ium takısına dikkat ediniz.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">urbs, urbis, f. (şehir, kent)</strong>\n    <span class=\"table-sub\">(urbs, urbis, f. — şehir, kent)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">urbs</td>\n        <td class=\"case-cell-latin\">urbēs</td>\n        <td class=\"case-cell-tr\">şehir / şehirler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">urbs</td>\n        <td class=\"case-cell-latin\">urbēs</td>\n        <td class=\"case-cell-tr\">ey şehir / ey şehirler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">urbis</td>\n        <td class=\"case-cell-latin\">urbium</td>\n        <td class=\"case-cell-tr\">şehrin / şehirlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">urbī</td>\n        <td class=\"case-cell-latin\">urbibus</td>\n        <td class=\"case-cell-tr\">şehre / için / şehirlere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">urbem</td>\n        <td class=\"case-cell-latin\">urbēs</td>\n        <td class=\"case-cell-tr\">şehri / şehirleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">urbe</td>\n        <td class=\"case-cell-latin\">urbibus</td>\n        <td class=\"case-cell-tr\">şehirle / şehirden / şehirlerle / şehirlerden</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ars, artis, f. (sanat, beceri)</strong>\n    <span class=\"table-sub\">(ars, artis, f. — sanat, beceri)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">ars</td>\n        <td class=\"case-cell-latin\">artēs</td>\n        <td class=\"case-cell-tr\">sanat / sanatlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">ars</td>\n        <td class=\"case-cell-latin\">artēs</td>\n        <td class=\"case-cell-tr\">ey sanat / ey sanatlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">artis</td>\n        <td class=\"case-cell-latin\">artium</td>\n        <td class=\"case-cell-tr\">sanatın / sanatların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">artī</td>\n        <td class=\"case-cell-latin\">artibus</td>\n        <td class=\"case-cell-tr\">sanata / için / sanatlara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">artem</td>\n        <td class=\"case-cell-latin\">artēs</td>\n        <td class=\"case-cell-tr\">sanatı / sanatları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">arte</td>\n        <td class=\"case-cell-latin\">artibus</td>\n        <td class=\"case-cell-tr\">sanatla / sanattan / sanatlarla / sanatlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. 3. Grup -i Gövdeli Cinssiz (Neutrum) İsimler: animal ve mare",
        "html": "<p><strong>Önemli Kural (Slayt 6-7):</strong> Tekil Nominativus hali <em>-al, -ar, -e</em> ile biten nötr isimlerin:<br>1) Tekil Ablativus halleri <strong>-ī</strong> ile biter (animālī, marī).<br>2) Çoğul Nom/Voc/Acc halleri <strong>-ia</strong> ile biter (animālia, maria).<br>3) Çoğul Genetivus halleri <strong>-ium</strong> ile biter (animālium, marium).</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">animal, animālis, n. (hayvan)</strong>\n    <span class=\"table-sub\">(animal, animālis, n. — hayvan, canlı)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">animal</td>\n        <td class=\"case-cell-latin\">animālia</td>\n        <td class=\"case-cell-tr\">hayvan / hayvanlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">animal</td>\n        <td class=\"case-cell-latin\">animālia</td>\n        <td class=\"case-cell-tr\">ey hayvan / ey hayvanlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">animālis</td>\n        <td class=\"case-cell-latin\">animālium</td>\n        <td class=\"case-cell-tr\">hayvanın / hayvanların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">animālī</td>\n        <td class=\"case-cell-latin\">animālibus</td>\n        <td class=\"case-cell-tr\">hayvana / için / hayvanlara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">animal</td>\n        <td class=\"case-cell-latin\">animālia</td>\n        <td class=\"case-cell-tr\">hayvanı / hayvanları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">animālī</td>\n        <td class=\"case-cell-latin\">animālibus</td>\n        <td class=\"case-cell-tr\">hayvanla / hayvandan / hayvanlarla / hayvanlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">mare, maris, n. (deniz)</strong>\n    <span class=\"table-sub\">(mare, maris, n. — deniz)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">mare</td>\n        <td class=\"case-cell-latin\">maria</td>\n        <td class=\"case-cell-tr\">deniz / denizler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">mare</td>\n        <td class=\"case-cell-latin\">maria</td>\n        <td class=\"case-cell-tr\">ey deniz / ey denizler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">maris</td>\n        <td class=\"case-cell-latin\">marium</td>\n        <td class=\"case-cell-tr\">denizin / denizlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">marī</td>\n        <td class=\"case-cell-latin\">maribus</td>\n        <td class=\"case-cell-tr\">denize / için / denizlere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">mare</td>\n        <td class=\"case-cell-latin\">maria</td>\n        <td class=\"case-cell-tr\">denizi / denizleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">marī</td>\n        <td class=\"case-cell-latin\">maribus</td>\n        <td class=\"case-cell-tr\">denizle / denizden / denizlerle / denizlerden</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. 3. Grup Düzensiz İsimler: vīs, bōs, sūs, Iuppiter",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 9, 10, 11, 12 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">vīs, vīs, f. (güç, kuvvet, şiddet)</strong>\n    <span class=\"table-sub\">(vīs, vīs, f. — güç, kuvvet, şiddet)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">vīs</td>\n        <td class=\"case-cell-latin\">vīrēs</td>\n        <td class=\"case-cell-tr\">güç / güçler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">vīs</td>\n        <td class=\"case-cell-latin\">vīrēs</td>\n        <td class=\"case-cell-tr\">ey güç / ey güçler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">— (rōboris)</td>\n        <td class=\"case-cell-latin\">vīrium</td>\n        <td class=\"case-cell-tr\">gücün / güçlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">— (rōborī)</td>\n        <td class=\"case-cell-latin\">vīribus</td>\n        <td class=\"case-cell-tr\">güce / için / güçlere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">vim</td>\n        <td class=\"case-cell-latin\">vīrēs / vīrīs</td>\n        <td class=\"case-cell-tr\">gücü / güçleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">vī</td>\n        <td class=\"case-cell-latin\">vīribus</td>\n        <td class=\"case-cell-tr\">güçle / güçten / güçlerle / güçlerden</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Tekil Genetivus ve Dativus kullanılmaz; yerine rōbur kelimesi kullanılır.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">bōs, bovis, m./f. (öküz, sığır)</strong>\n    <span class=\"table-sub\">(bōs, bovis, m./f. — öküz, sığır)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">bōs</td>\n        <td class=\"case-cell-latin\">bovēs</td>\n        <td class=\"case-cell-tr\">öküz / öküzler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">bōs</td>\n        <td class=\"case-cell-latin\">bovēs</td>\n        <td class=\"case-cell-tr\">ey öküz / ey öküzler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">bovis</td>\n        <td class=\"case-cell-latin\">boum / boverum</td>\n        <td class=\"case-cell-tr\">öküzün / öküzlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">bovī</td>\n        <td class=\"case-cell-latin\">bōbus / būbus</td>\n        <td class=\"case-cell-tr\">öküze / için / öküzlere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">bovem</td>\n        <td class=\"case-cell-latin\">bovēs</td>\n        <td class=\"case-cell-tr\">öküzü / öküzleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">bove</td>\n        <td class=\"case-cell-latin\">bōbus / būbus</td>\n        <td class=\"case-cell-tr\">öküzle / öküzden / öküzlerle / öküzlerden</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Iuppiter, Iovis, m. (baş tanrı Iuppiter)</strong>\n    <span class=\"table-sub\">(Slayt 12)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">Iuppiter</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">Iuppiter</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">Iovis</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">Iovī</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">Iovem</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">Iove</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Iuppiter kelimesinin gövdesi Iov- kökü üzerine kuruludur ve çoğulu yoktur.</div>\n</div>\n"
      },
      {
        "title": "4. Sessiz ve -i Gövdeli İsimleri Ayırt Etme Kuralları",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 14-19 formülleri:</p>\n<ol>\n  <li><strong>Sessiz Gövdeliler (-um alırlar):</strong>\n    <ul>\n      <li>Gövde tek bir sessizle biter; Tekil Genetivus'ta hece sayısı artar ve Genetivus ekinden önce tek sessiz gelir: <span class=\"lat-word\">lēx, lēgis</span> (g), <span class=\"lat-word\">civitas, civitātis</span> (t), <span class=\"lat-word\">corpus, corporis</span> (r).</li>\n    </ul>\n  </li>\n  <li><strong>-i Gövdeliler (-ium alırlar):</strong>\n    <ul>\n      <li><em>A. Kuralı:</em> Tekil Genetivus'ta hece sayısı artar ancak genetivus ekinden önce çift sessiz gelir: <span class=\"lat-word\">urbs, urbis</span> (rb), <span class=\"lat-word\">mōns, montis</span> (nt), <span class=\"lat-word\">nox, noctis</span> (ct), <span class=\"lat-word\">ars, artis</span> (rt).</li>\n      <li><em>B. Kuralı (Eşit Heceliler / Parisyllaba):</em> Tekil Nom ve Gen hece sayıları eşittir: <span class=\"lat-word\">cīvis, cīvis</span>; <span class=\"lat-word\">hostis, hostis</span>; <span class=\"lat-word\">nāvis, nāvis</span>.</li>\n      <li><em>C. Kuralı:</em> -al, -ar, -e ile biten nötr isimler: <span class=\"lat-word\">animal</span>, <span class=\"lat-word\">mare</span>.</li>\n    </ul>\n  </li>\n  <li><strong>Aile İsimleri İstisnası:</strong> Eşit heceli olmalarına rağmen <em>pater, māter, frāter, iuvenis, senex, canis</em> çoğul Genetivus'ta <strong>-um</strong> alırlar (patrum, mātrum, frātrum).</li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Çoğul Genetivus Altın Kuralı",
        "calloutText": "Kelimenin çoğul genetivus'ta -um mu yoksa -ium mu alacağı yukarıdaki 3 kurala göre kesin olarak saptanır.",
        "tableHtml": ""
      },
      {
        "title": "5. Sahiplik ve Aidiyet Sentaksı: esse + Gen. ve esse + Dat.",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 22 ve 23:</p>\n<ul>\n  <li><strong>esse + Genetivus (Aidiyet Bildirir):</strong>\n    <ul>\n      <li><span class=\"lat-word\">Equus est agricolae.</span> = At çiftçinindir / çiftçiye aittir.</li>\n      <li><span class=\"lat-word\">Casa est Rōmānōrum.</span> = Ev Romalılara aittir.</li>\n      <li><span class=\"lat-word\">Culpa erit puerī.</span> = Suç çocuğun olacaktır.</li>\n    </ul>\n  </li>\n  <li><strong>esse + Dativus (Sahiplik Bildirir - Dativus Possessivus):</strong>\n    <ul>\n      <li><span class=\"lat-word\">Sunt dōna servō.</span> = Kölenin hediyeleri var (Hediyeler köleye aittir).</li>\n      <li><span class=\"lat-word\">Librī erunt puerō.</span> = Çocuğun kitapları olacak.</li>\n      <li><span class=\"lat-word\">Agrī erant agricolae.</span> = Çiftçinin tarlaları vardı.</li>\n    </ul>\n  </li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Nihil est sine culpa; sumus boni, si paucas habemus.",
        "tr": "Hiçbir şey kusursuz değildir; eğer birkaç kusurumuz varsa, iyi insanlarızdır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Poeta amicae multas rosas, dona pulchra et basia dabat.",
        "tr": "Şair sevgilisine pek çok gül, güzel hediyeler ve öpücükler veriyordu.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Amici nostri poterant superare multa pericula.",
        "tr": "Bizim arkadaşlarımız pek çok tehlikenin üstesinden gelebiliyordu.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Amicus meus non potest remanere.",
        "tr": "Benim arkadaşım geride kalamaz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Debes conservare pecuniam tuam.",
        "tr": "Paranı muhafaza etmek zorundasın.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "ESSE + GEN. KALIBI (sahiplik bildirir) Equus est agricolae. Casa est Romanorum.",
        "tr": "At çiftçinindir / çiftçiye aittir. Ev Romalılara aittir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Nautae erant pecuniae. Culpa erit pueri. Paralar denizciye aitti / denizcinindi",
        "tr": "Suç çocuğun olacak.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "ESSE + DAT. KALIBI (sahiplik bildirir) Sunt dona servo. Libri erunt puero.",
        "tr": "Hediyeler köleye aittir (köle içindir). Kitaplar çocuğun olacak.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Agri erant agricolae. Plato amicus est vero.",
        "tr": "Tarlalar çiftçiye aitti. Platon hakikate dosttur.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "Tekil ablativus'u -i ile biten cinssiz isimlerin çoğulda -ia aldığını unutmayınız: mare > maria; animal > animalia."
  },
  {
    "id": "T1_W11_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 11,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 11. Hafta (2. Ders)",
    "title": "3. GRUP İSİMLERLE TAMLAMALAR VE MARTIALIS EPİGRAMI",
    "subtitle": "flumen longum, urbes magnae, Sentaks Çözümlemeleri ve Martialis Şiiri (7.59)",
    "summary": "Bu fasikülde 3. Grup isimlerin 1. ve 2. sınıf sıfatlarla kurduğu tamlamaları (flumen longum, urbes magnae, tempora perpetua), ders slaytlarındaki özgün felsefi cümleleri ve Martialis'in Caecilianus ve domuz hakkındaki hiciv epigramını öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer11.2.pdf",
    "slideCount": 11,
    "topics": ["3. Grup İsim-Sıfat Tamlamaları", "flumen longum", "urbes magnae", "Örnek Cümle Tahlilleri", "Martialis Epigramı (7.59)", "Sentaks Pratikleri"],
    "vocab": ["flumen", "urbs", "rex", "consul", "imperator", "pater", "mater", "miles", "mos", "senex", "tempus", "dux", "labor", "virtus", "invidia", "sustineo", "angustus", "adulescentia", "supplicium", "sanus", "aper", "ceno", "conviva", "homo", "cras", "non", "igitur", "heri", "animus", "culpa", "et", "cura", "propter", "vita", "semper", "gloria", "fama", "si", "quando", "satis", "tum", "vir", "bonus", "bellum"],
    "sections": [
      {
        "title": "1. 3. Grup İsimlerle Kurulan Model Sıfat Tamlamaları",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 2-5 örnek tamlamalar tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">3. Grup İsimlerle İlgili Örnek İfadeler</strong>\n    <span class=\"table-sub\">(Slayt 2-5)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Latince Tamlama</th>\n        <th>Türkçe Karşılığı</th>\n        <th>Morfolojik Yapı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>flūmen longum</strong></td>\n        <td class=\"case-cell-latin\">uzun nehir</td>\n        <td class=\"case-cell-latin\">Nom/Acc. Sg. Neutrum (3. çekim isim + 2. çekim nötr sıfat)</td>\n      </tr>\n      <tr>\n        <td><strong>urbēs magnae</strong></td>\n        <td class=\"case-cell-latin\">büyük şehirler</td>\n        <td class=\"case-cell-latin\">Nom/Acc. Pl. Femininum (3. çekim i-stem isim + 1. çekim sıfat)</td>\n      </tr>\n      <tr>\n        <td><strong>stultōrum rēgum</strong></td>\n        <td class=\"case-cell-latin\">aptal kralların</td>\n        <td class=\"case-cell-latin\">Gen. Pl. Masculinum (2. çekim sıfat + 3. çekim sessiz gövdeli isim)</td>\n      </tr>\n      <tr>\n        <td><strong>urbēs parvae</strong></td>\n        <td class=\"case-cell-latin\">küçük şehirler</td>\n        <td class=\"case-cell-latin\">Nom/Acc. Pl. Femininum</td>\n      </tr>\n      <tr>\n        <td><strong>malum consulem</strong></td>\n        <td class=\"case-cell-latin\">kötü konsülü</td>\n        <td class=\"case-cell-latin\">Acc. Sg. Masculinum</td>\n      </tr>\n      <tr>\n        <td><strong>bonō imperātōrī</strong></td>\n        <td class=\"case-cell-latin\">iyi imparator için / imparatora</td>\n        <td class=\"case-cell-latin\">Dat. Sg. Masculinum</td>\n      </tr>\n      <tr>\n        <td><strong>patrēs miserī</strong></td>\n        <td class=\"case-cell-latin\">zavallı babalar</td>\n        <td class=\"case-cell-latin\">Nom. Pl. Masculinum</td>\n      </tr>\n      <tr>\n        <td><strong>mātrēs Rōmānae</strong></td>\n        <td class=\"case-cell-latin\">Romalı anneler</td>\n        <td class=\"case-cell-latin\">Nom. Pl. Femininum</td>\n      </tr>\n      <tr>\n        <td><strong>mīlitum clārōrum</strong></td>\n        <td class=\"case-cell-latin\">meşhur askerlerin</td>\n        <td class=\"case-cell-latin\">Gen. Pl. Masculinum</td>\n      </tr>\n      <tr>\n        <td><strong>mōribus priscīs</strong></td>\n        <td class=\"case-cell-latin\">eski / köklü âdetlerle</td>\n        <td class=\"case-cell-latin\">Abl. Pl. Masculinum (mos, moris)</td>\n      </tr>\n      <tr>\n        <td><strong>tempora perpetua</strong></td>\n        <td class=\"case-cell-latin\">kesintisiz zamanlar</td>\n        <td class=\"case-cell-latin\">Nom/Acc. Pl. Neutrum (tempus, temporis)</td>\n      </tr>\n      <tr>\n        <td><strong>virtūtem vēram</strong></td>\n        <td class=\"case-cell-latin\">hakiki erdemi</td>\n        <td class=\"case-cell-latin\">Acc. Sg. Femininum (virtus, virtutis)</td>\n      </tr>\n      <tr>\n        <td><strong>lēgēs novae Rōmānae</strong></td>\n        <td class=\"case-cell-latin\">Roma'ya ait yeni yasalar</td>\n        <td class=\"case-cell-latin\">Nom. Pl. Femininum</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "flumen longum",
        "tr": "3. GRUP İSİMLERLE İLGİLİ ÖRNEK İFADELER",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "urbes magnae uzun nehir",
        "tr": "büyük şehirler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "stultorum regum urbes parvae",
        "tr": "aptal kralların küçük şehirler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "malum consulem bono imperatori",
        "tr": "kötü konsülü iyi imparator için",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "miseri matres Romanae",
        "tr": "zavallı babalar Romalı anneler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "militum clarorum matris Romanae",
        "tr": "meşhur askerlerin Romalı annenin",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "moribus priscis irati senis Graeci",
        "tr": "eski / köklü âdetlerle Yunanlı öfkeli ihtiyarın",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "tempora perpetua",
        "tr": "3. GRUP İSİMLERLE İLGİLİ ÖRNEK İFADELER",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "amatores infortunati",
        "tr": "kesintisiz zamanlar talihsiz âşıklar",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "temporis antiqui dux peritus",
        "tr": "eski zamanın",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "becerikli komutan laborum infinitorum virtutem veram",
        "tr": "sınırsız emeklerin",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "leges novae Romanae",
        "tr": "3. GRUP İSİMLERLE İLGİLİ ÖRNEK İFADELER",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "homo iratus",
        "tr": "Roma’ya ait yeni yasalar öfkeli insan",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "leges novas Romanas hominum Punicorum",
        "tr": "Roma’ya ait yeni yasaları Kartacalı insanların",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "nomina bella amore caeco",
        "tr": "hoş isimler kör bir aşkla",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Invidiam populi Romani cras non sustinebis.",
        "tr": "Roma halkına duyduğun nefreti yarın sürdürmeyeceksin.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Periculumne igitur heri remanebat.",
        "tr": "Öyleyse dün tehlike mi devam ediyordu? kıskançlık, nefret dün sürdürmek, devam ettirmek öyleyse, o halde, o zaman yarın devam etmek, sürmek",
        "analysis": "invidia, -ae, f.,; heri, adv.,; sustineo, -ere, -tinui,; igitur, conj.,; cras, adv.,; remaneo, -ere,",
        "notes": "invidia, -ae, f.,; heri, adv.,; sustineo, -ere, -tinui,; igitur, conj.,; cras, adv.,; remaneo, -ere,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Angustus animus pecuniam amat.",
        "tr": "Bayağı ruh parayı sever.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Culpa est mea, O amici.",
        "tr": "Dostlar, suç benimdir (ben suçluyum).",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Supera animos et iram tuam.",
        "tr": "Kibrine ve öfkene hâkim ol! dar; adi, bayağı ruh, zihin, (pl.) cesaret; kibir; gazap",
        "analysis": "angustus, -a, um, adj.,; animus, i, m.,",
        "notes": "angustus, -a, um, adj.,; animus, i, m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Amabo te, cura filiam meam.",
        "tr": "Da veniam filio et filiabus nostris. Oğlumuza ve kızlarımıza merhamet göster! Kızıma göz kulak ol, lütfen!",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Propter adulescentiam, filii mei, mala vitae non videbatis.",
        "tr": "Ey oğullarım, gençliğinizden ötürü yaşamın kötülüklerini fark etmiyordunuz. merhamet, lütuf bakmak, ilgi göstermek, göz kulak olmak gençlik, toyluk",
        "analysis": "venia, -ae, f.,; curo, -are,; adulescentia, -ae, f.,",
        "notes": "venia, -ae, f.,; curo, -are,; adulescentia, -ae, f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Vita humana est supplicium.",
        "tr": "İnsan hayatı bir cezadır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Satisne sanus es.",
        "tr": "Yeterince aklın başında mı?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Semper gloria et fama tua manebunt.",
        "tr": "Şanın ve şöhretin daima varlığını sürdürecek. ceza, eziyet, işkence",
        "analysis": "supplicium, -ii, n.,; satis, adv.,",
        "notes": "supplicium, -ii, n.,; satis, adv.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "yeterli, yeterince",
        "tr": "sağlıklı, aklı başında",
        "analysis": "sanus, -a, um, adj.,",
        "notes": "sanus, -a, um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Si quando satis pecuniae habebo, tum me consilio et philosophiae dabo.",
        "tr": "Eğer bir gün yeterince param olursa, o zaman kendimi düşünceye ve felsefeye adayacağım.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Vir bonus et peritus aspera verba poetarum culpabit.",
        "tr": "İyi ve becerikli adam, şairrin kaba sözlerini kınayacak. sert, kaba, haşin suçlamak, kusur bulmak, kınamak, eleştirmek ne zaman?, -dığı zaman, bir gün, günün birinde",
        "analysis": "asper, aspera, asperum, adj.,; culpo, -are,; quando, adv.,",
        "notes": "asper, aspera, asperum, adj.,; culpo, -are,; quando, adv.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "bellum convivam Caecilianus habet!",
        "tr": "Bizim Caecilianus, domuz olmadan sofraya oturmuyormuş, demek güzel bir sofra arkadaşı var Caecilianus’un!",
        "analysis": "Non cenat sine apro noster, Tite, Caecilianus:",
        "notes": "Non cenat sine apro noster, Tite, Caecilianus:",
        "direction": "lat_to_tr"
      },
      {
        "latin": "(Martialis, 7.59) domuz",
        "tr": "yemek yemek, sofraya oturmak sofra arkadaşı, misafir",
        "analysis": "aper, -i, m.,; ceno, -are,; conviva, -ae, m. / f.,",
        "notes": "aper, -i, m.,; ceno, -are,; conviva, -ae, m. / f.,",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "3. grup isimlerle 1. ve 2. sınıf sıfatlar tamlama kurarken takılar farklı görünse de (örn. urbes magnae) cins, sayı ve hal bakımından tam uyum içindedir."
  },
  {
    "id": "T1_W12_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 12,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 12. Hafta (1. Ders)",
    "title": "4. GRUP FİİLLER (CONIUGATIO IV: -ĪRE) VE 4 ÇEKİM KARŞILAŞTIRMASI",
    "subtitle": "audīo ve venīo Çekimleri, Praesens, Imperfectum (-iēba-), Futurum (-ia-/-iē-) ve Karşılaştırma",
    "summary": "Bu fasikülde mastarı uzun -īre ile biten 4. Grup fiilleri (audio, venio, lenio, nescio), Imperfectum ekini (-iēba-), Futurum ekini (-iam, -iēs, -iet...) ve 4 çekim grubunun Praesens, Imperfectum, Futurum, Imperativus karşılaştırma tablolarını göreceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer12.1.pdf",
    "slideCount": 23,
    "topics": ["4. Grup Fiiller (-īre)", "audīo ve venīo Praesens", "4. Grup Imperfectum (-iēbā-)", "4. Grup Futurum I (-iam, -iēs)", "4. Grup Emir Kipi (audī, audīte)", "Dört Çekim Grubunun Mukayesesi"],
    "vocab": ["audio", "venio", "lenio", "nescio", "scio", "munio", "nutrio", "pervenio", "punio", "reperio", "servio", "subvenio", "vestio", "vincio", "dormio"],
    "sections": [
      {
        "title": "1. 4. Grup Fiiller: Şimdiki Zaman (Praesens Indicativus Activi)",
        "html": "<p><strong>Kural (Slayt 4-5):</strong> Mastar sonundaki <em>-re</em> atılarak Praesens gövdesi (<strong>audī-</strong>) bulunur. 3. çoğul şahısta <strong>-unt</strong> eki gelir: <em>audī-unt</em>.</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audīo, -īre (4. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(audio, audīre — işitmek, duymak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">aud-i-ō</td>\n        <td class=\"case-cell-tr\">işitiyorum / işitirim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audī-s</td>\n        <td class=\"case-cell-tr\">işitiyorsun / işitirsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audī-t</td>\n        <td class=\"case-cell-tr\">işitiyor / işitir</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audī-mus</td>\n        <td class=\"case-cell-tr\">işitiyoruz / işitiriz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audī-tis</td>\n        <td class=\"case-cell-tr\">işitiyorsunuz / işitirsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audī-unt</td>\n        <td class=\"case-cell-tr\">işitiyorlar / işitirler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">venīo, -īre (4. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(venio, venīre — gelmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">ven-i-ō</td>\n        <td class=\"case-cell-tr\">geliyorum / gelirim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">venī-s</td>\n        <td class=\"case-cell-tr\">geliyorsun / gelirsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">venī-t</td>\n        <td class=\"case-cell-tr\">geliyor / gelir</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">venī-mus</td>\n        <td class=\"case-cell-tr\">geliyoruz / geliriz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">venī-tis</td>\n        <td class=\"case-cell-tr\">geliyorsunuz / gelirsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">venī-unt</td>\n        <td class=\"case-cell-tr\">geliyorlar / gelirler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Dört Çekim Grubunun Şimdiki Zaman Karşılaştırması (Slayt 8)</strong>\n    <span class=\"table-sub\">(Slayt 8)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs & Sayı</th>\n        <th>1. Grup: laudō</th>\n        <th>2. Grup: moneō</th>\n        <th>3. Grup: vinco</th>\n        <th>4. Grup: audīo</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laud-ō</td>\n        <td class=\"case-cell-latin\">mone-ō</td>\n        <td class=\"case-cell-latin\">vinc-ō</td>\n        <td class=\"case-cell-latin\">audī-ō</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-s</td>\n        <td class=\"case-cell-latin\">monē-s</td>\n        <td class=\"case-cell-latin\">vinci-s</td>\n        <td class=\"case-cell-latin\">audī-s</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">lauda-t</td>\n        <td class=\"case-cell-latin\">mone-t</td>\n        <td class=\"case-cell-latin\">vinci-t</td>\n        <td class=\"case-cell-latin\">audī-t</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-mus</td>\n        <td class=\"case-cell-latin\">monē-mus</td>\n        <td class=\"case-cell-latin\">vinci-mus</td>\n        <td class=\"case-cell-latin\">audī-mus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-tis</td>\n        <td class=\"case-cell-latin\">monē-tis</td>\n        <td class=\"case-cell-latin\">vinci-tis</td>\n        <td class=\"case-cell-latin\">audī-tis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">lauda-nt</td>\n        <td class=\"case-cell-latin\">mone-nt</td>\n        <td class=\"case-cell-latin\">vinc-unt</td>\n        <td class=\"case-cell-latin\">audī-unt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. 4. Grup Fiiller: Şimdiki Zamanın Hikâyesi (Imperfectum)",
        "html": "<p><strong>Kural (Slayt 10-13):</strong> Gövdeye <strong>-ēbā-</strong> eki getirilir: <em>aud-i-ēba-m, ven-i-ēba-m</em>:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audīo, -īre (4. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(audio, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audi-ēba-m</td>\n        <td class=\"case-cell-tr\">işitiyordum / işitirdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audi-ēbā-s</td>\n        <td class=\"case-cell-tr\">işitiyordun / işitirdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audi-ēba-t</td>\n        <td class=\"case-cell-tr\">işitiyordu / işitirdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audi-ēbā-mus</td>\n        <td class=\"case-cell-tr\">işitiyorduk / işitirdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audi-ēbā-tis</td>\n        <td class=\"case-cell-tr\">işitiyordunuz / işitirdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audi-ēba-nt</td>\n        <td class=\"case-cell-tr\">işitiyorlardı / işitirlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">venīo, -īre (4. Grup) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(venio, venīre — gelmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">veni-ēba-m</td>\n        <td class=\"case-cell-tr\">geliyordum / gelirdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">veni-ēbā-s</td>\n        <td class=\"case-cell-tr\">geliyordun / gelirsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">veni-ēba-t</td>\n        <td class=\"case-cell-tr\">geliyordu / gelirdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">veni-ēbā-mus</td>\n        <td class=\"case-cell-tr\">geliyorduk / gelirdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">veni-ēbā-tis</td>\n        <td class=\"case-cell-tr\">geliyordunuz / gelirdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">veni-ēba-nt</td>\n        <td class=\"case-cell-tr\">geliyorlardı / gelirlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Dört Çekim Grubunun Imperfectum Karşılaştırması (Slayt 14)</strong>\n    <span class=\"table-sub\">(Slayt 14)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grup: laudō</th>\n        <th>2. Grup: moneō</th>\n        <th>3. Grup: vinco</th>\n        <th>4. Grup: audīo</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-m</td>\n        <td class=\"case-cell-latin\">monē-ba-m</td>\n        <td class=\"case-cell-latin\">vinc-ēba-m</td>\n        <td class=\"case-cell-latin\">audi-ēba-m</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-s</td>\n        <td class=\"case-cell-latin\">monē-bā-s</td>\n        <td class=\"case-cell-latin\">vinc-ēbā-s</td>\n        <td class=\"case-cell-latin\">audi-ēbā-s</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-t</td>\n        <td class=\"case-cell-latin\">monē-ba-t</td>\n        <td class=\"case-cell-latin\">vinc-ēba-t</td>\n        <td class=\"case-cell-latin\">audi-ēba-t</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-mus</td>\n        <td class=\"case-cell-latin\">monē-bā-mus</td>\n        <td class=\"case-cell-latin\">vinc-ēbā-mus</td>\n        <td class=\"case-cell-latin\">audi-ēbā-mus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bā-tis</td>\n        <td class=\"case-cell-latin\">monē-bā-tis</td>\n        <td class=\"case-cell-latin\">vinc-ēbā-tis</td>\n        <td class=\"case-cell-latin\">audi-ēbā-tis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-ba-nt</td>\n        <td class=\"case-cell-latin\">monē-ba-nt</td>\n        <td class=\"case-cell-latin\">vinc-ēba-nt</td>\n        <td class=\"case-cell-latin\">audi-ēba-nt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. 4. Grup Fiiller: Gelecek Zaman (Futurum Indicativus Activi)",
        "html": "<p><strong>Kural (Slayt 16-19):</strong> 4. grupta da gelecek zaman 3. grup gibi <strong>-am, -ēs, -et, -ēmus, -ētis, -ent</strong> ekleriyle yapılır (asla -bo kullanılmaz!):</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audīo, -īre (4. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(audio, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audi-a-m</td>\n        <td class=\"case-cell-tr\">işiteceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audi-ē-s</td>\n        <td class=\"case-cell-tr\">işiteceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audi-e-t</td>\n        <td class=\"case-cell-tr\">işitecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audi-ē-mus</td>\n        <td class=\"case-cell-tr\">işiteceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audi-ē-tis</td>\n        <td class=\"case-cell-tr\">işiteceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audi-e-nt</td>\n        <td class=\"case-cell-tr\">işitecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">venīo, -īre (4. Grup) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(venio, venīre — gelmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">veni-a-m</td>\n        <td class=\"case-cell-tr\">geleceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">veni-ē-s</td>\n        <td class=\"case-cell-tr\">geleceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">veni-e-t</td>\n        <td class=\"case-cell-tr\">gelecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">veni-ē-mus</td>\n        <td class=\"case-cell-tr\">geleceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">veni-ē-tis</td>\n        <td class=\"case-cell-tr\">geleceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">veni-e-nt</td>\n        <td class=\"case-cell-tr\">gelecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Dört Çekim Grubunun Futurum Karşılaştırması (Slayt 20)</strong>\n    <span class=\"table-sub\">(Slayt 20)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grup (-bō)</th>\n        <th>2. Grup (-bō)</th>\n        <th>3. Grup (-am, -ēs)</th>\n        <th>4. Grup (-iam, -iēs)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-b-ō</td>\n        <td class=\"case-cell-latin\">monē-b-ō</td>\n        <td class=\"case-cell-latin\">vinc-a-m</td>\n        <td class=\"case-cell-latin\">audi-a-m</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-s</td>\n        <td class=\"case-cell-latin\">monē-bi-s</td>\n        <td class=\"case-cell-latin\">vinc-ē-s</td>\n        <td class=\"case-cell-latin\">audi-ē-s</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-t</td>\n        <td class=\"case-cell-latin\">monē-bi-t</td>\n        <td class=\"case-cell-latin\">vinc-e-t</td>\n        <td class=\"case-cell-latin\">audi-e-t</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-mus</td>\n        <td class=\"case-cell-latin\">monē-bi-mus</td>\n        <td class=\"case-cell-latin\">vinc-ē-mus</td>\n        <td class=\"case-cell-latin\">audi-ē-mus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-tis</td>\n        <td class=\"case-cell-latin\">monē-bi-tis</td>\n        <td class=\"case-cell-latin\">vinc-ē-tis</td>\n        <td class=\"case-cell-latin\">audi-ē-tis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bu-nt</td>\n        <td class=\"case-cell-latin\">monē-bu-nt</td>\n        <td class=\"case-cell-latin\">vinc-e-nt</td>\n        <td class=\"case-cell-latin\">audi-ē-nt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. 4. Grup Emir Kipi (Imperativus) ve Dört Grubun Özeti",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 22 ve 23 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">EMİR KİPİ (IMPERATIVUS) TABLOSU</span>\n    <strong class=\"table-title\">4. Grup Fiiller Emir Kipi Tablosu</strong>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Fiil & Anlam</th>\n        <th>2. Tekil (Sen)</th>\n        <th>2. Çoğul (Siz)</th>\n        <th>Olumsuz Tekil (Sen)</th>\n        <th>Olumsuz Çoğul (Siz)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>audīo, -īre</strong><br><small class=\"case-cell-tr\">işitmek</small></td>\n        <td class=\"case-cell-latin\">audī (İşit!)</td>\n        <td class=\"case-cell-latin\">audī-te (İşitiniz!)</td>\n        <td class=\"case-cell-latin\">nōlī audīre</td>\n        <td class=\"case-cell-latin\">nōlīte audīre</td>\n      </tr>\n      <tr>\n        <td><strong>venīo, -īre</strong><br><small class=\"case-cell-tr\">gelmek</small></td>\n        <td class=\"case-cell-latin\">venī (Gel!)</td>\n        <td class=\"case-cell-latin\">venī-te (Geliniz!)</td>\n        <td class=\"case-cell-latin\">nōlī venīre</td>\n        <td class=\"case-cell-latin\">nōlīte venīre</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Dört Çekim Grubunun Emir Kipi Karşılaştırması (Slayt 23)</strong>\n    <span class=\"table-sub\">(Slayt 23)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grup: laudō</th>\n        <th>2. Grup: moneō</th>\n        <th>3. Grup: vinco</th>\n        <th>4. Grup: audīo</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>2. Sg. (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudā (Öv!)</td>\n        <td class=\"case-cell-latin\">monē (Uyar!)</td>\n        <td class=\"case-cell-latin\">vince (Yen!)</td>\n        <td class=\"case-cell-latin\">audī (İşit!)</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl. (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudā-te (Övünüz!)</td>\n        <td class=\"case-cell-latin\">monē-te (Uyarınız!)</td>\n        <td class=\"case-cell-latin\">vinci-tē (Yeniniz!)</td>\n        <td class=\"case-cell-latin\">audī-te (İşitiniz!)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "4. grupta tekil emir kipinde i sesinin uzun olduğuna dikkat ediniz: audī! venī!"
  },
  {
    "id": "T1_W12_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 12,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 12. Hafta (2. Ders)",
    "title": "5. GRUP (-IO'LU KARMA) FİİLLER VE THERMOPYLAE OKUMA METNİ",
    "subtitle": "capio, fugio, facio Çekimleri, 5 Grubun Tam Mukayesesi ve Leonidas'ın Tarihi Konuşması",
    "summary": "Bu fasikülde 3. ve 4. grupların melezi olan 5. Grup / -io'lu fiilleri (capio, fugio, facio), beş çekim grubunun eşzamanlı tam mukayesesini ve Thermopylae Geçidi Savaşı'nı (İÖ 480 - Leonidas ve Persler) anlatan tarihi okuma metnini inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer12.2.pdf",
    "slideCount": 26,
    "topics": ["5. Grup (-io'lu Karma) Fiiller", "capio, fugio, facio Çekimi", "Beş Grubun Praesens Mukayesesi", "Beş Grubun Imperfectum Mukayesesi", "Beş Grubun Futurum Mukayesesi", "Thermopylae Okuma Parçası (İÖ 480)"],
    "vocab": ["capio", "fugio", "facio", "accipio", "adficio", "conficio", "decipio", "despicio", "conspicio", "inspicio", "incipio", "fodio", "excipio", "effugio", "efficio", "exercitus", "noster", "magnus", "et", "propter", "caelum", "non", "tum", "umbra", "igitur", "rex", "cum", "hodie", "apud", "fortasse"],
    "sections": [
      {
        "title": "1. 5. Grup (-io'lu) Fiiller: Şimdiki Zaman (Praesens Indicativus Activi)",
        "html": "<p><strong>Kural (Slayt 3-7):</strong> Mastarı 3. grup gibi kısa <em>-ere</em> ile bitmesine rağmen, 1. tekil şahsı 4. grup gibi <strong>-io</strong> ile biter: <em>căpĭō, capere; fŭgĭō, fugere; făcĭō, facere</em>:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">căpĭo, -ere (5. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(capio, capere — almak, ele geçirmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">capi-ō</td>\n        <td class=\"case-cell-tr\">alıyorum / alırım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">capi-s</td>\n        <td class=\"case-cell-tr\">alıyorsun / alırsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">capi-t</td>\n        <td class=\"case-cell-tr\">alıyor / alır</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">capi-mus</td>\n        <td class=\"case-cell-tr\">alıyoruz / alırız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">capi-tis</td>\n        <td class=\"case-cell-tr\">alıyorsunuz / alırsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">capi-unt</td>\n        <td class=\"case-cell-tr\">alıyorlar / alırlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">fŭgĭo, -ere (5. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(fugio, fugere — kaçmak, kaçınmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">fugi-ō</td>\n        <td class=\"case-cell-tr\">kaçıyorum / kaçarım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">fugi-s</td>\n        <td class=\"case-cell-tr\">kaçıyorsun / kaçarsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">fugi-t</td>\n        <td class=\"case-cell-tr\">kaçıyor / kaçar</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">fugi-mus</td>\n        <td class=\"case-cell-tr\">kaçıyoruz / kaçarız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">fugi-tis</td>\n        <td class=\"case-cell-tr\">kaçıyorsunuz / kaçarsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">fugi-unt</td>\n        <td class=\"case-cell-tr\">kaçıyorlar / kaçarlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">făcĭo, -ere (5. Grup) — Praesens Indicativus Activi</strong>\n    <span class=\"table-sub\">(facio, facere — yapmak, etmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">faci-ō</td>\n        <td class=\"case-cell-tr\">yapıyorum / yaparım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">faci-s</td>\n        <td class=\"case-cell-tr\">yapıyorsun / yaparsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">faci-t</td>\n        <td class=\"case-cell-tr\">yapıyor / yapar</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">faci-mus</td>\n        <td class=\"case-cell-tr\">yapıyoruz / yaparız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">faci-tis</td>\n        <td class=\"case-cell-tr\">yapıyorsunuz / yaparsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">faci-unt</td>\n        <td class=\"case-cell-tr\">yapıyorlar / yaparlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. 5. Grup Fiiller: Imperfectum ve Futurum I Çekimleri",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 10-18 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">căpĭo, -ere (Imperfectum) — Imperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(capio, capere — almak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">capi-ēba-m</td>\n        <td class=\"case-cell-tr\">alıyordum / alırdım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">capi-ēbā-s</td>\n        <td class=\"case-cell-tr\">alıyordun / alırdın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">capi-ēba-t</td>\n        <td class=\"case-cell-tr\">alıyordu / alırdı</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">capi-ēbā-mus</td>\n        <td class=\"case-cell-tr\">alıyorduk / alırdık</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">capi-ēbā-tis</td>\n        <td class=\"case-cell-tr\">alıyordunuz / alırdınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">capi-ēba-nt</td>\n        <td class=\"case-cell-tr\">alıyorlardı / alırlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">căpĭo, -ere (Futurum I) — Futurum Indicativus Activi</strong>\n    <span class=\"table-sub\">(capio, capere — almak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">capi-a-m</td>\n        <td class=\"case-cell-tr\">alacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">capi-ē-s</td>\n        <td class=\"case-cell-tr\">alacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">capi-e-t</td>\n        <td class=\"case-cell-tr\">alacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">capi-ē-mus</td>\n        <td class=\"case-cell-tr\">alacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">capi-ē-tis</td>\n        <td class=\"case-cell-tr\">alacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">capi-e-nt</td>\n        <td class=\"case-cell-tr\">alacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Beş Çekim Grubunun Büyük Karşılaştırma Tablosu",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 7, 13, 19, 21, 23 karşılaştırma tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Beş Çekim Grubunun Gelecek Zaman (Futurum) Karşılaştırması</strong>\n    <span class=\"table-sub\">(Slayt 19)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grup (laudo)</th>\n        <th>2. Grup (moneo)</th>\n        <th>3. Grup (vinco)</th>\n        <th>4. Grup (audio)</th>\n        <th>5. Grup (capio)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-b-ō</td>\n        <td class=\"case-cell-latin\">monē-b-ō</td>\n        <td class=\"case-cell-latin\">vinc-a-m</td>\n        <td class=\"case-cell-latin\">audi-a-m</td>\n        <td class=\"case-cell-latin\">capi-a-m</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-s</td>\n        <td class=\"case-cell-latin\">monē-bi-s</td>\n        <td class=\"case-cell-latin\">vinc-ē-s</td>\n        <td class=\"case-cell-latin\">audi-ē-s</td>\n        <td class=\"case-cell-latin\">capi-ē-s</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-t</td>\n        <td class=\"case-cell-latin\">monē-bi-t</td>\n        <td class=\"case-cell-latin\">vinc-e-t</td>\n        <td class=\"case-cell-latin\">audi-e-t</td>\n        <td class=\"case-cell-latin\">capi-e-t</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-mus</td>\n        <td class=\"case-cell-latin\">monē-bi-mus</td>\n        <td class=\"case-cell-latin\">vinc-ē-mus</td>\n        <td class=\"case-cell-latin\">audi-ē-mus</td>\n        <td class=\"case-cell-latin\">capi-ē-mus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bi-tis</td>\n        <td class=\"case-cell-latin\">monē-bi-tis</td>\n        <td class=\"case-cell-latin\">vinc-ē-tis</td>\n        <td class=\"case-cell-latin\">audi-ē-tis</td>\n        <td class=\"case-cell-latin\">capi-ē-tis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudā-bu-nt</td>\n        <td class=\"case-cell-latin\">monē-bu-nt</td>\n        <td class=\"case-cell-latin\">vinc-e-nt</td>\n        <td class=\"case-cell-latin\">audi-ē-nt</td>\n        <td class=\"case-cell-latin\">capi-e-nt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Beş Çekim Grubunun Şimdiki Zaman Mastarları (Infinitivus Praesens)</strong>\n    <span class=\"table-sub\">(Slayt 21)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Grup</th>\n        <th>Mastar Biçimi</th>\n        <th>Gövde Tipi</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Grup</strong></td>\n        <td class=\"case-cell-latin\">laud-āre</td>\n        <td class=\"case-cell-latin\">-ā- gövdeli</td>\n        <td class=\"case-cell-tr\">övmek</td>\n      </tr>\n      <tr>\n        <td><strong>2. Grup</strong></td>\n        <td class=\"case-cell-latin\">mon-ēre</td>\n        <td class=\"case-cell-latin\">-ē- gövdeli</td>\n        <td class=\"case-cell-tr\">uyarmak</td>\n      </tr>\n      <tr>\n        <td><strong>3. Grup</strong></td>\n        <td class=\"case-cell-latin\">vinc-ere</td>\n        <td class=\"case-cell-latin\">kısa -e- gövdeli</td>\n        <td class=\"case-cell-tr\">yenmek</td>\n      </tr>\n      <tr>\n        <td><strong>4. Grup</strong></td>\n        <td class=\"case-cell-latin\">aud-īre</td>\n        <td class=\"case-cell-latin\">-ī- gövdeli</td>\n        <td class=\"case-cell-tr\">işitmek</td>\n      </tr>\n      <tr>\n        <td><strong>5. Grup (-io)</strong></td>\n        <td class=\"case-cell-latin\">cap-ere</td>\n        <td class=\"case-cell-latin\">karma gövdeli</td>\n        <td class=\"case-cell-tr\">almak</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "Okuma Parçası: Thermopylai ve Kral Leonidas (Thermopylae, İÖ 480)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Thermopylai ve Kral Leonidas (Thermopylae, İÖ 480)</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    “<span class=\"lat-word\" data-word=\"Exercitus\" role=\"button\" tabindex=\"0\">Exercitus</span> <span class=\"lat-word\" data-word=\"noster\" role=\"button\" tabindex=\"0\">noster</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"magnus\" role=\"button\" tabindex=\"0\">magnus</span>,” <span class=\"lat-word\" data-word=\"Persicus\" role=\"button\" tabindex=\"0\">Persicus</span> <span class=\"lat-word\" data-word=\"inquit\" role=\"button\" tabindex=\"0\">inquit</span>, “<span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"propter\" role=\"button\" tabindex=\"0\">propter</span> <span class=\"lat-word\" data-word=\"numerum\" role=\"button\" tabindex=\"0\">numerum</span> <span class=\"lat-word\" data-word=\"sagittarum\" role=\"button\" tabindex=\"0\">sagittarum</span> <span class=\"lat-word\" data-word=\"nostrarum\" role=\"button\" tabindex=\"0\">nostrarum</span> <span class=\"lat-word\" data-word=\"caelum\" role=\"button\" tabindex=\"0\">caelum</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"videbitis\" role=\"button\" tabindex=\"0\">videbitis</span>!” <span class=\"lat-word\" data-word=\"Tum\" role=\"button\" tabindex=\"0\">Tum</span> <span class=\"lat-word\" data-word=\"Lacedaemonius\" role=\"button\" tabindex=\"0\">Lacedaemonius</span> <span class=\"lat-word\" data-word=\"respondet\" role=\"button\" tabindex=\"0\">respondet</span>: “<span class=\"lat-word\" data-word=\"In\" role=\"button\" tabindex=\"0\">In</span> <span class=\"lat-word\" data-word=\"umbra\" role=\"button\" tabindex=\"0\">umbra</span>, <span class=\"lat-word\" data-word=\"igitur\" role=\"button\" tabindex=\"0\">igitur</span>, <span class=\"lat-word\" data-word=\"pugnabimus\" role=\"button\" tabindex=\"0\">pugnabimus</span>!” <span class=\"lat-word\" data-word=\"Et\" role=\"button\" tabindex=\"0\">Et</span> <span class=\"lat-word\" data-word=\"Leonidas\" role=\"button\" tabindex=\"0\">Leonidas</span>, <span class=\"lat-word\" data-word=\"rex\" role=\"button\" tabindex=\"0\">rex</span> <span class=\"lat-word\" data-word=\"Lacedaemoniorum\" role=\"button\" tabindex=\"0\">Lacedaemoniorum</span>, <span class=\"lat-word\" data-word=\"exclamat\" role=\"button\" tabindex=\"0\">exclamat</span>: “<span class=\"lat-word\" data-word=\"Pugnate\" role=\"button\" tabindex=\"0\">Pugnate</span> <span class=\"lat-word\" data-word=\"cum\" role=\"button\" tabindex=\"0\">cum</span> <span class=\"lat-word\" data-word=\"animis\" role=\"button\" tabindex=\"0\">animis</span>, <span class=\"lat-word\" data-word=\"Lacedaemonii\" role=\"button\" tabindex=\"0\">Lacedaemonii</span>, <span class=\"lat-word\" data-word=\"hodie\" role=\"button\" tabindex=\"0\">hodie</span> <span class=\"lat-word\" data-word=\"apud\" role=\"button\" tabindex=\"0\">apud</span> <span class=\"lat-word\" data-word=\"inferos\" role=\"button\" tabindex=\"0\">inferos</span> <span class=\"lat-word\" data-word=\"fortasse\" role=\"button\" tabindex=\"0\">fortasse</span> <span class=\"lat-word\" data-word=\"cenabimus\" role=\"button\" tabindex=\"0\">cenabimus</span>! <span class=\"lat-word\" data-word=\"Thermopylae\" role=\"button\" tabindex=\"0\">Thermopylae</span>, <span class=\"lat-word\" data-word=\"İÖ\" role=\"button\" tabindex=\"0\">İÖ</span> 480\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">“Ordumuz büyüktür,” dedi Persli, “ve oklarımızın çokluğu nedeniyle gökyüzünü göremeyeceksiniz!” Bunun üzerine bir Lakedaimonialı “Öyleyse gölgede savaşacağız!” diye yanıtladı. Lakedaimonialıların kralı Leonidas da şöyle haykırdı: “Cesurca savaşın ey Lakedaimonialılar, bugün yemeğimizi muhtemelen ölüler diyarında yiyeceğiz!”</p>\n  </div>\n  <div class=\"reading-passage-notes\">\n    <div class=\"notes-label\">🔍 Metin İçi Sözlük & Gramer Notları:</div>\n    <p class=\"notes-text\">exercitus, ordu, Persicus, -a, -um, adj., Persli inquit, (eksik çekimli bir fiil), söyler, der, dedi sagitta, -ae, f., ok Lacedaemonius, -a, -um, adj., Lakedaimonialı umbra, -ae, f., gölge pugno, -are, savaşmak exclamo, -are, bağırmak, haykırmak cum (+ abl.), ile, ile birlikte apud (+ acc.), arasında inferi, -orum, (pl.), ölüler, yeraltı dünyasının sâkinleri (inferus, -a, -um, aşağısı) fortasse, belki, muhtemelen</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "5. grup fiiller mastarda 3. grup gibi -ere alır (capere), çekimde ise 4. grup gibi -i sesini korur (capio, capiebam, capiam)."
  },
  {
    "id": "T1_W13_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 13,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 13. Hafta (1. Ders)",
    "title": "ZAMİRLER: ŞAHIS VE MÜLKİYET ZAMİRLERİ (PRONOMINA)",
    "subtitle": "ego, tu, is/ea/id, Mülkiyet Sıfatları (meus, tuus, noster, vester) ve Sentaks Kuralları",
    "summary": "Bu fasikülde 1. şahıs (ego / nos), 2. şahıs (tu / vos) ve 3. şahıs (is, ea, id) zamirlerini, mecum/tecum kuralını, partitivus/obiectivus genitivus ayrımını (nostrum vs nostri) ve mülkiyet sıfatlarının tüm hallerdeki çekim tablolarını göreceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "LatinceGramer13.1.pdf",
    "slideCount": 24,
    "topics": ["1. Şahıs Zamiri (ego / nos)", "2. Şahıs Zamiri (tu / vos)", "3. Şahıs Zamiri (is, ea, id)", "mecum / tecum Kuralı", "nostrum vs nostri Ayrımı", "meus, tuus, noster, vester Çekimleri"],
    "vocab": ["ego", "tu", "is", "ea", "id", "meus", "tuus", "noster", "vester", "cum", "fui", "romanus", "non", "pater", "nos", "ad", "vos", "quid", "eo", "ibi", "deus"],
    "sections": [
      {
        "title": "1. 1. ve 2. Şahıs Zamirleri: ego / nōs ve tū / vōs",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 3 ve 4 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ŞAHIS ZAMİRİ TABLOSU</span>\n    <strong class=\"table-title\">1. Şahıs Zamiri: ego (ben) / nōs (biz)</strong>\n    <span class=\"table-sub\">(Slayt 3)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ego</td>\n        <td class=\"case-cell-latin\">nōs</td>\n        <td class=\"case-cell-tr\">ben / biz</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">meī</td>\n        <td class=\"case-cell-latin\">nostrum / nostrī</td>\n        <td class=\"case-cell-tr\">benim (bana dair) / bizim (bizden / bize dair)</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">mihi</td>\n        <td class=\"case-cell-latin\">nōbīs</td>\n        <td class=\"case-cell-tr\">bana / benim için / bize / bizim için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">mē</td>\n        <td class=\"case-cell-latin\">nōs</td>\n        <td class=\"case-cell-tr\">beni / bizi</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">mē</td>\n        <td class=\"case-cell-latin\">nōbīs</td>\n        <td class=\"case-cell-tr\">benimle / benden / bizimle / bizden</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Genetivus hali sahiplik bildirmez; kısım (nostrum) veya nesne (nostri) bildirir.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ŞAHIS ZAMİRİ TABLOSU</span>\n    <strong class=\"table-title\">2. Şahıs Zamiri: tū (sen) / vōs (siz)</strong>\n    <span class=\"table-sub\">(Slayt 4)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">tū</td>\n        <td class=\"case-cell-latin\">vōs</td>\n        <td class=\"case-cell-tr\">sen / siz</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">tuī</td>\n        <td class=\"case-cell-latin\">vestrum / vestrī</td>\n        <td class=\"case-cell-tr\">senin (sana dair) / sizin (sizden / size dair)</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">tibi</td>\n        <td class=\"case-cell-latin\">vōbīs</td>\n        <td class=\"case-cell-tr\">sana / senin için / size / sizin için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">tē</td>\n        <td class=\"case-cell-latin\">vōs</td>\n        <td class=\"case-cell-tr\">seni / sizi</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">tē</td>\n        <td class=\"case-cell-latin\">vōbīs</td>\n        <td class=\"case-cell-tr\">seninle / senden / sizinle / sizden</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Genetivus hali sahiplik bildirmez; mülkiyet için tuus ve vester kullanılır.</div>\n</div>\n"
      },
      {
        "title": "2. 3. Şahıs Zamiri & İşaret Zamiri: is, ea, id (o / onlar)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 5 ve 6 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">is, ea, id (o) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 5)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">is</td>\n        <td class=\"case-cell-latin\">ea</td>\n        <td class=\"case-cell-latin\">id</td>\n        <td class=\"case-cell-tr\">o</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey o</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">eius</td>\n        <td class=\"case-cell-latin\">eius</td>\n        <td class=\"case-cell-latin\">eius</td>\n        <td class=\"case-cell-tr\">onun</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">eī</td>\n        <td class=\"case-cell-latin\">eī</td>\n        <td class=\"case-cell-latin\">eī</td>\n        <td class=\"case-cell-tr\">ona</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">eum</td>\n        <td class=\"case-cell-latin\">eam</td>\n        <td class=\"case-cell-latin\">id</td>\n        <td class=\"case-cell-tr\">onu</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">eō</td>\n        <td class=\"case-cell-latin\">eā</td>\n        <td class=\"case-cell-latin\">eō</td>\n        <td class=\"case-cell-tr\">onunla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">eī (iī), eae, ea (onlar) (Pluralis)</strong>\n    <span class=\"table-sub\">(Slayt 6)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">eī / iī</td>\n        <td class=\"case-cell-latin\">eae</td>\n        <td class=\"case-cell-latin\">ea</td>\n        <td class=\"case-cell-tr\">onlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey onlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">eōrum</td>\n        <td class=\"case-cell-latin\">eārum</td>\n        <td class=\"case-cell-latin\">eōrum</td>\n        <td class=\"case-cell-tr\">onların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">eīs / iīs</td>\n        <td class=\"case-cell-latin\">eīs / iīs</td>\n        <td class=\"case-cell-latin\">eīs / iīs</td>\n        <td class=\"case-cell-tr\">onlara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">eōs</td>\n        <td class=\"case-cell-latin\">eās</td>\n        <td class=\"case-cell-latin\">ea</td>\n        <td class=\"case-cell-tr\">onları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">eīs / iīs</td>\n        <td class=\"case-cell-latin\">eīs / iīs</td>\n        <td class=\"case-cell-latin\">eīs / iīs</td>\n        <td class=\"case-cell-tr\">onlarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Zamirlerin Sentaks Kuralları (-cum Eki ve Kısım Genetivus'u)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 11-16 kuralları:</p>\n<ol>\n  <li><strong>Özne Vurgusu:</strong> Latincede fiiller şahıs eki taşıdığından <em>ego</em>, <em>tu</em> zamirleri yalnızca tezat ve özel vurgu için kullanılır: <span class=\"lat-word\">Ego eīs pecūniam dabō, quid tū dabis?</span> = Ben onlara para vereceğim, sen ne vereceksin?</li>\n  <li><strong>-cum Edatının Bitişmesi:</strong> 'Birlikte' anlamına gelen <em>cum</em> edatı şahıs zamirlerinin Ablativus haline son-ek olarak bitişir: <strong>mēcum</strong> (benimle), <strong>tēcum</strong> (seninle), <strong>nōbīscum</strong> (bizimle), <strong>vōbīscum</strong> (sizinle).</li>\n  <li><strong>nostrum / vestrum vs nostrī / vestrī:</strong>\n    <ul>\n      <li><em>Genetivus Partitivus (Kısım Bildiren):</em> <strong>vestrum / nostrum</strong> kullanılır: <span class=\"lat-word\">ūnus nostrum</span> (içimizden biri), <span class=\"lat-word\">nēmō vestrum</span> (içinizden hiç kimse).</li>\n      <li><em>Genetivus Obiectivus (Nesne Bildiren):</em> <strong>vestrī / nostrī</strong> kullanılır: <span class=\"lat-word\">amor nostrī</span> (bize duyulan sevgi), <span class=\"lat-word\">metus vestrī</span> (sizden duyulan korku).</li>\n    </ul>\n  </li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Mülkiyet Kuralı",
        "calloutText": "Benim ve senin derken meī ve tuī KULLANILMAZ! Mülkiyet için daima sıfatlar kullanılır: liber meus (benim kitabım), pecunia tua (senin paran).",
        "tableHtml": ""
      },
      {
        "title": "4. Mülkiyet Sıfatları: meus, tuus, noster, vester",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 17, 18, 19, 20 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">meus, mea, meum (benim, bana ait) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 17)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">meus</td>\n        <td class=\"case-cell-latin\">mea</td>\n        <td class=\"case-cell-latin\">meum</td>\n        <td class=\"case-cell-tr\">benim</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">mī</td>\n        <td class=\"case-cell-latin\">mea</td>\n        <td class=\"case-cell-latin\">meum</td>\n        <td class=\"case-cell-tr\">Ey benim</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">meī</td>\n        <td class=\"case-cell-latin\">meae</td>\n        <td class=\"case-cell-latin\">meī</td>\n        <td class=\"case-cell-tr\">benimin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">meō</td>\n        <td class=\"case-cell-latin\">meae</td>\n        <td class=\"case-cell-latin\">meō</td>\n        <td class=\"case-cell-tr\">benime</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">meum</td>\n        <td class=\"case-cell-latin\">meam</td>\n        <td class=\"case-cell-latin\">meum</td>\n        <td class=\"case-cell-tr\">benimi</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">meō</td>\n        <td class=\"case-cell-latin\">meā</td>\n        <td class=\"case-cell-latin\">meō</td>\n        <td class=\"case-cell-tr\">benimle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">noster, nostra, nostrum (bizim, bize ait) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 19)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">noster</td>\n        <td class=\"case-cell-latin\">nostra</td>\n        <td class=\"case-cell-latin\">nostrum</td>\n        <td class=\"case-cell-tr\">bizim</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">noster</td>\n        <td class=\"case-cell-latin\">nostra</td>\n        <td class=\"case-cell-latin\">nostrum</td>\n        <td class=\"case-cell-tr\">Ey bizim</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">nostrī</td>\n        <td class=\"case-cell-latin\">nostrae</td>\n        <td class=\"case-cell-latin\">nostrī</td>\n        <td class=\"case-cell-tr\">bizimin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">nostrō</td>\n        <td class=\"case-cell-latin\">nostrae</td>\n        <td class=\"case-cell-latin\">nostrō</td>\n        <td class=\"case-cell-tr\">bizime</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">nostrum</td>\n        <td class=\"case-cell-latin\">nostram</td>\n        <td class=\"case-cell-latin\">nostrum</td>\n        <td class=\"case-cell-tr\">bizimi</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">nostrō</td>\n        <td class=\"case-cell-latin\">nostrā</td>\n        <td class=\"case-cell-latin\">nostrō</td>\n        <td class=\"case-cell-tr\">bizimle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Ego sum Romanus. Tu es non pater.",
        "tr": "Ben Romalıyım. Sen baba değilsin.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ego tibi libros dabo.",
        "tr": "ŞAHIS ZAMİRLERİNİN KULLANIMI",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ego vobis libros dabo.",
        "tr": "Ben sana kitapları vereceğim. Ben size kitapları vereceğim.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Tu ei libros dabis. Tu eis libros dabis.",
        "tr": "Sen ona kitapları vereceksin. Sen onlara kitapları vereceksin.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Tu me non capies. Tu nos non capies.",
        "tr": "Sen beni yakalamayacaksın. Sen bizi yakalamayacaksın.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ei id ad nos mittent.",
        "tr": "ŞAHIS ZAMİRLERİNİN KULLANIMI Onlar (o erkekler) onu (o şeyi) bize gönderecekler.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Vos eos non capietis.",
        "tr": "Siz onları (o erkekleri) yakalamayacaksınız.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Vos eas non capietis.",
        "tr": "Siz onları (o kadınları) yakalamayacaksınız.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Vos ea non capietis.",
        "tr": "Siz onları (o şeyleri) yakalamayacaksınız.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Eae ea ad te mittent.",
        "tr": "Onlar (o kadınlar) onları (o şeyleri) sana gönderecekler.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Eis pecuniam dabo.",
        "tr": "Onlara para vereceğim.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ego eis pecuniam dabo, quid tu dabis? Ben",
        "tr": "onlara para vereceğim,",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "mecum benimle nobiscum bizimle tecum seninle vobiscum sizinle cum eo / ea onunla cum eis onlarla Eos nobiscum ibi invenies.",
        "tr": "Onları orada bizimle birlikte bulacaksın.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Deus vobiscum.",
        "tr": "Tanrı sizinledir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "meus sıfatının tekil eril Vocativus hali mī şeklindedir: mī fīlī! (ey oğlum), mī amīce! (ey dostum)."
  },
  {
    "id": "T1_W13_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 13,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 13. Hafta (2. Ders)",
    "title": "TÜRKÇEDEN LATİNCEYE CÜMLE ÇEVİRİLERİ 2",
    "subtitle": "Zamirli Yapılar, Şahıs ve Mülkiyet Pekiştirmesi ve Sentaks Alıştırmaları",
    "summary": "Bu fasikülde zamirlerin, mülkiyet yapılarının ve 3. grup isimlerle karma fiillerin yer aldığı 21 slaytlık Türkçe-Latince çeviri maratonunu ve sentaks çözümlerini inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "LatinceGramer13.2.pdf",
    "slideCount": 21,
    "topics": ["Türkçeden Latinceye Çeviri 2", "Zamirlerin Sentaksı", "mecum ve tecum Pratikleri", "İleri Düzey Cümle Kuruluşu"],
    "vocab": ["ego", "tu", "is", "ea", "id", "meus", "tuus", "noster", "vester", "pecunia", "filius", "patria", "amicitia", "non", "quare", "sine", "et", "tyrannus", "igitur", "de", "poena", "heri", "parvus", "numerus", "cras", "ibi", "magister", "mora", "saepe", "quando", "satis", "propter", "gloria", "semper", "pauci", "liberi", "tolerare", "ubi", "fama", "tum", "in", "possum", "potui", "populus", "romanus", "sed", "nunc", "otium", "nec", "ne"],
    "sections": [
      {
        "title": "1. Zamirli Cümlelerin Çeviri İncelikleri",
        "html": "<p>Türkçeden Latinceye çeviri yaparken zamirlerin yerleşimine ve durumuna dikkat ediniz:</p>\n<ul>\n  <li>'Onu kadına gönderdiler' derken nesne eril ise <strong>eum</strong>, yönelme dişil ise <strong>ad eam</strong> kullanılır: <span class=\"lat-word\">Eum ad eam mittebant.</span></li>\n  <li>'Benimle' derken <em>cum me</em> değil daima <strong>mēcum</strong> yazılır.</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Roma Halkının Cesareti ve Boş Vakit (De Populo Romano)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Roma Halkının Cesareti ve Boş Vakit (De Populo Romano)</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Populus\" role=\"button\" tabindex=\"0\">Populus</span> <span class=\"lat-word\" data-word=\"Romanus\" role=\"button\" tabindex=\"0\">Romanus</span> <span class=\"lat-word\" data-word=\"magnos\" role=\"button\" tabindex=\"0\">magnos</span> <span class=\"lat-word\" data-word=\"animos\" role=\"button\" tabindex=\"0\">animos</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"paucas\" role=\"button\" tabindex=\"0\">paucas</span> <span class=\"lat-word\" data-word=\"culpas\" role=\"button\" tabindex=\"0\">culpas</span> <span class=\"lat-word\" data-word=\"habebat\" role=\"button\" tabindex=\"0\">habebat</span>. <span class=\"lat-word\" data-word=\"De\" role=\"button\" tabindex=\"0\">De</span> <span class=\"lat-word\" data-word=\"officiis\" role=\"button\" tabindex=\"0\">officiis</span> <span class=\"lat-word\" data-word=\"nostris\" role=\"button\" tabindex=\"0\">nostris</span> <span class=\"lat-word\" data-word=\"cogitabamus\" role=\"button\" tabindex=\"0\">cogitabamus</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"gloriam\" role=\"button\" tabindex=\"0\">gloriam</span> <span class=\"lat-word\" data-word=\"belli\" role=\"button\" tabindex=\"0\">belli</span> <span class=\"lat-word\" data-word=\"semper\" role=\"button\" tabindex=\"0\">semper</span> <span class=\"lat-word\" data-word=\"laudabamus\" role=\"button\" tabindex=\"0\">laudabamus</span>. <span class=\"lat-word\" data-word=\"Sed\" role=\"button\" tabindex=\"0\">Sed</span> <span class=\"lat-word\" data-word=\"nunc\" role=\"button\" tabindex=\"0\">nunc</span> <span class=\"lat-word\" data-word=\"multum\" role=\"button\" tabindex=\"0\">multum</span> <span class=\"lat-word\" data-word=\"otium\" role=\"button\" tabindex=\"0\">otium</span> <span class=\"lat-word\" data-word=\"habemus\" role=\"button\" tabindex=\"0\">habemus</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"multi\" role=\"button\" tabindex=\"0\">multi</span> <span class=\"lat-word\" data-word=\"sunt\" role=\"button\" tabindex=\"0\">sunt</span> <span class=\"lat-word\" data-word=\"avari\" role=\"button\" tabindex=\"0\">avari</span>. <span class=\"lat-word\" data-word=\"Nec\" role=\"button\" tabindex=\"0\">Nec</span> <span class=\"lat-word\" data-word=\"vitia\" role=\"button\" tabindex=\"0\">vitia</span> <span class=\"lat-word\" data-word=\"nostra\" role=\"button\" tabindex=\"0\">nostra</span> <span class=\"lat-word\" data-word=\"nec\" role=\"button\" tabindex=\"0\">nec</span> <span class=\"lat-word\" data-word=\"remedia\" role=\"button\" tabindex=\"0\">remedia</span> <span class=\"lat-word\" data-word=\"tolerare\" role=\"button\" tabindex=\"0\">tolerare</span> <span class=\"lat-word\" data-word=\"possumus\" role=\"button\" tabindex=\"0\">possumus</span>. <span class=\"lat-word\" data-word=\"nec\" role=\"button\" tabindex=\"0\">nec</span> … <span class=\"lat-word\" data-word=\"nec\" role=\"button\" tabindex=\"0\">nec</span> …, <span class=\"lat-word\" data-word=\"conj\" role=\"button\" tabindex=\"0\">conj</span>., <span class=\"lat-word\" data-word=\"ne\" role=\"button\" tabindex=\"0\">ne</span> … <span class=\"lat-word\" data-word=\"ne\" role=\"button\" tabindex=\"0\">ne</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span>…\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Roma halkı büyük cesarete ve pek az kusura sahipti. Görevlerimiz hakkında düşünüyorduk ve savaşın şöhretini (savaşın getirdiği şöhreti) her zaman övüyorduk. Ama şimdi pek çok boş vaktimiz var, üstelik pek çok kişi de açgözlü. Ne kusurlarmıza tahammül edebiliyoruz ne de çarelerine.</p>\n  </div>\n</div>\n",
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
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sine multa pecunia et multis donis tyrannus satiare populum Romanum non poterit.",
        "tr": "Tiran, çok para ve pek çok hediye olmadan Roma halkını memnun edemeyecek. bundan dolayı, dolayısıyla doyurmak, tatmin etmek, memnun etmek tiran, zorba",
        "analysis": "quare, adv.,; satio, -are,; tyrannus, -i, m.,",
        "notes": "quare, adv.,; satio, -are,; tyrannus, -i, m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Non poterant, igitur, te de poena amicorum tuorum heri monere.",
        "tr": "Bu nedenle dün seni arkadaşlarının cezası hakkında uyaramıyorlardı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Parvus numerus Graecorum cras ibi remanere poterit.",
        "tr": "Yarın orada birkaç / az sayıda Yunanlı kalabilecek.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Magister pueros malos sine mora vocabit.",
        "tr": "Öğretmen kötü çocukları hiç gecikmeden çağıracak.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Filiae vestrae de libris magni poetae saepe cogitabant.",
        "tr": "Kızlarınız büyük şairin kitapları hakkında sık sık düşünüyorlardı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Quando satis sapientiae habebimus?",
        "tr": "Ne zaman yeterince bilgeliğe sahip olacağız?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multi libri antiqui propter sapientiam consiliumque erant magni.",
        "tr": "Pek çok eski kitap bilgeliği ve sağduyusu nedeniyle önemliydi.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Gloria bonorum librorum semper manebit.",
        "tr": "İyi kitapların şanı her zaman varlığını sürdürecektir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Possuntne pecunia otiumque curas vitae humanae superare?",
        "tr": "Para ve huzur insan yaşamının kaygılarını alt edebilir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "mi? Vitia vera, igitur, tyranni semper non videre possumus.",
        "tr": "Bu nedenle bir tiranın gerçek kusurlarını her zaman göremeyiz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Pauci viri liberi tyrannum tolerare poterunt.",
        "tr": "Birkaç özgür adam bir tirana tahammül edebilecek.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Multi Romani magnos libros Graecorum antiquorum laudabant.",
        "tr": "Pek çok Romalı eski Yunanlıların büyük kitaplarını överdi.",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Ubi fama gloriaque perpetuae esse possunt?",
        "tr": "Şan ve şöhret nerede ebediyen var olabilir?",
        "analysis": "Türkçeden Latinceye Çeviri Alıştırması",
        "notes": "Türkçeden Latinceye Çeviri Alıştırması",
        "direction": "tr_to_lat"
      },
      {
        "latin": "Dionysius tum erat tyrannus Syracusanorum.",
        "tr": "özel isim, Syracusae tiranı Syracusaelı o zaman, o zamanlar tiran",
        "analysis": "Dionysius, -ii, m.,; Syracusanus, -a, -um, adj.,; tum, adv.,; tyrannus, -i, m.,",
        "notes": "Dionysius, -ii, m.,; Syracusanus, -a, -um, adj.,; tum, adv.,; tyrannus, -i, m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Optasne meam vitam fortunamque gustare?",
        "tr": "istemek, arzualamak tatmak, tadına varmak",
        "analysis": "opto, -are, -avi, -atum, 1, v.,; gusto, -are, -avi, -atum, 1, v.,",
        "notes": "opto, -are, -avi, -atum, 1, v.,; gusto, -are, -avi, -atum, 1, v.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Possumusne, Ō di, in malis insidiis et magno exitio esse salvi? possum, posse, potui,",
        "tr": "-ebilmek, gücü olmak, muktedir olmak",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "insidiae, -arum, pl., pusu, tuzak",
        "tr": "iyi, emniyette, güvende, sağ salim yıkım, felaket",
        "analysis": "salvus, -a, -um, adj.,; exitium, -ii, n.,",
        "notes": "salvus, -a, -um, adj.,; exitium, -ii, n.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Possumusne, Ō di, in malis insidiis et magno exitio esse salvi?",
        "tr": "Ey tanrılar, adi tuzaklar ve büyük yıkımlar içinde emniyette olabilir miyiz?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "possum, posse, potui,",
        "tr": "-ebilmek, gücü olmak, muktedir olmak",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Propter curam meam in perpetuo periculo non eritis.",
        "tr": "devamlı, sürekli, kesintisiz ilgi, özen, ihtimam; gayret, emek -den dolayı, yüzünden, sebebinden, sayesinde tehlike",
        "analysis": "perpetuus, -a, -um, adj.,; cura, ae, f.,; propter, prep., (+ acc.),; periculum, -i, n.,",
        "notes": "perpetuus, -a, -um, adj.,; cura, ae, f.,; propter, prep., (+ acc.),; periculum, -i, n.,",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "Cümlelerde zamirlerin hangi ismin yerini tuttuğunu ve o ismin cinsiyetini doğru belirleyiniz."
  },
  {
    "id": "T1_W14_L1",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 14,
    "lecture": 1,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 14. Hafta (1. Ders)",
    "title": "GÜZ DÖNEMİ BÜYÜK CÜMLE VE METİN TAHLİLİ MARATONU 1",
    "subtitle": "Cicero, Horatius, Terentius ve Plinius'tan 35 Slaytlık Özgün Metinler ve Sentaks Çözümlemeleri",
    "summary": "Bu fasikülde 1. dönemin tüm gramer konularını (1, 2, 3. grup isimler, 1, 2, 3, 4, 5. grup fiiller, sıfatlar, zamirler) kapsayan ve Klasik Latin edebiyatının dev yazarlarından seçilmiş 35 slaytlık devasa cümle külliyatını göreceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "LatinceGramer14.1.pdf",
    "slideCount": 35,
    "topics": ["Klasik Yazar Antolojisi", "Cicero Cümleleri", "Horatius Şiir Dizeleri", "Terentius Komedyaları", "Plinius Mektupları", "Kapsamlı Sentaks Analizi"],
    "vocab": ["Cicero", "Horatius", "Terentius", "Plinius", "virtus", "veritas", "cupiditas", "senectus", "libertas", "remedium", "morbus", "carmen", "scriptor", "propter", "et", "nihil", "in", "patria", "nunc", "fortuna", "sine", "animus", "non", "sanus", "si", "infirmus", "tolerare", "ubi", "ibi", "populus", "liber_book", "amo", "nec", "possum", "quare", "heri", "de", "tum", "mora", "malo", "rex", "igitur", "cras", "quando", "satis", "civitas"],
    "sections": [
      {
        "title": "1. Klasik Yazarların Özgün Cümlelerini Çözümleme Stratejisi",
        "html": "<p>Doç. Dr. Eyüp Çoraklı'nın 14. hafta seminerlerinde vurguladığı gibi, edebi Latince metinlerde:</p>\n<ol>\n  <li>Yüklemler çoğunlukla cümlenin en sonundadır.</li>\n  <li>Vurgulanmak istenen kilit kavram cümlenin en başına alınır.</li>\n  <li>İlgili sıfat ile isim arasına bazen başka kelimeler girebilir (hiperbaton).</li>\n  <li>Aşağıdaki cümlelerde her bir kelimeye tıklayarak yazarın edebi üslubunu ve sözcük seçimini morfolojik olarak inceleyebilirsiniz.</li>\n</ol>",
        "calloutType": "info",
        "calloutTitle": "Yazar Rozetleri",
        "calloutText": "Her cümlenin altında yer alan antik yazar adı (Cicero, Horatius vb.) yazar rozeti olarak ayrılmış olup tıklanabilir Latince kelime havuzuna dahil edilmemiştir.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Propter vitia tua multi te culpant et nihil te in patria tua delectare nunc potest.",
        "tr": "suç, kabahat, kusur hoşnut etmek, memnun etmek suçlamak, itham etmek şimdi, şu anda, artık",
        "analysis": "vitium, -ii, n.,; delecto, -are, avi, -atum, 1, v.,; culpo, -are, -avi, -atum, 1., v.,; nunc, adv.,",
        "notes": "vitium, -ii, n.,; delecto, -are, avi, -atum, 1, v.,; culpo, -are, -avi, -atum, 1., v.,; nunc, adv.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Fortuna Punici belli secundi varia erat.",
        "tr": "şans, talih, baht; durum, koşul, gidişat Kartacalı, Kartaca’ya ait / dair değişken ikinci",
        "analysis": "fortuna, -ae, f.,; Punicus, -a, -um, adj.,; varius, -a, -um, adj.,; secundus, -a, um, adj.,",
        "notes": "fortuna, -ae, f.,; Punicus, -a, -um, adj.,; varius, -a, -um, adj.,; secundus, -a, um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Patria Romanorum erat plena Graecorum librorum statuarumque pulchrarum. heykel, yontu, tasvir",
        "tr": "dolu, çok, çok fazla, -bakımından zengin (+ gen.)",
        "analysis": "statua, -ae, f.,; plenus, -a, -um, adj.,; liber, libri, m.,",
        "notes": "statua, -ae, f.,; plenus, -a, -um, adj.,; liber, libri, m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Patria Romanorum erat plena Graecorum librorum statuarumque pulchrarum.",
        "tr": "Romalıların vatanı Yunanlıların kitapları ve güzel heykelleriyle doluydu.",
        "analysis": "statua, -ae, f.,",
        "notes": "statua, -ae, f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "heykel, yontu, tasvir",
        "tr": "dolu, çok, çok fazla, -bakımından zengin (+ gen.)",
        "analysis": "plenus, -a, -um, adj.,; liber, libri, m.,",
        "notes": "plenus, -a, -um, adj.,; liber, libri, m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sine dis et deabus in caelo animus non potest sanus esse.",
        "tr": "Gökteki tanrılar ve tanrıçalar olmadan ruh sağlıklı olamaz.",
        "analysis": "sine, prep.,",
        "notes": "sine, prep.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Si animus infirmus est, non poterit bonam fortunam tolerare.",
        "tr": "katlanmak, tahammül etmek güçsüz, zayıf",
        "analysis": "tolero, -are, -avi, -atum, 1, v.,; infirmus, -a, -um, adj.,",
        "notes": "tolero, -are, -avi, -atum, 1, v.,; infirmus, -a, -um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ubi leges valent, ibi populus liber potest valere.",
        "tr": "güçlü olmak",
        "analysis": "valeo, -ere, -ui, -itum, 1, v.,; lex, -legis, f.,",
        "notes": "valeo, -ere, -ui, -itum, 1, v.,; lex, -legis, f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "yasa, kanun nerede orada",
        "tr": "özgür",
        "analysis": "ubi, adv.,; ibi, adv.,; liber, -era, -erum, adj.,",
        "notes": "ubi, adv.,; ibi, adv.,; liber, -era, -erum, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Non amo te, Sabidi, nec possum dicere quare.",
        "tr": "özel isim, ve değil",
        "analysis": "Hoc tantum possum dicere: non amo te.; Sabidius, -ii, m.,; nec, conj.,  = et non; hoc, pron.,",
        "notes": "Hoc tantum possum dicere: non amo te.; Sabidius, -ii, m.,; nec, conj.,  = et non; hoc, pron.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Secundas litteras discipulae heri videbas et de verbis tum cogitabas.",
        "tr": "ikinci; uygun, elverişli, harf mektup; edebiyat",
        "analysis": "secundus, -a, -um,; littera, -ae, f.; litterae, -arum, f., pl.,",
        "notes": "secundus, -a, -um,; littera, -ae, f.; litterae, -arum, f., pl.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Feminae sine mora civitatem de insidiis et exitio malo monebunt.",
        "tr": "devlet, yurttaş topluluğu",
        "analysis": "civitas, -atis, f.,",
        "notes": "civitas, -atis, f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Rex et regina igitur cras non audebunt ibi remanere. kral",
        "tr": "kraliçe cesaret etmek, cüret etmek",
        "analysis": "rex, regis, m.,; regina, -ae, f.,; audeo, audere, ausus sum, 2, v.,",
        "notes": "rex, regis, m.,; regina, -ae, f.,; audeo, audere, ausus sum, 2, v.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Rex et regina igitur cras non audebunt ibi remanere.",
        "tr": "Kral ve kraliçe bu nedenle yarın burada kalmaya cesaret etmeyecek.",
        "analysis": "rex, regis, m.,",
        "notes": "rex, regis, m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Mores Graecorum non erant sine culpis vitiisque.",
        "tr": "alışkanlık, huy âdet, karakter, ahlak cesaret etmek, cüret etmek",
        "analysis": "mos, moris, m.,; mores, morum, m, pl.,; audeo, audere, ausus sum, 2, v.,",
        "notes": "mos, moris, m.,; mores, morum, m, pl.,; audeo, audere, ausus sum, 2, v.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Quando homines satis virtutis habebunt?",
        "tr": "ne zaman? cesaret; erdem",
        "analysis": "quando, adv.,; virtus, -tutis, f.,",
        "notes": "quando, adv.,; virtus, -tutis, f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Corpora vestra sunt sana et animi sunt pleni sapientiae.",
        "tr": "beden, vücut sağlıklı dolu, ile dolu (+ gen.)",
        "analysis": "corpus, -oris, n.,; sanus, -a, -um, adj.,; plenus, -a, -um, adj.,",
        "notes": "corpus, -oris, n.,; sanus, -a, -um, adj.,; plenus, -a, -um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Filiae amici tui ibi heri cenabant.",
        "tr": "Arkadaşının kızları dün orada akşam yemeği yiyordu. al”am ÇemeRi ÇemelW",
        "analysis": "ceno, -are, í, v.,",
        "notes": "ceno, -are, í, v.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Propter mores humanos pacem veram non habebimus.",
        "tr": "arış doğru, gerçek, hakiki",
        "analysis": "pax, pacis, f., b; verus, -a, -um, adj.,",
        "notes": "pax, pacis, f., b; verus, -a, -um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sine moribus sanis pacem non habere possumus.",
        "tr": "Sağlıklı bir karakterimiz yoksa barışa sahip olamayız.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Poteritne civitas pericula temporum nostrorum superare?",
        "tr": "zaman; fırsat, imkân",
        "analysis": "tempus, temporis, n.,",
        "notes": "tempus, temporis, n.,",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "Metinlerdeki fiillerin zamanını ve çatısını tespit ederek cümlenin omurgasını kurunuz."
  },
  {
    "id": "T1_W14_L2",
    "term": 1,
    "termName": "1. Dönem (Güz Yarıyılı)",
    "courseCode": "Latince Gramer 1",
    "week": 14,
    "lecture": 2,
    "academicSchedule": "1. Dönem (Güz Yarıyılı) • 14. Hafta (2. Ders)",
    "title": "GÜZ DÖNEMİ BÜYÜK CÜMLE VE METİN TAHLİLİ MARATONU 2 & DÖNEM FİNALİ",
    "subtitle": "Felsefi Metinler, İncil Metinleri (Genesis), Seneca ve Livius Analizleri",
    "summary": "Bu fasikülde 1. yarıyılın final dersi olan 21 slaytlık felsefi ve edebi metinleri, Seneca'nın ahlak mektuplarını, Genesis metinlerini ve 1. Dönem genel sentaks sentezini eksiksiz çözümlemeleriyle tamamlayacaksınız.",
    "difficulty": "İleri Seviye",
    "sourceFile": "LatinceGramer14.2.pdf",
    "slideCount": 21,
    "topics": ["1. Yarıyıl Final Değerlendirmesi", "Seneca Felsefesi", "Genesis Metinleri", "Genel Sentaks Sentezi", "İleri Çeviri Pratikleri"],
    "vocab": ["Seneca", "Genesis", "Livius", "creo", "caelum", "terra", "homo", "animus", "diligō", "consul", "iungo", "post", "bellum", "de", "et", "virtus", "multus", "labor", "liberi", "vir", "honestus", "in", "insula", "semper", "saepe", "ubi", "magister", "quare", "fama", "do"],
    "sections": [
      {
        "title": "1. 1. Yarıyıl Gramer Külliyatı ve 2. Yarıyıla Geçiş Rehberi",
        "html": "<p>Tebrikler! 1. Yarıyıl (Güz Dönemi) boyunca Latin dilinin şu temel yapı taşlarını eksiksiz öğrendiniz:</p>\n<ul>\n  <li><strong>İsimler:</strong> 1. Grup (-a, -ae), 2. Grup (-us, -er, -ir, -um) ve 3. Grup (sessiz ve -i gövdeliler) isim çekimleri.</li>\n  <li><strong>Fiiller:</strong> 1, 2, 3, 4 ve 5. Grup fiillerin etken çatıdaki Praesens, Imperfectum, Futurum I zamanları ve Imperativus kipi.</li>\n  <li><strong>Sıfatlar:</strong> 1. ve 2. Sınıf sıfatlar ile UNUS NAUTA düzensiz sıfatları.</li>\n  <li><strong>Zamirler:</strong> Şahıs ve mülkiyet zamirleri (ego, tu, is/ea/id).</li>\n  <li><strong>Düzensiz Fiiller:</strong> esse ve posse fiilleri.</li>\n</ul>\n<p>2. Dönemde ise işaret zamirleri (hic, ille, iste), Perfectum sistemi (bitmiş zamanlar), 3. sınıf sıfatlar, 4. ve 5. çekim isimler, sayılar, Edilgen Çatı (Vox Passiva) ve İlgi Zamirleri (qui, quae, quod) ile Latinceyi en üst düzeye taşıyacaksınız!</p>",
        "calloutType": "rule",
        "calloutTitle": "Dönem Başarısı",
        "calloutText": "Tüm bu konuların çekim tablolarını ve cümle tahlillerini fasikül indeksinden tekrar tekrar gözden geçirebilirsiniz.",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Catullus'un Cornelius'a İthafı (Catullus 1)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Catullus'un Cornelius'a İthafı (Catullus 1)</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Cornelio\" role=\"button\" tabindex=\"0\">Cornelio</span>, <span class=\"lat-word\" data-word=\"viro\" role=\"button\" tabindex=\"0\">viro</span> <span class=\"lat-word\" data-word=\"magno\" role=\"button\" tabindex=\"0\">magno</span> <span class=\"lat-word\" data-word=\"sapientiae\" role=\"button\" tabindex=\"0\">sapientiae</span>, <span class=\"lat-word\" data-word=\"dabo\" role=\"button\" tabindex=\"0\">dabo</span> <span class=\"lat-word\" data-word=\"pulchrum\" role=\"button\" tabindex=\"0\">pulchrum</span> <span class=\"lat-word\" data-word=\"librum\" role=\"button\" tabindex=\"0\">librum</span> <span class=\"lat-word\" data-word=\"novum\" role=\"button\" tabindex=\"0\">novum</span>. <span class=\"lat-word\" data-word=\"Corneli\" role=\"button\" tabindex=\"0\">Corneli</span>, <span class=\"lat-word\" data-word=\"mi\" role=\"button\" tabindex=\"0\">mi</span> <span class=\"lat-word\" data-word=\"amice\" role=\"button\" tabindex=\"0\">amice</span>, <span class=\"lat-word\" data-word=\"libros\" role=\"button\" tabindex=\"0\">libros</span> <span class=\"lat-word\" data-word=\"meos\" role=\"button\" tabindex=\"0\">meos</span> <span class=\"lat-word\" data-word=\"semper\" role=\"button\" tabindex=\"0\">semper</span> <span class=\"lat-word\" data-word=\"laudabas\" role=\"button\" tabindex=\"0\">laudabas</span>, <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"es\" role=\"button\" tabindex=\"0\">es</span> <span class=\"lat-word\" data-word=\"magister\" role=\"button\" tabindex=\"0\">magister</span> <span class=\"lat-word\" data-word=\"doctus\" role=\"button\" tabindex=\"0\">doctus</span> <span class=\"lat-word\" data-word=\"litterarum\" role=\"button\" tabindex=\"0\">litterarum</span>! <span class=\"lat-word\" data-word=\"Quare\" role=\"button\" tabindex=\"0\">Quare</span> <span class=\"lat-word\" data-word=\"habe\" role=\"button\" tabindex=\"0\">habe</span> <span class=\"lat-word\" data-word=\"novum\" role=\"button\" tabindex=\"0\">novum</span> <span class=\"lat-word\" data-word=\"laborem\" role=\"button\" tabindex=\"0\">laborem</span> <span class=\"lat-word\" data-word=\"meum\" role=\"button\" tabindex=\"0\">meum</span>: <span class=\"lat-word\" data-word=\"fama\" role=\"button\" tabindex=\"0\">fama</span> <span class=\"lat-word\" data-word=\"libri\" role=\"button\" tabindex=\"0\">libri</span>, (<span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"tua\" role=\"button\" tabindex=\"0\">tua</span> <span class=\"lat-word\" data-word=\"fama\" role=\"button\" tabindex=\"0\">fama</span>) <span class=\"lat-word\" data-word=\"erit\" role=\"button\" tabindex=\"0\">erit</span> <span class=\"lat-word\" data-word=\"perpetua\" role=\"button\" tabindex=\"0\">perpetua</span>. <span class=\"lat-word\" data-word=\"dostus\" role=\"button\" tabindex=\"0\">dostus</span>, -<span class=\"lat-word\" data-word=\"a\" role=\"button\" tabindex=\"0\">a</span>, -<span class=\"lat-word\" data-word=\"um\" role=\"button\" tabindex=\"0\">um</span>, <span class=\"lat-word\" data-word=\"adj\" role=\"button\" tabindex=\"0\">adj</span>., <span class=\"lat-word\" data-word=\"bilen\" role=\"button\" tabindex=\"0\">bilen</span>, <span class=\"lat-word\" data-word=\"bilgili\" role=\"button\" tabindex=\"0\">bilgili</span>, <span class=\"lat-word\" data-word=\"âlim\" role=\"button\" tabindex=\"0\">âlim</span> <span class=\"lat-word\" data-word=\"do\" role=\"button\" tabindex=\"0\">do</span>, <span class=\"lat-word\" data-word=\"dare\" role=\"button\" tabindex=\"0\">dare</span>, <span class=\"lat-word\" data-word=\"dedi\" role=\"button\" tabindex=\"0\">dedi</span>, <span class=\"lat-word\" data-word=\"v\" role=\"button\" tabindex=\"0\">v</span>., <span class=\"lat-word\" data-word=\"vermek\" role=\"button\" tabindex=\"0\">vermek</span>, <span class=\"lat-word\" data-word=\"sunmak\" role=\"button\" tabindex=\"0\">sunmak</span>; <span class=\"lat-word\" data-word=\"adamak\" role=\"button\" tabindex=\"0\">adamak</span>, <span class=\"lat-word\" data-word=\"ithaf\" role=\"button\" tabindex=\"0\">ithaf</span> <span class=\"lat-word\" data-word=\"etmek\" role=\"button\" tabindex=\"0\">etmek</span> <span class=\"lat-word\" data-word=\"labor\" role=\"button\" tabindex=\"0\">labor</span>, -<span class=\"lat-word\" data-word=\"oris\" role=\"button\" tabindex=\"0\">oris</span>, <span class=\"lat-word\" data-word=\"m\" role=\"button\" tabindex=\"0\">m</span>., <span class=\"lat-word\" data-word=\"iş\" role=\"button\" tabindex=\"0\">iş</span>, <span class=\"lat-word\" data-word=\"çalışma\" role=\"button\" tabindex=\"0\">çalışma</span>; <span class=\"lat-word\" data-word=\"eser\" role=\"button\" tabindex=\"0\">eser</span>, <span class=\"lat-word\" data-word=\"ürün\" role=\"button\" tabindex=\"0\">ürün</span>\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Büyük bir bilgeliğe sahip olan Cornelius’a yeni güzel kitabımı adıyorum. Cornelius, ey dostum, benim kitaplarımı her zaman övüyordun ve sen bilgili bir edebiyat öğretmenisin. Bu nedenle benim yeni eserimi de elinde bulundur: Kitabımın ünü (senin de ünün) ebedi olacak.</p>\n  </div>\n</div>\n",
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
        "notes": "post, prep.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "sonra, ardfndanW",
        "tr": "Kötü zamanlardan sonra gerçek erdem ve çok fazla çaba devlete yardım edecek.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Post tempora mala vera virtus et multus labor civitatem iuvabunt.",
        "tr": "Kötü zamanlardan sonra gerçek erdem ve çok fazla çaba devlete yardım edecek.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Officia sapientiamque oculis animi possumus videre.",
        "tr": "göz",
        "analysis": "oculus, -i, m.,",
        "notes": "oculus, -i, m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Romani erant viri liberi. Marcus Tullius, vir honestus, in Italia habitabat.",
        "tr": ", onurlu, erdemli",
        "analysis": "honestus, -a, -um, adj.",
        "notes": "honestus, -a, -um, adj.",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Romani erant viri liberi.",
        "tr": "Romalılar özgür adamlardı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Marcus Tullius, vir honestus, in Italia habitabat.",
        "tr": "Onurlu bir adam olan Marcus Tullius İtalya’da yaşıyordu., onurlu, erdemli",
        "analysis": "honestus, -a, -um, adj.",
        "notes": "honestus, -a, -um, adj.",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Viros bonos et honestos laudamus. Fidi sunt amici vestri.",
        "tr": ", sadık, sadakatli, güvenilir",
        "analysis": "fidus, -a, -um, adj.",
        "notes": "fidus, -a, -um, adj.",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Viros bonos et honestos laudamus.",
        "tr": "İyi ve onurlu adamları övüyoruz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Fidi sunt amici vestri.",
        "tr": "Sizin arkadaşlarınız sadakatlidir., sadık, sadakatli, güvenilir",
        "analysis": "fidus, -a, -um, adj.",
        "notes": "fidus, -a, -um, adj.",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Liberi mei in schola manent. Multae et pulchrae feminae in oppido nostro habitant., okul",
        "tr": "çocuklar",
        "analysis": "schola, -ae, f.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "notes": "schola, -ae, f.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Liberi mei in schola manent.",
        "tr": "Benim çocuklarım okulda bekliyorlardı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multae et pulchrae feminae in oppido nostro habitant.",
        "tr": "Pek çok güzel kadın bizim kasabamızda yaşıyor.",
        "analysis": "schola, -ae, f.",
        "notes": "schola, -ae, f.",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multos et fidos socios habetis. Britannia est magna insula.",
        "tr": ", yoldaş, müttefik çocuklar",
        "analysis": "socius, -i (-ii), m.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "notes": "socius, -i (-ii), m.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multos et fidos socios habetis.",
        "tr": "Pek çok sadık müttefike sahipsiniz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Britannia est magna insula.",
        "tr": "Britanya büyük bir adadır., yoldaş, müttefik çocuklar",
        "analysis": "socius, -i (-ii), m.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "notes": "socius, -i (-ii), m.; liberi, -orum, m., pl.,; oppidum, -i, n.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multas feminas pulchras in oppido vestro videbitis.",
        "tr": "Kasabanızda pek çok güzel kadın göreceksiniz. İyi insanları ve onurlu kadınları her zaman öveceğiz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Bonos viros et feminas honestas semper laudabimus.",
        "tr": "İyi erkekleri ve onurlu kadınları her zaman öveceğiz.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Spectantne nautae saepe lunam et stellas?",
        "tr": "Denizciler sıklıkla yıldızlara ve aya bakar mı? Çiftçinin güzel hediyeleri neredeydi?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ubi erant dona puchra agricolae?, ay",
        "tr": "yıldız-",
        "analysis": "luna, -ae, f.; stella, -ae, f.,",
        "notes": "luna, -ae, f.; stella, -ae, f.,",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "2. döneme başlamadan önce 1. dönemdeki 5 fiil çekim grubunun şimdiki, hikaye ve gelecek zaman eklerini sağlamlaştırdığınızdan emin olunuz."
  },
  {
    "id": "T2_W1_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 1,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 1. Hafta (1. Ders)",
    "title": "3. ÇEKİM İSİMLER TEKRAR VE KLASİK EDEBİ SENTAKS",
    "subtitle": "Homo sum, Terentius, Horatius ve Ecclesiastes Metinleri Eşliğinde Sentaks Çözümlemeleri",
    "summary": "Bu fasikülde 2. dönemin başlangıcında 3. grup isimlerin cümle içindeki sentaks kullanımlarını pekiştirecek, Terentius, Horatius ve Ecclesiastes'ten seçilmiş edebi cümleleri inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 1.1.pdf",
    "slideCount": 11,
    "topics": ["3. Çekim İsimler Tekrar", "Terentius: Homo sum", "Horatius Şiirleri", "Ecclesiastes: Nihil sub sole novum", "Klasik Sentaks Çözümlemesi"],
    "vocab": ["homo", "sol", "novus", "carmen", "adulescentia", "virgo", "puer", "canto", "rex", "dux", "fui", "nihil", "sub", "de", "nunc", "amor", "odi", "virtus", "pecco", "tempus", "princeps", "durus", "audeo", "bonus", "propter", "et", "populus", "stultus", "saepe", "in", "semper", "otium", "sine", "mors", "honor", "porta", "nomen", "ad", "tolerare", "civitas", "non", "vita", "praeclarus", "libertas", "labor", "mortalis", "casa", "sed", "cena", "mox", "ecce", "puella", "avide", "postridie"],
    "sections": [
      {
        "title": "1. 3. Çekim İsimlerin Sentakstaki Yeri ve Klasik Metinler",
        "html": "<p>3. çekim isimler, Roma edebiyatında ve felsefesinde insan doğasını, erdemi ve evreni anlatan en temel kelimeleri barındırır:</p>\n<ul>\n  <li><span class=\"lat-word\">Homo sum: humānī nihil ā mē aliēnum putō.</span> (İnsanım: insana dair hiçbir şeyi kendime yabancı saymam. — Terentius)</li>\n  <li><span class=\"lat-word\">Nihil sub sōle novum.</span> (Güneşin altında yeni hiçbir şey yoktur. — Ecclesiastes)</li>\n  <li><span class=\"lat-word\">Carmina nova dē adulescentiā virginibus puerīsque nunc cantō.</span> (Genç kızlar ve oğlanlar için gençlik hakkında yeni şarkılar söylüyorum. — Horatius)</li>\n</ul>",
        "calloutType": "info",
        "calloutTitle": "Edebi Alıntı Kuralı",
        "calloutText": "Klasik yazarlardan alınan cümleler Latincede dilbilgisi kurallarının canlı edebiyattaki en kusursuz örnekleridir.",
        "tableHtml": ""
      },
      {
        "title": "Okuma Parçası: Scintilla ve Horatia (Oxford Latin Course)",
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Scintilla ve Horatia (Oxford Latin Course)</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"casa\" role=\"button\" tabindex=\"0\">casa</span> <span class=\"lat-word\" data-word=\"laborat\" role=\"button\" tabindex=\"0\">laborat</span>; <span class=\"lat-word\" data-word=\"fessa\" role=\"button\" tabindex=\"0\">fessa</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>. <span class=\"lat-word\" data-word=\"Horatia\" role=\"button\" tabindex=\"0\">Horatia</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"casam\" role=\"button\" tabindex=\"0\">casam</span> <span class=\"lat-word\" data-word=\"intrat\" role=\"button\" tabindex=\"0\">intrat</span>; <span class=\"lat-word\" data-word=\"ieiuna\" role=\"button\" tabindex=\"0\">ieiuna</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>. <span class=\"lat-word\" data-word=\"Sed\" role=\"button\" tabindex=\"0\">Sed</span> <span class=\"lat-word\" data-word=\"cena\" role=\"button\" tabindex=\"0\">cena</span> <span class=\"lat-word\" data-word=\"non\" role=\"button\" tabindex=\"0\">non</span> <span class=\"lat-word\" data-word=\"parata\" role=\"button\" tabindex=\"0\">parata</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>. <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"festinat\" role=\"button\" tabindex=\"0\">festinat</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"mox\" role=\"button\" tabindex=\"0\">mox</span> <span class=\"lat-word\" data-word=\"cena\" role=\"button\" tabindex=\"0\">cena</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"parata\" role=\"button\" tabindex=\"0\">parata</span>. “<span class=\"lat-word\" data-word=\"Ecce\" role=\"button\" tabindex=\"0\">Ecce</span>!” <span class=\"lat-word\" data-word=\"inquit\" role=\"button\" tabindex=\"0\">inquit</span>, “ <span class=\"lat-word\" data-word=\"cena\" role=\"button\" tabindex=\"0\">cena</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"parata\" role=\"button\" tabindex=\"0\">parata</span>. ” <span class=\"lat-word\" data-word=\"Puella\" role=\"button\" tabindex=\"0\">Puella</span> <span class=\"lat-word\" data-word=\"laeta\" role=\"button\" tabindex=\"0\">laeta</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>; <span class=\"lat-word\" data-word=\"ad\" role=\"button\" tabindex=\"0\">ad</span> <span class=\"lat-word\" data-word=\"mensam\" role=\"button\" tabindex=\"0\">mensam</span> <span class=\"lat-word\" data-word=\"festinat\" role=\"button\" tabindex=\"0\">festinat</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"avide\" role=\"button\" tabindex=\"0\">avide</span> <span class=\"lat-word\" data-word=\"cenat\" role=\"button\" tabindex=\"0\">cenat</span>. <span class=\"lat-word\" data-word=\"Postridie\" role=\"button\" tabindex=\"0\">Postridie</span> <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"ad\" role=\"button\" tabindex=\"0\">ad</span> <span class=\"lat-word\" data-word=\"tabernas\" role=\"button\" tabindex=\"0\">tabernas</span> <span class=\"lat-word\" data-word=\"ambulat\" role=\"button\" tabindex=\"0\">ambulat</span>. <span class=\"lat-word\" data-word=\"Horatia\" role=\"button\" tabindex=\"0\">Horatia</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"casa\" role=\"button\" tabindex=\"0\">casa</span> <span class=\"lat-word\" data-word=\"laborat\" role=\"button\" tabindex=\"0\">laborat</span>. <span class=\"lat-word\" data-word=\"Mox\" role=\"button\" tabindex=\"0\">Mox</span> <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"redit\" role=\"button\" tabindex=\"0\">redit</span> <span class=\"lat-word\" data-word=\"et\" role=\"button\" tabindex=\"0\">et</span> <span class=\"lat-word\" data-word=\"in\" role=\"button\" tabindex=\"0\">in</span> <span class=\"lat-word\" data-word=\"casam\" role=\"button\" tabindex=\"0\">casam</span> <span class=\"lat-word\" data-word=\"intrat\" role=\"button\" tabindex=\"0\">intrat</span>. <span class=\"lat-word\" data-word=\"Ecce\" role=\"button\" tabindex=\"0\">Ecce</span>, <span class=\"lat-word\" data-word=\"parata\" role=\"button\" tabindex=\"0\">parata</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span> <span class=\"lat-word\" data-word=\"cena\" role=\"button\" tabindex=\"0\">cena</span>. <span class=\"lat-word\" data-word=\"Scintilla\" role=\"button\" tabindex=\"0\">Scintilla</span> <span class=\"lat-word\" data-word=\"laeta\" role=\"button\" tabindex=\"0\">laeta</span> <span class=\"lat-word\" data-word=\"est\" role=\"button\" tabindex=\"0\">est</span>.\n  </div>\n  <div class=\"reading-passage-tr\">\n    <div class=\"tr-label\">🇹🇷 Türkçe Çeviri:</div>\n    <p class=\"tr-text\">Scintilla evde çalışıyor, bitkin durumdadır. Horatia eve girer; açtır. Ama yemek hazır değildir. Scintilla hızla seğirtir ve kısa süre içinde yemek hazır olur. “İşte bak!” der, “Yemek hazır.” Kız mutludur, masaya yaklaşır ve iştahla yemeği yer. Ertesi gün Scintilla yürüyerek dükkanlara gider. Horatia evde çalışır. Çok geçmeden Scintilla geri döner ve eve girer. Yemek hazırdır. Scintilla mutlu olur.</p>\n  </div>\n  <div class=\"reading-passage-notes\">\n    <div class=\"notes-label\">🔍 Metin İçi Sözlük & Gramer Notları:</div>\n    <p class=\"notes-text\">casa, - ae, - f., ev in, praep., (+ abl.), - de, - da; (+ acc.) - e doğru fessus, - a, - um., adj., yorgun, bitkin intro, - are, - avi, gitmek; içeri girmek ieiunus, - a, - um., adj., aç cena, - ae, - f., akşam yemeği ad, praep., (+ acc.) - e doğru, yanına paratus, - a, - um., adj., hazır ecce, adv., bak, işte laetus, - a, - um., adj., mutlu, neşeli avide, adv., aç gözlüce, iştahla festino, - are, - avi, hızla ilerlemek, acele etmek postridie, adv., ertesi gün redeo, redire, geri dönmek taberna, - ae, f., dükkan</p>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Homo sum. Nihil sub sole novum. ( Ecclesiastes ) Carmina nova de adulescentia virginibus puerisque nunc canto. ( Horatius )",
        "tr": "insan",
        "analysis": "homo, hominis, m.,",
        "notes": "homo, hominis, m.,",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "carmen, inis",
        "tr": "şarkı",
        "analysis": ", n.,",
        "notes": ", n.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "canto, - are,",
        "tr": "şarkı söylemek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "adulescentia, -",
        "tr": "gençlik",
        "analysis": "ae, f.,",
        "notes": "ae, f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Homo sum.",
        "tr": "İnsanım",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": ". Nihil sub sole novum. ( Ecclesiastes )",
        "tr": "Güneş altında",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Carmina nova de adulescentia virginibus puerisque nunc canto.",
        "tr": "Genç kızlar ve",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": "mores, morum",
        "tr": "âdet",
        "analysis": ", m., pl.,",
        "notes": ", m., pl.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", karakter amor, - oris",
        "tr": "aşk",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "odi, odisse, nefret",
        "tr": "etmek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "( eksik",
        "tr": "çekimli",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "fiil ) virtus, - tutis",
        "tr": "erdem",
        "analysis": "f.,",
        "notes": "f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "pecco, - are,",
        "tr": "suç işlemek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "tempus, oris",
        "tr": "zaman",
        "analysis": ", n.,",
        "notes": ", n.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "princeps, - ipis lider,",
        "tr": "yönetici",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "durus, - a, - sert, zor,",
        "tr": "katı",
        "analysis": "um, adj.,",
        "notes": "um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "audeo, -",
        "tr": "cesaret etmek",
        "analysis": "ere, v., 2,",
        "notes": "ere, v., 2,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sub principe duro temporibusque malis audes esse bonus. ( Martialis ) Sert",
        "tr": "bir yöneticinin",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "zamanlarda iyi",
        "tr": "bir insan",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "ediyorsun. Boni propter amorem virtutis peccare oderunt.",
        "tr": "İyi",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": "insanlar erdeme",
        "tr": "duydukları aşktan dolayı suç işlemekten",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "nefret ederler. Laudas fortunam et mores antiquae plebis. Eski",
        "tr": "halkın",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": "Populus stultus viris indignis honores saepe dat. Nomina stultorum in parietibus et portis semper videmus. ( Cicero ) Otium sine litteris mors est. ( Seneca ) honor, - oris onur; makam indignus, - a, -",
        "tr": "değersiz",
        "analysis": ", f.,; um, adj.,",
        "notes": ", f.,; um, adj.,",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": ", adi; hak etmeyen, liyakatsiz paries, - etis bina",
        "tr": "duvarı",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "porta, -",
        "tr": "Eski kapı büyük değildir, ama güzeldir.",
        "analysis": "ae, f.,",
        "notes": "ae, f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "nomen, - inis isim, ad virtus, - tutis",
        "tr": "erdem",
        "analysis": ", n.,; f.,",
        "notes": ", n.,; f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Populus stultus viris indignis honores saepe dat. Aptal halk, liyakatsiz insanlara onurlar / makamlar",
        "tr": "bahşeder",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": ". Nomina stultorum in parietibus et portis semper videmus.",
        "tr": "Aptalların adını her zaman",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": ". Otium sine litteris mors est. Edebiyatla",
        "tr": "geçirilmeyen boş",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
      },
      {
        "latin": "Multae nationes servitutem tolerare possunt; nostra civitas non potest. Praeclara est recuperatio libertatis. Nihil sine magno labore vita mortalibus dat. ( Horatius ) natio, - onis ulus, halk praeclarus, - a, -",
        "tr": "olağanüstü",
        "analysis": ", f.,; um, adj.,",
        "notes": ", f.,; um, adj.,",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "servitus, - tutis",
        "tr": "kölelik",
        "analysis": ", f.,",
        "notes": ", f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "civitas, - atis devlet recuperatio, - onis geri kazanma libertas, - atis",
        "tr": "özgürlük",
        "analysis": ", f.,; , f.,; f.,",
        "notes": ", f.,; , f.,; f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "labor, oris",
        "tr": "iş",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "mortalis, -",
        "tr": "ölümlü",
        "analysis": "is., m./f.,",
        "notes": "is., m./f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multae nationes servitutem tolerare possunt; nostra civitas non potest. Praeclara est recuperatio libertatis. Pek",
        "tr": "çok",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "devletimiz katlanamaz.",
        "tr": "Özgürlüğün",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Nihil sine magno labore vita mortalibus dat.",
        "tr": "Çok emek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
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
    "title": "3. ÇEKİM ALIŞTIRMALARI VE METİN OKUMA: SCINTILLA VE HORATIA",
    "subtitle": "Oxford Latin Course Metinleri, Günlük Yaşam Latinceleri ve İleri Düzey Cümleler",
    "summary": "Bu fasikülde Roma günlük yaşamını anlatan Oxford Latin Course metinleri eşliğinde Scintilla ve Horatia'nın hikayesini, edatlı kalıpları (in casa, ad tabernas) ve cümle tahlillerini öğreneceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 1.2.pdf",
    "slideCount": 16,
    "topics": ["Scintilla ve Horatia Metni", "Günlük Yaşam Latinceleri", "Yer ve Yön Bildiren Edatlar (in, ad)", "Zarf Kullanımları (mox, avide, postridie)", "Cümle Çözümlemeleri"],
    "vocab": ["casa", "laboro", "fessus", "intro", "ieiunus", "cena", "paratus", "ecce", "laetus", "avide", "festino", "postridie", "redeo", "taberna", "quomodo", "in", "et", "liberi", "frater", "meus", "semper", "perpetuus", "pax", "civitas", "salvus", "liber_book", "ago", "nunc", "quare", "soror", "tyrannus", "terra", "uxor", "gratias", "ex", "iter", "possum", "numquam", "periculum", "sine", "error", "demonstro", "mora", "ad", "copia", "perdo", "amor", "non", "sed", "laus", "traho", "mox", "puella", "propter", "gero", "bellum", "defendo", "tum", "autem", "tamen", "de"],
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
        "html": "<div class=\"reading-passage-block\">\n  <div class=\"reading-passage-header\">\n    <span class=\"reading-badge\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\n    <h4 class=\"reading-title\">Okuma Parçası: Savaş, Barış ve Merhamet (Cicero, De Officiis)</h4>\n  </div>\n  <div class=\"reading-passage-latin\">\n    <span class=\"lat-word\" data-word=\"propter\" role=\"button\" tabindex=\"0\">propter</span>, <span class=\"lat-word\" data-word=\"praep\" role=\"button\" tabindex=\"0\">praep</span>., (+ <span class=\"lat-word\" data-word=\"acc\" role=\"button\" tabindex=\"0\">acc</span>.) <span class=\"lat-word\" data-word=\"nedeniyle\" role=\"button\" tabindex=\"0\">nedeniyle</span>, <span class=\"lat-word\" data-word=\"yüzünden\" role=\"button\" tabindex=\"0\">yüzünden</span>, <span class=\"lat-word\" data-word=\"sebebinden\" role=\"button\" tabindex=\"0\">sebebinden</span> <span class=\"lat-word\" data-word=\"gero\" role=\"button\" tabindex=\"0\">gero</span>, <span class=\"lat-word\" data-word=\"gerere\" role=\"button\" tabindex=\"0\">gerere</span>, <span class=\"lat-word\" data-word=\"gessi\" role=\"button\" tabindex=\"0\">gessi</span>, <span class=\"lat-word\" data-word=\"gestum\" role=\"button\" tabindex=\"0\">gestum</span>, <span class=\"lat-word\" data-word=\"v\" role=\"button\" tabindex=\"0\">v</span>. 3, <span class=\"lat-word\" data-word=\"taşımak\" role=\"button\" tabindex=\"0\">taşımak</span>, <span class=\"lat-word\" data-word=\"sürdürmek\" role=\"button\" tabindex=\"0\">sürdürmek</span>, <span class=\"lat-word\" data-word=\"idare\" role=\"button\" tabindex=\"0\">idare</span> <span class=\"lat-word\" data-word=\"etmek\" role=\"button\" tabindex=\"0\">etmek</span>, <span class=\"lat-word\" data-word=\"gerçekleştirmek\" role=\"button\" tabindex=\"0\">gerçekleştirmek</span>, <span class=\"lat-word\" data-word=\"yürütmek\" role=\"button\" tabindex=\"0\">yürütmek</span> <span class=\"lat-word\" data-word=\"bellum\" role=\"button\" tabindex=\"0\">bellum</span> <span class=\"lat-word\" data-word=\"gerere\" role=\"button\" tabindex=\"0\">gerere</span>, <span class=\"lat-word\" data-word=\"savaşmak\" role=\"button\" tabindex=\"0\">savaşmak</span> <span class=\"lat-word\" data-word=\"defendo\" role=\"button\" tabindex=\"0\">defendo</span>, - <span class=\"lat-word\" data-word=\"ere\" role=\"button\" tabindex=\"0\">ere</span>, <span class=\"lat-word\" data-word=\"v\" role=\"button\" tabindex=\"0\">v</span>., 3, <span class=\"lat-word\" data-word=\"savunmak\" role=\"button\" tabindex=\"0\">savunmak</span>, <span class=\"lat-word\" data-word=\"sakınmak\" role=\"button\" tabindex=\"0\">sakınmak</span> <span class=\"lat-word\" data-word=\"tum\" role=\"button\" tabindex=\"0\">tum</span>, <span class=\"lat-word\" data-word=\"adv\" role=\"button\" tabindex=\"0\">adv</span>., <span class=\"lat-word\" data-word=\"o\" role=\"button\" tabindex=\"0\">o</span> <span class=\"lat-word\" data-word=\"zaman\" role=\"button\" tabindex=\"0\">zaman</span>, <span class=\"lat-word\" data-word=\"o\" role=\"button\" tabindex=\"0\">o</span> <span class=\"lat-word\" data-word=\"sıralarda\" role=\"button\" tabindex=\"0\">sıralarda</span> <span class=\"lat-word\" data-word=\"autem\" role=\"button\" tabindex=\"0\">autem</span>, <span class=\"lat-word\" data-word=\"conj\" role=\"button\" tabindex=\"0\">conj</span>., <span class=\"lat-word\" data-word=\"ancak\" role=\"button\" tabindex=\"0\">ancak</span>, <span class=\"lat-word\" data-word=\"öte\" role=\"button\" tabindex=\"0\">öte</span> <span class=\"lat-word\" data-word=\"yandan\" role=\"button\" tabindex=\"0\">yandan</span> <span class=\"lat-word\" data-word=\"necessarius\" role=\"button\" tabindex=\"0\">necessarius</span>, - <span class=\"lat-word\" data-word=\"a\" role=\"button\" tabindex=\"0\">a</span>, <span class=\"lat-word\" data-word=\"um\" role=\"button\" tabindex=\"0\">um</span>, <span class=\"lat-word\" data-word=\"adj\" role=\"button\" tabindex=\"0\">adj</span>., <span class=\"lat-word\" data-word=\"zorunlu\" role=\"button\" tabindex=\"0\">zorunlu</span>, <span class=\"lat-word\" data-word=\"gerekli\" role=\"button\" tabindex=\"0\">gerekli</span> <span class=\"lat-word\" data-word=\"tamen\" role=\"button\" tabindex=\"0\">tamen</span>, <span class=\"lat-word\" data-word=\"adv\" role=\"button\" tabindex=\"0\">adv</span>., <span class=\"lat-word\" data-word=\"buna\" role=\"button\" tabindex=\"0\">buna</span> <span class=\"lat-word\" data-word=\"rağmen\" role=\"button\" tabindex=\"0\">rağmen</span>, <span class=\"lat-word\" data-word=\"yine\" role=\"button\" tabindex=\"0\">yine</span> <span class=\"lat-word\" data-word=\"de\" role=\"button\" tabindex=\"0\">de</span> <span class=\"lat-word\" data-word=\"clementia\" role=\"button\" tabindex=\"0\">clementia</span>, - <span class=\"lat-word\" data-word=\"ae\" role=\"button\" tabindex=\"0\">ae</span>, <span class=\"lat-word\" data-word=\"f\" role=\"button\" tabindex=\"0\">f</span>., <span class=\"lat-word\" data-word=\"merhamet\" role=\"button\" tabindex=\"0\">merhamet</span>, <span class=\"lat-word\" data-word=\"hoşgörü\" role=\"button\" tabindex=\"0\">hoşgörü</span> <span class=\"lat-word\" data-word=\"fortunae\" role=\"button\" tabindex=\"0\">fortunae</span>, - <span class=\"lat-word\" data-word=\"arum\" role=\"button\" tabindex=\"0\">arum</span>, <span class=\"lat-word\" data-word=\"pl\" role=\"button\" tabindex=\"0\">pl</span>., <span class=\"lat-word\" data-word=\"mal\" role=\"button\" tabindex=\"0\">mal</span> <span class=\"lat-word\" data-word=\"mülk\" role=\"button\" tabindex=\"0\">mülk</span>\n  </div>\n</div>\n",
        "calloutType": "info",
        "calloutTitle": "Metin Çözümleme Yöntemi",
        "calloutText": "Yukarıdaki orijinal Latince metinde geçen herhangi bir kelimeye tıklayarak morfolojik analizine, sözlük anlamına ve çekim tablolarına anında ulaşabilirsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Quomodo in perpetua pace salvi et liberi esse poterimus? Frater meus vitam in otio semper aget. ( Terentius )",
        "tr": "nasıl, ne şekilde",
        "analysis": "quomodo, adv.,",
        "notes": "quomodo, adv.,",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "perpetuus, - a, -",
        "tr": "devamlı",
        "analysis": "um, adj.,",
        "notes": "um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "pax, - pacis",
        "tr": "barış",
        "analysis": ", f.,",
        "notes": ", f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "civitas, - atis devlet salvus, - a, - zarar",
        "tr": "görmemiş",
        "analysis": ", f.,; um., adj.,",
        "notes": ", f.,; um., adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", emniyette liber, - a, -",
        "tr": "özgür",
        "analysis": "um, adj.,",
        "notes": "um, adj.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "frater, fratris erkek",
        "tr": "kardeş",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "ago, agere",
        "tr": "götürmek",
        "analysis": ", v. 3,",
        "notes": ", v. 3,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Quomodo in perpetua pace salvi et liberi esse poterimus?",
        "tr": "Sürekli barış içinde nasıl özgür ve",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "emniyette olabiliriz? Frater meus vitam in otio semper aget. Erkek",
        "tr": "kardeşim her zaman hayatını boş",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "Tempora nostra nunc sunt mala, vitia nostra magna. Quare soror mea uxori tuae litteras scribit? Tyrannus populum stultum e terra vestra ducet. quare",
        "tr": "niçin",
        "analysis": ", adv.,",
        "notes": ", adv.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "? soror, - oris",
        "tr": "kızkardeş",
        "analysis": ", f.,",
        "notes": ", f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "uxor, - oris",
        "tr": "eş",
        "analysis": ", f.,",
        "notes": ", f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", zevce terra, - toprak;",
        "tr": "ülke",
        "analysis": "ae, f.,",
        "notes": "ae, f.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Tempora nostra nunc sunt mala, vitia nostra magna.",
        "tr": "Şimdi zamanımız kötü",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Quare soror mea uxori tuae litteras scribit?",
        "tr": "Benim kız kardeşim niçin senin eşine mektup yazıyor",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Tyrannus populum stultum e terra vestra ducet.",
        "tr": "Tiran akılsız halkı sizin ülkenizden götürecek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Catullus Marco Tullio Ciceroni magnas gratias agit. Ex meis erroribus hominibus rectum iter demonstrare possum. ( Seneca ) Numquam periculum sine periculo vincemus. ( Publilius Syrus ) Cicero, - onis Cicero gratias agere, (+ dat.),",
        "tr": "teşekkür etmek",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr",
        "author": "Catullus"
      },
      {
        "latin": "error, - oris hata,",
        "tr": "yanılgı",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "demonstro, - are,",
        "tr": "göstermek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "periculum, - i tehllike numquam asla,",
        "tr": "hiçbir zaman",
        "analysis": ", n.,; , adv.,",
        "notes": ", n.,; , adv.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Catullus Marco Tullio Ciceroni magnas gratias agit. Catullus, Marcus Tullius",
        "tr": "Cicero’ya teşekkür ediyor",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Catullus"
      },
      {
        "latin": ". Ex meis erroribus hominibus rectum iter demonstrare possum.",
        "tr": "Hatalarımdan hareketle",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
      },
      {
        "latin": ". Numquam periculum sine periculo vincemus. ( Publilius Syrus ) Tehlikeye",
        "tr": "düşmeden",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "asla tehlikenin",
        "tr": "üstesinden gelmeyeceğiz",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Nova pericula populo Romano exponam sine mora. Agamemnon magnas copias e terra Graeca ad Troiam ducet. ( Seneca ) O amici, libertatem perdimus. ( Laberius ) copia, -",
        "tr": "çokluk",
        "analysis": "ae, f.,",
        "notes": "ae, f.,",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": ", bolluk expono, - ere,",
        "tr": "açıklamak",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "copiae, - arum, pl., askeri birlikler perdo, - ere,",
        "tr": "yok, etmek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Nova pericula populo Romano exponam sine mora.",
        "tr": "Hiç",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "gecikmeden Roma",
        "tr": "halkına",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "yeni tehlikeleri",
        "tr": "göstereceğim",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Agamemnon magnas copias e terra Graeca ad Troiam ducet. Agamemnon,",
        "tr": "büyük",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
      },
      {
        "latin": "askeri birlikleri Yunan",
        "tr": "diyarından Troia’ya götürecek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". O amici, libertatem perdimus. ( Laberius ) Ey dostlar,",
        "tr": "özgürlüğü yok ediyoruz",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Amor laudis homines trahit. Inter multas curas laboresque carmina scribere non possum. ( Horatius ) Non vitae, sed scholae discimus. ( Seneca ) laus, laudis",
        "tr": "övgü",
        "analysis": ", f.,",
        "notes": ", f.,",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": ", methiye traho, - ere,",
        "tr": "çekmek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Amor laudis homines trahit.",
        "tr": "Övgü aşkı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "cezbeder. Inter multas curas laboresque carmina scribere non possum. Pek",
        "tr": "çok endişe ve çalışma arasında şiirler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": "yazamam. Non vitae, sed scholae discimus.",
        "tr": "Yaşam için değil",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
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
    "title": "İŞARET ZAMİRLERİ VE SIFATLARI: HIC, ISTE, ILLE",
    "subtitle": "hic, haec, hoc (Bu); iste, ista, istud (Şu); ille, illa, illud (O) Tam Çekim Tabloları",
    "summary": "Bu fasikülde konuşana yakın olanı (hic), muhataba yakın olanı (iste) ve uzaktakini (ille) işaret eden üç temel işaret zamirinin/sıfatının üç cins ve iki sayıdaki tam çekim tablolarını göreceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 2.1.pdf",
    "slideCount": 19,
    "topics": ["İşaret Zamirleri (Demonstrativa)", "hic, haec, hoc (Bu)", "iste, ista, istud (Şu)", "ille, illa, illud (O)", "Tekil Genetivus (-ius) ve Dativus (-i) Kuralı", "Zamir ve Sıfat Kullanımı"],
    "vocab": ["hic", "haec", "hoc", "iste", "ista", "istud", "ille", "illa", "illud", "virgo", "matrimonium", "duco", "scriptor", "plenus", "audeo", "timor", "totus", "liber_book", "semper", "heri", "gratias", "de", "nunc", "et", "enim"],
    "sections": [
      {
        "title": "1. Konuşana Yakın Olanı İşaret Eden: hic, haec, hoc (Bu / Bunlar)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 8 çekim tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">hic, haec, hoc (Bu) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 8)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">hic</td>\n        <td class=\"case-cell-latin\">haec</td>\n        <td class=\"case-cell-latin\">hoc</td>\n        <td class=\"case-cell-tr\">bu</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey bu</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">huius</td>\n        <td class=\"case-cell-latin\">huius</td>\n        <td class=\"case-cell-latin\">huius</td>\n        <td class=\"case-cell-tr\">bunun</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">huic</td>\n        <td class=\"case-cell-latin\">huic</td>\n        <td class=\"case-cell-latin\">huic</td>\n        <td class=\"case-cell-tr\">buna</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">hunc</td>\n        <td class=\"case-cell-latin\">hanc</td>\n        <td class=\"case-cell-latin\">hoc</td>\n        <td class=\"case-cell-tr\">bunu</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">hōc</td>\n        <td class=\"case-cell-latin\">hāc</td>\n        <td class=\"case-cell-latin\">hōc</td>\n        <td class=\"case-cell-tr\">bununla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">hī, hae, haec (Bunlar) (Pluralis)</strong>\n    <span class=\"table-sub\">(Slayt 8)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">hī</td>\n        <td class=\"case-cell-latin\">hae</td>\n        <td class=\"case-cell-latin\">haec</td>\n        <td class=\"case-cell-tr\">bunlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey bunlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">hōrum</td>\n        <td class=\"case-cell-latin\">hārum</td>\n        <td class=\"case-cell-latin\">hōrum</td>\n        <td class=\"case-cell-tr\">bunların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">hīs</td>\n        <td class=\"case-cell-latin\">hīs</td>\n        <td class=\"case-cell-latin\">hīs</td>\n        <td class=\"case-cell-tr\">bunlara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">hōs</td>\n        <td class=\"case-cell-latin\">hās</td>\n        <td class=\"case-cell-latin\">haec</td>\n        <td class=\"case-cell-tr\">bunları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">hīs</td>\n        <td class=\"case-cell-latin\">hīs</td>\n        <td class=\"case-cell-latin\">hīs</td>\n        <td class=\"case-cell-tr\">bunlarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Muhataba Yakın Olanı İşaret Eden: iste, ista, istud (Şu / Şunlar)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 10 çekim tablosu (bazen küçümseme anlamı da taşır):</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">iste, ista, istud (Şu) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 10)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">iste</td>\n        <td class=\"case-cell-latin\">ista</td>\n        <td class=\"case-cell-latin\">istud</td>\n        <td class=\"case-cell-tr\">şu</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey şu</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">istīus</td>\n        <td class=\"case-cell-latin\">istīus</td>\n        <td class=\"case-cell-latin\">istīus</td>\n        <td class=\"case-cell-tr\">şunun</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">istī</td>\n        <td class=\"case-cell-latin\">istī</td>\n        <td class=\"case-cell-latin\">istī</td>\n        <td class=\"case-cell-tr\">şuna</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">istum</td>\n        <td class=\"case-cell-latin\">istam</td>\n        <td class=\"case-cell-latin\">istud</td>\n        <td class=\"case-cell-tr\">şunu</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">istō</td>\n        <td class=\"case-cell-latin\">istā</td>\n        <td class=\"case-cell-latin\">istō</td>\n        <td class=\"case-cell-tr\">şununla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">istī, istae, ista (Şunlar) (Pluralis)</strong>\n    <span class=\"table-sub\">(Slayt 10)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">istī</td>\n        <td class=\"case-cell-latin\">istae</td>\n        <td class=\"case-cell-latin\">ista</td>\n        <td class=\"case-cell-tr\">şunlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey şunlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">istōrum</td>\n        <td class=\"case-cell-latin\">istārum</td>\n        <td class=\"case-cell-latin\">istōrum</td>\n        <td class=\"case-cell-tr\">şunların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">istīs</td>\n        <td class=\"case-cell-latin\">istīs</td>\n        <td class=\"case-cell-latin\">istīs</td>\n        <td class=\"case-cell-tr\">şunlara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">istōs</td>\n        <td class=\"case-cell-latin\">istās</td>\n        <td class=\"case-cell-latin\">ista</td>\n        <td class=\"case-cell-tr\">şunları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">istīs</td>\n        <td class=\"case-cell-latin\">istīs</td>\n        <td class=\"case-cell-latin\">istīs</td>\n        <td class=\"case-cell-tr\">şunlarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Uzakta Olanı İşaret Eden: ille, illa, illud (O / Onlar)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 12 çekim tablosu (bazen 'o ünlü, meşhur' anlamı taşır):</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ille, illa, illud (O) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 12)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ille</td>\n        <td class=\"case-cell-latin\">illa</td>\n        <td class=\"case-cell-latin\">illud</td>\n        <td class=\"case-cell-tr\">o</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey o</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">illīus</td>\n        <td class=\"case-cell-latin\">illīus</td>\n        <td class=\"case-cell-latin\">illīus</td>\n        <td class=\"case-cell-tr\">onun</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">illī</td>\n        <td class=\"case-cell-latin\">illī</td>\n        <td class=\"case-cell-latin\">illī</td>\n        <td class=\"case-cell-tr\">ona</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">illum</td>\n        <td class=\"case-cell-latin\">illam</td>\n        <td class=\"case-cell-latin\">illud</td>\n        <td class=\"case-cell-tr\">onu</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">illō</td>\n        <td class=\"case-cell-latin\">illā</td>\n        <td class=\"case-cell-latin\">illō</td>\n        <td class=\"case-cell-tr\">onunla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">illī, illae, illa (Onlar) (Pluralis)</strong>\n    <span class=\"table-sub\">(Slayt 12)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">illī</td>\n        <td class=\"case-cell-latin\">illae</td>\n        <td class=\"case-cell-latin\">illa</td>\n        <td class=\"case-cell-tr\">onlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey onlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">illōrum</td>\n        <td class=\"case-cell-latin\">illārum</td>\n        <td class=\"case-cell-latin\">illōrum</td>\n        <td class=\"case-cell-tr\">onların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">illīs</td>\n        <td class=\"case-cell-latin\">illīs</td>\n        <td class=\"case-cell-latin\">illīs</td>\n        <td class=\"case-cell-tr\">onlara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">illōs</td>\n        <td class=\"case-cell-latin\">illās</td>\n        <td class=\"case-cell-latin\">illa</td>\n        <td class=\"case-cell-tr\">onları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">illīs</td>\n        <td class=\"case-cell-latin\">illīs</td>\n        <td class=\"case-cell-latin\">illīs</td>\n        <td class=\"case-cell-tr\">onlarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Hic totus liber litteras Romanas semper laudat. Bu",
        "tr": "bütün",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "kitap Roma",
        "tr": "edebiyatını her zaman över",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "illis deabus heri gratias agebant. Bunlar ( bu adamlar )",
        "tr": "dün",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Illud de vitiis istius reginae nunc scribam, et ista poenas dabit.",
        "tr": "Şu kraliçenin kusurları hakkında şimdi",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Virtutem enim illius viri amamus.",
        "tr": "Çünkü",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "hic (bu), iste (senin yanındaki şu), ille (ötedeki o) mekânsal üçlü işaret sistemini kurar."
  },
  {
    "id": "T2_W2_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 2,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 2. Hafta (2. Ders)",
    "title": "UNUS NAUTA SIFATLARININ AYRINTILI ÇEKİM SİSTEMİ",
    "subtitle": "Zamir Sıfatları: Tekil ve Çoğul Çekimleri ve 9 Sıfatın Tam Tabloları",
    "summary": "Bu fasikülde 2. Dönemin başındaki UNUS NAUTA sıfatlarının (ūnus, nūllus, ūllus, sōlus, neuter, alius, uter, tōtus, alter) Tekil Genetivus (-īus) ve Dativus (-ī) kurallarını, tekil ve çoğul tüm tablolarını inceleyeceksiniz.",
    "difficulty": "Orta Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 2.2.pdf",
    "slideCount": 22,
    "topics": ["UNUS NAUTA Sıfatları", "Tekil ve Çoğul Çekimleri", "alius / alterius Ayrımı", "neuter ve uter Kullanımı", "Dokuz Sıfatın Tam Tablosu"],
    "vocab": ["unus", "nullus", "ullus", "solus", "neuter", "alius", "uter", "totus", "alter", "laus", "labor", "numquam", "nimis", "pax", "in", "patria", "post", "dum", "ibi", "nihil"],
    "sections": [
      {
        "title": "1. UNUS NAUTA Sıfatlarının Ortak Çekim Formülü",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 5-7 özet kuralları:</p>\n<ul>\n  <li><strong>Tekil Genetivus:</strong> Her üç cinste de <strong>-īus</strong> (ūnīus, nūllīus, tōtīus).</li>\n  <li><strong>Tekil Dativus:</strong> Her üç cinste de <strong>-ī</strong> (ūnī, nūllī, tōtī).</li>\n  <li><strong>Cinssiz Tekil Nominativus / Accusativus:</strong> Genelde <em>-um</em>, sadece <em>alius</em> sıfatında <strong>aliud</strong>.</li>\n  <li><strong>Çoğul Çekim:</strong> Tamamen 1. ve 2. sınıf sıfatlar gibidir (-ī, -ae, -a; -ōrum, -ārum, -ōrum).</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ūnus, ūna, ūnum (bir, tek) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 8)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ūnus</td>\n        <td class=\"case-cell-latin\">ūna</td>\n        <td class=\"case-cell-latin\">ūnum</td>\n        <td class=\"case-cell-tr\">bir</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey bir</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">ūnīus</td>\n        <td class=\"case-cell-latin\">ūnīus</td>\n        <td class=\"case-cell-latin\">ūnīus</td>\n        <td class=\"case-cell-tr\">birin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">ūnī</td>\n        <td class=\"case-cell-latin\">ūnī</td>\n        <td class=\"case-cell-latin\">ūnī</td>\n        <td class=\"case-cell-tr\">bire</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">ūnum</td>\n        <td class=\"case-cell-latin\">ūnam</td>\n        <td class=\"case-cell-latin\">ūnum</td>\n        <td class=\"case-cell-tr\">biri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">ūnō</td>\n        <td class=\"case-cell-latin\">ūnā</td>\n        <td class=\"case-cell-latin\">ūnō</td>\n        <td class=\"case-cell-tr\">birle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">tōtus, tōta, tōtum (bütün, tüm) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 15)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">tōtus</td>\n        <td class=\"case-cell-latin\">tōta</td>\n        <td class=\"case-cell-latin\">tōtum</td>\n        <td class=\"case-cell-tr\">bütün</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey bütün</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">tōtīus</td>\n        <td class=\"case-cell-latin\">tōtīus</td>\n        <td class=\"case-cell-latin\">tōtīus</td>\n        <td class=\"case-cell-tr\">bütünün</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">tōtī</td>\n        <td class=\"case-cell-latin\">tōtī</td>\n        <td class=\"case-cell-latin\">tōtī</td>\n        <td class=\"case-cell-tr\">bütüne</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">tōtum</td>\n        <td class=\"case-cell-latin\">tōtam</td>\n        <td class=\"case-cell-latin\">tōtum</td>\n        <td class=\"case-cell-tr\">bütünü</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">tōtō</td>\n        <td class=\"case-cell-latin\">tōtā</td>\n        <td class=\"case-cell-latin\">tōtō</td>\n        <td class=\"case-cell-tr\">bütünle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Potestne laus ullius terrae esse perpetua? Labor unius numquam poterit has copias vincere.",
        "tr": "Herhangi bir diyarın övgüsü ebedi olabilir mi? Tek bir kişinin çalışması bu birlikleri asla alt edemeyecektir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Potestne laus ullius terrae esse perpetua? Herhangi",
        "tr": "bir ülkenin övgüsü",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ") daimi olabilir mi? Labor unius numquam poterit has copias vincere.",
        "tr": "Bir kişinin çabası",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "bu askeri birlikleri",
        "tr": "hiçbir zaman alt",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Mores istius scriptoris erant nimis mali. nimis / nimium",
        "tr": "çok",
        "analysis": ", adv.,",
        "notes": ", adv.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "scriptor, - oris",
        "tr": "yazıcı",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Mores istius scriptoris erant nimis mali.",
        "tr": "Şu yazarın ahlakı çok kötüydü",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". nimis / nimium",
        "tr": "çok",
        "analysis": ", adv.,",
        "notes": ", adv.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Valebitne pax in patria nostra post hanc victoriam? Dum illi ibi remanent, alii nihil agunt, alii discunt.",
        "tr": "Bu zaferden sonra vatanımızda barış hüküm sürecek mi? Onlar orada kalırken, kimileri hiçbir şey yapmıyor, kimileri ise öğreniyor.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Valebitne pax in patria nostra post hanc victoriam? Bu zaferden sonra",
        "tr": "vatanımızda barış güçlenecek",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "mi? Dum illi ibi remanent, alii nihil agunt, alii discunt. Onlar orada",
        "tr": "kalıyorlarken",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "alius sıfatının Tekil Genetivus hali yerine alterius kullanıldığını unutmayınız."
  },
  {
    "id": "T2_W3_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 3,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 3. Hafta (1. Ders)",
    "title": "FİİLLERİN GEÇMİŞ ZAMANI (PERFECTUM INDICATIVUS ACTIVI)",
    "subtitle": "Perfectum Gövdesi Bulma, Şahıs Ekleri (-ī, -istī, -it...) ve Beş Çekim Grubunun Model Tabloları",
    "summary": "Bu fasikülde eylemin geçmişte tamamlandığını bildiren Perfectum zamanını (Di'li Geçmiş Zaman), 3. sözlük biçiminden Perfectum gövdesini bulmayı, evrensel Perfectum şahıs eklerini (-ī, -istī, -it, -imus, -istis, -ērunt) ve 5 çekim grubunun model tablolarını göreceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 3.1.pdf",
    "slideCount": 26,
    "topics": ["Perfectum Zamanı", "Perfectum Gövdesi Bulma", "Evrensel Perfectum Ekleri", "1. Grup: amāvī", "2. Grup: monuī", "3. Grup: lēgī", "4. Grup: audīvī", "5. Grup: cēpī", "Karşılaştırma Tablosu"],
    "vocab": ["amo", "moneo", "lego", "audio", "capio", "amavi", "monui", "legi", "audivi", "cepi", "invenio", "facio", "scribo", "mitto", "ubi", "nunc", "possum", "haec", "in", "ad", "cum", "agricola", "heri", "propter", "ego", "hoc", "quid", "tu", "facies", "cras"],
    "sections": [
      {
        "title": "1. Perfectum Zamanının Yapılışı ve Evrensel Şahıs Ekleri",
        "html": "<p><strong>Gövde Bulma (Slayt 14):</strong> Fiillerin sözlükteki 3. biçiminden sondaki <strong>-ī</strong> eki atılarak Perfectum gövdesi bulunur:<br>\n• <span class=\"lat-word\">amō, amāre, amāvī</span> &gt; gövde: <strong>amāv-</strong><br>\n• <span class=\"lat-word\">moneō, monēre, monuī</span> &gt; gövde: <strong>monu-</strong><br>\n• <span class=\"lat-word\">legō, legere, lēgī</span> &gt; gövde: <strong>lēg-</strong><br>\n• <span class=\"lat-word\">audiō, audīre, audīvī</span> &gt; gövde: <strong>audīv-</strong><br>\n• <span class=\"lat-word\">capiō, capere, cēpī</span> &gt; gövde: <strong>cēp-</strong></p>\n<p><strong>Evrensel Perfectum Şahıs Ekleri:</strong><br>\nTekil: 1. Sg: <strong>-ī</strong> | 2. Sg: <strong>-istī</strong> | 3. Sg: <strong>-it</strong><br>\nÇoğul: 1. Pl: <strong>-imus</strong> | 2. Pl: <strong>-istis</strong> | 3. Pl: <strong>-ērunt (veya -ēre)</strong></p>",
        "calloutType": "rule",
        "calloutTitle": "Evrensel Kural",
        "calloutText": "İstisnasız BÜTÜN Latince fiiller (düzensiz esse ve posse dahil!) Perfectum zamanında bu şahıs eklerini alırlar.",
        "tableHtml": ""
      },
      {
        "title": "2. Beş Çekim Grubunda Perfectum Indicativus Activi Tabloları",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 16-20 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">amāvī (1. Grup Perfectum) — Perfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(amo, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">amāv-ī</td>\n        <td class=\"case-cell-tr\">sevdim / sevmişim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amāv-istī</td>\n        <td class=\"case-cell-tr\">sevdin / sevmişsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">amāv-it</td>\n        <td class=\"case-cell-tr\">sevdi / sevmiş</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amāv-imus</td>\n        <td class=\"case-cell-tr\">sevdik / sevmişiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amāv-istis</td>\n        <td class=\"case-cell-tr\">sevdiniz / sevmişsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">amāv-ērunt</td>\n        <td class=\"case-cell-tr\">sevdiler / sevmişler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">monuī (2. Grup Perfectum) — Perfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(moneo, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">monu-ī</td>\n        <td class=\"case-cell-tr\">uyardım / uyarmışım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monu-istī</td>\n        <td class=\"case-cell-tr\">uyardın / uyarmışsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monu-it</td>\n        <td class=\"case-cell-tr\">uyardı / uyarmış</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monu-imus</td>\n        <td class=\"case-cell-tr\">uyardık / uyarmışız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monu-istis</td>\n        <td class=\"case-cell-tr\">uyardınız / uyarmışsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monu-ērunt</td>\n        <td class=\"case-cell-tr\">uyardılar / uyarmışlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">lēgī (3. Grup Perfectum) — Perfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(lego, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">lēg-ī</td>\n        <td class=\"case-cell-tr\">okudum / okumuşum</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">lēg-istī</td>\n        <td class=\"case-cell-tr\">okudun / okumuşsun</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">lēg-it</td>\n        <td class=\"case-cell-tr\">okudu / okumuş</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">lēg-imus</td>\n        <td class=\"case-cell-tr\">okuduk / okumuşuz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">lēg-istis</td>\n        <td class=\"case-cell-tr\">okudunuz / okumuşsunuz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">lēg-ērunt</td>\n        <td class=\"case-cell-tr\">okudular / okumuşlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audīvī (4. Grup Perfectum) — Perfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(audio, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audīv-ī</td>\n        <td class=\"case-cell-tr\">işittim / işitmişim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audīv-istī</td>\n        <td class=\"case-cell-tr\">işittin / işitmişsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audīv-it</td>\n        <td class=\"case-cell-tr\">işitti / işitmiş</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audīv-imus</td>\n        <td class=\"case-cell-tr\">işittik / işitmişiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audīv-istis</td>\n        <td class=\"case-cell-tr\">işittiniz / işitmişsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audīv-ērunt</td>\n        <td class=\"case-cell-tr\">işittiler / işitmişler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">cēpī (5. Grup Perfectum) — Perfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(capio, capere — almak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">cēp-ī</td>\n        <td class=\"case-cell-tr\">aldım / almışım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">cēp-istī</td>\n        <td class=\"case-cell-tr\">aldın / almışsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">cēp-it</td>\n        <td class=\"case-cell-tr\">aldı / almış</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">cēp-imus</td>\n        <td class=\"case-cell-tr\">aldık / almışız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">cēp-istis</td>\n        <td class=\"case-cell-tr\">aldınız / almışsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">cēp-ērunt</td>\n        <td class=\"case-cell-tr\">aldılar / almışlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Beş Çekim Grubunun Perfectum Karşılaştırması (Slayt 21)</strong>\n    <span class=\"table-sub\">(Slayt 21)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Gr. amāvī</th>\n        <th>2. Gr. monuī</th>\n        <th>3. Gr. lēgī</th>\n        <th>4. Gr. audīvī</th>\n        <th>5. Gr. cēpī</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-ī</td>\n        <td class=\"case-cell-latin\">monu-ī</td>\n        <td class=\"case-cell-latin\">lēg-ī</td>\n        <td class=\"case-cell-latin\">audīv-ī</td>\n        <td class=\"case-cell-latin\">cēp-ī</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-istī</td>\n        <td class=\"case-cell-latin\">monu-istī</td>\n        <td class=\"case-cell-latin\">lēg-istī</td>\n        <td class=\"case-cell-latin\">audīv-istī</td>\n        <td class=\"case-cell-latin\">cēp-istī</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-it</td>\n        <td class=\"case-cell-latin\">monu-it</td>\n        <td class=\"case-cell-latin\">lēg-it</td>\n        <td class=\"case-cell-latin\">audīv-it</td>\n        <td class=\"case-cell-latin\">cēp-it</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-imus</td>\n        <td class=\"case-cell-latin\">monu-imus</td>\n        <td class=\"case-cell-latin\">lēg-imus</td>\n        <td class=\"case-cell-latin\">audīv-imus</td>\n        <td class=\"case-cell-latin\">cēp-imus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-istis</td>\n        <td class=\"case-cell-latin\">monu-istis</td>\n        <td class=\"case-cell-latin\">lēg-istis</td>\n        <td class=\"case-cell-latin\">audīv-istis</td>\n        <td class=\"case-cell-latin\">cēp-istis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-ērunt</td>\n        <td class=\"case-cell-latin\">monu-ērunt</td>\n        <td class=\"case-cell-latin\">lēg-ērunt</td>\n        <td class=\"case-cell-latin\">audīv-ērunt</td>\n        <td class=\"case-cell-latin\">cēp-ērunt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Ubi illas nunc videre possum? Hic illam virginem in matrimonium ducet. matrimonium, - evlilik in matrimonium ducere,",
        "tr": "Onları şimdi nerede görebilirim? (Terentius) Bu adam o genç kızla evlenecektir. (Terentius)",
        "analysis": "ii, n.,",
        "notes": "ii, n.,",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "Ubi illas nunc videre possum?",
        "tr": "Onları şimdi nerede görebilirim? (Terentius) Bu adam o genç kızla evlenecektir. (Terentius)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "? Hic illam virginem in matrimonium ducet. Bu",
        "tr": "adam",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "Eum ad eam cum alio agricola heri mittebant. Propter amicitiam ego hoc facio. Quid tu facies, mi amice? Vosne easdem litteras ad eum mittere cras audebitis?",
        "tr": "Onu dün başka bir çiftçiyle birlikte kadına gönderiyorlardı. Dostluk yüzünden ben bunu yapıyorum. Sen ne yapacaksın ey dostum? Siz yarın ona aynı mektubu göndermeye cesaret edebilecek misiniz?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Eum ad eam cum alio agricola heri mittebant.",
        "tr": "Onu dün başka bir çiftçiyle birlikte kadına gönderiyorlardı. Dostluk yüzünden ben bunu yapıyorum. Sen ne yapacaksın ey dostum? Siz yarın ona aynı mektubu göndermeye cesaret edebilecek misiniz?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ") ona (o",
        "tr": "kśųınś",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "? Propter amicitiam ego hoc facio. Quid tu facies, mi amice? Dostluk",
        "tr": "yüzünden",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", ey dostum? Vosne easdem litteras ad eum mittere cras audebitis?",
        "tr": "Aynı mŷktuplśrı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "ona (o adama )",
        "tr": "yśrın",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "siz mi",
        "tr": "göndermeye cüret",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "Perfectum ekleri (-ī, -istī, -it, -imus, -istis, -ērunt) bütün Latince fiiller için tektir; gövdeyi bulup bu ekleri eklemeniz yeterlidir."
  },
  {
    "id": "T2_W3_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 3,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 3. Hafta (2. Ders)",
    "title": "BİTMİŞ ZAMANLAR: PLUSQUAMPERFECTUM VE FUTURUM EXACTUM",
    "subtitle": "Geçmişin Hikâyesi (-eram) ve Gelecekte Bitmiş Zaman (-ero); Düzensiz sum ve possum Çekimleri",
    "summary": "Bu fasikülde Perfectum gövdesi üzerine kurulan Plusquamperfectum (-eram, -eras...) ve Futurum Exactum (-ero, -eris...) zamanlarını, 5 çekim grubundaki çekimlerini, düzensiz sum (fueram, fuero) ve possum (potueram, potuero) paradigmalarını göreceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 3.2.pdf",
    "slideCount": 40,
    "topics": ["Plusquamperfectum Activi (-eram)", "Futurum Exactum Activi (-ero)", "Beş Grubun Plusquamperfectum Çekimi", "Beş Grubun Futurum Exactum Çekimi", "sum Fiili (fueram, fuero)", "possum Fiili (potueram, potuero)"],
    "vocab": ["amāveram", "monueram", "lēgeram", "audīveram", "cēperam", "amāverō", "monuerō", "lēgerō", "audīverō", "cēperō", "fueram", "fuero", "potueram", "potuero", "solus", "do", "poena", "sed", "periculum", "semper", "enim", "de", "et", "orbis", "nullus", "locus", "in", "terra", "non", "solum", "hoc", "iste", "magister", "etiam", "ratio"],
    "sections": [
      {
        "title": "1. Plusquamperfectum Indicativus Activi (-mişti / -diydi)",
        "html": "<p><strong>Kural (Slayt 3-10):</strong> Perfectum Gövdesi + <strong>-eram, -erās, -erat, -erāmus, -erātis, -erant</strong> (yani <em>esse</em> fiilinin Imperfectum çekimi):</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">amāveram (1. Grup Plusquamperfectum) — Plusquamperfectum Indicativus Activi</strong>\n    <span class=\"table-sub\">(amo, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">amāv-eram</td>\n        <td class=\"case-cell-tr\">sevmiştim / sevdiydim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erās</td>\n        <td class=\"case-cell-tr\">sevmiştin / sevdiydin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erat</td>\n        <td class=\"case-cell-tr\">sevmişti / sevdiydi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erāmus</td>\n        <td class=\"case-cell-tr\">sevmiştik / sevdiydik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erātis</td>\n        <td class=\"case-cell-tr\">sevmiştiniz / sevdiydiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erant</td>\n        <td class=\"case-cell-tr\">sevmişlerdi / sevdiydiler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Beş Çekim Grubunun Plusquamperfectum Karşılaştırması (Slayt 10)</strong>\n    <span class=\"table-sub\">(Slayt 10)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Gr. amāveram</th>\n        <th>2. Gr. monueram</th>\n        <th>3. Gr. lēgeram</th>\n        <th>4. Gr. audīveram</th>\n        <th>5. Gr. cēperam</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-eram</td>\n        <td class=\"case-cell-latin\">monu-eram</td>\n        <td class=\"case-cell-latin\">lēg-eram</td>\n        <td class=\"case-cell-latin\">audīv-eram</td>\n        <td class=\"case-cell-latin\">cēp-eram</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erās</td>\n        <td class=\"case-cell-latin\">monu-erās</td>\n        <td class=\"case-cell-latin\">lēg-erās</td>\n        <td class=\"case-cell-latin\">audīv-erās</td>\n        <td class=\"case-cell-latin\">cēp-erās</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erat</td>\n        <td class=\"case-cell-latin\">monu-erat</td>\n        <td class=\"case-cell-latin\">lēg-erat</td>\n        <td class=\"case-cell-latin\">audīv-erat</td>\n        <td class=\"case-cell-latin\">cēp-erat</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erāmus</td>\n        <td class=\"case-cell-latin\">monu-erāmus</td>\n        <td class=\"case-cell-latin\">lēg-erāmus</td>\n        <td class=\"case-cell-latin\">audīv-erāmus</td>\n        <td class=\"case-cell-latin\">cēp-erāmus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erātis</td>\n        <td class=\"case-cell-latin\">monu-erātis</td>\n        <td class=\"case-cell-latin\">lēg-erātis</td>\n        <td class=\"case-cell-latin\">audīv-erātis</td>\n        <td class=\"case-cell-latin\">cēp-erātis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erant</td>\n        <td class=\"case-cell-latin\">monu-erant</td>\n        <td class=\"case-cell-latin\">lēg-erant</td>\n        <td class=\"case-cell-latin\">audīv-erant</td>\n        <td class=\"case-cell-latin\">cēp-erant</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Futurum Exactum Indicativus Activi (-miş olacağım)",
        "html": "<p><strong>Kural (Slayt 16-23):</strong> Perfectum Gövdesi + <strong>-erō, -eris, -erit, -erimus, -eritis, -erint</strong> (3. çoğul şahısta <em>-erint</em> olduğuna dikkat ediniz):</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">amāverō (1. Grup Futurum Exactum) — Futurum Exactum Activi</strong>\n    <span class=\"table-sub\">(amo, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erō</td>\n        <td class=\"case-cell-tr\">sevmiş olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amāv-eris</td>\n        <td class=\"case-cell-tr\">sevmiş olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erit</td>\n        <td class=\"case-cell-tr\">sevmiş olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erimus</td>\n        <td class=\"case-cell-tr\">sevmiş olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amāv-eritis</td>\n        <td class=\"case-cell-tr\">sevmiş olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">amāv-erint</td>\n        <td class=\"case-cell-tr\">sevmiş olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Beş Çekim Grubunun Futurum Exactum Karşılaştırması (Slayt 22)</strong>\n    <span class=\"table-sub\">(Slayt 22)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Gr. amāverō</th>\n        <th>2. Gr. monuerō</th>\n        <th>3. Gr. lēgerō</th>\n        <th>4. Gr. audīverō</th>\n        <th>5. Gr. cēperō</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erō</td>\n        <td class=\"case-cell-latin\">monu-erō</td>\n        <td class=\"case-cell-latin\">lēg-erō</td>\n        <td class=\"case-cell-latin\">audīv-erō</td>\n        <td class=\"case-cell-latin\">cēp-erō</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-eris</td>\n        <td class=\"case-cell-latin\">monu-eris</td>\n        <td class=\"case-cell-latin\">lēg-eris</td>\n        <td class=\"case-cell-latin\">audīv-eris</td>\n        <td class=\"case-cell-latin\">cēp-eris</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erit</td>\n        <td class=\"case-cell-latin\">monu-erit</td>\n        <td class=\"case-cell-latin\">lēg-erit</td>\n        <td class=\"case-cell-latin\">audīv-erit</td>\n        <td class=\"case-cell-latin\">cēp-erit</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erimus</td>\n        <td class=\"case-cell-latin\">monu-erimus</td>\n        <td class=\"case-cell-latin\">lēg-erimus</td>\n        <td class=\"case-cell-latin\">audīv-erimus</td>\n        <td class=\"case-cell-latin\">cēp-erimus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-eritis</td>\n        <td class=\"case-cell-latin\">monu-eritis</td>\n        <td class=\"case-cell-latin\">lēg-eritis</td>\n        <td class=\"case-cell-latin\">audīv-eritis</td>\n        <td class=\"case-cell-latin\">cēp-eritis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amāv-erint</td>\n        <td class=\"case-cell-latin\">monu-erint</td>\n        <td class=\"case-cell-latin\">lēg-erint</td>\n        <td class=\"case-cell-latin\">audīv-erint</td>\n        <td class=\"case-cell-latin\">cēp-erint</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Düzensiz Fiiller: sum ve possum Bitmiş Zaman Çekimleri",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 29-34 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">fueram (sum - Plusquamperfectum) — Plusquamperfectum Activi</strong>\n    <span class=\"table-sub\">(sum, esse — olmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">fu-eram</td>\n        <td class=\"case-cell-tr\">olmuştum / idiydim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">fu-erās</td>\n        <td class=\"case-cell-tr\">olmuştun / idiydin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">fu-erat</td>\n        <td class=\"case-cell-tr\">olmuştu / idiydi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">fu-erāmus</td>\n        <td class=\"case-cell-tr\">olmuştuk / idiydik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">fu-erātis</td>\n        <td class=\"case-cell-tr\">olmuştunuz / idiydiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">fu-erant</td>\n        <td class=\"case-cell-tr\">olmuşlardı / idiydiler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">fuero (sum - Futurum Exactum) — Futurum Exactum Activi</strong>\n    <span class=\"table-sub\">(sum, esse — olmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">fu-erō</td>\n        <td class=\"case-cell-tr\">olmuş olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">fu-eris</td>\n        <td class=\"case-cell-tr\">olmuş olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">fu-erit</td>\n        <td class=\"case-cell-tr\">olmuş olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">fu-erimus</td>\n        <td class=\"case-cell-tr\">olmuş olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">fu-eritis</td>\n        <td class=\"case-cell-tr\">olmuş olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">fu-erint</td>\n        <td class=\"case-cell-tr\">olmuş olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">potueram (possum - Plusquamperfectum) — Plusquamperfectum Activi</strong>\n    <span class=\"table-sub\">(possum, posse — -ebilmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">potu-eram</td>\n        <td class=\"case-cell-tr\">-ebilmiştim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">potu-erās</td>\n        <td class=\"case-cell-tr\">-ebilmiştin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">potu-erat</td>\n        <td class=\"case-cell-tr\">-ebilmişti</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">potu-erāmus</td>\n        <td class=\"case-cell-tr\">-ebilmiştik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">potu-erātis</td>\n        <td class=\"case-cell-tr\">-ebilmiştiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">potu-erant</td>\n        <td class=\"case-cell-tr\">-ebilmişlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">potuero (possum - Futurum Exactum) — Futurum Exactum Activi</strong>\n    <span class=\"table-sub\">(possum, posse — -ebilmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">potu-erō</td>\n        <td class=\"case-cell-tr\">-ebilmiş olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">potu-eris</td>\n        <td class=\"case-cell-tr\">-ebilmiş olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">potu-erit</td>\n        <td class=\"case-cell-tr\">-ebilmiş olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">potu-erimus</td>\n        <td class=\"case-cell-tr\">-ebilmiş olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">potu-eritis</td>\n        <td class=\"case-cell-tr\">-ebilmiş olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">potu-erint</td>\n        <td class=\"case-cell-tr\">-ebilmiş olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Solus hunc iuvare potes. Huic consilio palmam do. palma, -",
        "tr": "avuç",
        "analysis": "ae, f.,",
        "notes": "ae, f.,",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": ", aya; hurma",
        "tr": "ağacı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "; hurma",
        "tr": "dalından çelenk",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "palmam zafer",
        "tr": "çelengi vermek",
        "analysis": "dare:",
        "notes": "dare:",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Solus hunc iuvare potes. YųlnǗz sen (=",
        "tr": "bir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "tek sen ) buna ( bu adama ) yųrƋǗm edebilirsin Huic consilio palmam do. Bu",
        "tr": "ƋüşünƁƏyƏ",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "Poena istius unius hunc morbum civitatis relevabit, sed periculum semper remanebit. Hi enim de exitio huius civitatis et totius orbis terrarum cogitant. relevo, relevare, relevavi",
        "tr": "yükseltmek",
        "analysis": ", v.,",
        "notes": ", v.,",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": ", orbis, orbis",
        "tr": "çember",
        "analysis": ", m.,",
        "notes": ", m.,",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", daire, halka, disk orbis terrarum",
        "tr": "dünya",
        "analysis": ":",
        "notes": ":",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Poena istius unius hunc morbum civitatis relevabit, sed periculum semper remanebit.",
        "tr": "Bir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "ƁƏzųsǗ devletin bu ǋųstųlǗǃǗnǗ hafifletecek",
        "tr": ", ama tehlike",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Hi enim de exitio huius civitatis et totius orbis terrarum cogitant. Bunlar bu devletin",
        "tr": "ve tüm ƋünyųnǗn yǗkǗlǗşǗ",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "Est nullus locus utri homini in hac terra. ( Martialis ) Non solum eventus hoc docet, - iste est magister stultorum! – sed etiam ratio. non solum... sed etiam",
        "tr": "yalnızca",
        "analysis": ":",
        "notes": ":",
        "direction": "lat_to_tr",
        "author": "Livius"
      },
      {
        "latin": "zamanda eventus herhangi",
        "tr": "bir",
        "analysis": ":",
        "notes": ":",
        "direction": "lat_to_tr"
      },
      {
        "latin": "eylemin sonucu,",
        "tr": "akıbet",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Est nullus locus utri homini in hac terra. ( Martialis )",
        "tr": "İkǎ",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "insandan birinin bu",
        "tr": "ülkede hiçbir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Non solum eventus hoc docet, - iste est magister stultorum! – sed etiam ratio. YųlnǗzƁų ųkǗƀƏt",
        "tr": "öǃrƏtmƏz",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Livius"
      },
      {
        "latin": "! - ųynǗ zamanda ųkǗl",
        "tr": "da öǃrƏtǎr",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "Futurum Exactum 3. çoğul şahsının -erint olduğuna dikkat ediniz; Futurum I'deki erunt ile karışmamalıdır."
  },
  {
    "id": "T2_W4_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 4,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 4. Hafta (1. Ders)",
    "title": "DÖNÜŞLÜ ZAMİRLER VE PEKİŞTİRME ZAMİRİ: IPSE, IPSA, IPSUM",
    "subtitle": "sui, sibi, se, se; suus, sua, suum (Kendi); ipse (Bizzat Kendisi) ve idem (Aynı)",
    "summary": "Bu fasikülde özneye dönük eylemleri anlatan Dönüşlü Zamirleri (meī, tuī, suī), dönüşlü mülkiyet sıfatını (suus, sua, suum), pekiştirme zamirini (ipse, ipsa, ipsum) ve belirleme zamirini (īdem, eadem, idem) tüm tablolarıyla göreceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 4.1.pdf",
    "slideCount": 24,
    "topics": ["Dönüşlü Zamirler (Reflexiva)", "3. Şahıs Dönüşlüsü: suī, sibi, sē, sē", "Dönüşlü Sıfat: suus, sua, suum", "Pekiştirme Zamiri: ipse, ipsa, ipsum", "Belirleme Zamiri: īdem, eadem, idem"],
    "vocab": ["sui", "sibi", "se", "suus", "sua", "suum", "ipse", "ipsa", "ipsum", "idem", "eadem", "iungo", "alo", "animus", "de", "ad", "forum", "volo", "semper", "heri", "vos", "tum", "non", "autem", "nos", "cum", "eius", "propter", "saepe"],
    "sections": [
      {
        "title": "1. Dönüşlü Şahıs Zamirleri (Pronomina Reflexiva)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 3, 4, 7, 10 tabloları:</p>\n<p>Dönüşlü zamir cümlenin öznesini gösterdiği için <strong>Nominativus (Yalın) hali bulunmaz!</strong></p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Dönüşlü Şahıs Zamirleri Tablosu</strong>\n    <span class=\"table-sub\">(Slayt 10)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus</th>\n        <th>1. Şahıs (Kendim)</th>\n        <th>2. Şahıs (Kendin)</th>\n        <th>3. Şahıs (Kendi / Kendisi)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">meī (kendimin)</td>\n        <td class=\"case-cell-latin\">tuī (kendinin)</td>\n        <td class=\"case-cell-latin\">suī (kendisinin)</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">mihi (kendime)</td>\n        <td class=\"case-cell-latin\">tibi (kendine)</td>\n        <td class=\"case-cell-latin\">sibi (kendisine)</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">mē (kendimi)</td>\n        <td class=\"case-cell-latin\">tē (kendini)</td>\n        <td class=\"case-cell-latin\">sē / sēsē (kendisini)</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">mē (kendimle)</td>\n        <td class=\"case-cell-latin\">tē (kendinle)</td>\n        <td class=\"case-cell-latin\">sē / sēsē (kendisiyle)</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> 3. şahıs dönüşlü zamiri tekil ve çoğul özneler için ORTAKTIR: Consules se iungebant (Konsüller kendilerini birleştiriyorlardı).</div>\n</div>\n"
      },
      {
        "title": "2. Pekiştirme Zamiri: ipse, ipsa, ipsum (Bizzat Kendisi)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 19 tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ipse, ipsa, ipsum (Bizzat Kendisi) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 19)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ipse</td>\n        <td class=\"case-cell-latin\">ipsa</td>\n        <td class=\"case-cell-latin\">ipsum</td>\n        <td class=\"case-cell-tr\">bizzat kendisi</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey bizzat kendisi</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">ipsīus</td>\n        <td class=\"case-cell-latin\">ipsīus</td>\n        <td class=\"case-cell-latin\">ipsīus</td>\n        <td class=\"case-cell-tr\">bizzat kendisinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">ipsī</td>\n        <td class=\"case-cell-latin\">ipsī</td>\n        <td class=\"case-cell-latin\">ipsī</td>\n        <td class=\"case-cell-tr\">bizzat kendisine</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">ipsum</td>\n        <td class=\"case-cell-latin\">ipsam</td>\n        <td class=\"case-cell-latin\">ipsum</td>\n        <td class=\"case-cell-tr\">bizzat kendisini</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">ipsō</td>\n        <td class=\"case-cell-latin\">ipsā</td>\n        <td class=\"case-cell-latin\">ipsō</td>\n        <td class=\"case-cell-tr\">bizzat kendisiyle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ipsī, ipsae, ipsa (Bizzat Kendileri) (Pluralis)</strong>\n    <span class=\"table-sub\">(Slayt 19)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ipsī</td>\n        <td class=\"case-cell-latin\">ipsae</td>\n        <td class=\"case-cell-latin\">ipsa</td>\n        <td class=\"case-cell-tr\">bizzat kendileri</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey bizzat kendileri</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">ipsōrum</td>\n        <td class=\"case-cell-latin\">ipsārum</td>\n        <td class=\"case-cell-latin\">ipsōrum</td>\n        <td class=\"case-cell-tr\">bizzat kendilerinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">ipsīs</td>\n        <td class=\"case-cell-latin\">ipsīs</td>\n        <td class=\"case-cell-latin\">ipsīs</td>\n        <td class=\"case-cell-tr\">bizzat kendilerine</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">ipsōs</td>\n        <td class=\"case-cell-latin\">ipsās</td>\n        <td class=\"case-cell-latin\">ipsa</td>\n        <td class=\"case-cell-tr\">bizzat kendilerini</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">ipsīs</td>\n        <td class=\"case-cell-latin\">ipsīs</td>\n        <td class=\"case-cell-latin\">ipsīs</td>\n        <td class=\"case-cell-tr\">bizzat kendileriyle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "de se cogitabat.",
        "tr": "Kadın kendisi hakkında düşünüyordu",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Viri de se cogitabant. Erkekler kendileri",
        "tr": "hakkında düşünüyorlardı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Venerunt mecum ad forum. Benimle birlikte forum’a",
        "tr": "geldiler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Volo vivere vobiscum. Sizinle birlikte",
        "tr": "yaşamak",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "istiyorum. Se semper laudaverant.",
        "tr": "Her zaman",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Cato heri se occidit. Cato",
        "tr": "dün",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Vos nobis de voluptatibus adulescentiae tum scripsistis. Siz",
        "tr": "o zaman bize gençliğin",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Rationes alterius filiae heri non fuerunt eaedem.",
        "tr": "Diğer kızın",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "( iki",
        "tr": "kızdan diğerinin",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "( erkek",
        "tr": "ya da kadın",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Illi autem ad nos cum medica eius nuper venerunt.",
        "tr": "Ancak",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "hekimiyle birlikte bize",
        "tr": "geldiler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Illi adulescentes ad nos propter amicitiam saepe veniebant. O",
        "tr": "gençler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "suus (kendi) ile eius (onun) farkına dikkat ediniz: Cicero filium suum amat (Cicero kendi oğlunu sever); Cicero filium eius amat (Cicero onun oğlunu sever)."
  },
  {
    "id": "T2_W4_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 4,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 4. Hafta (2. Ders)",
    "title": "3. GRUP SIFATLAR (ADIECTIVA DECLINATIO III)",
    "subtitle": "3 Bitimli (acer), 2 Bitimli (fortis) ve 1 Bitimli (ingens, felix) Sıfatların Çekimleri",
    "summary": "Bu fasikülde 3. grup isimlerin -i gövdeli ekleriyle çekimlenen 3. Grup Sıfatları, Tekil Nominativus sonlanışlarına göre 3 bitimli (ācer, ācris, ācre), 2 bitimli (fortis, forte) ve 1 bitimli (ingēns, fēlīx) kategorilerini ve tam çekim tablolarını göreceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 4.2.pdf",
    "slideCount": 19,
    "topics": ["3. Grup Sıfatlar", "3 Bitimli Sıfatlar (acer, acris, acre)", "2 Bitimli Sıfatlar (fortis, forte)", "1 Bitimli Sıfatlar (ingens, felix)", "Tekil Ablativus (-i) Kuralı", "Çoğul Nötr (-ia) ve Çoğul Gen. (-ium)"],
    "vocab": ["acer", "acris", "acre", "fortis", "forte", "ingens", "felix", "omnis", "gravis", "brevis", "difficilis", "facilis"],
    "sections": [
      {
        "title": "1. 3 Bitimli Sıfatlar: ācer, ācris, ācre (keskin, şiddetli)",
        "html": "<p><strong>Kural (Slayt 6-10):</strong> Eril, Dişil ve Nötr için tekil Nominativus'ta 3 ayrı biçim bulunur. Tekil Ablativus daima <strong>-ī</strong>, Çoğul Nötr daima <strong>-ia</strong>, Çoğul Genetivus daima <strong>-ium</strong> ile biter:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ācer, ācris, ācre (keskin, şiddetli) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 10)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ācer</td>\n        <td class=\"case-cell-latin\">ācris</td>\n        <td class=\"case-cell-latin\">ācre</td>\n        <td class=\"case-cell-tr\">keskin</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">ācer</td>\n        <td class=\"case-cell-latin\">ācris</td>\n        <td class=\"case-cell-latin\">ācre</td>\n        <td class=\"case-cell-tr\">Ey keskin</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">ācris</td>\n        <td class=\"case-cell-latin\">ācris</td>\n        <td class=\"case-cell-latin\">ācris</td>\n        <td class=\"case-cell-tr\">keskinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">ācrī</td>\n        <td class=\"case-cell-latin\">ācrī</td>\n        <td class=\"case-cell-latin\">ācrī</td>\n        <td class=\"case-cell-tr\">keskine</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">ācrem</td>\n        <td class=\"case-cell-latin\">ācrem</td>\n        <td class=\"case-cell-latin\">ācre</td>\n        <td class=\"case-cell-tr\">keskini</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">ācrī</td>\n        <td class=\"case-cell-latin\">ācrī</td>\n        <td class=\"case-cell-latin\">ācrī</td>\n        <td class=\"case-cell-tr\">keskinle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. 2 Bitimli Sıfatlar: fortis, forte (cesur, güçlü)",
        "html": "<p><strong>Kural (Slayt 11-12):</strong> Eril ve Dişil için ortak tekil Nom: <em>fortis</em>; Nötr için tekil Nom: <em>forte</em>:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">fortis, forte (cesur, güçlü) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 12)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">fortis</td>\n        <td class=\"case-cell-latin\">fortis</td>\n        <td class=\"case-cell-latin\">forte</td>\n        <td class=\"case-cell-tr\">cesur</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">fortis</td>\n        <td class=\"case-cell-latin\">fortis</td>\n        <td class=\"case-cell-latin\">forte</td>\n        <td class=\"case-cell-tr\">Ey cesur</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">fortis</td>\n        <td class=\"case-cell-latin\">fortis</td>\n        <td class=\"case-cell-latin\">fortis</td>\n        <td class=\"case-cell-tr\">cesurun</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">fortī</td>\n        <td class=\"case-cell-latin\">fortī</td>\n        <td class=\"case-cell-latin\">fortī</td>\n        <td class=\"case-cell-tr\">cesura</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">fortem</td>\n        <td class=\"case-cell-latin\">fortem</td>\n        <td class=\"case-cell-latin\">forte</td>\n        <td class=\"case-cell-tr\">cesuru</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">fortī</td>\n        <td class=\"case-cell-latin\">fortī</td>\n        <td class=\"case-cell-latin\">fortī</td>\n        <td class=\"case-cell-tr\">cesurla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">fortēs, fortia (cesurlar) (Pluralis)</strong>\n    <span class=\"table-sub\">(Slayt 12)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">fortēs</td>\n        <td class=\"case-cell-latin\">fortēs</td>\n        <td class=\"case-cell-latin\">fortia</td>\n        <td class=\"case-cell-tr\">cesurlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">fortēs</td>\n        <td class=\"case-cell-latin\">fortēs</td>\n        <td class=\"case-cell-latin\">fortia</td>\n        <td class=\"case-cell-tr\">Ey cesurlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">fortium</td>\n        <td class=\"case-cell-latin\">fortium</td>\n        <td class=\"case-cell-latin\">fortium</td>\n        <td class=\"case-cell-tr\">cesurların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">fortibus</td>\n        <td class=\"case-cell-latin\">fortibus</td>\n        <td class=\"case-cell-latin\">fortibus</td>\n        <td class=\"case-cell-tr\">cesurlara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">fortēs</td>\n        <td class=\"case-cell-latin\">fortēs</td>\n        <td class=\"case-cell-latin\">fortia</td>\n        <td class=\"case-cell-tr\">cesurları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">fortibus</td>\n        <td class=\"case-cell-latin\">fortibus</td>\n        <td class=\"case-cell-latin\">fortibus</td>\n        <td class=\"case-cell-tr\">cesurlarla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. 1 Bitimli Sıfatlar: ingēns, ingentis (devasa, muazzam)",
        "html": "<p><strong>Kural (Slayt 13-15):</strong> Her üç cins için Tekil Nominativus ortaktır: <em>ingēns</em>. Gövde Tekil Genetivus'tan bulunur (ingent-):</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">ingēns, ingentis (devasa) (Singularis)</strong>\n    <span class=\"table-sub\">(Slayt 14)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">ingēns</td>\n        <td class=\"case-cell-latin\">ingēns</td>\n        <td class=\"case-cell-latin\">ingēns</td>\n        <td class=\"case-cell-tr\">devasa</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">ingēns</td>\n        <td class=\"case-cell-latin\">ingēns</td>\n        <td class=\"case-cell-latin\">ingēns</td>\n        <td class=\"case-cell-tr\">Ey devasa</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">ingentis</td>\n        <td class=\"case-cell-latin\">ingentis</td>\n        <td class=\"case-cell-latin\">ingentis</td>\n        <td class=\"case-cell-tr\">devasanın</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">ingentī</td>\n        <td class=\"case-cell-latin\">ingentī</td>\n        <td class=\"case-cell-latin\">ingentī</td>\n        <td class=\"case-cell-tr\">devasaya</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">ingentem</td>\n        <td class=\"case-cell-latin\">ingentem</td>\n        <td class=\"case-cell-latin\">ingēns</td>\n        <td class=\"case-cell-tr\">devasayı</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">ingentī</td>\n        <td class=\"case-cell-latin\">ingentī</td>\n        <td class=\"case-cell-latin\">ingentī</td>\n        <td class=\"case-cell-tr\">devasayla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "3. grup sıfatların Tekil Ablativus halinin isimlerden farklı olarak daima -i ile bittiğini unutmayınız: cive (isim) ama forti cive (sıfat tamlaması)."
  },
  {
    "id": "T2_W5_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 5,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 5. Hafta (1. Ders)",
    "title": "3. GRUP DÜZENSİZ SIFATLAR VE DERECELENDİRME (COMPARATIO)",
    "subtitle": "Sıfatlarda Üç Derece: Positivus, Comparativus (-ior, -ius) ve Superlativus (-issimus)",
    "summary": "Bu fasikülde 3. gruptaki düzensiz sıfatları, sıfatların derecelendirilmesini (üstünlük derecesi -ior / -ius ve en üstünlük derecesi -issimus, -a, -um) ve mukayese sentaksını (quam + aynı hal veya doğrudan Ablativus Comparationis) öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 5.1.pdf",
    "slideCount": 19,
    "topics": ["Sıfatlarda Derecelendirme", "Positivus (Yalın)", "Comparativus (-ior, -ius)", "Superlativus (-issimus, -illimus, -errimus)", "Ablativus Comparationis", "Düzensiz Derecelendirmeler (bonus > melior > optimus)"],
    "vocab": ["melior", "optimus", "peior", "pessimus", "maior", "maximus", "minor", "minimus", "plures", "plurimi", "in", "post", "sine", "femina", "dum", "bene", "via", "eius", "non", "nemo", "diu", "nam", "rex", "malus", "enim", "numquam", "et", "ante", "haec", "de", "ille", "alius", "alter", "graecus", "remedio", "solum", "sed", "etiam", "officium", "semper", "cum", "incipio"],
    "sections": [
      {
        "title": "1. Sıfatların Derecelendirilmesi ve Düzensiz Sıfatlar Tablosu",
        "html": "<p>Latincede sıfatlar 3 dereceye sahiptir:</p>\n<ol>\n  <li><strong>Gradus Positivus:</strong> Sıfatın yalın hali (bonus = iyi; fortis = cesur).</li>\n  <li><strong>Gradus Comparativus:</strong> Üstünlük derecesi ('daha ...'); gövdeye Eril/Dişil için <strong>-ior</strong>, Nötr için <strong>-ius</strong> eklenir: <em>fort-ior, fort-ius</em> (daha cesur). Çekimi 3. grup sessiz gövdeli isimler gibidir.</li>\n  <li><strong>Gradus Superlativus:</strong> En üstünlük derecesi ('en ... / pek çok ...'); gövdeye <strong>-issimus, -a, -um</strong> eklenir: <em>fort-issimus</em> (en cesur). 1. ve 2. sınıf sıfatlar gibi çekimlenir.</li>\n</ol>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Düzensiz Derecelendirilen Temel Sıfatlar Tablosu</strong>\n    <span class=\"table-sub\">(Slayt 2-3)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Positivus (Yalın)</th>\n        <th>Comparativus (Daha...)</th>\n        <th>Superlativus (En...)</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>bonus, -a, -um</strong></td>\n        <td class=\"case-cell-latin\">melior, melius</td>\n        <td class=\"case-cell-latin\">optimus, -a, -um</td>\n        <td class=\"case-cell-tr\">iyi / daha iyi / en iyi</td>\n      </tr>\n      <tr>\n        <td><strong>malus, -a, -um</strong></td>\n        <td class=\"case-cell-latin\">pēior, pēius</td>\n        <td class=\"case-cell-latin\">pessimus, -a, -um</td>\n        <td class=\"case-cell-tr\">kötü / daha kötü / en kötü</td>\n      </tr>\n      <tr>\n        <td><strong>magnus, -a, -um</strong></td>\n        <td class=\"case-cell-latin\">māior, māius</td>\n        <td class=\"case-cell-latin\">maximus, -a, -um</td>\n        <td class=\"case-cell-tr\">büyük / daha büyük / en büyük</td>\n      </tr>\n      <tr>\n        <td><strong>parvus, -a, -um</strong></td>\n        <td class=\"case-cell-latin\">minor, minus</td>\n        <td class=\"case-cell-latin\">minimus, -a, -um</td>\n        <td class=\"case-cell-tr\">küçük / daha küçük / en küçük</td>\n      </tr>\n      <tr>\n        <td><strong>multus, -a, -um</strong></td>\n        <td class=\"case-cell-latin\">plūs (plūrēs, plūra)</td>\n        <td class=\"case-cell-latin\">plūrimus, -a, -um</td>\n        <td class=\"case-cell-tr\">çok / daha çok / en çok</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Eundem timorem in isto consule sensimus.",
        "tr": "Aynı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "hissettik. Post paucas horas Caesar Asiam cepit.",
        "tr": "Birkaç",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "saat sonra Caesar",
        "tr": "Asya’yı zapetti",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Potuistisne bonam vitam sine ulla libertate agere? Herhangi",
        "tr": "bir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "olmadan iyi",
        "tr": "bir yaşam sürebildiniz",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "mi? Illa femina beata sola magnam cupiditatem pacis sensit.",
        "tr": "Bir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "tek o kutlu",
        "tr": "kadın barış için büyük bir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "arzu duydu. Vixit, dum vixit, bene.",
        "tr": "Yaşarken",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": ", sert, keskin;",
        "tr": "haşin",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "In hac via Cicero medicum eius vidit, non suum. Cicero bu yolda",
        "tr": "onun",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Nemo filiam acerbam consulis ipsius diu diligere potuit. Uzunca",
        "tr": "bir süre",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "kimse bizzat",
        "tr": "konsülün haşin kızını sevemedi",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ille bonam senectutem habuit, nam bene vixerat. O",
        "tr": "adam",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Rex malus enim me ipsum capere numquam potuit.",
        "tr": "Doğrusu kötü",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "kral bizzat beni asla eline",
        "tr": "geçiremedi",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Di animos creant et eos in corpora hominum e caelo mittunt.",
        "tr": "Tanrılar ruhları yaratırlar ve gökyüzünden insanların",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Fortes viri et feminae ante aetatem nostram vivebant. Cesur erkekler",
        "tr": "ve kadınlar bizim zamanımızdan önce yaşıyorlardı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Hic de senectute scribebat, ille de amore; et alius de libertate. Alter Graecus remedium huius morbi inveniet.",
        "tr": "Bu adam yaşlılık hakkında yazıyordu, şu adam aşk hakkında; bir başkası ise özgürlük hakkında. Diğer Yunanlı bu hastalığın devasını bulacaktır.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Hic de senectute scribebat, ille de amore; et alius de libertate. Bu (",
        "tr": "adam",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", o (",
        "tr": "Beni övmemelisin / Beni övmek zorunda değilsin.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Alter Graecus remedium huius morbi inveniet.",
        "tr": "Diğer Yunanlı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Carmina illius scriptoris sunt plena non solum veritatis sed etiam virtutis. Cupiditatem pecuniae gloriaeque fugite!",
        "tr": "Şu yazarın şiirleri sadece hakikatle değil, aynı zamanda erdemle de doludur. Para ve şöhret hırsından kaçınınız! (Cicero)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "Carmina illius scriptoris sunt plena non solum veritatis sed etiam virtutis. O",
        "tr": "yazarın şarkıları yalnızca",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "zamanda erdemle de",
        "tr": "doludur",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Cupiditatem pecuniae gloriaeque fugite! Para",
        "tr": "ve şöhret",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "Officium meum faciam.",
        "tr": "İşimi yapacağım",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": ". Semper magno cum timore incipio dicere.",
        "tr": "Her zaman büyük bir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      }
    ],
    "studyTips": "Karşılaştırma yapılırken 'quam' edatı kullanıldığında iki öge aynı halde olur: Amicam meam magis quam oculos meos amo."
  },
  {
    "id": "T2_W5_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 5,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 5. Hafta (2. Ders)",
    "title": "DERECELENDİRİLMİŞ SIFATLARLA CÜMLE ALIŞTIRMALARI",
    "subtitle": "Sentaks Uygulamaları, Klasik Karşılaştırma Cümleleri ve Metin Tahlilleri",
    "summary": "Bu fasikülde derecelendirilmiş sıfatların cümle içindeki kullanımlarını, edebi ve felsefi alıntıları ve sentaks çözümlemelerini inceleyeceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 5.2.pdf",
    "slideCount": 3,
    "topics": ["Comparativus Cümle Kuruluşu", "Superlativus Sentaksı", "Ablativus ile Mukayese", "Örnek Çözümlemeler"],
    "vocab": ["melior", "peior", "maior", "minor", "optimus", "pessimus", "sapientia"],
    "sections": [
      {
        "title": "1. Karşılaştırma Sentaksı Rehberi",
        "html": "<p>Latincede Comparativus iki şekilde bağlanır:</p>\n<ul>\n  <li><strong>1. quam Bağlacı ile:</strong> İki isim aynı halde bulunur: <em>Tū es fortior quam frāter tuus.</em> (Sen kardeşinden daha cesursun.)</li>\n  <li><strong>2. Ablatīvus Comparātiōnis ile:</strong> 'quam' kullanılmaz, kıyaslanan ikinci öge doğrudan Ablativus haline konur: <em>Tū es fortior frātre tuō.</em></li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "Ablativus comparationis yapısı yalnızca ilk öge Nominativus veya Accusativus halinde olduğunda tercih edilir."
  },
  {
    "id": "T2_W6_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 6,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 6. Hafta (1. Ders)",
    "title": "4. GRUP İSİMLER (DECLINATIO IV: -US, -ŪS VE -Ū, -ŪS)",
    "subtitle": "Eril/Dişil (portus, fructus, manus), Nötr (cornu, genu) ve İstisnalar (domus, Iesus)",
    "summary": "Bu fasikülde Tekil Genetivus hali uzun -ūs ile biten 4. Grup isimleri, eril/dişil model çekimlerini (portus, fructus, manus), cinssiz model çekimlerini (cornū, genū) ve hem 4. hem 2. çekime göre çekimlenen meşhur domus (ev) istisnasını göreceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 6.1.pdf",
    "slideCount": 18,
    "topics": ["4. Grup İsimler (Declinatio IV)", "Eril/Dişil İsimler (-us, -ūs)", "Cinssiz İsimler (-ū, -ūs)", "portus, fructus, manus Çekimleri", "cornu ve genu (Nötr)", "domus İstisnası (2. ve 4. Çekim Karması)", "Iesus Çekimi"],
    "vocab": ["portus", "fructus", "manus", "cornu", "genu", "domus", "Iesus", "senatus", "cursus", "exercitus", "metus", "spiritus"],
    "sections": [
      {
        "title": "1. 4. Grup İsimlerin Çekim Takıları Tablosu",
        "html": "<p><strong>Genel Kural (Slayt 5-7):</strong> Tekil Genetivus hali uzun <strong>–ūs</strong> ile biter. Eril ve dişillerin Tekil Nom. hali <em>-us</em>, cinssizlerin Tekil Nom. hali ise <em>-ū</em> ile biter:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">4. Grup İsimlerin Çekim Takıları (Slayt 7)</strong>\n    <span class=\"table-sub\">(Slayt 7)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum / Femininum (Tekil)</th>\n        <th>Masculinum / Femininum (Çoğul)</th>\n        <th>Neutrum (Tekil)</th>\n        <th>Neutrum (Çoğul)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom.</strong></td>\n        <td class=\"case-cell-latin\">-us</td>\n        <td class=\"case-cell-latin\">-ūs</td>\n        <td class=\"case-cell-latin\">-ū</td>\n        <td class=\"case-cell-latin\">-ua</td>\n      </tr>\n      <tr>\n        <td><strong>Voc.</strong></td>\n        <td class=\"case-cell-latin\">-us</td>\n        <td class=\"case-cell-latin\">-ūs</td>\n        <td class=\"case-cell-latin\">-ū</td>\n        <td class=\"case-cell-latin\">-ua</td>\n      </tr>\n      <tr>\n        <td><strong>Gen.</strong></td>\n        <td class=\"case-cell-latin\">-ūs</td>\n        <td class=\"case-cell-latin\">-uum</td>\n        <td class=\"case-cell-latin\">-ūs</td>\n        <td class=\"case-cell-latin\">-uum</td>\n      </tr>\n      <tr>\n        <td><strong>Dat.</strong></td>\n        <td class=\"case-cell-latin\">-uī / -ū</td>\n        <td class=\"case-cell-latin\">-ibus</td>\n        <td class=\"case-cell-latin\">-ū</td>\n        <td class=\"case-cell-latin\">-ibus</td>\n      </tr>\n      <tr>\n        <td><strong>Acc.</strong></td>\n        <td class=\"case-cell-latin\">-um</td>\n        <td class=\"case-cell-latin\">-ūs</td>\n        <td class=\"case-cell-latin\">-ū</td>\n        <td class=\"case-cell-latin\">-ua</td>\n      </tr>\n      <tr>\n        <td><strong>Abl.</strong></td>\n        <td class=\"case-cell-latin\">-ū</td>\n        <td class=\"case-cell-latin\">-ibus</td>\n        <td class=\"case-cell-latin\">-ū</td>\n        <td class=\"case-cell-latin\">-ibus</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. 4. Grup Model Çekimler: portus, fructus, manus, cornū, genū",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 8-12 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">portus, -ūs, m. (liman)</strong>\n    <span class=\"table-sub\">(portus, portūs, m. — liman)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">portus</td>\n        <td class=\"case-cell-latin\">portūs</td>\n        <td class=\"case-cell-tr\">liman / limanlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">portus</td>\n        <td class=\"case-cell-latin\">portūs</td>\n        <td class=\"case-cell-tr\">ey liman / ey limanlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">portūs</td>\n        <td class=\"case-cell-latin\">portuum</td>\n        <td class=\"case-cell-tr\">limanın / limanların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">portuī</td>\n        <td class=\"case-cell-latin\">portibus</td>\n        <td class=\"case-cell-tr\">limana / için / limanlara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">portum</td>\n        <td class=\"case-cell-latin\">portūs</td>\n        <td class=\"case-cell-tr\">limanı / limanları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">portū</td>\n        <td class=\"case-cell-latin\">portibus</td>\n        <td class=\"case-cell-tr\">limanla / limandan / limanlarla / limanlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">manus, -ūs, f. (el) [DİŞİL İSTİSNA]</strong>\n    <span class=\"table-sub\">(manus, manūs, f. — el)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">manus</td>\n        <td class=\"case-cell-latin\">manūs</td>\n        <td class=\"case-cell-tr\">el / eller</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">manus</td>\n        <td class=\"case-cell-latin\">manūs</td>\n        <td class=\"case-cell-tr\">ey el / ey eller</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">manūs</td>\n        <td class=\"case-cell-latin\">manuum</td>\n        <td class=\"case-cell-tr\">elin / ellerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">manuī</td>\n        <td class=\"case-cell-latin\">manibus</td>\n        <td class=\"case-cell-tr\">ele / için / ellere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">manum</td>\n        <td class=\"case-cell-latin\">manūs</td>\n        <td class=\"case-cell-tr\">eli / elleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">manū</td>\n        <td class=\"case-cell-latin\">manibus</td>\n        <td class=\"case-cell-tr\">elle / elden / ellerle / ellerden</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> 4. grupta olmasına rağmen DİŞİLDİR (f.).</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">cornū, -ūs, n. (boynuz)</strong>\n    <span class=\"table-sub\">(cornū, cornūs, n. — boynuz; ordu kanadı)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">cornū</td>\n        <td class=\"case-cell-latin\">cornua</td>\n        <td class=\"case-cell-tr\">boynuz / boynuzlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">cornū</td>\n        <td class=\"case-cell-latin\">cornua</td>\n        <td class=\"case-cell-tr\">ey boynuz / ey boynuzlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">cornūs</td>\n        <td class=\"case-cell-latin\">cornuum</td>\n        <td class=\"case-cell-tr\">boynuzun / boynuzların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">cornū</td>\n        <td class=\"case-cell-latin\">cornibus</td>\n        <td class=\"case-cell-tr\">boynuza / için / boynuzlara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">cornū</td>\n        <td class=\"case-cell-latin\">cornua</td>\n        <td class=\"case-cell-tr\">boynuzu / boynuzları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">cornū</td>\n        <td class=\"case-cell-latin\">cornibus</td>\n        <td class=\"case-cell-tr\">boynuzla / boynuzdan / boynuzlarla / boynuzlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. 4. Grup İstisnalar: domus (ev) ve Iēsus (İsa)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 16 ve 18 tabloları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">domus, -ūs, f. (ev) Karma Çekim Tablosu</strong>\n    <span class=\"table-sub\">(Slayt 16)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus</th>\n        <th>4. Grup Tekil</th>\n        <th>2. Grup Tekil</th>\n        <th>4. Grup Çoğul</th>\n        <th>2. Grup Çoğul</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom.</strong></td>\n        <td class=\"case-cell-latin\">domus</td>\n        <td class=\"case-cell-latin\">domus</td>\n        <td class=\"case-cell-latin\">domūs</td>\n        <td class=\"case-cell-latin\">domūs</td>\n        <td class=\"case-cell-tr\">ev / evler</td>\n      </tr>\n      <tr>\n        <td><strong>Voc.</strong></td>\n        <td class=\"case-cell-latin\">domus</td>\n        <td class=\"case-cell-latin\">domus</td>\n        <td class=\"case-cell-latin\">domūs</td>\n        <td class=\"case-cell-latin\">domūs</td>\n        <td class=\"case-cell-tr\">ey ev / ey evler</td>\n      </tr>\n      <tr>\n        <td><strong>Gen.</strong></td>\n        <td class=\"case-cell-latin\">domūs</td>\n        <td class=\"case-cell-latin\">domī (Loc: evde)</td>\n        <td class=\"case-cell-latin\">domuum</td>\n        <td class=\"case-cell-latin\">domōrum</td>\n        <td class=\"case-cell-tr\">evin / evlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dat.</strong></td>\n        <td class=\"case-cell-latin\">domuī</td>\n        <td class=\"case-cell-latin\">domō</td>\n        <td class=\"case-cell-latin\">domibus</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">eve / evlere</td>\n      </tr>\n      <tr>\n        <td><strong>Acc.</strong></td>\n        <td class=\"case-cell-latin\">domum (eve doğru)</td>\n        <td class=\"case-cell-latin\">domum</td>\n        <td class=\"case-cell-latin\">domūs</td>\n        <td class=\"case-cell-latin\">domōs</td>\n        <td class=\"case-cell-tr\">evi / evleri</td>\n      </tr>\n      <tr>\n        <td><strong>Abl.</strong></td>\n        <td class=\"case-cell-latin\">domū</td>\n        <td class=\"case-cell-latin\">domō (evden)</td>\n        <td class=\"case-cell-latin\">domibus</td>\n        <td class=\"case-cell-latin\">domibus</td>\n        <td class=\"case-cell-tr\">evle / evlerle</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> domus hem 4. grup hem de 2. grup eklerini karma olarak kullanır.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Iēsus, Iēsū, m. (İsa) Çekim Tablosu</strong>\n    <span class=\"table-sub\">(Slayt 18)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus</th>\n        <th>Singularis (Tekil)</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom.</strong></td>\n        <td class=\"case-cell-latin\">Iēsus</td>\n        <td class=\"case-cell-tr\">İsa</td>\n      </tr>\n      <tr>\n        <td><strong>Voc.</strong></td>\n        <td class=\"case-cell-latin\">Iēsū</td>\n        <td class=\"case-cell-tr\">ey İsa</td>\n      </tr>\n      <tr>\n        <td><strong>Gen.</strong></td>\n        <td class=\"case-cell-latin\">Iēsū</td>\n        <td class=\"case-cell-tr\">İsa'nın</td>\n      </tr>\n      <tr>\n        <td><strong>Dat.</strong></td>\n        <td class=\"case-cell-latin\">Iēsū</td>\n        <td class=\"case-cell-tr\">İsa'ya / için</td>\n      </tr>\n      <tr>\n        <td><strong>Acc.</strong></td>\n        <td class=\"case-cell-latin\">Iēsum</td>\n        <td class=\"case-cell-tr\">İsa'yı</td>\n      </tr>\n      <tr>\n        <td><strong>Abl.</strong></td>\n        <td class=\"case-cell-latin\">Iēsū</td>\n        <td class=\"case-cell-tr\">İsa'dan / İsa'yla</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "domus kelimesinin tekil Locativus hali domī (evde), tekil Accusativus hali ise edatsız yönelme bildiren domum (eve) kalıplarıdır."
  },
  {
    "id": "T2_W6_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 6,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 6. Hafta (2. Ders)",
    "title": "5. GRUP İSİMLER (DECLINATIO V: -ĒS, -ĒĪ / -EĪ)",
    "subtitle": "res, spes, fides, dies Çekimleri ve Latincede Beş İsmin Tam Sentezi",
    "summary": "Bu fasikülde Tekil Genetivus hali -ēī veya -eī ile biten 5. Grup isimleri (Declinatio V), tamamına yakını dişil olan bu grubun anahtar kelimelerini (rēs, spēs, fidēs, diēs) ve tüm çekim paradigmalarını göreceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 6.2.pdf",
    "slideCount": 20,
    "topics": ["5. Grup İsimler (Declinatio V)", "rēs, reī (şey, olay, durum)", "spēs, speī (umut)", "fidēs, fideī (inanç, sadakat)", "diēs, diēī (gün)", "Beş Çekim Grubunun Sentezi"],
    "vocab": ["res", "spes", "fides", "dies", "acies", "facies", "species", "respublica", "post", "et", "nemo", "sed", "quisque", "ante", "cum"],
    "sections": [
      {
        "title": "1. 5. Grup İsimlerin Çekim Kuralları ve Model Tablolar",
        "html": "<p><strong>Genel Kural (Slayt 2-3):</strong> Tekil Nominativus <em>-ēs</em>, Tekil Genetivus ise <em>-ēī</em> (sesliden sonra: di-ēī) veya <em>-eī</em> (sessizden sonra: r-eī, sp-eī, fid-eī) ile biter. <em>diēs</em> hariç tamamı dişildir:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">rēs, reī, f. (şey, olay, durum, madde)</strong>\n    <span class=\"table-sub\">(rēs, reī, f. — şey, olay, durum, konu)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">rēs</td>\n        <td class=\"case-cell-latin\">rēs</td>\n        <td class=\"case-cell-tr\">şey / olay / şeyler / olaylar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">rēs</td>\n        <td class=\"case-cell-latin\">rēs</td>\n        <td class=\"case-cell-tr\">ey şey / ey şeyler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">reī</td>\n        <td class=\"case-cell-latin\">rērum</td>\n        <td class=\"case-cell-tr\">şeyin / olayın / şeylerin / olayların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">reī</td>\n        <td class=\"case-cell-latin\">rēbus</td>\n        <td class=\"case-cell-tr\">şeye / için / şeylere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">rem</td>\n        <td class=\"case-cell-latin\">rēs</td>\n        <td class=\"case-cell-tr\">şeyi / şeyleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">rē</td>\n        <td class=\"case-cell-latin\">rēbus</td>\n        <td class=\"case-cell-tr\">şeyle / durumla / şeylerle / durumlarla</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Latincede en geniş kullanım alanına sahip kelimelerden biridir (rēs pūblica = cumhuriyet/devlet).</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">spēs, speī, f. (umut)</strong>\n    <span class=\"table-sub\">(spēs, speī, f. — umut)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">spēs</td>\n        <td class=\"case-cell-latin\">spēs</td>\n        <td class=\"case-cell-tr\">umut / umutlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">spēs</td>\n        <td class=\"case-cell-latin\">spēs</td>\n        <td class=\"case-cell-tr\">ey umut / ey umutlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">speī</td>\n        <td class=\"case-cell-latin\">spērum</td>\n        <td class=\"case-cell-tr\">umudun / umutların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">speī</td>\n        <td class=\"case-cell-latin\">spēbus</td>\n        <td class=\"case-cell-tr\">umuda / için / umutlara / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">spem</td>\n        <td class=\"case-cell-latin\">spēs</td>\n        <td class=\"case-cell-tr\">umudu / umutları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">spē</td>\n        <td class=\"case-cell-latin\">spēbus</td>\n        <td class=\"case-cell-tr\">umutla / umuttan / umutlarla / umutlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">fidēs, fideī, f. (inanç, sadakat, güven)</strong>\n    <span class=\"table-sub\">(fidēs, fideī, f. — inanç, sadakat, güven)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">fidēs</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">inanç / sadakat / —</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">fidēs</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">ey sadakat / —</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">fideī</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">inancın / sadakatin / —</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">fideī</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">inanca / için / —</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">fidem</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">inancı / güveni / —</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">fidē</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">inançla / sadakatle / —</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Soyut bir kavram olduğundan çoğul biçimleri kullanılmaz.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">diēs, diēī, m./f. (gün)</strong>\n    <span class=\"table-sub\">(diēs, diēī, m./f. — gün (tarih olarak f., genel gün m.))</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Singularis (Tekil)</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus (Nom.)</strong></td>\n        <td class=\"case-cell-latin\">diēs</td>\n        <td class=\"case-cell-latin\">diēs</td>\n        <td class=\"case-cell-tr\">gün / günler</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus (Voc.)</strong></td>\n        <td class=\"case-cell-latin\">diēs</td>\n        <td class=\"case-cell-latin\">diēs</td>\n        <td class=\"case-cell-tr\">ey gün / ey günler</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus (Gen.)</strong></td>\n        <td class=\"case-cell-latin\">diēī</td>\n        <td class=\"case-cell-latin\">diērum</td>\n        <td class=\"case-cell-tr\">günün / günlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus (Dat.)</strong></td>\n        <td class=\"case-cell-latin\">diēī</td>\n        <td class=\"case-cell-latin\">diēbus</td>\n        <td class=\"case-cell-tr\">güne / için / günlere / için</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus (Acc.)</strong></td>\n        <td class=\"case-cell-latin\">diem</td>\n        <td class=\"case-cell-latin\">diēs</td>\n        <td class=\"case-cell-tr\">günü / günleri</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus (Abl.)</strong></td>\n        <td class=\"case-cell-latin\">diē</td>\n        <td class=\"case-cell-latin\">diēbus</td>\n        <td class=\"case-cell-tr\">günle / günden / günlerle / günlerden</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Cornua cervum a periculis defendunt. Boynuzlar",
        "tr": "geyiği",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "tehlikelerden korurlar. Demosthenes multos versus uno spiritu pronuntiabat. Demosthenes pek",
        "tr": "çok",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "dizeyi tek",
        "tr": "bir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Magnam partem illarum urbium post multos annos vi et consilio capiebat. O kentlerin",
        "tr": "büyük bir kısmını",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "planla ele",
        "tr": "geçiriyordu",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Nemo vitia sua videt, sed quisque illa alterius. Kimse",
        "tr": "kendi kusularını görmez, ama başkasının kusurlarını görür",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ante Caesaris ipsius oculos trans viam cucurrimus et cum amicis fugimus. Bizzat",
        "tr": "Caesarın gözleri önünde",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "5. çekim isimlerin Çoğul Genetivus takısının -ērum olduğunu unutmayınız (rērum, diērum)."
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
    "subtitle": "Çekimli Sayılar: ūnus, duo, trēs, mīlia ve Sayı Sıfatlarının Sentaksı",
    "summary": "Bu fasikülde Latincedeki sayma sayılarını (Numeralia Cardinalia), çekimli olan ilk üç sayıyı (ūnus, duo, trēs), bin sayısının çoğulu olan mīlia'yı ve sayı tamlamalarının sentaks kurallarını tüm paradigmalarıyla öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 7.1.pdf",
    "slideCount": 16,
    "topics": ["Sayma Sayıları (Cardinalia)", "ūnus, ūna, ūnum Çekimi", "duo, duae, duo Çekimi", "trēs, tria Çekimi", "mīlle ve mīlia Çekimi", "Çekimsiz Sayılar (quattuor... centum)"],
    "vocab": ["unus", "duo", "tres", "quattuor", "quinque", "sex", "septem", "octo", "novem", "decem", "centum", "mille", "milia"],
    "sections": [
      {
        "title": "1. Çekimli Sayma Sayıları: ūnus, duo, trēs, mīlia",
        "html": "<p><strong>Genel Kural (Slayt 7-10):</strong> Latincede 4'ten 100'e kadar olan sayılar çekimsizdir (quattuor, quīnque, decem, centum asla ek almaz). Yalnızca <strong>1 (ūnus), 2 (duo), 3 (trēs)</strong> ve <strong>1000'in çoğulu (mīlia)</strong> çekimlenir:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">duo, duae, duo (iki) (Pluralis)</strong>\n    <span class=\"table-sub\">(Slayt 8)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">duo</td>\n        <td class=\"case-cell-latin\">duae</td>\n        <td class=\"case-cell-latin\">duo</td>\n        <td class=\"case-cell-tr\">iki</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey iki</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">duōrum</td>\n        <td class=\"case-cell-latin\">duārum</td>\n        <td class=\"case-cell-latin\">duōrum</td>\n        <td class=\"case-cell-tr\">ikinin</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">duōbus</td>\n        <td class=\"case-cell-latin\">duābus</td>\n        <td class=\"case-cell-latin\">duōbus</td>\n        <td class=\"case-cell-tr\">ikiye</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">duōs / duo</td>\n        <td class=\"case-cell-latin\">duās</td>\n        <td class=\"case-cell-latin\">duo</td>\n        <td class=\"case-cell-tr\">ikiyi</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">duōbus</td>\n        <td class=\"case-cell-latin\">duābus</td>\n        <td class=\"case-cell-latin\">duōbus</td>\n        <td class=\"case-cell-tr\">ikiyle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">trēs, tria (üç) [3. Grup Sıfat Gibi Çekimlenir]</strong>\n    <span class=\"table-sub\">(Slayt 9)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus</th>\n        <th>Masculinum / Femininum</th>\n        <th>Neutrum</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom.</strong></td>\n        <td class=\"case-cell-latin\">trēs</td>\n        <td class=\"case-cell-latin\">tria</td>\n        <td class=\"case-cell-tr\">üç</td>\n      </tr>\n      <tr>\n        <td><strong>Voc.</strong></td>\n        <td class=\"case-cell-latin\">trēs</td>\n        <td class=\"case-cell-latin\">tria</td>\n        <td class=\"case-cell-tr\">ey üç</td>\n      </tr>\n      <tr>\n        <td><strong>Gen.</strong></td>\n        <td class=\"case-cell-latin\">trium</td>\n        <td class=\"case-cell-latin\">trium</td>\n        <td class=\"case-cell-tr\">üçün</td>\n      </tr>\n      <tr>\n        <td><strong>Dat.</strong></td>\n        <td class=\"case-cell-latin\">tribus</td>\n        <td class=\"case-cell-latin\">tribus</td>\n        <td class=\"case-cell-tr\">üçe</td>\n      </tr>\n      <tr>\n        <td><strong>Acc.</strong></td>\n        <td class=\"case-cell-latin\">trēs / trīs</td>\n        <td class=\"case-cell-latin\">tria</td>\n        <td class=\"case-cell-tr\">üçü</td>\n      </tr>\n      <tr>\n        <td><strong>Abl.</strong></td>\n        <td class=\"case-cell-latin\">tribus</td>\n        <td class=\"case-cell-latin\">tribus</td>\n        <td class=\"case-cell-tr\">üçle</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">mīlia, mīlium, n. pl. (binler) [3. Grup Nötr İsim Gibi Çekimlenir]</strong>\n    <span class=\"table-sub\">(Slayt 10)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus</th>\n        <th>Pluralis (Çoğul)</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom.</strong></td>\n        <td class=\"case-cell-latin\">mīlia</td>\n        <td class=\"case-cell-tr\">binler / bin</td>\n      </tr>\n      <tr>\n        <td><strong>Voc.</strong></td>\n        <td class=\"case-cell-latin\">mīlia</td>\n        <td class=\"case-cell-tr\">ey binler</td>\n      </tr>\n      <tr>\n        <td><strong>Gen.</strong></td>\n        <td class=\"case-cell-latin\">mīlium</td>\n        <td class=\"case-cell-tr\">binlerin</td>\n      </tr>\n      <tr>\n        <td><strong>Dat.</strong></td>\n        <td class=\"case-cell-latin\">mīlibus</td>\n        <td class=\"case-cell-tr\">binlere</td>\n      </tr>\n      <tr>\n        <td><strong>Acc.</strong></td>\n        <td class=\"case-cell-latin\">mīlia</td>\n        <td class=\"case-cell-tr\">binleri</td>\n      </tr>\n      <tr>\n        <td><strong>Abl.</strong></td>\n        <td class=\"case-cell-latin\">mīlibus</td>\n        <td class=\"case-cell-tr\">binlerle</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> mille tekil olarak çekimsiz bir sıfattır (mille viri = bin adam). Çoğulda ise mīlia bir isimdir ve kendisinden sonra Genetivus ister: duo mīlia virōrum (iki bin adam / kelimesi kelimesine: adamların iki bini).</div>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "mīlia kelimesinin kendisinden sonra Genetivus partitivus (bütünleyen genetivus) aldığını unutmayınız: tria milia passuum (üç bin adım = 3 Roma mili)."
  },
  {
    "id": "T2_W7_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 7,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 7. Hafta (2. Ders)",
    "title": "LATİN SAYI SİSTEMİ 2: SIRA, ÜLEŞTİRME VE SIKLIK SAYILARI",
    "subtitle": "Ordinalia (prīmus...), Distributiva (singulī...), Frequentativa (semel...) ve Sayı Sentaksı",
    "summary": "Bu fasikülde Latincedeki 4 sayı grubunu (Cardinalia, Ordinalia, Distributiva, Frequentativa), üleştirme ve sıklık sayıları tam mukayese tablolarını, ūnus'un çoğul kullanımı (castra), trēs, mīlle vs mīlia ayrımını, ex/de edatlı tamlamaları ve klasik sayı cümlelerini tüm filolojik ayrıntılarıyla öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 7.2.pdf",
    "slideCount": 26,
    "topics": ["Sayıların 4 Ana Grubu", "Sıra Sayı Sıfatları (Ordinalia)", "Üleştirme Sayı Sıfatları (Distributiva: singulī, bīnī...)", "Sıklık Belirten Sayı Zarfları (Frequentativa: semel, bis, ter...)", "Sayma Sayıları Sentaksı (ūnus, duo, trēs)", "Plurale Tantum ile ūnus Kullanımı (ūna castra)", "mīlle (Sıfat) vs mīlia (İsim) Ayrımı", "Kısım Genetivus'u ve ex / de (+ abl.) Kullanımı", "Sayı Cümleleri ve Çözümlemeleri"],
    "vocab": ["primus", "secundus", "tertius", "quartus", "quintus", "sextus", "septimus", "octavus", "nonus", "decimus", "singuli", "bini", "terni", "quaterni", "quini", "seni", "septeni", "octoni", "noveni", "deni", "viceni", "centeni", "milleni", "semel", "bis", "ter", "quater", "quinquies", "sexies", "decies", "vicies", "mille", "milia", "talentum", "sagittarius", "equitatus", "castra"],
    "sections": [
      {
        "title": "1. Latincede Sayıların Dört Temel Grubu (Slayt 2-3, 9)",
        "html": "<p>Latincede sayılar harflerle simgelenir ve işlevlerine göre sıfat ya da zarf olarak değerlendirilip <strong>4 ana başlık</strong> altında toplanır:</p>\n<ol>\n  <li><strong>I. Sayma Sayı Sıfatları (Cardinalia):</strong> <em>Quot?</em> (Kaç?) sorusunun cevabıdır: <span class=\"lat-word\">ūnus</span> (1), <span class=\"lat-word\">duo</span> (2), <span class=\"lat-word\">trēs</span> (3), <span class=\"lat-word\">quattuor</span> (4)... Yalnızca ilk üçü ve <em>mīlia</em> çekimlidir; diğerleri çekimsizdir.</li>\n  <li><strong>II. Sıra Sayı Sıfatları (Ordinalia):</strong> <em>Quotīmus?</em> (Kaçıncı?) sorusunun cevabıdır: <span class=\"lat-word\">prīmus, -a, -um</span> (birinci), <span class=\"lat-word\">secundus, -a, -um</span> (ikinci), <span class=\"lat-word\">tertius, -a, -um</span> (üçüncü)... Hepsi 1. ve 2. sınıf sıfatlar gibi (-us, -a, -um) çekimlenir.</li>\n  <li><strong>III. Üleştirme Sayı Sıfatları (Distributiva):</strong> <em>Quotēnī?</em> (Kaçar? Kaçar tane?) sorusunun cevabıdır. Örneğin: <span class=\"lat-word\">singulī</span> (birer), <span class=\"lat-word\">bīnī</span> (ikişer), <span class=\"lat-word\">ternī</span> (üçer)... Üç bitimli sıfatların çoğulu (-ī, -ae, -a) gibi çekimlenir.</li>\n  <li><strong>IV. Sıklık Belirten Sayı Zarfları (Frequentativa):</strong> <em>Quotie(n)s?</em> (Ne sıklıkla? Kaç kez? Kaç defa?) sorusunun cevabıdır. Örneğin: <span class=\"lat-word\">semel</span> (bir kez), <span class=\"lat-word\">bis</span> (iki kez), <span class=\"lat-word\">ter</span> (üç kez), <span class=\"lat-word\">quater</span> (dört kez)... Zarf niteliğinde olduklarından bütünüyle <strong>çekimsizdirler</strong>; genellikle sayma sayılarının gövdesine <em>–iē(n)s</em> takısı eklenerek yapılır.</li>\n</ol>",
        "calloutType": "rule",
        "calloutTitle": "Ünlü Latince Özdeyiş",
        "calloutText": "Bis dat, quī citō dat = Çabuk veren, iki kez vermiş sayılır.",
        "tableHtml": ""
      },
      {
        "title": "2. Üleştirme (Distributiva) ve Sıklık Zarfları (Frequentativa) Tam Tablosu (Slayt 4-14)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı'nın ders notlarındaki (Slayt 4-8 ve 10-14) 1'den 1000'e kadar olan tam karşılaştırma tablosu:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Latin Sayı Sistemi: Üleştirme ve Sıklık Karşılaştırması (I - M)</strong>\n    <span class=\"table-sub\">(Slayt 4-14)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Roma Rakamı</th>\n        <th>Sayma (Cardinalia)</th>\n        <th>Sıra (Ordinalia)</th>\n        <th>Üleştirme (Distributiva)</th>\n        <th>Sıklık (Frequentativa)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>I</strong></td>\n        <td class=\"case-cell-latin\">ūnus, -a, -um</td>\n        <td class=\"case-cell-latin\">prīmus, -a, -um</td>\n        <td class=\"case-cell-latin\">singulī, -ae, -a (birer)</td>\n        <td class=\"case-cell-latin\">semel (bir kez)</td>\n      </tr>\n      <tr>\n        <td><strong>II</strong></td>\n        <td class=\"case-cell-latin\">duo, duae, duo</td>\n        <td class=\"case-cell-latin\">secundus, -a, -um</td>\n        <td class=\"case-cell-latin\">bīnī, -ae, -a (ikişer)</td>\n        <td class=\"case-cell-latin\">bis (iki kez)</td>\n      </tr>\n      <tr>\n        <td><strong>III</strong></td>\n        <td class=\"case-cell-latin\">trēs, tria</td>\n        <td class=\"case-cell-latin\">tertius, -a, -um</td>\n        <td class=\"case-cell-latin\">ternī, -ae, -a (üçer)</td>\n        <td class=\"case-cell-latin\">ter (üç kez)</td>\n      </tr>\n      <tr>\n        <td><strong>IV</strong></td>\n        <td class=\"case-cell-latin\">quattuor</td>\n        <td class=\"case-cell-latin\">quartus, -a, -um</td>\n        <td class=\"case-cell-latin\">quaternī, -ae, -a (dörder)</td>\n        <td class=\"case-cell-latin\">quater (dört kez)</td>\n      </tr>\n      <tr>\n        <td><strong>V</strong></td>\n        <td class=\"case-cell-latin\">quīnque</td>\n        <td class=\"case-cell-latin\">quīntus, -a, -um</td>\n        <td class=\"case-cell-latin\">quīnī, -ae, -a (beşer)</td>\n        <td class=\"case-cell-latin\">quīnquie(n)s (beş kez)</td>\n      </tr>\n      <tr>\n        <td><strong>VI</strong></td>\n        <td class=\"case-cell-latin\">sex</td>\n        <td class=\"case-cell-latin\">sextus, -a, -um</td>\n        <td class=\"case-cell-latin\">sēnī, -ae, -a (altışar)</td>\n        <td class=\"case-cell-latin\">sexie(n)s (altı kez)</td>\n      </tr>\n      <tr>\n        <td><strong>VII</strong></td>\n        <td class=\"case-cell-latin\">septem</td>\n        <td class=\"case-cell-latin\">septimus, -a, -um</td>\n        <td class=\"case-cell-latin\">septēnī, -ae, -a (yedişer)</td>\n        <td class=\"case-cell-latin\">septie(n)s (yedi kez)</td>\n      </tr>\n      <tr>\n        <td><strong>VIII</strong></td>\n        <td class=\"case-cell-latin\">octō</td>\n        <td class=\"case-cell-latin\">octāvus, -a, -um</td>\n        <td class=\"case-cell-latin\">octōnī, -ae, -a (sekizer)</td>\n        <td class=\"case-cell-latin\">octie(n)s (sekiz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>IX</strong></td>\n        <td class=\"case-cell-latin\">novem</td>\n        <td class=\"case-cell-latin\">nōnus, -a, -um</td>\n        <td class=\"case-cell-latin\">novēnī, -ae, -a (dokuzar)</td>\n        <td class=\"case-cell-latin\">nōnie(n)s (dokuz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>X</strong></td>\n        <td class=\"case-cell-latin\">decem</td>\n        <td class=\"case-cell-latin\">decimus, -a, -um</td>\n        <td class=\"case-cell-latin\">dēnī, -ae, -a (onar)</td>\n        <td class=\"case-cell-latin\">decie(n)s (on kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XI</strong></td>\n        <td class=\"case-cell-latin\">undecim</td>\n        <td class=\"case-cell-latin\">undecimus, -a, -um</td>\n        <td class=\"case-cell-latin\">undēnī, -ae, -a (on birer)</td>\n        <td class=\"case-cell-latin\">undecie(n)s (on bir kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XII</strong></td>\n        <td class=\"case-cell-latin\">duodecim</td>\n        <td class=\"case-cell-latin\">duodecimus, -a, -um</td>\n        <td class=\"case-cell-latin\">duodēnī, -ae, -a (on ikişer)</td>\n        <td class=\"case-cell-latin\">duodecie(n)s (on iki kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XIII</strong></td>\n        <td class=\"case-cell-latin\">tredecim</td>\n        <td class=\"case-cell-latin\">tertius decimus</td>\n        <td class=\"case-cell-latin\">ternī dēnī (on üçer)</td>\n        <td class=\"case-cell-latin\">tredecie(n)s (on üç kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XIV</strong></td>\n        <td class=\"case-cell-latin\">quattuordecim</td>\n        <td class=\"case-cell-latin\">quartus decimus</td>\n        <td class=\"case-cell-latin\">quaternī dēnī (on dörder)</td>\n        <td class=\"case-cell-latin\">quattuordecie(n)s (on dört kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XV</strong></td>\n        <td class=\"case-cell-latin\">quīndecim</td>\n        <td class=\"case-cell-latin\">quīntus decimus</td>\n        <td class=\"case-cell-latin\">quīnī dēnī (on beşer)</td>\n        <td class=\"case-cell-latin\">quīndecie(n)s (on beş kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XVI</strong></td>\n        <td class=\"case-cell-latin\">sēdecim</td>\n        <td class=\"case-cell-latin\">sextus decimus</td>\n        <td class=\"case-cell-latin\">sēnī dēnī (on altışar)</td>\n        <td class=\"case-cell-latin\">sēdecie(n)s (on altı kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XVII</strong></td>\n        <td class=\"case-cell-latin\">septendecim</td>\n        <td class=\"case-cell-latin\">septimus decimus</td>\n        <td class=\"case-cell-latin\">septēnī dēnī (on yedişer)</td>\n        <td class=\"case-cell-latin\">septie(n)s decie(n)s (on yedi kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XVIII</strong></td>\n        <td class=\"case-cell-latin\">duodēvīgintī</td>\n        <td class=\"case-cell-latin\">duodēvīcēsimus</td>\n        <td class=\"case-cell-latin\">duodēvīcēnī (on sekizer)</td>\n        <td class=\"case-cell-latin\">duodēvīciēs (on sekiz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XIX</strong></td>\n        <td class=\"case-cell-latin\">undēvīgintī</td>\n        <td class=\"case-cell-latin\">undēvīcēsimus</td>\n        <td class=\"case-cell-latin\">undēvīcēnī (on dokuzar)</td>\n        <td class=\"case-cell-latin\">undēvīciēs (on dokuz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XX</strong></td>\n        <td class=\"case-cell-latin\">vīgintī</td>\n        <td class=\"case-cell-latin\">vīcēsimus, -a, -um</td>\n        <td class=\"case-cell-latin\">vīcēnī, -ae, -a (yirmişer)</td>\n        <td class=\"case-cell-latin\">vīciēs (yirmi kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XXI</strong></td>\n        <td class=\"case-cell-latin\">vīgintī ūnus (ūnus et vīgintī)</td>\n        <td class=\"case-cell-latin\">vīcēsimus prīmus</td>\n        <td class=\"case-cell-latin\">vīcēnī singulī (yirmi birer)</td>\n        <td class=\"case-cell-latin\">semel et vīcie(n)s (yirmi bir kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XXII</strong></td>\n        <td class=\"case-cell-latin\">vīgintī duo (duo et vīgintī)</td>\n        <td class=\"case-cell-latin\">vīcēsimus secundus</td>\n        <td class=\"case-cell-latin\">vīcēnī bīnī (yirmi ikişer)</td>\n        <td class=\"case-cell-latin\">bis et vīcie(n)s (yirmi iki kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XXIII</strong></td>\n        <td class=\"case-cell-latin\">vīgintī trēs (trēs et vīgintī)</td>\n        <td class=\"case-cell-latin\">vīcēsimus tertius</td>\n        <td class=\"case-cell-latin\">vīcēnī ternī (yirmi üçer)</td>\n        <td class=\"case-cell-latin\">ter et vīcie(n)s (yirmi üç kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XXVIII</strong></td>\n        <td class=\"case-cell-latin\">duodētrīgintā</td>\n        <td class=\"case-cell-latin\">duodētrīcēsimus</td>\n        <td class=\"case-cell-latin\">duodētrīcēnī (yirmi sekizer)</td>\n        <td class=\"case-cell-latin\">duodētrīcie(n)s (yirmi sekiz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XXIX</strong></td>\n        <td class=\"case-cell-latin\">undētrīgintā</td>\n        <td class=\"case-cell-latin\">undētrīcēsimus</td>\n        <td class=\"case-cell-latin\">undētrīcēnī (yirmi dokuzar)</td>\n        <td class=\"case-cell-latin\">undētrīcie(n)s (yirmi dokuz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XXX</strong></td>\n        <td class=\"case-cell-latin\">trīgintā</td>\n        <td class=\"case-cell-latin\">trīcēsimus, -a, -um</td>\n        <td class=\"case-cell-latin\">trīcēnī, -ae, -a (otuzar)</td>\n        <td class=\"case-cell-latin\">trīcie(n)s (otuz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XL</strong></td>\n        <td class=\"case-cell-latin\">quadrāgintā</td>\n        <td class=\"case-cell-latin\">quadrāgēsimus</td>\n        <td class=\"case-cell-latin\">quadrāgēnī (kırkar)</td>\n        <td class=\"case-cell-latin\">quadrāgie(n)s (kırk kez)</td>\n      </tr>\n      <tr>\n        <td><strong>L</strong></td>\n        <td class=\"case-cell-latin\">quīnquāgintā</td>\n        <td class=\"case-cell-latin\">quīnquāgēsimus</td>\n        <td class=\"case-cell-latin\">quīnquāgēnī (ellişer)</td>\n        <td class=\"case-cell-latin\">quīnquāgie(n)s (elli kez)</td>\n      </tr>\n      <tr>\n        <td><strong>LX</strong></td>\n        <td class=\"case-cell-latin\">sexāgintā</td>\n        <td class=\"case-cell-latin\">sexāgēsimus</td>\n        <td class=\"case-cell-latin\">sexāgēnī (altmışar)</td>\n        <td class=\"case-cell-latin\">sexāgie(n)s (altmış kez)</td>\n      </tr>\n      <tr>\n        <td><strong>LXX</strong></td>\n        <td class=\"case-cell-latin\">septuāgintā</td>\n        <td class=\"case-cell-latin\">septuāgēsimus</td>\n        <td class=\"case-cell-latin\">septuāgēnī (yetmişer)</td>\n        <td class=\"case-cell-latin\">septuāgie(n)s (yetmiş kez)</td>\n      </tr>\n      <tr>\n        <td><strong>LXXX</strong></td>\n        <td class=\"case-cell-latin\">octōgintā</td>\n        <td class=\"case-cell-latin\">octōgēsimus</td>\n        <td class=\"case-cell-latin\">octōgēnī (seksener)</td>\n        <td class=\"case-cell-latin\">octōgie(n)s (seksen kez)</td>\n      </tr>\n      <tr>\n        <td><strong>XC</strong></td>\n        <td class=\"case-cell-latin\">nōnāgintā</td>\n        <td class=\"case-cell-latin\">nōnāgēsimus</td>\n        <td class=\"case-cell-latin\">nōnāgēnī (doksanar)</td>\n        <td class=\"case-cell-latin\">nōnāgie(n)s (doksan kez)</td>\n      </tr>\n      <tr>\n        <td><strong>C</strong></td>\n        <td class=\"case-cell-latin\">centum</td>\n        <td class=\"case-cell-latin\">centēsimus, -a, -um</td>\n        <td class=\"case-cell-latin\">centēnī, -ae, -a (yüzer)</td>\n        <td class=\"case-cell-latin\">centie(n)s (yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>CC</strong></td>\n        <td class=\"case-cell-latin\">ducentī, -ae, -a</td>\n        <td class=\"case-cell-latin\">ducentēsimus</td>\n        <td class=\"case-cell-latin\">ducēnī (iki yüzer)</td>\n        <td class=\"case-cell-latin\">ducentie(n)s (iki yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>CCC</strong></td>\n        <td class=\"case-cell-latin\">trecentī, -ae, -a</td>\n        <td class=\"case-cell-latin\">trecentēsimus</td>\n        <td class=\"case-cell-latin\">trecēnī (üç yüzer)</td>\n        <td class=\"case-cell-latin\">trecentie(n)s (üç yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>CCCC</strong></td>\n        <td class=\"case-cell-latin\">quadringentī, -ae, -a</td>\n        <td class=\"case-cell-latin\">quadringentēsimus</td>\n        <td class=\"case-cell-latin\">quadringēnī (dört yüzer)</td>\n        <td class=\"case-cell-latin\">quadringentie(n)s (dört yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>D</strong></td>\n        <td class=\"case-cell-latin\">quīngentī, -ae, -a</td>\n        <td class=\"case-cell-latin\">quīngentēsimus</td>\n        <td class=\"case-cell-latin\">quīngēnī (beş yüzer)</td>\n        <td class=\"case-cell-latin\">quīngentie(n)s (beş yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>DC</strong></td>\n        <td class=\"case-cell-latin\">sescentī, -ae, -a</td>\n        <td class=\"case-cell-latin\">sescentēsimus</td>\n        <td class=\"case-cell-latin\">sescēnī (altı yüzer)</td>\n        <td class=\"case-cell-latin\">sescentie(n)s (altı yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>DCC</strong></td>\n        <td class=\"case-cell-latin\">septingentī, -ae, -a</td>\n        <td class=\"case-cell-latin\">septingentēsimus</td>\n        <td class=\"case-cell-latin\">septingēnī (yedi yüzer)</td>\n        <td class=\"case-cell-latin\">septingentie(n)s (yedi yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>DCCC</strong></td>\n        <td class=\"case-cell-latin\">octingentī, -ae, -a</td>\n        <td class=\"case-cell-latin\">octingentēsimus</td>\n        <td class=\"case-cell-latin\">octingēnī (sekiz yüzer)</td>\n        <td class=\"case-cell-latin\">octingentie(n)s (sekiz yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>DCCCC</strong></td>\n        <td class=\"case-cell-latin\">nōngentī, -ae, -a</td>\n        <td class=\"case-cell-latin\">nōngentēsimus</td>\n        <td class=\"case-cell-latin\">nōngēnī (dokuz yüzer)</td>\n        <td class=\"case-cell-latin\">nōngentie(n)s (dokuz yüz kez)</td>\n      </tr>\n      <tr>\n        <td><strong>M</strong></td>\n        <td class=\"case-cell-latin\">mīlle (mīlia)</td>\n        <td class=\"case-cell-latin\">mīllēsimus, -a, -um</td>\n        <td class=\"case-cell-latin\">mīllēnī / singula mīlia (biner)</td>\n        <td class=\"case-cell-latin\">mīllie(n)s (bin kez)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Sayıların Sentaks Kuralları ve Model İfadeler (Slayt 15-25)",
        "html": "<p>Eyüp Hoca'nın Slayt 15-25 boyunca aktardığı temel kullanım prensipleri:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Kategori</th><th>Latince Örnek İfade</th><th>Türkçe Karşılığı</th><th>Dilbilgisel Açıklama (Slayt Notu)</th></tr>\n    </thead>\n    <tbody>\n      <tr><td><strong>ūnus Tekil</strong></td><td class=\"case-cell-latin\">ūnus equus / ūna mensa / ūnum saxum</td><td class=\"case-cell-tr\">bir at / bir masa / bir taş</td><td>Tekil isimlerle tamlama oluşturur.</td></tr>\n      <tr><td><strong>ūnus İyelik</strong></td><td class=\"case-cell-latin\">ūnīus equī / ūnīus mensae / ūnī amīcō</td><td class=\"case-cell-tr\">bir atın / bir masanın / bir arkadaşa</td><td>UNUS NAUTA çekimi gereği tekil genetivus -īus, dativus -ī olur.</td></tr>\n      <tr><td><strong>ūnus + Plurale Tantum</strong></td><td class=\"case-cell-latin\">ūna castra / ūnōrum castrōrum</td><td class=\"case-cell-tr\">bir ordugâh / bir ordugâhın</td><td>Yalnızca çoğulu olan (plurale tantum) tekil anlamlı isimlerle çoğul çekimlenir.</td></tr>\n      <tr><td><strong>trēs Çekimi</strong></td><td class=\"case-cell-latin\">tria saxa / trium saxōrum / in tribus bellīs</td><td class=\"case-cell-tr\">üç taş / üç taşın / üç savaşta</td><td>Doğal çoğuldur; 3. grup sıfat (-ēs, -ia) gibi çekimlenir.</td></tr>\n      <tr><td><strong>mīlle Sıfatı</strong></td><td class=\"case-cell-latin\">mīlle saxa / mīlle equī / mīlle hominēs</td><td class=\"case-cell-tr\">bin taş / bin at / bin insan</td><td>Tekil mīlle çekimsiz bir sıfattır, ismi doğrudan niteler.</td></tr>\n      <tr><td><strong>mīlia İsim Kullanımı</strong></td><td class=\"case-cell-latin\">mīlia equōrum / decem mīlia librōrum</td><td class=\"case-cell-tr\">bin at (atların bini) / on bin kitap</td><td>Çoğul mīlia nötr 3. grup isimdir; kendisinden sonra <em>Kısım Genetivus'u</em> ister.</td></tr>\n      <tr><td><strong>mīlle vs mīlia Ayrımı</strong></td><td class=\"case-cell-latin\">mīlle virī vs mīlia virōrum</td><td class=\"case-cell-tr\">bin adam (sıfat) vs bin adam (isim + gen.)</td><td>İki ifade de aynı anlamı karşılar fakat morfolojik yapıları farklıdır.</td></tr>\n      <tr><td><strong>ex / dē ile Bütünden Parça</strong></td><td class=\"case-cell-latin\">trēs ex amīcīs meīs [= trēs amīcī]</td><td class=\"case-cell-tr\">arkadaşlarımdan üç tanesi, üç arkadaşım</td><td>Kısım Genetivus'una alternatif olarak ex/de (+ abl.) kullanılır.</td></tr>\n      <tr><td><strong>ex / dē Örnekleri</strong></td><td class=\"case-cell-latin\">quīnque ex eīs / ūnus dē duōbus</td><td class=\"case-cell-tr\">onların beşi / ikisinden biri</td><td>Belirli bir grubun içinden seçilen parça bildirilir.</td></tr>\n      <tr><td><strong>Sıra Sayısı (Ordinalia)</strong></td><td class=\"case-cell-latin\">prīma littera / tertiō annō / decima hōrā</td><td class=\"case-cell-tr\">ilk harf / üçüncü yılda / onuncu saatte</td><td>İlgili isimle tamlama kurar; zaman için yalın ablativus kullanılır.</td></tr>\n      <tr><td><strong>Üleştirme (Distributiva)</strong></td><td class=\"case-cell-latin\">bīnae litterae / puerī dēnī / puerī dēnum annōrum</td><td class=\"case-cell-tr\">ikişer mektup / onar çocuk / onar yaşında çocuklar</td><td>Çoğul genetivus ekleri genellikle -ōrum/-ārum yerine -um olur (dēnum).</td></tr>\n      <tr><td><strong>Sıklık Zarfı (Frequentativa)</strong></td><td class=\"case-cell-latin\">semel in vītā / bis in annō / decie(n)s in annō</td><td class=\"case-cell-tr\">hayatta bir kez / yılda iki kez / yılda on kez</td><td>Zarf oldukları için çekimsizdirler ve isme göre değişmezler.</td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "4. Sayı Sentaksı Cümle Alıştırmaları (Slayt 26)",
        "html": "<p>Slayt 26'da yer alan klasik sayı tamlamalı cümleler:</p>\n<ol>\n  <li><em>Trēs puerī dedērunt duābus puellīs.</em> — Üç çocuk iki kıza [güller] verdi.</li>\n  <li><em>Octō puerī librōs dedērunt decem puellīs.</em> — Sekiz çocuk on kıza kitaplar verdi.</li>\n  <li><em>Ūnus vir vēnit cum quattuor amīcīs.</em> — Bir adam dört arkadaşıyla birlikte geldi.</li>\n  <li><em>Consul vēnit cum centum virīs.</em> — Konsül yüz adamla birlikte geldi.</li>\n  <li><em>Consul vēnit cum ducentīs virīs.</em> — Konsül iki yüz adamla birlikte geldi.</li>\n  <li><em>Consul vēnit cum mīlle virīs.</em> — Konsül bin adamla birlikte geldi.</li>\n  <li><em>Consul vēnit cum sex mīlibus virōrum.</em> — Konsül altı bin adamla (adamların altı biniyle) birlikte geldi.</li>\n</ol>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
    ],
    "studyTips": "mīlle tekil olduğunda çekimsiz sıfattır (cum mille viris); çoğul olduğunda ise çekimli nötr isimdir ve kısım genetivusu alır (cum sex milibus virorum)."
  },
  {
    "id": "T2_W8_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 8,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 8. Hafta (1. Ders)",
    "title": "METİN VE SENTAKS ÇÖZÜMLEMELERİ 1: LUCRETIUS, CICERO VE CATILINA",
    "subtitle": "3. Çekim İsimler, İyelik Zamirleri ve Klasik Edebiyatta Doğa/Felsefe Sentaksı",
    "summary": "Bu fasikülde Lucretius'un De Rerum Natura eserinden doğa felsefesi cümlelerini, Vergilius'tan Bucolica alıntılarını, Cicero'nun Catilina'ya Karşı Birinci Nutuk (In Catilinam I) metninin tahlilini, Tacitus ve Seneca metinlerini tüm gramer ve sözlük analizleriyle öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 8.1.pdf",
    "slideCount": 16,
    "topics": ["nūbēs, nubis f. Çekimi ve Analizi", "Lucretius: De Rerum Natura Metin Tahlili", "Vergilius: Çoban Şiirleri ve İsim Tamlamaları", "Cicero: In Catilinam I Alıştırma Metni", "O tempora! O mores! Sentaksı", "Tacitus ve Lucius Brutus Tarih Cümlesi", "Laberius: Sub Caesare Sentaksı", "Seneca: diu vixit vs diu fuit Mukayesesi"],
    "vocab": ["nubes", "acerbus", "olim", "ovis", "audeo", "idem", "timor", "invenio", "pax", "civitas", "venio", "aperte", "designo", "sentio", "intellego", "profundo", "perdo", "diu", "morior", "hodie", "in", "signum", "terra", "et", "semper", "hoc", "sine", "autem", "eorum", "ex", "cum", "post", "non", "solum", "sed", "etiam", "pro", "patria", "sub", "ille"],
    "sections": [
      {
        "title": "1. Edebi ve Felsefi Cümle Tahlilleri (Slayt 2-9)",
        "html": "<p>Slayt 2-9 arasındaki klasik metin cümleleri ve Eyüp Hoca'nın çevirileri:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Latince Metin</th><th>Yazar / Kaynak</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Filolojik Not</th></tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"case-cell-latin\">Hodiē multae nūbēs in caelō sunt signum īrae acerbae deōrum.</td><td>Klasik Cümle</td><td class=\"case-cell-tr\">Bugün gökyüzündeki pek çok bulut tanrıların acımasız gazabının işaretidir.</td><td>nūbēs: 3. çekim -i gövdeli isim (nūbēs, -is f.); acerbae: sert, acımasız.</td></tr>\n      <tr><td class=\"case-cell-latin\">Terra ipsa hominēs et animālia ōlim creāvit.</td><td>Lucretius</td><td class=\"case-cell-tr\">Bir zamanlar bizzat toprak insanları ve hayvanları yarattı.</td><td>ipsa: pekiştirme zamiri (bizzat toprak); ōlim: bir zamanlar, vaktiyle.</td></tr>\n      <tr><td class=\"case-cell-latin\">Pān servat ovēs et magistrōs fortūnātōs ovium.</td><td>Vergilius</td><td class=\"case-cell-tr\">Pan koyunları ve koyunların talihli yöneticilerini / çobanlarını korur.</td><td>magistrōs ovium: koyunların yöneticileri (çobanlar); ovis, -is f. (koyun).</td></tr>\n      <tr><td class=\"case-cell-latin\">Audē, igitur, esse semper īdem.</td><td>Klasik Deyiş</td><td class=\"case-cell-tr\">Öyleyse her zaman aynı olmaya (aynı kişi olmaya) cesaret et!</td><td>audē: audeō fiilinin 2. tekil emir kipi; īdem: aynı kişi.</td></tr>\n      <tr><td class=\"case-cell-latin\">Illum timōrem in hoc virō ūnō invenīmus.</td><td>Klasik Cümle</td><td class=\"case-cell-tr\">O korkuyu bir tek bu adamda buluyoruz.</td><td>in hoc virō ūnō: bir tek bu adamda (ūnus sıfatı vurgu katmaktadır).</td></tr>\n      <tr><td class=\"case-cell-latin\">Sine labōre autem nūlla pāx in cīvitātem eōrum veniet.</td><td>Klasik Cümle</td><td class=\"case-cell-tr\">Ancak çaba olmadan onların devletine hiç barış gelmeyecek.</td><td>sine + abl. (çaba olmadan); eōrum: 3. şahıs çoğul iyelik (onların).</td></tr>\n      <tr><td class=\"case-cell-latin\">Ex illīs terrīs in hunc locum cum amīcīs vestrīs venīte.</td><td>Klasik Cümle</td><td class=\"case-cell-tr\">O topraklardan bu yere arkadaşlarınızla birlikte geliniz!</td><td>venīte: 2. çoğul emir kipi; cum amīcīs vestrīs: arkadaşlarınızla birlikte.</td></tr>\n      <tr><td class=\"case-cell-latin\">Post paucās hōrās sorōrem illīus invenīre poterāmus.</td><td>Klasik Cümle</td><td class=\"case-cell-tr\">Birkaç saat sonra onun kız kardeşini bulabiliyorduk.</td><td>illīus: o kişinin (tekil genetivus); poterāmus: possum Imperfectum 1. çoğul.</td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "2. Okuma Parçası: Cicero'nun Catilina'ya Karşı Nutku (In Catilinam I) (Slayt 10-12)",
        "html": "<p>Roma Senatosu'nda Cicero'nun Catilina tertibini ifşa ettiği ünlü söylevden derlenen alıştırma metni:</p>\n<blockquote style=\"background:rgba(212,168,83,0.08); border-left:4px solid var(--eyup-gold); padding:1rem 1.25rem; margin:1rem 0; border-radius:4px; font-style:italic;\">\n  <p><strong>Latince Metin (Slayt 10):</strong><br>\n  Quid facis, Catilīna? Quid cōgitās? Sentīmus magna vitia insidiāsque tuās. Ō tempora! Ō mōrēs! Senātus haec intellegit, consul videt. Hic tamen vīvit. Vīvit? Etiam in senātum venit; etiam nunc consilia agere audet; oculīs designat ad mortem nōs. Et nōs, bonī virī, nihil facimus! Ad mortem tē, Catilīna, consul et senātus dūcere dēbent. Consilium habēmus et agere dēbēmus; sī nunc nōn agimus, nōs, nōs, - apertē dīcō - errāmus! Fuge nunc, Catilīna, et dūc tēcum amīcōs tuōs. Nōbīscum remanēre nōn potes. Nōn tē, nōn istōs, nōn consilia vestra tolerābō!</p>\n</blockquote>\n<p><strong>Bilinmeyen Kelimeler (Slayt 11):</strong></p>\n<ul>\n  <li><span class=\"lat-word\">etiam</span>, adv.: bile, hatta, ayrıca</li>\n  <li><span class=\"lat-word\">quid</span>, soru zamiri: ne?</li>\n  <li><span class=\"lat-word\">tamen</span>, adv.: ancak, yine de</li>\n  <li><span class=\"lat-word\">apertē</span>, adv.: açıkça (apertus sıfatından türetilmiş zarf)</li>\n  <li><span class=\"lat-word\">designō, -āre, -āvī</span>: tarif etmek, belirtmek, işaret etmek, göstermek</li>\n  <li><span class=\"lat-word\">sentiō, -īre, sensī, sensum</span>: hissetmek, algılamak, düşünmek, farkına varmak</li>\n  <li><span class=\"lat-word\">intellegō, -legere, -lexī, -lectum</span>: anlamak, kavramak, idrak etmek</li>\n</ul>\n<p><strong>Türkçe Çeviri (Slayt 12 - Eyüp Hoca):</strong></p>\n<blockquote style=\"background:rgba(255,255,255,0.04); border-left:4px solid #6b7280; padding:1rem 1.25rem; margin:1rem 0; border-radius:4px;\">\n  <p>Ne yapıyorsun, Catilina? Ne düşünüyorsun? Senin tuzaklarının ve büyük kötülüklerinin farkındayız. Ey zamanlar! Ey âdetler! Senatus bunları anlıyor, konsül görüyor. Yine de bu adam yaşıyor. Yaşıyor mu? Hatta Senatus'a bile geliyor, planlarını uygulamaya bile cüret ediyor; gözleriyle bize ölümü işaret ediyor. Biz ise, ey iyi insanlar, hiçbir şey yapmıyoruz. Seni, Catilina, konsül ve Senatus'un ölüme sevk etmesi gerek. Bir planımız var ve onu gerçekleştirmemiz gerek; eğer şimdi gerçekleştirmezsek, biz, - açık söylüyorum - biz hata yaparız. Şimdi kaç git Catilina, ve yanında arkadaşlarını da götür. Bizimle birlikte kalman mümkün değil. Sana da, şu kişilere de, sizin planlarınıza da katlanmayacağım.</p>\n</blockquote>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "3. Roma Tarihi ve Felsefesi Metinleri: Cicero, Tacitus, Laberius, Seneca (Slayt 13-16)",
        "html": "<p>Slayt 13-16'daki klasik metin alıntıları:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Latince Metin</th><th>Yazar</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks Analizi</th></tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"case-cell-latin\">Illī nōn sōlum pecūniam sed etiam vītam prō patriā profūdērunt.</td><td>Cicero</td><td class=\"case-cell-tr\">Onlar yalnızca paralarını değil, aynı zamanda yaşamlarını da vatan uğruna harcadılar.</td><td>nōn sōlum... sed etiam... (yalnızca... değil aynı zamanda...); prō + abl. (uğruna, yoluna); profūdērunt: profundo fiili Perfectum 3. çoğul.</td></tr>\n      <tr><td class=\"case-cell-latin\">Rēgēs Rōmam ā prīncipiō habuērunt, lībertātem Lūcius Brūtus Rōmānīs dedit.</td><td>Tacitus</td><td class=\"case-cell-tr\">Krallar baştan itibaren Roma'yı ellerinde tuttular; Lucius Brutus Romalılara özgürlüğü verdi.</td><td>ā prīncipiō: baştan itibaren; dedit: dō, dare fiili Perfectum 3. tekil; Rōmānīs: Dativus (Romalılara).</td></tr>\n      <tr><td class=\"case-cell-latin\">Sub Caesare autem lībertātem perdidimus.</td><td>Laberius</td><td class=\"case-cell-tr\">Caesar'ın yönetimi altında (= Caesar zamanında) özgürlüğü kaybettik.</td><td>sub + abl. (yönetimi altında, zamanında); perdidimus: perdō fiili Perfectum 1. çoğul.</td></tr>\n      <tr><td class=\"case-cell-latin\">Nōn ille diū vixit, sed diū fuit.</td><td>Seneca</td><td class=\"case-cell-tr\">O adam uzun bir süre yaşamadı, ama uzun bir süre var oldu.</td><td>diū: uzun süre (zarf); vixit: vīvō (yaşadı); fuit: sum (var oldu). İnsan gibi yaşamakla sadece fiziksel olarak var olmak arasındaki felsefi fark.</td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Hodie multae nubes in caelo sunt signum irae acerbae deorum.",
        "tr": "Bugün gökyüzündeki",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", vaktiyle, eskiden; gelecekte",
        "tr": "bir gün",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Terra ipsa homines et animalia olim creavit. ( Lucretius )",
        "tr": "Bir zamanlar",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "bizzat toprak",
        "tr": "insanları ve hayvanları yarattı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Pan servat oves et magistros fortunatos ovium. Pan",
        "tr": "koyunları ve koyunların talihli yöneticilerini",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Vergilius"
      },
      {
        "latin": ", esse semper idem. Illum timorem in hoc viro uno invenimus. Sine labore autem nulla pax in civitatem eorum veniet.",
        "tr": "Öyleyse daima kendin olmaya cesaret et. O korkuyu yalnız bu adamda bulduk. Emek olmadan ise onların devletine hiçbir barış gelmeyecektir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", esse semper idem.",
        "tr": "Öyleyse her zaman aynı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "olmaya (",
        "tr": "aynı kişi",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "et! Illum timorem in hoc viro uno invenimus. O korkuyu",
        "tr": "bir",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "tek bu adamda buluyoruz. Sine labore autem nulla pax in civitatem eorum veniet.",
        "tr": "Ancak çaba",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ex illis terris in hunc locum cum amicis vestris venite. Post paucas horas sororem illius invenire poteramus.",
        "tr": "O topraklardan bu yere arkadaşlarınızla birlikte geliniz. Birkaç saat sonra onun kız kardeşini bulabiliyorduk.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ex illis terris in hunc locum cum amicis vestris venite. O topraklardan bu yere",
        "tr": "arkadaşlarınızla",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "birlikte geliniz! Post paucas horas sororem illius invenire poteramus.",
        "tr": "Birkaç",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "saat sonra",
        "tr": "onun kız kardeşini bulabiliyorduk",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Illi non solum pecuniam sed etiam vitam pro patria profuderunt. Onlar",
        "tr": "yalnızca paralarını değil",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": ". Reges Romam a principio habuerunt, libertatem Lucius Brutus Romanis dedit. ( Tacitus ) Krallar",
        "tr": "baştan",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "ellerinde tuttular; Lucius Brutus",
        "tr": "Romalılara özgürlüğü verdi",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Sub Caesare autem libertatem perdidimus. ( Laberius )",
        "tr": "Caesar’ın yönetimi altında",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "kaybettik. Non ille diu vixit, sed diu fuit. O",
        "tr": "adam",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
      }
    ],
    "studyTips": "Seneca'nın 'Non ille diu vixit, sed diu fuit' cümlesinde vīvō (anlamlı ve bilinçli yaşamak) ile sum (yalnızca nefes alıp var olmak) arasındaki derin felsefi ayrıma dikkat ediniz."
  },
  {
    "id": "T2_W8_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 8,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 8. Hafta (2. Ders)",
    "title": "METİN VE SENTAKS ÇÖZÜMLEMELERİ 2: PLINIUS, SENECA VE HORATIUS",
    "subtitle": "3. Şahıs İyeliği (eius/eōrum), Mektup Dili ve Ahlak Felsefesi Sentaksı",
    "summary": "Bu fasikülde 3. şahıs iyelik yapısını (eius/eōrum), grātiās agere deyimini, Plinius'un Marcellinus'a yazdığı Fundanus'un kızı mektubunu, Seneca'nın ahlak öğretilerini ve Horatius'un şiirlerindeki sentaks yapılarını 19 slaytlık eksiksiz içeriğiyle öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 8.2.pdf",
    "slideCount": 19,
    "topics": ["3. Şahıs İyeliği: eius ve eōrum", "grātiās agere (Teşekkür Etmek) Deyimi", "Seneca: Ex meīs errōribus Sentaksı", "Seneca: Hominēs, dum docent, discunt", "Plinius: Fundanus'un Kızının Vefatı (Epistulae 5.16)", "cum patientiā Sentaksı", "Horatius ve Cicero Şiir ve Felsefe Cümleleri", "neuter medicus ve tōtus populus Sentaksı"],
    "vocab": ["error", "rectus", "iter", "studium", "nimium", "traho", "amitto", "quoniam", "patientia", "toleravit", "gero", "nuper", "cupiditas", "voluptas", "beatus", "tu", "autem", "eius", "nunc", "post", "gratias", "in", "eo", "ex", "possum", "dum", "quinque", "inter", "ea", "non", "nemo", "duo", "porta", "per", "cum", "quid", "hodie", "nihil", "heri", "aut", "virtus", "idem", "nomen", "femina", "ante", "totus", "populus", "romanus", "de"],
    "sections": [
      {
        "title": "1. Ahlak Felsefesi ve İyelik Sentaksı (Slayt 2-6)",
        "html": "<p>Slayt 2-6'daki cümleler ve dilbilgisel açıklamaları:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Latince Metin</th><th>Yazar / Kaynak</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks Analizi</th></tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"case-cell-latin\">Tū autem fīliam beātam eius nunc amās.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Ancak sen şimdi onun mutlu / kutlu / talihli kızını seviyorsun.</td><td>eius: 3. şahıs tekil genetivus (onun); fīliam beātam: nesne (Acc. Sg. f.).</td></tr>\n      <tr><td class=\"case-cell-latin\">Post labōrem eius grātiās magnās eī agēmus.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Onun çalışmasından sonra ona büyük minnet duyacağız (çok teşekkür edeceğiz).</td><td>grātiās agere = birine teşekkür etmek (kime ediliyorsa Dativus haldedir: eī). agēmus: Futurum 1. çoğul.</td></tr>\n      <tr><td class=\"case-cell-latin\">Tūne vēritātem in eō librō dēmōnstrās?</td><td>Ders Notu</td><td class=\"case-cell-tr\">O kitaptaki hakikati sen mi gösteriyorsun?</td><td>-ne: soru eki (tūne); in eō librō: o kitapta (Ablativus).</td></tr>\n      <tr><td class=\"case-cell-latin\">Ex meīs errōribus hominibus rēctum iter dēmōnstrāre possum.</td><td>Seneca</td><td class=\"case-cell-tr\">Kendi hatalarımdan hareket ederek insanlara doğru yolu gösterebilirim.</td><td>iter, itineris n. (yol - Acc. Sg.); rēctus, -a, -um (doğru); hominibus: Dativus (insanlara).</td></tr>\n      <tr><td class=\"case-cell-latin\">Hominēs, dum docent, discunt.</td><td>Seneca</td><td class=\"case-cell-tr\">İnsanlar öğretirken öğrenirler.</td><td>dum + Praesens (eylem sürerken); doceō (öğretmek) vs discō (öğrenmek).</td></tr>\n      <tr><td class=\"case-cell-latin\">Studium nōn sōlum pecūniae sed etiam voluptātis hominēs nimium trahit; aliī eās cupiditātēs vincere possunt, aliī nōn possunt.</td><td>Klasik Metin</td><td class=\"case-cell-tr\">Yalnızca para hevesi değil aynı zamanda zevk hevesi de insanları aşırı derecede peşinden sürükler; bazıları o arzuları yenebilir, bazıları yenemez.</td><td>studium + Genetivus (hevesi, tutkusu); aliī... aliī... (bazıları... bazıları...); nimium: aşırı derecede (zarf).</td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "2. Okuma Parçası: Plinius'un Marcellinus'a Mektubu (Fundanus'un Kızı) (Slayt 7-9)",
        "html": "<p>Genç yaşta ölen Minicia Marcella'nın erdemini ve ailesinin kederini anlatan ünlü mektup:</p>\n<blockquote style=\"background:rgba(212,168,83,0.08); border-left:4px solid var(--eyup-gold); padding:1rem 1.25rem; margin:1rem 0; border-radius:4px; font-style:italic;\">\n  <p><strong>Latince Metin (Slayt 7):</strong><br>\n  Salvē, Marcellīne! Haec tibi scrībō dē Fundānō, amīcō nostrō; is fīliam cāram et bellam āmīsit. Illa puella nōn XIII annōs vīxerat, sed nātūra eī multam sapientiam dederat. Mātrem patremque, frātrem sorōremque, nōs et aliōs amīcōs, magistrōs magistrāsque semper amābat, et nōs eam amābāmus laudābāmusque. Medicī eam adiuvāre nōn poterant. Quoniam illa autem magnōs animōs habuit, morbum nimis malum cum patientiā tolerāvit. Nunc, mī amīce, mitte Fundānō nostrō litterās dē fortūnā acerbā fīliae eius. Valē. (Plinius)</p>\n</blockquote>\n<p><strong>Bilinmeyen Kelimeler (Slayt 8):</strong></p>\n<ul>\n  <li><span class=\"lat-word\">quoniam</span>, adv.: -dığından, için, çünkü, madem ki</li>\n  <li><span class=\"lat-word\">āmittō, -ere, āmīsī, āmissum</span>: uzağa göndermek; kaybetmek, yitirmek</li>\n</ul>\n<p><strong>Türkçe Çeviri (Slayt 9 - Eyüp Hoca):</strong></p>\n<blockquote style=\"background:rgba(255,255,255,0.04); border-left:4px solid #6b7280; padding:1rem 1.25rem; margin:1rem 0; border-radius:4px;\">\n  <p>Selam, Marcellinus! Bunları sana arkadaşımız Fundanus hakkında yazıyorum. O (Fundanus) güzel ve değerli kızını kaybetti. O kız 13 yıl yaşamadı, ama doğa ona çok fazla bilgelik bahşetti. Annesini ve babasını, erkek kardeşini ve kız kardeşini, bizi ve diğer arkadaşlarını, kadın ve erkek öğretmenlerini her zaman seviyordu; biz de onu seviyorduk ve yüceltiyorduk. Hekimler ona yardımcı olamıyordu. Büyük bir cesarete sahip olduğundan, son derece kötü olan hastalığa sabırla katlandı. Şimdi, ey arkadaşım, Fundanus'umuza kızının acımasız talihi hakkında bir mektup gönder. Hoşça kal.</p>\n</blockquote>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "3. Klasik Sentaks Alıştırmaları (Slayt 10-19)",
        "html": "<p>Slayt 10-19 arasındaki klasik sentaks cümleleri:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Latince Metin</th><th>Yazar / Kaynak</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks Analizi</th></tr>\n    </thead>\n    <tbody>\n      <tr><td class=\"case-cell-latin\">Illae quīnque fēminae inter ea animālia mortem nōn timēbant.</td><td>Ders Notu</td><td class=\"case-cell-tr\">O beş kadın o hayvanlar arasında ölümden korkmuyorlardı.</td><td>inter + acc. (arasında); timēbant: Imperfectum 3. çoğul.</td></tr>\n      <tr><td class=\"case-cell-latin\">Nēmō eandem partem Asiae ūnō annō vincet.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Hiç kimse Asya'nın aynı bölgesini bir yıl içinde yenmeyecek.</td><td>ūnō annō: Ablativus temporis (bir yıl içinde); eandem: idem zamiri Acc. Sg. f.</td></tr>\n      <tr><td class=\"case-cell-latin\">Duo ex fīliīs ā portā per agrōs cum patre suō currēbant.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Oğullardan ikisi kapıdan itibaren tarlalar boyunca babalarıyla birlikte koşuyorlardı.</td><td>duo ex fīliīs: bütünden parça (oğullardan ikisi); per + acc. (boyunca).</td></tr>\n      <tr><td class=\"case-cell-latin\">Quid discipulae hodiē discere dēbent?</td><td>Ders Notu</td><td class=\"case-cell-tr\">Öğrencilerin bugün ne öğrenmesi gerekiyor? (Öğrenciler bugün ne öğrenmek zorundalar?)</td><td>quid: soru zamiri; dēbent + mastar (zorundalar, gerekmektedir).</td></tr>\n      <tr><td class=\"case-cell-latin\">Frātrēs meī nihil cum ratiōne herī gerēbant.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Erkek kardeşlerim dün aklı başında hiçbir şey yapmıyorlardı (= akıllarıyla hareket etmiyorlardı).</td><td>cum ratiōne: tarz bildiren ablativus (akıl ile, mantık çerçevesinde).</td></tr>\n      <tr><td class=\"case-cell-latin\">Nōn omnēs eadem amant aut eāsdem cupiditātēs studiaque habent.</td><td>Horatius</td><td class=\"case-cell-tr\">Herkes aynı şeyleri sevmez veya herkes aynı arzulara ve heveslere sahip olmaz.</td><td>eadem: nötr çoğul accusativus (aynı şeyleri); eāsdem: dişil çoğul accusativus.</td></tr>\n      <tr><td class=\"case-cell-latin\">Virtūs tua mē amīcum tibi facit.</td><td>Horatius</td><td class=\"case-cell-tr\">Senin erdemin beni sana dost kılıyor.</td><td>amīcum praedicativum nesne tamamlayıcısı; tibi: Dativus (sana).</td></tr>\n      <tr><td class=\"case-cell-latin\">Omnēs īdem sentiunt.</td><td>Cicero</td><td class=\"case-cell-tr\">Herkes aynı şeyi hissediyor.</td><td>īdem: nötr tekil accusativus (aynı şeyi); sentiunt: 3. çoğul.</td></tr>\n      <tr><td class=\"case-cell-latin\">Neuter medicus nōmen Cicerōnis audīverat.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Hiçbir hekim (= iki hekimden hiçbiri = ne o ne de bu hekim) Cicero'nun adını işitmemişti.</td><td>neuter: iki şeyden hiçbiri (UNUS NAUTA sıfatı); audīverat: Plusquamperfectum.</td></tr>\n      <tr><td class=\"case-cell-latin\">Fēmina ante illam hōram litterās suās mīserat.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Kadın o saatten önce kendi mektuplarını göndermişti.</td><td>ante + acc. (önce); suās: kendi (dönüşlü iyelik sıfatı).</td></tr>\n      <tr><td class=\"case-cell-latin\">Tōtus populus Rōmānus lībertātem āmīsit.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Bütün Roma halkı özgürlüğünü kaybetti.</td><td>tōtus: bütün, tüm (UNUS NAUTA sıfatı); āmīsit: Perfectum 3. tekil.</td></tr>\n      <tr><td class=\"case-cell-latin\">Monuitne nūper eōs dē vīribus illārum urbium in Asiā?</td><td>Ders Notu</td><td class=\"case-cell-tr\">Asya'daki o kentlerin kuvveti / insanları hakkında son zamanlarda onları uyardı mı?</td><td>-ne soru takısı; nūper: son zamanlarda, geçenlerde (zarf).</td></tr>\n      <tr><td class=\"case-cell-latin\">Nōmina multārum urbium nostrārum ab nōminibus urbium antīquārum trāximus.</td><td>Ders Notu</td><td class=\"case-cell-tr\">Bize ait pek çok kentin adlarını eski kentlerin adlarından aldık.</td><td>trāximus: trahō fiilinin Perfectum 1. çoğul hali (türettik, aldık).</td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Tu autem filiam beatam eius nunc amas. Post laborem eius gratias magnas ei agemus. Tune veritatem in eo libro demonstras.",
        "tr": "Sen ise onun mutlu kızını şimdi seviyorsun. Onun çalışmasından sonra ona büyük teşekkürler edeceğiz. Sen o kitapta hakikati gösteriyor musun?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Tu autem filiam beatam eius nunc amas.",
        "tr": "Sen ise onun mutlu kızını şimdi seviyorsun. Onun çalışmasından sonra ona büyük teşekkürler edeceğiz. Sen o kitapta hakikati gösteriyor musun?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "/ kutlu /",
        "tr": "talihli kızını",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "seviyorsun. Post laborem eius gratias magnas ei agemus.",
        "tr": "Onun çalışmasından",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "sonra ona",
        "tr": "büyük",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "). Tune veritatem in eo libro demonstras? O kitaptaki hakikati sen mi",
        "tr": "gösteriyorsun",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ", - den",
        "tr": "dolayı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ex meis erroribus hominibus rectum iter demonstrare possum.",
        "tr": "Kendi hatalarımdan",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
      },
      {
        "latin": ". Homines, dum docent, discunt.",
        "tr": "İnsanlar öğretirken öğrenirler",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
      },
      {
        "latin": "Illae quinque feminae inter ea animalia mortem non timebant. Nemo eandem partem Asiae uno anno vincet. Duo ex filiis a porta per agros cum patre suo currebant.",
        "tr": "O beş kadın bu hayvanların arasında ölümden korkmuyordu. Hiç kimse Asya'nın aynı parçasını bir yılda fethedemez. Oğullardan ikisi kapıdan tarlaların arasından babalarıyla birlikte koşuyordu.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Illae quinque feminae inter ea animalia mortem non timebant. O",
        "tr": "beş kadın",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "o hayvanlar",
        "tr": "arasında ölümden korkmuyordu",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Nemo eandem partem Asiae uno anno vincet.",
        "tr": "O beş kadın bu hayvanların arasında ölümden korkmuyordu. Hiç kimse Asya'nın aynı parçasını bir yılda fethedemez. Oğullardan ikisi kapıdan tarlaların arasından babalarıyla birlikte koşuyordu.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "yenmeyecek. Duo ex filiis a porta per agros cum patre suo currebant.",
        "tr": "Oğullardan",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "itibaren tarlalar boyunca",
        "tr": "babalarıyla",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Quid discipulae hodie discere debent?",
        "tr": "Öğrencilerin bugün ne öğrenmesi gerekiyor",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "zorundalar?) Fratres mei nihil cum ratione heri gerebant. Erkek",
        "tr": "kardeşlerim dün aklı başında hiçbir şey yapmıyorlardı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Non omnes eadem amant aut easdem cupiditates studiaque habent. Virtus tua me amicum tibi facit. Omnes idem sentiunt. ( Cicero )",
        "tr": "Herkes aynı şeyleri sevmez ya da aynı arzulara ve uğraşlara sahip değildir. (Horatius) Senin erdemin beni sana dost kılar. (Horatius) Herkes aynı şeyi düşünüyor. (Cicero)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": "Non omnes eadem amant aut easdem cupiditates studiaque habent. Herkes",
        "tr": "aynı şeyleri",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": "sevmez veya herkes",
        "tr": "aynı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "heveslere sahip olmaz. Virtus tua me amicum tibi facit.",
        "tr": "Senin",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      },
      {
        "latin": ". Omnes idem sentiunt. Herkes",
        "tr": "aynı şeyi hissediyor",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "Neuter medicus nomen Ciceronis audiverat. Femina ante illam horam litteras suas miserat. Totus populus Romanus libertatem amisit.",
        "tr": "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Neuter medicus nomen Ciceronis audiverat.",
        "tr": "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "hekim (= iki hekimden",
        "tr": "hiçbiri = ne o ne de",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "bu hekim ) Cicero’nun",
        "tr": "adını işitmemişti",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Femina ante illam horam litteras suas miserat.",
        "tr": "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "o saatten",
        "tr": "önce kendi mektuplarını göndermişti",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": ". Totus populus Romanus libertatem amisit.",
        "tr": "İki hekimden hiçbiri Cicero'nun adını duymamıştı. Kadın o saatten önce kendi mektubunu göndermişti. Bütün Roma halkı özgürlüğünü kaybetti.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Monuitne nuper eos de viribus illarum urbium in Asia? Asya’daki o kentlerin",
        "tr": "insanları hakkında",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "son zamanlarda",
        "tr": "onları uyardı mı",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "? Nomina multarum urbium nostrarum ab nominibus urbium antiquarum traximus. Bize ait pek",
        "tr": "çok",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "eski kentlerin",
        "tr": "adlarından aldık",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "neuter sözcüğü 'iki şeyden hiçbiri' demektir ve UNUS NAUTA kuralına tabidir (Gen. neutrīus, Dat. neutrī)."
  },
  {
    "id": "T2_W11_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 11,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 11. Hafta (1. Ders)",
    "title": "EDİLGEN ÇATI 1 (VOX PASSIVA): ŞİMDİKİ, HİKÂYE VE GELECEK ZAMAN",
    "subtitle": "1. ve 2. Çekim Fiillerde Praesens, Imperfectum ve Futurum Passivi",
    "summary": "Bu fasikülde Latince fiil sisteminde çığır açan Edilgen Çatıyı (Vox Passiva), evrensel edilgen şahıs eklerini (-r, -ris, -tur, -mur, -minī, -ntur), 1. ve 2. grup fiillerin Şimdiki (Praesens), Hikâye (Imperfectum) ve Gelecek (Futurum) zamanlardaki tam paradigmalarını ve etken-edilgen mukayese tablolarını öğreneceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 11.1.pdf",
    "slideCount": 30,
    "topics": ["Edilgen Çatının Temel Mantığı (Vox Passiva)", "5 Fiil Grubunun Şimdiki Zaman Gövdeleri", "1. Grup Praesens Passivi (laudor, cogitor)", "2. Grup Praesens Passivi (moneor, videor)", "1. ve 2. Grup Etken vs Edilgen Praesens Karşılaştırması", "1. Grup Imperfectum Passivi (laudābar, cogitābar)", "2. Grup Imperfectum Passivi (monēbar, vidēbar)", "1. ve 2. Grup Etken vs Edilgen Imperfectum Karşılaştırması", "1. Grup Futurum Passivi (laudābor, cogitābor)", "2. Grup Futurum Passivi (monēbor, vidēbor)", "1. ve 2. Grup Etken vs Edilgen Futurum Karşılaştırması", "1. ve 2. Çekim Fiil Dağarcığı"],
    "vocab": ["laudor", "moneor", "videor", "cogitor", "accuso", "advoco", "regno", "sacrifico", "pugno", "aedifico", "sacro", "animo", "appello", "confirmo", "invideo", "misceo", "persuadeo", "prohibeo", "terreo", "debeo", "doceo", "valeo", "taceo"],
    "sections": [
      {
        "title": "1. Edilgen Çatının Temel Mantığı ve Şimdiki Zaman Gövdeleri (Slayt 2-3)",
        "html": "<p><strong>Edilgen Çatı (Vox Passiva),</strong> fiilin özne üzerinde etkide bulunduğunu, yani özneye ne yapıldığını veya öznenin neye maruz kaldığını bildirir. Bu çatıda özne eylemi yapan fail değil, eylemden etkilenen kişidir:</p>\n<ul>\n  <li><em>Etken Çatı (Vox Activa):</em> Caesar amat. (Caesar seviyor.) / Caesar tē amat. (Caesar seni seviyor.)</li>\n  <li><em>Edilgen Çatı (Vox Passiva):</em> Caesar amātur. (Caesar seviliyor.) / Caesar ā tē amātur. (Caesar senin tarafından seviliyor.)</li>\n</ul>\n<p><strong>Evrensel Edilgen Şahıs Ekleri (Praesens Sisteminde):</strong></p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead><tr><th>Şahıs</th><th>Etken Ek</th><th>Edilgen Ek</th><th>İşlevi</th></tr></thead>\n    <tbody>\n      <tr><td>1. Singularis (Ben)</td><td class=\"case-cell-latin\">-ō / -m</td><td class=\"case-cell-latin\"><strong>-r / -or</strong></td><td>-iliyorum, -ilirim</td></tr>\n      <tr><td>2. Singularis (Sen)</td><td class=\"case-cell-latin\">-s</td><td class=\"case-cell-latin\"><strong>-ris (-re)</strong></td><td>-iliyorsun, -ilirsin</td></tr>\n      <tr><td>3. Singularis (O)</td><td class=\"case-cell-latin\">-t</td><td class=\"case-cell-latin\"><strong>-tur</strong></td><td>-iliyor, -ilir</td></tr>\n      <tr><td>1. Pluralis (Biz)</td><td class=\"case-cell-latin\">-mus</td><td class=\"case-cell-latin\"><strong>-mur</strong></td><td>-iliyoruz, -iliriz</td></tr>\n      <tr><td>2. Pluralis (Siz)</td><td class=\"case-cell-latin\">-tis</td><td class=\"case-cell-latin\"><strong>-minī</strong></td><td>-iliyorsunuz, -ilirsiniz</td></tr>\n      <tr><td>3. Pluralis (Onlar)</td><td class=\"case-cell-latin\">-nt</td><td class=\"case-cell-latin\"><strong>-ntur</strong></td><td>-iliyorlar, -ilirler</td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "rule",
        "calloutTitle": "1. Çekim 1. Tekil Şahıs Kuralı (Slayt 4)",
        "calloutText": "1. çekim fiillerde kökteki -ā- ünlüsü 1. tekil şahıs eki -or ile birleştiğinde erir: lauda-or > laudor.",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Beş Fiil Grubunun Şimdiki Zaman Gövdeleri (Slayt 3)</strong>\n    <span class=\"table-sub\">(Slayt 3)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Grup</th>\n        <th>Sözlük Yazılışı</th>\n        <th>Şimdiki Zaman Gövdesi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Grup</strong></td>\n        <td class=\"case-cell-latin\">laudō, laudāre, laudāvī, laudātum</td>\n        <td class=\"case-cell-latin\">laudā-</td>\n      </tr>\n      <tr>\n        <td><strong>2. Grup</strong></td>\n        <td class=\"case-cell-latin\">moneō, monēre, monuī, monitum</td>\n        <td class=\"case-cell-latin\">monē-</td>\n      </tr>\n      <tr>\n        <td><strong>3. Grup</strong></td>\n        <td class=\"case-cell-latin\">legō, legere, lēgī, lectum</td>\n        <td class=\"case-cell-latin\">lege-</td>\n      </tr>\n      <tr>\n        <td><strong>4. Grup</strong></td>\n        <td class=\"case-cell-latin\">audiō, audīre, audīvī, audītum</td>\n        <td class=\"case-cell-latin\">audī-</td>\n      </tr>\n      <tr>\n        <td><strong>5. Grup (-io)</strong></td>\n        <td class=\"case-cell-latin\">capiō, capere, cēpī, captum</td>\n        <td class=\"case-cell-latin\">capĭ-</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. 1. ve 2. Grup Edilgen Şimdiki Zaman (Praesens Passivi) Tabloları (Slayt 4-12)",
        "html": "<p>Slayt 5, 6, 9, 10 ve 12'deki tam çekim paradigmaları:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">laudō (1. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(laudō, laudāre — övmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">laudor</td>\n        <td class=\"case-cell-tr\">övülüyorum / övülürüm</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudāris (-re)</td>\n        <td class=\"case-cell-tr\">övülüyorsun / övülürsün</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">laudātur</td>\n        <td class=\"case-cell-tr\">övülüyor / övülür</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">laudāmur</td>\n        <td class=\"case-cell-tr\">övülüyoruz / övülürüz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudāminī</td>\n        <td class=\"case-cell-tr\">övülüyorsunuz / övülürsünüz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">laudantur</td>\n        <td class=\"case-cell-tr\">övülüyorlar / övülürler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">cōgitō (1. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(cōgitō, cōgitāre — düşünmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">cōgitor</td>\n        <td class=\"case-cell-tr\">düşünülüyorum / düşünülürüm</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">cōgitāris (-re)</td>\n        <td class=\"case-cell-tr\">düşünülüyorsun / düşünülürsün</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">cōgitātur</td>\n        <td class=\"case-cell-tr\">düşünülüyor / düşünülür</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">cōgitāmur</td>\n        <td class=\"case-cell-tr\">düşünülüyoruz / düşünülürüz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">cōgitāminī</td>\n        <td class=\"case-cell-tr\">düşünülüyorsunuz / düşünülürsünüz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">cōgitantur</td>\n        <td class=\"case-cell-tr\">düşünülüyorlar / düşünülürler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">moneō (2. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(moneō, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">moneor</td>\n        <td class=\"case-cell-tr\">uyarılıyorum / uyarılırım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monēris (-re)</td>\n        <td class=\"case-cell-tr\">uyarılıyorsun / uyarılırsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monētur</td>\n        <td class=\"case-cell-tr\">uyarılıyor / uyarılır</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monēmur</td>\n        <td class=\"case-cell-tr\">uyarılıyoruz / uyarılırız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monēminī</td>\n        <td class=\"case-cell-tr\">uyarılıyorsunuz / uyarılırsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monentur</td>\n        <td class=\"case-cell-tr\">uyarılıyorlar / uyarılırlar</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> 2. grupta gövdedeki -ē- sesi korunur ve yanına -or getirilir: mone-or.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">videō (2. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(videō, vidēre — görmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">videor</td>\n        <td class=\"case-cell-tr\">görülüyorum / görülürüm</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">vidēris (-re)</td>\n        <td class=\"case-cell-tr\">görülüyorsun / görülürsün</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">vidētur</td>\n        <td class=\"case-cell-tr\">görülüyor / görülür</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">vidēmur</td>\n        <td class=\"case-cell-tr\">görülüyoruz / görülürüz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">vidēminī</td>\n        <td class=\"case-cell-tr\">görülüyorsunuz / görülürsünüz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">videntur</td>\n        <td class=\"case-cell-tr\">görülüyorlar / görülürler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">1. ve 2. Grup Etken ve Edilgen Praesens Mukayesesi (Slayt 12)</strong>\n    <span class=\"table-sub\">(Slayt 12)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp Etken (laudō)</th>\n        <th>2. Grp Etken (moneō)</th>\n        <th>1. Grp Edilgen (laudor)</th>\n        <th>2. Grp Edilgen (moneor)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudō</td>\n        <td class=\"case-cell-latin\">moneō</td>\n        <td class=\"case-cell-latin\">laudor</td>\n        <td class=\"case-cell-latin\">moneor</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudās</td>\n        <td class=\"case-cell-latin\">monēs</td>\n        <td class=\"case-cell-latin\">laudāris (-re)</td>\n        <td class=\"case-cell-latin\">monēris (-re)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudat</td>\n        <td class=\"case-cell-latin\">monet</td>\n        <td class=\"case-cell-latin\">laudātur</td>\n        <td class=\"case-cell-latin\">monētur</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudāmus</td>\n        <td class=\"case-cell-latin\">monēmus</td>\n        <td class=\"case-cell-latin\">laudāmur</td>\n        <td class=\"case-cell-latin\">monēmur</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudātis</td>\n        <td class=\"case-cell-latin\">monētis</td>\n        <td class=\"case-cell-latin\">laudāminī</td>\n        <td class=\"case-cell-latin\">monēminī</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudant</td>\n        <td class=\"case-cell-latin\">monent</td>\n        <td class=\"case-cell-latin\">laudantur</td>\n        <td class=\"case-cell-latin\">monentur</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. 1. ve 2. Grup Edilgen Hikâye Zamanı (Imperfectum Passivi) Tabloları (Slayt 13-21)",
        "html": "<p>Gövdeye <strong>-bā-</strong> zaman eki ve ardından edilgen şahıs ekleri (-r, -ris, -tur, -mur, -minī, -ntur) eklenir:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">laudō (1. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(laudō, laudāre — övmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">laudābar</td>\n        <td class=\"case-cell-tr\">övülüyordum / övülürdüm</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudābāris (-re)</td>\n        <td class=\"case-cell-tr\">övülüyordun / övülürdün</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">laudābātur</td>\n        <td class=\"case-cell-tr\">övülüyordu / övülürdü</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">laudābāmur</td>\n        <td class=\"case-cell-tr\">övülüyorduk / övülürdük</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudābāminī</td>\n        <td class=\"case-cell-tr\">övülüyordunuz / övülürdünüz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">laudābantur</td>\n        <td class=\"case-cell-tr\">övülüyorlardı / övülürlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">cōgitō (1. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(cōgitō, cōgitāre — düşünmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābar</td>\n        <td class=\"case-cell-tr\">düşünülüyordum / düşünülürdüm</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābāris (-re)</td>\n        <td class=\"case-cell-tr\">düşünülüyordun / düşünülürdün</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābātur</td>\n        <td class=\"case-cell-tr\">düşünülüyordu / düşünülürdü</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābāmur</td>\n        <td class=\"case-cell-tr\">düşünülüyorduk / düşünülürdük</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābāminī</td>\n        <td class=\"case-cell-tr\">düşünülüyordunuz / düşünülürdünüz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābantur</td>\n        <td class=\"case-cell-tr\">düşünülüyorlardı / düşünülürlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">moneō (2. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(moneō, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">monēbar</td>\n        <td class=\"case-cell-tr\">uyarılıyordum / uyarılırdım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monēbāris (-re)</td>\n        <td class=\"case-cell-tr\">uyarılıyordun / uyarılırdın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monēbātur</td>\n        <td class=\"case-cell-tr\">uyarılıyordu / uyarılırdı</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monēbāmur</td>\n        <td class=\"case-cell-tr\">uyarılıyorduk / uyarılırdık</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monēbāminī</td>\n        <td class=\"case-cell-tr\">uyarılıyordunuz / uyarılırdınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monēbantur</td>\n        <td class=\"case-cell-tr\">uyarılıyorlardı / uyarılırlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">videō (2. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(videō, vidēre — görmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">vidēbar</td>\n        <td class=\"case-cell-tr\">görülüyordum / görülürdüm</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">vidēbāris (-re)</td>\n        <td class=\"case-cell-tr\">görülüyordun / görülürdün</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">vidēbātur</td>\n        <td class=\"case-cell-tr\">görülüyordu / görülürdü</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">vidēbāmur</td>\n        <td class=\"case-cell-tr\">görülüyorduk / görülürdük</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">vidēbāminī</td>\n        <td class=\"case-cell-tr\">görülüyordunuz / görülürdünüz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">vidēbantur</td>\n        <td class=\"case-cell-tr\">görülüyorlardı / görülürlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">1. ve 2. Grup Etken ve Edilgen Imperfectum Mukayesesi (Slayt 21)</strong>\n    <span class=\"table-sub\">(Slayt 21)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp Etken (laudābam)</th>\n        <th>2. Grp Etken (monēbam)</th>\n        <th>1. Grp Edilgen (laudābar)</th>\n        <th>2. Grp Edilgen (monēbar)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābam</td>\n        <td class=\"case-cell-latin\">monēbam</td>\n        <td class=\"case-cell-latin\">laudābar</td>\n        <td class=\"case-cell-latin\">monēbar</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābās</td>\n        <td class=\"case-cell-latin\">monēbās</td>\n        <td class=\"case-cell-latin\">laudābāris (-re)</td>\n        <td class=\"case-cell-latin\">monēbāris (-re)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābat</td>\n        <td class=\"case-cell-latin\">monēbat</td>\n        <td class=\"case-cell-latin\">laudābātur</td>\n        <td class=\"case-cell-latin\">monēbātur</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābāmus</td>\n        <td class=\"case-cell-latin\">monēbāmus</td>\n        <td class=\"case-cell-latin\">laudābāmur</td>\n        <td class=\"case-cell-latin\">monēbāmur</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābātis</td>\n        <td class=\"case-cell-latin\">monēbātis</td>\n        <td class=\"case-cell-latin\">laudābāminī</td>\n        <td class=\"case-cell-latin\">monēbāminī</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābant</td>\n        <td class=\"case-cell-latin\">monēbant</td>\n        <td class=\"case-cell-latin\">laudābantur</td>\n        <td class=\"case-cell-latin\">monēbantur</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. 1. ve 2. Grup Edilgen Gelecek Zaman (Futurum Passivi) Tabloları (Slayt 22-30)",
        "html": "<p>1. ve 2. grupta gövdeye <strong>-bor, -beris, -bitur, -bimur, -biminī, -buntur</strong> ekleri getirilir. 2. tekildeki ara sesin <em>-e-</em> (-beris) olduğuna dikkat ediniz:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">laudō (1. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(laudō, laudāre — övmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">laudābor</td>\n        <td class=\"case-cell-tr\">övüleceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">laudāberis (-re)</td>\n        <td class=\"case-cell-tr\">övüleceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">laudābitur</td>\n        <td class=\"case-cell-tr\">övülecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">laudābimur</td>\n        <td class=\"case-cell-tr\">övüleceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">laudābiminī</td>\n        <td class=\"case-cell-tr\">övüleceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">laudābuntur</td>\n        <td class=\"case-cell-tr\">övülecekler</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> 2. tekil şahısta ara ses -i- değil -e- olur: laudāberis.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">cōgitō (1. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(cōgitō, cōgitāre — düşünmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābor</td>\n        <td class=\"case-cell-tr\">düşünüleceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">cōgitāberis (-re)</td>\n        <td class=\"case-cell-tr\">düşünüleceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābitur</td>\n        <td class=\"case-cell-tr\">düşünülecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābimur</td>\n        <td class=\"case-cell-tr\">düşünüleceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābiminī</td>\n        <td class=\"case-cell-tr\">düşünüleceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">cōgitābuntur</td>\n        <td class=\"case-cell-tr\">düşünülecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">moneō (2. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(moneō, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">monēbor</td>\n        <td class=\"case-cell-tr\">uyarılacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monēberis (-re)</td>\n        <td class=\"case-cell-tr\">uyarılacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monēbitur</td>\n        <td class=\"case-cell-tr\">uyarılacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monēbimur</td>\n        <td class=\"case-cell-tr\">uyarılacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monēbiminī</td>\n        <td class=\"case-cell-tr\">uyarılacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monēbuntur</td>\n        <td class=\"case-cell-tr\">uyarılacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">videō (2. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(videō, vidēre — görmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">vidēbor</td>\n        <td class=\"case-cell-tr\">görüleceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">vidēberis (-re)</td>\n        <td class=\"case-cell-tr\">görüleceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">vidēbitur</td>\n        <td class=\"case-cell-tr\">görülecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">vidēbimur</td>\n        <td class=\"case-cell-tr\">görüleceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">vidēbiminī</td>\n        <td class=\"case-cell-tr\">görüleceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">vidēbuntur</td>\n        <td class=\"case-cell-tr\">görülecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">1. ve 2. Grup Etken ve Edilgen Futurum Mukayesesi (Slayt 30)</strong>\n    <span class=\"table-sub\">(Slayt 30)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp Etken (laudābō)</th>\n        <th>2. Grp Etken (monēbō)</th>\n        <th>1. Grp Edilgen (laudābor)</th>\n        <th>2. Grp Edilgen (monēbor)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābō</td>\n        <td class=\"case-cell-latin\">monēbō</td>\n        <td class=\"case-cell-latin\">laudābor</td>\n        <td class=\"case-cell-latin\">monēbor</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābis</td>\n        <td class=\"case-cell-latin\">monēbis</td>\n        <td class=\"case-cell-latin\">laudāberis (-re)</td>\n        <td class=\"case-cell-latin\">monēberis (-re)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābit</td>\n        <td class=\"case-cell-latin\">monēbit</td>\n        <td class=\"case-cell-latin\">laudābitur</td>\n        <td class=\"case-cell-latin\">monēbitur</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābimus</td>\n        <td class=\"case-cell-latin\">monēbimus</td>\n        <td class=\"case-cell-latin\">laudābimur</td>\n        <td class=\"case-cell-latin\">monēbimur</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābitis</td>\n        <td class=\"case-cell-latin\">monēbitis</td>\n        <td class=\"case-cell-latin\">laudābiminī</td>\n        <td class=\"case-cell-latin\">monēbiminī</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābunt</td>\n        <td class=\"case-cell-latin\">monēbunt</td>\n        <td class=\"case-cell-latin\">laudābuntur</td>\n        <td class=\"case-cell-latin\">monēbuntur</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "Futurum 2. tekil şahıstaki laudāberis ve monēberis çekimlerini zihninizde iyice yerleştiriniz; ara ses -i- değil daima -e- olur!"
  },
  {
    "id": "T2_W12_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 12,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 12. Hafta (1. Ders)",
    "title": "EDİLGEN ÇATI 2: 3., 4. VE 5. (-IO) GRUP FİİLLERDE PRAESENS VE IMPERFECTUM",
    "subtitle": "legor, audior, capior Çekim Tabloları ve 5 Grubun Mukayesesi",
    "summary": "Bu fasikülde ünsüz gövdeli 3. grup (legō, regō), uzun -ī gövdeli 4. grup (audiō, assentior) ve ara sesli 5. grup (-io: capiō, faciō) fiillerin Şimdiki (Praesens) ve Hikâye (Imperfectum) zamanlarındaki edilgen çekimlerini ve tüm 5 grubun büyük mukayese tablolarını göreceksiniz.",
    "difficulty": "Orta-İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 12.1.pdf",
    "slideCount": 35,
    "topics": ["3. Grup Praesens Passivi (legor, regor)", "4. Grup Praesens Passivi (audior, assentior)", "5. Grup (-io) Praesens Passivi (capior, facior)", "3, 4 ve 5. Grup Praesens Passivi Mukayesesi", "Beş Grubun Praesens Passivi Tam Tablosu", "3. Grup Imperfectum Passivi (legēbar, regēbar)", "4. Grup Imperfectum Passivi (audiēbar, leniēbar)", "5. Grup (-io) Imperfectum Passivi (capiēbar, faciēbar)", "Beş Grubun Imperfectum Passivi Tam Tablosu", "Fiil Dağarcığı ve Sözlük Anlamları"],
    "vocab": ["legor", "regor", "audior", "assentior", "capior", "facior", "ago", "duco", "scribo", "gero", "traho", "tango", "frango", "neglego", "erudio", "finio", "haurio", "invenio", "sentio", "subvenio", "impedio", "lenio", "traicio", "accipio", "afficio", "conficio", "decipio", "despicio", "conspicio", "excipio"],
    "sections": [
      {
        "title": "1. 3., 4. ve 5. Grup Edilgen Şimdiki Zaman (Praesens Passivi) (Slayt 4-19)",
        "html": "<p>3., 4. ve 5. grup fiillerin şimdiki zaman edilgen çekim özellikleri:</p>\n<ul>\n  <li><strong>3. Grup:</strong> Gövdedeki -e- sesi 2. tekil şahısta korunur (<span class=\"lat-word\">regeris</span>), diğer şahıslarda -i- olur (<span class=\"lat-word\">regitur</span>, <span class=\"lat-word\">regimur</span>), 3. çoğulda ise -u- olur (<span class=\"lat-word\">reguntur</span>).</li>\n  <li><strong>4. Grup:</strong> Gövdedeki uzun -ī- sesi 1. tekil ve 3. çoğul şahıslardan önce kısalır (<span class=\"lat-word\">audior</span>, <span class=\"lat-word\">audiuntur</span>).</li>\n  <li><strong>5. Grup (-io):</strong> 2. tekil şahısta -i- sesi -e-'ye dönüşür (<span class=\"lat-word\">caperis</span>); diğer şahıslarda -i- korunur (<span class=\"lat-word\">capior</span>, <span class=\"lat-word\">capitur</span>, <span class=\"lat-word\">capiuntur</span>).</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">legō (3. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(legō, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">legor</td>\n        <td class=\"case-cell-tr\">okunuyorum / okunurum</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">legeris (-re)</td>\n        <td class=\"case-cell-tr\">okunuyorsun / okunursun</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">legitur</td>\n        <td class=\"case-cell-tr\">okunuyor / okunur</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">legimur</td>\n        <td class=\"case-cell-tr\">okunuyoruz / okunuruz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">legiminī</td>\n        <td class=\"case-cell-tr\">okunuyorsunuz / okunursunuz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">leguntur</td>\n        <td class=\"case-cell-tr\">okunuyorlar / okunurlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">regō (3. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(regō, regere — yönetmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">regor</td>\n        <td class=\"case-cell-tr\">yönetiliyorum / yönetilirim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">regeris (-re)</td>\n        <td class=\"case-cell-tr\">yönetiliyorsun / yönetilirsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">regitur</td>\n        <td class=\"case-cell-tr\">yönetiliyor / yönetilir</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">regimur</td>\n        <td class=\"case-cell-tr\">yönetiliyoruz / yönetiliriz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">regiminī</td>\n        <td class=\"case-cell-tr\">yönetiliyorsunuz / yönetilirsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">reguntur</td>\n        <td class=\"case-cell-tr\">yönetiliyorlar / yönetilirler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audiō (4. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(audiō, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audior</td>\n        <td class=\"case-cell-tr\">işitiliyorum / işitilirim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audīris (-re)</td>\n        <td class=\"case-cell-tr\">işitiliyorsun / işitilirsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audītur</td>\n        <td class=\"case-cell-tr\">işitiliyor / işitilir</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audīmur</td>\n        <td class=\"case-cell-tr\">işitiliyoruz / işitiliriz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audīminī</td>\n        <td class=\"case-cell-tr\">işitiliyorsunuz / işitilirsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audiuntur</td>\n        <td class=\"case-cell-tr\">işitiliyorlar / işitilirler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">assentiō (4. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(assentiō, assentīre — onaylamak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">assentior</td>\n        <td class=\"case-cell-tr\">onaylanıyorum / onaylanırım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">assentīris (-re)</td>\n        <td class=\"case-cell-tr\">onaylanıyorsun / onaylanırsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">assentītur</td>\n        <td class=\"case-cell-tr\">onaylanıyor / onaylanır</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">assentīmur</td>\n        <td class=\"case-cell-tr\">onaylanıyoruz / onaylanırız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">assentīminī</td>\n        <td class=\"case-cell-tr\">onaylanıyorsunuz / onaylanırsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">assentiuntur</td>\n        <td class=\"case-cell-tr\">onaylanıyorlar / onaylanırlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">capiō (5. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(capiō, capere — ele geçirmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">capior</td>\n        <td class=\"case-cell-tr\">ele geçiriliyorum / geçirilirim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">caperis (-re)</td>\n        <td class=\"case-cell-tr\">ele geçiriliyorsun / geçirilirsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">capitur</td>\n        <td class=\"case-cell-tr\">ele geçiriliyor / geçirilir</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">capimur</td>\n        <td class=\"case-cell-tr\">ele geçiriliyoruz / geçiriliriz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">capiminī</td>\n        <td class=\"case-cell-tr\">ele geçiriliyorsunuz / geçirilirsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">capiuntur</td>\n        <td class=\"case-cell-tr\">ele geçiriliyorlar / geçirilirler</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> 2. tekil şahısta gövdedeki -i- sesi -e- olur: caperis.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">faciō (5. Grup) — Praesens Passivi</strong>\n    <span class=\"table-sub\">(faciō, facere — yapmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">facior</td>\n        <td class=\"case-cell-tr\">yapılıyorum / yapılırım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">faceris (-re)</td>\n        <td class=\"case-cell-tr\">yapılıyorsun / yapılırsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">facitur</td>\n        <td class=\"case-cell-tr\">yapılıyor / yapılır</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">facimur</td>\n        <td class=\"case-cell-tr\">yapılıyoruz / yapılırız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">faciminī</td>\n        <td class=\"case-cell-tr\">yapılıyorsunuz / yapılırsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">faciuntur</td>\n        <td class=\"case-cell-tr\">yapılıyorlar / yapılırlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Bütün 5 Grubun Praesens Passivi Karşılaştırması (Slayt 19)</strong>\n    <span class=\"table-sub\">(Slayt 19)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp (laudor)</th>\n        <th>2. Grp (moneor)</th>\n        <th>3. Grp (legor)</th>\n        <th>4. Grp (audior)</th>\n        <th>5. Grp (capior)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudor</td>\n        <td class=\"case-cell-latin\">moneor</td>\n        <td class=\"case-cell-latin\">legor</td>\n        <td class=\"case-cell-latin\">audior</td>\n        <td class=\"case-cell-latin\">capior</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudāris (-re)</td>\n        <td class=\"case-cell-latin\">monēris (-re)</td>\n        <td class=\"case-cell-latin\">legeris (-re)</td>\n        <td class=\"case-cell-latin\">audīris (-re)</td>\n        <td class=\"case-cell-latin\">caperis (-re)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudātur</td>\n        <td class=\"case-cell-latin\">monētur</td>\n        <td class=\"case-cell-latin\">legitur</td>\n        <td class=\"case-cell-latin\">audītur</td>\n        <td class=\"case-cell-latin\">capitur</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudāmur</td>\n        <td class=\"case-cell-latin\">monēmur</td>\n        <td class=\"case-cell-latin\">legimur</td>\n        <td class=\"case-cell-latin\">audīmur</td>\n        <td class=\"case-cell-latin\">capimur</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudāminī</td>\n        <td class=\"case-cell-latin\">monēminī</td>\n        <td class=\"case-cell-latin\">legiminī</td>\n        <td class=\"case-cell-latin\">audīminī</td>\n        <td class=\"case-cell-latin\">capiminī</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudantur</td>\n        <td class=\"case-cell-latin\">monentur</td>\n        <td class=\"case-cell-latin\">leguntur</td>\n        <td class=\"case-cell-latin\">audiuntur</td>\n        <td class=\"case-cell-latin\">capiuntur</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. 3., 4. ve 5. Grup Edilgen Hikâye Zamanı (Imperfectum Passivi) (Slayt 20-35)",
        "html": "<p>3. grupta <strong>-ēbā-</strong>, 4. ve 5. gruplarda ise <strong>-iēbā-</strong> takısı kullanılır:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">legō (3. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(legō, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">legēbar</td>\n        <td class=\"case-cell-tr\">okunuyordum / okunurdum</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">legēbāris (-re)</td>\n        <td class=\"case-cell-tr\">okunuyordun / okunurdun</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">legēbātur</td>\n        <td class=\"case-cell-tr\">okunuyordu / okunurdu</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">legēbāmur</td>\n        <td class=\"case-cell-tr\">okunuyorduk / okunurduk</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">legēbāminī</td>\n        <td class=\"case-cell-tr\">okunuyordunuz / okunurdunuz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">legēbantur</td>\n        <td class=\"case-cell-tr\">okunuyorlardı / okunurlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">regō (3. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(regō, regere — yönetmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">regēbar</td>\n        <td class=\"case-cell-tr\">yönetiliyordum / yönetilirdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">regēbāris (-re)</td>\n        <td class=\"case-cell-tr\">yönetiliyordun / yönetilirdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">regēbātur</td>\n        <td class=\"case-cell-tr\">yönetiliyordu / yönetilirdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">regēbāmur</td>\n        <td class=\"case-cell-tr\">yönetiliyorduk / yönetilirdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">regēbāminī</td>\n        <td class=\"case-cell-tr\">yönetiliyordunuz / yönetilirdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">regēbantur</td>\n        <td class=\"case-cell-tr\">yönetiliyorlardı / yönetilirlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audiō (4. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(audiō, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audiēbar</td>\n        <td class=\"case-cell-tr\">işitiliyordum / işitilirdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audiēbāris (-re)</td>\n        <td class=\"case-cell-tr\">işitiliyordun / işitilirdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audiēbātur</td>\n        <td class=\"case-cell-tr\">işitiliyordu / işitilirdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audiēbāmur</td>\n        <td class=\"case-cell-tr\">işitiliyorduk / işitilirdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audiēbāminī</td>\n        <td class=\"case-cell-tr\">işitiliyordunuz / işitilirdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audiēbantur</td>\n        <td class=\"case-cell-tr\">işitiliyorlardı / işitilirlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">lēniō (4. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(lēniō, lēnīre — yatıştırmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">lēniēbar</td>\n        <td class=\"case-cell-tr\">yatıştırılıyordum / yatıştırılırdım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">lēniēbāris (-re)</td>\n        <td class=\"case-cell-tr\">yatıştırılıyordun / yatıştırılırdın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">lēniēbātur</td>\n        <td class=\"case-cell-tr\">yatıştırılıyordu / yatıştırılırdı</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">lēniēbāmur</td>\n        <td class=\"case-cell-tr\">yatıştırılıyorduk / yatıştırılırdık</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">lēniēbāminī</td>\n        <td class=\"case-cell-tr\">yatıştırılıyordunuz / yatıştırılırdınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">lēniēbantur</td>\n        <td class=\"case-cell-tr\">yatıştırılıyorlardı / yatıştırılırlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">capiō (5. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(capiō, capere — ele geçirmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">capiēbar</td>\n        <td class=\"case-cell-tr\">ele geçiriliyordum / geçirilirdim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">capiēbāris (-re)</td>\n        <td class=\"case-cell-tr\">ele geçiriliyordun / geçirilirdin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">capiēbātur</td>\n        <td class=\"case-cell-tr\">ele geçiriliyordu / geçirilirdi</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">capiēbāmur</td>\n        <td class=\"case-cell-tr\">ele geçiriliyorduk / geçirilirdik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">capiēbāminī</td>\n        <td class=\"case-cell-tr\">ele geçiriliyordunuz / geçirilirdiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">capiēbantur</td>\n        <td class=\"case-cell-tr\">ele geçiriliyorlardı / geçirilirlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">faciō (5. Grup) — Imperfectum Passivi</strong>\n    <span class=\"table-sub\">(faciō, facere — yapmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">faciēbar</td>\n        <td class=\"case-cell-tr\">yapılıyordum / yapılırdım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">faciēbāris (-re)</td>\n        <td class=\"case-cell-tr\">yapılıyordun / yapılırdın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">faciēbātur</td>\n        <td class=\"case-cell-tr\">yapılıyordu / yapılırdı</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">faciēbāmur</td>\n        <td class=\"case-cell-tr\">yapılıyorduk / yapılırdık</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">faciēbāminī</td>\n        <td class=\"case-cell-tr\">yapılıyordunuz / yapılırdınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">faciēbantur</td>\n        <td class=\"case-cell-tr\">yapılıyorlardı / yapılırlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Bütün 5 Grubun Imperfectum Passivi Karşılaştırması (Slayt 35)</strong>\n    <span class=\"table-sub\">(Slayt 35)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp (laudābar)</th>\n        <th>2. Grp (monēbar)</th>\n        <th>3. Grp (legēbar)</th>\n        <th>4. Grp (audiēbar)</th>\n        <th>5. Grp (capiēbar)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābar</td>\n        <td class=\"case-cell-latin\">monēbar</td>\n        <td class=\"case-cell-latin\">legēbar</td>\n        <td class=\"case-cell-latin\">audiēbar</td>\n        <td class=\"case-cell-latin\">capiēbar</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābāris (-re)</td>\n        <td class=\"case-cell-latin\">monēbāris (-re)</td>\n        <td class=\"case-cell-latin\">legēbāris (-re)</td>\n        <td class=\"case-cell-latin\">audiēbāris (-re)</td>\n        <td class=\"case-cell-latin\">capiēbāris (-re)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābātur</td>\n        <td class=\"case-cell-latin\">monēbātur</td>\n        <td class=\"case-cell-latin\">legēbātur</td>\n        <td class=\"case-cell-latin\">audiēbātur</td>\n        <td class=\"case-cell-latin\">capiēbātur</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābāmur</td>\n        <td class=\"case-cell-latin\">monēbāmur</td>\n        <td class=\"case-cell-latin\">legēbāmur</td>\n        <td class=\"case-cell-latin\">audiēbāmur</td>\n        <td class=\"case-cell-latin\">capiēbāmur</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābāminī</td>\n        <td class=\"case-cell-latin\">monēbāminī</td>\n        <td class=\"case-cell-latin\">legēbāminī</td>\n        <td class=\"case-cell-latin\">audiēbāminī</td>\n        <td class=\"case-cell-latin\">capiēbāminī</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābantur</td>\n        <td class=\"case-cell-latin\">monēbantur</td>\n        <td class=\"case-cell-latin\">legēbantur</td>\n        <td class=\"case-cell-latin\">audiēbantur</td>\n        <td class=\"case-cell-latin\">capiēbantur</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "3. çekim fiillerin Imperfectum zamanında legēbar (uzun e), 4. ve 5. çekim fiillerde ise audiēbar ve capiēbar (-ie-) takısının geldiğini aklınızda tutunuz."
  },
  {
    "id": "T2_W12_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 12,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 12. Hafta (2. Ders)",
    "title": "EDİLGEN ÇATI 3: FUTURUM PASSIVI, EMİR KİPİ, MASTARLAR VE SENTAKS DÖNÜŞÜMÜ",
    "subtitle": "3-5. Grup Gelecek Zamanı, Edilgen Mastarlar, Edilgen Emirler ve Fail/Vasıta Ayrımı",
    "summary": "Bu fasikülde 3., 4. ve 5. grup fiillerin Gelecek Zamanını (Futurum I Passivi: -ar, -ēris...), beş grubun Etken ve Edilgen Mastarlarını (Infinitivus: laudārī, monērī, vincī, audīrī, capī), Edilgen Emir Kipini (Imperativus Passivi) ve etken cümleden edilgen cümleye dönüşüm kurallarını (Ablativus Auctoris vs Instrumenti) öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 12.2.pdf",
    "slideCount": 36,
    "topics": ["3. Grup Futurum Passivi (legar, regar)", "4. Grup Futurum Passivi (audiar, leniar)", "5. Grup (-io) Futurum Passivi (capiar, faciar)", "Beş Grubun Futurum Passivi Tam Mukayesesi", "Etken ve Edilgen Mastarlar (Infinitivus)", "3. ve 5. Grupta Edilgen Mastar Kuralı (-ī)", "Edilgen Emir Kipi (Imperativus Passivi: 2. Sg & 2. Pl)", "Edilgen Cümleye Dönüşüm Kuralları", "Ablativus Auctoris (ā/ab + abl.) vs Ablativus Instrumenti"],
    "vocab": ["legar", "regar", "audiar", "capiar", "faciar", "laudari", "moneri", "vinci", "audiri", "capi", "admoneo", "prodigium", "deleo", "flamma", "conservo", "arma"],
    "sections": [
      {
        "title": "1. 3., 4. ve 5. Grup Edilgen Gelecek Zaman (Futurum Passivi) (Slayt 3-18)",
        "html": "<p>1. ve 2. grupta görülen <em>-bor, -beris, -bitur...</em> ekleri 3., 4. ve 5. gruplarda <strong>kullanılmaz</strong>. Bunun yerine 1. tekilde <strong>-ar</strong>, diğer şahıslarda ise <strong>-ēris, -ētur, -ēmur, -ēminī, -entur</strong> ekleri gelir:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">legō (3. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(legō, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">legar</td>\n        <td class=\"case-cell-tr\">okunacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">legēris (-re)</td>\n        <td class=\"case-cell-tr\">okunacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">legētur</td>\n        <td class=\"case-cell-tr\">okunacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">legēmur</td>\n        <td class=\"case-cell-tr\">okunacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">legēminī</td>\n        <td class=\"case-cell-tr\">okunacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">legentur</td>\n        <td class=\"case-cell-tr\">okunacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">regō (3. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(regō, regere — yönetmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">regar</td>\n        <td class=\"case-cell-tr\">yönetileceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">regēris (-re)</td>\n        <td class=\"case-cell-tr\">yönetileceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">regētur</td>\n        <td class=\"case-cell-tr\">yönetilecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">regēmur</td>\n        <td class=\"case-cell-tr\">yönetileceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">regēminī</td>\n        <td class=\"case-cell-tr\">yönetileceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">regentur</td>\n        <td class=\"case-cell-tr\">yönetilecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audiō (4. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(audiō, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audiar</td>\n        <td class=\"case-cell-tr\">işitileceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audiēris (-re)</td>\n        <td class=\"case-cell-tr\">işitileceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audiētur</td>\n        <td class=\"case-cell-tr\">işitilecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audiēmur</td>\n        <td class=\"case-cell-tr\">işitileceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audiēminī</td>\n        <td class=\"case-cell-tr\">işitileceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audientur</td>\n        <td class=\"case-cell-tr\">işitilecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">lēniō (4. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(lēniō, lēnīre — yatıştırmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">lēniar</td>\n        <td class=\"case-cell-tr\">yatıştırılacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">lēniēris (-re)</td>\n        <td class=\"case-cell-tr\">yatıştırılacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">lēniētur</td>\n        <td class=\"case-cell-tr\">yatıştırılacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">lēniēmur</td>\n        <td class=\"case-cell-tr\">yatıştırılacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">lēniēminī</td>\n        <td class=\"case-cell-tr\">yatıştırılacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">lēnientur</td>\n        <td class=\"case-cell-tr\">yatıştırılacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">capiō (5. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(capiō, capere — ele geçirmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">capiar</td>\n        <td class=\"case-cell-tr\">ele geçirileceğim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">capiēris (-re)</td>\n        <td class=\"case-cell-tr\">ele geçirileceksin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">capiētur</td>\n        <td class=\"case-cell-tr\">ele geçirilecek</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">capiēmur</td>\n        <td class=\"case-cell-tr\">ele geçirileceğiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">capiēminī</td>\n        <td class=\"case-cell-tr\">ele geçirileceksiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">capientur</td>\n        <td class=\"case-cell-tr\">ele geçirilecekler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">faciō (5. Grup) — Futurum Passivi</strong>\n    <span class=\"table-sub\">(faciō, facere — yapmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">faciar</td>\n        <td class=\"case-cell-tr\">yapılacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">faciēris (-re)</td>\n        <td class=\"case-cell-tr\">yapılacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">faciētur</td>\n        <td class=\"case-cell-tr\">yapılacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">faciēmur</td>\n        <td class=\"case-cell-tr\">yapılacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">faciēminī</td>\n        <td class=\"case-cell-tr\">yapılacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">facientur</td>\n        <td class=\"case-cell-tr\">yapılacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Bütün 5 Grubun Futurum Passivi Karşılaştırması (Slayt 18)</strong>\n    <span class=\"table-sub\">(Slayt 18)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp (laudābor)</th>\n        <th>2. Grp (monēbor)</th>\n        <th>3. Grp (legar)</th>\n        <th>4. Grp (audiar)</th>\n        <th>5. Grp (capiar)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābor</td>\n        <td class=\"case-cell-latin\">monēbor</td>\n        <td class=\"case-cell-latin\">legar</td>\n        <td class=\"case-cell-latin\">audiar</td>\n        <td class=\"case-cell-latin\">capiar</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudāberis (-re)</td>\n        <td class=\"case-cell-latin\">monēberis (-re)</td>\n        <td class=\"case-cell-latin\">legēris (-re)</td>\n        <td class=\"case-cell-latin\">audiēris (-re)</td>\n        <td class=\"case-cell-latin\">capiēris (-re)</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">laudābitur</td>\n        <td class=\"case-cell-latin\">monēbitur</td>\n        <td class=\"case-cell-latin\">legētur</td>\n        <td class=\"case-cell-latin\">audiētur</td>\n        <td class=\"case-cell-latin\">capiētur</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābimur</td>\n        <td class=\"case-cell-latin\">monēbimur</td>\n        <td class=\"case-cell-latin\">legēmur</td>\n        <td class=\"case-cell-latin\">audiēmur</td>\n        <td class=\"case-cell-latin\">capiēmur</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābiminī</td>\n        <td class=\"case-cell-latin\">monēbiminī</td>\n        <td class=\"case-cell-latin\">legēminī</td>\n        <td class=\"case-cell-latin\">audiēminī</td>\n        <td class=\"case-cell-latin\">capiēminī</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">laudābuntur</td>\n        <td class=\"case-cell-latin\">monēbuntur</td>\n        <td class=\"case-cell-latin\">legentur</td>\n        <td class=\"case-cell-latin\">audientur</td>\n        <td class=\"case-cell-latin\">capientur</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Şimdiki Zaman Mastarları: Etken vs Edilgen (Infinitivus) (Slayt 19-20)",
        "html": "<p>Latincede fiil gruplarına göre mastar yapılışı büyük bir düzen gösterir:</p>\n<ul>\n  <li>1. Grup: <em>-āre</em> &gt; Edilgen: <strong>-ārī</strong> (laudāre = övmek &gt; laudārī = övülmek)</li>\n  <li>2. Grup: <em>-ēre</em> &gt; Edilgen: <strong>-ērī</strong> (monēre = uyarmak &gt; monērī = uyarılmak)</li>\n  <li>3. Grup: <em>-ere</em> &gt; Edilgen: <strong>-ī</strong> (vincere = yenmek &gt; <strong>vincī</strong> = yenilmek; regere &gt; <strong>regī</strong> = yönetilmek)</li>\n  <li>4. Grup: <em>-īre</em> &gt; Edilgen: <strong>-īrī</strong> (audīre = işitmek &gt; audīrī = işitilmek)</li>\n  <li>5. Grup (-io): <em>-ere</em> &gt; Edilgen: <strong>-ī</strong> (capere = almak &gt; <strong>capī</strong> = alınmak; facere &gt; <strong>facī</strong> = yapılmak)</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Beş Fiil Grubunun Şimdiki Zaman Mastarları (Slayt 19-20)</strong>\n    <span class=\"table-sub\">(Slayt 19-20)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Grup</th>\n        <th>Model Fiil</th>\n        <th>Etken Mastar (Activi)</th>\n        <th>Edilgen Mastar (Passivi)</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Grup</strong></td>\n        <td class=\"case-cell-latin\">laudō, -āre</td>\n        <td class=\"case-cell-latin\">laudāre</td>\n        <td class=\"case-cell-latin\">laudārī</td>\n        <td class=\"case-cell-tr\">övmek / övülmek</td>\n      </tr>\n      <tr>\n        <td><strong>2. Grup</strong></td>\n        <td class=\"case-cell-latin\">moneō, -ēre</td>\n        <td class=\"case-cell-latin\">monēre</td>\n        <td class=\"case-cell-latin\">monērī</td>\n        <td class=\"case-cell-tr\">uyarmak / uyarılmak</td>\n      </tr>\n      <tr>\n        <td><strong>3. Grup</strong></td>\n        <td class=\"case-cell-latin\">vincō, -ere</td>\n        <td class=\"case-cell-latin\">vincere</td>\n        <td class=\"case-cell-latin\">vincī</td>\n        <td class=\"case-cell-tr\">yenmek / yenilmek</td>\n      </tr>\n      <tr>\n        <td><strong>4. Grup</strong></td>\n        <td class=\"case-cell-latin\">audiō, -īre</td>\n        <td class=\"case-cell-latin\">audīre</td>\n        <td class=\"case-cell-latin\">audīrī</td>\n        <td class=\"case-cell-tr\">işitmek / işitilmek</td>\n      </tr>\n      <tr>\n        <td><strong>5. Grup (-io)</strong></td>\n        <td class=\"case-cell-latin\">capiō, -ere</td>\n        <td class=\"case-cell-latin\">capere</td>\n        <td class=\"case-cell-latin\">capī</td>\n        <td class=\"case-cell-tr\">almak / alınmak</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> 3. ve 5. grupta mastar eki -ere tamamen düşer ve doğrudan köke uzun -ī eklenir: vincere > vincī, capere > capī.</div>\n</div>\n"
      },
      {
        "title": "3. Edilgen Emir Kipi (Imperativus Passivi) (Slayt 21-34)",
        "html": "<p>Latincede edilgen emir kipi biçimleri ilginç bir morfolojik kurala dayanır:</p>\n<ul>\n  <li><strong>2. Tekil Şahıs Edilgen Emir:</strong> Biçim olarak <em>Etken Mastar</em> ile birebir aynıdır (-re): <span class=\"lat-word\">laudāre!</span> (övül!), <span class=\"lat-word\">monēre!</span> (uyarıl!), <span class=\"lat-word\">scrībere!</span> (yazıl!), <span class=\"lat-word\">audīre!</span> (işitil!), <span class=\"lat-word\">accipe! / accipere!</span> (kabul edil!).</li>\n  <li><strong>2. Çoğul Şahıs Edilgen Emir:</strong> Biçim olarak <em>Praesens Passivi 2. Çoğul</em> şahıs ile birebir aynıdır (-minī): <span class=\"lat-word\">laudāminī!</span> (övülünüz!), <span class=\"lat-word\">monēminī!</span> (uyarılınız!), <span class=\"lat-word\">scrībiminī!</span> (yazılınız!), <span class=\"lat-word\">audīminī!</span> (işitiliniz!).</li>\n</ul>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Model Fiillerde Etken vs Edilgen Emir Kipi Karşılaştırması (Slayt 29-34)</strong>\n    <span class=\"table-sub\">(Slayt 29-34)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Grup & Fiil</th>\n        <th>2. Sg. Etken Emir</th>\n        <th>2. Sg. Edilgen Emir</th>\n        <th>2. Pl. Etken Emir</th>\n        <th>2. Pl. Edilgen Emir</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. laudō (övmek)</strong></td>\n        <td class=\"case-cell-latin\">laudā (öv)</td>\n        <td class=\"case-cell-latin\">laudāre (övül)</td>\n        <td class=\"case-cell-latin\">laudāte (övünüz)</td>\n        <td class=\"case-cell-latin\">laudāminī (övülünüz)</td>\n      </tr>\n      <tr>\n        <td><strong>1. accusō (suçlamak)</strong></td>\n        <td class=\"case-cell-latin\">accūsā (suçla)</td>\n        <td class=\"case-cell-latin\">accūsāre (suçlan)</td>\n        <td class=\"case-cell-latin\">accūsāte (suçlayınız)</td>\n        <td class=\"case-cell-latin\">accūsāminī (suçlanınız)</td>\n      </tr>\n      <tr>\n        <td><strong>2. moneō (uyarmak)</strong></td>\n        <td class=\"case-cell-latin\">monē (uyar)</td>\n        <td class=\"case-cell-latin\">monēre (uyarıl)</td>\n        <td class=\"case-cell-latin\">monēte (uyarınız)</td>\n        <td class=\"case-cell-latin\">monēminī (uyarılınız)</td>\n      </tr>\n      <tr>\n        <td><strong>2. terreō (korkutmak)</strong></td>\n        <td class=\"case-cell-latin\">terrē (korkut)</td>\n        <td class=\"case-cell-latin\">terrēre (korkutul)</td>\n        <td class=\"case-cell-latin\">terrēte (korkutunuz)</td>\n        <td class=\"case-cell-latin\">terrēminī (korkutulunuz)</td>\n      </tr>\n      <tr>\n        <td><strong>3. scrībō (yazmak)</strong></td>\n        <td class=\"case-cell-latin\">scrībe (yaz)</td>\n        <td class=\"case-cell-latin\">scrībere (yazıl)</td>\n        <td class=\"case-cell-latin\">scrībite (yazınız)</td>\n        <td class=\"case-cell-latin\">scrībiminī (yazılınız)</td>\n      </tr>\n      <tr>\n        <td><strong>3. tangō (dokunmak)</strong></td>\n        <td class=\"case-cell-latin\">tange (dokun)</td>\n        <td class=\"case-cell-latin\">tangere (dokunul)</td>\n        <td class=\"case-cell-latin\">tangite (dokununuz)</td>\n        <td class=\"case-cell-latin\">tangiminī (dokunulunuz)</td>\n      </tr>\n      <tr>\n        <td><strong>4. fīniō (bitirmek)</strong></td>\n        <td class=\"case-cell-latin\">fīnī (bitir)</td>\n        <td class=\"case-cell-latin\">fīnīre (bitiril)</td>\n        <td class=\"case-cell-latin\">fīnīte (bitiriniz)</td>\n        <td class=\"case-cell-latin\">fīnīminī (bitiriniz)</td>\n      </tr>\n      <tr>\n        <td><strong>4. audiō (işitmek)</strong></td>\n        <td class=\"case-cell-latin\">audī (işit)</td>\n        <td class=\"case-cell-latin\">audīre (işitil)</td>\n        <td class=\"case-cell-latin\">audīte (işitiniz)</td>\n        <td class=\"case-cell-latin\">audīminī (işitiliniz)</td>\n      </tr>\n      <tr>\n        <td><strong>5. accipiō (kabul etmek)</strong></td>\n        <td class=\"case-cell-latin\">accipe (kabul et)</td>\n        <td class=\"case-cell-latin\">accipere (kabul edil)</td>\n        <td class=\"case-cell-latin\">accipite (kabul ediniz)</td>\n        <td class=\"case-cell-latin\">accipiminī (kabul ediliniz)</td>\n      </tr>\n      <tr>\n        <td><strong>5. dēspiciō (küçük görmek)</strong></td>\n        <td class=\"case-cell-latin\">dēspice (küçük gör)</td>\n        <td class=\"case-cell-latin\">dēspicere (küçük görül)</td>\n        <td class=\"case-cell-latin\">dēspicite (küçük görünüz)</td>\n        <td class=\"case-cell-latin\">dēspiciminī (küçük görülünüz)</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. Edilgen Cümleye Dönüşüm Kuralları: Fail ve Vasıta (Slayt 35-36)",
        "html": "<p>Etken bir cümle edilgene dönüştürülürken şu temel sentaks kuralları işler:</p>\n<ol>\n  <li>Etken cümlenin belirtili nesnesi (Accusativus), edilgen cümlenin <strong>öznesi (Nominativus)</strong> haline gelir.</li>\n  <li>Yüklem etken çatıdan <strong>edilgen çatıya</strong> çevrilir ve yeni öznenin şahsına/sayısına uyar.</li>\n  <li>Eylemi gerçekleştiren <strong>canlı fail</strong> ise önüne <span class=\"lat-word\">ā / ab</span> edatı konularak <strong>Ablatīvus Auctōris</strong> haline getirilir.</li>\n  <li>Eylemin gerçekleşmesini sağlayan <strong>cansız bir araç veya vasıta</strong> ise edatsız olarak yalın <strong>Ablatīvus Instrumentī</strong> halinde bırakılır.</li>\n</ol>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Etken Cümleden Edilgene Dönüşüm Modelleri (Slayt 35-36)</strong>\n    <span class=\"table-sub\">(Slayt 35-36)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Örnek</th>\n        <th>Etken Cümle</th>\n        <th>Edilgen Cümle (ā / ab ile Fail)</th>\n        <th>Edilgen Cümle (Yalın Abl. ile Vasıta)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>I</strong></td>\n        <td class=\"case-cell-latin\">Dī Caesarem admonent.<br><small class=\"case-cell-tr\">Tanrılar Caesar'ı uyarıyorlar.</small></td>\n        <td class=\"case-cell-latin\">Caesar ā dīs admonētur.<br><small class=\"case-cell-tr\">Caesar tanrılar tarafından uyarılıyor.</small></td>\n        <td class=\"case-cell-latin\">Caesar hīs prōdigiīs admonētur.<br><small class=\"case-cell-tr\">Caesar bu kehanetlerle uyarılıyor.</small></td>\n      </tr>\n      <tr>\n        <td><strong>II</strong></td>\n        <td class=\"case-cell-latin\">Malī virī urbem dēlēbant.<br><small class=\"case-cell-tr\">Kötü adamlar kenti tahrip ediyorlardı.</small></td>\n        <td class=\"case-cell-latin\">Urbs ab malīs virīs dēlēbātur.<br><small class=\"case-cell-tr\">Kent kötü adamlar tarafından tahrip ediliyordu.</small></td>\n        <td class=\"case-cell-latin\">Urbs flammīs dēlēbātur.<br><small class=\"case-cell-tr\">Kent alevlerle (aracılığıyla) tahrip ediliyordu.</small></td>\n      </tr>\n      <tr>\n        <td><strong>III</strong></td>\n        <td class=\"case-cell-latin\">Hī cīvēs patriam conservābunt.<br><small class=\"case-cell-tr\">Bu yurttaşlar vatanı kurtaracaklar.</small></td>\n        <td class=\"case-cell-latin\">Patria ab hīs cīvibus conservābitur.<br><small class=\"case-cell-tr\">Vatan bu yurttaşlar tarafından kurtarılacak.</small></td>\n        <td class=\"case-cell-latin\">Patria armīs et vēritāte conservābitur.<br><small class=\"case-cell-tr\">Vatan silahlarla ve doğrulukla kurtarılacak.</small></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "ā/ab edatı yalnızca canlı varlıklar (insanlar, tanrılar) için kullanılır. Cansız araçlar için ASLA edat kullanılmaz, yalın ablativus yeterlidir (armis, flammis)."
  },
  {
    "id": "T2_W13_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 13,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 13. Hafta (1. Ders)",
    "title": "EDİLGEN CÜMLE SENTAKSI: FAİL, VASITA VE KLASİK METİN ÇÖZÜMLEMELERİ",
    "subtitle": "Ablatīvus Auctōris, Ablatīvus Instrumentī ve 21 Slaytlık Klasik Cümle Maratonu",
    "summary": "Bu fasikülde canlı fail (ā/ab + Ablativus) ile cansız araç (yalın Ablativus) arasındaki filolojik farkı, 'Beata memoria amicitiarum dulcium numquam delebitur' cümlesiyle başlayan ve 21 slayt boyunca devam eden klasik edebiyat ve sentaks maratonunu tüm çözümlemeleriyle öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 13.1.pdf",
    "slideCount": 21,
    "topics": ["Ablatīvus Auctōris (Canlı Fail)", "Ablatīvus Instrumentī (Cansız Vasıta)", "Fail ve Vasıtanın Bir Arada Kullanımı", "dēlēbitur ve terrentur Sentaksı", "caecus, dulcis ve iūcundus Sıfatları", "Caesar'ın Askeri Dilinde iungere Sentaksı", "İlk Kral ve Deniz Metni (mare, vis, turba)", "Ulus ve Yaşlılar Sentaksı (gens, neglegere)", "Hiciv Şiirinde libellus saturārum", "causā (+ Genetivus) ile Amaç/Sebep Bildirme"],
    "vocab": ["amicitia", "deleo", "dulcis", "caecus", "intellego", "quoque", "iucundus", "genus", "factum", "moveo", "cito", "potens", "iungo", "copia", "iacio", "turba", "vis", "divitiae", "gens", "asper", "servitus", "libellus", "satura", "memoria", "numquam", "etiam", "nimis", "femina", "et", "semper", "de", "non", "cum", "primus", "rex", "in", "mare", "nam", "poeta", "ex", "ad", "cras", "familia", "eorum", "atque", "quattuor", "at", "causa", "iam", "bene"],
    "sections": [
      {
        "title": "1. Edilgen Cümle Sentaksı ve 21 Slaytlık Klasik Cümle Serisi (Slayt 2-21)",
        "html": "<p>Slayt 2-21 boyunca Doç. Dr. Eyüp Çoraklı'nın sunduğu klasik edebi cümleler, kelime dağarcığı ve verbatim Türkçe tercümeleri:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead>\n      <tr><th>Latince Cümle</th><th>Önemli Kelimeler & Gövdeler</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks Açıklaması</th></tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class=\"case-cell-latin\">Beāta memoria amīcitiārum dulcium numquam dēlēbitur.</td>\n        <td>amīcitia, -ae f. (dostluk); dulcis, -e (tatlı, hoş); dēleō, -ēre (yıkmak, silmek)</td>\n        <td class=\"case-cell-tr\">Güzel arkadaşlıkların aziz hatırası asla yok edilmeyecek.</td>\n        <td>dēlēbitur: dēleō fiili Futurum I Passivi 3. tekil; beāta memoria: Nominativus özne.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Multī morte etiam facilī nimis terrentur.</td>\n        <td>mors, mortis f. (ölüm); facilis, -e (kolay); terreō, -ēre (korkutmak)</td>\n        <td class=\"case-cell-tr\">Pek çok kişi fazlasıyla kolay bir ölümle korkutulur.</td>\n        <td>terrentur: Praesens Passivi 3. çoğul; morte facilī: yalın ablativus (araç / sebep).</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Illa fēmina caeca omnia genera artium quoque intellēxit et ab amīcīs iūcundīs semper laudābātur.</td>\n        <td>caecus, -a, -um (kör); genus, -eris n. (tür); iūcundus, -a, -um (sevimli, güzel)</td>\n        <td class=\"case-cell-tr\">O kör kadın sanatların bütün türlerini kavradı ve güzel arkadaşları tarafından her zaman övülüyordu.</td>\n        <td>ab amīcīs iūcundīs: Ablativus Auctoris (canlı fail); laudābātur: Imperfectum Passivi 3. tekil.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Mentēs nostrae memoriā potentī illōrum duōrum factōrum citō moventur.</td>\n        <td>factum, -ī n. (başarı, iş); moveō, -ēre (harekete geçirmek, etkilemek); citō: çabucak</td>\n        <td class=\"case-cell-tr\">Bizim zihinlerimiz o iki başarının güçlü hatırasıyla etkilenir.</td>\n        <td>memoriā potentī: Ablativus instrumenti; moventur: Praesens Passivi 3. çoğul.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Caesar nōn poterat suās copiās cum celeribus copiīs rēgis iungere.</td>\n        <td>copia, -ae f. (birlik, güç); iungō, -ere (bağlamak, birleştirmek); celer, -is, -e (hızlı)</td>\n        <td class=\"case-cell-tr\">Caesar kendi birliklerini kralın hızlı birlikleriyle birleştiremiyordu (birleştirmeyi başaramıyordu).</td>\n        <td>poterat + mastar (iungere); cum copiīs: birliktelik ablativusu.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Prīmus rēx dīvitiās in mare iēcit, nam magnam īram et vim turbae timuit.</td>\n        <td>iaciō, -ere, iēcī (fırlatmak); turba, -ae f. (kalabalık); vīs, vīs f. (güç)</td>\n        <td class=\"case-cell-tr\">İlk kral servetini denize attı, çünkü kalabalığın gücünden ve büyük öfkesinden korktu.</td>\n        <td>iēcit: iaciō fiili Perfectum; in mare: yönelme accusativusu; timuit: timeō Perfectum.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Senēs in gente nostrā ab fīliīs numquam neglegēbantur.</td>\n        <td>gens, gentis f. (soy, ulus); neglegō, -ere (ihmal etmek); senex, senis m. (yaşlı)</td>\n        <td class=\"case-cell-tr\">Yaşlılar bizim ulusumuzda oğulları tarafından asla ihmal edilmiyorlardı.</td>\n        <td>ab fīliīs: Ablativus Auctoris (fail); neglegēbantur: Imperfectum Passivi 3. çoğul.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Omnia genera servitūtis nōbīs videntur aspera.</td>\n        <td>servitūs, -ūtis f. (kölelik); asper, -era, -erum (sert, acımasız); videor (görünmek)</td>\n        <td class=\"case-cell-tr\">Köleliğin bütün türleri bize acımasız görünür.</td>\n        <td>videntur: videor (görünmek); nōbīs: Dativus (bize); aspera: Nom. Pl. n. tamamlayıcı.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Ille poēta in tertiō libellō saturārum scrīpsit dē hominibus avārīs.</td>\n        <td>libellus, -ī m. (kitapçık); satura, -ae f. (hiciv şiiri); avārus, -a, -um (açgözlü)</td>\n        <td class=\"case-cell-tr\">O şair, satura'larının üçüncü kitabında aç gözlü insanlar hakkında yazdı.</td>\n        <td>dē + abl. (hakkında); in tertiō libellō: bulunma ablativusu.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Tēcum novem ex aliīs miserīs ad Caesarem crās trahent.</td>\n        <td>trahō, -ere (götürmek, çekmek); crās: yarın; miser, -era, -erum (zavallı)</td>\n        <td class=\"case-cell-tr\">Diğer zavallı kişilerden dokuzunu seninle birlikte yarın Caesar'a götürecekler.</td>\n        <td>trahent: Futurum 3. çoğul etken; tēcum = cum tē (seninle birlikte).</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Tēcum novem ex aliīs miserīs ad Caesarem crās trahentur.</td>\n        <td>trahor, trahī (götürülmek, çekilmek)</td>\n        <td class=\"case-cell-tr\">Diğer zavallı kişilerden dokuzu seninle birlikte yarın Caesar'a götürülecek.</td>\n        <td>trahentur: Futurum 3. çoğul edilgen; novem: cümlenin öznesi olmuştur.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">In familiā eōrum erant duae fīliae atque quattuor fīliī.</td>\n        <td>familia, -ae f. (aile); atque: ve, dahası</td>\n        <td class=\"case-cell-tr\">Onların ailesinde iki kız evlat ve dört erkek evlat vardı.</td>\n        <td>erant: sum fiili Imperfectum 3. çoğul; duae fīliae: dişil sayı tamlaması.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">At senectūtis bonae causā iam bene vīvere dēbēmus.</td>\n        <td>senectūs, -ūtis f. (yaşlılık); causā (+ gen.): uğruna, için</td>\n        <td class=\"case-cell-tr\">İyi bir yaşlılık için şu an iyi bir şekilde yaşamamız gerekir.</td>\n        <td>causā kelimesi tek başına ablativustur ve kendisinden önceki genetivus ile birleşerek 'uğruna, için' anlamı verir.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Beata memoria amicitiarum dulcium numquam",
        "tr": "delebitur",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Multi morte etiam facili nimis",
        "tr": "terrentur",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Illa femina caeca omnia genera artium quoque intellexit et ab amicis iucundis semper",
        "tr": "laudabatur",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "- de, -",
        "tr": "Beni övmemelisin / Beni övmek zorunda değilsin.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Mentes nostrae memoria potenti illorum duorum factorum cito",
        "tr": "moventur",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Caesar non poterat suas copias cum celeribus copiis regis iungere. Caesar",
        "tr": "kendi birliklerini kralın hızlı birlikleriyle birleştiremiyordu (birleştirmeyi başaramıyordu).",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Primus rex divitias in mare iecit, nam magnam iram et vim turbae timuit.",
        "tr": "İlk kral servetini denize attı, çünkü kalabalığın gücünden ve büyük öfkesinden korktu.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Senes in gente nostra ab filiis numquam",
        "tr": "neglegebantur",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Omnia genera servitutis nobis",
        "tr": "videntur",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ille poeta in tertio libello saturarum scripsit de hominibus avaris.",
        "tr": "O şair, satura’larının üçüncü kitabında aç gözlü insanlar hakkında yazdı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Tecum novem ex aliis miseris ad Caesarem cras trahent. Tecum novem ex aliis miseris ad Caesarem cras",
        "tr": "Yarın seninle birlikte diğer zavallılardan dokuzunu Caesar'a sürükleyecekler. Yarın seninle birlikte diğer zavallılardan dokuzu Caesar'a sürüklenecekler.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Tecum novem ex aliis miseris ad Caesarem cras trahent.",
        "tr": "Diğer zavallı kişilerden dokuzunu seninle birlikte yarın",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Tecum novem ex aliis miseris ad Caesarem cras",
        "tr": "Yarın seninle birlikte diğer zavallılardan dokuzunu Caesar'a sürükleyecekler. Yarın seninle birlikte diğer zavallılardan dokuzu Caesar'a sürüklenecekler.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "In familia eorum erant duae filiae atque quattuor filii.",
        "tr": "Onların ailesinde iki kız evlat ve dört erkek evlat vardı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "At senectutis bonae causa iam bene vivere debemus.",
        "tr": "İyi bir yaşlılık için şu an iyi bir şekilde yaşamamız gerekir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "causā kelimesi yalın ablativus halinde olup kendisinden önce gelen Genetivus bir kelimeyle (senectūtis bonae causā) '... uğruna / ... için' yapısı kurar."
  },
  {
    "id": "T2_W13_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 13,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 13. Hafta (2. Ders)",
    "title": "EDİLGEN GEÇMİŞ ZAMANLAR VE MASTARLAR SİSTEMİ",
    "subtitle": "Perfectum, Plusquamperfectum ve Futurum Exactum Passivi; 6 Zaman Mastar Tablosu",
    "summary": "Bu fasikülde Latince fiil sisteminde Supinum gövdesinden türetilen Geçmiş Zaman Edilgen Sıfat-Fiilini (Participium Perfectum Passivi - PPP), esse fiiliyle kurulan birleşik geçmiş zamanları (amātus sum, amātus eram, amātus erō) ve Latincedeki 6 zamanlı mastar (Infinitivus) sisteminin tamamını öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 13.2.pdf",
    "slideCount": 40,
    "topics": ["Participium Perfectum Passivi (PPP: -tus, -ta, -tum)", "Perfectum Passivi (amātus sum...)", "Plusquamperfectum Passivi (amātus eram...)", "Futurum Exactum Passivi (amātus erō...)", "5 Fiil Grubunun Edilgen Geçmiş Zaman Mukayesesi", "Özne ile Cins ve Sayı Uyumu (amātus / amāta / amātī)", "Latincede 6 Mastar (Infinitivus) Sistemi", "Etken ve Edilgen Mastar Matrisi"],
    "vocab": ["amatus", "monitus", "lectus", "auditus", "captus", "suscipio", "prospicio", "perspicio", "pario", "laudavisse", "laudaturus", "laudatum iri"],
    "sections": [
      {
        "title": "1. Edilgen Geçmiş Zaman (Perfectum Passivi) (Slayt 2-11)",
        "html": "<p>Latincede geçmiş zamanların edilgen çekimi birleşiktir: <strong>Participium Perfectum Passivi (PPP) + esse fiilinin şimdiki zamanı (sum, es, est...)</strong>:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">amō (1. Grup) — Perfectum Passivi</strong>\n    <span class=\"table-sub\">(amō, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um sum</td>\n        <td class=\"case-cell-tr\">sevildim / sevilmişim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um es</td>\n        <td class=\"case-cell-tr\">sevildin / sevilmişsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um est</td>\n        <td class=\"case-cell-tr\">sevildi / sevilmiş</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a sumus</td>\n        <td class=\"case-cell-tr\">sevildik / sevilmişiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a estis</td>\n        <td class=\"case-cell-tr\">sevildiniz / sevilmişsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a sunt</td>\n        <td class=\"case-cell-tr\">sevildiler / sevilmişler</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> PPP parçası öznenin cinsine (eril/dişil/nötr) ve sayısına harfiyen uyar.</div>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">moneō (2. Grup) — Perfectum Passivi</strong>\n    <span class=\"table-sub\">(moneō, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um sum</td>\n        <td class=\"case-cell-tr\">uyarıldım / uyarılmışım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um es</td>\n        <td class=\"case-cell-tr\">uyarıldın / uyarılmışsın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um est</td>\n        <td class=\"case-cell-tr\">uyarıldı / uyarılmış</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a sumus</td>\n        <td class=\"case-cell-tr\">uyarıldık / uyarılmışız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a estis</td>\n        <td class=\"case-cell-tr\">uyarıldınız / uyarılmışsınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a sunt</td>\n        <td class=\"case-cell-tr\">uyarıldılar / uyarılmışlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">legō (3. Grup) — Perfectum Passivi</strong>\n    <span class=\"table-sub\">(legō, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um sum</td>\n        <td class=\"case-cell-tr\">okundum / okunmuşum</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um es</td>\n        <td class=\"case-cell-tr\">okundun / okunmuşsun</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um est</td>\n        <td class=\"case-cell-tr\">okundu / okunmuş</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a sumus</td>\n        <td class=\"case-cell-tr\">okunduk / okunmuşuz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a estis</td>\n        <td class=\"case-cell-tr\">okundunuz / okunmuşsunuz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a sunt</td>\n        <td class=\"case-cell-tr\">okundular / okunmuşlar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audiō (4. Grup) — Perfectum Passivi</strong>\n    <span class=\"table-sub\">(audiō, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um sum</td>\n        <td class=\"case-cell-tr\">işitildim / işitilmişim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um es</td>\n        <td class=\"case-cell-tr\">işitildin / işitilmişsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um est</td>\n        <td class=\"case-cell-tr\">işitildi / işitilmiş</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a sumus</td>\n        <td class=\"case-cell-tr\">işitildik / işitilmişiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a estis</td>\n        <td class=\"case-cell-tr\">işitildiniz / işitilmişsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a sunt</td>\n        <td class=\"case-cell-tr\">işitildiler / işitilmişler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">capiō (5. Grup) — Perfectum Passivi</strong>\n    <span class=\"table-sub\">(capiō, capere — ele geçirmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um sum</td>\n        <td class=\"case-cell-tr\">ele geçirildim / geçirilmişim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um es</td>\n        <td class=\"case-cell-tr\">ele geçirildin / geçirilmişsin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um est</td>\n        <td class=\"case-cell-tr\">ele geçirildi / geçirilmiş</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a sumus</td>\n        <td class=\"case-cell-tr\">ele geçirildik / geçirilmişiz</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a estis</td>\n        <td class=\"case-cell-tr\">ele geçirildiniz / geçirilmişsiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a sunt</td>\n        <td class=\"case-cell-tr\">ele geçirildiler / geçirilmişler</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Bütün 5 Grubun Edilgen Geçmiş Zaman Mukayesesi (Slayt 11)</strong>\n    <span class=\"table-sub\">(Slayt 11)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp (amātus sum)</th>\n        <th>2. Grp (monitus sum)</th>\n        <th>3. Grp (lectus sum)</th>\n        <th>4. Grp (audītus sum)</th>\n        <th>5. Grp (captus sum)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um sum</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um sum</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um sum</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um sum</td>\n        <td class=\"case-cell-latin\">captus, -a, -um sum</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um es</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um es</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um es</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um es</td>\n        <td class=\"case-cell-latin\">captus, -a, -um es</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um est</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um est</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um est</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um est</td>\n        <td class=\"case-cell-latin\">captus, -a, -um est</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a sumus</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a sumus</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a sumus</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a sumus</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a sumus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a estis</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a estis</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a estis</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a estis</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a estis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a sunt</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a sunt</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a sunt</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a sunt</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a sunt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Edilgen Geçmiş Hikâye Zamanı (Plusquamperfectum Passivi) (Slayt 15-22)",
        "html": "<p>Formül: <strong>PPP + esse fiilinin hikâyesi (eram, erās, erat, erāmus, erātis, erant)</strong>:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">amō (1. Grup) — Plusquamperfectum Passivi</strong>\n    <span class=\"table-sub\">(amō, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um eram</td>\n        <td class=\"case-cell-tr\">sevildiydim / sevilmiştim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um erās</td>\n        <td class=\"case-cell-tr\">sevildiydin / sevilmiştin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um erat</td>\n        <td class=\"case-cell-tr\">sevildiydi / sevilmişti</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erāmus</td>\n        <td class=\"case-cell-tr\">sevildiydik / sevilmiştik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erātis</td>\n        <td class=\"case-cell-tr\">sevildiydiniz / sevilmiştiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erant</td>\n        <td class=\"case-cell-tr\">sevildiydiler / sevilmişlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">moneō (2. Grup) — Plusquamperfectum Passivi</strong>\n    <span class=\"table-sub\">(moneō, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um eram</td>\n        <td class=\"case-cell-tr\">uyarıldıydım / uyarılmıştım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um erās</td>\n        <td class=\"case-cell-tr\">uyarıldıydın / uyarılmıştın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um erat</td>\n        <td class=\"case-cell-tr\">uyarıldıydı / uyarılmıştı</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erāmus</td>\n        <td class=\"case-cell-tr\">uyarıldıydık / uyarılmıştık</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erātis</td>\n        <td class=\"case-cell-tr\">uyarıldıydınız / uyarılmıştınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erant</td>\n        <td class=\"case-cell-tr\">uyarıldıydılar / uyarılmışlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">legō (3. Grup) — Plusquamperfectum Passivi</strong>\n    <span class=\"table-sub\">(legō, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um eram</td>\n        <td class=\"case-cell-tr\">okunduydum / okunmuştum</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um erās</td>\n        <td class=\"case-cell-tr\">okunduydun / okunmuştun</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um erat</td>\n        <td class=\"case-cell-tr\">okunduydu / okunmuştu</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erāmus</td>\n        <td class=\"case-cell-tr\">okunduyduk / okunmuştuk</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erātis</td>\n        <td class=\"case-cell-tr\">okunduydunuz / okunmuştunuz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erant</td>\n        <td class=\"case-cell-tr\">okunduydular / okunmuşlardı</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audiō (4. Grup) — Plusquamperfectum Passivi</strong>\n    <span class=\"table-sub\">(audiō, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um eram</td>\n        <td class=\"case-cell-tr\">işitildiydim / işitilmiştim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um erās</td>\n        <td class=\"case-cell-tr\">işitildiydin / işitilmiştin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um erat</td>\n        <td class=\"case-cell-tr\">işitildiydi / işitilmişti</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erāmus</td>\n        <td class=\"case-cell-tr\">işitildiydik / işitilmiştik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erātis</td>\n        <td class=\"case-cell-tr\">işitildiydiniz / işitilmiştiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erant</td>\n        <td class=\"case-cell-tr\">işitildiydiler / işitilmişlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">capiō (5. Grup) — Plusquamperfectum Passivi</strong>\n    <span class=\"table-sub\">(capiō, capere — ele geçirmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um eram</td>\n        <td class=\"case-cell-tr\">ele geçirildiydim / geçirilmiştim</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um erās</td>\n        <td class=\"case-cell-tr\">ele geçirildiydin / geçirilmiştin</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um erat</td>\n        <td class=\"case-cell-tr\">ele geçirildiydi / geçirilmişti</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erāmus</td>\n        <td class=\"case-cell-tr\">ele geçirildiydik / geçirilmiştik</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erātis</td>\n        <td class=\"case-cell-tr\">ele geçirildiydiniz / geçirilmiştiniz</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erant</td>\n        <td class=\"case-cell-tr\">ele geçirildiydiler / geçirilmişlerdi</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Bütün 5 Grubun Edilgen Geçmiş Hikâye Zaman Mukayesesi (Slayt 22)</strong>\n    <span class=\"table-sub\">(Slayt 22)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp (amātus eram)</th>\n        <th>2. Grp (monitus eram)</th>\n        <th>3. Grp (lectus eram)</th>\n        <th>4. Grp (audītus eram)</th>\n        <th>5. Grp (captus eram)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um eram</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um eram</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um eram</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um eram</td>\n        <td class=\"case-cell-latin\">captus, -a, -um eram</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um erās</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um erās</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um erās</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um erās</td>\n        <td class=\"case-cell-latin\">captus, -a, -um erās</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um erat</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um erat</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um erat</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um erat</td>\n        <td class=\"case-cell-latin\">captus, -a, -um erat</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erāmus</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erāmus</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erāmus</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erāmus</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erāmus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erātis</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erātis</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erātis</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erātis</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erātis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erant</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erant</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erant</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erant</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erant</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. Edilgen Gelecekte Geçmiş Zaman (Futurum Exactum Passivi) (Slayt 26-33)",
        "html": "<p>Formül: <strong>PPP + esse fiilinin geleceği (erō, eris, erit, erimus, eritis, erunt)</strong>:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">amō (1. Grup) — Futurum Exactum Passivi</strong>\n    <span class=\"table-sub\">(amō, amāre — sevmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um erō</td>\n        <td class=\"case-cell-tr\">sevilmiş olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um eris</td>\n        <td class=\"case-cell-tr\">sevilmiş olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um erit</td>\n        <td class=\"case-cell-tr\">sevilmiş olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erimus</td>\n        <td class=\"case-cell-tr\">sevilmiş olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a eritis</td>\n        <td class=\"case-cell-tr\">sevilmiş olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erunt</td>\n        <td class=\"case-cell-tr\">sevilmiş olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">moneō (2. Grup) — Futurum Exactum Passivi</strong>\n    <span class=\"table-sub\">(moneō, monēre — uyarmak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um erō</td>\n        <td class=\"case-cell-tr\">uyarılmış olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um eris</td>\n        <td class=\"case-cell-tr\">uyarılmış olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um erit</td>\n        <td class=\"case-cell-tr\">uyarılmış olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erimus</td>\n        <td class=\"case-cell-tr\">uyarılmış olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a eritis</td>\n        <td class=\"case-cell-tr\">uyarılmış olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erunt</td>\n        <td class=\"case-cell-tr\">uyarılmış olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">legō (3. Grup) — Futurum Exactum Passivi</strong>\n    <span class=\"table-sub\">(legō, legere — okumak)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um erō</td>\n        <td class=\"case-cell-tr\">okunmuş olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um eris</td>\n        <td class=\"case-cell-tr\">okunmuş olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um erit</td>\n        <td class=\"case-cell-tr\">okunmuş olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erimus</td>\n        <td class=\"case-cell-tr\">okunmuş olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a eritis</td>\n        <td class=\"case-cell-tr\">okunmuş olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erunt</td>\n        <td class=\"case-cell-tr\">okunmuş olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">audiō (4. Grup) — Futurum Exactum Passivi</strong>\n    <span class=\"table-sub\">(audiō, audīre — işitmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um erō</td>\n        <td class=\"case-cell-tr\">işitilmiş olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um eris</td>\n        <td class=\"case-cell-tr\">işitilmiş olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um erit</td>\n        <td class=\"case-cell-tr\">işitilmiş olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erimus</td>\n        <td class=\"case-cell-tr\">işitilmiş olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a eritis</td>\n        <td class=\"case-cell-tr\">işitilmiş olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erunt</td>\n        <td class=\"case-cell-tr\">işitilmiş olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">capiō (5. Grup) — Futurum Exactum Passivi</strong>\n    <span class=\"table-sub\">(capiō, capere — ele geçirmek)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Persona & Numerus</th>\n        <th>Latince Biçim</th>\n        <th>Türkçe Anlamı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Singularis (Ben)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um erō</td>\n        <td class=\"case-cell-tr\">ele geçirilmiş olacağım</td>\n      </tr>\n      <tr>\n        <td><strong>2. Singularis (Sen)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um eris</td>\n        <td class=\"case-cell-tr\">ele geçirilmiş olacaksın</td>\n      </tr>\n      <tr>\n        <td><strong>3. Singularis (O)</strong></td>\n        <td class=\"case-cell-latin\">captus, -a, -um erit</td>\n        <td class=\"case-cell-tr\">ele geçirilmiş olacak</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pluralis (Biz)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erimus</td>\n        <td class=\"case-cell-tr\">ele geçirilmiş olacağız</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pluralis (Siz)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a eritis</td>\n        <td class=\"case-cell-tr\">ele geçirilmiş olacaksınız</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pluralis (Onlar)</strong></td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erunt</td>\n        <td class=\"case-cell-tr\">ele geçirilmiş olacaklar</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Bütün 5 Grubun Futurum Exactum Passivi Mukayesesi (Slayt 33)</strong>\n    <span class=\"table-sub\">(Slayt 33)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Şahıs</th>\n        <th>1. Grp (amātus erō)</th>\n        <th>2. Grp (monitus erō)</th>\n        <th>3. Grp (lectus erō)</th>\n        <th>4. Grp (audītus erō)</th>\n        <th>5. Grp (captus erō)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um erō</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um erō</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um erō</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um erō</td>\n        <td class=\"case-cell-latin\">captus, -a, -um erō</td>\n      </tr>\n      <tr>\n        <td><strong>2. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um eris</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um eris</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um eris</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um eris</td>\n        <td class=\"case-cell-latin\">captus, -a, -um eris</td>\n      </tr>\n      <tr>\n        <td><strong>3. Sg.</strong></td>\n        <td class=\"case-cell-latin\">amātus, -a, -um erit</td>\n        <td class=\"case-cell-latin\">monitus, -a, -um erit</td>\n        <td class=\"case-cell-latin\">lectus, -a, -um erit</td>\n        <td class=\"case-cell-latin\">audītus, -a, -um erit</td>\n        <td class=\"case-cell-latin\">captus, -a, -um erit</td>\n      </tr>\n      <tr>\n        <td><strong>1. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erimus</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erimus</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erimus</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erimus</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erimus</td>\n      </tr>\n      <tr>\n        <td><strong>2. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a eritis</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a eritis</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a eritis</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a eritis</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a eritis</td>\n      </tr>\n      <tr>\n        <td><strong>3. Pl.</strong></td>\n        <td class=\"case-cell-latin\">amātī, -ae, -a erunt</td>\n        <td class=\"case-cell-latin\">monitī, -ae, -a erunt</td>\n        <td class=\"case-cell-latin\">lectī, -ae, -a erunt</td>\n        <td class=\"case-cell-latin\">audītī, -ae, -a erunt</td>\n        <td class=\"case-cell-latin\">captī, -ae, -a erunt</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "4. Latincede Altı Mastar (Infinitivus) Sistemi (Slayt 37-40)",
        "html": "<p>Latincede hem Etken hem Edilgen çatıda üçer zaman olmak üzere <strong>toplam 6 mastar</strong> bulunur:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead><tr><th>Zaman</th><th>Etken Çatı Mastarı (Activi)</th><th>Edilgen Çatı Mastarı (Passivi)</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Praesens</strong></td><td>-āre / -ēre / -ere / -īre / -ere</td><td>-ārī / -ērī / -ī / -īrī / -ī</td></tr>\n      <tr><td><strong>Perfectum</strong></td><td>Perfectum gövdesi + <strong>-isse</strong></td><td>Participium Perfectum Passivi + <strong>esse</strong></td></tr>\n      <tr><td><strong>Futurum</strong></td><td>Participium Futurum Activi (-ūrus, -a, -um) + <strong>esse</strong></td><td>Supinum (-um) + <strong>īrī</strong></td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">5 Fiil Grubunun Etken Çatı Mastarları (Slayt 39)</strong>\n    <span class=\"table-sub\">(Slayt 39)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Zaman</th>\n        <th>1. Grp (laudō)</th>\n        <th>2. Grp (moneō)</th>\n        <th>3. Grp (legō)</th>\n        <th>4. Grp (audiō)</th>\n        <th>5. Grp (capiō)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Praesens</strong></td>\n        <td class=\"case-cell-latin\">laudāre<br><small class=\"case-cell-tr\">övmek</small></td>\n        <td class=\"case-cell-latin\">monēre<br><small class=\"case-cell-tr\">uyarmak</small></td>\n        <td class=\"case-cell-latin\">legere<br><small class=\"case-cell-tr\">okumak</small></td>\n        <td class=\"case-cell-latin\">audīre<br><small class=\"case-cell-tr\">işitmek</small></td>\n        <td class=\"case-cell-latin\">capere<br><small class=\"case-cell-tr\">almak</small></td>\n      </tr>\n      <tr>\n        <td><strong>Perfectum</strong></td>\n        <td class=\"case-cell-latin\">laudāvisse<br><small class=\"case-cell-tr\">övmüş olmak</small></td>\n        <td class=\"case-cell-latin\">monuisse<br><small class=\"case-cell-tr\">uyarmış olmak</small></td>\n        <td class=\"case-cell-latin\">lēgisse<br><small class=\"case-cell-tr\">okumuş olmak</small></td>\n        <td class=\"case-cell-latin\">audīvisse<br><small class=\"case-cell-tr\">işitmiş olmak</small></td>\n        <td class=\"case-cell-latin\">cēpisse<br><small class=\"case-cell-tr\">ele geçirmiş olmak</small></td>\n      </tr>\n      <tr>\n        <td><strong>Futurum</strong></td>\n        <td class=\"case-cell-latin\">laudātūrus, -a, -um esse<br><small class=\"case-cell-tr\">övecek olmak</small></td>\n        <td class=\"case-cell-latin\">monitūrus, -a, -um esse<br><small class=\"case-cell-tr\">uyaracak olmak</small></td>\n        <td class=\"case-cell-latin\">lectūrus, -a, -um esse<br><small class=\"case-cell-tr\">okuyacak olmak</small></td>\n        <td class=\"case-cell-latin\">audītūrus, -a, -um esse<br><small class=\"case-cell-tr\">işitecek olmak</small></td>\n        <td class=\"case-cell-latin\">captūrus, -a, -um esse<br><small class=\"case-cell-tr\">ele geçirecek olmak</small></td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">5 Fiil Grubunun Edilgen Çatı Mastarları (Slayt 40)</strong>\n    <span class=\"table-sub\">(Slayt 40)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Zaman</th>\n        <th>1. Grp (laudor)</th>\n        <th>2. Grp (moneor)</th>\n        <th>3. Grp (legor)</th>\n        <th>4. Grp (audior)</th>\n        <th>5. Grp (capior)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Praesens</strong></td>\n        <td class=\"case-cell-latin\">laudārī<br><small class=\"case-cell-tr\">övülmek</small></td>\n        <td class=\"case-cell-latin\">monērī<br><small class=\"case-cell-tr\">uyarılmak</small></td>\n        <td class=\"case-cell-latin\">legī<br><small class=\"case-cell-tr\">okunmak</small></td>\n        <td class=\"case-cell-latin\">audīrī<br><small class=\"case-cell-tr\">işitilmek</small></td>\n        <td class=\"case-cell-latin\">capī<br><small class=\"case-cell-tr\">alınmak</small></td>\n      </tr>\n      <tr>\n        <td><strong>Perfectum</strong></td>\n        <td class=\"case-cell-latin\">laudātus, -a, -um esse<br><small class=\"case-cell-tr\">övülmüş olmak</small></td>\n        <td class=\"case-cell-latin\">monitus, -a, -um esse<br><small class=\"case-cell-tr\">uyarılmış olmak</small></td>\n        <td class=\"case-cell-latin\">lectus, -a, -um esse<br><small class=\"case-cell-tr\">okunmuş olmak</small></td>\n        <td class=\"case-cell-latin\">audītus, -a, -um esse<br><small class=\"case-cell-tr\">işitilmiş olmak</small></td>\n        <td class=\"case-cell-latin\">captus, -a, -um esse<br><small class=\"case-cell-tr\">ele geçirilmiş olmak</small></td>\n      </tr>\n      <tr>\n        <td><strong>Futurum</strong></td>\n        <td class=\"case-cell-latin\">laudātum īrī<br><small class=\"case-cell-tr\">övülecek olmak</small></td>\n        <td class=\"case-cell-latin\">monitum īrī<br><small class=\"case-cell-tr\">uyarılacak olmak</small></td>\n        <td class=\"case-cell-latin\">lectum īrī<br><small class=\"case-cell-tr\">okunacak olmak</small></td>\n        <td class=\"case-cell-latin\">audītum īrī<br><small class=\"case-cell-tr\">işitilecek olmak</small></td>\n        <td class=\"case-cell-latin\">captum īrī<br><small class=\"case-cell-tr\">ele geçirilecek olmak</small></td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"table-note-footer\"><em>Not:</em> Edilgen Gelecek Zaman Mastarı (Futurum Passivi Infinitivus) Supinum (-um) + īrī formülüyle yapılır ve çekimsizdir.</div>\n</div>\n"
      }
    ],
    "sentences": [
    ],
    "studyTips": "Edilgen geçmiş zamanlarda PPP parçasının özneye göre cins ve sayı değiştirdiğini unutmayınız: Puer monitus est (oğlan uyarıldı), puella monita est (kız uyarıldı), oppidum monitum est (kasaba uyarıldı)."
  },
  {
    "id": "T2_W14_L1",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 14,
    "lecture": 1,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 14. Hafta (1. Ders)",
    "title": "İLGİ ZAMİRLERİ (PRONOMINA RELATIVA) VE SORU SIFATLARI",
    "subtitle": "qui, quae, quod Çekimi, Yan Cümle Kurulumu ve Soru Sıfatı Ayrımı",
    "summary": "Bu fasikülde Latince sözdiziminin en temel bağlayıcı unsurlarından olan İlgi Zamirlerini (Pronomina Relativa: quī, quae, quod), yan cümle (Yan Cümle) ile ana cümle ilişkisini (Antecedens kuralı), tekil ve çoğul çekim tablolarını ve Soru Sıfatlarıyla (Adiectiva Interrogativa) mukayesesini öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 14.1.pdf",
    "slideCount": 30,
    "topics": ["Edilgen Cümle Sentaksı Sentezi", "İlgi Zamirleri (Pronomina Relativa: quī, quae, quod)", "Antecedens (Öncül Kelime) Kuralı", "Cins ve Sayı Uyumu vs Hal Belirlenmesi", "quī, quae, quod Singularis ve Pluralis Çekim Tabloları", "Model Yan Cümle Kurulumları (Slayt 13-25)", "Soru Sıfatları (Adiectiva Interrogativa: quī, quae, quod)", "Soru Sıfatı vs İlgi Zamiri Mukayesesi"],
    "vocab": ["qui", "quae", "quod", "cuius", "cui", "quem", "quam", "quo", "qua", "quorum", "quarum", "quibus", "quos", "quas", "vicinus", "fenestra", "casa", "diligo", "committo", "recito", "propter", "mater", "bene", "et", "adulescens", "pro", "patientia", "gratias"],
    "sections": [
      {
        "title": "1. İlgi Zamirinin Tanımı ve Temel Sentaks Kuralları (Slayt 6-10)",
        "html": "<p><strong>İlgi Zamiri (Pronomen Relativum),</strong> kendisinden önce gelen bir isme veya zamire (<span class=\"lat-word\">antecēdēns</span>) atıfta bulunarak bir <strong>Yan Cümle</strong> başlatır ve onu Ana Cümleye bağlayarak bir <em>Bileşik Cümle</em> oluşturur.</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead><tr><th>Kural Parametresi</th><th>Nasıl Belirlenir?</th><th>Örnek Uygulama</th></tr></thead>\n    <tbody>\n      <tr><td><strong>Cins (Genus)</strong></td><td>Öncül ismin (antecedens) cinsini aynen alır.</td><td>vir (m.) &gt; <strong>quī</strong>; fēmina (f.) &gt; <strong>quae</strong>; bellum (n.) &gt; <strong>quod</strong></td></tr>\n      <tr><td><strong>Sayı (Numerus)</strong></td><td>Öncül ismin (antecedens) sayısını aynen alır.</td><td>vir (tekil) &gt; <strong>quī</strong>; virī (çoğul) &gt; <strong>quī / quōs / quōrum</strong></td></tr>\n      <tr><td><strong>Hal (Casus)</strong></td><td><strong>Öncül ismin halinden tamamen BAĞIMSIZDIR!</strong> İlgi zamirinin dahil olduğu Yan Cümledeki gramatikal işlevine (özne mi, nesne mi, tümleç mi) göre belirlenir.</td><td>Ego exspectō litterās [Acc. Pl. f.] <strong>quās</strong> [Acc. Pl. f. - nesne] tū scrīpsistī.<br>Femina [Nom. Sg. f.] <strong>quam</strong> [Acc. Sg. f. - nesne] laudās est docta.</td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "rule",
        "calloutTitle": "Yüklem Kuralı (Slayt 10)",
        "calloutText": "İlgi zamiri bir yan cümle kurduğu için kendisinden sonra mutlaka ÇEKİMLİ BİR FİİLİ yüklem olarak alır: quae ex Italiā vēnit; dē quō dīcēbās.",
        "tableHtml": ""
      },
      {
        "title": "2. İlgi Zamiri (quī, quae, quod) Çekim Tabloları (Slayt 8-9)",
        "html": "<p>Doç. Dr. Eyüp Çoraklı'nın ders notlarındaki tekil ve çoğul paradigmalar:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">quī, quae, quod (İlgi Zamiri) (Singularis (Tekil))</strong>\n    <span class=\"table-sub\">(ki o / ki onu / ki onun...)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">quī</td>\n        <td class=\"case-cell-latin\">quae</td>\n        <td class=\"case-cell-latin\">quod</td>\n        <td class=\"case-cell-tr\">ki o</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey ki o</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">cuius</td>\n        <td class=\"case-cell-latin\">cuius</td>\n        <td class=\"case-cell-latin\">cuius</td>\n        <td class=\"case-cell-tr\">ki onun</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">cui</td>\n        <td class=\"case-cell-latin\">cui</td>\n        <td class=\"case-cell-latin\">cui</td>\n        <td class=\"case-cell-tr\">ki ona</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">quem</td>\n        <td class=\"case-cell-latin\">quam</td>\n        <td class=\"case-cell-latin\">quod</td>\n        <td class=\"case-cell-tr\">ki onu</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">quō</td>\n        <td class=\"case-cell-latin\">quā</td>\n        <td class=\"case-cell-latin\">quō</td>\n        <td class=\"case-cell-tr\">ki onunla / ondan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<br><div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>\n    <strong class=\"table-title\">quī, quae, quod (İlgi Zamiri) (Pluralis (Çoğul))</strong>\n    <span class=\"table-sub\">(ki onlar / ki onları / ki onların...)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Masculinum (Eril)</th>\n        <th>Femininum (Dişil)</th>\n        <th>Neutrum (Cinssiz)</th>\n        <th>Türkçe Karşılığı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">quī</td>\n        <td class=\"case-cell-latin\">quae</td>\n        <td class=\"case-cell-latin\">quae</td>\n        <td class=\"case-cell-tr\">ki onlar</td>\n      </tr>\n      <tr>\n        <td><strong>Vocativus</strong></td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-latin\">—</td>\n        <td class=\"case-cell-tr\">Ey ki onlar</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">quōrum</td>\n        <td class=\"case-cell-latin\">quārum</td>\n        <td class=\"case-cell-latin\">quōrum</td>\n        <td class=\"case-cell-tr\">ki onların</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">quibus</td>\n        <td class=\"case-cell-latin\">quibus</td>\n        <td class=\"case-cell-latin\">quibus</td>\n        <td class=\"case-cell-tr\">ki onlara</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">quōs</td>\n        <td class=\"case-cell-latin\">quās</td>\n        <td class=\"case-cell-latin\">quae</td>\n        <td class=\"case-cell-tr\">ki onları</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">quibus</td>\n        <td class=\"case-cell-latin\">quibus</td>\n        <td class=\"case-cell-latin\">quibus</td>\n        <td class=\"case-cell-tr\">ki onlarla / onlardan</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "3. İlgi Yan Cümlesi Modelleri ve Çözümlemeleri (Slayt 13-25)",
        "html": "<p>Slayt 13-25 boyunca işlenen zengin klasik cümle dizisi:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead><tr><th>Latince Cümle</th><th>Ana Cümle vs Yan Cümle</th><th>Kelimesi Kelimesine Çeviri</th><th>Edebi Türkçe Tercüme (Eyüp Hoca)</th></tr></thead>\n    <tbody>\n      <tr>\n        <td class=\"case-cell-latin\">Ego exspectō litterās quās tū scrīpsistī.</td>\n        <td>Ana: Ego exspectō litterās<br>Yan: quās tū scrīpsistī</td>\n        <td>Ben mektupları bekliyorum, ki onları sen yazdın.</td>\n        <td class=\"case-cell-tr\">Ben, senin yazdığın mektupları bekliyorum.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Fēmina quam laudās est docta.</td>\n        <td>Ana: Fēmina est docta<br>Yan: quam laudās</td>\n        <td>Kadın, ki onu övüyorsun, bilgilidir.</td>\n        <td class=\"case-cell-tr\">Övdüğün kadın bilgilidir.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Dīligō puellam quae ex Italiā vēnit.</td>\n        <td>Ana: Dīligō puellam<br>Yan: quae ex Italiā vēnit</td>\n        <td>Kıza değer veriyorum, ki o İtalya'dan geldi.</td>\n        <td class=\"case-cell-tr\">İtalya'dan gelen kıza değer veriyorum.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Homō dē quō dīcēbās est amīcus cārus.</td>\n        <td>Ana: Homō est amīcus cārus<br>Yan: dē quō dīcēbās</td>\n        <td>İnsan, ki onun hakkında konuşuyordun, değerli bir dosttur.</td>\n        <td class=\"case-cell-tr\">Hakkında konuştuğun insan değerli bir dosttur.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Puella cui librum dat est fortūnāta.</td>\n        <td>Ana: Puella est fortūnāta<br>Yan: cui librum dat</td>\n        <td>Kız, ki ona o kişi kitabı veriyor, talihlidir.</td>\n        <td class=\"case-cell-tr\">O kişinin kendisine kitap verdiği kız talihlidir.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Puer cuius patrem iuvābāmus est fortis.</td>\n        <td>Ana: Puer est fortis<br>Yan: cuius patrem iuvābāmus</td>\n        <td>Çocuk, ki onun babasına yardım ediyorduk, cesurdur.</td>\n        <td class=\"case-cell-tr\">Babasına yardım ettiğimiz çocuk cesurdur.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Vītam meam committam eīs virīs quōrum virtūtēs laudābās.</td>\n        <td>Ana: Vītam meam committam eīs virīs<br>Yan: quōrum virtūtēs laudābās</td>\n        <td>Yaşamımı o adamlara emanet edeceğim, ki sen onların erdemlerini övüyordun.</td>\n        <td class=\"case-cell-tr\">Erdemlerini övdüğün adamlara yaşamımı emanet edeceğim.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Timeō īdem perīculum quod timētis.</td>\n        <td>Ana: Timeō īdem perīculum<br>Yan: quod timētis</td>\n        <td>Aynı tehlikeden korkuyorum, ki ondan siz korkuyorsunuz.</td>\n        <td class=\"case-cell-tr\">Sizin korktuğunuz tehlikenin aynısından korkuyorum.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Incipimus vēritātem intellegere, quae mentēs nostrās semper regere dēbet et sine quā valēre nōn possumus.</td>\n        <td>Ana: Incipimus vēritātem intellegere<br>Yan: quae... et sine quā...</td>\n        <td>Hakikati idrak etmeye başlıyoruz, ki o hakikat her zaman zihinlerimizi yönetmelidir ve o olmadan güçlü olamayız.</td>\n        <td class=\"case-cell-tr\">Her zaman zihinlerimizi yönetmesi gereken ve kendisi olmadan güçlü olamayacağımız hakikati idrak etmeye başlıyoruz.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Puer mātrem timēbat, quae eum saepe neglegēbat.</td>\n        <td>Ana: Puer mātrem timēbat<br>Yan: quae eum saepe neglegēbat</td>\n        <td>Çocuk annesinden korkuyordu, ki o onu sık sık ihmal ediyordu.</td>\n        <td class=\"case-cell-tr\">Çocuk kendisini sık sık ihmal eden annesinden korkuyordu.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Multī audītōrēs saturās ācrēs timēbant, quās poēta recitābat.</td>\n        <td>Ana: Multī audītōrēs saturās ācrēs timēbant<br>Yan: quās poēta recitābat</td>\n        <td>Pek çok dinleyici keskin yergilerden korkuyordu, ki onları şair ezberden okuyordu.</td>\n        <td class=\"case-cell-tr\">Şairin ezberden okuduğu acımasız yergilerden pek çok dinleyici korkuyordu.</td>\n      </tr>\n      <tr>\n        <td class=\"case-cell-latin\">Bis vincit, quī sē vincit in victōriā.</td>\n        <td>Özdeyiş</td>\n        <td>İki defa mağlup eder, ki o kişi zaferde kendini mağlup eder.</td>\n        <td class=\"case-cell-tr\">Zaferde kendini mağlup eden kişi, iki defa mağlup eder.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "4. Soru Sıfatları (Adiectiva Interrogativa: quī, quae, quod) (Slayt 26-30)",
        "html": "<p><strong>Soru Sıfatları,</strong> biçimce İlgi Zamirleriyle (quī, quae, quod) tamamen aynıdır. Ancak bir ismin önüne gelerek soru cümlesi yapar ve <em>'Hangi?'</em> (hangi adam, hangi kadın, hangi şey) sorusunun cevabıdır:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Soru Sıfatı (quī, quae, quod) ve İlgi Zamiri Karşılaştırmalı Örnekleri (Slayt 29-30)</strong>\n    <span class=\"table-sub\">(Slayt 29-30)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Tür</th>\n        <th>Örnek Cümle</th>\n        <th>Türkçe Anlamı</th>\n        <th>İşlev Ayrımı</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Soru Sıfatı</strong></td>\n        <td class=\"case-cell-latin\">Quī mīles vīdit canem?</td>\n        <td class=\"case-cell-latin\">Hangi asker köpeği gördü?</td>\n        <td class=\"case-cell-latin\">mīles ismini niteleyen soru sıfatıdır.</td>\n      </tr>\n      <tr>\n        <td><strong>İlgi Zamiri</strong></td>\n        <td class=\"case-cell-latin\">Mīles quī vīdit canem est fortis.</td>\n        <td class=\"case-cell-latin\">Köpeği gören asker cesurdur.</td>\n        <td class=\"case-cell-latin\">mīles kelimesine atıf yapan ilgi zamiridir.</td>\n      </tr>\n      <tr>\n        <td><strong>Soru Sıfatı</strong></td>\n        <td class=\"case-cell-latin\">Quam puellam Marcus amat?</td>\n        <td class=\"case-cell-latin\">Marcus hangi kızı seviyor?</td>\n        <td class=\"case-cell-latin\">puellam ismini niteleyen soru sıfatıdır.</td>\n      </tr>\n      <tr>\n        <td><strong>İlgi Zamiri</strong></td>\n        <td class=\"case-cell-latin\">Puella quam Marcus amat pulchra est.</td>\n        <td class=\"case-cell-latin\">Marcus'un sevdiği kız güzeldir.</td>\n        <td class=\"case-cell-latin\">puella ismini açıklayan ilgi zamiridir.</td>\n      </tr>\n      <tr>\n        <td><strong>Soru Sıfatı</strong></td>\n        <td class=\"case-cell-latin\">Quem librum legis?</td>\n        <td class=\"case-cell-latin\">Hangi kitabı okuyorsun?</td>\n        <td class=\"case-cell-latin\">librum ismini niteleyen soru sıfatıdır.</td>\n      </tr>\n      <tr>\n        <td><strong>İlgi Zamiri</strong></td>\n        <td class=\"case-cell-latin\">Liber quem legis est meus.</td>\n        <td class=\"case-cell-latin\">Okuduğun kitap bana aittir.</td>\n        <td class=\"case-cell-latin\">liber ismini açıklayan ilgi zamiridir.</td>\n      </tr>\n      <tr>\n        <td><strong>Soru Sıfatı</strong></td>\n        <td class=\"case-cell-latin\">Quae fēmina illum librum legit?</td>\n        <td class=\"case-cell-latin\">Hangi kadın o kitabı okuyor?</td>\n        <td class=\"case-cell-latin\">fēmina ismini niteleyen soru sıfatıdır.</td>\n      </tr>\n      <tr>\n        <td><strong>İlgi Zamiri</strong></td>\n        <td class=\"case-cell-latin\">Fēmina quam vidēs est uxor consulis.</td>\n        <td class=\"case-cell-latin\">Gördüğün kadın konsülün karısıdır.</td>\n        <td class=\"case-cell-latin\">fēmina ismini açıklayan ilgi zamiridir.</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      }
    ],
    "sentences": [
      {
        "latin": "Puellae propter facta bona a matribus patribusque laudatae sunt.",
        "tr": "Kızlar iyi eylemleri yüzünden anneleri ve babaları tarafından övüldüler.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Mater filium bene intellexit, et adulescens ei pro patientia gratias egit.",
        "tr": "Anne oğlunu iyi anladı ve delikanlı sabrı için ona teşekkür etti.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Casa vicini nostri habuit paucas fenestras.",
        "tr": "Komşumuzun evi birkaç pencereye sahipti.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      }
    ],
    "studyTips": "İlgi zamiri ile soru sıfatının yazılışları aynıdır (quī, quae, quod). Ayırt etmenin yolu: soru sıfatı yanında mutlaka bir isimle birlikte soru cümlesinde kullanılır (Quī mīles? Quem librum?), ilgi zamiri ise bir yan cümle kurar."
  },
  {
    "id": "T2_W14_L2",
    "term": 2,
    "termName": "2. Dönem (Bahar Yarıyılı)",
    "courseCode": "Latince Gramer 2",
    "week": 14,
    "lecture": 2,
    "academicSchedule": "2. Dönem (Bahar Yarıyılı) • 14. Hafta (2. Ders)",
    "title": "SORU ZAMİRLERİ (QUIS, QUID), ABLATIVUS İŞLEVLERİ VE MÜFREDAT FİNALİ",
    "subtitle": "Pronomina Interrogativa, Ablativus (Araç, Tarz, Birliktelik, Zaman) ve Büyük İskender Metni",
    "summary": "Bu fasikülde 1. sınıf müfredatının zirvesini teşkil eden Soru Zamirlerini (quis? = kim?, quid? = ne?), soru sıfatı ve ilgi zamiriyle üçlü mukayesesini, Ablativus halinin 4 büyük sentaktik işlevini (Araç, Tarz, Birliktelik, Zaman), Seneca, Phaedrus ve Terentius alıntılarını ve Büyük İskender ile Akhilleus'un Mezarını anlatan dönem sonu final metnini öğreneceksiniz.",
    "difficulty": "İleri Seviye",
    "sourceFile": "Latince Gramer 2 - Ders Sunumu 14.2.pdf",
    "slideCount": 32,
    "topics": ["Soru Zamirleri (quis?, quid?)", "quis ve quid Singularis ve Pluralis Çekim Tabloları", "Üçlü Mukayese: Soru Zamiri vs Soru Sıfatı vs İlgi Zamiri", "Klasik Edebiyat Sentaksı (Terentius, Seneca, Phaedrus, Genesis)", "Ablatīvus Instrumentī (Yalın: Araç ve Vasıta)", "Ablatīvus Sociātīvus (cum + abl.: Birliktelik)", "Ablatīvus Modālis (cum + abl.: Tarz ve Durum)", "Ablatīvus Temporis (Yalın: Zaman ve Süre)", "Final Metni: Alexander Magnus ante tumulum Achillis"],
    "vocab": ["quis", "quid", "cuius", "cui", "quem", "quo", "emendo", "sapiens", "recedo", "alo", "doctus", "stilo", "tumulus", "Achilles", "laudator", "Homerus", "vere", "Ilias", "obruo", "humanus", "sto", "solum", "bene", "de", "deus", "caelum", "et", "se", "nec", "cum", "nam", "semper", "ex", "in", "homo", "animus", "ipse", "teneo"],
    "sections": [
      {
        "title": "1. Soru Zamiri (quis?, quid?) Çekim Tabloları (Slayt 2-5)",
        "html": "<p><strong>Soru Zamirleri (Pronomina Interrogativa),</strong> soru cümlesi yaparken <em>'Kim?'</em> (<span class=\"lat-word\">quis</span>) ve <em>'Ne?'</em> (<span class=\"lat-word\">quid</span>) sorularını karşılar. Tekilde eril ve dişil aynı formu paylaşır; çoğulda ise ilgi zamiriyle tamamen aynıdır:</p>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": "<div class=\"inflection-table-wrapper\">\n  <div class=\"table-header-bar\">\n    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>\n    <strong class=\"table-title\">Soru Zamiri (quis?, quid?) Tekil ve Çoğul Çekim Tablosu (Slayt 4-5)</strong>\n    <span class=\"table-sub\">(Slayt 4-5)</span>\n  </div>\n  <table class=\"inflection-table\">\n    <thead>\n      <tr>\n        <th>Casus (Hal)</th>\n        <th>Tekil Eril / Dişil (Kim?)</th>\n        <th>Tekil Nötr (Ne?)</th>\n        <th>Çoğul Eril (Kimler?)</th>\n        <th>Çoğul Dişil (Kimler?)</th>\n        <th>Çoğul Nötr (Neler?)</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td><strong>Nominativus</strong></td>\n        <td class=\"case-cell-latin\">quis?</td>\n        <td class=\"case-cell-latin\">quid?</td>\n        <td class=\"case-cell-latin\">quī?</td>\n        <td class=\"case-cell-latin\">quae?</td>\n        <td class=\"case-cell-latin\">quae?</td>\n      </tr>\n      <tr>\n        <td><strong>Genetivus</strong></td>\n        <td class=\"case-cell-latin\">cuius?</td>\n        <td class=\"case-cell-latin\">cuius?</td>\n        <td class=\"case-cell-latin\">quōrum?</td>\n        <td class=\"case-cell-latin\">quārum?</td>\n        <td class=\"case-cell-latin\">quōrum?</td>\n      </tr>\n      <tr>\n        <td><strong>Dativus</strong></td>\n        <td class=\"case-cell-latin\">cui?</td>\n        <td class=\"case-cell-latin\">cui?</td>\n        <td class=\"case-cell-latin\">quibus?</td>\n        <td class=\"case-cell-latin\">quibus?</td>\n        <td class=\"case-cell-latin\">quibus?</td>\n      </tr>\n      <tr>\n        <td><strong>Accusativus</strong></td>\n        <td class=\"case-cell-latin\">quem?</td>\n        <td class=\"case-cell-latin\">quid?</td>\n        <td class=\"case-cell-latin\">quōs?</td>\n        <td class=\"case-cell-latin\">quās?</td>\n        <td class=\"case-cell-latin\">quae?</td>\n      </tr>\n      <tr>\n        <td><strong>Ablativus</strong></td>\n        <td class=\"case-cell-latin\">quō?</td>\n        <td class=\"case-cell-latin\">quō?</td>\n        <td class=\"case-cell-latin\">quibus?</td>\n        <td class=\"case-cell-latin\">quibus?</td>\n        <td class=\"case-cell-latin\">quibus?</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"
      },
      {
        "title": "2. Soru Zamiri vs Soru Sıfatı vs İlgi Zamiri Üçlü Mukayesesi (Slayt 6-10)",
        "html": "<p>Slayt 6-10 boyunca sunulan üçlü ayrım kılavuzu:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead><tr><th>Casus & Durum</th><th>Soru Zamiri (Tek Başına)</th><th>Soru Sıfatı (İsimle Birlikte)</th><th>İlgi Zamiri (Yan Cümlede)</th></tr></thead>\n    <tbody>\n      <tr>\n        <td><strong>Nom. (Kim? / Hangi?)</strong></td>\n        <td class=\"case-cell-latin\">Quis librum tibi dedit?<br><small class=\"case-cell-tr\">Kitabı sana kim verdi?</small></td>\n        <td class=\"case-cell-latin\">Quem librum tibi dedit?<br><small class=\"case-cell-tr\">O hangi kitabı sana verdi?</small></td>\n        <td class=\"case-cell-latin\">Vir quī librum tibi dedit tē laudāvit.<br><small class=\"case-cell-tr\">Kitabı sana veren adam seni övdü.</small></td>\n      </tr>\n      <tr>\n        <td><strong>Gen. (Kimin? / Hangi?)</strong></td>\n        <td class=\"case-cell-latin\">Cuius librum Cicero tibi dedit?<br><small class=\"case-cell-tr\">Kimin kitabını Cicero sana verdi?</small></td>\n        <td class=\"case-cell-latin\">Cuius librī fuit Cicero auctor?<br><small class=\"case-cell-tr\">Cicero hangi kitabın yazarıydı?</small></td>\n        <td class=\"case-cell-latin\">Vir cuius librum Cicero tibi dedit tē laudāvit.<br><small class=\"case-cell-tr\">Cicero'nun kitabını sana verdiği adam seni övdü.</small></td>\n      </tr>\n      <tr>\n        <td><strong>Dat. (Kime? / Hangi?)</strong></td>\n        <td class=\"case-cell-latin\">Cui librum Cicero dedit?<br><small class=\"case-cell-tr\">Cicero kitabı kime verdi?</small></td>\n        <td class=\"case-cell-latin\">Cui amīcō librum dedistī?<br><small class=\"case-cell-tr\">Kitabı hangi arkadaşa verdin?</small></td>\n        <td class=\"case-cell-latin\">Vir cui Cicero librum dedit tē laudāvit.<br><small class=\"case-cell-tr\">Cicero'nun kitabı verdiği adam seni övdü.</small></td>\n      </tr>\n      <tr>\n        <td><strong>Acc. Nötr (Ne? / Hangi?)</strong></td>\n        <td class=\"case-cell-latin\">Quid dedit?<br><small class=\"case-cell-tr\">Ne verdi?</small></td>\n        <td class=\"case-cell-latin\">Quod praemium dedit?<br><small class=\"case-cell-tr\">Hangi ödülü verdi?</small></td>\n        <td class=\"case-cell-latin\">Praemium quod dedit erat magnum.<br><small class=\"case-cell-tr\">Verdiği ödül büyüktü.</small></td>\n      </tr>\n      <tr>\n        <td><strong>Abl. (Kiminle? / Hangi?)</strong></td>\n        <td class=\"case-cell-latin\">Ā quō praemium datum est?<br><small class=\"case-cell-tr\">Ödül kim tarafından verildi?</small></td>\n        <td class=\"case-cell-latin\">Quō praemiō ille mōtus est?<br><small class=\"case-cell-tr\">Hangi ödülle o kişi harekete geçirildi?</small></td>\n        <td class=\"case-cell-latin\">Vir ā quō praemium datum est tē laudāvit.<br><small class=\"case-cell-tr\">Kendisi tarafından ödül verilen adam seni övdü.</small></td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "3. Klasik Yazarlar Antolojisi (Slayt 11-20)",
        "html": "<p>Slayt 11-20 arasındaki seçkin klasik Latince cümleler:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead><tr><th>Latince Metin</th><th>Yazar / Eser</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks & Felsefi Not</th></tr></thead>\n    <tbody>\n      <tr><td class=\"case-cell-latin\">Id sōlum est cārum mihi.</td><td>Terentius</td><td class=\"case-cell-tr\">Bir tek o şey benim için değerlidir.</td><td>id: işaret zamiri; mihi: Dativus (benim için).</td></tr>\n      <tr><td class=\"case-cell-latin\">Bene est mihi quod tibi bene est.</td><td>Plinius</td><td class=\"case-cell-tr\">Senin için iyi olan şey, benim için de iyidir.</td><td>Romalıların mektup açılışında kullandığı dostluk selamı.</td></tr>\n      <tr><td class=\"case-cell-latin\">Quid hī dē tē sentiunt?</td><td>Cicero</td><td class=\"case-cell-tr\">Bu adamlar senin hakkında ne düşünüyorlar?</td><td>quid: soru zamiri nesne; dē tē: senin hakkında.</td></tr>\n      <tr><td class=\"case-cell-latin\">In prīncipiō Deus creāvit caelum et terram; et Deus creāvit hominem.</td><td>Genesis (Tekvin)</td><td class=\"case-cell-tr\">Başlangıçta Tanrı yeri ve göğü yarattı; ve Tanrı insanı yarattı.</td><td>creāvit: Perfectum 3. tekil; caelum et terram: nesne.</td></tr>\n      <tr><td class=\"case-cell-latin\">Consulēs sē nec tēcum nec cum illīs aliīs iungēbant.</td><td>Klasik Cümle</td><td class=\"case-cell-tr\">Konsüller kendilerini ne seninle ne de başka kişilerle birleştiriyorlardı.</td><td>nec... nec... (ne... ne de...); sē: dönüşlü zamir.</td></tr>\n      <tr><td class=\"case-cell-latin\">Hī Cicerōnem ipsum sēcum iunxērunt, nam eum semper dīlexerant.</td><td>Klasik Cümle</td><td class=\"case-cell-tr\">Bu adamlar bizzat Cicero'yu kendileriyle birleştirdiler, çünkü ona her zaman değer vermişlerdi.</td><td>sēcum = cum sē; dīlexerant: Plusquamperfectum 3. çoğul.</td></tr>\n      <tr><td class=\"case-cell-latin\">Ex vitiō alterīus sapiēns ēmendat suum.</td><td>Publilius Syrus</td><td class=\"case-cell-tr\">Bilge, başkasının kusurundan hareketle kendi kusurunu düzeltir.</td><td>alterīus: başkasının; suum: kendi kusurunu (vitiō anlaşılır).</td></tr>\n      <tr><td class=\"case-cell-latin\">Recēde in tē ipsum.</td><td>Seneca</td><td class=\"case-cell-tr\">Kendine (kendi içine) çekil!</td><td>recēde: 2. tekil emir kipi; in tē ipsum: kendi bizzat içine.</td></tr>\n      <tr><td class=\"case-cell-latin\">Homō doctus in sē semper dīvitiās habet.</td><td>Phaedrus</td><td class=\"case-cell-tr\">Bilgili insan servete her zaman kendi içinde sahiptir.</td><td>in sē: kendi içinde; dīvitiās: zenginlik (plurale tantum).</td></tr>\n      <tr><td class=\"case-cell-latin\">Animus sē ipse alit.</td><td>Seneca</td><td class=\"case-cell-tr\">Zihin bizzat kendisini besler.</td><td>alō, -ere, aluī, altum (beslemek, büyütmek); sē ipse: bizzat kendisini.</td></tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "4. Ablativus Halinin Dört Büyük Sentaktik İşlevi (Slayt 21-29)",
        "html": "<p>Latincede Ablativus hali tek başına veya edatlarla birleşerek şu <strong>4 temel işlevi</strong> görür:</p>\n<div class=\"inflection-table-wrapper\">\n  <table class=\"inflection-table\">\n    <thead><tr><th>İşlev Türü</th><th>Edat Durumu</th><th>Cevap Verdiği Soru</th><th>Model Cümleler (Slayt 23, 25, 27, 29)</th><th>Türkçe Tercümesi (Eyüp Hoca)</th></tr></thead>\n    <tbody>\n      <tr>\n        <td><strong>1. Vasıta / Araç<br>(Ablatīvus Instrumentī)</strong></td>\n        <td><strong>Edatsız</strong> (Yalın Abl.)</td>\n        <td>Neyle? Hangi araçla?</td>\n        <td class=\"case-cell-latin\">\n          Litterās stilō scrīpsit.<br>\n          Cīvēs pecūniā vīcit.<br>\n          Id meīs oculīs vīdī.<br>\n          Suīs labōribus urbem conservāvit.\n        </td>\n        <td class=\"case-cell-tr\">\n          Mektubu kalemle yazdı.<br>\n          Vatandaşları parayla ele geçirdi.<br>\n          O şeyi gözlerimle gördüm.<br>\n          Kenti kendi çabalarıyla kurtardı.\n        </td>\n      </tr>\n      <tr>\n        <td><strong>2. Birliktelik / Eşlik<br>(Ablatīvus Sociātīvus)</strong></td>\n        <td><strong>cum</strong> (+ abl.)</td>\n        <td>Kiminle? Kiminle birlikte?</td>\n        <td class=\"case-cell-latin\">\n          Cum amīcīs vēnērunt.<br>\n          Id cum eīs fēcit.\n        </td>\n        <td class=\"case-cell-tr\">\n          Arkadaşlarıyla birlikte geldiler.<br>\n          O şeyi onlarla yaptı.\n        </td>\n      </tr>\n      <tr>\n        <td><strong>3. Tarz / Durum<br>(Ablatīvus Modālis)</strong></td>\n        <td><strong>cum</strong> (+ abl.) veya sıfatlı yalın</td>\n        <td>Nasıl? Ne şekilde?</td>\n        <td class=\"case-cell-latin\">\n          Cum celeritāte vēnērunt.<br>\n          Id cum virtūte fēcit.<br>\n          Auribus teneō lupum. (Terentius)<br>\n          Parva formīca onera magna ōre trahit. (Horatius)\n        </td>\n        <td class=\"case-cell-tr\">\n          Hızla / hızlıca geldiler.<br>\n          O şeyi cesaretle yaptı.<br>\n          Kurdu kulaklarından tutuyorum.<br>\n          Küçük karınca koca yükü ağzıyla çekip götürdü.\n        </td>\n      </tr>\n      <tr>\n        <td><strong>4. Zaman / Süre<br>(Ablatīvus Temporis)</strong></td>\n        <td><strong>Edatsız</strong> (Yalın Abl.)</td>\n        <td>Ne zaman? Ne kadar sürede?</td>\n        <td class=\"case-cell-latin\">\n          Eō tempore nōn poteram id facere.<br>\n          Agricolae bonīs annīs valēbant.<br>\n          Eōdem diē vēnērunt.<br>\n          Paucīs hōrīs id faciet.<br>\n          Aestāte lūdēbant.\n        </td>\n        <td class=\"case-cell-tr\">\n          O sıralar onu yapmayı başaramıyordum.<br>\n          Çiftçiler iyi yıllarda refaha kavuşuyorlardı.<br>\n          Aynı gün geldiler.<br>\n          Birkaç saat içinde onu yapacak.<br>\n          Yazın oyun oynuyorlardı.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
        "calloutType": "",
        "calloutTitle": "",
        "calloutText": "",
        "tableHtml": ""
      },
      {
        "title": "5. Okuma Parçası: Büyük İskender ve Akhilleus'un Mezarı (Slayt 30-32)",
        "html": "<p>1. ve 2. Dönem Latince Gramer müfredatının nihai okuma ve çözümleme parçası:</p>\n<blockquote style=\"background:rgba(212,168,83,0.08); border-left:4px solid var(--eyup-gold); padding:1rem 1.25rem; margin:1rem 0; border-radius:4px; font-style:italic;\">\n  <p><strong>Latince Metin (Slayt 30):</strong><br>\n  Magnus ille Alexander multōs scrīptōrēs factōrum suōrum sēcum semper habēbat. Is enim ante tumulum Achillis ōlim stetit et dīxit haec verba: <em>\"Fuistī fortūnātus, ō adulēscēns, quod Homērum laudātōrem virtūtis tuae invēnistī.\"</em> Et vērē! Nam, sine Īliade illā, īdem tumulus, et corpus eius, et nōmen obruere potuit. Nihil corpus hūmānum conservāre potest; sed litterae magnae nōmen virī magnī saepe conservāre possunt.</p>\n</blockquote>\n<p><strong>Bilinmeyen Kelimeler (Slayt 31):</strong></p>\n<ul>\n  <li><span class=\"lat-word\">tumulus, -ī, m.</span>: mezar, höyük</li>\n  <li><span class=\"lat-word\">Achillēs, -lis, m.</span>: Akhilleus</li>\n  <li><span class=\"lat-word\">laudātor, -ōris, m.</span>: öven, methiyeci</li>\n  <li><span class=\"lat-word\">Homērus, -ī, m.</span>: Homeros</li>\n  <li><span class=\"lat-word\">vērē</span>, adv.: gerçekten, hakikaten</li>\n  <li><span class=\"lat-word\">Īlias, -adis, f.</span>: İlyada destanı</li>\n  <li><span class=\"lat-word\">obruō, -ere</span>: gömmek, üstünü örtmek, toprağa gömmek</li>\n  <li><span class=\"lat-word\">stō, stāre, stetī, statum</span>: durmak, dikilmek</li>\n  <li><span class=\"lat-word\">hūmānus, -a, -um</span>, adj.: insana ait, insani</li>\n</ul>\n<p><strong>Türkçe Çeviri (Slayt 32 - Eyüp Hoca):</strong></p>\n<blockquote style=\"background:rgba(255,255,255,0.04); border-left:4px solid #6b7280; padding:1rem 1.25rem; margin:1rem 0; border-radius:4px;\">\n  <p>Meşhur Büyük İskender, her zaman kendi başarılarını yazacak pek çok yazarı kendisiyle birlikte bulunduruyordu. Günün birinde Akhilleus'un mezarı başında durdu ve şu sözleri söyledi: <em>\"Talihliydin, ey delikanlı, çünkü senin erdeminin övücüsü olarak Homeros'u buldun.\"</em> Gerçekten de öyle! Çünkü meşhur İlyada olmasa, aynı mezar ve onun cesedi ve adı toprakların altında kalabilirdi. İnsana ait hiçbir bedeni korumak mümkün değildir; ama büyük edebi eserler, büyük bir adamın adını koruyabilir.</p>\n</blockquote>",
        "calloutType": "info",
        "calloutTitle": "Filolojik Başarı Tebriği",
        "calloutText": "Tebrikler! Doç. Dr. Eyüp Çoraklı'nın 1. ve 2. Dönem Latince Gramer müfredatının 46 derslik tam dijital fasikül serisini başarıyla tamamladınız! Artık klasik Latin edebiyatının metinlerini, felsefi ve tarihi kaynaklarını aslından okuyabilecek ve çözümleyebilecek sağlam bir filolojik temele sahipsiniz.",
        "tableHtml": ""
      }
    ],
    "sentences": [
      {
        "latin": "Id solum est carum mihi. Bene est mihi quod tibi bene est. ( Plinius )",
        "tr": "Benim için değerli olan sadece budur. (Terentius) Sen iyi durumda olduğun için ben de iyiyim. (Plinius)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "Id solum est carum mihi.",
        "tr": "Bir tek o şey benim için değerlidir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "Bene est mihi quod tibi bene est.",
        "tr": "Senin için iyi olan şey, benim için de iyidir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Plinius"
      },
      {
        "latin": "Quid hi de te sentiunt? In principio Deus creavit caelum et terram; et Deus creavit hominem. ( Genesis )",
        "tr": "Bunlar senin hakkında ne düşünüyorlar? (Cicero) Başlangıçta Tanrı göğü ve yeri yarattı; ve Tanrı insanı yarattı. (Genesis)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "Quid hi de te sentiunt?",
        "tr": "Bu adamlar senin hakkında ne düşünüyorlar?",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Cicero"
      },
      {
        "latin": "In principio Deus creavit caelum et terram; et Deus creavit hominem.",
        "tr": "Başlangıçta Tanrı yeri ve göğü yarattı; ve Tanrı insanı yarattı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Genesis"
      },
      {
        "latin": "Consules se nec tecum nec cum illis aliis iungebant. Hi Ciceronem ipsum secum iunxerunt, nam eum semper dilexerant.",
        "tr": "Konsüller ne seninle ne de şu diğerleriyle birleştiler. Bunlar bizzat Cicero'yu kendileriyle birleştirdiler, çünkü onu her zaman çok sevmişlerdi.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Consules se nec tecum nec cum illis aliis iungebant.",
        "tr": "Konsüller kendilerini ne seninle ne de başka kişilerle birleştiriyorlardı.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Hi Ciceronem ipsum secum iunxerunt, nam eum semper dilexerant. Bu adamlar bizzat Cicero ’ yu",
        "tr": "kendileriyle birleştirdiler, çünkü ona her zaman değer vermişlerdi.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Ex vitio alterius sapiens emendat suum. ( Publilius Syrus )",
        "tr": "Bilge, başkasının kusurundan hareketle kendi kusurunu düzeltir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Recede in te ipsum.",
        "tr": "Kendine (kendi içine) çekil!",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
      },
      {
        "latin": "Homo doctus in se semper divitias habet. ( Phaedrus )",
        "tr": "Bilgili insan servete her zaman kendi içinde sahiptir.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr"
      },
      {
        "latin": "Animus se ipse alit. Zihin bizzat kendisini besler.",
        "tr": "Zihin bizzat kendisini besler. (Seneca)",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Seneca"
      },
      {
        "latin": "Auribus teneo lupum.",
        "tr": "Kurdu kulaklarından tutuyorum.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Terentius"
      },
      {
        "latin": "Parva formica onera magna ore trahit.",
        "tr": "Küçük karınca koca yükü ağzıyla çekip götürdü.",
        "analysis": "",
        "notes": "",
        "direction": "lat_to_tr",
        "author": "Horatius"
      }
    ],
    "studyTips": "Son cümledeki felsefi dersi zihninize kazıyınız: 'Nihil corpus humanum conservare potest; sed litterae magnae nomen viri magni saepe conservare possunt.' (İnsana ait hiçbir bedeni korumak mümkün değildir; ama büyük edebi eserler, büyük bir adamın adını koruyabilir.)"
  }
];

if (typeof module !== 'undefined') module.exports = { EYUP_CURRICULUM };
