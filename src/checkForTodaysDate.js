import { newTaskArray } from "./index.js"
import { format } from 'date-fns'

let todaysDateArray = []


function checkDate() {
    const red = document.querySelector(".red")
    let counter = 0
    for (let i = 0; i < newTaskArray.length; i++) {
        let date = new Date()
        let dateFormat = format(date, "yyyy-MM-dd")
        
        if (newTaskArray[i].dueDate == dateFormat) {
            
            ++counter
            red.classList.add("show")
            red.textContent = counter
            todaysDateArray.push(newTaskArray[i])


        }
    }
    
}

export { todaysDateArray }

export { checkDate }