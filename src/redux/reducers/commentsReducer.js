import { GET_COMMENTS } from "../actions/commentsActions/getComments"

const initialState = {
  list: [],
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        list: action.payload,
      }

    default:
      return state
  }
}

export default commentsReducer
