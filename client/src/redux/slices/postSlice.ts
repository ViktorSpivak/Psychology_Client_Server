import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IPage, IPost, IPostState, ValidationErrors } from "../../../../common/interfaces";
import { RootState } from "../rootReducer";
import * as api from "../../services/api";
import { ErrorHandler } from "../../services/errorHandler";
import { AxiosError } from "axios";

const initialState:IPostState = {
  postList: null,
  currentRequestId:null,
  isLoading: false,response:null,
  error:null,
} 

export const postThunk = createAsyncThunk<
  null|[IPost],
  IPage,
  {
    state: RootState;
  }
>(
  "post/reqStatus",
  async (page, { getState, requestId,rejectWithValue }): Promise<any> => {
    const { currentRequestId, isLoading } = getState().posts;
    if (isLoading !== true || requestId !== currentRequestId) {
      return;
    }try {
    const response = await api.postRequest(page);
    if( (typeof response)==='number'){
      throw new Error(ErrorHandler(response));
    }
    return response;} catch (err) {
      let error: AxiosError<ValidationErrors> = err 
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postThunk.pending,(state, action) => {
      if (state.isLoading === false) {
        state.isLoading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(postThunk.fulfilled,(state, action) => {
        const {requestId} = action.meta;
        if (state.isLoading === true && state.currentRequestId === requestId) {
          state.isLoading = false;
          state.postList = action.payload;
          state.currentRequestId = null;
        }
      });
    builder.addCase(postThunk.rejected, (state, action) => {
      const {requestId} = action.meta;
      if (state.isLoading === true && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.error = action.error;
        state.currentRequestId = null;
      }
    });
  },
});
export const postReducer = postSlice.reducer;
 