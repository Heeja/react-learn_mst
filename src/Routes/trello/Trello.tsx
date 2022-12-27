import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { CategoryList, NTodosList } from "../../atoms";
import Categorys from "../../components/trello/Categorys";

const CardBox = styled.div`
  justify-items: center;
  text-align: center;
  padding: 0 10px;
`;

interface ICategoryForm {
  addCategory: string;
}

function Trello() {
  const [categorys, setCategorys] = useRecoilState(CategoryList);
  const setTodoList = useSetRecoilState(NTodosList);

  const { register, handleSubmit, reset } = useForm<ICategoryForm>();
  const onSubmit: SubmitHandler<ICategoryForm> = (d) => {
    if (categorys.find((e) => e === d.addCategory)) {
      alert(`${d.addCategory}라는 카테고리는 이미 존재합니다.`);
      return "";
    }
    if (!d.addCategory) {
      alert("추가할 카테고리를 입력해주세요.");
      return "";
    }

    setCategorys((categoryData: string[]) => {
      return [...categoryData, d.addCategory];
    });

    setTodoList((allTodos) => {
      return { ...allTodos, [d.addCategory]: [] };
    });
    reset();
  };

  const onDragEnd = (e: any) => {
    if (!e.destination) return;
    if (e.type === "category") {
      setCategorys((cates) => {
        let cpCategorys = [...cates];

        cpCategorys.splice(e.source.index, 1);
        cpCategorys.splice(e.destination.index, 0, e.draggableId);

        return cpCategorys;
      });
    }

    if (e.type === "card") {
      const desCategory = e.destination.droppableId;
      const srcCategory = e.source.droppableId;

      if (e.destination.droppableId === e.source.droppableId) {
        setTodoList((todos) => {
          const cpTodos = [...todos[desCategory]];

          const srcCard = cpTodos[e.source.index];
          cpTodos.splice(e.source.index, 1);
          cpTodos.splice(e.destination.index, 0, srcCard);

          return {
            ...todos,
            [desCategory]: [...cpTodos],
          };
        });
      }
      if (e.destination.droppableId !== e.source.droppableId) {
        console.log(e);
        setTodoList((todos) => {
          const cpSrcTodos = [...todos[srcCategory]];
          const cpDesTodos = [...todos[desCategory]];

          // const srcIndex = cpSrcTodos.findIndex((d) => d.id === e.source.index);
          // const desIndex = cpDesTodos.findIndex(
          //   (d) => d.id === e.destination.index
          // );
          const mvTodos = cpSrcTodos[e.source.index];

          cpSrcTodos.splice(e.source.index, 1);
          cpDesTodos.splice(e.destination.index, 0, mvTodos);

          return {
            ...todos,
            [srcCategory]: [...cpSrcTodos],
            [desCategory]: [...cpDesTodos],
          };
        });
      }
    }
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
                  <Categorys category={data} id={index} key={data} />
                ))}
            {provided.placeholder}
          </CardBox>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Trello;
