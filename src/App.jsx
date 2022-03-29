import "./App.scss";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import RoutesController from "./routes";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RoutesController />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
