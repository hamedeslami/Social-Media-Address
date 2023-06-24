import { combineReducers } from "redux";
import socialSlice, { socialSliceType } from "./social/socialSlice";
import themeSlice, { themeSliceType } from "./theme/themeSlice";

export const rootReducer = combineReducers({
  social: socialSlice,
  theme: themeSlice,
});

export type rootReducerType = {
  social: socialSliceType,
  theme: themeSliceType
}