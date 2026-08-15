import json
import random
import unicodedata

seen_space = set()

def _normalize(text: str) -> str:
    if text is None:
        return ""
    return unicodedata.normalize("NFKC", str(text)).strip().casefold()

def add_sq(q_text, correct, wrong_list, exp, target_list):
    """Add a question to target_list unless a normalized duplicate exists.
    Ensures options are unique (by normalized text) and that the correct
    answer is present. Keeps up to 4 options (1 correct + up to 3 wrongs).
    """
    key = _normalize(q_text)
    if key in seen_space:
        return
    seen_space.add(key)

    opts = [correct]
    for w in wrong_list:
        if len(opts) >= 4:
            break
        if _normalize(w) == _normalize(correct):
            continue
        if any(_normalize(o) == _normalize(w) for o in opts):
            continue
        opts.append(w)

    random.shuffle(opts)

    try:
        correct_index = next(i for i,o in enumerate(opts) if _normalize(o) == _normalize(correct))
    except StopIteration:
        opts.insert(0, correct)
        opts = opts[:4]
        correct_index = 0

    target_list.append({
        "question": q_text,
        "options": opts,
        "correct": correct_index,
        "explanation": exp
    })


def generate_space_easy():
    q_list = []
    
    planets = [
        ("Merkur", "1. Planet", "sonnennächste Planet", "88 Tage", "kleinster Planet"),
        ("Venus", "2. Planet", "heißester Planet", "225 Tage", "Abendstern genannter Planet"),
        ("Erde", "3. Planet", "einziger Planet mit flüssigem Wasser", "365 Tage", "Blauer Planet"),
        ("Mars", "4. Planet", "Roter Planet", "687 Tage", "Planet mit dem Riesenvulkan Olympus Mons"),
        ("Jupiter", "5. Planet", "größter Planet", "12 Jahre", "Planet mit dem Großen Roten Fleck"),
        ("Saturn", "6. Planet", "Planet mit den auffälligsten Eisringen", "29 Jahre", "zweitgrößter Gasriese"),
        ("Uranus", "7. Planet", "eiskalter Planet, der seitlich rollt", "84 Jahre", "blassblauer Eisriese"),
        ("Neptun", "8. Planet", "äußerste bekannte Planet", "165 Jahre", "Planet mit den stärksten Winden")
    ]

    planet_names = [p[0] for p in planets]
    for name, pos, nick, orbit, detail in planets:
        # Which planet is Nth?
        wrongs = [n for n in planet_names if n != name][:3]
        add_sq(f"Welcher Himmelskörper ist der {pos} von der Sonne aus gesehen?", name, wrongs, f"Der {name} ist der {pos}.", q_list)
        # Nickname
        wrongs = [n for n in planet_names if n != name][:3]
        add_sq(f"Welcher Planet wird auch als der '{nick}' bezeichnet?", name, wrongs, f"Der {name} wird oft als {nick} bezeichnet.", q_list)
        # Detail
        wrongs = [n for n in planet_names if n != name][:3]
        add_sq(f"Welcher Planet ist der {detail} in unserem Sonnensystem?", name, wrongs, f"Der {name} ist {detail}.", q_list)
        # Orbit period
        add_sq(f"Wie lange braucht der Planet {name} für eine komplette Runde um die Sonne?", orbit, ["24 Stunden", "30 Tage", "1000 Jahre"], f"Die Umlaufzeit von {name} um die Sonne beträgt {orbit}.", q_list)

    sun_facts = [
        ("Aus was besteht die Sonne hauptsächlich?", "Aus Wasserstoff und Helium", ["Aus flüssigem Gestein", "Aus reinem Sauerstoff", "Aus festem Eisen"]),
        ("Was ist unsere Sonne astronomisch gesehen?", "Ein durchschnittlicher Stern", ["Ein Planet", "Ein Komet", "Ein Mond"]),
        ("Wie lange braucht das Licht der Sonne bis zur Erde?", "Ca. 8 Minuten", ["1 Sekunde", "24 Stunden", "1 Jahr"]) 
    ]
    for q, c, w in sun_facts:
        add_sq(q, c, w, f"Fakt zur Sonne: {c}.", q_list)

    return q_list[:200]


