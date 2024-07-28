import "./style.css";
import { generateDialog } from "./renderDialog";
import { showDialog } from "./create";
import { create } from "./create";
import { createTaskCards } from "./renderTaskCard";

const newTask = document.querySelector(".newTask");
const newProject = document.querySelector(".newProject");
const createBtn = document.querySelector(".create");
export const taskArr = [];
export const projectArr = [];

newTask.addEventListener("click", () => showDialog("task"));
newProject.addEventListener("click", () => showDialog("project"));
createBtn.addEventListener("click", create);
createBtn.addEventListener("click", createTaskCards);
