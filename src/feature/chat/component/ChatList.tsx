import React, { useState } from "react"
import styled from "styled-components"
// @ts-ignore
import noneAvatar from "../asset/none-avatar.png"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { addChat, selectChats, selectCurrentChat, setCurrentChat } from "../chatSlice"

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
      background-color: #f5f6f6
    }
    
    .chat__current {
      background-color: #f0f2f5;
    }
  }
`

export function ChatList() {
  const [username, setUsername] = useState("")
  const chats = useAppSelector(selectChats)
  const currentChat = useAppSelector(selectCurrentChat)
  const dispatch = useAppDispatch()

  function handleSearch() {
    dispatch(addChat({chatId: username, messages: [] as string[]}))
    setUsername("")
    // await ChatApi.findUser(username,
    //   (user) => setUser(user),
    //   (e) => errorNotify(e))
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    e.code === "Enter" && handleSearch()
  }

  function chatClickHandler(chatId: string) {
    dispatch(setCurrentChat(chatId))
  }

  return (
    <ChatListStyled>
      <header>
      </header>
      <div className="search">
        <input type="text"
               placeholder={"Поиск или новый чат"}
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               onKeyDown={handleKey}
        />
      </div>
      <div className="chatList">
        {chats.map((chat) =>
          <div key={chat.chatId} className={chat.chatId === currentChat.chatId ? "chat chat__current" : "chat"}
               onClick={() => chatClickHandler(chat.chatId)}>
            <div className="chat__avatar">
              <img src={noneAvatar} alt="" />
            </div>
            <div className="chat__info">
              <span>{chat.chatId}</span>
              <span className="chat__info__lastMessage">
                {chat.messages[chat.messages.length - 1]}
              </span>
            </div>
          </div>
        )}
      </div>
    </ChatListStyled>
  )
}