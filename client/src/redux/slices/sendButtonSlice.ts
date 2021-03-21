import { createSlice } from "@reduxjs/toolkit";

type IIsActive={isActive:boolean}
const initialState :IIsActive= {
  isActive: true,
} 
const sendButtonSlice = createSlice({
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

export const { activeSendButton,noActiveSendButton } = sendButtonSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const isActive = (state: RootState) => state.isActiveSendButton.isActive;
export const sendButtonReducer = sendButtonSlice.reducer;