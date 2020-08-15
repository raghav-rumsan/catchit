import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  loading: false,
  employeeDetails: {
    full_name: "",
    password: "$2b$10$UgIKZYhf8xKrGWWcdnvCVuCDBJs5drCiO1X4565Pc1otcVW1Xu27q",
    email: "",
    rank: "",
    date_joined: "",
    role: "",
  },

  error: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.EMPLOYEE_DETAILS_GET_REQUEST:
        draft.loading = true;

        break;
      case types.EMPLOYEE_DETAILS_GET_SUCCESS:
        draft.loading = false;
        console.log("action", action);
        draft.employeeDetails = action.payload.employeeDetails;
        break;
      case types.EMPLOYEE_DETAILS_GET_FAILURE:
        draft.loading = false;
        draft.error = INITIAL_STATE.error;
        break;
    }
  });

export default reducer;
