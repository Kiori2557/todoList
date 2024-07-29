import { populateProjectOption } from "./populateDom";
const createBtn = document.querySelector(".create");
const dialog = document.querySelector("dialog");
const newTaskForm = document.querySelector(".addNewTask");

const type = document.querySelector("#type");
export function generateTaskDialog() {
  type.value = "task";
  const projectSelectorLabel = document.createElement("label");
  const projectSelector = document.createElement("select");

  projectSelector.classList.add("category");
  projectSelector.setAttribute("type", "option");

  const defaultOption = document.createElement("option");

  projectSelectorLabel.textContent = "Choose your project";
  projectSelectorLabel.classList.add("categoryLabel");

  defaultOption.textContent = "default";
  defaultOption.setAttribute("value", "default");
  defaultOption.setAttribute("disable", "");
  defaultOption.setAttribute("hidden", "");
  projectSelector.appendChild(defaultOption);

  populateProjectOption(projectSelector);

  const parentNode = createBtn.parentNode;
  parentNode.insertBefore(projectSelectorLabel, createBtn);
  parentNode.insertBefore(projectSelector, createBtn);
}
export function generateProjectDialog() {
  type.value = "project";
}

export function removeTaskNode() {
  const parentNode = createBtn.parentNode;
  const category = document.querySelector(".category");
  const categoryLabel = document.querySelector(".categoryLabel");
  parentNode.removeChild(category);
  parentNode.removeChild(categoryLabel);
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
