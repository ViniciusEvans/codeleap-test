import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Singup from "./pages/signup";
import Home from "./pages/home";
import RequiredUsername from "./components/requiredUsername";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/signup" element={<Singup />} />
          <Route path="/" element={<RequiredUsername />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="*" element={<RequiredUsername />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
