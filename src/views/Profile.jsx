import React from 'react';
import { Link } from 'react-router';
import ProfileImage from './../components/ProfileImage.jsx';

const Profile = () => (
  <div>
    <h1> Edit your stuff </h1>
    <div>
      <ProfileImage />
    </div>
    <div>
      <h1> Username </h1>
      <h3> Aerze </h3>

      <h1> Password </h1>
      <h3> ****** </h3>

      <h1> Username </h1>
      <h3> Aerze </h3>
    </div>
    <button> Edit </button>
    <Link to="/"> go home </Link>
  </div>
);

export default Profile;
