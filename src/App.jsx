import { Provider } from "react-redux"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from "./redux/store"
import NavabarLinkedin from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProfilePage from "./components/pagina profilo/ProfilePage"
import MyFooter from "./components/MyFooter"
import ChatBox from "./components/Chatbox"
import "swiper/css"
import HomePage from "./components/pagina home/HomePage"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavabarLinkedin />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/me" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      <MyFooter />
      <ChatBox />
    </Provider>
  )
}

export default App
