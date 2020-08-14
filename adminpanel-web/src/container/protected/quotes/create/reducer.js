import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.DAILY_QUOTES_CREATE_REQUEST:
        draft.loading = true;
        break;
      case types.DAILY_QUOTES_CREATE_SUCCESS:
        draft.loading = false;
        break;
      case types.DAILY_QUOTES_CREATE_FAILURE:
        draft.loading = false;
        draft.error = INITIAL_STATE.error;
        break;
    }
  });

export default reducer;
