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
        // T1_W11_L1: LatinceGramer11.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 11, 1, "LatinceGramer11.1.pdf",
                "3. GRUP İSİMLER: -İ GÖVDELİ İSİMLER VE DÜZENSİZ ÇEKİMLER",
                "i-Stems (civis, urbs, ars, animal, mare), Düzensiz İsimler (vis, bos, sus, Iuppiter) ve Ayırt Etme Kuralları",
                "Bu fasikülde 3. Grup isimlerin gövdeleri -i seslisiyle biten alt kümesini (-ium çoğul genetivus), tekil ablativus'u -i ile biten cinssiz isimleri, düzensiz isimleri (vis, bos, sus, Iuppiter), sessiz ve -i gövdeli isimleri ayırt etme formüllerini ve esse + Gen. / esse + Dat. sahiplik kalıplarını göreceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup -i Gövdeli İsimler", "civis, urbs, ars Çekimleri", "animal ve mare (Nötr)", "Düzensiz İsimler (vis, bos, sus, Iuppiter)", "Gövde Ayırt Etme Kuralları", "esse + Genitivus ve Dativus" });
            f.vocabKeys.AddRange(new[] { "civis", "urbs", "ars", "animal", "mare", "vis", "bos", "sus", "Iuppiter", "nox", "mors", "hostis", "gens", "pons", "fons", "dens", "arx" });

            // Model i-stems
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Grup -i Gövdeli Eril/Dişil İsimler: cīvis, urbs, ars",
                html = @"<p><strong>Temel Özellik (Slayt 2-5):</strong> Bu gruptaki isimlerin Çoğul Genetivus halleri <strong>–ium</strong> şeklinde biter. Tekil Ablativus hali ise genellikle <em>-e</em> (bazen <em>-ī</em>) olur:</p>",
                tableHtml = TableTemplates.NounTable(
                    "cīvis, cīvis, m./f. (yurttaş, vatandaş)", "cīvis", "cīvis", "m./f.", "yurttaş, vatandaş",
                    "cīvis", "cīvis", "cīvis", "cīvī", "cīvem", "cīve (cīvī)",
                    "cīvēs", "cīvēs", "cīvium", "cīvibus", "cīvēs", "cīvibus",
                    "yurttaş", "yurttaşlar", "ey yurttaş", "ey yurttaşlar", "yurttaşın", "yurttaşların",
                    "yurttaşa / için", "yurttaşlara / için", "yurttaşı", "yurttaşları", "yurttaşla / yurttaştan", "yurttaşlarla / yurttaşlardan",
                    "Çoğul Genetivus -ium takısına dikkat ediniz."
                ) + "<br>" + TableTemplates.NounTable(
                    "urbs, urbis, f. (şehir, kent)", "urbs", "urbis", "f.", "şehir, kent",
                    "urbs", "urbs", "urbis", "urbī", "urbem", "urbe",
                    "urbēs", "urbēs", "urbium", "urbibus", "urbēs", "urbibus",
                    "şehir", "şehirler", "ey şehir", "ey şehirler", "şehrin", "şehirlerin",
                    "şehre / için", "şehirlere / için", "şehri", "şehirleri", "şehirle / şehirden", "şehirlerle / şehirlerden"
                ) + "<br>" + TableTemplates.NounTable(
                    "ars, artis, f. (sanat, beceri)", "ars", "artis", "f.", "sanat, beceri",
                    "ars", "ars", "artis", "artī", "artem", "arte",
                    "artēs", "artēs", "artium", "artibus", "artēs", "artibus",
                    "sanat", "sanatlar", "ey sanat", "ey sanatlar", "sanatın", "sanatların",
                    "sanata / için", "sanatlara / için", "sanatı", "sanatları", "sanatla / sanattan", "sanatlarla / sanatlardan"
                )
            });

            // Nötr i-stems: animal, mare
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 3. Grup -i Gövdeli Cinssiz (Neutrum) İsimler: animal ve mare",
                html = @"<p><strong>Önemli Kural (Slayt 6-7):</strong> Tekil Nominativus hali <em>-al, -ar, -e</em> ile biten nötr isimlerin:<br>1) Tekil Ablativus halleri <strong>-ī</strong> ile biter (animālī, marī).<br>2) Çoğul Nom/Voc/Acc halleri <strong>-ia</strong> ile biter (animālia, maria).<br>3) Çoğul Genetivus halleri <strong>-ium</strong> ile biter (animālium, marium).</p>",
                tableHtml = TableTemplates.NounTable(
                    "animal, animālis, n. (hayvan)", "animal", "animālis", "n.", "hayvan, canlı",
                    "animal", "animal", "animālis", "animālī", "animal", "animālī",
                    "animālia", "animālia", "animālium", "animālibus", "animālia", "animālibus",
                    "hayvan", "hayvanlar", "ey hayvan", "ey hayvanlar", "hayvanın", "hayvanların",
                    "hayvana / için", "hayvanlara / için", "hayvanı", "hayvanları", "hayvanla / hayvandan", "hayvanlarla / hayvanlardan"
                ) + "<br>" + TableTemplates.NounTable(
                    "mare, maris, n. (deniz)", "mare", "maris", "n.", "deniz",
                    "mare", "mare", "maris", "marī", "mare", "marī",
                    "maria", "maria", "marium", "maribus", "maria", "maribus",
                    "deniz", "denizler", "ey deniz", "ey denizler", "denizin", "denizlerin",
                    "denize / için", "denizlere / için", "denizi", "denizleri", "denizle / denizden", "denizlerle / denizlerden"
                )
            });

            // Düzensiz İsimler
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 3. Grup Düzensiz İsimler: vīs, bōs, sūs, Iuppiter",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 9, 10, 11, 12 tabloları:</p>",
                tableHtml = TableTemplates.NounTable(
                    "vīs, vīs, f. (güç, kuvvet, şiddet)", "vīs", "vīs", "f.", "güç, kuvvet, şiddet",
                    "vīs", "vīs", "— (rōboris)", "— (rōborī)", "vim", "vī",
                    "vīrēs", "vīrēs", "vīrium", "vīribus", "vīrēs / vīrīs", "vīribus",
                    "güç", "güçler", "ey güç", "ey güçler", "gücün", "güçlerin",
                    "güce / için", "güçlere / için", "gücü", "güçleri", "güçle / güçten", "güçlerle / güçlerden",
                    "Tekil Genetivus ve Dativus kullanılmaz; yerine rōbur kelimesi kullanılır."
                ) + "<br>" + TableTemplates.NounTable(
                    "bōs, bovis, m./f. (öküz, sığır)", "bōs", "bovis", "m./f.", "öküz, sığır",
                    "bōs", "bōs", "bovis", "bovī", "bovem", "bove",
                    "bovēs", "bovēs", "boum / boverum", "bōbus / būbus", "bovēs", "bōbus / būbus",
                    "öküz", "öküzler", "ey öküz", "ey öküzler", "öküzün", "öküzlerin",
                    "öküze / için", "öküzlere / için", "öküzü", "öküzleri", "öküzle / öküzden", "öküzlerle / öküzlerden"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Iuppiter, Iovis, m. (baş tanrı Iuppiter)", "Slayt 12",
                    new[] { "Casus (Hal)", "Singularis (Tekil)" },
                    new[] {
                        new[] { "Nominativus (Nom.)", "Iuppiter" },
                        new[] { "Vocativus (Voc.)", "Iuppiter" },
                        new[] { "Genetivus (Gen.)", "Iovis" },
                        new[] { "Dativus (Dat.)", "Iovī" },
                        new[] { "Accusativus (Acc.)", "Iovem" },
                        new[] { "Ablativus (Abl.)", "Iove" }
                    },
                    "Iuppiter kelimesinin gövdesi Iov- kökü üzerine kuruludur ve çoğulu yoktur."
                )
            });

            // Ayırt Etme Kuralları
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Sessiz ve -i Gövdeli İsimleri Ayırt Etme Kuralları",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 14-19 formülleri:</p>
<ol>
  <li><strong>Sessiz Gövdeliler (-um alırlar):</strong>
    <ul>
      <li>Gövde tek bir sessizle biter; Tekil Genetivus'ta hece sayısı artar ve Genetivus ekinden önce tek sessiz gelir: <span class=""lat-word"">lēx, lēgis</span> (g), <span class=""lat-word"">civitas, civitātis</span> (t), <span class=""lat-word"">corpus, corporis</span> (r).</li>
    </ul>
  </li>
  <li><strong>-i Gövdeliler (-ium alırlar):</strong>
    <ul>
      <li><em>A. Kuralı:</em> Tekil Genetivus'ta hece sayısı artar ancak genetivus ekinden önce çift sessiz gelir: <span class=""lat-word"">urbs, urbis</span> (rb), <span class=""lat-word"">mōns, montis</span> (nt), <span class=""lat-word"">nox, noctis</span> (ct), <span class=""lat-word"">ars, artis</span> (rt).</li>
      <li><em>B. Kuralı (Eşit Heceliler / Parisyllaba):</em> Tekil Nom ve Gen hece sayıları eşittir: <span class=""lat-word"">cīvis, cīvis</span>; <span class=""lat-word"">hostis, hostis</span>; <span class=""lat-word"">nāvis, nāvis</span>.</li>
      <li><em>C. Kuralı:</em> -al, -ar, -e ile biten nötr isimler: <span class=""lat-word"">animal</span>, <span class=""lat-word"">mare</span>.</li>
    </ul>
  </li>
  <li><strong>Aile İsimleri İstisnası:</strong> Eşit heceli olmalarına rağmen <em>pater, māter, frāter, iuvenis, senex, canis</em> çoğul Genetivus'ta <strong>-um</strong> alırlar (patrum, mātrum, frātrum).</li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Çoğul Genetivus Altın Kuralı",
                calloutText = "Kelimenin çoğul genetivus'ta -um mu yoksa -ium mu alacağı yukarıdaki 3 kurala göre kesin olarak saptanır."
            });

            // esse + Gen / esse + Dat
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "5. Sahiplik ve Aidiyet Sentaksı: esse + Gen. ve esse + Dat.",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 22 ve 23:</p>
<ul>
  <li><strong>esse + Genetivus (Aidiyet Bildirir):</strong>
    <ul>
      <li><span class=""lat-word"">Equus est agricolae.</span> = At çiftçinindir / çiftçiye aittir.</li>
      <li><span class=""lat-word"">Casa est Rōmānōrum.</span> = Ev Romalılara aittir.</li>
      <li><span class=""lat-word"">Culpa erit puerī.</span> = Suç çocuğun olacaktır.</li>
    </ul>
  </li>
  <li><strong>esse + Dativus (Sahiplik Bildirir - Dativus Possessivus):</strong>
    <ul>
      <li><span class=""lat-word"">Sunt dōna servō.</span> = Kölenin hediyeleri var (Hediyeler köleye aittir).</li>
      <li><span class=""lat-word"">Librī erunt puerō.</span> = Çocuğun kitapları olacak.</li>
      <li><span class=""lat-word"">Agrī erant agricolae.</span> = Çiftçinin tarlaları vardı.</li>
    </ul>
  </li>
