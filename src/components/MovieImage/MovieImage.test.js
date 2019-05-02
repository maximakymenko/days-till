import React from 'react';
import { render, cleanup } from 'react-testing-library';

import { MOVIE_PATH } from '../../mocks';
import MovieImage from './MovieImage';

afterEach(cleanup);

describe('<MovieImage />', () => {
  // eslint-disable-next-line react/prop-types
  const TestComponent = ({ path }) => (
    <MovieImage
      path={path}
      title="title"
    />
  );

  it('should render successfully', () => {
    expect(() => render(<TestComponent />)).not.toThrow();
  });

  it('should render not found image if no path specified', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('notFoundImage').tagName).toBe('IMG');
  });

  it('should render image with path', () => {
    const { getByTestId } = render(<TestComponent path={MOVIE_PATH} />);
    expect(getByTestId('movieImage').tagName).toBe('IMG');
  });
});
