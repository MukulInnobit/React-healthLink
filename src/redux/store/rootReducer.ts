import { combineReducers } from "@reduxjs/toolkit";
import sideBarReducer from "../reducers/sideBarReducer";

const appReducer = combineReducers({
      App: sideBarReducer
});

export type RootState = ReturnType<typeof appReducer>;
export default appReducer;