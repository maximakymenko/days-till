import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyledMovie } from 'styles/StyledMovie';
import { addMovieToFavorite } from 'actions';
import MovieLayout from '../MovieLayout';
import { FirebaseContext } from '../../firebase';

// eslint-disable-next-line no-shadow
const SingleMovie = ({ movie, favorite, addMovieToFavorite }) => {
  const firebase = useContext(FirebaseContext);
  const addToFavorite = () => {
    addMovieToFavorite(movie);
    console.log(firebase);
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
  addMovieToFavorite: PropTypes.func.isRequired,
  movie: PropTypes.shape({}).isRequired,
  favorite: PropTypes.arrayOf(PropTypes.shape({})),
};

SingleMovie.defaultProps = {
  favorite: [],
};

export default connect(mapStateToProps, { addMovieToFavorite })(SingleMovie);
