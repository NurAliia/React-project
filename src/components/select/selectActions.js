import * as actionTypes from './actiontypes';

const addCategoryItem = category => ({
  type: actionTypes.ADD_CATEGORY,
  payload: category,
});
const editCategoryItem = category => ({
  type: actionTypes.EDIT_CATEGORY,
  payload: category,
});
const deleteCategoryItems = id => ({
  type: actionTypes.REMOVE_CATEGORY,
  payload: id,
});
const toggleCategoryItem = id => ({
  type: actionTypes.TOGGLE_CATEGORY,
  payload: id,
});

export {
  addCategoryItem,
  editCategoryItem,
  deleteCategoryItems,
  toggleCategoryItem,
};
