import { createSlice } from "@reduxjs/toolkit";

interface IIsActive{isActive:boolean}
const initialState :IIsActive= {
  isActive: true,
} 
const loaderSlice = createSlice({
  name: "isActiveLoader",
  initialState,
  reducers: {
    activeLoader: (state)=>{
      state.isActive=true;
    },
    noActiveLoader: (state) => {
      state.isActive=false
    },
  },
});

export const { activeLoader,noActiveLoader } = loaderSlice.actions;
export const loaderReducer = loaderSlice.reducer;