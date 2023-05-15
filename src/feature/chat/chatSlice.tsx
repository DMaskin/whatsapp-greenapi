import { createSlice } from "@reduxjs/toolkit"
import { IChat } from "../../model"
import { RootState } from "../../app/store"

export interface ChatState {
  chats: IChat[],
}

const initialState: ChatState = {
  chats: [] as IChat[]
}

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {}
})

export const selectChats = (state: RootState) => state.chat.chats

export default chatSlice.reducer