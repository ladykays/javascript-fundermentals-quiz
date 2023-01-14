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
    question: "Arrays in JavaScript are defined by which of the following statements?",
    choices: ["It is an ordered list of values", "It is an ordered list of objects","It is an ordered list of string","It is an ordered list of functions",],
    answer: "It is an ordered list of values",
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    choices: ["True", "False",],
    answer: "False",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');",],
    answer: "alert('Hello World');",
  },
];

//Stores how many questions the user got right
var score = 0;


