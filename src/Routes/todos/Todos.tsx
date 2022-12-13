import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { RTodoList } from "../../atoms";
import CreateTodo from "../../components/CreateTodo";
import TodoCard from "../../components/TodoCard";

const TodoListBox = styled.div`
  width: 80%;
  text-align: center;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding: 0 8px;
`;

function Todos() {
  const todosList = useRecoilValue(RTodoList);

  return (
    <TodoListBox>
      <h1>Todo</h1>
      <hr />

      <CreateTodo />
      <hr />
      <CardList>
        {todosList.map((todoCard) => (
          <TodoCard key={todoCard.id} {...todoCard} />
        ))}
      </CardList>
    </TodoListBox>
  );
}

export default Todos;
