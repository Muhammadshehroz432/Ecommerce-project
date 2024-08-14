import { configureStore } from "@reduxjs/toolkit";
import Itemslice from "./Itemslice";
import FetchStatusslice from "./Fetchslice";
import bagSlice from "./bag";

const Myntrastore = configureStore({
  reducer: {
    item: Itemslice.reducer,
    fetchstatus: FetchStatusslice.reducer,
    bag: bagSlice.reducer,
  },
});

export default Myntrastore;
