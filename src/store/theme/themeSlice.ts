import { createSlice } from "@reduxjs/toolkit";

export type themeSliceType = {
  mode: 'dark' | 'light'
}

const initialState = {
  mode: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
