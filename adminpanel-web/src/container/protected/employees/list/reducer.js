import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    empList: [],
    paginator: {},
  },
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.types) {
      case types.EMPLOYEES_LIST_GET_REQUEST:
        draft.loading = true;

        break;
      case types.EMPLOYEES_LIST_GET_SUCCESS:
        draft.loading = false;
        console.log("action", action);
        draft.data = action.payload;
        break;
      case types.EMPLOYEES_LIST_GET_FAILURE:
        draft.loading = false;
        draft.error = INITIAL_STATE.error;
        break;
    }
  });

export default reducer;
