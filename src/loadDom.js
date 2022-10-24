import { loadForm } from "./loadForm.js"

const body = document.querySelector("body")

function loadDom() {
    const addATaskButton = document.createElement("button")
    body.appendChild(addATaskButton)
    addATaskButton.classList.add("taskAdd")
    addATaskButton.textContent = "Add a Task!"
    loadForm()
    
}

export { loadDom }