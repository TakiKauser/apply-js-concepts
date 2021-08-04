// challenge by Akram Hossain Rickon

let string = "";

for(let i = 1; i <= 100; i++){
    string = string + i + " ";
    
    if((i % 10) == 0){
        console.log(string);
        // console.log("\n");
        string = "";
    }
}
// for(let i = 1; i <= 10; i++){
//     console.log(string + " ");
// }