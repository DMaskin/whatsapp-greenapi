import React from 'react'
import styled from "styled-components"

const ChatListStyled = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  height: 100%;
  background-color: #fff;
  
  header {
    width: 100%;
    height: var(--h-pane-header);
    background-color: var(--panel-header-background);
  }
`

export function ChatList() {
  return (
    <ChatListStyled>
      <header>
      </header>
      chatlist
    </ChatListStyled>
  )
}