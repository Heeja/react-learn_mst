import { atom } from "recoil";

export interface ITodosProps {
  [key: string]: string[];
}

export interface ICategoryProps {
  toDos: string[];
  boardId: string;
  index: number;
  setTodos: any;
}
export interface IBoardProps {
  toDos: string[];
  boardId: string;
  setTodos: any;
}

export const toDoState = atom<ITodosProps>({
  key: "toDos",
  default: {
    todo: ["h", "e", "l", "o", "w", "y"],
    doing: ["1", "2", "3"],
    done: ["ㅁ", "ㄴ", "ㅇ"],
    delete: [],
  },
});
