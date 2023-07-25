import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeField = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

const Title = styled.h1`
  font-size: 20px;
  font-align: center;
  color: ${(props) => props.theme.textColor};
`;

const NavBox = styled.div`
  width: 80%;
  height: 80%;
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: ;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  align-content: start;
`;

const LinkBox = styled.div`
  text-align: center;
`;

const NavLink = styled.div`
  margin: 5px 10px;
  font-size: 24px;
`;

const LinkPreImg = styled.img`
  width: 320px;
  height: 180px;
`;

const MotionDiv = styled.div`
  background-color: hsl(259, 100%, 71%);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 2.4rem;
    font-family: Luminari;
    color: snow;
  }
`;

interface IHome {
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

function Home({ setTheme }: IHome) {
  const noflixBtn = () => setTheme(true);

  return (
    <HomeField>
      <Title>Home</Title>
      <NavBox>
        <LinkBox>
          <Link to={"/Coins"}>
            <NavLink>Coins</NavLink>
            <LinkPreImg src={require("../img/coins.jpeg")} />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link to={"/Todos"}>
            <NavLink>Todos</NavLink>
            <LinkPreImg src={require("../img/todos.png")} />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link to={"/Trello"}>
            <NavLink>Trello</NavLink>
            <LinkPreImg src={require("../img/trello.png")} />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link to={"/Noflix"} onClick={noflixBtn}>
            <NavLink>Noflix</NavLink>
            <LinkPreImg src={require("../img/noflix.jpeg")} />
          </Link>
        </LinkBox>
        <LinkBox>
          <Link to={"/Motion"}>
            <NavLink>MotionPage</NavLink>
            <MotionDiv>
              <h1>Framer-Motion</h1>
            </MotionDiv>
          </Link>
        </LinkBox>
      </NavBox>
    </HomeField>
  );
}

export default Home;
