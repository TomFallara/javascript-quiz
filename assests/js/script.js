

//Random Game Requirements
var isDone = "false";
var score = 0;
var startButton = document.querySelector(".start-button");
var quizCardEl = document.querySelector(".quiz-card");
var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var chosenAnswer = "";
var questionEl = document.querySelector("#question");;
var passFail = document.querySelector('#passFail');
var finalScore = document.querySelector(".grade-card");
var scoreReveal = document.getElementById('score-bar')

//hide elements that aren't needed at start
finalScore.setAttribute("style", "visibility: hidden")
quizCardEl.setAttribute("style", "visibility: hidden");

//Timer niceities
var timerElement = document.querySelector(".timer-count")
var timer;
var timerCount = 35;

//Questions Content
var question1 = {
    text: "How many ways can you declare a variable?",
    answerA: "A. You don't declare varaibles",
    answerB: "B. 4",
    answerC: "C. Just one",
    answerD: "D. 2",
    correctAnswer: "d",
};

var question2 = {
    text: "What kind of tag do you use to link a javascript page?",
    answerA: "A. <div>",
    answerB: "B. <src>",
    answerC: "C. <link>",
    answerD: "D. <p>",
    correctAnswer: "b"
};

var question3 = {
    text: "How dp you target elements by id?",
    answerA: "A. getElementById",
    answerB: "B. onclick",
    answerC: "C. querySelectorAll",
    answerD: "D. querySelector()",
    correctAnswer: "a"
};

var question4 = {
    text: "Where can you not declare a variable",
    answerA: "A. Globally",
    answerB: "B. As an Object",
    answerC: "C. Within an array",
    answerD: "D. Within a function",
    correctAnswer: "c"
};

var question5 = {
    text: "Which of these is not a normal data type?",
    answerA: "A. Boolean",
    answerB: "B. Confirm",
    answerC: "C. String",
    answerD: "D. Symbol",
    correctAnswer: "b"
};

var question6 = {
    text: "A function is enclosed in what kind of brackets?",
    answerA: "A. []",
    answerB: "B. ||",
    answerC: "C. ()",
    answerD: "D. {}",
    correctAnswer: "d"
};

var question7 = {
    text: "This will iterate through a function over a given range.",
    answerA: "A. for",
    answerB: "B. if",
    answerC: "C. function",
    answerD: "D. break",
    correctAnswer: "a"
};

var x = 0

questionArray = [question1, question2, question3, question4, question5, question6, question7]
console.log(questionArray[0])

//Timer
var startTimer = function () {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timer >= 0) {
            if (isDone === true) {
                clearInterval(timer);
            }
        }

        if (timerCount === 0) {
            clearInterval(timer);
            endQuiz()
        }

    }, 1000)
}

//Quiz proper

//Question content updating function
function fillQuestion(num) {
    questionEl.textContent = questionArray[num].text;
    buttonA.textContent = questionArray[num].answerA;
    buttonB.textContent = questionArray[num].answerB;
    buttonC.textContent = questionArray[num].answerC;
    buttonD.textContent = questionArray[num].answerD;
}
//End Quiz
  var endQuiz = function() {
       quizCardEl.setAttribute("style", "visibility: hidden");
       finalScore.setAttribute("style", "visibility: visible");
       scoreReveal.textContent = "Your score was " + score + "/7";
    }    

//Select Answer
function selectAnswer(event) {
    chosenAnswer = event.target.id
    if (chosenAnswer === questionArray[x].correctAnswer) {
        score++;
        console.log(score);
        passFail.innerHTML = "correct";
        x++;
    }
    
    else {
        timerCount -= 7;
        passFail.innerHTML = "wrong";
        x++;
    }
    
    if (x > questionArray.length-1) {
        isDone= true;
        endQuiz();
    }
    
    else {
        fillQuestion(x)
    }

}

//Quiz start
var startQuiz = function () {
    startButton.setAttribute("style", "visibility: hidden")
    quizCardEl.setAttribute("style", "visibility: visible");
    console.log("start game");
    startTimer();
    fillQuestion(x);
}



//On-click event listeners
startButton.addEventListener("click", startQuiz)
buttonA.addEventListener("click", selectAnswer)
buttonB.addEventListener("click", selectAnswer)
buttonC.addEventListener("click", selectAnswer)
buttonD.addEventListener("click", selectAnswer)