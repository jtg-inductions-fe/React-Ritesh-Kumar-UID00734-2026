import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { GitHubUserDetails } from '@services/github/github.service.types';

import type { AuthState } from './auth.types';

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

interface SetCredentialsPayload {
    user: GitHubUserDetails;
    token: string;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<SetCredentialsPayload>,
        ) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },

        clearCredentials: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
