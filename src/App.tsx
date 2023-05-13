import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./feature/router/AppRouter"
import { checkAuth } from "./feature/user/userAPI"
import { setAuth, setUser } from "./feature/user/userSlice"
import { useAppDispatch } from "./app/hooks"
import { IUser } from "./model"

function App() {
  const dispatch = useAppDispatch()

  // eslint-disable-next-line
  useEffect(() => {
    const { isAuth, email } = checkAuth()
    dispatch(setAuth(isAuth))
    dispatch(setUser({ email, password: "" } as IUser))
  }, [])

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
