// SI = P × R × T
// A = P (1 + rt) => P + Prt

// interest1
function simpleInterest(principle, rate, time){
    let interest1 = (principle * rate * time) / 100;

    return interest1;
}

let balance = 100;
let interestPerMonth = 7; // (7/100)
let time = 1;

let interest1 = simpleInterest(balance, interestPerMonth, time);
console.log(interest1);
let interest2 = simpleInterest2(balance, interestPerMonth, time);
console.log(interest2);

// interest2
// just A = P + Prt
function simpleInterest2(principle, rate, time){
    let interest2 = principle * (1 + ((rate / 100) * time));

    return interest2;
}