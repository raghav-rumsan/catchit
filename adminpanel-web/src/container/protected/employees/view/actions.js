import * as types from "./types";
import { getEmployeeDetails } from "../../../../api";

export const setValue = (payload) => ({
  type: types.SET_VALUE,
  payload,
});

export const employeeDetailsGetRequest = (payload) => ({
  type: types.EMPLOYEE_DETAILS_GET_REQUEST,
  payload,
});
export const employeeDetailsGetSuccess = (payload) => ({
  type: types.EMPLOYEE_DETAILS_GET_SUCCESS,
  payload,
});
export const employeeDetailsGetFailure = (payload) => ({
  type: types.EMPLOYEE_DETAILS_GET_FAILURE,
  payload,
});

export const employeeDetailsGet = (id) => async (dispatch) => {
  dispatch(employeeDetailsGetRequest(id));
  try {
    const response = await getEmployeeDetails(id);
    dispatch(employeeDetailsGetSuccess(response.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(employeeDetailsGetFailure(err.response.data));
    } else {
      dispatch(employeeDetailsGetFailure(err.message));
    }
    throw err;
  }
};
