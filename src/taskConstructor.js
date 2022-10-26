class Task {
  constructor(title, dueDate) {
    this.title = title,
    this.dueDate = dueDate;
  }
}

function createTask(title, dueDate) {
  const newTask = new Task(title, dueDate);
  return newTask;
}

export { createTask };
export { Task };
