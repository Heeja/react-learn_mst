import { useRecoilState } from "recoil";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { toDoState } from "./atoms";

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
const Todocard = styled.li`
  background-color: #9b85ff;
  border-radius: 4px;
  text-align: center;
  padding: 2px 0;
  margin: 2px 10px;
`;

function App() {
  const [toDo, setTodo] = useRecoilState(toDoState);
  const onDragEnd = (args: any) => {
    console.log(args);
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
                  <Draggable key={index} draggableId={toDo} index={index}>
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
