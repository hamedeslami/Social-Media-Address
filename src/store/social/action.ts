import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addSocialListApi,
  deleteSocialListApi,
  getSocialListApi,
  updateSocialListApi,
} from "../../apis/socialList";
import { socialItemType } from "./socialSlice";

export const addToSocial = createAsyncThunk(
  "social/add",
  async (data: object) => {
    const response = await addSocialListApi(data);
    return response?.statusText;
  }
);

export const getSocial = createAsyncThunk("social/get", async () => {
  const response = await getSocialListApi();
  return response?.data;
});

export const updateSocial = createAsyncThunk(
  "social/update",
  async (data: { id: number | null, item: socialItemType }) => {
    const {id, item} = data
    const response = await updateSocialListApi(id, item);
    return response?.statusText;
  }
);

export const deleteSocial = createAsyncThunk(
  "social/delete",
  async (id: number | null | undefined) => {
    const response = await deleteSocialListApi(id);
    return response?.statusText;
  }
);
