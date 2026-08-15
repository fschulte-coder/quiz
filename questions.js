// Handball Arena Quiz - 600 gemischte Fragen (Regelwerk, Taktik, Profi-HBL, Beach)
const quizData = {
  "leicht": [
    {
      "question": "Wie viele Schritte darf ein Spieler mit dem Ball laufen, ohne zu prellen?",
      "options": [
        "3 Schritte",
        "2 Schritte",
        "4 Schritte",
        "Unbegrenzt"
      ],
      "correct": 0,
      "explanation": "Laut Regelwerk darf ein Spieler maximal 3 Schritte machen, bevor er prellen, passen oder werfen muss."
    },
    {
      "question": "Aus welcher Distanz wird ein Strafwurf (Penalty) im Hallenhandball geworfen?",
      "options": [
        "7 Meter",
        "6 Meter",
        "8 Meter",
        "9 Meter"
      ],
      "correct": 0,
      "explanation": "Der Strafwurf wird von der 7-Meter-Linie ausgeführt."
    },
    {
      "question": "Wie lange dauert eine normale Zeitstrafe im Hallenhandball?",
      "options": [
        "2 Minuten",
        "1 Minute",
        "5 Minuten",
        "10 Minuten"
      ],
      "correct": 0,
      "explanation": "Eine Hinausstellung dauert exakt 2 Minuten."
    },
    {
      "question": "Welche Karte führt im Hallenhandball zur direkten Disqualifikation?",
      "options": [
        "Rote Karte",
        "Gelbe Karte",
        "Grüne Karte",
        "Blaue Karte"
      ],
      "correct": 0,
      "explanation": "Die Rote Karte bedeutet den Platzverweis für den Rest des Spiels."
    },
    {
      "question": "Welcher deutsche Verein ist Rekordmeister der Liqui Moly HBL?",
      "options": [
        "THW Kiel",
        "SG Flensburg-Handewitt",
        "SC Magdeburg",
        "Füchse Berlin"
      ],
      "correct": 0,
      "explanation": "Der THW Kiel ist mit über 20 Titeln deutscher Rekordmeister."
    },
    {
      "question": "In welcher Stadt wird das DHB-Pokal Final Four der Herren ausgetragen?",
      "options": [
        "Köln (LANXESS arena)",
        "Hamburg",
        "Berlin",
        "München"
      ],
      "correct": 0,
      "explanation": "Das Final4 um den DHB-Pokal findet traditionell in der LANXESS arena in Köln statt."
    },
    {
      "question": "Welches Nationalteam gewann 2007 die Heim-WM ('Wintermärchen')?",
      "options": [
        "Deutschland",
        "Polen",
        "Dänemark",
        "Frankreich"
      ],
      "correct": 0,
      "explanation": "Deutschland wurde 2007 unter Bundestrainer Heiner Brand im eigenen Land Weltmeister."
    },
    {
      "question": "Auf welchem Untergrund wird Beachhandball gespielt?",
      "options": [
        "Feiner Sand",
        "Rasen",
        "Hallenboden",
        "Kunstrasen"
      ],
      "correct": 0,
      "explanation": "Beachhandball wird barfuß auf Sand gespielt."
    },
    {
      "question": "Wie viele Punkte bringt ein 'Spin Shot' (360-Grad-Drehung) im Beachhandball?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Spektakuläre Treffer wie der Spin Shot bringen im Beachhandball 2 Punkte."
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
      "explanation": "Ein Beachhandball-Spiel besteht aus zwei unabhängigen Sätzen à 10 Minuten."
    },
    {
      "question": "Was beschreibt eine sogenannte '6:0-Abwehr'?",
      "options": [
        "Alle 6 Feldspieler stehen an der 6m-Kreislinie",
        "Manndeckung auf dem ganzen Feld",
        "Spielen ohne Torwart",
        "Ein Abwehrspieler deckt vorne"
      ],
      "correct": 0,
      "explanation": "Bei der 6:0-Abwehr stehen alle sechs Abwehrspieler an der 6-Meter-Torraumlinie."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 12: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 13: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 14: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 15: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 16: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 17: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 18: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 19: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 20: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 21: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 22: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 23: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 24: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 25: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 26: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 27: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 28: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 29: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 30: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 31: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 32: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 33: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 34: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 35: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 36: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 37: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 38: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 39: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 40: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 41: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 42: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 43: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 44: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 45: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 46: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 47: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 48: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 49: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 50: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 51: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 52: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 53: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 54: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 55: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 56: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 57: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 58: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 59: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 60: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 61: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 62: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 63: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 64: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 65: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 66: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 67: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 68: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 69: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 70: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 71: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 72: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 73: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 74: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 75: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 76: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 77: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 78: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 79: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 80: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 81: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 82: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 83: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 84: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 85: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 86: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 87: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 88: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 89: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 90: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 91: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 92: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 93: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 94: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 95: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 96: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 97: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 98: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 99: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 100: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 101: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 102: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 103: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 104: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 105: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 106: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 107: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 108: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 109: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 110: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 111: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 112: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 113: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 114: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 115: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 116: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 117: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 118: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 119: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 120: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 121: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 122: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 123: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 124: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 125: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 126: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 127: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 128: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 129: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 130: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 131: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 132: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 133: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 134: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 135: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 136: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 137: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 138: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 139: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 140: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 141: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 142: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 143: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 144: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 145: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 146: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 147: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 148: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 149: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 150: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 151: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 152: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 153: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 154: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 155: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 156: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 157: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 158: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 159: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 160: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 161: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 162: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 163: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 164: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 165: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 166: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 167: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 168: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 169: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 170: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 171: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 172: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 173: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 174: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 175: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 176: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 177: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 178: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 179: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 180: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 181: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 182: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 183: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 184: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 185: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 186: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 187: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 188: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 189: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 190: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 191: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 192: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 193: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 194: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 195: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 196: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Leicht] Frage 197: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Leicht] Frage 198: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Leicht] Frage 199: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Leicht] Frage 200: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    }
  ],
  "mittel": [
    {
      "question": "Was bedeutet die Taktik '7 gegen 6' im Hallenhandball?",
      "options": [
        "Der Torwart wird durch einen 7. Feldspieler ersetzt",
        "Überzahlspiel nach Zeitstrafe",
        "Eine reine Abwehrmaßnahme",
        "Auswechseln des Torwarts beim 7-Meter"
      ],
      "correct": 0,
      "explanation": "Seit der Regeländerung 2016 darf der Torwart durch einen 7. Feldspieler ausgetauscht werden."
    },
    {
      "question": "Was versteht man unter dem 'Kempa-Trick'?",
      "options": [
        "Anspiel im Flug auf einen in den Torraum springenden Mitspieler",
        "Ein Wurf hinter dem Rücken",
        "Drehung um 360 Grad am Boden",
        "Getäuschter Siebenmeter"
      ],
      "correct": 0,
      "explanation": "Beim Kempa-Trick fängt der Angreifer den Ball im Flug über dem Torraum und wirft vor der Landung."
    },
    {
      "question": "Wie zeigt der Schiedsrichter drohendes Zeitspiel (Passives Spiel) an?",
      "options": [
        "Gehobener Arm",
        "Grüne Karte",
        "Doppelpfiff",
        "Überkreuzte Arme"
      ],
      "correct": 0,
      "explanation": "Das Passivwarnzeichen wird durch das Heben des Armes signalisiert."
    },
    {
      "question": "Welcher Verein gewann 2023 die EHF Champions League im Final4 in Köln?",
      "options": [
        "SC Magdeburg",
        "THW Kiel",
        "FC Barcelona",
        "Barlinek Industria Kielce"
      ],
      "correct": 0,
      "explanation": "Der SC Magdeburg sicherte sich 2023 den Champions-League-Titel."
    },
    {
      "question": "Unter welchem Trainer wurde Deutschland 2016 Europameister ('Bad Boys')?",
      "options": [
        "Dagur Sigurdsson",
        "Heiner Brand",
        "Christian Prokop",
        "Alfred Gislason"
      ],
      "correct": 0,
      "explanation": "Dagur Sigurdsson führte die deutsche Nationalmannschaft 2016 zum EM-Gold in Polen."
    },
    {
      "question": "Welche Besonderheit hat der 'Specialist' im Beachhandball?",
      "options": [
        "Seine Tore zählen immer 2 Punkte",
        "Er darf als einziger prellen",
        "Er ist der einzige Abwehrspieler",
        "Er darf den Sand nicht verlassen"
      ],
      "correct": 0,
      "explanation": "Tore des Specialist (oft der eingewechselte Angriffs-Torwart) zählen doppelt."
    },
    {
      "question": "Was passiert bei Gleichstand (1:1 nach Sätzen) im Beachhandball?",
      "options": [
        "Das Spiel wird im 'Shootout' entschieden",
        "2x 5 Minuten Verlängerung",
        "Siebenmeterwerfen",
        "Das Spiel endet unentschieden"
      ],
      "correct": 0,
      "explanation": "Steht es 1:1 nach Sätzen, entscheidet das Shootout (1 gegen 1 mit Torwart)."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 8: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 9: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 10: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 11: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 12: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 13: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 14: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 15: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 16: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 17: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 18: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 19: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 20: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 21: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 22: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 23: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 24: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 25: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 26: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 27: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 28: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 29: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 30: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 31: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 32: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 33: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 34: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 35: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 36: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 37: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 38: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 39: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 40: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 41: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 42: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 43: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 44: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 45: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 46: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 47: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 48: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 49: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 50: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 51: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 52: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 53: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 54: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 55: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 56: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 57: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 58: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 59: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 60: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 61: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 62: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 63: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 64: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 65: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 66: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 67: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 68: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 69: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 70: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 71: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 72: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 73: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 74: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 75: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 76: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 77: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 78: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 79: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 80: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 81: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 82: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 83: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 84: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 85: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 86: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 87: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 88: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 89: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 90: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 91: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 92: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 93: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 94: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 95: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 96: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 97: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 98: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 99: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 100: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 101: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 102: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 103: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 104: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 105: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 106: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 107: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 108: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 109: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 110: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 111: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 112: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 113: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 114: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 115: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 116: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 117: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 118: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 119: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 120: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 121: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 122: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 123: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 124: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 125: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 126: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 127: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 128: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 129: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 130: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 131: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 132: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 133: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 134: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 135: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 136: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 137: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 138: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 139: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 140: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 141: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 142: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 143: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 144: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 145: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 146: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 147: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 148: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 149: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 150: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 151: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 152: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 153: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 154: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 155: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 156: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 157: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 158: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 159: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 160: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 161: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 162: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 163: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 164: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 165: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 166: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 167: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 168: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 169: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 170: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 171: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 172: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 173: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 174: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 175: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 176: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 177: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 178: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 179: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 180: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 181: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 182: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 183: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 184: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 185: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 186: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 187: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 188: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 189: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 190: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 191: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 192: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 193: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 194: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 195: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 196: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Mittel] Frage 197: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Mittel] Frage 198: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Mittel] Frage 199: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Mittel] Frage 200: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    }
  ],
  "schwer": [
    {
      "question": "Wie viele Pässe verbleiben nach dem Passivwarnzeichen maximal bis zum Torschuss?",
      "options": [
        "Maximal 4 Pässe",
        "Maximal 6 Pässe",
        "Maximal 2 Pässe",
        "Maximal 8 Pässe"
      ],
      "correct": 0,
      "explanation": "Nach dem Heben des Armes stehen dem angreifenden Team noch maximal 4 Pässe zur Verfügung."
    },
    {
      "question": "Was signalisiert die BLAUE Karte im Handball?",
      "options": [
        "Disqualifikation mit folgendem schriftlichen Bericht (Sperre droht)",
        "2-Minuten-Strafe für die Bank",
        "Videobeweis wird gefordert",
        "Auszeit für den Gegner"
      ],
      "correct": 0,
      "explanation": "Die Blaue Karte zeigt an, dass ein Disziplinarbericht zur Prüfung einer Sperre folgt."
    },
    {
      "question": "Welche Strafe folgt bei einem groben Foul in den letzten 30 Sekunden zur Verhinderung eines Tors?",
      "options": [
        "Rote/Blaue Karte UND 7-Meter",
        "Nur 2-Minuten-Strafe",
        "Nur Freiwurf",
        "7-Meter ohne Karte"
      ],
      "correct": 0,
      "explanation": "Unsportlichkeiten in den letzten 30 Sekunden werden zwingend mit Rot/Blau und 7-Meter geahndet."
    },
    {
      "question": "Wer ist der All-Time-Rekordtorschütze der Handball-Bundesliga (HBL)?",
      "options": [
        "Yoon Kyung-shin",
        "Lars Christiansen",
        "Stefan Kretzschmar",
        "Robert Weber"
      ],
      "correct": 0,
      "explanation": "Der Südkoreaner Yoon Kyung-shin erzielte über 2.900 Tore in der HBL."
    },
    {
      "question": "Welcher deutsche Handballer wurde sowohl als Spieler (1978) als auch als Trainer (2007) Weltmeister?",
      "options": [
        "Heiner Brand",
        "Martin Schwalb",
        "Christian Prokop",
        "Bob Hanning"
      ],
      "correct": 0,
      "explanation": "Heiner Brand gelang dieses historische Kunststück."
    },
    {
      "question": "Wie groß ist das Spielfeld im Beachhandball inklusive Torräumen?",
      "options": [
        "27 x 12 Meter",
        "40 x 20 Meter",
        "30 x 15 Meter",
        "25 x 10 Meter"
      ],
      "correct": 0,
      "explanation": "Das Sandfeld misst exakt 27 x 12 Meter."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 7: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 8: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 9: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 10: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 11: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 12: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 13: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 14: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 15: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 16: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 17: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 18: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 19: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 20: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 21: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 22: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 23: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 24: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 25: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 26: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 27: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 28: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 29: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 30: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 31: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 32: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 33: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 34: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 35: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 36: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 37: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 38: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 39: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 40: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 41: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 42: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 43: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 44: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 45: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 46: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 47: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 48: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 49: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 50: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 51: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 52: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 53: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 54: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 55: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 56: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 57: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 58: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 59: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 60: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 61: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 62: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 63: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 64: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 65: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 66: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 67: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 68: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 69: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 70: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 71: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 72: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 73: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 74: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 75: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 76: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 77: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 78: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 79: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 80: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 81: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 82: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 83: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 84: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 85: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 86: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 87: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 88: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 89: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 90: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 91: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 92: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 93: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 94: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 95: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 96: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 97: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 98: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 99: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 100: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 101: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 102: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 103: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 104: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 105: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 106: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 107: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 108: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 109: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 110: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 111: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 112: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 113: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 114: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 115: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 116: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 117: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 118: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 119: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 120: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 121: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 122: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 123: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 124: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 125: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 126: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 127: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 128: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 129: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 130: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 131: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 132: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 133: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 134: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 135: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 136: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 137: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 138: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 139: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 140: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 141: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 142: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 143: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 144: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 145: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 146: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 147: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 148: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 149: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 150: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 151: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 152: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 153: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 154: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 155: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 156: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 157: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 158: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 159: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 160: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 161: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 162: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 163: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 164: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 165: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 166: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 167: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 168: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 169: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 170: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 171: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 172: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 173: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 174: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 175: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 176: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 177: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 178: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 179: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 180: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 181: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 182: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 183: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 184: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 185: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 186: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 187: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 188: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 189: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 190: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 191: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 192: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 193: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 194: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 195: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 196: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    },
    {
      "question": "[REGELWERK - Schwer] Frage 197: Spielszene im Hallenhandball: Bei einem Tempogegenstoß wird der Angreifer leicht an der Schulter berührt. Wie entscheidet der Schiedsrichter bei Verhindern einer Torgelegenheit?",
      "options": [
        "7-Meter und progressive Strafe",
        "Nur einfacher Freiwurf",
        "Einwurf für den Verteidiger",
        "Keine Unterbrechung"
      ],
      "correct": 0,
      "explanation": "Das Verhindern einer klaren Torgelegenheit erfordert zwingend einen 7-Meter-Strafwurf."
    },
    {
      "question": "[TAKTIK - Schwer] Frage 198: Taktische Formation: Was ist das Hauptziel einer '5:1-Abwehr'?",
      "options": [
        "Den gegnerischen Rückraummitte-Spieler frühzeitig im Aufbau zu stören",
        "Den Kreisläufer komplett zu doppeln",
        "Nur die Außenspieler abzudecken",
        "Ohne Torwart zu verteidigen"
      ],
      "correct": 0,
      "explanation": "Der vorgezogene Spieler bei der 5:1-Abwehr soll den zentralen Spielaufbau des Gegners unterbrechen."
    },
    {
      "question": "[PROFI-HANDBALL - Schwer] Frage 199: HBL & Champions League: Was versteht man unter der 'EHF Champions League Final4' Veranstaltung?",
      "options": [
        "Das Finalturnier der besten 4 Teams Europas in Köln",
        "Die Relegation der Bundesliga",
        "Ein Vorbereitungsturnier der HBL",
        "Das Finale des DHB-Pokals"
      ],
      "correct": 0,
      "explanation": "Das Final4 in der Kölnarena ist das Highlight des europäischen Vereins-Handballs."
    },
    {
      "question": "[BEACHHANDBALL - Schwer] Frage 200: Beachhandball Spezial: Was ist ein 'Flyer' bzw. Kempa-Tor im Sand wert?",
      "options": [
        "2 Punkte",
        "1 Punkt",
        "3 Punkte",
        "4 Punkte"
      ],
      "correct": 0,
      "explanation": "Jedes spektakuläre Tor im Beachhandball (Spin Shot, Kempa/Flyer) zählt doppelt (2 Punkte)."
    }
  ]
};