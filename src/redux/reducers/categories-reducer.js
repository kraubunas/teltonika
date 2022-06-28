import {
  CREATE_NEW_CATEGORY_SUCCESS,
  CREATE_NEW_CATEGORY_FAIL,
} from '../categories/action-creators/categories-action-types';

const initialState = {};
// @ts-ignore
export default function (action, state = initialState) {
  const type = action;
  switch (type) {
    case CREATE_NEW_CATEGORY_SUCCESS:
      return {
        ...state,
      };
    case CREATE_NEW_CATEGORY_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
