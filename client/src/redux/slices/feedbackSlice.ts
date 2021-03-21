import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IFeedback, IFeedbackState, IPage, ValidationErrors } from "../../../../common/interfaces";
import { RootState } from "../rootReducer";
import * as api from "../../services/api";
import { AxiosError } from "axios";
import { ErrorHandler } from "../../services/errorHandler";

const initialFState:IFeedbackState = {
  feedbackList:null,
  currentRequestId:null,
  isLoading: false,response:null,
  error:null,
} 

export const feedbackThunk = createAsyncThunk<
  null|[IFeedback],
  IPage,
  {
    state: RootState;
    rejectValue: ValidationErrors
  }
>(
  "feedback/reqStatus",
  async (page, { getState, requestId ,rejectWithValue}): Promise<any> => {
    const { currentRequestId, isLoading } = getState().feedbacks;
    if (isLoading !== true || requestId !== currentRequestId) {
      return;
    }
    try {
    const response = await api.feedbackRequest(page);
    if( (typeof response)==='number'){
      throw new Error(ErrorHandler(response));
    }
    return response;
  } catch (err) {
    let error: AxiosError<ValidationErrors> = err 
    if (!error.response) {
      throw err
    }
    return rejectWithValue(error.response.data)
  }
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState : initialFState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(feedbackThunk.pending, (state, action) => {
      if (state.isLoading === false) {
        state.isLoading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(feedbackThunk.fulfilled, (state, action) => {
      const {
        requestId
      } = action.meta;
      if (state.isLoading === true && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.feedbackList = action.payload ;
        state.currentRequestId = null;
      }
    });
    builder.addCase(feedbackThunk.rejected, (state, action) => {
      const {
        requestId
      } = action.meta;
      if (state.isLoading === true && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.error = action.error;
        state.currentRequestId = null;
      }
    });
  },
});
export const feedbackReducer = feedbackSlice.reducer;