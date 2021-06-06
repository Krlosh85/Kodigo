/*
* Exercise 5: Show 5 Random Numbers in no order.
*/ 
function getRandomNumber(){
    let randomNum = Math.floor(Math.random() * (1, 20))+1;
    return randomNum;
}

let count = 0;
while(count < 5){
    console.log(getRandomNumber());
    count++;
}
