// Declearing and initializing global variables
var time = document.querySelector("#time");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsContainer = document.querySelector("#questions");
var questionEl = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var finalScore = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var feedback = document.querySelector("#feedback");

var score = 0;
var wrong = 0;
var timeLeft = 90; //set 90 second timer
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
  showQuestion();
}



// Function for countdown timer starts here
function countdown() {
  var timeInterval = setInterval(function() {
    if (timeLeft >= 1) {
      time.textContent = timeLeft;
      timeLeft--;
    } else {
      time.textContent = 0;
      clearInterval(timeInterval);
      endQuiz();
    }
  }, 1000); // timer set for 1 second interval 
}



// Function for showQuestions starts 
function showQuestion() {
  // Clear any previous options
  choices.innerHTML = "";

  // Get current question
  var currentQuestion = shuffledQuestions[currentQuestionIndex];

  // Update question title
  questionEl.textContent = currentQuestion.question;

  // Loop through choices and create buttons for each
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice"); // Give a classname of choice to the new button
    choiceBtn.setAttribute("value", currentQuestion.choices[i]);
    choiceBtn.textContent = currentQuestion.choices[i];
    choiceBtn.addEventListener("click", function() { // Add a click event listner to button
      if (currentQuestion.choices[i] === currentQuestion.answer) {
        score++;
        feedback.textContent = "Correct!";
        feedback.setAttribute("class", "feedback show correct");
        // Hide feedback after 1 second
        setTimeout(function() {
          feedback.setAttribute("class", "feedback hide");
        }, 1000);
      } else {
        wrong++;
        timeLeft = timeLeft - 10;
        feedback.textContent = "Wrong!";
        feedback.setAttribute("class", "feedback show wrong");
        setTimeout(function() {
          feedback.setAttribute("class", "feedback hide");
        }, 1000);
      }
      // Check if all questions have been answered or timer reaches 0
      currentQuestionIndex++;
      // Check if the currentQuestionIndex is equal to the length of the shufled questions
      if (currentQuestionIndex === shuffledQuestions.length) {
        endQuiz();
      } else {
        showQuestion();
      }
    });
    choices.appendChild(choiceBtn); // Append choiceBtn to the choices element
  }
}


// Function for checkAnswer starts 
function checkAnswer(event, index) {
  response = event.target.textContent; //set value of response to the the text content of the button clicked
  console.log(response);
  if (response === shuffledQuestions[index].answer) {
    console.log("correct");
  } else {
    console.log("opps!");
  }
  currentQuestionIndex++;
  showQuestion();
} // Function for checkAnswer ends


// Function for checkAnswer starts
function checkAnswer(event) {
  // Get the text of the button that was clicked
  var selectedOption = event.target.textContent;

  // Check if the answer is correct
  if (selectedOption === shuffledQuestions[currentQuestionIndex].answer) {
    // If correct, increase score
    score++;
    feedback.textContent = "Correct!";
    feedback.setAttribute("class", "feedback show");
  } else {
    // If incorrect, decrease time
    timeLeft -= 10;
    wrong++;
    feedback.textContent = "Incorrect. The correct answer was: " + shuffledQuestions[currentQuestionIndex].answer;
    feedback.setAttribute("class", "feedback show");
  }

  setTimeout(function() {
    feedback.setAttribute("class", "feedback hide");
  }, 1000);
    
  currentQuestionIndex++;
  if (currentQuestionIndex === shuffledQuestions.length) {
  endQuiz();
  } else {
  showQuestion();
  }
}

// Function for endQuiz starts
function endQuiz() {
  questionsContainer.setAttribute("class", "hide"); // Hide question screen
  endScreen.classList.remove("hide"); // Show end screen
  finalScore.textContent = score;
}