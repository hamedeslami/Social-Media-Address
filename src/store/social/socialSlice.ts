import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateType } from "./type";
import { addToSocial } from "./action";


const initialState: object[] = [];

const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addToSocial.fulfilled, (state, action) => {
        alert(action.payload.statusText);
    });
  },
});

export default socialSlice.reducer;
