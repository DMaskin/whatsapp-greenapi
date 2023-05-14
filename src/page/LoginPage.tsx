import React, { FormEvent, useState } from "react"
import styled from "styled-components"
import { useAppDispatch } from "../app/hooks"
import { login } from "../feature/user/userAPI"
import { useNavigate } from "react-router-dom"
import { RouteNames } from "../feature/router"
import { IUser } from "../model"
import { setAuth, setUser } from "../feature/user/userSlice"

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0de;

  form {
    width: 409px;
    height: 382px;
    background-color: white;
    box-shadow: 0 4px 33px rgba(0, 0, 0, 0.04);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
    color: #424242;

    p {
      margin: 0;
      font-weight: bold;
      font-size: 24px;
    }

    .textField {
      display: flex;
      flex-direction: column;

      label {
        font-weight: 300;
        font-size: 14px;
        margin: 0 0 7px 0;
      }

      input {
        width: 329px;
        height: 50px;
        background: #ffffff;
        border: 1px solid #c9cacc;
        border-radius: 4px;
        outline: none;
        padding: 0 0 0 16px;
      }

      input::placeholder {
        font-size: 16px;
      }

      input:focus {
        padding: 0 0 0 16px;
      }
    }

    button {
      width: 345px;
      height: 50px;
      background: linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
      border: none;
    }

    button:hover {
      cursor: pointer;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)),
      linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
    }

    button:active {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      linear-gradient(104.34deg, #41522e -15.34%, #be8022 145.95%);
      cursor: pointer;
    }

    span {
      font-size: 12px;
      color: red;
      margin: 7px 0 0 0;
    }
  }
`

export function LoginPage() {
  const [idInstance, setIdInstance] = useState("")
  const [apiTokenInstance, setApiTokenInstance] = useState("")
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    login({ idInstance, apiTokenInstance } as IUser).then(() => {
      dispatch(setAuth(true))
      dispatch(setUser({idInstance, apiTokenInstance}))
      navigate(RouteNames.CHAT)
    })
  }

  return (
    <LoginPageStyled>
      <form onSubmit={(e) => submitHandler(e)}>
        <p>Авторизация</p>
        <div className="textField">
          <label htmlFor="idInstance">ID Instance:</label>
          <input type="text"
                 name="idInstance"
                 value={idInstance}
                 onChange={(e) => setIdInstance(e.target.value)}
          />
        </div>
        <div className="textField">
          <label htmlFor="apiToken">API Token:</label>
          <input type="text"
                 name="apiToken"
                 value={apiTokenInstance}
                 onChange={(e) => setApiTokenInstance(e.target.value)}
          />
        </div>
        <button type="submit">
          Войти
        </button>
      </form>
    </LoginPageStyled>
  )
}
