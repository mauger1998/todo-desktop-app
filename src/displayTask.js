import { newTaskArray } from "./index.js"
import img from "./xIcon.png"
import { taskBoxArray } from "./index.js"


const body = document.querySelector("body")



function displayTask(task) {
    const section = document.querySelector("section")
    section.innerHTML = ""
    for (let i = 0; i < newTaskArray.length; i++) {
        
        let taskBox = document.createElement("div")
        taskBox.classList.add("taskBox")
        section.appendChild(taskBox)
        let taskTitleDiv = document.createElement("div")
        taskTitleDiv.classList.add("taskTitleDiv")
        taskBox.appendChild(taskTitleDiv)
        taskTitleDiv.textContent = `Task: ${newTaskArray[i].title}`

        
        let taskDateDiv = document.createElement("div")
        taskDateDiv.classList.add("taskDateDiv")
        taskBox.appendChild(taskDateDiv)
        taskDateDiv.textContent = `Date: ${newTaskArray[i].dueDate}`


        
        
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

        let checkboxes = document.querySelectorAll("#checkbox")
        let checkboxesArray = Array.from(checkboxes)
        console.log(checkboxesArray)
        checkboxesArray.forEach(box => {
            box.addEventListener("click", (e) => {
                console.log("click")
            })
        })

        const deleteIcon = document.querySelectorAll(".xIcon")
        let deleteIconArray = Array.from(deleteIcon)

        // deleteIconArray.forEach(icon => {
        //     let index = deleteIconArray.indexOf(icon)
        //     icon.addEventListener("click", (e) => {
        //         let newArray = newTaskArray.splice(index, 1)
        //         displayTask(newTaskArray)
        //         localStorage.setItem("Stored Tasks", JSON.stringify(newTaskArray))
                
        //     })
        // })
        

    }
}

export { displayTask }