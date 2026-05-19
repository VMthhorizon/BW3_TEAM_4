import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profileReducer"
import experienceReducer from "../reducers/experiencesReducer"
import postReducer from "../reducers/postReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experience: experienceReducer,
    post: postReducer,
  },
})

export default store
