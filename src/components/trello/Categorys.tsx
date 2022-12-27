import { Draggable, Droppable } from "react-beautiful-dnd";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { NTodosList } from "../../atoms";
import Card from "./Card";

const CategoryInBox = styled.div`
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

const CardBox = styled.div`
  min-height: 120px;
`;

interface CardProps {
  category: string;
  id: number;
}

interface ICardForm {
  addCard: string;
}

function Categorys({ category, id }: CardProps) {
  const [cardData, setCardData] = useRecoilState(NTodosList);

  const { register, handleSubmit, reset } = useForm<ICardForm>();
  const onSubmit: SubmitHandler<ICardForm> = (d) => {
    if (!d.addCard && d.addCard.length > 1) {
      alert("2글자 이상의 카드명을 입력하세요.");
      return "";
    }
    if (cardData[category].find((e) => e.text === d.addCard)) {
      alert(`${d.addCard}라는 카드는 이미 존재합니다.`);
      return "";
    }

    setCardData((e) => {
      const newCard = { id: Date.now(), text: d.addCard };

      return {
        ...e,
        [category]: [...e[category], newCard],
      };
    });
    reset();
  };
  console.log(cardData);

  return (
    <Draggable draggableId={category} index={id}>
      {(provided) => (
        <CategoryInBox ref={provided.innerRef} {...provided.draggableProps}>
          <h2 {...provided.dragHandleProps}>{category}</h2>
          <p>id: {id}</p>
          <FormBox onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="add Card"
              {...register("addCard")}
            />
          </FormBox>
          <Droppable droppableId={category} type="card">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <CardBox>
                  {cardData[category].map((data, index) => (
                    <Card
                      key={data.id}
                      index={index}
                      id={data.id}
                      cardName={data.text}
                    />
                  ))}
                  {provided.placeholder}
                </CardBox>
              </div>
            )}
          </Droppable>
        </CategoryInBox>
      )}
    </Draggable>
  );
}

export default Categorys;
