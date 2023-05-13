import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { IUser } from "../../model"

export interface UserState {
  user: IUser
  isAuth: boolean
}

const initialState: UserState = {
  user: {} as IUser,
  isAuth: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
  },
})

export const selectIsAuth = (state: RootState) => state.user.isAuth
export const selectUser = (state: RootState) => state.user.user

export const { setAuth, setUser } = userSlice.actions

export default userSlice.reducer
