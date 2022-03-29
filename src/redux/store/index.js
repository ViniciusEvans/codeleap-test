import { createStore } from "redux";
import { persistStore } from "redux-persist";
import persistedReducers from "../modules/reduxPersist";
import rootReducers from "../modules/rootReducers";

const store = createStore(persistedReducers(rootReducers));

export const persistor = persistStore(store);
export default store;
