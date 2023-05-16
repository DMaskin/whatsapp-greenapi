import React from "react"
import styled from "styled-components"
import { Chat } from "../feature/chat/Chat"

const ChatPageStyled = styled.div`
  height: 100vh;
  background-color: var(--app-background);
  background-image: linear-gradient(180deg, var(--app-background), var(--app-background-deeper));
  z-index: 1;
  position: relative;

  .head {
    height: 13vh;
    background-color: #00a884;
  }
`

export function ChatPage() {
  return (
    <ChatPageStyled>
      <div className="head" />
      <Chat />
    </ChatPageStyled>
  )
}
