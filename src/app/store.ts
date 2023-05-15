import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "../feature/user/userSlice"
import chatReducer from "../feature/chat/chatSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
