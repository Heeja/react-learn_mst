import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ICardProps {
  index: number;
  id: number;
  cardName: string;
}

const NameTag = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  margin: 2px 4px;
  border: solid 0.1px rgba(240, 220, 240, 0.6);
  border-radius: 6px;
  background-color: rgb(185 213 136);
  color: lightgoldenrodyellow;
`;
function Card({ index, id, cardName }: ICardProps) {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <NameTag>{cardName}</NameTag>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
