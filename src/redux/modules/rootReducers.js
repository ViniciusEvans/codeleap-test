import { combineReducers } from "redux";

import reducer from "../reducers/reducer";
import { reducerSignup } from "../reducers/reducer";
export default combineReducers({
  reducer,
  reducerSignup,
});
