import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";
import RoutesController from "./routes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RoutesController />
      </Provider>
    </div>
  );
}

export default App;
