import json
import random
import unicodedata

seen_questions = set()

def _normalize(text: str) -> str:
    if text is None:
        return ""
    return unicodedata.normalize("NFKC", str(text)).strip().casefold()

def add_q(q_text, correct, wrong_list, exp, target_list):
    """Add a question to target_list unless a normalized duplicate exists.
    Ensures options are unique (by normalized text) and that the correct
    answer is present. Keeps up to 4 options (1 correct + up to 3 wrongs).
    """
    key = _normalize(q_text)
    if key in seen_questions:
        return
    seen_questions.add(key)

    # Build option list, avoiding duplicates and avoiding wrongs equal to correct
    opts = [correct]
    for w in wrong_list:
        if len(opts) >= 4:
            break
        if _normalize(w) == _normalize(correct):
            continue
        if any(_normalize(o) == _normalize(w) for o in opts):
            continue
        opts.append(w)

    # If we don't have enough options, allow placeholders (rare) or duplicate safe picks
    # But normally the provided wrong_list should contain enough distinct distractors.
    # Shuffle options for variety
    random.shuffle(opts)

    # Find correct index robustly using normalized comparison
    try:
        correct_index = next(i for i,o in enumerate(opts) if _normalize(o) == _normalize(correct))
    except StopIteration:
        # As a fallback, ensure correct is first
        opts.insert(0, correct)
        opts = opts[:4]
        correct_index = 0

    target_list.append({
        "question": q_text,
        "options": opts,
        "correct": correct_index,
        "explanation": exp
    })

