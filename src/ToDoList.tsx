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

interface IFormData {
  errors: {
    email: { message: string };
  };
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordCheck: string;
  userName: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: any) => {
    if (data.password !== data.passwordCheck) {
      setError(
        "password",
        {
          message: "입력한 패스워드가 같지 않습니다.",
        },
        { shouldFocus: true }
      );
      setError("passwordCheck", {
        message: "입력한 패스워드가 같지 않습니다.",
      });
    }
    // setError("extraError", { message: "Server Error" });
  };

  //   console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@ naver.com$/,
              message: "이메일 형식에 맞도록 입력해주세요.",
            },
          })}
          type="text"
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "Write here",
            validate: {
              noMaster: (value) =>
                value.includes("master") ? "no master allowed" : true,
              noNiAny: (value) =>
                value.includes("ni") ? "no ni* allowed" : true,
            },
          })}
          type="text"
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Write here" })}
          type="text"
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("userName", {
            required: "Write here",
            minLength: { value: 10, message: "최소 10글자를 입력하세요." },
          })}
          type="text"
          placeholder="User Name"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", {
            required: "비밀번호를 반드시 입력해주세요.",
            minLength: 8,
          })}
          type="password"
          placeholder="PW"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("passwordCheck", {
            required: "Write here",
            minLength: 8,
          })}
          type="password"
          placeholder="PW check"
        />
        <span>{errors?.passwordCheck?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
