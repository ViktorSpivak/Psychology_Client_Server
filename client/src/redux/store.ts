import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { rootReducer, RootState } from './rootReducer';

export const store = configureStore({
  reducer:rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// type RootState = ReturnType<typeof rootReducer>

// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;