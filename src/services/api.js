import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "af62c948c73d11660c8d6ea2e76a9d91";

export const getTrandingMovies = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getCast = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const getReviews = async (movieId) => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};
