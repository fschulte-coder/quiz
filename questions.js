// Handball Arena Quiz - 600 Fragen mit echten Spielsituationen
const quizData = {
  "leicht": [
    {
      "question": "Ein Rückraumspieler fängt den Ball, macht 3 Schritte, prellt den Ball einmal auf den Boden und macht weitere 3 Schritte. Wie entscheidet der Schiedsrichter?",
      "options": [
        "Weitermachen (Regelgerecht)",
        "Schrittfehler (Ballbesitzwechsel)",
        "Zweimaliges Prellen",
        "Freiwurf für den Angreifer"
      ],
      "correct": 0,
      "explanation": "Das ist absolut regelkonform. Ein Spieler darf 3 Schritte machen, den Ball prellen und danach noch einmal bis zu 3 Schritte laufen."
    },
    {
      "question": "Ein Abwehrspieler steht beim Absprung des Angreifers mit beiden Füßen deutlich im eigenen 6-Meter-Torraum, um den Wurf zu blocken. Entscheidung?",
      "options": [
        "7-Meter für die angreifende Mannschaft",
        "Freiwurf an der 9-Meter-Linie",
        "Einwurf",
        "Weiter spielen"
      ],
      "correct": 0,
      "explanation": "Das Betreten des Torraums zur Erlangung eines Vorteils in der Abwehr wird zwingend mit einem 7-Meter-Strafwurf geahndet."
    },
    {
      "question": "Wie viele Punkte bringt ein erfolgreich verwandelter Penalty (Shootout) im Beachhandball?",
      "options": [
        "1 Punkt",
        "2 Punkte",
        "3 Punkte",
        "0 Punkte"
      ],
      "correct": 1,
      "explanation": "Im Beachhandball zählen alle Treffer im Shootout sowie spektakuläre Tore (Spin-Shot, Kempa) oder Tore des Specialist/Torwarts 2 Punkte."
    },
    {
      "question": "Ein Spieler erhält im Laufe des Spiels seine dritte 2-Minuten-Zeitstrafe. Welche Konsequenz hat das?",
      "options": [
        "Rote Karte (Disqualifikation)",
        "4 Minuten Zeitstrafe",
        "Blaue Karte",
        "Keine weiteren Folgen"
      ],
      "correct": 0,
      "explanation": "Die dritte 2-Minuten-Zeitstrafe gegen denselben Spieler führt automatisch zur Roten Karte (Disqualifikation für den Rest des Spiels)."
    },
    {
      "question": "Ein Angreifer springt außerhalb des Torraums ab, wirft den Ball im Flug ins Tor und landet danach im Torraum. Zählt der Treffer?",
      "options": [
        "Ja, das Tor zählt",
        "Nein, Kreisabtritt",
        "Freiwurf für den Gegner",
        "7-Meter"
      ],
      "correct": 0,
      "explanation": "Solange der Ball die Torlinie überschreitet, bevor der Angreifer den Boden im Torraum berührt, ist das Tor vollkommen regulär."
    },
    {
      "question": "Welcher deutscher Verein ist Rekordmeister der Liqui Moly HBL?",
      "options": [
        "THW Kiel",
        "SG Flensburg-Handewitt",
        "SC Magdeburg",
        "Füchse Berlin"
      ],
      "correct": 0,
      "explanation": "Der THW Kiel ist mit über 20 Titeln der erfolgreichste deutsche Handballverein in der Bundesliga-Geschichte."
    },
    {
      "question": "Wie groß ist die Spielfläche beim Beachhandball?",
      "options": [
        "27 x 12 Meter",
        "40 x 20 Meter",
        "30 x 15 Meter",
        "20 x 10 Meter"
      ],
      "correct": 0,
      "explanation": "Das Sandfeld im Beachhandball misst 27 x 12 Meter und ist damit deutlich kleiner als das Hallenfeld (40 x 20 m)."
    },
    {
      "question": "Ein Außenspieler läuft beim Tempogegenstoß über die Auslinie, um einem Abwehrspieler auszuweichen, und läuft wieder auf das Feld. Entscheidung?",
      "options": [
        "Weiterspielen (kein Fehler)",
        "Fussspiel",
        "Progressive Strafe",
        "Ballverlust"
      ],
      "correct": 0,
      "explanation": "Das Verlassen des Spielfelds ohne Ball ist erlaubt, solange daraus kein unberechtigter Vorteil gezogen oder eine Auswechslung vorgetäuscht wird."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Leicht): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    }
  ],
  "mittel": [
    {
      "question": "Bei der Taktik '7 gegen 6' wird der Torwart durch einen 7. Feldspieler ersetzt. Was passiert, wenn dieser Wechsel nicht ordnungsgemäß über die Wechselzone erfolgt?",
      "options": [
        "2-Minuten-Strafe wegen Wechselfehlers",
        "Nur Verwarnung",
        "7-Meter für den Gegner",
        "Keine Strafe"
      ],
      "correct": 0,
      "explanation": "Ein fehlerhafter Wechsel (z.B. Feldspieler betritt das Feld bevor der Torwart es verlässt) wird sofort als Wechselfehler mit 2 Minuten bestraft."
    },
    {
      "question": "Der Schiedsrichter hebt den Arm (Passivwarnzeichen). Wie viele Pässe verbleiben der angreifenden Mannschaft noch maximal bis zum Torschuss?",
      "options": [
        "Maximal 4 Pässe",
        "Maximal 6 Pässe",
        "Maximal 2 Pässe",
        "Unbegrenzt"
      ],
      "correct": 0,
      "explanation": "Seit der Regelreform bleiben dem angreifenden Team nach dem Passivwarnzeichen noch maximal 4 Pässe für einen Torabschluss."
    },
    {
      "question": "Ein Torwart wehrt einen Ball seitlich ins Toraus ab (über die Grundlinie neben dem Tor). Wer bekommt den Ball?",
      "options": [
        "Torwartabwurf (Ball bleibt beim Torwart)",
        "Eckball für den Gegner",
        "Einwurf",
        "7-Meter"
      ],
      "correct": 0,
      "explanation": "Wenn der Torwart den Ball über die eigene Grundlinie abwehrt, bleibt die Mannschaft im Ballbesitz und der Torwart setzt das Spiel per Abwurf fort."
    },
    {
      "question": "Ein Feldspieler wehrt den Ball seitlich ins Toraus ab (über die Grundlinie neben dem eigenen Tor). Wer bekommt den Ball?",
      "options": [
        "Einwurf/Eckball für die angreifende Mannschaft",
        "Torwartabwurf",
        "Freiwurf Abwehr",
        "Münzwurf"
      ],
      "correct": 0,
      "explanation": "Wird der Ball von einem Feldspieler der Abwehr über die eigene Grundlinie abgewehrt, erhält die angreifende Mannschaft einen Einwurf an der Ecke."
    },
    {
      "question": "Was passiert im Beachhandball, wenn ein Spiel nach den zwei eigenständigen Halbzeiten 1:1 unentschieden steht?",
      "options": [
        "Das Spiel wird im 'Shootout' entschieden",
        "2x 5 Minuten Verlängerung",
        "Siebenmeterwerfen",
        "Unentschieden"
      ],
      "correct": 0,
      "explanation": "Im Beachhandball gibt es kein Unentschieden. Bei einem 1:1 nach Halbzeiten folgt sofort das spektakuläre Shootout (1 gegen 1)."
    },
    {
      "question": "Ein Angreifer führt einen Sprungwurf aus. Der Abwehrspieler trifft ihn in der Luft am Arm und bringt ihn zu Fall. Welche Strafe ist zwingend?",
      "options": [
        "Mindestens 2-Minuten-Strafe (oder Rot) + 7m",
        "Nur Freiwurf",
        "Gelbe Karte",
        "Keine Strafe"
      ],
      "correct": 0,
      "explanation": "Aktionen gegen einen sich in der Luft befindenden Spieler stellen eine hohe gesundheitliche Gefährdung dar und erfordern mindestens eine Zeitstrafe."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Mittel): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    }
  ],
  "schwer": [
    {
      "question": "In den letzten 30 Sekunden eines Spiels verhindert ein Abwehrspieler durch ein grobes Foul bewusst eine klare Torgelegenheit. Welche Strafen folgen?",
      "options": [
        "Rote (oder Blaue) Karte UND 7-Meter für den Gegner",
        "Nur 2-Minuten-Strafe",
        "Freiwurf und Rote Karte",
        "Nur 7-Meter"
      ],
      "correct": 0,
      "explanation": "Die 'Letzte-30-Sekunden-Regel' sichert ab, dass taktische Unsportlichkeiten in der Schlussphase zwingend mit Rot/Blau und einem 7-Meter geahndet werden."
    },
    {
      "question": "Ein Schiedsrichter zeigt nach einer Roten Karte zusätzlich die BLAUE Karte. Was bedeutet das genau?",
      "options": [
        "Es folgt ein schriftlicher Bericht zur Disziplinarkommission (Sperre droht)",
        "Videobeweis wird geprüft",
        "Der Trainer muss die Halle verlassen",
        "Das Team verliert Punkte"
      ],
      "correct": 0,
      "explanation": "Die Blaue Karte signalisiert allen Beteiligten, dass der Fall im Spielbericht vermerkt wird und eine nachträgliche Sperre durch den Verband geprüft wird."
    },
    {
      "question": "Ein Torwart führt einen Freiwurf im eigenen Torraum aus und wirft den Ball versehentlich ins eigene Tor. Wie entscheidet der Schiedsrichter?",
      "options": [
        "Das Tor zählt NICHT, Wiederholung des Freiwurfs",
        "Eigentor (Tor für Gegner)",
        "7-Meter für Gegner",
        "Einwurf"
      ],
      "correct": 0,
      "explanation": "Ein eigener Freiwurf im eigenen Torraum kann niemals zu einem Eigentor führen. Der Freiwurf wird einfach wiederholt."
    },
    {
      "question": "Beim Ausführen eines 7-Meter-Strafwurfs hebt der Werfer den Standfuß komplett vom Boden ab, bevor der Ball seine Hand verlassen hat. Entscheidung?",
      "options": [
        "Fehlerhafte Ausführung (Freiwurf für die Abwehr)",
        "Wiederholung des 7-Meters",
        "Keine Strafe, Tor zählt",
        "2-Minuten-Strafe"
      ],
      "correct": 0,
      "explanation": "Beim 7-Meter muss ein Fuß bis zum Abspiel ununterbrochen mit dem Boden in Berührung bleiben. Ein Abheben führt zum Ballverlust."
    },
    {
      "question": "Welcher Spieler hält den All-Time-Torschützenrekord in der eingleisigen Handball-Bundesliga (HBL)?",
      "options": [
        "Yoon Kyung-shin",
        "Lars Christiansen",
        "Stefan Kretzschmar",
        "Robert Weber"
      ],
      "correct": 0,
      "explanation": "Der Südkoreaner Yoon Kyung-shin erzielte in seiner HBL-Karriere über 2.900 Tore und führt die ewige Torschützenliste an."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Rückraumspieler agiert beim Schlagwurf aus 10 Metern. Der Ball wird vom Block abgefälscht und geht ins Toraus. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Kreisläufer agiert beim Fangen eines Anspiels. Der Abwehrspieler umklammert ihn von hinten ohne Chance auf den Ball. Was passiert, wenn ein Abwehrspieler den Ball mit dem Fuß abwehrt, um ein klares Tor zu verhindern?",
      "options": [
        "Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe.",
        "Es gibt nur einen einfachen Freiwurf.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Es gibt einen 7-Meter für das angreifende Team und eine progressive Strafe. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Torwart agiert beim Einleiten des Tempogegenstoßes. Der Pass wird von einem Abwehrspieler mit dem Fuß abgefangen. Wie verhält sich der Schiedsrichter, wenn der Ball an die Hallendecke prallt?",
      "options": [
        "Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt.",
        "Das Spiel läuft normal weiter.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Das Spiel wird unterbrochen und mit Einwurf an der Seitenauslinie fortgesetzt. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Specialist im Beachhandball agiert bei einer 360-Grad-Drehung. Der Spieler wird während der Drehung im Flug leicht touchiert. Darf ein Spieler den Ball mit dem Unterschenkel oder Knie berühren?",
      "options": [
        "Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen.",
        "Ja, das Knie zählt nicht als Fuß.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Nein, jegliche Berührung unterhalb des Knies ist als Fussspiel zu pfeifen. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    },
    {
      "question": "Spielsituation (Schwer): Ein Außenspieler agiert im Sprungwurf aus spitzem Winkel. Der Abwehrspieler tritt auf die Außenlinie. Wie wird entschieden, wenn ein Betreuer auf der Bank die Grüne Karte (Team-Timeout) zu spät ablegt?",
      "options": [
        "Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter.",
        "Das Spiel wird unterbrochen und das Timeout gewährt.",
        "Das Spiel wird ohne Unterbrechung fortgesetzt.",
        "Der Schiedsrichter entscheidet auf Schiedsrichterball."
      ],
      "correct": 0,
      "explanation": "Regelentscheidung: Der Ansumpf bleibt wirkungslos, das Spiel läuft weiter. Diese Regelung stellt einen fairen Ablauf der Spielsituation sicher."
    }
  ]
};