import React from 'react';
import PropTypes from 'prop-types';
import { StyledLikeButton } from 'styles/StyledLikeButton';
import heartIcon from 'assets/icons/icon_heart.svg';


const LikeButton = ({ active, addToFavorite }) => (
  <StyledLikeButton
    data-testid="like-button"
    className="like-button"
    onClick={addToFavorite}
    active={active}
  >
    <img
      src={heartIcon}
      alt="like movie"
    />
  </StyledLikeButton>
);

LikeButton.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default LikeButton;
