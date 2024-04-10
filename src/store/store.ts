import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { apiJobService } from "../services/apiJobService"
import { apiAuthService } from '../services/apiAuthService';

export const store = configureStore({
  reducer: {
    [apiJobService.reducerPath]: apiJobService.reducer,
    [apiAuthService.reducerPath]: apiAuthService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiJobService.middleware, apiAuthService.middleware),
});

setupListeners(store.dispatch);
