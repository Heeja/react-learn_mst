import { useRecoilState } from "recoil";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";

import { toDoState } from "./atoms";
import Categorys from "./component/Categorys";

const Ddcon = styled.div`
  background-color: #72a0f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CategoryBoard = styled.div`
  width: 100%;
  margin: 0 10px;
  display: flex;
  justify-content: center;
`;

const Trash = styled.div`
  width: 80px;
  height: 40px;
  position: absolute;
  top: 30px;
  right: 10px;
  background-color: snow;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  // console.log(toDos);
  const categorysId = Object.keys(toDos);
  // console.log(categorysId);

  const onDragEnd = (info: DropResult) => {
    console.log(info);
    const { destination, draggableId, source } = info;
    if (!destination) return;

    if (source.droppableId === "Board") {
      setTodos((e) => {
        const dropId = destination.droppableId;
        const objKeys = Object.keys(e); // to_do, doing, done
        const newObj = new Object();

        return { ...e };
      });
    }
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

    if (destination.droppableId !== source.droppableId) {
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
        <Droppable droppableId="Board">
          {(magic) => (
            <CategoryBoard ref={magic.innerRef} {...magic.droppableProps}>
              <Trash key="Trash">
                <p>Trash</p>
              </Trash>
              {categorysId.map((boardId, index) => (
                <Categorys
                  toDos={toDos[boardId]}
                  boardId={boardId}
                  index={index}
                  setTodos={setTodos}
                />
              ))}
              {magic.placeholder}
            </CategoryBoard>
          )}
        </Droppable>
      </Ddcon>
    </DragDropContext>
  );
}

export default App;
