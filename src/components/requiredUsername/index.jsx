import { Outlet, Navigate } from "react-router-dom";

function RequiredUsername() {
  const username = true;
  return username ? <Outlet /> : <Navigate to="/signup" />;
}

export default RequiredUsername;
