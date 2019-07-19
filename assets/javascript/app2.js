//Initial values
var count = 25;
var current = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;
var intervalID;

//Display the question and choices to the browser

function renderQuestion() {
  const question = quizzes[current].question;
  const choices = quizzes[current].choices;
  $("#timeleft").html(count);
  $("#game").html(`<h4>${question}</h4> ${renderChoices(choices)}`);
}

function renderChoices(choices) {
  var result = "";
  for (var i = 0; i < choices.length; i++) {
    result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
  }
  return result;
}

renderQuestion();
