import { todaysDateArray } from "./checkForTodaysDate.js";
import img from "./xIcon.png";

function showTodays() {
  const section = document.querySelector("section");
  section.innerHTML = "";
  for (let i = 0; i < todaysDateArray.length; i++) {
    const taskBox = document.createElement("div");
    taskBox.classList.add("taskBox");
    section.appendChild(taskBox);
    const taskTitleDiv = document.createElement("div");
    taskTitleDiv.classList.add("taskTitleDiv");
    taskBox.appendChild(taskTitleDiv);
    taskTitleDiv.textContent = `Task: ${todaysDateArray[i].title}`;

    const taskDateDiv = document.createElement("div");
    taskDateDiv.classList.add("taskDateDiv");
    taskBox.appendChild(taskDateDiv);
    taskDateDiv.textContent = `Date: ${todaysDateArray[i].dueDate}`;

    const checkbox = document.createElement("input");
    const checkboxLabel = document.createElement("label");
    checkboxLabel.textContent = "Complete";
    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkboxContainer");
    taskBox.appendChild(checkboxContainer);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    checkboxContainer.appendChild(checkboxLabel);
    checkboxContainer.appendChild(checkbox);

    const x = document.createElement("img");
    x.src = img;
    x.classList.add("xIcon");

    checkboxContainer.appendChild(x);
  }
}

export { showTodays };
