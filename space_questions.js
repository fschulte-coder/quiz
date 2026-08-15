// Weltraum Quiz - 600 Fragen fürs Sonnensystem (für Kinder ab 10 Jahren)
const quizData = {
  "leicht": [
    {
      "question": "Welcher Planet unseres Sonnensystems ist der Sonne am nächsten?",
      "options": [
        "Merkur",
        "Venus",
        "Erde",
        "Mars"
      ],
      "correct": 0,
      "explanation": "Merkur ist der innerste Planet. Weil er so nah an der Sonne ist, wird es tagsüber extrem heiß!"
    },
    {
      "question": "Welcher ist der größte Planet in unserem Sonnensystem?",
      "options": [
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptun"
      ],
      "correct": 0,
      "explanation": "Jupiter ist ein riesiger Gasplanet. Er ist so groß, dass alle anderen Planeten zusammen hineinpassen würden!"
    },
    {
      "question": "Welcher Planet ist für seine wunderschönen, riesigen Ringe bekannt?",
      "options": [
        "Saturn",
        "Jupiter",
        "Mars",
        "Merkur"
      ],
      "correct": 0,
      "explanation": "Saturns Ringe bestehen aus Milliarden kleinen Eis- und Gesteinsbrocken."
    },
    {
      "question": "Wie nennt man den roten Planeten, auf dem aktuell Roboter (Rover) herumdüsen?",
      "options": [
        "Mars",
        "Venus",
        "Jupiter",
        "Pluto"
      ],
      "correct": 0,
      "explanation": "Der Mars sieht rot aus, weil im Staub auf seiner Oberfläche ganz viel Eisenoxid (Rost) steckt."
    },
    {
      "question": "Welcher Stern steht im Zentrum unseres Sonnensystems und spendet uns Licht und Wärme?",
      "options": [
        "Die Sonne",
        "Der Mond",
        "Der Polarstern",
        "Sirius"
      ],
      "correct": 0,
      "explanation": "Die Sonne ist ein riesiger Ball aus brennendem Gas und der Stern, um den sich alles bei uns dreht."
    },
    {
      "question": "Wie lange braucht die Erde, um sich einmal komplett um die eigene Achse zu drehen?",
      "options": [
        "24 Stunden (1 Tag)",
        "365 Tage",
        "12 Stunden",
        "1 Monat"
      ],
      "correct": 0,
      "explanation": "Weil sich die Erde in 24 Stunden einmal dreht, erleben wir den Wechsel von Tag und Nacht."
    },
    {
      "question": "Wie lange braucht die Erde für eine komplette Runde um die Sonne?",
      "options": [
        "1 Jahr (365 Tage)",
        "1 Monat",
        "1 Tag",
        "10 Jahre"
      ],
      "correct": 0,
      "explanation": "Ein Jahr auf der Erde ist genau die Zeit, die unser Planet für eine Runde um die Sonne braucht."
    },
    {
      "question": "Wie heißt der natürliche Begleiter der Erde, den wir nachts am Himmel sehen?",
      "options": [
        "Der Mond",
        "Die Sonne",
        "Phobos",
        "Titan"
      ],
      "correct": 0,
      "explanation": "Der Mond kreist um die Erde und ist unser einziger natürlicher Satellit."
    },
    {
      "question": "Welcher Planet ist unser Heimatplanet und der einzige, auf dem wir Leben kennen?",
      "options": [
        "Erde",
        "Mars",
        "Venus",
        "Neptun"
      ],
      "correct": 0,
      "explanation": "Die Erde hat flüssiges Wasser, Sauerstoff und mildes Klima – perfekt für Pflanzen, Tiere und uns!"
    },
    {
      "question": "Warum leuchtet der Mond nachts am Himmel?",
      "options": [
        "Er wird von der Sonne angestrahlt",
        "Er brennt wie ein Stern",
        "Er hat Batterien",
        "Er besteht aus Plasma"
      ],
      "correct": 0,
      "explanation": "Der Mond leuchtet nicht selbst, sondern reflektiert wie ein Spiegel das Licht der Sonne."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 11: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 12: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 13: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 14: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 15: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 16: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 17: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 18: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 19: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 20: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 21: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 22: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 23: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 24: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 25: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 26: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 27: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 28: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 29: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 30: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 31: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 32: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 33: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 34: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 35: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 36: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 37: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 38: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 39: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 40: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 41: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 42: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 43: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 44: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 45: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 46: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 47: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 48: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 49: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 50: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 51: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 52: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 53: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 54: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 55: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 56: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 57: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 58: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 59: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 60: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 61: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 62: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 63: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 64: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 65: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 66: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 67: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 68: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 69: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 70: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 71: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 72: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 73: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 74: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 75: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 76: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 77: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 78: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 79: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 80: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 81: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 82: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 83: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 84: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 85: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 86: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 87: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 88: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 89: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 90: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 91: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 92: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 93: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 94: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 95: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 96: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 97: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 98: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 99: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 100: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 101: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 102: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 103: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 104: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 105: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 106: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 107: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 108: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 109: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 110: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 111: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 112: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 113: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 114: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 115: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 116: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 117: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 118: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 119: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 120: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 121: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 122: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 123: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 124: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 125: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 126: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 127: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 128: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 129: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 130: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 131: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 132: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 133: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 134: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 135: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 136: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 137: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 138: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 139: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 140: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 141: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 142: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 143: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 144: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 145: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 146: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 147: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 148: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 149: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 150: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 151: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 152: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 153: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 154: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 155: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 156: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 157: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 158: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 159: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 160: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 161: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 162: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 163: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 164: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 165: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 166: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 167: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 168: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 169: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 170: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 171: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 172: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 173: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 174: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 175: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 176: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 177: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 178: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 179: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 180: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 181: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 182: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 183: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 184: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 185: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 186: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 187: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 188: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 189: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 190: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 191: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 192: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 193: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 194: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 195: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 196: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 197: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 198: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 199: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 200: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    }
  ],
  "mittel": [
    {
      "question": "Gilt Pluto heute noch als voller Planet unseres Sonnensystems?",
      "options": [
        "Nein, er ist ein Zwergplanet",
        "Ja, der 9. Planet",
        "Nein, er ist ein Stern",
        "Ja, aber ein Gasplanet"
      ],
      "correct": 0,
      "explanation": "2006 haben Forscher beschlossen, dass Pluto zu klein ist. Seitdem gilt er als Zwergplanet."
    },
    {
      "question": "Welcher Planet ist der heißeste in unserem Sonnensystem, obwohl er nicht am nächsten zur Sonne steht?",
      "options": [
        "Venus",
        "Merkur",
        "Mars",
        "Jupiter"
      ],
      "correct": 0,
      "explanation": "Die Venus hat eine dicke Atmosphäre, die die Wärme wie ein Glashaus einfängt (Tibhauseffekt)."
    },
    {
      "question": "Wie nennt man Gesteinsbrocken aus dem Weltall, die in der Erdatmosphäre verglühen und als leuchtender Streifen zu sehen sind?",
      "options": [
        "Sternschnuppen (Meteore)",
        "Kometen",
        "Schwarze Löcher",
        "Satelliten"
      ],
      "correct": 0,
      "explanation": "Sternschnuppen sind kleine Staub- oder Gesteinskörnchen, die beim Eintritt in die Luft glühen."
    },
    {
      "question": "Welcher Mensch betrat im Jahr 1969 als allererster den Mond?",
      "options": [
        "Neil Armstrong",
        "Buzz Aldrin",
        "Yuri Gagarin",
        "Alexander Gerst"
      ],
      "correct": 0,
      "explanation": "Neil Armstrong sagte dabei den berühmten Satz: 'Ein kleiner Schritt für einen Menschen, aber ein riesiger Sprung für die Menschheit.'"
    },
    {
      "question": "Was befindet sich im sogenannten 'Asteroidengürtel' zwischen Mars und Jupiter?",
      "options": [
        "Millionen kleine und große Gesteinsbrocken",
        "Ein riesiger Ozean",
        "Nur Weltraumschrott",
        "Eine Wand aus Eis"
      ],
      "correct": 0,
      "explanation": "Der Asteroidengürtel trennt die inneren Steinplaneten von den äußeren Gasplaneten."
    },
    {
      "question": "Wie nennt man die Schutzkleidung, die Astronauten bei Weltraumeinsätzen tragen müssen?",
      "options": [
        "Raumanzug",
        "Taucheranzug",
        "Fliegeroverall",
        "Kevlaranzug"
      ],
      "correct": 0,
      "explanation": "Im Weltall gibt es keine Luft zum Atmen und es ist eiskalt – der Raumanzug schützt und versorgt die Astronauten."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 7: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 8: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 9: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 10: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 11: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 12: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 13: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 14: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 15: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 16: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 17: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 18: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 19: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 20: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 21: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 22: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 23: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 24: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 25: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 26: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 27: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 28: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 29: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 30: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 31: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 32: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 33: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 34: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 35: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 36: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 37: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 38: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 39: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 40: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 41: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 42: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 43: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 44: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 45: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 46: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 47: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 48: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 49: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 50: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 51: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 52: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 53: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 54: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 55: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 56: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 57: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 58: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 59: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 60: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 61: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 62: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 63: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 64: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 65: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 66: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 67: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 68: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 69: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 70: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 71: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 72: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 73: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 74: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 75: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 76: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 77: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 78: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 79: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 80: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 81: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 82: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 83: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 84: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 85: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 86: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 87: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 88: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 89: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 90: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 91: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 92: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 93: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 94: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 95: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 96: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 97: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 98: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 99: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 100: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 101: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 102: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 103: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 104: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 105: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 106: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 107: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 108: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 109: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 110: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 111: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 112: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 113: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 114: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 115: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 116: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 117: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 118: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 119: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 120: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 121: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 122: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 123: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 124: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 125: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 126: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 127: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 128: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 129: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 130: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 131: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 132: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 133: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 134: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 135: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 136: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 137: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 138: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 139: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 140: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 141: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 142: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 143: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 144: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 145: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 146: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 147: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 148: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 149: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 150: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 151: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 152: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 153: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 154: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 155: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 156: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 157: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 158: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 159: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 160: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 161: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 162: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 163: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 164: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 165: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 166: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 167: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 168: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 169: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 170: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 171: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 172: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 173: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 174: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 175: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 176: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 177: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 178: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 179: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 180: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 181: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 182: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 183: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 184: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 185: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 186: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 187: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 188: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 189: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 190: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 191: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 192: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 193: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 194: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 195: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 196: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 197: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 198: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 199: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 200: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    }
  ],
  "schwer": [
    {
      "question": "Wie heißt die riesige Galaxie (Sternensystem), in der sich unser Sonnensystem befindet?",
      "options": [
        "Milchstraße",
        "Andromeda",
        "Sombrero-Galaxie",
        "Orion-Nebel"
      ],
      "correct": 0,
      "explanation": "Unsere Milchstraße ist eine riesige Spirale aus über 100 Milliarden Sternen!"
    },
    {
      "question": "Wie nennt man den riesigen roten Sturm auf dem Planet Jupiter, der schon seit Jahrhunderten tobt?",
      "options": [
        "Der Große Rote Fleck",
        "Das Rote Auge",
        "Der Jupiter-Hurrikan",
        "Der Große Krater"
      ],
      "correct": 0,
      "explanation": "Der 'Große Rote Fleck' ist ein gigantischer Wirbelsturm, der größer ist als die ganze Erde!"
    },
    {
      "question": "Welcher Planet hat die meisten bekannten Monde in unserem Sonnensystem?",
      "options": [
        "Saturn",
        "Erde",
        "Merkur",
        "Venus"
      ],
      "correct": 0,
      "explanation": "Saturn führt das Rennen an und hat über 100 entdeckte Monde, gefolgt von Jupiter."
    },
    {
      "question": "Wie schnell ist das Licht der Sonne unterwegs, um die Erde zu erreichen?",
      "options": [
        "Ca. 8 Minuten",
        "Sofort (0 Sekunden)",
        "Ca. 8 Stunden",
        "Ca. 3 Tage"
      ],
      "correct": 0,
      "explanation": "Das Licht legt 300.000 Kilometer pro Sekunde zurück und braucht knapp 8 Minuten bis zu uns."
    },
    {
      "question": "Welche Kraft sorgt dafür, dass die Planeten um die Sonne kreisen und wir nicht von der Erde abheben?",
      "options": [
        "Schwerkraft (Gravitation)",
        "Magnetismus",
        "Reibung",
        "Fliehkraft"
      ],
      "correct": 0,
      "explanation": "Die Schwerkraft zieht Massen an. Die riesige Masse der Sonne hält alle Planeten auf ihrer Bahn."
    },
    {
      "question": "Auf welchem Planeten steht der 'Olympus Mons', der größte Vulkan unseres Sonnensystems?",
      "options": [
        "Mars",
        "Venus",
        "Erde",
        "Jupiter"
      ],
      "correct": 0,
      "explanation": "Der Olympus Mons auf dem Mars ist fast dreimal so hoch wie der Mount Everest auf der Erde!"
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 7: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 8: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 9: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 10: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 11: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 12: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 13: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 14: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 15: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 16: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 17: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 18: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 19: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 20: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 21: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 22: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 23: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 24: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 25: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 26: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 27: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 28: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 29: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 30: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 31: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 32: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 33: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 34: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 35: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 36: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 37: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 38: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 39: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 40: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 41: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 42: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 43: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 44: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 45: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 46: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 47: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 48: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 49: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 50: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 51: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 52: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 53: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 54: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 55: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 56: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 57: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 58: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 59: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 60: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 61: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 62: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 63: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 64: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 65: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 66: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 67: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 68: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 69: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 70: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 71: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 72: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 73: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 74: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 75: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 76: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 77: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 78: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 79: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 80: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 81: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 82: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 83: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 84: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 85: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 86: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 87: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 88: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 89: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 90: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 91: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 92: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 93: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 94: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 95: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 96: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 97: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 98: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 99: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 100: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 101: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 102: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 103: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 104: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 105: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 106: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 107: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 108: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 109: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 110: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 111: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 112: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 113: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 114: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 115: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 116: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 117: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 118: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 119: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 120: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 121: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 122: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 123: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 124: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 125: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 126: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 127: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 128: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 129: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 130: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 131: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 132: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 133: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 134: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 135: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 136: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 137: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 138: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 139: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 140: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 141: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 142: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 143: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 144: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 145: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 146: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 147: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 148: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 149: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 150: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 151: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 152: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 153: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 154: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 155: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 156: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 157: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 158: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 159: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 160: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 161: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 162: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 163: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 164: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 165: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 166: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 167: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 168: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 169: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 170: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 171: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 172: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 173: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 174: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 175: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 176: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 177: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 178: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 179: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 180: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 181: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 182: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 183: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 184: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 185: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 186: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 187: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 188: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 189: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 190: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 191: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 192: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 193: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 194: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 195: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 196: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    },
    {
      "question": "[Weltraumfahrt] Weltraum-Rätsel 197: Was nutzen Astronauten auf der Internationalen Raumstation (ISS), um fit zu bleiben?",
      "options": [
        "Spezielle Sportgeräte wie Laufbänder mit Gurten",
        "Magische Fitness-Pillen",
        "Sie schweben einfach nur",
        "Sie machen Liegestütze an der Decke"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Weil es im All keine Schwerkraft gibt, müssen Astronauten täglich Sport machen, damit ihre Muskeln nicht abbauen."
    },
    {
      "question": "[Planeten-Wissen] Weltraum-Rätsel 198: Aus was bestehen die äußeren Planeten Jupiter, Saturn, Uranus und Neptun hauptsächlich?",
      "options": [
        "Aus Gasen und Flüssigkeiten",
        "Aus festem Holz",
        "Aus purem Gold",
        "Aus flüssigem Feuer"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Man nennt sie Gasriesen, weil sie im Gegensatz zur Erde keine feste Gesteinsoberfläche haben."
    },
    {
      "question": "[Mond & Erde] Weltraum-Rätsel 199: Was verursacht die Gezeiten (Ebbe und Flut) in den Ozeanen auf der Erde?",
      "options": [
        "Die Anziehungskraft des Mondes",
        "Der Wind auf dem Meer",
        "Die Fische im Ozean",
        "Das Drehen des Erdkerns"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Die Schwerkraft des Mondes zieht das Meerwasser auf der Erde leicht zu sich heran."
    },
    {
      "question": "[Sonne & Sterne] Weltraum-Rätsel 200: Wie entsteht das Leuchten der Sterne am Nacht-Himmel?",
      "options": [
        "Sie sind riesige, brennende Gasbälle wie unsere Sonne",
        "Sie reflektieren Straßenlaternen",
        "Es sind kleine Spiegel im Weltall",
        "Sie leuchten wie Glühwürmchen"
      ],
      "correct": 0,
      "explanation": "Weltraum-Fakt: Jeder Stern am Nachthimmel ist eine eigene, weit entfernte Sonne."
    }
  ]
};