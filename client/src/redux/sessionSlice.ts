import { createSlice } from "@reduxjs/toolkit";
import * as thunks from "./sessionThunks";
import * as reducerOps from "./sessionReducerOps";

interface IState {
  user: string | null;
  token: string | null;
  error: string | null;
  authenticated: boolean;
  isLoading: boolean;
  currentRequestId: string | undefined;
}
const initialState: IState = {
  user: null,
  token: null,
  error: null,
  authenticated: false,
  isLoading: false,
  currentRequestId: undefined,
};
const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    // loginRequest: (state, action) => {
    //   state.user = action.payload.name;
    // },
    // loginSuccess: (state, action) => {
    //   state.authenticated = true;
    //   state.token = action.payload.response.token;
    // },
    // logout: (state) => {
    //   state.user = null;
    //   state.token = null;
    //   state.authenticated = false;
    // },
    // loginError: (state, action) => {
    //   state.error = action.payload.response.error;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(thunks.loginRequest.pending, reducerOps.pending);
    // [thunks.loginRequest.pending]: reducerOps.pending,
    // [thunks.signupRequest.pending]: reducerOps.pending,
    // [thunks.loginRequest.fulfilled]: reducerOps.loginFulfilled,
    // [thunks.signupRequest.fulfilled]: reducerOps.signupFulfilled,
    // [thunks.loginRequest.rejected]: reducerOps.rejected,
    // [thunks.signupRequest.rejected]: reducerOps.rejected,
  },
});
export const rootReducer = sessionSlice.reducer;
// export const actions = sessionSlice.actions;
