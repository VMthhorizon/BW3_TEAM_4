import {
  ADD_NOTIFICATION,
  MARK_ALL_AS_READ,
} from "../actions/notificationAction/addNotification"

const initialState = {
  list: [],
}

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return {
        ...state,
        list: [action.payload, ...state.list],
      }
    case MARK_ALL_AS_READ:
      return {
        ...state,
        list: state.list.map((n) => ({
          ...n,
          read: true,
        })),
      }
    default:
      return state
  }
}

export default notificationReducer
