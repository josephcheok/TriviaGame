//Initial values
var count = 25;
var current = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;
var intervalID;

// Start a timer for user to respond to question
function stop() {
  clearInterval(intervalID);
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
  count = 25;
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
