const inputAngles = document.querySelectorAll(".input-angle");
const isTriangleButton = document.querySelector("#is-triangle");
const outputTriangle = document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3){
    if(angle1 <= 0 || angle2 <=0 || angle3 <=0){
        outputTriangle.innerText = "All the angles in a triangle should be positive."
        return sumOfAngles;
    }
    else if (angle1 === 180 || angle2 === 180 || angle3 === 180){
        outputTriangle.innerText = "The angle form a straight line."
    }
     
    else{
    const sumOfAngles = Number(angle1) + Number(angle2) + Number(angle3);
    return sumOfAngles;
    }
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