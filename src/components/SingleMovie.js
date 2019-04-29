import React from 'react';
import PropTypes from 'prop-types';
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux';
import NotFoundImage from '../assets/images/movie_not_found.jpg';
import { createImageLink, truncate } from '../utils/utils';
import { StyledMovie } from '../styles/StyledMovie';
import { addMovieToFavorite } from '../actions';
import LikeButton from './LikeButton';

// eslint-disable-next-line no-shadow
const SingleMovie = ({ movie, favorite, addMovieToFavorite }) => {
  const addToFavorite = () => {
    addMovieToFavorite(movie);
  };
  const isMovieInFavorite = favorite.some(favMovie => favMovie.id === movie.id);

  return (
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
        <LikeButton active={isMovieInFavorite} addToFavorite={addToFavorite} />
      </div>
    </StyledMovie>
  );
};

const mapStateToProps = ({ movies }) => ({
  favorite: movies.favorite,
});

SingleMovie.propTypes = {
  addMovieToFavorite: PropTypes.func.isRequired,
  movie: PropTypes.shape({}).isRequired,
  favorite: PropTypes.arrayOf(PropTypes.shape({})),
};

SingleMovie.defaultProps = {
  favorite: [],
};

export default connect(mapStateToProps, { addMovieToFavorite })(SingleMovie);
