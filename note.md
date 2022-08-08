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
