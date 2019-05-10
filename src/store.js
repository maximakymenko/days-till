import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import moviesSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);


sagaMiddleware.run(moviesSaga);

export { store };
