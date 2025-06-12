import { configureStore } from '@reduxjs/toolkit'
import managementSlice from './managementSlice'

export const store = configureStore({
  reducer: {
    managementSlice:managementSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch