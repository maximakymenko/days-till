import React from 'react';
import { render, cleanup } from 'react-testing-library';

import MovieLayout from './MovieLayout';

afterEach(cleanup);

const addToFavorite = () => jest.fn();

describe('<MovieLayout />', () => {
  // eslint-disable-next-line react/prop-types
  const TestComponent = () => (
    <MovieLayout
      path=""
      title="title"
      date="2019-05-10"
      overview="overview"
      isMovieInFavorite
      addToFavorite={addToFavorite}
    />
  );

  it('should render successfully', () => {
    expect(() => render(<TestComponent />)).not.toThrow();
  });

  it('should render movie title ', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('movie-title').textContent).toBe('title');
  });

  it('should render movie overview ', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('movie-overview').textContent).toBe('overview');
  });

  it('should render like button ', () => {
    const { getByAltText } = render(<TestComponent />);
    expect(getByAltText('like movie').tagName).toBe('IMG');
  });
});
