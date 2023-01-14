// Question pool for the quiz game
var questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<scripting>", "<javascript>", "<js>", "<script>",],
    answer: "<script>",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> section", "The <body> section", "Both the <head> section and the <body> section","The <title> section",],
    answer: "Both the <head> section and the <body> section",
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choices: ["<script name = 'xxx.js'>", "<script href = 'xxx.js'>","<script src = 'xxx.js'>",],
    answer: "<script src = 'xxx.js'>",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False",],
    answer: "True",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');",],
    answer: "alert('Hello World');",
  },
];

//Stores how many questions the user got right
var score = 0;


