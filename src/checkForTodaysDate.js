import { newTaskArray } from "./index.js"

function checkDate() {
    console.log(newTaskArray + "hi")
    for (let i = 0; i < newTaskArray.length; i++) {
        let date = new Date()
        console.log(date)
           console.log(newTaskArray[i].dueDate)
        if (newTaskArray[i].dueDate == date ) {
            console.log("today")

        }
    }
    
}

export { checkDate }