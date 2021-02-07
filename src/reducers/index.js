import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import userActionReducer from './userActionReducer';

const rootReducer = combineReducers({
  category: categoryReducer,
  item: itemReducer,
  userAction: userActionReducer,
})

export default rootReducer;
