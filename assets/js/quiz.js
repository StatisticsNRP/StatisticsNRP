/* assets/js/quiz.js
   Renders Jekyll-embedded quiz data into an interactive questionnaire.

   This version renders ALL question sets (no dropdown).
   Each set gets its own controls (Check answers / Reset / Score).

   Supports:
   - Interleaved comments
   - Question types:
       * single: radio buttons (one best answer)
       * multi: checkboxes (select all that apply)
*/

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".quiz").forEach((quizEl) => {
    const dataEl = quizEl.querySelector(".quiz-data");
    if (!dataEl) return;

    const quiz = JSON.parse(dataEl.textContent);

    const root = quizEl.querySelector(".quiz-root");
    if (!root) return;
    root.innerHTML = "";

    let qNumber = 0;

    const sets = quiz.sets || {};

    // If no sets exist, treat as a single implicit set (backwards compatibility)
    const setKeys = Object.keys(sets);
    const normalizedSetKeys = setKeys.length > 0 ? setKeys : ["default"];

    const getSet = (key) => {
      if (key === "default") {
        return {
          title: "Questions",
          items: quiz.items || quiz.statements || [],
        };
      }
      return sets[key];
    };

    // --- Helpers ------------------------------------------------------------

    function el(tag, className, text) {
      const node = document.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined && text !== null) node.textContent = text;
      return node;
    }

    function renderComment(item) {
      const wrap = el("div", "quiz-comment");
      const parts = String(item.text || "").split(/\n\s*\n/);
      parts.forEach((pText) => {
        const p = el("p", null, pText.trim());
        wrap.appendChild(p);
      });
      return wrap;
    }

    function evaluateQuestion(q, inputs) {
      const options = q.options || [];

      const selected = new Set();
      inputs.forEach(({ inputEl, optionIndex }) => {
        if (inputEl.checked) selected.add(optionIndex);
      });

      const correct = new Set();
      options.forEach((opt, idx) => {
        if (opt.correct === true) correct.add(idx);
      });

      const isCorrect =
        selected.size === correct.size &&
        [...selected].every((idx) => correct.has(idx));

      return { isCorrect };
    }

    function renderQuestion(item, qNumber, namePrefix) {
      const wrap = el("div", "quiz-question");

      wrap.appendChild(
        el("p", "quiz-question-prompt", `${qNumber}) ${item.prompt || ""}`.trim())
      );

      const kind = item.kind || "single"; // single (radio) or multi (checkbox)
      const options = item.options || [];

      const optionsList = el("div", "quiz-options");
      wrap.appendChild(optionsList);

      const inputs = [];

      options.forEach((opt, idx) => {
        const row = el("div", "quiz-option");

        const input = document.createElement("input");
        input.type = (kind === "multi") ? "checkbox" : "radio";
        input.name = `${namePrefix}_q${qNumber}`;
        input.value = String(idx);

        const label = document.createElement("label");
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + (opt.text || "")));

        row.appendChild(label);

        const optFeedback = el("div", "quiz-option-feedback");
        optFeedback.setAttribute("aria-live", "polite");
        row.appendChild(optFeedback);

        optionsList.appendChild(row);

        inputs.push({ inputEl: input, optionIndex: idx, feedbackEl: optFeedback });
      });

      const generalFeedback = el("div", "quiz-feedback");
      generalFeedback.setAttribute("aria-live", "polite");
      wrap.appendChild(generalFeedback);

      return { wrap, inputs, generalFeedback, item };
    }

    function renderSet(setKey) {
      const setObj = getSet(setKey) || {};
      const items = setObj.items || [];

      // Wrapper for one set (so reset can re-render only that set)
      const setWrap = el("section", "quiz-set");
      root.appendChild(setWrap);

      if (setObj.title) {
        setWrap.appendChild(el("h3", "quiz-set-title", setObj.title));
      }

      const questionBlocks = [];
      

      // Prefix for radio groups within this set (prevents collisions across sets)
      const namePrefix = String(setKey).replace(/[^a-zA-Z0-9_]/g, "_");

      items.forEach((item) => {
        if (!item || !item.type) return;

        if (item.type === "comment") {
          setWrap.appendChild(renderComment(item));
          return;
        }

        if (item.type === "question") {
          qNumber += 1;
          const qb = renderQuestion(item, qNumber, namePrefix);
          setWrap.appendChild(qb.wrap);
          questionBlocks.push(qb);
          return;
        }
      });

      // Controls for this set
      const controls = el("div", "quiz-controls");
      const btnCheck = document.createElement("button");
      btnCheck.type = "button";
      btnCheck.textContent = "Check answers";

      //const btnReset = document.createElement("button");
      //btnReset.type = "button";
      //btnReset.textContent = "Reset";
      //btnReset.style.marginLeft = "8px";

      const summary = el("div", "quiz-summary");
      summary.style.marginTop = "10px";

      btnCheck.addEventListener("click", () => {
        let correctCount = 0;

        questionBlocks.forEach((qb) => {
          const q = qb.item;

          const result = evaluateQuestion(q, qb.inputs);

          // Per-option marking + lock
          qb.inputs.forEach(({ inputEl, optionIndex, feedbackEl }) => {
            const opt = (q.options || [])[optionIndex] || {};
            const userSelected = inputEl.checked;
            const optionEl = inputEl.closest(".quiz-option");
            optionEl.classList.remove(
              "option-correct",
              "option-incorrect",
              "option-missed"
            );
            const optIsCorrect = opt.correct === true;

            let mark = "";
            
            if (userSelected && optIsCorrect) mark = "✓ ";
            else if (userSelected && !optIsCorrect) mark = "✗ ";
            else if (!userSelected && optIsCorrect) mark = "✗ ";
            
            if (optIsCorrect) {
              optionEl.classList.add("option-correct");
            }
            else if (!optIsCorrect) {
              optionEl.classList.add("option-incorrect");
            }
            
            const fb = opt.feedback ? String(opt.feedback) : "";
            //feedbackEl.textContent = (mark || fb) ? (mark + fb).trim() : "";

            //inputEl.disabled = true;
          });

          // Question-level feedback
          if (result.isCorrect) {
            correctCount += 1;
            qb.generalFeedback.textContent = q.feedback_correct || "Correct.";
          } else {
            qb.generalFeedback.textContent =
              "Not quite. Review the marked options.";
              //q.feedback_incorrect || "Not quite. Review the marked options.";
          }

          if (q.explanation) {
            const expl = el("div", "quiz-explanation", String(q.explanation));
            qb.generalFeedback.appendChild(document.createElement("br"));
            qb.generalFeedback.appendChild(expl);
          }
        });

        //btnCheck.disabled = true;
        summary.textContent = `Score: ${correctCount} / ${questionBlocks.length}`;
        summary.style.fontWeight = "bold";
      });

      /*
      btnReset.addEventListener("click", () => {
        // Re-render just this set
        const idx = Array.from(root.children).indexOf(setWrap);
        setWrap.remove();

        // Insert the re-rendered set back in the same position
        const newSetWrap = renderSetIntoStandalone(setKey);
        if (idx >= 0 && idx < root.children.length) {
          root.insertBefore(newSetWrap, root.children[idx]);
        } else {
          root.appendChild(newSetWrap);
        }
      });
      */

      controls.appendChild(btnCheck);
      //controls.appendChild(btnReset);
      controls.appendChild(summary);
      setWrap.appendChild(controls);

      return setWrap;
    }

    // Helper used by reset to rebuild a set without touching other sets
    function renderSetIntoStandalone(setKey) {
      const placeholder = document.createElement("div");
      // Temporarily render into placeholder by swapping root
      const oldRoot = root;
      // Create a fake root for rendering
      const tempRoot = placeholder;
      // We will reuse renderSet logic by temporarily re-pointing `root` via closure is not possible.
      // Instead, duplicate minimal renderSet functionality for the reset.

      const setObj = getSet(setKey) || {};
      const items = setObj.items || [];

      const setWrap = el("section", "quiz-set");
      tempRoot.appendChild(setWrap);

      if (setObj.title) {
        setWrap.appendChild(el("h3", "quiz-set-title", setObj.title));
      }

      const questionBlocks = [];
      //let qNumber = 0;
      const namePrefix = String(setKey).replace(/[^a-zA-Z0-9_]/g, "_");

      items.forEach((item) => {
        if (!item || !item.type) return;

        if (item.type === "comment") {
          setWrap.appendChild(renderComment(item));
          return;
        }

        if (item.type === "question") {
          qNumber += 1;
          const qb = renderQuestion(item, qNumber, namePrefix);
          setWrap.appendChild(qb.wrap);
          questionBlocks.push(qb);
          return;
        }
      });

      const controls = el("div", "quiz-controls");
      const btnCheck = document.createElement("button");
      btnCheck.type = "button";
      btnCheck.textContent = "Check answers";

      const btnReset = document.createElement("button");
      btnReset.type = "button";
      btnReset.textContent = "Reset";
      btnReset.style.marginLeft = "8px";

      const summary = el("div", "quiz-summary");
      summary.style.marginTop = "10px";

      btnCheck.addEventListener("click", () => {
        let correctCount = 0;

        questionBlocks.forEach((qb) => {
          const q = qb.item;
          const result = evaluateQuestion(q, qb.inputs);

          qb.inputs.forEach(({ inputEl, optionIndex, feedbackEl }) => {
            const opt = (q.options || [])[optionIndex] || {};
            const userSelected = inputEl.checked;
            const optIsCorrect = opt.correct === true;

            let mark = "";
            if (userSelected && optIsCorrect) mark = "✓ ";
            else if (userSelected && !optIsCorrect) mark = "✗ ";
            else if (!userSelected && optIsCorrect) mark = "✗ ";

            const fb = opt.feedback ? String(opt.feedback) : "";
           // feedbackEl.textContent = (mark || fb) ? (mark + fb).trim() : "";

            //inputEl.disabled = true;
          });

          if (result.isCorrect) {
            correctCount += 1;
            qb.generalFeedback.textContent = q.feedback_correct || "Correct.";
          } else {
            qb.generalFeedback.textContent =
              "Not quite. Review the marked options.";
              //q.feedback_incorrect || "Not quite. Review the marked options.";
          }

          if (q.explanation) {
            const expl = el("div", "quiz-explanation", String(q.explanation));
            qb.generalFeedback.appendChild(document.createElement("br"));
            qb.generalFeedback.appendChild(expl);
          }
        });

        //btnCheck.disabled = true;
        summary.textContent = `Score: ${correctCount} / ${questionBlocks.length}`;
        summary.style.fontWeight = "bold";
      });

      btnReset.addEventListener("click", () => {
        // simplest reset: re-render the whole page section by reloading this set in-place
        // handled by outer reset wiring, so here we do nothing
        // (this button will be overwritten by the outer renderSet logic)
      });

      controls.appendChild(btnCheck);
      controls.appendChild(btnReset);
      controls.appendChild(summary);
      setWrap.appendChild(controls);

      // Return the setWrap so the outer reset can swap it in
      return setWrap;
    }

    // Render all sets in order
    normalizedSetKeys.forEach((k) => {
      renderSet(k);
    });
  });
});
