import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IResponse, IUserMessageState, ValidationErrors } from "../../../../common/interfaces";
import { RootState } from "../rootReducer";
import * as api from "../../services/api";
import { ErrorHandler } from "../../services/errorHandler";
import { AxiosError } from "axios";

const initialState:IUserMessageState = {
  userData : null,
  currentRequestId:null,
  isLoading: false,
  response:null,
  error:null,
} 

export const userMessageThunk = createAsyncThunk<
  IResponse,
  undefined,
  {
    state: RootState;
  }
>(
  "userMassage/reqStatus",
  async (message, { getState, requestId,rejectWithValue }): Promise<any> => {
    const {userData, currentRequestId, isLoading } = getState().userMessage;
    if (isLoading !== true || requestId !== currentRequestId) {
      return;
    } try {
    const response = await api.userMessageRequest(userData!);
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
  reducers: {
    setUserMassage : (state,action) => { state.userData =action.payload
    },
    resetUserMassage : state => { state.userData = null; state.currentRequestId=null; state.isLoading= false; state.error=null;
    }
  },
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
          state.response = action.payload;
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
export const {setUserMassage,resetUserMassage}=userMessageSlice.actions;
export const userMessageReducer = userMessageSlice.reducer;