import React from 'react';
import PropTypes from 'prop-types';
import { StyledLikeButton } from 'styles/StyledLikeButton';
import heartIcon from 'assets/icons/icon_heart.svg';
import { sendUserNotification } from 'services/api';


const LikeButton = ({ active, addToFavorite }) => {
  const addToFavoriteAndSendNotifications = () => {
    sendUserNotification('Added!', 'Movie was successfully added');
    addToFavorite();
  };
  return (
    <StyledLikeButton
      data-testid="like-button"
      className="like-button"
      type="button"
      onClick={addToFavoriteAndSendNotifications}
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
