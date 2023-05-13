import React from "react"
import { ChatPage } from "../../page/ChatPage"
import { LoginPage } from "../../page/LoginPage"

export interface IRoute {
  path: string
  component: () => React.ReactElement
}

export enum RouteNames {
  CHAT = "/chat",
  LOGIN = "/login",
}

export const authorizedRoutes: IRoute[] = [{ path: RouteNames.CHAT, component: ChatPage }]
export const publicRoutes: IRoute[] = [{ path: RouteNames.LOGIN, component: LoginPage }]
