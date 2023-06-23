import {combineReducers} from "redux";
import socialSlice from "./social/socialSlice";

export const rootReducer = combineReducers({
    social: socialSlice,
});