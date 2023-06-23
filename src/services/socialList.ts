import api from '../config/api'

export const addSocialListApi = (data: any) => api.post("/socialList", data);
export const getSocialListApi = () => api.get("/socialList");
