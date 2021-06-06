/*
* Exercise 6: Request 6 objects and put them in order and separeted with commas.
*/ 

let array = [];
let counter = 0;

//Using recursive function
function arrayObjects(counter){
    let tempCount = (counter+1);
    let tempObject = prompt('Digit the '+tempCount+' object: ');
    array[counter] = tempObject;
    if(counter != 4){
        counter++;
        arrayObjects(counter)
    }else{
        console.log("The collection of objects is:"+array); 
    }
}

arrayObjects(counter);
