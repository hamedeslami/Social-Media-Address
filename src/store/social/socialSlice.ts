import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateType } from "./type";
import { addToSocial, getSocial, updateSocial } from "./action";

const initialState = {
  list: ""
};

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToSocial.fulfilled, (state, action) => {
        alert(action.payload);
      })
      .addCase(getSocial.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(updateSocial.fulfilled, (state, action) => {
        alert(action.payload);
      });
  },
});

export default socialSlice.reducer;
