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
    mainFormBody.classList.add("mainFormBody")
    
}

export { loadForm }