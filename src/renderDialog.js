import { populateProjectOption } from "./populateDom";
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
