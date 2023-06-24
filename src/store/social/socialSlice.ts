import { createSlice } from "@reduxjs/toolkit";
import { addToSocial, deleteSocial, getSocial, updateSocial } from "./action";

const initialState = {
  list: "",
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
      })
      .addCase(deleteSocial.fulfilled, (state, action) => {
        alert(action.payload);
      });
  },
});

export default socialSlice.reducer;
