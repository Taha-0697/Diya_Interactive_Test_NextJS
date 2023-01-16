import { configureStore } from "@reduxjs/toolkit";
import JobReducer from './slices/JobSlice';

const store= configureStore({
   reducer: { 
       jobdetails:JobReducer,
   }
})

export default store;