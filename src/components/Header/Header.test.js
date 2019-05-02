import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

afterEach(cleanup);

describe('<Header />', () => {
  const TestComponent = () => (
    <Router>
      <Header />
    </Router>
  );

  it('should render successfully', () => {
    expect(() => render(<TestComponent />)).not.toThrow();
  });

  it('should render heading', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('header').tagName).toBe('H1');
    expect(getByTestId('header').textContent).toBe('Movie timer🍿');
  });
});
