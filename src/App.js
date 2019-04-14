import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { GlobalStyle, theme } from './styles/GlobalStyle';

import Home from './layouts/home';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </Provider>
);

export default App;
