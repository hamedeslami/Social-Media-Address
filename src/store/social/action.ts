import { createAsyncThunk } from "@reduxjs/toolkit";
import { addSocialListApi } from "../../services/socialList";

export const addToSocial = createAsyncThunk("social/add", async (data : object) => {
    const response = await addSocialListApi(data);
    return response;
});