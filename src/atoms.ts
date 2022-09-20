import { atom, selector } from "recoil";

export const toDoState = atom({
  key: "toDo",
  default: ["h", "e", "l", "o", "w", "y"],
});
