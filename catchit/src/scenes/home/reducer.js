import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  sales: {},
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.LOAD_SALES_SUCCESS:
        draft.sales = action.payload;
        break;
    }
  });

export default reducer;
