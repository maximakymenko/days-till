import React from 'react';
import propTypes from 'prop-types';

import { MovieContainer } from '../styles/components';

const SingleMovie = ({ movie }) => (
  <MovieContainer>
    {movie.title}
    |
    {movie.release_date}
  </MovieContainer>
);

SingleMovie.propTypes = {
  movie: propTypes.shape({
    backdrop_path: propTypes.string,
    title: propTypes.string,
    overview: propTypes.string,
    release_date: propTypes.string,
  }).isRequired,
};
export default SingleMovie;
