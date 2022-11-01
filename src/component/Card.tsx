import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ITodosProps } from "../atoms";

interface ICardProp {
  toDo: string;
  index: number;
  setTodos: any;
  boardId: string;
}

const Todocard = styled.li`
  background-color: #9b85ff;
  border-radius: 4px;
  text-align: center;
  padding: 2px 2px;
  margin: 2px 2px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardTitle = styled.p`
  width: 76%;
`;

const DelBtn = styled.button`
  width: 20px;
  height: 20px;
  background-color: #9b35ff;
  color: snow;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  visibility: hidden;
  hover: {
    visibility: visible;
  }
`;

function Card({ toDo, index, setTodos, boardId }: ICardProp) {
  const onClick = (e: React.FormEvent<HTMLButtonElement>) => {
    setTodos((e: ITodosProps) => {
      const sourBoard = [...e[boardId]];
      sourBoard.splice(index, 1);
      return { ...e, [boardId]: sourBoard };
    });
  };
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Todocard
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          <CardTitle>{toDo}</CardTitle>
          <DelBtn type="button" onClick={onClick} hidden>
            <p>X</p>
          </DelBtn>
        </Todocard>
      )}
    </Draggable>
  );
}

export default React.memo(Card);
