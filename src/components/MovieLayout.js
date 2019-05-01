import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import LikeButton from './LikeButton';
import MovieImage from './MovieImage';
import { truncate } from '../utils/utils';

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
      <h3>
        {title}
      </h3>
      <Countdown date={date}>
        <span>
          Already in cinemas
        </span>
      </Countdown>
      <p>
        {noTruncate ? overview : truncate(overview, 250)}
      </p>
      <LikeButton active={isMovieInFavorite} addToFavorite={addToFavorite} />
    </div>
  </>
);

MovieLayout.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  isMovieInFavorite: PropTypes.bool.isRequired,
  addToFavorite: PropTypes.func,
  noTruncate: PropTypes.bool,
};

MovieLayout.defaultProps = {
  addToFavorite: () => null,
  noTruncate: false,
};


export default MovieLayout;
