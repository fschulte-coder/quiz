document.addEventListener("DOMContentLoaded", () => {
  let playerCount = 1;
  let difficulty = "leicht";
  let questions = [];
  let currentQuestionIndex = 0;
  let currentPlayerIndex = 0;
  let scores = [0, 0, 0, 0];
  const TOTAL_QUESTIONS = 20;

  const setupScreen = document.getElementById("setup-screen");
  const gameScreen = document.getElementById("game-screen");
  const resultScreen = document.getElementById("result-screen");

  const playerBtns = document.querySelectorAll("#player-count-btns .btn");
  const diffBtns = document.querySelectorAll("#difficulty-btns .btn");
  const startBtn = document.getElementById("start-btn");

  const progressDots = document.getElementById("progress-dots");
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options-container");
  const playersContainer = document.getElementById("players-container");

  const explanationBox = document.getElementById("explanation-box");
  const resultStatus = document.getElementById("result-status");
  const explanationText = document.getElementById("explanation-text");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  playerBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      playerBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      playerCount = parseInt(e.target.dataset.value);
      updateSidebar();
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

  function updateSidebar() {
    playersContainer.innerHTML = "";
    for (let i = 0; i < playerCount; i++) {
      const card = document.createElement("div");
      const isActive = i === currentPlayerIndex && gameScreen.classList.contains("active");
      card.className = `player-card ${isActive ? "active" : ""}`;
      card.innerHTML = `
        <div class="player-info">
          <div class="player-avatar">S${i + 1}</div>
          <div><strong>Spieler ${i + 1}</strong></div>
        </div>
        <div class="player-score">${scores[i]}</div>
      `;
      playersContainer.appendChild(card);
    }
  }

  function initDots() {
    progressDots.className = "hexagon-tracker";
    progressDots.innerHTML = "";
    for (let i = 0; i < TOTAL_QUESTIONS; i++) {
      const hex = document.createElement("div");
      hex.className = "hex";
      if (i === 0) hex.classList.add("active");
      progressDots.appendChild(hex);
    }
  }

  function updateDots() {
    const hexes = progressDots.querySelectorAll(".hex");
    hexes.forEach((hex, idx) => {
      hex.className = "hex";
      if (idx < currentQuestionIndex) hex.classList.add("done");
      if (idx === currentQuestionIndex) hex.classList.add("active");
    });
  }

  function startGame() {
    scores = Array(playerCount).fill(0);
    currentQuestionIndex = 0;
    currentPlayerIndex = 0;

    const pool = quizData[difficulty] || [];
    if (pool.length === 0) {
      alert("Keine Fragen vorhanden!");
      return;
    }

    questions = [...pool].sort(() => 0.5 - Math.random()).slice(0, TOTAL_QUESTIONS);

    setupScreen.classList.remove("active");
    gameScreen.classList.add("active");

    initDots();
    updateSidebar();
    showQuestion();
  }

  function showQuestion() {
    explanationBox.classList.add("hidden");
    updateSidebar();
    updateDots();

    const q = questions[currentQuestionIndex];
    document.getElementById("current-q-num").textContent = currentQuestionIndex + 1;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";

    const labels = ["A", "B", "C", "D"];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "answer-btn";
      btn.innerHTML = `<span class="answer-badge">${labels[idx]}</span> <span>${opt}</span>`;
      btn.addEventListener("click", () => handleAnswer(idx));
      optionsContainer.appendChild(btn);
    });
  }

  function handleAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll(".answer-btn");

    buttons.forEach(b => b.disabled = true);

    if (selectedIndex === q.correct) {
      buttons[selectedIndex].classList.add("correct");
      resultStatus.textContent = "TOR! RICHTIG ANTWORTET";
      resultStatus.className = "result-status correct";
      scores[currentPlayerIndex]++;
    } else {
      buttons[selectedIndex].classList.add("wrong");
      buttons[q.correct].classList.add("correct");
      resultStatus.textContent = "VERWORFEN! FALSCH";
      resultStatus.className = "result-status wrong";
    }

    updateSidebar();
    explanationText.textContent = q.explanation;
    explanationBox.classList.remove("hidden");
  }

  function nextQuestion() {
    currentQuestionIndex++;
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

    const finalBoard = document.getElementById("final-scoreboard");
    finalBoard.innerHTML = "";

    scores.forEach((score, idx) => {
      const row = document.createElement("div");
      row.className = "player-card";
      row.style.marginBottom = "10px";
      row.innerHTML = `
        <div class="player-info">
          <div class="player-avatar">S${idx + 1}</div>
          <div><strong>Spieler ${idx + 1}</strong></div>
        </div>
        <div class="player-score">${score} / ${questions.length} Toren</div>
      `;
      finalBoard.appendChild(row);
    });
  }

  // Bereits beim ersten Seitenaufruf die Spieler in der Sidebar rendern
  updateSidebar();
});