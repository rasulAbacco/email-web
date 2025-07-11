import { apiFetch } from "./api";

export const uploadContacts = (data, token) => apiFetch("/contacts/upload", "POST", data, token);
export const getContacts = (token) => apiFetch("/contacts", "GET", null, token);
export const validateEmails = (token) => apiFetch("/contacts/validate", "POST", null, token);
