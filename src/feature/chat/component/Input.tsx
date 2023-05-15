import React from "react"
import styled from "styled-components"
// @ts-ignore
import sendButton from "../asset/sendButton.svg"

const InputStyled = styled.div`
  border-left: 1px solid var(--border-stronger);
  padding: 5px 16px;
  background-color: var(--rich-text-panel-background);
  min-height: var(--h-text-panel);
  display: flex;
  align-items: center;

  input {
    padding: 9px 12px;
    margin: 5px 8px;
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 8px;
    outline: none;

    box-sizing: border-box;
    flex: 1 1 auto;
    width: inherit;
    min-width: 0;
    min-height: 20px;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    will-change: width;
    display: flex;
  }
  
  img {
    cursor: pointer;
  }
`

export function Input() {
  return (
    <InputStyled>
      <input type="text" placeholder="Введите сообщение"/>
      <img height={24} width={24} src={sendButton} alt="" />
    </InputStyled>
  )
}