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
                "LATİN SAYI SİSTEMİ 2: SIRA, ÜLEŞTİRME VE SIKLIK SAYILARI",
                "Ordinalia (prīmus...), Distributiva (singulī...), Frequentativa (semel...) ve Sayı Sentaksı",
                "Bu fasikülde Latincedeki 4 sayı grubunu (Cardinalia, Ordinalia, Distributiva, Frequentativa), üleştirme ve sıklık sayıları tam mukayese tablolarını, ūnus'un çoğul kullanımı (castra), trēs, mīlle vs mīlia ayrımını, ex/de edatlı tamlamaları ve klasik sayı cümlelerini tüm filolojik ayrıntılarıyla öğreneceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "Sayıların 4 Ana Grubu", "Sıra Sayı Sıfatları (Ordinalia)", "Üleştirme Sayı Sıfatları (Distributiva: singulī, bīnī...)",
                "Sıklık Belirten Sayı Zarfları (Frequentativa: semel, bis, ter...)", "Sayma Sayıları Sentaksı (ūnus, duo, trēs)",
                "Plurale Tantum ile ūnus Kullanımı (ūna castra)", "mīlle (Sıfat) vs mīlia (İsim) Ayrımı",
                "Kısım Genetivus'u ve ex / de (+ abl.) Kullanımı", "Sayı Cümleleri ve Çözümlemeleri"
            });
            f.vocabKeys.AddRange(new[] {
                "primus", "secundus", "tertius", "quartus", "quintus", "sextus", "septimus", "octavus", "nonus", "decimus",
                "singuli", "bini", "terni", "quaterni", "quini", "seni", "septeni", "octoni", "noveni", "deni",
                "viceni", "centeni", "milleni", "semel", "bis", "ter", "quater", "quinquies", "sexies", "decies", "vicies",
                "mille", "milia", "talentum", "sagittarius", "equitatus", "castra"
            });

            // Section 1: Classification
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Latincede Sayıların Dört Temel Grubu (Slayt 2-3, 9)",
                html = @"<p>Latincede sayılar harflerle simgelenir ve işlevlerine göre sıfat ya da zarf olarak değerlendirilip <strong>4 ana başlık</strong> altında toplanır:</p>
<ol>
  <li><strong>I. Sayma Sayı Sıfatları (Cardinalia):</strong> <em>Quot?</em> (Kaç?) sorusunun cevabıdır: <span class=""lat-word"">ūnus</span> (1), <span class=""lat-word"">duo</span> (2), <span class=""lat-word"">trēs</span> (3), <span class=""lat-word"">quattuor</span> (4)... Yalnızca ilk üçü ve <em>mīlia</em> çekimlidir; diğerleri çekimsizdir.</li>
  <li><strong>II. Sıra Sayı Sıfatları (Ordinalia):</strong> <em>Quotīmus?</em> (Kaçıncı?) sorusunun cevabıdır: <span class=""lat-word"">prīmus, -a, -um</span> (birinci), <span class=""lat-word"">secundus, -a, -um</span> (ikinci), <span class=""lat-word"">tertius, -a, -um</span> (üçüncü)... Hepsi 1. ve 2. sınıf sıfatlar gibi (-us, -a, -um) çekimlenir.</li>
  <li><strong>III. Üleştirme Sayı Sıfatları (Distributiva):</strong> <em>Quotēnī?</em> (Kaçar? Kaçar tane?) sorusunun cevabıdır. Örneğin: <span class=""lat-word"">singulī</span> (birer), <span class=""lat-word"">bīnī</span> (ikişer), <span class=""lat-word"">ternī</span> (üçer)... Üç bitimli sıfatların çoğulu (-ī, -ae, -a) gibi çekimlenir.</li>
  <li><strong>IV. Sıklık Belirten Sayı Zarfları (Frequentativa):</strong> <em>Quotie(n)s?</em> (Ne sıklıkla? Kaç kez? Kaç defa?) sorusunun cevabıdır. Örneğin: <span class=""lat-word"">semel</span> (bir kez), <span class=""lat-word"">bis</span> (iki kez), <span class=""lat-word"">ter</span> (üç kez), <span class=""lat-word"">quater</span> (dört kez)... Zarf niteliğinde olduklarından bütünüyle <strong>çekimsizdirler</strong>; genellikle sayma sayılarının gövdesine <em>–iē(n)s</em> takısı eklenerek yapılır.</li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Ünlü Latince Özdeyiş",
                calloutText = "Bis dat, quī citō dat = Çabuk veren, iki kez vermiş sayılır."
            });

            // Section 2: Full Master Table (Slides 4-8, 10-14)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Üleştirme (Distributiva) ve Sıklık Zarfları (Frequentativa) Tam Tablosu (Slayt 4-14)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı'nın ders notlarındaki (Slayt 4-8 ve 10-14) 1'den 1000'e kadar olan tam karşılaştırma tablosu:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Latin Sayı Sistemi: Üleştirme ve Sıklık Karşılaştırması (I - M)", "Slayt 4-14",
                    new[] { "Roma Rakamı", "Sayma (Cardinalia)", "Sıra (Ordinalia)", "Üleştirme (Distributiva)", "Sıklık (Frequentativa)" },
                    new[] {
                        new[] { "I", "ūnus, -a, -um", "prīmus, -a, -um", "singulī, -ae, -a (birer)", "semel (bir kez)" },
                        new[] { "II", "duo, duae, duo", "secundus, -a, -um", "bīnī, -ae, -a (ikişer)", "bis (iki kez)" },
                        new[] { "III", "trēs, tria", "tertius, -a, -um", "ternī, -ae, -a (üçer)", "ter (üç kez)" },
                        new[] { "IV", "quattuor", "quartus, -a, -um", "quaternī, -ae, -a (dörder)", "quater (dört kez)" },
                        new[] { "V", "quīnque", "quīntus, -a, -um", "quīnī, -ae, -a (beşer)", "quīnquie(n)s (beş kez)" },
                        new[] { "VI", "sex", "sextus, -a, -um", "sēnī, -ae, -a (altışar)", "sexie(n)s (altı kez)" },
                        new[] { "VII", "septem", "septimus, -a, -um", "septēnī, -ae, -a (yedişer)", "septie(n)s (yedi kez)" },
                        new[] { "VIII", "octō", "octāvus, -a, -um", "octōnī, -ae, -a (sekizer)", "octie(n)s (sekiz kez)" },
                        new[] { "IX", "novem", "nōnus, -a, -um", "novēnī, -ae, -a (dokuzar)", "nōnie(n)s (dokuz kez)" },
                        new[] { "X", "decem", "decimus, -a, -um", "dēnī, -ae, -a (onar)", "decie(n)s (on kez)" },
                        new[] { "XI", "undecim", "undecimus, -a, -um", "undēnī, -ae, -a (on birer)", "undecie(n)s (on bir kez)" },
                        new[] { "XII", "duodecim", "duodecimus, -a, -um", "duodēnī, -ae, -a (on ikişer)", "duodecie(n)s (on iki kez)" },
                        new[] { "XIII", "tredecim", "tertius decimus", "ternī dēnī (on üçer)", "tredecie(n)s (on üç kez)" },
                        new[] { "XIV", "quattuordecim", "quartus decimus", "quaternī dēnī (on dörder)", "quattuordecie(n)s (on dört kez)" },
                        new[] { "XV", "quīndecim", "quīntus decimus", "quīnī dēnī (on beşer)", "quīndecie(n)s (on beş kez)" },
                        new[] { "XVI", "sēdecim", "sextus decimus", "sēnī dēnī (on altışar)", "sēdecie(n)s (on altı kez)" },
                        new[] { "XVII", "septendecim", "septimus decimus", "septēnī dēnī (on yedişer)", "septie(n)s decie(n)s (on yedi kez)" },
                        new[] { "XVIII", "duodēvīgintī", "duodēvīcēsimus", "duodēvīcēnī (on sekizer)", "duodēvīciēs (on sekiz kez)" },
                        new[] { "XIX", "undēvīgintī", "undēvīcēsimus", "undēvīcēnī (on dokuzar)", "undēvīciēs (on dokuz kez)" },
                        new[] { "XX", "vīgintī", "vīcēsimus, -a, -um", "vīcēnī, -ae, -a (yirmişer)", "vīciēs (yirmi kez)" },
                        new[] { "XXI", "vīgintī ūnus (ūnus et vīgintī)", "vīcēsimus prīmus", "vīcēnī singulī (yirmi birer)", "semel et vīcie(n)s (yirmi bir kez)" },
                        new[] { "XXII", "vīgintī duo (duo et vīgintī)", "vīcēsimus secundus", "vīcēnī bīnī (yirmi ikişer)", "bis et vīcie(n)s (yirmi iki kez)" },
                        new[] { "XXIII", "vīgintī trēs (trēs et vīgintī)", "vīcēsimus tertius", "vīcēnī ternī (yirmi üçer)", "ter et vīcie(n)s (yirmi üç kez)" },
                        new[] { "XXVIII", "duodētrīgintā", "duodētrīcēsimus", "duodētrīcēnī (yirmi sekizer)", "duodētrīcie(n)s (yirmi sekiz kez)" },
                        new[] { "XXIX", "undētrīgintā", "undētrīcēsimus", "undētrīcēnī (yirmi dokuzar)", "undētrīcie(n)s (yirmi dokuz kez)" },
                        new[] { "XXX", "trīgintā", "trīcēsimus, -a, -um", "trīcēnī, -ae, -a (otuzar)", "trīcie(n)s (otuz kez)" },
                        new[] { "XL", "quadrāgintā", "quadrāgēsimus", "quadrāgēnī (kırkar)", "quadrāgie(n)s (kırk kez)" },
                        new[] { "L", "quīnquāgintā", "quīnquāgēsimus", "quīnquāgēnī (ellişer)", "quīnquāgie(n)s (elli kez)" },
                        new[] { "LX", "sexāgintā", "sexāgēsimus", "sexāgēnī (altmışar)", "sexāgie(n)s (altmış kez)" },
                        new[] { "LXX", "septuāgintā", "septuāgēsimus", "septuāgēnī (yetmişer)", "septuāgie(n)s (yetmiş kez)" },
                        new[] { "LXXX", "octōgintā", "octōgēsimus", "octōgēnī (seksener)", "octōgie(n)s (seksen kez)" },
                        new[] { "XC", "nōnāgintā", "nōnāgēsimus", "nōnāgēnī (doksanar)", "nōnāgie(n)s (doksan kez)" },
                        new[] { "C", "centum", "centēsimus, -a, -um", "centēnī, -ae, -a (yüzer)", "centie(n)s (yüz kez)" },
                        new[] { "CC", "ducentī, -ae, -a", "ducentēsimus", "ducēnī (iki yüzer)", "ducentie(n)s (iki yüz kez)" },
                        new[] { "CCC", "trecentī, -ae, -a", "trecentēsimus", "trecēnī (üç yüzer)", "trecentie(n)s (üç yüz kez)" },
                        new[] { "CCCC", "quadringentī, -ae, -a", "quadringentēsimus", "quadringēnī (dört yüzer)", "quadringentie(n)s (dört yüz kez)" },
                        new[] { "D", "quīngentī, -ae, -a", "quīngentēsimus", "quīngēnī (beş yüzer)", "quīngentie(n)s (beş yüz kez)" },
                        new[] { "DC", "sescentī, -ae, -a", "sescentēsimus", "sescēnī (altı yüzer)", "sescentie(n)s (altı yüz kez)" },
                        new[] { "DCC", "septingentī, -ae, -a", "septingentēsimus", "septingēnī (yedi yüzer)", "septingentie(n)s (yedi yüz kez)" },
                        new[] { "DCCC", "octingentī, -ae, -a", "octingentēsimus", "octingēnī (sekiz yüzer)", "octingentie(n)s (sekiz yüz kez)" },
                        new[] { "DCCCC", "nōngentī, -ae, -a", "nōngentēsimus", "nōngēnī (dokuz yüzer)", "nōngentie(n)s (dokuz yüz kez)" },
                        new[] { "M", "mīlle (mīlia)", "mīllēsimus, -a, -um", "mīllēnī / singula mīlia (biner)", "mīllie(n)s (bin kez)" }
                    }
                )
            });

            // Section 3: Syntax and Usage Rules (Slides 15-25)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Sayıların Sentaks Kuralları ve Model İfadeler (Slayt 15-25)",
                html = @"<p>Eyüp Hoca'nın Slayt 15-25 boyunca aktardığı temel kullanım prensipleri:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Kategori</th><th>Latince Örnek İfade</th><th>Türkçe Karşılığı</th><th>Dilbilgisel Açıklama (Slayt Notu)</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>ūnus Tekil</strong></td><td class=""case-cell-latin"">ūnus equus / ūna mensa / ūnum saxum</td><td class=""case-cell-tr"">bir at / bir masa / bir taş</td><td>Tekil isimlerle tamlama oluşturur.</td></tr>
      <tr><td><strong>ūnus İyelik</strong></td><td class=""case-cell-latin"">ūnīus equī / ūnīus mensae / ūnī amīcō</td><td class=""case-cell-tr"">bir atın / bir masanın / bir arkadaşa</td><td>UNUS NAUTA çekimi gereği tekil genetivus -īus, dativus -ī olur.</td></tr>
      <tr><td><strong>ūnus + Plurale Tantum</strong></td><td class=""case-cell-latin"">ūna castra / ūnōrum castrōrum</td><td class=""case-cell-tr"">bir ordugâh / bir ordugâhın</td><td>Yalnızca çoğulu olan (plurale tantum) tekil anlamlı isimlerle çoğul çekimlenir.</td></tr>
      <tr><td><strong>trēs Çekimi</strong></td><td class=""case-cell-latin"">tria saxa / trium saxōrum / in tribus bellīs</td><td class=""case-cell-tr"">üç taş / üç taşın / üç savaşta</td><td>Doğal çoğuldur; 3. grup sıfat (-ēs, -ia) gibi çekimlenir.</td></tr>
      <tr><td><strong>mīlle Sıfatı</strong></td><td class=""case-cell-latin"">mīlle saxa / mīlle equī / mīlle hominēs</td><td class=""case-cell-tr"">bin taş / bin at / bin insan</td><td>Tekil mīlle çekimsiz bir sıfattır, ismi doğrudan niteler.</td></tr>
      <tr><td><strong>mīlia İsim Kullanımı</strong></td><td class=""case-cell-latin"">mīlia equōrum / decem mīlia librōrum</td><td class=""case-cell-tr"">bin at (atların bini) / on bin kitap</td><td>Çoğul mīlia nötr 3. grup isimdir; kendisinden sonra <em>Kısım Genetivus'u</em> ister.</td></tr>
      <tr><td><strong>mīlle vs mīlia Ayrımı</strong></td><td class=""case-cell-latin"">mīlle virī vs mīlia virōrum</td><td class=""case-cell-tr"">bin adam (sıfat) vs bin adam (isim + gen.)</td><td>İki ifade de aynı anlamı karşılar fakat morfolojik yapıları farklıdır.</td></tr>
      <tr><td><strong>ex / dē ile Bütünden Parça</strong></td><td class=""case-cell-latin"">trēs ex amīcīs meīs [= trēs amīcī]</td><td class=""case-cell-tr"">arkadaşlarımdan üç tanesi, üç arkadaşım</td><td>Kısım Genetivus'una alternatif olarak ex/de (+ abl.) kullanılır.</td></tr>
      <tr><td><strong>ex / dē Örnekleri</strong></td><td class=""case-cell-latin"">quīnque ex eīs / ūnus dē duōbus</td><td class=""case-cell-tr"">onların beşi / ikisinden biri</td><td>Belirli bir grubun içinden seçilen parça bildirilir.</td></tr>
      <tr><td><strong>Sıra Sayısı (Ordinalia)</strong></td><td class=""case-cell-latin"">prīma littera / tertiō annō / decima hōrā</td><td class=""case-cell-tr"">ilk harf / üçüncü yılda / onuncu saatte</td><td>İlgili isimle tamlama kurar; zaman için yalın ablativus kullanılır.</td></tr>
      <tr><td><strong>Üleştirme (Distributiva)</strong></td><td class=""case-cell-latin"">bīnae litterae / puerī dēnī / puerī dēnum annōrum</td><td class=""case-cell-tr"">ikişer mektup / onar çocuk / onar yaşında çocuklar</td><td>Çoğul genetivus ekleri genellikle -ōrum/-ārum yerine -um olur (dēnum).</td></tr>
      <tr><td><strong>Sıklık Zarfı (Frequentativa)</strong></td><td class=""case-cell-latin"">semel in vītā / bis in annō / decie(n)s in annō</td><td class=""case-cell-tr"">hayatta bir kez / yılda iki kez / yılda on kez</td><td>Zarf oldukları için çekimsizdirler ve isme göre değişmezler.</td></tr>
    </tbody>
  </table>
</div>"
            });

            // Section 4: Sentences (Slide 26)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Sayı Sentaksı Cümle Alıştırmaları (Slayt 26)",
                html = @"<p>Slayt 26'da yer alan klasik sayı tamlamalı cümleler:</p>
<ol>
  <li><em>Trēs puerī dedērunt duābus puellīs.</em> — Üç çocuk iki kıza [güller] verdi.</li>
  <li><em>Octō puerī librōs dedērunt decem puellīs.</em> — Sekiz çocuk on kıza kitaplar verdi.</li>
  <li><em>Ūnus vir vēnit cum quattuor amīcīs.</em> — Bir adam dört arkadaşıyla birlikte geldi.</li>
  <li><em>Consul vēnit cum centum virīs.</em> — Konsül yüz adamla birlikte geldi.</li>
  <li><em>Consul vēnit cum ducentīs virīs.</em> — Konsül iki yüz adamla birlikte geldi.</li>
  <li><em>Consul vēnit cum mīlle virīs.</em> — Konsül bin adamla birlikte geldi.</li>
  <li><em>Consul vēnit cum sex mīlibus virōrum.</em> — Konsül altı bin adamla (adamların altı biniyle) birlikte geldi.</li>
