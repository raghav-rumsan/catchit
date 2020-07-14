import axios from "axios";
import Qs from "query-string";

// export const BASE_URL = 'https://vedanasoft-accounting-server.herokuapp.com/';
export const BASE_URL = "http://192.168.0.106:5000";
// export const BASE_URL = 'https://shielded-fortress-94239.herokuapp.com';
// export const BASE_URL = 'http://localhost:8000';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: (params) => {
    return Qs.stringify(params);
  },
});

export const loginPost = (data) => api.post("api/login", data);

export const logoutGet = () => api.get("user/logout");
export const registerPost = (data) => api.post("user/register", data);
export const forgotPasswordPost = (data) =>
  api.post("api/v1/app/forgot-password", data);
export const changePasswordPost = (data) =>
  api.post("api/v1/app/change-password", data);

// ///////// User related API ////////////////
export const clientDetailGet = () => api.get(`api/v1/client-info`);
export const userDetailGet = () => api.get(`api/v1/me`);

export const fiscalYearsGet = () => api.get(`api/v1/get-fiscal-year`);

export const ledgerListHeadersGet = () => api.get(`api/v1/ledger/list-primary`);

export const ledgerViewAccountNamesGet = (accountName) =>
  api.get(`api/v1/ledger/account-search?account_name=${accountName}`);

export const ledgerViewGet = (params = {}) =>
  api.get(`api/v1/ledger/get-ledger`, {
    params,
  });

export const homeCashViewGet = () => api.get(`api/v1/app/get-cash`);
export const homeRefreshCashViewPost = () =>
  api.post(`api/v1/app/current-cash`, {});
export const homeBankCashViewGet = () => api.get(`api/v1/app/get-bank`);
export const homeRefreshBankCashViewPost = () =>
  api.post(`api/v1/app/current-bank`, {});
export const homeSalesViewGet = () => api.get(`api/v1/app/get-sales`);
export const homeRefreshSalesViewPost = () =>
  api.post(`api/v1/app/current-sales`, {});

export const salesListViewGet = (params = {}) =>
  api.get(`api/v1/app/sales/list`, {
    params,
  });

export const warehousesGet = () => api.get(`api/v1/app/warehouse/list`);

export const itemsListGet = () => api.get(`api/v1/app/item/get-items`);
