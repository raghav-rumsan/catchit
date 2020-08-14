import * as types from "./types";
import { employeesListGet } from "../../../../api";

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

export const getEmployeesList = (query) => async (dispatch) => {
  dispatch(getEmployeesListRequest(query));
  try {
    const response = await employeesListGet(query);
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
