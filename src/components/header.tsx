import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.ul`
  display: flex;
`;

const NavLink = styled.li`
  margin: 5px 10px;
`;

function Header() {
  return (
    <>
      <Nav>
        <NavLink>
          <Link to={"/"}>Home</Link>
        </NavLink>
        <NavLink>
          <Link to={"/Coins"}>Coins</Link>
        </NavLink>
        <NavLink>
          <Link to={"/Todos"}>Todos</Link>
        </NavLink>
        <NavLink>
          <Link to={"/Noflix"}>Noflix</Link>
        </NavLink>
      </Nav>
    </>
  );
}

export default Header;
