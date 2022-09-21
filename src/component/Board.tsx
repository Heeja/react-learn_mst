import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

import Card from "./Card";

const DropBoard = styled.ul`
  background-color: #ffc191;
  border-radius: 4px;
  padding: 5px 0;
`;

const CategoryName = styled.h2`
  text-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ boardId, toDos }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <DropBoard ref={magic.innerRef} {...magic.droppableProps}>
          <CategoryName>{boardId}</CategoryName>
          {toDos.map((toDos, index) => (
            <Card key={toDos} toDo={toDos} index={index} />
          ))}
          {magic.placeholder}
        </DropBoard>
      )}
    </Droppable>
  );
}

export default Board;
