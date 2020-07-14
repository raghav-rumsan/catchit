import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "home";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;
