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

    }

    {
        question: "What is the best Method for debugging syntax errors in code?",
        options: ["console.log()", "git pull", "function ()", "for loop"],
        answer: "console.log()"

    }

    {
        question: "What are the most common declared Javascript variables?",
        options: ["var", "let", "const", "all of the above"],
        answer: "all of the above"

    }

    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"

    }

    {
        question: "The condition in an if / else statement is enclosed within ____. ",
        options: ["quotes", "curley brackets", "square brackets", "parenthesis"],
        answer: "quotes"

    }

];

// variables for timer
var timeLeft = document.querySelector("#timeLeft");
var timer = document.querySelector("startTimer")


// start button add event listener