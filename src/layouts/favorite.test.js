import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { INITIAL_STATE } from '../shared';
import Favorite from './favorite';

const mockStore = configureMockStore();
const store = mockStore(INITIAL_STATE);

afterEach(cleanup);

describe('<Favorite />', () => {
  const TestComponent = () => (
    <Provider store={store}>
      <Favorite />
    </Provider>
  );

  it('should render successfully', () => {
    expect(() => render(<TestComponent />)).not.toThrow();
  });
});
