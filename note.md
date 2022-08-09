# Learn React Master Class

## 0. make react app

react app make console command

> npx create-react-app "app name(directory name)" --use-npm(option)

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

## 3. Typesript

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
