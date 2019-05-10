/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledMovie } from 'styles/StyledMovie';
import { requestAddingMovies } from 'actions';
import MovieLayout from '../MovieLayout';

const SingleMovie = ({
  movie,
  favorite,
  requestAddingMovies,
}) => {
  const addToFavorite = () => {
    requestAddingMovies(movie);
  };
  const isMovieInFavorite = favorite.some(favMovie => favMovie.id === movie.id);

  return (
    <StyledMovie>
      <MovieLayout
        path={movie.poster_path}
        title={movie.title}
        date={movie.release_date}
        overview={movie.overview}
        isMovieInFavorite={isMovieInFavorite}
        addToFavorite={addToFavorite}
      />
    </StyledMovie>
  );
};

const mapStateToProps = ({ movies }) => ({
  favorite: movies.favorite,
});

SingleMovie.propTypes = {
  requestAddingMovies: PropTypes.func.isRequired,
  movie: PropTypes.shape({}).isRequired,
  favorite: PropTypes.arrayOf(PropTypes.shape({})),
};

SingleMovie.defaultProps = {
  favorite: [],
};

export default connect(mapStateToProps, { requestAddingMovies })(SingleMovie);
