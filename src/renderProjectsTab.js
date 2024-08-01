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
    // const title = document.createElement("h5");
    // title.textContent = project.title;

    // let taskArray = taskArr.filter((task) => task.category === project.title);
    // taskArray.forEach((task) => {
    //   const taskTitle = document.createElement("p");
    //   taskTitle.textContent = task.title;
    //   title.appendChild(taskTitle);
    // });
    // content.appendChild(title);
  });
}
