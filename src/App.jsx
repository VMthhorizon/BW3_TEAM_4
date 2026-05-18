import "./App.css";
import NavbarLinkedin from "./components/NavabarLinkedin";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfilePersonalInfo from "./components/ProfilePersonalInfo";
import "swiper/css";

function App() {
  return (
    <>
      <NavbarLinkedin />
      <ProfilePersonalInfo></ProfilePersonalInfo>
    </>
  );
}

export default App;
