// configure store
import { createStore } from "redux";
import rootReducer from "./reducers";

function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
const store = configureStore({});

export const dispatchAction = action => store.dispatch(action);
export const getStore = () => store;
export const getState = () => store.getState();
export default () => ({ store });
