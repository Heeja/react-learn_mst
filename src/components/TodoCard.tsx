import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { IToDo, RTodoList } from "../atoms";

const CardBox = styled.div`
  border: solid 0.5px;
  font-align: center;

  button {
    font-size: 10px;
    width: 30%;
  }
`;

function TodoCard(category: string) {
  const setTodoList = useSetRecoilState(RTodoList);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log("click");
  // {
  // setTodoList((reTodos) => {
  //   const newCategorys = e.currentTarget.name;
  //   const tgIndex = reTodos.findIndex((e) => e.id === id);

  //   const newTodos = [
  //     ...reTodos.slice(0, tgIndex),
  //     { text, id, category: newCategorys },
  //     ...reTodos.slice(tgIndex + 1),
  //   ];

  // return newTodos;
  // });
  // };

  // const splIndex = categoryList.findIndex((c) => c === category);
  // const cutCategory = [
  //   ...categoryList.slice(0, splIndex),
  //   ...categoryList.slice(splIndex + 1),
  // ];

  return (
    <>
      <CardBox>
        <div>{category}</div>
        {/* {cutCategory.map((c) => {
          return (
            <button key={c} name={c} onClick={onClick}>
              {c}
            </button>
          );
        })} */}
      </CardBox>
    </>
  );
}

export default TodoCard;
