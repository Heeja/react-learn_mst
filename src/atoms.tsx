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
