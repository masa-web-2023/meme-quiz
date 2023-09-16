let questions = [
  { image: "../img/dobermango.jpg", answer: "доберманго" },
  { image: "../img/alpapka.jpg", answer: "альпапка" },
  { image: "../img/bekon.jpg", answer: "беконь" },
  { image: "../img/eskimops.jpg", answer: "эскимопс" },
  { image: "../img/kolbasulya.jpg", answer: "колбасуля" },
  { image: "../img/kotleta.jpg", answer: "котлета" },
  { image: "../img/somolet.jpg", answer: "сомолет" },
  { image: "../img/tigrusha.jpg", answer: "тигруша" },
  { image: "../img/tiramisu.jpg", answer: "тирамисуслик" },
];

let currentQuestionIndex = 0;
let score = 0;
let attempts = 3;

function startQuiz() {
  document.getElementById("startScreen").style.display = "none";
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
    currentQuestionIndex = 0;
    score = 0;
    attempts = 3;
    document.getElementById("score").innerText = score;
    document.getElementById("attempts").innerText = attempts;
  }
}

function checkAnswer() {
  let userAnswer = document
    .getElementById("answerInput")
    .value.trim()
    .toLowerCase();
  if (userAnswer === questions[currentQuestionIndex].answer) {
    score++;
    document.getElementById("score").innerText = score;
    attempts = 3;
    document.getElementById("attempts").innerText = attempts;
    currentQuestionIndex++;
    document.getElementById("answerInput").value = "";
    showQuestion();
  } else {
    attempts--;
    if (attempts <= 0) {
      alert("К сожалению, вы проиграли. Попробуйте снова!");
      document.getElementById("quiz").style.display = "none";
      document.getElementById("startScreen").style.display = "block";
      currentQuestionIndex = 0;
      score = 0;
      attempts = 3;
      document.getElementById("score").innerText = score;
      document.getElementById("attempts").innerText = attempts;
    } else {
      document.getElementById("attempts").innerText = attempts;
      document.getElementById("answerInput").value = "";
    }
  }
}
