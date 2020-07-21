import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  query: {},
  employees: [
    { _id: 1, full_name: "Rag", rank: "Eng" },
    { _id: 5, full_name: "hghg", rank: "77" },
  ],
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_EMPLOYEES_LIST_REQUEST:
        draft.loading = true;
        break;
      case types.GET_EMPLOYEES_LIST_SUCCESS:
        draft.employees = action.payload.employees;
        draft.loading = false;
        console.log("action.payload", action.payload);
        break;
      case types.GET_EMPLOYEES_LIST_FAILURE:
        draft.loading = false;
        draft.quotes = INITIAL_STATE.quotes;
        break;
    }
  });

export default reducer;
