import { createSlice } from "@reduxjs/toolkit";

type IIsActive={isActive:boolean}
const initialState :IIsActive= {
  isActive: false,
} 
const modalWindowSlice = createSlice({
  name: "isActiveSendButton",
  initialState,
  reducers: {
    activeModalWindow: (state)=>{
      state.isActive=true;
    },
    noActiveModalWindow: (state) => {
      state.isActive=false
    },
  },
});

export const { activeModalWindow,noActiveModalWindow } = modalWindowSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const isActive = (state: RootState) => state.isActiveSendButton.isActive;
export const modalWindowReducer = modalWindowSlice.reducer;