import { newTaskArray } from "./index.js"
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

function checkDate() {
    for (let i = 0; i < newTaskArray.length; i++) {
        let date = new Date()
        let dateFormat = format(date, "yyyy/mm/dd")
           
        if (newTaskArray[i].dueDate == dateFormat) {
            console.log("today")

        }
    }
    
}

export { checkDate }