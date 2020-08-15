import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  data: {
    empList: [],
  },
  paginator: {
    limit: "10",
    page: "1",
    total: "",
  },
  query: {
    page: 1,
    limit: 10,
    search: {
      searchField: [] || "",
      searchValue: [] || "",
    },
    sort: { full_name: 1 },
  },
  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.SET_VALUE:
        draft[action.payload.key][action.payload.index] = action.payload.value;
        break;
      case types.EMPLOYEES_LIST_GET_REQUEST:
        draft.loading = true;

        break;
      case types.EMPLOYEES_LIST_GET_SUCCESS:
        draft.loading = false;
        draft.data.empList = action.payload.empList;
        draft.paginator = action.payload.paginator;
        break;
      case types.EMPLOYEES_LIST_GET_FAILURE:
        draft.loading = false;
        draft.error = INITIAL_STATE.error;
        break;
    }
  });

export default reducer;
