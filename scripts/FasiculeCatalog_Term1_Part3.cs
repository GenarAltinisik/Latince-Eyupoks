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
        // T1_W9_L1: LatinceGramer9.1.pdf
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

            f.sentences.Add(new BuildAuthoritativeFasicules.SentenceItem {
                latin = "Bella sunt mala et multa pericula habent.",
                tr = "Savaşlar kötüdür ve pek çok tehlike barındırır.",
                analysis = "Bella (Nom. Pl. n. - Savaşlar); sunt (3. Çoğul Praesens); mala (Nom. Pl. n. - Kötüdür); et (Bağlaç); multa pericula (Acc. Pl. n. - Pek çok tehlikeyi); habent (3. Çoğul - Taşır, barındırır)."
            });

            f.studyTips = "3. grup nötr isimlerde çoğul -a takısı (corpora, carmina) Türkçedeki -ler/-lar çoğul eki gibidir.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W10_L1: LatinceGramer10.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 10, 1, "LatinceGramer10.1.pdf",
                "DÜZENSİZ FİİLLER 1: ESSE (OLMAK) - PRAESENS VE IMPERFECTUM",
                "sum, es, est... / eram, eras, erat... Çekimleri ve Catullus ile Cicero Okuma Metinleri",
                "Bu fasikülde Latincede en temel yardımcı fiil olan esse (olmak) fiilinin şimdiki zaman (praesens) ve şimdiki zamanın hikayesi (imperfectum) çekimlerini, isim cümlelerinde yüklem olma işlevini ve klasik edebiyattan Catullus ile Cicero metinlerini inceleyeceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "esse Fiili (sum, esse, fuī)", "Praesens Indicativus (sum, es, est...)", "Imperfectum Indicativus (eram, erās, erat...)", "Yüklem İsim (Praedicativum)", "Catullus ve Cicero Okuma Parçaları" });
            f.vocabKeys.AddRange(new[] { "sum", "possum", "amicitia", "verus", "dignus", "praeclarus", "rarus", "stultus", "pecunia", "basium", "mille" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. esse (Olmak) Fiilinin Praesens ve Imperfectum Çekimleri",
                html = @"<p>Latincede <strong>esse</strong> fiili düzensizdir. Şimdiki zamanda kök <em>es- / s-</em> biçiminde değişirken, geçmiş hikaye zamanında (Imperfectum) <em>erā-</em> kökü üzerine kurulur:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs & Sayı</th><th>Praesens (Şimdiki Zaman)</th><th>Imperfectum (Geçmiş Hikaye)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Sg. (Ben)</strong></td><td class=""case-cell-latin""><strong>sum</strong></td><td class=""case-cell-latin""><strong>eram</strong></td><td>-im (öğrenciyim) / idim (öğrenciydim)</td></tr>
      <tr><td><strong>2. Sg. (Sen)</strong></td><td class=""case-cell-latin""><strong>es</strong></td><td class=""case-cell-latin""><strong>erās</strong></td><td>-sin / idin</td></tr>
      <tr><td><strong>3. Sg. (O)</strong></td><td class=""case-cell-latin""><strong>est</strong></td><td class=""case-cell-latin""><strong>erat</strong></td><td>-dir / idi</td></tr>
      <tr><td><strong>1. Pl. (Biz)</strong></td><td class=""case-cell-latin""><strong>sumus</strong></td><td class=""case-cell-latin""><strong>erāmus</strong></td><td>-iz / idik</td></tr>
      <tr><td><strong>2. Pl. (Siz)</strong></td><td class=""case-cell-latin""><strong>estis</strong></td><td class=""case-cell-latin""><strong>erātis</strong></td><td>-siniz / idiniz</td></tr>
      <tr><td><strong>3. Pl. (Onlar)</strong></td><td class=""case-cell-latin""><strong>sunt</strong></td><td class=""case-cell-latin""><strong>erant</strong></td><td>-dirler / idiler</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "Yüklem İsmin Hali Kuralı",
                calloutText = "esse fiili bir nesne (Accusativus) almaz! Cümledeki özneyi yüklem durumundaki bir isim veya sıfatla birbirine bağlar (bağ-fiil / copula). Bu nedenle esse fiiliyle birlikte kullanılan isim veya sıfat daima ÖZNE GİBİ NOMINATIVUS haldedir (Praedicativum): Vergilius est poeta (Vergilius şairdir)."
            });

            f.studyTips = "sum ve eram çekimlerini ritmik olarak ezberleyiniz: sum, es, est, sumus, estis, sunt; eram, eras, erat, eramus, eratis, erant.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W10_L2: LatinceGramer10.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 10, 2, "LatinceGramer10.2.pdf",
                "3. GRUP İSİMLERDE GENEL SÖZLÜK YAPISI VE ALIŞTIRMALAR",
                "3. Çekim Gövde Çeşitliliği (-x, -s, -r, -l, -n, -c, -t) ve Nominativus Çözümleme",
                "Bu fasikülde 3. grup isimlerin sözlükteki yer alış biçimlerini, Nominativus halindeki çeşitliliği, Tekil Genetivus halinden kök ve gövde çıkarma tekniklerini ve zengin örnek cümle çözümlemelerini öğreneceksiniz.",
                "Orta Seviye", "45 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup Sözlük Maddeleri", "Nominativus Sonlanışları (-x, -s, -r, -l, -n)", "Gövde ve Hâl Eşleştirmesi", "Sentaks Alıştırmaları" });
            f.vocabKeys.AddRange(new[] { "civis", "urbs", "homo", "mater", "pater", "frater", "miles", "nomen", "corpus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Çekim İsimlerin Çeşitli Nominativus Biçimleri",
                html = @"<p>3. çekim isimlerde tekil Nominativus hali sabit bir ek almaz; gövdenin sonundaki harfe bağlı olarak farklı şekillerde karşımıza çıkar:</p>
<ul>
  <li><strong>-x ile bitenler:</strong> Gövdedeki <em>-c</em> veya <em>-g</em> sessizinin Nominativus eki olan <em>-s</em> ile kaynaşmasıdır: <span class=""lat-word"">dūc-s</span> &gt; <span class=""lat-word"">dux</span>, <span class=""lat-word"">rēg-s</span> &gt; <span class=""lat-word"">rēx</span>.</li>
  <li><strong>-s ile biten dişiller:</strong> Gövdedeki dental (dişsil) seslerin (<em>-d, -t</em>) düşmesiyle oluşur: <span class=""lat-word"">virtūt-s</span> &gt; <span class=""lat-word"">virtūs</span>, <span class=""lat-word"">laud-s</span> &gt; <span class=""lat-word"">laus</span>.</li>
  <li><strong>-r ve -l ile bitenler:</strong> Ek almadan doğrudan kök biçimiyle kullanılır: <span class=""lat-word"">frāter</span>, <span class=""lat-word"">sōl</span>, <span class=""lat-word"">cōnsul</span>.</li>
  <li><strong>-ō ile bitenler:</strong> Gövdedeki <em>-on-</em> sesinden <em>-n</em> harfinin düşmesiyle oluşur: <span class=""lat-word"">homō</span> (Gen: <span class=""lat-word"">hominis</span>), <span class=""lat-word"">legiō</span> (Gen: <span class=""lat-word"">legiōnis</span>).</li>
</ul>",
                calloutType = "info",
                calloutTitle = "3. Çekim Sözlük İpucu",
                calloutText = "Sözlükte 3. grup bir kelime ararken kökü değil, Tekil Nominativus biçimini aramanız gerekir. Ancak cümlenin içinde çekimli bir biçimle karşılaştığınızda (örn. militibus), önce -ibus ekini atıp milit- gövdesini bulmalı, ardından bu gövdenin Nominativus'unun miles olduğunu hatırlamalısınız."
            });

            f.studyTips = "3. çekim isimlerde gövde sonu sessiz harflerini gruplara ayırarak (velar, dental, labial, likit, nazal) çalışmak kuralları kalıcı kılar.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W11_L1: LatinceGramer11.1.pdf
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
  <li><strong>Nötr -i Gövdeliler (mare, animal, exemplar):</strong>
    <ul>
      <li>Tekil Ablativus takısı <em>-e</em> değil, <strong>-ī</strong> olur: <span class=""lat-word"">marī</span> (deniz ile/denizde).</li>
      <li>Çoğul Nom/Voc/Acc takısı <em>-a</em> değil, <strong>-ia</strong> olur: <span class=""lat-word"">maria</span> (denizler), <span class=""lat-word"">animālia</span> (hayvanlar).</li>
    </ul>
  </li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Bir İsmin -i Gövdeli Olduğunu Nasıl Anlarız?",
                calloutText = "Şu iki kuraldan birine uyan isimler -i gövdelidir:\n1. Eşit Heceliler Kuralı (Parisyllaba): Tekil Nom ve Gen hece sayıları eşittir: cīvis, cīvis (2 hece); nāvis, nāvis (2 hece).\n2. İki Sessiz Kuralı: Tekil Nom tek hecelidir ve Genetivus ekinden önceki kök iki sessiz harfle biter: urbs, urb-is (r+b); ars, art-is (r+t); mōns, mont-is (n+t)."
            });

            f.studyTips = "urbs, ars, nox, mors gibi kökü çift sessizle biten kelimelerin çoğul genetivus'ta daima -ium aldığını unutmayınız.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W11_L2: LatinceGramer11.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 11, 2, "LatinceGramer11.2.pdf",
                "3. GRUP İSİMLERLE SIFAT TAMLAMALARI VE SENTAKS ALIŞTIRMALARI",
                "flumen longum, urbes magnae, patres miseri Kalıpları ve Cümle Çözümlemeleri",
                "Bu fasikülde 3. grup isimlerle 1. ve 2. grup sıfatların bir arada kullanıldığı sıfat tamlamalarını, hal ve cins uyumlarını, flūmen longum ve urbēs magnae kalıplarını ve yoğun cümle alıştırmalarını inceleyeceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Sıfat-İsim Uyumu (Congruentia)", "Farklı Çekim Gruplarından Tamlamalar", "flumen longum", "urbes magnae", "patres miseri", "Cümle Alıştırmaları" });
            f.vocabKeys.AddRange(new[] { "flumen", "longus", "urbs", "magnus", "pater", "miser", "mater", "romanus", "miles", "clarus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Farklı Çekim Gruplarından İsim ve Sıfat Tamlamaları",
                html = @"<p>Latincede sıfat, nitelediği isimle <strong>üç parametrede (Casus, Numerus, Genus)</strong> tam uyum sağlamak zorundadır. Ancak isim ile sıfat <em>farklı çekim gruplarına</em> mensup olabilir; bu durumda eklerin harf yapısı farklı görünse de gramatikal hal, sayı ve cins eşittir:</p>
<ul>
  <li><span class=""lat-word"">flūmen</span> (3. Çekim Nötr Nom. Sg.) + <span class=""lat-word"">longum</span> (2. Çekim Nötr Nom. Sg.) = <strong>flūmen longum</strong> (uzun nehir)</li>
  <li><span class=""lat-word"">urbēs</span> (3. Çekim Dişil Nom. Pl.) + <span class=""lat-word"">magnae</span> (1. Çekim Dişil Nom. Pl.) = <strong>urbēs magnae</strong> (büyük şehirler)</li>
  <li><span class=""lat-word"">patrēs</span> (3. Çekim Eril Nom. Pl.) + <span class=""lat-word"">miserī</span> (2. Çekim Eril Nom. Pl.) = <strong>patrēs miserī</strong> (zavallı babalar)</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Tamlama Kuralı",
                calloutText = "İsim 3. çekimden, sıfat 1. veya 2. çekimden olsa bile hal, sayı ve cins kuralları harfiyen eşleşir. Ekin harflerinin birebir aynı olması gerekmez; görevleri aynı olmalıdır!"
            });

            f.studyTips = "urbes magnae tamlamasında urbes -es alırken magnae -ae alır; çünkü urbs 3. çekim, magna 1. çekimdir ama ikisi de çoğul dişil nominativustur.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W12_L1: LatinceGramer12.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 12, 1, "LatinceGramer12.1.pdf",
                "4. GRUP FİİLLER (-ĪRE) VE 3. GRUP -IŌ FİİLLERİ",
                "audiō (4. Çekim) ve capiō / faciō (3. Çekim -iō) Fiillerinin Praesens ve Imperfectum Çekimleri",
                "Bu fasikülde mastarı -īre ile biten 4. grup fiilleri (audiō, audīre), mastarı -ere olup 1. tekil şahsı -iō ile biten 3. grup karma fiilleri (capiō, capere; faciō, facere) ve bunların zaman çekimlerini öğreneceksiniz.",
                "Orta Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "4. Grup Fiiller (-īre)", "audio, audire Çekimi", "3. Grup -iō Fiilleri (capiō, faciō)", "Praesens ve Imperfectum Çekimleri", "Emir Kipi" });
            f.vocabKeys.AddRange(new[] { "audio", "venio", "sentio", "scio", "capio", "facio", "iacio", "fugio" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 4. Grup Fiiller: audiō, audīre (İşitmek, Dinlemek)",
                html = @"<p>Mastar sonlanışı <strong>-īre</strong> olan fiillerdir. Praesens gövdesi <strong>audī-</strong>:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Şahıs & Sayı</th><th>Praesens (Şimdiki Zaman)</th><th>Imperfectum (-iēbam)</th><th>Türkçe Anlamı</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Sg.</strong></td><td class=""case-cell-latin"">aud-<strong>iō</strong></td><td class=""case-cell-latin"">aud-<strong>iēbam</strong></td><td>işitiyorum / işitiyordum</td></tr>
      <tr><td><strong>2. Sg.</strong></td><td class=""case-cell-latin"">aud-<strong>īs</strong></td><td class=""case-cell-latin"">aud-<strong>iēbās</strong></td><td>işitiyorsun / işitiyordun</td></tr>
      <tr><td><strong>3. Sg.</strong></td><td class=""case-cell-latin"">aud-<strong>it</strong></td><td class=""case-cell-latin"">aud-<strong>iēbat</strong></td><td>işitiyor / işitiyordu</td></tr>
      <tr><td><strong>1. Pl.</strong></td><td class=""case-cell-latin"">aud-<strong>īmus</strong></td><td class=""case-cell-latin"">aud-<strong>iēbāmus</strong></td><td>işitiyoruz / işitiyorduk</td></tr>
      <tr><td><strong>2. Pl.</strong></td><td class=""case-cell-latin"">aud-<strong>ītis</strong></td><td class=""case-cell-latin"">aud-<strong>iēbātis</strong></td><td>işitiyorsunuz / işitiyordunuz</td></tr>
      <tr><td><strong>3. Pl.</strong></td><td class=""case-cell-latin"">aud-<strong>iunt</strong></td><td class=""case-cell-latin"">aud-<strong>iēbant</strong></td><td>işitiyorlar / işitiyorlardı</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "info",
                calloutTitle = "3. Grup -iō Fiilleri (Karma Fiiller)",
                calloutText = "capiō (yakalamak) ve faciō (yapmak) fiilleri mastarda -ere almalarına karşın, Praesens 1. tekil şahısta (capiō) ve Imperfectum'da (capiēbam) 4. çekim fiiller gibi davranırlar!"
            });

            f.studyTips = "audiunt ve capiunt biçimlerindeki -i- sesini unutmayınız; 3. çoğul şahısta -unt eki -i- kaynaştırma ünlüsüyle birleşir.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W12_L2: LatinceGramer12.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 12, 2, "LatinceGramer12.2.pdf",
                "3. GRUP İSİMLER: SIVI VE GENİZSİL GÖVDELER (LIQUID & NASAL STEMS)",
                "-l, -r, -n ile Biten Gövdeler, Rotasizm (s > r Ses Değişimi), mōs ve sōl Çekimleri",
                "Bu fasikülde gövdeleri sıvı (l, r) ve genizsil (m, n) sessizlerle biten 3. grup isimleri, Latincedeki ünlü ses olayı Rotasizmi (ünlüler arasındaki s sesinin r sesine dönüşmesi) ve cōnsul, mōs, amor çekimlerini inceleyeceksiniz.",
                "İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Sıvı Gövdeler (-l, -r)", "Genizsil Gövdeler (-n)", "Rotasizm Kuralı (s > r)", "mos, moris", "amor, amoris", "sol, solis" });
            f.vocabKeys.AddRange(new[] { "mos", "amor", "sol", "consul", "labor", "soror", "uxor", "virgo", "ordo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Rotasizm (Rhotacismus) ve -r Gövdeli İsimler",
                html = @"<p>Latincede iki ünlü harf arasında kalan <strong>-s-</strong> sesi tarihsel süreçte ötümlüleşerek <strong>-r-</strong> sesine dönüşmüştür. Bu fonetik kurala <strong>Rotasizm</strong> denir:</p>
<ul>
  <li>Nom: <span class=""lat-word"">mōs</span> &gt; Gen: <em>*mōs-is</em> &gt; <strong>mōr-is</strong> (adet, gelenek)</li>
  <li>Nom: <span class=""lat-word"">flōs</span> &gt; Gen: <em>*flōs-is</em> &gt; <strong>flōr-is</strong> (çiçek)</li>
  <li>Nom: <span class=""lat-word"">corpus</span> &gt; Gen: <em>*compos-is</em> &gt; <strong>corpor-is</strong> (beden)</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Rotasizm Kuralı",
                calloutText = "Eğer bir kelimenin Nominativus'u -s ile bitiyor ve Genetivus'unda bu harf -r- oluyorsa (mos, moris; flos, floris), bu durum Latincedeki düzenli rotasizm kuralının sonucudur."
            });

            f.studyTips = "mōs mâiōrum (ataların geleneği) Roma kültür ve hukukunun en temel kavramlarından biridir.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W13_L1: LatinceGramer13.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 13, 1, "LatinceGramer13.1.pdf",
                "3. GRUP NÖTR İSİMLER VE İSTİSNAİ ÇEKİMLER",
                "mare, maris ve animal, animālis Çekimleri, Ablativus Singularis -ī Kuralı",
                "Bu fasikülde tekil Nominativus biçimi -e, -al, -ar ile biten 3. grup nötr isimlerin özel çekim kurallarını, Tekil Ablativus -ī, Çoğul Nom/Acc -ia ve Çoğul Gen -ium takılarını öğreneceksiniz.",
                "İleri Seviye", "50 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup Nötr -i Gövdeliler", "mare, maris Çekimi", "animal, animalis Çekimi", "Tekil Ablativus -ī", "Çoğul -ia ve -ium" });
            f.vocabKeys.AddRange(new[] { "mare", "animal", "exemplar", "vectigal", "auris", "navis" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Grup Nötr -i Gövdeliler Tablosu (mare ve animal)",
                html = @"<p>Nötr -i gövdeli isimlerde üç temel kural geçerlidir: <strong>Tekil Abl. -ī, Çoğul Nom/Acc -ia, Çoğul Gen. -ium</strong>:</p>",
                tableHtml = @"<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Casus</th><th>mare, maris n. (deniz)</th><th>animal, animālis n. (canlı, hayvan)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>Nom. Sg.</strong></td><td class=""case-cell-latin"">mare</td><td class=""case-cell-latin"">animal</td></tr>
      <tr><td><strong>Gen. Sg.</strong></td><td class=""case-cell-latin"">mar-<strong>is</strong></td><td class=""case-cell-latin"">animāl-<strong>is</strong></td></tr>
      <tr><td><strong>Dat. Sg.</strong></td><td class=""case-cell-latin"">mar-<strong>ī</strong></td><td class=""case-cell-latin"">animāl-<strong>ī</strong></td></tr>
      <tr><td><strong>Acc. Sg.</strong></td><td class=""case-cell-latin"">mare</td><td class=""case-cell-latin"">animal</td></tr>
      <tr><td><strong>Abl. Sg.</strong></td><td class=""case-cell-latin"">mar-<strong>ī</strong></td><td class=""case-cell-latin"">animāl-<strong>ī</strong></td></tr>
      <tr><td><strong>Nom/Acc. Pl.</strong></td><td class=""case-cell-latin"">mar-<strong>ia</strong></td><td class=""case-cell-latin"">animāl-<strong>ia</strong></td></tr>
      <tr><td><strong>Gen. Pl.</strong></td><td class=""case-cell-latin"">mar-<strong>ium</strong></td><td class=""case-cell-latin"">animāl-<strong>ium</strong></td></tr>
      <tr><td><strong>Dat/Abl. Pl.</strong></td><td class=""case-cell-latin"">mar-<strong>ibus</strong></td><td class=""case-cell-latin"">animāl-<strong>ibus</strong></td></tr>
    </tbody>
  </table>
</div>"
            });

            f.studyTips = "mare ve animal kelimelerinde Ablativus tekil daima -ī ile biter: in marī (denizde).";
            list.Add(f);
        }

        // ====================================================================
        // T1_W13_L2: LatinceGramer13.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 13, 2, "LatinceGramer13.2.pdf",
                "DÜZENSİZ FİİLLER 2: POSSUM (YAPABİLMEK) VE TAMAMLAYICI MASTAR SENTAKSI",
                "possum Fiilinin Çekimi (pot-sum > possum), Tamamlayıcı Mastar (Infinitivus Prolativus) ve Cümle Analizleri",
                "Bu fasikülde potis (gücü yeten) sıfatı ile sum fiilinin birleşmesiyle oluşan possum (yapabilmek, -ebilmek) fiilinin çekim kurallarını, tamamlayıcı mastar (Infinitivus) sentaksını ve 20 slaytlık zengin cümle çözümlemelerini öğreneceksiniz.",
                "Orta-İleri Seviye", "55 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "possum Fiili", "pot- + sum Kaynaşma Kuralları", "Praesens ve Imperfectum Çekimleri", "Tamamlayıcı Mastar (Infinitivus)", "Cümle Çözümlemeleri" });
            f.vocabKeys.AddRange(new[] { "possum", "oculus", "quare", "igitur", "poena", "moneo", "remedium", "tolerare" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. possum (Yapabilmek) Fiilinin Çekim Sistemi",
                html = @"<p><strong>possum, posse, potuī</strong> fiili, <em>pot-</em> ön eki ile <em>sum</em> fiilinin birleşiminden türemiştir. s harfiyle başlayan çekimlerde t sesi s sesine dönüşür (benzeşme / asimilasyon):</p>
<ul>
  <li>pot- + sum &gt; <strong>possum</strong> (yapabilirim)</li>
  <li>pot- + es &gt; <strong>potes</strong> (yapabilirsin)</li>
  <li>pot- + est &gt; <strong>potest</strong> (yapabilir)</li>
  <li>pot- + sumus &gt; <strong>possumus</strong> (yapabiliriz)</li>
  <li>pot- + estis &gt; <strong>potestis</strong> (yapabilirsiniz)</li>
  <li>pot- + sunt &gt; <strong>possunt</strong> (yapabilirler)</li>
</ul>",
                calloutType = "rule",
                calloutTitle = "Tamamlayıcı Mastar (Infinitivus Prolativus)",
                calloutText = "possum fiili anlamını kendi başına tamamlayamaz; eylemin ne olduğunu bildirmek için daima bir mastarla birlikte kullanılır: videre non possum (göremiyorum), superare poteramus (üstesinden gelebiliyorduk)."
            });

            f.studyTips = "pot- kökünün ardından s gelirse s olur (possum), ünlü gelirse t kalır (potes, potest).";
            list.Add(f);
        }

        // ====================================================================
        // T1_W14_L1: LatinceGramer14.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 14, 1, "LatinceGramer14.1.pdf",
                "1. DÖNEM KAPSAMLI SENTAKS VE CÜMLE ÇÖZÜMLEMELERİ 1",
                "1., 2. ve 3. Çekim İsimler, Fiil Çekimleri ve Karmaşık Cümle Sentaksı",
                "Bu fasikülde 1. dönemin bütün gramer konularını birleştiren, 34 slayttan oluşan kapsamlı örnek cümle serisini, Kartaca savaşları bağlamındaki tarihi metinleri, sıfat ve isim tamlamalarını ve cümle çözümleme metotlarını inceleyeceksiniz.",
                "İleri Seviye", "60 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "1. Dönem Genel Sentaks", "İsim Tamlamaları ve Sıfat Uyumu", "Edatlı Kalıplar (propter, sine, in)", "Tarihsel Örnekler (Punicum bellum)", "Genişletilmiş Cümle Çözümlemeleri" });
            f.vocabKeys.AddRange(new[] { "vitium", "culpo", "delecto", "fortuna", "punicus", "secundus", "varius", "plenus", "statua", "sanus", "caelum", "tolero", "infirmus" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Dönem Sonu Sentaks Analiz Rehberi",
                html = @"<p>Latince karmaşık bir cümleyi analiz ederken şu adımlar izlenir:</p>
<ol>
  <li><strong>Yüklemi (Fiili) Bulun:</strong> Cümlenin genellikle en sonunda yer alır. Şahsını ve zamanını belirleyin.</li>
  <li><strong>Özne Arayın (Nominativus):</strong> Yüklemin şahsına ve sayısına uygun bir Nominativus isim var mı? Yoksa özne fiilin içindedir.</li>
  <li><strong>Doğrudan Nesneyi Arayın (Accusativus):</strong> Geçişli bir fiil ise neyi/kimi etkilediğini bulun.</li>
  <li><strong>Dolaylı Tümleç ve Belirteçleri Çözün:</strong> Dativus (-e hali), Ablativus (araç, zaman, mekan) ve edatlı yapıları (propter + acc., sine + abl., in + abl.) tespit edin.</li>
</ol>",
                calloutType = "info",
                calloutTitle = "Sentaks Çözümleme İlkesi",
                calloutText = "Latincede sözcük sırasına değil, sözcüklerin sonlarındaki hal ve çekim takılarına bakarak cümlenin ögeleri belirlenir."
            });

            f.studyTips = "Cümle çözerken her kelimenin üzerine casus (hal) ve görevini (özne, nesne, yüklem) not alarak ilerleyiniz.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W14_L2: LatinceGramer14.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 14, 2, "LatinceGramer14.2.pdf",
                "1. DÖNEM KAPSAMLI SENTAKS VE CÜMLE ÇÖZÜMLEMELERİ 2",
                "Edatlı Tamlamalar (propter, post, cum, sine), İyelik ve Niteleme Sentaksı, Dönem Sonu Genel Değerlendirme",
                "Bu fasikülde 1. dönemin son dersi olarak edatların yönetimindeki hal yapılarını (Accusativus ve Ablativus alan edatlar), post bellum ve cum amicis kalıplarını, Klasik Latin yazarlarından seçilmiş 20 slaytlık örnek cümleleri ve dönem sonu sentaks sentezini inceleyeceksiniz.",
                "İleri Seviye", "60 dakika", docSlideCountMap);

            f.topics.AddRange(new[] { "Edatların Halleri (Accusativus & Ablativus)", "post, propter, ante (+ acc.)", "cum, sine, de, ab, ex (+ abl.)", "1. Dönem Genel Sentezi", "Final Sınavına Hazırlık Cümleleri" });
            f.vocabKeys.AddRange(new[] { "post", "pax", "liber", "remedium", "bellum", "cura", "periculum", "animus", "amicitia" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Latincede Edatların (Praepositiones) Yönettiği Haller",
                html = @"<p>Latincede edatlar tek başlarına kullanılmazlar; daima ardından gelen bir ismin halini yönetirler:</p>
<ul>
  <li><strong>Accusativus Alan Edatlar (Yönelme / Süreç):</strong>
    <ul>
      <li><span class=""lat-word"">ad</span> (+ acc.): -e doğru, yanına</li>
      <li><span class=""lat-word"">post</span> (+ acc.): sonra, ardından (<span class=""lat-word"">post bellum</span> = savaştan sonra)</li>
      <li><span class=""lat-word"">propter</span> (+ acc.): yüzünden, nedeniyle (<span class=""lat-word"">propter culpam</span>)</li>
      <li><span class=""lat-word"">ante</span> (+ acc.): önce, önünde</li>
      <li><span class=""lat-word"">per</span> (+ acc.): boyunca, vasıtasıyla</li>
    </ul>
  </li>
  <li><strong>Ablativus Alan Edatlar (Çıkma / Birliktelik / Yer):</strong>
    <ul>
      <li><span class=""lat-word"">cum</span> (+ abl.): ile, birlikte (<span class=""lat-word"">cum amīcīs</span> = arkadaşlarla)</li>
      <li><span class=""lat-word"">sine</span> (+ abl.): -sız, -siz (<span class=""lat-word"">sine morā</span> = gecikmeksizin)</li>
      <li><span class=""lat-word"">dē</span> (+ abl.): hakkında, -den aşağı (<span class=""lat-word"">dē bellō</span>)</li>
      <li><span class=""lat-word"">ā / ab</span> (+ abl.): -den, tarafından (<span class=""lat-word"">ab agricolā</span>)</li>
      <li><span class=""lat-word"">ē / ex</span> (+ abl.): -den dışarı, içinden</li>
    </ul>
  </li>
</ul>",
                calloutType = "rule",
                calloutTitle = "in ve sub Edatlarının Çift Hali",
                calloutText = "in ve sub edatları hareket bildiriyorsa (-e doğru, içine) Accusativus alır; durum veya bulunma bildiriyorsa (-de, içinde) Ablativus alır:\nin urbem intrat = şehre giriyor (hareket > acc.)\nin urbe manet = şehirde kalıyor (bulunma > abl.)"
            });

            f.studyTips = "1. dönemin 23 derslik yolculuğunu tamamladınız! Artık 1., 2. ve 3. grup isimleri, 1., 2. ve 4. çekim fiilleri, praesens ve imperfectum zamanlarını, esse ve possum düzensiz fiillerini ve klasik Latince cümle çözümleme tekniklerini yetkinlikle uygulayabilirsiniz.";
            list.Add(f);
        }
    }
}
