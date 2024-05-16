import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import userReducer from './reducers/user';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
