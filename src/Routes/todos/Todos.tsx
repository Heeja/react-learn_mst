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
  margin: 10px 20px;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #19a369;
  }

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

  select {
    min-width: 60px;
    margin-right: 6px;
  }
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 0 20px;
`;

function Todos() {
  const [category, setCategory] = useState("");
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
        <CreateCategory setCategory={setCategory} />
        <BoxAddTodo>
          <select value={category} onInput={selectCategory}>
            <option value="" disabled hidden>
              Add Category
            </option>
            {todosKeys.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <CreateTodo category={category} />
        </BoxAddTodo>
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
