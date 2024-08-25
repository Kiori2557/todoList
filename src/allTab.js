import { taskArr } from ".";
import { currentTab } from ".";
import { createCard } from "./card";
import { populateProjectList } from "./populateDom";

const content = document.querySelector(".content");

export function renderTaskCard(arr) {
  populateProjectList();
  currentTab = "all";
  content.innerHTML = "";
  if (arr === undefined || arr.length == 0 || arr[0] == null) {
    const noTask = document.createElement("p");
    content.textContent = "there is no task to do yet";
    content.appendChild(noTask);
    return;
  } else {
    arr.forEach((task) => {
      createCard(task, arr, content);
    });
  }
}
