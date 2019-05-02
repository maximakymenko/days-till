import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import LikeButton from './LikeButton';

afterEach(cleanup);

const addToFavorite = jest.fn();

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

  it('should render like button', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('like-button').tagName).toBe('BUTTON');
  });

  it('should run the function on click', () => {
    const { getByTestId } = render(<TestComponent />);
    fireEvent.click(getByTestId('like-button'));
    expect(addToFavorite).toHaveBeenCalledTimes(1);
  });
});
