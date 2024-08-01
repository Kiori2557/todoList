import "./style.css";
import { showDialog } from "./renderDialog";
import { create } from "./create";
import { renderTaskCard } from "./allTab";
import { sortBy as sortByFunc } from "./sort";
import { showPriorityVal } from "./renderDialog";
import { renderProject } from "./renderProjectsTab";

export const sortByBtn = document.querySelector("#sortBy");
const newTask = document.querySelector(".newTask");
const newProject = document.querySelector(".projectHead>.icon");
const projectTab = document.querySelector(".projectHead>.label");
const createBtn = document.querySelector(".create");
const allTask = document.querySelector(".allTask");
export let currentTab = "all";
export let taskArr = [
  // {
  //   title: "hi",
  //   note: "hello",
  //   dueDate: new Date("Mon Jul 29 2024 06:30:00 GMT+0630 (Myanmar Time)"),
  //   priority: 3,
  //   category: "",
  //   status: "",
  // },
];
// new Array(JSON.parse(localStorage.getItem("taskArray")))

export const projectArr = [];

window.addEventListener("load", () => renderTaskCard(taskArr));

newTask.addEventListener("click", () => showDialog("task"));
newProject.addEventListener("click", () => showDialog("project"));
createBtn.addEventListener("click", create);

allTask.addEventListener("click", () => renderTaskCard(taskArr));

sortByBtn.addEventListener("change", sortByFunc);
priority.addEventListener("mousemove", showPriorityVal);

projectTab.addEventListener("click", renderProject);
