import api from '../config/api'

export const addSocialListApi = (data: object) => api.post("/socialList", data);

export const getSocialListApi = () => api.get("/socialList");

export const updateSocialListApi = (data: any) => api.patch(`/socialList/${data.id}`, data.data);
