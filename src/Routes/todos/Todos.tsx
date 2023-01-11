import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { RTodoList } from "../../atoms";
import CreateCategory from "../../components/Todo/CreateCategory";
import CreateTodo from "../../components/Todo/CreateTodo";
import TodoCard from "../../components/Todo/TodoCard";

const TodoListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  hr {
    width: 80%;
  }
`;

const Forms = styled.div`
  width: 80%;
`;

const BoxAddTodo = styled.div`
  display: flex;
  justify-content: center;
`;

const CardList = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 0 8px;
`;

function Todos() {
  const [category, setCategory] = useState("to_do");
  const todosList = useRecoilValue(RTodoList);

  const selectCategory = (e: React.MouseEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };

  const todosKeys = Object.keys(todosList);

  return (
    <TodoListBox>
      <h1>Todo</h1>
      <hr />
      <Forms>
        <BoxAddTodo>
          <select value={category} onInput={selectCategory}>
            {todosKeys.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <CreateTodo category={category} />
        </BoxAddTodo>
        <CreateCategory />
      </Forms>
      <hr />
      <CardList>
        {todosList[category]?.map((data) => {
          return (
            <TodoCard
              key={data.id}
              id={data.id}
              text={data.text}
              category={category}
              categorys={todosKeys}
            />
          );
        })}
      </CardList>
    </TodoListBox>
  );
}

export default Todos;
