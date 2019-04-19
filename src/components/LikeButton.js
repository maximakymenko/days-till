import React from 'react';
import heart from '../assets/icons/heart.svg';

import { StyledLikeButton } from '../styles/StyledLikeButton';

export default function LikeButton() {
  return (
    <StyledLikeButton active>
      <img src={heart} alt="like" />
    </StyledLikeButton>
  );
}
