// document elements 
let scores = document.querySelector("#view-scores");
let timer = document.querySelector("#timer");
let startbtn = document.querySelector("#start-button");
let questions = document.querySelector("#questions");
let answerOpts = document.querySelector("#answeropts");
let name = document.querySelector("#name");
let submitbtn = document.querySelector("#submit-score");
let feedback = document.querySelector("#feedback");
let restartbtn = document.querySelector("#restart");
let startscreen = document.querySelector("#start-page")
let questionWords = document.querySelector("#questions-prompts");
let questionIndex = 0;
let timerStart = '';


// array with question prompts, options and answer as and object
const questprompts = [
    //0
    {
        prompt: "Inside which HTML do we put the Javasript?",
        options: ["<javascript>", "<js>", "<script>", "<link>"],
        answer: "<script>"
    },
    //1
    {
        prompt: "How do you write an alert?",
        options: ["msg();", "prompt();", "alertbox();", "alert();"],
        answer: "alert();"
    },
    //2
    {
        prompt: "How do you write a function in Javasript?",
        options: ["function:name()", "function name()", "function = name()", "function[name]()"],
        answer: "function name()"
    },
    //3
    {
        prompt: "Which of the following are Data types?",
        options: ["Booleans", "Numbers", "Strings", "All of the Above"],
        answer: "All of the Above"
    },
    //6
    {

        prompt: "What is event delagation ?",
        options: ["Apply event to child via its parent", "Apply event to parent via its child", "Apply event to button via HTML"],
        answer: "function name()"
    }
];

// start quiz after start button is clicked
startbtn.addEventListener('click', function () {
    timerStart = setInterval(60*1000);
    questions.classList.remove("hide");
    startscreen.classList.add("hide");
    showquestions();
});


// fucntion to show the questions and the answer choices
function showquestions() {
    let prompts = questprompts[questionIndex];
    questionWords.textContent = prompts.prompt;
    answerOpts.innerHTML = "";
    // for loop to get the answer choices
    for (var i = 0; i < prompts.options.length; i++) {
        let answerBtn = document.createElement("button");
        let choices = prompts.options[i];        
        answerBtn.setAttribute("value", choices);
        answerBtn.textContent = i + 1 + "." + choices;
        answerOpts.appendChild(answerBtn);
    }
}
