/*
 * Exercise 8: insert n whole numbers and show how many of them are odds and evens
 */

function inspectNumbers() {
  let flag = true;
  let arrayNumbers = [];
  let odds = 0;
  let evens = 0;
  let counter = 0;
  while (flag) {
    let tempNumber = prompt("Insert a whole number: \nOr type the word STOP in Uppercase to stop");
    if (tempNumber === "STOP") {
        flag = false;
    } else {
      arrayNumbers[counter] = parseInt(tempNumber);
      if (tempNumber % 2 === 0) {
        odds++;
      } else {
        evens++;
      }
      counter++;
    }
  }

  alert(`The list stops with: \nOdds: ${odds} \nEvens: ${evens}`);
}
