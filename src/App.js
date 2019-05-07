import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Firebase, FirebaseContext } from './firebase';
import { store, persistor } from './store';
import { GlobalStyle, theme } from './styles/GlobalStyle';

import Main from './layouts/main';
import Favorite from './layouts/favorite';
import SignIn from './layouts/login';
import Register from './layouts/register';
import Navigation from './components/Navigation';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FirebaseContext.Provider value={new Firebase()}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Router>
            <Navigation />
            <Route exact path="/" component={Main} />
            <Route exact path="/favorite" component={Favorite} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={Register} />
          </Router>
        </ThemeProvider>
      </FirebaseContext.Provider>
    </PersistGate>
  </Provider>
);

export default App;
