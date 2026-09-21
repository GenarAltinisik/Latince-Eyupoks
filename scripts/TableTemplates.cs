using System;
using System.Text;

public static class TableTemplates {

    public static string NounTable(
        string title,
        string lemma, string genitive, string gender, string meaning,
        string nomSg, string vocSg, string genSg, string datSg, string accSg, string ablSg,
        string nomPl, string vocPl, string genPl, string datPl, string accPl, string ablPl,
        string trNomSg, string trNomPl,
        string trVocSg, string trVocPl,
        string trGenSg, string trGenPl,
        string trDatSg, string trDatPl,
        string trAccSg, string trAccPl,
        string trAblSg, string trAblPl,
        string note = ""
    ) {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("<div class=\"inflection-table-wrapper\">");
        sb.AppendLine("  <div class=\"table-header-bar\">");
        sb.AppendLine("    <span class=\"table-badge\">İSİM ÇEKİM TABLOSU</span>");
        sb.AppendLine("    <strong class=\"table-title\">" + title + "</strong>");
        sb.AppendLine("    <span class=\"table-sub\">(" + lemma + ", " + genitive + ", " + gender + " — " + meaning + ")</span>");
        sb.AppendLine("  </div>");
        sb.AppendLine("  <table class=\"inflection-table\">");
        sb.AppendLine("    <thead>");
        sb.AppendLine("      <tr>");
        sb.AppendLine("        <th>Casus (Hal)</th>");
        sb.AppendLine("        <th>Singularis (Tekil)</th>");
        sb.AppendLine("        <th>Pluralis (Çoğul)</th>");
        sb.AppendLine("        <th>Türkçe Karşılığı</th>");
        sb.AppendLine("      </tr>");
        sb.AppendLine("    </thead>");
        sb.AppendLine("    <tbody>");

        Action<string, string, string, string, string> addRow = (cName, sVal, pVal, trS, trP) => {
            string trCombined = trS + (string.IsNullOrEmpty(trP) ? "" : " / " + trP);
            sb.AppendLine("      <tr>");
            sb.AppendLine("        <td><strong>" + cName + "</strong></td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + sVal + "</td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + pVal + "</td>");
            sb.AppendLine("        <td class=\"case-cell-tr\">" + trCombined + "</td>");
            sb.AppendLine("      </tr>");
        };

        addRow("Nominativus (Nom.)", nomSg, nomPl, trNomSg, trNomPl);
        addRow("Vocativus (Voc.)", vocSg, vocPl, trVocSg, trVocPl);
        addRow("Genetivus (Gen.)", genSg, genPl, trGenSg, trGenPl);
        addRow("Dativus (Dat.)", datSg, datPl, trDatSg, trDatPl);
        addRow("Accusativus (Acc.)", accSg, accPl, trAccSg, trAccPl);
        addRow("Ablativus (Abl.)", ablSg, ablPl, trAblSg, trAblPl);

        sb.AppendLine("    </tbody>");
        sb.AppendLine("  </table>");
        if (!string.IsNullOrEmpty(note)) {
            sb.AppendLine("  <div class=\"table-note-footer\"><em>Not:</em> " + note + "</div>");
        }
        sb.AppendLine("</div>");
        return sb.ToString();
    }

