import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { MOVIE_MOCK } from 'mocks';
import { INITIAL_STATE } from 'shared';
import SingleMovie from './SingleMovie';

const mockStore = configureMockStore();
const store = mockStore(INITIAL_STATE);

afterEach(cleanup);

describe('<SingleMovie />', () => {
  const TestComponent = () => (
    <Provider store={store}>
      <SingleMovie
        movie={MOVIE_MOCK}
      />
    </Provider>
  );

  it('should render successfully', () => {
    expect(() => render(<TestComponent />)).not.toThrow();
  });

  it('should render movie image', () => {
    const { getByAltText } = render(<TestComponent />);
    expect(getByAltText('POKÉMON Detective Pikachu').tagName).toBe('IMG');
  });

  it('should render movie title ', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('movie-title').textContent).toBe(MOVIE_MOCK.title);
  });

  it('should render movie overview ', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('movie-overview').textContent).toBe(MOVIE_MOCK.overview);
  });
});
