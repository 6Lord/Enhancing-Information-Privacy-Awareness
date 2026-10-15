const questions = [
  {
    domain: "Recognising information and risk",
    question: "You ask an AI assistant to improve a work report. Which detail should you remove first?",
    options: [
      "The subject of the paragraph",
      "Your name, client account number and any private colleague details",
      "The instruction to improve the writing",
      "The fact that it is a work report"
    ],
    correct: 1,
    explanation: "Names, account numbers and details about other people are identifying information. Remove what the AI does not need before using the tool."
  },
  {
    domain: "Recognising information and risk",
    question: "A screenshot has names blurred, but shows an employer logo and a distinctive customer case. Is it automatically anonymous?",
    options: [
      "Yes, because the names are hidden",
      "Yes, if it is uploaded only to an AI tool",
      "No; the case, workplace context or other clues may still identify people",
      "No, but only if the screenshot has a location tag"
    ],
    correct: 2,
    explanation: "Information can identify someone through context and combined clues, even when a direct identifier such as a name is removed."
  },
  {
    domain: "Recognising information and risk",
    question: "Why should you not assume a chatbot conversation is confidential?",
    options: [
      "Every AI service publishes all conversations",
      "Handling varies by provider, product, account and settings, so you must check the applicable rules",
      "AI tools do not process the text in a prompt",
      "Only images can contain private information"
    ],
    correct: 1,
    explanation: "Some services may log or retain prompts under their terms and settings. Check the actual tool and follow workplace policies; do not guess or assume."
  },
  {
    domain: "Recognising information and risk",
    question: "You upload a voice recording to get a transcript. What should you consider?",
    options: [
      "Only whether the recording is short",
      "Whether the recording contains your or another person’s voice, identity or private conversation",
      "Whether the AI can add background music",
      "Nothing, because audio is not personal information"
    ],
    correct: 1,
    explanation: "Voices and spoken details can identify people or reveal sensitive information. Do not upload recordings unless the tool and use are approved and appropriate."
  },
  {
    domain: "Choosing and minimising",
    question: "Your employer has not confirmed whether a free AI chatbot is appropriate for work. What is the safest next step?",
    options: [
      "Upload a real client document to test it",
      "Use it for private information if the response looks helpful",
      "Check workplace policy with your manager or IT/privacy contact before using it for work information",
      "Create a second account to avoid workplace rules"
    ],
    correct: 2,
    explanation: "Check whether the specific tool is permitted for the task before sharing work information. When unsure, pause and ask an appropriate workplace contact."
  },
  {
    domain: "Choosing and minimising",
    question: "You want AI to draft a polite message requesting a meeting about a personal matter. Which prompt is safer?",
    options: [
      "Include your full name, employer ID and detailed medical history",
      "Upload a manager’s private messages and ask the AI to decide",
      "Ask for a polite meeting request without including identifying or sensitive details",
      "Paste your complete HR record so the AI has context"
    ],
    correct: 2,
    explanation: "The AI can help with wording without knowing your identity or health details. Share only what is necessary for the task."
  },
  {
    domain: "Choosing and minimising",
    question: "You ask AI for ideas for a weekend meal plan. Which input is most appropriate?",
    options: [
      "General food preferences and a budget range",
      "A friend’s private health records",
      "A photo of your bank card and recent transactions",
      "A complete medical history when no health advice is needed"
    ],
    correct: 0,
    explanation: "General preferences provide useful context without exposing unnecessary financial or health information."
  },
  {
    domain: "Choosing and minimising",
    question: "A prompt includes a colleague’s name and personal story, but they are not needed for the task. What should you do?",
    options: [
      "Keep it because the colleague is not using the tool",
      "Replace the name and remove or generalise details that could identify them",
      "Add more details so the AI understands the person",
      "Ask the AI to keep the story secret"
    ],
    correct: 1,
    explanation: "Respect other people’s privacy too. Remove direct identifiers and reduce contextual details; do not rely on an AI service to keep a secret."
  },
  {
    domain: "Choosing and minimising",
    question: "A tool offers a privacy setting that controls whether chats are used to improve the service. What should you do?",
    options: [
      "Assume switching the setting makes every use or storage impossible",
      "Check what the setting actually covers, the service terms and any workplace policy",
      "Ignore the setting because it cannot matter",
      "Enter private information first and review the setting later"
    ],
    correct: 1,
    explanation: "A setting may cover only particular kinds of processing. Read its explanation and the relevant rules; never treat one control as a guarantee."
  },
  {
    domain: "Reviewing AI output responsibly",
    question: "An AI-generated client response includes a product detail you do not recognise. What should you do before sending it?",
    options: [
      "Use it because confident answers are usually correct",
      "Ask the same AI to repeat the product detail",
      "Verify it using a trusted source and correct or remove it",
      "Add a customer’s private information to make the answer sound more specific"
    ],
    correct: 2,
    explanation: "Generative AI can make plausible-sounding errors. Verify important claims using reliable sources and authorised records before relying on or sharing them."
  },
  {
    domain: "Reviewing AI output responsibly",
    question: "An AI tool suggests that a job applicant is unreliable based on a short profile. How should you treat that judgement?",
    options: [
      "As an objective fact because a computer produced it",
      "As a conclusion to check critically; it may be biased or unsupported",
      "As a reason to share the applicant’s private details with colleagues",
      "As a substitute for fair, evidence-based human review"
    ],
    correct: 1,
    explanation: "AI outputs can reflect bias or make unsupported judgements. Do not rely on them for consequential decisions about people without careful, fair human review."
  },
  {
    domain: "Reviewing AI output responsibly",
    question: "Before sending an AI-generated draft to a client, what should you check?",
    options: [
      "Only whether it sounds fluent",
      "Accuracy, fairness, confidential details and whether the content is authorised",
      "Whether it includes a real colleague’s name",
      "Nothing; the AI is responsible for the draft"
    ],
    correct: 1,
    explanation: "A person remains responsible for checking AI-generated content. Review its facts, possible bias, confidential information and workplace requirements."
  },
  {
    domain: "Responding and taking responsibility",
    question: "You accidentally paste confidential client information into an AI tool. What should you do?",
    options: [
      "Ignore it because the prompt cannot be retrieved",
      "Follow available deletion or reporting steps and promptly notify your manager or workplace privacy/IT contact",
      "Paste the detail again and ask the AI to forget it",
      "Send a screenshot of the prompt to colleagues who do not need it"
    ],
    correct: 1,
    explanation: "Do not repeat or spread the information. Use available service controls and report promptly through your organisation’s incident process."
  },
  {
    domain: "Responding and taking responsibility",
    question: "An AI answer includes a colleague’s private detail that you entered in a prompt. What should you do with the answer?",
    options: [
      "Share it so people can check whether it is true",
      "Do not circulate it; remove the detail from any draft and report the exposure through the appropriate workplace channel",
      "Ask the AI to make the detail more specific",
      "Post it anonymously without changing anything"
    ],
    correct: 1,
    explanation: "Do not increase the audience for exposed information. Avoid further sharing, remove what you can from your copy and report it to the appropriate workplace contact."
  },
  {
    domain: "Responding and taking responsibility",
    question: "Who is responsible for checking an AI answer before using it for a work or personal task?",
    options: [
      "Only the AI provider",
      "The person using it, with appropriate professional review for consequential work",
      "The first person who reads the answer",
      "No one, if the answer sounds convincing"
    ],
    correct: 1,
    explanation: "AI is a tool, not an accountable decision-maker. The person using its output must check it and follow relevant workplace policies or personal safety judgement."
  }
];

