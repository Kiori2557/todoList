import { taskArray } from ".";
const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#dueDate");
const taskPriority = document.querySelector("#priority");
const dialog = document.querySelector("dialog");
const newTaskForm = document.querySelector(".addNewTask");

class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
export function showNewTaskForm() {
  newTaskForm.reset();
  dialog.show();
}
export function createNewTask() {
  let title = taskTitle.value;
  let description = taskDescription.value;
  let dueDate = taskDueDate.value;
  let priority = taskPriority.value;
  let task = new Task(title, description, dueDate, priority);
  taskArray.push(task);
  console.log(taskArray);
}
