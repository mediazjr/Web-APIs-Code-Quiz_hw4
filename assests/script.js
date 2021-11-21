// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// questions array of objects with each question, its options, and answers
var questions = [

    {
        question: "Which of these can be stored in an Array?",
        options: ["numbers", "booleans", "strings", "all of the above"],
        answer: "all of the above"

    },

    {
        question: "What is the best Method for debugging syntax errors in code?",
        options: ["console.log()", "git pull", "function ()", "for loop"],
        answer: "console.log()"

    },

    {
        question: "What are the most common declared Javascript variables?",
        options: ["var", "let", "const", "all of the above"],
        answer: "all of the above"

    },

    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    },

    {
        question: "The condition in an if / else statement is enclosed within ____. ",
        options: ["quotes", "curley brackets", "square brackets", "parenthesis"],
        answer: "quotes"

    }

];

// variables for timer and to render questions upon button click
var timeLeft = document.querySelector("#timeLeft");
var container = document.querySelector("#container");
var questionsDiv = document.querySelector("#question-div");
var timer = document.querySelector("#startTimer");

var ulNew = document.createElement("ul");



var timerHold = 0;
var secondsLeft = 76;
var wrongPenalty = 15;
var questionsArray = 0;
var score = 0;




// start button add event listener that displays countdown timer
timer.addEventListener("click", function() {
    if (timerHold === 0) {
        timerHold = setInterval(function() {
            // countdown from 76
            secondsLeft--;
            timeLeft.textContent = "Seconds remaining: " + secondsLeft;

            // call game over function if clock equals zero
            if (secondsLeft <= 0) {
                gameOver();
            }
        }, 1000);
    }
    // call questions array function
    render(questionsArray);
});

// render questions array function to display questions

function render(questionsArray) {
    questionsDiv.innerHTML = "";
    ulNew.innerHTML = "";
    //get rid of start button;
    timer.style.display = "none";

    // loop through array
    for (var i = 0; i < questions.length; i++) {
        var shownQuestion = questions[questionsArray].question;
        var showAnswers = questions[questionsArray].options;
        questionsDiv.textContent = shownQuestion
    };
    // question options
    showAnswers.forEach(function(newLi) {
        var listItem = document.createElement("li");
        listItem.textContent = newLi;
        questionsDiv.appendChild(ulNew);
        ulNew.appendChild(listItem);

    })


}

// // game over function

function gameOver() {
    clearInterval(timerHold)
    timeLeft.textContent = "GAME OVER!";


}


// // game start function

// function startQuiz()


// //  correct answer function

// function correct()


// // wrong answer function 

// function incorrect()


// function to save score to local storage




// function to clear score 


// function to reset/play again