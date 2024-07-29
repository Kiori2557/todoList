import "./style.css";
import { generateDialog } from "./renderDialog";
import { showDialog } from "./create";
import { create } from "./create";
import { renderTaskCard } from "./renderAllTab";

const newTask = document.querySelector(".newTask");
const newProject = document.querySelector(".projectHead>.icon");
const createBtn = document.querySelector(".create");
const allTask = document.querySelector(".allTask");
export const taskArr = [];
export const projectArr = [];

window.addEventListener("load", renderTaskCard);

newTask.addEventListener("click", () => showDialog("task"));
newProject.addEventListener("click", () => showDialog("project"));
createBtn.addEventListener("click", create);

allTask.addEventListener("click", renderTaskCard);
