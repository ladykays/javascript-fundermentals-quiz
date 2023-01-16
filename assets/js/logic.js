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
var correctSound = new Audio("assets/sfx/correct.wav");
var incorrectSound = new Audio("assets/sfx/incorrect.wav");

// Shuffle the questions so they show in random order
var shuffledQuestions = questions.sort(function() {
  return 0.5 - Math.random();
});


//Event Listners
startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", function(){
  if(initialsInput.value){
    saveScore();
  }else{
    alert('Enter your initials to save your score');
  }
});

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
    choiceBtn.style.width = "50%"; // so all the buttons attached to a question have the same width
    choiceBtn.textContent = currentQuestion.choices[i];
    choiceBtn.addEventListener("click", function() { // Add a click event listner to button
      if (currentQuestion.choices[i] === currentQuestion.answer) {
        score += 10;
        correctSound.play();
        feedback.textContent = "Correct!";
        feedback.setAttribute("class", "feedback show correct");
        // Hide feedback after 1 second
        setTimeout(function() {
          feedback.setAttribute("class", "feedback hide");
        }, 1000);
      } else {
        wrong++;
        incorrectSound.play();
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


// Function endQuiz starts
function endQuiz() {
  questionsContainer.classList.add("hide");
  endScreen.classList.remove("hide");
  finalScore.textContent = score;
}

// Function saveScore starts
function saveScore() {
  var initials = initialsInput.value;
  var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  var newScore = { initials: initials, score: score };
  highscores.push(newScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  window.location.href = "highscores.html";
}