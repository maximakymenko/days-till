import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
} from '../types';

const initialState = {
  movies: [],
  moviesAreLoading: false,
  moviesError: null,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        moviesAreLoading: true,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        movies: action.movies,
        moviesAreLoading: false,
        moviesError: null,
      };

    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        moviesAreLoading: false,
        moviesError: action.error,
      };

    default:
      return state;
  }
}
