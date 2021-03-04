import { combineReducers } from "@reduxjs/toolkit";
import NamesReducer from "./NamesSlice";

export default combineReducers({
  names: NamesReducer,
});
