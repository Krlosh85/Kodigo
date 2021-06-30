const divContainer = document.querySelector(".div-center");
const btn = document.querySelector("#submit");
const name = document.querySelector("#name");
const level = document.querySelector("#power-level");
const clase = document.querySelector("#class");
const priority = document.forms["form-tasks"]["inlineRadioOptions"].value;

class Task {
  constructor(name, clase, level, priority) {
    this.name = name;
    this.clase = clase;
    this.level = level;
    this.priority = priority;
  }
}

const addTask = (div, { name, clase, level, priority }) => {
  let img = "";
  priority = document.forms["form-tasks"]["inlineRadioOptions"].value;
  switch (priority) {
    case "1":
      img = "rojo.jpg";
      break;
    case "2":
      img = "verde.png";
      break;
    case "3":
      img = "azul.png";
      break;
    default:
      break;
  }
  div.innerHTML += `
  <div class="task">
  <img
    src="resources/${img}"
    alt="Priority"
    class = "img-priority"
  />
  <article class="articule-info">
    <div>
      <p class="data"><span class="bold">Title: </span>${name}</p>
      <p class="data"><span class="bold">Description: </span>${clase}</p>
      <p class="data"><span class="bold">Due date: </span>${level}</p>
    </div>
  </article>
  </div>
  `;
};

const validate = (name, level, clase) => {
  return name.trim() && level.trim() && clase.trim();
};

const clearInput = () => {
  const inputs = document.querySelectorAll("input[type=text]");
  inputs.forEach((item) => (item.value = null));
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validate(name.value, level.value, clase.value)) {
    const task = new task(
      name.value,
      clase.value,
      level.value,
      priority
    );
    addTask(divContainer, task);
    clearInput();
  }
});
