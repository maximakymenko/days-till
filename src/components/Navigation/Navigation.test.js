import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './Navigation';

afterEach(cleanup);

describe('<Navigation />', () => {
  const TestComponent = () => (
    <Router>
      <Navigation />
    </Router>
  );

  it('should render successfully', () => {
    expect(() => render(<TestComponent />)).not.toThrow();
  });

  it('should render navigation links', () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText('Home').tagName).toBe('A');
    expect(getByText('Favorite').tagName).toBe('A');
  });
});
