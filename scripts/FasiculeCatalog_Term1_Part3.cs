using System;
using System.Collections.Generic;

public static partial class FasiculeCatalog {

    public static void BuildTerm1AdvancedFasicules(
        List<BuildAuthoritativeFasicules.Fasicule> list,
        Func<string, List<string>> getSlideTexts,
        Dictionary<string, int> docSlideCountMap,
        Dictionary<string, BuildAuthoritativeFasicules.VocabItem> vocabMap
    ) {
        // ====================================================================
        // T1_W9_L1 & L2 / T1_W10_L1 & L2: 3. Grup İsimler
        // ====================================================================
        {
            var f = CreateFasicule(1, 9, 1, "LatinceGramer9.1.pdf",
                "3. GRUP İSİMLER 1: SESSİZ GÖVDELİ İSİMLER (CONSONANT STEMS)",
                "Declinatio III: Tekil Genetivus -is Takısı, Gövde Bulma Yöntemi, rex ve lex Çekimleri",
                "Bu fasikülde Latincede en geniş ve en zengin kelime grubunu oluşturan 3. Grup isimlerin temel mantığını, gövdeleri bir sessiz harfle biten isimleri, Eril/Dişil ile Nötr arasındaki takı farklarını ve tam çekimlerini öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup İsimler (Declinatio III)", "Sessiz Gövdeli İsimler", "Gövde Bulma Yöntemi", "Takılar Tablosu", "rex, regis (m.) Çekimi", "lex, legis (f.) Çekimi" });
            f.vocabKeys.AddRange(new[] { "rex", "lex", "virtus", "homo", "flos", "corpus", "carmen", "miles", "dux", "pax" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Grup İsimlerin Tanımı ve Gövde Bulma Yöntemi",
                html = @"<p>Tekil Genetivus hali <strong>–is</strong> takısıyla biten isimler 3. Grup (Declinatio III) isimleridir. Bu isimlerin Tekil Nominativus halleri sabit bir kalıba sahip değildir; <em>-s, -x, -r, -l, -n, -o, -c, -t</em> gibi pek çok farklı harfle bitebilir.</p>
<p><strong>Gövde Bulma Yöntemi:</strong> 3. Grup isimlerde gövde, sözlükte verilen <strong>Tekil Genetivus halindeki –is takısının atılmasıyla</strong> bulunur:</p>
<ul>
  <li><span class=""lat-word"">mīles</span> &gt; Gen: <span class=""lat-word"">mīlit-is</span> &gt; Gövde: <strong>mīlit-</strong> (asker)</li>
  <li><span class=""lat-word"">lēx</span> &gt; Gen: <span class=""lat-word"">lēg-is</span> &gt; Gövde: <strong>lēg-</strong> (yasa)</li>
  <li><span class=""lat-word"">corpus</span> &gt; Gen: <span class=""lat-word"">corpor-is</span> &gt; Gövde: <strong>corpor-</strong> (beden)</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "3. Çekim Sessiz Gövdeli Takılar Tablosu",
                calloutText = "MASCULINUM & FEMININUM:\nNom: — | Voc: — | Gen: -is | Dat: -ī | Acc: -em | Abl: -e\nÇoğul: Nom: -ēs | Voc: -ēs | Gen: -um | Dat: -ibus | Acc: -ēs | Abl: -ibus\n\nNEUTRUM (NÖTR):\nNom: — | Voc: — | Gen: -is | Dat: -ī | Acc: — | Abl: -e\nÇoğul: Nom: -a | Voc: -a | Gen: -um | Dat: -ibus | Acc: -a | Abl: -ibus"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Model Çekimler: rex, rēgis, m. (kral) ve lēx, lēgis, f. (yasa)",
                html = @"<p>rēx &lt; rēg-s (gövde: <strong>rēg-</strong>) | lēx &lt; lēg-s (gövde: <strong>lēg-</strong>):</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus (Hal)</th><th>rēx, rēgis m. (kral) Tekil / Çoğul</th><th>lēx, lēgis f. (yasa) Tekil / Çoğul</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nominativus (Nom.)</strong></td><td class=""case-cell-latin"">rēx / rēg-<strong>ēs</strong></td><td class=""case-cell-latin"">lēx / lēg-<strong>ēs</strong></td><td>kral / krallar</td></tr>
      <tr><td><strong>Vocativus (Voc.)</strong></td><td class=""case-cell-latin"">rēx / rēg-<strong>ēs</strong></td><td class=""case-cell-latin"">lēx / lēg-<strong>ēs</strong></td><td>ey kral / ey krallar</td></tr>
      <tr><td><strong>Genetivus (Gen.)</strong></td><td class=""case-cell-latin"">rēg-<strong>is</strong> / rēg-<strong>um</strong></td><td class=""case-cell-latin"">lēg-<strong>is</strong> / lēg-<strong>um</strong></td><td>kralın / kralların</td></tr>
      <tr><td><strong>Dativus (Dat.)</strong></td><td class=""case-cell-latin"">rēg-<strong>ī</strong> / rēg-<strong>ibus</strong></td><td class=""case-cell-latin"">lēg-<strong>ī</strong> / lēg-<strong>ibus</strong></td><td>krala / krallara</td></tr>
      <tr><td><strong>Accusativus (Acc.)</strong></td><td class=""case-cell-latin"">rēg-<strong>em</strong> / rēg-<strong>ēs</strong></td><td class=""case-cell-latin"">lēg-<strong>em</strong> / lēg-<strong>ēs</strong></td><td>kralı / kralları</td></tr>
      <tr><td><strong>Ablativus (Abl.)</strong></td><td class=""case-cell-latin"">rēg-<strong>e</strong> / rēg-<strong>ibus</strong></td><td class=""case-cell-latin"">lēg-<strong>e</strong> / lēg-<strong>ibus</strong></td><td>kralla / krallarla</td></tr>
    </tbody>
  </table>
</div>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Bonus rēx lēgibus novīs civitātem regit.",
                tr = "İyi kral yeni yasalarla devleti yönetir.",
                analysis = "Bonus rēx (Nom. Sg. m. - İyi kral); lēgibus novīs (Abl. Pl. f. - Yeni yasalarla); civitātem (Acc. Sg. f. - Devleti); regit (rego fiili, 3. Tekil Praesens - Yönetir)."
            });

            f.studyTips = "3. grup bir kelime öğrenirken ASLA sadece Nominativus halini ezberlemeyiniz; daima Genetivus haliyle birlikte ezberleyiniz (örn. 'miles, militis').";
            list.Add(f);
        }

