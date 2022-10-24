import "./style.css"
import { loadDom } from "./loadDom.js"
import { loadForm } from "./loadForm.js"

loadDom()

const addATaskButton = document.querySelector(".taskAdd")


addATaskButton.addEventListener("click", (e) => [
    loadForm()
])
