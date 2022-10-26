import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ICardProp {
  toDo: string;
  index: number;
}

const Todocard = styled.li`
  background-color: #9b85ff;
  border-radius: 4px;
  text-align: center;
  padding: 2px 0;
  margin: 2px 10px;
  width: 90%;
`;

function Card({ toDo, index }: ICardProp) {
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Todocard
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          {toDo}
        </Todocard>
      )}
    </Draggable>
  );
}

export default React.memo(Card);
