var questionTextEl = document.querySelector("#questionText");

  


var questionsArray = [
    {
        question: "What is the US Capital",
        answer: "wdc",
        answerChoices: ["wdc", "mexico", "ottawa", "lima"]

    },
  {
        question: "What is the US Capital",
        answer: "wdc",
        answerChoices: ["wdc", "mexico", "ottawa", "lima"]

    },
    {
        question: "What is the US Capital",
        answer: "wdc",
        answerChoices: ["wdc", "mexico", "ottawa", "lima"]

    },
    {
        question: "What is the US Capital",
        answer: "wdc",
        answerChoices: ["wdc", "mexico", "ottawa", "lima"]

    }

];





var round = 0;

questionTextEl.addEventListener("click", function(){
    questionTextEl.innerHTML = questionsArray[round].question;
    for (var i =0; i < questionsArray[round].answerChoices.length; i++){
        var buttonEl = document.createElement("button")
        buttonEl.innerHTML = questionsArray.answerChoices[i]; 
        questionTextEl.append(buttonEl)
    }
    round++;
});