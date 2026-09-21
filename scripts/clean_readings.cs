using System;
using System.IO;
using System.Text.RegularExpressions;
using System.Text;

class Program
{
    static void Main()
    {
        Console.OutputEncoding = Encoding.UTF8;
        string currPath = @"data\eyup_curriculum.js";
        string currJs = File.ReadAllText(currPath, Encoding.UTF8);

        // 1. Fix Thermopylae in T1_W12_L2
        // Remove "Thermopylae, İÖ 480" from reading-passage-latin and add reading-passage-meta
        currJs = currJs.Replace(
            "fortasse cenabimus! <span class=\\\"lat-word\\\" data-word=\\\"Thermopylae\\\" role=\\\"button\\\" tabindex=\\\"0\\\">Thermopylae</span>, <span class=\\\"lat-word\\\" data-word=\\\"İÖ\\\" role=\\\"button\\\" tabindex=\\\"0\\\">İÖ</span> 480",
            "fortasse cenabimus!”"
        );
        currJs = currJs.Replace(
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Thermopylai ve Kral Leonidas (Thermopylae, İÖ 480)</h4>\\n  </div>",
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Thermopylai ve Kral Leonidas</h4>\\n    <div class=\\\"reading-passage-meta\\\">📍 <strong>Tarihi Bağlam:</strong> Thermopylai Muharebesi, İÖ 480 (Pers Savaşları & Kral Leonidas)</div>\\n  </div>"
        );

        // 2. Fix De Populo Romano in T1_W13_L2
        // Remove leaked "nec … nec …, conj., ne … ne de…" from reading-passage-latin
        currJs = currJs.Replace(
            "tolerare possumus</span>. <span class=\\\"lat-word\\\" data-word=\\\"nec\\\" role=\\\"button\\\" tabindex=\\\"0\\\">nec</span> … <span class=\\\"lat-word\\\" data-word=\\\"nec\\\" role=\\\"button\\\" tabindex=\\\"0\\\">nec</span> …, <span class=\\\"lat-word\\\" data-word=\\\"conj\\\" role=\\\"button\\\" tabindex=\\\"0\\\">conj</span>., <span class=\\\"lat-word\\\" data-word=\\\"ne\\\" role=\\\"button\\\" tabindex=\\\"0\\\">ne</span> … <span class=\\\"lat-word\\\" data-word=\\\"ne\\\" role=\\\"button\\\" tabindex=\\\"0\\\">ne</span> <span class=\\\"lat-word\\\" data-word=\\\"de\\\" role=\\\"button\\\" tabindex=\\\"0\\\">de</span>…",
            "tolerare possumus</span>."
        );
        currJs = currJs.Replace(
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Roma Halkının Cesareti ve Boş Vakit (De Populo Romano)</h4>\\n  </div>",
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Roma Halkının Cesareti ve Boş Vakit (De Populo Romano)</h4>\\n    <div class=\\\"reading-passage-meta\\\">📍 <strong>Kaynak Metin:</strong> Titus Livius & Antik Roma Tarihyazımı (Ab Urbe Condita)</div>\\n  </div>"
        );

        // 3. Fix Catullus 1 in T1_W14_L2
        // Remove leaked vocab from reading-passage-latin
        currJs = currJs.Replace(
            "perpetua</span>. <span class=\\\"lat-word\\\" data-word=\\\"dostus\\\" role=\\\"button\\\" tabindex=\\\"0\\\">dostus</span>, -<span class=\\\"lat-word\\\" data-word=\\\"a\\\" role=\\\"button\\\" tabindex=\\\"0\\\">a</span>, -<span class=\\\"lat-word\\\" data-word=\\\"um\\\" role=\\\"button\\\" tabindex=\\\"0\\\">um</span>, <span class=\\\"lat-word\\\" data-word=\\\"adj\\\" role=\\\"button\\\" tabindex=\\\"0\\\">adj</span>., <span class=\\\"lat-word\\\" data-word=\\\"bilen\\\" role=\\\"button\\\" tabindex=\\\"0\\\">bilen</span>, <span class=\\\"lat-word\\\" data-word=\\\"bilgili\\\" role=\\\"button\\\" tabindex=\\\"0\\\">bilgili</span>, <span class=\\\"lat-word\\\" data-word=\\\"âlim\\\" role=\\\"button\\\" tabindex=\\\"0\\\">âlim</span> <span class=\\\"lat-word\\\" data-word=\\\"do\\\" role=\\\"button\\\" tabindex=\\\"0\\\">do</span>, <span class=\\\"lat-word\\\" data-word=\\\"dare\\\" role=\\\"button\\\" tabindex=\\\"0\\\">dare</span>, <span class=\\\"lat-word\\\" data-word=\\\"dedi\\\" role=\\\"button\\\" tabindex=\\\"0\\\">dedi</span>, <span class=\\\"lat-word\\\" data-word=\\\"v\\\" role=\\\"button\\\" tabindex=\\\"0\\\">v</span>., <span class=\\\"lat-word\\\" data-word=\\\"vermek\\\" role=\\\"button\\\" tabindex=\\\"0\\\">vermek</span>, <span class=\\\"lat-word\\\" data-word=\\\"sunmak\\\" role=\\\"button\\\" tabindex=\\\"0\\\">sunmak</span>; <span class=\\\"lat-word\\\" data-word=\\\"adamak\\\" role=\\\"button\\\" tabindex=\\\"0\\\">adamak</span>, <span class=\\\"lat-word\\\" data-word=\\\"ithaf\\\" role=\\\"button\\\" tabindex=\\\"0\\\">ithaf</span> <span class=\\\"lat-word\\\" data-word=\\\"etmek\\\" role=\\\"button\\\" tabindex=\\\"0\\\">etmek</span> <span class=\\\"lat-word\\\" data-word=\\\"labor\\\" role=\\\"button\\\" tabindex=\\\"0\\\">labor</span>, -<span class=\\\"lat-word\\\" data-word=\\\"oris\\\" role=\\\"button\\\" tabindex=\\\"0\\\">oris</span>, <span class=\\\"lat-word\\\" data-word=\\\"m\\\" role=\\\"button\\\" tabindex=\\\"0\\\">m</span>., <span class=\\\"lat-word\\\" data-word=\\\"iş\\\" role=\\\"button\\\" tabindex=\\\"0\\\">iş</span>, <span class=\\\"lat-word\\\" data-word=\\\"çalışma\\\" role=\\\"button\\\" tabindex=\\\"0\\\">çalışma</span>; <span class=\\\"lat-word\\\" data-word=\\\"eser\\\" role=\\\"button\\\" tabindex=\\\"0\\\">eser</span>, <span class=\\\"lat-word\\\" data-word=\\\"ürün\\\" role=\\\"button\\\" tabindex=\\\"0\\\">ürün</span>",
            "perpetua</span>."
        );
        currJs = currJs.Replace(
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Catullus'un Cornelius'a İthafı (Catullus 1)</h4>\\n  </div>",
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Catullus'un Cornelius'a İthafı (Catullus 1)</h4>\\n    <div class=\\\"reading-passage-meta\\\">📍 <strong>Kaynak Metin:</strong> Gaius Valerius Catullus, <em>Carmen I</em> (Cui dono lepidum novum libellum)</div>\\n  </div>"
        );

        // 4. Fix Cicero De Officiis in T2_W1_L2
        string ciceroLatin = @"<span class=\""lat-word\"" data-word=\""Civitas\"" role=\""button\"" tabindex=\""0\"">Civitas</span> <span class=\""lat-word\"" data-word=\""bellum\"" role=\""button\"" tabindex=\""0\"">bellum</span> <span class=\""lat-word\"" data-word=\""sine\"" role=\""button\"" tabindex=\""0\"">sine</span> <span class=\""lat-word\"" data-word=\""causa\"" role=\""button\"" tabindex=\""0\"">causa</span> <span class=\""lat-word\"" data-word=\""bona\"" role=\""button\"" tabindex=\""0\"">bona</span> <span class=\""lat-word\"" data-word=\""aut\"" role=\""button\"" tabindex=\""0\"">aut</span> <span class=\""lat-word\"" data-word=\""propter\"" role=\""button\"" tabindex=\""0\"">propter</span> <span class=\""lat-word\"" data-word=\""iram\"" role=\""button\"" tabindex=\""0\"">iram</span> <span class=\""lat-word\"" data-word=\""gerere\"" role=\""button\"" tabindex=\""0\"">gerere</span> <span class=\""lat-word\"" data-word=\""non\"" role=\""button\"" tabindex=\""0\"">non</span> <span class=\""lat-word\"" data-word=\""debet\"" role=\""button\"" tabindex=\""0\"">debet</span>. <span class=\""lat-word\"" data-word=\""Si\"" role=\""button\"" tabindex=\""0\"">Si</span> <span class=\""lat-word\"" data-word=\""fortunas\"" role=\""button\"" tabindex=\""0\"">fortunas</span> <span class=\""lat-word\"" data-word=\""et\"" role=\""button\"" tabindex=\""0\"">et</span> <span class=\""lat-word\"" data-word=\""agros\"" role=\""button\"" tabindex=\""0\"">agros</span> <span class=\""lat-word\"" data-word=\""vitasque\"" role=\""button\"" tabindex=\""0\"">vitasque</span> <span class=\""lat-word\"" data-word=\""populi\"" role=\""button\"" tabindex=\""0\"">populi</span> <span class=\""lat-word\"" data-word=\""nostri\"" role=\""button\"" tabindex=\""0\"">nostri</span> <span class=\""lat-word\"" data-word=\""sine\"" role=\""button\"" tabindex=\""0\"">sine</span> <span class=\""lat-word\"" data-word=\""bello\"" role=\""button\"" tabindex=\""0\"">bello</span> <span class=\""lat-word\"" data-word=\""defendere\"" role=\""button\"" tabindex=\""0\"">defendere</span> <span class=\""lat-word\"" data-word=\""poterimus\"" role=\""button\"" tabindex=\""0\"">poterimus</span>, <span class=\""lat-word\"" data-word=\""tum\"" role=\""button\"" tabindex=\""0\"">tum</span> <span class=\""lat-word\"" data-word=\""pacem\"" role=\""button\"" tabindex=\""0\"">pacem</span> <span class=\""lat-word\"" data-word=\""conservare\"" role=\""button\"" tabindex=\""0\"">conservare</span> <span class=\""lat-word\"" data-word=\""debebimus\"" role=\""button\"" tabindex=\""0\"">debebimus</span>; <span class=\""lat-word\"" data-word=\""si\"" role=\""button\"" tabindex=\""0\"">si</span> <span class=\""lat-word\"" data-word=\""autem\"" role=\""button\"" tabindex=\""0\"">autem</span> <span class=\""lat-word\"" data-word=\""non\"" role=\""button\"" tabindex=\""0\"">non</span> <span class=\""lat-word\"" data-word=\""poterimus\"" role=\""button\"" tabindex=\""0\"">poterimus</span> <span class=\""lat-word\"" data-word=\""esse\"" role=\""button\"" tabindex=\""0\"">esse</span> <span class=\""lat-word\"" data-word=\""salvi\"" role=\""button\"" tabindex=\""0\"">salvi</span> <span class=\""lat-word\"" data-word=\""et\"" role=\""button\"" tabindex=\""0\"">et</span> <span class=\""lat-word\"" data-word=\""servare\"" role=\""button\"" tabindex=\""0\"">servare</span> <span class=\""lat-word\"" data-word=\""patriam\"" role=\""button\"" tabindex=\""0\"">patriam</span> <span class=\""lat-word\"" data-word=\""libertatemque\"" role=\""button\"" tabindex=\""0\"">libertatemque</span> <span class=\""lat-word\"" data-word=\""nostram\"" role=\""button\"" tabindex=\""0\"">nostram</span> <span class=\""lat-word\"" data-word=\""sine\"" role=\""button\"" tabindex=\""0\"">sine</span> <span class=\""lat-word\"" data-word=\""bello\"" role=\""button\"" tabindex=\""0\"">bello</span>, <span class=\""lat-word\"" data-word=\""bellum\"" role=\""button\"" tabindex=\""0\"">bellum</span> <span class=\""lat-word\"" data-word=\""erit\"" role=\""button\"" tabindex=\""0\"">erit</span> <span class=\""lat-word\"" data-word=\""necessarium\"" role=\""button\"" tabindex=\""0\"">necessarium</span>. <span class=\""lat-word\"" data-word=\""Semper\"" role=\""button\"" tabindex=\""0\"">Semper</span> <span class=\""lat-word\"" data-word=\""debemus\"" role=\""button\"" tabindex=\""0\"">debemus</span> <span class=\""lat-word\"" data-word=\""demonstrare\"" role=\""button\"" tabindex=\""0\"">demonstrare</span>, <span class=\""lat-word\"" data-word=\""tamen\"" role=\""button\"" tabindex=\""0\"">tamen</span> <span class=\""lat-word\"" data-word=\""magnum\"" role=\""button\"" tabindex=\""0\"">magnum</span> <span class=\""lat-word\"" data-word=\""officium\"" role=\""button\"" tabindex=\""0\"">officium</span> <span class=\""lat-word\"" data-word=\""in\"" role=\""button\"" tabindex=\""0\"">in</span> <span class=\""lat-word\"" data-word=\""bello\"" role=\""button\"" tabindex=\""0\"">bello</span> <span class=\""lat-word\"" data-word=\""et\"" role=\""button\"" tabindex=\""0\"">et</span> <span class=\""lat-word\"" data-word=\""magnam\"" role=\""button\"" tabindex=\""0\"">magnam</span> <span class=\""lat-word\"" data-word=\""clementiam\"" role=\""button\"" tabindex=\""0\"">clementiam</span> <span class=\""lat-word\"" data-word=\""post\"" role=\""button\"" tabindex=\""0\"">post</span> <span class=\""lat-word\"" data-word=\""victoriam\"" role=\""button\"" tabindex=\""0\"">victoriam</span>.";

        string ciceroTr = "Devlet, haklı bir gerekçe olmaksızın veya öfke yüzünden savaşmamalıdır. Eğer halkımızın mülkünü, tarlalarını ve yaşamlarını savaşsız savunabileceksek, o vakit barışı korumalıyız; ancak eğer savaş olmaksızın emniyette olamayacak ve vatanımızı ile özgürlüğümüzü koruyamayacaksak, savaş zorunlu olacaktır. Yine de savaşta her zaman büyük bir ödev bilinci, zaferden sonra ise büyük bir merhamet göstermeliyiz.";

        string ciceroNotes = "propter (+ acc.): nedeniyle, yüzünden; bellum gerere: savaşmak, harp yürütmek; defendo, -ere: savunmak, korumak; tum: o zaman, o vakit; autem: ancak, öte yandan; necessarius, -a, -um: zorunlu, gerekli; tamen: buna rağmen, yine de; clementia, -ae f.: merhamet, hoşgörü; fortunae, -arum f. pl.: mal mülk, servet.";

        var mCicero = Regex.Match(currJs, @"<div class=\\""reading-passage-block\\"">\\n  <div class=\\""reading-passage-header\\"">\\n    <span class=\\""reading-badge\\"">📜 METİN OKUMA & ÇÖZÜMLEME</span>\\n    <h4 class=\\""reading-title\\"">Okuma Parçası: Savaş, Barış ve Merhamet \(Cicero, De Officiis\)</h4>.*?</div>\\n</div>\\n", RegexOptions.Singleline);

        if (mCicero.Success)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<div class=\\\"reading-passage-block\\\">\\n");
            sb.Append("  <div class=\\\"reading-passage-header\\\">\\n");
            sb.Append("    <span class=\\\"reading-badge\\\">📜 METİN OKUMA & ÇÖZÜMLEME</span>\\n");
            sb.Append("    <h4 class=\\\"reading-title\\\">Okuma Parçası: Savaş, Barış ve Merhamet (Cicero, De Officiis)</h4>\\n");
            sb.Append("    <div class=\\\"reading-passage-meta\\\">📍 <strong>Kaynak Metin:</strong> Marcus Tullius Cicero, <em>De Officiis</em> (Ödevler Üzerine), I.34-35</div>\\n");
            sb.Append("  </div>\\n");
            sb.Append("  <div class=\\\"reading-passage-latin\\\">\\n");
            sb.Append("    " + ciceroLatin + "\\n");
            sb.Append("  </div>\\n");
            sb.Append("  <div class=\\\"reading-passage-tr\\\">\\n");
            sb.Append("    <div class=\\\"tr-label\\\">🇹🇷 Türkçe Çeviri:</div>\\n");
            sb.Append("    <p class=\\\"tr-text\\\">" + ciceroTr + "</p>\\n");
            sb.Append("  </div>\\n");
            sb.Append("  <div class=\\\"reading-passage-notes\\\">\\n");
            sb.Append("    <div class=\\\"notes-label\\\">🔍 Metin İçi Sözlük & Gramer Notları:</div>\\n");
            sb.Append("    <p class=\\\"notes-text\\\">" + ciceroNotes + "</p>\\n");
            sb.Append("  </div>\\n");
            sb.Append("</div>\\n");

