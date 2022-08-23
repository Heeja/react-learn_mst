# To Do List

## basic Set

## Add To do - use atom, recoilState

## Category State

### Refactoring (Components Set)

- Components List
  - "To Do"를 추가하는 Form을 가진 createToDo.tsx
  - 추가된 "To Do"를 게시하는 부분 ToDo.tsx
  - State 값과 type정보를 가진 atoms.tsx
- Components Struct
  > createToDo, ToDo ➡️ atoms ⬅️ ToDoList(Main)

### 인자를 받는 함수 사용

1. 익명함수

```jsx
interface ReValue {
  text: string;
}

const onClick = (receiveValue: ReValue["text"]) => {
  console.log("Click을 통해 받은 인자는 ", receiveValue);
};

<button onClick={() => onClick("TO_DO")}>To Do</button>;
```

- html tag button의 click event에서 인자를 넘겨준다.
- 여기서 typescript를 사용한다면 넘겨받은 인자에 대한 type을 알려줘야한다.
  - ":string"으로도 할 수 있고, 여러인자가 있다면 위와 같이 interface를 사용해도된다.
- 익명함수의 콜백을 통해 결과를 받을 수 있다.

2. 뭐라고하지..

```jsx
const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  const recevieValue = event.currentTarget.name;
  console.log("Click을 통해 받은 인자는 ", recevieValue);

  const {
    currentTarget: { name },
  } = event;
};

<button name="TO_DO" onClick={onClick()}>
  To Do
</button>;
```

### 데이터 배열 이해하기

- "계란말이"를 food 배열 "mango"와 대치하려한다.
- "..."은 배열을 나열하여 입력한다.
  - "..."없이 입력하면 배열안에 배열로 입력된다.
- slice(시작, 위치-1까지)함수는 배열을 원하는 위치(index-1)까지 잘라준다.
  - 원본을 회손하지 않는다. ➡️ food.slice(0,2)를 해도 food의 값이 변하는 것은 아니다.

```js
const food = ["pizza", "mango", "kimchi", "kimbab"];
const target = food.indexOf("mango"); // = 1

const result = [
  ...food.slice(0, target),
  "계란말이",
  ...food.slice(target + 1),
];
```

> result = ["pizza", "계란말이", "kimchi", "kimbab"]

### Selectors

- derived state: state를 입력 받아 변형하여 순수함수를 거쳐 반환하는 값. (공식문서)
- selectors는 atom(state)를 받아 변형하여 값을 반환(return)할 수 있다.

```jsx
export const toDoState = atom<IToDo[]>({
    key: "toDo",
  default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
  get: ({ get }) => {
      const toDos = get(toDoState);
    return [
        toDos.filter((todo) => todo.category === "TO_DO"),
      toDos.filter((todo) => todo.category === "DOING"),
      toDos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
```

> atom으로 구성된 toDoState을 selector에서 get을 통해 state를 받아 return한다.

### enum

- enum을 선언하여 다른 곳에 불러서 사용할 수 있다.
- "enum name.typeName"으로 구분하여 사용한다.
  - 특이한 점은 값을 지정하지 않을 경우 0, 1, 2 ... 숫자로 인식한다.
  - 이름을 따로 지정할 경우 값을 지정하듯 명시해주면 된다.
    "TO_DO" = "TO_DO"

```ts
export enum Categories {
  "TO_DO",
  "DOING",
  "DONE",
}

export interface IToDo {
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});
```
