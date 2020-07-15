import {
  fiscalYearsGet,
  ledgerListHeadersGet,
  ledgerViewAccountNamesGet,
  ledgerViewGet,
} from "../../api";
import { flatten } from "../../utils/helpers";
import * as types from "./types";
import { selectPrimary } from "./selectors";

export const getFiscalYearsRequest = (payload) => ({
  type: types.GET_FISCAL_YEARS_REQUEST,
  payload,
});
export const getFiscalYearsSuccess = (payload) => ({
  type: types.GET_FISCAL_YEARS_SUCCESS,
  payload,
});
export const getFiscalYearsFailure = (payload) => ({
  type: types.GET_FISCAL_YEARS_FAILURE,
  payload,
});

export const loadFiscalYears = () => async (dispatch) => {
  dispatch(getFiscalYearsRequest());
  try {
    const response = await fiscalYearsGet();
    dispatch(getFiscalYearsSuccess(response.data));
  } catch (err) {
    console.log(err.response);
    if (err.response) {
      dispatch(getFiscalYearsFailure(err.response.data));
    } else {
      dispatch(getFiscalYearsFailure(err.message));
    }
    throw err;
  }
};

export const setPrimaryValue = (payload) => ({
  type: types.SET_PRIMARY_VALUE,
  payload,
});

export const setAccountInput = (payload) => ({
  type: types.SET_ACCOUNT_INPUT,
  payload,
});

export const getLedgerListHeadersRequest = (payload) => ({
  type: types.GET_LEDGER_LIST_HEADERS_REQUEST,
  payload,
});
export const getLedgerListHeadersSuccess = (payload) => ({
  type: types.GET_LEDGER_LIST_HEADERS_SUCCESS,
  payload,
});
export const getLedgerListHeadersFailure = (payload) => ({
  type: types.GET_LEDGER_LIST_HEADERS_FAILURE,
  payload,
});

export const getLedgerHeaderList = () => async (dispatch) => {
  dispatch(getLedgerListHeadersRequest());
  try {
    const response = await ledgerListHeadersGet();
    dispatch(getLedgerListHeadersSuccess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(getLedgerListHeadersFailure(err.response.data));
    } else {
      dispatch(getLedgerListHeadersFailure(err.message));
    }
    throw err;
  }
};

export const loadAccountNamesRequest = (payload) => ({
  type: types.LOAD_ACCOUNT_NAMES_REQUEST,
  payload,
});
export const loadAccountNamesSuccess = (payload) => ({
  type: types.LOAD_ACCOUNT_NAMES_SUCCESS,
  payload,
});
export const loadAccountNamesFailure = (payload) => ({
  type: types.LOAD_ACCOUNT_NAMES_FAILURE,
  payload,
});

export const getAccountNames = (accountName = "") => async (dispatch) => {
  dispatch(loadAccountNamesRequest(accountName));
  try {
    const response = await ledgerViewAccountNamesGet(accountName);
    dispatch(loadAccountNamesSuccess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(loadAccountNamesFailure(err.response.data));
    } else {
      dispatch(loadAccountNamesFailure(err.message));
    }
    throw err;
  }
};

export const getLedgerListRequest = (payload) => ({
  type: types.GET_LEDGER_LIST_REQUEST,
  payload,
});
export const getLedgerListSuccess = (payload) => ({
  type: types.GET_LEDGER_LIST_SUCCESS,
  payload,
});
export const getLedgerListFailure = (payload) => ({
  type: types.GET_LEDGER_LIST_FAILURE,
  payload,
});

export const getAccountLedgerList = (pagination = {}) => async (
  dispatch,
  getState
) => {
  dispatch(getLedgerListRequest());
  try {
    const params = selectPrimary(getState());
    const flatQuery = flatten({ primary: params, pagination });
    const response = await ledgerViewGet(flatQuery);
    dispatch(getLedgerListSuccess(response.data));
    return response.data.title;
  } catch (err) {
    if (err.response) {
      dispatch(getLedgerListFailure(err.response.data));
    } else {
      dispatch(getLedgerListFailure(err.message));
    }
    throw err;
  }
};
