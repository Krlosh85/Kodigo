/*
* Exercise 1: approximate the module of a division.
*/ 

function approximateDivision(){
    let dividend = parseFloat(prompt("Enter the dividend number:"))
    let divider = parseFloat(prompt("Enter the divider number:"));
    let result;

    result = Math.round((dividend/divider));
    console.log("The approximate result is:"+result);
}

approximateDivision();