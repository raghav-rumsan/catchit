import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.types) {
      case types.DAILY_QUOTES_CREATE_REQUEST:
        draft.loading = true;
        break;
      case types.DAILY_QUOTES_CREATE_SUCCESS:
        draft.loading = false;
        break;
      case types.DAILY_QUOTES_CREATE_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
    }
  });

export default reducer;
