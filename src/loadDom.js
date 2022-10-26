import { loadForm } from "./loadForm.js"
import { newTaskArray } from "./index.js"
import { displayTask } from "./displayTask.js"

const body = document.querySelector("body")

function loadDom() {
    const header = document.createElement("header")
    header.classList.add("header")

    let todayList = document.createElement("ul")
    let today = document.createElement("li")
    todayList.appendChild(today)
    header.appendChild(todayList)
    today.textContent = "Today"

    let projects = document.createElement("li")
    todayList.appendChild(projects)
    projects.textContent = "Projects"


    let red = document.createElement("div")
    red.classList.add("red")
    header.appendChild(red)

    body.appendChild(header)
    loadForm()
    const addATaskButton = document.createElement("button")
    header.appendChild(addATaskButton)

    

    
    addATaskButton.classList.add("taskAdd")
    addATaskButton.textContent = "Add a Task!"
    const section = document.createElement("section")
    body.appendChild(section)
    const testDiv = document.createElement("div")
    section.appendChild(testDiv)
    

    
    
    

    
}

export { loadDom }