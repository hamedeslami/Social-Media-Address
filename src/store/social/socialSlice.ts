import { createSlice } from "@reduxjs/toolkit";
import { addToSocial, deleteSocial, getSocial, updateSocial } from "./action";

export type socialItemType = {
  socialId: string;
  socialLink: string;
  socialType: string;
  id: number | null;
}

export type socialSliceType = {
  list: socialItemType[];
}

const initialState: socialSliceType = {
  list: [],
};

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToSocial.fulfilled, (_, action) => {
        alert(action.payload);
      })
      .addCase(getSocial.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(updateSocial.fulfilled, (_, action) => {
        alert(action.payload);
      })
      .addCase(deleteSocial.fulfilled, (_, action) => {
        alert(action.payload);
      });
  },
});

export default socialSlice.reducer;
