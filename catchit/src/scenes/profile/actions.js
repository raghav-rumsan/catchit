import { dailyQuotesGet } from "../../api";
import * as types from "./types";

const getDailyQuotesRequest = (payload) => ({
  type: types.GET_DAILY_QUOTES_REQUEST,
  payload,
});

const getDailyQuotesSuccess = (payload) => ({
  type: types.GET_DAILY_QUOTES_SUCCESS,
  payload,
});

const getDailyQuotesFailure = (payload) => ({
  type: types.GET_DAILY_QUOTES_FAILURE,
  payload,
});

export const getDailyQuotes = () => async (dispatch) => {
  dispatch(getDailyQuotesRequest());
  try {
    const response = await dailyQuotesGet();
    dispatch(getDailyQuotesSuccess(response.data));
  } catch (err) {
    if (err.response) {
      dispatch(getDailyQuotesFailure(err.response.data));
    } else {
      dispatch(getDailyQuotesFailure(err.message));
    }
    throw err;
  }
};
