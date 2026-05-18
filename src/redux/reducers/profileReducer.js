import { GET_PROFILE_ALL } from "../actions/ProfileAllList"
import { GET_PROFILE_BY_ID } from "../actions/profileById"
import { GET_PROFILE_PERSONALE } from "../actions/profiloPersonal"

const initialState = {
  me: null,
  selectedProfile: null,
  profiles: [],
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    // PROFILO PERSONALE
    case GET_PROFILE_PERSONALE:
      return {
        ...state,
        me: action.payload,
      }

    // PROFILO PER ID
    case GET_PROFILE_BY_ID:
      return {
        ...state,
        selectedProfile: action.payload,
      }

    // LISTA DI TUTTI I PROFILI
    case GET_PROFILE_ALL:
      return {
        ...state,
        profiles: action.payload,
      }

    default:
      return state
  }
}

export default profileReducer
