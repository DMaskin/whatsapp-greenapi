import React from "react"
import styled from "styled-components"
import { ChatList } from "./component/ChatList"
import { Dialog } from "./component/Dialog"

const ChatStyled = styled.div`
  background-color: #f0f2f5;
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: calc(100% - 38px);
  height: calc(100% - 38px);
  max-width: 1600px;
  box-shadow: 0 6px 18px rgba(11, 20, 26, 0.05);
  border-radius: 2px;
  display: flex;
`

export function Chat() {
  return (
    <ChatStyled>
      <ChatList />
      <Dialog />
    </ChatStyled>
  )
}
