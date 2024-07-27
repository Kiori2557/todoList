import { taskArray } from ".";
const content = document.querySelector(".content");
export function createTaskCards() {
  content.innerHTML = "";
  taskArray.forEach((task) => {
    const card = document.createElement("div");
    const title = document.createElement("div");
    title.textContent = task.title;
    card.appendChild(title);
    displayTaskCards(card);
  });
}
function displayTaskCards(card) {
  content.appendChild(card);
}
