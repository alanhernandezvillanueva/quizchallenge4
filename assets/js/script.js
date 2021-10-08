var questionTextEl = document.querySelector("#questionText");

  


var questionsArray = [
    {
        question: "What is the US Capital?",
        answer: "Washington DC",
        answerChoices: ["Washington DC", "Mexico City", "Ottawa", "Lima"]

    },
  {
        question: "What is the Mexico Capital?",
        answer: "Mexico City",
        answerChoices: ["Washington DC", "Mexico City", "Ottawa", "Lima"]

    },
    {
        question: "What is Peru's Capital?",
        answer: "Lima",
        answerChoices: ["Washington DC", "Mexico City", "Ottawa", "Lima"]

    },
    {
        question: "What is Canada's Capital?",
        answer: "Ottawa",
        answerChoices: ["Washington DC", "Mexico City", "Ottawa", "Lima"]

    }

];





var round = 0;

questionTextEl.addEventListener("click", function(){
    questionTextEl.innerHTML = questionsArray[round].question;
    for (var i =0; i < questionsArray[round].answerChoices.length; i++){
        var buttonEl = document.createElement("button")
        buttonEl.innerHTML = questionsArray[round].answerChoices[i]; 
        questionTextEl.append(buttonEl);
    }
    round++;
});
var correctAnswer = {

}