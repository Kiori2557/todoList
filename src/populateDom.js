import { store } from "./create";
import { projectArr, taskArr } from ".";
import { renderTaskCard } from "./allTab";
import { getProjectTask } from "./sort&filter";
export const projectListContainer = document.querySelector(".projectList");
export function populateProjectList() {
  projectListContainer.innerHTML = "";
  projectArr.forEach((project) => {
    const projectLi = document.createElement("li");
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "x";
    projectLi.classList.add(`project${projectArr.indexOf(project)}`);
    projectLi.setAttribute("data-index", projectArr.indexOf(project));
    projectLi.textContent = project.title;
    projectListContainer.appendChild(projectLi);
    projectLi.appendChild(deleteProjectBtn);
    deleteProjectBtn.addEventListener("click", () => {
      deleteProject(deleteProjectBtn);
    });
    projectLi.addEventListener("click", () => getProjectTask(project.title));
  });
}

export function populateProjectOption(parentNode) {
  if (projectArr === null || projectArr.length === 0) return;
  projectArr.forEach((project) => {
    const option = document.createElement("option");
    option.setAttribute("value", project.title);
    option.textContent = project.title;
    parentNode.appendChild(option);
  });
}

function deleteProject(deleteProjectBtn) {
  let parentNode = deleteProjectBtn.parentNode;
  let index = parentNode.getAttribute("data-index");
  projectArr.splice(index, 1);
  store(projectArr);
  renderTaskCard(taskArr);
}
