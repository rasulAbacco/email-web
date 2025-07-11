import { apiFetch } from "./api";

export const getCampaigns = (token) => apiFetch("/campaigns", "GET", null, token);
export const createCampaign = (data, token) => apiFetch("/campaigns", "POST", data, token);
export const updateCampaign = (id, data, token) => apiFetch(`/campaigns/${id}`, "PUT", data, token);
export const deleteCampaign = (id, token) => apiFetch(`/campaigns/${id}`, "DELETE", null, token);
