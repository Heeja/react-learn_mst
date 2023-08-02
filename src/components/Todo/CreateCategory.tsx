import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { RTodoList } from "../../atoms";

const FormBox = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  input {
    min-width: 180px;
  }
`;

interface IProp {
  setCategory: Dispatch<SetStateAction<string>>;
}

function CreateCategory({ setCategory }: IProp) {
  const [addCategory, setAddCategory] = useState("");
  const setTodoList = useSetRecoilState(RTodoList);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddCategory(e.target.value);
  };

  const onAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList((allTodos) => {
      const keys = Object.keys(allTodos);

      if (addCategory.length > 12) {
        alert("카테고리 이름이 너무 깁니다. 12자 이내로 작성해주세요.");
        return { ...allTodos };
      }

      if (keys.find((categ) => categ === addCategory)) {
        alert(`${addCategory}라는 카테고리는 이미 존재합니다.`);
        return { ...allTodos };
      }
      setCategory(addCategory);
      return { ...allTodos, [addCategory]: [] };
    });
    setAddCategory("");
  };

  return (
    <>
      <FormBox onSubmit={onAddCategory}>
        <input
          type="text"
          name="addCategory"
          value={addCategory}
          onChange={onChange}
          placeholder="Write Category and Enter..."
        />
      </FormBox>
    </>
  );
}

export default CreateCategory;
