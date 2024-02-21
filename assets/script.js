/// main javasript for quiz


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

var time = questprompts.length * 10;// add 50 secs to the timer
var questnumb = 0;// used to access the array
var timerid;
    
// Start button and bring up question prompts and hides frontpage
function quizstart() {
    timerid = setInterval(timeend, 1000);//sets the timer interval
    timerEL.textContent= time;// adds value to time.
    var startpage = document.querySelector("#start-page");
    startpage.setAttribute("class","hide");
    questionsEL.setAttribute("class","visible");
    showquest();
}


// function to get questions from questprompt object
function showquest() {
    var questtext = questprompts[questnumb];// get the prompts from array
	var promptEl = document.querySelector("#questions-prompts");
	promptEl.textContent = questtext.prompt;
	choices.innerHTML = "";

	questtext.options.forEach(
		function (option, i) {
			var choiceBtn =
				document.createElement("button");
			choiceBtn.setAttribute("value",option);
			choiceBtn.textContent =
				i + 1 + ". " + option;
			choiceBtn.addEventListener('click', optionclick);
			choices.appendChild(choiceBtn);
		}
	);
}
// when presssing the answer options
function optionclick() {
	if (this.value !==questprompts[questnumb].answer) {
		time -= 10;
		if (time < 0) {time = 0;}
		timerEL.textContent = time;
		feedbackEl.textContent = "Wrong!";
	} else {
		feedbackEl.textContent ="Correct!";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 1000);
	questnumb++;
	if (questnumb === questprompts.length) {quizfinished();} 
    else {
		showquest();
	}
}

// Timer amount and stops when time runs out
function timeend(){
    time--; // timer decrements
    timerEL.textContent = time;// adds the 60 to the timer
    if (time <= 0) { 
        quizfinished();// if the timer is equal or greater than to zero call quiz finished function.
    } 
}
// quiz ends when timer is down to 0 
function quizfinished (){
    clearInterval(timerid);// clears the timer 
    var endquiz = document.querySelector("#end");// selects the end element from HTML
    endquiz.removeAttribute("class");//removes the hide classs
    var finalscore = document.querySelector("#final-score"); //selects the final score element by the id 
    finalscore.textContent = time;// the score is the time left.
    questionsEL.setAttribute("class", "hide");// hides the questions
}

// save to local storage score and initals
function saveinfo() {
    var name = nameEL.value.trim()// gets the name input value an trims
    if (name !== "") {
        var highscore = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newscore = {
            score: time,
            name: name,
        };
    }
    highscore.push(newscore);
    window.localStorage.setItem("highscores", JSON.stringify(highscore));
}


// saves the scores and user info
submitbtn.addEventListener('click', saveinfo);

// start quiz after start button is clicked
startbtn.addEventListener('click', quizstart);