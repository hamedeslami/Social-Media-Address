import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateType } from "./type";
import { addToSocial, getSocial } from "./action";

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
      });
  },
});

export default socialSlice.reducer;
