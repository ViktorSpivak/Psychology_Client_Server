import { RootState } from "./rootReducer";

export const selectFeedback=(state: RootState) => state.feedbacks
export const selectDiploma=(state: RootState) => state.diplomas
export const selectUserMessage=(state:RootState) => state.userMessage
export const selectIsActiveSendButton=(state:RootState) => state.isActiveSendButton.isActive
export const selectIsActiveModalWindow=(state:RootState) => state.isActiveModalWindow.isActive
export const selectIsActiveLoader=(state:RootState) => state.isActiveLoader.isActive