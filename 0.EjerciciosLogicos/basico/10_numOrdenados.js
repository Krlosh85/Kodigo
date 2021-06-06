/*
 * Exercise 10: Show 5 Random Numbers and evaluate its order (asc. or desc.).
 */

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * (1, 20)) + 1;
  return randomNum;
}

//Array with the numbers
const rndArray = [4];

function randomArray() {
  let count = 0;
  while (count < 5) {
    rndArray[count] = getRandomNumber();
    count++;
  }

  console.log("The Collection of numbers created is:");
  console.log(rndArray);
  if (rndArray.sort()) {
    console.log("The numbers are not in a descendent order");
  } else {
      console.log("The array is in descendent order")
  }
}

randomArray();
