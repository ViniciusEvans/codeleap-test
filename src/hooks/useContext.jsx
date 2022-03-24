import { useContext } from "react";
import Context from "../context/UserContext";

function useContext() {
  return useContext(Context);
}

export default useContext;
