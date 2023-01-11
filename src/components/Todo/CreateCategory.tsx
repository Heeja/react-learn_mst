import React, { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { RTodoList } from "../../atoms";

const FormBox = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

function CreateCategory() {
  const [addCategory, setAddCategory] = useState("");
  const setTodoList = useSetRecoilState(RTodoList);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddCategory(e.target.value);
  };

  const onAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList((allTodos) => {
      const keys = Object.keys(allTodos);

      if (keys.find((categ) => categ === addCategory)) {
        alert(`${addCategory}라는 카테고리는 이미 존재합니다.`);
        return { ...allTodos };
      }

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
          placeholder="Write Category name..."
        />
      </FormBox>
    </>
  );
}

export default CreateCategory;