const preAssessmentQuestions = [
  {
    domain: "Recognising information and risk",
    question: "Which prompt contains the most information that could identify a customer?",
    options: [
      "Explain a common household task",
      "Summarise a customer case including the customer's name, account number 48217 and appointment details",
      "Suggest a fictional example",
      "Describe how to structure a short business report"
    ],
    correct: 1
  },
  {
    domain: "Choosing and minimising",
    question: "You are unsure whether an AI tool is appropriate for a work task. What should you do before using it?",
    options: [
      "Upload a real client file to test the service",
      "Check workplace policy with your manager or IT/privacy contact and review the tool’s terms",
      "Use a personal account to avoid workplace policy",
      "Assume it is allowed if it is free"
    ],
    correct: 1
  },
  {
    domain: "Choosing and minimising",
    question: "You need AI to help draft a message requesting a meeting about a personal matter. What information is usually enough?",
    options: [
      "Your employer ID and full medical history",
      "Your manager’s private contact details",
      "The writing task and a general reason such as a personal matter",
      "Your complete HR file"
    ],
    correct: 2
  },
  {
    domain: "Reviewing AI output responsibly",
    question: "An AI answer includes a fact you are not sure is true. What is the best next step?",
    options: [
      "Trust it because the answer sounds confident",
      "Verify it with a reliable source before using it",
      "Ask the AI to repeat the answer with more confidence",
      "Send it to colleagues and let them guess"
    ],
    correct: 1
  },
  {
    domain: "Responding and taking responsibility",
    question: "You accidentally include a client’s private detail in an AI prompt. What should you do?",
    options: [
      "Repeat the prompt and ask the AI to forget it",
      "Tell colleagues broadly so they can help",
      "Stop sharing it and promptly report it through the appropriate workplace channel",
      "Assume nothing can be done"
    ],
    correct: 2
  }
];

