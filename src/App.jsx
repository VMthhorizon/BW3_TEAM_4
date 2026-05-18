import { Provider } from "react-redux";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import NavabarLinkedin from "./components/NavabarLinkedin";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <Provider store={store}>
      <NavabarLinkedin />
      <MyFooter />
    </Provider>
  );
}

export default App;
