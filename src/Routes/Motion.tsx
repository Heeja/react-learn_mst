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
const AreaBox = styled.div`
  margin-bottom: 50px;
`;

const ChildDiv = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  width: 260px;
  height: 180px;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    transform-origin: bottom right;
  }
  &:last-child {
    transform-origin: top left;
  }
`;

const CircleDiv = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: snow;
  box-shadow: 0px 10px 18px -4px rgb(19, 71, 22);
`;

const SwitchBtn = styled(motion.button)`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  background-color: snow;
  border: none;

  font-size: 1.2rem;
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

const OverayVarient = {
  initial: { backgroundColor: "rgba(0,0,0,0)" },
  animate: { backgroundColor: "rgba(0,0,0,0.8)" },
  exit: { backgroundColor: "rgba(0,0,0,0)" },
};

function Motion() {
  const [circleState, setCirclState] = useState(false);
  const [id, setId] = useState<string | null>("");

  const switchClick = () => {
    setCirclState((prev) => !prev);
  };

  return (
    <>
      <BackgroundDiv>
        <AreaBox>
          <FatherDiv>
            <ChildDiv
              layoutId={"firstBox"}
              onClick={() => setId("firstBox")}
              whileHover={{ scale: 1.2 }}
            />
            <ChildDiv>
              {circleState ? "" : <CircleDiv layoutId="circle" />}
            </ChildDiv>
            <ChildDiv>
              {circleState ? <CircleDiv layoutId="circle" /> : ""}
            </ChildDiv>
            <ChildDiv
              layoutId={"secondBox"}
              onClick={() => setId("secondBox")}
              whileHover={{ scale: 1.2 }}
            />
          </FatherDiv>
        </AreaBox>
        <SwitchBtn
          onTapStart={switchClick}
          whileTap={{ scale: [1, 1.3, 1.15] }}
          style={
            circleState
              ? { color: "rgba(222,184,135,1)" }
              : { color: "rgba(60, 180, 80, 1)" }
          }
          transition={{ type: "spring" }}
        >
          Switch
        </SwitchBtn>
      </BackgroundDiv>
      <AnimatePresence>
        {id ? (
          <OverRay
            onClick={() => setId(null)}
            variants={OverayVarient}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ type: "tween" }}
          >
            <ChildDiv layoutId={id}></ChildDiv>
          </OverRay>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default Motion;
