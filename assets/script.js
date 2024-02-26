// document elements 
var scoresEL = document.querySelector("#view-scores");
var timerEL = document.querySelector("#timer");
var startbtn = document.querySelector("#start-button");
var questionsEL = document.querySelector("#questions");
var choices =document.querySelector("#answeropts");
var nameEL = document.querySelector("#name");
var submitbtn = document.querySelector("#submit-score");
var feedbackEl= document.querySelector("#feedback");
var restartbtn = document.querySelector("#restart");


// array with question prompts, options and answer
var questprompts = [
    //0
    {   
        prompt:"Inside which HTML do we put the Javasript?",
        options:["<javascript>", "<js>", "<script>","<link>"],
        answer:"<script>"
    },
    //1
    {
        prompt:"How do you write an alert?",
        options:["msg();", "prompt();", "alertbox();","alert();"],
        answer:"alert();"
    },
    //2
    {
        prompt:"How do you write a function in Javasript?",
        options:["function:name()", "function name()", "function = name()","function[name]()"],
        answer:"function name()"
    },
    //3
    {
        prompt:"Which of the following are Data types?",
        options:["Booleans", "Numbers", "Strings","All of the Above"],
        answer:"All of the Above"
    },
    //6
    {
    
        prompt:"What is event delagation ?",
        options:["Apply event to child via its parent", "Apply event to parent via its child", "Apply event to button via HTML"],
        answer:"function name()"
    }
    ];

// start quiz after start button is clicked
startbtn.addEventListener('click', );