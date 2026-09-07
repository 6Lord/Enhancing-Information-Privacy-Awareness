const questions = [
  {
    question: "A class photo shows learners, a school logo and a location tag. What is the best privacy-first action?",
    options: [
      "Post it immediately because it is a positive event",
      "Check consent, remove unnecessary location details and choose a limited audience",
      "Tag every learner so the post reaches more people",
      "Add the date, school timetable and venue for context"
    ],
    correct: 1,
    explanation: "A photo, school context and location can identify people. Check consent, minimise details and limit the audience before sharing."
  },
  {
    question: "A message claims your school account will be deleted today and asks for your password. What should you do first?",
    options: [
      "Reply with the password so the account can be saved",
      "Open the link on a different device",
      "Verify the request using the school’s known website or contact channel",
      "Forward it to classmates to ask whether it is real"
    ],
    correct: 2,
    explanation: "Urgency and password requests are common phishing signals. Use a known, independent contact channel rather than the message link."
  },
  {
    question: "An AI tool offers to summarise a disciplinary report. Which approach best protects privacy?",
    options: [
      "Paste the complete report because AI tools are automatically confidential",
      "Replace names and identifying details, confirm the tool is approved, and review the output",
      "Ask the tool to guess the learner’s identity",
      "Share the report publicly so the summary can be checked"
    ],
    correct: 1,
    explanation: "Sensitive reports should only be processed by approved tools and with the minimum information needed. Outputs also need human review."
  },
  {
    question: "Which privacy setting is usually important before sharing a photo online?",
    options: [
      "The brightness of the screen",
      "Location metadata and audience visibility",
      "The default browser theme",
      "The number of apps installed"
    ],
    correct: 1,
    explanation: "Photos can contain hidden metadata such as GPS coordinates. Checking audience settings and metadata helps reduce unnecessary exposure."
  },
  {
    question: "What is the best way to protect your information on public Wi‑Fi?",
    options: [
      "Disable security features and browse freely",
      "Use a trusted VPN and avoid sensitive transactions",
      "Share your login details with nearby people",
      "Keep the same browser open without logging out"
    ],
    correct: 1,
    explanation: "Public Wi‑Fi networks can be insecure. Using a trusted VPN and avoiding sensitive activities lowers the chance of interception or attacks."
  },
  {
    question: "What does app permission review help prevent?",
    options: [
      "Faster battery charging",
      "Unnecessary access to contacts, microphone, or location",
      "The need to update software",
      "Automatic logout from accounts"
    ],
    correct: 1,
    explanation: "Reviewing app permissions limits unnecessary access and reduces the amount of data collected about a user's habits or personal context."
  },
  {
    question: "Which statement best defines informed consent online?",
    options: [
      "Agreeing because a pop-up appears quickly",
      "Understanding what data is collected and choosing clearly",
      "Accepting all cookies without reading",
      "Only reading the company name"
    ],
    correct: 1,
    explanation: "Informed consent means users should understand what is being collected, why it is collected, and be able to make a real choice."
  },
  {
    question: "What is the most effective way to reduce privacy risk in social media?",
    options: [
      "Share all posts publicly to attract attention",
      "Review privacy settings and limit personal information shared",
      "Accept all follower requests",
      "Post location details for your friends"
    ],
    correct: 1,
    explanation: "Strong privacy settings and careful sharing limits unnecessary exposure of personal information and reduces online risk."
  },
  {
    question: "A website asks for your ID number to enter a simple competition. What is the best question to ask?",
    options: [
      "Can I provide more information to improve my chances?",
      "Why is this information needed, who will access it, and when will it be deleted?",
      "Should I post my ID number in the comments instead?",
      "Does the request look official enough to ignore?"
    ],
    correct: 1,
    explanation: "Purpose, access and retention should be clear before you provide sensitive information. Collecting less data reduces unnecessary risk."
  },
  {
    question: "You discover that a shared class document gives editing access to anyone with the link. What should you do?",
    options: [
      "Leave it because links are difficult to find",
      "Download a copy and share it with more people",
      "Restrict access to named people and report the exposure if personal data is included",
      "Delete the document immediately without telling anyone"
    ],
    correct: 2,
    explanation: "Restricting access contains the risk. If personal information was exposed, report it through the appropriate channel so others can respond."
  },
  {
    question: "Which password practice offers the strongest protection for important accounts?",
    options: [
      "Use one memorable password everywhere",
      "Use a unique long password with multi-factor authentication",
      "Change only the final number each month",
      "Save the password in a public notes app"
    ],
    correct: 1,
    explanation: "Unique passwords limit the damage from one breach, while multi-factor authentication adds another barrier to account access."
  },
  {
    question: "An AI-generated summary sounds confident but includes a fact you cannot verify. What should you do?",
    options: [
      "Share it because confident writing is usually accurate",
      "Ask the AI to repeat the same answer more strongly",
      "Check the claim against a trusted source and correct or remove it",
      "Add a person’s private details so the AI has more context"
    ],
    correct: 2,
    explanation: "AI can produce plausible-sounding errors. Verify important claims and never add sensitive information simply to improve an answer."
  },
  {
    question: "A friend asks you to send their private photo to prove it is real. What is the safest response?",
    options: [
      "Forward it to a group for advice",
      "Post it with the friend’s username",
      "Do not forward it; encourage reporting and seek trusted support if harm is involved",
      "Save copies in case someone else asks later"
    ],
    correct: 2,
    explanation: "Forwarding increases the audience and harm. Keep the image private and use platform reporting or trusted support routes."
  },
  {
    question: "Why should old accounts and unused apps be reviewed or removed?",
    options: [
      "They make the device look untidy",
      "Old accounts may retain personal data and remain vulnerable after you stop using them",
      "Unused apps improve internet speed",
      "Deleting them guarantees that every copy of your data disappears"
    ],
    correct: 1,
    explanation: "Unused services can still hold data and become targets. Review access, delete what you no longer need and understand that deletion may not remove every backup."
  },
  {
    question: "You accidentally email a private file to the wrong person. What is the most responsible first response?",
    options: [
      "Ignore it and hope they do not open it",
      "Forward the file to more people to explain the mistake",
      "Try to recall or restrict access, contact the recipient, and report the incident promptly",
      "Delete the sent email from your own inbox only"
    ],
    correct: 2,
    explanation: "Act quickly to contain access, ask the unintended recipient not to use or share the file, and follow the organisation’s incident process."
  }
];

