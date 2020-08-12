import * as types from "./types";
import { dailyQuotesCreate } from "../../../../api";

export const dailyQuotesCreateRequest = (payload) => ({
  type: types.DAILY_QUOTES_CREATE_REQUEST,
  payload,
});
export const dailyQuotesCreateSuccess = (payload) => ({
  type: types.DAILY_QUOTES_CREATE_SUCCESS,
  payload,
});
export const dailyQuotesCreateFailure = (payload) => ({
  type: types.DAILY_QUOTES_CREATE_FAILURE,
  payload,
});

export const createDailyQuotes = (payload) => async (dispatch) => {
  dispatch(dailyQuotesCreateRequest(payload));
  try {
    const response = await dailyQuotesCreate(payload);
    dispatch(dailyQuotesCreateSuccess(response.data));
    return response.data;
  } catch (err) {
    if (err.response) {
      dispatch(dailyQuotesCreateFailure(err.response.data));
    } else {
      dispatch(dailyQuotesCreateFailure(err.message));
    }
    throw err;
  }
};
