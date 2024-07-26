import "./style.css";

const createTask = document.querySelector(".createTask");
const taskTitle = document.querySelector("#title");
const taskDescription = document.querySelector("#description");
const taskDueDate = document.querySelector("#dueDate");
const taskPriority = document.querySelector("#priority");
class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
createTask.addEventListener("click", function () {
  let title = taskTitle.value;
  let task = new Task(title, "goal for life", "2025", "high");
  console.log(task);
});
