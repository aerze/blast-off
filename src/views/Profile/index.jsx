import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './index.styl';

// import localCtrl from './../controllers/local';
navigator.getUserMedia = navigator.getUserMedia
  || navigator.webkitGetUserMedia
  || navigator.mozGetUserMedia
  || navigator.msGetUserMedia
  || navigator.oGetUserMedia;


const Profile = React.createClass({
  getInitialState() {
    return {
      status: 'PROFILE:VIEW',
      camera: '',
      imageSrc: 'https://randomuser.me/api/portraits/lego/1.jpg',
      userName: 'aerze'
    };
  },

  componentWillMount() {
    // const test = localCtrl.profile.get();
    // console.log('get', test);
  },

  componentWillUnmount() {

  },

  enableCamera() {
    const canvas = this.canvas;
    const context = canvas.getContext('2d');
    const video = this.video;

    navigator.getUserMedia(
      { video: true },
      (stream) => {
        this.stream = stream;
        this.streamSrc = window.URL.createObjectURL(stream);
        this.setState({ stream: 'READY' });
        video.width = video.videoWidth;
      },
      () => {
        this.setState({ stream: 'FAILED' });
      });
    this.drawImage = context.drawImage;

    this.takePic = () => {
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;
      canvas.width = videoWidth;
      canvas.height = videoHeight;
      context.drawImage(video, 0, 0, videoWidth, videoHeight);
      this.setState({
        imageSrc: canvas.toDataURL(),
        status: 'PROFILE:VIEW'
      });
    };
    // Trigger photo take
    // document.getElementById("snap").addEventListener("click", function() {
    //   context.drawImage(video, 0, 0, 640, 480);
    // });

    this.setState({
      stream: 'LOADING'
    });
  },

  handleClick() {
    if (this.state.status === 'PROFILE:VIEW') {
      this.setState({ status: 'PROFILE:EDIT' });
    } else {
      this.setState({ status: 'PROFILE:VIEW' });
    }
  },

  renderCamera() {
    this.setState({
      status: 'PROFILE:EDIT'
    }, this.enableCamera);
  },

  renderProfile(status) {
    const profileSrc = this.state.imageSrc;
    const image = {
      background: `center bottom url("${profileSrc}")`,
    }
    const saveToInstance = (name) => {
      return (node) => {
        this[name] = node;
      };
    };

    if (status === 'PROFILE:EDIT') {
      return (
        <div className="test">
          <div className="profileVideo">
            <video
              ref={saveToInstance('video')}
              autoPlay="true"
              src={this.streamSrc}
            />

            <canvas
              ref={saveToInstance('canvas')}
              className="canvas"
              width="500"
              height="500"
            />
          </div>
          <button className="cameraIcon" onClick={this.takePic} >SNAP</button>
        </div>
      );
    }

    return (
      <div className="image">
        <div className="profileImage" alt="profile pic">
          <div className="image" style={image} />
        </div>
        <button className="cameraIcon" onClick={this.renderCamera} >Edit</button>
      </div>
    );
  },

  render() {
    const title = this.state.status === 'PROFILE:VIEW'
      ? 'Create your Profile'
      : 'Edit your Profile';

    return (
      <div className="Profile">
        <div className="camera">
          {this.renderProfile(this.state.status)}
        </div>

        {/*<div className="title">
          <div className="rotate">
            <h1>{title.toUpperCase()}</h1>
          </div>
        </div>

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
        </div>*/}
      </div>
    );
  }
});

export default connect(
  state => state,
  {}
)(Profile);
