import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NoMovies } from '../styles/NoMovies';
import MovieImage from '../components/MovieImage';
import { StyledFavoriteMovie } from '../styles/StyledFavoriteMovie';


const Favorite = ({ favorite }) => {
  const areThereAnyMovies = favorite.length >= 1;
  const renderMovies = favorite.map(movie => (
    <StyledFavoriteMovie key={movie.id}>
      <MovieImage
        path={movie.poster_path}
        title={movie.title}
      />

      {movie.title}
    </StyledFavoriteMovie>
  ));

  if (areThereAnyMovies) {
    return (
      renderMovies
    );
  }
  return (
    <NoMovies>
      You did not add any movies to favorite
      <span role="img" aria-label="sad face">😐</span>
    </NoMovies>
  );
};

const mapStateToProps = ({ movies }) => ({
  favorite: movies.favorite,
});

Favorite.propTypes = {
  favorite: PropTypes.arrayOf(PropTypes.shape({})),
};

Favorite.defaultProps = {
  favorite: [],
};

export default connect(mapStateToProps)(Favorite);
