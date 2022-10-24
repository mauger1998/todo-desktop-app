import { newTaskArray } from "./index.js"

const body = document.querySelector("body")



function displayTask() {
    const section = document.querySelector("section")
    section.innerHTML = ""
    for (let i = 0; i < newTaskArray.length; i++) {
        
        let taskBox = document.createElement("div")
        taskBox.classList.add("taskBox")
        section.appendChild(taskBox)
        taskBox.textContent = i

    }
}

export { displayTask }