import {createSelector} from 'reselect';
import {INITIAL_STATE} from './reducer';

export const reduxKey = 'ledger';

const selectRoot = state => state[reduxKey] || INITIAL_STATE;

export const selectLoading = createSelector(
  [selectRoot],
  state => state.loading,
);

export const selectFiscalYears = createSelector(
  [selectRoot],
  state => state.fiscal_year,
);

export const selectAccountInput = createSelector(
  [selectRoot],
  state => state.accountInput,
);

export const selectNormalizedFiscalYears = createSelector(
  [selectRoot],
  state => state.normalized_fiscal_year,
);

export const selectAccountNames = createSelector(
  [selectRoot],
  state => state.account_names,
);

export const selectNormalizedAccountNames = createSelector(
  [selectRoot],
  state => state.normalized_account_names,
);

export const selectPrimary = createSelector(
  [selectRoot],
  state => state.primary,
);

export const selectPrimaryValue = key =>
  createSelector([selectPrimary], state => state[key]);

export const selectTable = createSelector([selectRoot], state => state.table);

export const selectTableData = key =>
  createSelector([selectTable], state => state[key]);
