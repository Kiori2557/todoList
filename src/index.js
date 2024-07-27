import "./style.css";
import { showNewTaskForm } from "./create";
import { createNewTask } from "./create";
import { createTaskCards } from "./renderTaskCard";
const createTask = document.querySelector(".createTask");
const createNew = document.querySelector(".createNew");
export const taskArray = [{ title: 1 }];

createNew.addEventListener("click", showNewTaskForm);
createTask.addEventListener("click", createNewTask);
createTask.addEventListener("click", createTaskCards);
