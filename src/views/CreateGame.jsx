import React from 'react';
import { Link } from 'react-router';

import ProfileImage from './../components/ProfileImage.jsx';

const smallProfileImage = {
  borderRadius: '50%',
  maxWidth: '4em',
  border: '2px solid black'
};

const CreateGame = () => (
  <div>
    <h1> Creating a new game </h1>
    <div>
      <ProfileImage />
      <ProfileImage style={smallProfileImage} />
      <ProfileImage style={smallProfileImage} />
      <ProfileImage style={smallProfileImage} />
    </div>
    <div
      style={{
        background: '#f3f3f3',
        width: '20em',
        padding: '1em'
      }}
    >
      <h4> Invite players with this code </h4>
      <h2> HT32B </h2>
      <label htmlFor="gametype" > Username </label>
      <select id="gametype" type="select" >
        <option> 2 v 2 </option>
        <option> 2 v 2 v 2 </option>
      </select>
      <br />
      <button> CREATE </button>
    </div>
    <Link to="/"> go home </Link>
  </div>
);

export default CreateGame;