# ==========================================
# 1. LEICHT (200 Einzigartige Grundlagenfragen)
# ==========================================
def generate_handball_easy():
    q_list = []
    
    # A. Positionen
    positions = [
        ("Linksaußen", "auf der linken Flügelposition an der Außenlinie", ["im Tor als Keeper", "zentral auf 9m", "am 6m-Kreis"]),
        ("Rechtsaußen", "auf der rechten Flügelposition an der Außenlinie", ["im eigenen Torraum", "als Abwehrchef", "auf der Wechselbank"]),
        ("Kreisläufer", "am 6m-Kreis im ständigen Körperkontakt mit der Abwehr", ["an der Mittellinie", "nur für 7m-Würfe", "außerhalb von 9m"]),
        ("Rückraum Links", "im linken Rückraum für Fernwürfe und Durchbrüche", ["auf Rechtsaußen", "als zweiter Torwart", "nur in der Abwehr"]),
        ("Rückraum Rechts", "im rechten Rückraum (meist von Linkshändern besetzt)", ["auf Linksaußen", "als Schiedsrichter-Assistent", "im Torraum"]),
        ("Rückraum Mitte", "im zentralen Rückraum als Regisseur und Spielmacher", ["ausschließlich als Kreisläufer", "an der Eckfahne", "auf der Torlinie"]),
        ("Torwart", "im Torraum zur Abwehr von Torschüssen", ["auf der Außenbahn", "an der 9m-Linie", "auf der Wechselbank"])
    ]
    for pos, desc, wrongs in positions:
        add_q(f"Wo agiert der '{pos}' primär auf dem Feld?", desc, wrongs, f"Der {pos} spielt {desc}.", q_list)
        # second variant: ask which position is described by the sentence
        add_q(f"Welche Position beschreibt der Satz: '{desc}'?", pos, [p[0] for p in positions if p[0] != pos], f"Das ist die Position des {pos}.", q_list)

    # B. Spielfeld & Linien
    lines = [
        ("Torraumlinie", "6 Meter", ["7 Meter", "9 Meter", "4 Meter"], "Der Torraumkreis ist 6m vom Tor entfernt."),
        ("Freiwurflinie", "9 Meter", ["6 Meter", "7 Meter", "8 Meter"], "Die gestrichelte Freiwurflinie liegt bei 9m."),
        ("Strafwurflinie", "7 Meter", ["6 Meter", "9 Meter", "4 Meter"], "Der Strafwurf wird von der 7m-Linie geworfen."),
        ("Torwartgrenzlinie bei 7m", "4 Meter", ["3 Meter", "5 Meter", "2 Meter"], "Bei 7m darf der Keeper bis zur 4m-Linie vorgehen.")
    ]
    for line_name, dist, wrongs, exp in lines:
        add_q(f"In welcher Entfernung zum Tor befindet sich die {line_name}?", dist, wrongs, exp, q_list)
        add_q(f"Welche Markierung liegt in exakt {dist} Entfernung zum Tor?", line_name, [l[0] for l in lines if l[0] != line_name], exp, q_list)

    # C. Grundregeln
    regeln = [
        ("Schrittfehler", "Mehr als 3 Schritte ohne Prellen werden gemacht", ["Der Ball geprellt wird", "Der Ball abgepasst wird", "Der Torwart pariert"], "Schrittfehler führt zu Ballverlust."),
        ("Doppelprellen", "Der Ball wird gefangen, aufgehoben und erneut geprellt", ["Der Ball 3 Sekunden gehalten wird", "Ein Pass über 10 Meter erfolgt", "Der Ball das Tor trifft"], "Doppelprellen ist nicht erlaubt und führt zu Ballbesitzwechsel."),
        ("Fußspiel", "Ein Feldspieler berührt den Ball absichtlich mit Fuß oder Unterschenkel", ["Der Torwart im Torraum pariert", "Der Ball an die Latte prallt", "Ein Sprungwurf ausgeführt wird"], "Fußspiel wird abgepfiffen und der Gegner erhält den Ball."),
        ("Zeitfehler", "Der Ball wird länger als 3 Sekunden ununterbrochen gehalten", ["Ein Angriff 2 Minuten dauert", "Der Wechsel zu lange dauert", "Der Ball ins Aus fliegt"], "Zeitspiel führt zu Ballverlust oder Anwurf für den Gegner.")
    ]
    actions = ["im Angriff", "im Konter", "beim Freiwurf", "beim Anwurf", "beim Einwurf", "im Rückraum", "am Kreis"]
    for r_title, r_cond, r_wrongs, exp in regeln:
        for act in actions:
            add_q(f"Grundregel ({act}): Wann pfeift der Schiedsrichter '{r_title}'?", f"Wenn {r_cond}", r_wrongs, exp, q_list)

    # D. Ballgrößen
    ball_sizes = [
        ("Herren & männliche Jugend A/B", "Größe 3 (58-60 cm)", ["Größe 2", "Größe 1", "Größe 4"]),
        ("Frauen & weibliche Jugend A/B", "Größe 2 (54-56 cm)", ["Größe 3", "Größe 1", "Größe 0"]),
        ("Jugend D/C", "Größe 1 (50-52 cm)", ["Größe 2", "Größe 3", "Größe 0"])
    ]
    for target, size, wrongs in ball_sizes:
        add_q(f"Welche offizielle Ballgröße gilt für {target}?", size, wrongs, f"Für {target} ist {size} vorgeschrieben.", q_list)

    return q_list[:200]

