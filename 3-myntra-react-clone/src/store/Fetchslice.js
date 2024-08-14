import { createSlice } from "@reduxjs/toolkit";

const FetchStatusslice = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchDone: false,
    CurrentlyFetching: false,
  },
  reducers: {
    Markfetchdone: (state) => {
      state.fetchDone = true;
    },

    fetchingStarted: (state) => {
      state.CurrentlyFetching = true;
    },
    fetchingEnded: (state) => {
      state.CurrentlyFetching = false;
    },
  },
});

export const fetchAction = FetchStatusslice.actions;
export default FetchStatusslice;
