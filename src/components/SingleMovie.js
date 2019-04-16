import React from 'react';
import propTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import { createImageLink } from '../utils/createImageLink';
import { MovieContainer } from '../styles/components';

import LikeButton from './LikeButton';

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
      <Countdown date={movie.release_date}>
        <span>
          Already in cinemas
        </span>
      </Countdown>
      <p>
        {movie.overview}
      </p>
      <LikeButton />

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
