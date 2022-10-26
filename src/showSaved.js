import { returnedData, newTaskArray } from "./index.js";
import { displayTask } from "./displayTask.js";

function makeSavedDataAppear() {
  returnedData.forEach((data) => {
    displayTask(newTaskArray);
  });
}

export { makeSavedDataAppear };
