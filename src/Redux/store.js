import { configureStore } from '@reduxjs/toolkit';
import professionalsReducer from './slices/ProfessionalsSlice/professionalsSlice'
export const store = configureStore({
  reducer: {
    professionals: professionalsReducer,

  },
});
