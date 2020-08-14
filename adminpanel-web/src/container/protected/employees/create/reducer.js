import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  error: {},
  data: {
    full_name: "",
    role: "",
    rank: "",
    date_joined: "",
    email: "",
  },
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_DATA_VALUE:
        draft.data[action.payload.key] = action.payload.value;
        break;
      case types.EMPLOYEES_CREATE_REQUEST:
        draft.loading = true;
        break;
      case types.EMPLOYEES_CREATE_SUCCESS:
        draft.loading = false;
        break;
      case types.EMPLOYEES_CREATE_FAILURE:
        draft.loading = false;
        draft.error = INITIAL_STATE.error;
        break;
    }
  });

export default reducer;
