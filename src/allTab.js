import { taskArr } from ".";
import { currentTab } from ".";
import { generateEditDialog } from "./renderDialog";
const content = document.querySelector(".content");

export function renderTaskCard(arr) {
  currentTab = "all";
  content.innerHTML = "";
  if (arr.length === 0) {
    const noTask = document.createElement("p");
    content.textContent = "there is no task to do yet";
    content.appendChild(noTask);
    return;
  }
  arr.forEach((task) => createTaskCard(task, arr));
}

function createTaskCard(task, arr) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const note = document.createElement("div");
  const dueDate = document.createElement("div");
  const priority = document.createElement("div");
  const category = document.createElement("div");
  const status = document.createElement("div");
  const changeStatus = document.createElement("input");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  title.textContent = task.title;
  note.textContent = task.note;
  dueDate.textContent = task.dueDate;
  changeStatus.addEventListener("click", () => changeTaskStatus(changeStatus));
  deleteBtn.addEventListener("click", () => {
    deleteTask(deleteBtn);
  });
  editBtn.addEventListener("click", () =>
    generateEditDialog(arr.indexOf(task))
  );
  priority.textContent = task.priority;
  category.textContent = task.category;
  task.status
    ? (status.textContent = "done")
    : (status.textContent = "on process");
  deleteBtn.textContent = "delete";
  editBtn.textContent = "edit";

  card.setAttribute("data-index", arr.indexOf(task));
  changeStatus.setAttribute("type", "checkbox");
  changeStatus.classList.add("changeStatus");
  card.classList.add("taskCard");
  card.appendChild(title);
  card.appendChild(note);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(category);
  card.appendChild(status);
  card.appendChild(changeStatus);
  card.appendChild(deleteBtn);
  card.appendChild(editBtn);
  content.appendChild(card);
}

function changeTaskStatus(changeStatus) {
  let parentNode = changeStatus.parentNode;
  let index = parentNode.getAttribute("data-index");
  console.log(parentNode);
  taskArr[index].status = !taskArr[index].status;
  renderTaskCard(taskArr);
}

function deleteTask(deleteBtn) {
  let parentNode = deleteBtn.parentNode;
  let index = parentNode.getAttribute("data-index");
  taskArr.splice(index, 1);
  renderTaskCard(taskArr);
}
