

//Random Game Requirements
var isDone
var startButton = document.querySelector(".start-button")

//Timer niceities
var timerElement = document.querySelector(".timer-count")
var timer;
var timerCount;

//Questions Content
var question1 = {
    question: "What is Camelot?",
    answerA: "A sword",
    answerB: "A knight",
    answerC: "A tank",
    answerD: "A castle",
    correctAnswer: "D",
}

var question2 = {
    question: "Who is Lancelot?",
    answerA: "A baker",
    answerB: "One of King Arthur's Knights",
    answerC: "A coding language",
    answerD: "A blacksmith",
    correctAnswer: "B",
}

var question3 = {
    question: "What is the Capital of Assyria?",
    answerA: "Assur",
    answerB: "Ur",
    answerC: "Babylon",
    answerD: "Why are you asking me this?",
    correctAnswer: "A"
}

var question4 = {
    question: "What is air-speed velocity of an unladen swallow?",
    answerA: "Roughly 30ft/sec",
    answerB: "Between 0 and 1",
    answerC: "4",
    answerD: "What kind of swallow?",
    correctAnswer: "D"
}

var startTimer = function() {
    timer = setInterval(function(){
        timerCount--;
        timerElement.textContent = timerCount;

       if(timer >= 0) {
         if (isDone === true){
            clearInterval(timer)
            endQuiz()
         }
       }

    if(timerCount === 0 ) {
      clearInterval(timer)
      endQuiz()
    }

 },  1000)
}










startButton.addEventListener("click", startGame)