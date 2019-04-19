import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMovies } from '../actions';
import { Container } from '../styles/Container';
import Header from '../components/Header';
import SingleMovie from '../components/SingleMovie';


// eslint-disable-next-line no-shadow
const Main = ({ requestMovies, movies }) => {
  useEffect(() => {
    requestMovies();
  }, [requestMovies]);

  const renderMovies = movies.map(movie => (
    <SingleMovie key={movie.id} movie={movie} />
  ));

  return (
    <>
      <Header />
      <Container>
        {renderMovies}
      </Container>
    </>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies: movies.movies,
});

Main.propTypes = {
  requestMovies: propTypes.func,
  movies: propTypes.arrayOf(propTypes.shape({})),
};

Main.defaultProps = {
  requestMovies: null,
  movies: [],
};

export default connect(mapStateToProps, { requestMovies })(Main);
