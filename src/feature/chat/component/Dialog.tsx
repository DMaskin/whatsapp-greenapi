import React from 'react'
import styled from "styled-components"
import { Input } from "./Input"
import { MessageList } from "./MessageList"
import { selectCurrentChat } from "../chatSlice"
import { useAppSelector } from "../../../app/hooks"

const DialogStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  header {
    width: 100%;
    height: var(--h-pane-header);
    background-color: var(--panel-header-background);
    border-left: 1px solid #d1d7db;
    
    .header__currentChat {
      display: flex;
      height: 100%;
      margin-left: 15px;
      color: darkblue;
      font-weight: bold;
      align-items: center;
      justify-content: start;
    }
  }
`

export function Dialog() {
  const currentChat = useAppSelector(selectCurrentChat)

  return (
    <DialogStyled>
      <header>
        <div className="header__currentChat">{currentChat.chatId}</div>
      </header>
      <MessageList/>
      <Input/>
    </DialogStyled>
  )
}