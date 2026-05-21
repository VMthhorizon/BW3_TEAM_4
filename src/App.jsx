import { Provider } from "react-redux";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import NavabarLinkedin from "./components/Header";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ProfilePage from "./components/pagina profilo/ProfilePage";
import MyFooter from "./components/MyFooter";
import ChatBox from "./components/Chatbox";
import "swiper/css";
import HomePage from "./components/pagina home/HomePage";
import JobsPage from "./components/pagina lavoro/JobsPage";
import ProfilePageDetail from "./components/paginaProfiloDetail/ProfilePageDetail";
import FormIscrizioneLinkedin from "./components/FormIscrizioneLinkedin";
import ChatPage from "./components/pagina messaggi/ChatPage";

import PaginaRete from "./components/pagina rete/PaginaRete";
const MainLayout = () => {
  return (
    <>
      <NavabarLinkedin />
      <Outlet />
      <MyFooter />
      <ChatBox />
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      {/* <div className="overflow-x-hidden"> */}
      {/* commento perchè sovrascrive la proprietà sticky, se da problemi di scroll orizzontale lo mettiamo a posto. Vale */}
      <div>
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
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}
