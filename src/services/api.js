import axios from "axios";
import { TMDB_API_KEY, TMDB_API_URL } from "../constants";

export const searchMovies = (query) =>
  axios.get(
    `${TMDB_API_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=en-US`
  );

export const discoverMovies = (genreId) =>
  axios.get(
    `${TMDB_API_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&language=en-US`
  );
