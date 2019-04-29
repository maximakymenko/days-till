import React from 'react';
import PropTypes from 'prop-types';
import heart from '../assets/icons/heart.svg';

import { StyledLikeButton } from '../styles/StyledLikeButton';

const LikeButton = ({ active, addToFavorite }) => (
  <StyledLikeButton
    onClick={addToFavorite}
    active={active}
  >
    <img src={heart} alt="like" />
  </StyledLikeButton>
);

LikeButton.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default LikeButton;
