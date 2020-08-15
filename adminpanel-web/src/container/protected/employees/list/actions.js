import * as types from "./types";
import { employeesListGet } from "../../../../api";
import { flatten } from "../../../../utils/helpers";
import Qs from "query-string";
import { selectQuery } from "./selectors";

export const setValue = (payload) => ({
  type: types.SET_VALUE,
  payload,
});

export const getEmployeesListRequest = (payload) => ({
  type: types.EMPLOYEES_LIST_GET_REQUEST,
  payload,
});
export const getEmployeesListSuccess = (payload) => ({
  type: types.EMPLOYEES_LIST_GET_SUCCESS,
  payload,
});
export const getEmployeesListFailure = (payload) => ({
  type: types.EMPLOYEES_LIST_GET_FAILURE,
  payload,
});

export const getEmployeesList = () => async (dispatch, getState) => {
  const query = selectQuery(getState());
  const flattenedQuery = flatten(query);
  const stringQuery = Qs.stringify(flattenedQuery);
  dispatch(getEmployeesListRequest(stringQuery));
  try {
    const response = await employeesListGet(stringQuery);
    dispatch(getEmployeesListSuccess(response.data.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(getEmployeesListFailure(err.response.data));
    } else {
      dispatch(getEmployeesListFailure(err.message));
    }
    throw err;
  }
};
