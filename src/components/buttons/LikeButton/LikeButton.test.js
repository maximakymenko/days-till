import React from 'react';
import { render, cleanup } from 'react-testing-library';
import LikeButton from './LikeButton';

afterEach(cleanup);

const addToFavorite = () => jest.fn();

describe('<LikeButton />', () => {
  const TestComponent = () => (
    <LikeButton
      addToFavorite={addToFavorite}
      active
    />
  );

  it('should render successfully', () => {
    expect(() => render(<TestComponent />)).not.toThrow();
  });
});