const postAssessmentQuestions = [
  {
    domain: "Recognising information and risk",
    question: "A person removes a customer's name from a screenshot but leaves an employer logo, job title and distinctive case details visible. What is the privacy concern?",
    options: [
      "The details could still identify the customer or organisation when combined",
      "There is no concern if the name is missing",
      "Only the image file size matters",
      "AI tools cannot read screenshots"
    ],
    correct: 0
  },
  {
    domain: "Choosing and minimising",
    question: "A privacy setting says chats may not be used to improve an AI model. What should you conclude?",
    options: [
      "The service cannot process or retain the chat for any reason",
      "The setting is one detail to check alongside the service terms and workplace policy",
      "It is safe to upload any personal record",
      "The setting means the tool is automatically approved by your employer"
    ],
    correct: 1
  },
  {
    domain: "Choosing and minimising",
    question: "You want AI to suggest ways to improve a customer-service email. Which input best follows data minimisation?",
    options: [
      "The full customer record with name, account number and complaint history",
      "A fictional example of the situation and the type of tone or feedback you need",
      "A private voice note from a colleague",
      "Your work login details so the AI knows who you are"
    ],
    correct: 1
  },
  {
    domain: "Reviewing AI output responsibly",
    question: "An AI tool labels a job applicant as dishonest based only on a short profile. How should the label be used?",
    options: [
      "Treat it as a proven fact",
      "Share it with the hiring team as a fact",
      "Do not rely on it; AI can make unsupported or biased judgements, and a person must fairly review evidence",
      "Ask the AI to reject the applicant"
    ],
    correct: 2
  },
  {
    domain: "Responding and taking responsibility",
    question: "An AI output repeats private information about a colleague. What is the most responsible action?",
    options: [
      "Forward it so others can confirm the information",
      "Avoid circulating it and report the exposure through an appropriate workplace channel",
      "Post it without the colleague’s name",
      "Ask the AI to add more private details"
    ],
    correct: 1
  }
];

const quizContainer = document.getElementById("quiz-container");
const resultPanel = document.getElementById("result-panel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const preAssessmentForm = document.getElementById("pre-assessment");
const preAssessmentItems = document.getElementById("pre-assessment-items");
const preAssessmentStatus = document.getElementById("pre-assessment-status");
const postAssessmentForm = document.getElementById("post-assessment");
const postAssessmentItems = document.getElementById("post-assessment-items");
const postAssessmentStatus = document.getElementById("post-assessment-status");
const assessmentResults = document.getElementById("assessment-results");
const feedbackForm = document.getElementById("feedback-form");
const formStatus = document.getElementById("form-status");

let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);
let showFeedback = false;
let preAssessmentScore = null;

function renderAssessmentQuestions(container, formId, assessmentQuestions) {
  if (!container) return;
  container.replaceChildren();

  assessmentQuestions.forEach((question, questionIndex) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "assessment-question";

    const legend = document.createElement("legend");
    legend.textContent = `${questionIndex + 1}. ${question.question}`;
    fieldset.appendChild(legend);

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "assessment-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `${formId}-question-${questionIndex}`;
      input.value = String(optionIndex);
      input.required = true;

      const text = document.createElement("span");
      text.textContent = option;

      label.append(input, text);
      fieldset.appendChild(label);
    });

    container.appendChild(fieldset);
  });
}

function getAssessmentAnswers(form, assessmentQuestions) {
  const formData = new FormData(form);
  return assessmentQuestions.map((_, index) =>
    Number(formData.get(`${form.id}-question-${index}`))
  );
}

function disableAssessmentForm(form) {
  form.querySelectorAll("input, button[type='submit']").forEach((control) => {
    control.disabled = true;
  });
}