</ol>"
            });

            f.studyTips = "mīlle tekil olduğunda çekimsiz sıfattır (cum mille viris); çoğul olduğunda ise çekimli nötr isimdir ve kısım genetivusu alır (cum sex milibus virorum).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W8_L1: Latince Gramer 2 - Ders Sunumu 8.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 8, 1, "Latince Gramer 2 - Ders Sunumu 8.1.pdf",
                "METİN VE SENTAKS ÇÖZÜMLEMELERİ 1: LUCRETIUS, CICERO VE CATILINA",
                "3. Çekim İsimler, İyelik Zamirleri ve Klasik Edebiyatta Doğa/Felsefe Sentaksı",
                "Bu fasikülde Lucretius'un De Rerum Natura eserinden doğa felsefesi cümlelerini, Vergilius'tan Bucolica alıntılarını, Cicero'nun Catilina'ya Karşı Birinci Nutuk (In Catilinam I) metninin tahlilini, Tacitus ve Seneca metinlerini tüm gramer ve sözlük analizleriyle öğreneceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "nūbēs, nubis f. Çekimi ve Analizi", "Lucretius: De Rerum Natura Metin Tahlili", "Vergilius: Çoban Şiirleri ve İsim Tamlamaları",
                "Cicero: In Catilinam I Alıştırma Metni", "O tempora! O mores! Sentaksı", "Tacitus ve Lucius Brutus Tarih Cümlesi",
                "Laberius: Sub Caesare Sentaksı", "Seneca: diu vixit vs diu fuit Mukayesesi"
            });
            f.vocabKeys.AddRange(new[] {
                "nubes", "acerbus", "olim", "ovis", "audeo", "idem", "timor", "invenio", "pax", "civitas",
                "venio", "aperte", "designo", "sentio", "intellego", "profundo", "perdo", "diu", "morior"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Edebi ve Felsefi Cümle Tahlilleri (Slayt 2-9)",
                html = @"<p>Slayt 2-9 arasındaki klasik metin cümleleri ve Eyüp Hoca'nın çevirileri:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Latince Metin</th><th>Yazar / Kaynak</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Filolojik Not</th></tr>
    </thead>
    <tbody>
      <tr><td class=""case-cell-latin"">Hodiē multae nūbēs in caelō sunt signum īrae acerbae deōrum.</td><td>Klasik Cümle</td><td class=""case-cell-tr"">Bugün gökyüzündeki pek çok bulut tanrıların acımasız gazabının işaretidir.</td><td>nūbēs: 3. çekim -i gövdeli isim (nūbēs, -is f.); acerbae: sert, acımasız.</td></tr>
      <tr><td class=""case-cell-latin"">Terra ipsa hominēs et animālia ōlim creāvit.</td><td>Lucretius</td><td class=""case-cell-tr"">Bir zamanlar bizzat toprak insanları ve hayvanları yarattı.</td><td>ipsa: pekiştirme zamiri (bizzat toprak); ōlim: bir zamanlar, vaktiyle.</td></tr>
      <tr><td class=""case-cell-latin"">Pān servat ovēs et magistrōs fortūnātōs ovium.</td><td>Vergilius</td><td class=""case-cell-tr"">Pan koyunları ve koyunların talihli yöneticilerini / çobanlarını korur.</td><td>magistrōs ovium: koyunların yöneticileri (çobanlar); ovis, -is f. (koyun).</td></tr>
      <tr><td class=""case-cell-latin"">Audē, igitur, esse semper īdem.</td><td>Klasik Deyiş</td><td class=""case-cell-tr"">Öyleyse her zaman aynı olmaya (aynı kişi olmaya) cesaret et!</td><td>audē: audeō fiilinin 2. tekil emir kipi; īdem: aynı kişi.</td></tr>
      <tr><td class=""case-cell-latin"">Illum timōrem in hoc virō ūnō invenīmus.</td><td>Klasik Cümle</td><td class=""case-cell-tr"">O korkuyu bir tek bu adamda buluyoruz.</td><td>in hoc virō ūnō: bir tek bu adamda (ūnus sıfatı vurgu katmaktadır).</td></tr>
      <tr><td class=""case-cell-latin"">Sine labōre autem nūlla pāx in cīvitātem eōrum veniet.</td><td>Klasik Cümle</td><td class=""case-cell-tr"">Ancak çaba olmadan onların devletine hiç barış gelmeyecek.</td><td>sine + abl. (çaba olmadan); eōrum: 3. şahıs çoğul iyelik (onların).</td></tr>
      <tr><td class=""case-cell-latin"">Ex illīs terrīs in hunc locum cum amīcīs vestrīs venīte.</td><td>Klasik Cümle</td><td class=""case-cell-tr"">O topraklardan bu yere arkadaşlarınızla birlikte geliniz!</td><td>venīte: 2. çoğul emir kipi; cum amīcīs vestrīs: arkadaşlarınızla birlikte.</td></tr>
      <tr><td class=""case-cell-latin"">Post paucās hōrās sorōrem illīus invenīre poterāmus.</td><td>Klasik Cümle</td><td class=""case-cell-tr"">Birkaç saat sonra onun kız kardeşini bulabiliyorduk.</td><td>illīus: o kişinin (tekil genetivus); poterāmus: possum Imperfectum 1. çoğul.</td></tr>
    </tbody>
  </table>
</div>"
            });

            // Section 2: Catilina Reading (Slides 10-12)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Okuma Parçası: Cicero'nun Catilina'ya Karşı Nutku (In Catilinam I) (Slayt 10-12)",
                html = @"<p>Roma Senatosu'nda Cicero'nun Catilina tertibini ifşa ettiği ünlü söylevden derlenen alıştırma metni:</p>
<blockquote style=""background:rgba(212,168,83,0.08); border-left:4px solid var(--eyup-gold); padding:1rem 1.25rem; margin:1rem 0; border-radius:4px; font-style:italic;"">
  <p><strong>Latince Metin (Slayt 10):</strong><br>
  Quid facis, Catilīna? Quid cōgitās? Sentīmus magna vitia insidiāsque tuās. Ō tempora! Ō mōrēs! Senātus haec intellegit, consul videt. Hic tamen vīvit. Vīvit? Etiam in senātum venit; etiam nunc consilia agere audet; oculīs designat ad mortem nōs. Et nōs, bonī virī, nihil facimus! Ad mortem tē, Catilīna, consul et senātus dūcere dēbent. Consilium habēmus et agere dēbēmus; sī nunc nōn agimus, nōs, nōs, - apertē dīcō - errāmus! Fuge nunc, Catilīna, et dūc tēcum amīcōs tuōs. Nōbīscum remanēre nōn potes. Nōn tē, nōn istōs, nōn consilia vestra tolerābō!</p>
</blockquote>
<p><strong>Bilinmeyen Kelimeler (Slayt 11):</strong></p>
<ul>
  <li><span class=""lat-word"">etiam</span>, adv.: bile, hatta, ayrıca</li>
  <li><span class=""lat-word"">quid</span>, soru zamiri: ne?</li>
  <li><span class=""lat-word"">tamen</span>, adv.: ancak, yine de</li>
  <li><span class=""lat-word"">apertē</span>, adv.: açıkça (apertus sıfatından türetilmiş zarf)</li>
  <li><span class=""lat-word"">designō, -āre, -āvī</span>: tarif etmek, belirtmek, işaret etmek, göstermek</li>
  <li><span class=""lat-word"">sentiō, -īre, sensī, sensum</span>: hissetmek, algılamak, düşünmek, farkına varmak</li>
  <li><span class=""lat-word"">intellegō, -legere, -lexī, -lectum</span>: anlamak, kavramak, idrak etmek</li>
</ul>
<p><strong>Türkçe Çeviri (Slayt 12 - Eyüp Hoca):</strong></p>
<blockquote style=""background:rgba(255,255,255,0.04); border-left:4px solid #6b7280; padding:1rem 1.25rem; margin:1rem 0; border-radius:4px;"">
  <p>Ne yapıyorsun, Catilina? Ne düşünüyorsun? Senin tuzaklarının ve büyük kötülüklerinin farkındayız. Ey zamanlar! Ey âdetler! Senatus bunları anlıyor, konsül görüyor. Yine de bu adam yaşıyor. Yaşıyor mu? Hatta Senatus'a bile geliyor, planlarını uygulamaya bile cüret ediyor; gözleriyle bize ölümü işaret ediyor. Biz ise, ey iyi insanlar, hiçbir şey yapmıyoruz. Seni, Catilina, konsül ve Senatus'un ölüme sevk etmesi gerek. Bir planımız var ve onu gerçekleştirmemiz gerek; eğer şimdi gerçekleştirmezsek, biz, - açık söylüyorum - biz hata yaparız. Şimdi kaç git Catilina, ve yanında arkadaşlarını da götür. Bizimle birlikte kalman mümkün değil. Sana da, şu kişilere de, sizin planlarınıza da katlanmayacağım.</p>
</blockquote>"
            });

            // Section 3: Classical Authors (Slides 13-16)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Roma Tarihi ve Felsefesi Metinleri: Cicero, Tacitus, Laberius, Seneca (Slayt 13-16)",
                html = @"<p>Slayt 13-16'daki klasik metin alıntıları:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Latince Metin</th><th>Yazar</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks Analizi</th></tr>
    </thead>
    <tbody>
      <tr><td class=""case-cell-latin"">Illī nōn sōlum pecūniam sed etiam vītam prō patriā profūdērunt.</td><td>Cicero</td><td class=""case-cell-tr"">Onlar yalnızca paralarını değil, aynı zamanda yaşamlarını da vatan uğruna harcadılar.</td><td>nōn sōlum... sed etiam... (yalnızca... değil aynı zamanda...); prō + abl. (uğruna, yoluna); profūdērunt: profundo fiili Perfectum 3. çoğul.</td></tr>
      <tr><td class=""case-cell-latin"">Rēgēs Rōmam ā prīncipiō habuērunt, lībertātem Lūcius Brūtus Rōmānīs dedit.</td><td>Tacitus</td><td class=""case-cell-tr"">Krallar baştan itibaren Roma'yı ellerinde tuttular; Lucius Brutus Romalılara özgürlüğü verdi.</td><td>ā prīncipiō: baştan itibaren; dedit: dō, dare fiili Perfectum 3. tekil; Rōmānīs: Dativus (Romalılara).</td></tr>
      <tr><td class=""case-cell-latin"">Sub Caesare autem lībertātem perdidimus.</td><td>Laberius</td><td class=""case-cell-tr"">Caesar'ın yönetimi altında (= Caesar zamanında) özgürlüğü kaybettik.</td><td>sub + abl. (yönetimi altında, zamanında); perdidimus: perdō fiili Perfectum 1. çoğul.</td></tr>
      <tr><td class=""case-cell-latin"">Nōn ille diū vixit, sed diū fuit.</td><td>Seneca</td><td class=""case-cell-tr"">O adam uzun bir süre yaşamadı, ama uzun bir süre var oldu.</td><td>diū: uzun süre (zarf); vixit: vīvō (yaşadı); fuit: sum (var oldu). İnsan gibi yaşamakla sadece fiziksel olarak var olmak arasındaki felsefi fark.</td></tr>
    </tbody>
  </table>
</div>"
            });

            f.studyTips = "Seneca'nın 'Non ille diu vixit, sed diu fuit' cümlesinde vīvō (anlamlı ve bilinçli yaşamak) ile sum (yalnızca nefes alıp var olmak) arasındaki derin felsefi ayrıma dikkat ediniz.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W8_L2: Latince Gramer 2 - Ders Sunumu 8.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 8, 2, "Latince Gramer 2 - Ders Sunumu 8.2.pdf",
                "METİN VE SENTAKS ÇÖZÜMLEMELERİ 2: PLINIUS, SENECA VE HORATIUS",
                "3. Şahıs İyeliği (eius/eōrum), Mektup Dili ve Ahlak Felsefesi Sentaksı",
                "Bu fasikülde 3. şahıs iyelik yapısını (eius/eōrum), grātiās agere deyimini, Plinius'un Marcellinus'a yazdığı Fundanus'un kızı mektubunu, Seneca'nın ahlak öğretilerini ve Horatius'un şiirlerindeki sentaks yapılarını 19 slaytlık eksiksiz içeriğiyle öğreneceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "3. Şahıs İyeliği: eius ve eōrum", "grātiās agere (Teşekkür Etmek) Deyimi",
                "Seneca: Ex meīs errōribus Sentaksı", "Seneca: Hominēs, dum docent, discunt",
                "Plinius: Fundanus'un Kızının Vefatı (Epistulae 5.16)", "cum patientiā Sentaksı",
                "Horatius ve Cicero Şiir ve Felsefe Cümleleri", "neuter medicus ve tōtus populus Sentaksı"
            });
            f.vocabKeys.AddRange(new[] {
                "error", "rectus", "iter", "studium", "nimium", "traho", "amitto", "quoniam",
                "patientia", "toleravit", "gero", "nuper", "cupiditas", "voluptas", "beatus"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Ahlak Felsefesi ve İyelik Sentaksı (Slayt 2-6)",
                html = @"<p>Slayt 2-6'daki cümleler ve dilbilgisel açıklamaları:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Latince Metin</th><th>Yazar / Kaynak</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks Analizi</th></tr>
    </thead>
    <tbody>
      <tr><td class=""case-cell-latin"">Tū autem fīliam beātam eius nunc amās.</td><td>Ders Notu</td><td class=""case-cell-tr"">Ancak sen şimdi onun mutlu / kutlu / talihli kızını seviyorsun.</td><td>eius: 3. şahıs tekil genetivus (onun); fīliam beātam: nesne (Acc. Sg. f.).</td></tr>
      <tr><td class=""case-cell-latin"">Post labōrem eius grātiās magnās eī agēmus.</td><td>Ders Notu</td><td class=""case-cell-tr"">Onun çalışmasından sonra ona büyük minnet duyacağız (çok teşekkür edeceğiz).</td><td>grātiās agere = birine teşekkür etmek (kime ediliyorsa Dativus haldedir: eī). agēmus: Futurum 1. çoğul.</td></tr>
      <tr><td class=""case-cell-latin"">Tūne vēritātem in eō librō dēmōnstrās?</td><td>Ders Notu</td><td class=""case-cell-tr"">O kitaptaki hakikati sen mi gösteriyorsun?</td><td>-ne: soru eki (tūne); in eō librō: o kitapta (Ablativus).</td></tr>
      <tr><td class=""case-cell-latin"">Ex meīs errōribus hominibus rēctum iter dēmōnstrāre possum.</td><td>Seneca</td><td class=""case-cell-tr"">Kendi hatalarımdan hareket ederek insanlara doğru yolu gösterebilirim.</td><td>iter, itineris n. (yol - Acc. Sg.); rēctus, -a, -um (doğru); hominibus: Dativus (insanlara).</td></tr>
      <tr><td class=""case-cell-latin"">Hominēs, dum docent, discunt.</td><td>Seneca</td><td class=""case-cell-tr"">İnsanlar öğretirken öğrenirler.</td><td>dum + Praesens (eylem sürerken); doceō (öğretmek) vs discō (öğrenmek).</td></tr>
      <tr><td class=""case-cell-latin"">Studium nōn sōlum pecūniae sed etiam voluptātis hominēs nimium trahit; aliī eās cupiditātēs vincere possunt, aliī nōn possunt.</td><td>Klasik Metin</td><td class=""case-cell-tr"">Yalnızca para hevesi değil aynı zamanda zevk hevesi de insanları aşırı derecede peşinden sürükler; bazıları o arzuları yenebilir, bazıları yenemez.</td><td>studium + Genetivus (hevesi, tutkusu); aliī... aliī... (bazıları... bazıları...); nimium: aşırı derecede (zarf).</td></tr>
    </tbody>
  </table>
</div>"
            });

            // Section 2: Plinius Reading (Slides 7-9)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Okuma Parçası: Plinius'un Marcellinus'a Mektubu (Fundanus'un Kızı) (Slayt 7-9)",
                html = @"<p>Genç yaşta ölen Minicia Marcella'nın erdemini ve ailesinin kederini anlatan ünlü mektup:</p>
<blockquote style=""background:rgba(212,168,83,0.08); border-left:4px solid var(--eyup-gold); padding:1rem 1.25rem; margin:1rem 0; border-radius:4px; font-style:italic;"">
  <p><strong>Latince Metin (Slayt 7):</strong><br>
  Salvē, Marcellīne! Haec tibi scrībō dē Fundānō, amīcō nostrō; is fīliam cāram et bellam āmīsit. Illa puella nōn XIII annōs vīxerat, sed nātūra eī multam sapientiam dederat. Mātrem patremque, frātrem sorōremque, nōs et aliōs amīcōs, magistrōs magistrāsque semper amābat, et nōs eam amābāmus laudābāmusque. Medicī eam adiuvāre nōn poterant. Quoniam illa autem magnōs animōs habuit, morbum nimis malum cum patientiā tolerāvit. Nunc, mī amīce, mitte Fundānō nostrō litterās dē fortūnā acerbā fīliae eius. Valē. (Plinius)</p>
</blockquote>
<p><strong>Bilinmeyen Kelimeler (Slayt 8):</strong></p>
<ul>
  <li><span class=""lat-word"">quoniam</span>, adv.: -dığından, için, çünkü, madem ki</li>
  <li><span class=""lat-word"">āmittō, -ere, āmīsī, āmissum</span>: uzağa göndermek; kaybetmek, yitirmek</li>
</ul>
<p><strong>Türkçe Çeviri (Slayt 9 - Eyüp Hoca):</strong></p>
<blockquote style=""background:rgba(255,255,255,0.04); border-left:4px solid #6b7280; padding:1rem 1.25rem; margin:1rem 0; border-radius:4px;"">
  <p>Selam, Marcellinus! Bunları sana arkadaşımız Fundanus hakkında yazıyorum. O (Fundanus) güzel ve değerli kızını kaybetti. O kız 13 yıl yaşamadı, ama doğa ona çok fazla bilgelik bahşetti. Annesini ve babasını, erkek kardeşini ve kız kardeşini, bizi ve diğer arkadaşlarını, kadın ve erkek öğretmenlerini her zaman seviyordu; biz de onu seviyorduk ve yüceltiyorduk. Hekimler ona yardımcı olamıyordu. Büyük bir cesarete sahip olduğundan, son derece kötü olan hastalığa sabırla katlandı. Şimdi, ey arkadaşım, Fundanus'umuza kızının acımasız talihi hakkında bir mektup gönder. Hoşça kal.</p>
