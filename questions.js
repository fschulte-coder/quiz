// Fragen-Datenbank getrennt nach Schwierigkeitsgraden
const quizData = {
  leicht: [
    {
      question: "Wie viele Feldspieler stehen pro Team gleichzeitig auf dem Spielfeld?",
      options: ["5", "6", "7", "8"],
      correct: 1, // Index der richtigen Antwort (0-3) -> hier "6"
      explanation: "Ein Handballteam besteht aus 6 Feldspielern und einem Torwart, also insgesamt 7 Spielern auf dem Feld. Auf dem Feld selbst agieren 6 Feldspieler pro Seite."
    },
    {
      question: "Wie lange dauert ein reguläres Handballspiel bei den Erwachsenen?",
      options: ["2x 20 Minuten", "2x 25 Minuten", "2x 30 Minuten", "2x 35 Minuten"],
      correct: 2,
      explanation: "Die reguläre Spielzeit beträgt 2x 30 Minuten mit einer 15-minütigen Halbzeitpause. Bei Unentschieden in K.o.-Spielen gibt es Verlängerung."
    }
  ],
  mittel: [
    {
      question: "Welche Regel gilt für das Laufen mit dem Ball ohne zu prellen?",
      options: ["Maximal 2 Schritte", "Maximal 3 Schritte", "Maximal 4 Schritte", "Unbegrenzt"],
      correct: 1,
      explanation: "Ein Spieler darf den Ball höchstens 3 Sekunden halten und maximal 3 Schritte machen, ohne zu prellen oder den Ball abzuspielen."
    },
    {
      question: "Aus welcher Entfernung wird ein Strafwurf (Handball-'Elfmeter') geworfen?",
      options: ["6 Meter", "7 Meter", "8 Meter", "9 Meter"],
      correct: 1,
      explanation: "Der Strafwurf wird von der 7-Meter-Linie ausgeführt. Er wird zugesprochen, wenn eine klare Torgelegenheit regelwidrig vereitelt wurde."
    }
  ],
  schwer: [
    {
      question: "Was bedeutet die 'Blaue Karte' im Handball?",
      options: [
        "Verwarnung für den Trainer",
        "Disqualifikation ohne schriftlichen Bericht",
        "Disqualifikation mit folgendem schriftlichen Bericht (Sperre)",
        "Zeitstrafe von 4 Minuten"
      ],
      correct: 2,
      explanation: "Die Blaue Karte wurde 2016 eingeführt. Sie zeigt direkt nach einer Roten Karte an, dass ein schriftlicher Bericht folgt und eine Sperre geprüft wird."
    },
    {
      question: "Welches Team gewann die EHF Champions League der Männer im Jahr 2023?",
      options: ["THW Kiel", "FC Barcelona", "SC Magdeburg", "Veszprém KC"],
      correct: 2,
      explanation: "Der SC Magdeburg sicherte sich 2023 in einem dramatischen Finale gegen Barçelona bzw. Kielce den Champions-League-Titel. Es war ihr erster Triumph seit 2002."
    }
  ]
};