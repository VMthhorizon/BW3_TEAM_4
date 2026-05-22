import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "../reducers/profileReducer"
import experienceReducer from "../reducers/experiencesReducer"
import postReducer from "../reducers/postReducer"
import commentsReducer from "../reducers/commentsReducer"
import notificationReducer from "../reducers/notificationReducer"
import toggleThemeReducer from "../reducers/toggleThemeReducer"

const store = configureStore({
  reducer: {
    profile: profileReducer,
    experience: experienceReducer,
    post: postReducer,
    comments: commentsReducer,
    notification: notificationReducer,
    theme: toggleThemeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
})

export default store
