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
        {path.pathname === "/Coins" ? <></> : null}
        {path.pathname === "/Todos" ? <></> : null}
        {path.pathname === "/Noflix" ? <></> : null}
      </Nav>
    </>
  );
}

export default Header;
