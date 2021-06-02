let calories_value = 0;

//Class Selected Button
class selectedButton {
  constructor(selected) {
    this.selected = selected;
  }

  seleccionar(selected) {
    let selected_button = document.getElementById(selected);
    let calories = document.getElementById("diary-calories");

    if (selected_button.classList.contains("img-food-selected")) {
      selected_button.classList.remove("img-food-selected");
      //Remover el valor de calorias por el valor "selected"

      switch (selected) {
        case "apple":
          calories_value -= 25;
          break;
        case "pancake":
          calories_value -= 40;
          break;
        case "juice":
          calories_value -= 20;

        case "snack":
          calories_value -= 30;
          break;

        case "snack":
          calories_value -= 30;
          break;

        case "steak":
          calories_value -= 150;
          break;

		  case "coffe":
          calories_value -= 65;
          break;

		  case "soda":
          calories_value -= 70;
          break;

		  case "pizza":
          calories_value -= 100;
          break;

		  case "hamburger":
          calories_value -= 135;
          break;


        default:
          calories_value == 0;
          break;
      }

      calories.innerText = calories_value;
    } else {
      //Añadir el valor de calorias por el valor de "selected"
      selected_button.classList.add("img-food-selected");

      switch (selected) {
        case "apple":
          calories_value += 25;
          break;
        case "pancake":
          calories_value += 40;
          break;
        case "juice":
          calories_value += 20;

        case "snack":
          calories_value += 30;
          break;

        case "snack":
          calories_value += 30;
          break;

        case "steak":
          calories_value += 150;
          break;

		  case "coffe":
          calories_value += 65;
          break;

		  case "soda":
          calories_value += 70;
          break;

		  case "pizza":
          calories_value += 100;
          break;

		  case "hamburger":
          calories_value += 135;
          break;


        default:
          calories_value == 0;
          break;
      }
      calories.innerText = calories_value;
    }
  }
}

var boton = new selectedButton();

//Food Buttons 
document.getElementById("apple").addEventListener(
  "click",
  function () {
    boton.seleccionar("apple");
  },
  false
);
document.getElementById("pancake").addEventListener(
  "click",
  function () {
    boton.seleccionar("pancake");
  },
  false
);
document.getElementById("juice").addEventListener(
  "click",
  function () {
    boton.seleccionar("juice");
  },
  false
);

document.getElementById("snack").addEventListener(
  "click",
  function () {
    boton.seleccionar("snack");
  },
  false
);
document.getElementById("steak").addEventListener(
  "click",
  function () {
    boton.seleccionar("steak");
  },
  false
);
document.getElementById("coffe").addEventListener(
  "click",
  function () {
    boton.seleccionar("coffe");
  },
  false
);

document.getElementById("soda").addEventListener(
  "click",
  function () {
    boton.seleccionar("soda");
  },
  false
);
document.getElementById("pizza").addEventListener(
  "click",
  function () {
    boton.seleccionar("pizza");
  },
  false
);
document.getElementById("hamburger").addEventListener(
  "click",
  function () {
    boton.seleccionar("hamburger");
  },
  false
);

//Button Dark Mode
const colorSwitch = document.getElementById("color-switch");

colorSwitch.addEventListener('click', checkMode);

function checkMode(){
  if(colorSwitch.checked){
    darkModeOn();
  }else{
    darkModeOff();
  }
}

function darkModeOn(){
  document.body.classList.add("dark-mode");
}

function darkModeOff(){
  document.body.classList.remove("dark-mode");
}
