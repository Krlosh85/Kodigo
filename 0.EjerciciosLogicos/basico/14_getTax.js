const numbersRule = /^[0-9]+$/;

function getTax(){
    let input = document.getElementById("num");
    let num = parseFloat(input.value);
    let percentage = document.getElementById("taxes").value;
    if(num === 0 || isNaN(num)){
        alert("You must type a number to be aplicated the tax");
        input.value = " ";
    }else{
        let tax = ((percentage*num)/100);
        document.getElementById("tax").innerText = `The tax is: ${tax}`;
    }
}

document.getElementById("save").addEventListener("click", getTax, true);