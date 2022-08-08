import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 6px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: #de86ff;
  }
`;

const aniBox = keyframes`
to {
  transform: rotate(0deg);
}
50% {
  transform: rotate(180deg);
  border-radius: 60px; 
}
from {
  transform: rotate(360deg); 
}
`;

const inputAni = keyframes`
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  margin: 0px 10px;
  animation: ${aniBox} 3s linear infinite;
`;
const Box2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  margin: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Title}:hover {
    font-size: 120px;
  }
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Btn = styled.button`
  color: tomato;
  &:hover {
    color: black;
  }
`;

const Input = styled.input`
  required: true;
  placeholder: ${(props) => props.placeholder};
`;

function App() {
  return (
    <Father>
      <Box bgColor="tomato"></Box>
      <Box2>
        <Title>Hello</Title>
      </Box2>
      <Title>Hello..</Title>
      <Circle bgColor="blue" />

      <Input placeholder="write something..." />
      <Btn>Log in</Btn>
    </Father>
  );
}

export default App;
