import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: IToDo[];
}

export const RTodoList = atom<IToDoState>({
  key: "TodoList",
  default: {
    to_do: [],
    doing: [],
    done: [],
  },
});

export const CategoryList = atom({
  key: "Categorys",
  default: [] as string[],
});
export const NTodosList = atom<IToDoState>({
  key: "todos",
  default: {},
});

// to_do: [
//   { id: 1, text: "todoTest1" },
//   { id: 2, text: "todoTest2" },
// ],
// doing: [
//   { id: 1, text: "doingTest1" },
//   { id: 2, text: "doingTest2" },
// ],
// done: [
//   { id: 1, text: "doneTest1" },
//   { id: 2, text: "doneTest2" },
// ],
