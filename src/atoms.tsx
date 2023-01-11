import { atom } from "recoil";

export interface IToDo {
  id: number;
  text: string;
}

export interface IToDoState {
  [key: string]: IToDo[];
}

const localStorageEffect =
  (localKey: string) =>
  ({ setSelf, onSet }: any) => {
    const localData = localStorage.getItem(localKey);
    if (localData != null) {
      setSelf(JSON.parse(localData));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(localKey)
        : localStorage.setItem(localKey, JSON.stringify(newValue));
    });
  };

export const RTodoList = atom<IToDoState>({
  key: "TodoList",
  default: {},
  effects: [localStorageEffect("todosList")],
});

export const CategoryList = atom({
  key: "Categorys",
  default: [] as string[],
});
export const NTodosList = atom<IToDoState>({
  key: "todos",
  default: {},
});
