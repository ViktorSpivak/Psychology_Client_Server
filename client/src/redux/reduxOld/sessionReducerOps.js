export const pending = (state, action) => {
  if (state.isLoading === false) {
    state.isLoading = true;
    state.currentRequestId = action.meta.requestId;
  }
};
export const rejected = (state, action) => {
  const {
    requestId
  } = action.meta;
  if (state.isLoading === true && state.currentRequestId === requestId) {
    state.isLoading = false;
    state.error = action.error;
    state.currentRequestId = undefined;
  }
};
export const loginFulfilled = (state, action) => {
  const {
    requestId
  } = action.meta;
  if (state.isLoading === true && state.currentRequestId === requestId) {
    state.isLoading = false;
    state.authenticated = true;
    state.user = action.payload;
    state.token = action.payload.name;
    state.currentRequestId = null;
  }
};
export const signupFulfilled = (state, action) => {
  const {
    requestId
  } = action.meta;
  if (state.isLoading === true && state.currentRequestId === requestId) {
    state.isLoading = false;
    state.authenticated = true;
    state.user = action.payload;
    state.token = action.payload.token;
    state.currentRequestId = null;
  }
};