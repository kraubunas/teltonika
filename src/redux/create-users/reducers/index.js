import { combineReducers } from 'redux';
import user from './create-users-reducer';
import message from './message-reducer';

export default combineReducers({
  user,
  message,
});