</ul>"
            });

            f.studyTips = "Tekil ablativus'u -i ile biten cinssiz isimlerin çoğulda -ia aldığını unutmayınız: mare > maria; animal > animalia.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W11_L2: LatinceGramer11.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 11, 2, "LatinceGramer11.2.pdf",
                "3. GRUP İSİMLERLE TAMLAMALAR VE MARTIALIS EPİGRAMI",
                "flumen longum, urbes magnae, Sentaks Çözümlemeleri ve Martialis Şiiri (7.59)",
                "Bu fasikülde 3. Grup isimlerin 1. ve 2. sınıf sıfatlarla kurduğu tamlamaları (flumen longum, urbes magnae, tempora perpetua), ders slaytlarındaki özgün felsefi cümleleri ve Martialis'in Caecilianus ve domuz hakkındaki hiciv epigramını öğreneceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "3. Grup İsim-Sıfat Tamlamaları", "flumen longum", "urbes magnae", "Örnek Cümle Tahlilleri", "Martialis Epigramı (7.59)", "Sentaks Pratikleri" });
            f.vocabKeys.AddRange(new[] { "flumen", "urbs", "rex", "consul", "imperator", "pater", "mater", "miles", "mos", "senex", "tempus", "dux", "labor", "virtus", "invidia", "sustineo", "angustus", "adulescentia", "supplicium", "sanus", "aper", "ceno", "conviva" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 3. Grup İsimlerle Kurulan Model Sıfat Tamlamaları",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 2-5 örnek tamlamalar tablosu:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "3. Grup İsimlerle İlgili Örnek İfadeler", "Slayt 2-5",
                    new[] { "Latince Tamlama", "Türkçe Karşılığı", "Morfolojik Yapı" },
                    new[] {
                        new[] { "flūmen longum", "uzun nehir", "Nom/Acc. Sg. Neutrum (3. çekim isim + 2. çekim nötr sıfat)" },
                        new[] { "urbēs magnae", "büyük şehirler", "Nom/Acc. Pl. Femininum (3. çekim i-stem isim + 1. çekim sıfat)" },
                        new[] { "stultōrum rēgum", "aptal kralların", "Gen. Pl. Masculinum (2. çekim sıfat + 3. çekim sessiz gövdeli isim)" },
                        new[] { "urbēs parvae", "küçük şehirler", "Nom/Acc. Pl. Femininum" },
                        new[] { "malum consulem", "kötü konsülü", "Acc. Sg. Masculinum" },
                        new[] { "bonō imperātōrī", "iyi imparator için / imparatora", "Dat. Sg. Masculinum" },
                        new[] { "patrēs miserī", "zavallı babalar", "Nom. Pl. Masculinum" },
                        new[] { "mātrēs Rōmānae", "Romalı anneler", "Nom. Pl. Femininum" },
                        new[] { "mīlitum clārōrum", "meşhur askerlerin", "Gen. Pl. Masculinum" },
                        new[] { "mōribus priscīs", "eski / köklü âdetlerle", "Abl. Pl. Masculinum (mos, moris)" },
                        new[] { "tempora perpetua", "kesintisiz zamanlar", "Nom/Acc. Pl. Neutrum (tempus, temporis)" },
                        new[] { "virtūtem vēram", "hakiki erdemi", "Acc. Sg. Femininum (virtus, virtutis)" },
                        new[] { "lēgēs novae Rōmānae", "Roma'ya ait yeni yasalar", "Nom. Pl. Femininum" }
                    }
                )
            });

            f.studyTips = "3. grup isimlerle 1. ve 2. sınıf sıfatlar tamlama kurarken takılar farklı görünse de (örn. urbes magnae) cins, sayı ve hal bakımından tam uyum içindedir.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W12_L1: LatinceGramer12.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 12, 1, "LatinceGramer12.1.pdf",
                "4. GRUP FİİLLER (CONIUGATIO IV: -ĪRE) VE 4 ÇEKİM KARŞILAŞTIRMASI",
                "audīo ve venīo Çekimleri, Praesens, Imperfectum (-iēba-), Futurum (-ia-/-iē-) ve Karşılaştırma",
                "Bu fasikülde mastarı uzun -īre ile biten 4. Grup fiilleri (audio, venio, lenio, nescio), Imperfectum ekini (-iēba-), Futurum ekini (-iam, -iēs, -iet...) ve 4 çekim grubunun Praesens, Imperfectum, Futurum, Imperativus karşılaştırma tablolarını göreceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "4. Grup Fiiller (-īre)", "audīo ve venīo Praesens", "4. Grup Imperfectum (-iēbā-)", "4. Grup Futurum I (-iam, -iēs)", "4. Grup Emir Kipi (audī, audīte)", "Dört Çekim Grubunun Mukayesesi" });
            f.vocabKeys.AddRange(new[] { "audio", "venio", "lenio", "nescio", "scio", "munio", "nutrio", "pervenio", "punio", "reperio", "servio", "subvenio", "vestio", "vincio", "dormio" });

            // Praesens Audio & Venio
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 4. Grup Fiiller: Şimdiki Zaman (Praesens Indicativus Activi)",
                html = @"<p><strong>Kural (Slayt 4-5):</strong> Mastar sonundaki <em>-re</em> atılarak Praesens gövdesi (<strong>audī-</strong>) bulunur. 3. çoğul şahısta <strong>-unt</strong> eki gelir: <em>audī-unt</em>.</p>",
                tableHtml = TableTemplates.VerbTable(
                    "audīo, -īre (4. Grup)", "audio", "audīre", "işitmek, duymak", "Praesens Indicativus Activi",
                    "aud-i-ō", "audī-s", "audī-t", "audī-mus", "audī-tis", "audī-unt",
                    "işitiyorum / işitirim", "işitiyorsun / işitirsin", "işitiyor / işitir",
                    "işitiyoruz / işitiriz", "işitiyorsunuz / işitirsiniz", "işitiyorlar / işitirler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "venīo, -īre (4. Grup)", "venio", "venīre", "gelmek", "Praesens Indicativus Activi",
                    "ven-i-ō", "venī-s", "venī-t", "venī-mus", "venī-tis", "venī-unt",
                    "geliyorum / gelirim", "geliyorsun / gelirsin", "geliyor / gelir",
                    "geliyoruz / geliriz", "geliyorsunuz / gelirsiniz", "geliyorlar / gelirler"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Dört Çekim Grubunun Şimdiki Zaman Karşılaştırması (Slayt 8)", "Slayt 8",
                    new[] { "Şahıs & Sayı", "1. Grup: laudō", "2. Grup: moneō", "3. Grup: vinco", "4. Grup: audīo" },
                    new[] {
                        new[] { "1. Sg.", "laud-ō", "mone-ō", "vinc-ō", "audī-ō" },
                        new[] { "2. Sg.", "laudā-s", "monē-s", "vinci-s", "audī-s" },
                        new[] { "3. Sg.", "lauda-t", "mone-t", "vinci-t", "audī-t" },
                        new[] { "1. Pl.", "laudā-mus", "monē-mus", "vinci-mus", "audī-mus" },
                        new[] { "2. Pl.", "laudā-tis", "monē-tis", "vinci-tis", "audī-tis" },
                        new[] { "3. Pl.", "lauda-nt", "mone-nt", "vinc-unt", "audī-unt" }
                    }
                )
            });

            // Imperfectum Audio & Venio
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 4. Grup Fiiller: Şimdiki Zamanın Hikâyesi (Imperfectum)",
                html = @"<p><strong>Kural (Slayt 10-13):</strong> Gövdeye <strong>-ēbā-</strong> eki getirilir: <em>aud-i-ēba-m, ven-i-ēba-m</em>:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "audīo, -īre (4. Grup)", "audio", "audīre", "işitmek", "Imperfectum Indicativus Activi",
                    "audi-ēba-m", "audi-ēbā-s", "audi-ēba-t", "audi-ēbā-mus", "audi-ēbā-tis", "audi-ēba-nt",
                    "işitiyordum / işitirdim", "işitiyordun / işitirdin", "işitiyordu / işitirdi",
                    "işitiyorduk / işitirdik", "işitiyordunuz / işitirdiniz", "işitiyorlardı / işitirlerdi"
                ) + "<br>" + TableTemplates.VerbTable(
                    "venīo, -īre (4. Grup)", "venio", "venīre", "gelmek", "Imperfectum Indicativus Activi",
                    "veni-ēba-m", "veni-ēbā-s", "veni-ēba-t", "veni-ēbā-mus", "veni-ēbā-tis", "veni-ēba-nt",
                    "geliyordum / gelirdim", "geliyordun / gelirsin", "geliyordu / gelirdi",
                    "geliyorduk / gelirdik", "geliyordunuz / gelirdiniz", "geliyorlardı / gelirlerdi"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Dört Çekim Grubunun Imperfectum Karşılaştırması (Slayt 14)", "Slayt 14",
                    new[] { "Şahıs", "1. Grup: laudō", "2. Grup: moneō", "3. Grup: vinco", "4. Grup: audīo" },
                    new[] {
                        new[] { "1. Sg.", "laudā-ba-m", "monē-ba-m", "vinc-ēba-m", "audi-ēba-m" },
                        new[] { "2. Sg.", "laudā-bā-s", "monē-bā-s", "vinc-ēbā-s", "audi-ēbā-s" },
                        new[] { "3. Sg.", "laudā-ba-t", "monē-ba-t", "vinc-ēba-t", "audi-ēba-t" },
                        new[] { "1. Pl.", "laudā-bā-mus", "monē-bā-mus", "vinc-ēbā-mus", "audi-ēbā-mus" },
                        new[] { "2. Pl.", "laudā-bā-tis", "monē-bā-tis", "vinc-ēbā-tis", "audi-ēbā-tis" },
                        new[] { "3. Pl.", "laudā-ba-nt", "monē-ba-nt", "vinc-ēba-nt", "audi-ēba-nt" }
                    }
                )
            });

            // Futurum Audio & Venio
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. 4. Grup Fiiller: Gelecek Zaman (Futurum Indicativus Activi)",
                html = @"<p><strong>Kural (Slayt 16-19):</strong> 4. grupta da gelecek zaman 3. grup gibi <strong>-am, -ēs, -et, -ēmus, -ētis, -ent</strong> ekleriyle yapılır (asla -bo kullanılmaz!):</p>",
                tableHtml = TableTemplates.VerbTable(
                    "audīo, -īre (4. Grup)", "audio", "audīre", "işitmek", "Futurum Indicativus Activi",
                    "audi-a-m", "audi-ē-s", "audi-e-t", "audi-ē-mus", "audi-ē-tis", "audi-e-nt",
                    "işiteceğim", "işiteceksin", "işitecek",
                    "işiteceğiz", "işiteceksiniz", "işitecekler"
                ) + "<br>" + TableTemplates.VerbTable(
                    "venīo, -īre (4. Grup)", "venio", "venīre", "gelmek", "Futurum Indicativus Activi",
                    "veni-a-m", "veni-ē-s", "veni-e-t", "veni-ē-mus", "veni-ē-tis", "veni-e-nt",
                    "geleceğim", "geleceksin", "gelecek",
                    "geleceğiz", "geleceksiniz", "gelecekler"
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Dört Çekim Grubunun Futurum Karşılaştırması (Slayt 20)", "Slayt 20",
                    new[] { "Şahıs", "1. Grup (-bō)", "2. Grup (-bō)", "3. Grup (-am, -ēs)", "4. Grup (-iam, -iēs)" },
                    new[] {
                        new[] { "1. Sg.", "laudā-b-ō", "monē-b-ō", "vinc-a-m", "audi-a-m" },
                        new[] { "2. Sg.", "laudā-bi-s", "monē-bi-s", "vinc-ē-s", "audi-ē-s" },
                        new[] { "3. Sg.", "laudā-bi-t", "monē-bi-t", "vinc-e-t", "audi-e-t" },
                        new[] { "1. Pl.", "laudā-bi-mus", "monē-bi-mus", "vinc-ē-mus", "audi-ē-mus" },
                        new[] { "2. Pl.", "laudā-bi-tis", "monē-bi-tis", "vinc-ē-tis", "audi-ē-tis" },
                        new[] { "3. Pl.", "laudā-bu-nt", "monē-bu-nt", "vinc-e-nt", "audi-ē-nt" }
                    }
                )
            });

            // Imperativus Audio & Venio
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. 4. Grup Emir Kipi (Imperativus) ve Dört Grubun Özeti",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 22 ve 23 tabloları:</p>",
                tableHtml = TableTemplates.ImperativeTable(
                    "4. Grup Fiiller Emir Kipi Tablosu",
                    new[] {
                        new[] { "audīo, -īre", "işitmek", "audī (İşit!)", "audī-te (İşitiniz!)", "nōlī audīre", "nōlīte audīre" },
                        new[] { "venīo, -īre", "gelmek", "venī (Gel!)", "venī-te (Geliniz!)", "nōlī venīre", "nōlīte venīre" }
                    }
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Dört Çekim Grubunun Emir Kipi Karşılaştırması (Slayt 23)", "Slayt 23",
                    new[] { "Şahıs", "1. Grup: laudō", "2. Grup: moneō", "3. Grup: vinco", "4. Grup: audīo" },
                    new[] {
                        new[] { "2. Sg. (Sen)", "laudā (Öv!)", "monē (Uyar!)", "vince (Yen!)", "audī (İşit!)" },
                        new[] { "2. Pl. (Siz)", "laudā-te (Övünüz!)", "monē-te (Uyarınız!)", "vinci-tē (Yeniniz!)", "audī-te (İşitiniz!)" }
                    }
                )
            });

            f.studyTips = "4. grupta tekil emir kipinde i sesinin uzun olduğuna dikkat ediniz: audī! venī!";
            list.Add(f);
        }

        // ====================================================================
        // T1_W12_L2: LatinceGramer12.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 12, 2, "LatinceGramer12.2.pdf",
                "5. GRUP (-IO'LU KARMA) FİİLLER VE THERMOPYLAE OKUMA METNİ",
                "capio, fugio, facio Çekimleri, 5 Grubun Tam Mukayesesi ve Leonidas'ın Tarihi Konuşması",
                "Bu fasikülde 3. ve 4. grupların melezi olan 5. Grup / -io'lu fiilleri (capio, fugio, facio), beş çekim grubunun eşzamanlı tam mukayesesini ve Thermopylae Geçidi Savaşı'nı (İÖ 480 - Leonidas ve Persler) anlatan tarihi okuma metnini inceleyeceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "5. Grup (-io'lu Karma) Fiiller", "capio, fugio, facio Çekimi", "Beş Grubun Praesens Mukayesesi", "Beş Grubun Imperfectum Mukayesesi", "Beş Grubun Futurum Mukayesesi", "Thermopylae Okuma Parçası (İÖ 480)" });
            f.vocabKeys.AddRange(new[] { "capio", "fugio", "facio", "accipio", "adficio", "conficio", "decipio", "despicio", "conspicio", "inspicio", "incipio", "fodio", "excipio", "effugio", "efficio" });

            // Praesens Capio, Fugio, Facio
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 5. Grup (-io'lu) Fiiller: Şimdiki Zaman (Praesens Indicativus Activi)",
                html = @"<p><strong>Kural (Slayt 3-7):</strong> Mastarı 3. grup gibi kısa <em>-ere</em> ile bitmesine rağmen, 1. tekil şahsı 4. grup gibi <strong>-io</strong> ile biter: <em>căpĭō, capere; fŭgĭō, fugere; făcĭō, facere</em>:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "căpĭo, -ere (5. Grup)", "capio", "capere", "almak, ele geçirmek", "Praesens Indicativus Activi",
                    "capi-ō", "capi-s", "capi-t", "capi-mus", "capi-tis", "capi-unt",
                    "alıyorum / alırım", "alıyorsun / alırsın", "alıyor / alır",
                    "alıyoruz / alırız", "alıyorsunuz / alırsınız", "alıyorlar / alırlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "fŭgĭo, -ere (5. Grup)", "fugio", "fugere", "kaçmak, kaçınmak", "Praesens Indicativus Activi",
                    "fugi-ō", "fugi-s", "fugi-t", "fugi-mus", "fugi-tis", "fugi-unt",
                    "kaçıyorum / kaçarım", "kaçıyorsun / kaçarsın", "kaçıyor / kaçar",
                    "kaçıyoruz / kaçarız", "kaçıyorsunuz / kaçarsınız", "kaçıyorlar / kaçarlar"
                ) + "<br>" + TableTemplates.VerbTable(
                    "făcĭo, -ere (5. Grup)", "facio", "facere", "yapmak, etmek", "Praesens Indicativus Activi",
                    "faci-ō", "faci-s", "faci-t", "faci-mus", "faci-tis", "faci-unt",
                    "yapıyorum / yaparım", "yapıyorsun / yaparsın", "yapıyor / yapar",
                    "yapıyoruz / yaparız", "yapıyorsunuz / yaparsınız", "yapıyorlar / yaparlar"
                )
            });

            // Imperfectum & Futurum Capio
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 5. Grup Fiiller: Imperfectum ve Futurum I Çekimleri",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 10-18 tabloları:</p>",
                tableHtml = TableTemplates.VerbTable(
                    "căpĭo, -ere (Imperfectum)", "capio", "capere", "almak", "Imperfectum Indicativus Activi",
                    "capi-ēba-m", "capi-ēbā-s", "capi-ēba-t", "capi-ēbā-mus", "capi-ēbā-tis", "capi-ēba-nt",
                    "alıyordum / alırdım", "alıyordun / alırdın", "alıyordu / alırdı",
                    "alıyorduk / alırdık", "alıyordunuz / alırdınız", "alıyorlardı / alırlardı"
                ) + "<br>" + TableTemplates.VerbTable(
                    "căpĭo, -ere (Futurum I)", "capio", "capere", "almak", "Futurum Indicativus Activi",
                    "capi-a-m", "capi-ē-s", "capi-e-t", "capi-ē-mus", "capi-ē-tis", "capi-e-nt",
                    "alacağım", "alacaksın", "alacak",
                    "alacağız", "alacaksınız", "alacaklar"
                )
            });

            // 5 Groups Mega Comparison
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Beş Çekim Grubunun Büyük Karşılaştırma Tablosu",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 7, 13, 19, 21, 23 karşılaştırma tabloları:</p>",
                tableHtml = TableTemplates.ComparisonTable(
                    "Beş Çekim Grubunun Gelecek Zaman (Futurum) Karşılaştırması", "Slayt 19",
                    new[] { "Şahıs", "1. Grup (laudo)", "2. Grup (moneo)", "3. Grup (vinco)", "4. Grup (audio)", "5. Grup (capio)" },
                    new[] {
                        new[] { "1. Sg.", "laudā-b-ō", "monē-b-ō", "vinc-a-m", "audi-a-m", "capi-a-m" },
                        new[] { "2. Sg.", "laudā-bi-s", "monē-bi-s", "vinc-ē-s", "audi-ē-s", "capi-ē-s" },
                        new[] { "3. Sg.", "laudā-bi-t", "monē-bi-t", "vinc-e-t", "audi-e-t", "capi-e-t" },
                        new[] { "1. Pl.", "laudā-bi-mus", "monē-bi-mus", "vinc-ē-mus", "audi-ē-mus", "capi-ē-mus" },
                        new[] { "2. Pl.", "laudā-bi-tis", "monē-bi-tis", "vinc-ē-tis", "audi-ē-tis", "capi-ē-tis" },
                        new[] { "3. Pl.", "laudā-bu-nt", "monē-bu-nt", "vinc-e-nt", "audi-ē-nt", "capi-e-nt" }
                    }
                ) + "<br>" + TableTemplates.ComparisonTable(
                    "Beş Çekim Grubunun Şimdiki Zaman Mastarları (Infinitivus Praesens)", "Slayt 21",
                    new[] { "Grup", "Mastar Biçimi", "Gövde Tipi", "Türkçe Anlamı" },
                    new[] {
                        new[] { "1. Grup", "laud-āre", "-ā- gövdeli", "övmek" },
                        new[] { "2. Grup", "mon-ēre", "-ē- gövdeli", "uyarmak" },
                        new[] { "3. Grup", "vinc-ere", "kısa -e- gövdeli", "yenmek" },
                        new[] { "4. Grup", "aud-īre", "-ī- gövdeli", "işitmek" },
                        new[] { "5. Grup (-io)", "cap-ere", "karma gövdeli", "almak" }
                    }
                )
            });

            f.studyTips = "5. grup fiiller mastarda 3. grup gibi -ere alır (capere), çekimde ise 4. grup gibi -i sesini korur (capio, capiebam, capiam).";
            list.Add(f);
        }

        // ====================================================================
        // T1_W13_L1: LatinceGramer13.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 13, 1, "LatinceGramer13.1.pdf",
                "ZAMİRLER: ŞAHIS VE MÜLKİYET ZAMİRLERİ (PRONOMINA)",
                "ego, tu, is/ea/id, Mülkiyet Sıfatları (meus, tuus, noster, vester) ve Sentaks Kuralları",
                "Bu fasikülde 1. şahıs (ego / nos), 2. şahıs (tu / vos) ve 3. şahıs (is, ea, id) zamirlerini, mecum/tecum kuralını, partitivus/obiectivus genitivus ayrımını (nostrum vs nostri) ve mülkiyet sıfatlarının tüm hallerdeki çekim tablolarını göreceksiniz.",
                "Orta Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "1. Şahıs Zamiri (ego / nos)", "2. Şahıs Zamiri (tu / vos)", "3. Şahıs Zamiri (is, ea, id)", "mecum / tecum Kuralı", "nostrum vs nostri Ayrımı", "meus, tuus, noster, vester Çekimleri" });
            f.vocabKeys.AddRange(new[] { "ego", "tu", "is", "ea", "id", "meus", "tuus", "noster", "vester", "cum" });

            // ego & tu
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 1. ve 2. Şahıs Zamirleri: ego / nōs ve tū / vōs",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 3 ve 4 tabloları:</p>",
                tableHtml = TableTemplates.PronounPersonalTable(
                    "1. Şahıs Zamiri: ego (ben) / nōs (biz)", "Slayt 3",
                    "ego", "meī", "mihi", "mē", "mē",
                    "nōs", "nostrum / nostrī", "nōbīs", "nōs", "nōbīs",
                    "ben", "biz",
                    "benim (bana dair)", "bizim (bizden / bize dair)",
                    "bana / benim için", "bize / bizim için",
                    "beni", "bizi",
                    "benimle / benden", "bizimle / bizden",
                    "Genetivus hali sahiplik bildirmez; kısım (nostrum) veya nesne (nostri) bildirir."
                ) + "<br>" + TableTemplates.PronounPersonalTable(
                    "2. Şahıs Zamiri: tū (sen) / vōs (siz)", "Slayt 4",
                    "tū", "tuī", "tibi", "tē", "tē",
                    "vōs", "vestrum / vestrī", "vōbīs", "vōs", "vōbīs",
                    "sen", "siz",
                    "senin (sana dair)", "sizin (sizden / size dair)",
                    "sana / senin için", "size / sizin için",
                    "seni", "sizi",
                    "seninle / senden", "sizinle / sizden",
                    "Genetivus hali sahiplik bildirmez; mülkiyet için tuus ve vester kullanılır."
                )
            });

            // 3. Person is, ea, id
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "2. 3. Şahıs Zamiri & İşaret Zamiri: is, ea, id (o / onlar)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 5 ve 6 tabloları:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "is, ea, id (o)", "Slayt 5",
                    "is", "ea", "id",
                    "—", "—", "—",
                    "eius", "eius", "eius",
                    "eī", "eī", "eī",
                    "eum", "eam", "id",
                    "eō", "eā", "eō",
                    "o", "onun", "ona", "onu", "onunla",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "eī (iī), eae, ea (onlar)", "Slayt 6",
                    "eī / iī", "eae", "ea",
                    "—", "—", "—",
                    "eōrum", "eārum", "eōrum",
                    "eīs / iīs", "eīs / iīs", "eīs / iīs",
                    "eōs", "eās", "ea",
                    "eīs / iīs", "eīs / iīs", "eīs / iīs",
                    "onlar", "onların", "onlara", "onları", "onlarla",
                    "Pluralis"
                )
            });

            // Sentaks Kurallari: cum enclitic & nostrum vs nostri
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "3. Zamirlerin Sentaks Kuralları (-cum Eki ve Kısım Genetivus'u)",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 11-16 kuralları:</p>
<ol>
  <li><strong>Özne Vurgusu:</strong> Latincede fiiller şahıs eki taşıdığından <em>ego</em>, <em>tu</em> zamirleri yalnızca tezat ve özel vurgu için kullanılır: <span class=""lat-word"">Ego eīs pecūniam dabō, quid tū dabis?</span> = Ben onlara para vereceğim, sen ne vereceksin?</li>
  <li><strong>-cum Edatının Bitişmesi:</strong> 'Birlikte' anlamına gelen <em>cum</em> edatı şahıs zamirlerinin Ablativus haline son-ek olarak bitişir: <strong>mēcum</strong> (benimle), <strong>tēcum</strong> (seninle), <strong>nōbīscum</strong> (bizimle), <strong>vōbīscum</strong> (sizinle).</li>
  <li><strong>nostrum / vestrum vs nostrī / vestrī:</strong>
    <ul>
      <li><em>Genetivus Partitivus (Kısım Bildiren):</em> <strong>vestrum / nostrum</strong> kullanılır: <span class=""lat-word"">ūnus nostrum</span> (içimizden biri), <span class=""lat-word"">nēmō vestrum</span> (içinizden hiç kimse).</li>
      <li><em>Genetivus Obiectivus (Nesne Bildiren):</em> <strong>vestrī / nostrī</strong> kullanılır: <span class=""lat-word"">amor nostrī</span> (bize duyulan sevgi), <span class=""lat-word"">metus vestrī</span> (sizden duyulan korku).</li>
    </ul>
  </li>
