import "./style.css"
import { loadDom } from "./loadDom.js"
import { loadForm } from "./loadForm.js"
import { Task } from "./taskConstructor.js"
import { createTask } from "./taskConstructor.js"

loadDom()

const addATaskButton = document.querySelector(".taskAdd")


addATaskButton.addEventListener("click", (e) => {
    addATaskButton.classList.add("appear")
    loadForm()
})

const form = document.querySelector("form");
console.log(form)
