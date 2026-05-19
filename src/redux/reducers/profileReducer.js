import { POST_PROFILE_PICTURES } from "../actions/images action/pictureProfilo"
import { GET_PROFILE_ALL } from "../actions/profileAction/ProfileAllList"
import { GET_PROFILE_BY_ID } from "../actions/profileAction/profileById"
import { GET_PROFILE_PERSONALE } from "../actions/profileAction/profiloPersonal"

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
    case POST_PROFILE_PICTURES:
      return {
        ...state,
        me: { ...state.me, image: action.payload.image },
      }

    default:
      return state
  }
}

export default profileReducer
