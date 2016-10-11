import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { increase, decrease } from '../../actions/todoActions';

import './index.styl';

const Home = ({ number, inc, dec }) => (
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

Home.propTypes = {
  number: React.PropTypes.number,
  inc: React.PropTypes.func,
  dec: React.PropTypes.func
};

export default connect(
  // map state to props
  (state) => {
    console.log(state);
    return { number: state.todoApp.number };
  },
  // map actions to props
  { increase, decrease }
)(Home);
