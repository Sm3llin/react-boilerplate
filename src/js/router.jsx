import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import createHistory from 'history/createHashHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';

import routes from './routes';
import Root from './Root';
import configureStore from './redux/configureStore';

let initialState = {};

// rehydrate initialState for JS app
if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__;

  // Transform into Immutable.js collections,
  // but leave top level keys untouched for Redux
  Object
    .keys(initialState)
    .forEach((key) => {
      initialState[key] = fromJS(initialState[key]);
    });
}

const hashHistory = createHistory();

const store = configureStore(initialState, hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

// Create a persistor for determining when the store has been REHYDRATE'd
//
// This value can be used like the <PersistGate /> from redux-persist(v5) to wait
// for the store before rendering the app.
let _persistor = null;
const rehydrated = new Promise((resolve) => {
  _persistor = persistStore(
    store,
    // Configuration for persistence
    {
      transforms: [immutableTransform()],
      whitelist: ['example'],
      blacklist: 'routing',
    },
    resolve
  );
});
_persistor.rehydrated = rehydrated;
const persistor = _persistor;

console.log(persistor);

// Render the React application to the DOM
// Root component is to bootstrap Provider, Router and DevTools
ReactDOM.render(
  <Root history={history} routes={routes} store={store} persistor={persistor} />,
  document.getElementById('app-container')
);
