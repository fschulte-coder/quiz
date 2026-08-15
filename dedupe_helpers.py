import unicodedata
import random
from typing import List, Any


def normalize(text: str) -> str:
    """Normalize text for stable, case-insensitive comparisons.

    - Unicode NFKC
    - strip whitespace
    - casefold for caseless comparison
    """
    if text is None:
        return ""
    return unicodedata.normalize("NFKC", str(text)).strip().casefold()


def build_options(correct: str, wrong_list: List[str], max_options: int = 4) -> List[str]:
    """Build a list of unique options that always contains the correct answer.

    Removes wrong answers that normalize to the same text as the correct answer
    and removes duplicate options (preserves first occurrences). Returns at most
    max_options items (1 correct + up to max_options-1 wrongs).
    """
    opts: List[str] = [correct]
    for w in wrong_list:
        if len(opts) >= max_options:
            break
        if normalize(w) == normalize(correct):
            continue
        if any(normalize(o) == normalize(w) for o in opts):
            continue
        opts.append(w)
    return opts[:max_options]


def add_question(q_text: str, correct: str, wrong_list: List[str], exp: str, target_list: List[Any], seen: set) -> None:
    """Add a question to target_list if its normalized text hasn't been seen.

    - Uses normalize() to deduplicate question text across a single run.
    - Uses build_options() to ensure option uniqueness and presence of the correct answer.
    - Shuffles options in place and calculates the correct index using normalization.
    """
    key = normalize(q_text)
    if key in seen:
        return
    seen.add(key)

    opts = build_options(correct, wrong_list, max_options=4)
    random.shuffle(opts)

    try:
        correct_index = next(i for i, o in enumerate(opts) if normalize(o) == normalize(correct))
    except StopIteration:
        # Fallback: make correct the first option
        opts.insert(0, correct)
        opts = opts[:4]
        correct_index = 0

    target_list.append({
        "question": q_text,
        "options": opts,
        "correct": correct_index,
        "explanation": exp,
    })
