import "./style.css"
import { loadDom } from "./loadDom.js"
import { loadForm } from "./loadForm.js"
import { Task } from "./taskConstructor.js"
import { createTask } from "./taskConstructor.js"
import { displayTask } from "./displayTask.js"
import { getLocal, setLocal } from "./localStorage"
import { makeSavedDataAppear } from "./showSaved.js"
import { checkDate } from "./checkForTodaysDate.js"

let newTaskArray = []

loadDom()

let returnedData = getLocal();
if (returnedData != null) {
    
    returnedData.forEach(data => {
        newTaskArray.push(data)
    })
    makeSavedDataAppear()
    checkDate()
};






// getLocal()

const addATaskButton = document.querySelector(".taskAdd")
const taskForm = document.querySelector(".mainFormBody")
const titleInput = document.querySelector(".titleInput")
const dueDateInput = document.querySelector(".dueDateInput")
const header = document.querySelector(".header")
const checkbox = document.querySelectorAll("#checkbox")
const taskBox = document.querySelectorAll(".taskBox")



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
    location.reload()

    setLocal()

})


header.appendChild(taskForm)

let arrayCheckboxes = Array.from(checkbox)
let taskBoxArray = Array.from(taskBox);
arrayCheckboxes.forEach(checkbox => {
    let index = arrayCheckboxes.indexOf(checkbox)
    checkbox.addEventListener("click", (e) => {
        taskBoxArray[index].classList.toggle("opacity")
    })
})

const deleteIcon = document.querySelectorAll(".xIcon")
let deleteIconArray = Array.from(deleteIcon)

deleteIconArray.forEach(icon => {
    let index = deleteIconArray.indexOf(icon)
    icon.addEventListener("click", (e) => {
        let newArray = newTaskArray.splice(index, 1)
        displayTask(newTaskArray)
        localStorage.setItem("Stored Tasks", JSON.stringify(newTaskArray))
        location.reload()
        
    })
})

export { newTaskArray }
export { returnedData }
export { taskBoxArray }


