import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeField = styled.div`
  width: 100wh;
  height: 100vh;
  display: flex;
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
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: ;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
`;

const LinkBox = styled.div`
  text-align: center;
`;

const NavLink = styled.div`
  margin: 5px 10px;
`;

function Home() {
  return (
    <HomeField>
      <Title>Home</Title>
      <NavBox>
        <LinkBox>
          <Link to={"/Coins"}>
            <NavLink>Coins</NavLink>
          </Link>
        </LinkBox>
        <LinkBox>
          <Link to={"/Todos"}>
            <NavLink>Todos</NavLink>
          </Link>
        </LinkBox>
        <LinkBox>
          <Link to={"/Trello"}>
            <NavLink>Trello</NavLink>
          </Link>
        </LinkBox>
        <LinkBox>
          <Link to={"/Noflix"}>
            <NavLink>Noflix</NavLink>
          </Link>
        </LinkBox>
      </NavBox>
    </HomeField>
  );
}

export default Home;
