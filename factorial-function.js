// let factorial = 1;
// for (let i = 1; i <= 5; i++){
//     factorial *= i;
// }
// console.log(factorial);

function fact(number){
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial *= i;
    }

    return factorial;
}
var firstFactorial = fact(7);
console.log(firstFactorial);