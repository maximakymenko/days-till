import React, { Fragment } from 'react';
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
}) => (
  <Fragment>
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
        {truncate(overview, 250)}
      </p>
      <LikeButton active={isMovieInFavorite} addToFavorite={addToFavorite} />
    </div>
  </Fragment>
);

MovieLayout.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  isMovieInFavorite: PropTypes.bool.isRequired,
  addToFavorite: PropTypes.func.isRequired,
};


export default MovieLayout;