</ol>",
                calloutType = "rule",
                calloutTitle = "Mülkiyet Kuralı",
                calloutText = "Benim ve senin derken meī ve tuī KULLANILMAZ! Mülkiyet için daima sıfatlar kullanılır: liber meus (benim kitabım), pecunia tua (senin paran)."
            });

            // Mülkiyet Sıfatları
            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "4. Mülkiyet Sıfatları: meus, tuus, noster, vester",
                html = @"<p>Doç. Dr. Eyüp Çoraklı ders notu Slayt 17, 18, 19, 20 tabloları:</p>",
                tableHtml = TableTemplates.TriGenderTable(
                    "meus, mea, meum (benim, bana ait)", "Slayt 17",
                    "meus", "mea", "meum",
                    "mī", "mea", "meum",
                    "meī", "meae", "meī",
                    "meō", "meae", "meō",
                    "meum", "meam", "meum",
                    "meō", "meā", "meō",
                    "benim", "benimin", "benime", "benimi", "benimle",
                    "Singularis"
                ) + "<br>" + TableTemplates.TriGenderTable(
                    "noster, nostra, nostrum (bizim, bize ait)", "Slayt 19",
                    "noster", "nostra", "nostrum",
                    "noster", "nostra", "nostrum",
                    "nostrī", "nostrae", "nostrī",
                    "nostrō", "nostrae", "nostrō",
                    "nostrum", "nostram", "nostrum",
                    "nostrō", "nostrā", "nostrō",
                    "bizim", "bizimin", "bizime", "bizimi", "bizimle",
                    "Singularis"
                )
            });

            f.studyTips = "meus sıfatının tekil eril Vocativus hali mī şeklindedir: mī fīlī! (ey oğlum), mī amīce! (ey dostum).";
            list.Add(f);
        }

        // ====================================================================
        // T1_W13_L2: LatinceGramer13.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 13, 2, "LatinceGramer13.2.pdf",
                "TÜRKÇEDEN LATİNCEYE CÜMLE ÇEVİRİLERİ 2",
                "Zamirli Yapılar, Şahıs ve Mülkiyet Pekiştirmesi ve Sentaks Alıştırmaları",
                "Bu fasikülde zamirlerin, mülkiyet yapılarının ve 3. grup isimlerle karma fiillerin yer aldığı 21 slaytlık Türkçe-Latince çeviri maratonunu ve sentaks çözümlerini inceleyeceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Türkçeden Latinceye Çeviri 2", "Zamirlerin Sentaksı", "mecum ve tecum Pratikleri", "İleri Düzey Cümle Kuruluşu" });
            f.vocabKeys.AddRange(new[] { "ego", "tu", "is", "ea", "id", "meus", "tuus", "noster", "vester", "pecunia", "filius", "patria", "amicitia" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Zamirli Cümlelerin Çeviri İncelikleri",
                html = @"<p>Türkçeden Latinceye çeviri yaparken zamirlerin yerleşimine ve durumuna dikkat ediniz:</p>
<ul>
  <li>'Onu kadına gönderdiler' derken nesne eril ise <strong>eum</strong>, yönelme dişil ise <strong>ad eam</strong> kullanılır: <span class=""lat-word"">Eum ad eam mittebant.</span></li>
  <li>'Benimle' derken <em>cum me</em> değil daima <strong>mēcum</strong> yazılır.</li>
</ul>"
            });

            f.studyTips = "Cümlelerde zamirlerin hangi ismin yerini tuttuğunu ve o ismin cinsiyetini doğru belirleyiniz.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W14_L1: LatinceGramer14.1.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 14, 1, "LatinceGramer14.1.pdf",
                "GÜZ DÖNEMİ BÜYÜK CÜMLE VE METİN TAHLİLİ MARATONU 1",
                "Cicero, Horatius, Terentius ve Plinius'tan 35 Slaytlık Özgün Metinler ve Sentaks Çözümlemeleri",
                "Bu fasikülde 1. dönemin tüm gramer konularını (1, 2, 3. grup isimler, 1, 2, 3, 4, 5. grup fiiller, sıfatlar, zamirler) kapsayan ve Klasik Latin edebiyatının dev yazarlarından seçilmiş 35 slaytlık devasa cümle külliyatını göreceksiniz.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "Klasik Yazar Antolojisi", "Cicero Cümleleri", "Horatius Şiir Dizeleri", "Terentius Komedyaları", "Plinius Mektupları", "Kapsamlı Sentaks Analizi" });
            f.vocabKeys.AddRange(new[] { "Cicero", "Horatius", "Terentius", "Plinius", "virtus", "veritas", "cupiditas", "senectus", "libertas", "remedium", "morbus", "carmen", "scriptor" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. Klasik Yazarların Özgün Cümlelerini Çözümleme Stratejisi",
                html = @"<p>Doç. Dr. Eyüp Çoraklı'nın 14. hafta seminerlerinde vurguladığı gibi, edebi Latince metinlerde:</p>
<ol>
  <li>Yüklemler çoğunlukla cümlenin en sonundadır.</li>
  <li>Vurgulanmak istenen kilit kavram cümlenin en başına alınır.</li>
  <li>İlgili sıfat ile isim arasına bazen başka kelimeler girebilir (hiperbaton).</li>
  <li>Aşağıdaki cümlelerde her bir kelimeye tıklayarak yazarın edebi üslubunu ve sözcük seçimini morfolojik olarak inceleyebilirsiniz.</li>
</ol>",
                calloutType = "info",
                calloutTitle = "Yazar Rozetleri",
                calloutText = "Her cümlenin altında yer alan antik yazar adı (Cicero, Horatius vb.) yazar rozeti olarak ayrılmış olup tıklanabilir Latince kelime havuzuna dahil edilmemiştir."
            });

            f.studyTips = "Metinlerdeki fiillerin zamanını ve çatısını tespit ederek cümlenin omurgasını kurunuz.";
            list.Add(f);
        }

        // ====================================================================
        // T1_W14_L2: LatinceGramer14.2.pdf
        // ====================================================================
        {
            var f = CreateFasicule(1, 14, 2, "LatinceGramer14.2.pdf",
                "GÜZ DÖNEMİ BÜYÜK CÜMLE VE METİN TAHLİLİ MARATONU 2 & DÖNEM FİNALİ",
                "Felsefi Metinler, İncil Metinleri (Genesis), Seneca ve Livius Analizleri",
                "Bu fasikülde 1. yarıyılın final dersi olan 21 slaytlık felsefi ve edebi metinleri, Seneca'nın ahlak mektuplarını, Genesis metinlerini ve 1. Dönem genel sentaks sentezini eksiksiz çözümlemeleriyle tamamlayacaksınız.",
                "İleri Seviye", docSlideCountMap);

            f.topics.AddRange(new[] { "1. Yarıyıl Final Değerlendirmesi", "Seneca Felsefesi", "Genesis Metinleri", "Genel Sentaks Sentezi", "İleri Çeviri Pratikleri" });
            f.vocabKeys.AddRange(new[] { "Seneca", "Genesis", "Livius", "creo", "caelum", "terra", "homo", "animus", "diligō", "consul", "iungo" });

            f.sections.Add(new BuildAuthoritativeFasicules.FasiculeSection {
                title = "1. 1. Yarıyıl Gramer Külliyatı ve 2. Yarıyıla Geçiş Rehberi",
                html = @"<p>Tebrikler! 1. Yarıyıl (Güz Dönemi) boyunca Latin dilinin şu temel yapı taşlarını eksiksiz öğrendiniz:</p>
<ul>
  <li><strong>İsimler:</strong> 1. Grup (-a, -ae), 2. Grup (-us, -er, -ir, -um) ve 3. Grup (sessiz ve -i gövdeliler) isim çekimleri.</li>
  <li><strong>Fiiller:</strong> 1, 2, 3, 4 ve 5. Grup fiillerin etken çatıdaki Praesens, Imperfectum, Futurum I zamanları ve Imperativus kipi.</li>
  <li><strong>Sıfatlar:</strong> 1. ve 2. Sınıf sıfatlar ile UNUS NAUTA düzensiz sıfatları.</li>
  <li><strong>Zamirler:</strong> Şahıs ve mülkiyet zamirleri (ego, tu, is/ea/id).</li>
  <li><strong>Düzensiz Fiiller:</strong> esse ve posse fiilleri.</li>
</ul>
<p>2. Dönemde ise işaret zamirleri (hic, ille, iste), Perfectum sistemi (bitmiş zamanlar), 3. sınıf sıfatlar, 4. ve 5. çekim isimler, sayılar, Edilgen Çatı (Vox Passiva) ve İlgi Zamirleri (qui, quae, quod) ile Latinceyi en üst düzeye taşıyacaksınız!</p>",
                calloutType = "rule",
                calloutTitle = "Dönem Başarısı",
                calloutText = "Tüm bu konuların çekim tablolarını ve cümle tahlillerini fasikül indeksinden tekrar tekrar gözden geçirebilirsiniz."
            });

            f.studyTips = "2. döneme başlamadan önce 1. dönemdeki 5 fiil çekim grubunun şimdiki, hikaye ve gelecek zaman eklerini sağlamlaştırdığınızdan emin olunuz.";
            list.Add(f);
        }
    }
}
