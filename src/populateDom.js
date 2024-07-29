import { projectArr } from ".";
export const projectListContainer = document.querySelector(".projectList");
export function populateProjectList() {
  projectArr.forEach((project) => {
    const projectLi = document.createElement("li");
    projectLi.textContent = project.title;
    projectListContainer.appendChild(projectLi);
  });
}

export function populateProjectOption(parentNode) {
  if (projectArr.length === 0) return;
  projectArr.forEach((project) => {
    const option = document.createElement("option");
    option.setAttribute("value", project.title);
    option.textContent = project.title;
    parentNode.appendChild(option);
  });
}
