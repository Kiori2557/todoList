import { taskArr } from ".";
import { currentTab } from ".";
const content = document.querySelector(".content");
export function renderProject(arr) {
  currentTab = "project";
  content.innerHTML = "";
  if (arr === undefined || arr.length === 0) {
    content.textContent = "no project yet";
    return;
  }
  arr.forEach((project) => {
    const title = document.createElement("h5");
    title.textContent = project.title;

    let taskArray = taskArr.filter((task) => task.category === project.title);
    taskArray.forEach((task) => {
      const taskTitle = document.createElement("p");
      taskTitle.textContent = task.title;
      title.appendChild(taskTitle);
    });
    content.appendChild(title);
  });
}