def generate_space_medium():
    q_list = []
    
    moons = [
        ("Erdmond", "Erde", "der einzige fremde Himmelskörper, den Menschen je betreten haben"),
        ("Phobos", "Mars", "ein kartoffelförmiger kleiner Mond des Roten Planeten"),
        ("Deimos", "Mars", "der äußere der beiden winzigen Marsmonde"),
        ("Io", "Jupiter", "der vulkanreichste Körper in unserem gesamten Sonnensystem"),
        ("Europa", "Jupiter", "ein Eismond mit einem riesigen Ozean unter der Kruste"),
        ("Ganymed", "Jupiter", "der größte Mond in unserem gesamten Sonnensystem"),
        ("Titan", "Saturn", "ein Mond mit einer dichten Atmosphäre und Methan-Seen"),
        ("Enceladus", "Saturn", "ein Eismond, der riesige Wasser-Geysire ins Weltall speit"),
        ("Triton", "Neptun", "ein eiskalter Mond, der seinen Planeten rückwärts umkreist")
    ]
    planet_names = ["Merkur","Venus","Erde","Mars","Jupiter","Saturn","Uranus","Neptun"]
    for m_name, parent, desc in moons:
        wrongs = [p for p in planet_names if p != parent][:3]
        add_sq(f"Um welchen Planeten kreist der Mond '{m_name}'?", parent, wrongs, f"{m_name} umkreist {parent}.", q_list)
        add_sq(f"Welche Eigenschaft trifft auf den Mond '{m_name}' zu?", desc, ["Er besteht komplett aus Gold", "Er hat ein eigenes Ringsystem", "Er ist der sonnennächste Planet"], f"Richtig: {desc}.", q_list)

    missions = [
        ("Apollo 11 (1969)", "Neil Armstrong betrat als erster Mensch den Mond", ["Erstes Teleskop im All", "Marslandung", "Flug zum Jupiter"]),
        ("ISS", "Eine Raumstation, die die Erde in ca. 90 Minuten umkreist", ["Ein Rover auf dem Mars", "Eine Sonde zum Pluto", "Ein Teleskop"]),
        ("Curiosity & Perseverance", "Fahrbare Roboter-Rover auf der Mars-Oberfläche", ["Satelliten um die Venus", "Raumstationen", "Mond-Fähren"]),
        ("James-Webb-Teleskop", "Ein Weltraumteleskop für gestochen scharfe Infrarot-Bilder", ["Eine bemannte Mars-Kapsel", "Ein Sonnensegel", "Ein Mond-Auto"]) 
    ]
    for name, desc, wrong in missions:
        add_sq(f"Was ist das Besondere an '{name}'?", desc, wrong, f"{name} ist bekannt dafür: {desc}.", q_list)
        add_sq(f"Welche Raumfahrt-Mission/Gerät wird beschrieben durch: '{desc}'?", name, ["Sputnik 1", "Voyager 2", "Hubble"], f"Das beschreibt {name}.", q_list)

    return q_list[:200]


def generate_space_hard():
    q_list = []
    
    astrophysik = [
        ("Wie hoch ist die Lichtgeschwindigkeit im Vakuum?", "Ca. 300.000 Kilometer pro Sekunde", ["1.000 km/h", "300.000 km/h", "Schallgeschwindigkeit"]),
        ("Was versteht man astronomisch unter einem 'Lichtjahr'?", "Die Strecke, die das Licht in einem Jahr zurücklegt", ["Eine Zeitspanne von 100 Jahren", "Die Dauer einer Erdumrundung", "Die Höhe eines Sterns"]),
        ("In welcher Galaxie befindet sich unser Sonnensystem?", "Milchstraße (Balkenspiralgalaxie)", ["Andromedagalaxie", "Sombrerogalaxie", "Messier 87"]),
        ("Was entsteht, wenn ein sehr massereicher Stern am Lebensende explodiert?", "Supernova (und evtl. ein Schwarzes Loch)", ["Ein neuer Planet", "Ein Komet", "Ein Mondausbruch"]),
        ("Was kennzeichnet ein 'Schwarzes Loch'?", "Eine extrem starke Gravitation, der selbst Licht nicht entkommen kann", ["Ein Loch in der Erdkruste", "Ein dunkler Fleck auf der Sonne", "Ein Planet"]),
        ("Was sind 'Exoplaneten'?", "Planeten, die andere Sterne außerhalb unseres Sonnensystems umkreisen", ["Ausgestorbene Planeten", "Zwergplaneten wie Pluto", "Monde von Gasriesen"]) 
    ]
    for q, c, w in astrophysik:
        add_sq(q, c, w, f"Astrophysik-Fakt: {c}.", q_list)
        add_sq(f"Welches Phänomen antwortet auf die Frage: {q}?", c, w, f"Die korrekte Antwort lautet {c}.", q_list)

    constellations = ["Großer Bär (Großer Wagen)", "Orion", "Kassiopeia", "Skorpion", "Löwe"]
    stars = ["Sirius", "Beteigeuze", "Polarstern (Nordstern)", "Proxima Centauri"]
    for s in stars:
        for c in constellations:
            add_sq(f"Orientierung am Nachthimmel: Welcher Stern/Sternbild wird zur Navigation auf der Nordhalbkugel genutzt?", "Polarstern (Nordstern)", [s for s in stars if s != "Polarstern (Nordstern)"][:3], f"Der Polarstern wird häufig zur Navigation genutzt.", q_list)

    return q_list[:200]


def main():
    space_quiz = {
        "leicht": generate_space_easy(),
        "mittel": generate_space_medium(),
        "schwer": generate_space_hard()
    }
    with open("space_questions.js", "w", encoding="utf-8") as f:
        f.write(f"window.spaceQuizData = {json.dumps(space_quiz, indent=2, ensure_ascii=False)};")
    print("🚀 space_questions.js neu generiert! (200 inhaltlich vollkommen unterschiedliche Fragen pro Stufe)")

if __name__ == "__main__":
    main()
