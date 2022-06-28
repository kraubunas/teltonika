import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
} from '../action-creators/create-users-action-types';

const initialState = {};
// @ts-ignore
export default function (action, state = initialState) {
  const type = action;
  switch (type) {
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case CREATE_NEW_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
