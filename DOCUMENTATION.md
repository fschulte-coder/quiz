# 🤾 Handball Arena Quiz – Dokumentation & Entwickler-Guide

Willkommen zur offiziellen Dokumentation des **Handball Arena Quizzes**. Diese browserbasierte Web-App wurde als modernes, interaktives Multiplayer-Quiz für 1 bis 4 Spieler konzipiert.

---

## 📁 1. Projektstruktur

Das Projekt ist vollständig modular aufgebaut, um Logik, Layout und Fragendatenbank sauber zu trennen:

```text
handball-quiz/
│── index.html          # HTML5-Gerüst (Spielfeld, Arena-Layout & Container)
│── styles.css          # CSS3-Styling (Frosted Glass, Neon-Glow, Responsive Grid)
│── app.js              # Spiellogik (Turn-Based Rotation, Scoreboard, State)
│── questions.js        # Modulare Fragen-Datenbank (600 Fragen)
│── generate_quiz.py    # Python-Skript zur automatischen Generierung von questions.js
└── DOCUMENTATION.md    # Diese Dokumentation
```

---

## 🤾‍♂️ 2. Hauptfunktionen & Features

* **1–4 Spieler Modus:**
  * Bei mehreren Spielern rotiert das Spiel automatisch nach jeder Frage.
  * Live-Scoreboard in der Seitenleiste zeigt stets den aktiven Spieler und die aktuellen Treffer an.
* **3 Schwierigkeitsgrade:**
  * `leicht`, `mittel`, `schwer` (jeweils mit einem eigenen Pool von 200 Fragen).
* **20 Fragen pro Spielrunde:**
  * Das Skript wählt aus dem Fragenpool zufällig 20 Fragen aus.
  * Waben-Fortschrittsanzeige (20 Hexagons) signalisiert den Fortschritt visuell.
* **Sofortige Auflösung & Erklärung:**
  * Nach jeder Antwort erscheint eine 2–3 Sätze lange Facherklärung.
* **Responsive Arena-Look:**
  * Glassmorphism, Neon-Effekte, Handballfeld-Muster & ansprechendes Color-Grading.

---

## 📋 3. Format der Fragen-Datei (`questions.js`)

Die Datei `questions.js` definiert ein globales JavaScript-Objekt `quizData`. Es teilt die Fragen in die drei Kategorien `leicht`, `mittel` und `schwer` ein.

### Struktur des JSON-Objekts:

```javascript
const quizData = {
  "leicht": [
    {
      "question": "Fragetext hier eintragen?",
      "options": [
        "Antwort A",
        "Antwort B",
        "Antwort C",
        "Antwort D"
      ],
      "correct": 1, // Index der richtigen Antwort (0 = A, 1 = B, 2 = C, 3 = D)
      "explanation": "Kurze Erklärung in 2-3 Sätzen, warum Antwort B richtig ist."
    }
  ],
  "mittel": [ /* ... */ ],
  "schwer": [ /* ... */ ]
};
```

### Felder-Spezifikation:

| Feld | Typ | Beschreibung |
| :--- | :--- | :--- |
| `question` | `String` | Die eigentliche Frage (z. B. Regelwerk, Taktik, HBL, Beachhandball). |
| `options` | `Array[4]` | Genau 4 Antwortmöglichkeiten als Strings. |
| `correct` | `Integer` | Der nullbasierte Index der richtigen Antwort (`0`, `1`, `2` oder `3`). |
| `explanation` | `String` | 2–3 Sätze Hintergrundwissen zur Auflösung nach der Antwortabgabe. |

---

## ⚙️ 4. Fragen erweitern oder anpassen

Du kannst die Fragendatenbank auf zwei Wegen erweitern:

### Weg A: Manuell in `questions.js`
Öffne `questions.js` und füge im jeweiligen Array (`leicht`, `mittel` oder `schwer`) ein neues Objekt nach obigem Schema hinzu.

### Weg B: Automatisch via Python (`generate_quiz.py`)
Führe im Terminal einfach folgendes aus:

```bash
python3 generate_quiz.py
```

Das Skript generiert die `questions.js` mit allen 600 Fragen (200 pro Kategorie) im perfekten Format neu.
