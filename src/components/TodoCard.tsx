import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
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

interface ICardProps {
  id: number;
  text: string;
  category: string;
  categorys: string[];
}

function TodoCard({ id, text, category, categorys }: ICardProps) {
  const categoryBtn = categorys.filter((data) => data != category);

  const [todosList, setTodoList] = useRecoilState(RTodoList);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodoList((reTodos) => {
      const newCategorys = e.currentTarget.name;
      console.log(newCategorys);
      console.log(reTodos);
      // const tgIndex = reTodos.findIndex((e) => e.id === id);

      // const newTodos = [
      //   ...reTodos.slice(0, tgIndex),
      //   { text, id, category: newCategorys },
      //   ...reTodos.slice(tgIndex + 1),
      // ];

      return reTodos;
    });
  };

  // const splIndex = categoryList.findIndex((c) => c === category);
  // const cutCategory = [
  //   ...categoryList.slice(0, splIndex),
  //   ...categoryList.slice(splIndex + 1),
  // ];

  return (
    <>
      <CardBox>
        <h1>{text}</h1>
        {categoryBtn.map((c) => {
          return (
            <button key={c} name={c} onClick={onClick}>
              {c}
            </button>
          );
        })}
      </CardBox>
    </>
  );
}

export default TodoCard;
