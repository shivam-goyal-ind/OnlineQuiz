let questions = [
    {
        prompt: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        prompt: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
        prompt: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
    },
    {
        prompt: "What is the capital of India?",
        options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
        answer: "Delhi",
    },
    {
        prompt: "What is the capital of UP?",
        options: ["Lucknow", "Ghaziabad", "Noida", "Kanpur"],
        answer: "Lucknow",
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const scoreContainer = document.getElementById("score-container");
const scoreText = document.getElementById("score-text");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.prompt;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("label");
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option}">
            ${option}
        `;
        optionsContainer.appendChild(optionElement);
    });

    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = currentQuestionIndex === questions.length - 1;
    submitButton.classList.toggle("hide", currentQuestionIndex < questions.length - 1);
}

function getSelectedAnswer() {
    const options = document.getElementsByName("option");
    for (let option of options) {
        if (option.checked) {
            return option.value;
        }
    }
    return null;
}

function checkAnswer() {
    const selectedAnswer = getSelectedAnswer();
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        score += 1;
    }
}

function nextQuestion() {
    checkAnswer();
    currentQuestionIndex++;
    displayQuestion();
}

function prevQuestion() {
    currentQuestionIndex--;
    displayQuestion();
}

function submitQuiz() {
    checkAnswer();
    const scorePercent = (score / questions.length) * 100;
    scoreText.textContent = `Your Score: ${scorePercent}%`;
    scoreContainer.classList.remove("hide");
    questionText.classList.add("hide");
    optionsContainer.classList.add("hide");
    prevButton.classList.add("hide");
    nextButton.classList.add("hide");
    submitButton.classList.add("hide");
}
displayQuestion();
