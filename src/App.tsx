import { useRecoilState } from "recoil";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";

import { toDoState } from "./atoms";
import Card from "./component/Card";
import Board from "./component/Board";

const Ddcon = styled.div`
  background-color: #72a0f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [toDos, setTodos] = useRecoilState(toDoState);

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      setTodos((e) => {
        const dropId = destination.droppableId;
        const cpboard = [...e[dropId]];
        // console.log(cpTodos);
        cpboard.splice(source.index, 1);
        cpboard.splice(destination.index, 0, draggableId);
        // console.log(cpboard);
        return { ...e, [source.droppableId]: cpboard };
      });
    }

    if (destination.droppableId != source.droppableId) {
      setTodos((e) => {
        const sourBoard = [...e[source.droppableId]];
        const desBoard = [...e[destination.droppableId]];
        // console.log(cpTodos);
        sourBoard.splice(source.index, 1);
        desBoard.splice(destination.index, 0, draggableId);

        return {
          ...e,
          [source.droppableId]: sourBoard,
          [destination.droppableId]: desBoard,
        };
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Ddcon>
        <Boards>
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} toDos={toDos[boardId]} key={boardId} />
          ))}
        </Boards>
      </Ddcon>
    </DragDropContext>
  );
}

export default App;
