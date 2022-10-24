import "./style.css"
import { loadDom } from "./loadDom.js"
import { loadForm } from "./loadForm.js"
import { Task } from "./taskConstructor.js"
import { createTask } from "./taskConstructor.js"
import { displayTask } from "./displayTask.js"

loadDom()

const addATaskButton = document.querySelector(".taskAdd")
const taskForm = document.querySelector(".mainFormBody")
const titleInput = document.querySelector(".titleInput")
const dueDateInput = document.querySelector(".dueDateInput")
let newTaskArray = [

]

addATaskButton.addEventListener("click", (e) => {
    addATaskButton.classList.add("appear")
    taskForm.classList.remove("appear")
    loadForm()
})

taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let createdTask = createTask(titleInput.value, dueDateInput.value)
    const section = document.querySelector("section")
    console.log(section)
    newTaskArray.push(createdTask)
    console.log(newTaskArray)
    titleInput.value = ""
    dueDateInput.value = ""
    taskForm.classList.add("appear")
    addATaskButton.classList.remove("appear")
    section.innerHTML = " "
    displayTask(newTaskArray)

})

export { newTaskArray }


