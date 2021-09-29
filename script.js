
var answerButtonOne = document.body.querySelector(".answer-button-one");
var answerButtonTwo = document.body.querySelector(".answer-button-two");
var answerButtonThree = document.body.querySelector(".answer-button-three");
var answerButtonFour = document.body.querySelector(".answer-button-four");
var timer = document.body.querySelector(".nav__timer");
var secondsLeft = 120;
var startButton = document.querySelector(".start-button");
var scoreCount = document.querySelector(".scoreboard");
var score = 0;

scoreCount.textContent = "Score: " + score;

timer.textContent = "Time: " + secondsLeft;

startButton.addEventListener("click", startTimer);

document.querySelector(".first").style.display = "none";
document.querySelector(".second").style.display = "none";
document.querySelector(".third").style.display = "none";
document.querySelector(".fourth").style.display = "none";

function startTimer() {
    document.querySelector(".first").style.display = "block";
    document.querySelector(".title-page").style.display = "none";
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
        }
    }, 1000);
      
}

document.addEventListener('click', e => {
  if (e.target.matches('one')) {
    console.log("hiiii")
  }
});

// function clickAnswerOne() {
//     document.querySelector(".first").style.display = "none";
//     document.querySelector(".second").style.display = "block";

//     if(document.getElementsByClassName("answer-button-one").value == "correct") {
//       console.log("cool");
//     };
//   };