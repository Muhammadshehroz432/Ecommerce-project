import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    Addtobag: (state, action) => {
      state.push(action.payload);
    },

    RemovefromBag: (state, action) => {
      return (state = state.filter((itemId) => itemId !== action.payload));
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
