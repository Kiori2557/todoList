import { taskArr, projectArr } from ".";
import { currentTab } from ".";
import { createCard } from "./card";
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
    card.insertBefore(description, note);
  });
}
