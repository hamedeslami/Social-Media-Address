import api from "../config/api";
import { socialItemType } from "../store/social/socialSlice";

export const addSocialListApi = (data: object) => api.post("/socialList", data);

export const getSocialListApi = () => api.get("/socialList");

export const updateSocialListApi = (id: number | null, data: socialItemType) =>
  api.patch(`/socialList/${id}`, data);

export const deleteSocialListApi = (id: number | null | undefined) =>
  api.delete(`/socialList/${id}`);
