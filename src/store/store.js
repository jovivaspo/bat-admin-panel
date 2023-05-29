import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/authSlice'
import { userSlice } from './users/usersSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: userSlice.reducer
  }
})
