import Axios from 'axios';

// const api_key = 'd75fb7cf2c66add623cc560e3d88bfbd';
const api_key = process.env.REACT_APP_api_key;

const instance = Axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: { api_key: api_key, language: 'uk-UK' },
});

const img_api = {
    poster: "https://image.tmdb.org/t/p/w185", 
    posterBig: "https://image.tmdb.org/t/p/w342",
    backdrop: "https://image.tmdb.org/t/p/w1280", 
};

const genres = {
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: "35",
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    "Science Fiction": 878,
    "TV Movie": 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
  };

  const requests = {
    searchMovies: `/search/movie`,
    upcomingMovies: "/movie/upcoming",
    trendingMovies: `/trending/movie/week`,
    popularMovies: `/movie/popular`,
    topRatedMovies: `/movie/top_rated`,
    comedyMovies: `discover/movie?with_genres=${genres.Comedy}`,
    actionMovies: `discover/movie?with_genres=${genres.Action}`,
    romanticMovies: `discover/movie?with_genres=${genres.Romance}`,
    crimeMovies: `discover/movie?with_genres=${genres.Crime}`,
    horrorMovies: `discover/movie?with_genres=${genres.Horror}`,
    documentaryMovies: `discover/movie?with_genres=${genres.Documentary}`,
  };

  export { requests, instance, img_api };