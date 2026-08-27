import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from '@features';
import { githubApi } from '@services';

import { getPreloadedState } from './preloadedState';

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        auth: authReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(githubApi.middleware),

    preloadedState: getPreloadedState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
