import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store';
import { GlobalStyle, theme } from './styles/GlobalStyle';

import Main from './layouts/main';
import Favorite from './layouts/favorite';
import Navigation from './components/Navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
          <Route exact path="/" component={Main} />
          <Route exact path="/favorite" component={Favorite} />
        </Router>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
