import { configureStore } from '@reduxjs/toolkit'
import TabReducer from './reducer/tab'

export interface RootState {
  tab: ReturnType<typeof TabReducer>
}

const store = configureStore({
  reducer: {
    tab: TabReducer,
  },
})

export default store
