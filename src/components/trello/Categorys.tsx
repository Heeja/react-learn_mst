import { Draggable, Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { NTodosList } from "../../atoms";
import Card from "./Card";

const CardBox = styled.div`
  width: 140px;
  height: 200px;
  border: solid 0.5px rgba(40, 40, 40, 1);
  margin: 10px 0;
`;

const FormBox = styled.form`
  input {
    width: 100px;
  }
`;

interface CardProps {
  category: string;
  id: number;
}

function Categorys({ category, id }: CardProps) {
  const cardData = useRecoilValue(NTodosList);

  const { register, handleSubmit } = useForm();
  const onSubmit = (d: any) => {
    console.log(d);
    console.log(category);
  };

  return (
    <Draggable draggableId={category} index={id}>
      {(provided) => (
        <CardBox ref={provided.innerRef} {...provided.draggableProps}>
          <h2 {...provided.dragHandleProps}>{category}</h2>
          <p>id: {id}</p>
          <FormBox onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="add Category"
              {...register("addCategory")}
            />
          </FormBox>
          <Droppable droppableId={category} type="card">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {cardData[category].map((data, index) => (
                  <Card key={index} id={data.id} cardName={data.text} />
                ))}
              </div>
            )}
          </Droppable>
        </CardBox>
      )}
    </Draggable>
  );
}

export default Categorys;
