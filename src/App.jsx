import { Provider } from "react-redux"
import "./App.css"
import store from "./redux/store"
import NavabarLinkedin from "./components/NavabarLinkedin"

function App() {
  return (
    <Provider store={store}>
      <NavabarLinkedin />
    </Provider>
  )
}

export default App