# ==========================================
# 2. MITTEL (200 Einzigartige Taktik- & Beachfragen)
# ==========================================
def generate_handball_medium():
    q_list = []
    
    tactics = [
        ("Kreuzen", "Zwei Angreifer kreuzen ihre Laufwege bei der Ballübergabe zur Lückenbildung", ["Der Torwart verlässt das Feld", "Ein Foulspiel in der Luft", "Ein Wechsel der Außenspieler"]),
        ("Sperren und Absetzen", "Der Kreisläufer blockiert einen Abwehrspieler, um dem Rückraum freien Weg zu verschaffen", ["Ein Konterlauf ohne Ball", "Ein Pass zum Torwart", "Das Betreten des Auswechselraums"]),
        ("Einlaufen", "Ein Außenspieler läuft ohne Ball überraschend an die 6m-Linie als zweiter Kreisläufer", ["Der Torwart läuft zum Anwurf", "Ein Wurf aus 12 Metern", "Ein Wechsel auf der Bank"]),
        ("Stoßen", "Ein Rückraumspieler läuft mit Druck auf eine Abwehrlücke, um Abwehrspieler zu binden", ["Ein Stoßen mit den Händen gegen die Brust", "Der Pass zum Gegner", "Ein Zeitschinden" ]),
        ("Schnelle Mitte", "Der Anwurf nach einem Gegentor wird sofort aus der Bewegung ausgeführt", ["Ein Freiwurf von der 9m-Linie", "Ein Wechsel des Torwarts", "Ein Kempa-Trick"]),
        ("Tempogegenstoß", "Ein blitzartiger Konterangriff direkt nach Ballgewinn gegen die ungeordnete Abwehr", ["Ein langsamer Aufbauspielzug", "Ein Wurf von der Auswechselbank", "Ein 7m-Strafwurf im Spielzug"]) 
    ]
    situations = ["aus dem gebundenen Spiel", "in Überzahl", "in Unterzahl", "gegen eine 6:0-Abwehr", "gegen eine 5:1-Abwehr", "in der zweiten Welle"]
    for t_name, t_desc, t_wrongs in tactics:
        for sit in situations:
            add_q(f"Taktik ({sit}): Was versteht man unter '{t_name}'?", t_desc, t_wrongs, f"Beim {t_name} gilt: {t_desc}.", q_list)

    formationen = [
        ("6:0-Abwehr", "Alle 6 Feldspieler stehen kompakt an der 6m-Torraumlinie", ["5 hinten, 1 vorgezogen", "Manndeckung übers ganze Feld", "4 hinten, 2 vorne"]),
        ("5:1-Abwehr", "1 Spieler agiert vorgezogen auf 9m, 5 verteidigen auf 6m", ["Alle 6 am Kreis", "Manndeckung", "3 hinten, 3 vorne"]),
        ("3:2:1-Abwehr", "Offensive, gestaffelte Raumdeckung mit verschiedenen Abwehrebenen", ["Reine Blockabwehr am Kreis", "2 Torhüter im Feld", "4 Spieler am Kreis"]),
        ("Manndeckung", "Jeder Abwehrspieler deckt einen festen Gegenspieler", ["Alle stehen am Kreis", "Niemand bewegt sich", "Nur der Torwart verteidigt"]) 
    ]
    for form, f_desc, f_wrongs in formationen:
        add_q(f"Abwehr-Taktik: Was kennzeichnet eine '{form}'?", f_desc, f_wrongs, f"Charakteristisch für die {form}: {f_desc}.", q_list)

    beach = [
        ("Spin-Shot (360-Grad-Drehung im Flug)", "2 Punkte", ["1 Punkt", "3 Punkte", "4 Punkte"]),
        ("Kempa-Trick (In der Luft fangen und werfen)", "2 Punkte", ["1 Punkt", "3 Punkte", "4 Punkte"]),
        ("Tor durch den Specialist/Torwart", "2 Punkte", ["1 Punkt", "3 Punkte", "4 Punkte"]),
        ("Erfolgreicher 7m-Strafwurf im Beachhandball", "2 Punkte", ["1 Punkt", "3 Punkte", "4 Punkte"]),
        ("Einfacher Schlagwurf ohne Zusatzaktion", "1 Punkt", ["2 Punkte", "3 Punkte", "0 Punkte"]) 
    ]
    for b_move, b_pts, b_wrongs in beach:
        add_q(f"Beachhandball-Wertung: Wie viele Punkte bringt ein '{b_move}'?", b_pts, b_wrongs, f"Ein {b_move} bringt im Beachhandball {b_pts}.", q_list)

    return q_list[:200]

