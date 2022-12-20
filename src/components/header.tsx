import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const NavLink = styled.div`
  margin: 5px 10px;
`;

function Header() {
  const path = useLocation();

  return (
    <>
      <Nav>
        <Link to={"/"}>
          <NavLink>
            <h1>Home</h1>
          </NavLink>
        </Link>
        {path.pathname === "/Coins" ? (
          <>
            <Link to={"/Todos"}>
              <NavLink>Todos</NavLink>
            </Link>

            <Link to={"/Trello"}>
              <NavLink>Trello</NavLink>
            </Link>

            <Link to={"/Noflix"}>
              <NavLink>Noflix</NavLink>
            </Link>
          </>
        ) : null}
        {path.pathname === "/Todos" ? (
          <>
            <Link to={"/Todos"}>
              <NavLink>Todos</NavLink>
            </Link>

            <Link to={"/Trello"}>
              <NavLink>Trello</NavLink>
            </Link>

            <Link to={"/Noflix"}>
              <NavLink>Noflix</NavLink>
            </Link>
          </>
        ) : null}
        {path.pathname === "/Trello" ? (
          <>
            <Link to={"/Todos"}>
              <NavLink>Todos</NavLink>
            </Link>

            <Link to={"/Trello"}>
              <NavLink>Trello</NavLink>
            </Link>

            <Link to={"/Noflix"}>
              <NavLink>Noflix</NavLink>
            </Link>
          </>
        ) : null}
        {path.pathname === "/Noflix" ? (
          <>
            <Link to={"/Noflix"}>
              <NavLink>Movie</NavLink>
            </Link>

            <Link to={"/Noflix"}>
              <NavLink>Series</NavLink>
            </Link>

            <Link to={"/Noflix"}>
              <NavLink>Etc</NavLink>
            </Link>
          </>
        ) : null}
      </Nav>
    </>
  );
}

export default Header;
