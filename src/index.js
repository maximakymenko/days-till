import React from 'react';
import ReactDOM from 'react-dom';
import { askForPermissioToReceiveNotifications } from 'services/push-notifications';
import * as serviceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(
  <App />, document.getElementById('root'),
);

if (localStorage.getItem('notifications-token')) {
  askForPermissioToReceiveNotifications();
}

serviceWorker.register();
