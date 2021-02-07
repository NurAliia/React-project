import * as actionTypes from './actiontypes';

const addItem = item => ({
  type: actionTypes.ADD_ITEM,
  payload: item,
});
const editItem = item => ({
  type: actionTypes.EDIT_ITEM,
  payload: item,
});
const removeItems = id => ({
  type: actionTypes.REMOVE_ITEM,
  payload: id,
});
const toggleItem = id => ({
  type: actionTypes.TOGGLE_ITEM,
  payload: id,
});
const removeChoosenItem = id => ({
  type: actionTypes.REMOVE_CHOOSEN_ITEM,
  payload: id,
});
const changeSearch = str => ({
  type: actionTypes.SEARCH_ITEMS,
  payload: str,
});


export {
  addItem,
  editItem,
  removeItems,
  toggleItem,
  removeChoosenItem,
  changeSearch,
};
