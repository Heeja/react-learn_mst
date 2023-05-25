import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation, useMatch } from "react-router-dom";
import styled from "styled-components";

interface IHeadeer {
  themeState: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  position; relative;
  margin: 5px 10px;
`;

const CircleNFL = styled(motion.span)`
  width: 5px;
  height: 5px;
  position: absolute;
  background-color: red;
  border-radius: 100%;
  top: 26px;
  left: auto;
  right: auto;
  margin: 0 auto;
`;

const RightBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SeachBox = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled(motion.span)`
  width: 38px;
  height: 38px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 24px;
  }
`;

const SearchIcon = styled.i`
  tion: absolute;
  align-items: center;
  font-size: 22px;
`;

const SearchInput = styled(motion.input)`
  height: 20px;
  position: absolute;
  left: -120px;

  transform-origin: right center;
`;
const ProfileImg = styled.img`
  border-radius: 4px;
`;

function Header({ themeState, setTheme }: IHeadeer) {
  const path = useLocation();
  const homeMatch = useMatch("/noflix");
  const tvMatch = useMatch("noflix/tv");
  const movieMatch = useMatch("noflix/movie");

  const [searchOpen, setOpen] = useState(false);
  const onSearchClick = () => setOpen((prev) => !prev);

  const toggleBtn = () => setTheme((btnTheme) => !btnTheme);
  const noflixBtn = () => setTheme(true);

  return (
    <>
      {path.pathname.match("Noflix") ? (
        <HeaderBox>
          <Nav>
            <img
              height={32}
              alt="Netflix icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/256px-Netflix_icon.svg.png"
            />
            <Link to={"/Noflix"}>
              <NavLink>
                Home{" "}
                {homeMatch && (
                  <CircleNFL layoutId="circle" animate={{ type: "spring" }} />
                )}
              </NavLink>
            </Link>
            <Link to={"Noflix/tv"}>
              <NavLink>
                Tv/Series{" "}
                {tvMatch && (
                  <CircleNFL layoutId="circle" animate={{ type: "spring" }} />
                )}
              </NavLink>
            </Link>
            <Link to={"Noflix/movie"}>
              <NavLink>
                Movie{" "}
                {movieMatch && (
                  <CircleNFL layoutId="circle" animate={{ type: "spring" }} />
                )}
              </NavLink>
            </Link>
          </Nav>

          <RightBox>
            <SeachBox>
              <UserIcon
                onClick={onSearchClick}
                animate={{ x: searchOpen ? -155 : 0 }}
                // transition={{ type: "linear" }}
                // 업데이트로 transition 관련 문구 오류가 발생함. 아래 링크 참고..!
                // https://github.com/framer/motion/issues/1847
              >
                <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
              </UserIcon>
              <SearchInput
                type="text"
                placeholder="Search keyword..."
                animate={{ scaleX: searchOpen ? 1 : 0, type: "spring" }}
                // transition={{ type: "linear" }}
              />
            </SeachBox>
            <UserIcon>
              <ProfileImg
                src={require("../img/noflix_profile.png")}
              ></ProfileImg>
            </UserIcon>
          </RightBox>
        </HeaderBox>
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

            <Link to={"/Motion"}>
              <NavLink>Motion</NavLink>
            </Link>
          </Nav>
          <button onClick={toggleBtn}>{themeState ? "light" : "dark"}</button>
        </>
      )}
    </>
  );
}

export default Header;
