import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export const history = createHistory();

const initialState = {
  hello: {
    enthusiasmLevel: 0
  }
};
const middleware = [thunk, routerMiddleware(history)];

let composedEnhancers;

composedEnhancers =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

export default createStore(rootReducer, initialState, composedEnhancers);
