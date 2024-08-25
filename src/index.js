import "./style.css";
import { showDialog } from "./renderDialog";
import { create } from "./create";
import { renderTaskCard } from "./allTab";
import { sortBy as sortByFunc } from "./sort&filter";
import { renderProject } from "./renderProjectsTab";

export const sortByBtn = document.querySelector("#sortBy");
const newTask = document.querySelector(".newTask");
const newProject = document.querySelector(".newProject");
const projectTab = document.querySelector(".projectHead");
const createBtn = document.querySelector(".create");
const allTask = document.querySelector(".allTask");

export let currentTab = "all";
export let taskArr = JSON.parse(localStorage.getItem("taskArray")) || [];

export let projectArr = JSON.parse(localStorage.getItem("projectArray")) || [];

window.addEventListener("load", () => renderTaskCard(taskArr));

newTask.addEventListener("click", () => showDialog("task"));
newProject.addEventListener("click", () => showDialog("project"));
createBtn.addEventListener("click", create);

allTask.addEventListener("click", () => renderTaskCard(taskArr));

sortByBtn.addEventListener("change", () => {
  sortByFunc();
});

projectTab.addEventListener("click", () => {
  renderProject(projectArr);
});