        // ====================================================================
        // T1_W9_L2: LatinceGramer9.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 9, 2, "LatinceGramer9.2.pdf",
                "3. GRUP İSİMLER 2: NÖTR İSİMLER VE CİNS İPUÇLARI",
                "corpus ve carmen Çekimleri, Cins Belirleme Kuralları ve İstisnalar",
                "Bu fasikülde 3. gruptaki nötr isimleri (corpus, corporis; carmen, carminis), hece sayısı artan kelimeleri ve tekil Nominativus bitimlerine göre cins tayini yapma kurallarını inceleyeceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup Nötr İsimler", "corpus, corporis (n.)", "carmen, carminis (n.)", "Cins Belirleme İpuçları (Eril, Dişil, Nötr)", "İstisna Kelimeler" });
            f.vocabKeys.AddRange(new[] { "corpus", "carmen", "homo", "flos", "tempus", "vulnus", "caput", "nomen", "flumen" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Grup Nötr İsimler: corpus (beden) ve carmen (şarkı)",
                html = @"<p>Nötr kuralı gereğince Tekil Nom, Voc ve Acc birbirine eşittir; Çoğul Nom, Voc ve Acc ise <strong>-a</strong> ile biter:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>corpus, -oris n. (beden)</th><th>carmen, -inis n. (şarkı)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin"">corpus</td><td class=""case-cell-latin"">carmen</td><td>beden / şarkı</td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin"">corpor-<strong>is</strong></td><td class=""case-cell-latin"">carmin-<strong>is</strong></td><td>bedenin / şarkının</td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin"">corpor-<strong>ī</strong></td><td class=""case-cell-latin"">carmin-<strong>ī</strong></td><td>bedene / şarkıya</td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin"">corpus</td><td class=""case-cell-latin"">carmen</td><td>bedeni / şarkıyı</td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin"">corpor-<strong>e</strong></td><td class=""case-cell-latin"">carmin-<strong>e</strong></td><td>bedenle / şarkıyla</td></tr>
      <tr><td><strong>Nom. Pl.</strong></td><td class=""case-cell-latin"">corpor-<strong>a</strong></td><td class=""case-cell-latin"">carmin-<strong>a</strong></td><td>bedenler / şarkılar</td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin"">corpor-<strong>um</strong></td><td class=""case-cell-latin"">carmin-<strong>um</strong></td><td>bedenlerin / şarkıların</td></tr>
      <tr><td><strong>Acc. Pl.</strong></td><td class=""case-cell-latin"">corpor-<strong>a</strong></td><td class=""case-cell-latin"">carmin-<strong>a</strong></td><td>bedenleri / şarkıları</td></tr>
    </tbody>
  </table>
</div>"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Eyüp Hoca'nın 3. Grup İsimlerde Cins Belirleme İpuçları",
                html = @"<ol>
  <li><strong>Genelde Eril (Masculinum) Olanlar:</strong> Tekil Nom. hali <em>-o, -or, -os, -er, -ex, -es</em> ile bitenler (örn: leo, leonis: aslan; rector, rectoris: yönetici; flos, floris: çiçek). <em>İstisnalar: arbor (ağaç - f.), os, oris (ağız - n.).</em></li>
  <li><strong>Genelde Dişil (Femininum) Olanlar:</strong> Tekil Nom. hali <em>-as, -is, -es, -x, -s, -do, -go, -io</em> ile bitenler (örn: libertas, -atis: özgürlük; nox, noctis: gece; ratio, -onis: akıl; virgo, -inis: genç kız). <em>İstisnalar: dux (komutan - m.), mons (dağ - m.), dens (diş - m.), pons (köprü - m.).</em></li>
  <li><strong>Genelde Nötr (Neutrum) Olanlar:</strong> Tekil Nom. hali <em>-us, -en, -al, -ar, -e, -c, -t, -ur</em> ile bitenler (örn: corpus: beden; flumen: nehir; animal: hayvan; caput: baş, kafa).</li>
</ol>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Hominēs dē glōriā et tempore cōgitant.",
                tr = "İnsanlar şan ve zaman hakkında düşünürler.",
                analysis = "Hominēs (homo, hominis m., Nom. Pl. - İnsanlar); cōgitant (Düşünürler)."
            });

            f.studyTips = "-us ile biten bir 3. çekim ismin (corpus, tempus, vulnus) 2. çekim eril isimlerle karıştırılmaması için Genetivus tekiline (-oris, -eris) bakınız.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W11_L1 & L2: 3. Grup -i Gövdeli İsimler
        // ====================================================================
        {
            var f = CreateFasicule(1, 11, 1, "LatinceGramer11.1.pdf",
                "3. GRUP İSİMLER 3: -I GÖVDELİ VE DÜZENSİZ İSİMLER",
                "Declinatio III i-Stems: urbs, ars, animal, mare; Düzensiz İsimler (vīs, bōs, sūs, Iuppiter)",
                "Bu fasikülde Çoğul Genetivus takısı -ium ile biten -i gövdeli isimleri, nötr isimlerdeki Tekil Ablativus -ī ve Çoğul Nom/Acc -ia kurallarını ve Latincedeki ünlü düzensiz isimleri öğreneceksiniz.",
                "İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "-i Gövdeli İsimler", "Çoğul Genetivus (-ium)", "urbs, urbis ve ars, artis", "animal ve mare", "Düzensiz İsimler: vis, bos, sus, Iuppiter" });
            f.vocabKeys.AddRange(new[] { "urbs", "ars", "mons", "animal", "mare", "vis", "bos", "sus", "iuppiter", "civis", "hostis", "navis" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. -i Gövdeli İsimlerin Ayırt Edici Kuralları",
                html = @"<p>3. gruptaki <strong>-i gövdeli isimler</strong>, sessiz gövdelilerden şu üç temel noktada ayrılır:</p>
<ul>
  <li><strong>Çoğul Genetivus Takısı:</strong> Sessiz gövdelilerdeki <em>-um</em> yerine <strong>-ium</strong> takısı gelir: <span class=""lat-word"">urbium</span> (kentlerin), <span class=""lat-word"">artium</span> (sanatların), <span class=""lat-word"">montium</span> (dağların).</li>
  <li><strong>Nötr İsimlerde Tekil Ablativus Takısı:</strong> <em>-e</em> yerine uzun <strong>-ī</strong> takısı gelir: <span class=""lat-word"">animalī</span> (hayvanla), <span class=""lat-word"">marī</span> (denizle).</li>
  <li><strong>Nötr İsimlerde Çoğul Nom, Voc, Acc Takısı:</strong> <em>-a</em> yerine <strong>-ia</strong> takısı gelir: <span class=""lat-word"">animalia</span> (hayvanlar), <span class=""lat-word"">maria</span> (denizler).</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Hece ve Çift Sessiz Testi",
                calloutText = "Bir ismin -i gövdeli olup olmadığını anlamak için Eyüp Hoca'nın iki altın kuralı:\n1) Eşit Heceliler (Parisyllaba): Tekil Nom ve Gen hece sayısı eşitse -i gövdelidir (cīvis, cīvis: 2 hece; hostis, hostis: 2 hece).\n2) Çift Sessiz Kuralı: Tekil Gen hali Nom halinden 1 hece fazla olsa bile, -is takısından önce BİRDEN FAZLA SESSİZ varsa -i gövdelidir: urb-s > urb-is (-rb- çift sessiz); nox > noct-is (-ct- çift sessiz); mons > mont-is (-nt- çift sessiz)."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Düzensiz Çekimi Olan Özel İsimler (Nōmina Anōmala)",
                html = @"<ol>
  <li><strong>vīs, vīs, f. (güç, kuvvet, şiddet):</strong> Tekilde Nom: <span class=""lat-word"">vīs</span>, Acc: <span class=""lat-word"">vim</span>, Abl: <span class=""lat-word"">vī</span>. Tekil Gen ve Dat neredeyse hiç kullanılmaz (yerine <em>rōboris, rōborī</em> kullanılır). Çoğulda ise tam çekimlidir: Nom/Voc/Acc: <span class=""lat-word"">vīrēs</span>, Gen: <span class=""lat-word"">vīrium</span>, Dat/Abl: <span class=""lat-word"">vīribus</span>.</li>
  <li><strong>Iuppiter, Iovis, m. (Baş Tanrı Jüpiter):</strong> Nom/Voc: <span class=""lat-word"">Iuppiter</span>, Gen: <span class=""lat-word"">Iovis</span>, Dat: <span class=""lat-word"">Iovī</span>, Acc: <span class=""lat-word"">Iovem</span>, Abl: <span class=""lat-word"">Iove</span>.</li>
  <li><strong>bōs, bovis, m./f. (öküz / inek):</strong> Gen. Pl: <span class=""lat-word"">boum</span>, Dat/Abl. Pl: <span class=""lat-word"">bōbus</span> / <span class=""lat-word"">būbus</span>.</li>
</ol>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Rōmānī magnam urbem vī et armīs dēfendēbant.",
                tr = "Romalılar büyük kenti güçle ve silahlarla savunuyorlardı.",
                analysis = "Rōmānī (Nom. Pl. - Romalılar); magnam urbem (Acc. Sg. f. - Büyük kenti); vī et armīs (Abl. - Güçle ve silahlarla); dēfendēbant (Imperfectum - Savunuyorlardı)."
            });

            f.studyTips = "vīs kelimesinin çoğul halleri (vīrēs, vīrium, vīribus: güçler) ile vir kelimesinin çoğul hallerini (virī, virōrum, virīs: adamlar) birbirine karıştırmayınız!";
            list.Add(f);
        }

        // ====================================================================
        // T1_W12_L2: LatinceGramer12.2.pdf: 3. ve 4. Çekim Fiiller
        // ====================================================================
        {
            var f = CreateFasicule(1, 12, 2, "LatinceGramer12.2.pdf",
                "3. VE 4. ÇEKİM FİİLLER (CONIUGATIO III & IV)",
                "regō, audīo ve capiō; Praesens, Imperfectum ve Futurum I (-am, -ēs, -et Kuralı)",
                "Bu fasikülde 3. çekim (kısa -ere), 4. çekim (-īre) ve 3-io (karışık çekim) fiilleri, bu fiillerin gelecek zamanındaki devrimsel takı değişimini ve çekim tablolarını inceleyeceksiniz.",
                "İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Çekim Fiiller (-ere)", "4. Çekim Fiiller (-īre)", "3-io Karışık Çekim (capiō)", "Futurum I: -am, -ēs, -et Kuralı", "Karşılaştırmalı Çekim Tablosu" });
            f.vocabKeys.AddRange(new[] { "rego", "duco", "scribo", "audio", "venio", "capio", "facio" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. ve 4. Çekimde Gelecek Zaman (Futurum I) Kuralı",
                html = @"<p>1. ve 2. çekim fiiller gelecek zamanda <em>-bō, -bis, -bit</em> takılarını alırken, <strong>3. ve 4. çekim fiiller ASLA -b- SESİ ALMAZLAR!</strong></p>
<p>Bunun yerine 1. tekil şahısta <strong>-am</strong>, diğer şahıslarda ise <strong>-ē-</strong> sesli harfini alırlar:</p>
<ul>
  <li>1. Tekil: <strong>-am</strong> (örn. <span class=""lat-word"">regam</span>: yöneteceğim; <span class=""lat-word"">audiam</span>: işiteceğim)</li>
  <li>2. Tekil: <strong>-ēs</strong> (örn. <span class=""lat-word"">regēs</span>: yöneteceksin; <span class=""lat-word"">audiēs</span>: işiteceksin)</li>
  <li>3. Tekil: <strong>-et</strong> (örn. <span class=""lat-word"">reget</span>: yönetecek; <span class=""lat-word"">audiet</span>: işitecek)</li>
  <li>1. Çoğul: <strong>-ēmus</strong> (örn. <span class=""lat-word"">regēmus</span>: yöneteceğiz; <span class=""lat-word"">audiēmus</span>: işiteceğiz)</li>
  <li>2. Çoğul: <strong>-ētis</strong> (örn. <span class=""lat-word"">regētis</span>: yöneteceksiniz; <span class=""lat-word"">audiētis</span>: işiteceksiniz)</li>
  <li>3. Çoğul: <strong>-ent</strong> (örn. <span class=""lat-word"">regent</span>: yönetecekler; <span class=""lat-word"">audient</span>: işitecekler)</li>
</ul>",
                calloutType = "warning",
                calloutTitle = "Çok Önemli Karşılaştırma",
                calloutText = "laudat (Praesens) -> laudabit (Futurum) [1. Çekim]\nreget (Futurum!) -> regit (Praesens) [3. Çekim]\n3. çekimde -et eki GELECEK ZAMAN ekidir!"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Cīvēs bonum ducem audient et urbem regent.",
                tr = "Yurttaşlar iyi komutanı dinleyecekler ve kenti yönetecekler.",
                analysis = "Cīvēs (Nom. Pl. - Yurttaşlar); audient (4. Çekim Futurum 3. Çoğul - Dinleyecekler); regent (3. Çekim Futurum 3. Çoğul - Yönetecekler)."
            });

            f.studyTips = "Gelecek zamanda 1-2. çekim için '-b-', 3-4. çekim için '-e-' kuralını ezberleyiniz.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W13: Zamirler
        // ====================================================================
        {
            var f = CreateFasicule(1, 13, 1, "LatinceGramer13.1.pdf",
                "ZAMİRLER 1: KİŞİ VE DÖNÜŞLÜLÜK ZAMİRLERİ",
                "ego, tū, nōs, vōs, suī: Çekimleri, Dativus ve Genetivus Ayrımı",
                "Bu fasikülde 1. ve 2. şahıs kişi zamirlerini, dönüşlülük zamirini (sē/suī) ve cümlede vurgu ile sentaks rollerini öğreneceksiniz.",
                "Orta Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Kişi Zamirleri (ego, tu)", "Çoğul Zamirler (nos, vos)", "Genetivus Ayrımı (nostri/nostrum)", "Dönüşlülük Zamiri (sē, sui)" });
            f.vocabKeys.AddRange(new[] { "ego", "tu", "nos", "vos", "sui", "se", "mihi", "tibi", "nobis", "vobis" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Kişi Zamirleri Çekim Tablosu",
                html = @"<p>Latincede kişi zamirlerinin çekimi oldukça özeldir:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>1. Şahıs: ego (ben)</th><th>2. Şahıs: tū (sen)</th><th>1. Çoğul: nōs (biz)</th><th>2. Çoğul: vōs (siz)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom.</strong></td><td class=""case-cell-latin""><strong>ego</strong></td><td class=""case-cell-latin""><strong>tū</strong></td><td class=""case-cell-latin""><strong>nōs</strong></td><td class=""case-cell-latin""><strong>vōs</strong></td></tr>
      <tr><td><strong>Gen.</strong></td><td class=""case-cell-latin"">meī</td><td class=""case-cell-latin"">tuī</td><td class=""case-cell-latin"">nostrī / nostrum</td><td class=""case-cell-latin"">vestrī / vestrum</td></tr>
      <tr><td><strong>Dat.</strong></td><td class=""case-cell-latin""><strong>mihi</strong></td><td class=""case-cell-latin""><strong>tibi</strong></td><td class=""case-cell-latin""><strong>nōbīs</strong></td><td class=""case-cell-latin""><strong>vōbīs</strong></td></tr>
      <tr><td><strong>Acc.</strong></td><td class=""case-cell-latin""><strong>mē</strong></td><td class=""case-cell-latin""><strong>tē</strong></td><td class=""case-cell-latin""><strong>nōs</strong></td><td class=""case-cell-latin""><strong>vōs</strong></td></tr>
      <tr><td><strong>Abl.</strong></td><td class=""case-cell-latin""><strong>mē</strong></td><td class=""case-cell-latin""><strong>tē</strong></td><td class=""case-cell-latin""><strong>nōbīs</strong></td><td class=""case-cell-latin""><strong>vōbīs</strong></td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "info",
                calloutTitle = "cum ile Bitişik Yazılma Kuralı",
                calloutText = "cum (ile) edatı bu zamirlerle birlikte kullanıldığında kelimenin sonuna bitişik yazılır: mēcum (benimle), tēcum (seninle), nōbīscum (bizimle), vōbīscum (sizinle), sēcum (kendisiyle)."
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Salvē, mea bella puella, dā mihi multa bāsia!",
                tr = "Selam, güzel sevgilim, bana pek çok öpücük ver!",
                analysis = "Dā (Emir - Ver); mihi (Dat. - Bana); multa bāsia (Acc. Pl. - Pek çok öpücüğü)."
            });

            f.studyTips = "nostrī nesnel genetivus (bizi/bize duyulan sevgi), nostrum ise parça/kısım genetivusu (bizden birkaçı) için kullanılır.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W14_L1: 4. ve 5. Grup İsimler
        // ====================================================================
        {
            var f = CreateFasicule(1, 14, 1, "LatinceGramer14.1.pdf",
                "4. VE 5. GRUP İSİMLER (DECLINATIO IV & V)",
                "fructus, manus, cornū (-ūs) ve rēs, diēs, fidēs (-ēī) Çekimleri",
                "Bu fasikülde Tekil Genetivus hali -ūs ile biten 4. Grup isimleri ve -ēī ile biten 5. Grup isimleri, istisnalarını ve önemli deyimleri öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "4. Grup İsimler (-us, -us / -u, -us)", "fructus ve cornu Çekimi", "domus İstisnası", "5. Grup İsimler (-es, -ei)", "res ve dies Çekimleri" });
            f.vocabKeys.AddRange(new[] { "fructus", "manus", "cornu", "exercitus", "senatus", "domus", "res", "dies", "fides", "spes" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 4. Grup İsimler (Declinatio IV: -ūs)",
                html = @"<p>Tekil Genetivus hali <strong>-ūs</strong> ile biten isimlerdir. Eril ve dişiller <em>-us</em> (fructus, manus), nötrler ise <em>-ū</em> (cornū) ile biter:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>fructus, -ūs m. (meyve)</th><th>cornū, -ūs n. (boynuz/kanat)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin"">fruct-<strong>us</strong></td><td class=""case-cell-latin"">corn-<strong>ū</strong></td><td>meyve / boynuz</td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin"">fruct-<strong>ūs</strong></td><td class=""case-cell-latin"">corn-<strong>ūs</strong></td><td>meyvenin / boynuzun</td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin"">fruct-<strong>uī</strong></td><td class=""case-cell-latin"">corn-<strong>ū</strong></td><td>meyveye / boynuza</td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin"">fruct-<strong>um</strong></td><td class=""case-cell-latin"">corn-<strong>ū</strong></td><td>meyveyi / boynuzu</td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin"">fruct-<strong>ū</strong></td><td class=""case-cell-latin"">corn-<strong>ū</strong></td><td>meyveyle / boynuzla</td></tr>
      <tr><td><strong>Nom. Pl.</strong></td><td class=""case-cell-latin"">fruct-<strong>ūs</strong></td><td class=""case-cell-latin"">corn-<strong>ua</strong></td><td>meyveler / boynuzlar</td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin"">fruct-<strong>uum</strong></td><td class=""case-cell-latin"">corn-<strong>uum</strong></td><td>meyvelerin / boynuzların</td></tr>
      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=""case-cell-latin"">fruct-<strong>ibus</strong></td><td class=""case-cell-latin"">corn-<strong>ibus</strong></td><td>meyvelere / boynuzlara</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "warning",
                calloutTitle = "manus ve domus Cinsiyeti",
                calloutText = "manus (el) ve domus (ev) kelimeleri -us ile bitmelerine rağmen DİŞİLDİR (f.)."
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 5. Grup İsimler (Declinatio V: -ēī / -eī)",
                html = @"<p>Tekil Genetivus hali <strong>-ēī</strong> ile biten isimlerdir. Tamamı (diēs kelimesi hariç) <strong>Dişildir (Femininum)</strong>:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>rēs, reī f. (şey, olay, mesele)</th><th>diēs, diēī m./f. (gün)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>ēs</strong></td><td class=""case-cell-latin"">di-<strong>ēs</strong></td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>eī</strong></td><td class=""case-cell-latin"">di-<strong>ēī</strong></td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>eī</strong></td><td class=""case-cell-latin"">di-<strong>ēī</strong></td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>em</strong></td><td class=""case-cell-latin"">di-<strong>em</strong></td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin"">r-<strong>ē</strong></td><td class=""case-cell-latin"">di-<strong>ē</strong></td></tr>
      <tr><td><strong>Nom/Acc. Pl.</strong></td><td class=""case-cell-latin"">r-<strong>ēs</strong></td><td class=""case-cell-latin"">di-<strong>ēs</strong></td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin"">r-<strong>ērum</strong></td><td class=""case-cell-latin"">di-<strong>ērum</strong></td></tr>
      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=""case-cell-latin"">r-<strong>ēbus</strong></td><td class=""case-cell-latin"">di-<strong>ēbus</strong></td></tr>
    </tbody>
  </table>
</div>"
            });

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Rēs pūblica est patrimōnium populī.",
                tr = "Cumhuriyet (kamusal varlık / devlet) halkın mirasıdır.",
                analysis = "Rēs pūblica (Nom. Sg. f. - Devlet); est (3. Tekil Praesens); patrimōnium (Nötr - Miras); populī (Gen. Sg. m. - Halkın)."
            });

            f.studyTips = "5. çekimde yalnızca rēs ve diēs kelimeleri çoğulda tam çekime sahiptir; diğer 5. çekim kelimelerin çoğul halleri neredeyse hiç kullanılmaz.";
            list.Add(f);
        }
    }
}
