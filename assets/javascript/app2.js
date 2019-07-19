//Initial values
var count = 5;
var current = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;
var intervalID;


// Function that renders the next question when time left = 0
function next() {
  const exhausted = (quizzes.length - 1) === current;
  if (exhausted) {results()};
  
    current++;
  renderQuestion();
}

// Start a timer for user to respond to question
function stop() {
  clearInterval(intervalID);
  unanswered++;
  next();
}

function decrement() {
  count--;
  $("#timeleft").html(count);
  if (count === 0) {
    stop();
  }
}

//Display the question and choices to the browser

function renderQuestion() {
  count = 5;
  intervalID = setInterval(decrement, 1000);

  const question = quizzes[current].question;
  const choices = quizzes[current].choices;
  $("#timeleft").html(count);
  $("#game").html(`<h4>${question}</h4> ${renderChoices(choices)}`);
}

function renderChoices(choices) {
  var option = "";
  for (var i = 0; i < choices.length; i++) {
    option += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
  } // with every loop, option gets appended instead of replaced
  return option;
}

renderQuestion();

//Either right or wrong question selected, go to next question

$(document).on("click",".choice",function())
