import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { enableInput, disableInput, updateName, takePicture } from '../../actions/profileActions';

import './index.styl';

// import localCtrl from './../controllers/local';
navigator.getUserMedia = navigator.getUserMedia
  || navigator.webkitGetUserMedia
  || navigator.mozGetUserMedia
  || navigator.msGetUserMedia
  || navigator.oGetUserMedia;


const Profile = React.createClass({

  propTypes: {

    // state to props
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,

    // actions
    enableInput: React.PropTypes.func.isRequired,
    disableInput: React.PropTypes.func.isRequired,
    updateName: React.PropTypes.func.isRequired,
    takePicture: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      status: 'VIEW',
      title: 'Edit your Profile',
      imageSrc: 'https://randomuser.me/api/portraits/lego/1.jpg',
      userName: 'aerze'
    };
  },

  enableCamera() {
    const canvas = this.canvas;
    const context = canvas.getContext('2d');
    const video = this.video;

    const UserMediaSettings = { video: true };
    function setVideoWidth() { video.width = video.videoWidth; }

    const onMediaError = () => this.setState({ stream: 'FAILED' });
    const onMediaSuccess = (stream) => {
      this.streamSrc = window.URL.createObjectURL(stream);
      this.setState({ stream: 'READY' });
      video.addEventListener('loadedmetadata', setVideoWidth);
    };

    navigator.getUserMedia(UserMediaSettings, onMediaSuccess, onMediaError);

    this.takePic = () => {
      const { videoWidth, videoHeight } = video;

      canvas.width = videoWidth;
      canvas.height = videoHeight;
      context.drawImage(video, 0, 0, videoWidth, videoHeight);

      this.props.takePicture(canvas.toDataURL());
      this.setState({
        imageSrc: canvas.toDataURL(),
        status: 'VIEW',
        title: 'Snazzy!'
      });
    };

    this.setState({
      stream: 'LOADING'
    });
  },

  updateName({ target: { value } }) {
    this.props.updateName(value);
  },

  renderCamera() {
    this.setState({
      status: 'EDIT:PHOTO',
      title: 'What are Thoooooose!?'
    }, this.enableCamera);
  },

  renderProfile(profile) {
    // const profileSrc = this.state.imageSrc;
    const profileSrc = this.props.image;
    const image = {
      backgroundImage: `url("${profileSrc}")`,
    };

    if (profile === 'EDIT:PHOTO') {
      return (
        <div className="camera">
          <div className="profileVideo">
            <video
              ref={(node) => { this.video = node; }}
              className="video"
              autoPlay="true"
              src={this.streamSrc}
            />

            <canvas
              ref={(node) => { this.canvas = node; }}
              className="canvas"
              width="500"
              height="500"
            />
          </div>
          <button className="cameraSnapIcon" onClick={this.takePic} >SNAP</button>
        </div>
      );
    }

    return (
      <div className="image">
        <div className="profileImage" alt="profile pic">
          <div className="container" style={image} />
        </div>
        <button className="cameraIcon" onClick={this.renderCamera} >PIC</button>
      </div>
    );
  },

  renderUsername({ status, name }) {
    if (status === 'EDIT:NAME') {
      return (
        <div className="username">
          <button className="nameIcon" onClick={this.props.disableInput}>SET</button>
          <form className="nameForm" onSubmit={this.props.disableInput}>
            <input className="nameInput" type="text" onChange={this.updateName} />
          </form>
        </div>
      );
    }

    return (
      <div className="username">
        <button className="nameIcon" onClick={this.props.enableInput} >EDIT</button>
        <h1 className="name">{name}</h1>
      </div>
    );
  },

  render() {
    const title = this.props.title;

    return (
      <div className="Profile">
        {this.renderProfile(this.state.status)}

        <div className="title">
          <div className="rotate">
            <h1>{title.toUpperCase()}</h1>
          </div>
        </div>

        { this.renderUsername(this.props) }

        <div className="menu">
          <div className="button">
            <div className="link">
              <Link to="/"> CONTINUE </Link>
            </div>
          </div>
          <div className="button">
            <div className="link">
              <Link to="/"> HOME </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect(
  state => state.profile,
  { enableInput, disableInput, updateName, takePicture }
)(Profile);
