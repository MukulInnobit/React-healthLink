import { createSlice } from "@reduxjs/toolkit";
import {
  fulfilledState,
  rejectedState,
  pendingState,
  resetState,
} from "../../utility/stateUtility";
import AppState  from "../states/app/appState";
import { RootState } from "../store/rootReducer";

const initialState: AppState = {
  selectedSideBarItem : ["Dashboard"],
  formState: resetState(),
};
export const AppSlice = createSlice({
    name: "App",
    initialState: initialState,
    reducers: {
      clearState: (state) => {
        state.formState = resetState();
        state.selectedSideBarItem = ["Dashboard"];
        return state;
      },
      setSideBarItem: (state, {payload}) => {
          state.selectedSideBarItem = [payload];
          return state;
      },
    },
  });
  
  export const { clearState, setSideBarItem } = AppSlice.actions;
  export const SideBarStateSelector = (state: RootState) => state.App;
  export default AppSlice.reducer;