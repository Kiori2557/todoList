import { taskArr } from ".";
import { sortByBtn } from ".";
import { renderTaskCard } from "./allTab";
export function sortBy() {
  if (sortByBtn.value == "dueDate") {
    let ascTaskArr = taskArr.toSorted(
      (a, b) => a.dueDate.getTime() - b.dueDate.getTime()
    );
    renderTaskCard(ascTaskArr);
  } else if (sortByBtn.value == "priority") {
    let ascTaskArr = taskArr.toSorted((a, b) => b.priority - a.priority);
    renderTaskCard(ascTaskArr);
  }
}
