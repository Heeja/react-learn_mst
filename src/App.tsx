import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #e09, #d0e);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FatherDiv = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: center;
  align-items: center;

  width: 100%;
  height: 80%;
`;

const ChildDiv = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.3);
  width: 80%;
  height: 80%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleDiv = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: snow;
`;

const SwitchBtn = styled(motion.button)`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: snow;
  border: none;
`;

const OverRay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [circleState, setCirclState] = useState(false);
  const [id, setId] = useState<string | null>("");

  const switchClick = () => {
    setCirclState((prev) => !prev);
  };

  return (
    <>
      <BackgroundDiv>
        <FatherDiv>
          <ChildDiv layoutId={"firstBox"} onClick={() => setId("firstBox")} />
          <ChildDiv>
            {circleState ? "" : <CircleDiv layoutId="circle" />}
          </ChildDiv>
          <ChildDiv>
            {circleState ? <CircleDiv layoutId="circle" /> : ""}
          </ChildDiv>
          <ChildDiv layoutId={"secondBox"} onClick={() => setId("secondBox")} />
        </FatherDiv>
        <SwitchBtn onClick={switchClick}>Switch</SwitchBtn>
      </BackgroundDiv>
      <AnimatePresence>
        {id ? (
          <OverRay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <ChildDiv layoutId={id}></ChildDiv>
          </OverRay>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default App;
