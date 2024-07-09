import { configureStore } from '@reduxjs/toolkit'
import CountSlice from './slices/CountSlice'

const store = configureStore({
  reducer: {
    Count: CountSlice,
  },
})

export default store
