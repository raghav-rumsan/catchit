import { createSelector } from "reselect";
import { INITIAL_STATE } from "./reducer";

export const reduxKey = "protected_employees_list";

export const selectRoot = (state) => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  (state) => state.loading
);

export const selectData = createSelector([selectRoot], (state) => state.data);

export const selectEmpList = createSelector(
  [selectData],
  (state) => state.empList
);
export const selectPaginator = createSelector(
  [selectData],
  (state) => state.paginator
);
