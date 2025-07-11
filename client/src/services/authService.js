import { apiFetch } from "./api";

export const loginUser = (data) => apiFetch("/auth/login", "POST", data);
export const registerUser = (data) => apiFetch("/auth/register", "POST", data);
export const getProfile = (token) => apiFetch("/auth/me", "GET", null, token);
