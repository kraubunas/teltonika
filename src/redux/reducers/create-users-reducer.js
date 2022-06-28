import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
} from '../create-users/action-creators/create-users-action-types';

const initialState = {};
// @ts-ignore
export default function (action, state = initialState) {
  const type = action;
  switch (type) {
    case CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
      };
    case CREATE_NEW_USER_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
