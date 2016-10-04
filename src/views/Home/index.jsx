import React from 'react';
import { Link } from 'react-router';

import './index.styl';

const Home = () => (
  <div className="Home">
    <div className="logo">
      <div className="rotate">
        <h1 className="blast"> BLAST </h1>
        <div>
          <h1 className="off"> OFF </h1>
          <div className="dash dash-blue" />
          <div className="dash dash-red" />
          <div className="dash dash-yellow" />
          <div className="dash dash-green" />
        </div>
      </div>
    </div>
    <Link to="/create"> Create Game </Link>
    <br />
    <Link to="/join"> Join Game </Link>
    <br />
    <Link to="/profile"> Edit Profile </Link>
  </div>
);

module.exports = Home;
