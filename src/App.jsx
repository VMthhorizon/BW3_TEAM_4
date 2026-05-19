import { Provider } from "react-redux"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from "./redux/store"
import NavabarLinkedin from "./components/NavabarLinkedin"
import SideBarSxPaginaHome from "./components/pagina home/SidebarSxPaginaHome"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfilePage from "./components/pages/ProfilePage"
import MyFooter from "./components/MyFooter"
import ChatBox from "./components/Chatbox"
import "swiper/css"

function App() {
  localStorage.setItem(
    "token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2YTBjMGE5Njc0MDQxZjAwMTUwYmZiMTEiLCJpYXQiOjE3NzkxNzQwMzgsImV4cCI6MTc4MDM4MzYzOH0.wearIW19fddf_JOanSJ0_whZTAwxzq7Awf2dOtinIxM",
  )
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
