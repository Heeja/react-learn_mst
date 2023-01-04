import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const FlixHeader = styled.div`
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  top: 0px;
  border: none;
`;
const UserIcon = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
  }
`;

const SearchBtn = styled(motion.button)`
  border: none;
  background-color: transparent;
  padding: 0 0;
  margin-right: 4px;
`;

const SearchInput = styled(motion.input)`
  border: none;
  height: 60%;
`;

const HeadlineCard = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
`;

const HeadlineImg = styled.img`
  width: 100vw;
  height: auto;
`;
const HeadlineInfoBox = styled.div`
  width: 60%;
  position: absolute;
  top: 40%;
  left: 6%;
  color: white;

  h1 {
    font-size: 200%;
  }
  p {
    font-size: 80%;
  }
`;

const CardBigBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  span {
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }

  span:first-child {
    left: 0px;
  }
  span:last-child {
    right: 0px;
  }

  svg {
    height: 120px;
    display: none;
  }

  :hover {
    svg {
      display: block;
    }
  }
`;

const SlideBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  width: 100%;
`;

const SlideCard = styled(motion.div)`
  background-color: white;
  height: 120px;
  img {
  }
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

function Noflix() {
  const [btnState, setBtnState] = useState(true);
  const [index, setIndex] = useState(0);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setBtnState(!btnState);
  };

  const onBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (index === 0) return;
    setIndex((prev) => prev - 1);
  };
  const onNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIndex((prev) => prev + 1);
  };
  return (
    <>
      <FlixHeader>
        <SearchBtn onClick={onClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z"
              fill="currentColor"
            ></path>
          </svg>
        </SearchBtn>
        <SearchInput
          animate={
            btnState
              ? { scaleX: 0, display: "none" }
              : { scaleX: 1, display: "block" }
          }
          placeholder="search name..."
        />
        <UserIcon>
          <img alt="profile" src={require("../../img/noflix_profile.png")} />
        </UserIcon>
      </FlixHeader>

      <HeadlineCard>
        <HeadlineImg src={require("../../img/mainPoster.jpeg")} alt="" />
        <HeadlineInfoBox>
          <h1>Witcher: Blood Origin</h1>
          <p>
            《위쳐》의 세계가 펼쳐지기 1,000여 년 전. 무소불위의 권력을 가진
            제국에 맞서고자 뭉친 엘프 세계의 추방자 일곱 명이 험난한 원정길에
            오른다.
          </p>
          <div>Top Card Action Btn</div>
        </HeadlineInfoBox>
      </HeadlineCard>

      <CardBigBox>
        <AnimatePresence>
          <span onClick={onBack}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
            </svg>
          </span>
          <SlideBox
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
            key={index}
          >
            {Array.from(Array(8).keys()).map((e, index) => {
              return <SlideCard key={index}>{e}</SlideCard>;
            })}
          </SlideBox>
          <span onClick={onNext}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </span>
        </AnimatePresence>
      </CardBigBox>
    </>
  );
}

export default Noflix;
