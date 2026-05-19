import { Provider } from "react-redux"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from "./redux/store"
import NavabarLinkedin from "./components/Header"
import SideBarSxPaginaHome from "./components/pagina home/sidebarSxHome/SidebarSxPaginaHome"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfilePage from "./components/pagina profilo/ProfilePage"
import MyFooter from "./components/MyFooter"
import ChatBox from "./components/Chatbox"
import "swiper/css"

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
      <MyFooter />
      <ChatBox />
    </Provider>
  )
}

export default App
