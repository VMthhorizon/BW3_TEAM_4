import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profileReducer"
import experienceReducer from "../reducers/experiencesReducer"
import postReducer from "../reducers/postReducer"
import commentsReducer from "../reducers/commentsReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experience: experienceReducer,
    post: postReducer,
    comments: commentsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export default store
