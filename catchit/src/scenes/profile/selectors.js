import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "home-profile";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectDailyQuotes = createSelector(
  [selectRoot],
  (state) => state.quotes
);

export const selectClocked = createSelector(
  [selectRoot],
  (state) => state.clocked
);
