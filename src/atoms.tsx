import { atom, selector } from "recoil";

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

// export const toDoSelector = selector({
//   key: "toDoSelector",
//   get: ({ get }) => {
//     const toDos = get(RTodoList);
//     const category = get(Object.keys(RTodoList));
//     return toDos.filter((toDo) => toDo.category === category);
//   },
// });
