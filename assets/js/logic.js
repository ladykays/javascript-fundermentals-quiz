// Variable declarations
var time = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsContainer = document.querySelector("#questions");
var questionEl = document.querySelector("#question-title")
var choices = document.querySelector("#choices");



var currentQuestionIndex = 0;
// Shuffle the questions so they show in random order
var shuffledQuestions = questions.sort(function() {
  return 0.5 - Math.random();
});


// A start button that when clicked the timer starts
startButton.addEventListener("click", startGame);


// Function to start game starts here
function startGame() {
  questionsContainer.setAttribute("class", "show"); // Show question screen
  startScreen.classList.add("hide"); // Hide start screen
  countdown(); // start countdown
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  currentQuestionIndex++;
}// Function to start game ends here



// Function for countdown timer starts here
function countdown() {
  var timeLeft = 90; //set 90 second timer

  var timeInterval = setInterval(function () {
    if (timeLeft >= 1) {
      time.textContent = timeLeft;
      timeLeft--;
    } else {
      time.textContent = 0;
      clearInterval(timeInterval);
      //displayResult();
    }
  }, 1000); // timer set for 1 second interval 
}// Function for countdown timer ends


function showQuestion(i) {
  //console.log(questions[i]);
  questionEl.textContent = JSON.stringify(shuffledQuestions[currentQuestionIndex].question);

  for (var j = 0; j < shuffledQuestions[currentQuestionIndex].choices.length; j++) {
    //console.log(shuffledQuestions[currentQuestionIndex].choices[j])
    var optionsButton = document.createElement("button"); // Creates button
    optionsButton.textContent = shuffledQuestions[currentQuestionIndex].choices[j];
    choices.appendChild(optionsButton); // Append new button to choices
  }
  currentQuestionIndex++;
}


