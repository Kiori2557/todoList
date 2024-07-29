import { taskArr } from ".";
import { projectArr } from ".";
import { generateTaskDialog } from "./renderDialog";
import { generateProjectDialog } from "./renderDialog";
import { removeTaskNode } from "./renderDialog";
import { projectListContainer } from "./populateDom";
import { populateProjectList } from "./populateDom";
const dialog = document.querySelector("dialog");
const newTaskForm = document.querySelector(".addNewTask");

class Task {
  constructor(title, description, dueDate, priority, category) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
  }
}
class Project {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export function showDialog(type) {
  newTaskForm.reset();
  if (type === "task") {
    generateTaskDialog();
  } else if (type === "project") {
    generateProjectDialog();
  }
  dialog.show();
}
export function create() {
  const titleVal = document.querySelector("#title").value;
  const descriptionVal = document.querySelector("#description").value;
  const dueDateVal = document.querySelector("#dueDate").value;
  const priorityVal = document.querySelector("#priority").value;
  const typeVal = document.querySelector("#type").value;

  let title = titleVal;
  let description = descriptionVal;
  let dueDate = dueDateVal;
  let priority = priorityVal;

  if (typeVal === "task") {
    const option = document.querySelector(".category");
    let category = option.value;
    let task = new Task(title, description, dueDate, priority, category);
    taskArr.push(task);
    removeTaskNode();
  } else if (typeVal === "project") {
    let project = new Project(title, description, dueDate, priority);
    projectArr.push(project);
    projectListContainer.innerHTML = "";
    populateProjectList();
  }
}