    public static string VerbTable(
        string title,
        string lemma, string inf, string meaning, string tenseName,
        string s1, string s2, string s3,
        string p1, string p2, string p3,
        string tr1, string tr2, string tr3,
        string tr4, string tr5, string tr6,
        string note = ""
    ) {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("<div class=\"inflection-table-wrapper\">");
        sb.AppendLine("  <div class=\"table-header-bar\">");
        sb.AppendLine("    <span class=\"table-badge\">FİİL ÇEKİM TABLOSU</span>");
        sb.AppendLine("    <strong class=\"table-title\">" + title + " — " + tenseName + "</strong>");
        sb.AppendLine("    <span class=\"table-sub\">(" + lemma + ", " + inf + " — " + meaning + ")</span>");
        sb.AppendLine("  </div>");
        sb.AppendLine("  <table class=\"inflection-table\">");
        sb.AppendLine("    <thead>");
        sb.AppendLine("      <tr>");
        sb.AppendLine("        <th>Persona & Numerus</th>");
        sb.AppendLine("        <th>Latince Biçim</th>");
        sb.AppendLine("        <th>Türkçe Anlamı</th>");
        sb.AppendLine("      </tr>");
        sb.AppendLine("    </thead>");
        sb.AppendLine("    <tbody>");

        Action<string, string, string> addRow = (pName, latVal, trVal) => {
            sb.AppendLine("      <tr>");
            sb.AppendLine("        <td><strong>" + pName + "</strong></td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + latVal + "</td>");
            sb.AppendLine("        <td class=\"case-cell-tr\">" + trVal + "</td>");
            sb.AppendLine("      </tr>");
        };

        addRow("1. Singularis (Ben)", s1, tr1);
        addRow("2. Singularis (Sen)", s2, tr2);
        addRow("3. Singularis (O)", s3, tr3);
        addRow("1. Pluralis (Biz)", p1, tr4);
        addRow("2. Pluralis (Siz)", p2, tr5);
        addRow("3. Pluralis (Onlar)", p3, tr6);

        sb.AppendLine("    </tbody>");
        sb.AppendLine("  </table>");
        if (!string.IsNullOrEmpty(note)) {
            sb.AppendLine("  <div class=\"table-note-footer\"><em>Not:</em> " + note + "</div>");
        }
        sb.AppendLine("</div>");
        return sb.ToString();
    }

    public static string TriGenderTable(
        string title,
        string meaning,
        string nomM, string nomF, string nomN,
        string vocM, string vocF, string vocN,
        string genM, string genF, string genN,
        string datM, string datF, string datN,
        string accM, string accF, string accN,
        string ablM, string ablF, string ablN,
        string trNom, string trGen, string trDat, string trAcc, string trAbl,
        string numLabel = "Singularis (Tekil)",
        string note = ""
    ) {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("<div class=\"inflection-table-wrapper\">");
        sb.AppendLine("  <div class=\"table-header-bar\">");
        sb.AppendLine("    <span class=\"table-badge\">ÜÇ CİNSLİ ÇEKİM TABLOSU</span>");
        sb.AppendLine("    <strong class=\"table-title\">" + title + " (" + numLabel + ")</strong>");
        if (!string.IsNullOrEmpty(meaning)) sb.AppendLine("    <span class=\"table-sub\">(" + meaning + ")</span>");
        sb.AppendLine("  </div>");
        sb.AppendLine("  <table class=\"inflection-table\">");
        sb.AppendLine("    <thead>");
        sb.AppendLine("      <tr>");
        sb.AppendLine("        <th>Casus (Hal)</th>");
        sb.AppendLine("        <th>Masculinum (Eril)</th>");
        sb.AppendLine("        <th>Femininum (Dişil)</th>");
        sb.AppendLine("        <th>Neutrum (Cinssiz)</th>");
        sb.AppendLine("        <th>Türkçe Karşılığı</th>");
        sb.AppendLine("      </tr>");
        sb.AppendLine("    </thead>");
        sb.AppendLine("    <tbody>");

        Action<string, string, string, string, string> addRow = (cName, mVal, fVal, nVal, trVal) => {
            sb.AppendLine("      <tr>");
            sb.AppendLine("        <td><strong>" + cName + "</strong></td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + mVal + "</td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + fVal + "</td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + nVal + "</td>");
            sb.AppendLine("        <td class=\"case-cell-tr\">" + trVal + "</td>");
            sb.AppendLine("      </tr>");
        };

        addRow("Nominativus", nomM, nomF, nomN, trNom);
        if (!string.IsNullOrEmpty(vocM) || !string.IsNullOrEmpty(vocF) || !string.IsNullOrEmpty(vocN)) {
            addRow("Vocativus", vocM, vocF, vocN, "Ey " + trNom);
        }
        addRow("Genetivus", genM, genF, genN, trGen);
        addRow("Dativus", datM, datF, datN, trDat);
        addRow("Accusativus", accM, accF, accN, trAcc);
        addRow("Ablativus", ablM, ablF, ablN, trAbl);

        sb.AppendLine("    </tbody>");
        sb.AppendLine("  </table>");
        if (!string.IsNullOrEmpty(note)) {
            sb.AppendLine("  <div class=\"table-note-footer\"><em>Not:</em> " + note + "</div>");
        }
        sb.AppendLine("</div>");
        return sb.ToString();
    }

    public static string ComparisonTable(
        string title,
        string subtitle,
        string[] headers,
        string[][] rows,
        string note = ""
    ) {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("<div class=\"inflection-table-wrapper\">");
        sb.AppendLine("  <div class=\"table-header-bar\">");
        sb.AppendLine("    <span class=\"table-badge\">MUKAYESE & ÖZET TABLOSU</span>");
        sb.AppendLine("    <strong class=\"table-title\">" + title + "</strong>");
        if (!string.IsNullOrEmpty(subtitle)) sb.AppendLine("    <span class=\"table-sub\">(" + subtitle + ")</span>");
        sb.AppendLine("  </div>");
        sb.AppendLine("  <table class=\"inflection-table\">");
        sb.AppendLine("    <thead>");
        sb.AppendLine("      <tr>");
        foreach (var h in headers) sb.AppendLine("        <th>" + h + "</th>");
        sb.AppendLine("      </tr>");
        sb.AppendLine("    </thead>");
        sb.AppendLine("    <tbody>");
        foreach (var r in rows) {
            sb.AppendLine("      <tr>");
            for (int i = 0; i < r.Length; i++) {
                if (i == 0) sb.AppendLine("        <td><strong>" + r[i] + "</strong></td>");
                else if (i == r.Length - 1 && (headers[headers.Length - 1].Contains("Türkçe") || headers[headers.Length - 1].Contains("Anlam"))) {
                    sb.AppendLine("        <td class=\"case-cell-tr\">" + r[i] + "</td>");
                } else {
                    sb.AppendLine("        <td class=\"case-cell-latin\">" + r[i] + "</td>");
                }
            }
            sb.AppendLine("      </tr>");
        }
        sb.AppendLine("    </tbody>");
        sb.AppendLine("  </table>");
        if (!string.IsNullOrEmpty(note)) {
            sb.AppendLine("  <div class=\"table-note-footer\"><em>Not:</em> " + note + "</div>");
        }
        sb.AppendLine("</div>");
        return sb.ToString();
    }

    public static string ImperativeTable(
        string title,
        string[][] verbEntries,
        string note = ""
    ) {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("<div class=\"inflection-table-wrapper\">");
        sb.AppendLine("  <div class=\"table-header-bar\">");
        sb.AppendLine("    <span class=\"table-badge\">EMİR KİPİ (IMPERATIVUS) TABLOSU</span>");
        sb.AppendLine("    <strong class=\"table-title\">" + title + "</strong>");
        sb.AppendLine("  </div>");
        sb.AppendLine("  <table class=\"inflection-table\">");
        sb.AppendLine("    <thead>");
        sb.AppendLine("      <tr>");
        sb.AppendLine("        <th>Fiil & Anlam</th>");
        sb.AppendLine("        <th>2. Tekil (Sen)</th>");
        sb.AppendLine("        <th>2. Çoğul (Siz)</th>");
        sb.AppendLine("        <th>Olumsuz Tekil (Sen)</th>");
        sb.AppendLine("        <th>Olumsuz Çoğul (Siz)</th>");
        sb.AppendLine("      </tr>");
        sb.AppendLine("    </thead>");
        sb.AppendLine("    <tbody>");
        foreach (var v in verbEntries) {
            sb.AppendLine("      <tr>");
            sb.AppendLine("        <td><strong>" + v[0] + "</strong><br><small class=\"case-cell-tr\">" + v[1] + "</small></td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + v[2] + "</td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + v[3] + "</td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + (v.Length > 4 ? v[4] : "-") + "</td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + (v.Length > 5 ? v[5] : "-") + "</td>");
            sb.AppendLine("      </tr>");
        }
        sb.AppendLine("    </tbody>");
        sb.AppendLine("  </table>");
        if (!string.IsNullOrEmpty(note)) {
            sb.AppendLine("  <div class=\"table-note-footer\"><em>Not:</em> " + note + "</div>");
        }
        sb.AppendLine("</div>");
        return sb.ToString();
    }

    public static string PronounPersonalTable(
        string title,
        string personLabel,
        string nomSg, string genSg, string datSg, string accSg, string ablSg,
        string nomPl, string genPl, string datPl, string accPl, string ablPl,
        string trNomSg, string trNomPl,
        string trGenSg, string trGenPl,
        string trDatSg, string trDatPl,
        string trAccSg, string trAccPl,
        string trAblSg, string trAblPl,
        string note = ""
    ) {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine("<div class=\"inflection-table-wrapper\">");
        sb.AppendLine("  <div class=\"table-header-bar\">");
        sb.AppendLine("    <span class=\"table-badge\">ŞAHIS ZAMİRİ TABLOSU</span>");
        sb.AppendLine("    <strong class=\"table-title\">" + title + "</strong>");
        sb.AppendLine("    <span class=\"table-sub\">(" + personLabel + ")</span>");
        sb.AppendLine("  </div>");
        sb.AppendLine("  <table class=\"inflection-table\">");
        sb.AppendLine("    <thead>");
        sb.AppendLine("      <tr>");
        sb.AppendLine("        <th>Casus (Hal)</th>");
        sb.AppendLine("        <th>Singularis (Tekil)</th>");
        sb.AppendLine("        <th>Pluralis (Çoğul)</th>");
        sb.AppendLine("        <th>Türkçe Karşılığı</th>");
        sb.AppendLine("      </tr>");
        sb.AppendLine("    </thead>");
        sb.AppendLine("    <tbody>");
        Action<string, string, string, string, string> addRow = (cName, sVal, pVal, trS, trP) => {
            sb.AppendLine("      <tr>");
            sb.AppendLine("        <td><strong>" + cName + "</strong></td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + sVal + "</td>");
            sb.AppendLine("        <td class=\"case-cell-latin\">" + pVal + "</td>");
            sb.AppendLine("        <td class=\"case-cell-tr\">" + trS + " / " + trP + "</td>");
            sb.AppendLine("      </tr>");
        };
        addRow("Nominativus", nomSg, nomPl, trNomSg, trNomPl);
        addRow("Genetivus", genSg, genPl, trGenSg, trGenPl);
        addRow("Dativus", datSg, datPl, trDatSg, trDatPl);
        addRow("Accusativus", accSg, accPl, trAccSg, trAccPl);
        addRow("Ablativus", ablSg, ablPl, trAblSg, trAblPl);
        sb.AppendLine("    </tbody>");
        sb.AppendLine("  </table>");
        if (!string.IsNullOrEmpty(note)) {
            sb.AppendLine("  <div class=\"table-note-footer\"><em>Not:</em> " + note + "</div>");
        }
        sb.AppendLine("</div>");
        return sb.ToString();
    }
}
