import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import { connect } from 'react-redux';
import { requestMovies } from '../actions';

import Header from '../components/Header';
import SingleMovie from '../components/SingleMovie';


// eslint-disable-next-line no-shadow
const Main = ({ requestMovies, movies }) => {
  useEffect(() => {
    requestMovies();
  }, [requestMovies]);

  const renderMovies = movies.map(movie => (
    <Box
      key={movie.id}
      width={
        [1, 1 / 2, 1 / 3, 1 / 4]
      }
      align="center"
    >
      <SingleMovie movie={movie} />
    </Box>
  ));

  return (
    <>
      <Header />
      Hello, world
      <Flex
        flexWrap="wrap"
      >
        {renderMovies}
      </Flex>
    </>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies: movies.movies,

});

Main.propTypes = {
  requestMovies: propTypes.func,
  movies: propTypes.arrayOf(propTypes.shape({
    poster_path: propTypes.string,
  })),
};

Main.defaultProps = {
  requestMovies: null,
  movies: [],
};

export default connect(mapStateToProps, { requestMovies })(Main);
