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