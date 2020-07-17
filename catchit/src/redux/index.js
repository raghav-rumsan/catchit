import { combineReducers } from "redux";
import global from "./global/reducer";
import profile from "./profile";

const rootReducer = combineReducers({
  global,
  profile,
});

export default rootReducer;
