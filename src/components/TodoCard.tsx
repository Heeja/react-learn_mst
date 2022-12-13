import styled from "styled-components";
import { Categories, IToDo } from "../atoms";

const CardBox = styled.div`
  height: 30px;
  border: solid 0.5px;
`;

function TodoCard({ text, category, id }: IToDo) {
  // console.log(text);
  // console.log(category);
  // console.log(id);

  const onClick = () => console.log("Click!");

  return (
    <>
      <CardBox key={id}>
        <span>{text}</span>
        {category !== Categories.TO_DO && (
          <button name={Categories.TO_DO} onClick={onClick}>
            Todo
          </button>
        )}
        {category !== Categories.DOING && (
          <button name={Categories.DOING} onClick={onClick}>
            Doing
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={onClick}>
            Done
          </button>
        )}
      </CardBox>
    </>
  );
}

export default TodoCard;
