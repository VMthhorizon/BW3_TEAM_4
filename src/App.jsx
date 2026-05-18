import { Provider } from "react-redux"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from "./redux/store"
import NavabarLinkedin from "./components/NavabarLinkedin"
import SideBarSxPaginaHome from "./components/pagina home/SidebarSxPaginaHome"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfilePage from "./components/pages/ProfilePage"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavabarLinkedin />
        <Routes>
          <Route path="/" element={<SideBarSxPaginaHome />} />
          <Route path="/me" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
