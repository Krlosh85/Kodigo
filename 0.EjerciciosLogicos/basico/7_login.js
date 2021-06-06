/*
 * Exercise 7: Make a login that uses "Kodigo" as User and "academia" as password
 */

//Flag made to try again without exiting the app
let flag = true;

function myLogin(flag) {
  alert(
    "Welcome to the Kodigo's Login System \nRemember that you have at least 2 attempts to log in."
  );
  let attempt = 0;
  if (flag === false) {
    myLogin();
  } else {
    while (attempt < 2) {
      let username = prompt("Enter your username: ");
      if (username === "Kodigo") {
        let password = prompt("Enter your password");
        if (password === "academia") {
          alert("Hello There, Kodigo academia!!");
		  attempt = 3;
        } else {
          attempt++;
        }
      } else {
        attempt++;
      }
    }
    let seven = prompt("If you want to try again, type the number 7:");
    if (seven == 7) {
      attempt = 0;
      myLogin(flag);
    }
  }
}

myLogin(flag);
