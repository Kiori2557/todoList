import { generateEditDialog } from "./renderDialog";
import { format } from "date-fns";
import { renderTaskCard } from "./allTab";
import { store } from "./create";

export function createCard(item, arr, parent) {
  const card = document.createElement("div");
  const title = document.createElement("div");
  const dueDate = document.createElement("div");
  const statusContainer = document.createElement("div");
  const statusMark = document.createElement("span");
  const changeStatus = document.createElement("input");
  const deleteBtn = document.createElement("div");
  const editBtn = document.createElement("div");
  const moreBtn = document.createElement("div");
  title.textContent = item.title;
  card.classList.add(`priority-${item.priority}`);
  let dueDateContent = new Date(item.dueDate);
  dueDateContent = format(dueDateContent, "do MMM yyyy");

  dueDate.textContent = dueDateContent;
  dueDate.classList.add("date");
  statusContainer.classList.add("statusContainer");
  statusContainer.appendChild(changeStatus);
  statusMark.classList.add("checkmark");
  statusContainer.appendChild(statusMark);
  changeStatus.checked = item.status;
  statusContainer.addEventListener("click", () =>
    toggleStatus(changeStatus, arr)
  );
  deleteBtn.addEventListener("click", () => deleteItem(deleteBtn, arr));
  editBtn.addEventListener("click", () =>
    generateEditDialog(arr.indexOf(item))
  );
  moreBtn.addEventListener("click", () => showMore(moreBtn, arr));
  deleteBtn.classList.add("deleteBtn");
  editBtn.classList.add("editBtn");
  moreBtn.classList.add("moreBtn");
  deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`;
  editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>`;
  moreBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`;
  card.setAttribute("data-index", arr.indexOf(item));
  changeStatus.setAttribute("type", "checkbox");
  changeStatus.classList.add("changeStatus");
  title.classList.add("title");
  card.classList.add("taskCard");
  card.appendChild(dueDate);
  card.appendChild(title);
  card.appendChild(statusContainer);
  card.appendChild(deleteBtn);
  card.appendChild(editBtn);
  card.appendChild(moreBtn);
  parent.appendChild(card);
}
function toggleStatus(changeStatus, arr) {
  let parentNode = changeStatus.parentNode;
  let index = parentNode.parentNode.getAttribute("data-index");
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

function showMore(moreBtn, arr) {
  const showDetail = document.querySelector(".showDetail");
  let parentNode = moreBtn.parentNode;
  let index = parentNode.getAttribute("data-index");
  let task = arr[index];
  const note = document.createElement("span");
  note.textContent = task.note;

  if (!parentNode.classList.contains("showMore")) {
    parentNode.classList.add("showMore");
  }
  console.log("hi");

  if (showDetail.hasAttribute("open")) {
    console.log("close");
    showDetail.close();
  } else {
    console.log("open");
    detailCard(task, showDetail);
    showDetail.show();
  }
}
function detailCard(task, parent) {
  parent.innerHTML = "";
  const container = document.createElement("div");
  const title = document.createElement("div");
  const dueDate = document.createElement("div");
  const note = document.createElement("div");
  const priority = document.createElement("div");
  const category = document.createElement("div");
  const status = document.createElement("div");
  const deleteBtn = document.createElement("div");
  const editBtn = document.createElement("div");

  title.innerHTML = `<span class="detailLabel">title</span> : ${task.title}`;
  let dueDateContent = new Date(task.dueDate);
  dueDateContent = format(dueDateContent, "do MMM yyyy");
  dueDate.innerHTML = `<span class="detailLabel">date</span> : ${dueDateContent}`;
  note.innerHTML = `<span class="detailLabel">note</span>: ${task.note}`;
  let priorityContent;
  if (task.priority == 1) {
    priorityContent = "low";
  } else if (task.priority == 2) {
    priorityContent = "normal";
  } else if (task.priority == 3) {
    priorityContent = "high";
  }
  priority.innerHTML = `<span class="detailLabel">priority</span>: ${priorityContent}`;
  category.innerHTML = `<span class="detailLabel">category</span>: ${task.category}`;
  let statusContent = task.status ? "completed" : "ongoing";
  status.innerHTML = `<span class="detailLabel">status</span>: ${statusContent}`;
  deleteBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`;
  editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>`;
  deleteBtn.classList.add("detailDelete");
  editBtn.classList.add("detailEdit");
  container.classList.add("detailContainer");
  container.classList.add(`priority-${task.priority}`);
  container.appendChild(dueDate);
  container.appendChild(title);
  container.appendChild(note);
  container.appendChild(priority);
  container.appendChild(category);
  container.appendChild(status);
  container.appendChild(deleteBtn);
  container.appendChild(editBtn);
  parent.appendChild(container);
}