</blockquote>"
            });

            // Section 3: Syntactic Analyses (Slides 10-19)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Klasik Sentaks Alıştırmaları (Slayt 10-19)",
                html = @"<p>Slayt 10-19 arasındaki klasik sentaks cümleleri:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Latince Metin</th><th>Yazar / Kaynak</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks Analizi</th></tr>
    </thead>
    <tbody>
      <tr><td class=""case-cell-latin"">Illae quīnque fēminae inter ea animālia mortem nōn timēbant.</td><td>Ders Notu</td><td class=""case-cell-tr"">O beş kadın o hayvanlar arasında ölümden korkmuyorlardı.</td><td>inter + acc. (arasında); timēbant: Imperfectum 3. çoğul.</td></tr>
      <tr><td class=""case-cell-latin"">Nēmō eandem partem Asiae ūnō annō vincet.</td><td>Ders Notu</td><td class=""case-cell-tr"">Hiç kimse Asya'nın aynı bölgesini bir yıl içinde yenmeyecek.</td><td>ūnō annō: Ablativus temporis (bir yıl içinde); eandem: idem zamiri Acc. Sg. f.</td></tr>
      <tr><td class=""case-cell-latin"">Duo ex fīliīs ā portā per agrōs cum patre suō currēbant.</td><td>Ders Notu</td><td class=""case-cell-tr"">Oğullardan ikisi kapıdan itibaren tarlalar boyunca babalarıyla birlikte koşuyorlardı.</td><td>duo ex fīliīs: bütünden parça (oğullardan ikisi); per + acc. (boyunca).</td></tr>
      <tr><td class=""case-cell-latin"">Quid discipulae hodiē discere dēbent?</td><td>Ders Notu</td><td class=""case-cell-tr"">Öğrencilerin bugün ne öğrenmesi gerekiyor? (Öğrenciler bugün ne öğrenmek zorundalar?)</td><td>quid: soru zamiri; dēbent + mastar (zorundalar, gerekmektedir).</td></tr>
      <tr><td class=""case-cell-latin"">Frātrēs meī nihil cum ratiōne herī gerēbant.</td><td>Ders Notu</td><td class=""case-cell-tr"">Erkek kardeşlerim dün aklı başında hiçbir şey yapmıyorlardı (= akıllarıyla hareket etmiyorlardı).</td><td>cum ratiōne: tarz bildiren ablativus (akıl ile, mantık çerçevesinde).</td></tr>
      <tr><td class=""case-cell-latin"">Nōn omnēs eadem amant aut eāsdem cupiditātēs studiaque habent.</td><td>Horatius</td><td class=""case-cell-tr"">Herkes aynı şeyleri sevmez veya herkes aynı arzulara ve heveslere sahip olmaz.</td><td>eadem: nötr çoğul accusativus (aynı şeyleri); eāsdem: dişil çoğul accusativus.</td></tr>
      <tr><td class=""case-cell-latin"">Virtūs tua mē amīcum tibi facit.</td><td>Horatius</td><td class=""case-cell-tr"">Senin erdemin beni sana dost kılıyor.</td><td>amīcum praedicativum nesne tamamlayıcısı; tibi: Dativus (sana).</td></tr>
      <tr><td class=""case-cell-latin"">Omnēs īdem sentiunt.</td><td>Cicero</td><td class=""case-cell-tr"">Herkes aynı şeyi hissediyor.</td><td>īdem: nötr tekil accusativus (aynı şeyi); sentiunt: 3. çoğul.</td></tr>
      <tr><td class=""case-cell-latin"">Neuter medicus nōmen Cicerōnis audīverat.</td><td>Ders Notu</td><td class=""case-cell-tr"">Hiçbir hekim (= iki hekimden hiçbiri = ne o ne de bu hekim) Cicero'nun adını işitmemişti.</td><td>neuter: iki şeyden hiçbiri (UNUS NAUTA sıfatı); audīverat: Plusquamperfectum.</td></tr>
      <tr><td class=""case-cell-latin"">Fēmina ante illam hōram litterās suās mīserat.</td><td>Ders Notu</td><td class=""case-cell-tr"">Kadın o saatten önce kendi mektuplarını göndermişti.</td><td>ante + acc. (önce); suās: kendi (dönüşlü iyelik sıfatı).</td></tr>
      <tr><td class=""case-cell-latin"">Tōtus populus Rōmānus lībertātem āmīsit.</td><td>Ders Notu</td><td class=""case-cell-tr"">Bütün Roma halkı özgürlüğünü kaybetti.</td><td>tōtus: bütün, tüm (UNUS NAUTA sıfatı); āmīsit: Perfectum 3. tekil.</td></tr>
      <tr><td class=""case-cell-latin"">Monuitne nūper eōs dē vīribus illārum urbium in Asiā?</td><td>Ders Notu</td><td class=""case-cell-tr"">Asya'daki o kentlerin kuvveti / insanları hakkında son zamanlarda onları uyardı mı?</td><td>-ne soru takısı; nūper: son zamanlarda, geçenlerde (zarf).</td></tr>
      <tr><td class=""case-cell-latin"">Nōmina multārum urbium nostrārum ab nōminibus urbium antīquārum trāximus.</td><td>Ders Notu</td><td class=""case-cell-tr"">Bize ait pek çok kentin adlarını eski kentlerin adlarından aldık.</td><td>trāximus: trahō fiilinin Perfectum 1. çoğul hali (türettik, aldık).</td></tr>
    </tbody>
  </table>
</div>"
            });

            f.studyTips = "neuter sözcüğü 'iki şeyden hiçbiri' demektir ve UNUS NAUTA kuralına tabidir (Gen. neutrīus, Dat. neutrī).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W11_L1: Latince Gramer 2 - Ders Sunumu 11.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 11, 1, "Latince Gramer 2 - Ders Sunumu 11.1.pdf",
                "EDİLGEN ÇATI 1 (VOX PASSIVA): ŞİMDİKİ, HİKÂYE VE GELECEK ZAMAN",
                "1. ve 2. Çekim Fiillerde Praesens, Imperfectum ve Futurum Passivi",
                "Bu fasikülde Latince fiil sisteminde çığır açan Edilgen Çatıyı (Vox Passiva), evrensel edilgen şahıs eklerini (-r, -ris, -tur, -mur, -minī, -ntur), 1. ve 2. grup fiillerin Şimdiki (Praesens), Hikâye (Imperfectum) ve Gelecek (Futurum) zamanlardaki tam paradigmalarını ve etken-edilgen mukayese tablolarını öğreneceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "Edilgen Çatının Temel Mantığı (Vox Passiva)", "5 Fiil Grubunun Şimdiki Zaman Gövdeleri",
                "1. Grup Praesens Passivi (laudor, cogitor)", "2. Grup Praesens Passivi (moneor, videor)",
                "1. ve 2. Grup Etken vs Edilgen Praesens Karşılaştırması",
                "1. Grup Imperfectum Passivi (laudābar, cogitābar)", "2. Grup Imperfectum Passivi (monēbar, vidēbar)",
                "1. ve 2. Grup Etken vs Edilgen Imperfectum Karşılaştırması",
                "1. Grup Futurum Passivi (laudābor, cogitābor)", "2. Grup Futurum Passivi (monēbor, vidēbor)",
                "1. ve 2. Grup Etken vs Edilgen Futurum Karşılaştırması", "1. ve 2. Çekim Fiil Dağarcığı"
            });
            f.vocabKeys.AddRange(new[] {
                "laudor", "moneor", "videor", "cogitor", "accuso", "advoco", "regno", "sacrifico",
                "pugno", "aedifico", "sacro", "animo", "appello", "confirmo", "invideo", "misceo",
                "persuadeo", "prohibeo", "terreo", "debeo", "doceo", "valeo", "taceo"
            });

            // Section 1: Intro & Stems
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Edilgen Çatının Temel Mantığı ve Şimdiki Zaman Gövdeleri (Slayt 2-3)",
                html = @"<p><strong>Edilgen Çatı (Vox Passiva),</strong> fiilin özne üzerinde etkide bulunduğunu, yani özneye ne yapıldığını veya öznenin neye maruz kaldığını bildirir. Bu çatıda özne eylemi yapan fail değil, eylemden etkilenen kişidir:</p>
<ul>
  <li><em>Etken Çatı (Vox Activa):</em> Caesar amat. (Caesar seviyor.) / Caesar tē amat. (Caesar seni seviyor.)</li>
  <li><em>Edilgen Çatı (Vox Passiva):</em> Caesar amātur. (Caesar seviliyor.) / Caesar ā tē amātur. (Caesar senin tarafından seviliyor.)</li>
</ul>
<p><strong>Evrensel Edilgen Şahıs Ekleri (Praesens Sisteminde):</strong></p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead><tr><th>Şahıs</th><th>Etken Ek</th><th>Edilgen Ek</th><th>İşlevi</th></tr></thead>
    <tbody>
      <tr><td>1. Singularis (Ben)</td><td class=""case-cell-latin"">-ō / -m</td><td class=""case-cell-latin""><strong>-r / -or</strong></td><td>-iliyorum, -ilirim</td></tr>
      <tr><td>2. Singularis (Sen)</td><td class=""case-cell-latin"">-s</td><td class=""case-cell-latin""><strong>-ris (-re)</strong></td><td>-iliyorsun, -ilirsin</td></tr>
      <tr><td>3. Singularis (O)</td><td class=""case-cell-latin"">-t</td><td class=""case-cell-latin""><strong>-tur</strong></td><td>-iliyor, -ilir</td></tr>
      <tr><td>1. Pluralis (Biz)</td><td class=""case-cell-latin"">-mus</td><td class=""case-cell-latin""><strong>-mur</strong></td><td>-iliyoruz, -iliriz</td></tr>
      <tr><td>2. Pluralis (Siz)</td><td class=""case-cell-latin"">-tis</td><td class=""case-cell-latin""><strong>-minī</strong></td><td>-iliyorsunuz, -ilirsiniz</td></tr>
      <tr><td>3. Pluralis (Onlar)</td><td class=""case-cell-latin"">-nt</td><td class=""case-cell-latin""><strong>-ntur</strong></td><td>-iliyorlar, -ilirler</td></tr>
    </tbody>
  </table>
</div>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Beş Fiil Grubunun Şimdiki Zaman Gövdeleri (Slayt 3)", "Slayt 3",
                    new[] { "Grup", "Sözlük Yazılışı", "Şimdiki Zaman Gövdesi" },
                    new[] {
                        new[] { "1. Grup", "laudō, laudāre, laudāvī, laudātum", "laudā-" },
                        new[] { "2. Grup", "moneō, monēre, monuī, monitum", "monē-" },
                        new[] { "3. Grup", "legō, legere, lēgī, lectum", "lege-" },
                        new[] { "4. Grup", "audiō, audīre, audīvī, audītum", "audī-" },
                        new[] { "5. Grup (-io)", "capiō, capere, cēpī, captum", "capĭ-" }
                    }
                ),
                calloutType = "rule",
                calloutTitle = "1. Çekim 1. Tekil Şahıs Kuralı (Slayt 4)",
                calloutText = "1. çekim fiillerde kökteki -ā- ünlüsü 1. tekil şahıs eki -or ile birleştiğinde erir: lauda-or > laudor."
            });

            // Section 2: Praesens Passivi Tables
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 1. ve 2. Grup Edilgen Şimdiki Zaman (Praesens Passivi) Tabloları (Slayt 4-12)",
                html = @"<p>Slayt 5, 6, 9, 10 ve 12'deki tam çekim paradigmaları:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "laudō (1. Grup)", "laudō", "laudāre", "övmek", "Praesens Passivi",
                    "laudor", "laudāris (-re)", "laudātur", "laudāmur", "laudāminī", "laudantur",
                    "övülüyorum / övülürüm", "övülüyorsun / övülürsün", "övülüyor / övülür", "övülüyoruz / övülürüz", "övülüyorsunuz / övülürsünüz", "övülüyorlar / övülürler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "cōgitō (1. Grup)", "cōgitō", "cōgitāre", "düşünmek", "Praesens Passivi",
                    "cōgitor", "cōgitāris (-re)", "cōgitātur", "cōgitāmur", "cōgitāminī", "cōgitantur",
                    "düşünülüyorum / düşünülürüm", "düşünülüyorsun / düşünülürsün", "düşünülüyor / düşünülür", "düşünülüyoruz / düşünülürüz", "düşünülüyorsunuz / düşünülürsünüz", "düşünülüyorlar / düşünülürler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "moneō (2. Grup)", "moneō", "monēre", "uyarmak", "Praesens Passivi",
                    "moneor", "monēris (-re)", "monētur", "monēmur", "monēminī", "monentur",
                    "uyarılıyorum / uyarılırım", "uyarılıyorsun / uyarılırsın", "uyarılıyor / uyarılır", "uyarılıyoruz / uyarılırız", "uyarılıyorsunuz / uyarılırsınız", "uyarılıyorlar / uyarılırlar",
                    "2. grupta gövdedeki -ē- sesi korunur ve yanına -or getirilir: mone-or."
                ) + "<br>" + TableTemplates.VerbTable(
                    "videō (2. Grup)", "videō", "vidēre", "görmek", "Praesens Passivi",
                    "videor", "vidēris (-re)", "vidētur", "vidēmur", "vidēminī", "videntur",
                    "görülüyorum / görülürüm", "görülüyorsun / görülürsün", "görülüyor / görülür", "görülüyoruz / görülürüz", "görülüyorsunuz / görülürsünüz", "görülüyorlar / görülürler"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "1. ve 2. Grup Etken ve Edilgen Praesens Mukayesesi (Slayt 12)", "Slayt 12",
                    new[] { "Şahıs", "1. Grp Etken (laudō)", "2. Grp Etken (moneō)", "1. Grp Edilgen (laudor)", "2. Grp Edilgen (moneor)" },
                    new[] {
                        new[] { "1. Sg.", "laudō", "moneō", "laudor", "moneor" },
                        new[] { "2. Sg.", "laudās", "monēs", "laudāris (-re)", "monēris (-re)" },
                        new[] { "3. Sg.", "laudat", "monet", "laudātur", "monētur" },
                        new[] { "1. Pl.", "laudāmus", "monēmus", "laudāmur", "monēmur" },
                        new[] { "2. Pl.", "laudātis", "monētis", "laudāminī", "monēminī" },
                        new[] { "3. Pl.", "laudant", "monent", "laudantur", "monentur" }
                    }
                )
            });

            // Section 3: Imperfectum Passivi Tables
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 1. ve 2. Grup Edilgen Hikâye Zamanı (Imperfectum Passivi) Tabloları (Slayt 13-21)",
                html = @"<p>Gövdeye <strong>-bā-</strong> zaman eki ve ardından edilgen şahıs ekleri (-r, -ris, -tur, -mur, -minī, -ntur) eklenir:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "laudō (1. Grup)", "laudō", "laudāre", "övmek", "Imperfectum Passivi",
                    "laudābar", "laudābāris (-re)", "laudābātur", "laudābāmur", "laudābāminī", "laudābantur",
                    "övülüyordum / övülürdüm", "övülüyordun / övülürdün", "övülüyordu / övülürdü", "övülüyorduk / övülürdük", "övülüyordunuz / övülürdünüz", "övülüyorlardı / övülürlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "cōgitō (1. Grup)", "cōgitō", "cōgitāre", "düşünmek", "Imperfectum Passivi",
                    "cōgitābar", "cōgitābāris (-re)", "cōgitābātur", "cōgitābāmur", "cōgitābāminī", "cōgitābantur",
                    "düşünülüyordum / düşünülürdüm", "düşünülüyordun / düşünülürdün", "düşünülüyordu / düşünülürdü", "düşünülüyorduk / düşünülürdük", "düşünülüyordunuz / düşünülürdünüz", "düşünülüyorlardı / düşünülürlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "moneō (2. Grup)", "moneō", "monēre", "uyarmak", "Imperfectum Passivi",
                    "monēbar", "monēbāris (-re)", "monēbātur", "monēbāmur", "monēbāminī", "monēbantur",
                    "uyarılıyordum / uyarılırdım", "uyarılıyordun / uyarılırdın", "uyarılıyordu / uyarılırdı", "uyarılıyorduk / uyarılırdık", "uyarılıyordunuz / uyarılırdınız", "uyarılıyorlardı / uyarılırlardı"
                ) + "<br>" + TableTemplates.VerbTable(
                    "videō (2. Grup)", "videō", "vidēre", "görmek", "Imperfectum Passivi",
                    "vidēbar", "vidēbāris (-re)", "vidēbātur", "vidēbāmur", "vidēbāminī", "vidēbantur",
                    "görülüyordum / görülürdüm", "görülüyordun / görülürdün", "görülüyordu / görülürdü", "görülüyorduk / görülürdük", "görülüyordunuz / görülürdünüz", "görülüyorlardı / görülürlerdi"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "1. ve 2. Grup Etken ve Edilgen Imperfectum Mukayesesi (Slayt 21)", "Slayt 21",
                    new[] { "Şahıs", "1. Grp Etken (laudābam)", "2. Grp Etken (monēbam)", "1. Grp Edilgen (laudābar)", "2. Grp Edilgen (monēbar)" },
                    new[] {
                        new[] { "1. Sg.", "laudābam", "monēbam", "laudābar", "monēbar" },
                        new[] { "2. Sg.", "laudābās", "monēbās", "laudābāris (-re)", "monēbāris (-re)" },
                        new[] { "3. Sg.", "laudābat", "monēbat", "laudābātur", "monēbātur" },
                        new[] { "1. Pl.", "laudābāmus", "monēbāmus", "laudābāmur", "monēbāmur" },
                        new[] { "2. Pl.", "laudābātis", "monēbātis", "laudābāminī", "monēbāminī" },
                        new[] { "3. Pl.", "laudābant", "monēbant", "laudābantur", "monēbantur" }
                    }
                )
            });

            // Section 4: Futurum Passivi Tables
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. 1. ve 2. Grup Edilgen Gelecek Zaman (Futurum Passivi) Tabloları (Slayt 22-30)",
                html = @"<p>1. ve 2. grupta gövdeye <strong>-bor, -beris, -bitur, -bimur, -biminī, -buntur</strong> ekleri getirilir. 2. tekildeki ara sesin <em>-e-</em> (-beris) olduğuna dikkat ediniz:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "laudō (1. Grup)", "laudō", "laudāre", "övmek", "Futurum Passivi",
                    "laudābor", "laudāberis (-re)", "laudābitur", "laudābimur", "laudābiminī", "laudābuntur",
                    "övüleceğim", "övüleceksin", "övülecek", "övüleceğiz", "övüleceksiniz", "övülecekler",
                    "2. tekil şahısta ara ses -i- değil -e- olur: laudāberis."
                ) + "<br>" + TableTemplates.VerbTable(
                    "cōgitō (1. Grup)", "cōgitō", "cōgitāre", "düşünmek", "Futurum Passivi",
                    "cōgitābor", "cōgitāberis (-re)", "cōgitābitur", "cōgitābimur", "cōgitābiminī", "cōgitābuntur",
                    "düşünüleceğim", "düşünüleceksin", "düşünülecek", "düşünüleceğiz", "düşünüleceksiniz", "düşünülecekler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "moneō (2. Grup)", "moneō", "monēre", "uyarmak", "Futurum Passivi",
                    "monēbor", "monēberis (-re)", "monēbitur", "monēbimur", "monēbiminī", "monēbuntur",
                    "uyarılacağım", "uyarılacaksın", "uyarılacak", "uyarılacağız", "uyarılacaksınız", "uyarılacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "videō (2. Grup)", "videō", "vidēre", "görmek", "Futurum Passivi",
                    "vidēbor", "vidēberis (-re)", "vidēbitur", "vidēbimur", "vidēbiminī", "vidēbuntur",
                    "görüleceğim", "görüleceksin", "görülecek", "görüleceğiz", "görüleceksiniz", "görülecekler"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "1. ve 2. Grup Etken ve Edilgen Futurum Mukayesesi (Slayt 30)", "Slayt 30",
                    new[] { "Şahıs", "1. Grp Etken (laudābō)", "2. Grp Etken (monēbō)", "1. Grp Edilgen (laudābor)", "2. Grp Edilgen (monēbor)" },
                    new[] {
                        new[] { "1. Sg.", "laudābō", "monēbō", "laudābor", "monēbor" },
                        new[] { "2. Sg.", "laudābis", "monēbis", "laudāberis (-re)", "monēberis (-re)" },
                        new[] { "3. Sg.", "laudābit", "monēbit", "laudābitur", "monēbitur" },
                        new[] { "1. Pl.", "laudābimus", "monēbimus", "laudābimur", "monēbimur" },
                        new[] { "2. Pl.", "laudābitis", "monēbitis", "laudābiminī", "monēbiminī" },
                        new[] { "3. Pl.", "laudābunt", "monēbunt", "laudābuntur", "monēbuntur" }
                    }
                )
            });

            f.studyTips = "Futurum 2. tekil şahıstaki laudāberis ve monēberis çekimlerini zihninizde iyice yerleştiriniz; ara ses -i- değil daima -e- olur!";
            list.Add(f);
        }

        // ====================================================================
        // T2_W12_L1: Latince Gramer 2 - Ders Sunumu 12.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 12, 1, "Latince Gramer 2 - Ders Sunumu 12.1.pdf",
                "EDİLGEN ÇATI 2: 3., 4. VE 5. (-IO) GRUP FİİLLERDE PRAESENS VE IMPERFECTUM",
                "legor, audior, capior Çekim Tabloları ve 5 Grubun Mukayesesi",
                "Bu fasikülde ünsüz gövdeli 3. grup (legō, regō), uzun -ī gövdeli 4. grup (audiō, assentior) ve ara sesli 5. grup (-io: capiō, faciō) fiillerin Şimdiki (Praesens) ve Hikâye (Imperfectum) zamanlarındaki edilgen çekimlerini ve tüm 5 grubun büyük mukayese tablolarını göreceksiniz.",
                "Orta-İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "3. Grup Praesens Passivi (legor, regor)", "4. Grup Praesens Passivi (audior, assentior)",
                "5. Grup (-io) Praesens Passivi (capior, facior)", "3, 4 ve 5. Grup Praesens Passivi Mukayesesi",
                "Beş Grubun Praesens Passivi Tam Tablosu", "3. Grup Imperfectum Passivi (legēbar, regēbar)",
                "4. Grup Imperfectum Passivi (audiēbar, leniēbar)", "5. Grup (-io) Imperfectum Passivi (capiēbar, faciēbar)",
                "Beş Grubun Imperfectum Passivi Tam Tablosu", "Fiil Dağarcığı ve Sözlük Anlamları"
            });
            f.vocabKeys.AddRange(new[] {
                "legor", "regor", "audior", "assentior", "capior", "facior", "ago", "duco",
                "scribo", "gero", "traho", "tango", "frango", "neglego", "erudio", "finio",
                "haurio", "invenio", "sentio", "subvenio", "impedio", "lenio", "traicio", "accipio",
                "afficio", "conficio", "decipio", "despicio", "conspicio", "excipio"
            });

            // Section 1: Praesens Passivi (3, 4, 5)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3., 4. ve 5. Grup Edilgen Şimdiki Zaman (Praesens Passivi) (Slayt 4-19)",
                html = @"<p>3., 4. ve 5. grup fiillerin şimdiki zaman edilgen çekim özellikleri:</p>
