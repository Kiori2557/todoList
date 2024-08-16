import { store } from "./create";
import { projectArr, taskArr } from ".";
import { renderTaskCard } from "./allTab";
import { getProjectTask } from "./sort&filter";
export const projectListContainer = document.querySelector(".projectList");
export function populateProjectList() {
  projectListContainer.innerHTML = "";
  projectArr.forEach((project) => {
    const projectLi = document.createElement("li");
    const deleteProjectBtn = document.createElement("span");
    deleteProjectBtn.innerHTML = `<svg class="icon" width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 15C25 16.1063 24.3125 17 23.4615 17H6.53846C5.6875 17 5 16.1063 5 15C5 13.8937 5.6875 13 6.53846 13H23.4615C24.3125 13 25 13.8937 25 15Z" fill="#3B5891"/>
</svg>
`;
    projectLi.classList.add(`project-${projectArr.indexOf(project)}`);
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
