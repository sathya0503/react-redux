// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root.reducer';
import { thunk } from 'redux-thunk';

let Store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware(thunk)
});

export { Store };