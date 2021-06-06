/*
* Exercise 4: Taking 2 numbers, multiply each other without using the asterisc (*).
*/ 

function multiplyNumbers(){
    let num1 = parseInt(prompt("Insert the first number:"));
    let num2 = parseInt(prompt("Insert the multiplier number:"));
    let mult = 0;
    for(let i = 1; i <= num1; i++){
        mult += num2;
    }
    console.log("The result is:"+mult);
}

multiplyNumbers();