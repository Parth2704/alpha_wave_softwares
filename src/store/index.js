import { configureStore } from '@reduxjs/toolkit';
import careerReducer from './slices/careerSlice';
import contactReducer from './slices/contactSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    career: careerReducer,
    contact: contactReducer,
    ui: uiReducer,
  },
});
