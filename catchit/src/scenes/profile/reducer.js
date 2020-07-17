import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  quotes: "",
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_DAILY_QUOTES_SUCCESS:
        draft.quotes = action.payload.title;
        break;
      case types.GET_DAILY_QUOTES_FAILURE:
        draft.loading = false;
        draft.quotes = INITIAL_STATE.quotes;
        break;
    }
  });

export default reducer;
