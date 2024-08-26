import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './locationSlice'; // Adjust the path to your slice

const store = configureStore({
  reducer: {
    locations: locationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
