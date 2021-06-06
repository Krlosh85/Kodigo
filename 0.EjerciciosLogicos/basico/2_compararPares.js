/*
* Exercise 2: Enter a number and show if its a odd number or not without using the module operator
*/ 

function inspectOdds(){
    let num = parseInt(prompt("Insert a whole number:"));
    //Using the bytes to representate the number and verify if it is an ood or even
    let numBits = num.toString(2);
    if(numBits.endsWith(0)){
        alert("Its an Odd Number!!");
    }else{
        alert("It is not an odd number");
    }
    console.log(num);
}

inspectOdds();