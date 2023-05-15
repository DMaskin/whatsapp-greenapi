import React from 'react'
import styled from "styled-components"
import { selectCurrentChat } from "../chatSlice"
import { useAppSelector } from "../../../app/hooks"

const MessageListStyled = styled.div`
  background-color: #efeae2;
  border-left: 1px solid #d1d7db;
  height: calc(100% - (var(--h-pane-header) + var(--h-text-panel)));
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  
  .message {
    max-width: 65%;
    min-height: 30px;
    background-color: #d9fdd3;
    border-radius: 0 6px 6px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;
    padding: 2px 5px;
    flex-shrink: 0;
  }
`

export function MessageList() {
  const currenChat = useAppSelector(selectCurrentChat)

  return (
    <MessageListStyled>
      {currenChat.messages.map((message) =>
        <div className="message">{message}</div>
      )}
    </MessageListStyled>
  )
}