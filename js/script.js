let questions = [
  { image: "./img/dobermango.jpg", answer: "доберманго" },
  { image: "./img/alpapka.jpg", answer: "альпапка" },
  { image: "./img/bekon.jpg", answer: "беконь" },
  { image: "./img/eskimops.jpg", answer: "эскимопс" },
  { image: "./img/kolbasulya.jpg", answer: "колбасуля" },
  { image: "./img/kotleta.jpg", answer: "котлета" },
  { image: "./img/somolet.jpg", answer: "сомолет" && "сомолёт" },
  { image: "./img/tigrusha.jpg", answer: "тигруша" },
  { image: "./img/tiramisu.jpg", answer: "тирамисуслик" },
];

let currentQuestionIndex = 0;
let score = 0;
let attempts = 3;

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  attempts = 3;
  document.getElementById("score").innerText = score;
  document.getElementById("attempts").innerText = attempts;
}

function startQuiz() {
  document.getElementById("startScreen").style.display = "none";
  document.querySelector(".footer").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  showQuestion();
  document
    .getElementById("answerInput")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });
}

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("questionImage").src =
      questions[currentQuestionIndex].image;
  } else {
    alert(`Викторина окончена! Ваш счет: ${score}`);
    document.getElementById("quiz").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
    resetQuiz();
  }
}

function checkAnswer() {
  let userAnswer = document
    .getElementById("answerInput")
    .value.trim()
    .toLowerCase();
  if (userAnswer === questions[currentQuestionIndex].answer) {
    score += 1;
    document.getElementById("score").innerText = score;
    attempts += 1;
    document.getElementById("attempts").innerText = attempts;
    currentQuestionIndex += 1;
    document.getElementById("answerInput").value = "";
    showQuestion();
  } else {
    attempts -= 1;
    if (attempts <= 0) {
      alert(`Викторина окончена! Ваш счет: ${score}`);
      document.getElementById("quiz").style.display = "none";
      document.getElementById("startScreen").style.display = "block";
      resetQuiz();
    } else {
      document.getElementById("attempts").innerText = attempts;
      document.getElementById("answerInput").value = "";
    }
  }
}
