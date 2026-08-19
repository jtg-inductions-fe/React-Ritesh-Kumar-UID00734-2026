import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@features/auth/authSlice';
import { githubApi } from '@services/github/githubApi';


export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
