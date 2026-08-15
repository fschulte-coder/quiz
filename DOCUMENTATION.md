# Arena Quiz – Systemdokumentation

Das **Arena Quiz** ist eine clientseitige, 100 % offlinefähige Webanwendung für 1 bis 4 Spieler. Es bietet dynamische Themenwahl (Handball & Weltraum), adaptive CSS-Themes und ein lokales Scoreboard für verschiedene Schwierigkeitsgrade.

---

## 1. Projektstruktur & Dateiübersicht

| Dateiname | Typ | Funktion |
| :--- | :--- | :--- |
| `index.html` | HTML5 | Anwendungsgerüst, Screen-Management (Setup, Gameplay, Results) |
| `styles.css` | CSS3 | Globales Styling, CSS-Variablen & Theme-Overrides (`.theme-weltraum`) |
| `app.js` | JavaScript | Spiellogik, State Management, Player-Turn-Routing & Event-Handling |
| `questions.js` | JavaScript | Fragenkatalog Handball (`window.quizData`) |
| `space_questions.js` | JavaScript | Fragenkatalog Weltraum (`window.spaceQuizData`) |
| `generate_quiz.py` | Python 3 | Skript zur Generierung von 600 Handball-Fragen |
| `generate_space_quiz.py` | Python 3 | Skript zur Generierung von 600 Weltraum-Fragen |

---

## 2. Syntax & Data-Schema der Fragen-Dateien

Die Fragen werden über globale Objekte am `window`-Kontext bereitgestellt, um Modul-Konflikte im lokalen Browserbetrieb ohne HTTP-Server zu vermeiden.

### Objekt-Deklarationen
* **Handball:** `window.quizData`
* **Weltraum:** `window.spaceQuizData`

### JSON-Schema / Code-Struktur

```javascript
window.quizData = {
  "leicht": [
    {
      "question": "Wie viele Feldspieler stehen bei einem Handballspiel pro Mannschaft auf dem Feld?",
      "options": [
        "6 Feldspieler",
        "7 Feldspieler",
        "5 Feldspieler",
        "8 Feldspieler"
      ],
      "correct": 0,
      "explanation": "Eine Handballmannschaft besteht aus 6 Feldspielern und 1 Torwart."
    }
  ],
  "mittel": [
    /* Array von Frage-Objekten */
  ],
  "schwer": [
    /* Array von Frage-Objekten */
  ]
};
```

### Feldbeschreibungen (Spezifikation)

* **`Kategorie-Key`** (`"leicht" | "mittel" | "schwer"`):
  Oberstes Level des Objekts. Enthält jeweils ein Array mit Fragen-Objekten für den entsprechenden Schwierigkeitsgrad.
* **`question`** (`String`):
  Der angezeigte Fragetext. Kann Situationsbeschreibungen (z. B. im Handball-Regelwerk) oder Themen-Tags enthalten.
* **`options`** (`Array<String>`):
  Ein Array aus exakt **4 Antwort-Strings**. Die Reihenfolge wird im Skript bei der Generierung zufällig gemischt.
* **`correct`** (`Integer`, Wertebereich: `0` bis `3`):
  Der nullbasierte Index im `options`-Array, welcher die einzig richtige Antwort markiert:
  * `0` = Antwort A
  * `1` = Antwort B
  * `2` = Antwort C
  * `3` = Antwort D
* **`explanation`** (`String`):
  Auflösungs- und Lehrtext, der eingeblendet wird, nachdem ein Spieler eine Antwort angeklickt hat.

---

## 3. Datenfluss & Anwendungslogik (`app.js`)

```
[ Setup-Screen ] 
       │
       ├── 1. Thema wählen (schaltet CSS-Klasse am <body> um)
       ├── 2. Spieleranzahl (1-4) & Schwierigkeit wählen
       └── 3. 'Start'-Button geklickt
       │
       ▼
[ Game-Screen ]
       │
       ├── Lädt 20 zufällige Fragen aus 'window.quizData' oder 'window.spaceQuizData'
       ├── Spieler 1 stellt sich Frage 1 ➔ Antwort wählen ➔ Punkteupdate & Erklärung
       ├── Rotiert zum nächsten Spieler (Spieler 2, 3...) bei Frage 2
       └── Aktualisiert Fortschritts-Hexagone (1–20)
       │
       ▼
[ Result-Screen ]
       └── Zeigt Endstand aller Mitspieler an & ermöglicht Neustart
```

---

## 4. Funktionsweise der Python-Generatoren

Die Python-Skripte stellen sicher, dass exakt **3x 200 (600)** Fragen ohne Duplikate erzeugt werden:

1. **Duplikateschutz:** Nutzung eines `set()`-Speichers (`seen_questions`), um doppelte Fragestellungen beim Befüllen des Fragepools zu verhindern.
2. **Antworten-Shuffling:** Die richtige Antwort wird in Python an Index `0` definiert. Anschließend werden die Optionen via `random.shuffle()` gemischt und der neue Index von `correct` dynamisch ermittelt.
3. **JS-Output:** Exportiert das Python-Dictionary mittels `json.dumps()` direkt als ausführbaren JavaScript-Code (`window.quizData = {...}`).

---

## 5. Offline-Installation & Deployment

1. **Dateien ablegen:** Alle 5 Web-Dateien (`index.html`, `styles.css`, `app.js`, `questions.js`, `space_questions.js`) in demselben lokalen Ordner speichern.
2. **Starten:** Die Datei `index.html` im Browser öffnen (Doppelklick oder `Strg + O`).
3. **Vorteil:** Es wird kein lokaler Server (Node.js, Apache, Python HTTP-Server) benötigt. Die Anwendung läuft vollständig über das `file://`-Protokoll im Browser.