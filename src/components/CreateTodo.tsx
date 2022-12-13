import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Categories, categoryState, RTodoList } from "../atoms";

function CreateTodo() {
  const [todoName, setTodoName] = useState("");
  const [category, setCategory] = useRecoilState(categoryState);
  const setTodoList = useSetRecoilState(RTodoList);

  const onChangeTodo = (e: any) => {
    setTodoName(e.target.value);
  };

  const addTodo = (e: any) => {
    e.preventDefault();
    setTodoList((oldList) => [
      ...oldList,
      { id: Date.now(), text: todoName, category: category },
    ]);
    setTodoName("");
  };

  const selectCategory = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };

  return (
    <>
      <form action="" onSubmit={addTodo}>
        <select value={category} onInput={selectCategory}>
          <option value={Categories.TO_DO}>To do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
        <input type="text" value={todoName} onChange={onChangeTodo} />
        <button>Enter</button>
      </form>
    </>
  );
}

export default CreateTodo;
