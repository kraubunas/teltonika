import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_FAIL,
  SET_MESSAGE,
} from './create-users-action-types';
import CreateUserService from '../service/create-user-service';

// @ts-ignore
const createUserAction = (firstName, lastName, password, email, age, gender, category) => (dispatch) => CreateUserService.createNewUser(firstName, lastName, password, email, age, gender, category).then(
  // @ts-ignore
  (response) => {
    dispatch({
      type: CREATE_NEW_USER_SUCCESS,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: response.data.message,
    });
    return Promise.resolve();
  },
  // @ts-ignore
  (error) => {
    const message = (error.response
      && error.response.data
      && error.response.data.message)
      || error.message
      || error.toString();
    dispatch({
      type: CREATE_NEW_USER_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
    return Promise.reject();
  },
);

export default createUserAction;
