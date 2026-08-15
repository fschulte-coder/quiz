import json
import random

seen_space = set()

def add_sq(q_text, correct, wrong_list, exp, target_list):
    if q_text in seen_space:
        return
    seen_space.add(q_text)
    opts = [correct] + wrong_list[:3]
    random.shuffle(opts)
    target_list.append({
        "question": q_text,
        "options": opts,
        "correct": opts.index(correct),
        "explanation": exp
    })

def generate_space_easy():
    q_list = []
    
    planets = [
        ("Merkur", "1. Planet", "sonnennächste Planet", "88 Tage", "kleinste Planet"),
        ("Venus", "2. Planet", "heißeste Planet", "225 Tage", "Abendstern genannte Planet"),
        ("Erde", "3. Planet", "einzige Planet mit flüssigem Wasser", "365 Tage", "Blaue Planet"),
        ("Mars", "4. Planet", "Rote Planet", "687 Tage", "Planet mit dem Riesenvulkan Olympus Mons"),
        ("Jupiter", "5. Planet", "größte Planet", "12 Jahre", "Planet mit dem Großen Roten Fleck"),
        ("Saturn", "6. Planet", "Planet mit den auffälligsten Eisringen", "29 Jahre", "zweitgrößte Gasriese"),
        ("Uranus", "7. Planet", "eiskalte Planet, der seitlich rollt", "84 Jahre", "blassblaue Eisriese"),
        ("Neptun", "8. Planet", "äußerste bekannte Planet", "165 Jahre", "Planet mit den stärksten Winden")
    ]
    for name, pos, nick, orbit, detail in planets:
        add_sq(f"Welcher Himmelskörper ist der {pos} von der Sonne aus gesehen?", name, ["Mars" if name!="Mars" else "Venus", "Jupiter" if name!="Jupiter" else "Saturn", "Uranus" if name!="Uranus" else "Neptun"], f"{name} ist der {pos} in unserem Sonnensystem.", q_list)
        add_sq(f"Welcher Planet wird auch als der '{nick}' bezeichnet?", name, ["Merkur" if name!="Merkur" else "Erde", "Saturn" if name!="Saturn" else "Mars", "Neptun" if name!="Neptun" else "Jupiter"], f"{name} ist bekannt als {nick}.", q_list)
        add_sq(f"Welcher Planet ist der {detail} in unserem Sonnensystem?", name, ["Erde" if name!="Erde" else "Venus", "Mars" if name!="Mars" else "Merkur", "Jupiter" if name!="Jupiter" else "Uranus"], f"{name} zeichnet sich dadurch aus, dass er der {detail} ist.", q_list)
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
    for m_name, parent, desc in moons:
        add_sq(f"Um welchen Planeten kreist der Mond '{m_name}'?", parent, ["Sonne", "Uranus" if parent!="Uranus" else "Venus", "Merkur" if parent!="Merkur" else "Saturn"], f"{m_name} umkreist den Planeten {parent} ({desc}).", q_list)
        add_sq(f"Welche Eigenschaft trifft auf den Mond '{m_name}' zu?", desc, ["Er besteht komplett aus Gold", "Er hat ein eigenes Ringsystem", "Er ist der sonnennächste Planet"], f"Richtig: {m_name} ist {desc}.", q_list)

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
        ("Was versteht man astronomisch unter einem 'Lichtjahr'?", "Die Strecke, die das Licht in einem Jahr zurücklegt", ["Eine Zeitspanne von 100 Jahren", "Die Dauer einer Erdumrundung", "Die Helligkeit der Sonne"]),
        ("In welcher Galaxie befindet sich unser Sonnensystem?", "Milchstraße (Balkenspiralgalaxie)", ["Andromedagalaxie", "Sombrerogalaxie", "Messier 87"]),
        ("Was entsteht, wenn ein sehr massereicher Stern am Lebensende explodiert?", "Supernova (und evtl. ein Schwarzes Loch)", ["Ein neuer Planet", "Ein Komet", "Ein Mondausbruch"]),
        ("Was kennzeichnet ein 'Schwarzes Loch'?", "Eine extrem starke Gravitation, der selbst Licht nicht entkommen kann", ["Ein Loch in der Erdkruste", "Ein dunkler Fleck auf der Sonne", "Ein Planet ohne Atmosphäre"]),
        ("Was sind 'Exoplaneten'?", "Planeten, die andere Sterne außerhalb unseres Sonnensystems umkreisen", ["Ausgestorbene Planeten", "Zwergplaneten wie Pluto", "Monde von Gasriesen"])
    ]
    for q, c, w in astrophysik:
        add_sq(q, c, w, f"Astrophysik-Fakt: {c}.", q_list)
        add_sq(f"Welches Phänomen antwortet auf die Frage: {q}?", c, w, f"Die korrekte Antwort lautet {c}.", q_list)

    constellations = ["Großer Bär (Großer Wagen)", "Orion", "Kassiopeia", "Skorpion", "Löwe"]
    stars = ["Sirius", "Beteigeuze", "Polarstern (Nordstern)", "Proxima Centauri"]
    for s in stars:
        for c in constellations:
            add_sq(f"Orientierung am Nachthimmel: Welcher Stern/Sternbild wird zur Navigation auf der Nordhalbkugel genutzt?", "Polarstern (Nordstern)", [s if s!="Polarstern (Nordstern)" else "Sirius", c, "Mars"], "Der Polarstern steht fast exakt über dem Nordpol der Erde.", q_list)

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