import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Top Main
const HomeBox = styled.div`
  width: 100%;
  height: 600px;
`;

const MainImg = styled.img`
  width: 100%;
  filter: brightness(45%);
`;

const MainTitle = styled.h1`
  font-family: "Padyakke Expanded One", cursive;
  font-size: 72px;
  position: absolute;
  top: 280px;
  left: 40px;
`;

const MainSubText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  width: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  top: 380px;
  left: 40px;
`;

const ListBox = styled.div`
  display: flex;
  position: relative;
`;

const SmallBox = styled.span`
  position: relative;
`;

const SmallArrowBox = styled.div`
  position: absolute;
  width: 24px;
  height: 125px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallTextBox = styled.p`
  position: absolute;
  top: 4px;
  left: 4px;
`;

const SmallImgBox = styled.img`
  width: 220px;
  height: 120px;
`;

// Movie Top list

// Tv Top List

// rate Top List

const SearchInput = styled(motion.input)`
  height: 20px;
  position: absolute;
  left: -120px;

  transform-origin: right center;
`;
interface INoflix {
  themeState: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

function Noflix({ themeState, setTheme }: INoflix) {
  if (!themeState) setTheme(true);
  const path = useLocation();
  const pathName = path.pathname;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Padyakke+Expanded+One&display=swap"
        rel="stylesheet"
      />

      {pathName === "/Noflix" ? (
        <HomeBox>
          <div>
            <MainImg
              src={require("../../img/noflix/aHFgoGZ2VQNY45nJWGcBvszaMXz.jpg")}
              alt="dune-2021"
            />
            <MainTitle>Dune - 2021</MainTitle>
            <MainSubText>
              Paul Atreides, <br />a brilliant and gifted young man born into a
              great destiny beyond his understanding, must travel to the most
              dangerous planet in the universe to ensure the future of his
              family and his people. <br />
              As malevolent forces explode into conflict over the planet's
              exclusive supply of the most precious resource in existence-a
              commodity capable of unlocking humanity's greatest potential-only
              <br />
              those who can conquer their fear will survive.
            </MainSubText>
          </div>
          <br />
          <h2>새로 올라온 콘텐츠</h2>
          <ListBox>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              return (
                <SmallBox key={e}>
                  <SmallImgBox />
                  <SmallTextBox>{e}</SmallTextBox>
                </SmallBox>
              );
            })}
            <SmallArrowBox>
              <FontAwesomeIcon icon={faAngleRight} size="xl" />
            </SmallArrowBox>
          </ListBox>
          <br />
          <h2>영화 Top 10</h2>
          <ListBox>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              return (
                <SmallBox key={e}>
                  <SmallImgBox />
                  <SmallTextBox>{e}</SmallTextBox>
                </SmallBox>
              );
            })}
            <SmallArrowBox>
              <FontAwesomeIcon icon={faAngleRight} size="xl" />
            </SmallArrowBox>
          </ListBox>
          <br />
          <h2>Tv, 드라마 Top 10</h2>
          <ListBox>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              return (
                <SmallBox key={e}>
                  <SmallImgBox />
                  <SmallTextBox>{e}</SmallTextBox>
                </SmallBox>
              );
            })}
            <SmallArrowBox>
              <FontAwesomeIcon icon={faAngleRight} size="xl" />
            </SmallArrowBox>
          </ListBox>
          <br />
          <h2>"[] []"장르 추천</h2>
          <ListBox>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              return (
                <SmallBox key={e}>
                  <SmallImgBox />
                  <SmallTextBox>{e}</SmallTextBox>
                </SmallBox>
              );
            })}
            <SmallArrowBox>
              <FontAwesomeIcon icon={faAngleRight} size="xl" />
            </SmallArrowBox>
          </ListBox>
          <br />
          <h2>기타 콘텐츠</h2>
          <ListBox>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
              return (
                <SmallBox key={e}>
                  <SmallImgBox />
                  <SmallTextBox>{e}</SmallTextBox>
                </SmallBox>
              );
            })}
            <SmallArrowBox>
              <FontAwesomeIcon icon={faAngleRight} size="xl" />
            </SmallArrowBox>
          </ListBox>
        </HomeBox>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Noflix;
