let questions = [
  { image: "./img/dobermango.jpg", answer: "доберманго", animal: "доберман" },
  { image: "./img/alpapka.jpg", answer: "альпапка", animal: "альпака" },
  { image: "./img/bekon.jpg", answer: "беконь", animal: "конь" },
  { image: "./img/eskimops.jpg", answer: "эскимопс", animal: "мопс" },
  { image: "./img/kolbasulya.jpg", answer: "колбасуля", animal: "косуля" },
  { image: "./img/kotleta.jpg", answer: "котлета", animal: "кот" },
  { image: "./img/somolet.jpg", answer: "сомолет", animal: "сом" },
  { image: "./img/tigrusha.jpg", answer: "тигруша", animal: "тигр" },
  { image: "./img/tiramisu.jpg", answer: "тирамисуслик", animal: "суслик" },
];

function showHint() {
  let animalHint = questions[currentQuestionIndex].animal;
  document.getElementById("hintText").textContent = `Животное на картинке это ${animalHint}`;
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  attempts = 3;
  console.log("Reset Quiz: ", attempts); // для отладки
  document.getElementById("score").innerText = score;
  document.getElementById("attempts").innerText = attempts;
}

document.querySelector(".startScreen-input").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    startQuiz();
  }
});

document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".startScreen-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      startQuiz();
    }
  });
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
  let answerInput = document.getElementById("answerInput");

  answerInput.removeEventListener("keydown", enterListener);
  answerInput.addEventListener("keydown", enterListener);
}

function enterListener(event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
}

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("questionImage").src = questions[currentQuestionIndex].image;

    document.getElementById("hintText").textContent = "";
  } else {
    alert(`Викторина окончена! Ваш счет: ${score}`);
    document.getElementById("quiz").style.display = "none";
    document.getElementById("startScreen").style.display = "flex";
    resetQuiz();
  }
}

function checkAnswer() {
  let userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
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
