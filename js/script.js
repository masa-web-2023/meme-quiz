let questions = [
  { image: "./img/dobermango.jpg", answer: "доберманго" },
  { image: "./img/alpapka.jpg", answer: "альпапка" },
  { image: "./img/bekon.jpg", answer: "беконь" },
  { image: "./img/eskimops.jpg", answer: "эскимопс" },
  { image: "./img/kolbasulya.jpg", answer: "колбасуля" },
  { image: "./img/kotleta.jpg", answer: "котлета" },
  { image: "./img/somolet.jpg", answer: "сомолет" },
  { image: "./img/tigrusha.jpg", answer: "тигруша" },
  { image: "./img/tiramisu.jpg", answer: "тирамисуслик" },
];

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  attempts = 3;
  console.log("Reset Quiz: ", attempts); // для отладки
  document.getElementById("score").innerText = score;
  document.getElementById("attempts").innerText = attempts;
}

document
  .querySelector(".startScreen-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      startQuiz();
    }
  });

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  attempts = 3;
  console.log("Start Quiz: ", attempts); // для отладки
  document.getElementById("startScreen").style.display = "none";
  document.querySelector(".footer").style.display = "none";
  document.getElementById("quiz").style.display = "flex";
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
    attempts = 3;
    document.getElementById("attempts").innerText = attempts;
    currentQuestionIndex += 1;
    document.getElementById("answerInput").value = "";
    showQuestion();
  } else {
    attempts -= 1;
    document.querySelector(".quiz-score").classList.add("shake");
    setTimeout(() => {
      document.querySelector(".quiz-score").classList.remove("shake");
    }, 1000);
    if (attempts <= 0) {
      resetQuiz();
      alert(`Викторина окончена! Ваш счет: ${score}`);
      document.getElementById("quiz").style.display = "none";
      document.getElementById("startScreen").style.display = "flex";
      document.querySelector(".footer").style.display = "flex";
    } else {
      document.getElementById("attempts").innerText = attempts;
      document.getElementById("answerInput").value = "";
    }
  }
}
