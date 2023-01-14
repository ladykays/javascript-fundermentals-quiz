// Variable declarations
var time = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsContainer = document.querySelector("#questions");
var questionEl = document.querySelector("#question-title")
var choices = document.querySelector("#choices");
var response = document.querySelector(".option")



var currentQuestionIndex = 0;
// Shuffle the questions so they show in random order
var shuffledQuestions = questions.sort(function() {
  return 0.5 - Math.random();
});


//Event Listners
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



// Function for showQuestions starts 
function showQuestion() {
  // Clear any previous options
  choices.innerHTML = "";

  // Get current question
  var currentQuestion = shuffledQuestions[currentQuestionIndex];

  // Update question title
  questionEl.textContent = currentQuestion.question;

  // Loop through choices and create buttons
  for (var j = 0; j < currentQuestion.choices.length; j++) {
    var optionsButton = document.createElement("button"); // Creates button
    optionsButton.textContent = currentQuestion.choices[j];
    choices.appendChild(optionsButton); // Append new button to choices
    optionsButton.setAttribute("class", "option"); // Adds a class to the option button
    optionsButton.addEventListener("click", function() {
      checkAnswer(event, currentQuestionIndex)
    });
  }
} // Function for showQuestions ends


// Function for checkAnswer starts 
function checkAnswer(event, index) {
  response = event.target.textContent; //set value of response to the the text content of the button clicked
  if (response === shuffledQuestions[index].answer) {
    console.log("correct");
  } else {
    console.log("opps!");
  }
  currentQuestionIndex++;
  showQuestion();
} // Function for checkAnswer ends

