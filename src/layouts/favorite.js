import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NoMovies } from '../styles/NoMovies';
import { Container } from '../styles/Container';
import { StyledFavoriteMovie } from '../styles/StyledFavoriteMovie';
import { addMovieToFavorite } from '../actions';
import MovieLayout from '../components/MovieLayout';

// eslint-disable-next-line no-shadow
const Favorite = ({ favorite, addMovieToFavorite }) => {
  const areThereAnyMovies = favorite.length >= 1;
  const renderMovies = favorite.map(movie => (
    <StyledFavoriteMovie key={movie.id}>
      <MovieLayout
        path={movie.poster_path}
        title={movie.title}
        date={movie.release_date}
        overview={movie.overview}
        addToFavorite={() => addMovieToFavorite(movie)}
        isMovieInFavorite
        noTruncate
      />
    </StyledFavoriteMovie>
  ));

  if (areThereAnyMovies) {
    return (
      <Container>
        {renderMovies}
      </Container>
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
  addMovieToFavorite: PropTypes.func.isRequired,
};

Favorite.defaultProps = {
  favorite: [],
};

export default connect(mapStateToProps, { addMovieToFavorite })(Favorite);
