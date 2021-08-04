function inchToFeet(inches){
    var feet = inches/12;
    return feet;
}

let myInches = 132;
// let feet = myInches /  12;
var feet = inchToFeet(myInches);
console.log(feet);

// mile to kilometer
function mileToKilometer(miles){
    var km = miles * 1.60934;

    return km;
}

var marathon = mileToKilometer(27);
console.log("marathon in km: ", marathon);