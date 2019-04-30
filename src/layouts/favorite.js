import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Favorite = ({ favorite }) => {
  // const areThereAnyMovies = favorite.length >= 1;
  const renderMovies = favorite.map(movie => <div key={movie.id}>{movie.title}</div>);
  return (
    renderMovies
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
