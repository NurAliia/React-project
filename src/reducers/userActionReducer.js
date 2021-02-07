import { ADD_USER_ACTION, GET_ALL_USER_ACTIONS } from '../commonActions';

const initialState = {
  userActions: []
}

export default function userActionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER_ACTIONS: {
      return {
        ...state,
        userActions: action.payload
      }
    }
    case ADD_USER_ACTION: {
      return {
        ...state,
        userActions: [
          {
            id: action.payload.id,
            eventName: action.payload.eventName,
            eventValue: action.payload.eventValue
          },
          ...state.userActions
        ]
      }
    }
    default:
        return state
    }
}
