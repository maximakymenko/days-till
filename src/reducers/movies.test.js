import movies from './movies';
import {
  FETCH_MOVIES,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILED,
  ADD_OR_REMOVE_MOVIE_FROM_FAVORITE,
} from '../types';

import {
  ERROR_MESSAGE,
  MOVIES_DATA,
  FAVORITE_MOVIE,
} from '../mocks';

import { INITIAL_STATE } from '../shared';

const initialState = INITIAL_STATE;

describe(FETCH_MOVIES, () => {
  it('should start fetching a list of movies', () => {
    const state = initialState;
    const action = {
      type: FETCH_MOVIES,
    };
    const expectedState = {
      ...initialState,
      moviesAreLoading: true,
    };
    expect(movies(state, action)).toEqual(expectedState);
  });
});

describe(FETCH_MOVIES_FAILED, () => {
  it('should fail and receive error message', () => {
    const state = initialState;
    const action = {
      type: FETCH_MOVIES_FAILED,
      error: ERROR_MESSAGE,
    };
    const expectedState = {
      ...initialState,
      moviesError: ERROR_MESSAGE,
    };
    expect(movies(state, action)).toEqual(expectedState);
  });
});

describe(FETCH_MOVIES_SUCCESS, () => {
  it('should successfully fetch list of movies', () => {
    const state = initialState;
    const action = {
      type: FETCH_MOVIES_SUCCESS,
      movies: MOVIES_DATA,
    };
    const expectedState = {
      ...initialState,
      movies: MOVIES_DATA,
    };
    expect(movies(state, action)).toEqual(expectedState);
  });
});

describe(ADD_OR_REMOVE_MOVIE_FROM_FAVORITE, () => {
  it('should add movies to favorite if it is not on the list', () => {
    const state = initialState;
    const action = {
      type: ADD_OR_REMOVE_MOVIE_FROM_FAVORITE,
      movie: FAVORITE_MOVIE,
    };
    const expectedState = {
      ...initialState,
      favorite: [...initialState.favorite, FAVORITE_MOVIE],
    };
    expect(movies(state, action)).toEqual(expectedState);
  });
});
