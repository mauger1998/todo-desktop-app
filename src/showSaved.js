import { returnedData } from "./index.js"
import { displayTask } from "./displayTask.js"
import { newTaskArray } from "./index.js"

function makeSavedDataAppear() {
    returnedData.forEach(data => {
        displayTask(newTaskArray)
    })
}

export { makeSavedDataAppear }