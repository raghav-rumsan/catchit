import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "protected_create_quotes";

export const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);
