const body = document.querySelector("body")
function loadForm() {
    let mainFormBody = document.createElement("form");
    let taskTitleLabel = document.createElement("label");
    let taskTitleInput = document.createElement("input");
    taskTitleInput.setAttribute("type", "text");
    taskTitleInput.setAttribute("id", "titleInput");
    mainFormBody.appendChild(taskTitleLabel);
    mainFormBody.appendChild(taskTitleInput);
    body.appendChild(mainFormBody)
    
}

export { loadForm }