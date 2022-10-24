const body = document.querySelector("body")
function loadForm() {
    let mainFormBody = document.createElement("form");
    let taskTitleLabel = document.createElement("label");
    let taskTitleInput = document.createElement("input");
    taskTitleInput.setAttribute("type", "text");
    taskTitleInput.setAttribute("id", "titleInput");
    taskTitleLabel.textContent = "Task"
    mainFormBody.appendChild(taskTitleLabel);
    mainFormBody.appendChild(taskTitleInput);
    body.appendChild(mainFormBody);
    mainFormBody.classList.add("mainFormBody");
    taskTitleInput.classList.add("titleInput")

    let dueDateLabel = document.createElement("label")
    dueDateLabel.textContent = "Date"
    let dueDateInput = document.createElement("input")
    dueDateInput.setAttribute("type", "date")
    dueDateInput.classList.add("dueDateInput")

    const formButton = document.createElement("button");
    formButton.textContent = "Create Task"
    mainFormBody.appendChild(dueDateLabel)
    mainFormBody.appendChild(dueDateInput)
    
    mainFormBody.appendChild(formButton)
    mainFormBody.classList.add("appear")
    
}

export { loadForm }