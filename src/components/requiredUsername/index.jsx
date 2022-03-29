import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RequiredUsername() {
  const isLoggin = useSelector((state) => state.reducerSignup);
  return isLoggin.payload.username ? <Outlet /> : <Navigate to="/signup" />;
}

export default RequiredUsername;
