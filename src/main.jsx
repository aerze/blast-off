import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';
import Home from './views/Home/';
import CreateGame from './views/CreateGame.jsx';
import JoinGame from './views/JoinGame.jsx';
import Profile from './views/Profile';


import './App.styl';

function logger({ getState, dispatch }) {
  return function (combinedReducers) {
    console.log('combinedReducers', combinedReducers);

    // runs once per action update
    return function (action) {
      console.groupCollapsed();
      console.log('will dispatch ', action);
      const normalActionValue = combinedReducers(action);
      if (action.type === 'DISABLE_INPUT') {
        dispatch({
          type: 'UPDATE_NAME',
          name: 'nope'
        });
      }

      console.log(`state after ${action.type} dispatch `, getState());
      console.groupEnd();
      return normalActionValue;
    };
  };
}

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  }),
  {},
  applyMiddleware(logger, logger)
);
const history = syncHistoryWithStore(hashHistory, store);


const NotFound = () => (
  <div>
    <h1> 404 This page was not found </h1>
    <Link to="/"> go home </Link>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="/create" component={CreateGame} />
      <Route path="/join" component={JoinGame} />
      <Route path="/profile(/:state)" component={Profile} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
, document.getElementById('App'));
