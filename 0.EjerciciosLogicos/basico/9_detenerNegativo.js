/*
* Exercise 9: Type n integers and stop when a negative number is typed and show it.
*/ 

let arrayOfNumbers = [];
function insertNumbers(){
    let tempNum = parseInt(prompt("Insert a integer number:"));
    if(tempNum > 0){
        insertNumbers();
    }else{
        console.log("Stop! You just typed a negative number: "+tempNum);
    }
}
insertNumbers();