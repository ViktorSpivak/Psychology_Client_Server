import { combineReducers } from '@reduxjs/toolkit'
import { diplomaReducer } from './slices/diplomaSlice'
import { feedbackReducer } from './slices/feedbackSlice'
import { postReducer } from './slices/postSlice'
import { userMessageReducer } from './slices/userMessageSlice'
import {sendButtonReducer} from './slices/sendButtonSlice'
import { modalWindowReducer } from './slices/modalWindowSlice'
import { loaderReducer } from './slices/loaderSlice'

export const rootReducer = combineReducers({ 
  posts: postReducer,
  diplomas: diplomaReducer,
  feedbacks: feedbackReducer,
  userMessage:userMessageReducer,
  isActiveSendButton:sendButtonReducer,
  isActiveModalWindow:modalWindowReducer,
  isActiveLoader:loaderReducer,
  })
export type RootState = ReturnType<typeof rootReducer>