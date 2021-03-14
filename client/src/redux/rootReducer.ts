import { combineReducers } from '@reduxjs/toolkit'
import { diplomaReducer } from './slices/diplomaSlice'
import { feedbackReducer } from './slices/feedbackSlice'
import { postReducer } from './slices/postSlice'
import { userMessageReducer } from './slices/userMessageSlice'

export const rootReducer = combineReducers({ 
  posts: postReducer,
  diplomas: diplomaReducer,
  feedbacks: feedbackReducer,
  userMessage:userMessageReducer,
  })
export type RootState = ReturnType<typeof rootReducer>