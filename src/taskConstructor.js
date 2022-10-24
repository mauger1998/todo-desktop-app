class Task {
    constructor (title) {
        this.title = title
    }

}

function createTask(title) {
    let newTask = new Task(title)
}

export { createTask }
export { Task }