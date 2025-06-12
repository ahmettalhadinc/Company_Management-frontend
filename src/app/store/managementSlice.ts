import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  barStatus: boolean
}

const initialState: CounterState = {
  barStatus: false,
}

export const managementSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   toggleBarStatus: (state)=>{
    state.barStatus=!state.barStatus
   }
   
  },
})

// Action creators are generated for each case reducer function
export const { toggleBarStatus } = managementSlice.actions

export default managementSlice.reducer