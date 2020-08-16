import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "home-profile";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectDailyQuotes = createSelector(
  [selectRoot],
  (state) => state.quotes
);

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectClocked = createSelector(
  [selectRoot],
  (state) => state.clocked
);

export const selectPickedDate = createSelector(
  [selectRoot],
  (state) => state.datePicked
);
