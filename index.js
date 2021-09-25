const inputAngles = document.querySelectorAll(".input-angle");
const isTriangleButton = document.querySelector("#is-triangle");
const outputTriangle = document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    //console.log(sumOfAngles);
    return sumOfAngles;
}

function isATriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputAngles[0].value),Number(inputAngles[1].value),Number(inputAngles[2].value));
    // for (let i = 0; i<inputAngles.length; i++){
    //     console.log(inputAngles[i].value);
    // }
    console.log(sumOfAngles);

    if(sumOfAngles === 180){
        outputTriangle.innerText = "The given angles form a triangle!";
    }
    else{
        outputTriangle.innerText = "The given angles do not form a triangle △";
    }

}

isTriangleButton.addEventListener('click', isATriangle)