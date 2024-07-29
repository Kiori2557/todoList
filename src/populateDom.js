import { projectArr } from ".";
export const projectListContainer = document.querySelector(".projectList");
export function populateProjectList() {
  projectArr.forEach((project) => {
    const projectLi = document.createElement("li");
    projectLi.textContent = project.title;
    projectListContainer.appendChild(projectLi);
  });
}
