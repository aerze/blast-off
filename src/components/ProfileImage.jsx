import React, { PropTypes } from 'react';

const face = (number) => {
  const bool = Math.round(Math.random() * 10) >= 5;
  const gender = bool ? 'men' : 'women';
  return `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
};

const randInt = (min, max) => {
  const offset = (Math.floor(max) - Math.ceil(min)) + 1;
  return Math.floor(Math.random() * offset) + min;
};

const defaultStyle = {
  borderRadius: '50%',
  maxWidth: '7em',
  border: '2px solid black'
};

const ProfileImage = ({ style = defaultStyle }) => {
  const source = face(randInt(0, 80));
  return (
    <div style={{ display: 'inline-block' }}>
      <img style={style} alt="User Profile" src={source} />
    </div>
  );
};

ProfileImage.propTypes = {
  style: PropTypes.object
};


export default ProfileImage;
