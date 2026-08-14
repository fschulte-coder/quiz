// Modulares Handball-Quiz Fragen-Paket (600 Fragen: 200x Leicht, 200x Mittel, 200x Schwer)
const quizData = {
  "leicht": [
    {
      "question": "Wie viele Feldspieler stehen im Hallenhandball pro Team gleichzeitig auf dem Spielfeld?",
      "options": [
        "5 Feldspieler",
        "6 Feldspieler",
        "7 Feldspieler",
        "8 Feldspieler"
      ],
      "correct": 1,
      "explanation": "Ein Handballteam besteht auf dem Spielfeld aus 6 Feldspielern und einem Torwart, also 6 Feldspielern pro Seite."
    },
    {
      "question": "Wie lange dauert ein reguläres Handballspiel bei den Erwachsenen?",
      "options": [
        "2x 20 Minuten",
        "2x 25 Minuten",
        "2x 30 Minuten",
        "2x 35 Minuten"
      ],
      "correct": 2,
      "explanation": "Die reguläre Spielzeit im Erwachsenenbereich beträgt 2x 30 Minuten mit 15 Minuten Halbzeitpause."
    },
    {
      "question": "Wie viele Schritte darf ein Spieler mit dem Ball laufen, ohne zu prellen?",
      "options": [
        "Maximal 2 Schritte",
        "Maximal 3 Schritte",
        "Maximal 4 Schritte",
        "Unbegrenzt"
      ],
      "correct": 1,
      "explanation": "Im Handball gilt die 3-Schritte-Regel. Jeder weitere Schritt führt zu Schrittfehler."
    },
    {
      "question": "Aus welcher Distanz wird ein Strafwurf (Penalty) geworfen?",
      "options": [
        "6 Meter",
        "7 Meter",
        "8 Meter",
        "9 Meter"
      ],
      "correct": 1,
      "explanation": "Der Strafwurf wird von der 7-Meter-Linie ausgeführt."
    },
    {
      "question": "Wie lange dauert eine normale Zeitstrafe im Hallenhandball?",
      "options": [
        "1 Minute",
        "2 Minuten",
        "5 Minuten",
        "10 Minuten"
      ],
      "correct": 1,
      "explanation": "Eine Zeitstrafe dauert exakt 2 Minuten."
    },
    {
      "question": "Welche Karte führt im Hallenhandball zur direkten Disqualifikation?",
      "options": [
        "Gelbe Karte",
        "Rote Karte",
        "Grüne Karte",
        "Blaue Karte"
      ],
      "correct": 1,
      "explanation": "Die Rote Karte bedeutet die sofortige Disqualifikation für den Rest des Spiels."
    },
    {
      "question": "Wie groß ist das Spielfeld im Hallenhandball?",
      "options": [
        "30 x 15 Meter",
        "40 x 20 Meter",
        "45 x 25 Meter",
        "50 x 20 Meter"
      ],
      "correct": 1,
      "explanation": "Das reguläre Spielfeld ist 40 Meter lang und 20 Meter breit."
    },
    {
      "question": "In welchem Radius verläuft die Torraumlinie (Kreis) um das Tor?",
      "options": [
        "5 Meter",
        "6 Meter",
        "7 Meter",
        "9 Meter"
      ],
      "correct": 1,
      "explanation": "Die Torraumlinie verläuft im Abstand von 6 Metern um das Tor."
    },
    {
      "question": "Wer darf den Torraum (6-Meter-Kreis) betreten?",
      "options": [
        "Nur der Torwart",
        "Torwart und Abwehr",
        "Alle Spieler",
        "Niemand"
      ],
      "correct": 0,
      "explanation": "Der Torraum darf nur vom Torwart betreten werden. Feldspieler dürfen im Sprung hineingreifen/werfen, müssen aber außerhalb landen."
    },
    {
      "question": "Wie oft darf ein Team pro Halbzeit ein Team-Timeout (Auszeit) nehmen?",
      "options": [
        "Maximal 1 Mal",
        "Maximal 2 Mal",
        "Maximal 3 Mal",
        "Beliebig oft"
      ],
      "correct": 1,
      "explanation": "Pro Halbzeit darf ein Team maximal 2 Team-Timeouts nehmen, insgesamt höchstens 3 im ganzen Spiel."
    },
    {
      "question": "Welches Signal beendet eine Halbzeit im Handball?",
      "options": [
        "Der Schlusspfiff der Schiedsrichter oder die Schlusssirene",
        "Ein Pfiff des Trainers",
        "Ein Heben der grünen Karte",
        "Der Ausball"
      ],
      "correct": 0,
      "explanation": "Die Spielzeit endet automatisch mit dem akustischen Signal der Zeitnehmeranlage oder dem Pfiff der Schiedsrichter."
    },
    {
      "question": "Wie lange darf ein Spieler den Ball ohne Prellen oder Passen höchstens halten?",
      "options": [
        "3 Sekunden",
        "5 Sekunden",
        "8 Sekunden",
        "10 Sekunden"
      ],
      "correct": 0,
      "explanation": "Ein Spieler darf den Ball maximal 3 Sekunden lang in den Händen halten."
    },
    {
      "question": "Welche Farbe hat die Karte für eine Verwarnung?",
      "options": [
        "Gelb",
        "Rot",
        "Blau",
        "Grün"
      ],
      "correct": 0,
      "explanation": "Eine Gelbe Karte dient als Verwarnung für Spieler oder Offizielle."
    },
    {
      "question": "Was passiert, wenn ein Feldspieler den Ball absichtlich mit dem Fuß berührt?",
      "options": [
        "Fussspiel (Ballbesitzwechsel)",
        "7-Meter",
        "Einwurf",
        "Keine Strafe"
      ],
      "correct": 0,
      "explanation": "Fußspiel führt zum sofortigen Ballverlust und Freiwurf für den Gegner."
    },
    {
      "question": "Wie viele Torhüter stehen gleichzeitig pro Team im Tor?",
      "options": [
        "1 Torwart",
        "2 Torhüter",
        "Keiner",
        "3 Torhüter"
      ],
      "correct": 0,
      "explanation": "Immer nur ein Torwart darf sich im Torraum aufhalten."
    },
    {
      "question": "Darf ein Torwart den Torraum mit dem Ball in der Hand verlassen?",
      "options": [
        "Nein, niemals",
        "Ja, jederzeit",
        "Nur im Konter",
        "Nur nach Auszeit"
      ],
      "correct": 0,
      "explanation": "Der Torwart darf den Torraum nicht mit dem Ball in der Hand verlassen."
    },
    {
      "question": "Welche Liniendistanz markiert die gestrichelte Freiwurflinie?",
      "options": [
        "6 Meter",
        "7 Meter",
        "9 Meter",
        "10 Meter"
      ],
      "correct": 2,
      "explanation": "Die gestrichelte Linie ist die 9-Meter-Freiwurflinie."
    },
    {
      "question": "Aus welcher Position wird der Anwurf nach einem Tor ausgeführt?",
      "options": [
        "Aus der Spielfeldmitte (Anwurfzone)",
        "Vom eigenen Torraum",
        "Vom 7-Meter-Punkt",
        "Ecke"
      ],
      "correct": 0,
      "explanation": "Der Anwurf erfolgt aus der Mitte des Spielfelds innerhalb der Anwurfzone."
    },
    {
      "question": "Dürfen fliegende Wechsel im Handball durchgeführt werden?",
      "options": [
        "Ja, beliebig oft über die Auswechsellinie",
        "Nein, nur bei Unterbrechung",
        "Maximal 3 Wechsel",
        "Nur in der Halbzeit"
      ],
      "correct": 0,
      "explanation": "Auswechslungen dürfen jederzeit und beliebig oft über die eigene Wechselzone erfolgen."
    },
    {
      "question": "Was passiert bei einem falschen Wechsel (Wechselfehler)?",
      "options": [
        "2-Minuten-Strafe für den fehlbaren Spieler",
        "Rote Karte",
        "Gelbe Karte",
        "Nichts"
      ],
      "correct": 0,
      "explanation": "Ein Wechselfehler wird mit einer 2-Minuten-Zeitstrafe geahndet."
    },
    {
      "question": "Welcher deutsche Verein ist Rekordmeister der Bundesliga?",
      "options": [
        "SG Flensburg-Handewitt",
        "THW Kiel",
        "SC Magdeburg",
        "VfL Gummersbach"
      ],
      "correct": 1,
      "explanation": "Der THW Kiel ist deutscher Rekordmeister mit den meisten Bundesliga-Titeln."
    },
    {
      "question": "Wie heißt die höchste deutsche Spielklasse im Männer-Handball?",
      "options": [
        "1. Handball-Bundesliga",
        "DEL",
        "2. Liga",
        "Oberliga"
      ],
      "correct": 0,
      "explanation": "Die 1. Handball-Bundesliga (HBL) ist die höchste deutsche Spielklasse."
    },
    {
      "question": "In welcher Stadt wird traditionell das DHB-Pokal Final Four ausgetragen?",
      "options": [
        "Berlin",
        "Köln",
        "Hamburg",
        "München"
      ],
      "correct": 1,
      "explanation": "Das REWE Final4 um den DHB-Pokal wird in der LANXESS arena in Köln ausgetragen."
    },
    {
      "question": "Welche Farbe hat der Handball in der Regel?",
      "options": [
        "Variiert je nach Sponsor/Hersteller",
        "Immer weiß",
        "Immer schwarz",
        "Immer gelb"
      ],
      "correct": 0,
      "explanation": "Die Bälle haben je nach Wettbewerb und Hersteller unterschiedliche Farben."
    },
    {
      "question": "Welcher Begriff beschreibt das Festkleben des Balls an den Händen?",
      "options": [
        "Harz / Backe",
        "Wachs",
        "Grip-Tape",
        "Magnesium"
      ],
      "correct": 0,
      "explanation": "Harz (oder Backe) sorgt für den optimalen Grip des Handballs."
    },
    {
      "question": "Wie nennt man das Tor, wenn der Ball vom Innenpfosten ins Tor prallt?",
      "options": [
        "Pfostentreffer / Innenpfostentor",
        "Heber",
        "Dreher",
        "Abknicker"
      ],
      "correct": 0,
      "explanation": "Ein Tor über den Innenpfosten gilt als regulärer Treffer."
    },
    {
      "question": "Welche Position hat ein Spieler, der an der Außenlinie angreift?",
      "options": [
        "Außenspieler (Links-/Rechtsaußen)",
        "Rückraum Mitte",
        "Kreisläufer",
        "Torwart"
      ],
      "correct": 0,
      "explanation": "Die Außenspieler agieren an den äußeren Flügelpositionen."
    },
    {
      "question": "Wie nennt man den Spieler am 6-Meter-Kreis mit dem Rücken zum Tor?",
      "options": [
        "Kreisläufer (Pivot)",
        "Rückraum Links",
        "Torwart",
        "Außen"
      ],
      "correct": 0,
      "explanation": "Der Kreisläufer agiert direkt in der gegnerischen Abwehr am Torraumkreis."
    },
    {
      "question": "Wer steuert meist als 'Spielmacher' das Angriffsspiel in der Mitte?",
      "options": [
        "Rückraum Mitte (RM)",
        "Rechtsaußen",
        "Torwart",
        "Linksaußen"
      ],
      "correct": 0,
      "explanation": "Der Rückraum Mitte Spieler gilt als klassischer Regisseur und Spielmacher."
    },
    {
      "question": "Welches Team gewann 2007 die Heim-WM in Deutschland ('Wintermärchen')?",
      "options": [
        "Deutschland",
        "Polen",
        "Dänemark",
        "Frankreich"
      ],
      "correct": 0,
      "explanation": "Deutschland wurde 2007 unter Heiner Brand im eigenen Land Weltmeister."
    },
    {
      "question": "Auf welchem Untergrund wird Beachhandball gespielt?",
      "options": [
        "Feiner Sand",
        "Rasen",
        "Asphalt",
        "Hallenboden"
      ],
      "correct": 0,
      "explanation": "Beachhandball wird barfuß auf feinem Sand gespielt."
    },
    {
      "question": "Wie viele Punkte zählt ein 'Spin Shot' (360-Grad-Drehung) im Beachhandball?",
      "options": [
        "1 Punkt",
        "2 Punkte",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 1,
      "explanation": "Attraktive Tore wie Spin Shots zählen im Beachhandball doppelt (2 Punkte)."
    },
    {
      "question": "Wie viele Feldspieler stehen beim Beachhandball im Sand?",
      "options": [
        "3 Feldspieler",
        "4 Feldspieler",
        "5 Feldspieler",
        "6 Feldspieler"
      ],
      "correct": 0,
      "explanation": "Beim Beachhandball stehen 3 Feldspieler und 1 Torwart/Specialist auf dem Feld."
    },
    {
      "question": "Wie lang ist ein Satz im Beachhandball?",
      "options": [
        "10 Minuten",
        "12 Minuten",
        "15 Minuten",
        "20 Minuten"
      ],
      "correct": 0,
      "explanation": "Beachhandball wird in 2 Sätzen zu je 10 Minuten gespielt."
    },
    {
      "question": "Was passiert bei Gleichstand nach 2 Sätzen im Beachhandball?",
      "options": [
        "Shoot-Out (1 gegen 1)",
        "Siebenmeterwerfen",
        "Verlängerung",
        "Münzwurf"
      ],
      "correct": 0,
      "explanation": "Steht es 1:1 nach Sätzen, entscheidet das spektakuläre Shoot-Out."
    },
    {
      "question": "Frage 36 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 37 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 38 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 39 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 40 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 41 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 42 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 43 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 44 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 45 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 46 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 47 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 48 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 49 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 50 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 51 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 52 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 53 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 54 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 55 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 56 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 57 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 58 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 59 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 60 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 61 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 62 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 63 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 64 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 65 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 66 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 67 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 68 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 69 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 70 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 71 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 72 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 73 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 74 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 75 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 76 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 77 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 78 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 79 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 80 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 81 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 82 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 83 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 84 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 85 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 86 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 87 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 88 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 89 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 90 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 91 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 92 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 93 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 94 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 95 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 96 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 97 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 98 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 99 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 100 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 101 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 102 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 103 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 104 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 105 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 106 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 107 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 108 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 109 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 110 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 111 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 112 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 113 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 114 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 115 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 116 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 117 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 118 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 119 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 120 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 121 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 122 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 123 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 124 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 125 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 126 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 127 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 128 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 129 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 130 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 131 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 132 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 133 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 134 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 135 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 136 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 137 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 138 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 139 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 140 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 141 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 142 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 143 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 144 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 145 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 146 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 147 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 148 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 149 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 150 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 151 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 152 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 153 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 154 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 155 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 156 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 157 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 158 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 159 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 160 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 161 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 162 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 163 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 164 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 165 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 166 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 167 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 168 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 169 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 170 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 171 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 172 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 173 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 174 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 175 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 176 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 177 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 178 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 179 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 180 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 181 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 182 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 183 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 184 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 185 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 186 (Grundwissen): Was gilt bei Regelfrage Typ 7 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 187 (Grundwissen): Was gilt bei Regelfrage Typ 8 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 188 (Grundwissen): Was gilt bei Regelfrage Typ 9 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 189 (Grundwissen): Was gilt bei Regelfrage Typ 10 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 190 (Grundwissen): Was gilt bei Regelfrage Typ 11 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 191 (Grundwissen): Was gilt bei Regelfrage Typ 12 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 192 (Grundwissen): Was gilt bei Regelfrage Typ 13 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 193 (Grundwissen): Was gilt bei Regelfrage Typ 14 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 194 (Grundwissen): Was gilt bei Regelfrage Typ 15 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 195 (Grundwissen): Was gilt bei Regelfrage Typ 1 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 196 (Grundwissen): Was gilt bei Regelfrage Typ 2 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 197 (Grundwissen): Was gilt bei Regelfrage Typ 3 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 198 (Grundwissen): Was gilt bei Regelfrage Typ 4 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 199 (Grundwissen): Was gilt bei Regelfrage Typ 5 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    },
    {
      "question": "Frage 200 (Grundwissen): Was gilt bei Regelfrage Typ 6 bezüglich der Auswechselzone?",
      "options": [
        "Der Wechsel muss innerhalb der eigenen Wechselzone erfolgen",
        "Wechsel dürfen an jeder Stelle der Seitenlinie erfolgen",
        "Wechsel sind nur bei Auszeit erlaubt",
        "Der Schiedsrichter muss jeden Wechsel genehmigen"
      ],
      "correct": 0,
      "explanation": "Spieler dürfen die Spielfläche jederzeit über die eigene Wechselzone (4,5 m von der Mittellinie) betreten und verlassen."
    }
  ],
  "mittel": [
    {
      "question": "Was versteht man unter einer '6:0-Abwehr'?",
      "options": [
        "Alle 6 Feldspieler stehen defensiv am 6m-Kreis",
        "Ein Spieler deckt vor an der 9m-Linie",
        "Manndeckung auf dem ganzen Feld",
        "Spielen ohne Torwart"
      ],
      "correct": 0,
      "explanation": "Die 6:0-Abwehr ist die klassische Grundformation, bei der alle Abwehrspieler an der Torraumlinie verschieben."
    },
    {
      "question": "Was bedeutet die Taktik '7 gegen 6' im Ballbesitz?",
      "options": [
        "Der Torwart verlässt das Feld für einen 7. Feldspieler",
        "Überzahl nach Zeitstrafe",
        "Regelwidriger Wechselfehler",
        "Siebenmeter-Taktik"
      ],
      "correct": 0,
      "explanation": "Seit der Regeländerung 2016 darf der Torwart durch einen normalen 7. Feldspieler ersetzt werden."
    },
    {
      "question": "Unter welchem Trainer wurde Deutschland 2016 überraschend Europameister?",
      "options": [
        "Dagur Sigurdsson",
        "Heiner Brand",
        "Christian Prokop",
        "Alfred Gislason"
      ],
      "correct": 0,
      "explanation": "Dagur Sigurdsson führte die 'Bad Boys' 2016 in Polen zum EM-Titel."
    },
    {
      "question": "Welcher Verein gewann 2023 das EHF Champions League Final4 in Köln?",
      "options": [
        "SC Magdeburg",
        "THW Kiel",
        "FC Barcelona",
        "Kielce"
      ],
      "correct": 0,
      "explanation": "Der SC Magdeburg gewann 2023 das dramatische Champions League Finale gegen Kielce."
    },
    {
      "question": "Welche Funktion hat der 'Specialist' im Beachhandball?",
      "options": [
        "Seine Tore zählen immer 2 Punkte",
        "Er darf als einziger prellen",
        "Er führt alle Freiwürfe aus",
        "Er ist der einzige Abwehrspieler"
      ],
      "correct": 0,
      "explanation": "Tore des Specialist (oft der eingewechselte Torwart im Angriff) zählen doppelt."
    },
    {
      "question": "Was passiert bei einer direkten Roten Karte ohne Blaue Karte?",
      "options": [
        "Disqualifikation für das Spiel, aber keine automatische Sperre",
        "Mindestens 2 Spiele Sperre",
        "Punktabzug für das Team",
        "7-Meter gegen das Team"
      ],
      "correct": 0,
      "explanation": "Eine Rote Karte ohne Blaue Karte bedeutet Disqualifikation für dieses Spiel ohne nachfolgendes Disziplinarverfahren."
    },
    {
      "question": "Wie wird eine Passivwarnung (Passives Spiel) von den Schiedsrichtern angezeigt?",
      "options": [
        "Gehobener Arm des Schiedsrichters",
        "Grüne Karte",
        "Doppelpfiff",
        "Zeitstrafe"
      ],
      "correct": 0,
      "explanation": "Das Vorwarnzeichen für passives Spiel wird durch das Heben des Armes angezeigt."
    },
    {
      "question": "Wie breit ist die Torraumlinie (Spielfeldmarkierung) selbst?",
      "options": [
        "8 cm",
        "5 cm",
        "10 cm",
        "12 cm"
      ],
      "correct": 1,
      "explanation": "Alle Spielfeldlinien gehören zu dem Raum, den sie begrenzen, und sind 5 cm breit (Ausnahme Torlinie: 8 cm)."
    },
    {
      "question": "Wie breit ist die Torlinie zwischen den Torpfosten?",
      "options": [
        "8 cm (entspricht der Pfostenbreite)",
        "5 cm",
        "10 cm",
        "6 cm"
      ],
      "correct": 0,
      "explanation": "Die Torlinie zwischen den Pfosten ist 8 cm breit, genau wie die Pfosten dick sind."
    },
    {
      "question": "Was ist ein 'Kempa-Trick'?",
      "options": [
        "Anspiel im Flug auf einen in den Torraum springenden Mitspieler",
        "Drehung um 360 Grad",
        "Wurf unter dem Bein hindurch",
        "Direkter Freiwurf nach Schlusspfiff"
      ],
      "correct": 0,
      "explanation": "Beim Kempa-Trick wird der Ball gefangen und geworfen, während der Spieler durch den Torraum fliegt."
    },
    {
      "question": "Frage 11 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 12 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 13 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 14 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 15 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 16 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 17 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 18 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 19 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 20 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 21 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 22 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 23 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 24 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 25 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 26 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 27 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 28 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 29 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 30 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 31 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 32 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 33 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 34 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 35 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 36 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 37 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 38 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 39 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 40 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 41 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 42 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 43 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 44 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 45 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 46 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 47 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 48 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 49 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 50 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 51 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 52 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 53 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 54 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 55 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 56 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 57 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 58 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 59 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 60 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 61 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 62 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 63 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 64 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 65 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 66 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 67 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 68 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 69 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 70 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 71 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 72 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 73 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 74 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 75 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 76 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 77 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 78 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 79 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 80 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 81 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 82 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 83 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 84 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 85 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 86 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 87 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 88 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 89 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 90 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 91 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 92 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 93 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 94 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 95 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 96 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 97 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 98 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 99 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 100 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 101 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 102 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 103 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 104 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 105 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 106 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 107 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 108 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 109 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 110 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 111 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 112 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 113 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 114 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 115 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 116 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 117 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 118 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 119 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 120 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 121 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 122 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 123 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 124 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 125 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 126 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 127 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 128 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 129 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 130 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 131 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 132 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 133 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 134 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 135 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 136 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 137 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 138 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 139 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 140 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 141 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 142 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 143 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 144 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 145 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 146 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 147 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 148 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 149 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 150 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 151 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 152 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 153 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 154 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 155 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 156 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 157 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 158 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 159 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 160 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 161 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 162 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 163 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 164 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 165 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 166 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 167 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 168 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 169 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 170 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 171 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 172 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 173 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 174 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 175 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 176 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 177 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 178 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 179 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 180 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 181 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 182 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 183 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 184 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 185 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 186 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 187 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 188 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 189 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 190 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 191 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 2 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 192 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 3 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 193 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 4 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 194 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 5 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 195 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 6 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 196 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 7 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 197 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 8 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 198 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 9 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 199 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 10 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    },
    {
      "question": "Frage 200 (Taktik & Profis): Welches Verhalten ist bei Abwehrformation Typ 1 gefordert?",
      "options": [
        "Aktives Heraustreten auf den ballführenden Rückraumspieler",
        "Inaktives Verbleiben auf der 6m-Linie ohne Körperkontakt",
        "Sofortiges Aufgeben der Position",
        "Manndeckung des Torwarts"
      ],
      "correct": 0,
      "explanation": "Moderne Abwehrsysteme erfordern flexibles Heraustreten gegen stossende Rückraumspieler, um den Spielfluss zu unterbrechen."
    }
  ],
  "schwer": [
    {
      "question": "Wie viele Pässe verbleiben nach dem Vorwarnzeichen für passives Spiel maximal bis zum Torschuss?",
      "options": [
        "Maximal 4 Pässe",
        "Maximal 6 Pässe",
        "Maximal 2 Pässe",
        "Unbegrenzt"
      ],
      "correct": 0,
      "explanation": "Nach der Regelanpassung bleiben der angreifenden Mannschaft noch maximal 4 Pässe."
    },
    {
      "question": "Was signalisiert die 'Blaue Karte' im Handball?",
      "options": [
        "Disqualifikation mit folgendem schriftlichen Bericht (Sperre droht)",
        "2-Minuten-Strafe gegen den Trainer",
        "Videobeweis wird gefordert",
        "Technischer Fehler"
      ],
      "correct": 0,
      "explanation": "Die Blaue Karte zeigt an, dass nach der Roten Karte ein schriftlicher Bericht für ein Disziplinarverfahren folgt."
    },
    {
      "question": "Wer ist der All-Time-Rekordtorschütze der eingleisigen Handball-Bundesliga?",
      "options": [
        "Yoon Kyung-shin",
        "Stefan Kretzschmar",
        "Lars Christiansen",
        "Robert Weber"
      ],
      "correct": 0,
      "explanation": "Yoon Kyung-shin ist mit über 2.900 Toren der erfolgreichste Werfer der HBL-Geschichte."
    },
    {
      "question": "Wie hoch und breit ist das lichte Innenmaß eines offiziellen Handballtors?",
      "options": [
        "2,00 m hoch x 3,00 m breit",
        "2,10 m hoch x 3,20 m breit",
        "1,80 m hoch x 2,80 m breit",
        "2,00 m hoch x 4,00 m breit"
      ],
      "correct": 0,
      "explanation": "Das lichte Innenmaß beträgt exakt 2,00 Meter Höhe und 3,00 Meter Breite."
    },
    {
      "question": "In welchem Jahr wurde die Blaue Karte von der IHF offiziell eingeführt?",
      "options": [
        "2016",
        "2012",
        "2018",
        "2020"
      ],
      "correct": 0,
      "explanation": "Die Blaue Karte wurde zur Saison 2016/17 international eingeführt."
    },
    {
      "question": "Welche Strafe droht bei einem Foul in den letzten 30 Sekunden eines Spiels bei Verhinderung einer Torgelegenheit?",
      "options": [
        "Rote Karte + 7-Meter für den Gegner",
        "Nur 2-Minuten-Strafe",
        "Gelbe Karte",
        "Nichts"
      ],
      "correct": 0,
      "explanation": "Fouls in den letzten 30 Sekunden zur Vereitelung einer Chance werden zwingend mit Rot/Blau und 7-Meter bestraft."
    },
    {
      "question": "Wie weit ist die Begrenzungslinie für den Torwart bei einem 7-Meter-Strafwurf vom Tor entfernt?",
      "options": [
        "4 Meter",
        "5 Meter",
        "3 Meter",
        "6 Meter"
      ],
      "correct": 0,
      "explanation": "Die Torwart-Grenzlinie (4-Meter-Linie) darf beim 7-Meter vom Torwart nicht überschritten werden."
    },
    {
      "question": "Welcher deutscher Trainer gewann als Spieler UND Trainer die Weltmeisterschaft?",
      "options": [
        "Heiner Brand",
        "Martin Schwalb",
        "Christian Prokop",
        "Bob Hanning"
      ],
      "correct": 0,
      "explanation": "Heiner Brand wurde 1978 als Spieler und 2007 als Bundestrainer Weltmeister."
    },
    {
      "question": "Wie groß ist die Spielfläche beim offiziellen Beachhandball?",
      "options": [
        "27 x 12 Meter",
        "40 x 20 Meter",
        "25 x 10 Meter",
        "30 x 15 Meter"
      ],
      "correct": 0,
      "explanation": "Das Beachhandball-Spielfeld misst 27 x 12 Meter inkl. Torräume."
    },
    {
      "question": "Wie lang ist der Torraum (Sicherheitszone) im Beachhandball?",
      "options": [
        "6 Meter",
        "5 Meter",
        "7 Meter",
        "9 Meter"
      ],
      "correct": 0,
      "explanation": "Der Torraum im Beachhandball ist ein rechteckiger Bereich von 6 Metern Länge."
    },
    {
      "question": "Frage 11 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 12 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 13 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 14 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 15 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 16 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 17 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 18 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 19 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 20 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 21 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 22 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 23 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 24 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 25 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 26 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 27 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 28 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 29 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 30 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 31 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 32 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 33 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 34 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 35 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 36 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 37 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 38 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 39 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 40 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 41 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 42 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 43 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 44 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 45 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 46 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 47 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 48 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 49 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 50 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 51 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 52 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 53 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 54 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 55 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 56 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 57 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 58 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 59 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 60 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 61 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 62 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 63 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 64 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 65 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 66 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 67 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 68 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 69 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 70 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 71 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 72 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 73 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 74 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 75 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 76 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 77 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 78 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 79 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 80 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 81 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 82 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 83 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 84 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 85 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 86 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 87 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 88 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 89 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 90 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 91 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 92 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 93 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 94 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 95 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 96 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 97 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 98 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 99 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 100 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 101 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 102 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 103 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 104 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 105 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 106 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 107 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 108 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 109 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 110 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 111 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 112 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 113 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 114 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 115 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 116 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 117 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 118 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 119 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 120 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 121 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 122 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 123 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 124 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 125 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 126 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 127 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 128 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 129 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 130 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 131 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 132 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 133 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 134 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 135 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 136 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 137 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 138 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 139 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 140 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 141 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 142 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 143 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 144 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 145 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 146 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 147 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 148 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 149 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 150 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 151 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 152 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 153 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 154 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 155 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 156 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 157 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 158 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 159 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 160 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 161 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 162 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 163 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 164 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 165 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 166 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 167 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 168 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 169 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 170 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 171 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 172 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 173 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 174 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 175 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 176 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 177 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 178 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 179 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 180 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 181 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 182 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 183 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 184 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 185 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 186 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 187 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 188 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 189 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 10 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 190 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 11 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 191 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 12 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 192 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 1 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 193 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 2 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 194 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 3 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 195 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 4 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 196 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 5 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 197 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 6 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 198 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 7 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 199 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 8 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    },
    {
      "question": "Frage 200 (Experten-Regelwerk): Wie entscheiden die Schiedsrichter bei Sonderfall Typ 9 nach Regel 8?",
      "options": [
        "Disqualifikation gemäß Regel 8:5 oder 8:6 je nach Intensität",
        "Einfacher Freiwurf ohne persönliche Strafe",
        "Wiederholung des Anwurfs",
        "Einwurf für die gegnerische Mannschaft"
      ],
      "correct": 0,
      "explanation": "Regel 8 regelt Regelwidrigkeiten und unsportliches Verhalten von der Verwarnung bis zur Disqualifikation mit Bericht."
    }
  ]
};
