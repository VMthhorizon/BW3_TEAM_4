import { TOGGLE_DARK_MODE } from "../actions/themeActions/toggleDarkMode"

const initialState = {
  darkMode: localStorage.getItem("theme") === "dark",
}

const toggleThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      localStorage.setItem("theme", !state.darkMode ? "dark" : "light")
      return {
        ...state,
        darkMode: !state.darkMode,
      }

    default:
      return state
  }
}

export default toggleThemeReducer
