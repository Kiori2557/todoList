import { populateProjectOption } from "./populateDom";
import { taskArr } from ".";
import { create } from "./create";
import { renderTaskCard } from "./renderAllTab";
const createBtn = document.querySelector(".create");
const dialog = document.querySelector("dialog");
const newTaskForm = document.querySelector(".newForm");

const type = document.querySelector("#type");
export function generateTaskDialog() {
  type.value = "task";
  const categoryLabel = document.createElement("label");
  const category = document.createElement("select");

  category.setAttribute("id", "category");
  category.setAttribute("type", "option");

  const defaultOption = document.createElement("option");

  categoryLabel.textContent = "Choose your project";
  categoryLabel.setAttribute("for", "category");

  defaultOption.textContent = "default";
  defaultOption.setAttribute("value", "default");
  category.appendChild(defaultOption);

  populateProjectOption(category);

  const parentNode = createBtn.parentNode;
  parentNode.insertBefore(categoryLabel, createBtn);
  parentNode.insertBefore(category, createBtn);
}
export function generateProjectDialog() {
  type.value = "project";
  const title = document.querySelector("#title");
  const description = document.createElement("input");
  const descriptionLabel = document.createElement("label");

  description.setAttribute("id", "description");
  descriptionLabel.setAttribute("for", "description");

  descriptionLabel.textContent = "about your project";
  title.after(description);
  title.after(descriptionLabel);
}

export function removeNode(node) {
  const parentNode = node.parentNode;
  const noteLabel = node.previousSibling;
  parentNode.removeChild(node);
  parentNode.removeChild(noteLabel);
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

export function showPriorityVal() {
  const priority = document.querySelector("#priority");
  const priorityLabel = document.querySelector("label[for='priority']");
  if (priority.value === "1") {
    priorityLabel.textContent = "priority: low";
  } else if (priority.value === "2") {
    priorityLabel.textContent = "priority: mid";
  } else if (priority.value === "3") {
    priorityLabel.textContent = "priority: high";
  }
}

export function generateEditDialog(index) {
  editCard(index);
  const editBtn = document.querySelector(`.edit${index}`);
  editBtn.addEventListener("click", () => editTaskInfo(index));
  console.log(taskArr);
}

function editCard(index) {
  console.log("from edit card");
  const card = document.querySelector(`div[data-index='${index}`);
  card.innerHTML = "";
  const title = document.createElement("input");
  title.classList.add(`title${index}`);

  const note = document.createElement("input");
  note.classList.add(`note${index}`);

  const dueDate = document.createElement("input");
  dueDate.classList.add(`dueDate${index}`);

  const priority = document.createElement("input");
  priority.classList.add(`priority${index}`);

  const category = document.createElement("input");
  category.classList.add(`category${index}`);

  const edit = document.createElement("button");
  edit.classList.add(`edit${index}`);
  edit.textContent = "edit";

  title.value = taskArr[index].title;
  card.appendChild(title);
  card.appendChild(note);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(category);
  card.appendChild(edit);
}

function editTaskInfo(index) {
  console.log("from edit task info");
  const titleVal = document.querySelector(`.title${index}`).value;
  const noteVal = document.querySelector(`.note${index}`).value;
  const dueDateVal = document.querySelector(`.dueDate${index}`).value;
  const priorityVal = document.querySelector(`.priority${index}`).value;
  const categoryVal = document.querySelector(`.category${index}`).value;
  let task = taskArr[index];
  task.title = titleVal;
  task.note = noteVal;
  task.dueDate = dueDateVal;
  task.priority = priorityVal;
  task.category = categoryVal;
  console.log(taskArr);
  renderTaskCard(taskArr);
}
