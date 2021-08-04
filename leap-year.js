function isLeapYear(year){
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
        return true;
    }
    return false;
}

var myYear = 2100;
var isMyLeapYear = isLeapYear(myYear);
console.log("leap year?", isMyLeapYear);