// NOTE: Responsable de crear el store de redux
import { createStore } from "redux";
import todoCombinedReducers from "./reducers";

const store = createStore(
  todoCombinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
