// celsius to farenheit

function tempFarenheit(tempCelsius){
    let temp1 = ((tempCelsius * 9) / 5) + 32;
    return temp1;
}

// farenheit to celsius

function tempCelsius(tempFarenheit){
    let temp2 = ((tempFarenheit - 32) * (5 / 9));
    return temp2;
}


let celsiusTemparature = 36;
let farenheitTemparature = 100;

let temparature1 = tempFarenheit(celsiusTemparature);
let temparature2 = tempCelsius(farenheitTemparature);

console.log("Farenheit temparature is: ",temparature1);
console.log("Celsius temparature is: ",parseFloat(temparature2.toFixed(2)));