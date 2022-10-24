import "./style.css"
import { loadDom } from "./loadDom.js"
import { loadForm } from "./loadForm.js"
import { Task } from "./taskConstructor.js"
import { createTask } from "./taskConstructor.js"

loadDom()

const addATaskButton = document.querySelector(".taskAdd")
const taskForm = document.querySelector(".mainFormBody")


addATaskButton.addEventListener("click", (e) => {
    addATaskButton.classList.add("appear")
    taskForm.classList.remove("appear")
    loadForm()
})


