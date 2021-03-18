import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserData, IUserMessage, IUserMessageState, ValidationErrors } from "../../../../common/interfaces";
import { RootState } from "../rootReducer";
import * as api from "../../services/api";
import { ErrorHandler } from "../../services/errorHandler";
import { AxiosError } from "axios";

const initialState:IUserMessageState = {
  userData : null,
  currentRequestId:null,
  isLoading: false,
  error:null,
} 

export const userMessageThunk = createAsyncThunk<
  IUserData,
  IUserMessage,
  {
    state: RootState;
  }
>(
  "userMassage/reqStatus",
  async (message, { getState, requestId,rejectWithValue }): Promise<any> => {
    const { currentRequestId, isLoading } = getState().userMessage;
    if (isLoading !== true || requestId !== currentRequestId) {
      return;
    } try {
    const response = await api.userMessageRequest(message);
    if((typeof response)==='number'){
      throw new Error(ErrorHandler(response));
    }
    return response;} 
    catch (err) {
      let error: AxiosError<ValidationErrors> = err 
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
);

const userMessageSlice = createSlice({
  name: "userMassage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userMessageThunk.pending,(state, action) => {
      if (state.isLoading === false) {
        state.isLoading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(userMessageThunk.fulfilled,(state, action) => {
        const {requestId} = action.meta;
        if (state.isLoading === true && state.currentRequestId === requestId) {
          state.isLoading = false;
          state.userData = action.payload;
          state.currentRequestId = null;
        }
      });
    builder.addCase(userMessageThunk.rejected, (state, action) => {
      const {requestId} = action.meta;
      if (state.isLoading === true && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.error = action.error;
        state.currentRequestId = null;
      }
    });
  },
});
export const userMessageReducer = userMessageSlice.reducer;