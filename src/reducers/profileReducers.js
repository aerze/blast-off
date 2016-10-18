import { ENABLE_INPUT, UPDATE_NAME, DISABLE_INPUT, TAKE_PICTURE } from '../constants.js';

const initialState = {
  status: 'VIEW',
  title: 'Edit your profile',
  image: 'https://randomuser.me/api/portraits/lego/1.jpg',
  name: 'Enter your name'
};

export default function update(state = initialState, { type, name, image }) {
  switch (type) {

    case ENABLE_INPUT:
      return {
        ...state,
        status: 'EDIT:NAME',
        title: 'Wahts your name!?'
      };

    case DISABLE_INPUT:
      return {
        ...state,
        status: 'VIEW',
        title: 'Edit your profile'
      };

    case UPDATE_NAME:
      return {
        ...state,
        name
      };

    case TAKE_PICTURE:
      return {
        ...state,
        image
      };

    default:
      return state;
  }
}
