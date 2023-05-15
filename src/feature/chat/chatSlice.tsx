import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IChat } from "../../model"
import { RootState } from "../../app/store"

export interface ChatState {
  chats: IChat[],
  currentChat: IChat
}

const initialState: ChatState = {
  chats: [] as IChat[],
  currentChat: {chatId: "", messages: [] as string[]} as IChat
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<IChat>) => {
      state.chats = [...state.chats, action.payload]
    },
    setCurrentChat: (state, action: PayloadAction<string>) => {
      const newCurrentChat = state.chats.find((chat) => chat.chatId === action.payload)
      state.currentChat = newCurrentChat!
    }
  }
})

export const selectChats = (state: RootState) => state.chat.chats
export const selectCurrentChat = (state: RootState) => state.chat.currentChat

export const {addChat, setCurrentChat} = chatSlice.actions

export default chatSlice.reducer