<ul>
  <li><strong>3. Grup:</strong> Gövdedeki -e- sesi 2. tekil şahısta korunur (<span class=""lat-word"">regeris</span>), diğer şahıslarda -i- olur (<span class=""lat-word"">regitur</span>, <span class=""lat-word"">regimur</span>), 3. çoğulda ise -u- olur (<span class=""lat-word"">reguntur</span>).</li>
  <li><strong>4. Grup:</strong> Gövdedeki uzun -ī- sesi 1. tekil ve 3. çoğul şahıslardan önce kısalır (<span class=""lat-word"">audior</span>, <span class=""lat-word"">audiuntur</span>).</li>
  <li><strong>5. Grup (-io):</strong> 2. tekil şahısta -i- sesi -e-'ye dönüşür (<span class=""lat-word"">caperis</span>); diğer şahıslarda -i- korunur (<span class=""lat-word"">capior</span>, <span class=""lat-word"">capitur</span>, <span class=""lat-word"">capiuntur</span>).</li>
</ul>",
                tableHtml = TableTemplates.VerbTable(
                    "legō (3. Grup)", "legō", "legere", "okumak", "Praesens Passivi",
                    "legor", "legeris (-re)", "legitur", "legimur", "legiminī", "leguntur",
                    "okunuyorum / okunurum", "okunuyorsun / okunursun", "okunuyor / okunur", "okunuyoruz / okunuruz", "okunuyorsunuz / okunursunuz", "okunuyorlar / okunurlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "regō (3. Grup)", "regō", "regere", "yönetmek", "Praesens Passivi",
                    "regor", "regeris (-re)", "regitur", "regimur", "regiminī", "reguntur",
                    "yönetiliyorum / yönetilirim", "yönetiliyorsun / yönetilirsin", "yönetiliyor / yönetilir", "yönetiliyoruz / yönetiliriz", "yönetiliyorsunuz / yönetilirsiniz", "yönetiliyorlar / yönetilirler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "audiō (4. Grup)", "audiō", "audīre", "işitmek", "Praesens Passivi",
                    "audior", "audīris (-re)", "audītur", "audīmur", "audīminī", "audiuntur",
                    "işitiliyorum / işitilirim", "işitiliyorsun / işitilirsin", "işitiliyor / işitilir", "işitiliyoruz / işitiliriz", "işitiliyorsunuz / işitilirsiniz", "işitiliyorlar / işitilirler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "assentiō (4. Grup)", "assentiō", "assentīre", "onaylamak", "Praesens Passivi",
                    "assentior", "assentīris (-re)", "assentītur", "assentīmur", "assentīminī", "assentiuntur",
                    "onaylanıyorum / onaylanırım", "onaylanıyorsun / onaylanırsın", "onaylanıyor / onaylanır", "onaylanıyoruz / onaylanırız", "onaylanıyorsunuz / onaylanırsınız", "onaylanıyorlar / onaylanırlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "capiō (5. Grup)", "capiō", "capere", "ele geçirmek", "Praesens Passivi",
                    "capior", "caperis (-re)", "capitur", "capimur", "capiminī", "capiuntur",
                    "ele geçiriliyorum / geçirilirim", "ele geçiriliyorsun / geçirilirsin", "ele geçiriliyor / geçirilir", "ele geçiriliyoruz / geçiriliriz", "ele geçiriliyorsunuz / geçirilirsiniz", "ele geçiriliyorlar / geçirilirler",
                    "2. tekil şahısta gövdedeki -i- sesi -e- olur: caperis."
                ) + "<br>" + TableTemplates.VerbTable(
                    "faciō (5. Grup)", "faciō", "facere", "yapmak", "Praesens Passivi",
                    "facior", "faceris (-re)", "facitur", "facimur", "faciminī", "faciuntur",
                    "yapılıyorum / yapılırım", "yapılıyorsun / yapılırsın", "yapılıyor / yapılır", "yapılıyoruz / yapılırız", "yapılıyorsunuz / yapılırsiniz", "yapılıyorlar / yapılırlar"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Bütün 5 Grubun Praesens Passivi Karşılaştırması (Slayt 19)", "Slayt 19",
                    new[] { "Şahıs", "1. Grp (laudor)", "2. Grp (moneor)", "3. Grp (legor)", "4. Grp (audior)", "5. Grp (capior)" },
                    new[] {
                        new[] { "1. Sg.", "laudor", "moneor", "legor", "audior", "capior" },
                        new[] { "2. Sg.", "laudāris (-re)", "monēris (-re)", "legeris (-re)", "audīris (-re)", "caperis (-re)" },
                        new[] { "3. Sg.", "laudātur", "monētur", "legitur", "audītur", "capitur" },
                        new[] { "1. Pl.", "laudāmur", "monēmur", "legimur", "audīmur", "capimur" },
                        new[] { "2. Pl.", "laudāminī", "monēminī", "legiminī", "audīminī", "capiminī" },
                        new[] { "3. Pl.", "laudantur", "monentur", "leguntur", "audiuntur", "capiuntur" }
                    }
                )
            });

            // Section 2: Imperfectum Passivi (3, 4, 5)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 3., 4. ve 5. Grup Edilgen Hikâye Zamanı (Imperfectum Passivi) (Slayt 20-35)",
                html = @"<p>3. grupta <strong>-ēbā-</strong>, 4. ve 5. gruplarda ise <strong>-iēbā-</strong> takısı kullanılır:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "legō (3. Grup)", "legō", "legere", "okumak", "Imperfectum Passivi",
                    "legēbar", "legēbāris (-re)", "legēbātur", "legēbāmur", "legēbāminī", "legēbantur",
                    "okunuyordum / okunurdum", "okunuyordun / okunurdun", "okunuyordu / okunurdu", "okunuyorduk / okunurduk", "okunuyordunuz / okunurdunuz", "okunuyorlardı / okunurlardı"
                ) + "<br>" + TableTemplates.VerbTable(
                    "regō (3. Grup)", "regō", "regere", "yönetmek", "Imperfectum Passivi",
                    "regēbar", "regēbāris (-re)", "regēbātur", "regēbāmur", "regēbāminī", "regēbantur",
                    "yönetiliyordum / yönetilirdim", "yönetiliyordun / yönetilirdin", "yönetiliyordu / yönetilirdi", "yönetiliyorduk / yönetilirdik", "yönetiliyordunuz / yönetilirdiniz", "yönetiliyorlardı / yönetilirlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "audiō (4. Grup)", "audiō", "audīre", "işitmek", "Imperfectum Passivi",
                    "audiēbar", "audiēbāris (-re)", "audiēbātur", "audiēbāmur", "audiēbāminī", "audiēbantur",
                    "işitiliyordum / işitilirdim", "işitiliyordun / işitilirdin", "işitiliyordu / işitilirdi", "işitiliyorduk / işitilirdik", "işitiliyordunuz / işitilirdiniz", "işitiliyorlardı / işitilirlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "lēniō (4. Grup)", "lēniō", "lēnīre", "yatıştırmak", "Imperfectum Passivi",
                    "lēniēbar", "lēniēbāris (-re)", "lēniēbātur", "lēniēbāmur", "lēniēbāminī", "lēniēbantur",
                    "yatıştırılıyordum / yatıştırılırdım", "yatıştırılıyordun / yatıştırılırdın", "yatıştırılıyordu / yatıştırılırdı", "yatıştırılıyorduk / yatıştırılırdık", "yatıştırılıyordunuz / yatıştırılırdınız", "yatıştırılıyorlardı / yatıştırılırlardı"
                ) + "<br>" + TableTemplates.VerbTable(
                    "capiō (5. Grup)", "capiō", "capere", "ele geçirmek", "Imperfectum Passivi",
                    "capiēbar", "capiēbāris (-re)", "capiēbātur", "capiēbāmur", "capiēbāminī", "capiēbantur",
                    "ele geçiriliyordum / geçirilirdim", "ele geçiriliyordun / geçirilirdin", "ele geçiriliyordu / geçirilirdi", "ele geçiriliyorduk / geçirilirdik", "ele geçiriliyordunuz / geçirilirdiniz", "ele geçiriliyorlardı / geçirilirlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "faciō (5. Grup)", "faciō", "facere", "yapmak", "Imperfectum Passivi",
                    "faciēbar", "faciēbāris (-re)", "faciēbātur", "faciēbāmur", "faciēbāminī", "faciēbantur",
                    "yapılıyordum / yapılırdım", "yapılıyordun / yapılırdın", "yapılıyordu / yapılırdı", "yapılıyorduk / yapılırdık", "yapılıyordunuz / yapılırdınız", "yapılıyorlardı / yapılırlardı"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Bütün 5 Grubun Imperfectum Passivi Karşılaştırması (Slayt 35)", "Slayt 35",
                    new[] { "Şahıs", "1. Grp (laudābar)", "2. Grp (monēbar)", "3. Grp (legēbar)", "4. Grp (audiēbar)", "5. Grp (capiēbar)" },
                    new[] {
                        new[] { "1. Sg.", "laudābar", "monēbar", "legēbar", "audiēbar", "capiēbar" },
                        new[] { "2. Sg.", "laudābāris (-re)", "monēbāris (-re)", "legēbāris (-re)", "audiēbāris (-re)", "capiēbāris (-re)" },
                        new[] { "3. Sg.", "laudābātur", "monēbātur", "legēbātur", "audiēbātur", "capiēbātur" },
                        new[] { "1. Pl.", "laudābāmur", "monēbāmur", "legēbāmur", "audiēbāmur", "capiēbāmur" },
                        new[] { "2. Pl.", "laudābāminī", "monēbāminī", "legēbāminī", "audiēbāminī", "capiēbāminī" },
                        new[] { "3. Pl.", "laudābantur", "monēbantur", "legēbantur", "audiēbantur", "capiēbantur" }
                    }
                )
            });

            f.studyTips = "3. çekim fiillerin Imperfectum zamanında legēbar (uzun e), 4. ve 5. çekim fiillerde ise audiēbar ve capiēbar (-ie-) takısının geldiğini aklınızda tutunuz.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W12_L2: Latince Gramer 2 - Ders Sunumu 12.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 12, 2, "Latince Gramer 2 - Ders Sunumu 12.2.pdf",
                "EDİLGEN ÇATI 3: FUTURUM PASSIVI, EMİR KİPİ, MASTARLAR VE SENTAKS DÖNÜŞÜMÜ",
                "3-5. Grup Gelecek Zamanı, Edilgen Mastarlar, Edilgen Emirler ve Fail/Vasıta Ayrımı",
                "Bu fasikülde 3., 4. ve 5. grup fiillerin Gelecek Zamanını (Futurum I Passivi: -ar, -ēris...), beş grubun Etken ve Edilgen Mastarlarını (Infinitivus: laudārī, monērī, vincī, audīrī, capī), Edilgen Emir Kipini (Imperativus Passivi) ve etken cümleden edilgen cümleye dönüşüm kurallarını (Ablativus Auctoris vs Instrumenti) öğreneceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "3. Grup Futurum Passivi (legar, regar)", "4. Grup Futurum Passivi (audiar, leniar)",
                "5. Grup (-io) Futurum Passivi (capiar, faciar)", "Beş Grubun Futurum Passivi Tam Mukayesesi",
                "Etken ve Edilgen Mastarlar (Infinitivus)", "3. ve 5. Grupta Edilgen Mastar Kuralı (-ī)",
                "Edilgen Emir Kipi (Imperativus Passivi: 2. Sg & 2. Pl)", "Edilgen Cümleye Dönüşüm Kuralları",
                "Ablativus Auctoris (ā/ab + abl.) vs Ablativus Instrumenti"
            });
            f.vocabKeys.AddRange(new[] {
                "legar", "regar", "audiar", "capiar", "faciar", "laudari", "moneri", "vinci",
                "audiri", "capi", "admoneo", "prodigium", "deleo", "flamma", "conservo", "arma"
            });

            // Section 1: Futurum Passivi (3, 4, 5)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3., 4. ve 5. Grup Edilgen Gelecek Zaman (Futurum Passivi) (Slayt 3-18)",
                html = @"<p>1. ve 2. grupta görülen <em>-bor, -beris, -bitur...</em> ekleri 3., 4. ve 5. gruplarda <strong>kullanılmaz</strong>. Bunun yerine 1. tekilde <strong>-ar</strong>, diğer şahıslarda ise <strong>-ēris, -ētur, -ēmur, -ēminī, -entur</strong> ekleri gelir:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "legō (3. Grup)", "legō", "legere", "okumak", "Futurum Passivi",
                    "legar", "legēris (-re)", "legētur", "legēmur", "legēminī", "legentur",
                    "okunacağım", "okunacaksın", "okunacak", "okunacağız", "okunacaksınız", "okunacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "regō (3. Grup)", "regō", "regere", "yönetmek", "Futurum Passivi",
                    "regar", "regēris (-re)", "regētur", "regēmur", "regēminī", "regentur",
                    "yönetileceğim", "yönetileceksin", "yönetilecek", "yönetileceğiz", "yönetileceksiniz", "yönetilecekler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "audiō (4. Grup)", "audiō", "audīre", "işitmek", "Futurum Passivi",
                    "audiar", "audiēris (-re)", "audiētur", "audiēmur", "audiēminī", "audientur",
                    "işitileceğim", "işitileceksin", "işitilecek", "işitileceğiz", "işitileceksiniz", "işitilecekler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "lēniō (4. Grup)", "lēniō", "lēnīre", "yatıştırmak", "Futurum Passivi",
                    "lēniar", "lēniēris (-re)", "lēniētur", "lēniēmur", "lēniēminī", "lēnientur",
                    "yatıştırılacağım", "yatıştırılacaksın", "yatıştırılacak", "yatıştırılacağız", "yatıştırılacaksınız", "yatıştırılacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "capiō (5. Grup)", "capiō", "capere", "ele geçirmek", "Futurum Passivi",
                    "capiar", "capiēris (-re)", "capiētur", "capiēmur", "capiēminī", "capientur",
                    "ele geçirileceğim", "ele geçirileceksin", "ele geçirilecek", "ele geçirileceğiz", "ele geçirileceksiniz", "ele geçirilecekler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "faciō (5. Grup)", "faciō", "facere", "yapmak", "Futurum Passivi",
                    "faciar", "faciēris (-re)", "faciētur", "faciēmur", "faciēminī", "facientur",
                    "yapılacağım", "yapılacaksın", "yapılacak", "yapılacağız", "yapılacaksınız", "yapılacaklar"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Bütün 5 Grubun Futurum Passivi Karşılaştırması (Slayt 18)", "Slayt 18",
                    new[] { "Şahıs", "1. Grp (laudābor)", "2. Grp (monēbor)", "3. Grp (legar)", "4. Grp (audiar)", "5. Grp (capiar)" },
                    new[] {
                        new[] { "1. Sg.", "laudābor", "monēbor", "legar", "audiar", "capiar" },
                        new[] { "2. Sg.", "laudāberis (-re)", "monēberis (-re)", "legēris (-re)", "audiēris (-re)", "capiēris (-re)" },
                        new[] { "3. Sg.", "laudābitur", "monēbitur", "legētur", "audiētur", "capiētur" },
                        new[] { "1. Pl.", "laudābimur", "monēbimur", "legēmur", "audiēmur", "capiēmur" },
                        new[] { "2. Pl.", "laudābiminī", "monēbiminī", "legēminī", "audiēminī", "capiēminī" },
                        new[] { "3. Pl.", "laudābuntur", "monēbuntur", "legentur", "audientur", "capientur" }
                    }
                )
            });

            // Section 2: Infinitives
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Şimdiki Zaman Mastarları: Etken vs Edilgen (Infinitivus) (Slayt 19-20)",
                html = @"<p>Latincede fiil gruplarına göre mastar yapılışı büyük bir düzen gösterir:</p>
