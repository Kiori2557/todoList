import { taskArr, projectArr } from ".";
import { currentTab } from ".";
import { createCard } from "./card";
import { getProjectTask } from "./sort&filter";
const content = document.querySelector(".content");
export function renderProject(arr) {
  currentTab = "project";
  content.innerHTML = "";
  if (arr === undefined || arr.length === 0) {
    content.textContent = "no project yet";
    return;
  }
  arr.forEach((project) => {
    let index = arr.indexOf(project);
    createCard(project, projectArr, content);
    const description = document.createElement("div");
    description.textContent = project.description;
    const card = document.querySelector(`div[data-index='${index}']`);
    const note = card.querySelector(`.note`);
    const title = card.querySelector(`.title`);
    card.addEventListener("click", () => getProjectTask(title));
    card.insertBefore(description, note);
  });
}
