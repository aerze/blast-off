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
    <div className="menu">
      <div className="button">
        <div className="link">
          <Link to="/create"> CREATE GAME </Link>
        </div>
      </div>

      <div className="button">
        <div className="link">
          <Link to="/join"> JOIN GAME </Link>
        </div>
      </div>

      <div className="button">
        <div className="link">
          <Link to="/profile"> EDIT PROFILE </Link>
        </div>
      </div>
    </div>
  </div>
);

module.exports = Home;
