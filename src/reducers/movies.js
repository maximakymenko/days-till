import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  ADD_OR_REMOVE_MOVIE_TO_FAVORITE,
} from '../types';

const initialState = {
  favorite: [],
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
    case ADD_OR_REMOVE_MOVIE_TO_FAVORITE:
      if (!state.favorite.includes(action.movie)) {
        return {
          ...state,
          favorite: [...state.favorite, action.movie],
          moviesError: null,
        };
      }
      return {
        ...state,
        favorite: state.favorite.filter(favMovie => favMovie !== action.movie.id),
        moviesError: null,
      };

    default:
      return state;
  }
}
