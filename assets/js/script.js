var startGame = document.querySelector("#start-game");
var questionContainerEl = document.querySelector("#question-info");
var questionText = document.querySelector("#question-text");
var buttonDivEl = document.querySelector("#button-div");
var correctAnswer = document.querySelector(".question-wrapper")





  


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

startGame.addEventListener("click", function(){
    buttonDivEl.innerHTML = "";
    questionText.innerHTML = questionsArray[round].question;
    questionContainerEl.innerHTML = "";
    for (var i =0; i < questionsArray[round].answerChoices.length; i++){
       
        var buttonEl = document.createElement("button")
        buttonEl.addEventListener("click", buttonListener)
        buttonEl.innerHTML = questionsArray[round].answerChoices[i]; 
        questionContainerEl.append(buttonEl);
       buttonEl.setAttribute("style", "background:purple");
    }

});


var buttonListener = function(event) {

    if (event.target.textContent === questionsArray[round].answer) {
        window.alert("Correct!");
        
    } else {
       window.alert("wrong");
    }

    round++;

    if (questionsArray.length === round ) {
        endOfQuizz();
    } else {
            //move to next question
        questionText.innerHTML = questionsArray[round].question;
        questionContainerEl.innerHTML = "";
        for (var i =0; i < questionsArray[round].answerChoices.length; i++){
            
            var buttonEl = document.createElement("button")
            buttonEl.addEventListener("click", buttonListener)
            buttonEl.innerHTML = questionsArray[round].answerChoices[i]; 
            questionContainerEl.append(buttonEl);
            buttonEl.setAttribute("style", "background:purple");
    
        } 
    }
 
   
    console.log(round);
  


   

};

var scorePoints = function(){
    //create a condition that awards points for every correct answer
    
    }





var endOfQuizz = function() {
    window.alert("The Quizz Is Finished, Let See How You Did");

    var newScore = function() {

    }
  
   
    var newHighScore = localStorage.getItem("newScore");
    if(newHighScore === null){
      newHighScore = 0;
    } else {
        window.prompt("We Have a New Record")
    }
  
};
  
