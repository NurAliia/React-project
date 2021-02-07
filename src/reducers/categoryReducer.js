import * as categoryActionTypes from '../components/select/actiontypes';
import { getCategories } from '../api/load';

const initialState = {
  items: [],
	choosen: undefined,
}

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
		case categoryActionTypes.GET_ALL_CATEGORIES: {
			return {
				...state,
				items: action.payload
			}
		}

	case categoryActionTypes.ADD_CATEGORY: {
		return {
			...state,
			items: [
				{
					id: action.payload.id,
					name: action.payload.name,
					flags: action.payload.flags
				},
				...state.items
			]
		}
	}
	case categoryActionTypes.REMOVE_CATEGORY: {
		const filterArray = state.items.filter(category => category.id !== action.payload);
		return {
			...state,
			items: filterArray
		}
	}
	case categoryActionTypes.EDIT_CATEGORY: {
		let editCategory = action.payload;
		return {
			...state,
			items: [
				editCategory,
				...state.items.filter(category => category.id !== editCategory.id)
			]
		}
	}
	case categoryActionTypes.TOGGLE_CATEGORY: {
		return {
			...state,
			choosen: action.payload,
		}
	}
	default:
			return state
  }
}

export function getAllCategories() {
  return async function getAllCategoriesThunk(dispatch) {
		getCategories()
			.then((categories) => {
				dispatch({ type: categoryActionTypes.GET_ALL_CATEGORIES, payload: categories });
			});
  }
}


