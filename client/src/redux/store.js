import { configureStore } from '@reduxjs/toolkit';  
import libraryReducer from './Library/librarySlice';

export const store = configureStore({
  reducer: {
    library: libraryReducer,
  }
})