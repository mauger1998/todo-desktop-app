import { newTaskArray } from "./index.js"

const body = document.querySelector("body")



function displayTask(task) {
    const section = document.querySelector("section")
    section.innerHTML = ""
    for (let i = 0; i < newTaskArray.length; i++) {
        
        let taskBox = document.createElement("div")
        taskBox.classList.add("taskBox")
        section.appendChild(taskBox)
        taskBox.textContent = `Task: ${newTaskArray[i].title}`
        let checkbox = document.createElement("input")
        let checkboxLabel = document.createElement("label")
        checkboxLabel.textContent = "Complete"
        let checkboxContainer = document.createElement("div");
        checkboxContainer.classList.add("checkboxContainer")
        taskBox.appendChild(checkboxContainer)
        checkbox.setAttribute("type", "checkbox")
        checkbox.setAttribute("id", "checkbox")
        checkboxContainer.appendChild(checkboxLabel)
        checkboxContainer.appendChild(checkbox)
        

    }
}

export { displayTask }