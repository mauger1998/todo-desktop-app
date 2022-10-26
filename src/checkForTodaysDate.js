import { format } from "date-fns";
import { newTaskArray } from "./index.js";

const todaysDateArray = [];

function checkDate() {
  const red = document.querySelector(".red");
  let counter = 0;
  for (let i = 0; i < newTaskArray.length; i++) {
    const date = new Date();
    const dateFormat = format(date, "yyyy-MM-dd");

    if (newTaskArray[i].dueDate == dateFormat) {
      ++counter;
      red.classList.add("show");
      red.textContent = counter;
      todaysDateArray.push(newTaskArray[i]);
    }
  }
}

export { todaysDateArray };

export { checkDate };
