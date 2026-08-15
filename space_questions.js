// Weltraum Quiz - 600 abwechslungsreiche Fragen (Sonnensystem, Monde, Sterne & Astronauten)
var spaceQuizData = {
  "leicht": [
    {
      "question": "Wie heisst das berühmte Weltraumteleskop, das seit 2022 fantastische Bilder aus dem tiefen All schickt?",
      "options": [
        "Kepler-Satellit",
        "Hubble-Teleskop",
        "James-Webb-Teleskop",
        "Galileo-Fernrohr"
      ],
      "correct": 2,
      "explanation": "Das James-Webb-Teleskop sieht im Infrarotlicht und kann selbst die ältesten Galaxien des Universums fotografieren."
    },
    {
      "question": "Wie nennt man das Phänomen, wenn der Mond sich genau vor die Sonne schiebt und es tagsüber dunkel wird?",
      "options": [
        "Sonnenfinsternis",
        "Polarlichter",
        "Meteorstrom",
        "Mondfinsternis"
      ],
      "correct": 1,
      "explanation": "Bei einer totalen Sonnenfinsternis verdeckt der Mond die Sonne für einige Minuten komplett."
    },
    {
      "question": "Welche bunte Leuchterscheinung kann man im Winter nahe am Nordpol am Himmel beobachten?",
      "options": [
        "Sonneneruptiv",
        "Kometenschweif",
        "Polarlichter (Aurora)",
        "Sternschnuppen"
      ],
      "correct": 3,
      "explanation": "Polarlichter entstehen, wenn geladene Teilchen von der Sonne auf die Erdatmosphäre treffen."
    },
    {
      "question": "Welches Tier flog im Jahr 1957 als eines der ersten Lebewesen im Raumschiff Sputnik 2 ins All?",
      "options": [
        "Der Schimpanse Ham",
        "Die Hündin Laika",
        "Maus Pieps",
        "Kater Felix"
      ],
      "correct": 3,
      "explanation": "Die Hündin Laika war das erste Lebewesen, das die Erde im Weltall umkreiste."
    },
    {
      "question": "Wie heisst die internationale Raumstation, auf der Astronauten im All wohnen und forschen?",
      "options": [
        "Apollo 11",
        "Enterprise",
        "Starlink",
        "ISS"
      ],
      "correct": 1,
      "explanation": "Die ISS umkreist die Erde in ca. 400 km Höhe mit einer Geschwindigkeit von 28.000 km/h."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der sonnennächste Planet'?",
      "options": [
        "Venus",
        "Neptun",
        "Saturn",
        "Merkur"
      ],
      "correct": 3,
      "explanation": "Merkur gilt als der sonnennächste Planet. Besonderheit: Er hat keine Atmosphäre und extreme Temperaturschwankungen."
    },
    {
      "question": "Wie lange braucht der Planet Merkur ungefähr für eine Runde um die Sonne?",
      "options": [
        "88 Erdtagen",
        "24 Stunden",
        "10 Tage",
        "500 Jahre"
      ],
      "correct": 0,
      "explanation": "Die Umlaufzeit von Merkur beträgt 88 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Merkur, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Kupfer-Lila",
        "Neongrün",
        "Pechschwarz",
        "grau und voller Krater"
      ],
      "correct": 3,
      "explanation": "Merkur erscheint am Himmel hauptsächlich grau und voller Krater."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der heißeste Planet'?",
      "options": [
        "Venus",
        "Saturn",
        "Neptun",
        "Merkur"
      ],
      "correct": 0,
      "explanation": "Venus gilt als der heißeste Planet. Besonderheit: Er ist von dicken Giftwolken umgeben, die die Hitze stauen."
    },
    {
      "question": "Wie lange braucht der Planet Venus ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "24 Stunden",
        "10 Tage",
        "225 Erdtagen"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Venus beträgt 225 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Venus, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Pechschwarz",
        "Neongrün",
        "Kupfer-Lila",
        "gelb-weißlich"
      ],
      "correct": 3,
      "explanation": "Venus erscheint am Himmel hauptsächlich gelb-weißlich."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'unser Heimatplanet'?",
      "options": [
        "Saturn",
        "Erde",
        "Merkur",
        "Neptun"
      ],
      "correct": 1,
      "explanation": "Erde gilt als unser Heimatplanet. Besonderheit: Er ist der einzige bekannte Ort mit flüssigem Wasser und Leben."
    },
    {
      "question": "Wie lange braucht der Planet Erde ungefähr für eine Runde um die Sonne?",
      "options": [
        "24 Stunden",
        "500 Jahre",
        "365 Tagen",
        "10 Tage"
      ],
      "correct": 2,
      "explanation": "Die Umlaufzeit von Erde beträgt 365 Tagen."
    },
    {
      "question": "Welche Farbe hat der Planet Erde, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "blau und weiß",
        "Neongrün",
        "Pechschwarz",
        "Kupfer-Lila"
      ],
      "correct": 0,
      "explanation": "Erde erscheint am Himmel hauptsächlich blau und weiß."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der Rote Planet'?",
      "options": [
        "Merkur",
        "Saturn",
        "Mars",
        "Neptun"
      ],
      "correct": 2,
      "explanation": "Mars gilt als der Rote Planet. Besonderheit: Er besitzt den höchsten Vulkan unseres Sonnensystems (Olympus Mons)."
    },
    {
      "question": "Wie lange braucht der Planet Mars ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "24 Stunden",
        "10 Tage",
        "687 Erdtagen"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Mars beträgt 687 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Mars, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "rostrot",
        "Neongrün",
        "Kupfer-Lila",
        "Pechschwarz"
      ],
      "correct": 0,
      "explanation": "Mars erscheint am Himmel hauptsächlich rostrot."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der größte Gasriese'?",
      "options": [
        "Jupiter",
        "Neptun",
        "Saturn",
        "Merkur"
      ],
      "correct": 0,
      "explanation": "Jupiter gilt als der größte Gasriese. Besonderheit: Er hat einen riesigen Wirbelsturm namens 'Großer Roter Fleck'."
    },
    {
      "question": "Wie lange braucht der Planet Jupiter ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "10 Tage",
        "24 Stunden",
        "12 Erdjahren"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Jupiter beträgt 12 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Jupiter, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Kupfer-Lila",
        "braun-weiß gestreift",
        "Neongrün",
        "Pechschwarz"
      ],
      "correct": 1,
      "explanation": "Jupiter erscheint am Himmel hauptsächlich braun-weiß gestreift."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der Ringplanet'?",
      "options": [
        "Saturn",
        "Merkur",
        "Jupiter",
        "Neptun"
      ],
      "correct": 0,
      "explanation": "Saturn gilt als der Ringplanet. Besonderheit: Er besitzt das spektakulärste Ringsystem aus Eis und Brocken."
    },
    {
      "question": "Wie lange braucht der Planet Saturn ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "24 Stunden",
        "10 Tage",
        "29 Erdjahren"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Saturn beträgt 29 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Saturn, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Pechschwarz",
        "gelblich mit bunten Ringen",
        "Neongrün",
        "Kupfer-Lila"
      ],
      "correct": 1,
      "explanation": "Saturn erscheint am Himmel hauptsächlich gelblich mit bunten Ringen."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der eiskalte Kipp-Planet'?",
      "options": [
        "Saturn",
        "Merkur",
        "Uranus",
        "Neptun"
      ],
      "correct": 2,
      "explanation": "Uranus gilt als der eiskalte Kipp-Planet. Besonderheit: Er rollt sozusagen seitlich auf seiner Umlaufbahn um die Sonne."
    },
    {
      "question": "Wie lange braucht der Planet Uranus ungefähr für eine Runde um die Sonne?",
      "options": [
        "24 Stunden",
        "10 Tage",
        "500 Jahre",
        "84 Erdjahren"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Uranus beträgt 84 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Uranus, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Kupfer-Lila",
        "Neongrün",
        "Pechschwarz",
        "hellblau"
      ],
      "correct": 3,
      "explanation": "Uranus erscheint am Himmel hauptsächlich hellblau."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der windigste Planet'?",
      "options": [
        "Neptun",
        "Merkur",
        "Mars",
        "Saturn"
      ],
      "correct": 0,
      "explanation": "Neptun gilt als der windigste Planet. Besonderheit: Er hat die stärksten Winde im Sonnensystem mit über 2000 km/h."
    },
    {
      "question": "Wie lange braucht der Planet Neptun ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "24 Stunden",
        "165 Erdjahren",
        "10 Tage"
      ],
      "correct": 2,
      "explanation": "Die Umlaufzeit von Neptun beträgt 165 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Neptun, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Neongrün",
        "tiefblau",
        "Pechschwarz",
        "Kupfer-Lila"
      ],
      "correct": 1,
      "explanation": "Neptun erscheint am Himmel hauptsächlich tiefblau."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'der Erdmond'?",
      "options": [
        "Erde",
        "Sonne",
        "Uranus",
        "Merkur"
      ],
      "correct": 0,
      "explanation": "der Erdmond umkreist den Himmelskörper Erde. Fakt: Er ist der einzige fremde Himmelskörper, den Menschen je betreten haben."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Io'?",
      "options": [
        "Merkur",
        "Uranus",
        "Sonne",
        "Jupiter"
      ],
      "correct": 3,
      "explanation": "Io umkreist den Himmelskörper Jupiter. Fakt: Er ist ein Mond voller aktiver Vulkane, die Lava ins All spucken."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Europa'?",
      "options": [
        "Uranus",
        "Jupiter",
        "Merkur",
        "Sonne"
      ],
      "correct": 1,
      "explanation": "Europa umkreist den Himmelskörper Jupiter. Fakt: Er ist besitzt einen riesigen Ozean aus flüssigem Wasser unter einer dicken Eisschicht."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Ganymed'?",
      "options": [
        "Uranus",
        "Sonne",
        "Jupiter",
        "Merkur"
      ],
      "correct": 2,
      "explanation": "Ganymed umkreist den Himmelskörper Jupiter. Fakt: Er ist der größte Mond in unserem gesamten Sonnensystem."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Titan'?",
      "options": [
        "Saturn",
        "Merkur",
        "Sonne",
        "Uranus"
      ],
      "correct": 0,
      "explanation": "Titan umkreist den Himmelskörper Saturn. Fakt: Er ist hat eine dicke Atmosphäre und Seen aus flüssigem Methan."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Enceladus'?",
      "options": [
        "Uranus",
        "Merkur",
        "Sonne",
        "Saturn"
      ],
      "correct": 3,
      "explanation": "Enceladus umkreist den Himmelskörper Saturn. Fakt: Er ist spuckt riesige Geysire aus Eiswasser direkt ins Weltall."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Phobos'?",
      "options": [
        "Uranus",
        "Mars",
        "Merkur",
        "Sonne"
      ],
      "correct": 1,
      "explanation": "Phobos umkreist den Himmelskörper Mars. Fakt: Er ist einer der zwei kartoffelförmigen Monde des Roten Planeten."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Pluto'?",
      "options": [
        "Sonne",
        "Uranus",
        "Merkur",
        "Zwergplanet"
      ],
      "correct": 3,
      "explanation": "Pluto umkreist den Himmelskörper Zwergplanet. Fakt: Er ist war früher der 9. Planet, gilt seit 2006 aber als Zwergplanet."
    },
    {
      "question": "[LEICHT-WISSEN #38] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #39] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #40] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #41] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #42] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #43] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #44] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Der Erdmond"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #45] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #46] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #47] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #48] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Ein neuer Planet"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #49] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Schattenrand",
        "Todeszone",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #50] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #51] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Die Gravitation"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #52] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #53] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #54] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #55] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet",
        "Eine riesige Glühbirne"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #56] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schattenrand",
        "Schwerkraftlinie",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #57] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #58] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Der Erdmond"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #59] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #60] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #61] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #62] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet",
        "Nichts, dort ist es leer"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #63] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie",
        "Todeszone"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #64] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #65] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #66] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #67] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #68] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #69] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #70] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Todeszone",
        "Ereignishorizont",
        "Schwerkraftlinie"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #71] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #72] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Der Erdmond"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #73] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #74] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #75] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #76] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #77] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #78] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #79] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Der Erdmond"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #80] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #81] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #82] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #83] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #84] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Todeszone",
        "Ereignishorizont",
        "Schwerkraftlinie"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #85] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #86] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Der Erdmond",
        "Die Ozon-Wolke"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #87] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #88] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #89] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #90] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #91] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Todeszone",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #92] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #93] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #94] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #95] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #96] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus brennendem Holz"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #97] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #98] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #99] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #100] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Der Erdmond"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #101] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #102] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #103] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #104] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Nichts, dort ist es leer"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #105] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Schwerkraftlinie",
        "Todeszone",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #106] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #107] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #108] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #109] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #110] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #111] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #112] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone",
        "Schattenrand"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #113] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #114] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #115] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #116] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #117] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #118] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Eine riesige Glühbirne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #119] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone",
        "Schattenrand"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #120] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #121] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Der Erdmond"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #122] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #123] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #124] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #125] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #126] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schattenrand",
        "Todeszone",
        "Schwerkraftlinie"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #127] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #128] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Die Ozon-Wolke"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #129] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #130] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #131] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #132] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein neuer Planet"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #133] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #134] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #135] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Gravitation"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #136] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #137] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #138] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #139] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Eine riesige Glühbirne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #140] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #141] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #142] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #143] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #144] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #145] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #146] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #147] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont",
        "Todeszone"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #148] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #149] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #150] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #151] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #152] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #153] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #154] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Todeszone",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #155] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #156] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #157] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #158] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #159] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #160] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #161] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Schattenrand",
        "Todeszone"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #162] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #163] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #164] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #165] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #166] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #167] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #168] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #169] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #170] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #171] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #172] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #173] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #174] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Eine riesige Glühbirne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #175] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #176] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #177] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #178] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #179] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #180] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #181] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #182] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Todeszone",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #183] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #184] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Ozon-Wolke"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #185] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #186] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #187] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #188] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #189] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #190] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #191] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Gravitation",
        "Die Ozon-Wolke"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #192] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #193] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #194] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #195] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #196] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #197] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #198] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Die Gravitation",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #199] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[LEICHT-WISSEN #200] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    }
  ],
  "mittel": [
    {
      "question": "Wie heisst das berühmte Weltraumteleskop, das seit 2022 fantastische Bilder aus dem tiefen All schickt?",
      "options": [
        "Kepler-Satellit",
        "Hubble-Teleskop",
        "James-Webb-Teleskop",
        "Galileo-Fernrohr"
      ],
      "correct": 0,
      "explanation": "Das James-Webb-Teleskop sieht im Infrarotlicht und kann selbst die ältesten Galaxien des Universums fotografieren."
    },
    {
      "question": "Wie nennt man das Phänomen, wenn der Mond sich genau vor die Sonne schiebt und es tagsüber dunkel wird?",
      "options": [
        "Sonnenfinsternis",
        "Polarlichter",
        "Meteorstrom",
        "Mondfinsternis"
      ],
      "correct": 2,
      "explanation": "Bei einer totalen Sonnenfinsternis verdeckt der Mond die Sonne für einige Minuten komplett."
    },
    {
      "question": "Welche bunte Leuchterscheinung kann man im Winter nahe am Nordpol am Himmel beobachten?",
      "options": [
        "Sonneneruptiv",
        "Kometenschweif",
        "Polarlichter (Aurora)",
        "Sternschnuppen"
      ],
      "correct": 0,
      "explanation": "Polarlichter entstehen, wenn geladene Teilchen von der Sonne auf die Erdatmosphäre treffen."
    },
    {
      "question": "Welches Tier flog im Jahr 1957 als eines der ersten Lebewesen im Raumschiff Sputnik 2 ins All?",
      "options": [
        "Der Schimpanse Ham",
        "Die Hündin Laika",
        "Maus Pieps",
        "Kater Felix"
      ],
      "correct": 1,
      "explanation": "Die Hündin Laika war das erste Lebewesen, das die Erde im Weltall umkreiste."
    },
    {
      "question": "Wie heisst die internationale Raumstation, auf der Astronauten im All wohnen und forschen?",
      "options": [
        "Apollo 11",
        "Enterprise",
        "Starlink",
        "ISS"
      ],
      "correct": 1,
      "explanation": "Die ISS umkreist die Erde in ca. 400 km Höhe mit einer Geschwindigkeit von 28.000 km/h."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der sonnennächste Planet'?",
      "options": [
        "Venus",
        "Neptun",
        "Saturn",
        "Merkur"
      ],
      "correct": 3,
      "explanation": "Merkur gilt als der sonnennächste Planet. Besonderheit: Er hat keine Atmosphäre und extreme Temperaturschwankungen."
    },
    {
      "question": "Wie lange braucht der Planet Merkur ungefähr für eine Runde um die Sonne?",
      "options": [
        "88 Erdtagen",
        "10 Tage",
        "500 Jahre",
        "24 Stunden"
      ],
      "correct": 0,
      "explanation": "Die Umlaufzeit von Merkur beträgt 88 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Merkur, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "grau und voller Krater",
        "Kupfer-Lila",
        "Neongrün",
        "Pechschwarz"
      ],
      "correct": 0,
      "explanation": "Merkur erscheint am Himmel hauptsächlich grau und voller Krater."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der heißeste Planet'?",
      "options": [
        "Saturn",
        "Neptun",
        "Venus",
        "Merkur"
      ],
      "correct": 2,
      "explanation": "Venus gilt als der heißeste Planet. Besonderheit: Er ist von dicken Giftwolken umgeben, die die Hitze stauen."
    },
    {
      "question": "Wie lange braucht der Planet Venus ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "225 Erdtagen",
        "10 Tage",
        "24 Stunden"
      ],
      "correct": 1,
      "explanation": "Die Umlaufzeit von Venus beträgt 225 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Venus, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "gelb-weißlich",
        "Pechschwarz",
        "Neongrün",
        "Kupfer-Lila"
      ],
      "correct": 0,
      "explanation": "Venus erscheint am Himmel hauptsächlich gelb-weißlich."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'unser Heimatplanet'?",
      "options": [
        "Saturn",
        "Merkur",
        "Neptun",
        "Erde"
      ],
      "correct": 3,
      "explanation": "Erde gilt als unser Heimatplanet. Besonderheit: Er ist der einzige bekannte Ort mit flüssigem Wasser und Leben."
    },
    {
      "question": "Wie lange braucht der Planet Erde ungefähr für eine Runde um die Sonne?",
      "options": [
        "10 Tage",
        "365 Tagen",
        "24 Stunden",
        "500 Jahre"
      ],
      "correct": 1,
      "explanation": "Die Umlaufzeit von Erde beträgt 365 Tagen."
    },
    {
      "question": "Welche Farbe hat der Planet Erde, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "blau und weiß",
        "Pechschwarz",
        "Neongrün",
        "Kupfer-Lila"
      ],
      "correct": 0,
      "explanation": "Erde erscheint am Himmel hauptsächlich blau und weiß."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der Rote Planet'?",
      "options": [
        "Neptun",
        "Saturn",
        "Merkur",
        "Mars"
      ],
      "correct": 3,
      "explanation": "Mars gilt als der Rote Planet. Besonderheit: Er besitzt den höchsten Vulkan unseres Sonnensystems (Olympus Mons)."
    },
    {
      "question": "Wie lange braucht der Planet Mars ungefähr für eine Runde um die Sonne?",
      "options": [
        "687 Erdtagen",
        "500 Jahre",
        "24 Stunden",
        "10 Tage"
      ],
      "correct": 0,
      "explanation": "Die Umlaufzeit von Mars beträgt 687 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Mars, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Kupfer-Lila",
        "Pechschwarz",
        "rostrot",
        "Neongrün"
      ],
      "correct": 2,
      "explanation": "Mars erscheint am Himmel hauptsächlich rostrot."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der größte Gasriese'?",
      "options": [
        "Jupiter",
        "Saturn",
        "Merkur",
        "Neptun"
      ],
      "correct": 0,
      "explanation": "Jupiter gilt als der größte Gasriese. Besonderheit: Er hat einen riesigen Wirbelsturm namens 'Großer Roter Fleck'."
    },
    {
      "question": "Wie lange braucht der Planet Jupiter ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "10 Tage",
        "24 Stunden",
        "12 Erdjahren"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Jupiter beträgt 12 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Jupiter, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Kupfer-Lila",
        "braun-weiß gestreift",
        "Neongrün",
        "Pechschwarz"
      ],
      "correct": 1,
      "explanation": "Jupiter erscheint am Himmel hauptsächlich braun-weiß gestreift."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der Ringplanet'?",
      "options": [
        "Merkur",
        "Jupiter",
        "Neptun",
        "Saturn"
      ],
      "correct": 3,
      "explanation": "Saturn gilt als der Ringplanet. Besonderheit: Er besitzt das spektakulärste Ringsystem aus Eis und Brocken."
    },
    {
      "question": "Wie lange braucht der Planet Saturn ungefähr für eine Runde um die Sonne?",
      "options": [
        "10 Tage",
        "29 Erdjahren",
        "24 Stunden",
        "500 Jahre"
      ],
      "correct": 1,
      "explanation": "Die Umlaufzeit von Saturn beträgt 29 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Saturn, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Pechschwarz",
        "Kupfer-Lila",
        "Neongrün",
        "gelblich mit bunten Ringen"
      ],
      "correct": 3,
      "explanation": "Saturn erscheint am Himmel hauptsächlich gelblich mit bunten Ringen."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der eiskalte Kipp-Planet'?",
      "options": [
        "Merkur",
        "Uranus",
        "Saturn",
        "Neptun"
      ],
      "correct": 1,
      "explanation": "Uranus gilt als der eiskalte Kipp-Planet. Besonderheit: Er rollt sozusagen seitlich auf seiner Umlaufbahn um die Sonne."
    },
    {
      "question": "Wie lange braucht der Planet Uranus ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "24 Stunden",
        "10 Tage",
        "84 Erdjahren"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Uranus beträgt 84 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Uranus, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Pechschwarz",
        "Kupfer-Lila",
        "hellblau",
        "Neongrün"
      ],
      "correct": 2,
      "explanation": "Uranus erscheint am Himmel hauptsächlich hellblau."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der windigste Planet'?",
      "options": [
        "Saturn",
        "Mars",
        "Neptun",
        "Merkur"
      ],
      "correct": 2,
      "explanation": "Neptun gilt als der windigste Planet. Besonderheit: Er hat die stärksten Winde im Sonnensystem mit über 2000 km/h."
    },
    {
      "question": "Wie lange braucht der Planet Neptun ungefähr für eine Runde um die Sonne?",
      "options": [
        "10 Tage",
        "24 Stunden",
        "500 Jahre",
        "165 Erdjahren"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Neptun beträgt 165 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Neptun, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Pechschwarz",
        "Kupfer-Lila",
        "Neongrün",
        "tiefblau"
      ],
      "correct": 3,
      "explanation": "Neptun erscheint am Himmel hauptsächlich tiefblau."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'der Erdmond'?",
      "options": [
        "Merkur",
        "Uranus",
        "Erde",
        "Sonne"
      ],
      "correct": 2,
      "explanation": "der Erdmond umkreist den Himmelskörper Erde. Fakt: Er ist der einzige fremde Himmelskörper, den Menschen je betreten haben."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Io'?",
      "options": [
        "Uranus",
        "Sonne",
        "Jupiter",
        "Merkur"
      ],
      "correct": 2,
      "explanation": "Io umkreist den Himmelskörper Jupiter. Fakt: Er ist ein Mond voller aktiver Vulkane, die Lava ins All spucken."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Europa'?",
      "options": [
        "Sonne",
        "Uranus",
        "Merkur",
        "Jupiter"
      ],
      "correct": 3,
      "explanation": "Europa umkreist den Himmelskörper Jupiter. Fakt: Er ist besitzt einen riesigen Ozean aus flüssigem Wasser unter einer dicken Eisschicht."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Ganymed'?",
      "options": [
        "Uranus",
        "Merkur",
        "Sonne",
        "Jupiter"
      ],
      "correct": 3,
      "explanation": "Ganymed umkreist den Himmelskörper Jupiter. Fakt: Er ist der größte Mond in unserem gesamten Sonnensystem."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Titan'?",
      "options": [
        "Saturn",
        "Sonne",
        "Uranus",
        "Merkur"
      ],
      "correct": 0,
      "explanation": "Titan umkreist den Himmelskörper Saturn. Fakt: Er ist hat eine dicke Atmosphäre und Seen aus flüssigem Methan."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Enceladus'?",
      "options": [
        "Saturn",
        "Uranus",
        "Sonne",
        "Merkur"
      ],
      "correct": 0,
      "explanation": "Enceladus umkreist den Himmelskörper Saturn. Fakt: Er ist spuckt riesige Geysire aus Eiswasser direkt ins Weltall."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Phobos'?",
      "options": [
        "Uranus",
        "Sonne",
        "Merkur",
        "Mars"
      ],
      "correct": 3,
      "explanation": "Phobos umkreist den Himmelskörper Mars. Fakt: Er ist einer der zwei kartoffelförmigen Monde des Roten Planeten."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Pluto'?",
      "options": [
        "Merkur",
        "Zwergplanet",
        "Uranus",
        "Sonne"
      ],
      "correct": 1,
      "explanation": "Pluto umkreist den Himmelskörper Zwergplanet. Fakt: Er ist war früher der 9. Planet, gilt seit 2006 aber als Zwergplanet."
    },
    {
      "question": "[MITTEL-WISSEN #38] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #39] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #40] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #41] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #42] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone",
        "Schattenrand"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #43] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #44] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Die Ozon-Wolke"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #45] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #46] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #47] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #48] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein neuer Planet"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #49] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schattenrand",
        "Todeszone",
        "Schwerkraftlinie"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #50] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #51] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #52] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #53] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #54] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #55] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #56] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schattenrand",
        "Schwerkraftlinie",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #57] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #58] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Der Erdmond"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #59] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #60] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #61] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #62] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #63] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #64] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #65] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #66] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #67] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #68] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #69] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #70] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Schattenrand",
        "Todeszone"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #71] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #72] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #73] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #74] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #75] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #76] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #77] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #78] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #79] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Die Gravitation"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #80] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #81] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #82] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #83] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein neuer Planet"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #84] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Todeszone",
        "Schwerkraftlinie",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #85] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #86] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Der Erdmond"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #87] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #88] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #89] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #90] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #91] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schattenrand",
        "Ereignishorizont",
        "Schwerkraftlinie"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #92] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #93] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Gravitation",
        "Die Ozon-Wolke"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #94] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #95] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #96] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #97] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #98] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Todeszone",
        "Schwerkraftlinie",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #99] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #100] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #101] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #102] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #103] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #104] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Ein neuer Planet"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #105] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Ereignishorizont",
        "Schattenrand",
        "Todeszone"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #106] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #107] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Die Gravitation"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #108] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #109] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #110] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #111] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #112] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Ereignishorizont",
        "Todeszone",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #113] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #114] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Gravitation"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #115] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #116] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #117] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #118] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #119] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont",
        "Todeszone"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #120] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #121] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #122] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #123] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #124] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #125] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #126] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schattenrand",
        "Ereignishorizont",
        "Schwerkraftlinie"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #127] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #128] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Gravitation"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #129] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #130] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #131] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #132] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #133] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Schattenrand"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #134] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #135] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #136] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #137] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #138] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #139] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #140] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone",
        "Schattenrand"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #141] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #142] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #143] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #144] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #145] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #146] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Ein neuer Planet"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #147] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schattenrand",
        "Ereignishorizont",
        "Schwerkraftlinie"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #148] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #149] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Gravitation"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #150] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #151] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #152] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #153] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #154] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont",
        "Todeszone"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #155] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #156] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Der Erdmond"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #157] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #158] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #159] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #160] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #161] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Todeszone",
        "Ereignishorizont",
        "Schwerkraftlinie"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #162] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #163] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #164] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #165] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #166] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #167] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #168] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #169] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #170] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Gravitation"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #171] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #172] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #173] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #174] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #175] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Schwerkraftlinie",
        "Todeszone",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #176] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #177] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #178] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #179] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #180] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #181] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #182] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schattenrand",
        "Todeszone",
        "Schwerkraftlinie"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #183] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #184] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #185] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #186] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #187] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #188] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #189] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #190] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #191] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Ozon-Wolke"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #192] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #193] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #194] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #195] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #196] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone",
        "Schattenrand"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #197] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #198] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Die Gravitation"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #199] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[MITTEL-WISSEN #200] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    }
  ],
  "schwer": [
    {
      "question": "Wie heisst das berühmte Weltraumteleskop, das seit 2022 fantastische Bilder aus dem tiefen All schickt?",
      "options": [
        "Kepler-Satellit",
        "Hubble-Teleskop",
        "James-Webb-Teleskop",
        "Galileo-Fernrohr"
      ],
      "correct": 1,
      "explanation": "Das James-Webb-Teleskop sieht im Infrarotlicht und kann selbst die ältesten Galaxien des Universums fotografieren."
    },
    {
      "question": "Wie nennt man das Phänomen, wenn der Mond sich genau vor die Sonne schiebt und es tagsüber dunkel wird?",
      "options": [
        "Sonnenfinsternis",
        "Polarlichter",
        "Meteorstrom",
        "Mondfinsternis"
      ],
      "correct": 0,
      "explanation": "Bei einer totalen Sonnenfinsternis verdeckt der Mond die Sonne für einige Minuten komplett."
    },
    {
      "question": "Welche bunte Leuchterscheinung kann man im Winter nahe am Nordpol am Himmel beobachten?",
      "options": [
        "Sonneneruptiv",
        "Kometenschweif",
        "Polarlichter (Aurora)",
        "Sternschnuppen"
      ],
      "correct": 0,
      "explanation": "Polarlichter entstehen, wenn geladene Teilchen von der Sonne auf die Erdatmosphäre treffen."
    },
    {
      "question": "Welches Tier flog im Jahr 1957 als eines der ersten Lebewesen im Raumschiff Sputnik 2 ins All?",
      "options": [
        "Der Schimpanse Ham",
        "Die Hündin Laika",
        "Maus Pieps",
        "Kater Felix"
      ],
      "correct": 1,
      "explanation": "Die Hündin Laika war das erste Lebewesen, das die Erde im Weltall umkreiste."
    },
    {
      "question": "Wie heisst die internationale Raumstation, auf der Astronauten im All wohnen und forschen?",
      "options": [
        "Apollo 11",
        "Enterprise",
        "Starlink",
        "ISS"
      ],
      "correct": 2,
      "explanation": "Die ISS umkreist die Erde in ca. 400 km Höhe mit einer Geschwindigkeit von 28.000 km/h."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der sonnennächste Planet'?",
      "options": [
        "Venus",
        "Saturn",
        "Neptun",
        "Merkur"
      ],
      "correct": 3,
      "explanation": "Merkur gilt als der sonnennächste Planet. Besonderheit: Er hat keine Atmosphäre und extreme Temperaturschwankungen."
    },
    {
      "question": "Wie lange braucht der Planet Merkur ungefähr für eine Runde um die Sonne?",
      "options": [
        "10 Tage",
        "500 Jahre",
        "88 Erdtagen",
        "24 Stunden"
      ],
      "correct": 2,
      "explanation": "Die Umlaufzeit von Merkur beträgt 88 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Merkur, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "grau und voller Krater",
        "Neongrün",
        "Pechschwarz",
        "Kupfer-Lila"
      ],
      "correct": 0,
      "explanation": "Merkur erscheint am Himmel hauptsächlich grau und voller Krater."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der heißeste Planet'?",
      "options": [
        "Saturn",
        "Venus",
        "Neptun",
        "Merkur"
      ],
      "correct": 1,
      "explanation": "Venus gilt als der heißeste Planet. Besonderheit: Er ist von dicken Giftwolken umgeben, die die Hitze stauen."
    },
    {
      "question": "Wie lange braucht der Planet Venus ungefähr für eine Runde um die Sonne?",
      "options": [
        "225 Erdtagen",
        "10 Tage",
        "24 Stunden",
        "500 Jahre"
      ],
      "correct": 0,
      "explanation": "Die Umlaufzeit von Venus beträgt 225 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Venus, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Neongrün",
        "Pechschwarz",
        "gelb-weißlich",
        "Kupfer-Lila"
      ],
      "correct": 2,
      "explanation": "Venus erscheint am Himmel hauptsächlich gelb-weißlich."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'unser Heimatplanet'?",
      "options": [
        "Erde",
        "Saturn",
        "Neptun",
        "Merkur"
      ],
      "correct": 0,
      "explanation": "Erde gilt als unser Heimatplanet. Besonderheit: Er ist der einzige bekannte Ort mit flüssigem Wasser und Leben."
    },
    {
      "question": "Wie lange braucht der Planet Erde ungefähr für eine Runde um die Sonne?",
      "options": [
        "24 Stunden",
        "500 Jahre",
        "10 Tage",
        "365 Tagen"
      ],
      "correct": 3,
      "explanation": "Die Umlaufzeit von Erde beträgt 365 Tagen."
    },
    {
      "question": "Welche Farbe hat der Planet Erde, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "blau und weiß",
        "Pechschwarz",
        "Neongrün",
        "Kupfer-Lila"
      ],
      "correct": 0,
      "explanation": "Erde erscheint am Himmel hauptsächlich blau und weiß."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der Rote Planet'?",
      "options": [
        "Merkur",
        "Neptun",
        "Saturn",
        "Mars"
      ],
      "correct": 3,
      "explanation": "Mars gilt als der Rote Planet. Besonderheit: Er besitzt den höchsten Vulkan unseres Sonnensystems (Olympus Mons)."
    },
    {
      "question": "Wie lange braucht der Planet Mars ungefähr für eine Runde um die Sonne?",
      "options": [
        "24 Stunden",
        "687 Erdtagen",
        "10 Tage",
        "500 Jahre"
      ],
      "correct": 1,
      "explanation": "Die Umlaufzeit von Mars beträgt 687 Erdtagen."
    },
    {
      "question": "Welche Farbe hat der Planet Mars, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Kupfer-Lila",
        "rostrot",
        "Pechschwarz",
        "Neongrün"
      ],
      "correct": 1,
      "explanation": "Mars erscheint am Himmel hauptsächlich rostrot."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der größte Gasriese'?",
      "options": [
        "Merkur",
        "Jupiter",
        "Neptun",
        "Saturn"
      ],
      "correct": 1,
      "explanation": "Jupiter gilt als der größte Gasriese. Besonderheit: Er hat einen riesigen Wirbelsturm namens 'Großer Roter Fleck'."
    },
    {
      "question": "Wie lange braucht der Planet Jupiter ungefähr für eine Runde um die Sonne?",
      "options": [
        "12 Erdjahren",
        "24 Stunden",
        "10 Tage",
        "500 Jahre"
      ],
      "correct": 0,
      "explanation": "Die Umlaufzeit von Jupiter beträgt 12 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Jupiter, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Pechschwarz",
        "Kupfer-Lila",
        "braun-weiß gestreift",
        "Neongrün"
      ],
      "correct": 2,
      "explanation": "Jupiter erscheint am Himmel hauptsächlich braun-weiß gestreift."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der Ringplanet'?",
      "options": [
        "Jupiter",
        "Saturn",
        "Merkur",
        "Neptun"
      ],
      "correct": 1,
      "explanation": "Saturn gilt als der Ringplanet. Besonderheit: Er besitzt das spektakulärste Ringsystem aus Eis und Brocken."
    },
    {
      "question": "Wie lange braucht der Planet Saturn ungefähr für eine Runde um die Sonne?",
      "options": [
        "10 Tage",
        "24 Stunden",
        "29 Erdjahren",
        "500 Jahre"
      ],
      "correct": 2,
      "explanation": "Die Umlaufzeit von Saturn beträgt 29 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Saturn, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Neongrün",
        "Pechschwarz",
        "gelblich mit bunten Ringen",
        "Kupfer-Lila"
      ],
      "correct": 2,
      "explanation": "Saturn erscheint am Himmel hauptsächlich gelblich mit bunten Ringen."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der eiskalte Kipp-Planet'?",
      "options": [
        "Uranus",
        "Saturn",
        "Neptun",
        "Merkur"
      ],
      "correct": 0,
      "explanation": "Uranus gilt als der eiskalte Kipp-Planet. Besonderheit: Er rollt sozusagen seitlich auf seiner Umlaufbahn um die Sonne."
    },
    {
      "question": "Wie lange braucht der Planet Uranus ungefähr für eine Runde um die Sonne?",
      "options": [
        "500 Jahre",
        "24 Stunden",
        "84 Erdjahren",
        "10 Tage"
      ],
      "correct": 2,
      "explanation": "Die Umlaufzeit von Uranus beträgt 84 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Uranus, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "hellblau",
        "Kupfer-Lila",
        "Pechschwarz",
        "Neongrün"
      ],
      "correct": 0,
      "explanation": "Uranus erscheint am Himmel hauptsächlich hellblau."
    },
    {
      "question": "Welcher Planet im Sonnensystem ist bekannt als 'der windigste Planet'?",
      "options": [
        "Merkur",
        "Neptun",
        "Saturn",
        "Mars"
      ],
      "correct": 1,
      "explanation": "Neptun gilt als der windigste Planet. Besonderheit: Er hat die stärksten Winde im Sonnensystem mit über 2000 km/h."
    },
    {
      "question": "Wie lange braucht der Planet Neptun ungefähr für eine Runde um die Sonne?",
      "options": [
        "10 Tage",
        "500 Jahre",
        "165 Erdjahren",
        "24 Stunden"
      ],
      "correct": 2,
      "explanation": "Die Umlaufzeit von Neptun beträgt 165 Erdjahren."
    },
    {
      "question": "Welche Farbe hat der Planet Neptun, wenn man ihn durch ein Weltraumteleskop betrachtet?",
      "options": [
        "Neongrün",
        "tiefblau",
        "Kupfer-Lila",
        "Pechschwarz"
      ],
      "correct": 1,
      "explanation": "Neptun erscheint am Himmel hauptsächlich tiefblau."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'der Erdmond'?",
      "options": [
        "Uranus",
        "Erde",
        "Sonne",
        "Merkur"
      ],
      "correct": 1,
      "explanation": "der Erdmond umkreist den Himmelskörper Erde. Fakt: Er ist der einzige fremde Himmelskörper, den Menschen je betreten haben."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Io'?",
      "options": [
        "Uranus",
        "Sonne",
        "Merkur",
        "Jupiter"
      ],
      "correct": 3,
      "explanation": "Io umkreist den Himmelskörper Jupiter. Fakt: Er ist ein Mond voller aktiver Vulkane, die Lava ins All spucken."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Europa'?",
      "options": [
        "Merkur",
        "Uranus",
        "Sonne",
        "Jupiter"
      ],
      "correct": 3,
      "explanation": "Europa umkreist den Himmelskörper Jupiter. Fakt: Er ist besitzt einen riesigen Ozean aus flüssigem Wasser unter einer dicken Eisschicht."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Ganymed'?",
      "options": [
        "Sonne",
        "Merkur",
        "Uranus",
        "Jupiter"
      ],
      "correct": 3,
      "explanation": "Ganymed umkreist den Himmelskörper Jupiter. Fakt: Er ist der größte Mond in unserem gesamten Sonnensystem."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Titan'?",
      "options": [
        "Uranus",
        "Sonne",
        "Saturn",
        "Merkur"
      ],
      "correct": 2,
      "explanation": "Titan umkreist den Himmelskörper Saturn. Fakt: Er ist hat eine dicke Atmosphäre und Seen aus flüssigem Methan."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Enceladus'?",
      "options": [
        "Uranus",
        "Sonne",
        "Merkur",
        "Saturn"
      ],
      "correct": 3,
      "explanation": "Enceladus umkreist den Himmelskörper Saturn. Fakt: Er ist spuckt riesige Geysire aus Eiswasser direkt ins Weltall."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Phobos'?",
      "options": [
        "Sonne",
        "Uranus",
        "Merkur",
        "Mars"
      ],
      "correct": 3,
      "explanation": "Phobos umkreist den Himmelskörper Mars. Fakt: Er ist einer der zwei kartoffelförmigen Monde des Roten Planeten."
    },
    {
      "question": "Zu welchem Himmelskörper gehört der bekannte Mond 'Pluto'?",
      "options": [
        "Merkur",
        "Sonne",
        "Zwergplanet",
        "Uranus"
      ],
      "correct": 2,
      "explanation": "Pluto umkreist den Himmelskörper Zwergplanet. Fakt: Er ist war früher der 9. Planet, gilt seit 2006 aber als Zwergplanet."
    },
    {
      "question": "[SCHWER-WISSEN #38] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #39] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #40] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #41] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Ein neuer Planet"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #42] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Ereignishorizont",
        "Todeszone",
        "Schattenrand"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #43] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #44] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #45] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #46] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #47] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #48] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein neuer Planet"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #49] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #50] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #51] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Gravitation"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #52] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #53] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #54] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #55] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #56] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #57] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #58] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Die Gravitation"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #59] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #60] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #61] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #62] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #63] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Todeszone",
        "Schwerkraftlinie",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #64] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #65] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #66] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #67] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #68] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #69] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #70] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #71] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #72] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Die Gravitation"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #73] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #74] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #75] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #76] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Ein neuer Planet"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #77] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Ereignishorizont",
        "Todeszone",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #78] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #79] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Der Erdmond"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #80] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #81] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #82] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #83] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #84] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Schattenrand"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #85] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #86] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Der Erdmond"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #87] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #88] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #89] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #90] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #91] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie",
        "Todeszone"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #92] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #93] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Die Gravitation"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #94] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #95] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #96] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #97] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Eine riesige Glühbirne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #98] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Todeszone",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #99] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #100] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Der Erdmond"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #101] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #102] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #103] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #104] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #105] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #106] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #107] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Die Gravitation"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #108] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #109] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #110] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #111] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #112] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #113] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #114] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Der Erdmond"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #115] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #116] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #117] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #118] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #119] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schattenrand",
        "Schwerkraftlinie",
        "Todeszone"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #120] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #121] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Die Ozon-Wolke"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #122] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #123] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #124] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #125] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #126] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Todeszone",
        "Schattenrand",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #127] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #128] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Der Erdmond",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #129] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #130] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein kaputter Satellit"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #131] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #132] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #133] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schwerkraftlinie",
        "Ereignishorizont",
        "Schattenrand"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #134] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #135] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Gravitation",
        "Der Erdmond",
        "Die Ozon-Wolke"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #136] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #137] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #138] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz"
      ],
      "correct": 1,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #139] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #140] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schwerkraftlinie",
        "Schattenrand",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #141] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #142] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Die Gravitation",
        "Der Erdmond"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #143] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #144] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #145] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #146] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #147] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Schwerkraftlinie",
        "Todeszone",
        "Ereignishorizont"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #148] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil es dort zu viel Wasser gibt"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #149] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Gravitation",
        "Die Ozon-Wolke"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #150] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen",
        "Weil es keine Luft gibt"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #151] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #152] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus brennendem Holz",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #153] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #154] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone",
        "Schattenrand"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #155] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #156] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Der Erdmond",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Die Gravitation"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #157] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #158] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #159] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #160] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #161] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Todeszone",
        "Schattenrand",
        "Ereignishorizont",
        "Schwerkraftlinie"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #162] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #163] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Das Magnetfeld der Erde",
        "Der Erdmond",
        "Die Ozon-Wolke"
      ],
      "correct": 1,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #164] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil sie Helium trinken"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #165] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #166] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus flüssigem Eisen",
        "Aus brennendem Holz",
        "Aus Wolken und Nebel",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)"
      ],
      "correct": 3,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #167] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Ein neuer Planet"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #168] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Todeszone",
        "Ereignishorizont",
        "Schattenrand"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #169] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #170] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Der Erdmond"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #171] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #172] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein kaputter Satellit"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #173] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Wolken und Nebel",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus brennendem Holz"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #174] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein neuer Planet",
        "Nichts, dort ist es leer",
        "Eine riesige Glühbirne",
        "Ein riesiges Supermassives Schwarzes Loch"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #175] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Ereignishorizont",
        "Schwerkraftlinie",
        "Todeszone"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #176] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #177] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Gravitation",
        "Die Ozon-Wolke",
        "Das Magnetfeld der Erde",
        "Der Erdmond"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #178] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil es keine Luft gibt",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #179] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #180] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus brennendem Holz",
        "Aus flüssigem Eisen",
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel"
      ],
      "correct": 2,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #181] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer",
        "Ein neuer Planet",
        "Eine riesige Glühbirne"
      ],
      "correct": 0,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #182] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Ereignishorizont",
        "Todeszone",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #183] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil die Luft zu kalt ist",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #184] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Die Gravitation",
        "Das Magnetfeld der Erde"
      ],
      "correct": 3,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #185] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil es keine Luft gibt",
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 2,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #186] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein Stück der Sonne"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #187] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz",
        "Aus flüssigem Eisen"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #188] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Eine riesige Glühbirne",
        "Ein neuer Planet",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Nichts, dort ist es leer"
      ],
      "correct": 2,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #189] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schattenrand",
        "Ereignishorizont",
        "Todeszone",
        "Schwerkraftlinie"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #190] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil der Mond keine Luft (Atmosphäre) hat",
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #191] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Das Magnetfeld der Erde",
        "Die Gravitation"
      ],
      "correct": 2,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #192] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen",
        "Weil sie Helium trinken"
      ],
      "correct": 0,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #193] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein Stück der Sonne",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein kaputter Satellit"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #194] Aus was besteht ein Komet hauptsächlich?",
      "options": [
        "Aus Eis, Staub und Gestein (schmutziger Schneeball)",
        "Aus flüssigem Eisen",
        "Aus Wolken und Nebel",
        "Aus brennendem Holz"
      ],
      "correct": 0,
      "explanation": "Erklärung: Aus Eis, Staub und Gestein (schmutziger Schneeball). Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #195] Was befindet sich im Zentrum unserer Milchstraße?",
      "options": [
        "Nichts, dort ist es leer",
        "Ein riesiges Supermassives Schwarzes Loch",
        "Eine riesige Glühbirne",
        "Ein neuer Planet"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ein riesiges Supermassives Schwarzes Loch. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #196] Wie nennt man die Grenze, ab der die Anziehungskraft eines Schwarzen Loches alles verschlingt?",
      "options": [
        "Schwerkraftlinie",
        "Ereignishorizont",
        "Schattenrand",
        "Todeszone"
      ],
      "correct": 1,
      "explanation": "Erklärung: Ereignishorizont. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #197] Warum können wir auf dem Mond nicht ohne Raumanzug atmen?",
      "options": [
        "Weil die Luft zu kalt ist",
        "Weil es dort zu viel Wasser gibt",
        "Weil der Wind zu stark bläst",
        "Weil der Mond keine Luft (Atmosphäre) hat"
      ],
      "correct": 3,
      "explanation": "Erklärung: Weil der Mond keine Luft (Atmosphäre) hat. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #198] Welche Schutzkurve schützt die Erde vor gefährlicher Strahlung aus dem All?",
      "options": [
        "Das Magnetfeld der Erde",
        "Die Ozon-Wolke",
        "Der Erdmond",
        "Die Gravitation"
      ],
      "correct": 0,
      "explanation": "Erklärung: Das Magnetfeld der Erde. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #199] Warum schweben Astronauten in der Raumstation ISS?",
      "options": [
        "Weil sie Helium trinken",
        "Weil dort Schwerelosigkeit herrscht",
        "Weil es keine Luft gibt",
        "Weil Ventilatoren sie hochblasen"
      ],
      "correct": 1,
      "explanation": "Erklärung: Weil dort Schwerelosigkeit herrscht. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    },
    {
      "question": "[SCHWER-WISSEN #200] Was ist eine Sternschnuppe in Wirklichkeit?",
      "options": [
        "Ein kaputter Satellit",
        "Ein Stück der Sonne",
        "Ein echter Stern, der vom Himmel fällt",
        "Ein winziger verglühender Weltraum-Gesteinsbrocken"
      ],
      "correct": 3,
      "explanation": "Erklärung: Ein winziger verglühender Weltraum-Gesteinsbrocken. Das ist ein wichtiges Grundgesetz der Weltraumforschung!"
    }
  ]
};