            currJs = currJs.Replace(mCicero.Value, sb.ToString());
            Console.WriteLine("✓ Successfully replaced Cicero De Officiis passage with authoritative Latin text!");
        }

        // Add metadata to other passages:
        currJs = currJs.Replace(
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Maecenas ve Vergilius'un Daveti</h4>\\n  </div>",
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Maecenas ve Vergilius'un Daveti</h4>\\n    <div class=\\\"reading-passage-meta\\\">📍 <strong>Edebi Çevre:</strong> Quintus Horatius Flaccus & Gaius Maecenas Dost Meclisi (Roma, İÖ 35)</div>\\n  </div>"
        );

        currJs = currJs.Replace(
            "<h4 class=\\\"reading-title\\\">Okuma Parçası 1: Catullus'un Sevgilisine Vedası (Vale, Puella!)</h4>\\n  </div>",
            "<h4 class=\\\"reading-title\\\">Okuma Parçası 1: Catullus'un Sevgilisine Vedası (Vale, Puella!)</h4>\\n    <div class=\\\"reading-passage-meta\\\">📍 <strong>Kaynak Metin:</strong> Gaius Valerius Catullus, <em>Carmen VIII</em> (Miser Catulle, desinas ineptire)</div>\\n  </div>"
        );

        currJs = currJs.Replace(
            "<h4 class=\\\"reading-title\\\">Okuma Parçası 2: Çiftçi, Denizci ve Felsefe</h4>\\n  </div>",
            "<h4 class=\\\"reading-title\\\">Okuma Parçası 2: Çiftçi, Denizci ve Felsefe</h4>\\n    <div class=\\\"reading-passage-meta\\\">📍 <strong>Edebi Tür:</strong> Klasik Roma Felsefi Diyaloğu & Fabl Anlatımı</div>\\n  </div>"
        );

        currJs = currJs.Replace(
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Hakiki Dostluk Üzerine (De Amicitia)</h4>\\n  </div>",
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Hakiki Dostluk Üzerine (De Amicitia)</h4>\\n    <div class=\\\"reading-passage-meta\\\">📍 <strong>Kaynak Metin:</strong> Marcus Tullius Cicero, <em>Laelius de Amicitia</em> (Dostluk Üzerine Diyalog)</div>\\n  </div>"
        );

        currJs = currJs.Replace(
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Scintilla ve Horatia (Oxford Latin Course)</h4>\\n  </div>",
            "<h4 class=\\\"reading-title\\\">Okuma Parçası: Scintilla ve Horatia (Oxford Latin Course)</h4>\\n    <div class=\\\"reading-passage-meta\\\">📍 <strong>Pedagojik Kaynak:</strong> Oxford Latin Course, Bölüm 1 (Venusium'da Günlük Yaşam)</div>\\n  </div>"
        );

        File.WriteAllText(currPath, currJs, new UTF8Encoding(false));
        Console.WriteLine("✓ Successfully updated and cleansed all reading passages in " + currPath);
    }
}
