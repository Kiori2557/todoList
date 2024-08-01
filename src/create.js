import { taskArr } from ".";
import { projectArr } from ".";
import { removeNode } from "./renderDialog";
import { projectListContainer } from "./populateDom";
import { populateProjectList } from "./populateDom";
import { renderTaskCard } from "./renderAllTab";
import { renderProject } from "./renderProjectsTab";
import { currentTab } from ".";

class Task {
  constructor(title, note, dueDate, priority, category, status) {
    this.title = title;
    this.note = note;
    this.dueDate = dueDate;
    this.priority = priority;
    this.category = category;
    this.status = status;
  }
}
class Project {
  constructor(title, description, note, dueDate, priority, status) {
    this.title = title;
    this.description = description;
    this.note = note;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
  }
}

export function create() {
  const titleVal = document.querySelector("#title").value;
  const noteVal = document.querySelector("#note").value;
  let dueDateVal = document.querySelector("#dueDate").value;
  const priorityVal = document.querySelector("#priority").value;
  const typeVal = document.querySelector("#type").value;
  const statusVal = document.querySelector("#status").checked;

  if (typeVal === "task") {
    const category = document.querySelector("#category");
    const categoryVal = category.value;
    createTaskObj(
      titleVal,
      noteVal,
      dueDateVal,
      priorityVal,
      categoryVal,
      statusVal
    );

    removeNode(category);
    if (currentTab === "all") {
      renderTaskCard(taskArr);
    } else if (currentTab === "project") {
      renderProject();
    }
  } else if (typeVal === "project") {
    const description = document.querySelector("#description");
    const descriptionVal = description.value;
    createProjectObj(
      titleVal,
      noteVal,
      dueDateVal,
      priorityVal,
      descriptionVal,
      statusVal
    );
    removeNode(description);
    populateProjectList();
    if (currentTab === "project") {
      renderProject();
    }
  }
}
export function updateTaskArr(index) {
  const createBtn = document.querySelector(".create");
  const updateBtn = document.querySelector(".update");
  const title = document.querySelector("#title").value;
  const note = document.querySelector("#note").value;
  let dueDate = document.querySelector("#dueDate").value;
  const priority = document.querySelector("#priority").value;
  const type = document.querySelector("#type").value;
  const status = document.querySelector("#status").checked;
  const category = document.querySelector("#category");
  const categoryVal = category.value;
  let task = new Task(title, note, dueDate, priority, categoryVal, status);

  taskArr[index] = task;
  removeNode(category);
  renderTaskCard(taskArr);
  createBtn.removeAttribute("hidden");
  console.log("hi");
}

function createTaskObj(title, note, dueDate, priority, category, status) {
  let task = new Task(title, note, dueDate, priority, category, status);
  taskArr.push(task);
}
function createProjectObj(title, note, dueDate, priority, description, status) {
  let project = new Project(
    title,
    description,
    note,
    dueDate,
    priority,
    status
  );
  projectArr.push(project);
  projectListContainer.innerHTML = "";
}