function renderAssessmentResults(startAnswers, followUpAnswers) {
  if (!assessmentResults) return;
  const startingScore = preAssessmentQuestions.filter((question, index) =>
    startAnswers[index] === question.correct
  ).length;
  const followUpScore = postAssessmentQuestions.filter((question, index) =>
    followUpAnswers[index] === question.correct
  ).length;
  const change = Math.round((followUpScore - startingScore) / preAssessmentQuestions.length * 100);
  const changeMessage = change > 0
    ? `The follow-up check is ${change} percentage points higher.`
    : change < 0
      ? `The follow-up check is ${Math.abs(change)} percentage points lower.`
      : "The two scores are the same.";

  assessmentResults.replaceChildren();
  const heading = document.createElement("h3");
  heading.textContent = "Your learning comparison";
  assessmentResults.appendChild(heading);

  const summary = document.createElement("p");
  summary.textContent = `Starting check: ${startingScore} of 5. Follow-up check: ${followUpScore} of 5. ${changeMessage}`;
  assessmentResults.appendChild(summary);

  const details = document.createElement("ul");
  details.className = "score-breakdown";
  const domains = [...new Set(preAssessmentQuestions.map((question) => question.domain))];
  domains.forEach((domain) => {
    const startingIndices = preAssessmentQuestions
      .map((question, index) => question.domain === domain ? index : -1)
      .filter((index) => index !== -1);
    const followUpIndices = postAssessmentQuestions
      .map((question, index) => question.domain === domain ? index : -1)
      .filter((index) => index !== -1);
    const startingCorrect = startingIndices.filter((index) =>
      startAnswers[index] === preAssessmentQuestions[index].correct
    ).length;
    const followUpCorrect = followUpIndices.filter((index) =>
      followUpAnswers[index] === postAssessmentQuestions[index].correct
    ).length;
    const item = document.createElement("li");
    item.textContent = `${domain}: starting check ${startingCorrect} of ${startingIndices.length}; follow-up ${followUpCorrect} of ${followUpIndices.length}.`;
    details.appendChild(item);
  });
  assessmentResults.appendChild(details);
  assessmentResults.classList.remove("hidden");
}

if (preAssessmentForm && preAssessmentItems && preAssessmentStatus) {
  renderAssessmentQuestions(preAssessmentItems, preAssessmentForm.id, preAssessmentQuestions);
  preAssessmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (preAssessmentScore !== null) return;

    const answers = getAssessmentAnswers(preAssessmentForm, preAssessmentQuestions);
    preAssessmentScore = preAssessmentQuestions.filter((question, index) =>
      answers[index] === question.correct
    ).length;
    preAssessmentForm.dataset.answers = JSON.stringify(answers);
    preAssessmentStatus.textContent = `Starting check recorded: ${preAssessmentScore} of 5. Now review the lessons and complete the follow-up check. Answers are not revealed before learning.`;
    disableAssessmentForm(preAssessmentForm);
  });
}

if (postAssessmentForm && postAssessmentItems && postAssessmentStatus) {
  renderAssessmentQuestions(postAssessmentItems, postAssessmentForm.id, postAssessmentQuestions);
  postAssessmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (preAssessmentScore === null) {
      postAssessmentStatus.textContent = "Complete the starting check at the top of the page before submitting this follow-up check.";
      return;
    }

    const startAnswers = JSON.parse(preAssessmentForm.dataset.answers || "[]");
    const followUpAnswers = getAssessmentAnswers(postAssessmentForm, postAssessmentQuestions);
    postAssessmentStatus.textContent = "Comparison calculated in this page session only.";
    renderAssessmentResults(startAnswers, followUpAnswers);
    disableAssessmentForm(postAssessmentForm);
  });
}

