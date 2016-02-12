(function() {
  var answers, app, questions;

  app = angular.module('quiz', []);

  app.controller('QuizController', function() {
    this.questions = questions;
    this.answers = answers;
    this.currentQuestion = null;
    this.setCurrentQuestion = function(questionID) {
      return this.currentQuestion = questionID;
    };
    this.nextQuestion = function() {
      return this.currentQuestion++;
    };
    this.setAnswer = function(choice) {
      return this.answers[this.currentQuestion - 1].selected = choice;
    };
  });

  questions = [
    {
      "id": 1,
      "text": "Tim Berners-Lee invented the Internet."
    }, {
      "id": 2,
      "text": "Dogs are better than cats."
    }, {
      "id": 3,
      "text": "Winter is coming."
    }, {
      "id": 4,
      "text": "Internet Explorer is the most advanced browser on Earth."
    }
  ];

  answers = [
    {
      "id": 1,
      "selected": null
    }, {
      "id": 2,
      "selected": null
    }, {
      "id": 3,
      "selected": null
    }, {
      "id": 4,
      "selected": null
    }
  ];

}).call(this);
