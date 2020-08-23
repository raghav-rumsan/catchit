import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  quotes: "",
  clocked: true,
  datePicked: "",
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_VALUE:
        draft[action.payload.key] = action.payload.value;

        break;
      case types.GET_DAILY_QUOTES_REQUEST:
        draft.loading = true;
        break;
      case types.GET_DAILY_QUOTES_SUCCESS:
        draft.quotes = action.payload.title;
        draft.loading = false;
        break;
      case types.GET_DAILY_QUOTES_FAILURE:
        draft.loading = false;

        draft.quotes = INITIAL_STATE.quotes;
        break;
    }
  });

export default reducer;
