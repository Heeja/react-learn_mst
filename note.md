# Learn React Master Class

0. [Setup react-app](#0-make-react-app)
   1. [react v18](#react-18)
   2. [react router dom v6](#react-router-dom-v6)
1. [Styled-Components](#1-styled-component)
2. [Typescript](#2-typesript)
3. [make CRYPTO-TRACKER](#3-crypto-tracker)

## 0. make react app

react app make console command

> npx create-react-app "app name(directory name)" --use-npm(option)

### React 18

- React v18 부터 index에서 render 방식이 변경되었다.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const rootId = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

rootId.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
```

### react-router-dom v6

- **Switch**를 더이상 사용하지 않고, **Routes**로 대체한다.
- Routes의 자식으로는 **Route**만 가능하다.
- useParams()의 경우에도 type이 default로 지정되어있다.

  그래서 아래와 같이 type을 지정해준다.

  ```js
  useParams<"coinId">();
  ```

- 다른 옵션 중에서도 사용하지 않게된 부분이 있으니 체크해보면 좋겠다.

## 1. Styled Component

https://styled-components.com

style 적용 방법

1. style={{backgroundColorㅍ="red"}}
2. className={modulename.classname}
3. using styled component

### styled component api install

> npm i styled-components

### Write

this code write in js file.

- styled를 선언할 때 반드시 ``(**backtick 백틱**)으로 해야한다.

```javascript
const Name = styled.Element`
  style: value;
`;

function App() {
  return `<Name></Name>`;
}
```

### using props

- arrow function으로 props 값 사용.

```javascript
const Box = styled.div`
background-color: ${(props) => props.bgColor};
`;

<Box bgColor="teal" />
<Box bgColor="tomato" />
```

### styled components inherit

- style()을 사용하여 상속받을 styled components를 입력한다.

```javascript
const Name = styled(ParentName)`
    "css code"
`;
```

### add Elements in Element

- as 옵션을 통해서 Elements를 추가할 수 있다.

```javascript
<Btn as="a" href="/">
```

### ??

- styled로 생성하는 elements에 옵션을 지정하여 생성 할 수 있다.

```javascript
const Name = styled.Elements.attrs({ option: value })`
css code
`;
```

### Animation

- animation을 아래와 같이 추가 할 수 있다.
- 자식 요소에도 css를 적용할 수 있다.
- 아래 코드에서 &: = span:hover 와 동일하다.
- css와 html을 동시에 작성할 수 있다.

```javascript
const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  border-radius: 80px;
}
to {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 3s linear infinite;

  span {
    font-size: 80px;
    &:hover {
      font-size: 120px;
      cursor: pointer;
    }
  }
`;
```

### Theme - (for "Dark mode")

- 아래 코드의 darkTheme, lightTheme 같이 property를 가진 object를 ThemeProvider를 사용해서 전달하면된다.
- ThemeProvider 안에 App을 두어 App에서 theme 정보를 가져다 사용할 수 있게 하였다.

```javascript
import { ThemeProvider } from "styled-components";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};
const lighTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

<ThemeProvider theme={darkTheme}>
  <App />
</ThemeProvider>;
```

## 2. Typesript

- javascipt에서 변수에 type을 지정하는 확장된 언어.
- strongly-typed 프로그래밍 언어이다. (javascript not strongly-typed)
- typescript는 프로그램이 실행되기 전에 문제점을 알려줄 것이다.
  ```typescript
  const plusJS = (a, b) => a_b;
  const plusTS = (a: number, b: number) => a_b;
  plusJS("a", 3);
  plusTS("a", 3);
  // javascript에서 두번째 plusJS의 결과는 'a3'로 출력된다.
  // 하지만 typescript에서는 error를 반환하여 문제점을 알려줄 것이다.
  ```

### install Typescipt in react-app

> 참고 링크: https://create-react-app.dev/docs/adding-typescript/

1. react-app을 다시 설치하면서 typescript를 추가하는 방법

   > npx create-react-app my-app --template typescript

   react-app을 새로 만들면서 설치할 경우, 다른 라이브러리, 프레임워크도 함께 설치해주어야한다.

2. 기존 프로젝트에 typescript를 추가하는 방법

   > npm install --save typescript @types/node @types/react @types/react-dom @types/jest

   styled-components의 경우 경고가 발생하는데, 추가로 설치해준다.

   @types: 라이브러리나 패키지의 정보를 typescript code로 변환해주는 패키지.

   (라이브러리 개발측에서 재공하는 경우도 있지만, 제공하지 않아서 없거나, 유저들이 자발적으로 추가하기도 한다.)

   > npm i --save @types/styled-components

- 혹시라도 styled components를 찾을 수 없다면 아래와 같이 설치한다.
  > npm i --save styled-components

### React Typescript File type

- Typescript 파일 확장자: .tsx .ts

### Props type Check

- prop이 있는지 없는지 확인해주지만, 코드가 실행된 후에만 확인이 가능하다.

### interface

- object모양을 typescript에게 설명해주는 기능

### Forms type - React.FormEvent

- number, string ... 일반적인 type이 아닌 라이브러리에서 지원하는 type
- 개인이 쉽게 찾을 수 있는 부분은 아니다. Doc에서 확인 할 수 있다.
  > 링크: https://ko.reactjs.org/docs/events.html

### Themes in Typescript

## 3. CRYPTO TRACKER

파프리카코인

1. All coins
2. :id > /btc > coin detail
3. /btc/information, /btc/chart

### Reset style

> link: https://meyerweb.com/eric/tools/css/reset/

- 브라우저에서 기본으로 설정되는 css값들에 덮어써서 초기화 시킨다.

- 현재 생성한 react app 에서는 'styled components'의 GlobalStyle을 사용한다.
  - link 페이지에서 제공하는 css style code를 복사하여 붙여넣어주면 완료.
- 이후 프로젝터 전반적인 style을 적용하려면, 복사 붙여넣기한 부분 이후에 css를 추가하면 된다. (아마도?)

```js
const GlobalStyle = createGlobalStyle`
    reset css code
`;
```

### Crypto Icon API

> Link: https://coinicons-api.vercel.app

- useEffct의 fetch를 통해서 api에 호출하고 데이터를 받는다.
- 받은 데이터는 **JSON**형태로 변환하여 사용!
- 응답을 받는거보다 코드가 진행되는 것이 보통 빠르기 때문에, **async/await**를 사용한다!

```js
useEffect(() => {
  (async () => {
    const res = await fetch("https://api.coinpaprika.com/v1/coins"); // api에게 요청하는 부분
    const json = await res.json(); // json 형식으로 변환.
    setCoins(json.slice(0, 100)); // 전체는 너무 많아서 100개만!
  })();
}, []);
```

### state value forward next page

- 호출 받은 api 데이터를 다시 요청하는 것보다 가지고 있는 데이터를 활용하는 것이 좋다. (상황에 따라서 다를 수 있지만)
- Link(a tag)를 통해 웹페이지를 이동할 때 값을 전달하는 방법으로 state를 사용한다.

```js
<Link to={`/${coin.id}`} state={coin.name} />
```

> Link: https://velog.io/@ksmfou98/React-Router-v6-업데이트-정리
> React Router v6 부터 변경된 점 체크.

### React Query

- query 라이브러리를 통해서 전반적인 코드를 간략하게 할 수 있다.
- react query는 데이터를 캐시로 저장해둔다.
  - 그래서 페이지를 돌아가거나 할 때 데이터를 다시 불러올 필요가 없다.
  - 브라우저를 닫거나, 캐시를 삭제하면 다시 불러온다.
- react query는 개발자를 위한 툴도 지원하고 있다.
  - 아래와 같이 install하고, App.tsx에 코드를 추가하면된다.
    > npm i @tanstack/react-query-devtools
  ```js, App.tsx
  <ReactQueryDevtools initialIsOpen={true} />
  ```

1. 첫번째로 index.tsx에 theme과 같이 전반적으로 react query를 적용시켜준다.

```js, index.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

<QueryClientProvider client={queryClient}>
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>
</QueryClientProvider>
```

```js, api.tsx
export async function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins").then((res) =>
    res.json()
  );
}
```

```js, Coins.tsx
// before
const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await res.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

// after
import { fetchCoins } from "../api";

const { isLoading, data } = useQuery<CoinInterface[]>(["coins"], fetchCoins);
```

### Recoil (Library)

- Homepage

  > Link: https://recoiljs.org/ko/

- React를 위한 상태 관리 라이브러리
- install

  > npm install recoil

  > yarn add recoil

#### Using

- atoms.ts 파일을 생성한다.

```ts, atoms.ts
import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

```

- export로 파일 외부로 나갈 수 있게 선언하고, 변수 명을 정하여 선언.
- 변수는 **atom({})** 형식으로, 중괄호{} 안에 key(상태값 이름)와 default(기본 상태값)을 넣어준다.

## React Hook Form (Management Library)

> Link: https://react-hook-form.com

- Install
  > npm install react-hook-form

```tsx, ToDoList.tsx
const { register, watch, handleSubmit, formState } = useForm();
```

#### resister

- onChange을 대체한다. useState도 없다.
- 구성
  - onBlur: 입력란에
  - onChange
  - ref

#### watch

- form에서 입력되는 값을 모니터링한다.
- form 안에 input의 value를 object 형식으로 체크된다.

#### handleSubmit

- validation를 담당한다. (preventDefault 등)
- form의 유효하지 않은 상태를 보호한다.
- onValid: submit이 해야하는 일을 모두 마치고, 데이터가 유효할 떄 호출된다.
- input option
  - required: 필수 입력
  - minlength: 최소 글자 수 옵션

```tsx
<form onSubmit={handleSubmit(onValid)}>
  <input {...register("email", { required: true, minlength: 10 })} />
</form>
```

#### setValue

- register를 사용한 태그의 value값을 정해준다.
- handleSubmit에 사용되는 function에서 사용해주면 form data를 전달하고 값을 초기화 해줄 수 있다.

```jsx
const onValid = () => {
  setValue("email", "");
};
```

#### FormState

- form 상태 체크
- 너무 많은 form을 관리/체크해야 한다면 사용해보는 것이 좋을 것 같다.
- formState.errors: 에러(입력 양식을 따르지 않는것도 포함하여) 발생시 에러부분 안내
- message로 에러 메시지를 알려줄 수 있다. (표기방법 아래 코드 확인)
  - required: 2가지 표기법. 메시지를 직접 입력하거나, true/false로 입력할 수 있다.

```tsx
{ required: "비밀번호를 반드시 입력해주세요.",
  minLength: {
      value: 8,
      message: "비밀번호는 최소 8자 입니다."
} }

```

#### RegEx(Regular Expressions)

- 입력되는 문자를 검수한다.
- 검수하는 이유는 SQL Injection 또는 Javascript 실행 등의 공격에 대비하기 위함이다.
- 입력 방법은 아래 코드 **pattern** 부분을 참고

```jsx
<input
  {...register("email", {
    required: true,
    pattern: {
      value: /^[A-Za-z0-9._%+-]+naver.com$/,
      message: "이메일 형식에 맞도록 입력해주세요.",
    },
  })}
  required
  type="text"
  placeholder="Email"
/>
```

#### setError

> react-hook-form에서 return이 string이면 string이 message가 된다!

- form으로 전송된 데이터를 검증하면서 에러 메시지를 전달한다.
  - 조건을 통해 setError가 발생하도록 한다.
  - shouldFocus 옵션을 통해 입력 커서를 자동으로 줄 수 있다.
  - extraError의 경우 서버로부터 응답이 없을 경우 발생.
- 표기법은 아래 코드 참고.

```jsx
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
```

#### Custom Validation

- 태그 register에 옵션에 **validate**를 사용하여 문자열을 검수할 수 있다.
- includes에 들어간 문자열이 포함되면(시작,중간,끝 모두) message 발생.

```jsx
validate: {
  noMaster: (value) =>
    value.includes("master") ? "no master allowed" : true,
  noNiAny: (value) =>
    value.includes("ni") ? "no ni* allowed" : true,
}
```
