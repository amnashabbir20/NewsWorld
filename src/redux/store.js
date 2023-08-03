import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './NewsSlice'; 

export const store = configureStore({
  reducer: {
    data: newsReducer, 
    usNews: newsReducer,
    Apple:newsReducer,
  },
});


