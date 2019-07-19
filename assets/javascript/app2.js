//Initial values
var count = 5;
var current = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;
var intervalID;

// Function that renders the next question when time left = 0
function next() {
  var exhausted = quizzes.length - 1 === current;
  if (exhausted) {
    console.log("Game over!");
    results();
  } else {
    current++;
    renderQuestion();
  }
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

function results() {
  var result = `<p>Correct: ${right}<p>
                    <p>Wrong: ${wrong} <p>
                    <p>Unanswered: ${unanswered} <p>
                    <button class="btn btn-primary reset"> Restart </button>`;

  $("#game").html(result);
}

renderQuestion();

//Either right or wrong question selected, go to next question

$(document).on("click", ".choice", function() {
  clearInterval(intervalID);
  const selected = $(this).attr("data-answer");
  const correct = quizzes[current].correctAnswer;
  if (selected === correct) {
    right++;
    next();
  } else {
    wrong++;
    next();
  }
});

$(document).on("click", ".reset", function() {
  count = 5;
  current = 0;
  right = 0;
  wrong = 0;
  unanswered = 0;
  intervalID = null;
  renderQuestion();
});
