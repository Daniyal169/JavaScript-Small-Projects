const questionsArr = [
  {
    question: "Number 1 ODI Batsman in world ?",
    answers: [
      { text: "Babar Azam", correct: true },
      { text: "Virat Kohli", correct: false },
      { text: "Fakhar Zaman", correct: false },
      { text: "Rohit Sharma", correct: false }
    ]
  },
  {
    question: "Best Number in World ",
    answers: [
      { text: "56", correct: false },
      { text: "20", correct: true },
      { text: "18", correct: false },
      { text: "39", correct: false }
    ]
  },
  {
    question: "Babar Azam score against India in t20wc 21",
    answers: [
      { text: "59*", correct: false },
      { text: "68*", correct: true },
      { text: "79*", correct: false },
      { text: "26*", correct: false }
    ]
  },
  {
    question: "Virat Kohli score against Pakistan in t20wc 22",
    answers: [
      { text: "18*", correct: false },
      { text: "47*", correct: false },
      { text: "82*", correct: true },
      { text: "35", correct: false }
    ]
  }
];

const questionBtn = document.getElementById("question");
const answersBtn = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionInd = 0;
let score = 0;

startQuiz = () => {
  currentQuestionInd = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}


// displaying questions and options
const showQuestion = () => {
  resetState();
  let currentQuestion = questionsArr[currentQuestionInd];
  let questionNum = currentQuestionInd + 1;
  questionBtn.innerHTML = questionNum + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(ans => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("btn");
    answersBtn.append(button);

    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

resetState = () => {
  nextBtn.style.display = "none";
  while (answersBtn.firstChild) {
    answersBtn.removeChild(answersBtn.firstChild);
  }
}

// for selecting answer
const selectAnswer = (e) => {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }

  Array.from(answersBtn.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });
  nextBtn.style.display = "block";
}

// show final score
showScore = () => {
  resetState();
  questionBtn.innerHTML = `Your scored ${score} out of ${questionsArr.length} !`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

// for next question
handleNextButton = () => {
  currentQuestionInd++;
  if (currentQuestionInd < questionsArr.length) {
    showQuestion()
  } else {
    showScore()
  }
}


nextBtn.addEventListener("click", () => {
  if (currentQuestionInd < questionsArr.length) {
    handleNextButton()
  } else {
    startQuiz()
  }
});

startQuiz();
