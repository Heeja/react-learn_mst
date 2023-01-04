import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface IHeadeer {
  themeState: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 38px;
  align-items: center;

  img {
    margin: 3px 3px;
  }
`;

const NavLink = styled.div`
  margin: 5px 10px;
`;

function Header({ themeState, setTheme }: IHeadeer) {
  const path = useLocation();

  const toggleBtn = () => setTheme((btnTheme) => !btnTheme);
  const noflixBtn = () => setTheme(true);

  return (
    <>
      {path.pathname === "/Noflix" ? (
        <>
          <Nav>
            <img
              height={32}
              alt="Netflix icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/256px-Netflix_icon.svg.png"
            />
            <Link to={"/"}>
              <NavLink>
                <h1>Home</h1>
              </NavLink>
            </Link>
            <Link to={"/Noflix"}>
              <NavLink>Movie</NavLink>
            </Link>

            <Link to={"/Noflix"}>
              <NavLink>Series</NavLink>
            </Link>

            <Link to={"/Noflix"}>
              <NavLink>Etc</NavLink>
            </Link>
          </Nav>
        </>
      ) : (
        <>
          <Nav>
            <Link to={"/"}>
              <NavLink>
                <h1>Home</h1>
              </NavLink>
            </Link>
            <Link to={"/Coins"}>
              <NavLink>Coins</NavLink>
            </Link>
            <Link to={"/Todos"}>
              <NavLink>Todos</NavLink>
            </Link>

            <Link to={"/Trello"}>
              <NavLink>Trello</NavLink>
            </Link>

            <Link to={"/Noflix"} onClick={noflixBtn}>
              <NavLink>Noflix</NavLink>
            </Link>
          </Nav>
          <button onClick={toggleBtn}>{themeState ? "light" : "dark"}</button>
        </>
      )}
    </>
  );
}

export default Header;
