import { projectArr, taskArr } from ".";
import { sortByBtn } from ".";
import { renderTaskCard } from "./allTab";
import { renderProject } from "./renderProjectsTab";
import { currentTab } from ".";
export function sortBy() {
  let arr;
  if (currentTab === "all") {
    arr = taskArr;
    let sortTask = sort(arr);
    sortTask(renderTaskCard);
  } else if (currentTab == "project") {
    console.log("hi from project");
    arr = projectArr;
    let sortTask = sort(arr);
    sortTask(renderProject);
  }
}

function sort(arr) {
  const sortArr = arr;
  return function sortTask(func) {
    if (sortByBtn.value == "dueDate") {
      let ascArr = sortArr.toSorted(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
      func(ascArr);
    } else if (sortByBtn.value == "priority") {
      let ascArr = sortArr.toSorted((a, b) => b.priority - a.priority);
      func(ascArr);
    }
  };
}

export function getProjectTask(projectTitle) {
  let projectTaskArr = taskArr.filter((task) => task.category == projectTitle);
  renderTaskCard(projectTaskArr);
}
