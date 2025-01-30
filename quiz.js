let timer = document.querySelector(".timer");
let right = document.querySelector(".true");
let wrong = document.querySelector(".false");
let question = document.querySelector(".ques-content");
let btns = document.querySelectorAll("#btn");
let explanation = document.querySelector(".explanation");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let points = document.querySelector(".points");

let count = 10;
let score = 0;
let quesIndex = 0;
let interval; // Store timer interval

points.innerText = score;

// Question list
const questions = [
  {
    statement: "HTML stands for HyperText Markup Language.",
    answer: true,
    explanation:
      "A markup language is a system of annotations used to define the structure of a webpage.",
  },
  {
    statement: "Arrays are objects in JavaScript.",
    answer: true,
    explanation: "Arrays are special objects that allow indexed storage of elements.",
  },
  {
    statement: "'1' + '1' === 2",
    answer: false,
    explanation: "It concatenates the strings '1' and '1' to form '11'.",
  },
  {
    statement: "CSS stands for Cascading Style Sheets.",
    answer: true,
    explanation: "CSS is used for styling web pages.",
  },
  {
    statement: "JavaScript provides styling to the web page.",
    answer: false,
    explanation: "JavaScript provides interactivity and functionality to web pages.",
  },
];

// Function to start timer
function startTimer() {
  clearInterval(interval); // Clear any previous timer
  count = 10;
  timer.innerText = count;
  
  interval = setInterval(() => {
    if (count > 0) {
      timer.innerText = count--;
    } else {
      clearInterval(interval);
      disableButtons();
      question.innerText = "Time is Over!";
    }
  }, 1000);
}

// Function to disable answer buttons
function disableButtons() {
  right.disabled = true;
  wrong.disabled = true;
}

// Function to enable answer buttons
function enableButtons() {
  right.disabled = false;
  wrong.disabled = false;
  right.classList.remove("correct", "incorrect");
  wrong.classList.remove("correct", "incorrect");
}

// Display the first question initially
function loadQuestion() {
  question.innerText = questions[quesIndex].statement;
  explanation.innerText = ""; // Clear previous explanation
  explanation.style.display = "none"; // Hide explanation
  startTimer();
  enableButtons();
}

// Load initial question
loadQuestion();

// Next Question Function
function nextQuestion() {
  if (quesIndex < questions.length - 1) {
    quesIndex++;
    loadQuestion();
  }
}

// Previous Question Function
function prevQuestion() {
  if (quesIndex > 0) {
    quesIndex--;
    loadQuestion();
  }
}

// Handle Correct Answer
right.addEventListener("click", () => {
  if (questions[quesIndex].answer) {
    right.classList.add("correct");
    score += 10;
  } else {
    right.classList.add("incorrect");
  }
  points.innerText = score;
  disableButtons();
  explanation.innerText = questions[quesIndex].explanation;
  explanation.style.display = "block"; // Show explanation
});

// Handle Incorrect Answer
wrong.addEventListener("click", () => {
  if (!questions[quesIndex].answer) {
    wrong.classList.add("correct");
    score += 10;
  } else {
    wrong.classList.add("incorrect");
  }
  points.innerText = score;
  disableButtons();
  explanation.innerText = questions[quesIndex].explanation;
  explanation.style.display = "block"; // Show explanation
});

// Event Listeners for Navigation
next.addEventListener("click", nextQuestion);
prev.addEventListener("click", prevQuestion);
