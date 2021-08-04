// function fact(number){
//     let factorial = 1;
//     let i = 1;
//     while (i <= number){
//         factorial *= i;
//         i++;
//     }
//     return factorial;
// }

// var firstFactorial = fact(6);
// console.log(firstFactorial);

// decrementing loop
function fact(number){
    let factorial = 1;
    let i = number;
    while (i--){
        if (i == 0){
            break;
        }
        factorial *= i;
    }
    return factorial;
}

var secondFactorial = fact(6);
console.log(secondFactorial);