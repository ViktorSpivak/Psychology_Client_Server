import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IDiplomaState, IPage, ValidationErrors } from "../../../../common/interfaces";
import { RootState } from "../rootReducer";
import * as api from "../../services/api";
import { AxiosError } from "axios";
import { ErrorHandler } from "../../services/errorHandler";

const initialState:IDiplomaState = {
  diplomaList:[],
  currentRequestId:null,
  isLoading: false,
  error:null,
} 

export const diplomaThunk = createAsyncThunk<
  [],
  IPage,
  {
    state: RootState;
    rejectValue: ValidationErrors
  }
>(
  "diploma/reqStatus",
  async (page, { getState, requestId ,rejectWithValue}): Promise<any> => {
    const { currentRequestId, isLoading } = getState().diplomas;
    if (isLoading !== true || requestId !== currentRequestId) {
      return;
    }
    try {
    const response = await api.diplomaRequest(page);
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

const diplomaSlice = createSlice({
  name: "diploma",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(diplomaThunk.pending, (state, action) => {
      if (state.isLoading === false) {
        state.isLoading = true;
        state.currentRequestId = action.meta.requestId;
      }
    });
    builder.addCase(diplomaThunk.fulfilled, (state, action) => {
      const {
        requestId
      } = action.meta;
      if (state.isLoading === true && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.diplomaList = action.payload;
        state.currentRequestId = null;
      }
    });
    builder.addCase(diplomaThunk.rejected, (state, action) => {
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
export const diplomaReducer = diplomaSlice.reducer;