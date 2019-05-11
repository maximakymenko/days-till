import React from 'react';
import PropTypes from 'prop-types';
import { StyledLikeButton } from 'styles/StyledLikeButton';
import heartIcon from 'assets/icons/icon_heart.svg';
import { sendUserNotification } from 'services/api';


const LikeButton = ({ active, addToFavorite }) => {
  const magic = () => {
    sendUserNotification();
    addToFavorite();
  };
  return (
    <StyledLikeButton
      data-testid="like-button"
      className="like-button"
      type="button"
      onClick={magic}
      active={active}
    >
      <img
        src={heartIcon}
        alt="like movie"
      />
    </StyledLikeButton>
  );
};

LikeButton.propTypes = {
  addToFavorite: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default LikeButton;
