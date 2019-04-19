import React from 'react';
import propTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import NotFoundImage from '../assets/images/movie_not_found.jpg';
import { createImageLink, truncate } from '../utils/utils';
import { StyledMovie } from '../styles/StyledMovie';

import LikeButton from './LikeButton';

const SingleMovie = ({ movie }) => (
  <StyledMovie>
    {
      movie.poster_path ? (
        <img
          src={createImageLink(movie.poster_path)}
          alt={movie.title}
        />
      )
        : (
          <img
            src={NotFoundImage}
            alt="not found"
          />
        )
    }
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
        {truncate(movie.overview, 300)}
      </p>
      <LikeButton />
    </div>
  </StyledMovie>
);

SingleMovie.propTypes = {
  movie: propTypes.shape({}).isRequired,
};

export default SingleMovie;
