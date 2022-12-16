import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { RTodoList } from "../atoms";

const FormBox = styled.form`
  display: flex;
  justify-content: center;

  select {
    width: 30%;
    margin-right: 5px;
  }

  input {
    margin-right: 5px;
  }

  button {
    width: 20%;
  }
`;
interface IProp {
  category: string;
}

function CreateTodo({ category }: IProp) {
  const [todoName, setTodoName] = useState("");
  const setTodoList = useSetRecoilState(RTodoList);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList((allTodos) => {
      const newTodo = {
        id: Date.now(),
        text: todoName,
      };
      return { ...allTodos, [category]: [...allTodos[category], newTodo] };
    });
    setTodoName("");
  };

  return (
    <>
      <FormBox onSubmit={addTodo}>
        <input type="text" value={todoName} onChange={onChangeTodo} />
        <button>Enter</button>
      </FormBox>
    </>
  );
}

export default CreateTodo;