<ul>
  <li>1. Grup: <em>-āre</em> &gt; Edilgen: <strong>-ārī</strong> (laudāre = övmek &gt; laudārī = övülmek)</li>
  <li>2. Grup: <em>-ēre</em> &gt; Edilgen: <strong>-ērī</strong> (monēre = uyarmak &gt; monērī = uyarılmak)</li>
  <li>3. Grup: <em>-ere</em> &gt; Edilgen: <strong>-ī</strong> (vincere = yenmek &gt; <strong>vincī</strong> = yenilmek; regere &gt; <strong>regī</strong> = yönetilmek)</li>
  <li>4. Grup: <em>-īre</em> &gt; Edilgen: <strong>-īrī</strong> (audīre = işitmek &gt; audīrī = işitilmek)</li>
  <li>5. Grup (-io): <em>-ere</em> &gt; Edilgen: <strong>-ī</strong> (capere = almak &gt; <strong>capī</strong> = alınmak; facere &gt; <strong>facī</strong> = yapılmak)</li>
</ul>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Beş Fiil Grubunun Şimdiki Zaman Mastarları (Slayt 19-20)", "Slayt 19-20",
                    new[] { "Grup", "Model Fiil", "Etken Mastar (Activi)", "Edilgen Mastar (Passivi)", "Türkçe Anlamı" },
                    new[] {
                        new[] { "1. Grup", "laudō, -āre", "laudāre", "laudārī", "övmek / övülmek" },
                        new[] { "2. Grup", "moneō, -ēre", "monēre", "monērī", "uyarmak / uyarılmak" },
                        new[] { "3. Grup", "vincō, -ere", "vincere", "vincī", "yenmek / yenilmek" },
                        new[] { "4. Grup", "audiō, -īre", "audīre", "audīrī", "işitmek / işitilmek" },
                        new[] { "5. Grup (-io)", "capiō, -ere", "capere", "capī", "almak / alınmak" }
                    },
                    "3. ve 5. grupta mastar eki -ere tamamen düşer ve doğrudan köke uzun -ī eklenir: vincere > vincī, capere > capī."
                )
            });

            // Section 3: Imperativus Passivi
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Edilgen Emir Kipi (Imperativus Passivi) (Slayt 21-34)",
                html = @"<p>Latincede edilgen emir kipi biçimleri ilginç bir morfolojik kurala dayanır:</p>
<ul>
  <li><strong>2. Tekil Şahıs Edilgen Emir:</strong> Biçim olarak <em>Etken Mastar</em> ile birebir aynıdır (-re): <span class=""lat-word"">laudāre!</span> (övül!), <span class=""lat-word"">monēre!</span> (uyarıl!), <span class=""lat-word"">scrībere!</span> (yazıl!), <span class=""lat-word"">audīre!</span> (işitil!), <span class=""lat-word"">accipe! / accipere!</span> (kabul edil!).</li>
  <li><strong>2. Çoğul Şahıs Edilgen Emir:</strong> Biçim olarak <em>Praesens Passivi 2. Çoğul</em> şahıs ile birebir aynıdır (-minī): <span class=""lat-word"">laudāminī!</span> (övülünüz!), <span class=""lat-word"">monēminī!</span> (uyarılınız!), <span class=""lat-word"">scrībiminī!</span> (yazılınız!), <span class=""lat-word"">audīminī!</span> (işitiliniz!).</li>
</ul>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Model Fiillerde Etken vs Edilgen Emir Kipi Karşılaştırması (Slayt 29-34)", "Slayt 29-34",
                    new[] { "Grup & Fiil", "2. Sg. Etken Emir", "2. Sg. Edilgen Emir", "2. Pl. Etken Emir", "2. Pl. Edilgen Emir" },
                    new[] {
                        new[] { "1. laudō (övmek)", "laudā (öv)", "laudāre (övül)", "laudāte (övünüz)", "laudāminī (övülünüz)" },
                        new[] { "1. accusō (suçlamak)", "accūsā (suçla)", "accūsāre (suçlan)", "accūsāte (suçlayınız)", "accūsāminī (suçlanınız)" },
                        new[] { "2. moneō (uyarmak)", "monē (uyar)", "monēre (uyarıl)", "monēte (uyarınız)", "monēminī (uyarılınız)" },
                        new[] { "2. terreō (korkutmak)", "terrē (korkut)", "terrēre (korkutul)", "terrēte (korkutunuz)", "terrēminī (korkutulunuz)" },
                        new[] { "3. scrībō (yazmak)", "scrībe (yaz)", "scrībere (yazıl)", "scrībite (yazınız)", "scrībiminī (yazılınız)" },
                        new[] { "3. tangō (dokunmak)", "tange (dokun)", "tangere (dokunul)", "tangite (dokununuz)", "tangiminī (dokunulunuz)" },
                        new[] { "4. fīniō (bitirmek)", "fīnī (bitir)", "fīnīre (bitiril)", "fīnīte (bitiriniz)", "fīnīminī (bitiriniz)" },
                        new[] { "4. audiō (işitmek)", "audī (işit)", "audīre (işitil)", "audīte (işitiniz)", "audīminī (işitiliniz)" },
                        new[] { "5. accipiō (kabul etmek)", "accipe (kabul et)", "accipere (kabul edil)", "accipite (kabul ediniz)", "accipiminī (kabul ediliniz)" },
                        new[] { "5. dēspiciō (küçük görmek)", "dēspice (küçük gör)", "dēspicere (küçük görül)", "dēspicite (küçük görünüz)", "dēspiciminī (küçük görülünüz)" }
                    }
                )
            });

            // Section 4: Sentence Transformations (Slides 35-36)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Edilgen Cümleye Dönüşüm Kuralları: Fail ve Vasıta (Slayt 35-36)",
                html = @"<p>Etken bir cümle edilgene dönüştürülürken şu temel sentaks kuralları işler:</p>
<ol>
  <li>Etken cümlenin belirtili nesnesi (Accusativus), edilgen cümlenin <strong>öznesi (Nominativus)</strong> haline gelir.</li>
  <li>Yüklem etken çatıdan <strong>edilgen çatıya</strong> çevrilir ve yeni öznenin şahsına/sayısına uyar.</li>
  <li>Eylemi gerçekleştiren <strong>canlı fail</strong> ise önüne <span class=""lat-word"">ā / ab</span> edatı konularak <strong>Ablatīvus Auctōris</strong> haline getirilir.</li>
  <li>Eylemin gerçekleşmesini sağlayan <strong>cansız bir araç veya vasıta</strong> ise edatsız olarak yalın <strong>Ablatīvus Instrumentī</strong> halinde bırakılır.</li>
</ol>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Etken Cümleden Edilgene Dönüşüm Modelleri (Slayt 35-36)", "Slayt 35-36",
                    new[] { "Örnek", "Etken Cümle", "Edilgen Cümle (ā / ab ile Fail)", "Edilgen Cümle (Yalın Abl. ile Vasıta)" },
                    new[] {
                        new[] { "I", "Dī Caesarem admonent.<br><small class=\"case-cell-tr\">Tanrılar Caesar'ı uyarıyorlar.</small>", "Caesar ā dīs admonētur.<br><small class=\"case-cell-tr\">Caesar tanrılar tarafından uyarılıyor.</small>", "Caesar hīs prōdigiīs admonētur.<br><small class=\"case-cell-tr\">Caesar bu kehanetlerle uyarılıyor.</small>" },
                        new[] { "II", "Malī virī urbem dēlēbant.<br><small class=\"case-cell-tr\">Kötü adamlar kenti tahrip ediyorlardı.</small>", "Urbs ab malīs virīs dēlēbātur.<br><small class=\"case-cell-tr\">Kent kötü adamlar tarafından tahrip ediliyordu.</small>", "Urbs flammīs dēlēbātur.<br><small class=\"case-cell-tr\">Kent alevlerle (aracılığıyla) tahrip ediliyordu.</small>" },
                        new[] { "III", "Hī cīvēs patriam conservābunt.<br><small class=\"case-cell-tr\">Bu yurttaşlar vatanı kurtaracaklar.</small>", "Patria ab hīs cīvibus conservābitur.<br><small class=\"case-cell-tr\">Vatan bu yurttaşlar tarafından kurtarılacak.</small>", "Patria armīs et vēritāte conservābitur.<br><small class=\"case-cell-tr\">Vatan silahlarla ve doğrulukla kurtarılacak.</small>" }
                    }
                )
            });

            f.studyTips = "ā/ab edatı yalnızca canlı varlıklar (insanlar, tanrılar) için kullanılır. Cansız araçlar için ASLA edat kullanılmaz, yalın ablativus yeterlidir (armis, flammis).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W13_L1: Latince Gramer 2 - Ders Sunumu 13.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 13, 1, "Latince Gramer 2 - Ders Sunumu 13.1.pdf",
                "EDİLGEN CÜMLE SENTAKSI: FAİL, VASITA VE KLASİK METİN ÇÖZÜMLEMELERİ",
                "Ablatīvus Auctōris, Ablatīvus Instrumentī ve 21 Slaytlık Klasik Cümle Maratonu",
                "Bu fasikülde canlı fail (ā/ab + Ablativus) ile cansız araç (yalın Ablativus) arasındaki filolojik farkı, 'Beata memoria amicitiarum dulcium numquam delebitur' cümlesiyle başlayan ve 21 slayt boyunca devam eden klasik edebiyat ve sentaks maratonunu tüm çözümlemeleriyle öğreneceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "Ablatīvus Auctōris (Canlı Fail)", "Ablatīvus Instrumentī (Cansız Vasıta)", "Fail ve Vasıtanın Bir Arada Kullanımı",
                "dēlēbitur ve terrentur Sentaksı", "caecus, dulcis ve iūcundus Sıfatları", "Caesar'ın Askeri Dilinde iungere Sentaksı",
                "İlk Kral ve Deniz Metni (mare, vis, turba)", "Ulus ve Yaşlılar Sentaksı (gens, neglegere)",
                "Hiciv Şiirinde libellus saturārum", "causā (+ Genetivus) ile Amaç/Sebep Bildirme"
            });
            f.vocabKeys.AddRange(new[] {
                "amicitia", "deleo", "dulcis", "caecus", "intellego", "quoque", "iucundus", "genus",
                "factum", "moveo", "cito", "potens", "iungo", "copia", "iacio", "turba", "vis",
                "divitiae", "gens", "asper", "servitus", "libellus", "satura"
            });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Edilgen Cümle Sentaksı ve 21 Slaytlık Klasik Cümle Serisi (Slayt 2-21)",
                html = @"<p>Slayt 2-21 boyunca Doç. Dr. Eyüp Çoraklı'nın sunduğu klasik edebi cümleler, kelime dağarcığı ve verbatim Türkçe tercümeleri:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead>
      <tr><th>Latince Cümle</th><th>Önemli Kelimeler & Gövdeler</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks Açıklaması</th></tr>
    </thead>
    <tbody>
      <tr>
        <td class=""case-cell-latin"">Beāta memoria amīcitiārum dulcium numquam dēlēbitur.</td>
        <td>amīcitia, -ae f. (dostluk); dulcis, -e (tatlı, hoş); dēleō, -ēre (yıkmak, silmek)</td>
        <td class=""case-cell-tr"">Güzel arkadaşlıkların aziz hatırası asla yok edilmeyecek.</td>
        <td>dēlēbitur: dēleō fiili Futurum I Passivi 3. tekil; beāta memoria: Nominativus özne.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Multī morte etiam facilī nimis terrentur.</td>
        <td>mors, mortis f. (ölüm); facilis, -e (kolay); terreō, -ēre (korkutmak)</td>
        <td class=""case-cell-tr"">Pek çok kişi fazlasıyla kolay bir ölümle korkutulur.</td>
        <td>terrentur: Praesens Passivi 3. çoğul; morte facilī: yalın ablativus (araç / sebep).</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Illa fēmina caeca omnia genera artium quoque intellēxit et ab amīcīs iūcundīs semper laudābātur.</td>
        <td>caecus, -a, -um (kör); genus, -eris n. (tür); iūcundus, -a, -um (sevimli, güzel)</td>
        <td class=""case-cell-tr"">O kör kadın sanatların bütün türlerini kavradı ve güzel arkadaşları tarafından her zaman övülüyordu.</td>
        <td>ab amīcīs iūcundīs: Ablativus Auctoris (canlı fail); laudābātur: Imperfectum Passivi 3. tekil.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Mentēs nostrae memoriā potentī illōrum duōrum factōrum citō moventur.</td>
        <td>factum, -ī n. (başarı, iş); moveō, -ēre (harekete geçirmek, etkilemek); citō: çabucak</td>
        <td class=""case-cell-tr"">Bizim zihinlerimiz o iki başarının güçlü hatırasıyla etkilenir.</td>
        <td>memoriā potentī: Ablativus instrumenti; moventur: Praesens Passivi 3. çoğul.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Caesar nōn poterat suās copiās cum celeribus copiīs rēgis iungere.</td>
        <td>copia, -ae f. (birlik, güç); iungō, -ere (bağlamak, birleştirmek); celer, -is, -e (hızlı)</td>
        <td class=""case-cell-tr"">Caesar kendi birliklerini kralın hızlı birlikleriyle birleştiremiyordu (birleştirmeyi başaramıyordu).</td>
        <td>poterat + mastar (iungere); cum copiīs: birliktelik ablativusu.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Prīmus rēx dīvitiās in mare iēcit, nam magnam īram et vim turbae timuit.</td>
        <td>iaciō, -ere, iēcī (fırlatmak); turba, -ae f. (kalabalık); vīs, vīs f. (güç)</td>
        <td class=""case-cell-tr"">İlk kral servetini denize attı, çünkü kalabalığın gücünden ve büyük öfkesinden korktu.</td>
        <td>iēcit: iaciō fiili Perfectum; in mare: yönelme accusativusu; timuit: timeō Perfectum.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Senēs in gente nostrā ab fīliīs numquam neglegēbantur.</td>
        <td>gens, gentis f. (soy, ulus); neglegō, -ere (ihmal etmek); senex, senis m. (yaşlı)</td>
        <td class=""case-cell-tr"">Yaşlılar bizim ulusumuzda oğulları tarafından asla ihmal edilmiyorlardı.</td>
        <td>ab fīliīs: Ablativus Auctoris (fail); neglegēbantur: Imperfectum Passivi 3. çoğul.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Omnia genera servitūtis nōbīs videntur aspera.</td>
        <td>servitūs, -ūtis f. (kölelik); asper, -era, -erum (sert, acımasız); videor (görünmek)</td>
        <td class=""case-cell-tr"">Köleliğin bütün türleri bize acımasız görünür.</td>
        <td>videntur: videor (görünmek); nōbīs: Dativus (bize); aspera: Nom. Pl. n. tamamlayıcı.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Ille poēta in tertiō libellō saturārum scrīpsit dē hominibus avārīs.</td>
        <td>libellus, -ī m. (kitapçık); satura, -ae f. (hiciv şiiri); avārus, -a, -um (açgözlü)</td>
        <td class=""case-cell-tr"">O şair, satura'larının üçüncü kitabında aç gözlü insanlar hakkında yazdı.</td>
        <td>dē + abl. (hakkında); in tertiō libellō: bulunma ablativusu.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Tēcum novem ex aliīs miserīs ad Caesarem crās trahent.</td>
        <td>trahō, -ere (götürmek, çekmek); crās: yarın; miser, -era, -erum (zavallı)</td>
        <td class=""case-cell-tr"">Diğer zavallı kişilerden dokuzunu seninle birlikte yarın Caesar'a götürecekler.</td>
        <td>trahent: Futurum 3. çoğul etken; tēcum = cum tē (seninle birlikte).</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Tēcum novem ex aliīs miserīs ad Caesarem crās trahentur.</td>
        <td>trahor, trahī (götürülmek, çekilmek)</td>
        <td class=""case-cell-tr"">Diğer zavallı kişilerden dokuzu seninle birlikte yarın Caesar'a götürülecek.</td>
        <td>trahentur: Futurum 3. çoğul edilgen; novem: cümlenin öznesi olmuştur.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">In familiā eōrum erant duae fīliae atque quattuor fīliī.</td>
        <td>familia, -ae f. (aile); atque: ve, dahası</td>
        <td class=""case-cell-tr"">Onların ailesinde iki kız evlat ve dört erkek evlat vardı.</td>
        <td>erant: sum fiili Imperfectum 3. çoğul; duae fīliae: dişil sayı tamlaması.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">At senectūtis bonae causā iam bene vīvere dēbēmus.</td>
        <td>senectūs, -ūtis f. (yaşlılık); causā (+ gen.): uğruna, için</td>
        <td class=""case-cell-tr"">İyi bir yaşlılık için şu an iyi bir şekilde yaşamamız gerekir.</td>
        <td>causā kelimesi tek başına ablativustur ve kendisinden önceki genetivus ile birleşerek 'uğruna, için' anlamı verir.</td>
      </tr>
    </tbody>
  </table>
