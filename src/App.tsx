import { useRecoilState } from "recoil";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";

import { toDoState } from "./atoms";
import Card from "./component/Card";

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
  grid-template-columns: repeat(1, 1fr);
`;
const DropBoard = styled.ul`
  background-color: #ffc191;
  border-radius: 4px;
  padding: 5px 0;
`;

const BoardCategory = styled.h2`
  text-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

function App() {
  const [toDo, setTodo] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;

    setTodo((oldTodo) => {
      const cpTodo = [...oldTodo];
      const dragvalue = draggableId;
      const sIndex = source.index;
      const dIndex = destination.index;

      cpTodo.splice(sIndex, 1);
      cpTodo.splice(dIndex, 0, dragvalue);

      return cpTodo;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Ddcon>
        <Boards>
          <Droppable droppableId="drop-01">
            {(magic) => (
              <DropBoard ref={magic.innerRef} {...magic.droppableProps}>
                <BoardCategory> Category </BoardCategory>
                {toDo.map((toDo, index) => (
                  <Card key={toDo} toDo={toDo} index={index} />
                ))}
                {magic.placeholder}
              </DropBoard>
            )}
          </Droppable>
        </Boards>
      </Ddcon>
    </DragDropContext>
  );
}

export default App;
