// NOTE: use this store variable to create a store.
import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";

const combReducer = combineReducers({
 restaurants: AppReducer,
  loginData: AuthReducer,
});
const store = createStore(combReducer, applyMiddleware(thunk));

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}