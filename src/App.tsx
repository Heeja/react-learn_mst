import { useRecoilState } from "recoil";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";

import { toDoState } from "./atoms";
import Categorys from "./component/Categorys";
import React, { useState } from "react";

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
  flex-direction: column;
  align-items: center;
  // justify-content: center;
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

const AddCategory = styled.form`
  width: 120px;
  height: 30px;
  border-radius: 10px;
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

function App() {
  const [toDos, setTodos] = useRecoilState(toDoState);
  console.log(toDos);
  console.log(typeof toDos.to_do);
  const categorysId = Object.keys(toDos);
  // console.log(categorysId);
  const [addCateg, setCateg] = useState("");
  // console.log(addCateg);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setCateg(value);
  };

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keysArr = Object.keys(toDos);
    setCateg("");
    if (!keysArr.includes(addCateg)) {
      setTodos((e) => {
        const newCateg: string[] = [];
        setCateg("");
        return {
          ...e,
          [addCateg]: newCateg,
        };
      });
    } else {
      return alert("이미 등록된 Category");
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Ddcon>
        <Droppable droppableId="Board">
          {(magic) => (
            <CategoryBoard ref={magic.innerRef} {...magic.droppableProps}>
              <AddCategory onSubmit={onSubmit}>
                <input
                  type="form"
                  placeholder="Add Categorys"
                  value={addCateg}
                  onChange={onChange}
                />
              </AddCategory>
              <Trash key="Trash">
                <p>Trash</p>
              </Trash>
              <CategoryBox>
                {categorysId.map((boardId, index) => (
                  <Categorys
                    toDos={toDos[boardId]}
                    boardId={boardId}
                    index={index}
                    setTodos={setTodos}
                  />
                ))}
              </CategoryBox>
              {magic.placeholder}
            </CategoryBoard>
          )}
        </Droppable>
      </Ddcon>
    </DragDropContext>
  );
}

export default App;
