import React from 'react'
import styled from "styled-components"

const DialogStyled = styled.div`
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
      <header></header>
      dialog
    </DialogStyled>
  )
}