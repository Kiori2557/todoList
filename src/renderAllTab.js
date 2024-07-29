import { taskArr } from ".";
const content = document.querySelector(".content");
export function renderTaskCard() {
  content.innerHTML = "";
  if (taskArr.length === 0) {
    const noTask = document.createElement("p");
    content.textContent = "there is no task to do yet";
    content.appendChild(noTask);
  }
  taskArr.forEach((task) => {
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
}
