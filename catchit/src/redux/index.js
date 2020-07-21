import { combineReducers } from "redux";
import global from "./global/reducer";
import profile from "./profile";
import { employeeListReducer } from "./exployees";

const rootReducer = combineReducers({
  global,
  profile,
  employeeListReducer,
});

export default rootReducer;
