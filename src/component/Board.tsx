import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import { IBoardProps, ITodosProps } from "../atoms";

import Card from "./Card";

const DropBoard = styled.ul`
  background-color: #ffc191;
  border-radius: 4px;
  padding: 5px 0;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoryName = styled.h2`
  text-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

const FormBoard = styled.form`
  width: 90%;
  text-align: center;
`;

const AddCard = styled.input`
  width: inherit;
`;

function Board({ boardId, toDos, setTodos }: IBoardProps) {
  const [cardName, setCardname] = useState("");
  // console.log(cardName);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setCardname(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!toDos.includes(cardName)) {
      setTodos((e: ITodosProps) => {
        const sourBoard = [...e[boardId], cardName];
        setCardname("");
        return { ...e, [boardId]: sourBoard };
      });
    } else {
      setCardname("");
      return alert("같은 이름의 카드가 등록되어있습니다.");
    }
  };

  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <DropBoard ref={magic.innerRef} {...magic.droppableProps}>
          <CategoryName>{boardId}</CategoryName>

          <FormBoard onSubmit={onSubmit}>
            <AddCard
              value={cardName}
              onChange={onChange}
              type="text"
              name="addCard"
              placeholder="Add Card..."
            />
          </FormBoard>

          {toDos.map((toDos, index) => (
            <Card
              key={toDos}
              toDo={toDos}
              index={index}
              setTodos={setTodos}
              boardId={boardId}
            />
          ))}
          {magic.placeholder}
        </DropBoard>
      )}
    </Droppable>
  );
}

export default Board;
