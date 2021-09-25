const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton = document.querySelector("#submit-answer");
const outputResult = document.querySelector(".output-score");

const correctAnswers = ["45°", "Right-angled Triangle","Isosceles Triangle","24 cm"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm); // constructs a set of key/value pairs representing form fields and their values
    for(let value of formResults.values()){ //returns values  contained in object
       if (value == correctAnswers[index]){
           score++;
       }
       index+=1;
    }
    outputResult.innerText = "Yay! Your score is " + score;
}

submitAnswerButton.addEventListener('click', calculateScore);