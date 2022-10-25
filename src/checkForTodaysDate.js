import { newTaskArray } from "./index.js"
import { format } from 'date-fns'


function checkDate() {
    const red = document.querySelector(".red")
    for (let i = 0; i < newTaskArray.length; i++) {
        let date = new Date()
        let dateFormat = format(date, "yyyy-MM-dd")
        let counter = 0
        if (newTaskArray[i].dueDate == dateFormat) {
            counter++
            red.classList.add("show")
            red.textContent = counter

        }
    }
    
}

export { checkDate }