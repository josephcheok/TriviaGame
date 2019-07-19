$(document).ready(function() {
  var quizzes = {
    Q1: {
      Question:
        "Which war movie won the Academy Award for Best Picture in 2009?",
      A: "The Hurt Locker",
      B: "Saving Private Ryan",
      C: "Letters to Iwojima",
      D: "Inglorious Basterds"
    },
    Q2: {
      Question:
        "What was the name of the second Indiana Jones movie, released in 1984?",
      A: "Indiana Jones and the Kingdom of the Crystal Skull",
      B: "Raiders of the Lost Ark",
      C: "Indiana Jones and the Temple of Doom",
      D: "Indiana Jones and the Last Crusade"
    },
    Q3: {
      Question: "Which actress plays Katnis Everdeen in the Hunger Games?",
      A: "Jennifer Gardner",
      B: "Jennifer Lawrence",
      C: "Jennifer Aniston",
      D: "Jennifer Love Hewitt"
    },
    Q4: {
      Question:
        "Which English director was responsible for the epic movie Gladiator in 2000?",
      A: "Peter Jackson",
      B: "Wolfgang Peterson",
      C: "Ron Howard",
      D: "Ridley Scott"
    },
    Q5: {
      Question:
        "What movie featured humans living in a simulated world to keep their sleeping body functioning as batteries for machines in the real world?",
      A: "The Truth",
      B: "The Matrix",
      C: "Gattaca",
      D: "The Island"
    },
    Q6: {
      Question:
        "For what movie did Leonardo DiCaprio finally get an Academy Award for since his debut in Titanic in 1997?",
      A: "The Aviator",
      B: "Inception",
      C: "The Wolf of Wall Street",
      D: "The Revenant"
    },
    Q7: {
      Question:
        " How many movies did Brad Pitt and Angelina Jolie star in together?",
      A: 1,
      B: 2,
      C: 3,
      D: 4
    },
    Q8: {
      Question: " “You had me at hello” was a famous line from which movie?",
      A: "Forrest Gump",
      B: "Jerry McGuire",
      C: "When Harry met Sally",
      D: "The Notebook"
    },
    Q9: {
      Question:
        "How many Spiderman movies are there since the release of Spider-Man in 2002?",
      A: 5,
      B: 6,
      C: 8,
      D: 10
    },
    Q10: {
      Question: "Which of the following actors did not play Batman?",
      A: "Michael Keaton",
      B: "Val Kilmer",
      C: "Adam East",
      D: "Christian Bale"
    }
  };
  var correct = {
    Q1: "A",
    Q2: "C",
    Q3: "B",
    Q4: "D",
    Q5: "B",
    Q6: "D",
    Q7: "B",
    Q8: "B",
    Q9: "C",
    Q10: "C"
  };

  var renderQuestion = function(quest) {
    var questDiv = $(".question");
    var answerADiv = $(".answerA");
    var answerBDiv = $(".answerB");
    var answerCDiv = $(".answerC");
    var answerDDiv = $(".answerD");
    questDiv.html(quest.Question);
    answerADiv.html(quest.A);
    answerBDiv.html(quest.B);
    answerCDiv.html(quest.C);
    answerDDiv.html(quest.D);
    // clearInterval(intervalIDquiz);
  };

  var intervalIDquiz;
  var intervalIDtimer;
  var count = 25;

  var timer = function() {
    intervalIDtimer = setInterval(decrement, 1000);
  };

  function decrement() {
    if (count > 0) {
      count--;
      $("#timeleft").html(count);
      if (count === 0) {
        stop();
        alert("Time's Up!");
      }
    }
  }

  function stop() {
    clearInterval(intervalIDtimer);
  }

  // timer();

  function qdisplay() {
    for (var key in quizzes) {
      renderQuestion(quizzes[key]);
      clearInterval(intervalIDquiz);
    }
  }

  var initializeGame = function() {
    intervalIDquiz = setInterval(qdisplay, 3000);
  };

  //setInterval runs on its own timeline.

  initializeGame();
});
