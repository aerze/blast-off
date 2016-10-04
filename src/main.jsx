import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// import todoApp from './reducers.js';
import Home from './views/Home/';
import CreateGame from './views/CreateGame.jsx';
import JoinGame from './views/JoinGame.jsx';
import Profile from './views/Profile.jsx';

import './App.styl';

// const store = createStore(todoApp);
const NotFound = () => (
  <div>
    <h1> 404 This page was not found </h1>
    <Link to="/"> go home </Link>
  </div>
);

render(
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/create" component={CreateGame} />
    <Route path="/join" component={JoinGame} />
    <Route path="/profile(/:state)" component={Profile} />
    <Route path="*" component={NotFound} />
  </Router>
, document.getElementById('App'));
