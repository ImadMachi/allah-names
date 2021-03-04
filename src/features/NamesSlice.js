import { createSlice } from "@reduxjs/toolkit";
import Names from "./fixtures";

const NamesSlice = createSlice({
  name: "names",
  initialState: Names,
  reducers: {},
});

export const FindNameSelector = (state, id) => {
  return state.names.find((name) => name.id === id);
};

export const { action } = NamesSlice.actions;
export default NamesSlice.reducer;
