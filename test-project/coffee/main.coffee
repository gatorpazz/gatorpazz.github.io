app = angular.module 'quiz', [ ]

app.controller 'QuizController', ->
  @.questions = questions
  @.answers = answers
  @.currentQuestion = null
  @.setCurrentQuestion = (questionID) -> @.currentQuestion = questionID
  @.nextQuestion = () -> @.currentQuestion++
  @.setAnswer = (choice) -> @.answers[@.currentQuestion - 1].selected = choice
  return


questions =
[
    { "id": 1, "text": "Tim Berners-Lee invented the Internet."},
    { "id": 2, "text": "Dogs are better than cats."},
    { "id": 3, "text": "Winter is coming."},
    { "id": 4, "text": "Internet Explorer is the most advanced browser on Earth."}
]
answers =
[
    { "id": 1, "selected": null},
    { "id": 2, "selected": null},
    { "id": 3, "selected": null},
    { "id": 4, "selected": null}
]
