
// javascript for leaderbaord


// document elements 
var scorebtn = document.querySelector("#view-scores");

// to store past scores on leaderboard
function printscores() {
    let highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];highscores.sort(function (a, b) {return b.score - a.score;});
    highscores.forEach(function ( score) {
        let liTag = document.createElement("li");
        liTag.textContent =score.name +" - " + score.score;
        let olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);});
}

// actives the clear button when user wants to clear scores
function clearHighscores() {
    window.localStorage.removeItem("highscores");window.location.reload();
}

document.querySelector("#reset").addEventListener("click",clearHighscores,printscores);

printscores();