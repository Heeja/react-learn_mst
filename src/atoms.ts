import { atom, selector } from "recoil";

interface ITodosProps {
  [key: string]: string[];
}

export const toDoState = atom<ITodosProps>({
  key: "toDos",
  default: {
    to_do: ["h", "e", "l", "o", "w", "y"],
    doing: ["2"],
    done: ["3"],
  },
});
