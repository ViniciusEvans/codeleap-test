import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Home from "./pages/home";
import RequiredUsername from "./components/requiredUsername";

function RoutesController() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<RequiredUsername />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default RoutesController;
