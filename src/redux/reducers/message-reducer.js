import { SET_MESSAGE, CLEAR_MESSAGE } from '../create-users/action-creators/create-users-action-types';

const initialState = {};
// @ts-ignore
export default function (action, state = initialState) {
  const type = action;
  const payload = action;
  switch (type) {
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: '' };
    default:
      return state;
  }
}
