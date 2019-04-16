import React from 'react';
import heart from '../assets/heart.svg';

export default function LikeButton() {
  return (
    <div>
      <img src={heart} alt="like" />
    </div>
  );
}
