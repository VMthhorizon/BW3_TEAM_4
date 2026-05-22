import { Provider, useSelector } from "react-redux"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import store from "./redux/store"

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

import NavabarLinkedin from "./components/Header"
import MyFooter from "./components/MyFooter"
import ChatBox from "./components/Chatbox"

import HomePage from "./components/pagina home/HomePage"
import JobsPage from "./components/pagina lavoro/JobsPage"
import ProfilePage from "./components/pagina profilo/ProfilePage"
import ProfilePageDetail from "./components/paginaProfiloDetail/ProfilePageDetail"
import FormIscrizioneLinkedin from "./components/FormIscrizioneLinkedin"
import ChatPage from "./components/pagina messaggi/ChatPage"
import PaginaRete from "./components/pagina rete/PaginaRete"
import PublicProfilePage from "./components/pagina public&url/PublicProfilePage"
import Notifiche from "./components/pagina notifiche/Notifiche"
import SettingsPage from "./components/pagina settings/SettingsPage"

const MainLayout = () => {
  return (
    <>
      <NavabarLinkedin />
      <Outlet />
      <MyFooter />
      <ChatBox />
    </>
  )
}

function AppContent() {
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormIscrizioneLinkedin />} />

          <Route element={<MainLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/me" element={<ProfilePage />} />
            <Route path="/profile/:userId" element={<ProfilePageDetail />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/rete" element={<PaginaRete />} />
            <Route path="/notifiche" element={<Notifiche />} />
            <Route path="/public&url" element={<PublicProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}
