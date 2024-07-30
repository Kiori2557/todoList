import { taskArr } from ".";
import { sortByBtn } from ".";
import { isValid } from "date-fns";
import { currentTab } from ".";
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
  arr.forEach((task) => {
    const card = document.createElement("div");
    const title = document.createElement("div");
    const note = document.createElement("div");
    const dueDate = document.createElement("div");
    const priority = document.createElement("div");
    const category = document.createElement("div");
    const status = document.createElement("div");
    const complete = document.createElement("input");
    title.textContent = task.title;
    note.textContent = task.note;
    if (isValid(task.dueDate)) {
      dueDate.textContent = task.dueDate;
    }
    complete.addEventListener("click", () =>
      changeTaskStatus(complete, status)
    );
    priority.textContent = task.priority;
    category.textContent = task.category;
    task.status
      ? (status.textContent = "done")
      : (status.textContent = "on process");

    card.setAttribute("data-index", arr.indexOf(task));
    complete.setAttribute("type", "checkbox");
    complete.classList.add("complete");
    card.classList.add("taskCard");
    card.appendChild(title);
    card.appendChild(note);
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(category);
    card.appendChild(status);
    card.appendChild(complete);
    content.appendChild(card);
  });
  console.log(taskArr);
}

export function sortBy() {
  if (sortByBtn.value == "dueDate") {
    let ascTaskArr = taskArr.toSorted(
      (a, b) => a.dueDate.getTime() - b.dueDate.getTime()
    );
    renderTaskCard(ascTaskArr);
  } else if (sortByBtn.value == "priority") {
    let ascTaskArr = taskArr.toSorted((a, b) => b.priority - a.priority);
    renderTaskCard(ascTaskArr);
  }
}

export function changeTaskStatus(complete, status) {
  let parentNode = complete.parentNode;
  let index = parentNode.getAttribute("data-index");
  console.log(parentNode);
  taskArr[index].status = !taskArr[index].status;
  if (complete.checked) {
    status.textContent = "done";
  } else if (!complete.checked) {
    status.textContent = "on process";
  }
}
