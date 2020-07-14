import Toast from 'react-native-tiny-toast';
import {
  homeCashViewGet,
  homeRefreshCashViewPost,
  homeBankCashViewGet,
  homeRefreshBankCashViewPost,
  homeSalesViewGet,
  homeRefreshSalesViewPost,
} from '../../api';
import * as types from './types';

export const loadCashRequest = payload => ({
  type: types.LOAD_CASH_REQUEST,
  payload,
});
export const loadCashSuccess = payload => ({
  type: types.LOAD_CASH_SUCCESS,
  payload,
});
export const loadCashFailure = payload => ({
  type: types.LOAD_CASH_FAILURE,
  payload,
});

export const loadHomeCash = () => async dispatch => {
  dispatch(loadCashRequest());
  try {
    const response = await homeCashViewGet();
    dispatch(loadCashSuccess(response.data));
  } catch (err) {
    console.log(err.response);
    if (err.response) {
      dispatch(loadCashFailure(err.response.data));
    } else {
      dispatch(loadCashFailure(err.message));
    }
    throw err;
  }
};

export const refreshCashRequest = payload => ({
  type: types.REFRESH_CASH_REQUEST,
  payload,
});
export const refreshCashSuccess = payload => ({
  type: types.REFRESH_CASH_SUCCESS,
  payload,
});
export const refreshCashFailure = payload => ({
  type: types.REFRESH_CASH_FAILURE,
  payload,
});

export const refreshHomeCash = () => async dispatch => {
  dispatch(refreshCashRequest());
  try {
    const response = await homeRefreshCashViewPost();
    const toast = Toast.showSuccess(response.data.message);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });

    dispatch(refreshCashSuccess(response.data));
    return response.data;
  } catch (err) {
    let errorMessage = '';
    if (err.response) {
      errorMessage = err.response.data.message;
      // errorMessage = JSON.stringify(err.response.data.message);
      dispatch(refreshCashFailure(err.response.data));
    } else {
      errorMessage = err.message;
      dispatch(refreshCashFailure(err.message));
    }
    const toast = Toast.show(errorMessage, {
      position: 0,
      // textColor: '#f00',
    });
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });
    throw err;
  }
};

export const loadBankCashRequest = payload => ({
  type: types.LOAD_BANK_CASH_REQUEST,
  payload,
});
export const loadBankCashSuccess = payload => ({
  type: types.LOAD_BANK_CASH_SUCCESS,
  payload,
});
export const loadBankCashFailure = payload => ({
  type: types.LOAD_BANK_CASH_FAILURE,
  payload,
});

export const loadHomeBankCash = () => async dispatch => {
  dispatch(loadBankCashRequest());
  try {
    const response = await homeBankCashViewGet();
    dispatch(loadBankCashSuccess(response.data));
  } catch (err) {
    console.log(err.response);
    if (err.response) {
      dispatch(loadBankCashFailure(err.response.data));
    } else {
      dispatch(loadBankCashFailure(err.message));
    }
    throw err;
  }
};

export const refreshBankCashRequest = payload => ({
  type: types.REFRESH_BANK_CASH_REQUEST,
  payload,
});
export const refreshBankCashSuccess = payload => ({
  type: types.REFRESH_BANK_CASH_SUCCESS,
  payload,
});
export const refreshBankCashFailure = payload => ({
  type: types.REFRESH_BANK_CASH_FAILURE,
  payload,
});

export const refreshHomeBankCash = () => async dispatch => {
  dispatch(refreshBankCashRequest());
  try {
    const response = await homeRefreshBankCashViewPost();
    const toast = Toast.showSuccess(response.data.message);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });

    dispatch(refreshBankCashSuccess(response.data));
    return response.data;
  } catch (err) {
    let errorMessage = '';
    if (err.response) {
      errorMessage = err.response.data.message;
      // errorMessage = JSON.stringify(err.response.data.message);
      dispatch(refreshBankCashFailure(err.response.data));
    } else {
      errorMessage = err.message;
      dispatch(refreshBankCashFailure(err.message));
    }
    const toast = Toast.show(errorMessage, {
      position: 0,
      // textColor: '#f00',
    });
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });
    throw err;
  }
};

export const loadSalesRequest = payload => ({
  type: types.LOAD_SALES_REQUEST,
  payload,
});
export const loadSalesSuccess = payload => ({
  type: types.LOAD_SALES_SUCCESS,
  payload,
});
export const loadSalesFailure = payload => ({
  type: types.LOAD_SALES_FAILURE,
  payload,
});

export const loadHomeSales = () => async dispatch => {
  dispatch(loadSalesRequest());
  try {
    const response = await homeSalesViewGet();
    dispatch(loadSalesSuccess(response.data));
  } catch (err) {
    console.log(err.response);
    if (err.response) {
      dispatch(loadSalesFailure(err.response.data));
    } else {
      dispatch(loadSalesFailure(err.message));
    }
    throw err;
  }
};

export const refreshSalesRequest = payload => ({
  type: types.REFRESH_SALES_REQUEST,
  payload,
});
export const refreshSalesSuccess = payload => ({
  type: types.REFRESH_SALES_SUCCESS,
  payload,
});
export const refreshSalesFailure = payload => ({
  type: types.REFRESH_SALES_FAILURE,
  payload,
});

export const refreshHomeSales = () => async dispatch => {
  dispatch(refreshSalesRequest());
  try {
    const response = await homeRefreshSalesViewPost();
    const toast = Toast.showSuccess(response.data.message);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });

    dispatch(refreshSalesSuccess(response.data));
    return response.data;
  } catch (err) {
    let errorMessage = '';
    if (err.response) {
      errorMessage = err.response.data.message;
      // errorMessage = JSON.stringify(err.response.data.message);
      dispatch(refreshSalesFailure(err.response.data));
    } else {
      errorMessage = err.message;
      dispatch(refreshSalesFailure(err.message));
    }
    const toast = Toast.show(errorMessage, {
      position: 0,
      // textColor: '#f00',
    });
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
        Toast.hide(toast);
      }, 2000);
    });
    throw err;
  }
};
