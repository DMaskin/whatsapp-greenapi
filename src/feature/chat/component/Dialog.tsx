import React from 'react'
import styled from "styled-components"
import { Input } from "./Input"
import { MessageList } from "./MessageList"

const DialogStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  header {
    width: 100%;
    height: var(--h-pane-header);
    background-color: var(--panel-header-background);
    border-left: 1px solid #d1d7db;
  }
`

export function Dialog() {
  return (
    <DialogStyled>
      <header/>
      <MessageList/>
      <Input/>
    </DialogStyled>
  )
}