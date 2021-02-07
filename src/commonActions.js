export const ADD_USER_ACTION = 'ADD_USER_ACTION';
export const GET_ALL_USER_ACTIONS = 'GET_ALL_USER_ACTIONS';

export const addUserActionCreator = action => ({
  type: ADD_USER_ACTION,
  payload: action
});

export const getAllUserActionCreator = (actions) => ({
  type: GET_ALL_USER_ACTIONS,
  payload: actions
});
