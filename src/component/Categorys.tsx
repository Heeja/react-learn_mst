import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

import Board from "./Board";
import { ICategoryProps } from "../atoms";

const Category = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

function Categorys({ toDos, boardId, index, setTodos }: ICategoryProps) {
  return (
    <Draggable key={boardId} draggableId={boardId} index={index}>
      {(magic) => (
        <Category
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
        >
          <Board boardId={boardId} toDos={toDos} setTodos={setTodos} />
        </Category>
      )}
    </Draggable>
  );
}

export default React.memo(Categorys);
