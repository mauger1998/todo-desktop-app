import { newTaskArray } from "./index.js";

function getLocal() {
  const returnedTask = JSON.parse(localStorage.getItem("Stored Tasks"));
  return returnedTask;
}

function setLocal() {
  localStorage.setItem("Stored Tasks", JSON.stringify(newTaskArray));
}

export { getLocal };
export { setLocal };
