import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { selectIsAuth } from "../user/userSlice"
import { authorizedRoutes, publicRoutes, RouteNames } from "./index"

export function AppRouter() {
  const isAuth = useAppSelector(selectIsAuth)

  return isAuth ? (
    <Routes>
      {authorizedRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.CHAT} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  )
}
