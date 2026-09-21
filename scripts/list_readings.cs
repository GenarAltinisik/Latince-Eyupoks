using System;
using System.IO;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        string js = File.ReadAllText(@"data\eyup_curriculum.js");
        var matches = Regex.Matches(js, @"""title""\s*:\s*""([^""]*Okuma Parçası[^""]*)""");
        Console.WriteLine("Found: " + matches.Count);
        for (int i = 0; i < matches.Count; i++)
        {
            Console.WriteLine((i + 1) + ". " + matches[i].Groups[1].Value);
        }
    }
}
