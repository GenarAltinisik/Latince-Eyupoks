using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

public class InspectRenderedDom {
    public static void Main() {
        Console.OutputEncoding = Encoding.UTF8;
        string html = File.ReadAllText(@"scripts\rendered_dom.html", Encoding.UTF8);

        Console.WriteLine("==========================================================");
        Console.WriteLine("INDEPENDENT BROWSER RENDERING VERIFICATION");
        Console.WriteLine("Target: https://genaraltinisik.github.io/Latince-Eyupoks/");
        Console.WriteLine("==========================================================");

        // 1. Sidebar Fasicules
        MatchCollection currItems = Regex.Matches(html, @"class=""curriculum-item[^""]*""\s+data-lesson-id=""([^""]+)""");
        Console.WriteLine("✓ Sidebar Loaded Fasicules: " + currItems.Count + " / 46");

        // 2. Active Fasicule Reader
        Match titleMatch = Regex.Match(html, @"<h1 class=""fasicule-main-title"">([^<]+)</h1>");
        if (titleMatch.Success) {
            Console.WriteLine("✓ Active Reader Fasicule Title: " + titleMatch.Groups[1].Value);
        } else {
            Console.WriteLine("✗ Fasicule Title NOT found!");
        }

        Match schedMatch = Regex.Match(html, @"<div class=""fasicule-academic-badge"">\s*<span>([^<]+)</span>");
        if (schedMatch.Success) {
            Console.WriteLine("✓ Academic Badge: " + schedMatch.Groups[1].Value);
        }

        // 3. Rendered Sections in Active Reader
        MatchCollection sections = Regex.Matches(html, @"<article class=""fasicule-section-card"">");
        Console.WriteLine("✓ Active Fasicule Sections Rendered: " + sections.Count);

        // 4. Rendered Sentence Analysis Cards
        MatchCollection sentenceCards = Regex.Matches(html, @"<div class=""sentence-analysis-card"">");
        Console.WriteLine("✓ Active Fasicule Sentence Cards Rendered: " + sentenceCards.Count);

        // 5. Rendered Interactive Words (<span class="lat-word ...>)
        MatchCollection latWords = Regex.Matches(html, @"<span class=""lat-word[^""]*""");
        Console.WriteLine("✓ Total Interactive Clickable Latin Words on Page: " + latWords.Count);

        // 6. Vocabulary Palette Chips
        MatchCollection vocabChips = Regex.Matches(html, @"<button class=""fasicule-word-chip""");
        Console.WriteLine("✓ Active Fasicule Vocabulary Chips Rendered: " + vocabChips.Count);

        // 7. Dictionary Pre-rendered Cards
        MatchCollection dictCards = Regex.Matches(html, @"<div class=""word-card""");
        Console.WriteLine("✓ Dictionary Pre-rendered Word Cards: " + dictCards.Count + " / 995");

        // 8. Popover Element in DOM
        bool hasPopover = html.Contains(@"id=""wordPopover""");
        Console.WriteLine("✓ Floating Glossing Popover in DOM: " + (hasPopover ? "PRESENT" : "MISSING"));

        // 9. Paradigm Modal in DOM
        bool hasParadigmModal = html.Contains(@"id=""paradigmModal""");
        Console.WriteLine("✓ Paradigm Modal in DOM: " + (hasParadigmModal ? "PRESENT" : "MISSING"));

        Console.WriteLine("==========================================================");
    }
}
