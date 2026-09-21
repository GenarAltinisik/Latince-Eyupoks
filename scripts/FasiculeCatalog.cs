using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

public static partial class FasiculeCatalog {

    public static List<BuildAuthoritativeFasicules.Fasicule> BuildAllFasicules(
        Func<string, List<string>> getSlideTexts, 
        Dictionary<string, int> docSlideCountMap,
        Dictionary<string, BuildAuthoritativeFasicules.VocabItem> vocabMap
    ) {
        List<BuildAuthoritativeFasicules.Fasicule> list = new List<BuildAuthoritativeFasicules.Fasicule>();

        // Build Term 1 Fasicules (Weeks 1 to 14)
        BuildTerm1Fasicules(list, getSlideTexts, docSlideCountMap, vocabMap);

        // Build Term 2 Fasicules (Weeks 1 to 14)
        BuildTerm2Fasicules(list, getSlideTexts, docSlideCountMap, vocabMap);

        return list;
    }

    // Helper to create a standardized Fasicule with academic calendar metadata
    public static BuildAuthoritativeFasicules.Fasicule CreateFasicule(
        int term,
        int week,
        int lecture,
        string sourceFile,
        string title,
        string subtitle,
        string summary,
        string difficulty,
        Dictionary<string, int> docSlideCountMap
    ) {
        string termName = term == 1 ? "1. Dönem (Güz Yarıyılı)" : "2. Dönem (Bahar Yarıyılı)";
        string courseCode = term == 1 ? "Latince Gramer 1" : "Latince Gramer 2";
        string schedule = termName + " • " + week + ". Hafta (" + lecture + ". Ders)";
        int sCount = docSlideCountMap.ContainsKey(sourceFile) ? docSlideCountMap[sourceFile] : 20;

        return new BuildAuthoritativeFasicules.Fasicule {
            id = "T" + term + "_W" + week + "_L" + lecture,
            term = term,
            termName = termName,
            courseCode = courseCode,
            week = week,
            lecture = lecture,
            academicSchedule = schedule,
            sourceFile = sourceFile,
            slideCount = sCount,
            title = title,
            subtitle = subtitle,
            summary = summary,
            difficulty = difficulty
        };
    }

    public static BuildAuthoritativeFasicules.Fasicule CreateFasicule(
        int term,
        int week,
        int lecture,
        string sourceFile,
        string title,
        string subtitle,
        string summary,
        string difficulty,
        string legacyDurationIgnored,
        Dictionary<string, int> docSlideCountMap
    ) {
        return CreateFasicule(term, week, lecture, sourceFile, title, subtitle, summary, difficulty, docSlideCountMap);
    }
}
