import React from 'react';
import { Link } from 'react-router';

import './index.styl';

const Home = () => (
  <div className="Home">
    <div className="logo">
      <div className="rotate">
        <div>
          <div className="dash dash-blast-blue" />
          <div className="dash dash-blast-red" />
          <div className="dash dash-blast-yellow" />
          <div className="dash dash-blast-green" />
          <div className="dash dash-blast-orange" />
          <h1 className="blast"> BLAST </h1>
        </div>
        <div>
          <h1 className="off"> OFF </h1>
          <div className="dash dash-off-blue" />
          <div className="dash dash-off-red" />
          <div className="dash dash-off-yellow" />
          <div className="dash dash-off-green" />
          <div className="dash dash-off-orange" />
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
