import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profileReducer"
import experienceReducer from "../reducers/experiencesReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experience: experienceReducer,
  },
})

export default store
