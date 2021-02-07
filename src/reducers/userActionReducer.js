import { ADD_USER_ACTION, GET_ALL_USER_ACTIONS } from '../commonActions';

const initialState = {
  user_actions: []
}

export default function userActionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USER_ACTIONS: {
      return {
        ...state,
        user_actions: action.payload
      }
    }
    case ADD_USER_ACTION: {
      return {
        ...state,
        user_actions: [
          {
            id: action.payload.id,
            eventName: action.payload.eventName,
            eventValue: action.payload.eventValue
          },
          ...state.user_actions
        ]
      }
    }
    default:
        return state
    }
}
