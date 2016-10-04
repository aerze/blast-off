import React from 'react';
import { Link } from 'react-router';

const JoinGame = () => (
  <div>
    <h1> Join an existing game </h1>
    <div>
      <label htmlFor="gameid" > Game ID </label>
      <input id="gameid" type="text" />
    </div>
    <Link to="/"> go home </Link>
  </div>
);

export default JoinGame;
