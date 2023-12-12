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
// @media screen and (max-width: 800px){}
// @media screen and (min-width: 800px) and (max-width: 1400px){}
// @media screen and (min-width: 1401px){}

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

const ListBox = styled(motion.div)<{ offset: number }>`
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(${(props) => props.offset}, 1fr);
  margin-bottom: 10px;
  position: absolute;
  padding: 0 60px;
`;

const SmallBox = styled(motion.div)<{ bgimage: string }>`
  padding: 0 0.2vw;
  transition: all 0.3s ease-in-out;
  background-color: white;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center center;
  height: 120px;
  // font-size: 66px;
  color: black;
`;

const SmallArrowBox = styled.span`
  role: button;
  background: hsla(0, 0%, 8%, 0.3);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60px;
  height: 120px;
  z-index: 1;

  font-size: 3vw;

  .active {
    cursor: pointer;
  }

  .svg {
    font-weight: 500;
  }
`;

// Movie Top list

// Tv Top List

// rate Top List

// typescript Interface
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

interface ITrendMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: "en";
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

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

function Noflix() {
  const path = useLocation();
  const pathName = path.pathname;

  const [loading, setLoading] = useState(true);

  // windows size action
  const [winSize, setWinSize] = useState(window.innerWidth);
  const handleWinsize = () => {
    setWinSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWinsize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleWinsize);
    };
  }, []);
  const offset = winSize < 1160 ? (winSize < 980 ? 4 : 5) : 6;

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
  const [trendMovies, setTrend] = useState<ITrendMovies[]>([]);

  const [mainIndex, setMainIndex] = useState(0);
  const [trendIndex, setTrendIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const movieNowList = async () => {
    const mainMoveData = await getMainMovie();
    const nowPlayMovies = await getNowPlaying();
    const movieTrend = await trendingMovie();

    setMainMovie(mainMoveData);
    setPlayNow(nowPlayMovies.results);
    setTrend(movieTrend.results);
    setLoading(false);
    console.log(playNowData.map((e) => [e.title, e.id]));
  };

  useEffect(() => {
    movieNowList();
  }, []);

  // function
  const changeIndex = (
    props: string,
    direction: string,
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    if (props === "main") {
      const totalMovies = playNowData.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      if (direction === "right") {
        setMainIndex((prev) => (prev === maxIndex ? (prev = 0) : (prev += 1)));
      }
      if (direction === "left") {
        setMainIndex((prev) => (prev <= 0 ? (prev = maxIndex) : (prev -= 1)));
      }
    } else if (props === "trend") {
      const totalMovies = trendMovies.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;

      setTrendIndex((prev) => (prev === maxIndex ? (prev = 0) : (prev += 1)));
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
          <h2>{winSize}</h2>
          <br />
          <h2>Play Now!!!</h2>
          <Slider>
            <AnimatePresence initial={false}>
              {mainIndex === 0 ? null : (
                <SmallArrowBox
                  style={{ left: 0 }}
                  onClick={(e) => changeIndex("main", "left", e)}
                >
                  <FontAwesomeIcon icon={faAngleLeft} size="xl" />
                </SmallArrowBox>
              )}
              <ListBox
                offset={offset}
                key={mainIndex}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {playNowData
                  .slice(offset * mainIndex, offset * mainIndex + offset)
                  .map((e) => {
                    return (
                      <SmallBox
                        key={e.id}
                        variants={boxVariants}
                        whileHover="hover"
                        initial="normal"
                        transition={{ type: "tween" }}
                        bgimage={makeImagePath(e.backdrop_path, "w500")}
                      ></SmallBox>
                    );
                  })}
              </ListBox>
              <SmallArrowBox
                style={{ right: 0 }}
                onClick={(e) => changeIndex("main", "right", e)}
              >
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </SmallArrowBox>
            </AnimatePresence>
          </Slider>
          <br />

          <h2>영화 Top 10</h2>
          <Slider>
            <AnimatePresence initial={false}>
              {trendIndex === 0 ? null : (
                <SmallArrowBox
                  style={{ left: 0 }}
                  onClick={(e) => changeIndex("trend", "left", e)}
                >
                  <FontAwesomeIcon icon={faAngleLeft} size="xl" />
                </SmallArrowBox>
              )}
              <ListBox
                offset={offset}
                key={trendIndex}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {/* {trendMovies
                  .slice(offset * trendIndex, offset * trendIndex + offset)
                  .map((e) => {
                    return (
                      <SmallBox
                        key={e.id}
                        variants={boxVariants}
                        whileHover="hover"
                        initial="normal"
                        transition={{ type: "tween" }}
                        bgimage={makeImagePath(e.backdrop_path, "w500")}
                      ></SmallBox>
                    );
                  })} */}
              </ListBox>
              <SmallArrowBox
                style={{ right: 0 }}
                onClick={(e) => changeIndex("trend", "right", e)}
              >
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </SmallArrowBox>
            </AnimatePresence>
          </Slider>
          <br />

          <h2>Tv, 드라마 Top 10</h2>
          <Slider>
            <ListBox offset={offset}></ListBox>
          </Slider>
          <br />

          <h2>"[] []"장르 추천</h2>
          <Slider>
            <ListBox offset={offset}></ListBox>
          </Slider>
          <br />

          <h2>기타 콘텐츠</h2>
          <Slider>
            <ListBox offset={offset}></ListBox>
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
