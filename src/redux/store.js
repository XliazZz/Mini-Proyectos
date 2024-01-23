import { configureStore } from '@reduxjs/toolkit';  
import libraryReducer from './Library/librarySlice';
import bazarSlice from './Bazar/bazarSlice';

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    bazar: bazarSlice,
  }
})