import {
  call,
  put,
  takeEvery,
  take,
  all,
} from 'redux-saga/effects';

import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailed,
  addMovieToFavorite,
} from 'actions';

import { MOVIES_FETCH_REQUESTED, MOVIES_ADDING_REQUESTED } from 'types';
import { fetchMoviesAPI, fetchMoviesFromDatabase } from 'services/api';

import { firebaseDatabase } from '../firebase';

export function* loadMovies() {
  const moviesList = yield call(fetchMoviesFromDatabase);
  if (moviesList.length > 0) {
    yield all(moviesList.map(movie => put(addMovieToFavorite(movie))));
  }

  yield put(fetchMovies());

  try {
    const movies = yield call(fetchMoviesAPI);
    yield put(fetchMoviesSuccess(movies));
  } catch (err) {
    yield put(fetchMoviesFailed(err));
  }
}

function* addMovie() {
  const { movie } = yield take('MOVIES_ADDING_REQUESTED');

  firebaseDatabase
    .ref('/movies')
    .orderByChild('id')
    .equalTo(movie.id)
    .once('value',
      (snapshot) => {
        if (snapshot.exists()) {
          firebaseDatabase.ref(`movies/${movie.id}`).remove();
        } else {
          firebaseDatabase.ref(`movies/${movie.id}`).set(movie);
        }
      });

  yield put(addMovieToFavorite(movie));
}

export default function* moviesSaga() {
  yield takeEvery(MOVIES_FETCH_REQUESTED, loadMovies);
  yield takeEvery(MOVIES_ADDING_REQUESTED, addMovie);
}
