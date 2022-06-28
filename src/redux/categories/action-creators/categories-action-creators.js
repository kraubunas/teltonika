import {
  CREATE_NEW_CATEGORY_SUCCESS,
  CREATE_NEW_CATEGORY_FAIL,
  SET_MESSAGE,
} from './categories-action-types';
import CreateCategoryService from '../service/categories-post-service';

// @ts-ignore
const createCategoryAction = (title, subCategory, subSubCategory) => (dispatch) => CreateCategoryService.createNewCategory(title, subCategory, subSubCategory).then(
  // @ts-ignore
  (response) => {
    dispatch({
      type: CREATE_NEW_CATEGORY_SUCCESS,
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
      type: CREATE_NEW_CATEGORY_FAIL,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
    return Promise.reject();
  },
);

export default createCategoryAction;
