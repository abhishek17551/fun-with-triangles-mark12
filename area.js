const inputBase = document.querySelector(".input-base");
const inputHeight = document.querySelector(".input-height");
const areaButton = document.querySelector("#area-button");
const outputArea = document.querySelector("#output");

// const base = Number(inputBase.value);
// const height = Number(inputHeight.value);

function calculateProduct(b,h){
    if (b <= 0 || h <= 0){
        outputArea.innerText = "Please enter positive sides";
        return baseHeightProduct;
    }
    else {
        const baseHeightProduct = (b*h);
        return baseHeightProduct;
    }
    }

function calculateArea() {
    const areaOfTriangle = (1/2)*calculateProduct(inputBase.value,inputHeight.value);
    //console.log(areaOfTriangle);
    outputArea.innerText = "The Area of the triangle ▲ is: " + areaOfTriangle +"sq.cm";
}


areaButton.addEventListener('click', calculateArea);