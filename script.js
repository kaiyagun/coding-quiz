

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

//title card vars
var titleContainer = document.querySelector(".card");
var startButton = document.body.querySelector(".card__start");

//question 1 vars
// var firstQuestion = document.querySelector("questions");
var questionCard = document.querySelector(".questions");
var nextQuestion = document.querySelector(".question__button");

var timer = document.body.querySelector(".nav__timer");
var secondsLeft = 120;


//other questions will be used later lol
// var secondQuestion = document.querySelector("#second-question");
// var thirdQuestion = document.querySelector("#third-question");
// var fourthQuestion = document.querySelector("#fourth-question");

var answers = [];


timer.textContent = "Time: " + secondsLeft;

// console.log(startButton);
startButton.addEventListener("click", startQuiz)

document.getElementById("questions").style.display = "none";

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
    
    document.getElementById("questions").style.display = "block";

    var selectList = document.createElement("select");
    selectList.id = "questionOne";
    questionCard.appendChild(selectList);

    for (var i = 0; i < questions.length; i++) {
        var option = document.createElement("option");
        option.value = questions[0] ['choices'][i];
        option.text = questions[0]['choices'][i];
        selectList.appendChild(option);
    }
    
    
}

// nextQuestion.addEventListener("click", answerQuestion())

// function answerQuestion() {
    // var correct = document.getElementById("question-one-correct")
    
    

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


nextQuestion.addEventListener("click", function(event) {
    event.preventDefault();

    console.log(questions[0]['answer']);

});


