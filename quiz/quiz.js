function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  
  Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
  };
  
  //Quiz_controller.js
  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
  };
  
  Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
  };
  
  Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
  
    this.questionIndex++;
  };
  
  //App.js
  function populate() {
    if (quiz.isEnded()) {
      showScores();
    } else {
      //show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;
  
      // show choices
      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        guess("btn" + i, choices[i]);
      }
  
    }
  }
  
  function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.guess(guess);
      populate();
    };
  }
  
  function showScores() {
    var gameOverHtml = "<h1>The Results</h1>";
    gameOverHtml += "<h2 id='score'>You scored a total of " + quiz.score +  "</h2>";
    gameOverHtml += "<p id='statement'>It takes 2 minutes to save 8 lives and with over 140,000 people awaiting a donor you can be the difference.</p>";
    gameOverHtml += "<p id='statement'>Over 20 people die a day waiting for someone, anyone, like YOU a day.</p>";
    gameOverHtml += "<h1 id='statement'>Be the difference and sign up today!</h1>";
    gameOverHtml += "<a href='../index.html'>Home</a>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
  }
  
  var questions = [
    new Question(
      "How many people can you save by being a donor?",
      ["8", "10", "5", "2"],
      "8"
    ),
    new Question(
      "How many long does it take to sign up to be a donor?",
      ["2 minutes", "10 minutes", "60 minutes", "30 minutes"],
      "2 minutes"
    ),
    new Question(
      "How many people on average are awaiting a donor?",
      ["140,000", "20,000", "50,000", "100,000"],
      "140,000"
    ),
    new Question(
      "How many people DIE a day waiting...?",
      ["20", "10", "5", "40"],
      "20"
    ),
    new Question(
      "How often is someone added to the wait list?",
      ["10 minutes", "60 minutes", "200 minutes", "500 minutes"],
      "10 minutes"
    ),
    new Question(
        "Who can be a donor?",
        ["Anybody", "Healthy people", "Young people", "Dying people"],
        "Anybody"
      )
    
  ];
  
  var quiz = new Quiz(questions);
  
  populate();
  