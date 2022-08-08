import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`
from {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  height: 300px;
  width: 300px;
  border-radius: 80px;
}
to {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

const Emoji = styled.span`
  font-size: 68px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 2s linear infinite;
  will-change: transform;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Emoji}:hover {
    font-size: 120px;
    cursor: pointer;
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <Emoji>😑</Emoji>
      </Box>
      <Emoji style={{ position: "absolute", right: "80px" }}>🫣</Emoji>
    </Father>
  );
}

export default App;
