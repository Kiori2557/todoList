const createBtn = document.querySelector(".create");

const type = document.querySelector("#type");
export function generateTaskDialog() {
  type.value = "task";
  const projectSelectorLabel = document.createElement("label");
  const projectSelector = document.createElement("select");

  projectSelector.classList.add("category");
  projectSelector.setAttribute("type", "option");

  const option = document.createElement("option");

  projectSelectorLabel.textContent = "Choose your project";
  projectSelectorLabel.classList.add("categoryLabel");

  option.textContent = "default";
  option.setAttribute("value", "default");
  projectSelector.appendChild(option);
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
