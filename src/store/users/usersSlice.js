
import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: []
  },
  reducers: {
    onUpdateUsers: (state, { payload }) => {
      state.items = payload
    }
  }
})

export const { onUpdateUsers } = userSlice.actions
