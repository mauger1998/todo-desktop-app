class Task {
    constructor (title) {
        this.title = title
    }

}

function createTask(title) {
    let newTask = new Task(title)
    return newTask
}

export { createTask }
export { Task }