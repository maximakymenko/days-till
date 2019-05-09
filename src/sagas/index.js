import { call, put, takeEvery } from 'redux-saga/effects';

import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailed,
} from 'actions';

import { MOVIES_FETCH_REQUESTED } from 'types';
import { fetchMoviesAPI } from 'services/api';

export function* loadMovies() {
  yield put(fetchMovies());
  try {
    const movies = yield call(fetchMoviesAPI);
    yield put(fetchMoviesSuccess(movies));
  } catch (err) {
    yield put(fetchMoviesFailed(err));
  }
}

export default function* moviesSaga() {
  yield takeEvery(MOVIES_FETCH_REQUESTED, loadMovies);
}
