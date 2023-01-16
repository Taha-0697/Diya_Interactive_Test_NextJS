import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import JobServices from '../services/JobServices';
import { useRouter } from 'next/router'


export const AllJObs = createAsyncThunk(
  "jobs/AllJObs",
  async () => {
    try {
        const res = await JobServices.getAllJobs();
        return res.data;
    } catch (error) {
        console.log(error)
    }
  }
);

export const getJobDetails = createAsyncThunk(
  "jobs/getJobDetails",
  async () => {
    try {
      const res = await JobServices.getAllJobs();
      const userId = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)
      const data = res.data?.data.filter((a)=> a.id == userId)
        return data
    } catch (error) {
        console.log(error)
    }
  }
);

const initialState={
    loading:true,
    userdata:{},
    error: null,
};


const JobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers:{},
    extraReducers:{
      
        [AllJObs.fulfilled]: (state, action) => {
            state.userdata =action.payload;
            state.loading = false
        },

          [getJobDetails.fulfilled]: (state, action) => {
            state.userdata =action.payload;
            state.loading = false
        },

    }
})

export default JobSlice.reducer;