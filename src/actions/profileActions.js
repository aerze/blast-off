import { ENABLE_INPUT, UPDATE_NAME, DISABLE_INPUT, TAKE_PICTURE } from '../constants.js';

// setState
export function enableInput() {
  return {
    type: ENABLE_INPUT
  };
}

export function disableInput() {
  return {
    type: DISABLE_INPUT
  };
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    name
  };
}

export function enableCamera() {
  return {
    type: 'ENABLE_CAMERA'
  };
}

export function connectCamera() {
  return {
    type: 'CONNECT_CAMERA'
  };
}

export function takePicture(image) {
  return {
    type: TAKE_PICTURE,
    image
  };
}
