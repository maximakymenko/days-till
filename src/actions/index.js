import {
  MOVIES_FETCH_REQUESTED,
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  ADD_OR_REMOVE_MOVIE_TO_FAVORITE,
} from '../types';

export const requestMovies = () => ({ type: MOVIES_FETCH_REQUESTED });

export const fetchMovies = () => ({ type: FETCH_MOVIES });

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
});

export const fetchMoviesFailed = error => ({
  type: FETCH_MOVIES_FAILED,
  error,
});

export const addMovieToFavorite = movie => ({
  type: ADD_OR_REMOVE_MOVIE_TO_FAVORITE,
  movie,
});
