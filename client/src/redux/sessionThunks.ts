import { RootState } from "./store";
import { ISignInData, ILoginResponseData } from "./../../../common/interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../services/api";

export const loginRequest = createAsyncThunk<
  ILoginResponseData,
  ISignInData,
  {
    state: RootState;
  }
>(
  "login/reqStatus",
  async (credentials, { getState, requestId }): Promise<any> => {
    const { currentRequestId, isLoading } = getState();
    // console.log(currentRequestId, isLoading);
    if (isLoading !== true || requestId !== currentRequestId) {
      return;
    }
    const response = await api.loginRequest(credentials);
    return response;
  }
);
export const signupRequest = createAsyncThunk<
  ILoginResponseData,
  ISignInData,
  {
    state: RootState;
  }
>("signup/reqStatus", async (credentials, { getState, requestId }) => {
  const { currentRequestId, isLoading } = getState();
  // console.log(currentRequestId, isLoading);
  if (isLoading !== true || requestId !== currentRequestId) {
    return;
  }
  const response = await api.signupRequest(credentials);
  return response;
});
