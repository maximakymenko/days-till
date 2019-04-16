import React from 'react';
import propTypes from 'prop-types';
import countdown from 'countdown';
import { createImageLink } from '../utils/createImageLink';
import { MovieContainer } from '../styles/components';

const SingleMovie = ({ movie }) => (
  <MovieContainer>
    <img
      src={createImageLink(movie.poster_path)}
      alt={movie.title}
    />
    <div>
      <h3>
        {movie.title}
      </h3>
      <div>
        {countdown(null, new Date(movie.release_date), countdown.DAYS, countdown.HOURS).toString()}
      </div>
      {movie.overview}
      <button type="button">Like</button>

    </div>
  </MovieContainer>
);

SingleMovie.propTypes = {
  movie: propTypes.shape({
    poster_path: propTypes.string,
    title: propTypes.string,
    overview: propTypes.string,
    release_date: propTypes.string,
  }).isRequired,
};
export default SingleMovie;