const quizContainer = document.getElementById("quiz-container");
const resultPanel = document.getElementById("result-panel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const feedbackForm = document.getElementById("feedback-form");
const formStatus = document.getElementById("form-status");

let currentQuestionIndex = 0;
let selectedAnswers = Array(questions.length).fill(null);
let showFeedback = false;

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
            <button type="button" class="${classes}" data-index="${optionIndex}">
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
  let heading = "Great work!";
  let message = "You have a strong understanding of digital privacy. Keep reviewing your habits and settings to stay protected.";

  if (percentage < 50) {
    heading = "There is room to improve";
    message = "Review the privacy topics and practice caution with links, permissions, sharing, and account security. Every small step helps.";
  } else if (percentage < 75) {
    heading = "Solid awareness";
    message = "You understand the basics well. Strengthen your habits by checking settings and being more careful with online sharing.";
  }

  resultPanel.classList.remove("hidden");
  resultPanel.innerHTML = `
    <h3>${heading}</h3>
    <p>You scored ${score} out of ${questions.length} (${percentage}%). ${message}</p>
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
  }

  if (currentQuestionIndex === questions.length - 1) {
    showFeedback = true;
    renderQuestion(currentQuestionIndex);
    showResults();
    return;
  }

  if (selectedAnswers[currentQuestionIndex] === null) {
    alert("Please select an answer before continuing.");
    return;
  }

  currentQuestionIndex += 1;
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
