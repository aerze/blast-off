import React from 'react';
import { Link } from 'react-router';

import './index.styl';

const Home = () => (
  <div className="Home">
    <h1> Blast Off </h1>
    <Link to="/create"> Create Game </Link>
    <br />
    <Link to="/join"> Join Game </Link>
    <br />
    <Link to="/profile"> Edit Profile </Link>
  </div>
);

module.exports = Home;