</div>"
            });

            f.studyTips = "causā kelimesi yalın ablativus halinde olup kendisinden önce gelen Genetivus bir kelimeyle (senectūtis bonae causā) '... uğruna / ... için' yapısı kurar.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W13_L2: Latince Gramer 2 - Ders Sunumu 13.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 13, 2, "Latince Gramer 2 - Ders Sunumu 13.2.pdf",
                "EDİLGEN GEÇMİŞ ZAMANLAR VE MASTARLAR SİSTEMİ",
                "Perfectum, Plusquamperfectum ve Futurum Exactum Passivi; 6 Zaman Mastar Tablosu",
                "Bu fasikülde Latince fiil sisteminde Supinum gövdesinden türetilen Geçmiş Zaman Edilgen Sıfat-Fiilini (Participium Perfectum Passivi - PPP), esse fiiliyle kurulan birleşik geçmiş zamanları (amātus sum, amātus eram, amātus erō) ve Latincedeki 6 zamanlı mastar (Infinitivus) sisteminin tamamını öğreneceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "Participium Perfectum Passivi (PPP: -tus, -ta, -tum)", "Perfectum Passivi (amātus sum...)",
                "Plusquamperfectum Passivi (amātus eram...)", "Futurum Exactum Passivi (amātus erō...)",
                "5 Fiil Grubunun Edilgen Geçmiş Zaman Mukayesesi", "Özne ile Cins ve Sayı Uyumu (amātus / amāta / amātī)",
                "Latincede 6 Mastar (Infinitivus) Sistemi", "Etken ve Edilgen Mastar Matrisi"
            });
            f.vocabKeys.AddRange(new[] {
                "amatus", "monitus", "lectus", "auditus", "captus", "suscipio", "prospicio",
                "perspicio", "pario", "laudavisse", "laudaturus", "laudatum iri"
            });

            // Section 1: Perfectum Passivi (amātus sum)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Edilgen Geçmiş Zaman (Perfectum Passivi) (Slayt 2-11)",
                html = @"<p>Latincede geçmiş zamanların edilgen çekimi birleşiktir: <strong>Participium Perfectum Passivi (PPP) + esse fiilinin şimdiki zamanı (sum, es, est...)</strong>:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "amō (1. Grup)", "amō", "amāre", "sevmek", "Perfectum Passivi",
                    "amātus, -a, -um sum", "amātus, -a, -um es", "amātus, -a, -um est", "amātī, -ae, -a sumus", "amātī, -ae, -a estis", "amātī, -ae, -a sunt",
                    "sevildim / sevilmişim", "sevildin / sevilmişsin", "sevildi / sevilmiş", "sevildik / sevilmişiz", "sevildiniz / sevilmişsiniz", "sevildiler / sevilmişler",
                    "PPP parçası öznenin cinsine (eril/dişil/nötr) ve sayısına harfiyen uyar."
                ) + "<br>" + TableTemplates.VerbTable(
                    "moneō (2. Grup)", "moneō", "monēre", "uyarmak", "Perfectum Passivi",
                    "monitus, -a, -um sum", "monitus, -a, -um es", "monitus, -a, -um est", "monitī, -ae, -a sumus", "monitī, -ae, -a estis", "monitī, -ae, -a sunt",
                    "uyarıldım / uyarılmışım", "uyarıldın / uyarılmışsın", "uyarıldı / uyarılmış", "uyarıldık / uyarılmışız", "uyarıldınız / uyarılmışsınız", "uyarıldılar / uyarılmışlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "legō (3. Grup)", "legō", "legere", "okumak", "Perfectum Passivi",
                    "lectus, -a, -um sum", "lectus, -a, -um es", "lectus, -a, -um est", "lectī, -ae, -a sumus", "lectī, -ae, -a estis", "lectī, -ae, -a sunt",
                    "okundum / okunmuşum", "okundun / okunmuşsun", "okundu / okunmuş", "okunduk / okunmuşuz", "okundunuz / okunmuşsunuz", "okundular / okunmuşlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "audiō (4. Grup)", "audiō", "audīre", "işitmek", "Perfectum Passivi",
                    "audītus, -a, -um sum", "audītus, -a, -um es", "audītus, -a, -um est", "audītī, -ae, -a sumus", "audītī, -ae, -a estis", "audītī, -ae, -a sunt",
                    "işitildim / işitilmişim", "işitildin / işitilmişsin", "işitildi / işitilmiş", "işitildik / işitilmişiz", "işitildiniz / işitilmişsiniz", "işitildiler / işitilmişler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "capiō (5. Grup)", "capiō", "capere", "ele geçirmek", "Perfectum Passivi",
                    "captus, -a, -um sum", "captus, -a, -um es", "captus, -a, -um est", "captī, -ae, -a sumus", "captī, -ae, -a estis", "captī, -ae, -a sunt",
                    "ele geçirildim / geçirilmişim", "ele geçirildin / geçirilmişsin", "ele geçirildi / geçirilmiş", "ele geçirildik / geçirilmişiz", "ele geçirildiniz / geçirilmişsiniz", "ele geçirildiler / geçirilmişler"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Bütün 5 Grubun Edilgen Geçmiş Zaman Mukayesesi (Slayt 11)", "Slayt 11",
                    new[] { "Şahıs", "1. Grp (amātus sum)", "2. Grp (monitus sum)", "3. Grp (lectus sum)", "4. Grp (audītus sum)", "5. Grp (captus sum)" },
                    new[] {
                        new[] { "1. Sg.", "amātus, -a, -um sum", "monitus, -a, -um sum", "lectus, -a, -um sum", "audītus, -a, -um sum", "captus, -a, -um sum" },
                        new[] { "2. Sg.", "amātus, -a, -um es", "monitus, -a, -um es", "lectus, -a, -um es", "audītus, -a, -um es", "captus, -a, -um es" },
                        new[] { "3. Sg.", "amātus, -a, -um est", "monitus, -a, -um est", "lectus, -a, -um est", "audītus, -a, -um est", "captus, -a, -um est" },
                        new[] { "1. Pl.", "amātī, -ae, -a sumus", "monitī, -ae, -a sumus", "lectī, -ae, -a sumus", "audītī, -ae, -a sumus", "captī, -ae, -a sumus" },
                        new[] { "2. Pl.", "amātī, -ae, -a estis", "monitī, -ae, -a estis", "lectī, -ae, -a estis", "audītī, -ae, -a estis", "captī, -ae, -a estis" },
                        new[] { "3. Pl.", "amātī, -ae, -a sunt", "monitī, -ae, -a sunt", "lectī, -ae, -a sunt", "audītī, -ae, -a sunt", "captī, -ae, -a sunt" }
                    }
                )
            });

            // Section 2: Plusquamperfectum Passivi (amātus eram)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Edilgen Geçmiş Hikâye Zamanı (Plusquamperfectum Passivi) (Slayt 15-22)",
                html = @"<p>Formül: <strong>PPP + esse fiilinin hikâyesi (eram, erās, erat, erāmus, erātis, erant)</strong>:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "amō (1. Grup)", "amō", "amāre", "sevmek", "Plusquamperfectum Passivi",
                    "amātus, -a, -um eram", "amātus, -a, -um erās", "amātus, -a, -um erat", "amātī, -ae, -a erāmus", "amātī, -ae, -a erātis", "amātī, -ae, -a erant",
                    "sevildiydim / sevilmiştim", "sevildiydin / sevilmiştin", "sevildiydi / sevilmişti", "sevildiydik / sevilmiştik", "sevildiydiniz / sevilmiştiniz", "sevildiydiler / sevilmişlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "moneō (2. Grup)", "moneō", "monēre", "uyarmak", "Plusquamperfectum Passivi",
                    "monitus, -a, -um eram", "monitus, -a, -um erās", "monitus, -a, -um erat", "monitī, -ae, -a erāmus", "monitī, -ae, -a erātis", "monitī, -ae, -a erant",
                    "uyarıldıydım / uyarılmıştım", "uyarıldıydın / uyarılmıştın", "uyarıldıydı / uyarılmıştı", "uyarıldıydık / uyarılmıştık", "uyarıldıydınız / uyarılmıştınız", "uyarıldıydılar / uyarılmışlardı"
                ) + "<br>" + TableTemplates.VerbTable(
                    "legō (3. Grup)", "legō", "legere", "okumak", "Plusquamperfectum Passivi",
                    "lectus, -a, -um eram", "lectus, -a, -um erās", "lectus, -a, -um erat", "lectī, -ae, -a erāmus", "lectī, -ae, -a erātis", "lectī, -ae, -a erant",
                    "okunduydum / okunmuştum", "okunduydun / okunmuştun", "okunduydu / okunmuştu", "okunduyduk / okunmuştuk", "okunduydunuz / okunmuştunuz", "okunduydular / okunmuşlardı"
                ) + "<br>" + TableTemplates.VerbTable(
                    "audiō (4. Grup)", "audiō", "audīre", "işitmek", "Plusquamperfectum Passivi",
                    "audītus, -a, -um eram", "audītus, -a, -um erās", "audītus, -a, -um erat", "audītī, -ae, -a erāmus", "audītī, -ae, -a erātis", "audītī, -ae, -a erant",
                    "işitildiydim / işitilmiştim", "işitildiydin / işitilmiştin", "işitildiydi / işitilmişti", "işitildiydik / işitilmiştik", "işitildiydiniz / işitilmiştiniz", "işitildiydiler / işitilmişlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "capiō (5. Grup)", "capiō", "capere", "ele geçirmek", "Plusquamperfectum Passivi",
                    "captus, -a, -um eram", "captus, -a, -um erās", "captus, -a, -um erat", "captī, -ae, -a erāmus", "captī, -ae, -a erātis", "captī, -ae, -a erant",
                    "ele geçirildiydim / geçirilmiştim", "ele geçirildiydin / geçirilmiştin", "ele geçirildiydi / geçirilmişti", "ele geçirildiydik / geçirilmiştik", "ele geçirildiydiniz / geçirilmiştiniz", "ele geçirildiydiler / geçirilmişlerdi"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Bütün 5 Grubun Edilgen Geçmiş Hikâye Zaman Mukayesesi (Slayt 22)", "Slayt 22",
                    new[] { "Şahıs", "1. Grp (amātus eram)", "2. Grp (monitus eram)", "3. Grp (lectus eram)", "4. Grp (audītus eram)", "5. Grp (captus eram)" },
                    new[] {
                        new[] { "1. Sg.", "amātus, -a, -um eram", "monitus, -a, -um eram", "lectus, -a, -um eram", "audītus, -a, -um eram", "captus, -a, -um eram" },
                        new[] { "2. Sg.", "amātus, -a, -um erās", "monitus, -a, -um erās", "lectus, -a, -um erās", "audītus, -a, -um erās", "captus, -a, -um erās" },
                        new[] { "3. Sg.", "amātus, -a, -um erat", "monitus, -a, -um erat", "lectus, -a, -um erat", "audītus, -a, -um erat", "captus, -a, -um erat" },
                        new[] { "1. Pl.", "amātī, -ae, -a erāmus", "monitī, -ae, -a erāmus", "lectī, -ae, -a erāmus", "audītī, -ae, -a erāmus", "captī, -ae, -a erāmus" },
                        new[] { "2. Pl.", "amātī, -ae, -a erātis", "monitī, -ae, -a erātis", "lectī, -ae, -a erātis", "audītī, -ae, -a erātis", "captī, -ae, -a erātis" },
                        new[] { "3. Pl.", "amātī, -ae, -a erant", "monitī, -ae, -a erant", "lectī, -ae, -a erant", "audītī, -ae, -a erant", "captī, -ae, -a erant" }
                    }
                )
            });

            // Section 3: Futurum Exactum Passivi (amātus erō)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Edilgen Gelecekte Geçmiş Zaman (Futurum Exactum Passivi) (Slayt 26-33)",
                html = @"<p>Formül: <strong>PPP + esse fiilinin geleceği (erō, eris, erit, erimus, eritis, erunt)</strong>:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "amō (1. Grup)", "amō", "amāre", "sevmek", "Futurum Exactum Passivi",
                    "amātus, -a, -um erō", "amātus, -a, -um eris", "amātus, -a, -um erit", "amātī, -ae, -a erimus", "amātī, -ae, -a eritis", "amātī, -ae, -a erunt",
                    "sevilmiş olacağım", "sevilmiş olacaksın", "sevilmiş olacak", "sevilmiş olacağız", "sevilmiş olacaksınız", "sevilmiş olacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "moneō (2. Grup)", "moneō", "monēre", "uyarmak", "Futurum Exactum Passivi",
                    "monitus, -a, -um erō", "monitus, -a, -um eris", "monitus, -a, -um erit", "monitī, -ae, -a erimus", "monitī, -ae, -a eritis", "monitī, -ae, -a erunt",
                    "uyarılmış olacağım", "uyarılmış olacaksın", "uyarılmış olacak", "uyarılmış olacağız", "uyarılmış olacaksınız", "uyarılmış olacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "legō (3. Grup)", "legō", "legere", "okumak", "Futurum Exactum Passivi",
                    "lectus, -a, -um erō", "lectus, -a, -um eris", "lectus, -a, -um erit", "lectī, -ae, -a erimus", "lectī, -ae, -a eritis", "lectī, -ae, -a erunt",
                    "okunmuş olacağım", "okunmuş olacaksın", "okunmuş olacak", "okunmuş olacağız", "okunmuş olacaksınız", "okunmuş olacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "audiō (4. Grup)", "audiō", "audīre", "işitmek", "Futurum Exactum Passivi",
                    "audītus, -a, -um erō", "audītus, -a, -um eris", "audītus, -a, -um erit", "audītī, -ae, -a erimus", "audītī, -ae, -a eritis", "audītī, -ae, -a erunt",
                    "işitilmiş olacağım", "işitilmiş olacaksın", "işitilmiş olacak", "işitilmiş olacağız", "işitilmiş olacaksınız", "işitilmiş olacaklar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "capiō (5. Grup)", "capiō", "capere", "ele geçirmek", "Futurum Exactum Passivi",
                    "captus, -a, -um erō", "captus, -a, -um eris", "captus, -a, -um erit", "captī, -ae, -a erimus", "captī, -ae, -a eritis", "captī, -ae, -a erunt",
                    "ele geçirilmiş olacağım", "ele geçirilmiş olacaksın", "ele geçirilmiş olacak", "ele geçirilmiş olacağız", "ele geçirilmiş olacaksınız", "ele geçirilmiş olacaklar"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Bütün 5 Grubun Futurum Exactum Passivi Mukayesesi (Slayt 33)", "Slayt 33",
                    new[] { "Şahıs", "1. Grp (amātus erō)", "2. Grp (monitus erō)", "3. Grp (lectus erō)", "4. Grp (audītus erō)", "5. Grp (captus erō)" },
                    new[] {
                        new[] { "1. Sg.", "amātus, -a, -um erō", "monitus, -a, -um erō", "lectus, -a, -um erō", "audītus, -a, -um erō", "captus, -a, -um erō" },
                        new[] { "2. Sg.", "amātus, -a, -um eris", "monitus, -a, -um eris", "lectus, -a, -um eris", "audītus, -a, -um eris", "captus, -a, -um eris" },
                        new[] { "3. Sg.", "amātus, -a, -um erit", "monitus, -a, -um erit", "lectus, -a, -um erit", "audītus, -a, -um erit", "captus, -a, -um erit" },
                        new[] { "1. Pl.", "amātī, -ae, -a erimus", "monitī, -ae, -a erimus", "lectī, -ae, -a erimus", "audītī, -ae, -a erimus", "captī, -ae, -a erimus" },
                        new[] { "2. Pl.", "amātī, -ae, -a eritis", "monitī, -ae, -a eritis", "lectī, -ae, -a eritis", "audītī, -ae, -a eritis", "captī, -ae, -a eritis" },
                        new[] { "3. Pl.", "amātī, -ae, -a erunt", "monitī, -ae, -a erunt", "lectī, -ae, -a erunt", "audītī, -ae, -a erunt", "captī, -ae, -a erunt" }
                    }
                )
            });

            // Section 4: The 6 Infinitives System (Slides 37-40)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Latincede Altı Mastar (Infinitivus) Sistemi (Slayt 37-40)",
                html = @"<p>Latincede hem Etken hem Edilgen çatıda üçer zaman olmak üzere <strong>toplam 6 mastar</strong> bulunur:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead><tr><th>Zaman</th><th>Etken Çatı Mastarı (Activi)</th><th>Edilgen Çatı Mastarı (Passivi)</th></tr></thead>
    <tbody>
      <tr><td><strong>Praesens</strong></td><td>-āre / -ēre / -ere / -īre / -ere</td><td>-ārī / -ērī / -ī / -īrī / -ī</td></tr>
      <tr><td><strong>Perfectum</strong></td><td>Perfectum gövdesi + <strong>-isse</strong></td><td>Participium Perfectum Passivi + <strong>esse</strong></td></tr>
      <tr><td><strong>Futurum</strong></td><td>Participium Futurum Activi (-ūrus, -a, -um) + <strong>esse</strong></td><td>Supinum (-um) + <strong>īrī</strong></td></tr>
    </tbody>
  </table>
