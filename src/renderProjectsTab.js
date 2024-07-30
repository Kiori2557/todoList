import { taskArr } from ".";
import { projectArr } from ".";
import { currentTab } from ".";
const content = document.querySelector(".content");
export function renderProject() {
  currentTab = "project";
  content.innerHTML = "";
  if (projectArr.length === 0) {
    content.textContent = "no project yet";
  }
  projectArr.forEach((project) => {
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
