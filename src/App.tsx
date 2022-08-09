import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <h1>{text}</h1>;
}

function App() {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };
  return (
    <div>
      <Container>
        {/* active = active={true} */}
        <Dummy active text="Hello" />
        <form>
          <button onClick={onClick}>Click Me</button>
        </form>
      </Container>
    </div>
  );
}

export default App;

const plus = (a: number, b: number) => a + b;
const minus = (a: number, b: number) => a - b;
