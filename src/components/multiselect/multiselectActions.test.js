import * as actions from './multiselectActions';
import * as types from './actiontypes';

describe('actions', () => {
  it('should create an action to add a item', () => {
    const obj = { id: 1, name: 'new Item', parent_id: 1, flags: null };
    const expectedAction = {
      type: types.ADD_ITEM,
      payload: obj,
    };
    expect(actions.addItem(obj)).toEqual(expectedAction);
  });
});
describe('actions', () => {
  it('should create an action to edit a Item', () => {
    const item = { id: 1, name: 'edit Item', parent_id: 2, flags: 'smf' };
    const expectedAction = {
      type: types.EDIT_ITEM,
      payload: item,
    };
    expect(actions.editItem(item)).toEqual(expectedAction);
  });
});
describe('actions', () => {
  it('should create an action to remove the item', () => {
    const itemId = 1;
    const expectedAction = {
      type: types.REMOVE_ITEM,
      payload: itemId,
    };
    expect(actions.removeItems(itemId)).toEqual(expectedAction);
  });
});
