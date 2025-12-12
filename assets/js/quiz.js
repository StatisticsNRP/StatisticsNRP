document.addEventListener("DOMContentLoaded", () => {
  // Find all quizzes on the page (supports more than one per page)
  document.querySelectorAll(".quiz").forEach((quizEl) => {
    // Read embedded JSON data
    const dataEl = quizEl.querySelector(".quiz-data");
    const quiz = JSON.parse(dataEl.textContent);

    // Where we will render interactive statements
    const root = quizEl.querySelector(".quiz-root");
    root.innerHTML = "";

    quiz.statements.forEach((st, idx) => {
      const block = document.createElement("div");
      block.className = "quiz-statement";

      const p = document.createElement("p");
      p.textContent = `${idx + 1}. ${st.text}`;
      block.appendChild(p);

      const btnCorrect = document.createElement("button");
      btnCorrect.type = "button";
      btnCorrect.textContent = "Correct";

      const btnIncorrect = document.createElement("button");
      btnIncorrect.type = "button";
      btnIncorrect.textContent = "Incorrect";

      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      feedback.setAttribute("aria-live", "polite"); // screen-reader friendly

      function checkAnswer(answer) {
        const isCorrect = (answer === st.correct);
        feedback.textContent = (isCorrect ? "✓ " : "✗ ") + st.feedback;

        // Disable buttons after answering (optional but useful)
        btnCorrect.disabled = true;
        btnIncorrect.disabled = true;
      }

      btnCorrect.addEventListener("click", () => checkAnswer(true));
      btnIncorrect.addEventListener("click", () => checkAnswer(false));

      block.appendChild(btnCorrect);
      block.appendChild(btnIncorrect);
      block.appendChild(feedback);

      root.appendChild(block);
    });
  });
});