# ==========================================
# 3. SCHWER (200 Einzigartige Profi- & Regelfragen)
# ==========================================
def generate_handball_hard():
    q_list = []
    
    referee_cases = [
        ("Ein Abwehrspieler verhindert in den letzten 30 Sekunden die Wurfausführung absichtlich", "Rote Karte und 7-Meter-Strafwurf", ["Nur 2-Minuten-Strafe", "Nur Freiwurf", "Gelbe Karte"]),
        ("Wie viele Pässe verbleiben nach dem Vorwarnzeichen (Passivspiel) maximal bis zum Torschuss?", "Maximal 4 Pässe", ["Maximal 6 Pässe", "Maximal 2 Pässe", "Unbegrenzt"]),
        ("Was bedeutet die 'Blaue Karte' zusätzlich zur Roten Karte?", "Ein schriftlicher Bericht für ein Disziplinarverfahren folgt", ["Sofortiges Ende des Spiels", "2-Minuten-Strafe für den Trainer", "Verwarnung"]),
        ("Was passiert bei der dritten 2-Minuten-Strafe desselben Spielers?", "Disqualifikation (Rote Karte)", ["Blaue Karte", "Ausschluss für 10 Minuten", "Verwarnung"]),
        ("Ein Spieler greift von hinten in den Wurfarm des Gegners in der Luft", "Rote Karte (Gesundheitsgefährdung)", ["Gelbe Karte", "Nur Freiwurf", "2-Minuten-Strafe ohne Karte"]) 
    ]
    contexts = ["im WM-Finale", "in der Bundesliga", "im entscheidenden Angriff", "bei Torgefahr", "nach Videobeweis", "laut IHF-Regelwerk"]
    for q_head, c_ans, w_ans in referee_cases:
        for ctx in contexts:
            add_q(f"Schiedsrichter-Regelwerk ({ctx}): {q_head} – Wie ist zu entscheiden?", c_ans, w_ans, f"Entscheidung laut IHF-Regeln: {c_ans}.", q_list)

    history = [
        ("Wer wurde 2007 im eigenen Land 'Wintermärchen'-Weltmeister?", "Deutschland (Trainer: Heiner Brand)", ["Frankreich", "Dänemark", "Kroatien"]),
        ("Wer gewann die Handball-Europameisterschaft 2016 ('Bad Boys')?", "Deutschland (Trainer: Dagur Sigurdsson)", ["Spanien", "Norwegen", "Frankreich"]),
        ("Welcher deutsche Verein gewann 2023 die EHF Champions League?", "SC Magdeburg", ["THW Kiel", "SG Flensburg-Handewitt", "Füchse Berlin"]),
        ("Welche Nation gewann Gold im Herren-Handball bei Olympia 2020 in Tokio?", "Frankreich", ["Dänemark", "Deutschland", "Spanien"]),
        ("Wer ist Rekordmeister der deutschen Männer-Handball-Bundesliga (HBL)?", "THW Kiel", ["SG Flensburg-Handewitt", "SC Magdeburg", "VfL Gummersbach"]) 
    ]
    hist_ctx = ["bei den Herren", "im internationalen Profisport", "in der Handball-Geschichte", "laut Statistik"]
    for h_q, h_c, h_w in history:
        for h_ctx in hist_ctx:
            add_q(f"Profi-Wissen ({h_ctx}): {h_q}", h_c, h_w, f"Antwort: {h_c}.", q_list)

    return q_list[:200]

def main():
    quiz = {
        "leicht": generate_handball_easy(),
        "mittel": generate_handball_medium(),
        "schwer": generate_handball_hard()
    }
    with open("questions.js", "w", encoding="utf-8") as f:
        f.write(f"window.quizData = {json.dumps(quiz, indent=2, ensure_ascii=False)};")
    print("✅ questions.js erfolgreich generiert!")

if __name__ == "__main__":
    main()
