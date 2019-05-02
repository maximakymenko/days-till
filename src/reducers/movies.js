import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  ADD_OR_REMOVE_MOVIE_FROM_FAVORITE,
} from 'types';

import { INITIAL_STATE } from 'shared';

const initialState = INITIAL_STATE;

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        moviesAreLoading: true,
        moviesError: null,
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
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
    case ADD_OR_REMOVE_MOVIE_FROM_FAVORITE:
      if (!state.favorite.includes(action.movie)) {
        return {
          ...state,
          favorite: [...state.favorite, action.movie],
          moviesError: null,
        };
      }
      return {
        ...state,
        favorite: state.favorite.filter(favMovie => favMovie.id !== action.movie.id),
        moviesError: null,
      };

    default:
      return state;
  }
}
