import { loadForm } from "./loadForm.js"

const body = document.querySelector("body")

function loadDom() {
    const addATaskButton = document.createElement("button")
    body.appendChild(addATaskButton)
    addATaskButton.classList.add("taskAdd")
    addATaskButton.textContent = "Add a Task!"
    const section = document.createElement("section")
    body.appendChild(section)
    const testDiv = document.createElement("div")
    section.appendChild(testDiv)
    loadForm()
    
}

export { loadDom }