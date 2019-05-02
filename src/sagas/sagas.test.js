import { call, put } from 'redux-saga/effects';
import { fetchMoviesAPI } from 'services/api';
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailed,
} from 'actions';
import { loadMovies } from './index';

describe('movies fetching flow', () => {
  it('should fetch movies successfully', () => {
    const generator = loadMovies();

    expect(generator.next().value).toEqual(put(fetchMovies()));
    expect(generator.next().value).toEqual(call(fetchMoviesAPI));
    expect(generator.next().value).toEqual(put(fetchMoviesSuccess(undefined)));
  });

  it('should handle exception as expected', () => {
    const generator = loadMovies();

    expect(generator.next().value).toEqual(put(fetchMovies()));
    expect(generator.next().value).toEqual(call(fetchMoviesAPI));
    expect(generator.throw('error').value).toEqual(put(fetchMoviesFailed('error')));
  });
});
