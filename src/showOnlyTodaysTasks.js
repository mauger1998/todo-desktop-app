import { todaysDateArray } from "./checkForTodaysDate.js"
import  img  from "./xIcon.png"


function showTodays() {
    const section = document.querySelector("section")
    section.innerHTML = ""
    for (let i = 0; i < todaysDateArray.length; i++) {
        
        let taskBox = document.createElement("div")
        taskBox.classList.add("taskBox")
        section.appendChild(taskBox)
        let taskTitleDiv = document.createElement("div")
        taskTitleDiv.classList.add("taskTitleDiv")
        taskBox.appendChild(taskTitleDiv)
        taskTitleDiv.textContent = `Task: ${todaysDateArray[i].title}`

        
        let taskDateDiv = document.createElement("div")
        taskDateDiv.classList.add("taskDateDiv")
        taskBox.appendChild(taskDateDiv)
        taskDateDiv.textContent = `Date: ${todaysDateArray[i].dueDate}`


        
        
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


        let x = document.createElement("img");
        x.src = img
        x.classList.add("xIcon");
        
        checkboxContainer.appendChild(x)

    }
}

export { showTodays }