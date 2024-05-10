// document elements 
let scoresBtn = document.querySelector("#view-scores-btn");
let timer = document.querySelector("#timer");
let startBtn = document.querySelector("#start-button");
let questions = document.querySelector("#questions");
let answerOpts = document.querySelector("#answeropts");
let personName = document.querySelector("#name");
let submitBtn = document.querySelector("#submit-score");
let feedback = document.querySelector("#feedback");
let restartBtn = document.querySelector("#restart");
let startScreen = document.querySelector("#start-page")
let questionWords = document.querySelector("#questions-prompts");
let endScreen = document.querySelector("#end");
let finalScore = document.querySelector("#final-score");
let leaderBoard = document.querySelector("#leaderboard");
let timerStart = '';
let questionIndex = 0;

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

        prompt: "What is event delgation ?",
        options: ["Apply event to child via its parent", "Apply event to parent via its child", "Apply event to button via HTML"],
        answer: "function name()"
    }
];

let timeClock = questprompts.length * 12



// start quiz after start button is clicked
startBtn.addEventListener('click', function () {
    timerStart = setInterval(timeClick, 1000);
    questions.classList.remove("hide");
    startScreen.classList.add("hide");
    showQuestions();
});

function timeClick() {
    timeClock --;// timer decrement
    timer.textContent = timeClock;// the amount of time shown on the timer element
    if (timeClock <= 0){
        end();
    }
}


// fucntion to show the questions and the answer choices
function showQuestions() {
    let prompts = questprompts[questionIndex];
    questionWords.textContent = prompts.prompt;
    answerOpts.innerHTML = "";
    // for loop to get the answer choices
    for (var i = 0; i < prompts.options.length; i++) {
        let answerBtn = document.createElement("button");// creates a button for each answer choice
        let choices = prompts.options[i];
        answerBtn.setAttribute("value", choices);// sets the correct answers choice
        answerBtn.textContent = i + 1 + "." + choices;
        answerOpts.appendChild(answerBtn);
        answerBtn.addEventListener('click', answerClick);
    }
}
// function to make the answers clickable and check if the user choice is correct
function answerClick() {
    // if statement checks if the user choice is correct if not it takes away 10 secs and gives feedback.
    if (this.value !== questprompts[questionIndex].answer) {
        timeClock -= 10;
        if (timeClock < 0) {
            timeClock = 0;
        }
        timer.textContent = timeClock;
        
        feedback.innerHTML = "Wrong!";
    } else {
        
        feedback.innerHTML = "Correct!";
    }
    // shows the feedback
    feedback.classList.remove("hide"); 
    // hides the feedback after it apppears;
    setTimeout(function(){ feedback.classList.add("hide");},500)
    // increments the questionindex by1
    questionIndex++;
    if (questionIndex === questprompts.length){
        end();
    } else {showQuestions()}// if there are still questions it will show the next question in the object.

}
// this function is to end the quiz and stop the time to give the score after the quiz ends
function end (){
    questions.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.innerHTML = timeClock;
    clearInterval(timerStart);
}

// to unhide the leader board section

submitBtn.addEventListener('click', function() {
    endScreen.classList.add("hide")
    leaderBoard.classList.remove("hide");
   //stores scores and renders them
    storeScores();
    renderScores();
})

// show the leaderboard section and time left when leaving during the quiz
scoresBtn.addEventListener('click', function(){
    clearInterval(timerStart);
    startScreen.classList.add("hide")
    endScreen.classList.add("hide")
    questions.classList.add("hide");
    leaderBoard.classList.remove("hide")
    renderScores();
})

// event listener to show the start-page and timer at zero from the leaderboard section
restartBtn.addEventListener('click', function(){
    timer.textContent = 0;
    startScreen.classList.remove("hide");
    endScreen.classList.add("hide");
    questions.classList.add("hide");
    leaderBoard.classList.add("hide");
    location.reload();
    
});

let leaderScore = [];
//renders the scores in leaderboard
function renderScores() {
    let highscores = document.querySelector("#highscores") ;
    highscores.innerHTML = "";

    for(i=0; i < leaderScore.length; i++){
        let score = leaderScore[i];

        let scoreList = document.createElement('li')
        scoreList.textContent = score.name +" "+score.score;
        scoreList.dataset.index = i;

        highscores.appendChild(scoreList);
    }
}
//gets scores from the localstorage
function storedScores(){
    let savedScores = JSON.parse(window.localStorage.getItem("scores"));

    if (savedScores !== null){
        leaderScore = savedScores;
    }
    //helper function to load scores on the HTML
    renderScores();
}
// stores scores in local storage.
function storeScores(){
     let highscores = document.querySelector("#highscores") ;
    let playerName = personName.value.trim();
    if (playerName !== null){
       let newScore = {name: playerName, score: timeClock};
        leaderScore.push(newScore);
    }
    alert("Your score was submitted!")

    
    localStorage.setItem("scores", JSON.stringify(leaderScore));
}
// load the storedScores function on window load
storedScores();