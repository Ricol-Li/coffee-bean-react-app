import { createSlice } from '@reduxjs/toolkit'

interface TabState {
  isCollapsed: boolean
}

const tabSlice = createSlice({
  name: 'tab',
  initialState: { isCollapsed: false } as TabState,
  reducers: {
    collapseMenu(state) {
      state.isCollapsed = !state.isCollapsed
    },
  },
})

export const { collapseMenu } = tabSlice.actions

export default tabSlice.reducer
