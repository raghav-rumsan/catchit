import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "protected_employees_single_view";

export const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectEmployeeDetails = createSelector(
  [selectRoot],
  (state) => state.employeeDetails
);

export const selectPaginator = createSelector(
  [selectRoot],
  (state) => state.paginator
);
