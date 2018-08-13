import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import hello from "./hello";
import bmr from "./bmr";
import tdee from "./tdee";
import foodCalculator from "./foodCalculator";

export default combineReducers({
  router: routerReducer,
  hello,
  bmr,
  tdee,
  foodCalculator
});
