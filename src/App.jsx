import { Provider } from "react-redux";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import NavabarLinkedin from "./components/NavabarLinkedin";
import ProfilePersonalInfo from "./components/ProfileSidebarLeft/ProfilePersonalInfo";
import "swiper/css";

function App() {
  return (
    <Provider store={store}>
      <NavabarLinkedin />
      <ProfilePersonalInfo></ProfilePersonalInfo>
    </Provider>
  );
}

export default App;
