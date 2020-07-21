import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "employees-list";

const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectEmployees = createSelector(
  [selectRoot],
  (state) => state.employees
);

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectQuery = createSelector([selectRoot], (state) => state.query);
