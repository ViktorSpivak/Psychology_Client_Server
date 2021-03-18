import { createSlice } from "@reduxjs/toolkit";

type IIsActive={isActive:boolean}
const initialState :IIsActive= {
  isActive: true,
} 
const isActiveSendButtonSlice = createSlice({
  name: "isActiveSendButton",
  initialState,
  reducers: {
    activeSendButton: (state)=>{
      state.isActive=true;
    },
    noActiveSendButton: (state) => {
      state.isActive=false
    },
  },
});

export const { activeSendButton,noActiveSendButton } = isActiveSendButtonSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const isActive = (state: RootState) => state.isActiveSendButton.isActive;
export const isActiveSendButtonReducer = isActiveSendButtonSlice.reducer;