import produce from 'immer';
import * as types from './types';

export const INITIAL_STATE = {
  loading: false,
  account_names: [],
  fiscal_year: [],
  normalized_fiscal_year: {},
  normalized_account_names: {},
  table: {
    opening: {
      summary: {
        header: [],
        data: [],
      },
      data: {
        header: [],
        data: [],
      },
    },
    closing: {
      summary: {header: [], data: []},
      data: {header: [], data: []},
    },
    data: {
      header: [],
      data: [],
    },
    pagination_properties: {
      total_pages: 0,
      next_page: null,
      prev_page: null,
      page_number: 1,
      no_of_items: 20,
    },
  },
  data: {},
  primary: {},
  accountInput: '',
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_ACCOUNT_INPUT:
        draft.accountInput = action.payload;
        break;
      case types.SET_PRIMARY_VALUE:
        draft.primary[action.payload.key] = action.payload.value;
        break;
      case types.GET_LEDGER_LIST_REQUEST:
        draft.loading = true;
        break;
      case types.GET_LEDGER_LIST_FAILURE:
        draft.loading = false;
        break;
      case types.GET_LEDGER_LIST_SUCCESS:
        draft.loading = false;
        draft.table = action.payload;
        break;
      case types.GET_FISCAL_YEARS_SUCCESS:
        draft.fiscal_year = action.payload;
        draft.normalized_fiscal_year = action.payload.reduce((acc, curr) => {
          if (curr.is_default) {
            draft.primary.fiscal_year_id = curr.id;
            draft.primary.start_date = curr.start_date;
            draft.primary.end_date = curr.end_date;
          }
          return {...acc, [curr.id]: curr};
        }, {});
        break;
      case types.LOAD_ACCOUNT_NAMES_SUCCESS:
        draft.account_names = action.payload;
        draft.normalized_account_names = {
          ...state.normalized_account_names,
          ...(action.payload.reduce(
            (acc, curr) => ({...acc, [curr.account_id]: curr}),
            {},
          ) || {}),
        };
        break;
      case types.GET_LEDGER_LIST_HEADERS_FAILURE:
        break;
    }
  });

export default reducer;
