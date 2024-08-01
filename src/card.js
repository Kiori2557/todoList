import { generateEditDialog } from "./renderDialog";
import { renderTaskCard } from "./allTab";
import { isValid } from "date-fns";
import { store } from "./create";

export function createCard(item, arr, parent) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const note = document.createElement("div");
  const dueDate = document.createElement("div");
  const priority = document.createElement("div");
  const status = document.createElement("div");
  const changeStatus = document.createElement("input");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");
  title.textContent = item.title;
  note.textContent = item.note;
  note.classList.add("note");
  if (isValid(item.dueDate)) {
    dueDate.textContent = item.dueDate;
  }
  changeStatus.checked = item.status;
  changeStatus.addEventListener("click", () => toggleStatus(changeStatus, arr));
  deleteBtn.addEventListener("click", () => {
    deleteItem(deleteBtn, arr);
  });
  editBtn.addEventListener("click", () =>
    generateEditDialog(arr.indexOf(item))
  );
  priority.textContent = item.priority;
  item.status
    ? (status.textContent = "done")
    : (status.textContent = "on process");
  status.classList.add("status");
  deleteBtn.textContent = "delete";
  editBtn.textContent = "edit";
  console.log(`from card ${arr.indexOf(item)}`);
  card.setAttribute("data-index", arr.indexOf(item));
  changeStatus.setAttribute("type", "checkbox");
  changeStatus.classList.add("changeStatus");
  card.classList.add("taskCard");
  card.appendChild(title);
  card.appendChild(note);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(status);
  card.appendChild(changeStatus);
  card.appendChild(deleteBtn);
  card.appendChild(editBtn);
  parent.appendChild(card);
}
function toggleStatus(changeStatus, arr) {
  let parentNode = changeStatus.parentNode;
  let index = parentNode.getAttribute("data-index");
  console.log(parentNode);
  arr[index].status = !arr[index].status;
  store(arr);
  renderTaskCard(arr);
}

function deleteItem(deleteBtn, arr) {
  let parentNode = deleteBtn.parentNode;
  let index = parentNode.getAttribute("data-index");
  arr.splice(index, 1);
  console.log(arr);
  store(arr);
  renderTaskCard(arr);
}
