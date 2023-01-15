// Get the highscores list element
var highScoresList = document.querySelector("#highscores");

// Get the highscores from local storage and assign it to highscore
var highscores = JSON.parse(localStorage.getItem("highscores")) || []; //get the highsore from localStorage as an object. if no highsoore is found, assign an empty array to highscore 

// Sort the highscores in descending order
highscores.sort(function(a, b) {
  return b.score - a.score;
});


// Loop through the highscores and create list items for each score
highscores.forEach(function(score, index) {
  var li = document.createElement("li");
  li.textContent = score.initials + " - " + score.score;
  highScoresList.appendChild(li);
});

var clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", clearScores);

function clearScores(){
  localStorage.removeItem("highscores");
  window.location.reload();
}