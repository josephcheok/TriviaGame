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
    results(); //only when questions exhausted are results displayed
  } else {
    current++;
    renderQuestion();
  }
}

// Start a timer for user to respond to question
function stop() {
  clearInterval(intervalID);
  unanswered++;
  renderResult();
  $("#game").prepend(`<div class="resultTitle">Time's Up!</div>`);
  setTimeout(next, 5 * 1000);
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
  $("#game").html(
    `<h4>${question}</h4> ${renderChoices(choices)} ${remainder()}`
  );
}

function renderChoices(choices) {
  var option = "";
  for (var i = 0; i < choices.length; i++) {
    option += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;
  } // with every loop, option gets appended instead of replaced
  return option;
}

//Display result, giphy and factoid immediately after answering
function renderResult() {
  console.log("this is running");
  var image = quizzes[current].imgURL;
  var fact = quizzes[current].factoid;
  $(".timer").hide();
  $("#game").html(`<img src="${image}">`);
  $("#game").append(`<p class="factoid">${fact}</p>`);
}

//Display result of right, wrong and unanswered
function results() {
  var result = `<p class="result">Correct: ${right}<p>
                    <p class="result">Wrong: ${wrong} <p>
                    <p class="result">Unanswered: ${unanswered} <p>
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
    renderResult();
    $("#game").prepend(`<div class="resultTitle">Correct!</div>`);
    setTimeout(next, 5 * 1000);
  } else {
    wrong++;
    renderResult();
    $("#game").prepend(`<div class="resultTitle">Wrong!</div>`);
    setTimeout(next, 5 * 1000);
  }
});

//Reset all values back to initial on click of restart button
$(document).on("click", ".reset", function() {
  count = 5;
  current = 0;
  right = 0;
  wrong = 0;
  unanswered = 0;
  intervalID = null;
  renderQuestion();
});

//Inform user of remaining questions to be answered in trivia
function remainder() {
  const remainder = quizzes.length - (current + 1);
  const total = quizzes.length;

  return `Remaining Question(s): ${remainder}/${total}`;
}
