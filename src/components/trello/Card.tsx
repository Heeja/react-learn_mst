import { Draggable } from "react-beautiful-dnd";

interface ICardProps {
  index: number;
  id: number;
  cardName: string;
}
function Card({ index, id, cardName }: ICardProps) {
  return (
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{cardName}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
