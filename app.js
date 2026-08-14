document.addEventListener("DOMContentLoaded", () => {
  // Game State
  let playerCount = 1;
  let difficulty = "leicht";
  let questions = [];
  let currentQuestionIndex = 0;
  let currentPlayerIndex = 0;
  let scores = [0, 0, 0, 0];
  const TOTAL_QUESTIONS = 20;

  // DOM Elements
  const setupScreen = document.getElementById("setup-screen");
  const gameScreen = document.getElementById("game-screen");
  const resultScreen = document.getElementById("result-screen");

  const playerBtns = document.querySelectorAll("#player-count-btns .btn");
  const diffBtns = document.querySelectorAll("#difficulty-btns .btn");
  const startBtn = document.getElementById("start-btn");

  const playerDisplay = document.getElementById("current-player-display");
  const progressDisplay = document.getElementById("current-q-num");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");

  const explanationBox = document.getElementById("explanation-box");
  const resultStatus = document.getElementById("result-status");
  const explanationText = document.getElementById("explanation-text");
  const nextBtn = document.getElementById("next-btn");
  const scoreboard = document.getElementById("scoreboard");
  const restartBtn = document.getElementById("restart-btn");

  // Selection Listeners
  playerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      playerBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      playerCount = parseInt(e.target.dataset.value);
    });
  });

  diffBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      diffBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      difficulty = e.target.dataset.value;
    });
  });

  startBtn.addEventListener("click", startGame);
  nextBtn.addEventListener("click", nextQuestion);
  restartBtn.addEventListener("click", () => location.reload());

  function startGame() {
    // Reset States
    scores = Array(playerCount).fill(0);
    currentQuestionIndex = 0;
    currentPlayerIndex = 0;

    // Load & Shuffle Questions
    const pool = quizData[difficulty] || [];
    if (pool.length === 0) {
      alert("Keine Fragen für diese Kategorie gefunden!");
      return;
    }
    
    // Mische und wähle (bis zu) 20 Fragen aus
    questions = [...pool].sort(() => 0.5 - Math.random()).slice(0, TOTAL_QUESTIONS);

    setupScreen.classList.remove("active");
    gameScreen.classList.add("active");

    showQuestion();
  }

  function showQuestion() {
    explanationBox.classList.add("hidden");
    const q = questions[currentQuestionIndex];

    // UI Updates
    playerDisplay.textContent = playerCount > 1 ? `Spieler ${currentPlayerIndex + 1}` : "Spieler 1";
    progressDisplay.textContent = currentQuestionIndex + 1;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "answer-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => handleAnswer(idx));
      optionsContainer.appendChild(btn);
    });
  }

  function handleAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll(".answer-btn");

    // Deaktiviere alle Buttons
    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === q.correct) {
      buttons[selectedIndex].classList.add("correct");
      resultStatus.textContent = "Richtig! Tor erzielt! 🤾‍♂️";
      resultStatus.className = "result-status correct";
      scores[currentPlayerIndex]++;
    } else {
      buttons[selectedIndex].classList.add("wrong");
      buttons[q.correct].classList.add("correct");
      resultStatus.textContent = "Falsch! Verworfen! ❌";
      resultStatus.className = "result-status wrong";
    }

    // Erklärung anzeigen
    explanationText.textContent = q.explanation;
    explanationBox.classList.remove("hidden");
  }

  function nextQuestion() {
    currentQuestionIndex++;
    
    // Wechsel zum nächsten Spieler (Rotation)
    currentPlayerIndex = (currentPlayerIndex + 1) % playerCount;

    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    gameScreen.classList.remove("active");
    resultScreen.classList.add("active");

    scoreboard.innerHTML = "";
    scores.forEach((score, idx) => {
      const row = document.createElement("div");
      row.className = "score-row";
      row.innerHTML = `
        <span><strong>Spieler ${idx + 1}</strong></span>
        <span>${score} von ${questions.length} Toren (Punkten)</span>
      `;
      scoreboard.appendChild(row);
    });
  }
});