import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// api
import { getMainMovie, getNowPlaying, trendingMovie } from "../../api/moviedb";

// CSS

// 반응형 처리 참고
// @media screen and (min-width: 1500px)
// @media screen and (max-width: 800px)
// @media screen and (min-width: 800px) and (max-width: 1099px)

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
  // text-overflow: ellipsis;
  // overflow: hidden;
  white-space: normal;
  position: absolute;
  top: 380px;
  left: 40px;
`;

const ListBox = styled.div`
  display: flex;
  position: relative;
  padding: 0 60px;
`;

const SmallBox = styled(motion.div)`
  position: relative;
  padding: 0 0.2vw;
  transition: all 0.3s ease-in-out;
  width: 16.66666667%;
`;

const SmallArrowBox = styled.span`
  role="button";
  background: hsla(0, 0%, 8%, 0.7);
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;

  font-size: 3vw;

  .active {
    cursor: pointer;
  }

  .svg {
    font-weight: 500;
  }
`;

const SmallTextBox = styled.div`
  width: 16.666667%;
  height: 100%;
  position: absolute;
  background-color: rgb(34, 34, 34);
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  border-radius: 4px;
  color: snow;

  p {
    font-size: 1.2em;
    height: 100%;
    background-color: #222;
    background-image: linear-gradient(transparent, #000);
  }
`;

const SmallImgBox = styled.img`
  width: 100%;
  height: 100%;
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
    // console.log(moviesData.results);

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
        <HomeBox>
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

          <div>
            <MainImg
              src={require("../../img/noflix/aHFgoGZ2VQNY45nJWGcBvszaMXz.jpg")}
              alt="dune-2021"
            />
            <MainTitle>
              {mainMovie.original_title} -{mainMovie.release_date.slice(0, 4)}
            </MainTitle>
            <MainSubText>{mainMovie.overview}</MainSubText>
          </div>
          <br />
          <h2>Play Now!!!</h2>
          {/* 슬라이드 형식 from nomad.
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      whileHover="hover"
                      initial="normal"
                      variants={boxVariants}
                      transition={{ type: "tween" }}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
           */}
          <ListBox>
            {index === 0 ? null : (
              <SmallArrowBox style={{ left: 0 }} onClick={increaseIndex}>
                <FontAwesomeIcon icon={faAngleLeft} size="xl" />
              </SmallArrowBox>
            )}
            <AnimatePresence>
              {playNowData
                .slice(offset * index, offset * index + offset)
                .map((e) => {
                  return (
                    <SmallBox
                      key={e.id}
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                    >
                      <div style={{ height: "100%" }}>
                        {/* <SmallImgBox src={`${IMAGE_URL}${e.poster_path}`} /> */}
                      </div>
                      <SmallTextBox>{/* <p>{e.title}</p> */}</SmallTextBox>
                    </SmallBox>
                  );
                })}
              <SmallArrowBox style={{ right: 0 }} onClick={increaseIndex}>
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </SmallArrowBox>
            </AnimatePresence>
          </ListBox>
          <br />
          <h2>영화 Top 10</h2>
          <ListBox>
            {Array.from({ length: 20 }, (_, idx) => idx + 1).map((e) => {
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
            {Array.from({ length: 20 }, (_, idx) => idx + 1).map((e) => {
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
            {Array.from({ length: 20 }, (_, idx) => idx + 1).map((e) => {
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
            {Array.from({ length: 20 }, (_, idx) => idx + 1).map((e) => {
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
