import { employeesListGet } from "../../../../api";
import * as types from "./types";
import flatten from "../../../../utils/helpers";
import { selectQuery } from "./selectors";

const getEmployeesListRequest = (payload) => ({
  type: types.GET_EMPLOYEES_LIST_REQUEST,
  payload,
});

const getEmployeesListSuccess = (payload) => ({
  type: types.GET_EMPLOYEES_LIST_SUCCESS,
  payload,
});

const getEmployeesListFailure = (payload) => ({
  type: types.GET_EMPLOYEES_LIST_FAILURE,
  payload,
});

export const getEmployeesList = () => async (dispatch, getState) => {
  dispatch(getEmployeesListRequest());
  try {
    const params = selectQuery(getState());
    const flatQuery = flatten({ query: params });
    console.log("flatQuery", flatQuery);
    const response = await employeesListGet(flatQuery);
    console.log("response", response);
    dispatch(getEmployeesListSuccess(response.data));
  } catch (err) {
    console.log("err", err);
    if (err.response) {
      dispatch(getEmployeesListFailure(err.response.data));
    } else {
      dispatch(getEmployeesListFailure(err.message));
    }
    throw err;
  }
};
