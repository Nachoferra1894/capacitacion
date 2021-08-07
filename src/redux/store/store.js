import { configureStore } from '@reduxjs/toolkit'
import civilizationReducer from '../slices/civilizations'

export const store = configureStore({
  reducer: {
    civilization: civilizationReducer,
  },
})