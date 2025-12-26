document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz").forEach((quizEl) => {
    const dataEl = quizEl.querySelector(".quiz-data");
    const quiz = JSON.parse(dataEl.textContent);

    const root = quizEl.querySelector(".quiz-root");
    root.innerHTML = "";

    // Keep references so the "Check answers" button can read all selections
    const rows = [];

    // Render each statement with a single checkbox: checked = "I think it's correct"
    quiz.statements.forEach((st, idx) => {
      const block = document.createElement("div");
      block.className = "quiz-statement";

      //const p = document.createElement("p");
      //p.textContent = `${st.text}`;
      //block.appendChild(p);

      // Checkbox
      const label = document.createElement("label");
      label.style.display = "block";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "quiz-choice";

      // Label text is the statement itself
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(`  ${st.text}`));
      block.appendChild(label);

      // Feedback area (filled only after user clicks "Check answers")
      const feedback = document.createElement("div");
      feedback.className = "quiz-feedback";
      feedback.setAttribute("aria-live", "polite");
      feedback.innerHTML="&nbsp;"
      block.appendChild(feedback);

      root.appendChild(block);

      rows.push({ checkbox, feedback, statement: st });
    });

    // Add a single button for the whole scenario
    const controls = document.createElement("div");
    controls.className = "quiz-controls";

    const btnCheck = document.createElement("button");
    btnCheck.type = "button";
    btnCheck.textContent = "Check answers";

    const summary = document.createElement("div");
    summary.className = "quiz-summary";
    summary.style.marginTop = "10px";

    btnCheck.addEventListener("click", () => {
      let correctCount = 0;

      rows.forEach(({ checkbox, feedback, statement }) => {
        // User's answer: checked means they believe statement is correct (true)
        const userAnswer = checkbox.checked;
        const isCorrect = (userAnswer === statement.correct);

        if (isCorrect) correctCount += 1;

        feedback.textContent = (isCorrect ? "✓ " : "✗ ") + statement.feedback;

        // Optional: lock inputs after checking
        //checkbox.disabled = true;
      });

      //btnCheck.disabled = true;
      summary.textContent = `Score: ${correctCount} / ${rows.length}`;
      summary.style.fontWeight = "bold";
    });

    controls.appendChild(btnCheck);
    controls.appendChild(summary);
    root.appendChild(controls);
  });
});
