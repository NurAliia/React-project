import { getItems } from '../api/load';
import * as itemActionTypes from '../components/multiselect/actiontypes';

const initialState = {
  items: [],
  choosen: [],
  search: undefined,
}

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case itemActionTypes.GET_ALL_ITEMS: {
      return {
        ...state,
        items: action.payload
      }
    }
    case itemActionTypes.ADD_ITEM: {
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description
          }
        ]
      }
    }
    case itemActionTypes.REMOVE_CHOOSEN_ITEM: {
      const filterArray = state.choosen.filter(item => item !== action.payload);
      return {
        ...state,
        choosen: filterArray
      }
    }
    case itemActionTypes.EDIT_ITEM: {
      let edititem = action.payload;
      return {
        ...state,
        items: [
          edititem,
          ...state.items.filter(item => item.id !== editItem.id)
        ]
      }
    }
    case itemActionTypes.TOGGLE_ITEM: {
      const unique =  [...new Set([
        action.payload,
        ...state.choosen
      ])];
      return {
        ...state,
        choosen: unique
      }
    }
    case itemActionTypes.SEARCH_ITEMS: {
      console.log(action.payload);
      return {
        ...state,
        search: action.payload,
      }
    }
    default:
        return state
  }
}

export function getAllItems() {
  return async function getAllItemsThunk(dispatch) {
    getItems()
      .then((items) => {
        dispatch({ type: itemActionTypes.GET_ALL_ITEMS, payload: items });
      });
  }
}