</div>",
                tableHtml = TableTemplates.ComparisonTable(
                    "5 Fiil Grubunun Etken Çatı Mastarları (Slayt 39)", "Slayt 39",
                    new[] { "Zaman", "1. Grp (laudō)", "2. Grp (moneō)", "3. Grp (legō)", "4. Grp (audiō)", "5. Grp (capiō)" },
                    new[] {
                        new[] { "Praesens", "laudāre<br><small class=\"case-cell-tr\">övmek</small>", "monēre<br><small class=\"case-cell-tr\">uyarmak</small>", "legere<br><small class=\"case-cell-tr\">okumak</small>", "audīre<br><small class=\"case-cell-tr\">işitmek</small>", "capere<br><small class=\"case-cell-tr\">almak</small>" },
                        new[] { "Perfectum", "laudāvisse<br><small class=\"case-cell-tr\">övmüş olmak</small>", "monuisse<br><small class=\"case-cell-tr\">uyarmış olmak</small>", "lēgisse<br><small class=\"case-cell-tr\">okumuş olmak</small>", "audīvisse<br><small class=\"case-cell-tr\">işitmiş olmak</small>", "cēpisse<br><small class=\"case-cell-tr\">ele geçirmiş olmak</small>" },
                        new[] { "Futurum", "laudātūrus, -a, -um esse<br><small class=\"case-cell-tr\">övecek olmak</small>", "monitūrus, -a, -um esse<br><small class=\"case-cell-tr\">uyaracak olmak</small>", "lectūrus, -a, -um esse<br><small class=\"case-cell-tr\">okuyacak olmak</small>", "audītūrus, -a, -um esse<br><small class=\"case-cell-tr\">işitecek olmak</small>", "captūrus, -a, -um esse<br><small class=\"case-cell-tr\">ele geçirecek olmak</small>" }
                    }
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "5 Fiil Grubunun Edilgen Çatı Mastarları (Slayt 40)", "Slayt 40",
                    new[] { "Zaman", "1. Grp (laudor)", "2. Grp (moneor)", "3. Grp (legor)", "4. Grp (audior)", "5. Grp (capior)" },
                    new[] {
                        new[] { "Praesens", "laudārī<br><small class=\"case-cell-tr\">övülmek</small>", "monērī<br><small class=\"case-cell-tr\">uyarılmak</small>", "legī<br><small class=\"case-cell-tr\">okunmak</small>", "audīrī<br><small class=\"case-cell-tr\">işitilmek</small>", "capī<br><small class=\"case-cell-tr\">alınmak</small>" },
                        new[] { "Perfectum", "laudātus, -a, -um esse<br><small class=\"case-cell-tr\">övülmüş olmak</small>", "monitus, -a, -um esse<br><small class=\"case-cell-tr\">uyarılmış olmak</small>", "lectus, -a, -um esse<br><small class=\"case-cell-tr\">okunmuş olmak</small>", "audītus, -a, -um esse<br><small class=\"case-cell-tr\">işitilmiş olmak</small>", "captus, -a, -um esse<br><small class=\"case-cell-tr\">ele geçirilmiş olmak</small>" },
                        new[] { "Futurum", "laudātum īrī<br><small class=\"case-cell-tr\">övülecek olmak</small>", "monitum īrī<br><small class=\"case-cell-tr\">uyarılacak olmak</small>", "lectum īrī<br><small class=\"case-cell-tr\">okunacak olmak</small>", "audītum īrī<br><small class=\"case-cell-tr\">işitilecek olmak</small>", "captum īrī<br><small class=\"case-cell-tr\">ele geçirilecek olmak</small>" }
                    },
                    "Edilgen Gelecek Zaman Mastarı (Futurum Passivi Infinitivus) Supinum (-um) + īrī formülüyle yapılır ve çekimsizdir."
                )
            });

            f.studyTips = "Edilgen geçmiş zamanlarda PPP parçasının özneye göre cins ve sayı değiştirdiğini unutmayınız: Puer monitus est (oğlan uyarıldı), puella monita est (kız uyarıldı), oppidum monitum est (kasaba uyarıldı).";
            list.Add(f);
        }

        // ====================================================================
        // T2_W14_L1: Latince Gramer 2 - Ders Sunumu 14.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 14, 1, "Latince Gramer 2 - Ders Sunumu 14.1.pdf",
                "İLGİ ZAMİRLERİ (PRONOMINA RELATIVA) VE SORU SIFATLARI",
                "qui, quae, quod Çekimi, Yan Cümle Kurulumu ve Soru Sıfatı Ayrımı",
                "Bu fasikülde Latince sözdiziminin en temel bağlayıcı unsurlarından olan İlgi Zamirlerini (Pronomina Relativa: quī, quae, quod), yan cümle (Yan Cümle) ile ana cümle ilişkisini (Antecedens kuralı), tekil ve çoğul çekim tablolarını ve Soru Sıfatlarıyla (Adiectiva Interrogativa) mukayesesini öğreneceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "Edilgen Cümle Sentaksı Sentezi", "İlgi Zamirleri (Pronomina Relativa: quī, quae, quod)",
                "Antecedens (Öncül Kelime) Kuralı", "Cins ve Sayı Uyumu vs Hal Belirlenmesi",
                "quī, quae, quod Singularis ve Pluralis Çekim Tabloları", "Model Yan Cümle Kurulumları (Slayt 13-25)",
                "Soru Sıfatları (Adiectiva Interrogativa: quī, quae, quod)", "Soru Sıfatı vs İlgi Zamiri Mukayesesi"
            });
            f.vocabKeys.AddRange(new[] {
                "qui", "quae", "quod", "cuius", "cui", "quem", "quam", "quo", "qua",
                "quorum", "quarum", "quibus", "quos", "quas", "vicinus", "fenestra", "casa",
                "diligo", "committo", "recito"
            });

            // Section 1: Review & Relative Pronouns Theory
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. İlgi Zamirinin Tanımı ve Temel Sentaks Kuralları (Slayt 6-10)",
                html = @"<p><strong>İlgi Zamiri (Pronomen Relativum),</strong> kendisinden önce gelen bir isme veya zamire (<span class=""lat-word"">antecēdēns</span>) atıfta bulunarak bir <strong>Yan Cümle</strong> başlatır ve onu Ana Cümleye bağlayarak bir <em>Bileşik Cümle</em> oluşturur.</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead><tr><th>Kural Parametresi</th><th>Nasıl Belirlenir?</th><th>Örnek Uygulama</th></tr></thead>
    <tbody>
      <tr><td><strong>Cins (Genus)</strong></td><td>Öncül ismin (antecedens) cinsini aynen alır.</td><td>vir (m.) &gt; <strong>quī</strong>; fēmina (f.) &gt; <strong>quae</strong>; bellum (n.) &gt; <strong>quod</strong></td></tr>
      <tr><td><strong>Sayı (Numerus)</strong></td><td>Öncül ismin (antecedens) sayısını aynen alır.</td><td>vir (tekil) &gt; <strong>quī</strong>; virī (çoğul) &gt; <strong>quī / quōs / quōrum</strong></td></tr>
      <tr><td><strong>Hal (Casus)</strong></td><td><strong>Öncül ismin halinden tamamen BAĞIMSIZDIR!</strong> İlgi zamirinin dahil olduğu Yan Cümledeki gramatikal işlevine (özne mi, nesne mi, tümleç mi) göre belirlenir.</td><td>Ego exspectō litterās [Acc. Pl. f.] <strong>quās</strong> [Acc. Pl. f. - nesne] tū scrīpsistī.<br>Femina [Nom. Sg. f.] <strong>quam</strong> [Acc. Sg. f. - nesne] laudās est docta.</td></tr>
    </tbody>
  </table>
</div>",
                calloutType = "rule",
                calloutTitle = "Yüklem Kuralı (Slayt 10)",
                calloutText = "İlgi zamiri bir yan cümle kurduğu için kendisinden sonra mutlaka ÇEKİMLİ BİR FİİLİ yüklem olarak alır: quae ex Italiā vēnit; dē quō dīcēbās."
            });

            // Section 2: Relative Pronoun Tables
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. İlgi Zamiri (quī, quae, quod) Çekim Tabloları (Slayt 8-9)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı'nın ders notlarındaki tekil ve çoğul paradigmalar:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "quī, quae, quod (İlgi Zamiri)", "ki o / ki onu / ki onun...",
                    "quī", "quae", "quod",
                    "—", "—", "—",
                    "cuius", "cuius", "cuius",
                    "cui", "cui", "cui",
                    "quem", "quam", "quod",
                    "quō", "quā", "quō",
                    "ki o", "ki onun", "ki ona", "ki onu", "ki onunla / ondan",
                    "Singularis (Tekil)"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "quī, quae, quod (İlgi Zamiri)", "ki onlar / ki onları / ki onların...",
                    "quī", "quae", "quae",
                    "—", "—", "—",
                    "quōrum", "quārum", "quōrum",
                    "quibus", "quibus", "quibus",
                    "quōs", "quās", "quae",
                    "quibus", "quibus", "quibus",
                    "ki onlar", "ki onların", "ki onlara", "ki onları", "ki onlarla / onlardan",
                    "Pluralis (Çoğul)"
                )
            });

            // Section 3: Model Relative Sentences
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. İlgi Yan Cümlesi Modelleri ve Çözümlemeleri (Slayt 13-25)",
                html = @"<p>Slayt 13-25 boyunca işlenen zengin klasik cümle dizisi:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead><tr><th>Latince Cümle</th><th>Ana Cümle vs Yan Cümle</th><th>Kelimesi Kelimesine Çeviri</th><th>Edebi Türkçe Tercüme (Eyüp Hoca)</th></tr></thead>
    <tbody>
      <tr>
        <td class=""case-cell-latin"">Ego exspectō litterās quās tū scrīpsistī.</td>
        <td>Ana: Ego exspectō litterās<br>Yan: quās tū scrīpsistī</td>
        <td>Ben mektupları bekliyorum, ki onları sen yazdın.</td>
        <td class=""case-cell-tr"">Ben, senin yazdığın mektupları bekliyorum.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Fēmina quam laudās est docta.</td>
        <td>Ana: Fēmina est docta<br>Yan: quam laudās</td>
        <td>Kadın, ki onu övüyorsun, bilgilidir.</td>
        <td class=""case-cell-tr"">Övdüğün kadın bilgilidir.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Dīligō puellam quae ex Italiā vēnit.</td>
        <td>Ana: Dīligō puellam<br>Yan: quae ex Italiā vēnit</td>
        <td>Kıza değer veriyorum, ki o İtalya'dan geldi.</td>
        <td class=""case-cell-tr"">İtalya'dan gelen kıza değer veriyorum.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Homō dē quō dīcēbās est amīcus cārus.</td>
        <td>Ana: Homō est amīcus cārus<br>Yan: dē quō dīcēbās</td>
        <td>İnsan, ki onun hakkında konuşuyordun, değerli bir dosttur.</td>
        <td class=""case-cell-tr"">Hakkında konuştuğun insan değerli bir dosttur.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Puella cui librum dat est fortūnāta.</td>
        <td>Ana: Puella est fortūnāta<br>Yan: cui librum dat</td>
        <td>Kız, ki ona o kişi kitabı veriyor, talihlidir.</td>
        <td class=""case-cell-tr"">O kişinin kendisine kitap verdiği kız talihlidir.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Puer cuius patrem iuvābāmus est fortis.</td>
        <td>Ana: Puer est fortis<br>Yan: cuius patrem iuvābāmus</td>
        <td>Çocuk, ki onun babasına yardım ediyorduk, cesurdur.</td>
        <td class=""case-cell-tr"">Babasına yardım ettiğimiz çocuk cesurdur.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Vītam meam committam eīs virīs quōrum virtūtēs laudābās.</td>
        <td>Ana: Vītam meam committam eīs virīs<br>Yan: quōrum virtūtēs laudābās</td>
        <td>Yaşamımı o adamlara emanet edeceğim, ki sen onların erdemlerini övüyordun.</td>
        <td class=""case-cell-tr"">Erdemlerini övdüğün adamlara yaşamımı emanet edeceğim.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Timeō īdem perīculum quod timētis.</td>
        <td>Ana: Timeō īdem perīculum<br>Yan: quod timētis</td>
        <td>Aynı tehlikeden korkuyorum, ki ondan siz korkuyorsunuz.</td>
        <td class=""case-cell-tr"">Sizin korktuğunuz tehlikenin aynısından korkuyorum.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Incipimus vēritātem intellegere, quae mentēs nostrās semper regere dēbet et sine quā valēre nōn possumus.</td>
        <td>Ana: Incipimus vēritātem intellegere<br>Yan: quae... et sine quā...</td>
        <td>Hakikati idrak etmeye başlıyoruz, ki o hakikat her zaman zihinlerimizi yönetmelidir ve o olmadan güçlü olamayız.</td>
        <td class=""case-cell-tr"">Her zaman zihinlerimizi yönetmesi gereken ve kendisi olmadan güçlü olamayacağımız hakikati idrak etmeye başlıyoruz.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Puer mātrem timēbat, quae eum saepe neglegēbat.</td>
        <td>Ana: Puer mātrem timēbat<br>Yan: quae eum saepe neglegēbat</td>
        <td>Çocuk annesinden korkuyordu, ki o onu sık sık ihmal ediyordu.</td>
        <td class=""case-cell-tr"">Çocuk kendisini sık sık ihmal eden annesinden korkuyordu.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Multī audītōrēs saturās ācrēs timēbant, quās poēta recitābat.</td>
        <td>Ana: Multī audītōrēs saturās ācrēs timēbant<br>Yan: quās poēta recitābat</td>
        <td>Pek çok dinleyici keskin yergilerden korkuyordu, ki onları şair ezberden okuyordu.</td>
        <td class=""case-cell-tr"">Şairin ezberden okuduğu acımasız yergilerden pek çok dinleyici korkuyordu.</td>
      </tr>
      <tr>
        <td class=""case-cell-latin"">Bis vincit, quī sē vincit in victōriā.</td>
        <td>Özdeyiş</td>
        <td>İki defa mağlup eder, ki o kişi zaferde kendini mağlup eder.</td>
        <td class=""case-cell-tr"">Zaferde kendini mağlup eden kişi, iki defa mağlup eder.</td>
      </tr>
    </tbody>
  </table>
