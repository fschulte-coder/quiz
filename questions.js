const quizData = {
  leicht: [
    // --- REGELWERK & BASICS ---
    {
      question: "Wie viele Feldspieler stehen im Hallenhandball pro Team gleichzeitig auf dem Spielfeld?",
      options: ["5 Feldspieler", "6 Feldspieler", "7 Feldspieler", "8 Feldspieler"],
      correct: 1,
      explanation: "Ein Team besteht auf dem Spielfeld aus 6 Feldspielern und einem Torwart. Insgesamt agieren also 6 Feldspieler pro Seite."
    },
    {
      question: "Wie lange dauert ein reguläres Handballspiel bei den Erwachsenen?",
      options: ["2x 20 Minuten", "2x 25 Minuten", "2x 30 Minuten", "2x 35 Minuten"],
      correct: 2,
      explanation: "Die reguläre Spielzeit im Erwachsenenbereich beträgt 2x 30 Minuten mit einer 15-minütigen Halbzeitpause."
    },
    {
      question: "Wie viele Schritte darf ein Spieler mit dem Ball laufen, ohne zu prellen?",
      options: ["Maximal 2 Schritte", "Maximal 3 Schritte", "Maximal 4 Schritte", "Unbegrenzt"],
      correct: 1,
      explanation: "Im Handball gilt die 3-Schritte-Regel. Für jeden weiteren Schritt ohne Prellen gibt es Schrittfehler und Ballverlust."
    },
    {
      question: "Aus welcher Distanz wird ein Strafwurf (Handball-'Penalty') geworfen?",
      options: ["6 Meter", "7 Meter", "8 Meter", "9 Meter"],
      correct: 1,
      explanation: "Der Strafwurf wird von der 7-Meter-Linie ausgeführt. Er wird verhängt, wenn eine klare Torgelegenheit regelwidrig vereitelt wurde."
    },

    // --- PROFI-HANDBALL (DEUTSCHLAND) ---
    {
      question: "Wie heißt die höchste deutsche Spielklasse im Männer-Handball?",
      options: ["Handball-Bundesliga (HBL)", "DEL", "BBL", "2. Handball-Bundesliga"],
      correct: 0,
      explanation: "Die 1. Handball-Bundesliga (oft Liqui Moly HBL) ist die höchste deutsche Spielklasse und gilt als stärkste Liga der Welt."
    },
    {
      question: "Welcher deutsche Verein ist Rekordmeister in der Männer-Bundesliga?",
      options: ["SG Flensburg-Handewitt", "THW Kiel", "SC Magdeburg", "VfL Gummersbach"],
      correct: 1,
      explanation: "Der THW Kiel ist mit Abstand deutscher Rekordmeister und dominiert seit Jahrzehnten die Bundesliga."
    },

    // --- BEACH HANDBALL ---
    {
      question: "Auf welchem Untergrund wird Beachhandball gespielt?",
      options: ["Kunstrasen", "Feiner Sand", "Hartplatz", "Asphalt"],
      correct: 1,
      explanation: "Beachhandball wird barfuß auf einem Sandfeld (27 x 12 Meter) gespielt, was völlig andere Bewegungsmuster erfordert."
    },
    {
      question: "Wie viele Punkte ist ein spektakulärer 'Spin Shot' (Drehsprungtor) im Beachhandball wert?",
      options: ["1 Punkt", "2 Punkte", "3 Punkte", "4 Punkte"],
      correct: 1,
      explanation: "Attraktive Tore wie Spin Shots (360-Grad-Drehungen) oder Kempa-Tore zählen im Beachhandball doppelt (2 Punkte)."
    }
  ],

  mittel: [
    // --- TAKTIK & POSITIONEN ---
    {
      question: "Was versteht man unter einer '6:0-Abwehr'?",
      options: [
        "Alle 6 Feldspieler stehen an der 6-Meter-Linie",
        "Ein Spieler deckt mannodeckend an der 9-Meter-Linie",
        "Sechs Spieler stehen an der Mittellinie",
        "Es wird ohne Torwart gespielt"
      ],
      correct: 0,
      explanation: "Die 6:0-Abwehr ist die klassische defensivste Abwehrformation. Alle sechs Feldspieler verschieben auf Höhe des Freiwurf-/Torraumkreises."
    },
    {
      question: "Was bedeutet das taktische Mittel des '7 gegen 6' im Ballbesitz?",
      options: [
        "Ein Zeitstrafen-Überzahlspiel",
        "Der Torwart verlässt das Feld für einen 7. Feldspieler",
        "Eine Penalty-Variante",
        "Ein Fehler bei der Auswechslung"
      ],
      correct: 1,
      explanation: "Beim 7-gegen-6 nimmt der Trainer den Torwart vom Feld und ersetzt ihn durch einen 7. Feldspieler (Zusatzleibchen ist seit 2016 nicht mehr nötig)."
    },

    // --- DEUTSCHER PROFI-HANDBALL & NATIONALTEAM ---
    {
      question: "In welchem Jahr wurde die deutsche Männer-Nationalmannschaft als 'Wintermärchen' Europameister?",
      options: ["2007", "2016", "2019", "2021"],
      correct: 1,
      explanation: "Unter Trainer Dagur Sigurdsson gewann die 'Bad Boys'-Truppe 2016 überraschend die EM in Polen gegen Spanien."
    },
    {
      question: "Wo findet traditionell das 'DHB-Pokal Final Four' der Männer statt?",
      options: ["Berlin (Max-Schmeling-Halle)", "Köln (LANXESS arena)", "Hamburg (Barclays Arena)", "München (SAP Garden)"],
      correct: 1,
      explanation: "Das Final Four um den DHB-Pokal zog nach vielen Jahren in Hamburg in die LANXESS arena nach Köln um, die als 'Kathedrale des Handballs' gilt."
    },

    // --- BEACH HANDBALL ---
    {
      question: "Wie wird ein Unentschieden im Beachhandball nach zwei Sätzen entschieden?",
      options: ["Verlängerung 2x 5 Min.", "Shoot-Out (1 gegen Torwart)", "Siebenmeterwerfen", "Münzwurf"],
      correct: 1,
      explanation: "Beachhandball wird in 2 Sätzen gespielt. Steht es 1:1 nach Sätzen, entscheidet ein spektakuläres Shoot-Out (Sonderform des Konters)."
    },
    {
      question: "Welche besondere Rolle nimmt der 'Specialist' im Beachhandball ein?",
      options: [
        "Er darf als einziger prellen",
        "Seine Tore zählen immer doppelt (2 Punkte)",
        "Er führt alle Freiwürfe aus",
        "Er ist der einzige Abwehrspieler"
      ],
      correct: 1,
      explanation: "Der Specialist (oft auch der eingewechselte Torwart) trägt ein andersfarbiges Trikot. Jedes seiner Tore bringt dem Team automatisch 2 Punkte."
    }
  ],

  schwer: [
    // --- SPECIAL REGELN & TAKTIK ---
    {
      question: "Wann wird beim 'Passiven Spiel' (Vorwarnzeichen der Schiedsrichter) auf Ballverlust entschieden?",
      options: [
        "Nach spätestens 3 Pässen",
        "Nach maximal 4 Pässen",
        "Nach genau 6 Pässen",
        "Es gibt keine Pass-Begrenzung"
      ],
      correct: 1,
      explanation: "Nach dem Vorwarnzeichen (gehobener Arm der Schiedsrichter) bleiben der angreifenden Mannschaft noch maximal 4 Pässe für den Torauswurf."
    },
    {
      question: "Was markiert die gestrichelte Linie auf dem Spielfeld im Hallenhandball?",
      options: ["Die 6-Meter-Zone", "Die 7-Meter-Linie", "Die 9-Meter-Freiwurflinie", "Die Auswechsellinie"],
      correct: 2,
      explanation: "Die gestrichelte 9-Meter-Linie ist die Freiwurflinie. Bei Fouls innerhalb der 9-Meter-Zone muss der Freiwurf von hier ausgeführt werden."
    },

    // --- HISTORIE & PROFI-WISSEN ---
    {
      question: "Wer ist der Rekordtorschütze der eingleisigen deutschen Handball-Bundesliga aller Zeiten?",
      options: ["Stefan Kretzschmar", "Yoon Kyung-shin", "Lars Christiansen", "Robert Weber"],
      correct: 1,
      explanation: "Der Südkoreaner Yoon Kyung-shin ist mit über 2.905 Toren der erfolgreichste Feldtorschütze in der Geschichte der Handball-Bundesliga."
    },

    // --- BEACH HANDBALL REFEEREE RULES ---
    {
      question: "Wie viele Feldspieler stehen beim Beachhandball gleichzeitig für ein Team im Sand?",
      options: ["3 Feldspieler + 1 Torwart", "4 Feldspieler + 1 Torwart", "5 Feldspieler", "2 Feldspieler + 1 Torwart"],
      correct: 0,
      explanation: "Beachhandball ist extrem schnell: Es spielen nur 3 Feldspieler und 1 Torwart (bzw. Specialist) pro Mannschaft im Sand."
    }
  ]
};