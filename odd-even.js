function odd_even(number1){
    var remainder = number1 % 2;
    if (remainder == 0){
        return true;
    }
    else{
        return false;
    }
}
var givenNumber = 53;

if (odd_even(givenNumber) == true){
    console.log("Even Number");
}
else{
    console.log("Odd Number")
}