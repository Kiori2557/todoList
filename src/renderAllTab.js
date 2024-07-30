import { taskArr } from ".";
import { compareAsc } from "date-fns";
const content = document.querySelector(".content");

export function renderTaskCard(arr) {
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

    title.textContent = task.title;
    note.textContent = task.note;
    dueDate.textContent = task.dueDate;
    priority.textContent = task.priority;
    category.textContent = task.category;
    task.status
      ? (status.textContent = "done")
      : (status.textContent = "on process");

    card.classList.add("taskCard");
    card.appendChild(title);
    card.appendChild(note);
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(category);
    card.appendChild(status);
    content.appendChild(card);
  });
  console.log(taskArr);
}

export function sortBy() {
  let ascTaskArr = taskArr.toSorted(
    (a, b) => a.dueDate.getTime() - b.dueDate.getTime()
  );
  renderTaskCard(ascTaskArr);
}
