import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const [toDoErr, setToDoErr] = useState("");

//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setTodo(value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoErr("To do should be Longer");
//     }
//     console.log("submit");
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//         {toDoErr !== "" ? toDoErr : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();

  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", { required: true })}
          required
          type="text"
          placeholder="Email"
        />
        <input
          {...register("First name", { required: true })}
          type="text"
          placeholder="First Name"
        />
        <input
          {...register("Last name", { required: true })}
          type="text"
          placeholder="Last Name"
        />
        <input
          {...register("User name", {
            required: true,
            minLength: { value: 10, message: "최소 10글자를 입력하세요." },
          })}
          type="text"
          placeholder="User Name"
        />
        <input
          {...register("Password", {
            required: "비밀번호를 반드시 입력해주세요.",
          })}
          type="password"
          placeholder="PW"
        />
        <input
          {...register("Password check", { required: true })}
          type="password"
          placeholder="PW check"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
