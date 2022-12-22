import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { CategoryList, NTodosList } from "../../atoms";
import Categorys from "../../components/trello/Categorys";

const onDragEnd = () => {};

const CardBox = styled.div`
  justify-items: center;
  text-align: center;
`;

interface IForm {
  addCategory: string;
}

function Trello() {
  const [categorys, setCategorys] = useRecoilState(CategoryList);
  const setNTodosList = useSetRecoilState(NTodosList);

  console.log(categorys);

  const { register, handleSubmit } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (d) => {
    setCategorys((categoryData: string[]) => {
      // if (categoryData === []) {
      //   return [d.addCategory];
      // }
      return [...categoryData, d.addCategory];
    });

    setNTodosList((allTodos) => {
      const keys = Object.keys(allTodos);
      if (keys.find((categ) => categ === d.addCategory)) {
        alert(`${d.addCategory}라는 카테고리는 이미 존재합니다.`);
        return { ...allTodos };
      }
      return { ...allTodos, [d.addCategory]: [] };
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="add Category"
          {...register("addCategory")}
        />
      </form>
      <Droppable droppableId="category-filed" type="category">
        {(provided) => (
          <CardBox ref={provided.innerRef} {...provided.droppableProps}>
            {!categorys
              ? ""
              : categorys.map((data, index) => (
                  <Categorys category={data} id={index} key={index} />
                ))}
          </CardBox>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Trello;
