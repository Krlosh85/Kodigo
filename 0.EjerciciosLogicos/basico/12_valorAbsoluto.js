/*
* Exercise 12: Return the absolute value of a number.
*/ 

function absValue(num){
    if(Number.isNaN(num)){
        console.log("I am not a number, insert a Number.");
    }else{
        //Real definition of a Absolute value: the distance between the origin and a point, furthermore it can be the space between to dots
        if(num < 0){
            num = num * -1;
        }else if(num > 0){
            //This if is only for education purposes, just to know the definition of the Abs. Value.
        }
        console.log("Its absolute value is: |"+num+"|");
    }
}

absValue(prompt("Insert a number: "));