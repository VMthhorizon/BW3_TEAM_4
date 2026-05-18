import { Provider } from "react-redux"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from "./redux/store"
import NavabarLinkedin from "./components/NavabarLinkedin"
import SideBarSxPaginaHome from "./components/pagina home/SidebarSxPaginaHome"

function App() {
  return (
    <Provider store={store}>
      <NavabarLinkedin />
      <SideBarSxPaginaHome />
    </Provider>
  )
}

export default App
