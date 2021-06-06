/*
* Exercise 11: Compare two Strings provided by the user's input.
*/ 

//Using ternary operators
function compareStrings(string1, string2){
    let response = (string1 === string2 ? true : false);
    return response;
}

function insertStrings(){
    let text1 = prompt("Insert the first word: ");
    let text2 = prompt("Insert the second word: ");
    if(compareStrings(text1, text2)){
        alert("Yes, they are the same text, great!!");
    }else{
        alert("This texts are not equal");
    }
}

insertStrings();