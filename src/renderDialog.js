import { populateProjectOption } from "./populateDom";
import { taskArr } from ".";
import { renderTaskCard } from "./allTab";
import { store } from "./create";
import { UTCDate } from "@date-fns/utc";
const createBtn = document.querySelector(".create");
const dialog = document.querySelector("dialog");
const newTaskForm = document.querySelector(".newForm");

const type = document.querySelector("#type");
export function generateTaskDialog() {
  type.value = "task";
  const parentNode = createBtn.parentNode;
  const priority = parentNode.querySelector("#priority");
  priority.addEventListener("change", () =>
    changePriority(priority, parentNode)
  );
  addCategory(parentNode, createBtn);
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
  formReset();
  if (type === "task") {
    generateTaskDialog();
  } else if (type === "project") {
    generateProjectDialog();
  }
  dialog.showModal();
}

export function generateEditDialog(index) {
  editCard(index);
  const editBtn = document.querySelector(`.edit${index}`);
  editBtn.addEventListener("click", () => editTaskInfo(index));
}

function formReset() {
  const category = document.querySelector("#category");
  const description = document.querySelector("#description");
  if (category !== null) {
    removeNode(category);
  }
  if (description !== null) {
    removeNode(description);
  }
  newTaskForm.reset();
}

function changePriority(priority, parent) {
  const container = parent.parentNode;
  const val = priority.value;
  switch (val) {
    case "1":
      container.classList.remove("priority-2");
      container.classList.remove("priority-3");
      container.classList.add("priority-1");
      break;
    case "2":
      container.classList.remove("priority-1");
      container.classList.remove("priority-3");
      container.classList.add("priority-2");
      break;
    case "3":
      container.classList.remove("priority-2");
      container.classList.remove("priority-1");
      container.classList.add("priority-3");
      break;
  }
}

function addCategory(parentNode, btn) {
  const categoryLabel = document.createElement("label");
  const category = document.createElement("select");
  const container = document.createElement("div");

  container.classList.add("categroyContainer");

  category.setAttribute("id", "category");
  category.setAttribute("type", "option");

  const defaultOption = document.createElement("option");

  categoryLabel.textContent = "Choose your project";
  categoryLabel.setAttribute("for", "category");

  defaultOption.textContent = "default";
  defaultOption.setAttribute("value", "default");
  category.appendChild(defaultOption);

  populateProjectOption(category);
  container.appendChild(categoryLabel);
  container.appendChild(category);
  parentNode.insertBefore(container, btn);
}

function editCard(index) {
  const card = document.querySelector(`div[data-index='${index}']`);
  card.innerHTML = "";
  const title = document.createElement("input");
  title.classList.add(`title${index}`);
  title.value = taskArr[index].title;

  const note = document.createElement("input");
  note.classList.add(`note${index}`);
  note.value = taskArr[index].note;

  const dueDate = document.createElement("input");
  dueDate.classList.add(`dueDate${index}`);
  dueDate.value = taskArr[index].dueDate;
  dueDate.setAttribute("type", "date");

  const priority = document.createElement("input");
  priority.classList.add(`priority${index}`);
  priority.value = taskArr[index].priority;
  priority.setAttribute("type", "range");
  priority.setAttribute("min", "1");
  priority.setAttribute("max", "3");

  const edit = document.createElement("button");
  edit.classList.add(`edit${index}`);
  edit.textContent = "edit";

  card.appendChild(title);
  card.appendChild(note);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(edit);
  addCategory(card, edit);
  const category = edit.previousSibling;
  category.classList.add(`category${index}`);
}

function editTaskInfo(index) {
  const titleVal = document.querySelector(`.title${index}`).value;
  const noteVal = document.querySelector(`.note${index}`).value;
  let dueDateVal = document.querySelector(`.dueDate${index}`).value;
  const priorityVal = document.querySelector(`.priority${index}`).value;
  const categoryVal = document.querySelector(`.category${index}`).value;
  let task = taskArr[index];
  task.title = titleVal;
  task.note = noteVal;
  if (dueDateVal == null || dueDateVal == "") {
    dueDateVal = new UTCDate();
  } else {
    dueDateVal = new UTCDate(dueDateVal);
  }
  task.dueDate = dueDateVal;
  task.priority = priorityVal;
  task.category = categoryVal;
  store(taskArr);
  renderTaskCard(taskArr);
}
