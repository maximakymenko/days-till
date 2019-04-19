import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import { GlobalStyle, theme } from './styles/GlobalStyle';

import Main from './layouts/main';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  </Provider>
);

export default App;
