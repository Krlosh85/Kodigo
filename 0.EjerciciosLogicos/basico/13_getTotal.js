/*
* Exercise 13: sum the inputs and show them on a text
*/ 
let total = 0;
const numbersRule = /^[0-9]+$/;

function sumInput(){
    let input = document.getElementById("num");
    let num = input.value;
    //Using regex
    if(num.match(numbersRule)){
        total = parseInt(num) + total;
        showSum();
    }else{
        alert("You must type a whole number.");
        num = 0;
    }
    input.value = "";
}

function showSum(){
    document.getElementById("total").innerText = (`The total is: ${total}`);
}

document.getElementById("save").addEventListener("click", sumInput);