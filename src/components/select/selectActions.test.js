import * as actions from './selectActions';
import * as types from './actiontypes';

describe('actions', () => {
  it('should create an action to add a category', () => {
    const obj = { id: 1, name: 'new Category', flags: null };
    const expectedAction = {
      type: types.ADD_CATEGORY,
      payload: obj,
    };
    expect(actions.addCategoryItem(obj)).toEqual(expectedAction);
  });
});
describe('actions', () => {
  it('should create an action to edit a category', () => {
    const category = { id: 1, name: 'edit Category', flags: 'smf' };
    const expectedAction = {
      type: types.EDIT_CATEGORY,
      payload: category,
    };
    expect(actions.editCategoryItem(category)).toEqual(expectedAction);
  });
});
