import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {topReducer} from "./topReducer";

const rootReducer = combineReducers({
  topReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;