import { createSlice } from "@reduxjs/toolkit";

const Itemslice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const ItemAction = Itemslice.actions;

export default Itemslice;
