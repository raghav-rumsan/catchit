import axios from "axios";
import Qs from "query-string";

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "" //server-live
    : "http://192.168.0.106:5000"; //server-local

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: (params) => {
    return Qs.stringify(params);
    // return Qs.stringify(params, { arrayFormat: "indices" });
  },
});

// api

export const loginPost = (data) => api.post("api/login", data);

export const logoutGet = () => api.get("api/logout");
export const registerPost = (data) => api.post("api/register", data);

export const forgotPasswordPost = (data) =>
  api.post("api/v1/app/forgot-password", data);
export const changePasswordPost = (data) =>
  api.post("api/v1/app/change-password", data);

// ///////// User related API ////////////////
export const userDetailGet = () => api.get(`api/current_user`);

// Profile Related API

export const dailyQuotesGet = () => api.get(`api/v1/get-daily-quotes`);

export const dailyQuotesCreate = (data) =>
  api.post(`api/v1/quotes-create`, data);

// Superadmin API
export const employeesListGet = (query) => {
  return api.get(`api/v1/employees-list?${query}`, query);
};
