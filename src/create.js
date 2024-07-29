import { taskArr } from ".";
import { projectArr } from ".";
import { generateTaskDialog } from "./renderDialog";
import { generateProjectDialog } from "./renderDialog";
import { removeTaskNode } from "./renderDialog";
import { projectListContainer } from "./populateDom";
import { populateProjectList } from "./populateDom";

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

export function create() {
  const titleVal = document.querySelector("#title").value;
  const descriptionVal = document.querySelector("#description").value;
  const dueDateVal = document.querySelector("#dueDate").value;
  const priorityVal = document.querySelector("#priority").value;
  const typeVal = document.querySelector("#type").value;

  if (typeVal === "task") {
    createTaskObj(titleVal, descriptionVal, dueDateVal, priorityVal);
    removeTaskNode();
  } else if (typeVal === "project") {
    createProjectObj(titleVal, descriptionVal, dueDateVal, priorityVal);
    populateProjectList();
  }
}

function createTaskObj(title, description, dueDate, priority) {
  const option = document.querySelector(".category");
  let category = option.value;
  let task = new Task(title, description, dueDate, priority, category);
  taskArr.push(task);
}
function createProjectObj(title, description, dueDate, priority) {
  let project = new Project(title, description, dueDate, priority);
  projectArr.push(project);
  projectListContainer.innerHTML = "";
}
