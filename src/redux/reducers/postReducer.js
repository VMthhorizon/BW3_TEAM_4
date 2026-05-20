import { GET_POST_ALL } from "../actions/postAction/postAll"
import { DELETE_POST } from "../actions/postAction/postDelete"
import { POST_POST } from "../actions/postAction/postPost"

const initialState = {
  list: [],
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_ALL:
      return {
        ...state,
        list: action.payload,
      }
    case POST_POST:
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    case DELETE_POST:
      return {
        ...state,
        list: state.list.filter((exp) => {
          return exp._id !== action.payload
        }),
      }
    default:
      return state
  }
}

export default postReducer
