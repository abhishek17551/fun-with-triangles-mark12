const sideInputs = document.querySelectorAll(".input-side");
const hypotenuseButton = document.querySelector("#hypotenuse-button");
const outputHypotenuse = document.querySelector("#output");


function calculateSumOfSquares(a,b){
    if(a <= 0 || b <= 0){
        outputHypotenuse.innerText = "Please enter positive sides";
        return sumOfSquares;
    }
    else{
        const sumOfSquares = (a*a) + (b*b);
    //console.log(sumOfSquares);
    return sumOfSquares;
    }
    
}



function calculateHypotenuse (){
    
    const sumOfSquares = calculateSumOfSquares(Number(sideInputs[0].value), Number(sideInputs[1].value));
    //console.log(sumOfSquares);
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputHypotenuse.innerText = "The length of the hypotenuse ◢ is: " + lengthOfHypotenuse;
}


hypotenuseButton.addEventListener('click', calculateHypotenuse);