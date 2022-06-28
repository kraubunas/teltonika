import { combineReducers } from 'redux';
import user from './create-users-reducer';
import category from './categories-reducer';
import message from './message-reducer';

export default combineReducers({
  user,
  category,
  message,
});
