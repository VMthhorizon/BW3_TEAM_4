import { GET_POST_ALL } from "../actions/post Action/postAll"

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

    default:
      return state
  }
}

export default postReducer
