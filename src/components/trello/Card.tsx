import { Draggable } from "react-beautiful-dnd";

interface ICardProps {
  id: number;
  cardName: string;
}
function Card({ id, cardName }: ICardProps) {
  return (
    <Draggable draggableId={cardName} index={id}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps}>
          <p {...provided.dragHandleProps}>{cardName}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Card;
