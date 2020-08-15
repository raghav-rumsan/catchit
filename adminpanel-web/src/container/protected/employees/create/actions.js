import * as types from "./types";
import { registerPost } from "../../../../api";
import { selectData } from "./selectors";

export const setDataValue = (payload) => ({
  type: types.SET_DATA_VALUE,
  payload,
});

export const employeesCreateRequest = (payload) => ({
  type: types.EMPLOYEES_CREATE_REQUEST,
  payload,
});
export const employeesCreateSuccess = (payload) => ({
  type: types.EMPLOYEES_CREATE_SUCCESS,
  payload,
});
export const employeesCreateFailure = (payload) => ({
  type: types.EMPLOYEES_CREATE_FAILURE,
  payload,
});

export const createEmployees = (payload) => async (dispatch, getState) => {
  dispatch(employeesCreateRequest(payload));
  try {
    const data = selectData(getState());
    const response = await registerPost(data);
    dispatch(employeesCreateSuccess(response.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(employeesCreateFailure(err.response.data));
    } else {
      dispatch(employeesCreateFailure(err.message));
    }
    throw err;
  }
};
