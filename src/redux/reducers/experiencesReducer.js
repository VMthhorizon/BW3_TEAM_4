import { DELETE_EXPERIENCES } from "../actions/experiencesAction/experienceDelete"
import { POST_EXPERIENCES } from "../actions/experiencesAction/experiencePost"
import { PUT_EXPERIENCES } from "../actions/experiencesAction/experiencePut"
import { GET_EXPERIENCES_ALL } from "../actions/experiencesAction/experiencesList"
import { GET_EXPERIENCES_BY_ID } from "../actions/experiencesAction/experiencesSingle"

const initialState = {
  list: [],
  selectedExperience: null,
}

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES_ALL:
      return {
        ...state,
        list: action.payload,
      }
    case GET_EXPERIENCES_BY_ID:
      return {
        ...state,
        selectedExperience: action.payload,
      }
    case POST_EXPERIENCES:
      return {
        ...state,
        list: [...state.list, action.payload],
      }
    case PUT_EXPERIENCES:
      return {
        ...state,
        list: state.list.map((exp) => {
          exp._id === action.payload ? action.payload : exp
        }),
      }
    case DELETE_EXPERIENCES:
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

export default experienceReducer
