import { useSetRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { RTodoList } from "../../atoms";

// animation

const heartbeat = keyframes`
from {
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
  -webkit-transform-origin: center center;
          transform-origin: center center;
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
10% {
  -webkit-transform: scale(1.12);
          transform: scale(1.12);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
17% {
  -webkit-transform: scale(1.04);
          transform: scale(1.04);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}
33% {
  -webkit-transform: scale(1);
          transform: scale(1);
  -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
}
45% {
  -webkit-transform: scale(1.2);
          transform: scale(1.2);
  -webkit-animation-timing-function: ease-out;
          animation-timing-function: ease-out;
}`;

const CardBox = styled.div`
  border: solid 0.5px;
  border-radius: 12px;
  padding: 5px 10px;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: rgb(210 208 118);
  }

  button {
    font-size: 0.8rem;
    font-weight: 500;
    color: teal;
    min-width: 100px;
    min-height: 20px;
    border: none;
    border-radius: 10px;
    background-color: antiquewhite;
  }
`;

const BtnBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-top: 10px;
  margin-bottom: 5px;

  button {
    :hover {
      animation: ${heartbeat} 1.2s ease-out both;
    }
  }
`;

interface ICardProps {
  id: number;
  text: string;
  category: string;
  categorys: string[];
}

function TodoCard({ id, text, category, categorys }: ICardProps) {
  const categoryBtn = categorys.filter((data) => data !== category);

  const setTodoList = useSetRecoilState(RTodoList);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodoList((reTodos) => {
      const newCategorys = e.currentTarget.name;
      const beforeIndex = reTodos[category].findIndex((x) => x.id === id);

      const mvTodos = { id: id, text: text };

      const newTodos = {
        ...reTodos,
        [category]: [
          ...reTodos[category].slice(0, beforeIndex),
          ...reTodos[category].slice(beforeIndex + 1),
        ],
        [newCategorys]: [...reTodos[newCategorys], mvTodos],
      };

      return newTodos;
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
        <p>{text}</p>
        <BtnBox>
          {categoryBtn.map((c) => {
            return (
              <button key={c} name={c} onClick={onClick}>
                {c}
              </button>
            );
          })}
        </BtnBox>
      </CardBox>
    </>
  );
}

export default TodoCard;
