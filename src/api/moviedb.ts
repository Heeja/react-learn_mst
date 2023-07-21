const API_KEY = "d2e530675e5da364d1fdcc0740450cbb";

const BASIC_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

const LANG = "language=ko";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

// Movies Data

export function getMovies() {
  return fetch(`${BASIC_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

// Dune (2021) Info.
export function getMainMovie() {
  return fetch(`${BASIC_URL}/movie/438631?${LANG}`, options).then((res) =>
    res.json()
  );
}

export function getNowPlaying() {
  return fetch(`${BASIC_URL}/movie/now_playing?${LANG}&page=1`, options).then(
    (res) => res.json()
  );
}

export function getmoviesTop() {
  return fetch(`${BASIC_URL}/movie/top_rated?${LANG}&page=1`, options).then(
    (res) => res.json()
  );
}

// Movie Day Treding
export function trendingMovie() {
  return fetch(`${BASIC_URL}/trending/movie/day?${LANG}`, options).then((res) =>
    res.json()
  );
}

// All Trending Video
export function allTrending() {
  return fetch(`${BASIC_URL}/trending/all/day?${LANG}`, options).then((res) =>
    res.json()
  );
}

// TV, Seriese, Season Data

export function getTvTop() {
  return fetch(`${BASIC_URL}/tv/top_rated?${LANG}&page=1`, options).then(
    (res) => res.json()
  );
}

// TV Treding
export function trendingTV() {
  return fetch(`${BASIC_URL}/trending/tv/day?${LANG}`, options).then((res) =>
    res.json()
  );
}

//

// const getMovies = async () => {
//     const json = await (
//       await fetch(
//         `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
//       )
//     ).json();
//     setMovies(json.data.movies);
//     setLoading(false);
//   };
//   useEffect(() => {
//      getMovies();
//    }, []);

export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}
