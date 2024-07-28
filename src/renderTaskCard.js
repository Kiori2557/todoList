import { taskArr } from ".";
const content = document.querySelector(".content");
export function createTaskCards() {
  content.innerHTML = "";
  taskArr.forEach((task) => {
    const card = document.createElement("div");
    const title = document.createElement("div");
    const description = document.createElement("div");
    const dueDate = document.createElement("div");
    const priority = document.createElement("div");
    const category = document.createElement("div");
    title.textContent = task.title;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;
    priority.textContent = task.priority;
    category.textContent = task.category;
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(dueDate);
    card.appendChild(priority);
    card.appendChild(category);
    content.appendChild(card);
  });
}
