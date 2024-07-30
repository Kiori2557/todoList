import "./style.css";
import { generateDialog } from "./renderDialog";
import { showDialog } from "./renderDialog";
import { create } from "./create";
import { renderTaskCard } from "./renderAllTab";
import { sortBy as sortByFunc } from "./renderAllTab";
import { showPriorityVal } from "./renderDialog";

const sortByBtn = document.querySelector("#sortBy");
const newTask = document.querySelector(".newTask");
const newProject = document.querySelector(".projectHead>.icon");
const createBtn = document.querySelector(".create");
const allTask = document.querySelector(".allTask");
const priority = document.querySelector("#priority");
export const taskArr = [];
export const projectArr = [];

window.addEventListener("load", () => renderTaskCard(taskArr));

newTask.addEventListener("click", () => showDialog("task"));
newProject.addEventListener("click", () => showDialog("project"));
createBtn.addEventListener("click", create);

allTask.addEventListener("click", () => renderTaskCard(taskArr));

sortByBtn.addEventListener("change", sortByFunc);
priority.addEventListener("mousemove", showPriorityVal);
