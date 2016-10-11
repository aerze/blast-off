import { INCREASE, DECREASE } from '../constants';

const initialState = {
  number: 1
};

export default function update(state = initialState, { type, amount }) {
  if (type === INCREASE) return { number: state.number + amount };
  if (type === DECREASE) return { number: state.number - amount };
  return state;
}
