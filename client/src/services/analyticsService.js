import { apiFetch } from "./api";

export const getAnalyticsOverview = (token) => apiFetch("/analytics/overview", "GET", null, token);
export const getClickStats = (token) => apiFetch("/analytics/clicks", "GET", null, token);
export const getOpenRates = (token) => apiFetch("/analytics/open-rates", "GET", null, token);
