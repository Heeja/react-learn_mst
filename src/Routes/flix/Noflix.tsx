import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// api
import {
  getMainMovie,
  getNowPlaying,
  trendingMovie,
  makeImagePath,
} from "../../api/moviedb";

// CSS

// 반응형 처리 참고
// @media screen and (min-width: 1500px)
// @media screen and (max-width: 800px)
// @media screen and (min-width: 800px) and (max-width: 1099px)

// Top Main
const HomeBox = styled.div`
  width: 100%;
  height: 780px;
`;

const HomeImg = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.4;
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
  // text-overflow: ellipsis;
  // overflow: hidden;
  white-space: normal;
  position: absolute;
  top: 380px;
  left: 40px;
`;
const Slider = styled.div`
  position: relative;
  height: 100px;
`;

const ListBox = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 10px;
  position: absolute;
  padding: 0 60px;
`;

const SmallBox = styled(motion.div)<{ bgImage: string }>`
  padding: 0 0.2vw;
  transition: all 0.3s ease-in-out;
  background-color: white;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  height: 120px;
  font-size: 66px;
`;

const SmallArrowBox = styled.span`
  role="button";
  background: hsla(0, 0%, 8%, 0.3);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60px;
  height: 120px;

  font-size: 3vw;

  .active {
    cursor: pointer;
  }

  .svg {
    font-weight: 500;
  }
`;

const SmallTextBox = styled.div`
  position: absolute;
  background-size: cover;
  background-position: center center;
  height: 200px;
  border-radius: 4px;
  color: snow;

  p {
    font-size: 1.2em;
    height: 100%;
    background-color: #222;
    background-image: linear-gradient(transparent, #000);
  }
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

// typescript Interface
interface INoflix {
  themeState: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>;
}

interface IMainMovie {
  backdrop_path: string;
  genres: Object;
  id: number;
  overview: string;
  original_title: string;
  title: string;
  poster_path: string;
  release_date: string;
  status: string;
  vote_average: number;
  vote_count: number;
}

interface IPlayNow {
  original_title: string;
  id: number;
  overview: string;
  release_date: string;
  title: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
}

const offset = 6;

// animation
const rowVariants = {
  hidden: {
    x: window.outerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.3,
      duaration: 0.5,
      type: "tween",
    },
  },
};

function Noflix({ themeState, setTheme }: INoflix) {
  if (!themeState) setTheme(true);
  const path = useLocation();
  const pathName = path.pathname;

  const [loading, setLoading] = useState(true);

  // Contents Data
  const [mainMovie, setMainMovie] = useState<IMainMovie>({
    backdrop_path: "",
    genres: {},
    id: 0,
    overview: "",
    original_title: "",
    title: "",
    poster_path: "",
    release_date: "",
    status: "",
    vote_average: 0,
    vote_count: 0,
  });
  // <{[key: string]: any}>({})
  const [playNowData, setPlayNow] = useState<IPlayNow[]>([]);

  const IMAGE_URL = "https://image.tmdb.org/t/p/original";

  const movieNowList = async () => {
    const mainMoveData = await getMainMovie();
    const moviesData = await getNowPlaying();
    const movieTrend = await trendingMovie();
    // console.log(mainMoveData);
    // console.log(moviesData);
    // console.log(movieTrend);

    setMainMovie(mainMoveData);
    setPlayNow(moviesData.results);
    setLoading(false);
  };

  useEffect(() => {
    movieNowList();
  }, []);

  // function
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const increaseIndex = () => {
    if (playNowData) {
      // if (leaving) return;
      // toggleLeaving();
      const totalMovies = playNowData.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;

      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  return (
    <>
      {loading ? (
        <MainTitle>"Loading......."</MainTitle>
      ) : pathName === "/Noflix" ? (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Padyakke+Expanded+One&display=swap"
            rel="stylesheet"
          />
          <HomeBox>
            <HomeImg
              bgImage={makeImagePath(mainMovie.backdrop_path, "original")}
            />
            <div>
              <MainTitle>
                {mainMovie.original_title} -{mainMovie.release_date.slice(0, 4)}
              </MainTitle>
              <MainSubText>{mainMovie.overview}</MainSubText>
            </div>
          </HomeBox>

          <br />
          <h2>Play Now!!!</h2>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              {index === 0 ? null : (
                <SmallArrowBox style={{ left: 0 }} onClick={increaseIndex}>
                  <FontAwesomeIcon icon={faAngleLeft} size="xl" />
                </SmallArrowBox>
              )}
              <ListBox
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {playNowData
                  .slice(offset * index, offset * index + offset)
                  .map((e) => {
                    console.log(e);
                    return (
                      <SmallBox
                        key={e.id}
                        variants={boxVariants}
                        whileHover="hover"
                        initial="normal"
                        transition={{ type: "tween" }}
                        bgImage={makeImagePath(e.backdrop_path, "w500")}
                      ></SmallBox>
                    );
                  })}
              </ListBox>
              <SmallArrowBox style={{ right: 0 }} onClick={increaseIndex}>
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </SmallArrowBox>
            </AnimatePresence>
          </Slider>
          <br />

          <h2>영화 Top 10</h2>
          <Slider>
            <ListBox></ListBox>
          </Slider>
          <br />

          <h2>Tv, 드라마 Top 10</h2>
          <Slider>
            <ListBox></ListBox>
          </Slider>
          <br />

          <h2>"[] []"장르 추천</h2>
          <Slider>
            <ListBox></ListBox>
          </Slider>
          <br />

          <h2>기타 콘텐츠</h2>
          <Slider>
            <ListBox></ListBox>
          </Slider>
          <br />
        </>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Noflix;
