import React from 'react';
import PropTypes from 'prop-types';

import NotFoundImage from '../assets/images/movie_not_found.jpg';
import { createImageLink } from '../utils/utils';

const MovieImage = ({ path, title }) => {
  const renderImage = path ? (
    <img
      src={createImageLink(path)}
      alt={title}
    />
  ) : (
    <img
      src={NotFoundImage}
      alt="not found"
    />
  );

  return renderImage;
};

MovieImage.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
};

MovieImage.defaultProps = {
  path: null,
  title: '',
};
export default MovieImage;
