// document.body.addEventListener("click", function() {
//     console.log("hello world")

// })
/* TODO: add timer that stops quiz at 0
TODO: best scores page in lcal storage
TODO: add css to make pages dissappear when answer chosen
TODO: add reset button maybe*/



//press start button
//first question card appears
//timer starts
//select an answer
//click next question button
var titleContainer = document.querySelector(".card");

var questionContainer = document.querySelector(".question-card");

var startButton = document.body.querySelector(".card__start");

var timer = document.body.querySelector(".nav__timer");

var secondsLeft = 120;

var questionCard = document.getElementById("question__card-1");

var nextQuestion = document.querySelector(".question__button");

timer.textContent = "Time: " + secondsLeft;

// console.log(startButton);
startButton.addEventListener("click", startQuiz)

document.getElementById("question__card-1").style.display = "none";

var questions = [
  {
    question: "what's the capital of sweden?",
    choices: ["texas", "blank", "random", "italy"],
    answer: "blank",
  },
  {
    question: "what's the capital of germany?",
    choices: ["texas", "blank", "random", "italy"],
    answer: "blank",
  },
  {
    question: "what's the capital of denmark?",
    choices: ["texas", "blank", "random", "italy"],
    answer: "blank",
  },
];

//create quiz container

function startQuiz() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
    }, 1000);

    showQuestion();

}

function showQuestion(){

    console.log("whats up");
    
    questionCard.style.display = "block";
}


nextQuestion.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("booyeah");
})
