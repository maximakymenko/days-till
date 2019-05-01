import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import { truncate } from '../../utils/utils';

import LikeButton from '../buttons/LikeButton/LikeButton';
import MovieImage from '../MovieImage';

const MovieLayout = ({
  path,
  title,
  date,
  overview,
  isMovieInFavorite,
  addToFavorite,
  noTruncate,
}) => (
  <>
    <MovieImage
      path={path}
      title={title}
    />
    <div>
      <h3 data-testid="movie-title">
        {title}
      </h3>
      <Countdown date={date}>
        <span>
          Already in cinemas
        </span>
      </Countdown>
      <p data-testid="movie-overview">
        {noTruncate ? overview : truncate(overview, 250)}
      </p>
      <LikeButton
        active={isMovieInFavorite}
        addToFavorite={addToFavorite}
      />
    </div>
  </>
);

MovieLayout.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  isMovieInFavorite: PropTypes.bool,
  addToFavorite: PropTypes.func,
  noTruncate: PropTypes.bool,
};

MovieLayout.defaultProps = {
  addToFavorite: () => null,
  noTruncate: false,
  isMovieInFavorite: false,
};


export default MovieLayout;
