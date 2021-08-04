function grade(number){
    if (number >= 80 && number <= 100){
        console.log("A+");
    }
    else if (number < 80 && number > 70){
        console.log("A");
    }
    else if (number < 70 && number > 60){
        console.log("A-");
    }
    else if (number < 60 && number > 50){
        console.log("B");
    }
    else if (number < 50 && number > 40){
        console.log("C");
    }
    else if (number < 40 && number >= 33){
        console.log("D");
    }
    else if (number < 33 && number >= 0){
        console.log("F");
    }
    else {
        console.log("Invalid Number for Result!");
    }
}

let gotNumber = 94;
grade(gotNumber);