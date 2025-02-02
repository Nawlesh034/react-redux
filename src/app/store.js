import { configureStore } from '@reduxjs/toolkit'
import popupReducer from './slice.js'

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
})