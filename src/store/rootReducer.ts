import {combineReducers} from "redux";
import socialSlice from "./social/socialSlice";
import themeSlice from "./theme/themeSlice";

export const rootReducer = combineReducers({
    social: socialSlice,
    theme: themeSlice,
});