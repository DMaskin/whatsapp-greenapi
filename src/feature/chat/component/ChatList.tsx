import React from "react"
import styled from "styled-components"
// @ts-ignore
import noneAvatar from "../asset/none-avatar.png"

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
  
  .search {
    height: 49px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    input {
      width: 90%;
      height: 70%;
      color: var(--primary);
      user-select: none;
      outline: none;
      border: 0;
      border-radius: 8px;
      padding-left: 20px;
      background-color: #f0f2f5;
    }
  }

  .chatList {
    width: 100%;
    
    .chat {
      height: 72px;
      border-top: 1px solid #e9edef;
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding-left: 20px;
      
      .chat__avatar {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .chat__info {
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        
        .chat__info__lastMessage {
          color: var(--secondary);
          font-size: 15px;
        }
      }
    }
    
    .chat:hover {
      background-color: #f0f2f5
    }
  }
`

export function ChatList() {
  return (
    <ChatListStyled>
      <header>
      </header>
      <div className="search">
        <input type="text" placeholder={"Поиск или новый чат"}/>
      </div>
      <div className="chatList">
        <div className="chat">
          <div className="chat__avatar">
            <img src={noneAvatar} alt="" />
          </div>
          <div className="chat__info">
            <span>Иван Иванов</span>
            <span className="chat__info__lastMessage">Хорошо</span>
          </div>
        </div>
        <div className="chat">
          <div className="chat__avatar">
            <img src={noneAvatar} alt="" />
          </div>
          <div className="chat__info">
            <span>Иван Иванов</span>
            <span className="chat__info__lastMessage">Хорошо</span>
          </div>
        </div>
        <div className="chat">
          <div className="chat__avatar">
            <img src={noneAvatar} alt="" />
          </div>
          <div className="chat__info">
            <span>Иван Иванов</span>
            <span className="chat__info__lastMessage">Хорошо</span>
          </div>
        </div>
      </div>
    </ChatListStyled>
  )
}