function renderQuestion(index) {
  const question = questions[index];
  const selectedValue = selectedAnswers[index];

  const block = document.createElement("div");
  block.className = "question-block active";
  block.innerHTML = `
    <p class="question-number">Question ${index + 1} of ${questions.length}</p>
    <h3 class="question-title">${question.question}</h3>
    <div class="answers">
      ${question.options
        .map((option, optionIndex) => {
          const isSelected = selectedValue === optionIndex;
          const isCorrect = optionIndex === question.correct;
          const isIncorrect = isSelected && !isCorrect && showFeedback;

          let classes = "answer-option";
          if (isSelected) classes += " selected";
          if (showFeedback && isCorrect) classes += " correct";
          if (isIncorrect) classes += " incorrect";

          return `
            <button type="button" class="${classes}" data-index="${optionIndex}" aria-pressed="${isSelected}" ${showFeedback ? "disabled" : ""}>
              <span class="answer-indicator">${String.fromCharCode(65 + optionIndex)}</span>
              <span>${option}</span>
            </button>
          `;
        })
        .join("")}
    </div>
    ${showFeedback ? `<p class="result-detail">${question.explanation}</p>` : ""}
  `;

  quizContainer.innerHTML = "";
  quizContainer.appendChild(block);

  block.querySelectorAll(".answer-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (showFeedback) return;
      const optionIndex = Number(button.dataset.index);
      selectedAnswers[index] = optionIndex;
      showFeedback = true;
      renderQuestion(index);
    });
  });

  if (showFeedback && selectedValue !== null) {
    const answerButtons = block.querySelectorAll(".answer-option");
    answerButtons.forEach((button) => {
      const optionIndex = Number(button.dataset.index);
      if (optionIndex === question.correct) {
        button.classList.add("correct");
      }
      if (optionIndex === selectedValue && optionIndex !== question.correct) {
        button.classList.add("incorrect");
      }
    });
  }

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
}

function calculateScore() {
  let score = 0;
  questions.forEach((question, idx) => {
    if (selectedAnswers[idx] === question.correct) score += 1;
  });
  return score;
}

function showResults() {
  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);
  const domains = [...new Set(questions.map((question) => question.domain))];
  const domainScores = domains
    .map((domain) => {
      const questionIndices = questions
        .map((question, index) => question.domain === domain ? index : -1)
        .filter((index) => index !== -1);
      const domainCorrect = questionIndices.filter((index) =>
        selectedAnswers[index] === questions[index].correct
      ).length;
      return `<li><strong>${domain}:</strong> ${domainCorrect} of ${questionIndices.length} correct</li>`;
    })
    .join("");
  let heading = "Great work!";
  let message = "You are applying the AI privacy principles well. Keep using the P.A.U.S.E. check and review workplace policy and service terms when tools or settings change.";

  if (percentage < 50) {
    heading = "There is room to improve";
    message = "Revisit the lessons on identifying information, checking tools, minimising prompts and reviewing AI outputs, then try the quiz again.";
  } else if (percentage < 75) {
    heading = "Solid awareness";
    message = "You understand several key ideas. Review the topic areas below where you missed questions and practise applying P.A.U.S.E.";
  }

  resultPanel.classList.remove("hidden");
  resultPanel.innerHTML = `
    <h3>${heading}</h3>
    <p>You scored ${score} out of ${questions.length} (${percentage}%). ${message}</p>
    <ul class="score-breakdown">${domainScores}</ul>
    <p class="assessment-note">This is an informal learning check, not a formal assessment of behaviour or a validated research instrument. Your answers and score exist only in this page session; PromptSmart does not save them to persistent storage or send them anywhere.</p>
  `;

  restartBtn.classList.remove("hidden");
  nextBtn.classList.add("hidden");
  prevBtn.classList.add("hidden");
}

function nextQuestion() {
  if (showFeedback) {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
      showFeedback = false;
      renderQuestion(currentQuestionIndex);
      resultPanel.classList.add("hidden");
      return;
    }
    showResults();
    return;
  }

  if (selectedAnswers[currentQuestionIndex] === null) {
    alert("Please select an answer before continuing.");
    return;
  }

  showFeedback = true;
  renderQuestion(currentQuestionIndex);
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    showFeedback = false;
    resultPanel.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    prevBtn.classList.remove("hidden");
    restartBtn.classList.add("hidden");
    renderQuestion(currentQuestionIndex);
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = Array(questions.length).fill(null);
  showFeedback = false;
  resultPanel.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  prevBtn.classList.remove("hidden");
  restartBtn.classList.add("hidden");
  renderQuestion(currentQuestionIndex);
}

if (prevBtn && nextBtn && restartBtn) {
  prevBtn.addEventListener("click", previousQuestion);
  nextBtn.addEventListener("click", nextQuestion);
  restartBtn.addEventListener("click", restartQuiz);
}

if (feedbackForm && formStatus) {
  feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementById("feedback-message").value.trim();

    if (!message) {
      formStatus.textContent = "Please add a short message before sending.";
      return;
    }

    feedbackForm.reset();
    formStatus.textContent = "Thank you. Your feedback was checked locally and was not stored or sent.";
  });
}

if (quizContainer) {
  renderQuestion(currentQuestionIndex);
}