</div>"
            });

            // Section 4: Interrogative Adjectives (Slides 26-30)
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Soru Sıfatları (Adiectiva Interrogativa: quī, quae, quod) (Slayt 26-30)",
                html = @"<p><strong>Soru Sıfatları,</strong> biçimce İlgi Zamirleriyle (quī, quae, quod) tamamen aynıdır. Ancak bir ismin önüne gelerek soru cümlesi yapar ve <em>'Hangi?'</em> (hangi adam, hangi kadın, hangi şey) sorusunun cevabıdır:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Soru Sıfatı (quī, quae, quod) ve İlgi Zamiri Karşılaştırmalı Örnekleri (Slayt 29-30)", "Slayt 29-30",
                    new[] { "Tür", "Örnek Cümle", "Türkçe Anlamı", "İşlev Ayrımı" },
                    new[] {
                        new[] { "Soru Sıfatı", "Quī mīles vīdit canem?", "Hangi asker köpeği gördü?", "mīles ismini niteleyen soru sıfatıdır." },
                        new[] { "İlgi Zamiri", "Mīles quī vīdit canem est fortis.", "Köpeği gören asker cesurdur.", "mīles kelimesine atıf yapan ilgi zamiridir." },
                        new[] { "Soru Sıfatı", "Quam puellam Marcus amat?", "Marcus hangi kızı seviyor?", "puellam ismini niteleyen soru sıfatıdır." },
                        new[] { "İlgi Zamiri", "Puella quam Marcus amat pulchra est.", "Marcus'un sevdiği kız güzeldir.", "puella ismini açıklayan ilgi zamiridir." },
                        new[] { "Soru Sıfatı", "Quem librum legis?", "Hangi kitabı okuyorsun?", "librum ismini niteleyen soru sıfatıdır." },
                        new[] { "İlgi Zamiri", "Liber quem legis est meus.", "Okuduğun kitap bana aittir.", "liber ismini açıklayan ilgi zamiridir." },
                        new[] { "Soru Sıfatı", "Quae fēmina illum librum legit?", "Hangi kadın o kitabı okuyor?", "fēmina ismini niteleyen soru sıfatıdır." },
                        new[] { "İlgi Zamiri", "Fēmina quam vidēs est uxor consulis.", "Gördüğün kadın konsülün karısıdır.", "fēmina ismini açıklayan ilgi zamiridir." }
                    }
                )
            });

            f.studyTips = "İlgi zamiri ile soru sıfatının yazılışları aynıdır (quī, quae, quod). Ayırt etmenin yolu: soru sıfatı yanında mutlaka bir isimle birlikte soru cümlesinde kullanılır (Quī mīles? Quem librum?), ilgi zamiri ise bir yan cümle kurar.";
            list.Add(f);
        }

        // ====================================================================
        // T2_W14_L2: Latince Gramer 2 - Ders Sunumu 14.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(2, 14, 2, "Latince Gramer 2 - Ders Sunumu 14.2.pdf",
                "SORU ZAMİRLERİ (QUIS, QUID), ABLATIVUS İŞLEVLERİ VE MÜFREDAT FİNALİ",
                "Pronomina Interrogativa, Ablativus (Araç, Tarz, Birliktelik, Zaman) ve Büyük İskender Metni",
                "Bu fasikülde 1. sınıf müfredatının zirvesini teşkil eden Soru Zamirlerini (quis? = kim?, quid? = ne?), soru sıfatı ve ilgi zamiriyle üçlü mukayesesini, Ablativus halinin 4 büyük sentaktik işlevini (Araç, Tarz, Birliktelik, Zaman), Seneca, Phaedrus ve Terentius alıntılarını ve Büyük İskender ile Akhilleus'un Mezarını anlatan dönem sonu final metnini öğreneceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] {
                "Soru Zamirleri (quis?, quid?)", "quis ve quid Singularis ve Pluralis Çekim Tabloları",
                "Üçlü Mukayese: Soru Zamiri vs Soru Sıfatı vs İlgi Zamiri",
                "Klasik Edebiyat Sentaksı (Terentius, Seneca, Phaedrus, Genesis)",
                "Ablatīvus Instrumentī (Yalın: Araç ve Vasıta)", "Ablatīvus Sociātīvus (cum + abl.: Birliktelik)",
                "Ablatīvus Modālis (cum + abl.: Tarz ve Durum)", "Ablatīvus Temporis (Yalın: Zaman ve Süre)",
                "Final Metni: Alexander Magnus ante tumulum Achillis"
            });
            f.vocabKeys.AddRange(new[] {
                "quis", "quid", "cuius", "cui", "quem", "quo", "emendo", "sapiens", "recedo",
                "alo", "doctus", "stilo", "tumulus", "Achilles", "laudator", "Homerus", "vere",
                "Ilias", "obruo", "humanus", "sto"
            });

            // Section 1: Interrogative Pronouns Tables
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Soru Zamiri (quis?, quid?) Çekim Tabloları (Slayt 2-5)",
                html = @"<p><strong>Soru Zamirleri (Pronomina Interrogativa),</strong> soru cümlesi yaparken <em>'Kim?'</em> (<span class=""lat-word"">quis</span>) ve <em>'Ne?'</em> (<span class=""lat-word"">quid</span>) sorularını karşılar. Tekilde eril ve dişil aynı formu paylaşır; çoğulda ise ilgi zamiriyle tamamen aynıdır:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Soru Zamiri (quis?, quid?) Tekil ve Çoğul Çekim Tablosu (Slayt 4-5)", "Slayt 4-5",
                    new[] { "Casus (Hal)", "Tekil Eril / Dişil (Kim?)", "Tekil Nötr (Ne?)", "Çoğul Eril (Kimler?)", "Çoğul Dişil (Kimler?)", "Çoğul Nötr (Neler?)" },
                    new[] {
                        new[] { "Nominativus", "quis?", "quid?", "quī?", "quae?", "quae?" },
                        new[] { "Genetivus", "cuius?", "cuius?", "quōrum?", "quārum?", "quōrum?" },
                        new[] { "Dativus", "cui?", "cui?", "quibus?", "quibus?", "quibus?" },
                        new[] { "Accusativus", "quem?", "quid?", "quōs?", "quās?", "quae?" },
                        new[] { "Ablativus", "quō?", "quō?", "quibus?", "quibus?", "quibus?" }
                    }
                )
            });

            // Section 2: Three-Way Comparison
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. Soru Zamiri vs Soru Sıfatı vs İlgi Zamiri Üçlü Mukayesesi (Slayt 6-10)",
                html = @"<p>Slayt 6-10 boyunca sunulan üçlü ayrım kılavuzu:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead><tr><th>Casus & Durum</th><th>Soru Zamiri (Tek Başına)</th><th>Soru Sıfatı (İsimle Birlikte)</th><th>İlgi Zamiri (Yan Cümlede)</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Nom. (Kim? / Hangi?)</strong></td>
        <td class=""case-cell-latin"">Quis librum tibi dedit?<br><small class=""case-cell-tr"">Kitabı sana kim verdi?</small></td>
        <td class=""case-cell-latin"">Quem librum tibi dedit?<br><small class=""case-cell-tr"">O hangi kitabı sana verdi?</small></td>
        <td class=""case-cell-latin"">Vir quī librum tibi dedit tē laudāvit.<br><small class=""case-cell-tr"">Kitabı sana veren adam seni övdü.</small></td>
      </tr>
      <tr>
        <td><strong>Gen. (Kimin? / Hangi?)</strong></td>
        <td class=""case-cell-latin"">Cuius librum Cicero tibi dedit?<br><small class=""case-cell-tr"">Kimin kitabını Cicero sana verdi?</small></td>
        <td class=""case-cell-latin"">Cuius librī fuit Cicero auctor?<br><small class=""case-cell-tr"">Cicero hangi kitabın yazarıydı?</small></td>
        <td class=""case-cell-latin"">Vir cuius librum Cicero tibi dedit tē laudāvit.<br><small class=""case-cell-tr"">Cicero'nun kitabını sana verdiği adam seni övdü.</small></td>
      </tr>
      <tr>
        <td><strong>Dat. (Kime? / Hangi?)</strong></td>
        <td class=""case-cell-latin"">Cui librum Cicero dedit?<br><small class=""case-cell-tr"">Cicero kitabı kime verdi?</small></td>
        <td class=""case-cell-latin"">Cui amīcō librum dedistī?<br><small class=""case-cell-tr"">Kitabı hangi arkadaşa verdin?</small></td>
        <td class=""case-cell-latin"">Vir cui Cicero librum dedit tē laudāvit.<br><small class=""case-cell-tr"">Cicero'nun kitabı verdiği adam seni övdü.</small></td>
      </tr>
      <tr>
        <td><strong>Acc. Nötr (Ne? / Hangi?)</strong></td>
        <td class=""case-cell-latin"">Quid dedit?<br><small class=""case-cell-tr"">Ne verdi?</small></td>
        <td class=""case-cell-latin"">Quod praemium dedit?<br><small class=""case-cell-tr"">Hangi ödülü verdi?</small></td>
        <td class=""case-cell-latin"">Praemium quod dedit erat magnum.<br><small class=""case-cell-tr"">Verdiği ödül büyüktü.</small></td>
      </tr>
      <tr>
        <td><strong>Abl. (Kiminle? / Hangi?)</strong></td>
        <td class=""case-cell-latin"">Ā quō praemium datum est?<br><small class=""case-cell-tr"">Ödül kim tarafından verildi?</small></td>
        <td class=""case-cell-latin"">Quō praemiō ille mōtus est?<br><small class=""case-cell-tr"">Hangi ödülle o kişi harekete geçirildi?</small></td>
        <td class=""case-cell-latin"">Vir ā quō praemium datum est tē laudāvit.<br><small class=""case-cell-tr"">Kendisi tarafından ödül verilen adam seni övdü.</small></td>
      </tr>
    </tbody>
  </table>
</div>"
            });

            // Section 3: Classical Sentences
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Klasik Yazarlar Antolojisi (Slayt 11-20)",
                html = @"<p>Slayt 11-20 arasındaki seçkin klasik Latince cümleler:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead><tr><th>Latince Metin</th><th>Yazar / Eser</th><th>Türkçe Çevirisi (Eyüp Hoca)</th><th>Sentaks & Felsefi Not</th></tr></thead>
    <tbody>
      <tr><td class=""case-cell-latin"">Id sōlum est cārum mihi.</td><td>Terentius</td><td class=""case-cell-tr"">Bir tek o şey benim için değerlidir.</td><td>id: işaret zamiri; mihi: Dativus (benim için).</td></tr>
      <tr><td class=""case-cell-latin"">Bene est mihi quod tibi bene est.</td><td>Plinius</td><td class=""case-cell-tr"">Senin için iyi olan şey, benim için de iyidir.</td><td>Romalıların mektup açılışında kullandığı dostluk selamı.</td></tr>
      <tr><td class=""case-cell-latin"">Quid hī dē tē sentiunt?</td><td>Cicero</td><td class=""case-cell-tr"">Bu adamlar senin hakkında ne düşünüyorlar?</td><td>quid: soru zamiri nesne; dē tē: senin hakkında.</td></tr>
      <tr><td class=""case-cell-latin"">In prīncipiō Deus creāvit caelum et terram; et Deus creāvit hominem.</td><td>Genesis (Tekvin)</td><td class=""case-cell-tr"">Başlangıçta Tanrı yeri ve göğü yarattı; ve Tanrı insanı yarattı.</td><td>creāvit: Perfectum 3. tekil; caelum et terram: nesne.</td></tr>
      <tr><td class=""case-cell-latin"">Consulēs sē nec tēcum nec cum illīs aliīs iungēbant.</td><td>Klasik Cümle</td><td class=""case-cell-tr"">Konsüller kendilerini ne seninle ne de başka kişilerle birleştiriyorlardı.</td><td>nec... nec... (ne... ne de...); sē: dönüşlü zamir.</td></tr>
      <tr><td class=""case-cell-latin"">Hī Cicerōnem ipsum sēcum iunxērunt, nam eum semper dīlexerant.</td><td>Klasik Cümle</td><td class=""case-cell-tr"">Bu adamlar bizzat Cicero'yu kendileriyle birleştirdiler, çünkü ona her zaman değer vermişlerdi.</td><td>sēcum = cum sē; dīlexerant: Plusquamperfectum 3. çoğul.</td></tr>
      <tr><td class=""case-cell-latin"">Ex vitiō alterīus sapiēns ēmendat suum.</td><td>Publilius Syrus</td><td class=""case-cell-tr"">Bilge, başkasının kusurundan hareketle kendi kusurunu düzeltir.</td><td>alterīus: başkasının; suum: kendi kusurunu (vitiō anlaşılır).</td></tr>
      <tr><td class=""case-cell-latin"">Recēde in tē ipsum.</td><td>Seneca</td><td class=""case-cell-tr"">Kendine (kendi içine) çekil!</td><td>recēde: 2. tekil emir kipi; in tē ipsum: kendi bizzat içine.</td></tr>
      <tr><td class=""case-cell-latin"">Homō doctus in sē semper dīvitiās habet.</td><td>Phaedrus</td><td class=""case-cell-tr"">Bilgili insan servete her zaman kendi içinde sahiptir.</td><td>in sē: kendi içinde; dīvitiās: zenginlik (plurale tantum).</td></tr>
      <tr><td class=""case-cell-latin"">Animus sē ipse alit.</td><td>Seneca</td><td class=""case-cell-tr"">Zihin bizzat kendisini besler.</td><td>alō, -ere, aluī, altum (beslemek, büyütmek); sē ipse: bizzat kendisini.</td></tr>
    </tbody>
  </table>
</div>"
            });

            // Section 4: Functions of the Ablative
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Ablativus Halinin Dört Büyük Sentaktik İşlevi (Slayt 21-29)",
                html = @"<p>Latincede Ablativus hali tek başına veya edatlarla birleşerek şu <strong>4 temel işlevi</strong> görür:</p>
<div class=""inflection-table-wrapper"">
  <table class=""inflection-table"">
    <thead><tr><th>İşlev Türü</th><th>Edat Durumu</th><th>Cevap Verdiği Soru</th><th>Model Cümleler (Slayt 23, 25, 27, 29)</th><th>Türkçe Tercümesi (Eyüp Hoca)</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>1. Vasıta / Araç<br>(Ablatīvus Instrumentī)</strong></td>
        <td><strong>Edatsız</strong> (Yalın Abl.)</td>
        <td>Neyle? Hangi araçla?</td>
        <td class=""case-cell-latin"">
          Litterās stilō scrīpsit.<br>
          Cīvēs pecūniā vīcit.<br>
          Id meīs oculīs vīdī.<br>
          Suīs labōribus urbem conservāvit.
        </td>
        <td class=""case-cell-tr"">
          Mektubu kalemle yazdı.<br>
          Vatandaşları parayla ele geçirdi.<br>
          O şeyi gözlerimle gördüm.<br>
          Kenti kendi çabalarıyla kurtardı.
        </td>
      </tr>
      <tr>
        <td><strong>2. Birliktelik / Eşlik<br>(Ablatīvus Sociātīvus)</strong></td>
        <td><strong>cum</strong> (+ abl.)</td>
        <td>Kiminle? Kiminle birlikte?</td>
        <td class=""case-cell-latin"">
          Cum amīcīs vēnērunt.<br>
          Id cum eīs fēcit.
        </td>
        <td class=""case-cell-tr"">
          Arkadaşlarıyla birlikte geldiler.<br>
          O şeyi onlarla yaptı.
        </td>
      </tr>
      <tr>
        <td><strong>3. Tarz / Durum<br>(Ablatīvus Modālis)</strong></td>
        <td><strong>cum</strong> (+ abl.) veya sıfatlı yalın</td>
        <td>Nasıl? Ne şekilde?</td>
        <td class=""case-cell-latin"">
          Cum celeritāte vēnērunt.<br>
          Id cum virtūte fēcit.<br>
          Auribus teneō lupum. (Terentius)<br>
          Parva formīca onera magna ōre trahit. (Horatius)
        </td>
        <td class=""case-cell-tr"">
          Hızla / hızlıca geldiler.<br>
          O şeyi cesaretle yaptı.<br>
          Kurdu kulaklarından tutuyorum.<br>
          Küçük karınca koca yükü ağzıyla çekip götürdü.
        </td>
      </tr>
      <tr>
        <td><strong>4. Zaman / Süre<br>(Ablatīvus Temporis)</strong></td>
        <td><strong>Edatsız</strong> (Yalın Abl.)</td>
        <td>Ne zaman? Ne kadar sürede?</td>
        <td class=""case-cell-latin"">
          Eō tempore nōn poteram id facere.<br>
          Agricolae bonīs annīs valēbant.<br>
          Eōdem diē vēnērunt.<br>
          Paucīs hōrīs id faciet.<br>
          Aestāte lūdēbant.
        </td>
        <td class=""case-cell-tr"">
          O sıralar onu yapmayı başaramıyordum.<br>
          Çiftçiler iyi yıllarda refaha kavuşuyorlardı.<br>
          Aynı gün geldiler.<br>
          Birkaç saat içinde onu yapacak.<br>
          Yazın oyun oynuyorlardı.
        </td>
      </tr>
    </tbody>
  </table>
</div>"
            });

            // Section 5: Alexander Reading & Final Milestone
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "5. Okuma Parçası: Büyük İskender ve Akhilleus'un Mezarı (Slayt 30-32)",
                html = @"<p>1. ve 2. Dönem Latince Gramer müfredatının nihai okuma ve çözümleme parçası:</p>
<blockquote style=""background:rgba(212,168,83,0.08); border-left:4px solid var(--eyup-gold); padding:1rem 1.25rem; margin:1rem 0; border-radius:4px; font-style:italic;"">
  <p><strong>Latince Metin (Slayt 30):</strong><br>
  Magnus ille Alexander multōs scrīptōrēs factōrum suōrum sēcum semper habēbat. Is enim ante tumulum Achillis ōlim stetit et dīxit haec verba: <em>""Fuistī fortūnātus, ō adulēscēns, quod Homērum laudātōrem virtūtis tuae invēnistī.""</em> Et vērē! Nam, sine Īliade illā, īdem tumulus, et corpus eius, et nōmen obruere potuit. Nihil corpus hūmānum conservāre potest; sed litterae magnae nōmen virī magnī saepe conservāre possunt.</p>
</blockquote>
<p><strong>Bilinmeyen Kelimeler (Slayt 31):</strong></p>
<ul>
  <li><span class=""lat-word"">tumulus, -ī, m.</span>: mezar, höyük</li>
  <li><span class=""lat-word"">Achillēs, -lis, m.</span>: Akhilleus</li>
  <li><span class=""lat-word"">laudātor, -ōris, m.</span>: öven, methiyeci</li>
  <li><span class=""lat-word"">Homērus, -ī, m.</span>: Homeros</li>
  <li><span class=""lat-word"">vērē</span>, adv.: gerçekten, hakikaten</li>
  <li><span class=""lat-word"">Īlias, -adis, f.</span>: İlyada destanı</li>
  <li><span class=""lat-word"">obruō, -ere</span>: gömmek, üstünü örtmek, toprağa gömmek</li>
  <li><span class=""lat-word"">stō, stāre, stetī, statum</span>: durmak, dikilmek</li>
  <li><span class=""lat-word"">hūmānus, -a, -um</span>, adj.: insana ait, insani</li>
</ul>
<p><strong>Türkçe Çeviri (Slayt 32 - Eyüp Hoca):</strong></p>
<blockquote style=""background:rgba(255,255,255,0.04); border-left:4px solid #6b7280; padding:1rem 1.25rem; margin:1rem 0; border-radius:4px;"">
  <p>Meşhur Büyük İskender, her zaman kendi başarılarını yazacak pek çok yazarı kendisiyle birlikte bulunduruyordu. Günün birinde Akhilleus'un mezarı başında durdu ve şu sözleri söyledi: <em>""Talihliydin, ey delikanlı, çünkü senin erdeminin övücüsü olarak Homeros'u buldun.""</em> Gerçekten de öyle! Çünkü meşhur İlyada olmasa, aynı mezar ve onun cesedi ve adı toprakların altında kalabilirdi. İnsana ait hiçbir bedeni korumak mümkün değildir; ama büyük edebi eserler, büyük bir adamın adını koruyabilir.</p>
</blockquote>",
                calloutType = "info",
                calloutTitle = "Filolojik Başarı Tebriği",
                calloutText = "Tebrikler! Doç. Dr. Eyüp Çoraklı'nın 1. ve 2. Dönem Latince Gramer müfredatının 46 derslik tam dijital fasikül serisini başarıyla tamamladınız! Artık klasik Latin edebiyatının metinlerini, felsefi ve tarihi kaynaklarını aslından okuyabilecek ve çözümleyebilecek sağlam bir filolojik temele sahipsiniz."
            });

            f.studyTips = "Son cümledeki felsefi dersi zihninize kazıyınız: 'Nihil corpus humanum conservare potest; sed litterae magnae nomen viri magni saepe conservare possunt.' (İnsana ait hiçbir bedeni korumak mümkün değildir; ama büyük edebi eserler, büyük bir adamın adını koruyabilir.)";
            list.Add(f);
        }
    }
}
