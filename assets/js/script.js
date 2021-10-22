//variables declared for later use 
var startGame = document.querySelector("#start-game");
var questionContainerEl = document.querySelector("#question-info");
var questionText = document.querySelector("#question-text");
var buttonDivEl = document.querySelector("#button-div");
var correctAnswer = document.querySelector(".question-wrapper")
var timerEl = document.getElementById('timer');
var timerLeft = 50;
var finalScoreEl = document.getElementById("final-score");
 timerEl.innerHTML = timerLeft;
 var score = 0;


  

// questions object 
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
//variables use for the timer and goiing through all questions 
var round = 0;
var timerInterval;


//start game function that will be triggered once the start quizz button is clicked 
startGame.addEventListener("click", function(){
     timerInterval = setInterval(function(){
    //timer goes here 
    if (timerLeft > 0 ) {
        timerLeft--; 
         timerEl.innerHTML = "You Have Seconds " + timerLeft;
        } else{
            endOfQuizz();
            
                }
            }, 
    
    1000);

    //create questions and answer button dynamically 
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

//check if answers are right or wrong 
var buttonListener = function(event) {

    if (event.target.textContent === questionsArray[round].answer) {
        window.alert("Correct!")
     ;
        
    } else {
       window.alert("wrong");
       //score goes down
       timerLeft - 10;
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






// end quizz by displaying final score and ask player for their initials 
var endOfQuizz = function() {
  
  
    clearInterval(timerInterval);
    timerEl.innerHTML = "";
    questionText.innerHTML = "";
    questionContainerEl.innerHTML = "";
       var score = timerLeft;
       var scoreText =  document.createElement("h2");
       scoreText.textContent = ("Your Score Is " + score);
       finalScoreEl.append(scoreText);

       var playerInitialsInput = document.createElement("input");
       playerInitialsInput.setAttribute("placeholder", "Enter Your Initials Here");
       finalScoreEl.append(playerInitialsInput);

       var submitInitialsBtn = document.createElement("button");
       submitInitialsBtn.textContent = ("Save");
       finalScoreEl.append(submitInitialsBtn);





    // window.alert("The Quizz Is Finished, Let See How You Did");
    // //stop the timer and take the timer value and added to the score 
    // score = score + timerLeft;
    // // innerHTML to be the score input box for initials  and submit button 

    // // when they push submit then get inpit box value and the score and set to local host.set 
   
    // var newHighScore = localStorage.getItem("newScore");
    // if(newHighScore === null){
    //   newHighScore = 0;
    // } else {
    //     window.prompt("We Have a New Record")
    // }
  
};
  


