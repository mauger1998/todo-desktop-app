const body = document.querySelector("body");
const header = document.querySelector(".header");
function loadForm() {
  const mainFormBody = document.createElement("form");
  const taskTitleLabel = document.createElement("label");
  const taskTitleInput = document.createElement("input");
  taskTitleInput.setAttribute("type", "text");
  taskTitleInput.setAttribute("id", "titleInput");
  taskTitleLabel.textContent = "Task";
  mainFormBody.appendChild(taskTitleLabel);
  mainFormBody.appendChild(taskTitleInput);
  body.appendChild(mainFormBody);
  mainFormBody.classList.add("mainFormBody");
  taskTitleInput.classList.add("titleInput");

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Date";
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.classList.add("dueDateInput");

  const formButton = document.createElement("button");
  formButton.textContent = "Create Task";
  mainFormBody.appendChild(dueDateLabel);
  mainFormBody.appendChild(dueDateInput);

  mainFormBody.appendChild(formButton);
  mainFormBody.classList.add("appear");
}

export { loadForm };
