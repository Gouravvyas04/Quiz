let timer = document.querySelector(".timer");
let right = document.querySelector(".true");
let wrong = document.querySelector(".false");
let question = document.querySelector(".ques-content");
let btns = document.querySelectorAll("#btn");
let content = document.querySelector(".content");
let start = document.querySelector(".start");
let explanation = document.querySelector(".explanation");
let container =document.querySelector(".container");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let points = document.querySelector(".points");
let count = 10;
let score = 0;
let quesIndex = 0;


points.innerText = score;
time();
const questions = [
  {
    statement: "HTML stands for hyper text markup language",
    answer: true,
    explanation:
      "A markup language is a system of annotations used to define the structure",
  },
  {
    statement: "Arrays are objects",
    answer: true,
    explanation: "Arrays are kind of objects with special values",
  },
  {
    statement: "'1'+'1'==='2'",
    answer: false,
    explanation: " it concatenates the strings '1' and '1' to form '11'",
  },
  {
    statement: "CSS stands for cascading style sheets",
    answer: true,
    explanation: "CSS works for styling",
  },
  {
    statement: "Javascript provides styling to the web page",
    answer: false,
    explanation: "Javascript provides functionality to the web page",
  },
];

// Display the first question initially
question.innerText = questions[quesIndex].statement;

function time() {
  let inter = setInterval(() => {
    timer.innerText = count;
    if (count > 0) {
      count--;
    }

    if (count === 0) {
      clearInterval(inter);
      for (let btn of btns) {
        btn.disabled = true;
      }
      question.innerText = "Time is Over";
    }
  }, 1000);
}

function nextQuestion() {
  if (quesIndex < questions.length) {
    // Adjusted condition to prevent going out of bounds
    quesIndex++;
    question.innerText = questions[quesIndex].statement;
    count = 10;
    revButtons();
    time();
    right.classList.remove("correct", "incorrect");
    wrong.classList.remove("correct", "incorrect");
  }
}

function revButtons() {
  for (let btn of btns) {
    btn.disabled = false;
  }
}

next.addEventListener("click", nextQuestion);

function prevQuestion() {
  if (quesIndex > 0) {
    quesIndex--;
    question.innerText = questions[quesIndex].statement;
    count = 10;
    revButtons();
    time();
    right.classList.remove("correct", "incorrect");
    wrong.classList.remove("correct", "incorrect");
  }
}

prev.addEventListener("click", prevQuestion);

right.addEventListener("click", () => {
  if (questions[quesIndex].answer === true) {
    right.classList.add("correct");
    score += 10;
    points.innerText = score;
    wrong.disabled = true;
    right.disabled = true;
    explanation.innerText = questions[quesIndex].explanation;
  } else {
    right.classList.add("incorrect");
    explanation.innerText = questions[quesIndex].explanation;
  }
});

wrong.addEventListener("click", () => {
  if (questions[quesIndex].answer === false) {
    wrong.classList.add("correct");
    score += 10;
    points.innerText = score;
    right.disabled = true;
    wrong.disabled = true;
    explanation.innerText = questions[quesIndex].explanation;
  } else {
    wrong.classList.add("incorrect");
    explanation.innerText = questions[quesIndex].explanation;
  }
});

for (let btn of btns) {
  btn.addEventListener("click", () => {
    explanation.innerText = questions[quesIndex].explanation;
  });
}